import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import GlobalAnimations from '@/components/GlobalAnimations';

export const metadata: Metadata = {
  title: 'Ihre Gutachter-Experten | Unabhängige Sachverständige',
  description: 'Unabhängige Gutachter-Experten für Unfall- und Schadensgutachten. Ihr regionaler Gutachter im Schadensfall.',
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
      <body>
        <Header />
        <main>{children}</main>
        <Footer />

        {/* Mobile Sticky CTA */}
        <div className="mobile-cta-bar">
          <a href="tel:+4902111234567" className="btn btn-primary">📞 Anrufen</a>
          <a href="https://wa.me/4902111234567" className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
        </div>

        <WhatsAppWidget />
        <GlobalAnimations />
      </body>
    </html>
  );
}
