import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Über uns – Erfahrene KFZ-Sachverständige in NRW | UnfallExperten',
    description: 'Lernen Sie UnfallExperten NRW kennen – unabhängige KFZ-Sachverständige und Experten für KFZ-Schäden. Unabhängig, regional, NRW-weit. Unsere Philosophie und unser Team.',
};

export default function UeberUnsPage() {
    return (
        <>
            <section className="hero" style={{ minHeight: '85vh' }}>
                <div className="hero-bg">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster="/images/hero-bg.png"
                    >
                        <source src="/images/herovideo2.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="hero-overlay"></div>
                <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="hero-content" style={{ maxWidth: '800px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <p className="breadcrumb" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '15px' }}><Link href="/">Startseite</Link> / Über uns</p>
                        <h1 style={{ color: 'var(--clr-white)', marginBottom: '20px' }}>Über uns</h1>
                        <p className="hero-subheadline mx-auto" style={{ fontSize: 'var(--fs-lg)' }}>Unabhängige KFZ-Sachverständige und Experten für KFZ-Schäden – Ihr Partner nach dem Unfall in ganz NRW.</p>
                    </div>
                </div>
            </section>

            {/* EXPERTEN INTRO */}
            <section className="content-section">
                <div className="container">
                    <div className="two-col">
                        <div className="content-image animate-on-scroll"><img src="/images/hero-bg.png" alt="UnfallExperten NRW Team" loading="lazy" /></div>
                        <div className="content-text">
                            <span className="section-label" style={{ color: 'var(--clr-primary)' }}>Wer wir sind</span>
                            <h2 style={{ color: 'var(--clr-text)' }}>Ihre Experten nach einem Verkehrsunfall</h2>
                            <p>UnfallExperten NRW ist Ihr unabhängiger Partner für KFZ-Gutachten nach einem Unfall. Unser Team besteht aus Experten für KFZ-Schäden und unabhängigen KFZ-Sachverständigen mit jahrelanger Erfahrung in der KFZ-Schadensbewertung.</p>
                            <p>Wir arbeiten ausschließlich im Interesse unserer Kunden – neutral, unabhängig und transparent. Unser Ziel: Sie erhalten die maximale Entschädigung, die Ihnen zusteht.</p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: 'var(--sp-lg)' }}>
                                <a href="tel:+4902111234567" className="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '6px' }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg> Jetzt anrufen</a>
                                <a href="https://wa.me/4902111234567" className="btn btn-whatsapp" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '6px' }}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785h-.005a9.868 9.868 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374A9.86 9.86 0 0 1 2.17 12.06c0-5.456 4.436-9.893 9.9-9.893a9.827 9.827 0 0 1 7.001 2.902 9.828 9.828 0 0 1 2.893 7.003c-.004 5.456-4.44 9.893-9.913 9.893zM20.52 3.449C18.24 1.245 15.24 0 12.05 0 5.463 0 .104 5.334.101 11.893a11.793 11.793 0 0 0 1.587 5.946L0 24l6.335-1.652A11.882 11.882 0 0 0 12.05 24c6.584 0 11.94-5.335 11.943-11.893a11.808 11.808 0 0 0-3.473-8.658z" /></svg> WhatsApp</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* VEHICLE TYPES */}
            <section className="vehicles-section">
                <div className="container">
                    <div className="text-center">
                        <span className="section-label" style={{ color: 'var(--clr-primary)' }}>Fahrzeugtypen</span>
                        <h2 className="section-title" style={{ color: 'var(--clr-text)' }}>Unsere Expertise – Umfassende Fahrzeugtypen</h2>
                        <p className="section-subtitle mx-auto">Egal welches Fahrzeug – unsere Sachverständigen sind für alle Typen qualifiziert.</p>
                    </div>
                    <div className="vehicles-grid">
                        <div className="vehicle-card animate-on-scroll">
                            <div className="vehicle-icon"><img src="/images/auto.svg" alt="PKW Icon" /></div>
                            <h3>PKW</h3>
                            <p>Alle Marken und Modelle</p>
                        </div>
                        <div className="vehicle-card animate-on-scroll">
                            <div className="vehicle-icon"><img src="/images/eauto.svg" alt="E-Auto Icon" /></div>
                            <h3>E‑Auto</h3>
                            <p>Inkl. Batteriecheck</p>
                        </div>
                        <div className="vehicle-card animate-on-scroll">
                            <div className="vehicle-icon"><img src="/images/lkw.svg" alt="LKW Icon" /></div>
                            <h3>LKW</h3>
                            <p>Alle Gewichtsklassen</p>
                        </div>
                        <div className="vehicle-card animate-on-scroll">
                            <div className="vehicle-icon"><img src="/images/caravan.svg" alt="Caravan Icon" /></div>
                            <h3>Caravan</h3>
                            <p>Inkl. Aufbau &amp; Innenraum</p>
                        </div>
                        <div className="vehicle-card animate-on-scroll">
                            <div className="vehicle-icon"><img src="/images/anhänger.svg" alt="Anhänger Icon" /></div>
                            <h3>Anhänger</h3>
                            <p>Alle Typen</p>
                        </div>
                        <div className="vehicle-card animate-on-scroll">
                            <div className="vehicle-icon"><img src="/images/motorrad.svg" alt="Motorrad Icon" /></div>
                            <h3>Motorrad</h3>
                            <p>Alle Hersteller</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* GALLERY */}
            <section className="content-section">
                <div className="container">
                    <div className="text-center">
                        <span className="section-label" style={{ color: 'var(--clr-primary)' }}>Eindrücke</span>
                        <h2 className="section-title" style={{ color: 'var(--clr-text)' }}>Einblick in unsere Arbeit</h2>
                        <p className="section-subtitle mx-auto">Impressionen aus unserem Arbeitsalltag – von der Begutachtung bis zum fertigen Gutachten.</p>
                    </div>
                    <div className="gallery-grid">
                        <div className="gallery-placeholder">📷 Bild 1</div>
                        <div className="gallery-placeholder">📷 Bild 2</div>
                        <div className="gallery-placeholder">📷 Bild 3</div>
                        <div className="gallery-placeholder">📷 Bild 4</div>
                        <div className="gallery-placeholder">📷 Bild 5</div>
                        <div className="gallery-placeholder">📷 Bild 6</div>
                        <div className="gallery-placeholder">📷 Bild 7</div>
                        <div className="gallery-placeholder">📷 Bild 8</div>
                    </div>
                </div>
            </section>

            {/* FACHGERECHTE ABWICKLUNG */}
            <section className="content-section alt">
                <div className="container">
                    <div className="two-col reverse">
                        <div className="content-image animate-on-scroll"><img src="/images/hero-bg.png" alt="Professionelle Abwicklung" loading="lazy" /></div>
                        <div className="content-text">
                            <span className="section-label" style={{ color: 'var(--clr-primary)' }}>Arbeitsweise</span>
                            <h2 style={{ color: 'var(--clr-text)' }}>Fachgerechte Abwicklung – von Anfang bis Ende</h2>
                            <p>Wir begleiten Sie durch den gesamten Prozess der Schadensregulierung. Von der ersten Kontaktaufnahme über die detaillierte Begutachtung vor Ort bis hin zur vollständigen Abwicklung mit der Versicherung – alles aus einer Hand.</p>
                            <ul className="check-list">
                                <li>Schnelle Terminvergabe – meist noch am selben Tag</li>
                                <li>Begutachtung direkt am Unfallort oder bei Ihnen zu Hause</li>
                                <li>Gutachten in 24–72 Stunden fertiggestellt</li>
                                <li>Begleitung bis zur vollständigen Auszahlung</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ANSPRUCH */}
            <section className="content-section">
                <div className="container">
                    <div className="two-col">
                        <div className="content-image animate-on-scroll"><img src="/images/hero-bg.png" alt="Unser Anspruch" loading="lazy" /></div>
                        <div className="content-text">
                            <span className="section-label" style={{ color: 'var(--clr-primary)' }}>Qualität</span>
                            <h2 style={{ color: 'var(--clr-text)' }}>Unser Anspruch – Höchste Qualitätsstandards</h2>
                            <p>Wir stehen für Qualität, Zuverlässigkeit und Kundenzufriedenheit. Unser erfahrenes Team, modernste Technik und ein starkes Partnernetzwerk aus Anwälten, Werkstätten und Mietwagenanbietern ermöglichen es uns, Ihnen den bestmöglichen Service zu bieten.</p>
                            <ul className="check-list">
                                <li>Experten für KFZ-Schäden und unabhängige KFZ-Sachverständige</li>
                                <li>Modernste Dokumentations- und Kalkulationssoftware</li>
                                <li>Starkes Partnernetzwerk in ganz NRW</li>
                                <li>Regelmäßige Fortbildungen und Qualitätskontrollen</li>
                                <li>Über 1.000 zufriedene Kunden</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA + FORM */}
            <section className="cta-banner">
                <div className="cta-banner-bg"></div>
                <div className="container">
                    <h2>Lernen Sie uns kennen</h2>
                    <p>Überzeugen Sie sich selbst – rufen Sie uns an oder schreiben Sie per WhatsApp!</p>
                    <div className="cta-banner-buttons">
                        <a href="tel:+4902111234567" className="btn btn-accent"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '6px' }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg> Jetzt anrufen</a>
                        <a href="https://wa.me/4902111234567" className="btn btn-whatsapp" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '6px' }}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785h-.005a9.868 9.868 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374A9.86 9.86 0 0 1 2.17 12.06c0-5.456 4.436-9.893 9.9-9.893a9.827 9.827 0 0 1 7.001 2.902 9.828 9.828 0 0 1 2.893 7.003c-.004 5.456-4.44 9.893-9.913 9.893zM20.52 3.449C18.24 1.245 15.24 0 12.05 0 5.463 0 .104 5.334.101 11.893a11.793 11.793 0 0 0 1.587 5.946L0 24l6.335-1.652A11.882 11.882 0 0 0 12.05 24c6.584 0 11.94-5.335 11.943-11.893a11.808 11.808 0 0 0-3.473-8.658z" /></svg> WhatsApp</a>
                    </div>
                </div>
            </section>

            <section className="contact-section" id="contact">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-info">
                            <span className="section-label" style={{ color: 'var(--clr-primary)' }}>Kontakt</span>
                            <h2 style={{ color: 'var(--clr-text)' }}>Wir freuen uns auf Sie!</h2>
                            <p>Haben Sie Fragen oder möchten einen Termin vereinbaren? Hinterlassen Sie Ihre Nummer.</p>
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
                            <div className="form-group"><label htmlFor="message">Nachricht</label><textarea id="message" name="message" rows={4} placeholder="Ihre Frage oder Anliegen..."></textarea></div>
                            <button type="submit" className="btn btn-primary form-submit">Rückruf anfordern – kostenlos &amp; unverbindlich</button>
                            <p className="form-dsgvo">Mit dem Absenden stimmen Sie unserer <a href="#" style={{ color: 'var(--clr-accent)', textDecoration: 'underline' }}>Datenschutzerklärung</a> zu.</p>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
