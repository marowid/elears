import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import LegalShell from '@/components/sections/LegalShell';
import { languageAlternates, type  Locale } from '@/i18n';

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'legal.cookies' });
  return {
    title: t('title'),
    description: t('intro'),
    alternates: {
      canonical: `/${locale}/legal/cookies`,
      languages: languageAlternates('/legal/cookies')
    }
  };
}

export default async function CookiesPage({ params: { locale } }: { params: { locale: Locale } }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'legal.cookies' });
  const isPL = locale === 'pl';

  return (
    <LegalShell eyebrow={t('eyebrow')} title={t('title')} intro={t('intro')}>
      <h2>{isPL ? 'Brak plików śledzących' : 'No tracking cookies'}</h2>
      <p>
        {isPL
          ? 'Nie używamy plików cookie do śledzenia ani profilowania. Plausible Analytics działa bez plików cookie.'
          : 'We do not use cookies for tracking or profiling. Plausible Analytics operates without cookies.'}
      </p>

      <h2>{isPL ? 'Co przechowujemy lokalnie' : 'What we store locally'}</h2>
      <ul>
        <li>
          {isPL ? (
            <>
              <code>NEXT_LOCALE</code> — preferencja języka. Cookie ustawiane przy zmianie języka,
              ważność: 1 rok.
            </>
          ) : (
            <>
              <code>NEXT_LOCALE</code> — language preference. Set when you change languages, valid
              for 1 year.
            </>
          )}
        </li>
        <li>
          {isPL ? (
            <>
              <code>elears.cookieAck</code> — flaga w localStorage potwierdzająca, że ten komunikat
              został wyświetlony.
            </>
          ) : (
            <>
              <code>elears.cookieAck</code> — localStorage flag confirming this notice has been
              shown.
            </>
          )}
        </li>
      </ul>

      <h2>{isPL ? 'Strony zewnętrzne' : 'Third parties'}</h2>
      <p>
        {isPL
          ? 'Skrypt Plausible jest pobierany z plausible.io. Brak innych skryptów osób trzecich i brak osadzeń.'
          : 'The Plausible script is loaded from plausible.io. No other third-party scripts and no embeds.'}
      </p>
    </LegalShell>
  );
}
