import type { ReactNode } from 'react';

type TrustItem =
    | { value: string; label: string; icon: ReactNode }
    | { value: string; label: string; isGoogle: true; href: string };

const TRUST_ITEMS: TrustItem[] = [
    {
        value: '24/7',
        label: 'erreichbar',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </svg>
        ),
    },
    {
        value: 'NRW-weit',
        label: 'im Einsatz',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
            </svg>
        ),
    },
    {
        value: 'Kostenlos',
        label: 'für Geschädigte',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
    },
    {
        value: '5.0 ★',
        label: 'Google Bewertung',
        isGoogle: true,
        href: 'https://share.google/KbGRRE7ngszpWpv9k',
    },
];

export default function AboutTrustStrip() {
    return (
        <div className="about-trust-strip-wrap">
            <div className="container">
                <div className="about-trust-strip" aria-label="Vertrauensmerkmale">
                    {TRUST_ITEMS.map((item) =>
                        'isGoogle' in item ? (
                            <a
                                key={item.label}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="about-trust-strip-item about-trust-strip-item--link"
                                aria-label="Google Bewertung"
                            >
                                <span className="about-trust-strip-value about-trust-strip-value--star">{item.value}</span>
                                <span className="about-trust-strip-label">{item.label}</span>
                            </a>
                        ) : (
                            <div key={item.label} className="about-trust-strip-item">
                                <span className="about-trust-strip-icon">{item.icon}</span>
                                <div>
                                    <span className="about-trust-strip-value">{item.value}</span>
                                    <span className="about-trust-strip-label">{item.label}</span>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}
