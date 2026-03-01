'use server';

import { createSupabaseAdminClient } from '@/lib/supabase/admin';
import { createSupabaseServerClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

async function requireAdmin() {
    const supabase = await createSupabaseServerClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Not authenticated');
    return user;
}

export async function uploadMedia(formData: FormData) {
    await requireAdmin();
    const admin = createSupabaseAdminClient();

    const file = formData.get('file') as File;
    if (!file) throw new Error('No file');

    const ext = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${ext}`;
    const path = `uploads/${fileName}`;

    const { error: uploadError } = await admin.storage
        .from('media')
        .upload(path, file);

    if (uploadError) throw new Error(uploadError.message);

    const { data: urlData } = admin.storage.from('media').getPublicUrl(path);

    await admin.from('media').insert({
        bucket: 'media',
        path,
        alt: file.name,
        filename: file.name,
        content_type: file.type,
        size_bytes: file.size,
        meta: { url: urlData.publicUrl },
    });

    revalidatePath('/admin/media');
}

export async function deleteMedia(formData: FormData) {
    await requireAdmin();
    const admin = createSupabaseAdminClient();

    const id = formData.get('id') as string;
    const path = formData.get('path') as string;

    await admin.storage.from('media').remove([path]);
    await admin.from('media').delete().eq('id', id);

    revalidatePath('/admin/media');
}
