import Link from 'next/link';
import { Metadata } from 'next';
import Konfigurator from '@/components/Konfigurator';

export const metadata: Metadata = {
    title: 'Unfall- & Schadensgutachten NRW – Unabhängig & Kostenlos | UnfallExperten',
    description: 'Unabhängiges Unfallgutachten in NRW – fachgerechte Schadensdokumentation, Wertminderung und Nutzungsausfall. Kostenlos für Geschädigte. Jetzt anfragen!',
};

export default function UnfallSchadensgutachtenPage() {
    return (
        <>
            <section className="hero" style={{ minHeight: '60vh', padding: '120px 0 80px 0' }}>
                <div className="hero-bg"><img src="/images/hero-bg.png" alt="Unfallgutachten NRW" loading="eager" /></div>
                <div className="hero-overlay"></div>
                <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="hero-content" style={{ maxWidth: '800px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <p className="breadcrumb" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '15px' }}><Link href="/">Startseite</Link> / <Link href="/leistungen">Leistungen</Link> / Unfall- &amp; Schadensgutachten</p>
                        <h1 style={{ color: 'var(--clr-white)', marginBottom: '20px' }}>Unfall- &amp; Schadensgutachten</h1>
                        <p className="hero-subheadline mx-auto" style={{ fontSize: 'var(--fs-lg)' }}>Fachgerechte Schadensdokumentation als Basis für Ihre maximalen Entschädigungsansprüche.</p>
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
                        <div className="content-image animate-on-scroll"><img src="/images/hero-bg.png" alt="Schadensgutachten Erstellung" loading="lazy" /></div>
                        <div className="content-text">
                            <span className="section-label">Ihr Recht</span>
                            <h2>Fachgerechte Dokumentation – Basis für Ihre Ansprüche</h2>
                            <p>Ein unabhängiges Unfallgutachten ist Ihr stärkstes Beweismittel bei der Schadensregulierung. Unsere Experten für KFZ-Schäden erfassen jeden Schaden präzise und dokumentieren alle relevanten Werte:</p>
                            <ul className="check-list">
                                <li>Detaillierte Schadenshöhe mit Reparaturkalkulation</li>
                                <li>Merkantile Wertminderung Ihres Fahrzeugs</li>
                                <li>Nutzungsausfall oder Mietwagenkosten</li>
                                <li>Wiederbeschaffungswert und Restwert</li>
                                <li>Fotodokumentation aller Schadensbereiche</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-section alt">
                <div className="container">
                    <div className="two-col reverse">
                        <div className="content-image animate-on-scroll"><img src="/images/hero-bg.png" alt="Begleitung durch den Prozess" loading="lazy" /></div>
                        <div className="content-text">
                            <span className="section-label">Komplettbetreuung</span>
                            <h2>Unterstützung während des gesamten Prozesses</h2>
                            <p>Wir lassen Sie nicht allein. Von der ersten Schadensaufnahme bis zur vollständigen Auszahlung Ihrer Ansprüche begleiten wir Sie persönlich:</p>
                            <ul className="check-list">
                                <li>Schadensaufnahme direkt am Unfallort oder bei Ihnen zu Hause</li>
                                <li>Gutachtenerstellung innerhalb von 24–72 Stunden</li>
                                <li>Koordination mit Rechtsanwalt, Werkstatt und Mietwagenanbieter</li>
                                <li>Korrespondenz mit der gegnerischen Versicherung</li>
                                <li>Nachprüfung bei Kürzungsversuchen der Versicherung</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <div className="two-col">
                        <div className="content-image animate-on-scroll"><img src="/images/hero-bg.png" alt="Gutachten vs Kostenvoranschlag" loading="lazy" /></div>
                        <div className="content-text">
                            <span className="section-label" style={{ color: 'var(--clr-primary)' }}>Gut zu wissen</span>
                            <h2>Warum ist ein Unfallgutachten wichtig?</h2>
                            <p>Viele Geschädigte verlassen sich auf den Kostenvoranschlag der Werkstatt und verschenken dabei bares Geld. Ein unabhängiges Gutachten erfasst zusätzlich:</p>
                            <ul className="check-list">
                                <li>Merkantile Wertminderung – oft mehrere Hundert Euro</li>
                                <li>Versteckte Schäden, die im Kostenvoranschlag fehlen</li>
                                <li>Nutzungsausfall für die Dauer der Reparatur</li>
                                <li>Prüfkosten, Verbringungskosten und UPE-Aufschläge</li>
                            </ul>
                            <p><strong>Im Schnitt erhalten unsere Kunden 30–40 % mehr Entschädigung</strong> als mit einem einfachen Kostenvoranschlag.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-banner">
                <div className="cta-banner-bg"></div>
                <div className="container">
                    <h2>Unfallgutachten anfordern</h2>
                    <p>Kostenlos für Geschädigte – die gegnerische Versicherung zahlt.</p>
                    <div className="cta-banner-buttons">
                        <a href="tel:+4902111234567" className="btn btn-outline">📞 Jetzt anrufen</a>
                        <a href="https://wa.me/4902111234567" className="btn btn-whatsapp" target="_blank">💬 WhatsApp – Schnelle Rückmeldung!</a>
                    </div>
                </div>
            </section>

            <section className="contact-section" id="contact">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-info">
                            <span className="section-label">Kontakt</span>
                            <h2>Gutachten beauftragen</h2>
                            <p>Hinterlassen Sie Ihre Nummer und wir melden uns innerhalb von 15 Minuten.</p>
                            <div className="contact-direct">
                                <a href="tel:+4902111234567">
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
        </>
    );
}
