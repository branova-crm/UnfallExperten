import Link from 'next/link';
import { Metadata } from 'next';
import Konfigurator from '@/components/Konfigurator';

export const metadata: Metadata = {
    title: 'Leistungen – Kfz-Gutachter NRW | UnfallExperten',
    description: 'Unsere Leistungen als Kfz-Gutachter in NRW: Unfall- & Schadensgutachten, Wertgutachten, Kaskoschäden und reparierte Schäden. Kostenlose Ersteinschätzung!',
};

export default function LeistungenPage() {
    return (
        <>
            {/* HERO */}
            <section className="hero" style={{ minHeight: '60vh', padding: '120px 0 80px 0' }}>
                <div className="hero-bg"><img src="/images/hero-bg.png" alt="Kfz-Gutachter bei der Begutachtung eines Fahrzeugs" loading="eager" /></div>
                <div className="hero-overlay"></div>
                <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="hero-content" style={{ maxWidth: '800px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <p className="breadcrumb" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '15px' }}><Link href="/">Startseite</Link> / Leistungen</p>
                        <h1 style={{ color: 'var(--clr-white)', marginBottom: '20px' }}>Unsere Leistungen</h1>
                        <p className="hero-subheadline mx-auto" style={{ fontSize: 'var(--fs-lg)' }}>Ihr unabhängiger Kfz‑Gutachter in NRW – umfassender Service, rund um die Uhr für Sie da.</p>
                        <div className="hero-ctas" style={{ justifyContent: 'center', marginBottom: '30px' }}>
                            <a href="#ersteinschaetzung" className="btn btn-outline">Jetzt Kontakt aufnehmen</a>
                        </div>
                        <a href="https://share.google/KbGRRE7ngszpWpv9k" target="_blank" className="google-review-inline" aria-label="Google Bewertung" style={{ margin: '0 auto', display: 'inline-flex' }}>
                            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="google-logo" />
                            <span className="google-stars">★★★★★</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* KOSTENLOSE ERSTEINSCHÄTZUNG */}
            <section className="content-section" id="ersteinschaetzung" style={{ background: 'var(--clr-offwhite)' }}>
                <div className="container">
                    <div className="text-center" style={{ marginBottom: 'var(--sp-2xl)' }}>
                        <span className="section-label">100 % unverbindlich</span>
                        <h2 className="section-title">Kostenlose Ersteinschätzung</h2>
                        <p className="section-subtitle mx-auto">Senden Sie uns einfach Fotos Ihres Schadens sowie eine kurze Schilderung. Unsere Experten für Kfz-Schäden bewerten die Situation umgehend und geben Ihnen eine erste, völlig kostenfreie Einschätzung der Lage – ohne versteckte Kosten.</p>
                        <a href="https://wa.me/4902111234567?text=Hallo%2C%20ich%20brauche%20eine%20kostenlose%20Ersteinschaetzung." className="btn btn-whatsapp" target="_blank" style={{ marginTop: 'var(--sp-md)' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785h-.005a9.868 9.868 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374A9.86 9.86 0 0 1 2.17 12.06c0-5.456 4.436-9.893 9.9-9.893a9.827 9.827 0 0 1 7.001 2.902 9.828 9.828 0 0 1 2.893 7.003c-.004 5.456-4.44 9.893-9.913 9.893zM20.52 3.449C18.24 1.245 15.24 0 12.05 0 5.463 0 .104 5.334.101 11.893a11.793 11.793 0 0 0 1.587 5.946L0 24l6.335-1.652A11.882 11.882 0 0 0 12.05 24c6.584 0 11.94-5.335 11.943-11.893a11.808 11.808 0 0 0-3.473-8.658z" />
                            </svg> Auf WhatsApp kontaktieren
                        </a>
                        <p style={{ fontSize: 'var(--fs-xs)', color: 'var(--clr-text-muted)', marginTop: '8px' }}>Antwort in Kürze (15 Min.)</p>
                    </div>

                    <div className="steps-grid">
                        <div className="step-card animate-on-scroll">
                            <div className="step-number">1</div>
                            <div className="step-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                    <line x1="12" y1="8" x2="12" y2="16" />
                                    <line x1="8" y1="12" x2="16" y2="12" />
                                </svg>
                            </div>
                            <h3>Schadensbereiche</h3>
                            <p>Dokumentieren Sie alle beschädigten Bereiche, um ein umfassendes Bild zu erhalten.</p>
                        </div>
                        <div className="step-card animate-on-scroll">
                            <div className="step-number">2</div>
                            <div className="step-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <circle cx="12" cy="12" r="10" />
                                    <circle cx="12" cy="12" r="3" />
                                </svg>
                            </div>
                            <h3>Detailaufnahmen</h3>
                            <p>Machen Sie Nahaufnahmen aus verschiedenen Blickwinkeln, damit alle Details sichtbar sind.</p>
                        </div>
                        <div className="step-card animate-on-scroll">
                            <div className="step-number">3</div>
                            <div className="step-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                    <polyline points="14 2 14 8 20 8" />
                                    <line x1="16" y1="13" x2="8" y2="13" />
                                    <line x1="16" y1="17" x2="8" y2="17" />
                                </svg>
                            </div>
                            <h3>Fahrzeugschein</h3>
                            <p>Senden Sie ein Foto Ihres Fahrzeugscheins, um uns die Identifikation zu erleichtern.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* UNSERE DIENSTLEISTUNGEN */}
            <section className="services-section" id="alle-leistungen">
                <div className="container">
                    <div className="text-center">
                        <span className="section-label">Übersicht</span>
                        <h2 className="section-title">Unsere Leistungen als Kfz‑Gutachter in NRW</h2>
                        <p className="section-subtitle mx-auto">Von der Schadensdokumentation bis zur Wertermittlung – wir bieten Ihnen das volle Spektrum an Kfz-Sachverständigenleistungen aus einer Hand.</p>
                    </div>

                    <div className="services-grid">
                        <div className="service-card animate-on-scroll" style={{ borderRadius: '16px' }}>
                            <div className="service-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg></div>
                            <h3>Kostenlose Dienstleistung</h3>
                            <p>Rund um die Uhr unverbindliche Beratung und umfassende Unterstützung im gesamten Schadensregulierungsprozess – kostenlos für Geschädigte.</p>
                            <Link href="/kostenlose-dienstleistung" className="service-link">Mehr erfahren →</Link>
                        </div>
                        <div className="service-card animate-on-scroll" style={{ borderRadius: '16px' }}>
                            <div className="service-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg></div>
                            <h3>Unfall- &amp; Schadensgutachten</h3>
                            <p>Präzise Gutachten zur genauen Bewertung von Unfallschäden, um Ihre Ansprüche gegenüber der gegnerischen Versicherung zu sichern.</p>
                            <Link href="/unfall-schadensgutachten" className="service-link">Mehr erfahren →</Link>
                        </div>
                        <div className="service-card animate-on-scroll" style={{ borderRadius: '16px' }}>
                            <div className="service-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg></div>
                            <h3>Kaskoschäden</h3>
                            <p>Unabhängige Gutachten für Schäden durch Fremdverschulden, Vandalismus oder andere äußere Einflüsse, um faire Entschädigung zu sichern.</p>
                            <Link href="/kaskoschaden" className="service-link">Mehr erfahren →</Link>
                        </div>
                        <div className="service-card animate-on-scroll" style={{ borderRadius: '16px' }}>
                            <div className="service-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="20 6 9 17 4 12" /></svg></div>
                            <h3>Reparaturbestätigung</h3>
                            <p>Dokumentiert ausgeführte Reparaturen als Nachweis, damit spätere Ansprüche im Falle eines erneuten Unfalls anerkannt werden.</p>
                            <Link href="/reparaturbestaetigung" className="service-link">Mehr erfahren →</Link>
                        </div>
                        <div className="service-card animate-on-scroll" style={{ borderRadius: '16px' }}>
                            <div className="service-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg></div>
                            <h3>Wertgutachten</h3>
                            <p>Bestimmt den aktuellen Zeitwert Ihres Fahrzeugs unter Berücksichtigung aller wertbeeinflussenden Faktoren, für faire Kauf- oder Verkaufsentscheidungen.</p>
                            <Link href="/wertgutachten" className="service-link">Mehr erfahren →</Link>
                        </div>
                        <div className="service-card animate-on-scroll" style={{ borderRadius: '16px' }}>
                            <div className="service-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg></div>
                            <h3>Kostenvoranschlag</h3>
                            <p>Detaillierte Kostenvoranschläge bei Bagatellschäden, die alle Reparaturkosten transparent darstellen und versteckte Schäden offenlegen.</p>
                            <Link href="/kostenvoranschlag" className="service-link">Mehr erfahren →</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA BANNER */}
            <section className="cta-banner">
                <div className="cta-banner-bg"></div>
                <div className="container">
                    <h2>Noch Fragen? Wir helfen gern!</h2>
                    <p>Unser Serviceteam steht Ihnen mit Rat und Tat zur Seite. Zögern Sie nicht, uns anzusprechen – absolut kostenlos &amp; unverbindlich.</p>
                    <div className="cta-banner-buttons">
                        <a href="tel:+4902111234567" className="btn btn-outline">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg> Jetzt anrufen
                        </a>
                        <a href="https://wa.me/4902111234567?text=Hallo%2C%20ich%20habe%20eine%20Frage%20zu%20Ihren%20Leistungen." className="btn btn-whatsapp" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785h-.005a9.868 9.868 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374A9.86 9.86 0 0 1 2.17 12.06c0-5.456 4.436-9.893 9.9-9.893a9.827 9.827 0 0 1 7.001 2.902 9.828 9.828 0 0 1 2.893 7.003c-.004 5.456-4.44 9.893-9.913 9.893zM20.52 3.449C18.24 1.245 15.24 0 12.05 0 5.463 0 .104 5.334.101 11.893a11.793 11.793 0 0 0 1.587 5.946L0 24l6.335-1.652A11.882 11.882 0 0 0 12.05 24c6.584 0 11.94-5.335 11.943-11.893a11.808 11.808 0 0 0-3.473-8.658z" />
                            </svg> WhatsApp starten
                        </a>
                    </div>
                    <p style={{ fontSize: 'var(--fs-sm)', color: 'rgba(255,255,255,0.8)', marginTop: '10px' }}>kostenlos &amp; unverbindlich</p>
                </div>
            </section>

            {/* CONTACT FORM */}
            <section className="contact-section" id="contact">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-info">
                            <span className="section-label">Kontakt</span>
                            <h2>Wir rufen Sie gerne zurück!</h2>
                            <p>Schnelle Hilfe nach dem Unfall ist entscheidend. Hinterlassen Sie Ihre Nummer und wir melden uns innerhalb von 15 Minuten – kostenlos und unverbindlich.</p>
                            <div className="contact-direct">
                                <a href="tel:+4902111234567">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg> 0211 – 123 456 7
                                </a>
                                <a href="https://wa.me/4902111234567" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                    </svg> WhatsApp schreiben
                                </a>
                                <a href="mailto:info@unfallexperten-nrw.de">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
