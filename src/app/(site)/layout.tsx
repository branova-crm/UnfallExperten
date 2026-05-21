import HeaderWrapper from '@/components/HeaderWrapper';
import FooterWrapper from '@/components/FooterWrapper';
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



            <GlobalAnimations />
        </>
    );
}
