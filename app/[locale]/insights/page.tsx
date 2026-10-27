import type { Metadata } from 'next';
import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Container from '@/components/ui/Container';
import PageHeader from '@/components/sections/PageHeader';
import CtaStrip from '@/components/sections/CtaStrip';
import { notFound } from 'next/navigation';
import { getAllInsights, formatInsightDate } from '@/lib/insights';
import { FEATURES } from '@/lib/features';
import { languageAlternates, type Locale } from '@/i18n';

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
      languages: languageAlternates('/insights')
    }
  };
}

export default async function InsightsIndex({
  params: { locale }
}: {
  params: { locale: Locale };
}) {
  if (!FEATURES.insights) notFound();
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

      <section>
        <Container className="py-12 lg:py-16">
          <ul className="rule-list">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/${locale}/insights/${post.slug}`}
                  className="group grid grid-cols-1 gap-4 py-7 lg:grid-cols-12 lg:items-baseline"
                >
                  <div className="flex items-baseline gap-3 lg:col-span-3">
                    <span className="eyebrow text-mute">
                      {formatInsightDate(post.date, locale)}
                    </span>
                    <span className="eyebrow text-accent">{post.tag}</span>
                  </div>
                  <div className="lg:col-span-9">
                    {post.draft ? (
                      <span className="eyebrow mr-3 inline-block border border-accent px-2 py-1 text-accent">
                        DRAFT
                      </span>
                    ) : null}
                    <h2 className="inline text-display-3 font-normal group-hover:text-signal">
                      {post.title}
                    </h2>
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

      <CtaStrip />
    </>
  );
}
