import { useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';
import Eyebrow from '@/components/ui/Eyebrow';

const KEYS = ['sovereign', 'native', 'ai', 'independent'] as const;

const ICONS: Record<(typeof KEYS)[number], React.ReactNode> = {
  sovereign: (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      aria-hidden="true"
    >
      <path d="M16 3 L27 8 V17 C27 23 22 27.5 16 29 C10 27.5 5 23 5 17 V8 Z" />
      <path d="M16 3 V29 M5 16 H27" opacity="0.5" />
    </svg>
  ),
  native: (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="12" />
      <path d="M4 16 H28 M16 4 C20 8 22 12 22 16 C22 20 20 24 16 28 C12 24 10 20 10 16 C10 12 12 8 16 4 Z" />
    </svg>
  ),
  ai: (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      aria-hidden="true"
    >
      <rect x="7" y="7" width="18" height="18" />
      <rect x="12" y="12" width="8" height="8" />
      <path d="M11 3 V7 M16 3 V7 M21 3 V7 M11 25 V29 M16 25 V29 M21 25 V29 M3 11 H7 M3 16 H7 M3 21 H7 M25 11 H29 M25 16 H29 M25 21 H29" />
    </svg>
  ),
  independent: (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      aria-hidden="true"
    >
      <path d="M16 5 V27 M10 27 H22" />
      <path d="M5 10 H27" />
      <path d="M8 10 L4 19 H12 Z" />
      <path d="M24 10 L20 19 H28 Z" />
    </svg>
  )
};

export default function WhyElears() {
  const t = useTranslations();

  return (
    <section className="border-t border-line">
      <Container className="py-16 lg:py-24">
        <div className="max-w-3xl">
          <Eyebrow>{t('home.whyEyebrow')}</Eyebrow>
          <h2 className="mt-4 text-display-2 font-normal">{t('home.whyTitle')}</h2>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {KEYS.map((key, i) => (
            <li key={key} className="border-t border-ink pt-6">
              <div className="flex items-center justify-between">
                <span className="h-8 w-8 text-ink">{ICONS[key]}</span>
                <span className="eyebrow text-mute">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="mt-6 text-lg font-medium leading-snug">{t(`why.${key}.title`)}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-2">{t(`why.${key}.body`)}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
