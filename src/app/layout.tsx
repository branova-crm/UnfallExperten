import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { ConsentProvider } from '@/components/consent/ConsentProvider';
import JsonLd from '@/components/JsonLd';
import { SEO } from '@/lib/seo/config';
import { graph, organization, website, localBusiness } from '@/lib/seo/jsonld';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://unfallexperten-nrw.de'),
  title: {
    default: 'Ihre Gutachter-Experten | Unabhängige Sachverständige',
    template: '%s',
  },
  description: 'Unabhängige Gutachter-Experten für Unfall- und Schadensgutachten. Ihr regionaler Gutachter im Schadensfall.',
  applicationName: SEO.brandName,
  authors: [{ name: SEO.brandName }],
  creator: SEO.brandName,
  publisher: SEO.brandName,
  icons: {
    icon: [{ url: '/Favicon.svg', type: 'image/svg+xml' }],
    shortcut: '/Favicon.svg',
    apple: '/Favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: SEO.brandName,
    url: SEO.siteUrl,
    images: [{ url: SEO.ogImageUrl, width: 1200, height: 630, alt: SEO.brandName }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [SEO.ogImageUrl],
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
        <JsonLd data={graph([organization(), website(), localBusiness()])} />
        <ConsentProvider>{children}</ConsentProvider>
      </body>
    </html>
  );
}
