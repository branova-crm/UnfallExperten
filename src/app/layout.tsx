import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { ConsentProvider } from '@/components/consent/ConsentProvider';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ihre Gutachter-Experten | Unabhängige Sachverständige',
  description: 'Unabhängige Gutachter-Experten für Unfall- und Schadensgutachten. Ihr regionaler Gutachter im Schadensfall.',
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🔧</text></svg>"
  },
  verification: {
    google: 'U_KQIHdbV5CeODfpu999LUxo88jDCOrk3dy9niVskm8',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning className={inter.variable}>
      <body>
        <ConsentProvider>{children}</ConsentProvider>
      </body>
    </html>
  );
}
