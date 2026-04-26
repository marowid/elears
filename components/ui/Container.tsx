import type { HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLDivElement> & { as?: 'div' | 'section' | 'header' | 'footer' };

export default function Container({ as: Tag = 'div', className = '', ...rest }: Props) {
  return (
    <Tag
      className={`mx-auto w-full max-w-page px-5 sm:px-8 lg:px-12 ${className}`}
      {...rest}
    />
  );
}
