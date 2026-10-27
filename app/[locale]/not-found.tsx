import { useLocale, useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';

export default function NotFound() {
  const t = useTranslations('notFound');
  const locale = useLocale();
  return (
    <section>
      <Container className="py-28 lg:py-40">
        <Eyebrow tone="accent">404</Eyebrow>
        <h1 className="mt-4 text-display-1 font-normal">{t('title')}</h1>
        <p className="mt-4 max-w-prose text-lead text-ink-2">{t('body')}</p>
        <div className="mt-10">
          <Button href={`/${locale}`} variant="ghost">
            {t('home')}
          </Button>
        </div>
      </Container>
    </section>
  );
}
