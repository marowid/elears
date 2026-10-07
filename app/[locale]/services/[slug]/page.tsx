import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Container from '@/components/ui/Container';
import PageHeader from '@/components/sections/PageHeader';
import CtaStrip from '@/components/sections/CtaStrip';
import Button from '@/components/ui/Button';
import { SERVICE_SLUGS, SERVICE_CODES, isServiceSlug, type ServiceSlug } from '@/lib/services';
import { locales, type Locale } from '@/i18n';

type Params = { locale: Locale; slug: string };

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    SERVICE_SLUGS.map((slug) => ({ locale, slug }))
  );
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
      languages: { pl: `/pl/services/${slug}`, en: `/en/services/${slug}` }
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

  const others = SERVICE_SLUGS.filter((s) => s !== slug).slice(0, 3);

  return (
    <>
      <PageHeader
        eyebrow={`${SERVICE_CODES[slug]} · ${t('services.indexEyebrow')}`}
        title={t(`${ns}.title`)}
      />

      <section className="bg-ink">
        <Container className="grid grid-cols-1 gap-12 py-16 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-8">
            <p className="max-w-prose font-serif text-xl leading-relaxed text-graphite">
              {t(`${ns}.lead`)}
            </p>

            <div className="mt-12">
              <h2 className="eyebrow text-graphite-soft">{t('services.typicalEngagements')}</h2>
              <ul className="mt-4 divide-y divide-rule/30 border-y border-rule/30">
                {engagements.map((line, i) => (
                  <li key={i} className="flex gap-4 py-4">
                    <span className="font-mono text-xs uppercase tracking-widish text-graphite-soft">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-graphite">{line}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12">
              <h2 className="eyebrow text-graphite-soft">{t('services.howWeWork')}</h2>
              <ol className="mt-4 grid grid-cols-1 gap-px overflow-hidden border border-rule/30 bg-rule/30 sm:grid-cols-3">
                {(
                  [
                    { label: t('services.stepScoping'), body: t(`${ns}.scoping`) },
                    { label: t('services.stepDelivery'), body: t(`${ns}.delivery`) },
                    { label: t('services.stepHandover'), body: t(`${ns}.handover`) }
                  ] as const
                ).map((step, i) => (
                  <li key={i} className="bg-ink p-6">
                    <p className="eyebrow text-accent">
                      {String(i + 1).padStart(2, '0')} / {step.label}
                    </p>
                    <p className="mt-3 text-sm text-graphite">{step.body}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-12">
              <h2 className="eyebrow text-graphite-soft">{t('services.deliverables')}</h2>
              <ul className="mt-4 space-y-3">
                {deliverables.map((line, i) => (
                  <li key={i} className="flex gap-3 text-graphite">
                    <span aria-hidden="true" className="text-accent">
                      ▍
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12">
              <Button href={`/${locale}/contact`}>{t('cta.discussMandate')}</Button>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="brackets sticky top-24 border border-rule/40 p-6">
              <p className="eyebrow text-graphite-soft">{'// Service brief'}</p>
              <dl className="mt-4 space-y-3 font-mono text-xs uppercase tracking-widish text-graphite-soft">
                <div className="flex justify-between gap-4">
                  <dt>Code</dt>
                  <dd className="text-ivory">{SERVICE_CODES[slug]}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>Pricing</dt>
                  <dd className="text-right text-ivory">On request</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>Delivery</dt>
                  <dd className="text-ivory">EU sovereign</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>Languages</dt>
                  <dd className="text-ivory">PL · RU · UK · DE · EN</dd>
                </div>
              </dl>
              <hr className="my-6 border-rule/40" />
              <p className="eyebrow text-graphite-soft">{'// Other services'}</p>
              <ul className="mt-3 space-y-2 text-sm">
                {others.map((s) => (
                  <li key={s}>
                    <Link
                      href={`/${locale}/services/${s}`}
                      className="text-ivory hover:text-signal"
                    >
                      {t(`services.items.${s}.title`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </Container>
      </section>

      <CtaStrip />
    </>
  );
}
