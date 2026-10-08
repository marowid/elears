import { NextResponse, type NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { allLocales, locales, defaultLocale } from './i18n';

const intl = createMiddleware({
  locales: [...locales],
  defaultLocale,
  localePrefix: 'always',
  localeDetection: locales.length > 1
});

export default function middleware(request: NextRequest) {
  // Send links to a hidden locale (e.g. /pl/about) to the same page in the default locale.
  const [, first, ...rest] = request.nextUrl.pathname.split('/');
  const hidden = (allLocales as readonly string[]).includes(first) && !(locales as readonly string[]).includes(first);
  if (hidden) {
    const url = request.nextUrl.clone();
    url.pathname = `/${[defaultLocale, ...rest].join('/')}`.replace(/\/$/, '');
    return NextResponse.redirect(url);
  }
  return intl(request);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|favicon|robots\\.txt|sitemap\\.xml|.*\\..*).*)']
};
