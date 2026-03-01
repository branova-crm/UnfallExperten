'use client';

import { useState } from 'react';
import { updateGlobal } from '@/lib/actions/globals';

type GlobalsData = {
    contact: any;
    footer: any;
    branding: any;
};

export default function GlobalsEditorClient({ globalsData }: { globalsData: GlobalsData }) {
    const [contact, setContact] = useState(globalsData.contact || {
        phone: '0211 – 123 456 7',
        phoneLink: '+4902111234567',
        email: 'info@unfallexperten-nrw.de',
        address: 'Musterstraße 1, 40210 Düsseldorf',
        openingHours: 'Jederzeit erreichbar',
        whatsapp: '4902111234567',
        whatsappText: 'Hallo, ich brauche Hilfe nach einem Unfall.',
    });

    const [footer, setFooter] = useState(globalsData.footer || {
        description: 'Ihr unabhängiger Kfz-Sachverständiger in Nordrhein-Westfalen. Kostenlose Unfallgutachten für Geschädigte – schnell, professionell und NRW-weit.',
        copyright: 'UnfallExperten NRW – Alle Rechte vorbehalten.',
        socialFacebook: 'https://www.facebook.com/',
        socialInstagram: 'https://www.instagram.com/',
    });

    const [branding, setBranding] = useState(globalsData.branding || {
        companyName: 'UnfallExperten NRW',
        logoUrl: '/images/logo.png',
        primaryColor: '#1641A6',
    });

    const [message, setMessage] = useState('');

    const saveGlobal = async (key: string, data: any) => {
        const formData = new FormData();
        formData.append('key', key);
        formData.append('data', JSON.stringify(data));
        try {
            await updateGlobal(formData);
            setMessage(`${key} gespeichert ✓`);
            setTimeout(() => setMessage(''), 3000);
        } catch (e: any) {
            setMessage('Fehler: ' + e.message);
        }
    };

    const renderFields = (data: any, setter: (d: any) => void) => {
        return Object.entries(data).map(([key, value]) => (
            <div key={key} className="json-field">
                <label>{key}</label>
                <input
                    type="text"
                    value={String(value ?? '')}
                    onChange={(e) => setter({ ...data, [key]: e.target.value })}
                />
            </div>
        ));
    };

    return (
        <>
            {message && <div className="admin-alert admin-alert-success">{message}</div>}

            {/* Contact */}
            <div className="admin-card" style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <h3>Kontaktdaten</h3>
                    <button type="button" className="btn-admin btn-admin-primary" onClick={() => saveGlobal('contact', contact)}>
                        Speichern
                    </button>
                </div>
                {renderFields(contact, setContact)}
            </div>

            {/* Footer */}
            <div className="admin-card" style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <h3>Footer</h3>
                    <button type="button" className="btn-admin btn-admin-primary" onClick={() => saveGlobal('footer', footer)}>
                        Speichern
                    </button>
                </div>
                {renderFields(footer, setFooter)}
            </div>

            {/* Branding */}
            <div className="admin-card" style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <h3>Branding</h3>
                    <button type="button" className="btn-admin btn-admin-primary" onClick={() => saveGlobal('branding', branding)}>
                        Speichern
                    </button>
                </div>
                {renderFields(branding, setBranding)}
            </div>
        </>
    );
}
