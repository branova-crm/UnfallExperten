import { SITE_CONTACT } from '@/lib/site-contact';
import { SITE_URL } from '@/lib/site-routes';

/**
 * Zentrale SEO-/Structured-Data-Konfiguration.
 * Wird von JSON-LD-Buildern und Metadaten-Helpern verwendet.
 */

export const SEO = {
    siteUrl: SITE_URL,
    /** Marken-/Anzeigename */
    brandName: 'UnfallExperten NRW',
    /** Vollständiger Firmenname (Impressum) */
    legalName: SITE_CONTACT.companyName,
    /** Kurzbeschreibung des Unternehmens */
    description:
        'Unabhängige KFZ-Gutachter für Unfall- und Schadensgutachten in NRW. Kostenlos für Unfallgeschädigte, mobil vor Ort, 24/7 erreichbar.',
    /** Logo (bitte Datei ergänzen: public/images/logo.png, empfohlen 512×512) */
    logoUrl: `${SITE_URL}/images/logo.png`,
    /** Standard-Vorschaubild für Social/Google (bitte ergänzen: public/images/og-image.jpg, 1200×630) */
    ogImageUrl: `${SITE_URL}/images/og-image.jpg`,
    /** Google-Bewertung */
    rating: {
        value: '5.0',
        count: 21,
    },
    /** Preisrahmen (Schema.org) */
    priceRange: '€€',
    /** Geo-Koordinaten des Büros in Euskirchen (Näherung) */
    geo: {
        latitude: 50.6739,
        longitude: 6.7924,
    },
    /** Bestätigte, echte Profile */
    sameAs: [
        'https://www.instagram.com/unfallexperten.nrw/',
        'https://share.google/KbGRRE7ngszpWpv9k',
    ],
} as const;

export { SITE_CONTACT, SITE_URL };

/** Absolute URL aus einem Pfad erzeugen */
export function absoluteUrl(path: string): string {
    if (path.startsWith('http')) return path;
    return `${SITE_URL}${path === '/' ? '' : path}`;
}
