// ═══════════════════════════════════════════════════
// Classic Editor CMS – Section Types & Page Templates
// WordPress-style predefined blocks
// ═══════════════════════════════════════════════════

// ── Section Schema ──
export interface CmsSection {
    id: string;
    type: SectionType;
    label: string;
    settings: SectionSettings;
    advanced: SectionAdvanced;
    data: Record<string, any>;
}

export type SectionType =
    | 'HERO_PRESET'
    | 'RICH_TEXT'
    | 'CTA_BANNER'
    | 'IMAGE_SECTION'
    | 'FAQ_SECTION'
    | 'FEATURE_GRID'
    | 'CONTACT_CARDS'
    | 'LOCATION_META'
    | 'HTML_SNIPPET'
    | 'SPACER';

export interface SectionSettings {
    layout: { contentWidth: 'boxed' | 'full'; maxWidthPx: number; fullWidth: boolean };
    spacing: { paddingTop: number; paddingRight: number; paddingBottom: number; paddingLeft: number; marginTop: number; marginBottom: number };
    background: { type: 'none' | 'color' | 'image'; color: string; imageMediaId: string | null; overlayColor: string; position: string; size: string; repeat: string };
}

export interface SectionAdvanced {
    anchorId: string;
    customClass: string;
    visibility: { desktop: boolean; tablet: boolean; mobile: boolean };
}

// ── Field Schema for Editor UI ──
export type FieldType = 'text' | 'textarea' | 'richtext' | 'image' | 'toggle' | 'select' | 'number' | 'color' | 'repeater';

export interface FieldDef {
    key: string;
    label: string;
    type: FieldType;
    placeholder?: string;
    options?: { value: string; label: string }[];
    repeaterFields?: FieldDef[];
}

// ── Section Type Registry ──
export interface SectionTypeDef {
    type: SectionType;
    label: string;
    icon: string;
    description: string;
    fields: FieldDef[];
    defaultData: Record<string, any>;
}

export const SECTION_TYPES: SectionTypeDef[] = [
    {
        type: 'HERO_PRESET', label: 'Hero Banner', icon: '🎬', description: 'Hero Section mit Badge, CTAs',
        fields: [
            { key: 'headline', label: 'Überschrift', type: 'textarea' },
            { key: 'subheadline', label: 'Untertitel', type: 'textarea' },
            { key: 'badgeText', label: 'Badge Text', type: 'text' },
            { key: 'primaryCtaText', label: 'Primärer CTA Text', type: 'text' },
            { key: 'primaryCtaLink', label: 'Primärer CTA Link', type: 'text' },
            { key: 'secondaryCtaText', label: 'Sekundärer CTA Text', type: 'text' },
            { key: 'secondaryCtaLink', label: 'Sekundärer CTA Link', type: 'text' },
            { key: 'heroImageMediaId', label: 'Hero Bild', type: 'image' },
            { key: 'trustBadgesActive', label: 'Trust Badges anzeigen', type: 'toggle' },
        ],
        defaultData: {
            headline: 'Seitentitel', subheadline: 'Kurzer Untertitel / Erklärungstext.',
            badgeText: 'Ihre Gutachter-Experten',
            primaryCtaText: 'WhatsApp starten', primaryCtaLink: 'https://wa.me/49XXXXXXXXXX',
            secondaryCtaText: 'Jetzt anrufen', secondaryCtaLink: 'tel:+49XXXXXXXXXX',
            heroImageMediaId: null, trustBadgesActive: true,
        },
    },
    {
        type: 'RICH_TEXT', label: 'Rich Text', icon: '📝', description: 'Freitext / HTML',
        fields: [
            { key: 'content', label: 'Inhalt', type: 'richtext' },
            { key: 'format', label: 'Format', type: 'select', options: [{ value: 'html', label: 'HTML' }, { value: 'markdown', label: 'Markdown' }] },
        ],
        defaultData: { content: '<h2>Überschrift</h2><p>Hier kommt der Inhalt rein.</p>', format: 'html' },
    },
    {
        type: 'CTA_BANNER', label: 'CTA Banner', icon: '📢', description: 'Call-to-Action Bereich',
        fields: [
            { key: 'headline', label: 'Überschrift', type: 'text' },
            { key: 'text', label: 'Text', type: 'textarea' },
            { key: 'ctaText', label: 'Button Text', type: 'text' },
            { key: 'ctaLink', label: 'Button Link', type: 'text' },
            { key: 'secondaryCtaText', label: 'Sekundärer Button', type: 'text' },
            { key: 'secondaryCtaLink', label: 'Sekundärer Link', type: 'text' },
        ],
        defaultData: {
            headline: 'Schnelle Hilfe nach dem Unfall', text: 'Kontaktieren Sie uns – wir kümmern uns um alles Weitere.',
            ctaText: 'Rückruf anfordern', ctaLink: '/kontakt',
            secondaryCtaText: '', secondaryCtaLink: '',
        },
    },
    {
        type: 'IMAGE_SECTION', label: 'Bild', icon: '🖼️', description: 'Einzelnes Bild mit Caption',
        fields: [
            { key: 'imageMediaId', label: 'Bild', type: 'image' },
            { key: 'imageUrl', label: 'Bild URL (alternativ)', type: 'text' },
            { key: 'alt', label: 'Alt-Text', type: 'text' },
            { key: 'caption', label: 'Bildunterschrift', type: 'text' },
        ],
        defaultData: { imageMediaId: null, imageUrl: '', alt: '', caption: '' },
    },
    {
        type: 'FAQ_SECTION', label: 'FAQ', icon: '❓', description: 'Häufige Fragen',
        fields: [
            { key: 'headline', label: 'Überschrift', type: 'text' },
            {
                key: 'items', label: 'Fragen', type: 'repeater', repeaterFields: [
                    { key: 'question', label: 'Frage', type: 'text' },
                    { key: 'answer', label: 'Antwort', type: 'textarea' },
                ]
            },
        ],
        defaultData: {
            headline: 'Häufige Fragen',
            items: [{ question: 'Wie schnell bekomme ich einen Termin?', answer: 'Wir melden uns schnellstmöglich.' }],
        },
    },
    {
        type: 'FEATURE_GRID', label: 'Feature Grid', icon: '⭐', description: 'Vorteile / Features',
        fields: [
            { key: 'headline', label: 'Überschrift', type: 'text' },
            { key: 'columns', label: 'Spalten', type: 'select', options: [{ value: '2', label: '2 Spalten' }, { value: '3', label: '3 Spalten' }, { value: '4', label: '4 Spalten' }] },
            {
                key: 'items', label: 'Features', type: 'repeater', repeaterFields: [
                    { key: 'icon', label: 'Icon', type: 'text' },
                    { key: 'title', label: 'Titel', type: 'text' },
                    { key: 'text', label: 'Text', type: 'textarea' },
                ]
            },
        ],
        defaultData: {
            headline: 'Ihre Vorteile', columns: '3',
            items: [
                { icon: '⚡', title: 'Schnell', text: 'Kurze Reaktionszeiten.' },
                { icon: '🛡️', title: 'Unabhängig', text: 'Objektive Bewertung.' },
                { icon: '✅', title: 'Einfach', text: 'Schritt für Schritt.' },
            ],
        },
    },
    {
        type: 'CONTACT_CARDS', label: 'Kontakt Karten', icon: '✉️', description: 'Kontaktfelder',
        fields: [
            { key: 'headline', label: 'Überschrift', type: 'text' },
            { key: 'text', label: 'Text', type: 'textarea' },
            { key: 'phone', label: 'Telefon', type: 'text' },
            { key: 'phoneLink', label: 'Telefon Link', type: 'text' },
            { key: 'email', label: 'E-Mail', type: 'text' },
            { key: 'address', label: 'Adresse', type: 'textarea' },
            { key: 'showForm', label: 'Kontaktformular anzeigen', type: 'toggle' },
        ],
        defaultData: { headline: 'Kontakt', text: '', phone: '0211–1234567', phoneLink: 'tel:+4902111234567', email: 'info@unfallexperten-nrw.de', address: '', showForm: true },
    },
    {
        type: 'LOCATION_META', label: 'Standort-Info', icon: '📍', description: 'Standortinformationen',
        fields: [
            { key: 'showMap', label: 'Karte anzeigen', type: 'toggle' },
            { key: 'showOpeningHours', label: 'Öffnungszeiten anzeigen', type: 'toggle' },
            { key: 'showAddress', label: 'Adresse anzeigen', type: 'toggle' },
        ],
        defaultData: { showMap: true, showOpeningHours: true, showAddress: true },
    },
    {
        type: 'HTML_SNIPPET', label: 'HTML / Code', icon: '🧩', description: 'Freies HTML',
        fields: [
            { key: 'code', label: 'HTML Code', type: 'richtext' },
        ],
        defaultData: { code: '<div><!-- HTML --></div>' },
    },
    {
        type: 'SPACER', label: 'Abstand', icon: '↕️', description: 'Vertikaler Abstand',
        fields: [
            { key: 'height', label: 'Höhe (px)', type: 'number' },
        ],
        defaultData: { height: 60 },
    },
];

export function getSectionTypeDef(type: SectionType): SectionTypeDef | undefined {
    return SECTION_TYPES.find(s => s.type === type);
}

// ── Default Settings ──
export function defaultSettings(): SectionSettings {
    return {
        layout: { contentWidth: 'boxed', maxWidthPx: 1200, fullWidth: false },
        spacing: { paddingTop: 60, paddingRight: 0, paddingBottom: 60, paddingLeft: 0, marginTop: 0, marginBottom: 0 },
        background: { type: 'none', color: '#000000', imageMediaId: null, overlayColor: 'rgba(0,0,0,0.0)', position: 'center', size: 'cover', repeat: 'no-repeat' },
    };
}

export function defaultAdvanced(): SectionAdvanced {
    return { anchorId: '', customClass: '', visibility: { desktop: true, tablet: true, mobile: true } };
}

// ── Create Section ──
let _counter = 0;
export function createSectionId(): string {
    _counter++;
    return `sec_${Date.now().toString(36)}${_counter.toString(36)}`;
}

export function createSection(type: SectionType, overrides?: Partial<CmsSection>): CmsSection {
    const def = getSectionTypeDef(type);
    return {
        id: createSectionId(),
        type,
        label: def?.label || type,
        settings: defaultSettings(),
        advanced: defaultAdvanced(),
        data: { ...(def?.defaultData || {}) },
        ...overrides,
    };
}

// ── Page Templates ──
export interface PageTemplate {
    key: string;
    name: string;
    description: string;
    sections: CmsSection[];
}

export const PAGE_TEMPLATES: PageTemplate[] = [
    {
        key: 'standard_page', name: 'Standard Seite', description: 'Hero + Rich Text + CTA',
        sections: [
            createSection('HERO_PRESET', { label: 'Hero', settings: { ...defaultSettings(), layout: { contentWidth: 'full', maxWidthPx: 1400, fullWidth: true }, spacing: { paddingTop: 0, paddingRight: 0, paddingBottom: 0, paddingLeft: 0, marginTop: 0, marginBottom: 0 } }, advanced: { ...defaultAdvanced(), anchorId: 'hero' } }),
            createSection('RICH_TEXT', { label: 'Inhalt', settings: { ...defaultSettings(), layout: { contentWidth: 'boxed', maxWidthPx: 1100, fullWidth: false }, spacing: { paddingTop: 60, paddingRight: 20, paddingBottom: 60, paddingLeft: 20, marginTop: 0, marginBottom: 0 } }, advanced: { ...defaultAdvanced(), anchorId: 'content' } }),
            createSection('CTA_BANNER', { label: 'CTA Banner', settings: { ...defaultSettings(), background: { ...defaultSettings().background, type: 'color', color: '#1641A6' }, spacing: { paddingTop: 40, paddingRight: 20, paddingBottom: 40, paddingLeft: 20, marginTop: 0, marginBottom: 0 } }, advanced: { ...defaultAdvanced(), anchorId: 'cta' } }),
        ],
    },
    {
        key: 'landing_page', name: 'Landingpage', description: 'Hero + Vorteile + FAQ + CTA',
        sections: [
            createSection('HERO_PRESET', { label: 'Hero', data: { headline: 'Unfall in NRW?', subheadline: 'Wir kümmern uns schnell & stressfrei um den Rest.', badgeText: 'Unabhängige Gutachter-Experten', primaryCtaText: 'WhatsApp starten', primaryCtaLink: 'https://wa.me/49XXXXXXXXXX', secondaryCtaText: 'Rückruf anfordern', secondaryCtaLink: '/kontakt', heroImageMediaId: null, trustBadgesActive: true }, settings: { ...defaultSettings(), layout: { contentWidth: 'full', maxWidthPx: 1400, fullWidth: true }, spacing: { paddingTop: 0, paddingRight: 0, paddingBottom: 0, paddingLeft: 0, marginTop: 0, marginBottom: 0 } } }),
            createSection('FEATURE_GRID', { label: 'Vorteile', advanced: { ...defaultAdvanced(), anchorId: 'vorteile' }, settings: { ...defaultSettings(), spacing: { paddingTop: 70, paddingRight: 20, paddingBottom: 70, paddingLeft: 20, marginTop: 0, marginBottom: 0 } } }),
            createSection('FAQ_SECTION', { label: 'FAQ', advanced: { ...defaultAdvanced(), anchorId: 'faq' }, settings: { ...defaultSettings(), layout: { contentWidth: 'boxed', maxWidthPx: 1100, fullWidth: false }, spacing: { paddingTop: 40, paddingRight: 20, paddingBottom: 60, paddingLeft: 20, marginTop: 0, marginBottom: 0 } } }),
            createSection('CTA_BANNER', { label: 'CTA', settings: { ...defaultSettings(), background: { ...defaultSettings().background, type: 'color', color: '#1641A6' }, spacing: { paddingTop: 45, paddingRight: 20, paddingBottom: 45, paddingLeft: 20, marginTop: 0, marginBottom: 0 } }, data: { headline: 'Jetzt Kontakt aufnehmen', text: 'Senden Sie uns die Infos – wir melden uns umgehend.', ctaText: 'WhatsApp starten', ctaLink: 'https://wa.me/49XXXXXXXXXX', secondaryCtaText: 'Kontaktformular', secondaryCtaLink: '/kontakt' } }),
        ],
    },
    {
        key: 'leistungen_page', name: 'Leistungen', description: 'Hero + Features + Rich Text + CTA',
        sections: [
            createSection('HERO_PRESET', { label: 'Hero Leistungen', data: { headline: 'Leistungen', subheadline: 'Übersicht unserer Leistungen – klar & verständlich.', badgeText: 'Ihr regionaler Gutachter', primaryCtaText: 'Rückruf anfordern', primaryCtaLink: '/kontakt', secondaryCtaText: 'WhatsApp starten', secondaryCtaLink: 'https://wa.me/49XXXXXXXXXX', heroImageMediaId: null, trustBadgesActive: true }, settings: { ...defaultSettings(), layout: { contentWidth: 'full', maxWidthPx: 1400, fullWidth: true }, spacing: { paddingTop: 0, paddingRight: 0, paddingBottom: 0, paddingLeft: 0, marginTop: 0, marginBottom: 0 } } }),
            createSection('FEATURE_GRID', { label: 'Leistungsübersicht', data: { headline: 'Unsere Leistungen', columns: '3', items: [{ icon: '📋', title: 'Unfallgutachten', text: 'Erstellung eines Gutachtens nach dem Unfall.' }, { icon: '🚗', title: 'Bewertung', text: 'Fahrzeugbewertung und Dokumentation.' }, { icon: '💡', title: 'Beratung', text: 'Begleitung bei Fragen und nächsten Schritten.' }] }, settings: { ...defaultSettings(), spacing: { paddingTop: 70, paddingRight: 20, paddingBottom: 30, paddingLeft: 20, marginTop: 0, marginBottom: 0 } } }),
            createSection('RICH_TEXT', { label: 'Zusatzinfos', settings: { ...defaultSettings(), layout: { contentWidth: 'boxed', maxWidthPx: 1100, fullWidth: false }, spacing: { paddingTop: 20, paddingRight: 20, paddingBottom: 70, paddingLeft: 20, marginTop: 0, marginBottom: 0 } }, data: { format: 'html', content: '<h2>Details</h2><p>Hier können weitere Informationen ergänzt werden.</p>' } }),
            createSection('CTA_BANNER', { label: 'CTA', settings: { ...defaultSettings(), background: { ...defaultSettings().background, type: 'color', color: '#1641A6' }, spacing: { paddingTop: 45, paddingRight: 20, paddingBottom: 45, paddingLeft: 20, marginTop: 0, marginBottom: 0 } }, data: { headline: 'Kontakt aufnehmen', text: 'Senden Sie uns Ihre Anfrage – wir melden uns.', ctaText: 'Kontakt', ctaLink: '/kontakt', secondaryCtaText: 'WhatsApp', secondaryCtaLink: 'https://wa.me/49XXXXXXXXXX' } }),
        ],
    },
    {
        key: 'kontakt_page', name: 'Kontakt', description: 'Hero + Kontakt + FAQ',
        sections: [
            createSection('HERO_PRESET', { label: 'Hero Kontakt', data: { headline: 'Kontakt', subheadline: 'Wir sind für Sie da – nehmen Sie Kontakt auf.', badgeText: 'Persönlich & direkt', primaryCtaText: 'Anrufen', primaryCtaLink: 'tel:+4902111234567', secondaryCtaText: 'WhatsApp', secondaryCtaLink: 'https://wa.me/49XXXXXXXXXX', heroImageMediaId: null, trustBadgesActive: false }, settings: { ...defaultSettings(), layout: { contentWidth: 'full', maxWidthPx: 1400, fullWidth: true }, spacing: { paddingTop: 0, paddingRight: 0, paddingBottom: 0, paddingLeft: 0, marginTop: 0, marginBottom: 0 } } }),
            createSection('CONTACT_CARDS', { label: 'Kontaktdaten' }),
            createSection('FAQ_SECTION', { label: 'FAQ', data: { headline: 'Häufige Fragen', items: [{ question: 'Wie erreiche ich Sie am besten?', answer: 'Per Telefon oder WhatsApp.' }, { question: 'Wann sind Sie erreichbar?', answer: 'Mo–Fr 8–18 Uhr.' }] } }),
        ],
    },
    {
        key: 'ueber_uns_page', name: 'Über uns', description: 'Hero + Rich Text + Feature Grid + CTA',
        sections: [
            createSection('HERO_PRESET', { label: 'Hero Über uns', data: { headline: 'Über uns', subheadline: 'Lernen Sie unser Team kennen.', badgeText: 'Erfahrene Gutachter', primaryCtaText: 'Kontakt', primaryCtaLink: '/kontakt', secondaryCtaText: 'Leistungen', secondaryCtaLink: '/leistungen', heroImageMediaId: null, trustBadgesActive: false }, settings: { ...defaultSettings(), layout: { contentWidth: 'full', maxWidthPx: 1400, fullWidth: true }, spacing: { paddingTop: 0, paddingRight: 0, paddingBottom: 0, paddingLeft: 0, marginTop: 0, marginBottom: 0 } } }),
            createSection('RICH_TEXT', { label: 'Über uns Text', data: { format: 'html', content: '<h2>Wer wir sind</h2><p>Informationen über das Unternehmen.</p>' }, settings: { ...defaultSettings(), spacing: { paddingTop: 60, paddingRight: 20, paddingBottom: 40, paddingLeft: 20, marginTop: 0, marginBottom: 0 } } }),
            createSection('FEATURE_GRID', { label: 'Team / Werte', data: { headline: 'Unsere Werte', columns: '3', items: [{ icon: '🤝', title: 'Vertrauen', text: 'Transparenz in jedem Schritt.' }, { icon: '📊', title: 'Kompetenz', text: 'Jahrelange Erfahrung.' }, { icon: '❤️', title: 'Engagement', text: 'Immer für Sie da.' }] } }),
            createSection('CTA_BANNER', { label: 'CTA', settings: { ...defaultSettings(), background: { ...defaultSettings().background, type: 'color', color: '#1641A6' } }, data: { headline: 'Jetzt anfragen', text: 'Wir freuen uns auf Ihre Nachricht.', ctaText: 'Kontakt', ctaLink: '/kontakt', secondaryCtaText: '', secondaryCtaLink: '' } }),
        ],
    },
];

export function getTemplate(key: string): PageTemplate | undefined {
    return PAGE_TEMPLATES.find(t => t.key === key);
}
