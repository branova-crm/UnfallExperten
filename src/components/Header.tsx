import Link from 'next/link';

export default function Header() {
  return (
    <>
      <div className="topbar">
        <div className="container">
          <div className="topbar-left">
            <a href="tel:+4902111234567">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg> 0211 – 123 456 7
            </a>
            <a href="mailto:info@unfallexperten-nrw.de">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg> info@unfallexperten-nrw.de
            </a>
          </div>
          <div className="topbar-right">
            <div className="topbar-social">
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <header className="site-header" id="top">
        <div className="container">
          <Link href="/" className="logo">
            <img src="/images/logo.png" alt="Ihre Gutachter-Experten Logo" />
          </Link>
          <nav className="nav-links">
            <Link href="/ueber-uns">Über uns</Link>
            <Link href="/leistungen">Leistungen</Link>
            <Link href="/standorte">Standorte</Link>
            <Link href="/#reviews">Bewertungen</Link>
            <Link href="/#faq">FAQ</Link>
            <Link href="/kontakt">Kontakt</Link>
          </nav>
          <Link href="/kontakt" className="btn btn-primary header-cta">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg> Rückruf anfordern
          </Link>
          <button className="hamburger" aria-label="Menü" suppressHydrationWarning>
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      <div className="mobile-menu">
        <Link href="/ueber-uns">Über uns</Link>
        <Link href="/leistungen">Leistungen</Link>
        <Link href="/standorte">Standorte</Link>
        <Link href="/#reviews">Bewertungen</Link>
        <Link href="/#faq">FAQ</Link>
        <Link href="/kontakt">Kontakt</Link>
        <Link href="/kontakt" className="btn btn-primary" style={{ marginTop: 'auto' }}>
          Rückruf anfordern
        </Link>
      </div>
    </>
  );
}
