import { Metadata } from 'next';
import Link from 'next/link';
import ReferenzenGallery from '@/components/ReferenzenGallery';
import ReferenzenFallbeispiele from '@/components/ReferenzenFallbeispiele';

export const metadata: Metadata = {
    title: 'Referenzen – Echte Fälle & Gutachten | UnfallExperten NRW',
    description: 'Einblick in echte Gutachtenarbeit: Fahrzeugbilder aus der Praxis. Referenzen und Schadensdokumentation in NRW.',
};

export default function ReferenzenPage() {
    return (
        <>
            <section className="hero" style={{ minHeight: '85vh' }}>
                <div className="hero-bg">
                    <video autoPlay muted loop playsInline>
                        <source src="/images/herovideo2.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="hero-overlay"></div>
                <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="hero-content" style={{ maxWidth: '800px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h1 style={{ color: 'var(--clr-white)', marginBottom: '20px' }}>Referenzen</h1>
                        <p className="hero-subheadline mx-auto" style={{ fontSize: 'var(--fs-lg)' }}>
                            Einblicke in echte Gutachtenfälle – transparent dargestellt, damit Sie einschätzen können, wie wir Schäden bewerten und dokumentieren.
                        </p>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <div className="text-center" style={{ maxWidth: '720px', margin: '0 auto var(--sp-2xl)' }}>
                        <span className="section-label" style={{ color: 'var(--clr-primary)' }}>Echte Fälle</span>
                        <h2 className="section-title" style={{ color: 'var(--clr-text)' }}>Einblick in meine Arbeit</h2>
                        <p className="section-subtitle mx-auto">
                            Fahrzeugbilder aus realen Gutachten meiner Kunden. Klicken Sie auf ein Bild, um es zu vergrößern.
                        </p>
                    </div>
                    <ReferenzenGallery />
                </div>
            </section>

            <ReferenzenFallbeispiele />

            <section className="cta-banner">
                <div className="cta-banner-bg"></div>
                <div className="container">
                    <h2>Ähnlichen Fall?</h2>
                    <p>Wir begutachten Ihr Fahrzeug schnell und unabhängig – für Geschädigte in der Regel kostenlos.</p>
                    <div className="cta-banner-buttons">
                        <Link href="/kontakt" className="btn btn-outline">Kontakt aufnehmen</Link>
                        <a href="tel:+4902111234567" className="btn btn-primary">Jetzt anrufen</a>
                    </div>
                </div>
            </section>
        </>
    );
}
