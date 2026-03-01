import { getAllLocations } from '@/lib/queries';
import Link from 'next/link';

export default async function AdminStandortePage() {
    let locations: any[] = [];
    try {
        locations = await getAllLocations();
    } catch { }

    return (
        <>
            <div className="admin-header">
                <h1>Standorte</h1>
                <Link href="/admin/standorte/new" className="btn-admin btn-admin-primary">
                    + Neuer Standort
                </Link>
            </div>

            <div className="admin-card">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Titel</th>
                            <th>Slug</th>
                            <th>Beschreibung</th>
                            <th>Status</th>
                            <th>Aktualisiert</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {locations.map((loc) => (
                            <tr key={loc.id}>
                                <td><strong>{loc.title}</strong></td>
                                <td style={{ color: 'var(--admin-text-muted)' }}>/standorte/{loc.slug}</td>
                                <td style={{ color: 'var(--admin-text-muted)', fontSize: '13px', maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                    {loc.description || '—'}
                                </td>
                                <td>
                                    <span className={`badge badge-${loc.status}`}>
                                        {loc.status === 'published' ? 'Live' : loc.status === 'draft' ? 'Entwurf' : 'Archiviert'}
                                    </span>
                                </td>
                                <td style={{ color: 'var(--admin-text-muted)', fontSize: '13px' }}>
                                    {new Date(loc.updated_at).toLocaleDateString('de-DE')}
                                </td>
                                <td>
                                    <div style={{ display: 'flex', gap: '6px' }}>
                                        <Link href={`/admin/standorte/${loc.id}`} className="btn-admin btn-admin-ghost" style={{ fontSize: '12px', padding: '4px 10px' }}>
                                            Bearbeiten
                                        </Link>
                                        <Link href={`/standorte/${loc.slug}`} target="_blank" className="btn-admin btn-admin-ghost" style={{ fontSize: '12px', padding: '4px 10px' }}>
                                            ↗
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {locations.length === 0 && (
                            <tr>
                                <td colSpan={6} style={{ textAlign: 'center', color: 'var(--admin-text-muted)', padding: '40px' }}>
                                    Keine Standorte vorhanden. Führe den Seed aus oder lege manuell einen Standort an.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}
