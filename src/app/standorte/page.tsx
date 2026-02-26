import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Unsere Standorte – Kfz-Gutachter NRW-weit | UnfallExperten',
    description: 'Finden Sie Ihren Kfz-Gutachter vor Ort in NRW. UnfallExperten NRW ist in Köln, Düsseldorf, Dortmund, Essen und im ganzen Ruhrgebiet für Sie im Einsatz.',
};

export default function StandortePage() {
    return (
        <>
            <section className="hero" style={{ minHeight: '60vh', padding: '120px 0 80px 0' }}>
                <div className="hero-bg"><img src="/images/hero-bg.png" alt="Standorte NRW - UnfallExperten" loading="eager" /></div>
                <div className="hero-overlay"></div>
                <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="hero-content" style={{ maxWidth: '800px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <p className="breadcrumb" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '15px' }}><Link href="/">Startseite</Link> / Standorte</p>
                        <h1 style={{ color: 'var(--clr-white)', marginBottom: '20px' }}>Unsere Standorte in NRW</h1>
                        <p className="hero-subheadline mx-auto" style={{ fontSize: 'var(--fs-lg)' }}>Immer in Ihrer Nähe – wir kommen zu Ihnen an den Unfallort oder nach Hause, überall in Nordrhein-Westfalen.</p>
                    </div>
                </div>
            </section>

            {/* LOCATIONS GRID */}
            <section className="content-section">
                <div className="container">
                    <div className="text-center">
                        <span className="section-label" style={{ color: 'var(--clr-primary)' }}>NRW-weit</span>
                        <h2 className="section-title">Finden Sie Ihren Gutachter vor Ort</h2>
                        <p className="section-subtitle mx-auto">Wählen Sie Ihre Stadt für den schnellsten lokalen Service.</p>
                    </div>

                    <div className="locations-grid">
                        <div className="location-card animate-on-scroll">
                            <div className="pin">📍</div>
                            <h3>Kfz-Gutachter Köln Ehrenfeld</h3>
                            <p>Schnelle Schadensbegutachtung in Köln und Umgebung. 24/7-Service vor Ort.</p>
                            <Link href="/standorte/koeln-ehrenfeld" className="service-link">Zum Standort →</Link>
                        </div>
                        <div className="location-card animate-on-scroll">
                            <div className="pin">📍</div>
                            <h3>Kfz-Gutachter Köln Porz</h3>
                            <p>Ihr Sachverständiger für den Kölner Süden und rechtsrheinische Gebiete.</p>
                            <a href="#" className="service-link">Zum Standort →</a>
                        </div>
                        <div className="location-card animate-on-scroll">
                            <div className="pin">📍</div>
                            <h3>Kfz-Gutachter Düsseldorf Innenstadt</h3>
                            <p>Zentrale Unfallhilfe in der Landeshauptstadt – wir sind schnell zur Stelle.</p>
                            <a href="#" className="service-link">Zum Standort →</a>
                        </div>
                        <div className="location-card animate-on-scroll">
                            <div className="pin">📍</div>
                            <h3>Kfz-Gutachter Dortmund</h3>
                            <p>Kompetente Gutachten im Ruhrgebiet. Kostenlos für Unfallgeschädigte.</p>
                            <a href="#" className="service-link">Zum Standort →</a>
                        </div>
                        <div className="location-card animate-on-scroll">
                            <div className="pin">📍</div>
                            <h3>Kfz-Gutachter Essen</h3>
                            <p>Zuverlässige Begutachtung und Schadenskalkulation im Zentrum des Ruhrgebiets.</p>
                            <a href="#" className="service-link">Zum Standort →</a>
                        </div>
                        <div className="location-card animate-on-scroll">
                            <div className="pin">📍</div>
                            <h3>Kfz-Gutachter Wuppertal</h3>
                            <p>Bergisches Land abgedeckt – wir kommen auch zu Ihnen nach Hause.</p>
                            <a href="#" className="service-link">Zum Standort →</a>
                        </div>
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
                        <div className="trust-strip-item"><span className="icon">🕐</span> 24/7 Service vor Ort</div>
                        <div className="trust-strip-item"><span className="icon">💰</span> Kostenlos für Geschädigte</div>
                        <div className="trust-strip-item"><span className="icon">📍</span> NRW-weit im Einsatz</div>
                    </div>
                </div>
            </div>
        </>
    );
}
