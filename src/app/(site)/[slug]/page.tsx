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
                            <section key={section.id} className="hero" style={{ minHeight: '80vh', padding: '120px 0 80px 0' }}>
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
                                                <a href="tel:+4902111234567" className="btn btn-outline"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '6px' }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg> Jetzt anrufen</a>
                                                <a href="https://wa.me/4902111234567" className="btn btn-whatsapp" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '6px' }}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785h-.005a9.868 9.868 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374A9.86 9.86 0 0 1 2.17 12.06c0-5.456 4.436-9.893 9.9-9.893a9.827 9.827 0 0 1 7.001 2.902 9.828 9.828 0 0 1 2.893 7.003c-.004 5.456-4.44 9.893-9.913 9.893zM20.52 3.449C18.24 1.245 15.24 0 12.05 0 5.463 0 .104 5.334.101 11.893a11.793 11.793 0 0 0 1.587 5.946L0 24l6.335-1.652A11.882 11.882 0 0 0 12.05 24c6.584 0 11.94-5.335 11.943-11.893a11.808 11.808 0 0 0-3.473-8.658z" /></svg> WhatsApp starten</a>
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
                                        <a href="tel:+4902111234567" className="btn btn-outline"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '6px' }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg> Jetzt anrufen</a>
                                        <a href="https://wa.me/4902111234567" className="btn btn-whatsapp" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '6px' }}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785h-.005a9.868 9.868 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374A9.86 9.86 0 0 1 2.17 12.06c0-5.456 4.436-9.893 9.9-9.893a9.827 9.827 0 0 1 7.001 2.902 9.828 9.828 0 0 1 2.893 7.003c-.004 5.456-4.44 9.893-9.913 9.893zM20.52 3.449C18.24 1.245 15.24 0 12.05 0 5.463 0 .104 5.334.101 11.893a11.793 11.793 0 0 0 1.587 5.946L0 24l6.335-1.652A11.882 11.882 0 0 0 12.05 24c6.584 0 11.94-5.335 11.943-11.893a11.808 11.808 0 0 0-3.473-8.658z" /></svg> WhatsApp</a>
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
