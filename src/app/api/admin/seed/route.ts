import { createSupabaseServerClient } from '@/lib/supabase/server';
import { createSupabaseAdminClient } from '@/lib/supabase/admin';
import { NextResponse } from 'next/server';

export async function POST() {
    // Verify admin role
    const supabase = await createSupabaseServerClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single();

    if (!profile || profile.role !== 'admin') {
        return NextResponse.json({ error: 'Admin role required' }, { status: 403 });
    }

    const admin = createSupabaseAdminClient();
    const results: string[] = [];

    try {
        // ── 1. Pages ──
        const pages = [
            { slug: '', title: 'Startseite', status: 'published', template: 'homepage', is_system: true, seo: { title: 'Ihre Gutachter-Experten | Unabhängige Sachverständige', description: 'Unabhängige Gutachter-Experten für Unfall- und Schadensgutachten.' } },
            { slug: 'leistungen', title: 'Leistungen', status: 'published', template: 'leistungen', is_system: true, seo: { title: 'Unsere Leistungen – Kfz-Gutachter NRW | UnfallExperten', description: 'Unfall- und Schadensgutachten, Kostenvoranschläge, Wertgutachten – alle Leistungen auf einen Blick.' } },
            { slug: 'kontakt', title: 'Kontakt', status: 'published', template: 'kontakt', is_system: true, seo: { title: 'Kontakt – UnfallExperten NRW', description: 'Kontaktieren Sie uns für ein kostenloses Unfallgutachten.' } },
            { slug: 'standorte', title: 'Standorte', status: 'published', template: 'standorte', is_system: true, seo: { title: 'Unsere Standorte – Kfz-Gutachter NRW-weit | UnfallExperten', description: 'Finden Sie Ihren Kfz-Gutachter vor Ort in NRW.' } },
            { slug: 'ueber-uns', title: 'Über uns', status: 'published', template: 'ueber-uns', is_system: true, seo: { title: 'Über uns – UnfallExperten NRW', description: 'Erfahren Sie mehr über unser Team und unsere Mission.' } },
            { slug: 'kaskoschaden', title: 'Kaskoschäden', status: 'published', template: 'leistung-detail', is_system: true, seo: { title: 'Kaskoschaden – Gutachten & Hilfe | UnfallExperten', description: 'Professionelle Hilfe bei Kaskoschäden.' } },
            { slug: 'kostenlose-dienstleistung', title: 'Kostenlose Dienstleistung', status: 'published', template: 'leistung-detail', is_system: true, seo: { title: 'Kostenlose Dienstleistung – UnfallExperten NRW', description: 'Alle Leistungen kostenlos für Unfallgeschädigte.' } },
            { slug: 'unfall-schadensgutachten', title: 'Unfall- & Schadensgutachten', status: 'published', template: 'leistung-detail', is_system: true, seo: { title: 'Unfall- & Schadensgutachten | UnfallExperten NRW', description: 'Professionelle Unfall- und Schadensgutachten.' } },
            { slug: 'kostenvoranschlag', title: 'Kostenvoranschlag', status: 'published', template: 'leistung-detail', is_system: true, seo: { title: 'Kostenvoranschlag – UnfallExperten NRW', description: 'Schneller Kostenvoranschlag für Kfz-Schäden.' } },
            { slug: 'reparaturbestaetigung', title: 'Reparaturbestätigung', status: 'published', template: 'leistung-detail', is_system: true, seo: { title: 'Reparaturbestätigung – UnfallExperten NRW', description: 'Dokumentation und Bestätigung Ihrer Reparatur.' } },
            { slug: 'wertgutachten', title: 'Wertgutachten', status: 'published', template: 'leistung-detail', is_system: true, seo: { title: 'Wertgutachten – UnfallExperten NRW', description: 'Professionelle Fahrzeugbewertung.' } },
        ];

        const { data: insertedPages, error: pagesError } = await admin
            .from('pages')
            .upsert(pages, { onConflict: 'slug' })
            .select();

        if (pagesError) throw pagesError;
        results.push(`✅ ${insertedPages?.length || 0} Seiten erstellt/aktualisiert`);

        // Map slugs to IDs
        const pageMap: Record<string, string> = {};
        insertedPages?.forEach((p: any) => { pageMap[p.slug] = p.id; });

        // ── 2. Homepage Sections ──
        const homeId = pageMap[''];
        if (homeId) {
            // Check if sections already exist
            const { data: existingSections } = await admin
                .from('page_sections')
                .select('id')
                .eq('page_id', homeId);

            if (!existingSections || existingSections.length === 0) {
                const homeSections = [
                    {
                        page_id: homeId, type: 'hero', order: 0, is_enabled: true, data: {
                            headline: 'Unfall in NRW?\nWir regeln alles schnell & stressfrei.',
                            subheadline: 'Für Geschädigte kostenlos – die gegnerische Versicherung übernimmt in der Regel sämtliche Kosten. Kein Risiko, kein Stress.',
                            badgeText: 'Zertifizierter Sachverständiger',
                        }
                    },
                    { page_id: homeId, type: 'process', order: 1, is_enabled: true, data: {} },
                    { page_id: homeId, type: 'expertise', order: 2, is_enabled: true, data: { label: 'Unsere Expertise', headline: 'Ihre Vorteile im Überblick' } },
                    { page_id: homeId, type: 'regional', order: 3, is_enabled: true, data: { label: 'Immer in Ihrer Nähe', headline: 'NRW-weit für Sie da' } },
                    { page_id: homeId, type: 'timeline', order: 4, is_enabled: true, data: { label: 'Schritt für Schritt', headline: 'Unverschuldet verunfallt? So funktioniert es' } },
                    { page_id: homeId, type: 'reviews', order: 5, is_enabled: true, data: { label: 'Kundenstimmen', headline: 'Was unsere Kunden sagen' } },
                    { page_id: homeId, type: 'barchart', order: 6, is_enabled: true, data: {} },
                    { page_id: homeId, type: 'cta', order: 7, is_enabled: true, data: { headline: 'Kompletter Service aus einer Hand' } },
                    { page_id: homeId, type: 'services', order: 8, is_enabled: true, data: { label: 'Unser Angebot', headline: 'Unsere Leistungen' } },
                    { page_id: homeId, type: 'vehicles', order: 9, is_enabled: true, data: { label: 'Fahrzeugtypen', headline: 'Unsere Expertise – Umfassende Fahrzeugtypen' } },
                    { page_id: homeId, type: 'faq', order: 10, is_enabled: true, data: {} },
                    { page_id: homeId, type: 'contact', order: 11, is_enabled: true, data: { label: 'Kontakt', headline: 'Wir rufen Sie gerne zurück!' } },
                    { page_id: homeId, type: 'map', order: 12, is_enabled: true, data: {} },
                ];
                await admin.from('page_sections').insert(homeSections);
                results.push('✅ 13 Homepage-Sections erstellt');
            } else {
                results.push(`ℹ️ Homepage-Sections existieren bereits (${existingSections.length})`);
            }
        }

        // ── 3. Navigation ──
        const navItems = [
            { label: 'Über uns', href: '/ueber-uns', order: 0, is_enabled: true },
            { label: 'Leistungen', href: '/leistungen', order: 1, is_enabled: true },
            { label: 'Standorte', href: '/standorte', order: 2, is_enabled: true },
            { label: 'Bewertungen', href: '/#reviews', order: 3, is_enabled: true },
            { label: 'FAQ', href: '/#faq', order: 4, is_enabled: true },
            { label: 'Kontakt', href: '/kontakt', order: 5, is_enabled: true },
        ];
        const navCta = { label: 'Rückruf anfordern', href: '/kontakt' };

        const { data: existingNav } = await admin.from('navigation').select('id').eq('key', 'main').single();
        if (existingNav) {
            await admin.from('navigation').update({ items: navItems, cta: navCta }).eq('key', 'main');
        } else {
            await admin.from('navigation').insert({ key: 'main', items: navItems, cta: navCta });
        }
        results.push('✅ Navigation erstellt/aktualisiert');

        // ── 4. Globals ──
        const globals = [
            { key: 'contact', data: { phone: '0211 – 123 456 7', phoneLink: '+4902111234567', email: 'info@unfallexperten-nrw.de', address: 'Musterstraße 1, 40210 Düsseldorf', openingHours: 'Jederzeit erreichbar', whatsapp: '4902111234567', whatsappText: 'Hallo, ich brauche Hilfe nach einem Unfall.' } },
            { key: 'footer', data: { description: 'Ihr unabhängiger Kfz-Sachverständiger in Nordrhein-Westfalen. Kostenlose Unfallgutachten für Geschädigte – schnell, professionell und NRW-weit.', copyright: 'UnfallExperten NRW – Alle Rechte vorbehalten.', socialFacebook: 'https://www.facebook.com/', socialInstagram: 'https://www.instagram.com/' } },
            { key: 'branding', data: { companyName: 'UnfallExperten NRW', logoUrl: '/images/logo.png', primaryColor: '#1641A6' } },
        ];

        for (const g of globals) {
            const { data: existing } = await admin.from('globals').select('id').eq('key', g.key).single();
            if (existing) {
                await admin.from('globals').update({ data: g.data }).eq('key', g.key);
            } else {
                await admin.from('globals').insert(g);
            }
        }
        results.push('✅ Globale Inhalte (contact, footer, branding) erstellt/aktualisiert');

        // ── 5. Locations (Standorte) ──
        const locations = [
            { slug: 'koeln-ehrenfeld', title: 'Kfz-Gutachter Köln Ehrenfeld', description: 'Schnelle Schadensbegutachtung in Köln und Umgebung. 24/7-Service vor Ort.', status: 'published' },
            { slug: 'koeln-porz', title: 'Kfz-Gutachter Köln Porz', description: 'Ihr Sachverständiger für den Kölner Süden und rechtsrheinische Gebiete.', status: 'published' },
            { slug: 'duesseldorf-innenstadt', title: 'Kfz-Gutachter Düsseldorf Innenstadt', description: 'Zentrale Unfallhilfe in der Landeshauptstadt – wir sind schnell zur Stelle.', status: 'published' },
            { slug: 'dortmund', title: 'Kfz-Gutachter Dortmund', description: 'Kompetente Gutachten im Ruhrgebiet. Kostenlos für Unfallgeschädigte.', status: 'published' },
            { slug: 'essen', title: 'Kfz-Gutachter Essen', description: 'Zuverlässige Begutachtung und Schadenskalkulation im Zentrum des Ruhrgebiets.', status: 'published' },
            { slug: 'wuppertal', title: 'Kfz-Gutachter Wuppertal', description: 'Bergisches Land abgedeckt – wir kommen auch zu Ihnen nach Hause.', status: 'published' },
            { slug: 'koeln-nippes', title: 'Kfz-Gutachter Köln Nippes', description: 'Sachverständiger im Kölner Norden.', status: 'published' },
            { slug: 'koeln-lindenthal', title: 'Kfz-Gutachter Köln Lindenthal', description: 'Gutachter im Kölner Westen.', status: 'published' },
            { slug: 'koeln-chorweiler', title: 'Kfz-Gutachter Köln Chorweiler', description: 'Kfz-Sachverständiger im Kölner Norden.', status: 'published' },
        ];

        const { data: insertedLocations, error: locError } = await admin
            .from('locations')
            .upsert(locations, { onConflict: 'slug' })
            .select();

        if (locError) throw locError;
        results.push(`✅ ${insertedLocations?.length || 0} Standorte erstellt/aktualisiert`);

        return NextResponse.json({
            success: true,
            results,
            summary: {
                pages: insertedPages?.length || 0,
                locations: insertedLocations?.length || 0,
            },
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message, results }, { status: 500 });
    }
}
