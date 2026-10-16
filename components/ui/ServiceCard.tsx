import Link from 'next/link';
import Card from '@/components/ui/Card';

type Props = {
  href: string;
  code: string;
  title: string;
  summary: string;
  readMore: string;
  /** Heading level for the title: h3 under a section heading, h2 directly under the page h1. */
  as?: 'h2' | 'h3';
};

/* Service tile shared by the Home "What we do" grid and the Services index. */
export default function ServiceCard({
  href,
  code,
  title,
  summary,
  readMore,
  as: Heading = 'h3'
}: Props) {
  return (
    <Link href={href} className="group block">
      <Card className="flex h-full flex-col group-hover:border-signal group-focus-visible:border-signal">
        <p className="eyebrow text-graphite-soft">{code}</p>
        <Heading className="mt-3 hyphens-auto break-words font-serif text-xl text-ivory">
          {title}
        </Heading>
        <p className="mt-3 text-sm text-graphite">{summary}</p>
        <span className="mt-auto inline-flex items-center gap-2 pt-6 font-mono text-xs uppercase tracking-widish text-accent">
          {readMore} <span aria-hidden="true">→</span>
        </span>
      </Card>
    </Link>
  );
}

/** Grid wrapper used wherever service cards are listed. */
export const SERVICE_GRID = 'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3';
