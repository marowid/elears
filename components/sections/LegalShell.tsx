import { useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';
import PageHeader from '@/components/sections/PageHeader';

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
};

export default function LegalShell({ eyebrow, title, intro, children }: Props) {
  const t = useTranslations('legal');
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} lead={intro} />
      <section className="bg-ink">
        <Container className="py-12 lg:py-16">
          <div
            role="status"
            className="mb-10 border border-accent bg-forest/40 p-4 font-mono text-xs uppercase tracking-widish text-accent"
          >
            ⚠ {t('draftBanner')}
          </div>
          <article className="prose prose-elears prose-sm max-w-prose lg:prose-base">
            {children}
          </article>
        </Container>
      </section>
    </>
  );
}
