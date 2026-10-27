/* Isometric drawing kit for the capability illustrations.
   All drawings share one 240×160 frame: a white diamond plane in the middle,
   two faint stacked planes above and below, and the plane's edges extended
   as hairlines to the frame edge. Content is placed in plane coordinates
   (u, v ∈ [-1, 1], h = height) and projected with iso(). */

export const W = 240;
export const H = 160;
const CX = 120;
const CY = 81;
const S = 52; // plane half-size in px along an axis
const C30 = Math.cos(Math.PI / 6);

export function iso(u: number, v: number, h = 0): [number, number] {
  return [CX + (u - v) * C30 * S, CY + (u + v) * 0.5 * S - h * S];
}

const f = (n: number) => n.toFixed(1);

/** "x y" string for a plane point. */
export function pt(u: number, v: number, h = 0): string {
  const [x, y] = iso(u, v, h);
  return `${f(x)} ${f(y)}`;
}

/** Closed polygon path from plane points. */
export function poly(points: Array<[number, number, number?]>): string {
  return 'M' + points.map(([u, v, h]) => pt(u, v, h ?? 0)).join(' L') + ' Z';
}

/** Open polyline path from plane points. */
export function line(points: Array<[number, number, number?]>): string {
  return 'M' + points.map(([u, v, h]) => pt(u, v, h ?? 0)).join(' L');
}

/** Circle of radius r drawn flat on the plane (sampled, so it projects correctly). */
export function disc(u: number, v: number, r: number, h = 0, n = 40): string {
  const pts: Array<[number, number, number]> = [];
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    pts.push([u + r * Math.cos(a), v + r * Math.sin(a), h]);
  }
  return poly(pts);
}

/** Axis-aligned ellipse on the plane. */
export function oval(u: number, v: number, ru: number, rv: number, h = 0, n = 48): string {
  const pts: Array<[number, number, number]> = [];
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    pts.push([u + ru * Math.cos(a), v + rv * Math.sin(a), h]);
  }
  return poly(pts);
}

/** Cube with its base corner at (u, v), side s, height hgt. Returns the three visible faces. */
export function cube(u: number, v: number, s: number, hgt: number) {
  const top = poly([
    [u, v, hgt],
    [u + s, v, hgt],
    [u + s, v + s, hgt],
    [u, v + s, hgt]
  ]);
  const left = poly([
    [u, v + s, 0],
    [u + s, v + s, 0],
    [u + s, v + s, hgt],
    [u, v + s, hgt]
  ]);
  const right = poly([
    [u + s, v, 0],
    [u + s, v + s, 0],
    [u + s, v + s, hgt],
    [u + s, v, hgt]
  ]);
  return { top, left, right };
}

const PLANE: Array<[number, number]> = [
  [-1, -1],
  [1, -1],
  [1, 1],
  [-1, 1]
];

type FrameProps = {
  children: React.ReactNode;
  className?: string;
  /** Tailwind fill class for the main plane; must match the panel behind it. */
  planeFill?: string;
  /** Hide the faint stacked planes (for small renderings). */
  quiet?: boolean;
};

export function IsoFrame({
  children,
  className = '',
  planeFill = 'fill-paper',
  quiet = false
}: FrameProps) {
  const main = poly(PLANE);
  const [lx, ly] = iso(-1, -1);
  const [tx, ty] = iso(1, -1);
  const [rx, ry] = iso(1, 1);
  const [bx, by] = iso(-1, 1);
  // Extend each plane edge to the frame edge (slope ±tan30).
  const k = 0.5 / C30;
  const ext = [
    `M${f(0)} ${f(ly + lx * k)} L${f(W)} ${f(ty - (W - tx) * k)}`,
    `M${f(0)} ${f(by - bx * k)} L${f(W)} ${f(ry + (W - rx) * k)}`
  ];
  const dy = 30;
  const above =
    'M' +
    PLANE.map(([u, v]) => {
      const [x, y] = iso(u, v);
      return `${f(x)} ${f(y - dy)}`;
    }).join(' L') +
    ' Z';
  const below =
    'M' +
    PLANE.map(([u, v]) => {
      const [x, y] = iso(u, v);
      return `${f(x)} ${f(y + dy)}`;
    }).join(' L') +
    ' Z';

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinejoin="round"
      strokeLinecap="round"
      className={`block h-auto w-full ${className}`}
    >
      {!quiet && (
        <g opacity="0.22" strokeWidth="0.75">
          <path d={ext[0]} />
          <path d={ext[1]} />
          <path d={above} />
          <path d={below} />
        </g>
      )}
      <path d={main} className={planeFill} />
      {children}
    </svg>
  );
}
