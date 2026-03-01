import { getAllPages } from '@/lib/queries';
import Link from 'next/link';
import { deletePage } from '@/lib/actions/pages';

export default async function AdminPagesPage() {
    let pages: any[] = [];
    try { pages = await getAllPages(); } catch { }

    return (
        <>
            <div className="admin-header">
                <h1>Seiten</h1>
                <Link href="/admin/pages/new" className="btn-admin btn-admin-primary">+ Neue Seite</Link>
            </div>

            <div className="admin-card">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Titel</th>
                            <th>Slug</th>
                            <th>Template</th>
                            <th>Status</th>
                            <th>Aktualisiert</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {pages.map((page) => (
                            <tr key={page.id}>
                                <td><strong>{page.title}</strong></td>
                                <td style={{ color: 'var(--admin-text-muted)' }}>/{page.slug}</td>
                                <td style={{ color: 'var(--admin-text-muted)', fontSize: '13px' }}>{page.template}</td>
                                <td>
                                    <span className={`badge badge-${page.status}`}>
                                        {page.status === 'published' ? 'Live' : page.status === 'draft' ? 'Entwurf' : 'Archiviert'}
                                    </span>
                                </td>
                                <td style={{ color: 'var(--admin-text-muted)', fontSize: '13px' }}>
                                    {new Date(page.updated_at).toLocaleDateString('de-DE')}
                                </td>
                                <td>
                                    <div style={{ display: 'flex', gap: '4px' }}>
                                        <Link href={`/admin/pages/${page.id}`} className="btn-admin btn-admin-ghost btn-sm">Bearbeiten</Link>
                                        <Link href={`/${page.slug}`} target="_blank" className="btn-admin btn-admin-ghost btn-sm">↗</Link>
                                        {!page.is_system && (
                                            <form action={deletePage}>
                                                <input type="hidden" name="id" value={page.id} />
                                                <button type="submit" className="btn-admin btn-admin-ghost btn-sm" style={{ color: 'var(--admin-danger)' }}>🗑</button>
                                            </form>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {pages.length === 0 && (
                            <tr><td colSpan={6} style={{ textAlign: 'center', color: 'var(--admin-text-muted)', padding: '40px' }}>Keine Seiten vorhanden</td></tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}
