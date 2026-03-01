import { getPageById } from '@/lib/queries';
import { updatePageMeta } from '@/lib/actions/pages';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import PageEditor from './PageEditor';

type Props = { params: Promise<{ id: string }> };

export default async function AdminEditPage({ params }: Props) {
    const { id } = await params;
    const page = await getPageById(id);
    if (!page) notFound();

    return (
        <>
            <div className="admin-header">
                <h1>Seite bearbeiten: {page.title}</h1>
                <div style={{ display: 'flex', gap: '8px' }}>
                    <Link href={`/${page.slug}`} target="_blank" className="btn-admin btn-admin-ghost">↗ Ansehen</Link>
                    <Link href="/admin/pages" className="btn-admin btn-admin-ghost">← Zurück</Link>
                </div>
            </div>

            {/* Meta Box */}
            <div className="admin-card" style={{ marginBottom: '16px' }}>
                <form action={updatePageMeta}>
                    <input type="hidden" name="id" value={page.id} />
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                        <div className="fg"><label>Titel</label><input type="text" name="title" defaultValue={page.title} required /></div>
                        <div className="fg"><label>Slug</label><input type="text" name="slug" defaultValue={page.slug} required /></div>
                        <div className="fg"><label>Template</label><input type="text" name="template" defaultValue={page.template} /></div>
                        <div className="fg"><label>Status</label>
                            <select name="status" defaultValue={page.status}>
                                <option value="draft">Entwurf</option>
                                <option value="published">Veröffentlicht</option>
                            </select>
                        </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                        <div className="fg"><label>SEO Titel</label><input type="text" name="seo_title" defaultValue={page.seo?.title || ''} /></div>
                        <div className="fg"><label>SEO Beschreibung</label><input type="text" name="seo_description" defaultValue={page.seo?.description || ''} /></div>
                    </div>
                    <button type="submit" className="btn-admin btn-admin-ghost btn-sm">Meta speichern</button>
                </form>
            </div>

            <PageEditor page={page} />
        </>
    );
}
