import type { HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLDivElement> & { tone?: 'surface' | 'sunken' };

export default function Card({ tone = 'surface', className = '', children, ...rest }: Props) {
  const palette =
    tone === 'sunken'
      ? 'bg-navy text-ivory border-rule/40'
      : 'bg-navy-soft text-ivory border-rule/40';
  return (
    <div
      className={`brackets relative border ${palette} p-6 sm:p-8 transition-colors duration-150 ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
