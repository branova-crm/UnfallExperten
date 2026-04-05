import Link from 'next/link';
import MapPins from '@/components/MapPins';
import Konfigurator from '@/components/Konfigurator';
import FaqSection from '@/components/FaqSection';
import BarChartSection from '@/components/BarChartSection';
import GoogleReviewsWidget from '@/components/GoogleReviewsWidget';
import ProcessSection from '@/components/ProcessSection';
import GoogleMapsEmbed from '@/components/GoogleMapsEmbed';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import TrustStatsSection from '@/components/TrustStatsSection';

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
            <source src="/images/herovideo2.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1>
              <span className="hero-title-main">KFZ-Gutachter Euskirchen</span><br />
              <span className="hero-title-sub">Wir kümmern uns schnell und stressfrei um Ihr Unfallgutachten.</span>
            </h1>
            <p className="hero-subheadline">NRW-weit für Sie im Einsatz: Wir sind kurzfristig vor Ort, erstellen Ihr Gutachten zuverlässig und begleiten Sie durch den gesamten Schadenprozess. Für Geschädigte kostenlos – die gegnerische Versicherung übernimmt in der Regel sämtliche Kosten. Kein Risiko, kein Stress.</p>
            <div className="hero-ctas">
              <a 
                href="tel:+4902111234567" 
                className="btn btn-outline glass-button"
                style={{ position: 'relative' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ position: 'relative', zIndex: 2 }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg> 
                <span style={{ position: 'relative', zIndex: 2 }}>Jetzt anrufen</span>
              </a>
              <Link href="https://wa.me/4902111234567?text=Hallo%2C%20ich%20brauche%20Hilfe%20nach%20einem%20Unfall." className="btn btn-whatsapp" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785h-.005a9.868 9.868 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374A9.86 9.86 0 0 1 2.17 12.06c0-5.456 4.436-9.893 9.9-9.893a9.827 9.827 0 0 1 7.001 2.902 9.828 9.828 0 0 1 2.893 7.003c-.004 5.456-4.44 9.893-9.913 9.893zM20.52 3.449C18.24 1.245 15.24 0 12.05 0 5.463 0 .104 5.334.101 11.893a11.793 11.793 0 0 0 1.587 5.946L0 24l6.335-1.652A11.882 11.882 0 0 0 12.05 24c6.584 0 11.94-5.335 11.943-11.893a11.808 11.808 0 0 0-3.473-8.658z" />
                </svg> WhatsApp starten
              </Link>
            </div>
          </div>
          {/* Komplett neugebauter Glass Container (Inline) - Rechts neben dem Text */}
            <div className="hero-trust glass-panel" style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center', 
              alignItems: 'center', 
              textAlign: 'center', 
              width: '100%',
              maxWidth: '100%', 
              height: '100%', 
              padding: '60px 30px', 
              zIndex: 2,
              position: 'relative',
              marginLeft: 'auto',
              gap: '24px' // Standard-Abstand zwischen den Blöcken
            }}>
              {/* Button Gruppe mit minimalem Abstand */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', width: '100%', alignItems: 'center' }}>
                <div className="trust-badge" style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  background: 'rgba(255, 255, 255, 0.15)', 
                  padding: '10px 16px', 
                  borderRadius: 'var(--radius)', 
                  color: 'white', 
                  fontWeight: '600', 
                  fontSize: '1rem', 
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  width: '100%',
                  justifyContent: 'center',
                  margin: 0 // Resetting margin to prioritize container gap
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg> Unabhängiger KFZ-Sachverständiger
                </div>
    
                <div className="online-status" style={{ display: 'flex', justifyContent: 'center', width: '100%', alignItems: 'center', gap: '8px', background: 'rgba(255, 255, 255, 0.15)', padding: '10px 16px', borderRadius: 'var(--radius)', color: 'white', fontWeight: '600', fontSize: '1rem', border: '1px solid rgba(255, 255, 255, 0.15)', margin: 0 }}>
                  <span className="online-dot" style={{ width: '8px', height: '8px', background: '#4ade80', borderRadius: '50%', boxShadow: '0 0 10px #4ade80' }}></span> 24/7 Notfall-Service
                </div>
              </div>

              {/* Rating Bereich */}
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ display: 'flex', marginRight: '-4px' }}>
                    {[
                      { init: 'H', bg: '#0097a7' },
                      { init: 'S', bg: '#5c6bc0' },
                      { init: 'A', bg: '#7b1fa2' },
                      { init: 'K', bg: '#ec407a' },
                      { init: 'N', bg: '#689f38' },
                    ].map((a, i) => (
                      <span key={i} style={{
                        width: '36px', height: '36px', borderRadius: '50%', background: a.bg,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: '#fff', fontWeight: 700, fontSize: '0.9rem',
                        border: '2px solid #fff',
                        marginLeft: i === 0 ? '0' : '-10px', position: 'relative', zIndex: 5 - i
                      }}>{a.init}</span>
                    ))}
                  </div>
                  <span style={{ color: '#fff', fontWeight: 800, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <svg viewBox="0 0 24 24" width="26" height="26" fill="#FBBC05"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                    5.0 Google | 8 Bewertungen
                  </span>
                </div>
              </div>
  
              {/* Trust List */}
              <ul className="trust-list" style={{ alignItems: 'center', textAlign: 'center', width: '100%', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span className="check">✓</span> Keine Kosten für Geschädigte</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span className="check">✓</span> Einsatz in ganz NRW – sofort verfügbar</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span className="check">✓</span> Gutachten in 24 Stunden</li>
              </ul>
            </div>
        </div>


      </section>

      {/* 3) 3-STEP PROCESS (Animated on Scroll) */}
      <ProcessSection />

      {/* 4) FALLBEISPIELE */}
      <CaseStudiesSection />

      {/* 7) REVIEWS */}
      <section className="reviews-section" id="reviews">
        <div className="container">
          <div className="text-center">
            <span className="section-label" style={{ color: 'var(--clr-white)' }}>Kundenstimmen</span>
            <h2 className="section-title" style={{ color: 'var(--clr-white)' }}>Was unsere Kunden sagen</h2>
          </div>
          <div style={{ marginTop: '40px', width: '100%' }}>
            <GoogleReviewsWidget />
          </div>
        </div>
      </section>

      {/* 13) CONTACT FORM vs KONFIGURATOR */}
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <span className="section-label" style={{ color: 'var(--clr-primary)' }}>Kontakt</span>
              <h2 style={{ color: 'var(--clr-text)' }}>Wir rufen Sie gerne zurück!</h2>
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

      {/* 5) REGIONAL PRESENCE */}
      <section className="regional-section" id="region">
        <div className="container">
          <div className="regional-grid">
            <div>
              <span className="section-label" style={{ color: 'var(--clr-white)' }}>Immer in Ihrer Nähe</span>
              <h2 className="section-title text-white">NRW-weit für Sie da</h2>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.7', marginBottom: 'var(--sp-lg)' }}>Egal ob Großstadt or ländlicher Raum – unsere Sachverständigen sind überall in Nordrhein-Westfalen schnell vor Ort. Meist innerhalb weniger Stunden nach Ihrem Anruf.</p>
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


      {/* 8) WHY APPRAISAL */}
      <BarChartSection />

      {/* 9) TRUST STATS */}
      <TrustStatsSection />





      {/* 12) FAQ */}
      <FaqSection />



      <GoogleMapsEmbed />
    </div>
  );
}
