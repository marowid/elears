import Link from 'next/link';
import type { ComponentProps } from 'react';

type Variant = 'solid' | 'ghost' | 'link' | 'invert';

const base =
  'inline-flex items-center gap-2 font-mono text-[13px] uppercase tracking-label transition-colors duration-150';

const variants: Record<Variant, string> = {
  /* Primary — ink fill, shifts to navy on hover */
  solid: 'border border-ink bg-ink px-5 py-3 text-paper hover:border-navy hover:bg-navy',
  /* Secondary — ink outline, fills on hover */
  ghost: 'border border-ink bg-transparent px-5 py-3 text-ink hover:bg-ink hover:text-paper',
  /* Inline — underlined label with arrow, as used in the feature cards */
  link: 'link-mono text-ink',
  /* On navy panels — pale outline */
  invert:
    'border border-on-navy/60 bg-transparent px-5 py-3 text-on-navy hover:border-on-navy hover:bg-on-navy hover:text-navy'
};

type LinkProps = ComponentProps<typeof Link> & { variant?: Variant; children: React.ReactNode };

export default function Button({
  variant = 'solid',
  className = '',
  children,
  ...rest
}: LinkProps) {
  return (
    <Link className={`${base} ${variants[variant]} ${className}`} {...rest}>
      <span>{children}</span>
      <span aria-hidden="true">→</span>
    </Link>
  );
}
