/* Single source of truth for the palette. Consumed by tailwind.config.ts and
   by places that cannot use Tailwind classes (OG image, root 404, inline SVG).

   Documentation-grade light palette: white paper, near-black ink for text and
   rules, one light-blue tint and one dark navy for feature panels, a muted
   brass accent for small marks, and a restrained blue for links and focus.
   Every text/background pair below meets WCAG AA. */
export const colors = {
  paper: '#FFFFFF' /* page background */,
  'paper-2': '#F4F5F7' /* quiet grey panels (brief, legend, code) */,
  tint: '#E3EDF8' /* light-blue feature panel */,
  ink: '#1E2124' /* primary text, strong rules, solid buttons */,
  'ink-2': '#44474C' /* body paragraph text */,
  mute: '#5E626A' /* captions, labels, eyebrows (AA on paper and tint) */,
  line: '#D6DADF' /* hairline dividers */,
  'line-2': '#E8EAEE' /* lighter hairline on grey panels */,
  navy: '#16304F' /* dark feature panel */,
  'navy-2': '#23416A' /* raised element on navy */,
  accent: '#786536' /* muted brass — marks, active state (AA on paper) */,
  signal: '#245FB8' /* link hover, focus ring (AA on paper) */,
  'on-navy': '#E8EEF6' /* text on navy */,
  'on-navy-mute': '#A9B8CC' /* secondary text on navy (AA) */
} as const;

export type ColorToken = keyof typeof colors;

/** `rgba()` string for a palette token at the given alpha. */
export function rgba(token: ColorToken, alpha: number): string {
  const hex = colors[token].slice(1);
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16));
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
