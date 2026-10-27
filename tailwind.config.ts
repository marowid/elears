import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';
import { colors } from './lib/colors';

const config: Config = {
  content: ['./app/**/*.{ts,tsx,mdx}', './components/**/*.{ts,tsx}', './content/**/*.{md,mdx}'],
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: [
          'var(--font-sans)',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Helvetica Neue',
          'Arial',
          'sans-serif'
        ],
        mono: [
          'var(--font-mono)',
          'IBM Plex Mono',
          'SFMono-Regular',
          'Menlo',
          'Consolas',
          'monospace'
        ]
      },
      fontSize: {
        /* Display scale — regular weight, tight leading, like reference docs. */
        'display-1': ['2.75rem', { lineHeight: '1.08', letterSpacing: '-0.01em' }],
        'display-2': ['2.125rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'display-3': ['1.625rem', { lineHeight: '1.2', letterSpacing: '-0.005em' }],
        lead: ['1.125rem', { lineHeight: '1.55' }]
      },
      maxWidth: {
        prose: '720px',
        page: '1200px'
      },
      letterSpacing: {
        label: '0.08em',
        widish: '0.08em',
        wide2: '0.14em'
      },
      borderRadius: {
        none: '0px'
      }
    }
  },
  plugins: [typography]
};

export default config;
