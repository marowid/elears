import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/i18n';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieBanner from '@/components/layout/CookieBanner';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'site' });
  return {
    title: { default: t('name'), template: `%s — ${t('name')}` },
    description: t('description'),
    alternates: {
      canonical: `/${locale}`,
      languages: { pl: '/pl', en: '/en', 'x-default': '/pl' }
    },
    openGraph: {
      type: 'website',
      siteName: t('name'),
      title: t('name'),
      description: t('description'),
      locale,
      alternateLocale: locales.filter((l) => l !== locale)
    }
  };
}

const PLAUSIBLE_DOMAIN = 'elears.com'; /* TODO:plausible — confirm production domain */

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: 'nav' });

  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Elears',
    legalName: 'Elears sp. z o.o.',
    url: 'https://elears.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Wrocław',
      addressCountry: 'PL'
    }
  };

  return (
    <html lang={locale} className="grid-paper">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate" hrefLang="pl" href="https://elears.com/pl" />
        <link rel="alternate" hrefLang="en" href="https://elears.com/en" />
        <link rel="alternate" hrefLang="x-default" href="https://elears.com/pl" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {/* Plausible — cookieless, GDPR-friendly */}
        <script defer data-domain={PLAUSIBLE_DOMAIN} src="https://plausible.io/js/script.js" />
      </head>
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-navy focus:px-3 focus:py-2 focus:text-ivory"
          >
            {t('skipToContent')}
          </a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
