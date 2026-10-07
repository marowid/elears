import type { Metadata } from 'next';
import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Container from '@/components/ui/Container';
import PageHeader from '@/components/sections/PageHeader';
import CtaStrip from '@/components/sections/CtaStrip';
import { getAllInsights, formatInsightDate } from '@/lib/insights';
import type { Locale } from '@/i18n';

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'insights' });
  return {
    title: t('title'),
    description: t('lead'),
    alternates: {
      canonical: `/${locale}/insights`,
      languages: { pl: '/pl/insights', en: '/en/insights' }
    }
  };
}

export default async function InsightsIndex({
  params: { locale }
}: {
  params: { locale: Locale };
}) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale });
  const posts = await getAllInsights(locale);

  return (
    <>
      <PageHeader
        eyebrow={t('insights.eyebrow')}
        title={t('insights.title')}
        lead={t('insights.lead')}
      />

      <section className="bg-navy">
        <Container className="py-12 lg:py-16">
          <ul className="divide-y divide-rule/30 border-y border-rule/30">
            {posts.map((post) => (
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
                    {post.draft ? (
                      <span className="eyebrow mr-3 inline-block border border-crimson px-2 py-1 text-crimson">
                        DRAFT
                      </span>
                    ) : null}
                    <h2 className="inline font-serif text-xl text-ivory hover:text-cyan lg:text-2xl">
                      {post.title}
                    </h2>
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

      <CtaStrip />
    </>
  );
}
