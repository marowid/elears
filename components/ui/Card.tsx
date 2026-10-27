import type { HTMLAttributes } from 'react';

type Tone = 'paper' | 'grey' | 'tint' | 'navy';

type Props = HTMLAttributes<HTMLDivElement> & { tone?: Tone };

const TONES: Record<Tone, string> = {
  paper: 'border border-line bg-paper text-ink',
  grey: 'bg-paper-2 text-ink',
  tint: 'bg-tint text-ink',
  navy: 'bg-navy text-on-navy'
};

/* Flat panel. No radius, no shadow; tone picks the surface. */
export default function Card({ tone = 'paper', className = '', children, ...rest }: Props) {
  return (
    <div className={`relative ${TONES[tone]} p-6 sm:p-8 ${className}`} {...rest}>
      {children}
    </div>
  );
}
