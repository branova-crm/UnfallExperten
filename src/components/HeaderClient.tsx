"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

type NavItem = {
    label: string;
    href: string;
    order: number;
    is_enabled: boolean;
};

type HeaderClientProps = {
    navItems: NavItem[];
    cta: { label: string; href: string };
    contact: { phone: string; phoneLink: string; email: string };
    social: { socialFacebook: string; socialInstagram: string };
};

export default function HeaderClient({ navItems, cta, contact, social }: HeaderClientProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Appear shortly after the original header is gone (approx 300px)
            setIsScrolled(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.style.overflow = 'unset';
    };

    return (
        <>
            {/* 1. STATIC HEADER (Default Top) */}
            <div className="topbar">
                <div className="container">
                    <div className="topbar-left">
                        <a href={`tel:${contact.phoneLink}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            <span className="hide-mobile">{contact.phone}</span>
                        </a>
                        <a href={`mailto:${contact.email}`} className="hide-mobile-extra">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect width="20" height="16" x="2" y="4" rx="2" />
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                            <span className="hide-mobile">{contact.email}</span>
                        </a>
                    </div>
                    <div className="topbar-right">
                        <div className="topbar-social">
                            <a href={social.socialFacebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <svg viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </a>
                            <a href={social.socialInstagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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
                        {navItems.map((item) => (
                            <Link key={item.href} href={item.href}>{item.label}</Link>
                        ))}
                    </nav>
                    <div className="header-actions">
                        <Link href={cta.href} className="btn btn-primary header-cta">
                            <span className="hide-mobile-cta">{cta.label}</span>
                        </Link>
                        <button
                            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                            onClick={toggleMenu}
                            aria-label="Menü"
                        >
                            <span></span><span></span><span></span>
                        </button>
                    </div>
                </div>
            </header>

            {/* 2. REBUILT STICKY GLASS HEADER (Inline for 100% isolation) */}
            <div
                style={{
                    position: 'fixed',
                    top: '10px',
                    left: 0,
                    right: 0,
                    zIndex: 9999,
                    padding: '0 16px',
                    pointerEvents: 'none',
                    // Safari/Chrome Blur-Delay-Bug Fix:
                    // Opacity darf nicht animiert werden, da der Browser sonst den Blur verzögert.
                    // Wir schieben den Header stattdessen per transform komplett aus dem Bild (-150%).
                    opacity: 1,
                    transform: isScrolled ? 'translateY(0)' : 'translateY(-150%)',
                    transition: 'transform 2.2s cubic-bezier(0.1, 0.9, 0.2, 1)',
                    willChange: 'transform',
                }}
            >
                <div
                    style={{
                        margin: '0 auto',
                        maxWidth: '1135px',
                        padding: '0.6rem 0.8rem 0.6rem 1.2rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        position: 'relative',
                        overflow: 'hidden',
                        background: 'rgba(15, 47, 122, 0.75)',
                        backdropFilter: 'blur(28px) saturate(180%)',
                        WebkitBackdropFilter: 'blur(28px) saturate(180%)',
                        border: '1px solid rgba(255, 255, 255, 0.18)',
                        borderRadius: '16px',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.15)',
                        transform: 'translateZ(0)',
                        pointerEvents: isScrolled ? 'auto' : 'none',
                    }}
                >
                    {/* Milky Glass Overlay layer (::before equivalent) */}
                    <div
                        style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'rgba(255, 255, 255, 0.12)',
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                            pointerEvents: 'none',
                            zIndex: 1,
                        }}
                    />

                    {/* Left: Logo */}
                    <Link href="/" className="logo" onClick={closeMenu} style={{ position: 'relative', zIndex: 2 }}>
                        {/* Weitere 10px größer (75px statt 65px), margin-Ausgleich zentriert es weiterhin ohne Container-Vergrößerung */}
                        <img src="/images/logo.png" alt="Logo" style={{ height: '75px', margin: '-12.5px 0', filter: 'brightness(0) invert(1)' }} />
                    </Link>

                    {/* Center: Nav Links */}
                    <div className="nav-links" style={{ position: 'relative', zIndex: 2 }}>
                        {navItems.map((item) => (
                            <Link key={item.href} href={item.href} onClick={closeMenu} style={{ color: '#fff', fontWeight: 600, fontSize: '0.875rem' }}>
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Right: Actions */}
                    <div className="header-actions" style={{ position: 'relative', zIndex: 2 }}>
                        <Link href={cta.href} className="btn btn-white btn-sm hide-mobile" style={{ padding: '8px 18px' }}>
                            {cta.label}
                        </Link>
                        <button
                            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                            onClick={toggleMenu}
                            style={{ position: 'relative', zIndex: 2 }}
                        >
                            <span></span><span></span><span></span>
                        </button>
                    </div>
                </div>
            </div>

            {/* 3. OFF-CANVAS MENU */}
            <div className={`menu-overlay ${isMenuOpen ? 'visible' : ''}`} onClick={closeMenu}></div>
            <div className={`offcanvas-menu ${isMenuOpen ? 'open' : ''}`}>
                <div className="offcanvas-header">
                    <img src="/images/logo.png" alt="Logo" className="offcanvas-logo" />
                    <button className="menu-close" onClick={closeMenu}>&times;</button>
                </div>
                <nav className="offcanvas-links">
                    <Link href="/" onClick={closeMenu}>Startseite</Link>
                    {navItems.map((item) => (
                        <Link key={item.href} href={item.href} onClick={closeMenu}>{item.label}</Link>
                    ))}
                </nav>
                <div className="offcanvas-footer">
                    <Link href={cta.href} className="btn btn-primary" onClick={closeMenu}>
                        {cta.label}
                    </Link>
                    <div className="offcanvas-contact">
                        <p>{contact.phone}</p>
                        <p>{contact.email}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
