/**
 * Zentrale Kontaktdaten – überall auf der Website verwenden.
 */
export const SITE_CONTACT = {
  companyName: 'KFZ Gutachter Euskirchen | UnfallExperten-NRW',
  street: 'Felix-Wankel-Straße 11',
  zipCity: '53881 Euskirchen',
  country: 'Deutschland',
  email: 'info@unfallexperten-nrw.de',
  phoneDisplay: '0160 29 29 29 1',
  phoneE164: '+491602929291',
  whatsappNumber: '491602929291',
  professionalLiabilityInsurer: 'Allianz',
} as const;

export const SITE_ADDRESS_LINES = [
  SITE_CONTACT.companyName,
  SITE_CONTACT.street,
  SITE_CONTACT.zipCity,
  SITE_CONTACT.country,
] as const;

/** Kompakte Adresse für Footer (Firmenname steht bereits in der Brand-Spalte) */
export const SITE_FOOTER_ADDRESS_LINES = [
  SITE_CONTACT.street,
  SITE_CONTACT.zipCity,
  SITE_CONTACT.country,
] as const;

export function telHref(): string {
  return `tel:${SITE_CONTACT.phoneE164}`;
}

export function whatsappHref(message?: string): string {
  const base = `https://wa.me/${SITE_CONTACT.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

/** Einzeilig für kompakte UI (Footer, Header) */
export function addressInline(): string {
  return `${SITE_CONTACT.street}, ${SITE_CONTACT.zipCity}`;
}
