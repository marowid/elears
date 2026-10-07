import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import Container from '@/components/ui/Container';
import Eyebrow from '@/components/ui/Eyebrow';
import { getAllInsights, formatInsightDate } from '@/lib/insights';
import type { Locale } from '@/i18n';

export default async function InsightsTeaser({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale });
  const all = await getAllInsights(locale);
  const items = all.slice(0, 3);

  if (items.length === 0) return null;

  return (
    <section className="bg-navy">
      <Container className="py-20 lg:py-28">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Eyebrow>{t('home.insightsEyebrow')}</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-ivory lg:text-4xl">
              {t('home.insightsTitle')}
            </h2>
          </div>
          <Link
            href={`/${locale}/insights`}
            className="eyebrow border-b border-crimson text-crimson hover:border-cyan hover:text-cyan"
          >
            {t('cta.viewAll')} →
          </Link>
        </div>

        <ul className="mt-12 divide-y divide-rule/30 border-y border-rule/30">
          {items.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/${locale}/insights/${post.slug}`}
                className="grid grid-cols-1 gap-6 py-8 lg:grid-cols-12 lg:items-baseline"
              >
                <div className="flex items-baseline gap-3 lg:col-span-3">
                  <span className="eyebrow text-graphite-soft">
                    {formatInsightDate(post.date, locale)}
                  </span>
                  <span className="eyebrow text-crimson">{post.tag}</span>
                </div>
                <div className="lg:col-span-9">
                  <h3 className="font-serif text-xl text-ivory hover:text-cyan lg:text-2xl">
                    {post.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm text-graphite">{post.excerpt}</p>
                  <p className="mt-2 text-xs font-mono uppercase tracking-widish text-graphite-soft">
                    {t('insights.readingTime', { minutes: post.readingMinutes })}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
