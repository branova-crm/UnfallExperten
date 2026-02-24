import { Metadata } from 'next';
import Link from 'next/link';
import Konfigurator from '@/components/Konfigurator';

type Props = {
    params: Promise<{ slug: string }> | { slug: string };
};

function formatCityName(slug: string) {
    return slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
        .replace('Koeln', 'Köln')
        .replace('Duesseldorf', 'Düsseldorf')
        .replace('Muenster', 'Münster')
        .replace('Moenchengladbach', 'Mönchengladbach');
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const city = formatCityName(resolvedParams.slug);

    return {
        title: `Kfz-Gutachter ${city} – Kostenlos & Schnell | UnfallExperten`,
        description: `Unfall in ${city}? Ihr Kfz-Gutachter vor Ort. Kostenloses Unfallgutachten für Geschädigte, schnelle Abwicklung, 24/7 erreichbar. Jetzt anrufen!`,
    };
}

export default async function StandortDetail({ params }: Props) {
    const resolvedParams = await params;
    const city = formatCityName(resolvedParams.slug);

    return (
        <div className="standort-detail-page">
            {/* LOCAL HERO */}
            <section className="page-hero">
                <div className="container">
                    <p className="breadcrumb">
                        <Link href="/">Startseite</Link> / <Link href="/standorte">Standorte</Link> / {city}
                    </p>
                    <h1>Kfz-Gutachter {city}</h1>
                    <p>Schnelle Schadensbegutachtung direkt bei Ihnen vor Ort in {city} – kostenlos für Unfallgeschädigte.</p>
                    <div className="hero-ctas" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: 'var(--sp-lg)' }}>
                        <a href="tel:+4902111234567" className="btn btn-accent">📞 Jetzt anrufen</a>
                        <a href="https://wa.me/4902111234567" className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">💬 WhatsApp starten</a>
                    </div>
                </div>
            </section>

            {/* 3 STEPS */}
            <section className="process-section" style={{ padding: 'var(--sp-4xl) 0' }}>
                <div className="container text-center">
                    <span className="section-label">Ablauf</span>
                    <h2 className="section-title">In 3 Schritten zu Ihrem Recht</h2>
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

            {/* KOSTENLOSE ERSTEINSCHÄTZUNG */}
            <section className="content-section alt">
                <div className="container">
                    <div className="text-center">
                        <span className="section-label">Schnell & einfach</span>
                        <h2 className="section-title">Kostenlose Ersteinschätzung per WhatsApp</h2>
                        <p className="section-subtitle mx-auto">Senden Sie uns die Daten via Smartphone und unser Experte aus {city} meldet sich sofort.</p>
                    </div>
                    <div className="three-col" style={{ marginTop: 'var(--sp-xl)' }}>
                        <div className="timeline-card text-center animate-on-scroll">
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📸</div>
                            <h3>1. ÜBERSICHTS- & DETAILFOTOS</h3>
                            <p>Machen Sie Bilder des gesamten Fahrzeugs und detaillierte Nahaufnahmen der Schäden.</p>
                        </div>
                        <div className="timeline-card text-center animate-on-scroll">
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📄</div>
                            <h3>2. FAHRZEUGSCHEIN</h3>
                            <p>Senden Sie uns ein Foto Ihres Fahrzeugscheins, damit wir sofort alle relevanten Daten prüfen können.</p>
                        </div>
                        <div className="timeline-card text-center animate-on-scroll">
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📱</div>
                            <h3>3. SENDEN & ANTWORT ERHALTEN</h3>
                            <p>Schicken Sie alles via WhatsApp. Wir prüfen den Schaden und rufen Sie mit der Ersteinschätzung zurück.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* VORTEILE */}
            <section className="content-section">
                <div className="container">
                    <div className="two-col">
                        <div className="content-image animate-on-scroll">
                            <img src="/images/hero-bg.png" alt={`Gutachter ${city}`} />
                        </div>
                        <div className="content-text">
                            <span className="section-label">Ihre Experten</span>
                            <h2>Die UnfallExperten für {city}</h2>
                            <p>Verlassen Sie sich auf unser lokales Team für eine schnelle und rechtssichere Schadensregulierung.</p>
                            <ul className="check-list animate-on-scroll">
                                <li><strong>24/7-Service</strong> – Kurzfristige Termine auch am Wochenende</li>
                                <li><strong>Zertifizierte Sachverständige</strong> & Experten für Kfz-Schäden</li>
                                <li><strong>Absolut kostenlos</strong> für Sie bei unverschuldeten Unfällen</li>
                                <li><strong>Komplett-Service</strong> inkl. Anwalt- und Werkstattvermittlung</li>
                                <li><strong>Lokale Marktkenntnis</strong> für präzise Wiederbeschaffungswerte in {city}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* VEHICLE TYPES */}
            <section className="vehicles-section" style={{ background: 'var(--clr-offwhite)', padding: 'var(--sp-4xl) 0' }}>
                <div className="container">
                    <div className="text-center">
                        <span className="section-label">Fahrzeugtypen</span>
                        <h2 className="section-title">Experten für alle Fahrzeuge</h2>
                    </div>
                    <div className="vehicles-grid" style={{ marginTop: 'var(--sp-xl)' }}>
                        <div className="vehicle-card animate-on-scroll">
                            <h3>PKW</h3>
                            <p>Alle Marken und Modelle</p>
                        </div>
                        <div className="vehicle-card animate-on-scroll">
                            <h3>E‑Auto</h3>
                            <p>Spezialwissen für Elektromotoren und Batterien</p>
                        </div>
                        <div className="vehicle-card animate-on-scroll">
                            <h3>LKW & Transporter</h3>
                            <p>Nutzfahrzeug-Spezialisten</p>
                        </div>
                        <div className="vehicle-card animate-on-scroll">
                            <h3>Caravan & Wohnmobile</h3>
                            <p>Inklusive Aufbau- und Innenschäden</p>
                        </div>
                        <div className="vehicle-card animate-on-scroll">
                            <h3>Motorrad</h3>
                            <p>Roller, Quads & Superbikes</p>
                        </div>
                        <div className="vehicle-card animate-on-scroll">
                            <h3>Anhänger</h3>
                            <p>Vom Boots- bis zum Pferdeanhänger</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* TIMELINE */}
            <section className="timeline-section">
                <div className="container text-center">
                    <span className="section-label">Was tun?</span>
                    <h2 className="section-title">Unfall in {city} – So geht es jetzt weiter:</h2>
                    <div className="three-col" style={{ marginTop: 'var(--sp-xl)' }}>
                        <div className="timeline-card animate-on-scroll">
                            <h3>1. Unfallstelle absichern</h3>
                            <p>Sichern Sie die Unfallstelle ab und rufen Sie bei Bedarf die Polizei.</p>
                        </div>
                        <div className="timeline-card animate-on-scroll">
                            <h3>2. Kontakt aufnehmen</h3>
                            <p>Melden Sie den Unfall nicht sofort Ihrer Versicherung! Kontaktieren Sie uns für unabhängigen Rat.</p>
                        </div>
                        <div className="timeline-card animate-on-scroll">
                            <h3>3. Wir übernehmen</h3>
                            <p>Wir begutachten den Schaden, schalten einen Anwalt ein und regulieren alles in Ihrem Sinne.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-banner">
                <div className="cta-banner-bg"></div>
                <div className="container">
                    <h2>Stressfreie Regulierung – Wir kümmern uns um alles</h2>
                    <p>Lehnen Sie sich zurück. Ihr Kfz-Gutachter für {city} erledigt die Arbeit.</p>
                    <div className="cta-banner-buttons">
                        <a href="tel:+4902111234567" className="btn btn-accent">📞 Jetzt kostenlos anrufen</a>
                    </div>
                </div>
            </section>

            {/* OTHER LOCATIONS */}
            <section className="content-section" style={{ textAlign: 'center', background: 'var(--clr-offwhite)' }}>
                <div className="container">
                    <h3>Auch an anderen Kölner Standorten für Sie da:</h3>
                    <div style={{ marginTop: '20px', display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link href="/standorte/koeln-nippes" style={{ background: 'var(--clr-white)', padding: '10px 20px', borderRadius: '20px', border: '1px solid var(--clr-border)', color: 'inherit', textDecoration: 'none' }}>Köln Nippes</Link>
                        <Link href="/standorte/koeln-lindenthal" style={{ background: 'var(--clr-white)', padding: '10px 20px', borderRadius: '20px', border: '1px solid var(--clr-border)', color: 'inherit', textDecoration: 'none' }}>Köln Lindenthal</Link>
                        <Link href="/standorte/koeln-chorweiler" style={{ background: 'var(--clr-white)', padding: '10px 20px', borderRadius: '20px', border: '1px solid var(--clr-border)', color: 'inherit', textDecoration: 'none' }}>Köln Chorweiler</Link>
                        <Link href="/standorte" style={{ fontWeight: 600, color: 'var(--clr-primary)', padding: '10px' }}>Alle NRW Standorte ansehen →</Link>
                    </div>
                </div>
            </section>

            {/* CONTACT FORM */}
            <section id="contact" className="contact-section">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-info">
                            <span className="section-label">Kontakt</span>
                            <h2>Gutachter in {city} beauftragen</h2>
                            <p>Hinterlassen Sie Ihre Nummer und wir melden uns innerhalb von 15 Minuten – kostenlos und unverbindlich.</p>
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
        </div>
    );
}
