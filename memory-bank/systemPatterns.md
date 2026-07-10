# Systemmuster

## Kontaktdaten
**Immer** `src/lib/site-contact.ts` importieren – nicht hardcoden:
```ts
import { SITE_CONTACT, telHref, whatsappHref, SITE_ADDRESS_LINES } from '@/lib/site-contact';
```

## Versteckte Inhalte (nicht löschen)
Flags in `src/lib/content-flags.ts`:

| Flag | Standard | Wirkung |
|------|----------|---------|
| `SHOW_MEIN_WEG_SECTION` | `false` | Blendet `AboutJourneyTimeline` auf `/ueber-uns` aus |
| `SHOW_HOME_CASE_STUDIES` | `false` | Startseite zeigt `HomeImageCarousel` statt `CaseStudiesSection` |

**Wiederherstellen:** Flag auf `true` setzen – Komponenten bleiben unverändert vollständig erhalten.

## Consent-Architektur
- `ConsentProvider` + `useSyncExternalStore`
- localStorage `ue_consent_v1`, 6 Monate Gültigkeit
- Google Maps: `ConsentGatedMaps` (Kategorie `externalMedia`)
- Trustindex vorbereitet, inaktiv (Kategorie `statistics`)
- Widerruf aller optionalen Kategorien → Seiten-Reload

## Layout-Struktur
```
layout.tsx → ConsentProvider
(site)/layout.tsx → Header, Footer, CookieBanner, StickyCtaBar
```

## Komponenten-Pattern
- Server Pages + Client-Komponenten für Interaktivität
- `HeaderWrapper` / `FooterWrapper` für zentrale Daten
- `StandortPageTemplate` für Standort-Unterseiten
