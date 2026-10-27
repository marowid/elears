import { colors, rgba } from '@/lib/colors';

type Props = {
  /** Accessible description, e.g. "Portrait withheld". */
  label: string;
  /** Text printed on the redaction bar, e.g. "REDACTED". */
  tag: string;
  /** File reference shown in the corner, e.g. "01". */
  fileNo: string;
};

/* Stand-in portrait for leadership cards, styled as an official personnel-file
   photo: suited head-and-shoulders figure, face covered by a document-style
   redaction bar. Same image for everyone; replaced by a real photo once
   `photo` is set in lib/leadership.ts. */
export default function RedactedPortrait({ label, tag, fileNo }: Props) {
  const skin = '#8E96A3';
  const skinShade = '#7C8492';
  const hair = '#3A424D';
  const suit = '#2C3440';
  const lapel = '#3A4350';
  const shirt = '#F4F5F7';
  const tie = '#1E2124';

  return (
    <div
      role="img"
      aria-label={label}
      className="relative aspect-[4/5] w-32 shrink-0 self-start overflow-hidden border border-line"
    >
      <svg viewBox="0 0 80 100" aria-hidden="true" className="block h-full w-full">
        <defs>
          <radialGradient id="rp-studio" cx="0.5" cy="0.38" r="0.75">
            <stop offset="0" stopColor="#E9ECF1" />
            <stop offset="0.7" stopColor={colors.line} />
            <stop offset="1" stopColor="#B9BEC7" />
          </radialGradient>
          <linearGradient id="rp-key" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor={rgba('paper', 0.45)} />
            <stop offset="0.55" stopColor={rgba('paper', 0)} />
          </linearGradient>
        </defs>

        {/* Studio backdrop */}
        <rect width="80" height="100" fill="url(#rp-studio)" />

        {/* Figure, scaled from the bottom centre so it fills the frame like a
            passport-style head-and-shoulders crop */}
        <g transform="translate(40 100) scale(1.22) translate(-40 -100)">
          {/* Suit jacket */}
          <path
            d="M3 100 C4.5 86 13 78.5 27 74.5 L40 79 L53 74.5 C67 78.5 75.5 86 77 100 Z"
            fill={suit}
          />
          {/* Shirt and tie */}
          <path d="M31.5 72.5 L40 84 L48.5 72.5 L44.5 70.5 L40 74 L35.5 70.5 Z" fill={shirt} />
          <path
            d="M38.2 75.2 L41.8 75.2 L42.6 77.4 L41.2 79 L42.8 92 L40 95 L37.2 92 L38.8 79 L37.4 77.4 Z"
            fill={tie}
          />
          {/* Notched lapels */}
          <path d="M27 74.5 L31.5 72.5 L40 84 L37 92 L32 83 L34.2 80.6 Z" fill={lapel} />
          <path d="M53 74.5 L48.5 72.5 L40 84 L43 92 L48 83 L45.8 80.6 Z" fill={lapel} />
          <path d="M32 83 L37 92 M48 83 L43 92" stroke="#1E2124" strokeWidth="0.5" fill="none" />
          {/* Breast pocket */}
          <path d="M58 88 H66" stroke={lapel} strokeWidth="0.9" />

          {/* Neck */}
          <path d="M34.8 61 V71 Q40 74.4 45.2 71 V61 Z" fill={skinShade} />
          <g transform="translate(0 3.5)">
            {/* Ears */}
            <ellipse cx="26.6" cy="44.5" rx="2" ry="3.4" fill={skinShade} />
            <ellipse cx="53.4" cy="44.5" rx="2" ry="3.4" fill={skinShade} />
            {/* Head */}
            <path
              d="M27.4 40 C27.4 30 33 24.5 40 24.5 C47 24.5 52.6 30 52.6 40 V46 C52.6 54.5 47 61 40 61 C33 61 27.4 54.5 27.4 46 Z"
              fill={skin}
            />
            {/* Short, neatly parted hair */}
            <path
              d="M26.9 41.5 C25.8 29.5 31.5 22 40.5 22 C49 22 54.4 28.5 53.1 41.5 C52.2 35.5 50.4 32.2 47.6 30.6 C43.6 31.6 36 31.8 31 30.2 C29 32.4 27.6 36 26.9 41.5 Z"
              fill={hair}
            />
            <path
              d="M35.5 23.4 C34.6 26 33.2 28.4 31 30.2"
              stroke={rgba('paper', 0.3)}
              strokeWidth="0.5"
              fill="none"
            />
          </g>

          {/* Soft key light from the left */}
          <rect width="80" height="100" fill="url(#rp-key)" />

          {/* Document-style redaction bar */}
          <rect x="21" y="40.5" width="38" height="9.5" fill={colors.ink} />
          <text
            x="40"
            y="46.8"
            textAnchor="middle"
            fontFamily="JetBrains Mono, IBM Plex Mono, monospace"
            fontSize="3.6"
            fontWeight="500"
            letterSpacing="1.1"
            fill={colors.paper}
          >
            {tag}
          </text>
        </g>

        {/* File reference */}
        <text
          x="4"
          y="7"
          fontFamily="JetBrains Mono, IBM Plex Mono, monospace"
          fontSize="3.2"
          letterSpacing="0.6"
          fill={colors.mute}
        >
          {fileNo}
        </text>
      </svg>
    </div>
  );
}
