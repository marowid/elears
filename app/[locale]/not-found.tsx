import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';

export default function NotFound() {
  const t = useTranslations('notFound');
  const locale = useLocale();
  return (
    <section className="bg-ink">
      <Container className="py-32 text-center">
        <p className="eyebrow text-accent">404</p>
        <h1 className="mt-4 font-serif text-4xl text-ivory">{t('title')}</h1>
        <p className="mt-4 text-graphite">{t('body')}</p>
        <Link
          href={`/${locale}`}
          className="mt-8 inline-block border border-rule/40 px-5 py-3 text-sm tracking-widish text-ivory hover:border-signal hover:text-signal"
        >
          {t('home')}
        </Link>
      </Container>
    </section>
  );
}
