import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';
import Eyebrow from '@/components/ui/Eyebrow';
import Card from '@/components/ui/Card';
import { SERVICE_CODES, SERVICE_SLUGS } from '@/lib/services';

export default function Pillars() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section className="bg-ink">
      <Container className="py-20 lg:py-28">
        <div className="max-w-3xl">
          <Eyebrow>{t('home.pillarsEyebrow')}</Eyebrow>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-ivory lg:text-4xl">
            {t('home.pillarsTitle')}
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_SLUGS.map((slug) => (
            <Link key={slug} href={`/${locale}/services/${slug}`} className="group block">
              <Card className="flex h-full flex-col group-hover:border-signal group-focus-visible:border-signal">
                <p className="eyebrow text-graphite-soft">{SERVICE_CODES[slug]}</p>
                <h3 className="mt-3 hyphens-auto break-words font-serif text-xl text-ivory">
                  {t(`services.items.${slug}.title`)}
                </h3>
                <p className="mt-3 text-sm text-graphite">{t(`services.items.${slug}.short`)}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-6 font-mono text-xs uppercase tracking-widish text-accent">
                  {t('cta.readMore')} <span aria-hidden="true">→</span>
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
