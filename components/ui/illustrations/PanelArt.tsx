import { IsoFrame, cube, disc, line, poly } from './iso';
import { POLAND_OUTLINE, WARSAW_UV, WROCLAW_UV } from './poland.data';

/* Illustrations for the feature panels on the home page. */

/* Hero panel: the outline of Poland laid on the plane, headquarters marked. */
export function PolandArt({ className = '' }: { className?: string }) {
  const outline = poly(POLAND_OUTLINE.map(([u, v]) => [u, v, 0]));
  const [wu, wv] = WROCLAW_UV;
  const [cu, cv] = WARSAW_UV;
  return (
    <IsoFrame className={className}>
      <path d={outline} className="fill-tint" strokeWidth="1.1" />
      {/* Warsaw, for orientation */}
      <path d={disc(cu, cv, 0.035, 0, 12)} className="fill-current" opacity="0.5" />
      {/* Wrocław: the pin */}
      <path d={disc(wu, wv, 0.14, 0, 24)} opacity="0.5" />
      <path d={disc(wu, wv, 0.045, 0, 14)} className="fill-current" />
      <path
        d={line([
          [wu, wv, 0],
          [wu, wv, 0.45]
        ])}
      />
      <path d={disc(wu, wv, 0.07, 0.45, 16)} className="fill-paper" strokeWidth="1.2" />
    </IsoFrame>
  );
}

/* Tint panel: a staircase of cubes. */
export function StepsArt({ className = '' }: { className?: string }) {
  const cubes = [cube(0.1, 0.1, 0.6, 0.6), cube(0.1, -0.5, 0.6, 0.6), cube(0.1, -0.5, 0.6, 1.2)];
  return (
    <IsoFrame className={className} planeFill="fill-tint">
      {cubes.map((c, i) => (
        <g key={i}>
          <path d={c.left} className="fill-tint" />
          <path d={c.right} className="fill-tint" />
          <path d={c.top} className="fill-tint" />
        </g>
      ))}
    </IsoFrame>
  );
}
