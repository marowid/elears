import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Container from '@/components/ui/Container';
import PageHeader from '@/components/sections/PageHeader';
import CtaStrip from '@/components/sections/CtaStrip';
import logo from '@/public/logo.svg';
import type { Locale } from '@/i18n';

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'about' });
  return {
    title: t('title'),
    description: t('whoBody1'),
    alternates: { canonical: `/${locale}/about`, languages: { pl: '/pl/about', en: '/en/about' } }
  };
}

const LEADERSHIP_KEYS = ['ceo', 'intelligence', 'cyber', 'investigations', 'counsel'] as const;

export default async function AboutPage({ params: { locale } }: { params: { locale: Locale } }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale });
  const ethics = t.raw('about.ethicsBullets') as string[];
  const registrations = t.raw('about.registrations') as string[];

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
        <Container className="grid grid-cols-1 items-start gap-12 py-16 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-5">
            <p className="eyebrow text-graphite-soft">Lisowczycy · 1615–1635</p>
            <h2 className="mt-4 font-serif text-2xl text-ivory lg:text-3xl">
              {t('about.heritageTitle')}
            </h2>

            <figure className="mt-10">
              <div className="brackets relative mx-auto w-full max-w-sm bg-ink p-6 sm:p-8">
                <div className="relative aspect-[1685/2048] w-full">
                  <Image
                    src={logo}
                    alt="Elears — heraldic eagle and Lisowczycy wordmark"
                    fill
                    sizes="(min-width: 1024px) 360px, (min-width: 640px) 60vw, 80vw"
                    className="object-contain"
                  />
                </div>
              </div>
              <figcaption className="eyebrow mt-4 text-center text-graphite-soft">
                <span className="text-accent">▍</span> Chorągiew elearska
              </figcaption>
            </figure>
          </div>
          <div className="lg:col-span-7">
            <p className="max-w-prose font-serif text-lg leading-relaxed text-graphite">
              {t('about.heritageBody')}
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-ink">
        <Container className="py-16 lg:py-20">
          <div className="flex items-end justify-between">
            <h2 className="font-serif text-2xl text-ivory lg:text-3xl">
              {t('about.leadershipTitle')}
            </h2>
            <p className="eyebrow text-graphite-soft">{LEADERSHIP_KEYS.length} roles</p>
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-px overflow-hidden border border-rule/30 bg-rule/30 sm:grid-cols-2 lg:grid-cols-3">
            {LEADERSHIP_KEYS.map((key, i) => (
              <li key={key} className="flex flex-col gap-3 bg-ink p-8">
                <p className="eyebrow text-accent">{String(i + 1).padStart(2, '0')}</p>
                <p className="font-mono text-xs uppercase tracking-widish text-graphite-soft">
                  {/* TODO:leadership-name — replace placeholder name with confirmed founder/exec name */}
                  Name TBD
                </p>
                <h3 className="font-serif text-lg text-ivory">
                  {t(`about.leadership.${key}`)}
                </h3>
                <p className="text-sm text-graphite">
                  {/* TODO:leadership-bio — write 2–3 line bio in PL and EN */}
                  TODO: bio — 2–3 lines describing background, languages, areas of focus.
                </p>
              </li>
            ))}
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
          <div className="flex items-end justify-between">
            <h2 className="font-serif text-2xl text-ivory lg:text-3xl">
              {t('about.registrationsTitle')}
            </h2>
            <p className="eyebrow text-graphite-soft">{'// Placeholder · TODO'}</p>
          </div>
          <ul className="mt-8 grid grid-cols-1 gap-px overflow-hidden border border-rule/30 bg-rule/30 sm:grid-cols-2 lg:grid-cols-5">
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
