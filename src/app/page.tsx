import Link from 'next/link';
import Script from 'next/script';
import Image from 'next/image';
import MapPins from '@/components/MapPins';
import Konfigurator from '@/components/Konfigurator';
import FaqSection from '@/components/FaqSection';
import BarChartSection from '@/components/BarChartSection';
import TrustindexWidget from '@/components/TrustindexWidget';
import ProcessSection from '@/components/ProcessSection';

export default function Home() {
  return (
    <div className="page-home">
      {/* 2) HERO */}
      <section className="hero" id="about">
        <div className="hero-bg">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/hero-bg.png"
          >
            <source src="/images/herovideo.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <div className="trust-badge" style={{ marginBottom: '20px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg> Zertifizierter Sachverständiger
            </div>
            <h1>
              Unfall in NRW?<br />
              Wir regeln alles schnell & stressfrei.
            </h1>
            <p className="hero-subheadline">Für Geschädigte kostenlos – die gegnerische Versicherung übernimmt in der Regel sämtliche Kosten. Kein Risiko, kein Stress.</p>
            <div className="hero-ctas">
              <Link href="https://wa.me/4902111234567?text=Hallo%2C%20ich%20brauche%20Hilfe%20nach%20einem%20Unfall." className="btn btn-whatsapp" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785h-.005a9.868 9.868 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374A9.86 9.86 0 0 1 2.17 12.06c0-5.456 4.436-9.893 9.9-9.893a9.827 9.827 0 0 1 7.001 2.902 9.828 9.828 0 0 1 2.893 7.003c-.004 5.456-4.44 9.893-9.913 9.893zM20.52 3.449C18.24 1.245 15.24 0 12.05 0 5.463 0 .104 5.334.101 11.893a11.793 11.793 0 0 0 1.587 5.946L0 24l6.335-1.652A11.882 11.882 0 0 0 12.05 24c6.584 0 11.94-5.335 11.943-11.893a11.808 11.808 0 0 0-3.473-8.658z" />
                </svg> WhatsApp starten
              </Link>
              <a href="tel:+4902111234567" className="btn btn-outline">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg> Jetzt anrufen
              </a>
            </div>
          </div>
          <div className="hero-trust animate-on-scroll" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', zIndex: 2 }}>
            <div className="online-status" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(0,0,0,0.3)', padding: '4px 12px', borderRadius: '30px', marginBottom: '12px', marginTop: '-15px', color: 'white', fontWeight: '600', fontSize: '13px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <span className="online-dot"></span> 24/7 Notfall-Service
            </div>

            <div style={{ marginBottom: '16px', width: '100%', display: 'flex', justifyContent: 'center' }}>
              <TrustindexWidget scriptUrl='https://cdn.trustindex.io/loader.js?f651024657fa459a88668d3e542' />
            </div>

            <ul className="trust-list" style={{ alignItems: 'flex-start', textAlign: 'left' }}>
              <li><span className="check">✓</span> Keine Kosten für Geschädigte</li>
              <li><span className="check">✓</span> Einsatz in ganz NRW – sofort verfügbar</li>
              <li><span className="check">✓</span> Gutachten in 24 Stunden</li>
            </ul>
          </div>
        </div>

        {/* Hero Car */}
        <div className="hero-car-wrapper">
          <Image
            src="/images/bmw_unfall.png"
            alt="Unfallfahrzeug - UnfallExperten NRW"
            width={800}
            height={500}
            priority
          />
        </div>
      </section>

      {/* 3) 3-STEP PROCESS (Animated on Scroll) */}
      <ProcessSection />

      {/* 4) EXPERTISE & BENEFITS */}
      <section className="expertise-section">
        <div className="container">
          <div className="expertise-grid">
            <div className="expertise-image animate-on-scroll">
              <img src="/images/gutachten.png" alt="Kfz-Sachverständiger bei der Begutachtung" loading="lazy" />
              <div className="expertise-ribbon">⚙ Experten für Kfz-Schäden</div>
            </div>
            <div>
              <span className="section-label" style={{ color: 'var(--clr-primary)' }}>Unsere Expertise</span>
              <h2 className="section-title">Ihre Vorteile im Überblick</h2>
              <div className="benefit-list">
                <div className="benefit-item animate-on-scroll">
                  <div className="benefit-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </div><span>24/7 Notfallservice via WhatsApp</span>
                </div>
                <div className="benefit-item animate-on-scroll">
                  <div className="benefit-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div><span>Zertifizierte und erfahrene Sachverständige</span>
                </div>
                <div className="benefit-item animate-on-scroll">
                  <div className="benefit-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                  </div><span>Gutachten von Experten für Kfz-Schäden</span>
                </div>
                <div className="benefit-item animate-on-scroll">
                  <div className="benefit-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div><span>Hohe Akzeptanz bei allen Versicherungen</span>
                </div>
                <div className="benefit-item animate-on-scroll">
                  <div className="benefit-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="12" y1="1" x2="12" y2="23" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div><span>Kostenfreie Schadensregulierung für Geschädigte</span>
                </div>
                <div className="benefit-item animate-on-scroll">
                  <div className="benefit-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="1" y="3" width="15" height="13" />
                      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                      <circle cx="5.5" cy="18.5" r="2.5" />
                      <circle cx="18.5" cy="18.5" r="2.5" />
                    </svg>
                  </div><span>Unfall-Komplett-Service: Anwalt, Werkstatt, Mietwagen</span>
                </div>
              </div>
              <p className="expertise-text">Innerhalb von 24 Stunden erstellen wir Ihr Gutachten – inklusive Schadenhöhe, Wertminderung und Wiederbeschaffungswert. So erhalten Sie die maximale Entschädigung, die Ihnen zusteht.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5) REGIONAL PRESENCE */}
      <section className="regional-section" id="region">
        <div className="container">
          <div className="regional-grid">
            <div>
              <span className="section-label" style={{ color: 'var(--clr-white)' }}>Immer in Ihrer Nähe</span>
              <h2 className="section-title text-white">NRW-weit für Sie da</h2>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.7', marginBottom: 'var(--sp-lg)' }}>Egal ob Großstadt oder ländlicher Raum – unsere Sachverständigen sind überall in Nordrhein-Westfalen schnell vor Ort. Meist innerhalb weniger Stunden nach Ihrem Anruf.</p>
              <div className="regional-cities">
                <span className="city-tag">📍 Köln</span>
                <span className="city-tag">📍 Düsseldorf</span>
                <span className="city-tag">📍 Dortmund</span>
                <span className="city-tag">📍 Essen</span>
                <span className="city-tag">📍 Bonn</span>
                <span className="city-tag">📍 Münster</span>
                <span className="city-tag">📍 Wuppertal</span>
                <span className="city-tag">📍 Bielefeld</span>
                <span className="city-tag">📍 Aachen</span>
                <span className="city-tag">📍 Euskirchen</span>
                <span className="city-tag">📍 Hagen</span>
                <span className="city-tag">📍 Duisburg</span>
                <span className="city-tag">📍 Bochum</span>
                <span className="city-tag">📍 Gelsenkirchen</span>
                <span className="city-tag">📍 Mönchengladbach</span>
                <span className="city-tag">📍 Krefeld</span>
                <span className="city-tag">📍 Oberhausen</span>
                <span className="city-tag">📍 uvm.</span>
              </div>
            </div>
            {/* Custom Interactive Map Component */}
            <MapPins />
          </div>
        </div>
      </section>

      {/* 6) TIMELINE */}
      <section className="timeline-section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--sp-2xl)' }}>
            <span className="section-label" style={{ color: 'var(--clr-primary)' }}>Schritt für Schritt</span>
            <h2 className="section-title">Unverschuldet verunfallt? So funktioniert es</h2>
            <p className="section-subtitle mx-auto">Von der ersten Kontaktaufnahme bis zur Auszahlung – wir begleiten Sie durch den gesamten Prozess.</p>
          </div>
          <div className="timeline">
            <div className="timeline-item animate-on-scroll">
              <div className="timeline-dot">1</div>
              <div className="timeline-card">
                <h3>Kontakt aufnehmen</h3>
                <p>Rufen Sie uns an oder schreiben Sie per WhatsApp. Wir klären Ihre Fragen und vereinbaren einen Termin – kostenlos und unverbindlich.</p>
              </div>
            </div>
            <div className="timeline-item animate-on-scroll">
              <div className="timeline-dot">2</div>
              <div className="timeline-card">
                <h3>Schadensbegutachtung vor Ort</h3>
                <p>Unser zertifizierter Sachverständiger kommt zu Ihnen und nimmt alle Schäden detailliert auf – mit modernster Technik und Erfahrung.</p>
              </div>
            </div>
            <div className="timeline-item animate-on-scroll">
              <div className="timeline-dot">3</div>
              <div className="timeline-card">
                <h3>Gutachten fertigstellen</h3>
                <p>Innerhalb von 24–72 Stunden erhalten Sie Ihr vollständiges Gutachten mit Schadenhöhe, Wertminderung und Wiederbeschaffungswert.</p>
              </div>
            </div>
            <div className="timeline-item animate-on-scroll">
              <div className="timeline-dot">4</div>
              <div className="timeline-card">
                <h3>Abwicklung mit Versicherung</h3>
                <p>Wir unterstützen Sie aktiv bei der Regulierung mit der gegnerischen Versicherung – bis zur vollständigen Auszahlung Ihrer Ansprüche.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7) REVIEWS */}
      <section className="reviews-section" id="reviews">
        <div className="container">
          <div className="text-center">
            <span className="section-label" style={{ color: 'var(--clr-primary)' }}>Kundenstimmen</span>
            <h2 className="section-title">Was unsere Kunden sagen</h2>
            <p className="section-subtitle mx-auto">Zufriedene Kunden vertrauen auf UnfallExperten NRW. Lesen Sie echte Erfahrungsberichte.</p>
          </div>
          <div style={{ marginTop: '40px', width: '100%' }}>
            <TrustindexWidget scriptUrl='https://cdn.trustindex.io/loader.js?927af9365ad3459d2a365f859b6' />
          </div>
        </div>
      </section>

      {/* 8) WHY APPRAISAL */}
      <BarChartSection />

      {/* 9) CTA BANNER */}
      <section className="cta-banner">
        <div className="cta-banner-bg"></div>
        <div className="container">
          <h2>Kompletter Service aus einer Hand</h2>
          <p>Vom Abschleppdienst über das Gutachten bis zum Mietwagen & Werkstatt – wir koordinieren alles für Sie. Kostenlos für Geschädigte.</p>
          <div className="cta-banner-buttons">
            <a href="tel:+4902111234567" className="btn btn-outline">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg> Jetzt anrufen – kostenlos
            </a>
            <Link href="https://wa.me/4902111234567?text=Hallo%2C%20ich%20brauche%20Hilfe%20nach%20einem%20Unfall." className="btn btn-whatsapp" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              </svg> WhatsApp – Schnelle Rückmeldung!
            </Link>
          </div>
        </div>
      </section>

      {/* 10) SERVICES */}
      <section className="services-section" id="services">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Unser Angebot</span>
            <h2 className="section-title">Unsere Leistungen</h2>
            <p className="section-subtitle mx-auto">Von der Schadensdokumentation bis zur Wertermittlung – wir bieten Ihnen das volle Spektrum an Kfz-Sachverständigenleistungen.</p>
          </div>
          <div className="services-grid">
            <div className="service-card animate-on-scroll">
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3>Kostenlose Dienstleistung</h3>
              <p>Bei unverschuldeten Unfällen übernimmt die gegnerische Versicherung alle Gutachterkosten. Für Sie entstehen keine Kosten.</p>
              <Link href="/kostenlose-dienstleistung" className="service-link">Mehr erfahren →</Link>
            </div>
            <div className="service-card animate-on-scroll">
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
              </div>
              <h3>Unfall- & Schadensgutachten</h3>
              <p>Detaillierte Dokumentation aller Schäden mit Schadenhöhe, Wertminderung und Wiederbeschaffungswert für maximale Entschädigung.</p>
              <Link href="/unfall-schadensgutachten" className="service-link">Mehr erfahren →</Link>
            </div>
            <div className="service-card animate-on-scroll">
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3>Kaskoschäden</h3>
              <p>Auch bei selbstverschuldeten Unfällen erstellen wir Gutachten für Ihre Kaskoversicherung – fair und unabhängig.</p>
              <Link href="/kaskoschaden" className="service-link">Mehr erfahren →</Link>
            </div>
            <div className="service-card animate-on-scroll">
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3>Reparaturbestätigung</h3>
              <p>Nach der Reparatur bestätigen wir die fachgerechte Instandsetzung – wichtig für Ihr Fahrzeug und den Wiederverkaufswert.</p>
              <Link href="/reparaturbestaetigung" className="service-link">Mehr erfahren →</Link>
            </div>
            <div className="service-card animate-on-scroll">
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <h3>Wertgutachten</h3>
              <p>Ermittlung des aktuellen Marktwerts Ihres Fahrzeugs – für Kauf, Verkauf oder Versicherungszwecke.</p>
              <Link href="/wertgutachten" className="service-link">Mehr erfahren →</Link>
            </div>
            <div className="service-card animate-on-scroll">
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3>Kostenvoranschlag</h3>
              <p>Schnelle Kalkulation der voraussichtlichen Reparaturkosten – als Alternative zum vollständigen Gutachten bei kleineren Schäden.</p>
              <Link href="/kostenvoranschlag" className="service-link">Mehr erfahren →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 11) VEHICLE TYPES */}
      <section className="vehicles-section">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Fahrzeugtypen</span>
            <h2 className="section-title">Unsere Expertise – Umfassende Fahrzeugtypen</h2>
            <p className="section-subtitle mx-auto">Egal welches Fahrzeug – unsere Sachverständigen sind für alle Typen qualifiziert.</p>
          </div>
          <div className="vehicles-grid">
            <div className="vehicle-card animate-on-scroll">
              <div className="vehicle-icon"><img src="/images/auto.svg" alt="PKW Icon" /></div>
              <h3>PKW</h3>
              <p>Alle Marken und Modelle – vom Kleinwagen bis zur Oberklasse</p>
            </div>
            <div className="vehicle-card animate-on-scroll">
              <div className="vehicle-icon"><img src="/images/eauto.svg" alt="E-Auto Icon" /></div>
              <h3>E‑Auto</h3>
              <p>Spezialwissen für Elektro- und Hybridfahrzeuge inkl. Batteriecheck</p>
            </div>
            <div className="vehicle-card animate-on-scroll">
              <div className="vehicle-icon"><img src="/images/lkw.svg" alt="LKW Icon" /></div>
              <h3>LKW</h3>
              <p>Nutzfahrzeuge und Transporter aller Gewichtsklassen</p>
            </div>
            <div className="vehicle-card animate-on-scroll">
              <div className="vehicle-icon"><img src="/images/caravan.svg" alt="Caravan Icon" /></div>
              <h3>Caravan</h3>
              <p>Wohnmobile und Wohnwagen – inklusive Aufbau und Innenraum</p>
            </div>
            <div className="vehicle-card animate-on-scroll">
              <div className="vehicle-icon"><img src="/images/anhänger.svg" alt="Anhänger Icon" /></div>
              <h3>Anhänger</h3>
              <p>Vom Bootsanhänger bis zum Pferdeanhänger</p>
            </div>
            <div className="vehicle-card animate-on-scroll">
              <div className="vehicle-icon"><img src="/images/motorrad.svg" alt="Motorrad Icon" /></div>
              <h3>Motorrad</h3>
              <p>Motorräder, Roller und Quads aller Hersteller</p>
            </div>
          </div>
        </div>
      </section>

      {/* 12) FAQ */}
      <FaqSection />

      {/* 13) CONTACT FORM vs KONFIGURATOR */}
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

    </div>
  );
}
