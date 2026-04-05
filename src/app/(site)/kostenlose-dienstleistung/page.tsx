import Link from 'next/link';
import { Metadata } from 'next';
import Konfigurator from '@/components/Konfigurator';

export const metadata: Metadata = {
    title: 'Kostenlose Dienstleistung – Unfallhilfe ohne Kosten | UnfallExperten NRW',
    description: 'Kostenlose Unfallhilfe in NRW – Gutachten, Anwalt, Mietwagen und mehr. Die gegnerische Versicherung zahlt. 24/7 erreichbar. Jetzt anrufen!',
};

export default function KostenloseDienstleistungPage() {
    return (
        <>
            <section className="hero" style={{ minHeight: '60vh', padding: '120px 0 80px 0' }}>
                <div className="hero-bg"><img src="/images/hero-bg.png" alt="Kostenlose Dienstleistung NRW" loading="eager" /></div>
                <div className="hero-overlay"></div>
                <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="hero-content" style={{ maxWidth: '800px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <p className="breadcrumb" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '15px' }}><Link href="/">Startseite</Link> / <Link href="/leistungen">Leistungen</Link> / Kostenlose Dienstleistung</p>
                        <h1 style={{ color: 'var(--clr-white)', marginBottom: '20px' }}>Kostenlose Dienstleistung</h1>
                        <p className="hero-subheadline mx-auto" style={{ fontSize: 'var(--fs-lg)' }}>Kompletter Unfallservice für Geschädigte – von der Begutachtung bis zur Auszahlung. Für Sie komplett kostenlos.</p>
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
                        <div className="content-image animate-on-scroll"><img src="/images/hero-bg.png" alt="24/7 Unfallhilfe" loading="lazy" /></div>
                        <div className="content-text">
                            <span className="section-label">Rund um die Uhr</span>
                            <h2>24/7-Unterstützung nach Ihrem Unfall</h2>
                            <p>Unfall gehabt? Egal ob Tag oder Nacht, Wochentag oder Wochenende – wir sind rund um die Uhr für Sie erreichbar. Über Telefon oder WhatsApp erreichen Sie uns sofort und wir leiten alle notwendigen Schritte ein.</p>
                            <p>Das Beste: <strong>Alle unsere Leistungen sind für Unfallgeschädigte komplett kostenlos.</strong> Die Kosten übernimmt in der Regel die gegnerische Haftpflichtversicherung. Sie haben keinerlei finanzielles Risiko.</p>
                            <ul className="check-list">
                                <li>Sofort erreichbar – 24 Stunden am Tag, 7 Tage die Woche</li>
                                <li>Keine Kosten für Geschädigte</li>
                                <li>Schnelle Hilfe vor Ort in ganz NRW</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-section alt">
                <div className="container">
                    <div className="two-col reverse">
                        <div className="content-image animate-on-scroll"><img src="/images/hero-bg.png" alt="Komplettbetreuung" loading="lazy" /></div>
                        <div className="content-text">
                            <span className="section-label">Rundum-Service</span>
                            <h2>Begleitung von A bis Z</h2>
                            <p>Wir kümmern uns um den gesamten Prozess nach Ihrem Unfall – damit Sie sich auf das Wesentliche konzentrieren können:</p>
                            <ul className="check-list">
                                <li>Professionelles Unfallgutachten durch Experten für KFZ-Schäden</li>
                                <li>Vermittlung eines spezialisierten Rechtsanwalts</li>
                                <li>Organisation von Mietwagen und Reparaturwerkstatt</li>
                                <li>Kommunikation mit der gegnerischen Versicherung</li>
                                <li>Begleitung bis zur vollständigen Auszahlung</li>
                                <li>Abschleppdienst bei Bedarf</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <div className="two-col">
                        <div className="content-image animate-on-scroll"><img src="/images/hero-bg.png" alt="Vertrauensvoller Partner" loading="lazy" /></div>
                        <div className="content-text">
                            <span className="section-label">Vertrauen &amp; Erfahrung</span>
                            <h2>Ihr vertrauensvoller Partner nach dem Unfall</h2>
                            <p>Wir arbeiten transparent und in Ihrem Interesse. Unsere unabhängigen Sachverständigen haben jahrelange Erfahrung in der Unfallabwicklung und kennen alle Tricks der Versicherungen.</p>
                            <ul className="check-list">
                                <li>Vollständige Transparenz bei jedem Schritt</li>
                                <li>Erfahrung aus über 1.000 abgewickelten Fällen</li>
                                <li>Schnelle Abwicklung – Gutachten in 24 Stunden</li>
                                <li>Persönlicher Ansprechpartner für Ihren Fall</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-banner">
                <div className="cta-banner-bg"></div>
                <div className="container">
                    <h2>Kostenlos &amp; stressfrei zum Recht</h2>
                    <p>Wir übernehmen alles – Sie lehnen sich zurück. Jetzt unverbindlich anfragen.</p>
                    <div className="cta-banner-buttons">
                        <a href="tel:+4902111234567" className="btn btn-outline">📞 Jetzt anrufen</a>
                        <a href="https://wa.me/4902111234567" className="btn btn-whatsapp" target="_blank">💬 WhatsApp</a>
                    </div>
                </div>
            </section>

            <section className="contact-section" id="contact">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-info">
                            <span className="section-label">Kontakt</span>
                            <h2>Jetzt kostenlose Hilfe anfordern</h2>
                            <p>Rufen Sie an oder hinterlassen Sie Ihre Nummer – wir helfen Ihnen sofort.</p>
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
