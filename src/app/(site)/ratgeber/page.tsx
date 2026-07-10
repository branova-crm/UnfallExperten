import { Metadata } from "next";
import Link from "next/link";
import HeroWaveZone from "@/components/HeroWaveZone";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo/metadata";
import { graph, webPage, itemList, breadcrumb } from "@/lib/seo/jsonld";

export const metadata: Metadata = buildMetadata({
  title: "Ratgeber – Wissen nach dem Unfall | UnfallExperten NRW",
  description:
    "Ratgeber zu Unfallgutachten, Versicherung und Schadensregulierung in NRW – kompakt erklärt mit Verweisen auf unsere Leistungen.",
  path: "/ratgeber",
});

const topics = [
  {
    title: "Unfall- & Schadensgutachten",
    description:
      "Was ein Gutachten leistet, welche Unterlagen Sie brauchen und wie die Abwicklung mit der Versicherung typischerweise abläuft.",
    href: "/unfall-schadensgutachten",
  },
  {
    title: "Kostenlose Leistung für Geschädigte",
    description:
      "Warum Unfallgeschädigte in der Regel nichts zahlen und wer die Kosten der Gutachtenerstellung trägt.",
    href: "/kostenlose-dienstleistung",
  },
  {
    title: "Kostenvoranschlag vs. Gutachten",
    description:
      "Wann ein Kostenvoranschlag ausreicht und wann Sie ein vollständiges Schadensgutachten benötigen.",
    href: "/kostenvoranschlag",
  },
  {
    title: "Kaskoschaden",
    description:
      "Unabhängige Bewertung bei Vandalismus, Sturm, Wildunfall oder anderen Kaskofällen.",
    href: "/kaskoschaden",
  },
  {
    title: "Wertgutachten",
    description:
      "Zeitwert, Wiederbeschaffungswert und Faktoren, die den Fahrzeugwert beeinflussen.",
    href: "/wertgutachten",
  },
  {
    title: "Reparaturbestätigung",
    description:
      "Nachweis fachgerechter Reparatur – warum er für spätere Schäden wichtig sein kann.",
    href: "/reparaturbestaetigung",
  },
];

export default function RatgeberPage() {
  return (
    <>
      <JsonLd
        data={graph([
          webPage({
            path: "/ratgeber",
            name: "Ratgeber – Wissen nach dem Unfall",
            description:
              "Die wichtigsten Themen rund um Unfallgutachten, Versicherung und Schadensregulierung kompakt erklärt.",
          }),
          itemList(
            topics.map((t) => ({ name: t.title, path: t.href })),
            "Ratgeber-Themen",
          ),
          breadcrumb([
            { name: "Startseite", path: "/" },
            { name: "Ratgeber", path: "/ratgeber" },
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
                Ratgeber
              </h1>
              <p
                className="hero-subheadline mx-auto"
                style={{ fontSize: "var(--fs-lg)" }}
              >
                Orientierung nach dem Unfall: die wichtigsten Themen kompakt –
                mit Links zu ausführlichen Informationen auf unserer Website.
              </p>
            </div>
          </div>
        </section>
      </HeroWaveZone>

      <section className="services-section">
        <div className="container">
          <div className="text-center">
            <span
              className="section-label"
              style={{ color: "var(--clr-primary)" }}
            >
              Themen
            </span>
            <h2 className="section-title" style={{ color: "var(--clr-text)" }}>
              Wissenswertes im Überblick
            </h2>
            <p className="section-subtitle mx-auto">
              Wählen Sie ein Thema – dort finden Sie vertiefende Erklärungen und
              den passenden Ansprechpartner bei UnfallExperten NRW.
            </p>
          </div>
          <div className="services-grid">
            {topics.map((t) => (
              <div
                key={t.href}
                className="service-card animate-on-scroll"
                style={{ borderRadius: "16px" }}
              >
                <h3>{t.title}</h3>
                <p>{t.description}</p>
                <Link href={t.href} className="service-link">
                  Zum Ratgeber →
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: "var(--sp-xl)" }}>
            <p
              style={{
                color: "var(--clr-text-muted)",
                marginBottom: "var(--sp-md)",
              }}
            >
              Antworten auf häufige Fragen finden Sie auch in unserer FAQ auf
              der Startseite.
            </p>
            <Link href="/#faq" className="btn btn-outline">
              Zur FAQ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
