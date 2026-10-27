import Container from '@/components/ui/Container';
import Eyebrow from '@/components/ui/Eyebrow';

type Props = {
  eyebrow: string;
  title: string;
  lead?: string;
  /** Optional element shown to the right of the title on wide screens (e.g. an illustration). */
  aside?: React.ReactNode;
};

export default function PageHeader({ eyebrow, title, lead, aside }: Props) {
  return (
    <section className="border-b border-line">
      <Container className="grid grid-cols-1 gap-8 py-14 lg:grid-cols-12 lg:items-end lg:py-20">
        <div className={aside ? 'lg:col-span-8' : 'lg:col-span-10'}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-4 text-display-1 font-normal sm:text-[3rem] sm:leading-[1.08]">
            {title}
          </h1>
          {lead ? <p className="mt-6 max-w-2xl text-lead text-ink-2">{lead}</p> : null}
        </div>
        {aside ? <div className="hidden lg:col-span-4 lg:block">{aside}</div> : null}
      </Container>
    </section>
  );
}
