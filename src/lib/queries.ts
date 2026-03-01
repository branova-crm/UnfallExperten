import { createSupabaseServerClient } from '@/lib/supabase/server';
import { createSupabaseAdminClient } from '@/lib/supabase/admin';

// ---- PAGES ----

export async function getPublishedPage(slug: string) {
    const supabase = await createSupabaseServerClient();
    const { data: page } = await supabase
        .from('pages')
        .select('*')
        .eq('slug', slug)
        .eq('status', 'published')
        .single();

    if (!page) return null;

    const { data: sections } = await supabase
        .from('page_sections')
        .select('*')
        .eq('page_id', page.id)
        .eq('is_enabled', true)
        .order('order', { ascending: true });

    return { ...page, sections: sections || [] };
}

export async function getDraftPage(slug: string) {
    const admin = createSupabaseAdminClient();
    const { data: page } = await admin
        .from('pages')
        .select('*')
        .eq('slug', slug)
        .single();

    if (!page) return null;

    const { data: sections } = await admin
        .from('page_sections')
        .select('*')
        .eq('page_id', page.id)
        .order('order', { ascending: true });

    return { ...page, sections: sections || [] };
}

export async function getAllPages() {
    const admin = createSupabaseAdminClient();
    const { data } = await admin
        .from('pages')
        .select('*')
        .order('updated_at', { ascending: false });
    return data || [];
}

export async function getPageById(id: string) {
    const admin = createSupabaseAdminClient();
    const { data: page } = await admin
        .from('pages')
        .select('*')
        .eq('id', id)
        .single();

    if (!page) return null;

    const { data: sections } = await admin
        .from('page_sections')
        .select('*')
        .eq('page_id', page.id)
        .order('order', { ascending: true });

    return { ...page, sections: sections || [] };
}

// Helper to get a specific section's data for a page by section type
export async function getPageSectionData(slug: string, sectionType: string) {
    const supabase = await createSupabaseServerClient();
    const { data: page } = await supabase
        .from('pages')
        .select('id')
        .eq('slug', slug)
        .eq('status', 'published')
        .single();

    if (!page) return null;

    const { data: section } = await supabase
        .from('page_sections')
        .select('data')
        .eq('page_id', page.id)
        .eq('type', sectionType)
        .eq('is_enabled', true)
        .single();

    return section?.data || null;
}

// ---- NAVIGATION ----

export async function getNavigation(key: string = 'main') {
    const supabase = await createSupabaseServerClient();
    const { data } = await supabase
        .from('navigation')
        .select('*')
        .eq('key', key)
        .single();
    return data;
}

// ---- GLOBALS ----

export async function getGlobal(key: string) {
    const supabase = await createSupabaseServerClient();
    const { data } = await supabase
        .from('globals')
        .select('*')
        .eq('key', key)
        .single();
    return data?.data || null;
}

export async function getAllGlobals() {
    const admin = createSupabaseAdminClient();
    const { data } = await admin
        .from('globals')
        .select('*')
        .order('key', { ascending: true });
    return data || [];
}

// ---- MEDIA ----

export async function getAllMedia() {
    const admin = createSupabaseAdminClient();
    const { data } = await admin
        .from('media')
        .select('*')
        .order('created_at', { ascending: false });
    return data || [];
}

// ---- LOCATIONS ----

export async function getAllLocations() {
    const admin = createSupabaseAdminClient();
    const { data } = await admin
        .from('locations')
        .select('*')
        .order('title', { ascending: true });
    return data || [];
}

export async function getPublishedLocations() {
    const supabase = await createSupabaseServerClient();
    const { data } = await supabase
        .from('locations')
        .select('*')
        .eq('status', 'published')
        .order('title', { ascending: true });
    return data || [];
}

export async function getLocationBySlug(slug: string) {
    const supabase = await createSupabaseServerClient();
    const { data } = await supabase
        .from('locations')
        .select('*')
        .eq('slug', slug)
        .eq('status', 'published')
        .single();
    return data;
}

export async function getLocationById(id: string) {
    const admin = createSupabaseAdminClient();
    const { data } = await admin
        .from('locations')
        .select('*')
        .eq('id', id)
        .single();
    return data;
}

