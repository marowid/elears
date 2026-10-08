import type { MetadataRoute } from 'next';
import { locales } from '@/i18n';
import { SERVICE_SLUGS } from '@/lib/services';
import { getAllInsights } from '@/lib/insights';
import { FEATURES } from '@/lib/features';

const SITE = 'https://elears.com';
const STATIC_PATHS = [
  '',
  '/services',
  '/about',
  ...(FEATURES.insights ? ['/insights'] : []),
  '/contact',
  '/legal/privacy',
  '/legal/terms',
  '/legal/cookies'
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of STATIC_PATHS) {
      entries.push({
        url: `${SITE}/${locale}${path}`,
        lastModified: now,
        changeFrequency: path === '' ? 'monthly' : 'yearly',
        priority: path === '' ? 1 : 0.7
      });
    }
    for (const slug of SERVICE_SLUGS) {
      entries.push({
        url: `${SITE}/${locale}/services/${slug}`,
        lastModified: now,
        changeFrequency: 'yearly',
        priority: 0.6
      });
    }
    const posts = FEATURES.insights ? await getAllInsights(locale) : [];
    for (const post of posts) {
      entries.push({
        url: `${SITE}/${locale}/insights/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly',
        priority: 0.5
      });
    }
  }

  return entries;
}
