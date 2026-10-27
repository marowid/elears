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

export async function generateMetadata({
  params: { locale, slug }
}: {
  params: Params;
}): Promise<Metadata> {
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

      <section>
        <Container className="py-10 lg:py-16">
          {post.draft ? (
            <div
              role="status"
              className="eyebrow mb-10 max-w-prose border-l-2 border-accent bg-paper-2 px-4 py-3 text-accent"
            >
              {t('insights.draftBanner')}
            </div>
          ) : null}

          <header className="eyebrow mb-10 flex max-w-prose flex-wrap items-baseline gap-4 border-b border-line pb-6 text-mute">
            <span>
              {t('insights.publishedOn')}: {formatInsightDate(post.date, locale)}
            </span>
            <span aria-hidden="true">·</span>
            <span>{t('insights.readingTime', { minutes: post.readingMinutes })}</span>
            {post.author ? (
              <>
                <span aria-hidden="true">·</span>
                <span>{t('insights.byAuthor', { author: post.author })}</span>
              </>
            ) : null}
          </header>

          <article className="prose-elears prose prose-sm max-w-prose lg:prose-lg">
            <MDXRemote source={post.body} />
          </article>
        </Container>
      </section>

      {more.length > 0 ? (
        <section className="border-t border-line">
          <Container className="py-16">
            <h2 className="text-display-2 font-normal">{t('insights.more')}</h2>
            <ul className="mt-8 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-3">
              {more.map((m) => (
                <li key={m.slug} className="border-t border-ink">
                  <Link
                    href={`/${locale}/insights/${m.slug}`}
                    className="group flex h-full flex-col gap-3 py-5"
                  >
                    <span className="eyebrow text-accent">{m.tag}</span>
                    <h3 className="text-lg font-medium leading-snug group-hover:text-signal">
                      {m.title}
                    </h3>
                    <span className="eyebrow text-mute">{formatInsightDate(m.date, locale)}</span>
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
