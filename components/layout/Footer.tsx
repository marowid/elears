import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';
import Wordmark from '@/components/ui/Wordmark';

const SERVICE_SLUGS = [
  'integrity-due-diligence',
  'geopolitical-risk',
  'cyber-threat-intelligence',
  'investigations',
  'monitorship-compliance',
  'advisory-retainer'
] as const;

export default function Footer() {
  const t = useTranslations();
  const locale = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-rule/40 bg-ink text-ivory">
      <Container className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Wordmark />
          <p className="mt-4 max-w-xs text-sm text-ivory-dim">{t('footer.tagline')}</p>
          <p className="eyebrow mt-6 text-graphite-soft">51.1079° N · 17.0385° E</p>
        </div>

        <div>
          <p className="eyebrow text-graphite-soft">{t('footer.servicesHeading')}</p>
          <ul className="mt-4 space-y-3 text-sm">
            {SERVICE_SLUGS.map((slug) => (
              <li key={slug}>
                <Link
                  href={`/${locale}/services/${slug}`}
                  className="text-graphite hover:text-signal"
                >
                  {t(`services.items.${slug}.title`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-graphite-soft">{t('footer.firmHeading')}</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link href={`/${locale}/about`} className="text-graphite hover:text-signal">
                {t('nav.about')}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/insights`} className="text-graphite hover:text-signal">
                {t('nav.insights')}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/contact`} className="text-graphite hover:text-signal">
                {t('nav.contact')}
              </Link>
            </li>
            <li>
              {/* TODO:contact-detail — confirm with founders before launch */}
              <a href="mailto:careers@elears.com" className="text-graphite hover:text-signal">
                {t('footer.careers')}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-graphite-soft">{t('footer.legalHeading')}</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link href={`/${locale}/legal/privacy`} className="text-graphite hover:text-signal">
                {t('legal.privacy.title')}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/legal/terms`} className="text-graphite hover:text-signal">
                {t('legal.terms.title')}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/legal/cookies`} className="text-graphite hover:text-signal">
                {t('legal.cookies.title')}
              </Link>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-surface">
        <Container className="flex flex-col items-start justify-between gap-3 py-6 text-xs text-graphite-soft sm:flex-row sm:items-center">
          <p className="font-mono uppercase tracking-widish">
            © {year} {t('footer.company')} · Wrocław · Polska
          </p>
          <p className="font-mono uppercase tracking-widish">{t('footer.rights')}</p>
        </Container>
      </div>
    </footer>
  );
}
