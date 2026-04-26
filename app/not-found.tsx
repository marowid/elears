import Link from 'next/link';

export default function RootNotFound() {
  return (
    <html lang="en">
      <body
        style={{
          fontFamily: 'system-ui, sans-serif',
          background: '#06070C',
          color: '#F5F7FA',
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
              color: '#FF6A1A'
            }}
          >
            404
          </p>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '2.25rem', marginTop: '1rem' }}>
            Page not found · Nie znaleziono strony.
          </h1>
          <p style={{ marginTop: '1rem' }}>
            <Link href="/pl" style={{ color: '#34F08D' }}>
              Strona główna
            </Link>{' '}
            ·{' '}
            <Link href="/en" style={{ color: '#34F08D' }}>
              Home
            </Link>
          </p>
        </div>
      </body>
    </html>
  );
}
