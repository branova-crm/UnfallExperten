'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  getLinkOnlyServices,
  getServicesByCategory,
  type ConsentService,
} from '@/lib/consent/services';
import {
  CATEGORY_DESCRIPTIONS,
  CATEGORY_LABELS,
  DEFAULT_CATEGORIES,
  OPTIONAL_CATEGORIES,
  type ConsentCategories,
  type ConsentCategory,
} from '@/lib/consent/types';
import { useConsent } from './ConsentProvider';

const CONSENT_ANIM_MS = 220;

const INITIAL_EXPANDED_CATEGORIES: Record<ConsentCategory, boolean> = {
  necessary: false,
  preferences: false,
  statistics: false,
  marketing: false,
  externalMedia: false,
};

function getAnimDuration(): number {
  if (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    return 0;
  }
  return CONSENT_ANIM_MS;
}

type ConsentSettingsProps = {
  open: boolean;
  onClose: () => void;
  initialCategories: ConsentCategories;
  onSave: (categories: ConsentCategories) => void;
  onAcceptAll: () => void;
  onRejectAll: () => void;
};

function ServiceDetail({ service }: { service: ConsentService }) {
  return (
    <li className="consent-service-item">
      <div className="consent-service-item__header">
        <span className="consent-service-item__name">{service.name}</span>
        {!service.active && (
          <span className="consent-service-item__badge consent-service-item__badge--inactive">
            Derzeit nicht aktiv
          </span>
        )}
        {service.linkOnly && (
          <span className="consent-service-item__badge consent-service-item__badge--link">
            Nur Link
          </span>
        )}
      </div>
      <dl className="consent-service-item__meta">
        <div>
          <dt>Anbieter</dt>
          <dd>{service.provider}</dd>
        </div>
        <div>
          <dt>Zweck</dt>
          <dd>{service.purpose}</dd>
        </div>
        {service.cookiesOrStorage && (
          <div>
            <dt>Cookies / Speicher</dt>
            <dd>{service.cookiesOrStorage}</dd>
          </div>
        )}
        {service.duration && (
          <div>
            <dt>Speicherdauer</dt>
            <dd>{service.duration}</dd>
          </div>
        )}
        <div>
          <dt>Vor Einwilligung blockiert</dt>
          <dd>{service.blockBeforeConsent ? 'Ja' : 'Nein'}</dd>
        </div>
      </dl>
    </li>
  );
}

type ConsentCategoryPanelProps = {
  category: ConsentCategory;
  expanded: boolean;
  checked: boolean;
  locked?: boolean;
  services: ConsentService[];
  onToggleExpanded: (category: ConsentCategory) => void;
  onToggleCategory: (category: ConsentCategory) => void;
};

function serviceCountLabel(count: number) {
  if (count === 0) return 'Keine Dienste';
  if (count === 1) return '1 Dienst';
  return `${count} Dienste`;
}

function ConsentCategoryPanel({
  category,
  expanded,
  checked,
  locked = false,
  services,
  onToggleExpanded,
  onToggleCategory,
}: ConsentCategoryPanelProps) {
  const panelId = `consent-category-panel-${category}`;
  const triggerId = `consent-category-trigger-${category}`;
  const activeServiceCount = services.filter((service) => service.active).length;

  return (
    <section
      className={`consent-settings__category ${
        locked ? 'consent-settings__category--locked' : ''
      } ${expanded ? 'consent-settings__category--expanded' : ''}`}
    >
      <div className="consent-settings__category-top">
        <button
          type="button"
          id={triggerId}
          className="consent-settings__accordion-trigger"
          aria-expanded={expanded}
          aria-controls={panelId}
          onClick={() => onToggleExpanded(category)}
        >
          <span className="consent-settings__chevron" aria-hidden="true" />
          <span className="consent-settings__category-title">
            <span className="consent-settings__category-name">
              {CATEGORY_LABELS[category]}
            </span>
            <span className="consent-settings__category-count">
              {serviceCountLabel(activeServiceCount)}
            </span>
          </span>
        </button>

        {locked ? (
          <span className="consent-settings__badge">Immer aktiv</span>
        ) : (
          <label className="consent-settings__toggle-row">
            <span className="consent-settings__toggle-status">
              {checked ? 'Aktiv' : 'Inaktiv'}
            </span>
            <input
              type="checkbox"
              className="consent-settings__toggle"
              checked={checked}
              onChange={() => onToggleCategory(category)}
              aria-label={`${CATEGORY_LABELS[category]} erlauben`}
            />
          </label>
        )}
      </div>

      {expanded && (
        <div
          id={panelId}
          role="region"
          aria-labelledby={triggerId}
          className="consent-settings__category-panel"
        >
          <p className="consent-settings__category-desc">
            {CATEGORY_DESCRIPTIONS[category]}
          </p>
          <ul className="consent-service-list">
            {services.map((service) => (
              <ServiceDetail key={service.name} service={service} />
            ))}
            {services.length === 0 && (
              <li className="consent-service-item consent-service-item--empty">
                Derzeit keine Dienste in dieser Kategorie aktiv.
              </li>
            )}
          </ul>
        </div>
      )}
    </section>
  );
}

export default function ConsentSettings({
  open,
  onClose,
  initialCategories,
  onSave,
  onAcceptAll,
  onRejectAll,
}: ConsentSettingsProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const [draft, setDraft] = useState(initialCategories);
  const [expandedCategories, setExpandedCategories] = useState(
    INITIAL_EXPANDED_CATEGORIES
  );
  const [linksExpanded, setLinksExpanded] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [isBusy, setIsBusy] = useState(false);

  const displayModal = open || isExiting;
  const animPhase = isExiting ? 'exit' : 'enter';

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

  const handleClose = useCallback(() => {
    runAfterExit(onClose);
  }, [onClose, runAfterExit]);

  useEffect(() => {
    if (!displayModal) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !isBusy) handleClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [displayModal, isBusy, handleClose]);

  useEffect(() => {
    if (!displayModal || !dialogRef.current) return;
    const focusable = dialogRef.current.querySelector<HTMLElement>(
      'button, [href], input, [tabindex]:not([tabindex="-1"])'
    );
    focusable?.focus();
  }, [displayModal]);

  const handleReject = () => runAfterExit(onRejectAll);
  const handleAccept = () => runAfterExit(onAcceptAll);
  const handleSave = () => runAfterExit(() => onSave(draft));

  if (!displayModal) return null;

  const toggleCategory = (category: ConsentCategory) => {
    if (category === 'necessary' || isBusy) return;
    setDraft((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  const toggleExpanded = (category: ConsentCategory) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const linkOnlyServices = getLinkOnlyServices();

  return (
    <div
      className={`consent-overlay consent-overlay--${animPhase}`}
      onClick={handleClose}
      role="presentation"
    >
      <div
        ref={dialogRef}
        className={`consent-settings glass-panel consent-settings--${animPhase}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="consent-settings-title"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="consent-settings-title" className="consent-settings__title">
          Cookie-Einstellungen
        </h2>
        <p className="consent-settings__intro">
          Hier können Sie festlegen, welche optionalen Technologien wir verwenden dürfen.
          Unter jeder Kategorie sehen Sie die konkret eingesetzten Dienste.
        </p>

        <div className="consent-settings__categories">
          <ConsentCategoryPanel
            category="necessary"
            locked
            expanded={expandedCategories.necessary}
            checked={draft.necessary}
            services={getServicesByCategory('necessary').filter((s) => !s.linkOnly)}
            onToggleExpanded={toggleExpanded}
            onToggleCategory={toggleCategory}
          />

          {OPTIONAL_CATEGORIES.map((category) => {
            const services = getServicesByCategory(category).filter((s) => !s.linkOnly);

            return (
              <ConsentCategoryPanel
                key={category}
                category={category}
                expanded={expandedCategories[category]}
                checked={draft[category]}
                services={services}
                onToggleExpanded={toggleExpanded}
                onToggleCategory={toggleCategory}
              />
            );
          })}
        </div>

        {linkOnlyServices.length > 0 && (
          <section
            className={`consent-settings__links-info ${
              linksExpanded ? 'consent-settings__links-info--expanded' : ''
            }`}
          >
            <button
              type="button"
              className="consent-settings__accordion-trigger consent-settings__links-trigger"
              aria-expanded={linksExpanded}
              aria-controls="consent-links-panel"
              onClick={() => setLinksExpanded((prev) => !prev)}
            >
              <span className="consent-settings__chevron" aria-hidden="true" />
              <span className="consent-settings__category-title">
                <span className="consent-settings__links-title">Ausgehende Links</span>
                <span className="consent-settings__category-count">
                  {serviceCountLabel(linkOnlyServices.length)}
                </span>
              </span>
            </button>

            {linksExpanded && (
              <div id="consent-links-panel" className="consent-settings__links-panel">
                <p className="consent-settings__links-desc">
                  Die folgenden Links führen zu Drittanbietern und setzen auf unserer Website
                  keine Cookies, bevor Sie sie aktiv anklicken:
                </p>
                <ul className="consent-service-list">
                  {linkOnlyServices.map((service) => (
                    <ServiceDetail key={service.name} service={service} />
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}

        <div className="consent-settings__actions">
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
            className="consent-btn consent-btn--primary"
            onClick={handleSave}
            disabled={isBusy}
          >
            Auswahl speichern
          </button>
        </div>

        <p className="consent-settings__legal">
          Weitere Informationen finden Sie in unserer{' '}
          <Link href="/datenschutz" onClick={handleClose}>
            Datenschutzerklärung
          </Link>{' '}
          und im{' '}
          <Link href="/impressum" onClick={handleClose}>
            Impressum
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export function ConsentSettingsTrigger() {
  const { showSettings, closeSettings, consent, saveSelection, acceptAll, rejectAll } =
    useConsent();

  const settingsKey = showSettings
    ? `${consent?.timestamp ?? 'default'}-${consent?.expiresAt ?? ''}`
    : 'closed';

  return (
    <ConsentSettings
      key={settingsKey}
      open={showSettings}
      onClose={closeSettings}
      initialCategories={consent?.categories ?? DEFAULT_CATEGORIES}
      onSave={saveSelection}
      onAcceptAll={acceptAll}
      onRejectAll={rejectAll}
    />
  );
}
