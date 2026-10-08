import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Container from '@/components/ui/Container';
import PageHeader from '@/components/sections/PageHeader';
import CtaStrip from '@/components/sections/CtaStrip';
import { getAllInsights, getInsight, formatInsightDate, listInsightFiles } from '@/lib/insights';
import { locales, type Locale } from '@/i18n';
import { FEATURES } from '@/lib/features';

type Params = { locale: Locale; slug: string };

export async function generateStaticParams() {
  if (!FEATURES.insights) return [];
  const all = await Promise.all(
    locales.map(async (locale) => {
      const files = await listInsightFiles(locale);
      return files.map((file) => ({ locale, slug: file.replace(/\.mdx$/, '') }));
    })
  );
  return all.flat();
}

export async function generateMetadata({ params: { locale, slug } }: { params: Params }): Promise<Metadata> {
  const post = await getInsight(locale, slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/${locale}/insights/${slug}`
    },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date
    }
  };
}

export default async function InsightPostPage({ params: { locale, slug } }: { params: Params }) {
  if (!FEATURES.insights) notFound();
  setRequestLocale(locale);
  const post = await getInsight(locale, slug);
  if (!post) notFound();
  const t = await getTranslations({ locale });
  const all = await getAllInsights(locale);
  const more = all.filter((p) => p.slug !== slug).slice(0, 3);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    datePublished: post.date,
    description: post.excerpt,
    author: { '@type': 'Organization', name: 'ELEARS' },
    publisher: { '@type': 'Organization', name: 'ELEARS' }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <PageHeader eyebrow={`${t('insights.eyebrow')} · ${post.tag}`} title={post.title} />

      <section className="bg-ink">
        <Container className="py-10 lg:py-16">
          {post.draft ? (
            <div
              role="status"
              className="mb-10 border border-accent bg-forest/40 p-4 font-mono text-xs uppercase tracking-widish text-accent"
            >
              ⚠ {t('insights.draftBanner')}
            </div>
          ) : null}

          <header className="mb-10 flex flex-wrap items-baseline gap-4 border-b border-rule/30 pb-6 font-mono text-xs uppercase tracking-widish text-graphite-soft">
            <span>{t('insights.publishedOn')}: {formatInsightDate(post.date, locale)}</span>
            <span aria-hidden="true">·</span>
            <span>{t('insights.readingTime', { minutes: post.readingMinutes })}</span>
            {post.author ? (
              <>
                <span aria-hidden="true">·</span>
                <span>{t('insights.byAuthor', { author: post.author })}</span>
              </>
            ) : null}
          </header>

          <article className="prose prose-elears prose-sm max-w-prose lg:prose-lg">
            <MDXRemote source={post.body} />
          </article>
        </Container>
      </section>

      {more.length > 0 ? (
        <section className="border-t border-rule/30 bg-surface/60">
          <Container className="py-16">
            <h2 className="font-serif text-2xl text-ivory">{t('insights.more')}</h2>
            <ul className="mt-8 grid grid-cols-1 gap-px overflow-hidden border border-rule/30 bg-rule/30 sm:grid-cols-3">
              {more.map((m) => (
                <li key={m.slug} className="bg-ink">
                  <Link
                    href={`/${locale}/insights/${m.slug}`}
                    className="flex h-full flex-col gap-3 p-6 hover:bg-surface/80"
                  >
                    <span className="eyebrow text-accent">{m.tag}</span>
                    <h3 className="font-serif text-lg text-ivory">{m.title}</h3>
                    <span className="font-mono text-xs uppercase tracking-widish text-graphite-soft">
                      {formatInsightDate(m.date, locale)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      <CtaStrip />
    </>
  );
}
