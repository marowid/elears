import {
  COUNTRIES,
  GRATICULE,
  MAP_HEIGHT,
  MAP_WIDTH,
  WROCLAW_XY,
  type MapTier
} from './OfficeMap.data';

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
  legendOps: string;
  legendOpsDetail: string;
};

/* Fill/stroke per tier, light theme: quiet grey for context, blue tint for the
   area of operations, a stronger blue for CEE, navy for Poland. */
const TIER_CLASS: Record<MapTier, string> = {
  base: 'fill-paper-2 stroke-paper',
  ops: 'fill-tint stroke-paper',
  cee: 'fill-[#B7CBE6] stroke-paper',
  home: 'fill-navy stroke-paper'
};

const SWATCH: Record<Exclude<MapTier, 'base'>, string> = {
  ops: 'bg-tint',
  cee: 'bg-[#B7CBE6]',
  home: 'bg-navy'
};

export default function OfficeMap({
  label,
  pinTitle,
  coords,
  legendHome,
  legendRegion,
  legendOps,
  legendOpsDetail
}: Props) {
  const { x, y } = WROCLAW_XY;
  // Callout sits up and to the left of the pin, over the North Sea / Scandinavia gap.
  const cw = 176;
  const cx = x - 60 - cw;
  const cy = y - 84;

  return (
    <figure className="border border-line bg-paper">
      <svg
        viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
        role="img"
        aria-label={label}
        className="block h-auto w-full"
      >
        <rect width={MAP_WIDTH} height={MAP_HEIGHT} className="fill-paper" />
        <g strokeWidth="0.6" strokeLinejoin="round">
          {COUNTRIES.map((c) => (
            <path key={c.name} d={c.d} className={TIER_CLASS[c.tier]} />
          ))}
        </g>
        <path
          d={GRATICULE}
          fill="none"
          className="stroke-ink"
          strokeOpacity="0.12"
          strokeWidth="0.5"
          strokeDasharray="2 3"
        />

        {/* Leader line from pin to callout */}
        <path
          d={`M${x} ${y} L${x - 30} ${cy + 22} L${cx + cw} ${cy + 22}`}
          fill="none"
          className="stroke-paper"
          strokeWidth="3"
        />
        <path
          d={`M${x} ${y} L${x - 30} ${cy + 22} L${cx + cw} ${cy + 22}`}
          fill="none"
          className="stroke-ink"
          strokeWidth="1"
        />

        {/* Pin */}
        <g transform={`translate(${x} ${y})`}>
          <g className="stroke-paper" strokeWidth="3" fill="none">
            <circle r="14" />
            <path d="M-20 0 H-11 M11 0 H20 M0 -20 V-11 M0 11 V20" />
          </g>
          <circle r="14" fill="none" className="stroke-ink" strokeWidth="1" />
          <circle r="7" className="fill-paper stroke-ink" strokeWidth="1.2" />
          <circle r="2.6" className="fill-ink" />
          <path
            d="M-20 0 H-11 M11 0 H20 M0 -20 V-11 M0 11 V20"
            className="stroke-ink"
            strokeWidth="1"
          />
        </g>

        {/* Callout */}
        <g
          transform={`translate(${cx} ${cy})`}
          fontFamily="var(--font-mono), IBM Plex Mono, monospace"
        >
          <rect width={cw} height="44" className="fill-paper stroke-ink" strokeWidth="1" />
          <text x="12" y="18" fontSize="11" letterSpacing="1.4" className="fill-ink">
            {pinTitle}
          </text>
          <text x="12" y="34" fontSize="10.5" letterSpacing="0.4" className="fill-mute">
            {coords}
          </text>
        </g>
      </svg>

      <figcaption className="grid grid-cols-1 gap-x-8 gap-y-2 border-t border-line px-4 py-3 text-[13px] text-ink-2 sm:grid-cols-3">
        <span className="flex items-start gap-2">
          <span
            aria-hidden="true"
            className={`mt-1 inline-block h-3 w-3 shrink-0 border border-line ${SWATCH.home}`}
          />
          {legendHome}
        </span>
        <span className="flex items-start gap-2">
          <span
            aria-hidden="true"
            className={`mt-1 inline-block h-3 w-3 shrink-0 border border-line ${SWATCH.cee}`}
          />
          {legendRegion}
        </span>
        <span className="flex items-start gap-2">
          <span
            aria-hidden="true"
            className={`mt-1 inline-block h-3 w-3 shrink-0 border border-line ${SWATCH.ops}`}
          />
          <span>
            {legendOps}
            <span className="block text-mute">{legendOpsDetail}</span>
          </span>
        </span>
      </figcaption>
    </figure>
  );
}
