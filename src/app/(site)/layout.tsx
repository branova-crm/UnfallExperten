import HeaderWrapper from '@/components/HeaderWrapper';
import FooterWrapper from '@/components/FooterWrapper';
import GlobalAnimations from '@/components/GlobalAnimations';
import StickyCtaBar from '@/components/StickyCtaBar';
import SchadenMeldenModal from '@/components/SchadenMeldenModal';
import CookieBanner from '@/components/consent/CookieBanner';

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
            <StickyCtaBar />
            <SchadenMeldenModal />
            <GlobalAnimations />
            <CookieBanner />
        </>
    );
}
