# Content TODO — pre-launch checklist

This file is the single, grep-able punch list of every placeholder, draft, or "confirm before launch" item across the site. Each item marks a code location with a `TODO:` comment so you can find it in one pass.

## Pre-launch checklist (founder)

- [ ] Replace all `contact@`, `press@`, `careers@` email placeholders.
- [ ] Replace Wrocław office address placeholder with the real street address.
- [ ] Secure-contact block is hidden (`FEATURES.secureContact = false`). Add the real Signal username and PGP fingerprint before re-enabling.
- [ ] Replace KRS / NIP / REGON / certification placeholders on About page.
- [ ] Add leadership portraits: put files in `public/team/` and set `photo` in `lib/leadership.ts` (shown greyscale automatically; `TODO:leadership-photo`).
- [ ] Have a Polish-qualified lawyer review the three legal pages and remove the DRAFT banners.
- [ ] Insights is hidden (`FEATURES.insights = false` in `lib/features.ts`). Before re-enabling, replace or delete the placeholder posts.
- [ ] Confirm Plausible domain and add the production `data-domain` value.
- [ ] Verify `hreflang` tags resolve correctly on every page.
- [ ] Run final Lighthouse and axe sweeps on the production URL.
- [ ] Polish is hidden (`FEATURES.polish = false` in `lib/features.ts`); the site is English-only and /pl/* redirects to /en/*. Review `messages/pl.json` before re-enabling.

---

## Inventory of placeholders

### Contact details
- `app/[locale]/contact/page.tsx` — `contact@elears.com`, `press@elears.com`, `careers@elears.com` (`TODO:contact-detail`)
- `app/[locale]/contact/page.tsx` — Office line (currently city only: "Wrocław, Poland"). The Europe map (`components/sections/OfficeMap.tsx`) pins Wrocław city centre; no change needed once the street address is known.
- `app/[locale]/contact/page.tsx` — Signal username and PGP fingerprint (`TODO:secure-contact`).
- `components/layout/Footer.tsx` — `careers@elears.com` link (`TODO:contact-detail`).
- `app/[locale]/legal/privacy/page.tsx` — controller contact `contact@elears.com` (`TODO:contact-detail`).
- **Decide the email domain:** the brief (`website.md`) specifies `@elears.pl`, the code uses `@elears.com` everywhere.

### About page placeholders
- `lib/leadership.ts` — leadership names and previous companies.
- `messages/en.json`, `messages/pl.json` — `about.leadership.<key>.role` / `.bio`; bios for all four leaders are in place.
- `messages/*.json` — `about.leadershipNote` ("names and biographies are confirmed at the point of mandate") may no longer fit now that names are published.
- `app/[locale]/about/page.tsx` — registration items (`TODO:registrations`) — security clearance (obtained), ISO 27001 (in progress), SOC 2 (in progress). KRS / NIP / REGON were removed from this section; add them back once registered.
- `messages/en.json`, `messages/pl.json` — `about.registrations` strings rendered by the item above.

### Legal page placeholders
- `app/[locale]/legal/privacy/page.tsx` — "registration details — TBD" / "dane rejestrowe — TBD" in the data-controller paragraph (`TODO:registrations`).

### Plausible analytics
- `app/[locale]/layout.tsx` — `PLAUSIBLE_DOMAIN` constant (`TODO:plausible`). Confirm the production domain registered with Plausible.

### Insights — drafts
All three seed posts per locale carry `draft: true` in frontmatter and a visible "DRAFT" banner. Decide before launch:
- `content/insights/en/cee-sanctions-second-order.mdx`
- `content/insights/en/ransomware-language-asymmetry.mdx`
- `content/insights/en/asset-tracing-cee-recoveries.mdx`
- `content/insights/pl/sankcje-cee-skutki-drugiego-rzedu.mdx`
- `content/insights/pl/ransomware-asymetria-jezykowa.mdx`
- `content/insights/pl/sledzenie-aktywow-cee.mdx`

### Legal — DRAFT banners
- `app/[locale]/legal/privacy/page.tsx`
- `app/[locale]/legal/terms/page.tsx`
- `app/[locale]/legal/cookies/page.tsx`

Each renders a "DRAFT — review by Polish-qualified counsel before launch" banner via `components/sections/LegalShell.tsx`. Remove the banner once counsel signs off.

### Fonts (sovereignty signal)
Self-host the requested typefaces in `public/fonts/` and declare them via `@font-face` inside `app/globals.css`. Until the WOFF2 files are added, the design falls back to a system stack (see `tailwind.config.ts`). Recommended:
- Headings: Source Serif 4 (or Spectral) — 400, 600, 700.
- Body: Inter (or IBM Plex Sans) — 400, 500, 600.
- Mono accents: JetBrains Mono (or IBM Plex Mono) — 500.

Remove any reference to the Google Fonts CDN — fonts must ship from the same origin.

### Static assets to add
- `public/img/` — open-graph rasterised image is generated at build by `app/opengraph-image.tsx` (Edge runtime). No manual PNG required.
- `public/favicon.svg` — minimal sovereign mark; replace with finalised logo when available.

### Out of scope (v1)
- Authenticated client portal.
- Newsletter signup.
- Real contact form with backend handling.
- Public platform / product login.
- Careers ATS integration (link to `careers@` only).
- Animations beyond subtle fades.

### Quick grep
```
grep -rn "TODO:" app components content public docs
```
