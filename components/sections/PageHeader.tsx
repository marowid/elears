import Container from '@/components/ui/Container';
import Eyebrow from '@/components/ui/Eyebrow';

type Props = {
  eyebrow: string;
  title: string;
  lead?: string;
};

export default function PageHeader({ eyebrow, title, lead }: Props) {
  return (
    <section className="border-b border-rule/30 bg-ink">
      <Container className="py-16 lg:py-24">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 font-serif text-4xl leading-tight text-ivory sm:text-5xl">{title}</h1>
        {lead ? <p className="mt-6 max-w-2xl text-lg text-graphite">{lead}</p> : null}
      </Container>
    </section>
  );
}
