import { useLocale, useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';
import Eyebrow from '@/components/ui/Eyebrow';
import ServiceCard, { SERVICE_GRID } from '@/components/ui/ServiceCard';
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

        <div className={`mt-12 ${SERVICE_GRID}`}>
          {SERVICE_SLUGS.map((slug) => (
            <ServiceCard
              key={slug}
              href={`/${locale}/services/${slug}`}
              code={SERVICE_CODES[slug]}
              title={t(`services.items.${slug}.title`)}
              summary={t(`services.items.${slug}.short`)}
              readMore={t('cta.readMore')}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
