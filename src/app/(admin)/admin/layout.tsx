import './admin.css';
import Link from 'next/link';
import { createSupabaseServerClient } from '@/lib/supabase/server';

export const metadata = {
    title: 'CMS Admin – UnfallExperten',
    robots: 'noindex, nofollow',
};

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // Check auth - if not authenticated, render children without shell
    // (login page is rendered as children, middleware handles redirect)
    let user = null;
    let userEmail = '';
    try {
        const supabase = await createSupabaseServerClient();
        const { data } = await supabase.auth.getUser();
        user = data.user;
        userEmail = user?.email || '';
    } catch { }

    // If user is not authenticated, render just children (login page)
    // No sidebar, no admin shell
    if (!user) {
        return <>{children}</>;
    }

    // Authenticated: render full admin shell
    return (
        <div className="admin-layout">
            <aside className="admin-sidebar">
                <div className="admin-sidebar-logo">
                    <h2>UnfallExperten</h2>
                    <span>CMS Admin</span>
                </div>
                <nav className="admin-nav">
                    <Link href="/admin">
                        <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                        Dashboard
                    </Link>
                    <Link href="/admin/pages">
                        <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
                        Seiten
                    </Link>
                    <Link href="/admin/standorte">
                        <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                        Standorte
                    </Link>
                    <Link href="/admin/navigation">
                        <svg viewBox="0 0 24 24"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
                        Navigation
                    </Link>
                    <Link href="/admin/globals">
                        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
                        Globale Inhalte
                    </Link>
                    <Link href="/admin/media">
                        <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
                        Medien
                    </Link>
                    <div style={{ borderTop: '1px solid var(--admin-border)', margin: '10px 0' }}></div>
                    <Link href="/" target="_blank">
                        <svg viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                        Website ansehen
                    </Link>
                </nav>
                <div className="admin-sidebar-footer">
                    <p style={{ fontSize: '12px', color: 'var(--admin-text-muted)', margin: '0 0 8px' }}>
                        {userEmail}
                    </p>
                    <form action="/api/admin/logout" method="POST">
                        <button type="submit" className="btn-admin btn-admin-ghost" style={{ width: '100%', justifyContent: 'center' }}>
                            Abmelden
                        </button>
                    </form>
                </div>
            </aside>
            <main className="admin-main">
                {children}
            </main>
        </div>
    );
}
