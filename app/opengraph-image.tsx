import { ImageResponse } from 'next/og';
import { colors } from '@/lib/colors';

export const runtime = 'edge';
export const alt = 'ELEARS — EU-sovereign private intelligence';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        height: '100%',
        width: '100%',
        background: colors.paper,
        color: colors.ink,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '64px 72px',
        fontFamily: 'sans-serif'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 24 }}>
        <div style={{ width: 36, height: 36, background: colors.ink }} />
        <span style={{ letterSpacing: 4, fontWeight: 500 }}>ELEARS</span>
        <span style={{ color: colors.mute }}>/</span>
        <span style={{ color: colors.mute }}>Lisowczycy</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
        <p
          style={{
            fontSize: 16,
            letterSpacing: 3,
            textTransform: 'uppercase',
            color: colors.mute,
            margin: 0,
            fontFamily: 'monospace'
          }}
        >
          Wrocław · CEE · NATO
        </p>
        <p style={{ fontSize: 66, lineHeight: 1.08, margin: 0, fontWeight: 400, maxWidth: 980 }}>
          Intelligence from Europe&apos;s Eastern Frontier.
        </p>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          borderTop: `1px solid ${colors.ink}`,
          paddingTop: 20,
          fontSize: 16,
          color: colors.mute,
          fontFamily: 'monospace',
          letterSpacing: 2,
          textTransform: 'uppercase'
        }}
      >
        <span>elears.com</span>
        <span>EU-sovereign · AI-native</span>
      </div>
    </div>,
    size
  );
}
