import Image from 'next/image';
import logo from '@/public/logo.svg';

type Props = { size?: 'sm' | 'md' | 'lg' };

const SIZES: Record<NonNullable<Props['size']>, { box: string; pixel: number }> = {
  sm: { box: 'h-8 w-8', pixel: 64 },
  md: { box: 'h-10 w-10', pixel: 80 },
  lg: { box: 'h-16 w-16', pixel: 128 }
};

export default function Wordmark({ size = 'md' }: Props) {
  const dims = SIZES[size];
  return (
    <span className="flex items-center gap-3">
      <span className={`${dims.box} relative shrink-0`}>
        <Image
          src={logo}
          alt=""
          fill
          sizes="64px"
          priority
          className="object-contain"
        />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display font-bold tracking-wide2 text-ivory text-base sm:text-lg">
          ELEARS
        </span>
        <span className="eyebrow mt-1 text-cyan/80">Lisowczycy</span>
      </span>
    </span>
  );
}
