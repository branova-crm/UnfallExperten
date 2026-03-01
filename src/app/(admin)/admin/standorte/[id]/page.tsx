import { getLocationById } from '@/lib/queries';
import { updateLocation } from '@/lib/actions/locations';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import DeleteLocationButton from './DeleteLocationButton';

type Props = {
    params: Promise<{ id: string }>;
};

export default async function AdminEditStandort({ params }: Props) {
    const { id } = await params;
    const location = await getLocationById(id);

    if (!location) notFound();

    return (
        <>
            <div className="admin-header">
                <h1>Standort bearbeiten: {location.title}</h1>
                <div style={{ display: 'flex', gap: '8px' }}>
                    <Link href={`/standorte/${location.slug}`} target="_blank" className="btn-admin btn-admin-ghost">
                        ↗ Ansehen
                    </Link>
                    <Link href="/admin/standorte" className="btn-admin btn-admin-ghost">← Zurück</Link>
                </div>
            </div>

            <div className="admin-card" style={{ marginBottom: '20px' }}>
                <form action={updateLocation} className="admin-form">
                    <input type="hidden" name="id" value={location.id} />

                    <div className="admin-form-row">
                        <div className="admin-form-group">
                            <label htmlFor="title">Titel</label>
                            <input id="title" name="title" type="text" defaultValue={location.title} required />
                        </div>
                        <div className="admin-form-group">
                            <label htmlFor="slug">Slug</label>
                            <input id="slug" name="slug" type="text" defaultValue={location.slug} required />
                        </div>
                    </div>

                    <div className="admin-form-group">
                        <label htmlFor="description">Beschreibung</label>
                        <textarea id="description" name="description" defaultValue={location.description || ''} />
                    </div>

                    <div className="admin-form-row">
                        <div className="admin-form-group">
                            <label htmlFor="address">Adresse</label>
                            <input id="address" name="address" type="text" defaultValue={location.address || ''} />
                        </div>
                        <div className="admin-form-group">
                            <label htmlFor="phone">Telefon</label>
                            <input id="phone" name="phone" type="text" defaultValue={location.phone || ''} />
                        </div>
                    </div>

                    <div className="admin-form-row">
                        <div className="admin-form-group">
                            <label htmlFor="phone_link">Telefon Link</label>
                            <input id="phone_link" name="phone_link" type="text" defaultValue={location.phone_link || ''} />
                        </div>
                        <div className="admin-form-group">
                            <label htmlFor="opening_hours">Öffnungszeiten</label>
                            <input id="opening_hours" name="opening_hours" type="text" defaultValue={location.opening_hours || ''} />
                        </div>
                    </div>

                    <div className="admin-form-group">
                        <label htmlFor="status">Status</label>
                        <select id="status" name="status" defaultValue={location.status}>
                            <option value="draft">Entwurf</option>
                            <option value="published">Veröffentlicht</option>
                            <option value="archived">Archiviert</option>
                        </select>
                    </div>

                    <div className="admin-form-actions">
                        <button type="submit" className="btn-admin btn-admin-primary">Speichern</button>
                    </div>
                </form>
            </div>

            {/* Danger Zone */}
            <DeleteLocationButton locationId={location.id} />
        </>
    );
}
