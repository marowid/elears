import { useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';
import Eyebrow from '@/components/ui/Eyebrow';

const KEYS = ['sovereign', 'native', 'ai', 'independent'] as const;

const ICONS: Record<(typeof KEYS)[number], React.ReactNode> = {
  sovereign: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true">
      <path d="M16 3 L27 8 V17 C27 23 22 27.5 16 29 C10 27.5 5 23 5 17 V8 Z" />
      <path d="M11 16 L15 20 L22 12" />
    </svg>
  ),
  native: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true">
      <circle cx="16" cy="16" r="12" />
      <path d="M4 16 H28 M16 4 C20 8 22 12 22 16 C22 20 20 24 16 28 C12 24 10 20 10 16 C10 12 12 8 16 4 Z" />
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true">
      <rect x="6" y="6" width="20" height="20" />
      <path d="M11 16 L15 12 L17 18 L21 14" />
      <circle cx="11" cy="16" r="1.2" fill="currentColor" />
      <circle cx="21" cy="14" r="1.2" fill="currentColor" />
    </svg>
  ),
  independent: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true">
      <path d="M16 4 V28" />
      <path d="M6 10 H26" />
      <path d="M6 10 L3 18 H9 Z" />
      <path d="M26 10 L23 18 H29 Z" />
    </svg>
  )
};

export default function WhyElears() {
  const t = useTranslations();

  return (
    <section className="border-y border-rule/30 bg-navy-soft/60">
      <Container className="py-20 lg:py-28">
        <div className="max-w-3xl">
          <Eyebrow>{t('home.whyEyebrow')}</Eyebrow>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-ivory lg:text-4xl">
            {t('home.whyTitle')}
          </h2>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-rule/30 bg-rule/30 sm:grid-cols-2 lg:grid-cols-4">
          {KEYS.map((key, i) => (
            <li key={key} className="bg-navy p-8">
              <div className="flex items-start justify-between">
                <span className="h-8 w-8 text-ivory">{ICONS[key]}</span>
                <span className="eyebrow text-graphite-soft">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="mt-6 font-serif text-lg text-ivory">{t(`why.${key}.title`)}</h3>
              <p className="mt-3 text-sm text-graphite">{t(`why.${key}.body`)}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
