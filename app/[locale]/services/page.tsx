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

      <section>
        <Container className="py-16 lg:py-24">
          <div className={SERVICE_GRID}>
            {SERVICE_SLUGS.map((slug) => (
              <ServiceCard
                key={slug}
                as="h2"
                slug={slug}
                href={`/${locale}/services/${slug}`}
                code={SERVICE_CODES[slug]}
                title={t(`services.items.${slug}.title`)}
                summary={t(`services.items.${slug}.short`)}
                readMore={t('cta.readMore')}
              />
            ))}
          </div>

          <p className="mt-14 max-w-xl text-[15px] text-mute">{t('services.pricingNote')}</p>
        </Container>
      </section>

      <CtaStrip />
    </>
  );
}
