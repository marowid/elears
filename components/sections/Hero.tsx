import { useLocale, useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import { PolandArt } from '@/components/ui/illustrations/PanelArt';

const COORDINATE_ROWS = ['hq', 'gps', 'languages', 'established'] as const;

export default function Hero() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section className="border-b border-line">
      <Container className="grid grid-cols-1 gap-12 py-16 lg:grid-cols-12 lg:items-center lg:py-24">
        <div className="lg:col-span-7">
          <Eyebrow>{t('home.heroEyebrow')}</Eyebrow>
          <h1 className="mt-5 max-w-3xl text-display-1 font-normal sm:text-[3.25rem] sm:leading-[1.06]">
            {t('site.shortTagline')}
          </h1>
          <p className="mt-7 max-w-xl text-lead text-ink-2">{t('home.heroSub')}</p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button href={`/${locale}/services`} variant="solid">
              {t('cta.ourServices')}
            </Button>
            <Button href={`/${locale}/contact`} variant="ghost">
              {t('cta.contactUs')}
            </Button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="border border-line bg-paper text-ink">
            <div className="px-6 pt-4 sm:px-8">
              <PolandArt className="mx-auto max-w-[300px]" />
            </div>
            <div className="px-6 pb-6 sm:px-8 sm:pb-8">
              <Eyebrow className="mb-3">{t('home.coordinates.title')}</Eyebrow>
              <dl>
                {COORDINATE_ROWS.map((row) => (
                  <div
                    key={row}
                    className="flex items-baseline justify-between gap-6 border-t border-line py-3 text-[15px] last:border-b"
                  >
                    <dt className="text-mute">{t(`home.coordinates.${row}Label`)}</dt>
                    <dd className="whitespace-nowrap font-mono text-sm text-ink">
                      {t(`home.coordinates.${row}Value`)}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
