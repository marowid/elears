import type { Metadata } from 'next';
import { Hanken_Grotesk, IBM_Plex_Mono } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { languageAlternates, locales, type Locale } from '@/i18n';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieBanner from '@/components/layout/CookieBanner';

/* Fonts are fetched once at build time by next/font and served from our own
   origin — no runtime request to a third-party CDN. */
const sans = Hanken_Grotesk({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-sans'
});
const mono = IBM_Plex_Mono({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-mono'
});

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
      languages: languageAlternates('')
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
    name: 'ELEARS',
    legalName: 'ELEARS sp. z o.o.',
    url: 'https://elears.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Wrocław',
      addressCountry: 'PL'
    }
  };

  return (
    <html lang={locale} className={`${sans.variable} ${mono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {/* Plausible — cookieless, GDPR-friendly */}
        <script defer data-domain={PLAUSIBLE_DOMAIN} src="https://plausible.io/js/script.js" />
      </head>
      <body className="flex min-h-screen flex-col">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-3 focus:py-2 focus:text-paper"
          >
            {t('skipToContent')}
          </a>
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
