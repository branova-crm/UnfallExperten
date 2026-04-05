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



            <WhatsAppWidget />
            <GlobalAnimations />
        </>
    );
}
