import { getAllInsights } from '@/lib/insights';
import { locales, type Locale } from '@/i18n';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const SITE = 'https://elears.com';

function escape(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET(_req: Request, { params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  const posts = await getAllInsights(locale);

  const items = posts
    .map((post) => {
      const url = `${SITE}/${locale}/insights/${post.slug}`;
      return `    <item>
      <title>${escape(post.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${escape(post.excerpt)}</description>
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Elears — Insights (${locale.toUpperCase()})</title>
    <link>${SITE}/${locale}/insights</link>
    <description>Analysis from the firm.</description>
    <language>${locale}</language>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    }
  });
}
