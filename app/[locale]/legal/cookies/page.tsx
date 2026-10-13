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
      <h2>{isPL ? 'Brak śledzących plików cookie' : 'No tracking cookies'}</h2>
      <p>
        {isPL
          ? 'Nie używamy plików cookie do śledzenia ani profilowania użytkowników. Plausible Analytics działa bez plików cookie.'
          : 'We do not use cookies for tracking or profiling. Plausible Analytics operates without cookies.'}
      </p>

      <h2>{isPL ? 'Dane zapisywane na urządzeniu' : 'What we store locally'}</h2>
      <ul>
        <li>
          {isPL ? (
            <>
              <code>NEXT_LOCALE</code> — wybrany język. Plik cookie zapisywany przy zmianie języka,
              ważny przez 1 rok.
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
              <code>elears.cookieAck</code> — znacznik w pamięci przeglądarki (localStorage) potwierdzający
              wyświetlenie tego komunikatu.
            </>
          ) : (
            <>
              <code>elears.cookieAck</code> — localStorage flag confirming this notice has been
              shown.
            </>
          )}
        </li>
      </ul>

      <h2>{isPL ? 'Podmioty zewnętrzne' : 'Third parties'}</h2>
      <p>
        {isPL
          ? 'Skrypt Plausible jest pobierany z serwera plausible.io. Serwis nie zawiera innych skryptów ani osadzonych treści podmiotów trzecich.'
          : 'The Plausible script is loaded from plausible.io. No other third-party scripts and no embeds.'}
      </p>
    </LegalShell>
  );
}
