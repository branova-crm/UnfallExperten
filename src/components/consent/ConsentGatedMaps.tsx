'use client';

import Link from 'next/link';
import { EUSKIRCHEN_MAPS, type MapsLocation } from '@/lib/consent/maps-locations';
import { useConsent } from './ConsentProvider';

type ConsentGatedMapsProps = Partial<MapsLocation>;

function MapsPinIcon() {
  return (
    <svg
      className="consent-maps-placeholder__icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"
      />
    </svg>
  );
}

export default function ConsentGatedMaps({
  title = EUSKIRCHEN_MAPS.title,
  address = EUSKIRCHEN_MAPS.address,
  embedSrc = EUSKIRCHEN_MAPS.embedSrc,
}: ConsentGatedMapsProps) {
  const { hasCategory, isReady, saveSelection, consent, openSettings } = useConsent();
  const allowed = isReady && hasCategory('externalMedia');

  const loadExternal = () => {
    const categories = consent?.categories ?? {
      necessary: true,
      preferences: false,
      statistics: false,
      marketing: false,
      externalMedia: false,
    };
    saveSelection({ ...categories, externalMedia: true });
  };

  return (
    <section className="maps-section">
      <div className="maps-container">
        {allowed ? (
          <iframe
            src={embedSrc}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={title}
          />
        ) : (
          <div className="consent-maps-placeholder" role="region" aria-label="Google Maps Platzhalter">
            <div className="consent-maps-placeholder__card">
              <MapsPinIcon />
              <div className="consent-maps-placeholder__header">
                <p className="consent-maps-placeholder__title">Google Maps</p>
                <p className="consent-maps-placeholder__address">{address}</p>
              </div>

              <div className="consent-maps-placeholder__notice">
                <p className="consent-maps-placeholder__text">
                  Zur Anzeige der interaktiven Karte ist Ihre{' '}
                  <strong>aktive Einwilligung zur Kategorie „Externe Medien“</strong>{' '}
                  erforderlich.
                </p>
                <p className="consent-maps-placeholder__text">
                  Mit Klick auf den Button unten willigen Sie ein, dass Google Maps
                  geladen wird. Dabei können{' '}
                  <strong>Cookies und vergleichbare Technologien</strong> (z. B. auf
                  Domains von Google) gespeichert werden und{' '}
                  <strong>personenbezogene Daten</strong> – insbesondere Ihre IP-Adresse –
                  an Google Ireland Limited bzw. verbundene Unternehmen übermittelt
                  werden.
                </p>
              </div>

              <button
                type="button"
                className="consent-btn consent-btn--choice consent-maps-placeholder__button"
                onClick={loadExternal}
              >
                Karte laden und Einwilligung erteilen
              </button>

              <p className="consent-maps-placeholder__meta">
                Einwilligung jederzeit widerrufbar über{' '}
                <button
                  type="button"
                  className="consent-maps-placeholder__link"
                  onClick={openSettings}
                >
                  Cookie-Einstellungen
                </button>
                . Details in der{' '}
                <Link href="/datenschutz" className="consent-maps-placeholder__link-anchor">
                  Datenschutzerklärung
                </Link>
                .
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
