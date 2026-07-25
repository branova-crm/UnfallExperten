# Fortschritt

## ✅ Fertig
- [x] Next.js Website-Grundstruktur (Startseite, Leistungen, Standorte, Kontakt, Über uns, Referenzen, Ratgeber)
- [x] DSGVO Cookie-Banner + Einstellungen + Google-Maps-Gate
- [x] Self-hosted Fonts & Google-Logo
- [x] Datenschutzerklärung CMP-konform (Stand 10.07.2026)
- [x] Impressum mit Allianz Berufshaftpflicht
- [x] Zentrale Kontaktdaten (`site-contact.ts`)
- [x] Telefon 0160 29 29 29 1 siteweit
- [x] Versteckte Sektionen per Feature-Flags (nicht gelöscht)
- [x] Startseiten-Karussell als Fallbeispiel-Ersatz
- [x] Startseiten-Hero: linker DGuSV-Banner/Seal vorübergehend ausgeblendet

## 🔄 Vorübergehend deaktiviert (Code vorhanden)
- [ ] **Mein Weg** (`AboutJourneyTimeline`) – Flag: `SHOW_MEIN_WEG_SECTION`
- [ ] **Fallbeispiele Startseite** (`CaseStudiesSection`) – Flag: `SHOW_HOME_CASE_STUDIES`
- [ ] **Hero DGuSV-Banner links** (`SHOW_HERO_CERT_SEAL` in `src/app/(site)/page.tsx`)

## 📋 Offen / Backlog
- [ ] Echte Biografie für „Mein Weg“ einpflegen
- [ ] Echte Fallbeispiele mit verifizierten Daten
- [ ] Referenzen-Galerie: echte Fotos statt Platzhalter
- [ ] Trustindex aktivieren + AV-Vertrag + Cookie-Liste
- [ ] SMTP-Anbieter in Datenschutz ergänzen
- [ ] Google-Maps-Cookies nach Live-Test dokumentieren
- [ ] Instagram/Facebook echte Profil-URLs
- [ ] Globales Lint-Altlasten außerhalb Consent bereinigen

## 🐛 Bekannte Punkte
- `home-body.jsx` möglicherweise Legacy (aktive Seite: `page.tsx`)
- Facebook/Instagram-Links zeigen auf generische Startseiten

## Build-Status
Zuletzt: `npm run build` grün (Consent-Bereich)
