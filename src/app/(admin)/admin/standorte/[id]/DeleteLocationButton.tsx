'use client';

import { deleteLocation } from '@/lib/actions/locations';

export default function DeleteLocationButton({ locationId }: { locationId: string }) {
    return (
        <div className="admin-card" style={{ borderColor: 'var(--admin-danger)' }}>
            <h3 style={{ color: 'var(--admin-danger)' }}>Gefahrenzone</h3>
            <p style={{ color: 'var(--admin-text-muted)', fontSize: '13px', marginBottom: '12px' }}>
                Diese Aktion kann nicht rückgängig gemacht werden.
            </p>
            <form action={deleteLocation}>
                <input type="hidden" name="id" value={locationId} />
                <button
                    type="submit"
                    className="btn-admin btn-admin-danger"
                    onClick={(e) => {
                        if (!confirm('Standort wirklich löschen?')) e.preventDefault();
                    }}
                >
                    Standort löschen
                </button>
            </form>
        </div>
    );
}
