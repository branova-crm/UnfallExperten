import { Metadata } from 'next';
import Link from 'next/link';
import Konfigurator from '@/components/Konfigurator';

export const metadata: Metadata = {
    title: 'Kontakt – Schnelle Hilfe nach dem Unfall | UnfallExperten NRW',
    description: 'Kontaktieren Sie UnfallExperten NRW – 24/7 erreichbar per Telefon & WhatsApp. Kostenlose Beratung nach Unfall in NRW. Rückruf in 15 Minuten!',
};

export default function KontaktPage() {
    return (
        <>
            <section className="hero" style={{ minHeight: '60vh', padding: '120px 0 80px 0' }}>
                <div className="hero-bg"><img src="/images/hero-bg.png" alt="Kontakt - UnfallExperten NRW" loading="eager" /></div>
                <div className="hero-overlay"></div>
                <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="hero-content" style={{ maxWidth: '800px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <p className="breadcrumb" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '15px' }}><Link href="/">Startseite</Link> / Kontakt</p>
                        <h1 style={{ color: 'var(--clr-white)', marginBottom: '20px' }}>Kontakt</h1>
                        <p className="hero-subheadline mx-auto" style={{ fontSize: 'var(--fs-lg)' }}>Schnell erreichbar in ganz NRW – wir helfen sofort nach Ihrem Unfall. Kostenlos und unverbindlich.</p>
                        <div className="hero-ctas" style={{ justifyContent: 'center', marginBottom: '30px' }}>
                            <a href="tel:+4902111234567" className="btn btn-outline">📞 Jetzt anrufen</a>
                            <a href="https://wa.me/4902111234567" className="btn btn-whatsapp" target="_blank">💬 WhatsApp schreiben</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* MAIN CONTACT */}
            <section className="contact-section" id="contact" style={{ paddingTop: 'var(--sp-3xl)' }}>
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-info">
                            <span className="section-label" style={{ color: 'var(--clr-primary)' }}>Jetzt Kontakt aufnehmen</span>
                            <h2 style={{ color: 'var(--clr-text)' }}>Wir rufen Sie innerhalb von 15 Minuten zurück!</h2>
                            <p>Egal ob Anruf, WhatsApp oder Rückruf-Formular – wählen Sie den Weg, der Ihnen am besten passt. Wir sind rund um die Uhr für Sie da.</p>
                            <div className="contact-direct">
                                <a href="tel:+4902111234567">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg> 0211 – 123 456 7
                                </a>
                                <a href="https://wa.me/4902111234567" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                    </svg> WhatsApp schreiben
                                </a>
                                <a href="mailto:info@unfallexperten-nrw.de">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                                        <rect width="20" height="16" x="2" y="4" rx="2" />
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                    </svg> info@unfallexperten-nrw.de
                                </a>
                            </div>
                            <div style={{ marginTop: 'var(--sp-xl)', padding: 'var(--sp-lg)', background: 'var(--clr-offwhite)', borderRadius: 'var(--radius)', textAlign: 'center' }}>
                                <p style={{ fontSize: 'var(--fs-sm)', color: 'var(--clr-text-muted)', margin: 0 }}>
                                    <strong style={{ color: 'var(--clr-primary)' }}>📍 NRW-weit im Einsatz</strong><br />
                                    Musterstraße 1, 40210 Düsseldorf<br />
                                    Wir kommen zu Ihnen – überall in Nordrhein-Westfalen
                                </p>
                            </div>
                        </div>
                        <Konfigurator />
                    </div>
                </div>
            </section>

            {/* TRUST STRIP */}
            <div className="trust-strip">
                <div className="container">
                    <div className="trust-strip-inner">
                        <div className="trust-strip-item">
                            <a href="https://share.google/KbGRRE7ngszpWpv9k" target="_blank" className="google-review-inline" aria-label="Google Bewertung" style={{ color: 'inherit' }}>
                                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="google-logo" />
                                <span className="google-stars">★★★★★</span>
                            </a>
                        </div>
                        <div className="trust-strip-item"><span className="icon">🕐</span> 24/7 erreichbar</div>
                        <div className="trust-strip-item"><span className="icon">💰</span> Kostenlos für Geschädigte</div>
                        <div className="trust-strip-item"><span className="icon">📍</span> NRW-weit im Einsatz</div>
                    </div>
                </div>
            </div>
        </>
    );
}
