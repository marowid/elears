import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import type { Locale } from '@/i18n';

export type InsightFrontmatter = {
  title: string;
  date: string;
  excerpt: string;
  tag: string;
  author?: string;
  draft?: boolean;
};

export type Insight = InsightFrontmatter & {
  slug: string;
  locale: Locale;
  body: string;
  readingMinutes: number;
};

const CONTENT_ROOT = path.join(process.cwd(), 'content', 'insights');

const wordsPerMinute = 220;

function estimateReadingTime(body: string): number {
  const words = body.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / wordsPerMinute));
}

export async function listInsightFiles(locale: Locale): Promise<string[]> {
  const dir = path.join(CONTENT_ROOT, locale);
  try {
    const entries = await fs.readdir(dir);
    return entries.filter((e) => e.endsWith('.mdx'));
  } catch {
    return [];
  }
}

export async function getAllInsights(locale: Locale): Promise<Insight[]> {
  const files = await listInsightFiles(locale);
  const items = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.mdx$/, '');
      return getInsight(locale, slug);
    })
  );
  return items
    .filter((i): i is Insight => Boolean(i))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getInsight(locale: Locale, slug: string): Promise<Insight | null> {
  const file = path.join(CONTENT_ROOT, locale, `${slug}.mdx`);
  try {
    const raw = await fs.readFile(file, 'utf8');
    const { data, content } = matter(raw);
    const fm = data as InsightFrontmatter;
    return {
      slug,
      locale,
      body: content,
      readingMinutes: estimateReadingTime(content),
      title: fm.title,
      date: fm.date,
      excerpt: fm.excerpt,
      tag: fm.tag,
      author: fm.author,
      draft: fm.draft ?? false
    };
  } catch {
    return null;
  }
}

export function formatInsightDate(iso: string, locale: Locale): string {
  const d = new Date(iso);
  return new Intl.DateTimeFormat(locale === 'pl' ? 'pl-PL' : 'en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }).format(d);
}
