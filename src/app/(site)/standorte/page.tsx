import Link from "next/link";
import { Metadata } from "next";
import HeroWaveZone from "@/components/HeroWaveZone";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo/metadata";
import { graph, webPage, itemList, breadcrumb } from "@/lib/seo/jsonld";
import { STANDORT_ROUTES } from "@/lib/site-routes";

export const metadata: Metadata = buildMetadata({
  title: "Unsere Standorte – KFZ-Gutachter NRW-weit | UnfallExperten",
  description:
    "Finden Sie Ihren KFZ-Gutachter vor Ort in NRW. UnfallExperten NRW ist in Köln, Bonn, Leverkusen und im gesamten Rheinland für Sie im Einsatz.",
  path: "/standorte",
});

export default function StandortePage() {
  return (
    <>
      <JsonLd
        data={graph([
          webPage({
            path: "/standorte",
            name: "Standorte – KFZ-Gutachter NRW-weit",
            description:
              "NRW-weite Standorte der UnfallExperten NRW – finden Sie Ihren KFZ-Gutachter vor Ort.",
          }),
          itemList(
            STANDORT_ROUTES.map((r) => ({
              name: r.title,
              path: r.path,
            })),
            "Standorte",
          ),
          breadcrumb([
            { name: "Startseite", path: "/" },
            { name: "Standorte", path: "/standorte" },
          ]),
        ])}
      />
      <HeroWaveZone>
        <section className="hero" style={{ minHeight: "85vh" }}>
          <div className="hero-bg">
            <video autoPlay muted loop playsInline>
              <source src="/images/herovideo2.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="hero-overlay"></div>
          <div
            className="container"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div
              className="hero-content"
              style={{
                maxWidth: "800px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h1 style={{ color: "var(--clr-white)", marginBottom: "20px" }}>
                Unsere Standorte in NRW
              </h1>
              <p
                className="hero-subheadline mx-auto"
                style={{ fontSize: "var(--fs-lg)" }}
              >
                Immer in Ihrer Nähe – wir kommen zu Ihnen an den Unfallort oder
                nach Hause, überall in Nordrhein-Westfalen.
              </p>
            </div>
          </div>
        </section>
      </HeroWaveZone>

      {/* LOCATIONS GRID */}
      <section className="content-section">
        <div className="container">
          <div className="text-center">
            <span
              className="section-label"
              style={{ color: "var(--clr-primary)" }}
            >
              NRW-weit
            </span>
            <h2 className="section-title">
              Finden Sie Ihren Gutachter vor Ort
            </h2>
            <p className="section-subtitle mx-auto">
              Wählen Sie Ihre Stadt für den schnellsten lokalen Service.
            </p>
          </div>

          <div className="locations-grid">
            {/* 10 Hauptstandorte */}
            <div className="location-card animate-on-scroll">
              <div className="pin">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ marginRight: "6px" }}
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3>KFZ-Gutachter Bonn</h3>
              <p>
                Schnelle Schadensbegutachtung in Bonn und Umgebung. 24/7-Service
                vor Ort.
              </p>
              <Link href="/standorte/bonn" className="service-link">
                Zum Standort →
              </Link>
            </div>
            <div className="location-card animate-on-scroll">
              <div className="pin">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ marginRight: "6px" }}
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3>KFZ-Gutachter Köln</h3>
              <p>Ihr Sachverständiger für Köln und rechtsrheinische Gebiete.</p>
              <Link href="/standorte/koeln" className="service-link">
                Zum Standort →
              </Link>
            </div>
            <div className="location-card animate-on-scroll">
              <div className="pin">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ marginRight: "6px" }}
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3>KFZ-Gutachter Düsseldorf</h3>
              <p>
                Zentrale Unfallhilfe in der Landeshauptstadt – wir sind schnell
                zur Stelle.
              </p>
              <Link href="/standorte/duesseldorf" className="service-link">
                Zum Standort →
              </Link>
            </div>
            <div className="location-card animate-on-scroll">
              <div className="pin">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ marginRight: "6px" }}
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3>KFZ-Gutachter Leverkusen</h3>
              <p>
                Kompetente Gutachten in Leverkusen. Kostenlos für
                Unfallgeschädigte.
              </p>
              <Link href="/standorte/leverkusen" className="service-link">
                Zum Standort →
              </Link>
            </div>
            <div className="location-card animate-on-scroll">
              <div className="pin">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ marginRight: "6px" }}
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3>KFZ-Gutachter Sankt Augustin</h3>
              <p>
                Zuverlässige Begutachtung und Schadenskalkulation in Sankt
                Augustin.
              </p>
              <Link href="/standorte/sankt-augustin" className="service-link">
                Zum Standort →
              </Link>
            </div>
            <div className="location-card animate-on-scroll">
              <div className="pin">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ marginRight: "6px" }}
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3>KFZ-Gutachter Troisdorf</h3>
              <p>
                Ihr mobiler Gutachter in Troisdorf – wir kommen zu Ihnen nach
                Hause.
              </p>
              <Link href="/standorte/troisdorf" className="service-link">
                Zum Standort →
              </Link>
            </div>
            <div className="location-card animate-on-scroll">
              <div className="pin">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ marginRight: "6px" }}
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3>KFZ-Gutachter Siegburg</h3>
              <p>
                Schnelle Hilfe am Vorfallort in Siegburg. Neutral & ungebunden.
              </p>
              <Link href="/standorte/siegburg" className="service-link">
                Zum Standort →
              </Link>
            </div>
            <div className="location-card animate-on-scroll">
              <div className="pin">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ marginRight: "6px" }}
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3>KFZ-Gutachter Alfter</h3>
              <p>
                Im Vorgebirge und Alfter für Sie im Einsatz. Rechtssichere
                Gutachten.
              </p>
              <Link href="/standorte/alfter" className="service-link">
                Zum Standort →
              </Link>
            </div>
            <div className="location-card animate-on-scroll">
              <div className="pin">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ marginRight: "6px" }}
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3>KFZ-Gutachter Bornheim</h3>
              <p>
                Bornheim und Umland – direkter Kontakt, zügige Abwicklung ohne
                Stress.
              </p>
              <Link href="/standorte/bornheim" className="service-link">
                Zum Standort →
              </Link>
            </div>
            <div className="location-card animate-on-scroll">
              <div className="pin">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ marginRight: "6px" }}
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3>KFZ-Gutachter Rheinbach</h3>
              <p>
                Transparente Schadensbewertung direkt in Rheinbach. Schnell vor
                Ort.
              </p>
              <Link href="/standorte/rheinbach" className="service-link">
                Zum Standort →
              </Link>
            </div>
            {/* Weitere Standorte können hier flexibel hinzugefügt werden */}
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="trust-strip">
        <div className="container">
          <div className="trust-strip-inner">
            <div className="trust-strip-item">
              <a
                href="https://share.google/KbGRRE7ngszpWpv9k"
                target="_blank"
                className="google-review-inline"
                aria-label="Google Bewertung"
                style={{ color: "inherit" }}
              >
                <img
                  src="/images/google-logo.png"
                  alt="Google"
                  className="google-logo"
                />
                <span className="google-stars">★★★★★</span>
              </a>
            </div>
            <div className="trust-strip-item">
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ marginRight: "6px" }}
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </span>{" "}
              24/7 Service vor Ort
            </div>
            <div className="trust-strip-item">
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ marginRight: "6px" }}
                >
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </span>{" "}
              Kostenlos für Geschädigte
            </div>
            <div className="trust-strip-item">
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ marginRight: "6px" }}
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </span>{" "}
              NRW-weit im Einsatz
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
