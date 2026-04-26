'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

const STORAGE_KEY = 'elears.cookieAck';

export default function CookieBanner() {
  const t = useTranslations('cookieBanner');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      /* localStorage unavailable — silently skip */
    }
  }, []);

  if (!visible) return null;

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, '1');
    } catch {
      /* noop */
    }
    setVisible(false);
  };

  return (
    <div
      role="region"
      aria-label="Cookie notice"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-cyan/40 bg-navy-soft/95 text-ivory backdrop-blur"
    >
      <div className="mx-auto flex max-w-page flex-col items-start justify-between gap-3 px-5 py-3 sm:flex-row sm:items-center sm:px-8 lg:px-12">
        <p className="text-sm text-ivory/85">{t('message')}</p>
        <button
          type="button"
          onClick={dismiss}
          className="eyebrow border border-ivory/40 px-3 py-2 text-ivory hover:border-cyan hover:text-cyan"
        >
          {t('ack')}
        </button>
      </div>
    </div>
  );
}
