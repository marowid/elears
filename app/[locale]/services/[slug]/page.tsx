import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Container from '@/components/ui/Container';
import Eyebrow from '@/components/ui/Eyebrow';
import PageHeader from '@/components/sections/PageHeader';
import Button from '@/components/ui/Button';
import ServiceArt from '@/components/ui/illustrations/ServiceArt';
import { SERVICE_SLUGS, SERVICE_CODES, isServiceSlug, type ServiceSlug } from '@/lib/services';
import { languageAlternates, locales, type Locale } from '@/i18n';

type Params = { locale: Locale; slug: string };

export function generateStaticParams() {
  return locales.flatMap((locale) => SERVICE_SLUGS.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({
  params: { locale, slug }
}: {
  params: Params;
}): Promise<Metadata> {
  if (!isServiceSlug(slug)) return {};
  const t = await getTranslations({ locale, namespace: 'services.items' });
  const title = t(`${slug as ServiceSlug}.title`);
  const description = t(`${slug as ServiceSlug}.short`);
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/services/${slug}`,
      languages: languageAlternates(`/services/${slug}`)
    }
  };
}

export default async function ServiceDetail({ params: { locale, slug } }: { params: Params }) {
  if (!isServiceSlug(slug)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations({ locale });

  const ns = `services.items.${slug}` as const;
  const engagements = t.raw(`${ns}.engagements`) as string[];
  const deliverables = t.raw(`${ns}.deliverables`) as string[];
  const steps = [
    { label: t('services.stepScoping'), body: t(`${ns}.scoping`) },
    { label: t('services.stepDelivery'), body: t(`${ns}.delivery`) },
    { label: t('services.stepHandover'), body: t(`${ns}.handover`) }
  ] as const;

  const sectionTitle = 'text-display-3 font-normal';

  return (
    <>
      <PageHeader
        eyebrow={`${SERVICE_CODES[slug]} · ${t('services.indexEyebrow')}`}
        title={t(`${ns}.title`)}
        aside={<ServiceArt slug={slug} className="ml-auto max-w-[300px] text-ink" />}
      />

      <section>
        <Container className="grid grid-cols-1 gap-12 py-16 lg:grid-cols-12 lg:gap-16 lg:py-24">
          <div className="lg:col-span-8">
            <p className="max-w-prose text-lead text-ink">{t(`${ns}.lead`)}</p>

            <div className="mt-14">
              <h2 className={sectionTitle}>{t('services.typicalEngagements')}</h2>
              <ol className="rule-list mt-6">
                {engagements.map((item, i) => (
                  <li key={i} className="flex gap-6 py-4">
                    <span className="eyebrow pt-1 text-mute">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-[15px] leading-relaxed text-ink-2">{item}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-14">
              <h2 className={sectionTitle}>{t('services.howWeWork')}</h2>
              <ol className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-3">
                {steps.map((step, i) => (
                  <li key={i} className="border-t border-ink pt-5">
                    <Eyebrow>{String(i + 1).padStart(2, '0')}</Eyebrow>
                    <h3 className="mt-4 text-lg font-medium">{step.label}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{step.body}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-14">
              <h2 className={sectionTitle}>{t('services.deliverables')}</h2>
              <ul className="rule-list mt-6">
                {deliverables.map((item, i) => (
                  <li key={i} className="flex items-baseline justify-between gap-6 py-4">
                    <span className="text-[15px] leading-relaxed text-ink-2">{item}</span>
                    <span aria-hidden="true" className="text-mute">
                      →
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-14">
              <Button href={`/${locale}/contact`}>{t('cta.discussMandate')}</Button>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-24 bg-paper-2 p-6">
              <Eyebrow>{t('services.brief.title')}</Eyebrow>
              <dl className="mt-3">
                {(
                  [
                    [t('services.brief.code'), SERVICE_CODES[slug]],
                    [t('services.brief.pricing'), t('services.brief.pricingValue')],
                    [t('services.brief.delivery'), t('services.brief.deliveryValue')],
                    [t('home.coordinates.languagesLabel'), t('home.coordinates.languagesValue')]
                  ] as const
                ).map(([label, value]) => (
                  <div
                    key={label}
                    className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-t border-line-2 py-2.5 text-sm last:border-b"
                  >
                    <dt className="text-mute">{label}</dt>
                    <dd className="font-mono text-[13px] text-ink">{value}</dd>
                  </div>
                ))}
              </dl>

              <Eyebrow className="mt-8">{t('services.brief.others')}</Eyebrow>
              <ul className="mt-3">
                {SERVICE_SLUGS.map((s) => (
                  <li key={s} className="border-t border-line-2 last:border-b">
                    {s === slug ? (
                      <span
                        aria-current="page"
                        className="flex items-center justify-between py-2.5 text-sm font-medium text-ink"
                      >
                        {t(`services.items.${s}.title`)}
                        <span aria-hidden="true" className="eyebrow text-accent">
                          {SERVICE_CODES[s]}
                        </span>
                      </span>
                    ) : (
                      <Link
                        href={`/${locale}/services/${s}`}
                        className="flex items-center justify-between py-2.5 text-sm text-ink-2 hover:text-signal"
                      >
                        {t(`services.items.${s}.title`)}
                        <span aria-hidden="true">→</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
