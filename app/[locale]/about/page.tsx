import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Container from '@/components/ui/Container';
import PageHeader from '@/components/sections/PageHeader';
import CtaStrip from '@/components/sections/CtaStrip';
import { LEADERSHIP, type LeadershipKey } from '@/lib/leadership';
import logo from '@/public/logo.svg';
import { languageAlternates, type  Locale } from '@/i18n';

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

export default async function AboutPage({ params: { locale } }: { params: { locale: Locale } }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale });
  const ethics = t.raw('about.ethicsBullets') as string[];
  const registrations = t.raw('about.registrations') as string[];
  const leadership = t.raw('about.leadership') as Record<LeadershipKey, { role: string; bio: string }>;

  return (
    <>
      <PageHeader eyebrow={t('about.eyebrow')} title={t('about.title')} />

      <section className="bg-ink">
        <Container className="grid grid-cols-1 gap-12 py-16 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-8">
            <h2 className="font-serif text-2xl text-ivory lg:text-3xl">{t('about.whoTitle')}</h2>
            <div className="mt-6 max-w-prose space-y-5 text-graphite">
              <p>{t('about.whoBody1')}</p>
              <p>{t('about.whoBody2')}</p>
            </div>
          </div>
          <aside className="lg:col-span-4">
            <div className="brackets border border-rule/40 p-6 font-mono text-xs uppercase tracking-widish text-graphite-soft">
              <p className="eyebrow text-graphite-soft">{'// HQ'}</p>
              <p className="mt-3 text-ivory normal-case tracking-normal font-sans text-sm">
                Wrocław, Polska
              </p>
              <p className="mt-1 text-ivory normal-case tracking-normal font-sans text-sm">
                51.1079° N · 17.0385° E
              </p>
            </div>
          </aside>
        </Container>
      </section>

      <section className="border-y border-rule/30 bg-surface/60">
        <Container className="grid grid-cols-1 items-center gap-8 py-12 sm:grid-cols-[auto_1fr] lg:gap-12 lg:py-16">
          <figure className="w-36 sm:w-44">
            <div className="brackets relative bg-ink p-4">
              <div className="relative aspect-[1685/2048] w-full">
                <Image
                  src={logo}
                  alt="ELEARS — heraldic eagle and Lisowczycy wordmark"
                  fill
                  sizes="176px"
                  className="object-contain"
                />
              </div>
            </div>
            <figcaption className="eyebrow mt-3 text-center text-graphite-soft">
              <span className="text-accent">▍</span> Chorągiew elearska
            </figcaption>
          </figure>
          <div>
            <p className="eyebrow text-graphite-soft">Lisowczycy · 1615–1635</p>
            <h2 className="mt-3 font-serif text-2xl text-ivory lg:text-3xl">
              {t('about.heritageTitle')}
            </h2>
            <p className="mt-4 max-w-prose font-serif text-lg leading-relaxed text-graphite">
              {t('about.heritageBody')}
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-ink">
        <Container className="py-16 lg:py-20">
          <h2 className="font-serif text-2xl text-ivory lg:text-3xl">
            {t('about.leadershipTitle')}
          </h2>

          <ul className="mt-10 grid grid-cols-1 gap-px overflow-hidden border border-rule/30 bg-rule/30 md:grid-cols-2">
            {LEADERSHIP.map((person, i) => {
              const { role, bio } = leadership[person.key];
              return (
                <li key={person.key} className="flex flex-col gap-6 bg-ink p-8 sm:flex-row">
                  {/* TODO:leadership-photo — set `photo` in lib/leadership.ts */}
                  {person.photo ? (
                    <div className="brackets relative aspect-[4/5] w-32 shrink-0 overflow-hidden border border-rule/40 bg-surface">
                      <Image
                        src={person.photo}
                        alt={`${person.name}, ${role}`}
                        fill
                        sizes="128px"
                        className="object-cover contrast-125 grayscale"
                      />
                    </div>
                  ) : (
                    <PhotoPlaceholder label={t('about.leadership.photoPending')} />
                  )}
                  <div className="flex flex-1 flex-col gap-3">
                    <p className="eyebrow text-accent">{String(i + 1).padStart(2, '0')}</p>
                    <h3 className="font-serif text-2xl text-ivory">{person.name}</h3>
                    <p className="font-mono text-xs uppercase tracking-widish text-signal">{role}</p>
                    {bio && <p className="text-sm text-graphite">{bio}</p>}
                    <div className="mt-auto border-t border-rule/30 pt-4">
                      <p className="eyebrow text-graphite-soft">{t('about.leadership.companiesLabel')}</p>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {person.companies.map((company) => (
                          <li
                            key={company}
                            className="border border-rule/40 px-2 py-1 font-mono text-[11px] uppercase tracking-widish text-ivory-dim"
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

          <p className="mt-6 max-w-prose text-sm text-graphite-soft">{t('about.leadershipNote')}</p>
        </Container>
      </section>

      <section className="border-t border-rule/30 bg-ink">
        <Container className="grid grid-cols-1 gap-12 py-16 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-2xl text-ivory lg:text-3xl">{t('about.ethicsTitle')}</h2>
          </div>
          <ul className="space-y-4 lg:col-span-7">
            {ethics.map((line, i) => (
              <li key={i} className="flex gap-4 border-b border-rule/30 pb-4 text-graphite">
                <span aria-hidden="true" className="font-mono text-xs uppercase tracking-widish text-accent">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-rule/30 bg-surface/60">
        <Container className="py-16 lg:py-20">
          <h2 className="font-serif text-2xl text-ivory lg:text-3xl">
            {t('about.registrationsTitle')}
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-px overflow-hidden border border-rule/30 bg-rule/30 sm:grid-cols-3">
            {registrations.map((line) => (
              <li
                key={line}
                className="bg-ink p-6 font-mono text-xs uppercase tracking-widish text-graphite-soft"
              >
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

function PhotoPlaceholder({ label }: { label: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className="brackets relative flex aspect-[4/5] w-32 shrink-0 items-end justify-center overflow-hidden border border-rule/40 bg-surface"
    >
      <svg viewBox="0 0 80 100" aria-hidden="true" className="h-4/5 w-4/5 fill-rule">
        <circle cx="40" cy="34" r="17" />
        <path d="M6 100c0-21 15-36 34-36s34 15 34 36z" />
      </svg>
      <span className="eyebrow absolute left-2 top-2 text-[9px] text-graphite-soft">{label}</span>
    </div>
  );
}
