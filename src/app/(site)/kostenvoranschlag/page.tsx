import Link from 'next/link';
import { Metadata } from 'next';
import Konfigurator from '@/components/Konfigurator';

export const metadata: Metadata = {
    title: 'Kostenvoranschlag KFZ – Bagatellschäden bewerten | UnfallExperten NRW',
    description: 'KFZ-Kostenvoranschlag in NRW – ideal for Bagatellschäden. Versteckte Schäden aufdecken, faire Schadensregulierung sichern. Jetzt kostenlos anfragen!',
};

export default function KostenvoranschlagPage() {
    return (
        <>
            <section className="hero" style={{ minHeight: '60vh', padding: '120px 0 80px 0' }}>
                <div className="hero-bg"><img src="/images/hero-bg.png" alt="Kostenvoranschlag KFZ NRW" loading="eager" /></div>
                <div className="hero-overlay"></div>
                <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="hero-content" style={{ maxWidth: '800px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <p className="breadcrumb" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '15px' }}><Link href="/">Startseite</Link> / <Link href="/leistungen">Leistungen</Link> / Kostenvoranschlag</p>
                        <h1 style={{ color: 'var(--clr-white)', marginBottom: '20px' }}>Kostenvoranschlag</h1>
                        <p className="hero-subheadline mx-auto" style={{ fontSize: 'var(--fs-lg)' }}>Effiziente und präzise Schadensbewertung – ideal für Bagatellschäden unter 750 €.</p>
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
                        <div className="content-image animate-on-scroll"><img src="/images/hero-bg.png" alt="Kostenvoranschlag KFZ" loading="lazy" /></div>
                        <div className="content-text">
                            <span className="section-label">Für kleinere Schäden</span>
                            <h2>Effiziente Lösungen für Bagatellschäden</h2>
                            <p>Bei kleineren Schäden (sogenannten Bagatellschäden unter 750 €) reicht in vielen Fällen ein Kostenvoranschlag statt eines vollständigen Gutachtens. Wir erstellen für Sie eine detaillierte Kostenkalkulation, die alle erforderlichen Reparaturarbeiten und Materialkosten erfasst.</p>
                            <p>Ein professioneller Kostenvoranschlag bietet Ihnen eine solide Grundlage für die Schadensregulierung mit der Versicherung – auch ohne ein aufwendiges Gutachten.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-section alt">
                <div className="container">
                    <div className="two-col reverse">
                        <div className="content-image animate-on-scroll"><img src="/images/hero-bg.png" alt="Versteckte Schäden erkennen" loading="lazy" /></div>
                        <div className="content-text">
                            <span className="section-label">Achtung</span>
                            <h2>Verborgene Kosten – warum genau prüfen?</h2>
                            <p>Was auf den ersten Blick wie ein kleiner Kratzer aussieht, kann dahinter liegende Strukturschäden verbergen. Unsere Sachverständigen prüfen jeden Schaden gründlich, damit keine versteckten Kosten übersehen werden.</p>
                            <ul className="check-list">
                                <li>Verdeckte Schäden an Karosserie und Rahmen aufdecken</li>
                                <li>Funktionsprüfung betroffener Bauteile und Sensorik</li>
                                <li>Vermeidung von Folgeschäden durch unentdeckte Mängel</li>
                                <li>Empfehlung eines Gutachtens, wenn die Schadenshöhe die Bagatellgrenze übersteigt</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <div className="two-col">
                        <div className="content-image animate-on-scroll"><img src="/images/hero-bg.png" alt="Begleitung bei der Regulierung" loading="lazy" /></div>
                        <div className="content-text">
                            <span className="section-label">Unser Service</span>
                            <h2>Zuverlässige Begutachtung für Ihre Ansprüche</h2>
                            <p>Unser detaillierter Kostenvoranschlag dient als Basis für die Schadensregulierung. Wir begleiten Sie auch bei der Kommunikation mit der gegnerischen Versicherung und sorgen dafür, dass alle Ihre Ansprüche berücksichtigt werden.</p>
                            <ul className="check-list">
                                <li>Detaillierte Kalkulation aller Reparaturkosten</li>
                                <li>Transparente Dokumentation mit Fotos</li>
                                <li>Unterstützung bei der Schadensregulierung</li>
                                <li>Kostenlos für Geschädigte bei unverschuldeten Unfällen</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-banner">
                <div className="cta-banner-bg"></div>
                <div className="container">
                    <h2>Kostenvoranschlag anfordern</h2>
                    <p>Schnelle und präzise Schadenskalkulation – vor Ort in ganz NRW.</p>
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
                            <h2>Kostenvoranschlag beauftragen</h2>
                            <p>Wir beraten Sie, ob ein Kostenvoranschlag oder ein Gutachten für Ihren Fall die bessere Wahl ist.</p>
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
