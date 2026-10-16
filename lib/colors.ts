/* Single source of truth for the palette. Consumed by tailwind.config.ts and
   by places that cannot use Tailwind classes (OG image, root 404, inline SVG).

   Tactical Brutalism palette (design.md) with a blue structure and a brass
   accent: deep black foundation, strategic dark blues for surfaces and fills,
   muted brass for emphasis, ice blue for interaction states.
   All text pairs meet WCAG AA on ink, surface and navy. */
export const colors = {
  ink: '#0A0A0A' /* deep black — page foundation (design.md) */,
  surface: '#0D1B2A' /* strategic dark blue — cards, panels (design.md) */,
  navy: '#12355B' /* command blue — filled elements (buttons, banners, map) */,
  accent: '#B8995F' /* antique brass — primary accent, active state */,
  signal: '#B9DBF7' /* ice blue — interaction (hover / focus) */,
  ivory: '#F5F7FA' /* primary light text / inverse-button bg */,
  'ivory-dim': '#B8BDCC' /* secondary light text */,
  graphite: '#C9CDD8' /* body paragraph text on dark */,
  'graphite-soft': '#83889C' /* muted text, labels, captions (AA on surface) */,
  rule: '#22384C' /* hairline divider — lifted strategic blue */
} as const;

export type ColorToken = keyof typeof colors;

/** `rgba()` string for a palette token at the given alpha. */
export function rgba(token: ColorToken, alpha: number): string {
  const hex = colors[token].slice(1);
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16));
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
