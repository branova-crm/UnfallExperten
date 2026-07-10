import { SEO, SITE_CONTACT, absoluteUrl } from '@/lib/seo/config';

/**
 * JSON-LD Builder (schema.org). Alle Funktionen geben reine Objekte zurück,
 * die über die <JsonLd>-Komponente ausgegeben werden.
 */

type JsonLdObject = Record<string, unknown>;

/** Stabile @id-Anker, damit Entitäten seitenübergreifend referenziert werden */
export const ID = {
    organization: `${SEO.siteUrl}/#organization`,
    localBusiness: `${SEO.siteUrl}/#localbusiness`,
    website: `${SEO.siteUrl}/#website`,
};

const POSTAL_ADDRESS = {
    '@type': 'PostalAddress',
    streetAddress: SITE_CONTACT.street,
    postalCode: SITE_CONTACT.zipCity.split(' ')[0],
    addressLocality: SITE_CONTACT.zipCity.split(' ').slice(1).join(' '),
    addressRegion: 'Nordrhein-Westfalen',
    addressCountry: 'DE',
};

const CONTACT_POINT = {
    '@type': 'ContactPoint',
    telephone: SITE_CONTACT.phoneE164,
    email: SITE_CONTACT.email,
    contactType: 'customer service',
    areaServed: 'DE',
    availableLanguage: ['German'],
};

const OPENING_HOURS = {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
    ],
    opens: '00:00',
    closes: '23:59',
};

const AGGREGATE_RATING = {
    '@type': 'AggregateRating',
    ratingValue: SEO.rating.value,
    reviewCount: SEO.rating.count,
    bestRating: '5',
    worstRating: '1',
};

/** Organisation (Marke) */
export function organization(): JsonLdObject {
    return {
        '@type': 'Organization',
        '@id': ID.organization,
        name: SEO.brandName,
        legalName: SEO.legalName,
        url: SEO.siteUrl,
        logo: {
            '@type': 'ImageObject',
            url: SEO.logoUrl,
        },
        image: SEO.ogImageUrl,
        email: SITE_CONTACT.email,
        telephone: SITE_CONTACT.phoneE164,
        address: POSTAL_ADDRESS,
        contactPoint: CONTACT_POINT,
        sameAs: SEO.sameAs,
    };
}

/** Lokales Unternehmen / Dienstleister (für Local SEO) */
export function localBusiness(overrides: JsonLdObject = {}): JsonLdObject {
    return {
        '@type': 'ProfessionalService',
        '@id': ID.localBusiness,
        name: SEO.brandName,
        description: SEO.description,
        url: SEO.siteUrl,
        image: SEO.ogImageUrl,
        logo: SEO.logoUrl,
        telephone: SITE_CONTACT.phoneE164,
        email: SITE_CONTACT.email,
        priceRange: SEO.priceRange,
        currenciesAccepted: 'EUR',
        paymentAccepted: 'Cash, Invoice',
        address: POSTAL_ADDRESS,
        geo: {
            '@type': 'GeoCoordinates',
            latitude: SEO.geo.latitude,
            longitude: SEO.geo.longitude,
        },
        areaServed: {
            '@type': 'State',
            name: 'Nordrhein-Westfalen',
        },
        openingHoursSpecification: OPENING_HOURS,
        aggregateRating: AGGREGATE_RATING,
        sameAs: SEO.sameAs,
        parentOrganization: { '@id': ID.organization },
        ...overrides,
    };
}

/** Website-Entität */
export function website(): JsonLdObject {
    return {
        '@type': 'WebSite',
        '@id': ID.website,
        url: SEO.siteUrl,
        name: SEO.brandName,
        inLanguage: 'de-DE',
        publisher: { '@id': ID.organization },
    };
}

/** Generische Seite */
export function webPage(params: {
    path: string;
    name: string;
    description: string;
}): JsonLdObject {
    return {
        '@type': 'WebPage',
        '@id': `${absoluteUrl(params.path)}#webpage`,
        url: absoluteUrl(params.path),
        name: params.name,
        description: params.description,
        inLanguage: 'de-DE',
        isPartOf: { '@id': ID.website },
        about: { '@id': ID.localBusiness },
    };
}

/** Dienstleistung */
export function service(params: {
    name: string;
    description: string;
    path: string;
    serviceType?: string;
}): JsonLdObject {
    return {
        '@type': 'Service',
        name: params.name,
        description: params.description,
        serviceType: params.serviceType ?? params.name,
        url: absoluteUrl(params.path),
        provider: { '@id': ID.localBusiness },
        areaServed: {
            '@type': 'State',
            name: 'Nordrhein-Westfalen',
        },
        availableChannel: {
            '@type': 'ServiceChannel',
            servicePhone: SITE_CONTACT.phoneE164,
            serviceUrl: absoluteUrl(params.path),
        },
    };
}

/** Breadcrumb-Navigation */
export function breadcrumb(
    items: { name: string; path: string }[],
): JsonLdObject {
    return {
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: absoluteUrl(item.path),
        })),
    };
}

/** Liste verlinkter Elemente (z. B. Themen, Standorte) */
export function itemList(
    items: { name: string; path: string }[],
    name?: string,
): JsonLdObject {
    return {
        '@type': 'ItemList',
        ...(name ? { name } : {}),
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            url: absoluteUrl(item.path),
        })),
    };
}

/** FAQ-Seite */
export function faqPage(items: { q: string; a: string }[]): JsonLdObject {
    return {
        '@type': 'FAQPage',
        mainEntity: items.map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.a,
            },
        })),
    };
}

/** Kontaktseite */
export function contactPage(params: {
    path: string;
    name: string;
    description: string;
}): JsonLdObject {
    return {
        '@type': 'ContactPage',
        '@id': `${absoluteUrl(params.path)}#webpage`,
        url: absoluteUrl(params.path),
        name: params.name,
        description: params.description,
        inLanguage: 'de-DE',
        isPartOf: { '@id': ID.website },
        about: { '@id': ID.localBusiness },
    };
}

/** Über-uns-Seite */
export function aboutPage(params: {
    path: string;
    name: string;
    description: string;
}): JsonLdObject {
    return {
        '@type': 'AboutPage',
        '@id': `${absoluteUrl(params.path)}#webpage`,
        url: absoluteUrl(params.path),
        name: params.name,
        description: params.description,
        inLanguage: 'de-DE',
        isPartOf: { '@id': ID.website },
        about: { '@id': ID.organization },
    };
}

/** Standort-spezifisches LocalBusiness (für Stadt-Seiten) */
export function cityLocalBusiness(params: {
    city: string;
    path: string;
    description: string;
}): JsonLdObject {
    return {
        '@type': 'ProfessionalService',
        '@id': `${absoluteUrl(params.path)}#localbusiness`,
        name: `${SEO.brandName} – KFZ-Gutachter ${params.city}`,
        description: params.description,
        url: absoluteUrl(params.path),
        image: SEO.ogImageUrl,
        logo: SEO.logoUrl,
        telephone: SITE_CONTACT.phoneE164,
        email: SITE_CONTACT.email,
        priceRange: SEO.priceRange,
        address: POSTAL_ADDRESS,
        areaServed: {
            '@type': 'City',
            name: params.city,
        },
        openingHoursSpecification: OPENING_HOURS,
        aggregateRating: AGGREGATE_RATING,
        parentOrganization: { '@id': ID.organization },
        sameAs: SEO.sameAs,
    };
}

/** Mehrere Objekte in einen @graph verpacken */
export function graph(nodes: JsonLdObject[]): JsonLdObject {
    return {
        '@context': 'https://schema.org',
        '@graph': nodes,
    };
}

/** Einzelnes Objekt mit @context versehen */
export function single(node: JsonLdObject): JsonLdObject {
    return {
        '@context': 'https://schema.org',
        ...node,
    };
}
