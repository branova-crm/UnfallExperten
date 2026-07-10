export const CONSENT_VERSION = 1;
export const CONSENT_STORAGE_KEY = 'ue_consent_v1';
/** Gültigkeit der Einwilligung: 6 Monate (ca. 183 Tage) */
export const CONSENT_MAX_AGE_MS = 183 * 24 * 60 * 60 * 1000;

export type ConsentCategory =
  | 'necessary'
  | 'preferences'
  | 'statistics'
  | 'marketing'
  | 'externalMedia';

export type ConsentCategories = Record<ConsentCategory, boolean>;

export type ConsentState = {
  version: number;
  timestamp: string;
  expiresAt: string;
  categories: ConsentCategories;
};

export const DEFAULT_CATEGORIES: ConsentCategories = {
  necessary: true,
  preferences: false,
  statistics: false,
  marketing: false,
  externalMedia: false,
};

export const ALL_ACCEPTED_CATEGORIES: ConsentCategories = {
  necessary: true,
  preferences: true,
  statistics: true,
  marketing: true,
  externalMedia: true,
};

export const CATEGORY_LABELS: Record<ConsentCategory, string> = {
  necessary: 'Notwendig',
  preferences: 'Präferenzen',
  statistics: 'Statistik',
  marketing: 'Marketing',
  externalMedia: 'Externe Medien',
};

export const CATEGORY_DESCRIPTIONS: Record<ConsentCategory, string> = {
  necessary:
    'Technisch erforderlich für den Betrieb der Website, z. B. Consent-Speicherung und Sicherheit.',
  preferences:
    'Speichert Ihre Einstellungen und Präferenzen für ein komfortableres Nutzungserlebnis.',
  statistics:
    'Hilft uns zu verstehen, wie Besucher die Website nutzen (z. B. Bewertungs-Widgets).',
  marketing:
    'Wird für Werbung, Retargeting und Marketingzwecke verwendet.',
  externalMedia:
    'Ermöglicht eingebettete Inhalte von Drittanbietern wie Google Maps.',
};

export const OPTIONAL_CATEGORIES: ConsentCategory[] = [
  'preferences',
  'statistics',
  'marketing',
  'externalMedia',
];
