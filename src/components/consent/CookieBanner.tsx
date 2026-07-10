'use client';

import Link from 'next/link';
import { useCallback, useState } from 'react';
import { useConsent } from './ConsentProvider';
import { ConsentSettingsTrigger } from './ConsentSettings';

const CONSENT_ANIM_MS = 220;

function getAnimDuration(): number {
  if (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    return 0;
  }
  return CONSENT_ANIM_MS;
}

export default function CookieBanner() {
  const { showBanner, showSettings, isReady, acceptAll, rejectAll, openSettings } =
    useConsent();
  const [isExiting, setIsExiting] = useState(false);
  const [isBusy, setIsBusy] = useState(false);

  const displayBanner =
    isReady && ((showBanner && !showSettings) || isExiting);

  const runAfterExit = useCallback((action: () => void) => {
    if (isBusy) return;
    setIsBusy(true);
    setIsExiting(true);

    window.setTimeout(() => {
      action();
      setIsExiting(false);
      setIsBusy(false);
    }, getAnimDuration());
  }, [isBusy]);

  const handleReject = () => runAfterExit(rejectAll);
  const handleAccept = () => runAfterExit(acceptAll);
  const handleOpenSettings = () => runAfterExit(openSettings);

  if (!isReady) {
    return <ConsentSettingsTrigger />;
  }

  return (
    <>
      {displayBanner && (
        <div
          className={`consent-banner consent-banner--${isExiting ? 'exit' : 'enter'}`}
          role="region"
          aria-label="Cookie-Einwilligung"
        >
          <div className="consent-banner__inner glass-panel">
            <div className="consent-banner__content">
              <p className="consent-banner__text">
                Wir verwenden optionale Technologien (z. B. eingebettete Karten), um
                unsere Website nutzerfreundlicher zu gestalten. Diese werden erst nach
                Ihrer aktiven Einwilligung geladen. Notwendige Speicherungen dienen dem
                Betrieb der Website. Details in der{' '}
                <Link href="/datenschutz">Datenschutzerklärung</Link> und im{' '}
                <Link href="/impressum">Impressum</Link>.
              </p>
              <div className="consent-banner__actions consent-banner__actions--equal">
                <button
                  type="button"
                  className="consent-btn consent-btn--choice"
                  onClick={handleReject}
                  disabled={isBusy}
                >
                  Alle ablehnen
                </button>
                <button
                  type="button"
                  className="consent-btn consent-btn--choice"
                  onClick={handleAccept}
                  disabled={isBusy}
                >
                  Alle akzeptieren
                </button>
                <button
                  type="button"
                  className="consent-btn consent-btn--settings"
                  onClick={handleOpenSettings}
                  disabled={isBusy}
                >
                  Einstellungen
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <ConsentSettingsTrigger />
    </>
  );
}
