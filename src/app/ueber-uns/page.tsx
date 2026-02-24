import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Über uns – Erfahrene Kfz-Sachverständige in NRW | UnfallExperten',
    description: 'Lernen Sie UnfallExperten NRW kennen – erfahrene Kfz-Sachverständige und Experten für Kfz-Schäden. Unabhängig, zertifiziert, NRW-weit. Unsere Philosophie und unser Team.',
};

export default function UeberUnsPage() {
    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <h1>Über uns</h1>
                    <p>Unabhängige Kfz-Sachverständige und Experten für Kfz-Schäden – Ihr Partner nach dem Unfall in ganz NRW.</p>
                </div>
            </section>

            {/* EXPERTEN INTRO */}
            <section className="content-section">
                <div className="container">
                    <div className="two-col">
                        <div className="content-image animate-on-scroll"><img src="/images/hero-bg.png" alt="UnfallExperten NRW Team" loading="lazy" /></div>
                        <div className="content-text">
                            <span className="section-label">Wer wir sind</span>
                            <h2>Ihre Experten nach einem Verkehrsunfall</h2>
                            <p>UnfallExperten NRW ist Ihr unabhängiger Partner für Kfz-Gutachten nach einem Unfall. Unser Team besteht aus Experten für Kfz-Schäden und zertifizierten Sachverständigen mit jahrelanger Erfahrung in der Kfz-Schadensbewertung.</p>
                            <p>Wir arbeiten ausschließlich im Interesse unserer Kunden – neutral, unabhängig und transparent. Unser Ziel: Sie erhalten die maximale Entschädigung, die Ihnen zusteht.</p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: 'var(--sp-lg)' }}>
                                <a href="tel:+4902111234567" className="btn btn-primary">📞 Jetzt anrufen</a>
                                <a href="https://wa.me/4902111234567" className="btn btn-whatsapp" target="_blank">💬 WhatsApp</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* VEHICLE TYPES */}
            <section className="vehicles-section">
                <div className="container">
                    <div className="text-center">
                        <span className="section-label">Fahrzeugtypen</span>
                        <h2 className="section-title">Unsere Expertise – Umfassende Fahrzeugtypen</h2>
                        <p className="section-subtitle mx-auto">Egal welches Fahrzeug – unsere Sachverständigen sind für alle Typen qualifiziert.</p>
                    </div>
                    <div className="vehicles-grid">
                        <div className="vehicle-card animate-on-scroll">
                            <div className="vehicle-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg></div>
                            <h3>PKW</h3>
                            <p>Alle Marken und Modelle</p>
                        </div>
                        <div className="vehicle-card animate-on-scroll">
                            <div className="vehicle-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg></div>
                            <h3>E‑Auto</h3>
                            <p>Inkl. Batteriecheck</p>
                        </div>
                        <div className="vehicle-card animate-on-scroll">
                            <div className="vehicle-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /><line x1="1" y1="9" x2="16" y2="9" /></svg></div>
                            <h3>LKW</h3>
                            <p>Alle Gewichtsklassen</p>
                        </div>
                        <div className="vehicle-card animate-on-scroll">
                            <div className="vehicle-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="6" width="20" height="12" rx="2" /><circle cx="7" cy="18" r="2" /><circle cx="17" cy="18" r="2" /><path d="M2 12h20" /></svg></div>
                            <h3>Caravan</h3>
                            <p>Inkl. Aufbau &amp; Innenraum</p>
                        </div>
                        <div className="vehicle-card animate-on-scroll">
                            <div className="vehicle-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="6" y="4" width="12" height="14" rx="2" /><circle cx="8" cy="20" r="2" /><circle cx="16" cy="20" r="2" /><line x1="6" y1="10" x2="18" y2="10" /></svg></div>
                            <h3>Anhänger</h3>
                            <p>Alle Typen</p>
                        </div>
                        <div className="vehicle-card animate-on-scroll">
                            <div className="vehicle-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="18" r="3" /><path d="M5 18h4" /><path d="M15 18h4" /><path d="M12 15V5" /><path d="M8 8l4-3 4 3" /></svg></div>
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
                        <span className="section-label">Eindrücke</span>
                        <h2 className="section-title">Einblick in unsere Arbeit</h2>
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
                            <span className="section-label">Arbeitsweise</span>
                            <h2>Fachgerechte Abwicklung – von Anfang bis Ende</h2>
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
                            <span className="section-label">Qualität</span>
                            <h2>Unser Anspruch – Höchste Qualitätsstandards</h2>
                            <p>Wir stehen für Qualität, Zuverlässigkeit und Kundenzufriedenheit. Unser erfahrenes Team, modernste Technik und ein starkes Partnernetzwerk aus Anwälten, Werkstätten und Mietwagenanbietern ermöglichen es uns, Ihnen den bestmöglichen Service zu bieten.</p>
                            <ul className="check-list">
                                <li>Experten für Kfz-Schäden und zertifizierte Sachverständige</li>
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
                            <h2>Wir freuen uns auf Sie!</h2>
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
