import { useLocale, useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { StepsArt } from '@/components/ui/illustrations/PanelArt';

export default function CtaStrip() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section className="border-t border-line">
      <Container className="py-12 lg:py-16">
        <div className="grid grid-cols-1 items-center gap-8 bg-tint px-6 py-10 sm:px-10 lg:grid-cols-12 lg:py-12">
          <div className="lg:col-span-7">
            <h2 className="text-display-2 font-normal">{t('home.footerCtaTitle')}</h2>
            <p className="mt-4 max-w-xl text-[15px] text-ink-2">{t('home.footerCtaSub')}</p>
            <div className="mt-8">
              <Button href={`/${locale}/contact`} variant="solid">
                {t('cta.discussMandate')}
              </Button>
            </div>
          </div>
          <div className="hidden lg:col-span-5 lg:block">
            <StepsArt className="ml-auto max-w-[280px] text-ink" />
          </div>
        </div>
      </Container>
    </section>
  );
}
