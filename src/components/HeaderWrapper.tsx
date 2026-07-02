import HeaderClient from './HeaderClient';

const NAV_ITEMS = [
    { label: 'Leistungen', href: '/leistungen', order: 0, is_enabled: true },
    { label: 'Referenzen', href: '/referenzen', order: 1, is_enabled: true },
    { label: 'Über uns', href: '/ueber-uns', order: 2, is_enabled: true },
    { label: 'Kontakt', href: '/kontakt', order: 3, is_enabled: true },
    { label: 'Ratgeber', href: '/ratgeber', order: 4, is_enabled: true },
];

const CTA = { label: 'Gutachten anfordern', href: '/kontakt' };

const CONTACT = {
    phone: '+49 176 84568618',
    phoneLink: '+4917684568618',
    email: 'info@unfallexperten-nrw.de',
};

const SOCIAL = {
    socialFacebook: 'https://www.facebook.com/',
    socialInstagram: 'https://www.instagram.com/',
};

export default function HeaderWrapper() {
    return (
        <HeaderClient
            navItems={NAV_ITEMS}
            cta={CTA}
            contact={CONTACT}
            social={SOCIAL}
        />
    );
}
