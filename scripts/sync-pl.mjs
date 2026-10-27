#!/usr/bin/env node
/* Regenerates messages/pl.json from docs/polish-copy.md.
   messages/en.json is the structural template: key order and array shapes
   are copied from it, so the two catalogues always line up. Usage: npm run sync:pl */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const MD = path.join(root, 'docs', 'polish-copy.md');
const EN = path.join(root, 'messages', 'en.json');
const PL = path.join(root, 'messages', 'pl.json');

const en = JSON.parse(fs.readFileSync(EN, 'utf8'));
const lines = fs.readFileSync(MD, 'utf8').split(/\r?\n/);

// Parse "### key" blocks followed by "EN:" / "PL:" lines.
const pl = new Map();
let key = null;
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const h = /^###\s+(\S+)\s*$/.exec(line);
  if (h) {
    key = h[1];
    if (pl.has(key)) fail(`Duplicate entry for "${key}" (line ${i + 1}).`);
    pl.set(key, undefined);
    continue;
  }
  const p = /^PL:\s?(.*)$/.exec(line);
  if (p && key) {
    if (pl.get(key) !== undefined) fail(`Two PL lines for "${key}" (line ${i + 1}).`);
    pl.set(key, p[1].trim());
  }
}

// Walk the English catalogue and build the Polish one in the same shape.
const missing = [];
const empty = [];
const build = (node, prefix) => {
  if (Array.isArray(node)) return node.map((v, i) => build(v, `${prefix}.${i}`));
  if (node && typeof node === 'object') {
    const out = {};
    for (const k of Object.keys(node)) out[k] = build(node[k], prefix ? `${prefix}.${k}` : k);
    return out;
  }
  if (!pl.has(prefix)) {
    missing.push(prefix);
    return node;
  }
  const v = pl.get(prefix);
  if (v === undefined || v === '') empty.push(prefix);
  return v ?? node;
};
const result = build(en, '');

const known = new Set();
const collect = (node, prefix) => {
  if (Array.isArray(node)) node.forEach((v, i) => collect(v, `${prefix}.${i}`));
  else if (node && typeof node === 'object')
    for (const k of Object.keys(node)) collect(node[k], prefix ? `${prefix}.${k}` : k);
  else known.add(prefix);
};
collect(en, '');
const extra = [...pl.keys()].filter((k) => !known.has(k));

// Placeholders such as {minutes} must survive translation.
const placeholderMismatch = [];
for (const k of known) {
  const enVal = k.split('.').reduce((o, seg) => o?.[seg], en);
  const plVal = pl.get(k);
  if (typeof enVal !== 'string' || typeof plVal !== 'string') continue;
  const ph = (s) => (s.match(/\{[a-zA-Z0-9_]+\}/g) ?? []).sort().join(',');
  if (ph(enVal) !== ph(plVal)) placeholderMismatch.push(k);
}

const problems = [];
if (missing.length) problems.push(`Missing from docs/polish-copy.md:\n  ${missing.join('\n  ')}`);
if (extra.length)
  problems.push(`Unknown keys in docs/polish-copy.md (not in en.json):\n  ${extra.join('\n  ')}`);
if (empty.length) problems.push(`Empty PL value:\n  ${empty.join('\n  ')}`);
if (placeholderMismatch.length)
  problems.push(
    `Placeholder mismatch ({...} differs from EN):\n  ${placeholderMismatch.join('\n  ')}`
  );
if (problems.length) fail(problems.join('\n\n'));

fs.writeFileSync(PL, JSON.stringify(result, null, 2) + '\n');
console.log(`messages/pl.json written: ${known.size} strings from docs/polish-copy.md`);

function fail(msg) {
  console.error(`sync-pl: ${msg}`);
  process.exit(1);
}
