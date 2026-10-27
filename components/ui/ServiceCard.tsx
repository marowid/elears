import Link from 'next/link';
import ServiceArt from '@/components/ui/illustrations/ServiceArt';
import type { ServiceSlug } from '@/lib/services';

type Props = {
  href: string;
  slug: ServiceSlug;
  code: string;
  title: string;
  summary: string;
  readMore: string;
  /** Heading level for the title: h3 under a section heading, h2 directly under the page h1. */
  as?: 'h2' | 'h3';
};

/* Capability cell: illustration, title, summary, and a hairline link row.
   Shared by the Home "What we do" grid and the Services index. */
export default function ServiceCard({
  href,
  slug,
  code,
  title,
  summary,
  readMore,
  as: Heading = 'h3'
}: Props) {
  return (
    <Link href={href} className="group flex h-full flex-col text-ink">
      <div className="text-ink">
        <ServiceArt slug={slug} className="max-w-[260px]" />
      </div>
      <Heading className="mt-2 text-display-3 font-normal group-hover:text-signal">{title}</Heading>
      <p className="mt-3 text-[15px] leading-relaxed text-ink-2">{summary}</p>
      <span className="mt-auto flex items-center justify-between border-y border-line pb-3 pt-6 text-[15px] group-hover:border-ink">
        <span>
          <span className="eyebrow mr-3 text-mute">{code}</span>
          {readMore}
        </span>
        <span
          aria-hidden="true"
          className="transition-transform duration-150 group-hover:translate-x-1"
        >
          →
        </span>
      </span>
    </Link>
  );
}

/** Grid wrapper used wherever service cards are listed. */
export const SERVICE_GRID = 'grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3';
