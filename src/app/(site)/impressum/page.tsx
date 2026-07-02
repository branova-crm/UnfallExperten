import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum | UnfallExperten NRW",
  description:
    "Impressum von KFZ Gutachter Euskirchen | UnfallExperten-NRW mit Anbieterkennzeichnung gemäß § 5 DDG und § 18 MStV.",
};

export default function ImpressumPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Brotkrumen">
            <Link href="/">Startseite</Link>
            {" / "}
            <span>Impressum</span>
          </nav>
          <h1>Impressum</h1>
          <p>
            Anbieterkennzeichnung gemäß § 5 DDG und Angaben nach § 18 MStV.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <article className="legal-content">
            <p className="legal-meta">
              <strong>Stand:</strong> 02. Juli 2026
            </p>

            <h2>Angaben gemäß § 5 DDG</h2>
            <address className="legal-address">
              <strong>KFZ Gutachter Euskirchen | UnfallExperten-NRW</strong>
              <br />
              Felix-Wankel-Straße 11
              <br />
              53881 Euskirchen
              <br />
              Deutschland
            </address>

            <h2>Vertreten durch</h2>
            <p>Berkay Okur</p>

            <h2>Kontakt</h2>
            <p>
              Telefon: <a href="tel:+4917684568618">+49 176 84568618</a>
              <br />
              E-Mail:{" "}
              <a href="mailto:info@unfallexperten-nrw.de">
                info@unfallexperten-nrw.de
              </a>
            </p>

            <h2>Verantwortlich für den Inhalt gemäß § 18 Abs. 2 MStV</h2>
            <address className="legal-address">
              Berkay Okur
              <br />
              Felix-Wankel-Straße 11
              <br />
              53881 Euskirchen
              <br />
              Deutschland
            </address>

            <h2>Verbraucherstreitbeilegung</h2>
            <p>
              Die Europäische Plattform zur Online-Streitbeilegung wurde zum 20.
              Juli 2025 eingestellt und steht nicht mehr zur Verfügung.
            </p>
            <p>
              Wir sind nicht bereit und nicht verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>

            <h2>Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
              überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen.
            </p>

            <h2>Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren
              Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte
              übernehmen wir keine Gewähr. Für die Inhalte der verlinkten Seiten
              ist stets der jeweilige Anbieter oder Betreiber der Seiten
              verantwortlich.
            </p>

            <h2>Urheberrecht</h2>
            <p>
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge
              Dritter sind als solche gekennzeichnet. Die Vervielfältigung,
              Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des
              jeweiligen Autors bzw. Erstellers.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
