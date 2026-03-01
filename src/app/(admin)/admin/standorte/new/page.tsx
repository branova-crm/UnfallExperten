import { createLocation } from '@/lib/actions/locations';
import Link from 'next/link';

export default function AdminNewStandort() {
    return (
        <>
            <div className="admin-header">
                <h1>Neuer Standort</h1>
                <Link href="/admin/standorte" className="btn-admin btn-admin-ghost">← Zurück</Link>
            </div>

            <div className="admin-card">
                <form action={createLocation} className="admin-form">
                    <div className="admin-form-row">
                        <div className="admin-form-group">
                            <label htmlFor="title">Titel</label>
                            <input id="title" name="title" type="text" required placeholder="z.B. Kfz-Gutachter Köln Mitte" />
                        </div>
                        <div className="admin-form-group">
                            <label htmlFor="slug">Slug</label>
                            <input id="slug" name="slug" type="text" required placeholder="z.B. koeln-mitte" />
                        </div>
                    </div>

                    <div className="admin-form-group">
                        <label htmlFor="description">Beschreibung</label>
                        <textarea id="description" name="description" placeholder="Kurzbeschreibung für die Standortübersicht" />
                    </div>

                    <div className="admin-form-row">
                        <div className="admin-form-group">
                            <label htmlFor="address">Adresse</label>
                            <input id="address" name="address" type="text" placeholder="Straße, PLZ Ort" />
                        </div>
                        <div className="admin-form-group">
                            <label htmlFor="phone">Telefon</label>
                            <input id="phone" name="phone" type="text" placeholder="0211 – 123 456 7" />
                        </div>
                    </div>

                    <div className="admin-form-row">
                        <div className="admin-form-group">
                            <label htmlFor="phone_link">Telefon Link</label>
                            <input id="phone_link" name="phone_link" type="text" placeholder="+4902111234567" />
                        </div>
                        <div className="admin-form-group">
                            <label htmlFor="opening_hours">Öffnungszeiten</label>
                            <input id="opening_hours" name="opening_hours" type="text" placeholder="Jederzeit erreichbar" />
                        </div>
                    </div>

                    <div className="admin-form-group">
                        <label htmlFor="status">Status</label>
                        <select id="status" name="status">
                            <option value="draft">Entwurf</option>
                            <option value="published">Veröffentlicht</option>
                        </select>
                    </div>

                    <div className="admin-form-actions">
                        <button type="submit" className="btn-admin btn-admin-primary">Standort erstellen</button>
                        <Link href="/admin/standorte" className="btn-admin btn-admin-ghost">Abbrechen</Link>
                    </div>
                </form>
            </div>
        </>
    );
}
