import Link from 'next/link';
import type { ComponentProps } from 'react';

type Variant = 'solid' | 'ghost' | 'invert';

const base =
  'inline-flex items-center gap-3 px-5 py-3 text-sm font-medium tracking-widish transition-colors duration-150 border';

const variants: Record<Variant, string> = {
  /* Primary — neon magenta on dark, swaps to cyan on hover */
  solid:
    'bg-crimson text-navy border-crimson hover:bg-cyan hover:border-cyan focus-visible:bg-cyan focus-visible:border-cyan',
  /* Outline — light on dark, neon outline on hover */
  ghost:
    'bg-transparent text-ivory border-ivory/60 hover:bg-cyan/10 hover:border-cyan hover:text-cyan focus-visible:bg-cyan/10 focus-visible:border-cyan focus-visible:text-cyan',
  /* Inverse — pale fill, becomes neon on hover */
  invert:
    'bg-ivory text-navy border-ivory hover:bg-cyan hover:border-cyan focus-visible:bg-cyan focus-visible:border-cyan'
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
