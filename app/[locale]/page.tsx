import { setRequestLocale } from 'next-intl/server';
import Hero from '@/components/sections/Hero';
import Pillars from '@/components/sections/Pillars';
import WhyElears from '@/components/sections/WhyElears';
import InsightsTeaser from '@/components/sections/InsightsTeaser';
import CtaStrip from '@/components/sections/CtaStrip';
import { FEATURES } from '@/lib/features';
import type { Locale } from '@/i18n';

export default function HomePage({ params: { locale } }: { params: { locale: Locale } }) {
  setRequestLocale(locale);
  return (
    <>
      <Hero />
      <Pillars />
      <WhyElears />
      {FEATURES.insights && <InsightsTeaser locale={locale} />}
      <CtaStrip />
    </>
  );
}
