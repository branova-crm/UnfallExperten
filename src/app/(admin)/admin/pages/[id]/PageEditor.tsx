'use client';

import { useState, useCallback } from 'react';
import { type CmsSection, type SectionType, type FieldDef, SECTION_TYPES, getSectionTypeDef, createSection } from '@/lib/cms/section-types';
import { saveSections, publishPage } from '@/lib/actions/pages';

interface Props { page: any }

export default function PageEditor({ page }: Props) {
    // Parse initial sections from draft_layout or published_layout
    const parseInitial = (): CmsSection[] => {
        const dl = page.draft_layout;
        const pl = page.published_layout;
        // New format: { sections: [...] }
        if (dl && Array.isArray(dl.sections) && dl.sections.length > 0) return dl.sections;
        if (pl && Array.isArray(pl.sections) && pl.sections.length > 0) return pl.sections;
        // No sections yet
        return [];
    };

    const [sections, setSections] = useState<CmsSection[]>(parseInitial);
    const [selIdx, setSelIdx] = useState<number | null>(null);
    const [inspTab, setInspTab] = useState<'content' | 'style' | 'advanced'>('content');
    const [saving, setSaving] = useState(false);
    const [msg, setMsg] = useState('');
    const [msgType, setMsgType] = useState<'ok' | 'error'>('ok');
    const [showAddMenu, setShowAddMenu] = useState(false);

    const sel = selIdx !== null ? sections[selIdx] : null;
    const selDef = sel ? getSectionTypeDef(sel.type) : null;

    const flash = (t: string, type: 'ok' | 'error' = 'ok') => { setMsg(t); setMsgType(type); setTimeout(() => setMsg(''), 4000); };

    // ── Section CRUD ──
    const addSection = (type: SectionType) => {
        const s = createSection(type);
        const newSections = [...sections, s];
        setSections(newSections);
        setSelIdx(newSections.length - 1);
        setInspTab('content');
        setShowAddMenu(false);
    };

    const removeSection = (idx: number) => {
        if (!confirm('Section wirklich löschen?')) return;
        setSections(prev => prev.filter((_, i) => i !== idx));
        if (selIdx === idx) setSelIdx(null);
        else if (selIdx !== null && selIdx > idx) setSelIdx(selIdx - 1);
    };

    const moveSection = (idx: number, dir: 'up' | 'down') => {
        const swap = dir === 'up' ? idx - 1 : idx + 1;
        if (swap < 0 || swap >= sections.length) return;
        const arr = [...sections];
        [arr[idx], arr[swap]] = [arr[swap], arr[idx]];
        setSections(arr);
        setSelIdx(swap);
    };

    const duplicateSection = (idx: number) => {
        const orig = sections[idx];
        const copy: CmsSection = {
            ...orig,
            id: `sec_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`,
            label: orig.label + ' (Kopie)',
            data: JSON.parse(JSON.stringify(orig.data)),
            settings: JSON.parse(JSON.stringify(orig.settings)),
            advanced: JSON.parse(JSON.stringify(orig.advanced)),
        };
        const arr = [...sections];
        arr.splice(idx + 1, 0, copy);
        setSections(arr);
        setSelIdx(idx + 1);
    };

    const updateSectionData = useCallback((key: string, val: any) => {
        if (selIdx === null) return;
        setSections(prev => prev.map((s, i) => i === selIdx ? { ...s, data: { ...s.data, [key]: val } } : s));
    }, [selIdx]);

    const updateSectionSettings = useCallback((path: string, val: any) => {
        if (selIdx === null) return;
        setSections(prev => prev.map((s, i) => {
            if (i !== selIdx) return s;
            const settings = JSON.parse(JSON.stringify(s.settings));
            const parts = path.split('.');
            let t: any = settings;
            for (let j = 0; j < parts.length - 1; j++) { if (!t[parts[j]]) t[parts[j]] = {}; t = t[parts[j]]; }
            t[parts[parts.length - 1]] = val;
            return { ...s, settings };
        }));
    }, [selIdx]);

    const updateSectionAdvanced = useCallback((key: string, val: any) => {
        if (selIdx === null) return;
        setSections(prev => prev.map((s, i) => i === selIdx ? { ...s, advanced: { ...s.advanced, [key]: val } } : s));
    }, [selIdx]);

    const updateSectionLabel = useCallback((val: string) => {
        if (selIdx === null) return;
        setSections(prev => prev.map((s, i) => i === selIdx ? { ...s, label: val } : s));
    }, [selIdx]);

    // ── Save / Publish ──
    const handleSave = async () => {
        setSaving(true);
        try {
            const result = await saveSections(page.id, sections);
            if (result.success) {
                flash('✅ Entwurf gespeichert!');
            } else {
                flash('❌ Fehler beim Speichern: ' + (result.error || 'Unbekannt'), 'error');
            }
        } catch (e: any) {
            console.error('Save error:', e);
            flash('❌ Fehler: ' + (e.message || 'Verbindungsfehler'), 'error');
        }
        setSaving(false);
    };

    const handlePublish = async () => {
        setSaving(true);
        try {
            const saveResult = await saveSections(page.id, sections);
            if (!saveResult.success) {
                flash('❌ Speichern fehlgeschlagen: ' + (saveResult.error || ''), 'error');
                setSaving(false);
                return;
            }
            const pubResult = await publishPage(page.id);
            if (pubResult.success) {
                flash('✅ Veröffentlicht!');
            } else {
                flash('❌ Veröffentlichen fehlgeschlagen: ' + (pubResult.error || ''), 'error');
            }
        } catch (e: any) {
            console.error('Publish error:', e);
            flash('❌ Fehler: ' + (e.message || 'Verbindungsfehler'), 'error');
        }
        setSaving(false);
    };

    return (
        <div className="editor-layout">
            {/* ── Left: Section List ── */}
            <div className="editor-sections">
                <div className="editor-sections-header">
                    <h3>Sections ({sections.length})</h3>
                    <button className="btn-admin btn-admin-primary btn-sm" onClick={() => setShowAddMenu(!showAddMenu)}>
                        {showAddMenu ? '✕ Schließen' : '+ Section'}
                    </button>
                </div>

                {showAddMenu && (
                    <div className="section-add-menu">
                        {SECTION_TYPES.map(st => (
                            <button key={st.type} className="section-add-item" onClick={() => addSection(st.type)}>
                                <span className="section-add-icon">{st.icon}</span>
                                <div><strong>{st.label}</strong><br /><span className="section-add-desc">{st.description}</span></div>
                            </button>
                        ))}
                    </div>
                )}

                <div className="section-list">
                    {sections.map((sec, idx) => {
                        const def = getSectionTypeDef(sec.type);
                        return (
                            <div key={sec.id} className={`section-item ${selIdx === idx ? 'selected' : ''}`} onClick={() => { setSelIdx(idx); setInspTab('content'); }}>
                                <div className="section-item-left">
                                    <span className="section-item-icon">{def?.icon || '📄'}</span>
                                    <div>
                                        <div className="section-item-label">{sec.label}</div>
                                        <div className="section-item-type">{def?.label || sec.type}</div>
                                    </div>
                                </div>
                                <div className="section-item-actions" onClick={e => e.stopPropagation()}>
                                    <button onClick={() => moveSection(idx, 'up')} disabled={idx === 0} title="Hoch">↑</button>
                                    <button onClick={() => moveSection(idx, 'down')} disabled={idx === sections.length - 1} title="Runter">↓</button>
                                    <button onClick={() => duplicateSection(idx)} title="Duplizieren">📋</button>
                                    <button onClick={() => removeSection(idx)} title="Löschen" className="danger">🗑</button>
                                </div>
                            </div>
                        );
                    })}
                    {sections.length === 0 && <p className="section-empty">Keine Sections. Klicke &quot;+ Section&quot; oben.</p>}
                </div>

                <div className="editor-save-bar">
                    {msg && <span className={`editor-msg ${msgType === 'error' ? 'error' : ''}`}>{msg}</span>}
                    <button className="btn-admin btn-admin-ghost" onClick={handleSave} disabled={saving}>
                        {saving ? 'Speichert...' : '💾 Entwurf speichern'}
                    </button>
                    <button className="btn-admin btn-admin-primary" onClick={handlePublish} disabled={saving}>
                        {saving ? 'Speichert...' : '🚀 Veröffentlichen'}
                    </button>
                </div>
            </div>

            {/* ── Right: Inspector ── */}
            <div className="editor-inspector">
                {!sel && <div className="editor-insp-empty"><p style={{ fontSize: '24px' }}>👈</p><p>Section auswählen<br />oder neue hinzufügen</p></div>}

                {sel && selDef && (
                    <>
                        <div className="editor-insp-tabs">
                            <button className={inspTab === 'content' ? 'active' : ''} onClick={() => setInspTab('content')}>Content</button>
                            <button className={inspTab === 'style' ? 'active' : ''} onClick={() => setInspTab('style')}>Style</button>
                            <button className={inspTab === 'advanced' ? 'active' : ''} onClick={() => setInspTab('advanced')}>Advanced</button>
                        </div>

                        <div className="editor-insp-body">
                            {/* CONTENT TAB */}
                            {inspTab === 'content' && (
                                <>
                                    <FG label="Section Label"><input type="text" value={sel.label} onChange={e => updateSectionLabel(e.target.value)} /></FG>
                                    {selDef.fields.map(field => (
                                        <FieldRenderer key={field.key} field={field} value={sel.data[field.key]} onChange={v => updateSectionData(field.key, v)} />
                                    ))}
                                </>
                            )}

                            {/* STYLE TAB */}
                            {inspTab === 'style' && (
                                <>
                                    <h4 className="insp-heading">Layout</h4>
                                    <FG label="Breite"><select value={sel.settings?.layout?.contentWidth || 'boxed'} onChange={e => updateSectionSettings('layout.contentWidth', e.target.value)}><option value="boxed">Boxed</option><option value="full">Full Width</option></select></FG>
                                    <FG label="Max Width (px)"><input type="number" value={sel.settings?.layout?.maxWidthPx || 1200} onChange={e => updateSectionSettings('layout.maxWidthPx', parseInt(e.target.value) || 1200)} /></FG>

                                    <h4 className="insp-heading">Spacing</h4>
                                    <div className="spacing-row">
                                        <FG label="Padding oben"><input type="number" value={sel.settings?.spacing?.paddingTop ?? 0} onChange={e => updateSectionSettings('spacing.paddingTop', parseInt(e.target.value) || 0)} /></FG>
                                        <FG label="Padding rechts"><input type="number" value={sel.settings?.spacing?.paddingRight ?? 0} onChange={e => updateSectionSettings('spacing.paddingRight', parseInt(e.target.value) || 0)} /></FG>
                                    </div>
                                    <div className="spacing-row">
                                        <FG label="Padding unten"><input type="number" value={sel.settings?.spacing?.paddingBottom ?? 0} onChange={e => updateSectionSettings('spacing.paddingBottom', parseInt(e.target.value) || 0)} /></FG>
                                        <FG label="Padding links"><input type="number" value={sel.settings?.spacing?.paddingLeft ?? 0} onChange={e => updateSectionSettings('spacing.paddingLeft', parseInt(e.target.value) || 0)} /></FG>
                                    </div>
                                    <div className="spacing-row">
                                        <FG label="Margin oben"><input type="number" value={sel.settings?.spacing?.marginTop ?? 0} onChange={e => updateSectionSettings('spacing.marginTop', parseInt(e.target.value) || 0)} /></FG>
                                        <FG label="Margin unten"><input type="number" value={sel.settings?.spacing?.marginBottom ?? 0} onChange={e => updateSectionSettings('spacing.marginBottom', parseInt(e.target.value) || 0)} /></FG>
                                    </div>

                                    <h4 className="insp-heading">Hintergrund</h4>
                                    <FG label="Typ"><select value={sel.settings?.background?.type || 'none'} onChange={e => updateSectionSettings('background.type', e.target.value)}><option value="none">Keiner</option><option value="color">Farbe</option><option value="image">Bild</option></select></FG>
                                    {sel.settings?.background?.type === 'color' && <FG label="Farbe"><input type="color" value={sel.settings.background.color || '#000000'} onChange={e => updateSectionSettings('background.color', e.target.value)} /></FG>}
                                    {sel.settings?.background?.type === 'image' && <FG label="Bild URL"><input type="text" value={sel.settings.background.imageMediaId || ''} onChange={e => updateSectionSettings('background.imageMediaId', e.target.value)} placeholder="URL oder Media ID" /></FG>}
                                </>
                            )}

                            {/* ADVANCED TAB */}
                            {inspTab === 'advanced' && (
                                <>
                                    <FG label="Anchor ID"><input type="text" value={sel.advanced?.anchorId || ''} onChange={e => updateSectionAdvanced('anchorId', e.target.value)} placeholder="z.B. hero, faq" /></FG>
                                    <FG label="CSS Klasse"><input type="text" value={sel.advanced?.customClass || ''} onChange={e => updateSectionAdvanced('customClass', e.target.value)} /></FG>
                                    <h4 className="insp-heading">Sichtbarkeit</h4>
                                    <label className="toggle-label"><input type="checkbox" checked={sel.advanced?.visibility?.desktop !== false} onChange={e => updateSectionAdvanced('visibility', { ...(sel.advanced?.visibility || {}), desktop: e.target.checked })} /> 🖥️ Desktop</label>
                                    <label className="toggle-label"><input type="checkbox" checked={sel.advanced?.visibility?.tablet !== false} onChange={e => updateSectionAdvanced('visibility', { ...(sel.advanced?.visibility || {}), tablet: e.target.checked })} /> 📱 Tablet</label>
                                    <label className="toggle-label"><input type="checkbox" checked={sel.advanced?.visibility?.mobile !== false} onChange={e => updateSectionAdvanced('visibility', { ...(sel.advanced?.visibility || {}), mobile: e.target.checked })} /> 📲 Mobile</label>
                                </>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

// ── Sub-components ──
function FG({ label, children }: { label: string; children: React.ReactNode }) {
    return <div className="fg"><label>{label}</label>{children}</div>;
}

function FieldRenderer({ field, value, onChange }: { field: FieldDef; value: any; onChange: (v: any) => void }) {
    if (field.type === 'textarea' || field.type === 'richtext') {
        return <FG label={field.label}><textarea value={value ?? ''} onChange={e => onChange(e.target.value)} rows={field.type === 'richtext' ? 8 : 3} /></FG>;
    }
    if (field.type === 'toggle') {
        return <FG label={field.label}><label className="toggle-label"><input type="checkbox" checked={!!value} onChange={e => onChange(e.target.checked)} />{value ? ' An' : ' Aus'}</label></FG>;
    }
    if (field.type === 'select') {
        return <FG label={field.label}><select value={value ?? ''} onChange={e => onChange(e.target.value)}>{field.options?.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}</select></FG>;
    }
    if (field.type === 'number') {
        return <FG label={field.label}><input type="number" value={value ?? ''} onChange={e => onChange(parseInt(e.target.value) || 0)} /></FG>;
    }
    if (field.type === 'color') {
        return <FG label={field.label}><input type="color" value={value || '#000000'} onChange={e => onChange(e.target.value)} /></FG>;
    }
    if (field.type === 'image') {
        return <FG label={field.label}><input type="text" value={value ?? ''} onChange={e => onChange(e.target.value)} placeholder="URL oder Media ID" /></FG>;
    }
    if (field.type === 'repeater') {
        return <RepeaterField field={field} value={value || []} onChange={onChange} />;
    }
    return <FG label={field.label}><input type="text" value={value ?? ''} onChange={e => onChange(e.target.value)} placeholder={field.placeholder} /></FG>;
}

function RepeaterField({ field, value, onChange }: { field: FieldDef; value: any[]; onChange: (v: any[]) => void }) {
    const items = Array.isArray(value) ? value : [];
    const addItem = () => {
        const d: any = {};
        field.repeaterFields?.forEach(f => { d[f.key] = ''; });
        onChange([...items, d]);
    };
    const removeItem = (i: number) => onChange(items.filter((_, idx) => idx !== i));
    const updateItem = (i: number, key: string, val: string) => onChange(items.map((item, idx) => idx === i ? { ...item, [key]: val } : item));

    return (
        <div style={{ marginBottom: '12px' }}>
            <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: 'var(--admin-text-muted)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '.3px' }}>{field.label}</label>
            <div className="repeater">
                {items.map((item, i) => (
                    <div key={i} className="repeater-item">
                        <div className="repeater-header"><span>#{i + 1}</span><button className="repeater-remove" onClick={() => removeItem(i)}>×</button></div>
                        {field.repeaterFields?.map(rf => (
                            <div key={rf.key} className="repeater-field">
                                <label>{rf.label}</label>
                                {rf.type === 'textarea' ? <textarea value={item[rf.key] || ''} onChange={e => updateItem(i, rf.key, e.target.value)} rows={2} /> : <input type="text" value={item[rf.key] || ''} onChange={e => updateItem(i, rf.key, e.target.value)} />}
                            </div>
                        ))}
                    </div>
                ))}
                <button className="repeater-add" onClick={addItem}>+ Hinzufügen</button>
            </div>
        </div>
    );
}
