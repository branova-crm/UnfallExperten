import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | UnfallExperten NRW",
  description:
    "Datenschutzerklärung von KFZ Gutachter Euskirchen | UnfallExperten-NRW – Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.",
};

export default function DatenschutzPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Brotkrumen">
            <Link href="/">Startseite</Link>
            {" / "}
            <span>Datenschutz</span>
          </nav>
          <h1>Datenschutzerklärung</h1>
          <p>
            Informationen zur Verarbeitung personenbezogener Daten auf der Website
            von UnfallExperten-NRW – verständlich erklärt und DSGVO-konform
            strukturiert.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <article className="legal-content">
            <p className="legal-meta">
              <strong>Stand:</strong> 21. Mai 2026
            </p>

            <h2>1. Verantwortlicher</h2>
            <p>
              Verantwortlicher im Sinne von Art. 4 Nr. 7 DSGVO und Ansprechpartner
              für Fragen zum Datenschutz auf dieser Website ist:
            </p>
            <address className="legal-address">
              KFZ Gutachter Euskirchen | UnfallExperten-NRW
              <br />
              Felix-Wankel-Straße 11
              <br />
              53881 Euskirchen
              <br />
              Deutschland
            </address>
            <p>
              E-Mail:{" "}
              <a href="mailto:info@unfallexperten-nrw.de">
                info@unfallexperten-nrw.de
              </a>
              <br />
              Telefon:{" "}
              <a href="tel:+4902111234567">0211 – 123 456 7</a>
            </p>
            <p>
              Ein gesetzlich vorgeschriebener Datenschutzbeauftragter ist für unser
              Unternehmen nicht bestellt, sofern die gesetzlichen Voraussetzungen
              dafür nicht erfüllt sind. Bei datenschutzrechtlichen Anliegen wenden
              Sie sich bitte direkt an die oben genannten Kontaktdaten.
            </p>

            <h2>2. Überblick: Was diese Website leistet</h2>
            <p>
              Wir betreiben eine Informations- und Kontaktwebsite für unsere
              Tätigkeit als <strong>Unfallgutachter / KFZ-Sachverständiger</strong>.
              Die Website wurde als <strong>individuelles Webseitensystem</strong>{" "}
              (kein Standard-CMS) entwickelt. Sie dient der Darstellung unserer
              Leistungen, Standorte und Kontaktmöglichkeiten.
            </p>
            <p>
              <strong>Wir setzen keine Web-Analyse- oder Tracking-Tools ein</strong>{" "}
              (z. B. Google Analytics, Matomo, Facebook Pixel o. Ä.). Wir versenden{" "}
              <strong>keinen Newsletter</strong>. Es bestehen{" "}
              <strong>keine Zahlungs- oder Shop-Funktionen</strong> auf dieser
              Website.
            </p>

            <h2>3. Hosting und Server-Logfiles</h2>
            <p>
              Unsere Website wird bei folgendem Hosting-Dienstleister betrieben:
            </p>
            <p>
              <strong>Hetzner Online GmbH</strong>
              <br />
              Industriestr. 25
              <br />
              91710 Gunzenhausen
              <br />
              Deutschland
            </p>
            <p>
              Beim Aufruf unserer Website werden durch den Hosting-Anbieter
              automatisch Informationen in sogenannten Server-Logfiles erfasst, die
              Ihr Browser übermittelt. Dies können insbesondere sein:
            </p>
            <ul>
              <li>IP-Adresse (ggf. in gekürzter Form)</li>
              <li>Datum und Uhrzeit der Anfrage</li>
              <li>aufgerufene Seite bzw. Datei</li>
              <li>Referrer-URL (zuvor besuchte Seite)</li>
              <li>Browsertyp und -version, Betriebssystem, Spracheinstellung</li>
            </ul>
            <p>
              <strong>Zweck:</strong> Sicherstellung eines störungsfreien Betriebs,
              Systemsicherheit, technische Fehleranalyse und Abwehr von
              Missbrauchsversuchen.
              <br />
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse an einem sicheren und funktionsfähigen
              Webangebot).
              <br />
              <strong>Speicherdauer:</strong> Die Logdaten werden gelöscht, sobald
              sie für die genannten Zwecke nicht mehr erforderlich sind – in der
              Regel nach wenigen Tagen bis maximal wenigen Wochen, sofern keine
              sicherheitsrelevante Aufbewahrung erforderlich ist.
            </p>
            <p>
              Mit Hetzner besteht ein Auftragsverarbeitungsvertrag gemäß Art. 28
              DSGVO. Die Verarbeitung erfolgt in Rechenzentren in Deutschland bzw.
              innerhalb der Europäischen Union.
            </p>

            <h2>4. Kontaktformular (Anfrage über die Website)</h2>
            <p>
              Auf unserer Website können Sie uns über ein{" "}
              <strong>Kontaktformular</strong> (Konfigurator) eine Anfrage senden.
              Dabei verarbeiten wir folgende Daten:
            </p>
            <ul>
              <li>Name</li>
              <li>Telefonnummer (ggf. WhatsApp-Nummer)</li>
              <li>E-Mail-Adresse (optional)</li>
              <li>Kennzeichen (optional)</li>
              <li>gewähltes Anliegen / Interessen (z. B. Unfallgutachten)</li>
              <li>freie Nachricht / Schilderung Ihrer Situation (optional)</li>
              <li>Zeitpunkt der Anfrage</li>
              <li>IP-Adresse (im Rahmen der technischen Übermittlung bzw. in der internen Benachrichtigungs-E-Mail)</li>
              <li>Bestätigung der Datenschutzerklärung</li>
            </ul>
            <p>
              <strong>Zweck:</strong> Bearbeitung Ihrer Anfrage, Kontaktaufnahme
              sowie Vorbereitung und Durchführung vorvertraglicher Maßnahmen im
              Zusammenhang mit unseren Gutachterleistungen.
              <br />
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO
              (Vertragsanbahnung) und Art. 6 Abs. 1 lit. a DSGVO (Einwilligung durch
              Aktivieren der Datenschutz-Checkbox).
              <br />
              <strong>Speicherdauer:</strong> Wir speichern Ihre Angaben nur so
              lange, wie dies für die Bearbeitung Ihres Anliegens erforderlich ist
              und gesetzliche Aufbewahrungspflichten bestehen (z. B. handels- oder
              steuerrechtliche Fristen). Anfragen ohne weiteren Geschäftsvorfall
              werden in der Regel spätestens nach 12 Monaten gelöscht, sofern keine
              längere Aufbewahrung erforderlich ist.
            </p>
            <p>
              Die Formulardaten werden per E-Mail an uns übermittelt. Für den
              E-Mail-Versand nutzen wir einen SMTP-Dienstleister (Auftragsverarbeiter
              gemäß Art. 28 DSGVO). Die konkrete Speicherung der E-Mails erfolgt in
              unserem geschäftlichen E-Mail-System.
            </p>
            <p>
              <strong>Pflichtangaben:</strong> Name, Telefonnummer und mindestens ein
              Anliegen sind erforderlich. Ohne diese Angaben können wir Ihre Anfrage
              nicht bearbeiten.
            </p>

            <h2>5. Kontakt per Telefon, E-Mail und WhatsApp</h2>
            <p>
              Wenn Sie uns telefonisch, per E-Mail oder über WhatsApp kontaktieren,
              verarbeiten wir die von Ihnen mitgeteilten Daten (z. B. Name,
              Kontaktdaten, Inhalt der Kommunikation, ggf. Fahrzeug- oder
              Schadensinformationen) zur Bearbeitung Ihres Anliegens.
            </p>
            <p>
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO
              (Vertragsanbahnung bzw. -durchführung) und Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse an effizienter Kommunikation).
            </p>
            <p>
              Für <strong>WhatsApp</strong> gelten zusätzlich die Datenschutzbestimmungen
              der Meta Platforms Ireland Limited bzw. WhatsApp Ireland Limited. Beim
              Anklicken eines WhatsApp-Links verlassen Sie unsere Website und
              wechseln auf die Plattform von WhatsApp/Meta. Die Datenübermittlung
              erfolgt erst, wenn Sie den Link aktiv nutzen.
            </p>

            <h2>6. Cookies und vergleichbare Technologien</h2>
            <p>
              <strong>Analyse-Cookies:</strong> Wir setzen keine Tracking- oder
              Marketing-Cookies ein.
            </p>
            <p>
              <strong>Technisch notwendige Verarbeitungen:</strong> Beim Betrieb der
              Website können technisch erforderliche Prozesse stattfinden (z. B.
              Session-Informationen oder Sicherheitsmechanismen des Servers). Diese
              dienen allein dem Betrieb und der Sicherheit der Website.
            </p>
            <p>
              <strong>Drittanbieter-Inhalte:</strong> Beim Laden eingebetteter
              Dienste (siehe Abschnitt 7) können Drittanbieter eigene Cookies oder
              vergleichbare Technologien setzen. Darauf haben wir nur eingeschränkten
              Einfluss. Bitte beachten Sie die Hinweise der jeweiligen Anbieter.
            </p>

            <h2>7. Externe Dienste, Schriftarten und eingebettete Inhalte</h2>

            <h3>7.1 Google Fonts (extern eingebunden)</h3>
            <p>
              Zur einheitlichen Darstellung der Schrift nutzen wir die Schriftart
              „Inter“, die über Google Fonts von Servern der Google LLC (USA) bzw.
              verbundener Unternehmen geladen wird. Dabei kann Ihre IP-Adresse an
              Google übermittelt werden.
            </p>
            <p>
              <strong>Anbieter:</strong> Google Ireland Limited, Gordon House, Barrow
              Street, Dublin 4, Irland (Mutterunternehmen: Google LLC, USA).
              <br />
              <strong>Zweck:</strong> Einheitliches und ansprechendes Erscheinungsbild
              der Website.
              <br />
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse an einer professionellen Darstellung), ggf.
              ergänzend Art. 6 Abs. 1 lit. a DSGVO, sofern eine Einwilligung
              eingeholt wird.
              <br />
              <strong>Drittlandübermittlung:</strong> Google kann Daten in die USA
              übertragen. Google stützt sich hierfür u. a. auf Standardvertragsklauseln
              der EU-Kommission.
            </p>

            <h3>7.2 Google Maps (Karten-Einbindung)</h3>
            <p>
              Auf einzelnen Seiten binden wir eine interaktive Karte von Google Maps
              ein. Beim Laden der Karte wird eine Verbindung zu Servern von Google
              hergestellt; dabei können personenbezogene Daten (insbesondere Ihre
              IP-Adresse) an Google übermittelt werden.
            </p>
            <p>
              <strong>Anbieter:</strong> Google Ireland Limited, Gordon House, Barrow
              Street, Dublin 4, Irland.
              <br />
              <strong>Zweck:</strong> Anzeige unseres Standorts bzw. Orientierung
              für Besucher.
              <br />
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse an nutzerfreundlicher Standortinformation).
              <br />
              <strong>Drittlandübermittlung:</strong> möglich in die USA unter
              Einsatz geeigneter Garantien (Standardvertragsklauseln).
            </p>

            <h3>7.3 Externe Bilder und Links</h3>
            <p>
              Einzelne grafische Elemente (z. B. Logos oder Bewertungsdarstellungen)
              können von externen Servern geladen werden, sofern diese in der Website
              eingebunden sind. Beim Aufruf solcher Inhalte kann Ihre IP-Adresse an
              den jeweiligen Anbieter übermittelt werden. Externe Links (z. B. zu
              WhatsApp oder Social-Media-Profilen) führen zu Angeboten Dritter; für
              die dortige Datenverarbeitung sind allein die jeweiligen Anbieter
              verantwortlich.
            </p>

            <h2>8. Social Media – Instagram</h2>
            <p>
              Wir betreiben ein Unternehmensprofil auf{" "}
              <strong>Instagram</strong>. Auf unserer Website verlinken wir auf dieses
              Profil. Beim Anklicken des Links verlassen Sie unsere Website und
              wechseln zur Plattform von Instagram.
            </p>
            <p>
              <strong>Anbieter:</strong> Meta Platforms Ireland Limited, 4 Grand
              Canal Square, Grand Canal Harbour, Dublin 2, Irland.
              <br />
              <strong>Hinweis:</strong> Wenn Sie unser Instagram-Profil besuchen oder
              mit uns dort interagieren, verarbeitet Meta personenbezogene Daten zu
              eigenen Zwecken (z. B. Nutzungsanalyse, Profilbildung, Werbung). Auf
              diese Verarbeitung haben wir keinen vollständigen Einfluss. Details
              entnehmen Sie der Datenschutzerklärung von Instagram/Meta.
            </p>
            <p>
              Sofern auf unserer Website zusätzlich ein Link zu Facebook angezeigt
              wird, ohne dass wir ein eigenes Facebook-Profil betreiben, dient dieser
              Link allein der Verlinkung. Eine Datenverarbeitung durch uns im Rahmen
              eines eigenen Facebook-Auftritts findet in diesem Fall nicht statt.
            </p>

            <h2>9. Empfänger und Auftragsverarbeiter</h2>
            <p>
              Personenbezogene Daten geben wir nur weiter, wenn dies zur
              Vertragserfüllung, aufgrund gesetzlicher Pflichten oder auf Grundlage
              Ihrer Einwilligung erforderlich ist. Empfänger können insbesondere
              sein:
            </p>
            <ul>
              <li>Hosting-Dienstleister (Hetzner Online GmbH, Deutschland)</li>
              <li>E-Mail-/IT-Dienstleister im Rahmen der Formular- und Kommunikationsabwicklung</li>
              <li>Google (Fonts, Maps) – siehe Abschnitt 7</li>
              <li>Meta (Instagram, WhatsApp) – bei aktiver Nutzung der verlinkten Dienste</li>
              <li>Steuerberater, Rechtsanwälte oder Behörden, soweit gesetzlich vorgeschrieben</li>
            </ul>
            <p>
              Mit allen Auftragsverarbeitern, die personenbezogene Daten in unserem
              Auftrag verarbeiten, schließen wir – soweit erforderlich – Verträge
              gemäß Art. 28 DSGVO ab.
            </p>

            <h2>10. Datenübermittlung in Drittländer</h2>
            <p>
              Eine Übermittlung personenbezogener Daten in Länder außerhalb der
              Europäischen Union bzw. des Europäischen Wirtschaftsraums (Drittland)
              kann insbesondere bei der Nutzung von Diensten der Google LLC und Meta
              Platforms erfolgen (z. B. USA). In diesen Fällen stützen sich die
              Anbieter regelmäßig auf geeignete Garantien nach Art. 46 DSGVO,
              insbesondere Standardvertragsklauseln der EU-Kommission, oder – soweit
              anwendbar – auf einen Angemessenheitsbeschluss.
            </p>
            <p>
              Das Hosting bei Hetzner erfolgt überwiegend in Deutschland bzw. der
              EU. Eine darüber hinausgehende Drittlandübermittlung durch uns selbst
              findet nicht statt, sofern nicht ausdrücklich in dieser Erklärung
              beschrieben oder gesetzlich vorgeschrieben.
            </p>

            <h2>11. Speicherdauer</h2>
            <p>
              Wir verarbeiten und speichern personenbezogene Daten nur so lange, wie
              dies für die jeweiligen Zwecke erforderlich ist oder gesetzliche
              Aufbewahrungsfristen bestehen. Kriterien für die Speicherdauer sind
              insbesondere:
            </p>
            <ul>
              <li>Dauer der Kommunikation und Bearbeitung Ihres Anliegens</li>
              <li>Bestehen eines Vertrags- oder Gutachterauftrags</li>
              <li>Handels-, steuer- und berufsrechtliche Aufbewahrungspflichten (regelmäßig 6 bis 10 Jahre)</li>
              <li>technische Logdaten gemäß Abschnitt 3</li>
            </ul>

            <h2>12. Pflicht zur Bereitstellung von Daten</h2>
            <p>
              Die Bereitstellung personenbezogener Daten ist weder gesetzlich noch
              vertraglich vorgeschrieben – mit Ausnahme derjenigen Angaben, die wir
              benötigen, um Ihre Anfrage sinnvoll bearbeiten zu können. Ohne
              Kontaktdaten können wir Ihnen unsere Leistungen nicht anbieten bzw.
              nicht auf Ihre Anfrage reagieren.
            </p>

            <h2>13. Ihre Rechte als betroffene Person</h2>
            <p>
              Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie
              betreffenden personenbezogenen Daten:
            </p>
            <ul>
              <li>
                <strong>Auskunft</strong> (Art. 15 DSGVO) über die verarbeiteten
                Daten
              </li>
              <li>
                <strong>Berichtigung</strong> unrichtiger Daten (Art. 16 DSGVO)
              </li>
              <li>
                <strong>Löschung</strong> (Art. 17 DSGVO), soweit keine
                gesetzlichen Aufbewahrungspflichten entgegenstehen
              </li>
              <li>
                <strong>Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)
              </li>
              <li>
                <strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO), soweit
                anwendbar
              </li>
              <li>
                <strong>Widerspruch</strong> gegen Verarbeitungen auf Grundlage von
                Art. 6 Abs. 1 lit. f DSGVO (Art. 21 DSGVO)
              </li>
              <li>
                <strong>Widerruf erteilter Einwilligungen</strong> (Art. 7 Abs. 3
                DSGVO) mit Wirkung für die Zukunft
              </li>
            </ul>
            <p>
              Zur Ausübung Ihrer Rechte genügt eine formlose Mitteilung an die unter
              Abschnitt 1 genannten Kontaktdaten. Bitte stellen Sie sicher, dass
              wir Sie eindeutig identifizieren können.
            </p>

            <h2>14. Beschwerderecht bei einer Aufsichtsbehörde</h2>
            <p>
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über
              unsere Verarbeitung personenbezogener Daten zu beschweren. Für uns
              zuständig ist insbesondere:
            </p>
            <p>
              <strong>Landesbeauftragte für Datenschutz und Informationsfreiheit
              Nordrhein-Westfalen (LDI NRW)</strong>
              <br />
              Postfach 20 04 44
              <br />
              40102 Düsseldorf
              <br />
              Telefon: 0211 384 24 0
              <br />
              Website:{" "}
              <a
                href="https://www.ldi.nrw"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.ldi.nrw
              </a>
            </p>

            <h2>15. Datensicherheit</h2>
            <p>
              Wir treffen angemessene technische und organisatorische Maßnahmen, um
              Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, teilweisen
              oder vollständigen Verlust sowie gegen unbefugten Zugriff Dritter zu
              schützen. Dazu gehören insbesondere die verschlüsselte Übertragung
              (HTTPS/TLS) sowie Zugriffsbeschränkungen auf unsere Systeme.
            </p>

            <h2>16. Änderungen dieser Datenschutzerklärung</h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn sich
              unsere Website, eingesetzte Dienste oder die Rechtslage ändern. Es
              gilt stets die auf dieser Seite veröffentlichte aktuelle Fassung.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
