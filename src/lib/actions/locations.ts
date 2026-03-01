'use server';

import { createSupabaseAdminClient } from '@/lib/supabase/admin';
import { createSupabaseServerClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

async function requireAdmin() {
    const supabase = await createSupabaseServerClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Not authenticated');

    const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single();

    if (!profile || !['admin', 'editor'].includes(profile.role)) {
        throw new Error('Unauthorized');
    }
    return user;
}

export async function createLocation(formData: FormData) {
    await requireAdmin();
    const admin = createSupabaseAdminClient();

    const slug = (formData.get('slug') as string).replace(/^\//, '');
    const title = formData.get('title') as string;
    const description = formData.get('description') as string || '';
    const address = formData.get('address') as string || '';
    const phone = formData.get('phone') as string || '';
    const phoneLink = formData.get('phone_link') as string || '';
    const openingHours = formData.get('opening_hours') as string || '';
    const status = formData.get('status') as string || 'draft';

    const { data, error } = await admin
        .from('locations')
        .insert({ slug, title, description, address, phone, phone_link: phoneLink, opening_hours: openingHours, status })
        .select()
        .single();

    if (error) throw new Error(error.message);

    revalidatePath('/admin/standorte');
    revalidatePath('/standorte');
    redirect(`/admin/standorte/${data.id}`);
}

export async function updateLocation(formData: FormData) {
    await requireAdmin();
    const admin = createSupabaseAdminClient();

    const id = formData.get('id') as string;
    const slug = (formData.get('slug') as string).replace(/^\//, '');
    const title = formData.get('title') as string;
    const description = formData.get('description') as string || '';
    const address = formData.get('address') as string || '';
    const phone = formData.get('phone') as string || '';
    const phoneLink = formData.get('phone_link') as string || '';
    const openingHours = formData.get('opening_hours') as string || '';
    const status = formData.get('status') as string;

    const { error } = await admin
        .from('locations')
        .update({ slug, title, description, address, phone, phone_link: phoneLink, opening_hours: openingHours, status })
        .eq('id', id);

    if (error) throw new Error(error.message);

    revalidatePath('/admin/standorte');
    revalidatePath('/standorte');
    revalidatePath(`/standorte/${slug}`);
}

export async function deleteLocation(formData: FormData) {
    await requireAdmin();
    const admin = createSupabaseAdminClient();

    const id = formData.get('id') as string;

    const { error } = await admin
        .from('locations')
        .delete()
        .eq('id', id);

    if (error) throw new Error(error.message);

    revalidatePath('/admin/standorte');
    revalidatePath('/standorte');
    redirect('/admin/standorte');
}
