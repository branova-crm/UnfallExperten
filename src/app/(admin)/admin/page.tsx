import { getAllPages, getAllLocations } from '@/lib/queries';
import Link from 'next/link';
import SeedButton from './SeedButton';

export default async function AdminDashboard() {
    let pages: any[] = [];
    let locations: any[] = [];
    try {
        pages = await getAllPages();
    } catch { }
    try {
        locations = await getAllLocations();
    } catch { }

    const published = pages.filter(p => p.status === 'published').length;
    const drafts = pages.filter(p => p.status === 'draft').length;

    return (
        <>
            <div className="admin-header">
                <h1>Dashboard</h1>
                <SeedButton />
            </div>

            <div className="admin-stats">
                <div className="admin-card">
                    <h3>Seiten gesamt</h3>
                    <div className="stat">{pages.length}</div>
                </div>
                <div className="admin-card">
                    <h3>Veröffentlicht</h3>
                    <div className="stat" style={{ color: 'var(--admin-success)' }}>{published}</div>
                </div>
                <div className="admin-card">
                    <h3>Entwürfe</h3>
                    <div className="stat" style={{ color: 'var(--admin-warning)' }}>{drafts}</div>
                </div>
                <div className="admin-card">
                    <h3>Standorte</h3>
                    <div className="stat">{locations.length}</div>
                </div>
            </div>

            <div className="admin-card" style={{ marginBottom: '20px' }}>
                <h3>Zuletzt bearbeitete Seiten</h3>
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Titel</th>
                            <th>Slug</th>
                            <th>Status</th>
                            <th>Aktualisiert</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {pages.slice(0, 5).map((page) => (
                            <tr key={page.id}>
                                <td><strong>{page.title}</strong></td>
                                <td style={{ color: 'var(--admin-text-muted)' }}>/{page.slug}</td>
                                <td>
                                    <span className={`badge badge-${page.status}`}>
                                        {page.status === 'published' ? 'Live' : page.status === 'draft' ? 'Entwurf' : 'Archiviert'}
                                    </span>
                                </td>
                                <td style={{ color: 'var(--admin-text-muted)', fontSize: '13px' }}>
                                    {new Date(page.updated_at).toLocaleDateString('de-DE')}
                                </td>
                                <td>
                                    <Link href={`/admin/pages/${page.id}`} className="btn-admin btn-admin-ghost" style={{ fontSize: '12px', padding: '4px 10px' }}>
                                        Bearbeiten
                                    </Link>
                                </td>
                            </tr>
                        ))}
                        {pages.length === 0 && (
                            <tr>
                                <td colSpan={5} style={{ textAlign: 'center', color: 'var(--admin-text-muted)', padding: '30px' }}>
                                    Noch keine Seiten. Klicke oben auf <strong>„Seed ausführen"</strong> um alle bestehenden Seiten zu importieren.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}
