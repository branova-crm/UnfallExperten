import { getAllGlobals } from '@/lib/queries';
import GlobalsEditorClient from './GlobalsEditorClient';

export default async function AdminGlobalsPage() {
    let globals: any[] = [];
    try {
        globals = await getAllGlobals();
    } catch { }

    const globalsData = {
        contact: globals.find(g => g.key === 'contact')?.data || null,
        footer: globals.find(g => g.key === 'footer')?.data || null,
        branding: globals.find(g => g.key === 'branding')?.data || null,
    };

    return (
        <>
            <div className="admin-header">
                <h1>Globale Inhalte</h1>
            </div>
            <GlobalsEditorClient globalsData={globalsData} />
        </>
    );
}
