import { notifyConsentChange } from './events';
import {
  CONSENT_MAX_AGE_MS,
  CONSENT_STORAGE_KEY,
  CONSENT_VERSION,
  DEFAULT_CATEGORIES,
  type ConsentCategories,
  type ConsentState,
} from './types';

function isValidCategories(categories: unknown): categories is ConsentCategories {
  if (!categories || typeof categories !== 'object') return false;
  const c = categories as Record<string, unknown>;
  return (
    c.necessary === true &&
    typeof c.preferences === 'boolean' &&
    typeof c.statistics === 'boolean' &&
    typeof c.marketing === 'boolean' &&
    typeof c.externalMedia === 'boolean'
  );
}

function isExpired(state: ConsentState): boolean {
  if (state.expiresAt) {
    return new Date(state.expiresAt).getTime() <= Date.now();
  }
  const grantedAt = new Date(state.timestamp).getTime();
  return Number.isNaN(grantedAt) || Date.now() - grantedAt > CONSENT_MAX_AGE_MS;
}

function clearStoredConsent(options?: { notify?: boolean }): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(CONSENT_STORAGE_KEY);
    if (options?.notify !== false) {
      notifyConsentChange();
    }
  }
}

export function readConsent(): ConsentState | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentState;
    if (parsed.version !== CONSENT_VERSION) {
      clearStoredConsent({ notify: false });
      return null;
    }
    if (!isValidCategories(parsed.categories)) {
      clearStoredConsent({ notify: false });
      return null;
    }
    if (!parsed.timestamp) {
      clearStoredConsent({ notify: false });
      return null;
    }
    if (isExpired(parsed)) {
      clearStoredConsent({ notify: false });
      return null;
    }
    return parsed;
  } catch {
    clearStoredConsent({ notify: false });
    return null;
  }
}

export function writeConsent(categories: ConsentCategories): ConsentState {
  const now = Date.now();
  const state: ConsentState = {
    version: CONSENT_VERSION,
    timestamp: new Date(now).toISOString(),
    expiresAt: new Date(now + CONSENT_MAX_AGE_MS).toISOString(),
    categories: { ...categories, necessary: true },
  };
  if (typeof window !== 'undefined') {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(state));
    notifyConsentChange();
  }
  return state;
}

export function hasStoredConsent(): boolean {
  return readConsent() !== null;
}

export function getDefaultConsentState(): ConsentState {
  const now = Date.now();
  return {
    version: CONSENT_VERSION,
    timestamp: new Date(now).toISOString(),
    expiresAt: new Date(now + CONSENT_MAX_AGE_MS).toISOString(),
    categories: { ...DEFAULT_CATEGORIES },
  };
}
