// Seed Script für UnfallExperten CMS
// Ausführen: npx tsx supabase/seed.ts
// Benötigt: NEXT_PUBLIC_SUPABASE_URL und SUPABASE_SERVICE_ROLE_KEY in .env

import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';

config(); // Load .env

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function seed() {
    console.log('🌱 Starte CMS Seed...\n');

    // ── 1. Pages ──
    console.log('📄 Erstelle Seiten...');
    const pages = [
        { slug: '', title: 'Startseite', status: 'published', template: 'homepage', is_system: true },
        { slug: 'leistungen', title: 'Leistungen', status: 'published', template: 'leistungen', is_system: true },
        { slug: 'kontakt', title: 'Kontakt', status: 'published', template: 'kontakt', is_system: true },
        { slug: 'standorte', title: 'Standorte', status: 'published', template: 'standorte', is_system: true },
        { slug: 'standorte/koeln-ehrenfeld', title: 'Kfz-Gutachter Köln Ehrenfeld', status: 'published', template: 'standort', is_system: true },
        { slug: 'ueber-uns', title: 'Über uns', status: 'published', template: 'ueber-uns', is_system: true },
        { slug: 'kaskoschaden', title: 'Kaskoschäden', status: 'published', template: 'leistung-detail', is_system: true },
        { slug: 'kostenlose-dienstleistung', title: 'Kostenlose Dienstleistung', status: 'published', template: 'leistung-detail', is_system: true },
        { slug: 'unfall-schadensgutachten', title: 'Unfall- & Schadensgutachten', status: 'published', template: 'leistung-detail', is_system: true },
        { slug: 'kostenvoranschlag', title: 'Kostenvoranschlag', status: 'published', template: 'leistung-detail', is_system: true },
        { slug: 'reparaturbestaetigung', title: 'Reparaturbestätigung', status: 'published', template: 'leistung-detail', is_system: true },
        { slug: 'wertgutachten', title: 'Wertgutachten', status: 'published', template: 'leistung-detail', is_system: true },
    ];

    const { data: insertedPages, error: pagesError } = await supabase
        .from('pages')
        .upsert(pages, { onConflict: 'slug' })
        .select();

    if (pagesError) {
        console.error('❌ Fehler bei Seiten:', pagesError.message);
        return;
    }
    console.log(`  ✅ ${insertedPages?.length} Seiten erstellt\n`);

    // Map slugs to IDs
    const pageMap: Record<string, string> = {};
    insertedPages?.forEach(p => { pageMap[p.slug] = p.id; });

    // ── 2. Sections für Startseite ──
    console.log('🧩 Erstelle Homepage-Sections...');
    const homeId = pageMap[''];
    if (homeId) {
        const homeSections = [
            {
                page_id: homeId, type: 'hero', order: 0, is_enabled: true, data: {
                    headline: 'Unfall in NRW?\nWir regeln alles schnell & stressfrei.',
                    subheadline: 'Für Geschädigte kostenlos – die gegnerische Versicherung übernimmt in der Regel sämtliche Kosten. Kein Risiko, kein Stress.',
                    badgeText: 'Zertifizierter Sachverständiger',
                    trustItems: ['Keine Kosten für Geschädigte', 'Einsatz in ganz NRW – sofort verfügbar', 'Gutachten in 24 Stunden'],
                }
            },
            { page_id: homeId, type: 'process', order: 1, is_enabled: true, data: {} },
            {
                page_id: homeId, type: 'expertise', order: 2, is_enabled: true, data: {
                    label: 'Unsere Expertise',
                    headline: 'Ihre Vorteile im Überblick',
                    text: 'Innerhalb von 24 Stunden erstellen wir Ihr Gutachten – inklusive Schadenhöhe, Wertminderung und Wiederbeschaffungswert. So erhalten Sie die maximale Entschädigung, die Ihnen zusteht.',
                }
            },
            {
                page_id: homeId, type: 'regional', order: 3, is_enabled: true, data: {
                    label: 'Immer in Ihrer Nähe',
                    headline: 'NRW-weit für Sie da',
                    text: 'Egal ob Großstadt oder ländlicher Raum – unsere Sachverständigen sind überall in Nordrhein-Westfalen schnell vor Ort. Meist innerhalb weniger Stunden nach Ihrem Anruf.',
                }
            },
            {
                page_id: homeId, type: 'timeline', order: 4, is_enabled: true, data: {
                    label: 'Schritt für Schritt',
                    headline: 'Unverschuldet verunfallt? So funktioniert es',
                    subtitle: 'Von der ersten Kontaktaufnahme bis zur Auszahlung – wir begleiten Sie durch den gesamten Prozess.',
                }
            },
            {
                page_id: homeId, type: 'reviews', order: 5, is_enabled: true, data: {
                    label: 'Kundenstimmen',
                    headline: 'Was unsere Kunden sagen',
                    subtitle: 'Zufriedene Kunden vertrauen auf UnfallExperten NRW. Lesen Sie echte Erfahrungsberichte.',
                }
            },
            { page_id: homeId, type: 'barchart', order: 6, is_enabled: true, data: {} },
            {
                page_id: homeId, type: 'cta', order: 7, is_enabled: true, data: {
                    headline: 'Kompletter Service aus einer Hand',
                    text: 'Vom Abschleppdienst über das Gutachten bis zum Mietwagen & Werkstatt – wir koordinieren alles für Sie. Kostenlos für Geschädigte.',
                }
            },
            {
                page_id: homeId, type: 'services', order: 8, is_enabled: true, data: {
                    label: 'Unser Angebot',
                    headline: 'Unsere Leistungen',
                    subtitle: 'Von der Schadensdokumentation bis zur Wertermittlung – wir bieten Ihnen das volle Spektrum an Kfz-Sachverständigenleistungen.',
                }
            },
            {
                page_id: homeId, type: 'vehicles', order: 9, is_enabled: true, data: {
                    label: 'Fahrzeugtypen',
                    headline: 'Unsere Expertise – Umfassende Fahrzeugtypen',
                    subtitle: 'Egal welches Fahrzeug – unsere Sachverständigen sind für alle Typen qualifiziert.',
                }
            },
            { page_id: homeId, type: 'faq', order: 10, is_enabled: true, data: {} },
            {
                page_id: homeId, type: 'contact', order: 11, is_enabled: true, data: {
                    label: 'Kontakt',
                    headline: 'Wir rufen Sie gerne zurück!',
                    text: 'Schnelle Hilfe nach dem Unfall ist entscheidend. Hinterlassen Sie Ihre Nummer und wir melden uns innerhalb von 15 Minuten – kostenlos und unverbindlich.',
                }
            },
            { page_id: homeId, type: 'map', order: 12, is_enabled: true, data: {} },
        ];

        // Delete existing sections for homepage first
        await supabase.from('page_sections').delete().eq('page_id', homeId);

        const { error: sectionsError } = await supabase
            .from('page_sections')
            .insert(homeSections);

        if (sectionsError) console.error('  ❌ Homepage-Sections:', sectionsError.message);
        else console.log(`  ✅ ${homeSections.length} Homepage-Sections erstellt\n`);
    }

    // ── 3. Navigation ──
    console.log('🧭 Erstelle Navigation...');
    const navItems = [
        { label: 'Über uns', href: '/ueber-uns', order: 0, is_enabled: true },
        { label: 'Leistungen', href: '/leistungen', order: 1, is_enabled: true },
        { label: 'Standorte', href: '/standorte', order: 2, is_enabled: true },
        { label: 'Bewertungen', href: '/#reviews', order: 3, is_enabled: true },
        { label: 'FAQ', href: '/#faq', order: 4, is_enabled: true },
        { label: 'Kontakt', href: '/kontakt', order: 5, is_enabled: true },
    ];

    const navCta = { label: 'Rückruf anfordern', href: '/kontakt' };

    const { data: existingNav } = await supabase
        .from('navigation')
        .select('id')
        .eq('key', 'main')
        .single();

    if (existingNav) {
        await supabase.from('navigation').update({ items: navItems, cta: navCta }).eq('key', 'main');
    } else {
        await supabase.from('navigation').insert({ key: 'main', items: navItems, cta: navCta });
    }
    console.log('  ✅ Navigation erstellt\n');

    // ── 4. Globals ──
    console.log('⚙️  Erstelle globale Daten...');

    const globals = [
        {
            key: 'contact',
            data: {
                phone: '0211 – 123 456 7',
                phoneLink: '+4902111234567',
                email: 'info@unfallexperten-nrw.de',
                address: 'Musterstraße 1, 40210 Düsseldorf',
                openingHours: 'Jederzeit erreichbar',
                whatsapp: '4902111234567',
                whatsappText: 'Hallo, ich brauche Hilfe nach einem Unfall.',
            },
        },
        {
            key: 'footer',
            data: {
                description: 'Ihr unabhängiger Kfz-Sachverständiger in Nordrhein-Westfalen. Kostenlose Unfallgutachten für Geschädigte – schnell, professionell und NRW-weit.',
                copyright: 'UnfallExperten NRW – Alle Rechte vorbehalten.',
                socialFacebook: 'https://www.facebook.com/',
                socialInstagram: 'https://www.instagram.com/',
            },
        },
        {
            key: 'branding',
            data: {
                companyName: 'UnfallExperten NRW',
                logoUrl: '/images/logo.png',
                primaryColor: '#1641A6',
            },
        },
    ];

    for (const g of globals) {
        const { data: existing } = await supabase
            .from('globals')
            .select('id')
            .eq('key', g.key)
            .single();

        if (existing) {
            await supabase.from('globals').update({ data: g.data }).eq('key', g.key);
        } else {
            await supabase.from('globals').insert(g);
        }
    }
    console.log('  ✅ Globals erstellt\n');

    console.log('🎉 Seed abgeschlossen!');
    console.log('\n📝 Nächste Schritte:');
    console.log('  1. Admin-User in Supabase anlegen (Auth > Users > Add User)');
    console.log('  2. Rolle setzen: UPDATE public.profiles SET role = \'admin\' WHERE id = \'<user-uuid>\';');
    console.log('  3. /admin/login besuchen und einloggen');
}

seed().catch(console.error);
