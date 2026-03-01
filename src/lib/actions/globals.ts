'use server';

import { createSupabaseAdminClient } from '@/lib/supabase/admin';
import { createSupabaseServerClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

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

export async function updateGlobal(formData: FormData) {
    await requireAdmin();
    const admin = createSupabaseAdminClient();

    const key = formData.get('key') as string;
    const dataStr = formData.get('data') as string;

    let data = {};
    try {
        data = JSON.parse(dataStr);
    } catch {
        throw new Error('Invalid JSON');
    }

    // Upsert
    const { data: existing } = await admin
        .from('globals')
        .select('id')
        .eq('key', key)
        .single();

    if (existing) {
        await admin
            .from('globals')
            .update({ data })
            .eq('key', key);
    } else {
        await admin
            .from('globals')
            .insert({ key, data });
    }

    revalidatePath('/admin/globals');
    revalidatePath('/');
}
