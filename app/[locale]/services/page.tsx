import type { Metadata } from 'next';
import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Container from '@/components/ui/Container';
import PageHeader from '@/components/sections/PageHeader';
import CtaStrip from '@/components/sections/CtaStrip';
import { SERVICE_SLUGS, SERVICE_CODES } from '@/lib/services';
import type { Locale } from '@/i18n';

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'services' });
  return {
    title: t('indexTitle'),
    description: t('indexLead'),
    alternates: {
      canonical: `/${locale}/services`,
      languages: { pl: '/pl/services', en: '/en/services' }
    }
  };
}

export default async function ServicesIndex({
  params: { locale }
}: {
  params: { locale: Locale };
}) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale });

  return (
    <>
      <PageHeader
        eyebrow={t('services.indexEyebrow')}
        title={t('services.indexTitle')}
        lead={t('services.indexLead')}
      />

      <section className="bg-ink">
        <Container className="py-16 lg:py-20">
          <ul className="grid grid-cols-1 gap-px overflow-hidden border border-rule/30 bg-rule/30 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_SLUGS.map((slug) => (
              <li key={slug} className="bg-ink">
                <Link
                  href={`/${locale}/services/${slug}`}
                  className="group flex h-full flex-col gap-4 p-8 hover:bg-surface/60"
                >
                  <div className="flex items-center justify-between">
                    <span className="eyebrow text-accent">{SERVICE_CODES[slug]}</span>
                    <span aria-hidden="true" className="font-mono text-graphite-soft">
                      →
                    </span>
                  </div>
                  <h2 className="font-serif text-xl text-ivory group-hover:text-signal">
                    {t(`services.items.${slug}.title`)}
                  </h2>
                  <p className="text-sm text-graphite">{t(`services.items.${slug}.short`)}</p>
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-10 max-w-xl font-mono text-xs uppercase tracking-widish text-graphite-soft">
            {'// '}{t('services.pricingNote')}
          </p>
        </Container>
      </section>

      <CtaStrip />
    </>
  );
}
