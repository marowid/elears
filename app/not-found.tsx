import Link from 'next/link';
import { colors } from '@/lib/colors';
import { locales } from '@/i18n';

const HOME_LABEL = { pl: 'Strona główna', en: 'Home' } as const;
const TITLE = { pl: 'Nie znaleziono strony.', en: 'Page not found.' } as const;

export default function RootNotFound() {
  return (
    <html lang="en">
      <body
        style={{
          fontFamily: 'system-ui, sans-serif',
          background: colors.ink,
          color: colors.ivory,
          minHeight: '100vh',
          display: 'grid',
          placeItems: 'center',
          padding: '2rem',
          textAlign: 'center'
        }}
      >
        <div>
          <p
            style={{
              fontFamily: 'monospace',
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              color: colors.accent
            }}
          >
            404
          </p>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '2.25rem', marginTop: '1rem' }}>
            {locales.map((l) => TITLE[l]).join(' · ')}
          </h1>
          <p style={{ marginTop: '1rem' }}>
            {locales.map((l, i) => (
              <span key={l}>
                {i > 0 && ' · '}
                <Link href={`/${l}`} style={{ color: colors.signal }}>
                  {HOME_LABEL[l]}
                </Link>
              </span>
            ))}
          </p>
        </div>
      </body>
    </html>
  );
}
