/* Single source of truth for the palette. Consumed by tailwind.config.ts and
   by places that cannot use Tailwind classes (OG image, root 404, inline SVG).
   Token names kept from the original theme; meanings flipped for dark-cyberpunk. */
export const colors = {
  navy: '#06070C' /* page ink — near-black */,
  'navy-soft': '#0E1018' /* elevated surface (cards, panels) */,
  ivory: '#F5F7FA' /* primary light text / inverse-button bg */,
  'ivory-dim': '#B8BDCC' /* secondary light text */,
  crimson: '#FF6A1A' /* neon orange — primary accent, active state */,
  graphite: '#C9CDD8' /* body paragraph text on dark */,
  'graphite-soft': '#7C8194' /* muted text, labels, captions */,
  rule: '#1F2436' /* hairline divider */,
  cyan: '#34F08D' /* neon green — interaction (hover / focus) */
} as const;

export type ColorToken = keyof typeof colors;

/** `rgba()` string for a palette token at the given alpha. */
export function rgba(token: ColorToken, alpha: number): string {
  const hex = colors[token].slice(1);
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16));
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
