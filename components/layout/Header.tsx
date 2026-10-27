'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';
import Wordmark from '@/components/ui/Wordmark';
import { FEATURES } from '@/lib/features';
import { locales } from '@/i18n';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname() || `/${locale}`;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const items = [
    { href: `/${locale}`, label: t('home'), exact: true },
    { href: `/${locale}/services`, label: t('services') },
    { href: `/${locale}/about`, label: t('about') },
    ...(FEATURES.insights ? [{ href: `/${locale}/insights`, label: t('insights') }] : []),
    { href: `/${locale}/contact`, label: t('contact') }
  ];

  const isActive = (item: (typeof items)[number]) =>
    pathname === item.href || (!('exact' in item) && pathname.startsWith(item.href + '/'));

  // Same page in another locale; the switcher is hidden when only one locale is served.
  const pathFor = (target: string) => {
    const segs = pathname.split('/');
    if (segs[1] && (locales as readonly string[]).includes(segs[1])) {
      segs[1] = target;
      return segs.join('/') || `/${target}`;
    }
    return `/${target}`;
  };

  const LocaleSwitch = ({ className = '' }: { className?: string }) =>
    locales.length > 1 ? (
      <nav
        aria-label={t('toggleLanguage')}
        className={`flex items-stretch border border-line ${className}`}
      >
        {locales.map((l) => {
          const current = l === locale;
          return (
            <Link
              key={l}
              href={pathFor(l)}
              hrefLang={l}
              lang={l}
              aria-current={current ? 'true' : undefined}
              aria-label={t(`languageName.${l}`)}
              className={`eyebrow px-2.5 py-2 ${
                current ? 'bg-ink text-paper' : 'text-mute hover:text-ink'
              }`}
            >
              {l.toUpperCase()}
            </Link>
          );
        })}
      </nav>
    ) : null;

  return (
    <header className="sticky top-0 z-40 border-b border-ink bg-paper">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href={`/${locale}`} aria-label="ELEARS" className="shrink-0">
          <Wordmark />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {items.map((item) => {
            const active = isActive(item);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={`relative py-5 text-[15px] transition-colors ${
                  active ? 'text-ink' : 'text-ink-2 hover:text-signal'
                }`}
              >
                {item.label}
                {active && (
                  <span aria-hidden="true" className="absolute inset-x-0 -bottom-px h-0.5 bg-ink" />
                )}
              </Link>
            );
          })}
          <LocaleSwitch />
        </nav>

        <button
          type="button"
          aria-label={open ? t('closeMenu') : t('openMenu')}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="eyebrow border border-ink px-3 py-2 text-ink lg:hidden"
        >
          {open ? t('closeMenu') : t('openMenu')}
        </button>
      </Container>

      {open && (
        <div id="mobile-nav" className="border-t border-line bg-paper lg:hidden">
          <Container className="flex flex-col py-2">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item) ? 'page' : undefined}
                className={`flex items-center justify-between border-b border-line py-4 text-base ${
                  isActive(item) ? 'text-ink' : 'text-ink-2'
                }`}
              >
                {item.label}
                <span aria-hidden="true">→</span>
              </Link>
            ))}
            <LocaleSwitch className="my-4 self-start" />
          </Container>
        </div>
      )}
    </header>
  );
}
