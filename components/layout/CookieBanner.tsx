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
      aria-label={t('label')}
      className="fixed inset-x-0 bottom-0 z-50 border-t border-ink bg-paper"
    >
      <div className="mx-auto flex max-w-page flex-col items-start justify-between gap-3 px-5 py-3 sm:flex-row sm:items-center sm:px-8 lg:px-12">
        <p className="text-sm text-ink-2">{t('message')}</p>
        <button
          type="button"
          onClick={dismiss}
          className="eyebrow shrink-0 border border-ink bg-ink px-3 py-2 text-paper hover:bg-navy"
        >
          {t('ack')}
        </button>
      </div>
    </div>
  );
}
