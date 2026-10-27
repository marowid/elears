import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Container from '@/components/ui/Container';
import Eyebrow from '@/components/ui/Eyebrow';
import PageHeader from '@/components/sections/PageHeader';
import OfficeMap from '@/components/sections/OfficeMap';
import { FEATURES } from '@/lib/features';
import { languageAlternates, type Locale } from '@/i18n';

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'contact' });
  return {
    title: t('title'),
    description: t('lead'),
    alternates: {
      canonical: `/${locale}/contact`,
      languages: languageAlternates('/contact')
    }
  };
}

export default async function ContactPage({ params: { locale } }: { params: { locale: Locale } }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale });

  const channels = [
    { label: t('contact.general'), email: 'contact@elears.com' },
    { label: t('contact.press'), email: 'press@elears.com' },
    { label: t('contact.careers'), email: 'careers@elears.com' }
  ];

  return (
    <>
      <PageHeader
        eyebrow={t('contact.eyebrow')}
        title={t('contact.title')}
        lead={t('contact.lead')}
      />

      <section>
        <Container className="grid grid-cols-1 gap-12 py-16 lg:grid-cols-12 lg:gap-16 lg:py-24">
          <div className="lg:col-span-5">
            <ul className="rule-list">
              {channels.map((c) => (
                <li key={c.email} className="py-5">
                  <span className="eyebrow text-mute">{c.label}</span>
                  {/* TODO:contact-detail — confirm with founders before launch */}
                  <a
                    href={`mailto:${c.email}`}
                    className="mt-2 block text-xl text-ink underline-offset-4 hover:text-signal hover:underline"
                  >
                    {c.email}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-10 bg-paper-2 p-6">
              <Eyebrow as="h2">{t('contact.responseTitle')}</Eyebrow>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-2">
                {t('contact.responseBody')}
              </p>
            </div>

            {FEATURES.secureContact && (
              <div className="mt-10">
                <Eyebrow as="h2">{t('contact.secureTitle')}</Eyebrow>
                <p className="mt-3 max-w-prose text-[15px] text-ink-2">{t('contact.secureBody')}</p>
                <dl className="mt-6 grid grid-cols-1 gap-4">
                  <div className="border border-line p-4">
                    <dt className="eyebrow text-mute">{t('contact.signal')}</dt>
                    {/* TODO:secure-contact — replace placeholder with real Signal username */}
                    <dd className="mt-2 font-mono text-sm text-ink">@elears.signal · TBD</dd>
                  </div>
                  <div className="border border-line p-4">
                    <dt className="eyebrow text-mute">{t('contact.pgp')}</dt>
                    {/* TODO:secure-contact — replace placeholder with real PGP fingerprint */}
                    <dd className="mt-2 break-words font-mono text-sm text-ink">
                      0000 0000 0000 0000 0000 0000 0000 0000 0000 TBD
                    </dd>
                  </div>
                </dl>
              </div>
            )}
          </div>

          <div className="lg:col-span-7">
            <Eyebrow as="h2">{t('contact.office')}</Eyebrow>
            <p className="mt-2 text-xl text-ink">{t('contact.officeBody')}</p>
            {/* TODO:contact-detail — add the street address once confirmed */}
            <div className="mt-6">
              <OfficeMap
                label={t('contact.mapLabel')}
                pinTitle={t('contact.mapPin')}
                coords={t('home.coordinates.gpsValue')}
                legendHome={t('contact.mapLegendHome')}
                legendRegion={t('contact.mapLegendRegion')}
                legendOps={t('contact.mapLegendOps')}
                legendOpsDetail={t('contact.mapLegendOpsDetail')}
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
