'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PAGE_TEMPLATES, getTemplate } from '@/lib/cms/section-types';
import { createPage } from '@/lib/actions/pages';

export default function NewPageForm() {
    const [selectedTemplate, setSelectedTemplate] = useState('standard_page');

    const handleSubmit = async (formData: FormData) => {
        const tpl = getTemplate(selectedTemplate);
        if (tpl) {
            formData.set('sections', JSON.stringify(tpl.sections));
        }
        formData.set('template', selectedTemplate);
        await createPage(formData);
    };

    return (
        <>
            <div className="admin-header">
                <h1>Neue Seite anlegen</h1>
                <Link href="/admin/pages" className="btn-admin btn-admin-ghost">← Zurück</Link>
            </div>

            <div className="admin-card">
                <form action={handleSubmit} className="admin-form">
                    <div className="admin-form-row">
                        <div className="admin-form-group">
                            <label htmlFor="title">Seitentitel</label>
                            <input id="title" name="title" type="text" required placeholder="z.B. Impressum" />
                        </div>
                        <div className="admin-form-group">
                            <label htmlFor="slug">Slug (URL-Pfad)</label>
                            <input id="slug" name="slug" type="text" required placeholder="z.B. impressum" />
                        </div>
                    </div>

                    <div className="admin-form-row">
                        <div className="admin-form-group">
                            <label htmlFor="template">Vorlage</label>
                            <select id="template" name="template" value={selectedTemplate} onChange={e => setSelectedTemplate(e.target.value)}>
                                {PAGE_TEMPLATES.map(t => (
                                    <option key={t.key} value={t.key}>{t.name} — {t.description}</option>
                                ))}
                            </select>
                        </div>
                        <div className="admin-form-group">
                            <label htmlFor="status">Status</label>
                            <select id="status" name="status">
                                <option value="draft">Entwurf</option>
                                <option value="published">Veröffentlicht</option>
                            </select>
                        </div>
                    </div>

                    {/* Template preview */}
                    <div style={{ marginBottom: '16px', padding: '12px', background: 'var(--admin-bg)', borderRadius: '6px', border: '1px solid var(--admin-border)' }}>
                        <p style={{ fontSize: '12px', color: 'var(--admin-text-muted)', margin: '0 0 8px' }}>
                            Vorlage „{PAGE_TEMPLATES.find(t => t.key === selectedTemplate)?.name}" enthält:
                        </p>
                        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                            {(getTemplate(selectedTemplate)?.sections || []).map((s, i) => (
                                <span key={i} style={{ fontSize: '11px', background: 'var(--admin-surface)', border: '1px solid var(--admin-border)', padding: '2px 8px', borderRadius: '4px' }}>
                                    {s.label}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="admin-form-actions">
                        <button type="submit" className="btn-admin btn-admin-primary">Seite erstellen</button>
                        <Link href="/admin/pages" className="btn-admin btn-admin-ghost">Abbrechen</Link>
                    </div>
                </form>
            </div>
        </>
    );
}
