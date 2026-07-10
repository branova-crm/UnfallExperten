import { Metadata } from "next";
import Link from "next/link";
import { SITE_ADDRESS_LINES, SITE_CONTACT, telHref } from "@/lib/site-contact";

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
              <strong>Stand:</strong> 10. Juli 2026
            </p>

            <h2>1. Verantwortlicher</h2>
            <p>
              Verantwortlicher im Sinne von Art. 4 Nr. 7 DSGVO und Ansprechpartner
              für Fragen zum Datenschutz auf dieser Website ist:
            </p>
            <address className="legal-address">
              {SITE_ADDRESS_LINES.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </address>
            <p>
              E-Mail:{" "}
              <a href={`mailto:${SITE_CONTACT.email}`}>
                {SITE_CONTACT.email}
              </a>
              <br />
              Telefon:{" "}
              <a href={telHref()}>{SITE_CONTACT.phoneDisplay}</a>
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
              Beim ersten Besuch erscheint ein <strong>Cookie-Banner</strong> (First-Party-
              Einwilligungstool). Dort können Sie optionale Technologien – insbesondere
              eingebettete Karten – ablehnen, einzeln auswählen oder alle akzeptieren.
              Entsprechende Einstellungen finden Sie jederzeit unter „Cookie-Einstellungen“
              in der Fußzeile.
            </p>
            <p>
              <strong>Kategorien im Consent-Banner:</strong>
            </p>
            <ul>
              <li>
                <strong>Notwendig</strong> (immer aktiv): u. a. Speicherung Ihrer
                Einwilligungsauswahl, lokal gehostete Schriftarten und technisch
                erforderliche Website-Funktionen
              </li>
              <li>
                <strong>Externe Medien</strong> (optional): z. B. Google Maps – wird erst
                nach aktiver Einwilligung geladen
              </li>
              <li>
                <strong>Statistik</strong> (optional, derzeit ohne aktive Dienste):
                vorgesehen für künftig aktivierte Bewertungs-Widgets (z. B. Trustindex)
              </li>
              <li>
                <strong>Präferenzen</strong> und <strong>Marketing</strong> (optional,
                derzeit ohne aktive Dienste): für mögliche künftige Komfort- oder
                Marketing-Funktionen reserviert
              </li>
            </ul>
            <p>
              <strong>Einwilligungs-Speicherung:</strong> Wir speichern Ihre Auswahl zu
              optionalen Technologien im lokalen Speicher Ihres Browsers (
              <code>ue_consent_v1</code>) – ohne personenbezogene User-ID. Dies ist
              technisch erforderlich, um Ihre Entscheidung zu dokumentieren und
              umzusetzen.
              <br />
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
              Interesse an nachweisbarer, nutzerfreundlicher Umsetzung Ihrer
              Einwilligung) sowie § 25 Abs. 2 TDDDG (Speicherung der Einwilligung ohne
              zusätzliche Einwilligung, soweit unbedingt erforderlich).
            </p>
            <p>
              <strong>Analyse- und Marketing-Tracker:</strong> Derzeit sind auf dieser
              Website keine aktiven Analyse- oder Marketing-Tracker (z. B. Google
              Analytics, Matomo, Meta Pixel) eingebunden.
            </p>
            <p>
              <strong>Consent-Management:</strong> Ihre Einwilligung ist{" "}
              <strong>6 Monate (183 Tage)</strong> gültig und wird im Eintrag{" "}
              <code>expiresAt</code> technisch gespeichert. Danach erscheint der
              Banner erneut. Sie können Ihre Einwilligung jederzeit über „Cookie-
              Einstellungen“ in der Fußzeile widerrufen oder anpassen. Beim Widerruf
              optionaler Kategorien versuchen wir, zugehörige Drittanbieter-Cookies zu
              löschen; weitere Ladevorgänge werden blockiert. Wenn Sie alle optionalen
              Kategorien widerrufen, wird die Seite neu geladen, um bereits geladene
              Inhalte zu entfernen.
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
              Einfluss. Cookies von Drittanbietern können technisch nicht immer
              vollständig gelöscht werden; weitere Ladevorgänge werden nach Widerruf
              jedoch blockiert. Bitte beachten Sie die Hinweise der jeweiligen Anbieter.
            </p>

            <h2>7. Externe Dienste, Schriftarten und eingebettete Inhalte</h2>

            <h3>7.1 Schriftarten (lokal gehostet)</h3>
            <p>
              Zur einheitlichen Darstellung nutzen wir die Schriftart „Inter“,
              die über Next.js lokal auf unserem Server bereitgestellt wird. Dabei
              erfolgt kein Abruf von Google-Servern beim Seitenaufruf.
            </p>
            <p>
              <strong>Anbieter:</strong> First-Party-Hosting (Schrift lizenziert über
              Google Fonts, Bereitstellung lokal).
              <br />
              <strong>Zweck:</strong> Einheitliches und ansprechendes Erscheinungsbild
              der Website.
              <br />
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse an einer professionellen Darstellung ohne
              Datenübermittlung an Google beim Seitenaufruf).
            </p>

            <h3>7.2 Google Maps (Karten-Einbindung)</h3>
            <p>
              Auf der Startseite binden wir eine interaktive Karte von Google Maps
              ein. Die Karte wird erst nach Ihrer aktiven Einwilligung zur
              Kategorie „Externe Medien“ geladen (über den Cookie-Banner, die
              Cookie-Einstellungen oder den Button „Karte laden und Einwilligung
              erteilen“). Beim Laden der Karte wird eine Verbindung zu Servern von
              Google hergestellt; dabei können Cookies oder vergleichbare Technologien
              (z. B. <code>NID</code>, <code>1P_JAR</code>, <code>CONSENT</code>) gesetzt
              werden und personenbezogene Daten (insbesondere Ihre IP-Adresse) an Google
              übermittelt werden.
            </p>
            <p>
              <strong>Anbieter:</strong> Google Ireland Limited, Gordon House, Barrow
              Street, Dublin 4, Irland (Muttergesellschaft: Google LLC, USA).
              <br />
              <strong>Zweck:</strong> Anzeige unseres Standorts bzw. Orientierung
              für Besucher.
              <br />
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO
              (Einwilligung über unser Consent-Banner bzw. den Karten-Platzhalter).
              <br />
              <strong>Speicherdauer:</strong> Anbieterabhängig (siehe Google).
              <br />
              <strong>Widerruf:</strong> Jederzeit über „Cookie-Einstellungen“ in der
              Fußzeile.
              <br />
              <strong>Drittlandübermittlung:</strong> möglich in die USA unter
              Einsatz geeigneter Garantien (Standardvertragsklauseln).
            </p>

            <h3>7.3 Externe Bilder, Links und ausgehende Verbindungen</h3>
            <p>
              Grafische Elemente (z. B. Logos) werden, soweit möglich, lokal von
              unserem Server bereitgestellt. Ausgehende Links zu WhatsApp,
              Instagram, Facebook oder Google-Bewertungen führen zu Angeboten
              Dritter. Diese Links setzen auf unserer Website keine Cookies und
              lösen keine Verbindung zu Drittanbietern aus, bevor Sie den Link
              aktiv anklicken. Für die dortige Datenverarbeitung sind allein die
              jeweiligen Anbieter verantwortlich.
            </p>

            <h3>7.4 Trustindex (optional, derzeit nicht aktiv)</h3>
            <p>
              Falls künftig ein Bewertungs-Widget von Trustindex eingebunden wird,
              wird dieses erst nach Einwilligung zur Kategorie „Statistik“ geladen.
              Der Dienst ist im Cookie-Banner unter „Statistik“ ausgewiesen, ist aber
              derzeit nicht aktiv.
            </p>
            <p>
              <strong>Anbieter:</strong> Trustindex (konkrete Verantwortliche und
              AV-Vertrag bei Aktivierung ergänzen).
              <br />
              <strong>Zweck:</strong> Anzeige externer Kundenbewertungen.
              <br />
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).
              <br />
              <strong>Widerruf:</strong> Über „Cookie-Einstellungen“ in der Fußzeile.
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
              <li>Google (Maps bei Einwilligung) – siehe Abschnitt 7.2</li>
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
              <li>
                Einwilligungsdaten im lokalen Speicher (<code>ue_consent_v1</code>):
                6 Monate (183 Tage), danach erneute Abfrage
              </li>
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
