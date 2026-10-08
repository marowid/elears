import { useLocale, useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { rgba } from '@/lib/colors';

const COORDINATE_ROWS = ['hq', 'gps', 'languages', 'established'] as const;

export default function Hero() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section className="topo-bg relative overflow-hidden text-ivory">
      <div className="absolute inset-0 pointer-events-none">
        <div
          aria-hidden="true"
          className="grid-paper absolute inset-0"
          style={{ '--grid-size': '64px', '--grid-line': rgba('ivory', 0.05) } as React.CSSProperties}
        />
      </div>
      <div className="scanline" aria-hidden="true" />

      <Container className="relative grid grid-cols-1 gap-10 py-24 lg:grid-cols-12 lg:py-36">
        <div className="lg:col-span-8">
          <p className="eyebrow text-signal/80">{t('home.heroEyebrow')}</p>

          <h1
            className="glitch mt-6 font-display font-bold uppercase tracking-wide2 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl"
            data-text={t('site.shortTagline')}
          >
            {t('site.shortTagline')}
          </h1>

          <p className="mt-8 max-w-2xl text-lg text-ivory-dim">{t('home.heroSub')}</p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href={`/${locale}/services`} variant="solid">
              {t('cta.ourServices')}
            </Button>
            <Button href={`/${locale}/contact`} variant="ghost">
              {t('cta.contactUs')}
            </Button>
          </div>
        </div>

        <div className="hidden lg:col-span-4 lg:flex lg:flex-col lg:justify-end">
          <div className="brackets text-ivory-dim border border-rule/40 p-6 font-mono text-xs">
            <p className="eyebrow text-ivory-dim">{t('home.coordinates.title')}</p>
            <ul className="mt-4 space-y-2">
              {COORDINATE_ROWS.map((row) => (
                <li key={row} className="flex justify-between gap-4">
                  <span>{t(`home.coordinates.${row}Label`)}</span>
                  <span className="whitespace-nowrap">{t(`home.coordinates.${row}Value`)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
