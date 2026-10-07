import { ImageResponse } from 'next/og';
import { colors, rgba } from '@/lib/colors';

export const runtime = 'edge';
export const alt = 'Elears — EU-sovereign private intelligence';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          background: colors.navy,
          color: colors.ivory,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px',
          backgroundImage: [
            `radial-gradient(ellipse 900px 360px at 18% 8%, ${rgba('crimson', 0.18)}, transparent 65%)`,
            `radial-gradient(ellipse 800px 320px at 86% 78%, ${rgba('cyan', 0.18)}, transparent 65%)`,
            `linear-gradient(135deg, ${rgba('ivory', 0.04)} 0 1px, transparent 1px 24px)`,
            `linear-gradient(45deg, ${rgba('ivory', 0.03)} 0 1px, transparent 1px 32px)`
          ].join(', ')
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 18, fontSize: 28 }}>
          <span style={{ letterSpacing: 8, fontWeight: 700 }}>ELEARS</span>
          <span style={{ color: colors.crimson }}>/</span>
          <span style={{ letterSpacing: 6, opacity: 0.75, fontSize: 18, color: colors.cyan }}>
            LISOWCZYCY
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <p
            style={{
              fontSize: 16,
              letterSpacing: 4,
              textTransform: 'uppercase',
              color: colors.cyan,
              opacity: 0.85,
              margin: 0,
              fontFamily: 'monospace'
            }}
          >
            ▍ Wrocław · CEE · NATO
          </p>
          <p
            style={{
              fontSize: 64,
              lineHeight: 1.1,
              margin: 0,
              fontFamily: 'sans-serif',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
              textShadow: `2px 0 0 ${rgba('crimson', 0.5)}, -2px 0 0 ${rgba('cyan', 0.5)}`
            }}
          >
            Intelligence from Europe&apos;s eastern frontier.
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 14,
            color: colors['ivory-dim'],
            fontFamily: 'monospace',
            letterSpacing: 2,
            textTransform: 'uppercase'
          }}
        >
          <span>elears.com</span>
          <span>EU-sovereign · AI-native</span>
        </div>
      </div>
    ),
    size
  );
}
