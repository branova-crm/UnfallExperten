/**
 * Dienst-Inventar für das Consent-Management (DSGVO / TDDDG).
 * Betreiber: Rechtstexte und Kategorisierung final prüfen.
 */
import type { ConsentCategory } from './types';
import { CONSENT_MAX_AGE_MS } from './types';

export type ConsentService = {
  name: string;
  location: string;
  category: ConsentCategory;
  purpose: string;
  provider: string;
  cookiesOrStorage?: string;
  duration?: string;
  blockBeforeConsent: boolean;
  active: boolean;
  /** Ausgehender Link ohne vorabigen Request/Cookie auf dieser Website */
  linkOnly?: boolean;
};

const CONSENT_DURATION_LABEL = `${Math.round(CONSENT_MAX_AGE_MS / (24 * 60 * 60 * 1000))} Tage (6 Monate), erneute Abfrage danach`;

export const CONSENT_SERVICES: ConsentService[] = [
  {
    name: 'Consent-Speicherung',
    location: 'src/lib/consent/storage.ts',
    category: 'necessary',
    purpose: 'Speichert Ihre Cookie-/Einwilligungsauswahl ohne personenbezogene User-ID',
    provider: 'First-Party (UnfallExperten NRW)',
    cookiesOrStorage: 'localStorage: ue_consent_v1',
    duration: CONSENT_DURATION_LABEL,
    blockBeforeConsent: false,
    active: true,
  },
  {
    name: 'Inter (lokal gehostet)',
    location: 'src/app/layout.tsx (next/font)',
    category: 'necessary',
    purpose: 'Einheitliche Typografie der Website',
    provider: 'First-Party (lokal über Next.js, kein externer Font-Request)',
    cookiesOrStorage: 'Keine',
    duration: 'Keine Speicherung',
    blockBeforeConsent: false,
    active: true,
  },
  {
    name: 'Google-Logo (lokal)',
    location: 'public/images/google-logo.png',
    category: 'necessary',
    purpose: 'Darstellung des Google-Bewertungslogos',
    provider: 'First-Party (lokal gehostet)',
    cookiesOrStorage: 'Keine',
    duration: 'Keine Speicherung',
    blockBeforeConsent: false,
    active: true,
  },
  {
    name: 'Formular-Einwilligung (Konfigurator)',
    location: 'src/components/Konfigurator.tsx',
    category: 'necessary',
    purpose: 'Einwilligung zur Bearbeitung von Kontaktanfragen',
    provider: 'First-Party',
    cookiesOrStorage: 'Keine (Formularfeld)',
    duration: 'Nur für die Anfrage',
    blockBeforeConsent: false,
    active: true,
  },
  {
    name: 'Lead-API',
    location: 'src/app/api/send-lead/route.ts',
    category: 'necessary',
    purpose: 'Versand von Kontaktanfragen per E-Mail',
    provider: 'First-Party / Hetzner Hosting',
    cookiesOrStorage: 'Keine clientseitigen Cookies',
    duration: 'Server-Logfiles gemäß Datenschutzerklärung',
    blockBeforeConsent: false,
    active: true,
  },
  {
    name: 'Google Maps',
    location: 'src/components/consent/ConsentGatedMaps.tsx',
    category: 'externalMedia',
    purpose: 'Interaktive Standortkarte',
    provider: 'Google Ireland Limited / Google LLC (USA)',
    cookiesOrStorage: 'NID, 1P_JAR, CONSENT, SOCS, AEC u. a. (Google-Domains)',
    duration: 'Anbieterabhängig',
    blockBeforeConsent: true,
    active: true,
  },
  {
    name: 'Trustindex',
    location: 'src/components/TrustindexWidget.tsx',
    category: 'statistics',
    purpose: 'Externes Bewertungs-Widget',
    provider: 'Trustindex',
    cookiesOrStorage: 'ti_* (anbieterabhängig)',
    duration: 'Anbieterabhängig',
    blockBeforeConsent: true,
    active: false,
  },
  {
    name: 'WhatsApp-Link',
    location: 'StickyCtaBar, Footer, Kontaktseiten',
    category: 'externalMedia',
    purpose: 'Direktlink zu WhatsApp – Datenübermittlung erst beim Klick',
    provider: 'Meta Platforms / WhatsApp Ireland',
    cookiesOrStorage: 'Keine Website-Cookies vor dem Klick',
    duration: 'Keine Speicherung auf dieser Website',
    blockBeforeConsent: false,
    active: true,
    linkOnly: true,
  },
  {
    name: 'Instagram-Link',
    location: 'Header, Footer',
    category: 'externalMedia',
    purpose: 'Direktlink zum Instagram-Profil – Datenübermittlung erst beim Klick',
    provider: 'Meta Platforms Ireland Limited',
    cookiesOrStorage: 'Keine Website-Cookies vor dem Klick',
    duration: 'Keine Speicherung auf dieser Website',
    blockBeforeConsent: false,
    active: true,
    linkOnly: true,
  },
  {
    name: 'Facebook-Link',
    location: 'Header, Footer',
    category: 'externalMedia',
    purpose: 'Direktlink zum Facebook-Profil – Datenübermittlung erst beim Klick',
    provider: 'Meta Platforms Ireland Limited',
    cookiesOrStorage: 'Keine Website-Cookies vor dem Klick',
    duration: 'Keine Speicherung auf dieser Website',
    blockBeforeConsent: false,
    active: true,
    linkOnly: true,
  },
  {
    name: 'Google-Bewertungslink',
    location: 'GoogleReviewsWidget, Kontaktseiten',
    category: 'externalMedia',
    purpose: 'Direktlink zu Google-Bewertungen – Datenübermittlung erst beim Klick',
    provider: 'Google Ireland Limited',
    cookiesOrStorage: 'Keine Website-Cookies vor dem Klick',
    duration: 'Keine Speicherung auf dieser Website',
    blockBeforeConsent: false,
    active: true,
    linkOnly: true,
  },
];

export function getServicesByCategory(category: ConsentCategory): ConsentService[] {
  return CONSENT_SERVICES.filter((s) => s.category === category);
}

export function getActiveServicesByCategory(category: ConsentCategory): ConsentService[] {
  return CONSENT_SERVICES.filter((s) => s.category === category && s.active);
}

export function getLinkOnlyServices(): ConsentService[] {
  return CONSENT_SERVICES.filter((s) => s.linkOnly && s.active);
}
