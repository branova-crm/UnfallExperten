# Aktiver Kontext

**Stand:** 10. Juli 2026

## Zuletzt erledigt
- Memory Bank angelegt (`memory-bank/`)
- Zentrale Kontaktdaten in `src/lib/site-contact.ts`
- Telefon/WhatsApp überall auf **0160 29 29 29 1** umgestellt
- Impressum: Berufshaftpflicht **Allianz** ergänzt
- Abschnitt **„Mein Weg“** auf `/ueber-uns` ausgeblendet (`SHOW_MEIN_WEG_SECTION = false`)
- Startseite **Fallbeispiele** ausgeblendet, stattdessen **Bildergalerie-Karussell** (`HomeImageCarousel`)
- DSGVO Consent-System vollständig implementiert und mit Datenschutz abgeglichen
- Maps-Platzhalter Layout-Fixes (Titel/Adresse, Footer-Überlappung)

## Aktuell sichtbar statt versteckter Inhalte
- `/ueber-uns`: Kein „Mein Weg“-Block
- Startseite: Karussell-Galerie mit Bildern aus `/public/images/` (1–5.jpg, bmw_*)

## Nächste Schritte (warten auf Inhalte)
1. **Mein Weg:** Echte Timeline-Daten liefern → `SHOW_MEIN_WEG_SECTION = true` in `content-flags.ts`
2. **Fallbeispiele:** Echte Cases liefern → `SHOW_HOME_CASE_STUDIES = true`
3. **Rechtliches:** SMTP-Dienstleister in Datenschutz benennen; Trustindex bei Aktivierung
4. **Social Media:** Echte Instagram/Facebook-Profil-URLs statt generischer Links
5. **Referenzen-Galerie:** Platzhalter durch echte Gutachtenfotos ersetzen

## Wichtige Dateien für Wiederherstellung
| Inhalt | Datei |
|--------|-------|
| Mein Weg (vollständig) | `src/components/AboutJourneyTimeline.tsx` |
| Fallbeispiele Startseite | `src/components/CaseStudiesSection.tsx` |
| Steuerung ein/aus | `src/lib/content-flags.ts` |
