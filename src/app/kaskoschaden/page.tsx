import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Kaskoschäden – Unabhängiges Gutachten bei Teil-/Vollkasko | UnfallExperten NRW',
    description: 'Kaskoschaden in NRW? Unabhängiges Gutachten für Teil- und Vollkaskoschäden. Faire Entschädigung bei Vandalismus, Sturm, Wildunfall & mehr. Jetzt anfragen!',
};

export default function KaskoPage() {
    return (
        <>
            <section className="hero" style={{ minHeight: '60vh', padding: '120px 0 80px 0' }}>
                <div className="hero-bg"><img src="/images/hero-bg.png" alt="Kaskoschäden NRW" loading="eager" /></div>
                <div className="hero-overlay"></div>
                <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="hero-content" style={{ maxWidth: '800px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <p className="breadcrumb" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '15px' }}><Link href="/">Startseite</Link> / <Link href="/leistungen">Leistungen</Link> / Kaskoschäden</p>
                        <h1 style={{ color: 'var(--clr-white)', marginBottom: '20px' }}>Kaskoschäden</h1>
                        <p className="hero-subheadline mx-auto" style={{ fontSize: 'var(--fs-lg)' }}>Unabhängige Gutachten für Teil- und Vollkaskoschäden – damit Sie die faire Entschädigung erhalten, die Ihnen zusteht.</p>
                        <div className="hero-ctas" style={{ justifyContent: 'center', marginBottom: '30px' }}>
                            <a href="tel:+4902111234567" className="btn btn-outline">📞 Jetzt anrufen</a>
                            <a href="https://wa.me/4902111234567" className="btn btn-whatsapp" target="_blank">💬 WhatsApp starten</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <div className="two-col">
                        <div className="content-image animate-on-scroll"><img src="/images/hero-bg.png" alt="Kaskoschäden Gutachten" loading="lazy" /></div>
                        <div className="content-text">
                            <span className="section-label">Faire Bewertung</span>
                            <h2>Unabhängige Gutachten für faire Entschädigung</h2>
                            <p>Bei Kaskoschäden setzt Ihre Versicherung oft eigene Gutachter ein, die den Schaden tendenziell niedrig bewerten. Ein unabhängiges Gutachten von UnfallExperten NRW stellt sicher, dass Sie den fairen Ausgleich erhalten.</p>
                            <p>Wir begutachten alle Arten von Kaskoschäden:</p>
                            <ul className="check-list">
                                <li>Vandalismus und mutwillige Beschädigung</li>
                                <li>Sturm-, Hagel- und Überschwemmungsschäden</li>
                                <li>Wildunfälle und Tierbissschäden</li>
                                <li>Diebstahl und Teildiebstahl</li>
                                <li>Selbstverschuldete Unfälle (Vollkasko)</li>
                                <li>Brand- und Explosionsschäden</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-section alt">
                <div className="container">
                    <div className="two-col reverse">
                        <div className="content-image animate-on-scroll"><img src="/images/hero-bg.png" alt="Anfechtung Versicherungsangebot" loading="lazy" /></div>
                        <div className="content-text">
                            <span className="section-label">Ihre Rechte</span>
                            <h2>Anfechtung &amp; professionelle Schadensbegutachtung</h2>
                            <p>Hat Ihre Versicherung ein unzureichendes Angebot gemacht? Wir unterstützen Sie bei der Anfechtung und liefern die fachliche Grundlage für Ihre Nachforderung.</p>
                            <ul className="check-list">
                                <li>Unabhängige Gegenbewertung zum Versicherungsgutachten</li>
                                <li>Präzise Dokumentation aller Schäden mit Fotobeweis</li>
                                <li>Unterstützung bei der Korrespondenz mit Ihrer Versicherung</li>
                                <li>Ermittlung des tatsächlichen Wiederbeschaffungs- und Restwerts</li>
                            </ul>
                            <p>Unser Ziel: Sie erhalten die Entschädigung, die Ihnen tatsächlich zusteht – nicht weniger.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-banner">
                <div className="cta-banner-bg"></div>
                <div className="container">
                    <h2>Kaskoschaden melden</h2>
                    <p>Lassen Sie Ihren Kaskoschaden unabhängig bewerten – für die faire Entschädigung.</p>
                    <div className="cta-banner-buttons">
                        <a href="tel:+4902111234567" className="btn btn-accent">📞 Jetzt anrufen</a>
                        <a href="https://wa.me/4902111234567" className="btn btn-whatsapp" target="_blank">💬 WhatsApp</a>
                    </div>
                </div>
            </section>

            <section className="contact-section" id="contact">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-info">
                            <span className="section-label">Kontakt</span>
                            <h2>Kaskoschaden bewerten lassen</h2>
                            <p>Wir beraten Sie zu Ihrem Kaskoschaden und erstellen ein unabhängiges Gutachten.</p>
                            <div className="contact-direct">
                                <a href="tel:+4902111234567">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg> 0211 – 123 456 7
                                </a>
                            </div>
                        </div>
                        <form className="contact-form callback-form" noValidate>
                            <div className="form-group"><label htmlFor="name">Ihr Name *</label><input type="text" id="name" name="name" placeholder="Max Mustermann" required /></div>
                            <div className="form-group"><label htmlFor="phone">Telefonnummer *</label><input type="tel" id="phone" name="phone" placeholder="0211 123 456 7" required /></div>
                            <div className="form-group"><label htmlFor="message">Nachricht</label><textarea id="message" name="message" rows={4} placeholder="Art des Kaskoschaden..."></textarea></div>
                            <button type="submit" className="btn btn-primary form-submit">Rückruf anfordern – kostenlos &amp; unverbindlich</button>
                            <p className="form-dsgvo">Mit dem Absenden stimmen Sie unserer <a href="#" style={{ color: 'var(--clr-accent)', textDecoration: 'underline' }}>Datenschutzerklärung</a> zu.</p>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
