import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';
import { colors } from './lib/colors';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}'
  ],
  theme: {
    extend: {
      colors,
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
        }
      },
      animation: {
        scan: 'scan 7s linear infinite'
      }
    }
  },
  plugins: [typography]
};

export default config;
