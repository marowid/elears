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
      <section>
        <Container className="py-12 lg:py-16">
          <div
            role="status"
            className="eyebrow mb-10 max-w-prose border-l-2 border-accent bg-paper-2 px-4 py-3 text-accent"
          >
            {t('draftBanner')}
          </div>
          <article className="prose-elears prose prose-sm max-w-prose lg:prose-base">
            {children}
          </article>
        </Container>
      </section>
    </>
  );
}
