'use server';

import { createSupabaseAdminClient } from '@/lib/supabase/admin';
import { createSupabaseServerClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

async function requireAdmin() {
    const supabase = await createSupabaseServerClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Not authenticated');
    const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).single();
    if (!profile || !['admin', 'editor'].includes(profile.role)) throw new Error('Unauthorized');
    return user;
}

export async function createPage(formData: FormData) {
    await requireAdmin();
    const admin = createSupabaseAdminClient();
    const slug = (formData.get('slug') as string || '').replace(/^\//, '');
    const title = formData.get('title') as string || 'Neue Seite';
    const template = formData.get('template') as string || 'default';
    const status = formData.get('status') as string || 'draft';
    const sectionsJson = formData.get('sections') as string || '[]';

    let sections: any[] = [];
    try { sections = JSON.parse(sectionsJson); } catch { }

    const { data, error } = await admin
        .from('pages')
        .insert({ slug, title, template, status, draft_layout: { sections } })
        .select()
        .single();

    if (error) throw new Error(error.message);
    revalidatePath('/admin/pages');
    revalidatePath('/');
    redirect(`/admin/pages/${data.id}`);
}

export async function updatePageMeta(formData: FormData) {
    await requireAdmin();
    const admin = createSupabaseAdminClient();
    const id = formData.get('id') as string;
    if (!id) throw new Error('Missing page id');

    const slug = (formData.get('slug') as string || '').replace(/^\//, '');
    const title = formData.get('title') as string || '';
    const template = formData.get('template') as string || 'default';
    const status = formData.get('status') as string || 'draft';
    const seoTitle = formData.get('seo_title') as string || '';
    const seoDescription = formData.get('seo_description') as string || '';

    const seo = { title: seoTitle, description: seoDescription };

    const { error } = await admin
        .from('pages')
        .update({ slug, title, template, status, seo })
        .eq('id', id);

    if (error) throw new Error(error.message);

    revalidatePath('/admin/pages');
    revalidatePath(`/admin/pages/${id}`);
    revalidatePath(`/${slug}`);
    revalidatePath('/');
}

export async function saveSections(pageId: string, sections: any[]): Promise<{ success: boolean; error?: string }> {
    try {
        await requireAdmin();
        const admin = createSupabaseAdminClient();
        const { error } = await admin
            .from('pages')
            .update({ draft_layout: { sections } })
            .eq('id', pageId);

        if (error) {
            console.error('saveSections error:', error);
            return { success: false, error: error.message };
        }

        revalidatePath('/admin/pages');
        revalidatePath(`/admin/pages/${pageId}`);
        return { success: true };
    } catch (e: any) {
        console.error('saveSections exception:', e);
        return { success: false, error: e.message || 'Unbekannter Fehler' };
    }
}

export async function publishPage(pageId: string): Promise<{ success: boolean; error?: string }> {
    try {
        await requireAdmin();
        const admin = createSupabaseAdminClient();
        const { data: page } = await admin.from('pages').select('draft_layout, slug').eq('id', pageId).single();
        if (!page) return { success: false, error: 'Page not found' };

        const { error } = await admin
            .from('pages')
            .update({ published_layout: page.draft_layout, status: 'published' })
            .eq('id', pageId);

        if (error) {
            console.error('publishPage error:', error);
            return { success: false, error: error.message };
        }

        revalidatePath('/admin/pages');
        revalidatePath(`/${page.slug}`);
        revalidatePath('/');
        return { success: true };
    } catch (e: any) {
        console.error('publishPage exception:', e);
        return { success: false, error: e.message || 'Unbekannter Fehler' };
    }
}

export async function duplicatePage(pageId: string) {
    await requireAdmin();
    const admin = createSupabaseAdminClient();
    const { data: page } = await admin.from('pages').select('*').eq('id', pageId).single();
    if (!page) throw new Error('Page not found');
    const { data, error } = await admin
        .from('pages')
        .insert({ slug: `${page.slug}-copy-${Date.now().toString(36)}`, title: `${page.title} (Kopie)`, template: page.template, status: 'draft', draft_layout: page.draft_layout, seo: page.seo })
        .select()
        .single();
    if (error) throw new Error(error.message);
    revalidatePath('/admin/pages');
    redirect(`/admin/pages/${data.id}`);
}

export async function deletePage(formData: FormData) {
    await requireAdmin();
    const admin = createSupabaseAdminClient();
    const id = formData.get('id') as string;
    const { error } = await admin.from('pages').delete().eq('id', id);
    if (error) throw new Error(error.message);
    revalidatePath('/admin/pages');
    revalidatePath('/');
    redirect('/admin/pages');
}

// Alias for backward compat
export const updatePage = updatePageMeta;
