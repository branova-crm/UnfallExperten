'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SeedButton() {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<string | null>(null);
    const router = useRouter();

    const handleSeed = async () => {
        if (!confirm('Seed ausführen? Bestehende Seiten, Standorte, Navigation und Globals werden importiert.')) return;

        setLoading(true);
        setResult(null);

        try {
            const res = await fetch('/api/admin/seed', { method: 'POST' });
            const data = await res.json();

            if (data.success) {
                setResult(`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginRight: '8px' }}><polyline points="20 6 9 17 4 12"></polyline></svg> Seed erfolgreich: ${data.results?.join(', ')}`);
                router.refresh();
            } else {
                setResult(`❌ Fehler: ${data.error}`);
            }
        } catch (error: any) {
            setResult(`❌ Fehler: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {result && (
                <span style={{ fontSize: '12px', color: result.startsWith('<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginRight: '8px' }}><polyline points="20 6 9 17 4 12"></polyline></svg>') ? 'var(--admin-success)' : 'var(--admin-danger)', maxWidth: '400px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {result}
                </span>
            )}
            <button
                className="btn-admin btn-admin-primary"
                onClick={handleSeed}
                disabled={loading}
            >
                {loading ? '⏳ Wird importiert...' : '🌱 Seed ausführen'}
            </button>
        </div>
    );
}
