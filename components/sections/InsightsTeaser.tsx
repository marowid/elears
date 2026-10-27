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
    <section className="border-t border-line">
      <Container className="py-16 lg:py-24">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Eyebrow>{t('home.insightsEyebrow')}</Eyebrow>
            <h2 className="mt-4 text-display-2 font-normal">{t('home.insightsTitle')}</h2>
          </div>
          <Link href={`/${locale}/insights`} className="link-mono text-ink">
            {t('cta.viewAll')} <span aria-hidden="true">→</span>
          </Link>
        </div>

        <ul className="rule-list mt-12">
          {items.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/${locale}/insights/${post.slug}`}
                className="group grid grid-cols-1 gap-4 py-7 lg:grid-cols-12 lg:items-baseline"
              >
                <div className="flex items-baseline gap-3 lg:col-span-3">
                  <span className="eyebrow text-mute">{formatInsightDate(post.date, locale)}</span>
                  <span className="eyebrow text-accent">{post.tag}</span>
                </div>
                <div className="lg:col-span-9">
                  <h3 className="text-display-3 font-normal group-hover:text-signal">
                    {post.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-[15px] text-ink-2">{post.excerpt}</p>
                  <p className="eyebrow mt-3 text-mute">
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
