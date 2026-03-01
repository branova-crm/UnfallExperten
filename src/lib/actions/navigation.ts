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

export async function updateNavigation(formData: FormData) {
    await requireAdmin();
    const admin = createSupabaseAdminClient();

    const key = formData.get('key') as string || 'main';
    const itemsStr = formData.get('items') as string;
    const ctaStr = formData.get('cta') as string;

    let items = [];
    let cta = {};
    try {
        items = JSON.parse(itemsStr);
        if (ctaStr) cta = JSON.parse(ctaStr);
    } catch {
        throw new Error('Invalid JSON');
    }

    // Upsert: insert or update
    const { data: existing } = await admin
        .from('navigation')
        .select('id')
        .eq('key', key)
        .single();

    if (existing) {
        await admin
            .from('navigation')
            .update({ items, cta })
            .eq('key', key);
    } else {
        await admin
            .from('navigation')
            .insert({ key, items, cta });
    }

    revalidatePath('/admin/navigation');
    revalidatePath('/');
}
