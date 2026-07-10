import FooterClient from './FooterClient';
import { SITE_CONTACT, SITE_FOOTER_ADDRESS_LINES, addressInline } from '@/lib/site-contact';

const CONTACT = {
    phone: SITE_CONTACT.phoneDisplay,
    phoneLink: SITE_CONTACT.phoneE164,
    email: SITE_CONTACT.email,
    address: addressInline(),
    addressLines: [...SITE_FOOTER_ADDRESS_LINES],
    openingHours: 'Jederzeit erreichbar',
};

const FOOTER = {
    description: 'Ihr unabhängiger KFZ-Sachverständiger in Nordrhein-Westfalen. Kostenlose Unfallgutachten für Geschädigte – schnell, professionell und NRW-weit.',
    copyright: 'UnfallExperten NRW – Alle Rechte vorbehalten.',
    socialFacebook: 'https://www.facebook.com/',
    socialInstagram: 'https://www.instagram.com/unfallexperten.nrw/',
};

export default function FooterWrapper() {
    return <FooterClient contact={CONTACT} footer={FOOTER} />;
}
