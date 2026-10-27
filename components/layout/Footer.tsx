import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';
import Wordmark from '@/components/ui/Wordmark';
import { FEATURES } from '@/lib/features';
import { SERVICE_SLUGS } from '@/lib/services';

const link = 'text-[15px] text-ink-2 underline-offset-4 hover:text-signal hover:underline';

export default function Footer() {
  const t = useTranslations();
  const locale = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink bg-paper">
      <Container className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:py-16">
        <div className="lg:col-span-5">
          <Wordmark />
          <p className="mt-5 max-w-xs text-[15px] text-ink-2">{t('footer.tagline')}</p>
          <p className="eyebrow mt-6 text-mute">51.1079° N · 17.0385° E</p>
        </div>

        <div className="lg:col-span-3">
          <p className="eyebrow text-mute">{t('footer.servicesHeading')}</p>
          <ul className="mt-4 space-y-2.5">
            {SERVICE_SLUGS.map((slug) => (
              <li key={slug}>
                <Link href={`/${locale}/services/${slug}`} className={link}>
                  {t(`services.items.${slug}.title`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <p className="eyebrow text-mute">{t('footer.firmHeading')}</p>
          <ul className="mt-4 space-y-2.5">
            <li>
              <Link href={`/${locale}/about`} className={link}>
                {t('nav.about')}
              </Link>
            </li>
            {FEATURES.insights && (
              <li>
                <Link href={`/${locale}/insights`} className={link}>
                  {t('nav.insights')}
                </Link>
              </li>
            )}
            <li>
              <Link href={`/${locale}/contact`} className={link}>
                {t('nav.contact')}
              </Link>
            </li>
            <li>
              {/* TODO:contact-detail — confirm with founders before launch */}
              <a href="mailto:careers@elears.com" className={link}>
                {t('footer.careers')}
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <p className="eyebrow text-mute">{t('footer.legalHeading')}</p>
          <ul className="mt-4 space-y-2.5">
            <li>
              <Link href={`/${locale}/legal/privacy`} className={link}>
                {t('legal.privacy.title')}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/legal/terms`} className={link}>
                {t('legal.terms.title')}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/legal/cookies`} className={link}>
                {t('legal.cookies.title')}
              </Link>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-line">
        <Container className="flex flex-col items-start justify-between gap-2 py-5 text-[13px] text-mute sm:flex-row sm:items-center">
          <p>
            © {year} {t('footer.company')} · {t('footer.location')}
          </p>
          <p>{t('footer.rights')}</p>
        </Container>
      </div>
    </footer>
  );
}
