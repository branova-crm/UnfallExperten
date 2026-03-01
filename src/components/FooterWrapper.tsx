import { getGlobal } from '@/lib/queries';
import FooterClient from './FooterClient';

const DEFAULT_CONTACT = {
    phone: '0211 – 123 456 7',
    phoneLink: '+4902111234567',
    email: 'info@unfallexperten-nrw.de',
    address: 'Musterstraße 1, 40210 Düsseldorf',
    openingHours: 'Jederzeit erreichbar',
};

const DEFAULT_FOOTER = {
    description: 'Ihr unabhängiger Kfz-Sachverständiger in Nordrhein-Westfalen. Kostenlose Unfallgutachten für Geschädigte – schnell, professionell und NRW-weit.',
    copyright: 'UnfallExperten NRW – Alle Rechte vorbehalten.',
    socialFacebook: 'https://www.facebook.com/',
    socialInstagram: 'https://www.instagram.com/',
};

export default async function FooterWrapper() {
    let contact = DEFAULT_CONTACT;
    let footer = DEFAULT_FOOTER;

    try {
        const contactData = await getGlobal('contact');
        if (contactData?.phone) contact = { ...DEFAULT_CONTACT, ...contactData };
    } catch { }

    try {
        const footerData = await getGlobal('footer');
        if (footerData?.description) footer = { ...DEFAULT_FOOTER, ...footerData };
    } catch { }

    return <FooterClient contact={contact} footer={footer} />;
}
