import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <div className="logo"><img src="/images/logo.png" alt="UnfallExperten NRW Logo" style={{ maxHeight: '80px' }} /></div>
                        <p>Ihr unabhängiger Kfz-Sachverständiger in Nordrhein-Westfalen. Kostenlose Unfallgutachten für Geschädigte – schnell, professionell und NRW-weit.</p>
                        <div className="footer-social">
                            <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a>
                            <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" /></svg></a>
                        </div>
                    </div>
                    <div className="footer-col">
                        <h4>Kontakt</h4>
                        <div className="footer-contact-item"><svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg> 0211 – 123 456 7</div>
                        <div className="footer-contact-item"><svg viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg> info@unfallexperten-nrw.de</div>
                        <div className="footer-contact-item"><svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg> Musterstraße 1, 40210 Düsseldorf</div>
                        <div className="footer-contact-item" style={{ marginTop: 'var(--sp-sm)', color: 'var(--clr-accent)', fontWeight: 600 }}>⏰ Jederzeit erreichbar</div>
                    </div>
                    <div className="footer-col">
                        <h4>Unternehmen</h4>
                        <ul>
                            <li><Link href="/ueber-uns">Über uns</Link></li>
                            <li><Link href="/leistungen">Leistungen</Link></li>
                            <li><Link href="/kontakt">Kontakt</Link></li>
                            <li><Link href="/standorte">Standorte</Link></li>
                            <li><Link href="/kontakt">Termin vereinbaren</Link></li>
                            <li><a href="#">Impressum</a></li>
                            <li><a href="#">Datenschutz</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <span>© <span className="current-year">{new Date().getFullYear()}</span> UnfallExperten NRW – Alle Rechte vorbehalten.</span>
                    <span>Webdesign mit ❤️</span>
                </div>
            </div>
        </footer>
    );
}
