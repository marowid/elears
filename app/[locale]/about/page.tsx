import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Container from '@/components/ui/Container';
import Eyebrow from '@/components/ui/Eyebrow';
import PageHeader from '@/components/sections/PageHeader';
import CtaStrip from '@/components/sections/CtaStrip';
import RedactedPortrait from '@/components/ui/RedactedPortrait';
import { LEADERSHIP, type LeadershipKey } from '@/lib/leadership';
import logo from '@/public/logo.svg';
import { languageAlternates, type Locale } from '@/i18n';

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'about' });
  return {
    title: t('title'),
    description: t('whoBody1'),
    alternates: { canonical: `/${locale}/about`, languages: languageAlternates('/about') }
  };
}

const h2 = 'text-display-2 font-normal';

export default async function AboutPage({ params: { locale } }: { params: { locale: Locale } }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale });
  const ethics = t.raw('about.ethicsBullets') as string[];
  const registrations = t.raw('about.registrations') as string[];
  const leadership = t.raw('about.leadership') as Record<
    LeadershipKey,
    { role: string; bio: string }
  >;

  return (
    <>
      <PageHeader eyebrow={t('about.eyebrow')} title={t('about.title')} />

      {/* Who we are */}
      <section>
        <Container className="grid grid-cols-1 gap-12 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-8">
            <h2 className={h2}>{t('about.whoTitle')}</h2>
            <div className="mt-6 max-w-prose space-y-5 text-lead text-ink-2">
              <p>{t('about.whoBody1')}</p>
              <p>{t('about.whoBody2')}</p>
            </div>
          </div>
          <div className="lg:col-span-4">
            <dl className="bg-paper-2 p-6">
              <div className="border-b border-line-2 pb-3">
                <dt className="eyebrow text-mute">{t('home.coordinates.hqLabel')}</dt>
                <dd className="mt-2 text-base text-ink">{t('contact.officeBody')}</dd>
              </div>
              <div className="pt-3">
                <dt className="eyebrow text-mute">{t('home.coordinates.gpsLabel')}</dt>
                <dd className="mt-2 font-mono text-sm text-ink">
                  {t('home.coordinates.gpsValue')}
                </dd>
              </div>
            </dl>
          </div>
        </Container>
      </section>

      {/* Heritage */}
      <section className="border-t border-line">
        <Container className="py-16 lg:py-24">
          <div className="grid grid-cols-1 items-center gap-10 bg-tint px-6 py-10 sm:grid-cols-[auto_1fr] sm:px-10 lg:gap-14 lg:py-14">
            <figure className="w-40 sm:w-48">
              <div className="relative aspect-[1685/2048] w-full overflow-hidden bg-ink">
                <Image
                  src={logo}
                  alt="ELEARS — heraldic eagle and Lisowczycy wordmark"
                  fill
                  sizes="192px"
                  className="object-cover"
                />
              </div>
              <figcaption className="eyebrow mt-3 text-mute">
                {t('about.heritageCaption')}
              </figcaption>
            </figure>
            <div>
              <Eyebrow>Lisowczycy · 1615–1635</Eyebrow>
              <h2 className={`mt-3 ${h2}`}>{t('about.heritageTitle')}</h2>
              <p className="mt-5 max-w-prose text-lead text-ink-2">{t('about.heritageBody')}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Leadership */}
      <section className="border-t border-line">
        <Container className="py-16 lg:py-24">
          <h2 className={h2}>{t('about.leadershipTitle')}</h2>

          <ul className="mt-10 grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2">
            {LEADERSHIP.map((person, i) => {
              const { role, bio } = leadership[person.key];
              return (
                <li
                  key={person.key}
                  className="flex flex-col gap-6 border-t border-ink pt-6 sm:flex-row"
                >
                  {/* TODO:leadership-photo — set `photo` in lib/leadership.ts */}
                  {person.photo ? (
                    <div className="relative aspect-[4/5] w-32 shrink-0 self-start overflow-hidden bg-paper-2">
                      <Image
                        src={person.photo}
                        alt={`${person.name}, ${role}`}
                        fill
                        sizes="128px"
                        className="object-cover contrast-125 grayscale"
                      />
                    </div>
                  ) : (
                    <RedactedPortrait
                      label={t('about.leadership.photoWithheld')}
                      tag={t('about.leadership.redactedTag')}
                      fileNo={`${t('about.leadership.fileLabel')} ${String(i + 1).padStart(2, '0')}`}
                    />
                  )}
                  <div className="flex flex-1 flex-col">
                    <Eyebrow>{String(i + 1).padStart(2, '0')}</Eyebrow>
                    <h3 className="mt-3 text-display-3 font-normal">{person.name}</h3>
                    <p className="mt-1 text-[15px] text-ink-2">{role}</p>
                    {bio && <p className="mt-3 text-[15px] leading-relaxed text-ink-2">{bio}</p>}
                    <div className="mt-5 border-t border-line pt-4">
                      <p className="eyebrow text-mute">{t('about.leadership.companiesLabel')}</p>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {person.companies.map((company) => (
                          <li
                            key={company}
                            className="border border-line px-2 py-1 text-[13px] text-ink-2"
                          >
                            {company}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <p className="mt-8 max-w-prose text-[15px] text-mute">{t('about.leadershipNote')}</p>
        </Container>
      </section>

      {/* Ethics */}
      <section className="border-t border-line">
        <Container className="grid grid-cols-1 gap-10 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-5">
            <h2 className={h2}>{t('about.ethicsTitle')}</h2>
          </div>
          <ol className="rule-list lg:col-span-7">
            {ethics.map((line, i) => (
              <li key={i} className="flex gap-6 py-4">
                <span className="eyebrow pt-1 text-mute">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-[15px] leading-relaxed text-ink-2">{line}</span>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Registrations */}
      <section className="border-t border-line">
        <Container className="py-16 lg:py-24">
          <h2 className={h2}>{t('about.registrationsTitle')}</h2>
          <ul className="mt-8 grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-3">
            {registrations.map((line) => (
              <li key={line} className="border-t border-ink pt-4 text-[15px] text-ink-2">
                {/* TODO:registrations — replace with real numbers and certifications before launch */}
                {line}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaStrip />
    </>
  );
}
