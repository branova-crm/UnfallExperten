export const CONSENT_CHANGE_EVENT = 'ue-consent-change';

export function subscribeToConsent(onStoreChange: () => void): () => void {
  if (typeof window === 'undefined') {
    return () => undefined;
  }

  window.addEventListener(CONSENT_CHANGE_EVENT, onStoreChange);
  window.addEventListener('storage', onStoreChange);

  return () => {
    window.removeEventListener(CONSENT_CHANGE_EVENT, onStoreChange);
    window.removeEventListener('storage', onStoreChange);
  };
}

export function notifyConsentChange(): void {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
  }
}
