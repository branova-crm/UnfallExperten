'use client';

import { useState } from 'react';
import { updateNavigation } from '@/lib/actions/navigation';

type NavItem = {
    label: string;
    href: string;
    order: number;
    is_enabled: boolean;
};

type CtaData = {
    label: string;
    href: string;
};

export default function NavigationEditorClient({ navigation }: { navigation: any }) {
    const [items, setItems] = useState<NavItem[]>(navigation?.items || []);
    const [cta, setCta] = useState<CtaData>(navigation?.cta || { label: 'Rückruf anfordern', href: '/kontakt' });
    const [message, setMessage] = useState('');

    const addItem = () => {
        setItems([...items, { label: '', href: '/', order: items.length, is_enabled: true }]);
    };

    const updateItem = (index: number, field: keyof NavItem, value: any) => {
        const updated = [...items];
        (updated[index] as any)[field] = value;
        setItems(updated);
    };

    const removeItem = (index: number) => {
        setItems(items.filter((_, i) => i !== index));
    };

    const moveItem = (index: number, direction: 'up' | 'down') => {
        const newIndex = direction === 'up' ? index - 1 : index + 1;
        if (newIndex < 0 || newIndex >= items.length) return;
        const updated = [...items];
        [updated[index], updated[newIndex]] = [updated[newIndex], updated[index]];
        updated.forEach((item, i) => item.order = i);
        setItems(updated);
    };

    const handleSave = async () => {
        const formData = new FormData();
        formData.append('key', 'main');
        formData.append('items', JSON.stringify(items));
        formData.append('cta', JSON.stringify(cta));
        try {
            await updateNavigation(formData);
            setMessage('Navigation gespeichert ✓');
            setTimeout(() => setMessage(''), 3000);
        } catch (e: any) {
            setMessage('Fehler: ' + e.message);
        }
    };

    return (
        <>
            {message && <div className="admin-alert admin-alert-success">{message}</div>}

            <div className="admin-card" style={{ marginBottom: '20px' }}>
                <h3 style={{ marginBottom: '16px' }}>Hauptnavigation</h3>

                {items.map((item, index) => (
                    <div key={index} className="nav-item-row">
                        <span className="drag-handle" title="Sortieren">☰</span>
                        <input
                            type="text"
                            value={item.label}
                            onChange={(e) => updateItem(index, 'label', e.target.value)}
                            placeholder="Label"
                            style={{ maxWidth: '150px' }}
                        />
                        <input
                            type="text"
                            value={item.href}
                            onChange={(e) => updateItem(index, 'href', e.target.value)}
                            placeholder="/pfad"
                            style={{ maxWidth: '200px' }}
                        />
                        <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--admin-text-muted)' }}>
                            <input
                                type="checkbox"
                                checked={item.is_enabled}
                                onChange={(e) => updateItem(index, 'is_enabled', e.target.checked)}
                            />
                            Aktiv
                        </label>
                        <button
                            type="button"
                            className="btn-admin btn-admin-ghost"
                            onClick={() => moveItem(index, 'up')}
                            disabled={index === 0}
                            style={{ padding: '4px 8px', fontSize: '12px' }}
                        >▲</button>
                        <button
                            type="button"
                            className="btn-admin btn-admin-ghost"
                            onClick={() => moveItem(index, 'down')}
                            disabled={index === items.length - 1}
                            style={{ padding: '4px 8px', fontSize: '12px' }}
                        >▼</button>
                        <button
                            type="button"
                            className="btn-admin btn-admin-danger"
                            onClick={() => removeItem(index)}
                            style={{ padding: '4px 8px', fontSize: '12px' }}
                        >✕</button>
                    </div>
                ))}

                <button type="button" className="btn-admin btn-admin-ghost" onClick={addItem} style={{ marginTop: '10px' }}>
                    + Menüpunkt hinzufügen
                </button>
            </div>

            <div className="admin-card" style={{ marginBottom: '20px' }}>
                <h3 style={{ marginBottom: '16px' }}>CTA Button (Header)</h3>
                <div className="admin-form-row">
                    <div className="admin-form-group">
                        <label>Label</label>
                        <input
                            type="text"
                            value={cta.label}
                            onChange={(e) => setCta({ ...cta, label: e.target.value })}
                        />
                    </div>
                    <div className="admin-form-group">
                        <label>Link</label>
                        <input
                            type="text"
                            value={cta.href}
                            onChange={(e) => setCta({ ...cta, href: e.target.value })}
                        />
                    </div>
                </div>
            </div>

            <button type="button" className="btn-admin btn-admin-primary" onClick={handleSave}>
                Navigation speichern
            </button>
        </>
    );
}
