/* Single source of truth for the palette. Consumed by tailwind.config.ts and
   by places that cannot use Tailwind classes (OG image, root 404, inline SVG).

   Tactical Brutalism palette (design.md): deep black foundation, tactical dark
   green, strategic dark blue. The three brand colours are too dark to carry
   text on black, so `accent` and `signal` are lighter tints of the same hues
   for text, rules and interaction states (WCAG AA on ink and surface). */
export const colors = {
  ink: '#0A0A0A' /* deep black — page foundation (design.md) */,
  surface: '#0D1B2A' /* strategic dark blue — cards, panels (design.md) */,
  forest: '#0F3D2E' /* tactical dark green — filled elements (design.md) */,
  accent: '#5DBB8C' /* night-vision green tint — primary accent, active state */,
  signal: '#6FA8DC' /* strategic blue tint — interaction (hover / focus) */,
  ivory: '#F5F7FA' /* primary light text / inverse-button bg */,
  'ivory-dim': '#B8BDCC' /* secondary light text */,
  graphite: '#C9CDD8' /* body paragraph text on dark */,
  'graphite-soft': '#7C8194' /* muted text, labels, captions */,
  rule: '#22384C' /* hairline divider — lifted strategic blue */
} as const;

export type ColorToken = keyof typeof colors;

/** `rgba()` string for a palette token at the given alpha. */
export function rgba(token: ColorToken, alpha: number): string {
  const hex = colors[token].slice(1);
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16));
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
