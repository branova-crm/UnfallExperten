import Link from "next/link";
import MapPins from "@/components/MapPins";
import Konfigurator from "@/components/Konfigurator";
import FaqSection from "@/components/FaqSection";
import BarChartSection from "@/components/BarChartSection";
import GoogleReviewsWidget from "@/components/GoogleReviewsWidget";
import ProcessSection from "@/components/ProcessSection";
import GoogleMapsEmbed from "@/components/GoogleMapsEmbed";
import HomeFallbeispieleSection from "@/components/HomeFallbeispieleSection";
import TrustStatsSection from "@/components/TrustStatsSection";
import HeroWaveZone from "@/components/HeroWaveZone";

const HERO_TITLE_WORDS = ["KFZ-Gutachter", "in", "deiner", "Nähe"] as const;

const HERO_CERT_BENEFITS = [
  "Keine Kosten für Unfallgeschädigte",
  "In ganz NRW im Einsatz",
  "Gutachten schon in 24h",
  "Hilfe direkt an der Unfallstelle",
] as const;

export default function Home() {
  return (
    <div className="page-home">
      {/* 2) HERO */}
      <HeroWaveZone>
        <section className="hero" id="about">
          <div className="hero-bg">
            <video autoPlay muted loop playsInline>
              <source src="/images/herovideo2.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="hero-overlay"></div>
          <div className="container">
            <div className="hero-content hero-content--intro">
              <h1>
                <span className="hero-title-main hero-title-words">
                  {HERO_TITLE_WORDS.map((word, index) => (
                    <span
                      key={word}
                      className="hero-word"
                      style={{ "--hero-word-i": index } as React.CSSProperties}
                    >
                      {word}
                    </span>
                  ))}
                </span>
                <br />
                <span className="hero-title-sub hero-intro-fade hero-intro-fade--phase-2">
                  Wir kümmern uns schnell und stressfrei um Ihr Unfallgutachten.
                </span>
              </h1>
              <p className="hero-subheadline hero-intro-fade hero-intro-fade--phase-3">
                NRW-weit für Sie im Einsatz: Wir sind kurzfristig vor Ort,
                erstellen Ihr Gutachten zuverlässig und begleiten Sie durch den
                gesamten Schadenprozess. Für Geschädigte kostenlos – die
                gegnerische Versicherung übernimmt in der Regel sämtliche
                Kosten. Kein Risiko, kein Stress.
              </p>
              <div className="hero-ctas">
                <a
                  href="tel:+491602929291"
                  className="btn btn-outline glass-button hero-cta-btn hero-cta-btn--call hero-intro-fade hero-intro-fade--phase-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>Jetzt anrufen</span>
                </a>
                <Link
                  href="https://wa.me/491602929291?text=Hallo%2C%20ich%20brauche%20Hilfe%20nach%20einem%20Unfall."
                  className="btn btn-whatsapp hero-cta-btn hero-intro-fade hero-intro-fade--phase-5"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785h-.005a9.868 9.868 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374A9.86 9.86 0 0 1 2.17 12.06c0-5.456 4.436-9.893 9.9-9.893a9.827 9.827 0 0 1 7.001 2.902 9.828 9.828 0 0 1 2.893 7.003c-.004 5.456-4.44 9.893-9.913 9.893zM20.52 3.449C18.24 1.245 15.24 0 12.05 0 5.463 0 .104 5.334.101 11.893a11.793 11.793 0 0 0 1.587 5.946L0 24l6.335-1.652A11.882 11.882 0 0 0 12.05 24c6.584 0 11.94-5.335 11.943-11.893a11.808 11.808 0 0 0-3.473-8.658z" />
                  </svg>{" "}
                  WhatsApp starten
                </Link>
              </div>
            </div>
            <aside
              className="hero-cert-panel hero-cert-panel--intro"
              aria-label="Zertifizierung und Kundenbewertung"
            >
              <div className="hero-cert-panel__body">
                <div
                  className="hero-cert-panel__seal hero-card-item"
                  style={{ "--card-item-i": 0 } as React.CSSProperties}
                >
                  <img
                    src="/dgusv.png"
                    alt="DGuSV – Verifizierter Sachverständiger Gutachter"
                    className="hero-cert-panel__seal-img"
                    width={140}
                    height={280}
                    loading="eager"
                    decoding="async"
                  />
                </div>
                <div className="hero-cert-panel__content">
                  <ul className="hero-cert-panel__list">
                    {HERO_CERT_BENEFITS.map((text, index) => (
                      <li
                        key={text}
                        className="hero-card-item"
                        style={
                          { "--card-item-i": index + 1 } as React.CSSProperties
                        }
                      >
                        <svg
                          className="hero-cert-panel__check"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                  <div
                    className="hero-cert-panel__rating hero-card-item"
                    style={{ "--card-item-i": 5 } as React.CSSProperties}
                  >
                    <img
                      src="/images/google-logo.png"
                      alt="Google"
                      className="hero-cert-panel__google-logo"
                      width={92}
                      height={30}
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="hero-cert-panel__rating-main">
                      <span className="hero-cert-panel__score">5.0</span>
                      <div
                        className="hero-cert-panel__stars"
                        aria-label="5 von 5 Sternen"
                      >
                        {Array.from({ length: 5 }).map((_, index) => (
                          <svg
                            key={index}
                            viewBox="0 0 24 24"
                            width="18"
                            height="18"
                            fill="#FBBC05"
                            aria-hidden="true"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <span className="hero-cert-panel__reviews">
                      21 Bewertungen
                    </span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </HeroWaveZone>

      {/* 3) 3-STEP PROCESS (Animated on Scroll) */}
      <ProcessSection />

      {/* 4) FALLBEISPIELE */}
      <HomeFallbeispieleSection />

      {/* Brand Statement – Vollbreite */}
      <section
        className="home-brand-statement"
        aria-labelledby="home-brand-statement-title"
      >
        <div className="home-brand-statement__inner animate-on-scroll">
          <p className="home-brand-statement__eyebrow">
            <span className="home-brand-statement__eyebrow-muted">
              Ihr Schadenfall.
            </span>{" "}
            <span className="home-brand-statement__eyebrow-accent">
              Unsere Expertise.
            </span>
          </p>
          <h2
            id="home-brand-statement-title"
            className="home-brand-statement__title"
          >
            <span className="home-brand-statement__title-main">Unfall</span>
            <span className="home-brand-statement__title-accent">Experten</span>
          </h2>
          <div className="home-brand-statement__divider" aria-hidden="true" />
          <p className="home-brand-statement__subline">
            Ihre Gutachter-Experten in Bonn &amp; Umgebung
          </p>
        </div>
      </section>

      {/* 7) REVIEWS */}
      <section className="reviews-section" id="reviews">
        <div className="container" style={{ position: "relative", zIndex: 5 }}>
          <div className="text-center">
            <span
              className="section-label"
              style={{ color: "var(--clr-white)" }}
            >
              Kundenstimmen
            </span>
            <h2 className="section-title" style={{ color: "var(--clr-white)" }}>
              Was unsere Kunden sagen
            </h2>
          </div>
          <div style={{ marginTop: "24px", width: "100%" }}>
            <GoogleReviewsWidget />
          </div>
        </div>
      </section>

      {/* 13) CONTACT FORM vs KONFIGURATOR */}
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <span
                className="section-label"
                style={{ color: "var(--clr-primary)" }}
              >
                Kontakt
              </span>
              <h2 style={{ color: "var(--clr-text)" }}>
                Wir rufen Sie gerne zurück!
              </h2>
              <p>
                Schnelle Hilfe nach dem Unfall ist entscheidend. Hinterlassen
                Sie Ihre Nummer und wir melden uns innerhalb von 15 Minuten –
                kostenlos und unverbindlich.
              </p>
              <div className="contact-direct">
                <a href="tel:+491602929291">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>{" "}
                  0160 29 29 29 1
                </a>
                <a href="https://wa.me/491602929291" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="24"
                    height="24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785h-.005a9.868 9.868 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374A9.86 9.86 0 0 1 2.17 12.06c0-5.456 4.436-9.893 9.9-9.893a9.827 9.827 0 0 1 7.001 2.902 9.828 9.828 0 0 1 2.893 7.003c-.004 5.456-4.44 9.893-9.913 9.893zM20.52 3.449C18.24 1.245 15.24 0 12.05 0 5.463 0 .104 5.334.101 11.893a11.793 11.793 0 0 0 1.587 5.946L0 24l6.335-1.652A11.882 11.882 0 0 0 12.05 24c6.584 0 11.94-5.335 11.943-11.893a11.808 11.808 0 0 0-3.473-8.658z" />
                  </svg>{" "}
                  WhatsApp schreiben
                </a>
                <a href="mailto:info@unfallexperten-nrw.de">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>{" "}
                  info@unfallexperten-nrw.de
                </a>
              </div>
            </div>

            <Konfigurator />
          </div>
        </div>
      </section>

      {/* 5) REGIONAL PRESENCE */}
      <section className="regional-section" id="region">
        <div className="container" style={{ position: "relative", zIndex: 5 }}>
          <div className="regional-grid">
            <div>
              <span
                className="section-label"
                style={{ color: "var(--clr-white)" }}
              >
                Immer in Ihrer Nähe
              </span>
              <h2 className="section-title text-white">NRW-weit für Sie da</h2>
              <p
                style={{
                  color: "rgba(255,255,255,0.8)",
                  lineHeight: "1.7",
                  marginBottom: "var(--sp-lg)",
                }}
              >
                Egal ob Großstadt or ländlicher Raum – unsere Sachverständigen
                sind überall in Nordrhein-Westfalen schnell vor Ort. Meist
                innerhalb weniger Stunden nach Ihrem Anruf.
              </p>
              <div className="location-badge-grid home-location-grid">
                {[
                  { city: "Bonn", time: "ca. 20 Min vor Ort" },
                  { city: "Köln", time: "ca. 35 Min vor Ort" },
                  { city: "Leverkusen", time: "ca. 40 Min vor Ort" },
                  { city: "Sankt Augustin", time: "ca. 15 Min vor Ort" },
                  { city: "Troisdorf", time: "ca. 20 Min vor Ort" },
                  { city: "Siegburg", time: "ca. 15 Min vor Ort" },
                  { city: "Alfter", time: "ca. 10 Min vor Ort" },
                  { city: "Bornheim", time: "ca. 15 Min vor Ort" },
                  { city: "Rheinbach", time: "ca. 25 Min vor Ort" },
                  { city: "Meckenheim", time: "ca. 20 Min vor Ort" },
                  { city: "Königswinter", time: "ca. 30 Min vor Ort" },
                ].map((loc, i) => (
                  <div key={i} className="location-pill">
                    <div className="pill-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div className="pill-content">
                      <span className="pill-city">{loc.city}</span>
                      <span className="pill-time">{loc.time}</span>
                    </div>
                  </div>
                ))}
                <Link
                  href="/standorte"
                  className="location-pill location-pill--link"
                >
                  <div className="pill-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div className="pill-content">
                    <span className="pill-city">Weitere Standorte</span>
                    <span className="pill-time">
                      Alle Städte &amp; Einsatzgebiete
                    </span>
                  </div>
                </Link>
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
