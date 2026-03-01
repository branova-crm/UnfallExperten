import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ihre Gutachter-Experten | Unabhängige Sachverständige',
  description: 'Unabhängige Gutachter-Experten für Unfall- und Schadensgutachten. Ihr regionaler Gutachter im Schadensfall.',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🔧</text></svg>"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
