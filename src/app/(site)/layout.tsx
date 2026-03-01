import HeaderWrapper from '@/components/HeaderWrapper';
import FooterWrapper from '@/components/FooterWrapper';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import GlobalAnimations from '@/components/GlobalAnimations';

export default function SiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <HeaderWrapper />
            <main>{children}</main>
            <FooterWrapper />

            {/* Mobile Sticky CTA */}
            <div className="mobile-cta-bar">
                <a href="tel:+4902111234567" className="btn btn-primary">📞 Anrufen</a>
                <a href="https://wa.me/4902111234567" className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
            </div>

            <WhatsAppWidget />
            <GlobalAnimations />
        </>
    );
}
