import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Container from '@/components/ui/Container';
import PageHeader from '@/components/sections/PageHeader';
import CtaStrip from '@/components/sections/CtaStrip';
import ServiceCard, { SERVICE_GRID } from '@/components/ui/ServiceCard';
import { SERVICE_SLUGS, SERVICE_CODES } from '@/lib/services';
import { languageAlternates, type Locale } from '@/i18n';

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
      languages: languageAlternates('/services')
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
        <Container className="py-20 lg:py-28">
          <div className={SERVICE_GRID}>
            {SERVICE_SLUGS.map((slug) => (
              <ServiceCard
                key={slug}
                as="h2"
                href={`/${locale}/services/${slug}`}
                code={SERVICE_CODES[slug]}
                title={t(`services.items.${slug}.title`)}
                summary={t(`services.items.${slug}.short`)}
                readMore={t('cta.readMore')}
              />
            ))}
          </div>

          <p className="mt-10 max-w-xl font-mono text-xs uppercase tracking-widish text-graphite-soft">
            {'// '}
            {t('services.pricingNote')}
          </p>
        </Container>
      </section>

      <CtaStrip />
    </>
  );
}
