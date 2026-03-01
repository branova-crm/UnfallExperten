import { getPublishedPage, getDraftPage } from '@/lib/queries';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Konfigurator from '@/components/Konfigurator';

// Blacklist: existing routes that should NOT be handled by this catch-all
const SYSTEM_ROUTES = [
    'admin',
    'api',
    'leistungen',
    'kontakt',
    'standorte',
    'ueber-uns',
    'kaskoschaden',
    'kostenlose-dienstleistung',
    'kostenvoranschlag',
    'reparaturbestaetigung',
    'unfall-schadensgutachten',
    'wertgutachten',
    'p', // reserved
    'preview',
];

type Props = {
    params: Promise<{ slug: string }>;
};

export default async function CmsPage({ params }: Props) {
    const { slug } = await params;

    // Block system routes
    if (SYSTEM_ROUTES.includes(slug)) {
        notFound();
    }

    const draft = await draftMode();
    const page = draft.isEnabled
        ? await getDraftPage(slug)
        : await getPublishedPage(slug);

    if (!page) notFound();

    const sections = page.sections || [];

    return (
        <>
            {/* Preview Banner */}
            {draft.isEnabled && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999,
                    background: '#f59e0b', color: '#000', textAlign: 'center',
                    padding: '8px', fontSize: '13px', fontWeight: 600,
                }}>
                    📝 Vorschau-Modus aktiv –{' '}
                    <a href="/api/exit-preview" style={{ color: '#000', textDecoration: 'underline' }}>
                        Vorschau beenden
                    </a>
                </div>
            )}

            {sections.map((section: any) => {
                if (!section.is_enabled) return null;
                const data = section.data || {};

                switch (section.type) {
                    case 'hero':
                        return (
                            <section key={section.id} className="hero" style={{ minHeight: '60vh', padding: '120px 0 80px 0' }}>
                                <div className="hero-bg">
                                    <img src={data.backgroundImage || '/images/hero-bg.png'} alt={data.title || page.title} loading="eager" />
                                </div>
                                <div className="hero-overlay"></div>
                                <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
                                    <div className="hero-content" style={{ maxWidth: '800px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        {data.breadcrumb && (
                                            <p className="breadcrumb" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '15px' }}>
                                                <Link href="/">Startseite</Link> / {data.breadcrumb}
                                            </p>
                                        )}
                                        <h1 style={{ color: 'var(--clr-white)', marginBottom: '20px' }}>
                                            {data.headline || page.title}
                                        </h1>
                                        {data.subheadline && (
                                            <p className="hero-subheadline mx-auto" style={{ fontSize: 'var(--fs-lg)' }}>
                                                {data.subheadline}
                                            </p>
                                        )}
                                        {data.showCtas !== false && (
                                            <div className="hero-ctas" style={{ justifyContent: 'center', marginBottom: '30px' }}>
                                                <a href="tel:+4902111234567" className="btn btn-outline">📞 Jetzt anrufen</a>
                                                <a href="https://wa.me/4902111234567" className="btn btn-whatsapp" target="_blank">💬 WhatsApp starten</a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </section>
                        );

                    case 'content':
                        return (
                            <section key={section.id} className="content-section">
                                <div className="container">
                                    <div className="two-col">
                                        {data.image && (
                                            <div className="content-image animate-on-scroll">
                                                <img src={data.image} alt={data.imageAlt || ''} loading="lazy" />
                                            </div>
                                        )}
                                        <div className="content-text">
                                            {data.label && <span className="section-label">{data.label}</span>}
                                            {data.headline && <h2>{data.headline}</h2>}
                                            {data.text && <p>{data.text}</p>}
                                            {data.items && (
                                                <ul className="check-list">
                                                    {(Array.isArray(data.items) ? data.items : []).map((item: string, i: number) => (
                                                        <li key={i}>{item}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </section>
                        );

                    case 'cta':
                        return (
                            <section key={section.id} className="cta-banner">
                                <div className="cta-banner-bg"></div>
                                <div className="container">
                                    <h2>{data.headline || 'Jetzt Kontakt aufnehmen'}</h2>
                                    {data.text && <p>{data.text}</p>}
                                    <div className="cta-banner-buttons">
                                        <a href="tel:+4902111234567" className="btn btn-outline">📞 Jetzt anrufen</a>
                                        <a href="https://wa.me/4902111234567" className="btn btn-whatsapp" target="_blank">💬 WhatsApp</a>
                                    </div>
                                </div>
                            </section>
                        );

                    case 'contact':
                        return (
                            <section key={section.id} className="contact-section" id="contact">
                                <div className="container">
                                    <div className="contact-grid">
                                        <div className="contact-info">
                                            {data.label && <span className="section-label">{data.label}</span>}
                                            <h2>{data.headline || 'Kontakt aufnehmen'}</h2>
                                            {data.text && <p>{data.text}</p>}
                                        </div>
                                        <Konfigurator />
                                    </div>
                                </div>
                            </section>
                        );

                    default:
                        return (
                            <section key={section.id} className="content-section">
                                <div className="container">
                                    {data.headline && <h2>{data.headline}</h2>}
                                    {data.text && <p>{data.text}</p>}
                                </div>
                            </section>
                        );
                }
            })}

            {sections.length === 0 && (
                <section className="content-section" style={{ minHeight: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div className="container" style={{ textAlign: 'center' }}>
                        <h1>{page.title}</h1>
                        <p style={{ color: 'var(--clr-text-muted)' }}>Diese Seite hat noch keinen Inhalt.</p>
                    </div>
                </section>
            )}
        </>
    );
}
