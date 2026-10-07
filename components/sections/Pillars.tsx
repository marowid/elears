import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';
import Eyebrow from '@/components/ui/Eyebrow';
import Card from '@/components/ui/Card';

const ITEMS = [
  { key: 'geo', slug: 'geopolitical-risk', code: 'GEO' },
  { key: 'cyber', slug: 'cyber-threat-intelligence', code: 'CYB' },
  { key: 'investigations', slug: 'investigations', code: 'INV' }
] as const;

export default function Pillars() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section className="bg-ink">
      <Container className="py-20 lg:py-28">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>{t('home.pillarsEyebrow')}</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-ivory lg:text-4xl">
              {t('home.pillarsTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:col-span-8">
            {ITEMS.map((item) => (
              <Link key={item.key} href={`/${locale}/services/${item.slug}`} className="group block">
                <Card className="flex h-full flex-col group-hover:border-signal group-focus-visible:border-signal">
                  <p className="eyebrow text-graphite-soft">{item.code}</p>
                  <h3 className="mt-3 font-serif text-xl text-ivory">
                    {t(`pillars.${item.key}.title`)}
                  </h3>
                  <p className="mt-3 text-sm text-graphite">{t(`pillars.${item.key}.body`)}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widish text-accent">
                    {t('cta.readMore')} <span aria-hidden="true">→</span>
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
