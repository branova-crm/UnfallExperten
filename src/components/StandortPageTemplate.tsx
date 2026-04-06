import Link from 'next/link';
import Konfigurator from '@/components/Konfigurator';

export interface StandortData {
    city: string;
    slug: string;
    heroSubline?: string;
    trustText?: string;
    introParagraph?: string;
    areas?: Array<{ city: string; time: string }>;
    otherCities?: Array<{ name: string; slug: string }>;
    faqs?: Array<{ q: string; a: string }>;
}

export default function StandortPageTemplate({ data }: { data: StandortData }) {
    const { city, slug, heroSubline, introParagraph, areas, otherCities, faqs } = data;

    return (
        <div className="standort-detail-page">
            {/* LOCAL HERO */}
            <section className="hero" style={{ minHeight: '80vh', padding: '120px 0 80px 0' }}>
                <div className="hero-bg"><img src="/images/hero-bg.png" alt={`KFZ-Gutachter ${city}`} loading="eager" /></div>
                <div className="hero-overlay"></div>
                <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="hero-content" style={{ maxWidth: '800px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <p className="breadcrumb" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '15px' }}>
                            <Link href="/">Startseite</Link> / <Link href="/standorte">Standorte</Link> / {city}
                        </p>
                        <h1 style={{ color: 'var(--clr-white)', marginBottom: '20px' }}>KFZ-Gutachter {city}</h1>
                        <p className="hero-subheadline mx-auto" style={{ fontSize: 'var(--fs-lg)' }}>
                            {heroSubline || `Schnelle Schadensbegutachtung direkt bei Ihnen vor Ort in ${city} – kostenlos für Unfallgeschädigte.`}
                        </p>
                        <div className="hero-ctas" style={{ justifyContent: 'center', marginBottom: '30px', display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                            <a href="tel:+4902111234567" className="btn btn-outline"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '6px' }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg> Jetzt anrufen</a>
                            <a href="https://wa.me/4902111234567" className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '6px' }}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785h-.005a9.868 9.868 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374A9.86 9.86 0 0 1 2.17 12.06c0-5.456 4.436-9.893 9.9-9.893a9.827 9.827 0 0 1 7.001 2.902 9.828 9.828 0 0 1 2.893 7.003c-.004 5.456-4.44 9.893-9.913 9.893zM20.52 3.449C18.24 1.245 15.24 0 12.05 0 5.463 0 .104 5.334.101 11.893a11.793 11.793 0 0 0 1.587 5.946L0 24l6.335-1.652A11.882 11.882 0 0 0 12.05 24c6.584 0 11.94-5.335 11.943-11.893a11.808 11.808 0 0 0-3.473-8.658z" /></svg> WhatsApp starten</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTRO PARAGRAPH */}
            {introParagraph && (
                <section className="content-section" style={{ padding: 'var(--sp-2xl) 0', background: 'var(--clr-white)' }}>
                    <div className="container text-center" style={{ maxWidth: '800px' }}>
                        <h2 className="section-title">Hilfe nach dem Unfall in {city}</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>{introParagraph}</p>
                    </div>
                </section>
            )}

            {/* 3 STEPS */}
            <section className="process-section" style={{ padding: 'var(--sp-4xl) 0' }}>
                <div className="container text-center">
                    <span className="section-label" style={{ color: 'var(--clr-primary)' }}>Ablauf</span>
                    <h2 className="section-title" style={{ color: 'var(--clr-text)' }}>In 3 Schritten zu Ihrem Recht</h2>
                    <div className="three-col" style={{ marginTop: 'var(--sp-2xl)' }}>
                        <div className="timeline-card animate-on-scroll">
                            <h3>1. Termin vereinbaren</h3>
                            <p>Rufen Sie uns an oder nutzen Sie WhatsApp. Wir sind sofort in {city} für Sie erreichbar.</p>
                        </div>
                        <div className="timeline-card animate-on-scroll">
                            <h3>2. Begutachtung vor Ort</h3>
                            <p>Wir kommen direkt zum Unfallort, nach Hause oder zur Arbeit – wo auch immer Ihr Fahrzeug steht.</p>
                        </div>
                        <div className="timeline-card animate-on-scroll">
                            <h3>3. Gutachten erhalten</h3>
                            <p>Wir erstellen das ausführliche Gutachten innerhalb von 24–72 Stunden und senden es an die Versicherung.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* AREAS (Einsatzgebiet) */}
            {areas && areas.length > 0 && (
                <section className="vehicles-section" style={{ background: 'var(--clr-offwhite)', padding: 'var(--sp-4xl) 0' }}>
                    <div className="container">
                        <div className="text-center">
                            <span className="section-label" style={{ color: 'var(--clr-primary)' }}>Einsatzgebiete</span>
                            <h2 className="section-title">Schnell bei Ihnen in {city} und Umgebung</h2>
                        </div>
                        <div className="location-badge-grid" style={{ marginTop: 'var(--sp-xl)', display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
                            {areas.map((area, i) => (
                                <div key={i} className="location-pill" style={{ background: '#fff', padding: '10px 20px', borderRadius: '30px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <div className="pill-icon" style={{ color: 'var(--clr-primary)' }}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></div>
                                    <div className="pill-content" style={{ display: 'flex', flexDirection: 'column' }}>
                                        <span className="pill-city" style={{ fontWeight: 600 }}>{area.city}</span>
                                        <span className="pill-time" style={{ fontSize: '0.85rem', color: '#666' }}>{area.time}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* VORTEILE */}
            <section className="content-section">
                <div className="container">
                    <div className="two-col" style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
                        <div className="content-text" style={{ flex: '1 1 500px' }}>
                            <span className="section-label" style={{ color: 'var(--clr-primary)' }}>Ihre Experten</span>
                            <h2 style={{ color: 'var(--clr-text)' }}>Die UnfallExperten für {city}</h2>
                            <p>Verlassen Sie sich auf unser lokales Team für eine schnelle und rechtssichere Schadensregulierung.</p>
                            <ul className="check-list animate-on-scroll" style={{ marginTop: '20px', listStyle: 'none', padding: 0 }}>
                                <li style={{ margin: '10px 0' }}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginRight: '8px' }}><polyline points="20 6 9 17 4 12"></polyline></svg> <strong>24/7-Service</strong> – Kurzfristige Termine auch am Wochenende</li>
                                <li style={{ margin: '10px 0' }}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginRight: '8px' }}><polyline points="20 6 9 17 4 12"></polyline></svg> <strong>Erfahrene Sachverständige</strong> & Experten für KFZ-Schäden</li>
                                <li style={{ margin: '10px 0' }}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginRight: '8px' }}><polyline points="20 6 9 17 4 12"></polyline></svg> <strong>Absolut kostenlos</strong> für Sie bei unverschuldeten Unfällen</li>
                                <li style={{ margin: '10px 0' }}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginRight: '8px' }}><polyline points="20 6 9 17 4 12"></polyline></svg> <strong>Komplett-Service</strong> inkl. Anwalt- und Werkstattvermittlung</li>
                                <li style={{ margin: '10px 0' }}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginRight: '8px' }}><polyline points="20 6 9 17 4 12"></polyline></svg> <strong>Lokale Marktkenntnis</strong> für präzise Wiederbeschaffungswerte in {city}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            {faqs && faqs.length > 0 && (
                <section className="faq-section" style={{ background: 'var(--clr-offwhite)', padding: 'var(--sp-4xl) 0' }}>
                    <div className="container" style={{ maxWidth: '800px' }}>
                        <div className="text-center" style={{ marginBottom: '40px' }}>
                            <span className="section-label" style={{ color: 'var(--clr-primary)' }}>FAQ</span>
                            <h2 className="section-title" style={{ color: 'var(--clr-text)' }}>Häufige Fragen zu {city}</h2>
                        </div>
                        <div className="faq-grid" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            {faqs.map((faq, i) => (
                                <div key={i} className="faq-item" style={{ background: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                                    <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: 'var(--clr-text)' }}>{faq.q}</h3>
                                    <p style={{ color: '#555', lineHeight: '1.6' }}>{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* OTHER LOCATIONS */}
            <section className="content-section" style={{ textAlign: 'center', background: 'var(--clr-white)', padding: 'var(--sp-3xl) 0' }}>
                <div className="container">
                    <h3>Auch an diesen Standorten für Sie da:</h3>
                    <div style={{ marginTop: '20px', display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        {(otherCities || []).map((c, i) => (
                            <Link key={i} href={`/standorte/${c.slug}`} style={{ background: 'var(--clr-offwhite)', padding: '10px 20px', borderRadius: '20px', border: '1px solid var(--clr-border)', color: 'inherit', textDecoration: 'none' }}>
                                {c.name}
                            </Link>
                        ))}
                        <Link href="/standorte" style={{ fontWeight: 600, color: 'var(--clr-primary)', padding: '10px' }}>Alle Standorte ansehen →</Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-banner" style={{ background: 'var(--clr-primary)', color: '#fff', padding: '60px 0', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ color: '#fff', marginBottom: '15px' }}>Stressfreie Regulierung – Wir kümmern uns um alles</h2>
                    <p style={{ marginBottom: '30px' }}>Lehnen Sie sich zurück. Ihr KFZ-Gutachter für {city} erledigt die Arbeit.</p>
                    <div className="cta-banner-buttons">
                        <a href="tel:+4902111234567" className="btn btn-accent" style={{ background: '#fff', color: 'var(--clr-primary)', padding: '15px 30px', borderRadius: '30px', fontWeight: 'bold', textDecoration: 'none' }}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '6px' }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg> Jetzt kostenlos anrufen</a>
                    </div>
                </div>
            </section>

            {/* CONTACT FORM */}
            <section id="contact" className="contact-section">
                <div className="container">
                    <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                        <div className="contact-info">
                            <span className="section-label" style={{ color: 'var(--clr-primary)' }}>Kontakt</span>
                            <h2 style={{ color: 'var(--clr-text)' }}>Gutachter in {city} beauftragen</h2>
                            <p>Hinterlassen Sie Ihre Nummer und wir melden uns innerhalb von 15 Minuten – kostenlos und unverbindlich.</p>
                            <div className="contact-direct" style={{ marginTop: '30px' }}>
                                <a href="tel:+4902111234567" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.2rem', color: 'var(--clr-primary)', textDecoration: 'none', fontWeight: 'bold' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg> 0211 – 123 456 7
                                </a>
                            </div>
                        </div>
                        <Konfigurator />
                    </div>
                </div>
            </section>
        </div>
    );
}
