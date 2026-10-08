import { COUNTRIES, GRATICULE, MAP_HEIGHT, MAP_WIDTH, WROCLAW_XY } from './OfficeMap.data';

type Props = {
  /** Accessible description of the map. */
  label: string;
  /** Pin caption, e.g. "WROCŁAW · HQ". */
  pinTitle: string;
  /** Localised GPS string shown under the pin caption. */
  coords: string;
  /** Legend entries. */
  legendHome: string;
  legendRegion: string;
};

const TIER_CLASS = {
  base: 'fill-surface stroke-rule',
  cee: 'fill-forest/45 stroke-accent/25',
  home: 'fill-forest stroke-accent'
} as const;

export default function OfficeMap({ label, pinTitle, coords, legendHome, legendRegion }: Props) {
  const { x, y } = WROCLAW_XY;
  // Callout sits up and to the right of the pin, over the Baltic.
  const cx = x + 34;
  const cy = y - 92;

  return (
    <figure className="brackets relative border border-rule/40 bg-ink">
      <svg
        viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
        role="img"
        aria-label={label}
        className="block h-auto w-full"
      >
        <path d={GRATICULE} fill="none" className="stroke-rule" strokeWidth="0.5" strokeDasharray="2 3" />

        <g strokeWidth="0.6" strokeLinejoin="round">
          {COUNTRIES.map((c) => (
            <path
              key={c.name}
              d={c.d}
              className={TIER_CLASS[c.tier]}
              strokeWidth={c.tier === 'home' ? 1.2 : undefined}
            />
          ))}
        </g>

        {/* Leader line from pin to callout */}
        <path
          d={`M${x} ${y} L${x + 18} ${cy + 22} L${cx} ${cy + 22}`}
          fill="none"
          className="stroke-accent"
          strokeWidth="1"
        />

        {/* Pin */}
        <g transform={`translate(${x} ${y})`}>
          <circle r="16" fill="none" className="stroke-accent/40" strokeWidth="1" />
          <circle r="9" fill="none" className="stroke-accent" strokeWidth="1.2" />
          <circle r="3.5" className="fill-accent" />
          <path d="M-22 0 H-12 M12 0 H22 M0 -22 V-12 M0 12 V22" className="stroke-accent" strokeWidth="1" />
        </g>

        {/* Callout */}
        <g transform={`translate(${cx} ${cy})`} fontFamily="JetBrains Mono, IBM Plex Mono, monospace">
          <rect width="168" height="44" className="fill-ink/85 stroke-accent" strokeWidth="1" />
          <text x="10" y="18" fontSize="11" letterSpacing="1.6" className="fill-ivory">
            {pinTitle}
          </text>
          <text x="10" y="34" fontSize="10.5" letterSpacing="0.6" className="fill-accent">
            {coords}
          </text>
        </g>
      </svg>

      <figcaption className="flex flex-wrap gap-x-6 gap-y-2 border-t border-rule/40 px-4 py-3 font-mono text-[11px] uppercase tracking-widish text-graphite-soft">
        <span className="flex items-center gap-2">
          <span aria-hidden="true" className="inline-block h-2.5 w-2.5 border border-accent bg-forest" />
          {legendHome}
        </span>
        <span className="flex items-center gap-2">
          <span aria-hidden="true" className="inline-block h-2.5 w-2.5 border border-accent/25 bg-forest/45" />
          {legendRegion}
        </span>
      </figcaption>
    </figure>
  );
}
