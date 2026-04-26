import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import LegalShell from '@/components/sections/LegalShell';
import type { Locale } from '@/i18n';

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'legal.privacy' });
  return {
    title: t('title'),
    description: t('intro'),
    alternates: {
      canonical: `/${locale}/legal/privacy`,
      languages: { pl: '/pl/legal/privacy', en: '/en/legal/privacy' }
    }
  };
}

export default async function PrivacyPage({ params: { locale } }: { params: { locale: Locale } }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'legal.privacy' });
  const isPL = locale === 'pl';

  return (
    <LegalShell eyebrow={t('eyebrow')} title={t('title')} intro={t('intro')}>
      <h2>{isPL ? 'Administrator danych' : 'Data controller'}</h2>
      <p>
        {isPL
          ? 'Administratorem danych jest Elears sp. z o.o. z siedzibą we Wrocławiu (dane rejestrowe — TBD). Kontakt: '
          : 'The data controller is Elears sp. z o.o., headquartered in Wrocław, Poland (registration details — TBD). Contact: '}
        <a href="mailto:contact@elears.com">contact@elears.com</a>.
      </p>

      <h2>{isPL ? 'Jakie dane zbieramy' : 'What we collect'}</h2>
      <p>
        {isPL
          ? 'Strona używa Plausible Analytics — bez plików cookie i bez identyfikatorów osobistych. Zbieramy: ścieżkę URL, nagłówek referer, ogólny typ urządzenia, kraj na podstawie IP. Adres IP nie jest przechowywany.'
          : 'This site uses Plausible Analytics — cookieless and without personal identifiers. We collect: URL path, referer, broad device type, and IP-derived country. IP addresses are not stored.'}
      </p>
      <p>
        {isPL
          ? 'Korespondencja przesłana przez mailto: jest przechowywana w systemach pocztowych firmy.'
          : 'Correspondence sent via mailto: is stored in the firm’s mail systems.'}
      </p>

      <h2>{isPL ? 'Podstawa prawna' : 'Legal basis'}</h2>
      <ul>
        <li>
          {isPL
            ? 'Art. 6(1)(f) RODO — prawnie uzasadniony interes (analityka bez cookies, bezpieczeństwo strony).'
            : 'Art. 6(1)(f) GDPR — legitimate interest (cookieless analytics, site security).'}
        </li>
        <li>
          {isPL
            ? 'Art. 6(1)(b) RODO — wykonanie czynności przed zawarciem umowy (korespondencja kontaktowa).'
            : 'Art. 6(1)(b) GDPR — pre-contractual steps (contact correspondence).'}
        </li>
      </ul>

      <h2>{isPL ? 'Okres przechowywania' : 'Retention'}</h2>
      <p>
        {isPL
          ? 'Dane analityczne — 24 miesiące, w postaci zagregowanej. Korespondencja — przez czas niezbędny do prowadzenia sprawy lub realizacji obowiązków prawnych.'
          : 'Analytics — 24 months, in aggregate form. Correspondence — for the time necessary to handle the matter or comply with legal obligations.'}
      </p>

      <h2>{isPL ? 'Twoje prawa' : 'Your rights'}</h2>
      <p>
        {isPL
          ? 'Przysługują Ci prawa z Art. 15–22 RODO: dostęp, sprostowanie, usunięcie, ograniczenie, sprzeciw i przenoszenie danych. Pisz na contact@elears.com. Organ nadzorczy: Prezes UODO, ul. Stawki 2, 00-193 Warszawa.'
          : 'You have rights under GDPR Art. 15–22: access, rectification, erasure, restriction, objection, and portability. Write to contact@elears.com. Supervisory authority: President of UODO, ul. Stawki 2, 00-193 Warsaw, Poland.'}
      </p>
    </LegalShell>
  );
}
