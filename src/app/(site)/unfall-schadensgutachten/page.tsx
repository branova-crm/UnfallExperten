import Link from "next/link";
import { Metadata } from "next";
import Konfigurator from "@/components/Konfigurator";
import HeroWaveZone from "@/components/HeroWaveZone";

export const metadata: Metadata = {
  title:
    "Unfall- & Schadensgutachten NRW – Unabhängig & Kostenlos | UnfallExperten",
  description:
    "Unabhängiges Unfallgutachten in NRW – fachgerechte Schadensdokumentation, Wertminderung und Nutzungsausfall. Kostenlos für Geschädigte. Jetzt anfragen!",
};

export default function UnfallSchadensgutachtenPage() {
  return (
    <>
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
                Unfall- &amp; Schadensgutachten
              </h1>
              <p
                className="hero-subheadline mx-auto"
                style={{ fontSize: "var(--fs-lg)" }}
              >
                Fachgerechte Schadensdokumentation als Basis für Ihre maximalen
                Entschädigungsansprüche.
              </p>
              <div
                className="hero-ctas"
                style={{ justifyContent: "center", marginBottom: "30px" }}
              >
                <a href="tel:+4917684568618" className="btn btn-outline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{ marginRight: "6px" }}
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>{" "}
                  Jetzt anrufen
                </a>
                <a
                  href="https://wa.me/4917684568618"
                  className="btn btn-whatsapp"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    style={{ marginRight: "6px" }}
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785h-.005a9.868 9.868 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374A9.86 9.86 0 0 1 2.17 12.06c0-5.456 4.436-9.893 9.9-9.893a9.827 9.827 0 0 1 7.001 2.902 9.828 9.828 0 0 1 2.893 7.003c-.004 5.456-4.44 9.893-9.913 9.893zM20.52 3.449C18.24 1.245 15.24 0 12.05 0 5.463 0 .104 5.334.101 11.893a11.793 11.793 0 0 0 1.587 5.946L0 24l6.335-1.652A11.882 11.882 0 0 0 12.05 24c6.584 0 11.94-5.335 11.943-11.893a11.808 11.808 0 0 0-3.473-8.658z" />
                  </svg>{" "}
                  WhatsApp starten
                </a>
              </div>
            </div>
          </div>
        </section>
      </HeroWaveZone>

      <section className="content-section">
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="content-text text-center">
            <div style={{ marginBottom: "30px" }}>
              <span className="section-label">Ihr Recht</span>
              <h2>Fachgerechte Dokumentation – Basis für Ihre Ansprüche</h2>
            </div>
            <p>
              Ein unabhängiges Unfallgutachten ist Ihr stärkstes Beweismittel
              bei der Schadensregulierung. Unsere Experten für KFZ-Schäden
              erfassen jeden Schaden präzise und dokumentieren alle relevanten
              Werte:
            </p>
            <ul className="check-list" style={{ alignItems: "center" }}>
              <li>Detaillierte Schadenshöhe mit Reparaturkalkulation</li>
              <li>Merkantile Wertminderung Ihres Fahrzeugs</li>
              <li>Nutzungsausfall oder Mietwagenkosten</li>
              <li>Wiederbeschaffungswert und Restwert</li>
              <li>Fotodokumentation aller Schadensbereiche</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section alt">
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="content-text text-center">
            <div style={{ marginBottom: "30px" }}>
              <span className="section-label">Komplettbetreuung</span>
              <h2>Unterstützung während des gesamten Prozesses</h2>
            </div>
            <p>
              Wir lassen Sie nicht allein. Von der ersten Schadensaufnahme bis
              zur vollständigen Auszahlung Ihrer Ansprüche begleiten wir Sie
              persönlich:
            </p>
            <ul className="check-list" style={{ alignItems: "center" }}>
              <li>
                Schadensaufnahme direkt am Unfallort oder bei Ihnen zu Hause
              </li>
              <li>Gutachtenerstellung innerhalb von 24–72 Stunden</li>
              <li>
                Koordination mit Rechtsanwalt, Werkstatt und Mietwagenanbieter
              </li>
              <li>Korrespondenz mit der gegnerischen Versicherung</li>
              <li>Nachprüfung bei Kürzungsversuchen der Versicherung</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="content-text text-center">
            <div style={{ marginBottom: "30px" }}>
              <span
                className="section-label"
                style={{ color: "var(--clr-primary)" }}
              >
                Gut zu wissen
              </span>
              <h2>Warum ist ein Unfallgutachten wichtig?</h2>
            </div>
            <p>
              Viele Geschädigte verlassen sich auf den Kostenvoranschlag der
              Werkstatt und verschenken dabei bares Geld. Ein unabhängiges
              Gutachten erfasst zusätzlich:
            </p>
            <ul className="check-list" style={{ alignItems: "center" }}>
              <li>Merkantile Wertminderung – oft mehrere Hundert Euro</li>
              <li>Versteckte Schäden, die im Kostenvoranschlag fehlen</li>
              <li>Nutzungsausfall für die Dauer der Reparatur</li>
              <li>Prüfkosten, Verbringungskosten und UPE-Aufschläge</li>
            </ul>
            <p>
              <strong>
                Im Schnitt erhalten unsere Kunden 30–40 % mehr Entschädigung
              </strong>{" "}
              als mit einem einfachen Kostenvoranschlag.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="cta-banner-bg"></div>
        <div className="container">
          <h2>Unfallgutachten anfordern</h2>
          <p>Kostenlos für Geschädigte – die gegnerische Versicherung zahlt.</p>
          <div className="cta-banner-buttons">
            <a href="tel:+4917684568618" className="btn btn-outline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                style={{ marginRight: "6px" }}
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>{" "}
              Jetzt anrufen
            </a>
            <a
              href="https://wa.me/4917684568618"
              className="btn btn-whatsapp"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ marginRight: "6px" }}
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785h-.005a9.868 9.868 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374A9.86 9.86 0 0 1 2.17 12.06c0-5.456 4.436-9.893 9.9-9.893a9.827 9.827 0 0 1 7.001 2.902 9.828 9.828 0 0 1 2.893 7.003c-.004 5.456-4.44 9.893-9.913 9.893zM20.52 3.449C18.24 1.245 15.24 0 12.05 0 5.463 0 .104 5.334.101 11.893a11.793 11.793 0 0 0 1.587 5.946L0 24l6.335-1.652A11.882 11.882 0 0 0 12.05 24c6.584 0 11.94-5.335 11.943-11.893a11.808 11.808 0 0 0-3.473-8.658z" />
              </svg>{" "}
              WhatsApp – Schnelle Rückmeldung!
            </a>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <span className="section-label">Kontakt</span>
              <h2>Gutachten beauftragen</h2>
              <p>
                Hinterlassen Sie Ihre Nummer und wir melden uns innerhalb von 15
                Minuten.
              </p>
              <div className="contact-direct">
                <a href="tel:+4917684568618">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    width="24"
                    height="24"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>{" "}
                  +49 176 84568618
                </a>
                <a href="https://wa.me/4917684568618" target="_blank">
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
                    width="24"
                    height="24"
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
    </>
  );
}
