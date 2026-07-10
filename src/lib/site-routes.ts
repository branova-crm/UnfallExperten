/**
 * Zentrale URL-/Routen-Konfiguration für SEO-Artefakte
 * (Sitemap, robots.txt, llms.txt). Bei neuen Seiten hier ergänzen.
 */

export const SITE_URL = 'https://unfallexperten-nrw.de';

export type RoutePriority = 'high' | 'medium' | 'low';

export type SiteRoute = {
    path: string;
    /** Kurzer Titel (für llms.txt / interne Übersicht) */
    title: string;
    /** Kurzbeschreibung (für llms.txt) */
    description: string;
    priority: RoutePriority;
    changeFrequency:
        | 'daily'
        | 'weekly'
        | 'monthly'
        | 'yearly';
};

/** Kernseiten & Leistungen */
export const MAIN_ROUTES: SiteRoute[] = [
    {
        path: '/',
        title: 'Startseite – UnfallExperten NRW',
        description:
            'Unabhängige KFZ-Gutachter für Unfall- & Schadensgutachten in NRW. Kostenlos für Unfallgeschädigte, mobil vor Ort, 24/7 erreichbar.',
        priority: 'high',
        changeFrequency: 'weekly',
    },
    {
        path: '/leistungen',
        title: 'Unsere Leistungen',
        description:
            'Alle Gutachten-Leistungen im Überblick: Unfallgutachten, Wertgutachten, Kostenvoranschlag, Kaskoschaden und mehr.',
        priority: 'high',
        changeFrequency: 'monthly',
    },
    {
        path: '/unfall-schadensgutachten',
        title: 'Unfall- & Schadensgutachten',
        description:
            'Rechtssicheres Schadensgutachten nach dem Unfall – kostenlos für Geschädigte, schnelle Abwicklung mit der Versicherung.',
        priority: 'high',
        changeFrequency: 'monthly',
    },
    {
        path: '/wertgutachten',
        title: 'Wertgutachten',
        description:
            'Fahrzeugbewertung und Wertgutachten für Kauf, Verkauf, Oldtimer und Versicherung durch unabhängige Sachverständige.',
        priority: 'high',
        changeFrequency: 'monthly',
    },
    {
        path: '/kostenvoranschlag',
        title: 'Kostenvoranschlag',
        description:
            'Transparenter Kostenvoranschlag für Reparaturen – schnelle und nachvollziehbare Schadenskalkulation.',
        priority: 'medium',
        changeFrequency: 'monthly',
    },
    {
        path: '/kaskoschaden',
        title: 'Kaskoschaden',
        description:
            'Gutachten und Unterstützung bei Kaskoschäden – wir begleiten Sie bei der Abwicklung mit Ihrer Versicherung.',
        priority: 'medium',
        changeFrequency: 'monthly',
    },
    {
        path: '/reparaturbestaetigung',
        title: 'Reparaturbestätigung',
        description:
            'Reparaturbestätigung nach fiktiver Abrechnung – Nachweis der fachgerechten Instandsetzung Ihres Fahrzeugs.',
        priority: 'medium',
        changeFrequency: 'monthly',
    },
    {
        path: '/kostenlose-dienstleistung',
        title: 'Kostenlose Dienstleistung',
        description:
            'Warum unser Service für Unfallgeschädigte kostenlos ist – die gegnerische Versicherung trägt die Gutachterkosten.',
        priority: 'medium',
        changeFrequency: 'monthly',
    },
    {
        path: '/ratgeber',
        title: 'Ratgeber',
        description:
            'Wissenswertes nach dem Unfall: die wichtigsten Themen kompakt erklärt – Rechte, Ablauf und Ansprechpartner.',
        priority: 'medium',
        changeFrequency: 'monthly',
    },
    {
        path: '/referenzen',
        title: 'Referenzen & Fallbeispiele',
        description:
            'Echte Fallbeispiele und Kundenbewertungen unserer KFZ-Gutachten aus NRW.',
        priority: 'medium',
        changeFrequency: 'monthly',
    },
    {
        path: '/ueber-uns',
        title: 'Über uns',
        description:
            'Lernen Sie das Team der UnfallExperten NRW kennen – unabhängige, erfahrene KFZ-Sachverständige.',
        priority: 'medium',
        changeFrequency: 'monthly',
    },
    {
        path: '/kontakt',
        title: 'Kontakt',
        description:
            'Kontaktieren Sie uns per Telefon, WhatsApp oder Formular – Antwort in der Regel innerhalb von 15 Minuten.',
        priority: 'high',
        changeFrequency: 'monthly',
    },
    {
        path: '/standorte',
        title: 'Standorte',
        description:
            'Unsere KFZ-Gutachter sind NRW-weit vor Ort im Einsatz. Finden Sie Ihren Standort in der Nähe.',
        priority: 'high',
        changeFrequency: 'monthly',
    },
];

/** Rechtliche Seiten */
export const LEGAL_ROUTES: SiteRoute[] = [
    {
        path: '/impressum',
        title: 'Impressum',
        description: 'Anbieterkennzeichnung der UnfallExperten NRW.',
        priority: 'low',
        changeFrequency: 'yearly',
    },
    {
        path: '/datenschutz',
        title: 'Datenschutz',
        description: 'Datenschutzerklärung und Informationen zur Datenverarbeitung.',
        priority: 'low',
        changeFrequency: 'yearly',
    },
];

/** Standort-Slugs (statische Seiten + verlinkte Städte über den Standort-Router) */
export const STANDORT_SLUGS: string[] = [
    'bonn',
    'koeln',
    'duesseldorf',
    'leverkusen',
    'sankt-augustin',
    'troisdorf',
    'siegburg',
    'alfter',
    'bornheim',
    'rheinbach',
    'euskirchen',
    'hennef',
    'bad-honnef',
    'mechernich',
    'meckenheim',
    'koenigswinter',
    'swisttal',
    'bonn-duisdorf',
    'erftstadt',
];

/** Standort-Slug in einen lesbaren Städtenamen umwandeln */
export function formatCityName(slug: string): string {
    return slug
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
        .replace('Koeln', 'Köln')
        .replace('Duesseldorf', 'Düsseldorf')
        .replace('Koenigswinter', 'Königswinter');
}

export const STANDORT_ROUTES: SiteRoute[] = STANDORT_SLUGS.map((slug) => ({
    path: `/standorte/${slug}`,
    title: `KFZ-Gutachter ${formatCityName(slug)}`,
    description: `Ihr KFZ-Gutachter vor Ort in ${formatCityName(
        slug,
    )} – kostenloses Unfallgutachten, schnelle Abwicklung, 24/7 erreichbar.`,
    priority: 'medium',
    changeFrequency: 'monthly',
}));

/** Alle Routen zusammengefasst */
export const ALL_ROUTES: SiteRoute[] = [
    ...MAIN_ROUTES,
    ...STANDORT_ROUTES,
    ...LEGAL_ROUTES,
];
