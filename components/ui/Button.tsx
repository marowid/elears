import Link from 'next/link';
import type { ComponentProps } from 'react';

type Variant = 'solid' | 'ghost' | 'invert';

const base =
  'inline-flex items-center gap-3 px-5 py-3 text-sm font-medium tracking-widish transition-colors duration-150 border';

const variants: Record<Variant, string> = {
  /* Primary — tactical green fill, lights up to accent on hover */
  solid:
    'bg-forest text-ivory border-accent hover:bg-accent hover:text-ink focus-visible:bg-accent focus-visible:text-ink',
  /* Outline — light on dark, signal outline on hover */
  ghost:
    'bg-transparent text-ivory border-ivory/60 hover:bg-signal/10 hover:border-signal hover:text-signal focus-visible:bg-signal/10 focus-visible:border-signal focus-visible:text-signal',
  /* Inverse — pale fill, becomes signal on hover */
  invert:
    'bg-ivory text-ink border-ivory hover:bg-signal hover:border-signal focus-visible:bg-signal focus-visible:border-signal'
};

type LinkProps = ComponentProps<typeof Link> & { variant?: Variant; children: React.ReactNode };

export default function Button({ variant = 'solid', className = '', children, ...rest }: LinkProps) {
  return (
    <Link className={`${base} ${variants[variant]} ${className}`} {...rest}>
      <span>{children}</span>
      <span aria-hidden="true" className="font-mono">
        →
      </span>
    </Link>
  );
}
