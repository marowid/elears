import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Container from '@/components/ui/Container';
import PageHeader from '@/components/sections/PageHeader';
import type { Locale } from '@/i18n';

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
      languages: { pl: '/pl/contact', en: '/en/contact' }
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

      <section className="bg-navy">
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
                    className="font-mono text-lg text-ivory hover:text-crimson"
                  >
                    {c.email}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <h2 className="eyebrow text-graphite-soft">{t('contact.office')}</h2>
              <p className="mt-3 font-serif text-xl text-ivory">{t('contact.officeBody')}</p>
              {/* TODO:contact-detail — replace with real street address, then update static map below */}
              <div className="mt-6 brackets border border-rule/40 bg-navy-soft/80 p-6">
                <svg
                  viewBox="0 0 600 320"
                  role="img"
                  aria-label="Wrocław, Poland — schematic city outline"
                  className="h-auto w-full text-ivory/40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <rect x="0" y="0" width="600" height="320" fill="none" />
                  {/* River Oder — abstract flow */}
                  <path
                    d="M20 220 Q120 180 200 200 T380 180 Q480 170 580 200"
                    stroke="#34F08D"
                    strokeWidth="1.5"
                    opacity="0.85"
                  />
                  {/* Schematic streets */}
                  <path d="M40 60 L560 60" />
                  <path d="M40 100 L560 100" />
                  <path d="M40 140 L560 140" />
                  <path d="M40 260 L560 260" />
                  <path d="M120 20 L120 300" />
                  <path d="M220 20 L220 300" />
                  <path d="M320 20 L320 300" />
                  <path d="M420 20 L420 300" />
                  <path d="M520 20 L520 300" />
                  {/* HQ marker */}
                  <g transform="translate(300 160)">
                    <circle r="8" fill="#FF6A1A" />
                    <circle r="14" fill="none" stroke="#FF6A1A" strokeWidth="1.5" />
                    <text
                      x="20"
                      y="6"
                      fontFamily="JetBrains Mono, monospace"
                      fontSize="11"
                      fill="#F5F7FA"
                      stroke="none"
                    >
                      WRO · HQ
                    </text>
                  </g>
                </svg>
              </div>
            </div>

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
