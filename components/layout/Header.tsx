'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';
import Wordmark from '@/components/ui/Wordmark';
import { locales } from '@/i18n';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname() || `/${locale}`;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const items = [
    { href: `/${locale}/services`, label: t('services') },
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/insights`, label: t('insights') },
    { href: `/${locale}/contact`, label: t('contact') }
  ];

  const otherLocale = locales.find((l) => l !== locale) ?? 'en';
  const swapLocale = (() => {
    const segs = pathname.split('/');
    if (segs[1] && (locales as readonly string[]).includes(segs[1])) {
      segs[1] = otherLocale;
      return segs.join('/') || `/${otherLocale}`;
    }
    return `/${otherLocale}`;
  })();

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors duration-150 ${
        scrolled ? 'border-rule/40 bg-navy/90 backdrop-blur' : 'border-transparent bg-navy'
      }`}
    >
      <Container className="flex items-center justify-between py-4 lg:py-5">
        <Link href={`/${locale}`} aria-label="Elears" className="shrink-0">
          <Wordmark />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {items.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + '/');
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm tracking-widish transition-colors ${
                  active ? 'text-crimson' : 'text-ivory-dim hover:text-cyan'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href={swapLocale}
            aria-label={t('toggleLanguage')}
            className="eyebrow border border-ivory/40 px-2 py-1 text-ivory hover:border-cyan hover:text-cyan"
          >
            {otherLocale.toUpperCase()}
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? t('closeMenu') : t('openMenu')}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden border border-rule/40 px-3 py-2 text-sm uppercase tracking-widish text-ivory"
        >
          {open ? '×' : '≡'}
        </button>
      </Container>

      {open && (
        <div id="mobile-nav" className="border-t border-rule/40 bg-navy lg:hidden">
          <Container className="flex flex-col gap-4 py-6">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-rule/30 pb-3 text-sm tracking-widish text-ivory-dim hover:text-cyan"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={swapLocale}
              onClick={() => setOpen(false)}
              className="eyebrow self-start border border-ivory/40 px-2 py-1 text-ivory hover:border-cyan hover:text-cyan"
            >
              {otherLocale.toUpperCase()}
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
