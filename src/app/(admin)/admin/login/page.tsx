'use client';

import { useState } from 'react';
import { createSupabaseBrowserClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const supabase = createSupabaseBrowserClient();
            const { error: authError } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (authError) {
                setError(authError.message === 'Invalid login credentials'
                    ? 'Ungültige Anmeldedaten'
                    : authError.message);
                setLoading(false);
                return;
            }

            router.push('/admin');
            router.refresh();
        } catch {
            setError('Ein Fehler ist aufgetreten');
            setLoading(false);
        }
    };

    return (
        <div className="admin-login-page">
            <div className="admin-login-box">
                <h1>Admin Login</h1>
                <p>UnfallExperten CMS</p>

                {error && <div className="error">{error}</div>}

                <form onSubmit={handleLogin}>
                    <div className="admin-form-group">
                        <label htmlFor="email">E-Mail</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="admin@unfallexperten-nrw.de"
                            required
                        />
                    </div>
                    <div className="admin-form-group">
                        <label htmlFor="password">Passwort</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            required
                        />
                    </div>
                    <button type="submit" disabled={loading}>
                        {loading ? 'Anmeldung...' : 'Anmelden'}
                    </button>
                </form>
            </div>
        </div>
    );
}
