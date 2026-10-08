import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Container from '@/components/ui/Container';
import PageHeader from '@/components/sections/PageHeader';
import OfficeMap from '@/components/sections/OfficeMap';
import { FEATURES } from '@/lib/features';
import { languageAlternates, type  Locale } from '@/i18n';

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

      <section className="bg-ink">
        <Container className="grid grid-cols-1 gap-12 py-16 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-7">
            <ul className="divide-y divide-rule/30 border-y border-rule/30">
              {channels.map((c) => (
                <li
                  key={c.email}
                  className="flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:justify-between"
                >
                  <span className="eyebrow text-graphite-soft">{c.label}</span>
                  {/* TODO:contact-detail — confirm with founders before launch */}
                  <a
                    href={`mailto:${c.email}`}
                    className="font-mono text-lg text-ivory hover:text-signal"
                  >
                    {c.email}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <h2 className="eyebrow text-graphite-soft">{t('contact.office')}</h2>
              <p className="mt-3 font-serif text-xl text-ivory">{t('contact.officeBody')}</p>
              {/* TODO:contact-detail — add the street address once confirmed */}
              <div className="mt-6">
                <OfficeMap
                  label={t('contact.mapLabel')}
                  pinTitle={t('contact.mapPin')}
                  coords={t('home.coordinates.gpsValue')}
                  legendHome={t('contact.mapLegendHome')}
                  legendRegion={t('contact.mapLegendRegion')}
                />
              </div>
            </div>

            {FEATURES.secureContact && (
              <div className="mt-12">
                <h2 className="eyebrow text-graphite-soft">{t('contact.secureTitle')}</h2>
                <p className="mt-3 max-w-prose text-graphite">{t('contact.secureBody')}</p>
                <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="border border-rule/40 p-4">
                    <dt className="eyebrow text-graphite-soft">{t('contact.signal')}</dt>
                    {/* TODO:secure-contact — replace placeholder with real Signal username */}
                    <dd className="mt-2 font-mono text-sm text-ivory">@elears.signal · TBD</dd>
                  </div>
                  <div className="border border-rule/40 p-4">
                    <dt className="eyebrow text-graphite-soft">{t('contact.pgp')}</dt>
                    {/* TODO:secure-contact — replace placeholder with real PGP fingerprint */}
                    <dd className="mt-2 break-all font-mono text-sm text-ivory">
                      0000 0000 0000 0000 0000 0000 0000 0000 0000 TBD
                    </dd>
                  </div>
                </dl>
              </div>
            )}
          </div>

          <aside className="lg:col-span-5">
            <div className="brackets border border-rule/40 p-6">
              <p className="eyebrow text-graphite-soft">{'// '}{t('contact.responseTitle')}</p>
              <p className="mt-3 text-graphite">{t('contact.responseBody')}</p>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
