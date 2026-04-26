import { useLocale, useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function CtaStrip() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section className="bg-navy text-ivory">
      <Container className="flex flex-col items-start justify-between gap-8 py-16 lg:flex-row lg:items-center lg:py-20">
        <div>
          <h2 className="font-serif text-2xl lg:text-3xl">{t('home.footerCtaTitle')}</h2>
          <p className="mt-3 max-w-xl text-sm text-ivory/75">{t('home.footerCtaSub')}</p>
        </div>
        <Button href={`/${locale}/contact`} variant="invert">
          {t('cta.discussMandate')}
        </Button>
      </Container>
    </section>
  );
}
