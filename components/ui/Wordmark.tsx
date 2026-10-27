import Image from 'next/image';
import logo from '@/public/logo.svg';

type Props = { size?: 'sm' | 'md'; subtitle?: boolean; tone?: 'ink' | 'on-navy' };

/* Emblem tile (the logo keeps its own black field) + wordmark + heritage name. */
export default function Wordmark({ size = 'md', subtitle = true, tone = 'ink' }: Props) {
  const box = size === 'sm' ? 'h-7 w-7' : 'h-9 w-9';
  const text = tone === 'on-navy' ? 'text-on-navy' : 'text-ink';
  const sub = tone === 'on-navy' ? 'text-on-navy-mute' : 'text-mute';
  return (
    <span className="flex items-center gap-3">
      <span className={`${box} relative shrink-0 overflow-hidden bg-ink`}>
        {/* Zoom on the eagle; the full emblem is shown on the About page. */}
        <Image
          src={logo}
          alt=""
          fill
          sizes="72px"
          priority
          className="origin-top scale-[1.55] object-cover object-top"
        />
      </span>
      <span className="flex items-baseline gap-2 leading-none">
        <span className={`font-sans text-[17px] font-medium tracking-[0.12em] ${text}`}>
          ELEARS
        </span>
        {subtitle && (
          <>
            <span aria-hidden="true" className={`text-sm ${sub}`}>
              /
            </span>
            <span className={`font-sans text-sm ${sub}`}>Lisowczycy</span>
          </>
        )}
      </span>
    </span>
  );
}
