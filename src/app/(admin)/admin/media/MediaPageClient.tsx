'use client';

import { useState } from 'react';
import { uploadMedia, deleteMedia } from '@/lib/actions/media';

export default function MediaPageClient({ mediaItems }: { mediaItems: any[] }) {
    const [message, setMessage] = useState('');

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);
        try {
            await uploadMedia(formData);
            setMessage('Upload erfolgreich ✓');
            setTimeout(() => setMessage(''), 3000);
        } catch (err: any) {
            setMessage('Upload Fehler: ' + err.message);
        }
    };

    const handleDelete = async (id: string, path: string) => {
        if (!confirm('Medium wirklich löschen?')) return;
        const formData = new FormData();
        formData.append('id', id);
        formData.append('path', path);
        try {
            await deleteMedia(formData);
            setMessage('Gelöscht ✓');
            setTimeout(() => setMessage(''), 3000);
        } catch (err: any) {
            setMessage('Fehler: ' + err.message);
        }
    };

    return (
        <>
            {message && <div className="admin-alert admin-alert-success">{message}</div>}

            <label className="upload-area">
                <input type="file" accept="image/*" onChange={handleUpload} style={{ display: 'none' }} />
                <div style={{ fontSize: '36px', marginBottom: '10px' }}>📁</div>
                <p style={{ margin: 0 }}>Klicken oder Datei hierher ziehen</p>
                <p style={{ margin: '4px 0 0', fontSize: '12px' }}>PNG, JPG, SVG, WebP</p>
            </label>

            <div className="media-grid">
                {mediaItems.map((item) => (
                    <div key={item.id} className="media-item">
                        {item.meta?.url ? (
                            <img src={item.meta.url} alt={item.alt || item.filename} />
                        ) : (
                            <div style={{ height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--admin-bg)' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto 1rem auto' }}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                            </div>
                        )}
                        <div className="media-item-info">
                            <p style={{ fontWeight: 600 }}>{item.filename}</p>
                            <p>{(item.size_bytes / 1024).toFixed(1)} KB</p>
                            <div style={{ marginTop: '6px', display: 'flex', gap: '6px' }}>
                                {item.meta?.url && (
                                    <button
                                        className="btn-admin btn-admin-ghost"
                                        style={{ fontSize: '11px', padding: '2px 6px' }}
                                        onClick={() => navigator.clipboard.writeText(item.meta.url)}
                                    >
                                        URL kopieren
                                    </button>
                                )}
                                <button
                                    className="btn-admin btn-admin-danger"
                                    style={{ fontSize: '11px', padding: '2px 6px' }}
                                    onClick={() => handleDelete(item.id, item.path)}
                                >
                                    ✕
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                {mediaItems.length === 0 && (
                    <p style={{ color: 'var(--admin-text-muted)', padding: '40px', textAlign: 'center', gridColumn: '1 / -1' }}>
                        Noch keine Medien hochgeladen
                    </p>
                )}
            </div>
        </>
    );
}
