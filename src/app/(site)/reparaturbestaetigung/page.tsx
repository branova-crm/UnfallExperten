import Link from 'next/link';
import { Metadata } from 'next';
import Konfigurator from '@/components/Konfigurator';

export const metadata: Metadata = {
    title: 'Reparaturbestätigung – Nachweis für Ihre Reparatur | UnfallExperten NRW',
    description: 'Professionelle Reparaturbestätigung vom KFZ-Sachverständigen in NRW. Nachweis für erfolgreiche Reparaturen – kostenlos bei Gutachtenauftrag. Jetzt anfragen!',
};

export default function ReparaturbestaetigungPage() {
    return (
        <>
            <section className="hero" style={{ minHeight: '60vh', padding: '120px 0 80px 0' }}>
                <div className="hero-bg"><img src="/images/hero-bg.png" alt="Reparaturbestätigung NRW" loading="eager" /></div>
                <div className="hero-overlay"></div>
                <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="hero-content" style={{ maxWidth: '800px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <p className="breadcrumb" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '15px' }}><Link href="/">Startseite</Link> / <Link href="/leistungen">Leistungen</Link> / Reparaturbestätigung</p>
                        <h1 style={{ color: 'var(--clr-white)', marginBottom: '20px' }}>Reparaturbestätigung</h1>
                        <p className="hero-subheadline mx-auto" style={{ fontSize: 'var(--fs-lg)' }}>Ihr offizieller Nachweis für eine fachgerechte Reparatur – für Versicherungen, Käufer und Ihre eigene Sicherheit.</p>
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
                        <div className="content-image animate-on-scroll"><img src="/images/hero-bg.png" alt="Reparaturbestätigung durch KFZ-Sachverständigen" loading="lazy" /></div>
                        <div className="content-text">
                            <span className="section-label">Warum wichtig?</span>
                            <h2>Ihr Nachweis für erfolgreiche Reparaturen</h2>
                            <p>Eine Reparaturbestätigung dokumentiert, dass alle Unfallschäden an Ihrem Fahrzeug fachgerecht und vollständig instandgesetzt wurden. Sie ist ein wichtiges Dokument, das Alt- und Neuschäden klar voneinander unterscheidet.</p>
                            <p>Ohne eine professionelle Bestätigung riskieren Sie bei einem erneuten Unfall oder beim Verkauf Ihres Fahrzeugs Nachteile – weil unklar bleibt, ob ein Schaden alt oder neu ist.</p>
                            <ul className="check-list">
                                <li>Klare Unterscheidung von Alt- und Neuschäden</li>
                                <li>Sicherung des Wiederverkaufswerts Ihres Fahrzeugs</li>
                                <li>Offizieller Nachweis gegenüber Versicherungen und Käufern</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-section alt">
                <div className="container">
                    <div className="two-col reverse">
                        <div className="content-image animate-on-scroll"><img src="/images/hero-bg.png" alt="Vorteile der Reparaturbestätigung" loading="lazy" /></div>
                        <div className="content-text">
                            <span className="section-label">Ihre Vorteile</span>
                            <h2>Vorteile einer professionellen Reparaturbestätigung</h2>
                            <p>Eine von einem unabhängigen Sachverständigen ausgestellte Reparaturbestätigung bietet Ihnen maximale Rechtssicherheit und wird von allen Versicherungen anerkannt.</p>
                            <ul className="check-list">
                                <li>Volle Rechtssicherheit bei späteren Schadensfällen</li>
                                <li>Hohe Anerkennung bei Versicherungen und Gerichten</li>
                                <li>Schutz vor Streitigkeiten über Vorschäden</li>
                                <li>Wertsteigerung bzw. Werterhalt Ihres Fahrzeugs</li>
                                <li>Professionelle Dokumentation mit Fotos und Prüfprotokoll</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <div className="container text-center">
                    <span className="section-label" style={{ color: 'var(--clr-primary)' }}>Gut zu wissen</span>
                    <h2 className="section-title">Kostenlose Reparaturbestätigung für unsere Kunden</h2>
                    <p className="section-subtitle mx-auto">Wenn Sie bei uns ein Unfallgutachten beauftragen, erhalten Sie die Reparaturbestätigung nach erfolgter Reparatur inklusive – ohne zusätzliche Kosten. So stellen wir sicher, dass Ihre Reparatur ordnungsgemäß dokumentiert wird.</p>
                    <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                        <a href="tel:+4902111234567" className="btn btn-outline">📞 Jetzt kostenlos anfragen</a>
                        <a href="https://wa.me/4902111234567" className="btn btn-whatsapp" target="_blank">💬 WhatsApp – Schnelle Rückmeldung!</a>
                    </div>
                </div>
            </section>

            <section className="contact-section" id="contact">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-info">
                            <span className="section-label">Kontakt</span>
                            <h2>Reparaturbestätigung anfordern</h2>
                            <p>Lassen Sie sich jetzt beraten – kostenlos und unverbindlich. Wir erklären Ihnen den Ablauf und vereinbaren einen Termin.</p>
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
