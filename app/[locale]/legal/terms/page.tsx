import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import LegalShell from '@/components/sections/LegalShell';
import { languageAlternates, type  Locale } from '@/i18n';

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'legal.terms' });
  return {
    title: t('title'),
    description: t('intro'),
    alternates: {
      canonical: `/${locale}/legal/terms`,
      languages: languageAlternates('/legal/terms')
    }
  };
}

export default async function TermsPage({ params: { locale } }: { params: { locale: Locale } }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'legal.terms' });
  const isPL = locale === 'pl';

  return (
    <LegalShell eyebrow={t('eyebrow')} title={t('title')} intro={t('intro')}>
      <h2>{isPL ? 'Charakter strony' : 'Nature of the site'}</h2>
      <p>
        {isPL
          ? 'Strona ma charakter informacyjny. Treści nie stanowią porady prawnej, finansowej ani inwestycyjnej. Brak gwarancji co do kompletności lub aktualności.'
          : 'This site is informational. Content does not constitute legal, financial, or investment advice. No warranty is made as to completeness or currency.'}
      </p>

      <h2>{isPL ? 'Własność intelektualna' : 'Intellectual property'}</h2>
      <p>
        {isPL
          ? 'Wszystkie treści, znaki towarowe i grafiki należą do ELEARS sp. z o.o. lub są używane za zgodą. Cytowanie z atrybucją jest dozwolone.'
          : 'All content, marks, and visuals belong to ELEARS sp. z o.o. or are used by permission. Quotation with attribution is permitted.'}
      </p>

      <h2>{isPL ? 'Ograniczenie odpowiedzialności' : 'Limitation of liability'}</h2>
      <p>
        {isPL
          ? 'W maksymalnym zakresie dozwolonym prawem ELEARS nie ponosi odpowiedzialności za szkody wynikające z użycia strony.'
          : 'To the maximum extent permitted by law, ELEARS is not liable for damages arising from use of the site.'}
      </p>

      <h2>{isPL ? 'Prawo właściwe i jurysdykcja' : 'Governing law and jurisdiction'}</h2>
      <p>
        {isPL
          ? 'Prawo polskie. Wyłączna jurysdykcja sądów we Wrocławiu, Polska.'
          : 'Polish law. Exclusive jurisdiction of the courts of Wrocław, Poland.'}
      </p>
    </LegalShell>
  );
}
