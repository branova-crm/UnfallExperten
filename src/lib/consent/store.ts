import { clearRevokedCategories, getRevokedCategories } from './cookies';
import { getDefaultConsentState, readConsent, writeConsent } from './storage';
import {
  ALL_ACCEPTED_CATEGORIES,
  DEFAULT_CATEGORIES,
  type ConsentCategories,
  type ConsentState,
} from './types';

export function getConsent(): ConsentState | null {
  return readConsent();
}

export function setConsent(categories: ConsentCategories): ConsentState {
  const previous = readConsent()?.categories ?? DEFAULT_CATEGORIES;
  const next = { ...categories, necessary: true };
  const revoked = getRevokedCategories(previous, next);
  const state = writeConsent(next);
  if (revoked.length > 0) {
    clearRevokedCategories(revoked);
  }
  return state;
}

export function acceptAll(): ConsentState {
  return setConsent(ALL_ACCEPTED_CATEGORIES);
}

export function rejectAll(): ConsentState {
  const previous = readConsent()?.categories ?? DEFAULT_CATEGORIES;
  const revoked = getRevokedCategories(previous, DEFAULT_CATEGORIES);
  const state = writeConsent(DEFAULT_CATEGORIES);
  if (revoked.length > 0) {
    clearRevokedCategories(revoked);
  }
  return state;
}

export function hasConsent(category: keyof ConsentCategories): boolean {
  const state = readConsent();
  if (!state) return category === 'necessary';
  return state.categories[category] === true;
}

export function needsConsentBanner(): boolean {
  return readConsent() === null;
}

export { getDefaultConsentState };
