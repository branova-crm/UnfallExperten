import { SITE_CONTACT } from '@/lib/site-contact';

export type MapsLocation = {
  title: string;
  address: string;
  embedSrc: string;
};

/** Hauptsitz / Standard-Standort auf der Startseite */
export const EUSKIRCHEN_MAPS: MapsLocation = {
  title: 'UnfallExperten NRW – Standort Euskirchen',
  address: `${SITE_CONTACT.street}, ${SITE_CONTACT.zipCity}`,
  embedSrc:
    'https://maps.google.com/maps?q=Felix-Wankel-Stra%C3%9Fe+11,+53881+Euskirchen&hl=de&z=15&output=embed',
};
