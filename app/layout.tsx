import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://elears.com'),
  title: {
    default: 'ELEARS — EU-sovereign private intelligence',
    template: '%s — ELEARS'
  },
  description:
    'ELEARS is an EU-sovereign, AI-native private intelligence firm headquartered in Wrocław, Poland.',
  applicationName: 'ELEARS',
  authors: [{ name: 'ELEARS sp. z o.o.' }],
  creator: 'ELEARS sp. z o.o.',
  publisher: 'ELEARS sp. z o.o.',
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
