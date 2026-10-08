import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { FEATURES } from './lib/features';

export const allLocales = ['pl', 'en'] as const;
export type Locale = (typeof allLocales)[number];

/** Locales currently served. Polish is switchable via FEATURES.polish. */
export const locales: readonly Locale[] = FEATURES.polish ? allLocales : ['en'];
export const defaultLocale: Locale = FEATURES.polish ? 'pl' : 'en';

/** hreflang map for a locale-less path such as '/about' (or '' for home). */
export function languageAlternates(path: string): Record<string, string> {
  const map: Record<string, string> = Object.fromEntries(locales.map((l) => [l, `/${l}${path}`]));
  map['x-default'] = `/${defaultLocale}${path}`;
  return map;
}

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as Locale)) notFound();

  return {
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
