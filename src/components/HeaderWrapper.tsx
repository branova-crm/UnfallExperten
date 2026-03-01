import { getNavigation, getGlobal } from '@/lib/queries';
import HeaderClient from './HeaderClient';

// Default hardcoded nav items (fallback if CMS has no data)
const DEFAULT_NAV_ITEMS = [
    { label: 'Über uns', href: '/ueber-uns', order: 0, is_enabled: true },
    { label: 'Leistungen', href: '/leistungen', order: 1, is_enabled: true },
    { label: 'Standorte', href: '/standorte', order: 2, is_enabled: true },
    { label: 'Bewertungen', href: '/#reviews', order: 3, is_enabled: true },
    { label: 'FAQ', href: '/#faq', order: 4, is_enabled: true },
    { label: 'Kontakt', href: '/kontakt', order: 5, is_enabled: true },
];

const DEFAULT_CTA = { label: 'Rückruf anfordern', href: '/kontakt' };

const DEFAULT_CONTACT = {
    phone: '0211 – 123 456 7',
    phoneLink: '+4902111234567',
    email: 'info@unfallexperten-nrw.de',
};

const DEFAULT_FOOTER_DATA = {
    socialFacebook: 'https://www.facebook.com/',
    socialInstagram: 'https://www.instagram.com/',
};

export default async function HeaderWrapper() {
    let navItems = DEFAULT_NAV_ITEMS;
    let cta = DEFAULT_CTA;
    let contact = DEFAULT_CONTACT;
    let social = DEFAULT_FOOTER_DATA;

    try {
        const nav = await getNavigation('main');
        if (nav?.items && Array.isArray(nav.items) && nav.items.length > 0) {
            navItems = nav.items.filter((item: any) => item.is_enabled).sort((a: any, b: any) => a.order - b.order);
        }
        if (nav?.cta?.label) {
            cta = nav.cta;
        }
    } catch { }

    try {
        const contactData = await getGlobal('contact');
        if (contactData?.phone) contact = contactData;
    } catch { }

    try {
        const footerData = await getGlobal('footer');
        if (footerData?.socialFacebook) social = footerData;
    } catch { }

    return (
        <HeaderClient
            navItems={navItems}
            cta={cta}
            contact={contact}
            social={social}
        />
    );
}
