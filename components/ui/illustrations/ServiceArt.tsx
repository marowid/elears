import type { ServiceSlug } from '@/lib/services';
import { IsoFrame, cube, disc, line, oval, poly, pt } from './iso';

/* One isometric line drawing per service line. Monochrome, 1px strokes,
   drawn flat on the shared plane so the set reads as a family. */

const range = (n: number) => Array.from({ length: n }, (_, i) => i);

/* IDD — a screening grid: every subject a cell, a handful flagged, one under the lens. */
function IntegrityDueDiligence() {
  const n = 5;
  const a = -0.78;
  const step = 1.56 / n;
  const flagged = new Set(['1,3', '3,1', '2,2']);
  return (
    <>
      {range(n + 1).map((i) => (
        <path
          key={`u${i}`}
          d={line([
            [a + i * step, a],
            [a + i * step, -a]
          ])}
          opacity="0.6"
        />
      ))}
      {range(n + 1).map((i) => (
        <path
          key={`v${i}`}
          d={line([
            [a, a + i * step],
            [-a, a + i * step]
          ])}
          opacity="0.6"
        />
      ))}
      {range(n).flatMap((i) =>
        range(n).map((j) => {
          const u = a + (i + 0.5) * step;
          const v = a + (j + 0.5) * step;
          const hit = flagged.has(`${i},${j}`);
          return (
            <path
              key={`d${i}${j}`}
              d={disc(u, v, hit ? 0.075 : 0.045, 0, 20)}
              className={hit ? 'fill-current' : undefined}
            />
          );
        })
      )}
      {/* lens over the central flagged subject */}
      <path d={disc(a + 2.5 * step, a + 2.5 * step, 0.3, 0.02)} strokeWidth="1.4" />
      <path
        d={line([
          [a + 2.5 * step + 0.3, a + 2.5 * step + 0.3, 0.02],
          [a + 2.5 * step + 0.62, a + 2.5 * step + 0.62, 0.02]
        ])}
        strokeWidth="1.6"
      />
    </>
  );
}

/* GEO — contour map with two observation posts and the route between them. */
function GeopoliticalRisk() {
  const pin = (u: number, v: number) => (
    <>
      <path d={disc(u, v, 0.05, 0, 16)} className="fill-current" />
      <path
        d={line([
          [u, v, 0],
          [u, v, 0.42]
        ])}
      />
      <path d={disc(u, v, 0.07, 0.42, 16)} className="fill-paper" strokeWidth="1.2" />
    </>
  );
  return (
    <>
      <g opacity="0.75">
        <path d={oval(-0.15, 0.1, 0.72, 0.5)} />
        <path d={oval(-0.2, 0.05, 0.52, 0.34)} />
        <path d={oval(-0.25, 0.02, 0.32, 0.2)} />
        <path d={oval(0.52, -0.5, 0.26, 0.18)} />
        <path d={oval(0.5, -0.52, 0.12, 0.08)} />
      </g>
      <path
        d={`M${pt(-0.55, 0.45)} C${pt(-0.2, -0.1)} ${pt(0.2, 0.0)} ${pt(0.55, -0.45)}`}
        strokeDasharray="2.5 3"
      />
      {pin(-0.55, 0.45)}
      {pin(0.55, -0.45)}
    </>
  );
}

/* CTI — radar rings with contacts, a sweep, and a mast at the centre. */
function CyberThreatIntelligence() {
  const sweepPts: Array<[number, number, number]> = [[0, 0, 0]];
  for (let i = 0; i <= 12; i++) {
    const a = -0.3 + (i / 12) * 1.1;
    sweepPts.push([0.92 * Math.cos(a), 0.92 * Math.sin(a), 0]);
  }
  const sweep = poly(sweepPts);
  const contacts: Array<[number, number]> = [
    [0.55, -0.35],
    [-0.4, 0.5],
    [0.2, 0.7],
    [-0.65, -0.3],
    [0.75, 0.3]
  ];
  return (
    <>
      {[0.25, 0.5, 0.75].map((r) => (
        <path key={r} d={disc(0, 0, r, 0, 56)} opacity="0.7" />
      ))}
      <path d={disc(0, 0, 0.92, 0, 64)} />
      <path d={sweep} className="fill-current" opacity="0.08" stroke="none" />
      <path
        d={line([
          [-0.92, 0],
          [0.92, 0]
        ])}
        opacity="0.35"
      />
      <path
        d={line([
          [0, -0.92],
          [0, 0.92]
        ])}
        opacity="0.35"
      />
      {contacts.map(([u, v]) => (
        <path key={`${u}${v}`} d={disc(u, v, 0.06, 0, 16)} className="fill-current" />
      ))}
      <path
        d={line([
          [0, 0, 0],
          [0, 0, 0.55]
        ])}
        strokeWidth="1.2"
      />
      <path d={disc(0, 0, 0.1, 0.55, 20)} className="fill-paper" strokeWidth="1.2" />
      <path d={disc(0, 0, 0.2, 0.55, 24)} opacity="0.5" />
    </>
  );
}

/* INV — a graph of entities with the traced path emphasised, ending at the asset. */
function Investigations() {
  const nodes: Array<[number, number]> = [
    [-0.75, -0.5],
    [-0.3, -0.7],
    [0.2, -0.55],
    [-0.55, 0.05],
    [0.0, 0.0],
    [0.55, -0.15],
    [-0.35, 0.55],
    [0.25, 0.5]
  ];
  const edges: Array<[number, number]> = [
    [0, 1],
    [1, 2],
    [0, 3],
    [3, 4],
    [1, 4],
    [2, 5],
    [4, 5],
    [3, 6],
    [4, 7],
    [6, 7]
  ];
  const path = [0, 3, 4, 5];
  const onPath = new Set(path);
  return (
    <>
      {edges.map(([a, b]) => (
        <path key={`${a}-${b}`} d={line([nodes[a], nodes[b]])} opacity="0.5" />
      ))}
      <path d={line(path.map((i) => nodes[i]))} strokeWidth="1.6" />
      {nodes.map(([u, v], i) => (
        <path
          key={i}
          d={disc(u, v, onPath.has(i) ? 0.075 : 0.06, 0, 18)}
          className={onPath.has(i) ? 'fill-current' : 'fill-paper'}
        />
      ))}
      {/* the asset: a vault at the end of the trail */}
      {(() => {
        const c = cube(0.55, 0.3, 0.32, 0.28);
        return (
          <>
            <path d={c.left} className="fill-paper" />
            <path d={c.right} className="fill-paper" />
            <path d={c.top} className="fill-current" opacity="0.12" />
            <path d={c.top} />
          </>
        );
      })()}
    </>
  );
}

/* MON — a ledger under review: rows, ticks, one row flagged, the seal of the mandate. */
function MonitorshipCompliance() {
  const u0 = -0.8;
  const u1 = 0.6;
  const v0 = -0.62;
  const v1 = 0.62;
  const rows = 6;
  const rh = (v1 - v0) / rows;
  const cols = [u0, u0 + 0.5, u0 + 0.9, u1];
  const tick = (u: number, v: number) =>
    line([
      [u - 0.05, v, 0],
      [u - 0.01, v + 0.05, 0],
      [u + 0.07, v - 0.06, 0]
    ]);
  return (
    <>
      <path
        d={poly([
          [u0, v0],
          [u1, v0],
          [u1, v1],
          [u0, v1]
        ])}
      />
      <path
        d={poly([
          [u0, v0 + 3 * rh],
          [u1, v0 + 3 * rh],
          [u1, v0 + 4 * rh],
          [u0, v0 + 4 * rh]
        ])}
        className="fill-current"
        opacity="0.08"
        stroke="none"
      />
      {range(rows - 1).map((i) => (
        <path
          key={`r${i}`}
          d={line([
            [u0, v0 + (i + 1) * rh],
            [u1, v0 + (i + 1) * rh]
          ])}
          opacity="0.6"
        />
      ))}
      {cols.slice(1, -1).map((u) => (
        <path
          key={`c${u}`}
          d={line([
            [u, v0],
            [u, v1]
          ])}
          opacity="0.6"
        />
      ))}
      {range(rows).map((i) => (
        <path
          key={`t${i}`}
          d={line([
            [u0 + 0.06, v0 + (i + 0.5) * rh],
            [u0 + 0.38, v0 + (i + 0.5) * rh]
          ])}
          opacity="0.45"
        />
      ))}
      {[0, 1, 2, 4, 5].map((i) => (
        <path key={`k${i}`} d={tick(u0 + 0.7, v0 + (i + 0.5) * rh)} strokeWidth="1.3" />
      ))}
      {[0, 1, 4].map((i) => (
        <path key={`m${i}`} d={tick(u0 + 1.15, v0 + (i + 0.5) * rh)} strokeWidth="1.3" />
      ))}
      <path d={disc(u0 + 1.15, v0 + 3.5 * rh, 0.05, 0, 14)} className="fill-current" />
      {/* seal */}
      <path d={disc(0.62, 0.55, 0.26, 0.03, 36)} className="fill-paper" strokeWidth="1.2" />
      <path d={disc(0.62, 0.55, 0.17, 0.03, 28)} />
      <path d={disc(0.62, 0.55, 0.05, 0.03, 12)} className="fill-current" />
    </>
  );
}

/* ADV — the table: a small number of seats, one principal, one brief. */
function AdvisoryRetainer() {
  const seats: Array<[number, number]> = [
    [-0.55, -0.42],
    [0.0, -0.46],
    [0.55, -0.42],
    [0.78, 0.0],
    [0.55, 0.42],
    [0.0, 0.46],
    [-0.55, 0.42],
    [-0.78, 0.0]
  ];
  return (
    <>
      <path d={oval(0, 0, 0.66, 0.3, 0.06)} className="fill-paper" strokeWidth="1.2" />
      <path d={oval(0, 0, 0.66, 0.3, 0)} opacity="0.35" />
      {seats.map(([u, v], i) => (
        <path
          key={i}
          d={disc(u, v, 0.085, 0, 20)}
          className={i === 7 ? 'fill-current' : 'fill-paper'}
          strokeWidth={i === 7 ? 1.4 : 1}
        />
      ))}
      {/* the brief on the table */}
      <path
        d={poly([
          [-0.2, -0.12, 0.06],
          [0.14, -0.12, 0.06],
          [0.14, 0.12, 0.06],
          [-0.2, 0.12, 0.06]
        ])}
        className="fill-paper"
      />
      <path
        d={line([
          [-0.13, -0.05, 0.06],
          [0.07, -0.05, 0.06]
        ])}
        opacity="0.6"
      />
      <path
        d={line([
          [-0.13, 0.0, 0.06],
          [0.07, 0.0, 0.06]
        ])}
        opacity="0.6"
      />
      <path
        d={line([
          [-0.13, 0.05, 0.06],
          [0.0, 0.05, 0.06]
        ])}
        opacity="0.6"
      />
    </>
  );
}

const ART: Record<ServiceSlug, () => JSX.Element> = {
  'integrity-due-diligence': IntegrityDueDiligence,
  'geopolitical-risk': GeopoliticalRisk,
  'cyber-threat-intelligence': CyberThreatIntelligence,
  investigations: Investigations,
  'monitorship-compliance': MonitorshipCompliance,
  'advisory-retainer': AdvisoryRetainer
};

type Props = { slug: ServiceSlug; className?: string; quiet?: boolean };

export default function ServiceArt({ slug, className = '', quiet }: Props) {
  const Draw = ART[slug];
  return (
    <IsoFrame className={className} quiet={quiet}>
      <Draw />
    </IsoFrame>
  );
}
