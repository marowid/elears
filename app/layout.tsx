import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://elears.com'),
  title: {
    default: 'Elears — EU-sovereign private intelligence',
    template: '%s — Elears'
  },
  description:
    'Elears is an EU-sovereign, AI-native private intelligence firm headquartered in Wrocław, Poland.',
  applicationName: 'Elears',
  authors: [{ name: 'Elears sp. z o.o.' }],
  creator: 'Elears sp. z o.o.',
  publisher: 'Elears sp. z o.o.',
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
