import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="cta-banner-bg"></div>
            <div className="container" style={{ position: 'relative', zIndex: 3 }}>
                <div className="footer-grid">
                    <div className="footer-brand">
                        <div className="logo"><img src="/images/logo.png" alt="UnfallExperten NRW Logo" style={{ maxHeight: '80px' }} /></div>
                        <p>Ihr unabhängiger Kfz-Sachverständiger in Nordrhein-Westfalen. Kostenlose Unfallgutachten für Geschädigte – schnell, professionell und NRW-weit.</p>
                        <div className="footer-social">
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
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
