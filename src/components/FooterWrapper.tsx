import FooterClient from './FooterClient';

const CONTACT = {
    phone: '0211 – 123 456 7',
    phoneLink: '+4902111234567',
    email: 'info@unfallexperten-nrw.de',
    address: 'Musterstraße 1, 40210 Düsseldorf',
    openingHours: 'Jederzeit erreichbar',
};

const FOOTER = {
    description: 'Ihr unabhängiger KFZ-Sachverständiger in Nordrhein-Westfalen. Kostenlose Unfallgutachten für Geschädigte – schnell, professionell und NRW-weit.',
    copyright: 'UnfallExperten NRW – Alle Rechte vorbehalten.',
    socialFacebook: 'https://www.facebook.com/',
    socialInstagram: 'https://www.instagram.com/',
};

export default function FooterWrapper() {
    return <FooterClient contact={CONTACT} footer={FOOTER} />;
}
