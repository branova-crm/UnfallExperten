import Link from 'next/link';
import { Metadata } from 'next';
import Konfigurator from '@/components/Konfigurator';

export const metadata: Metadata = {
    title: 'Wertgutachten – Fahrzeugbewertung vom Experten | UnfallExperten NRW',
    description: 'Professionelles Wertgutachten für Kfz in NRW. Exakte Fahrzeugbewertung für Kauf, Verkauf, Leasing und Versicherung. Zertifizierte Sachverständige. Jetzt anfragen!',
};

export default function WertgutachtenPage() {
    return (
        <>
            <section className="hero" style={{ minHeight: '60vh', padding: '120px 0 80px 0' }}>
                <div className="hero-bg"><img src="/images/hero-bg.png" alt="Wertgutachten NRW" loading="eager" /></div>
                <div className="hero-overlay"></div>
                <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="hero-content" style={{ maxWidth: '800px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <p className="breadcrumb" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '15px' }}><Link href="/">Startseite</Link> / <Link href="/leistungen">Leistungen</Link> / Wertgutachten</p>
                        <h1 style={{ color: 'var(--clr-white)', marginBottom: '20px' }}>Wertgutachten</h1>
                        <p className="hero-subheadline mx-auto" style={{ fontSize: 'var(--fs-lg)' }}>Exakte Fahrzeugbewertung durch Experten für Fahrzeugbewertung – für Kauf, Verkauf, Leasing und Versicherungsansprüche.</p>
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
                        <div className="content-image animate-on-scroll"><img src="/images/hero-bg.png" alt="Wertgutachten Fahrzeug" loading="lazy" /></div>
                        <div className="content-text">
                            <span className="section-label">Präzise Bewertung</span>
                            <h2>Exakte Bewertung für gezielte Entscheidungen</h2>
                            <p>Ein professionelles Wertgutachten ermittelt den tatsächlichen Marktwert Ihres Fahrzeugs auf Basis objektiver Kriterien. Wir berücksichtigen Zustand, Ausstattung, Laufleistung, eventuelle Umbauten und Vorschäden.</p>
                            <p>So erhalten Sie eine belastbare Grundlage für Verhandlungen – ob beim Kauf, Verkauf oder gegenüber Ihrer Versicherung.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-section alt">
                <div className="container">
                    <div className="two-col reverse">
                        <div className="content-image animate-on-scroll"><img src="/images/hero-bg.png" alt="Anwendungsbereiche Wertgutachten" loading="lazy" /></div>
                        <div className="content-text">
                            <span className="section-label">Einsatzgebiete</span>
                            <h2>Vielfältige Anwendungsbereiche</h2>
                            <p>Ein Wertgutachten ist in vielen Situationen unverzichtbar:</p>
                            <ul className="check-list">
                                <li>Kauf oder Verkauf eines Gebrauchtwagens – faire Preisgestaltung</li>
                                <li>Restwertermittlung nach einem Unfall – maximale Entschädigung</li>
                                <li>Leasingrückgabe – unabhängige Zustandsdokumentation</li>
                                <li>Firmenflotten – regelmäßige Wertermittlung für Bilanzierung</li>
                                <li>Oldtimer &amp; Sammlerfahrzeuge – Spezialwertung</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <div className="two-col">
                        <div className="content-image animate-on-scroll"><img src="/images/hero-bg.png" alt="Expertise Wertgutachten" loading="lazy" /></div>
                        <div className="content-text">
                            <span className="section-label">Unser Versprechen</span>
                            <h2>Vertrauen Sie auf unsere Expertise</h2>
                            <p>Unsere Wertgutachten werden von Experten für Fahrzeugbewertung erstellt und genießen höchste Anerkennung bei Versicherungen, Gerichten und Vertragspartnern.</p>
                            <ul className="check-list">
                                <li>Transparente und nachvollziehbare Bewertungsmethodik</li>
                                <li>Solide Grundlage für Kauf-/Verkaufsverhandlungen</li>
                                <li>Schnelle Erstellung – in der Regel innerhalb von 48 Stunden</li>
                                <li>NRW-weiter Service – wir kommen zu Ihnen</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-banner">
                <div className="cta-banner-bg"></div>
                <div className="container">
                    <h2>Wertgutachten anfordern</h2>
                    <p>Lassen Sie den Wert Ihres Fahrzeugs professionell bestimmen – schnell, präzise und transparent.</p>
                    <div className="cta-banner-buttons">
                        <a href="tel:+4902111234567" className="btn btn-outline">📞 Jetzt anrufen – kostenlos</a>
                        <a href="https://wa.me/4902111234567" className="btn btn-whatsapp" target="_blank">💬 WhatsApp – Schnelle Rückmeldung!</a>
                    </div>
                </div>
            </section>

            <section className="contact-section" id="contact">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-info">
                            <span className="section-label">Kontakt</span>
                            <h2>Wertgutachten beauftragen</h2>
                            <p>Hinterlassen Sie Ihre Nummer – wir beraten Sie ausführlich zu Ihrem Wertgutachten.</p>
                            <div className="contact-direct">
                                <a href="tel:+4902111234567">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg> 0211 – 123 456 7
                                </a>
                                <a href="mailto:info@unfallexperten-nrw.de">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                                        <rect width="20" height="16" x="2" y="4" rx="2" />
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                    </svg> info@unfallexperten-nrw.de
                                </a>
                            </div>
                        </div>
                        <Konfigurator />
                    </div>
                </div>
            </section>
        </>
    );
}
