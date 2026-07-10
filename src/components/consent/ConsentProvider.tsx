'use client';

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from 'react';
import { subscribeToConsent } from '@/lib/consent/events';
import {
  acceptAll as storeAcceptAll,
  getConsent,
  needsConsentBanner,
  rejectAll as storeRejectAll,
  setConsent as storeSetConsent,
} from '@/lib/consent/store';
import {
  CONSENT_STORAGE_KEY,
  type ConsentCategories,
  type ConsentCategory,
  type ConsentState,
} from '@/lib/consent/types';

type ConsentContextValue = {
  consent: ConsentState | null;
  showBanner: boolean;
  showSettings: boolean;
  showStickyCta: boolean;
  isReady: boolean;
  hasCategory: (category: ConsentCategory) => boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  saveSelection: (categories: ConsentCategories) => void;
  openSettings: () => void;
  closeSettings: () => void;
};

const ConsentContext = createContext<ConsentContextValue | null>(null);

let lastConsentRaw: string | null | undefined;
let lastConsentSnapshot: ConsentState | null = null;

function getClientConsent(): ConsentState | null {
  if (typeof window === 'undefined') return null;

  const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
  if (raw === lastConsentRaw) {
    return lastConsentSnapshot;
  }

  lastConsentRaw = raw;
  lastConsentSnapshot = getConsent();

  const normalizedRaw = localStorage.getItem(CONSENT_STORAGE_KEY);
  if (normalizedRaw !== raw) {
    lastConsentRaw = normalizedRaw;
  }

  return lastConsentSnapshot;
}

function getServerConsent(): ConsentState | null {
  return null;
}

function getClientReady(): boolean {
  return true;
}

function getServerReady(): boolean {
  return false;
}

function hadAnyOptional(categories: ConsentCategories | undefined): boolean {
  if (!categories) return false;
  return (
    categories.preferences ||
    categories.statistics ||
    categories.marketing ||
    categories.externalMedia
  );
}

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [showSettings, setShowSettings] = useState(false);

  const consent = useSyncExternalStore(
    subscribeToConsent,
    getClientConsent,
    getServerConsent
  );

  const isReady = useSyncExternalStore(
    subscribeToConsent,
    getClientReady,
    getServerReady
  );

  const showBanner = isReady && needsConsentBanner();
  const showStickyCta = isReady && !showBanner && !showSettings;

  const applyConsent = useCallback(
    (state: ConsentState, previous: ConsentState | null) => {
      const revokedAllOptional =
        hadAnyOptional(previous?.categories) &&
        !hadAnyOptional(state.categories);

      setShowSettings(false);

      if (revokedAllOptional) {
        window.location.reload();
      }
    },
    []
  );

  const acceptAll = useCallback(() => {
    const previous = getConsent();
    const state = storeAcceptAll();
    applyConsent(state, previous);
  }, [applyConsent]);

  const rejectAll = useCallback(() => {
    const previous = getConsent();
    const state = storeRejectAll();
    applyConsent(state, previous);
  }, [applyConsent]);

  const saveSelection = useCallback(
    (categories: ConsentCategories) => {
      const previous = getConsent();
      const state = storeSetConsent(categories);
      applyConsent(state, previous);
    },
    [applyConsent]
  );

  const hasCategory = useCallback(
    (category: ConsentCategory) => {
      if (!isReady) return category === 'necessary';
      if (consent) return consent.categories[category];
      return category === 'necessary';
    },
    [consent, isReady]
  );

  const value = useMemo<ConsentContextValue>(
    () => ({
      consent,
      showBanner,
      showSettings,
      showStickyCta,
      isReady,
      hasCategory,
      acceptAll,
      rejectAll,
      saveSelection,
      openSettings: () => setShowSettings(true),
      closeSettings: () => setShowSettings(false),
    }),
    [
      consent,
      showBanner,
      showSettings,
      showStickyCta,
      isReady,
      hasCategory,
      acceptAll,
      rejectAll,
      saveSelection,
    ]
  );

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>;
}

export function useConsent() {
  const ctx = useContext(ConsentContext);
  if (!ctx) {
    throw new Error('useConsent must be used within ConsentProvider');
  }
  return ctx;
}

export function useConsentOptional() {
  return useContext(ConsentContext);
}
