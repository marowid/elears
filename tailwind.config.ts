import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        /* Tokens kept by name; meanings flipped for dark-cyberpunk theme. */
        navy: '#06070C',          /* page ink — near-black like the logo */
        'navy-soft': '#0E1018',   /* elevated surface (cards, panels) */
        ivory: '#F5F7FA',         /* primary light text / inverse-button bg */
        'ivory-dim': '#B8BDCC',   /* secondary light */
        crimson: '#FF6A1A',       /* neon orange — primary glitch accent */
        'crimson-dim': '#C2410C',
        graphite: '#C9CDD8',      /* body paragraph text on dark */
        'graphite-soft': '#7C8194',
        rule: '#1F2436',          /* hairline divider */
        cyan: '#34F08D',          /* neon green — secondary glitch accent */
        'cyan-dim': '#15803D'
      },
      fontFamily: {
        serif: [
          'Source Serif 4',
          'Spectral',
          'Iowan Old Style',
          'Cambria',
          'Georgia',
          'serif'
        ],
        sans: [
          'Inter',
          'IBM Plex Sans',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Helvetica Neue',
          'Arial',
          'sans-serif'
        ],
        mono: [
          'JetBrains Mono',
          'IBM Plex Mono',
          'SFMono-Regular',
          'Menlo',
          'Consolas',
          'monospace'
        ],
        display: [
          'Space Grotesk',
          'Orbitron',
          'Inter',
          'sans-serif'
        ]
      },
      maxWidth: {
        prose: '720px',
        page: '1200px'
      },
      letterSpacing: {
        widish: '0.08em',
        wide2: '0.18em',
        wide3: '0.32em'
      },
      borderRadius: {
        none: '0px'
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' }
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' }
        }
      },
      animation: {
        scan: 'scan 7s linear infinite',
        flicker: 'flicker 4s ease-in-out infinite'
      }
    }
  },
  plugins: [typography]
};

export default config;
