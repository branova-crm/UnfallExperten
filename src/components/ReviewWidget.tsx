"use client";

export default function ReviewWidget() {
    const GOOGLE_PLACE_SHARE_URL = "https://share.google/KbGRRE7ngszpWpv9k";

    return (
        <div className="review-widget-wrapper" style={{ textAlign: 'center', margin: '40px 0' }}>
            {/* TODO für Zukunft: Hier z.B. Trustindex- oder Elfsight-Iframe/Snippet einfügen */}
            <div
                className="review-box"
                style={{ padding: '20px', border: '1px solid #eaeaea', borderRadius: '12px', display: 'inline-block', backgroundColor: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}
            >
                <div className="stars" style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '8px' }}>
                    {/* 5 gefüllte Bewertungs-Sterne */}
                    {[...Array(5)].map((_, i) => (
                        <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="#FFD700" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                    ))}
                </div>
                <h3 style={{ margin: '0 0 5px 0', fontSize: '18px' }}>Google Bewertungen</h3>
                <p style={{ margin: '0 0 20px 0', color: '#666', fontSize: '14px' }}>5 Sterne (20)</p>
                <a
                    href={GOOGLE_PLACE_SHARE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-block',
                        backgroundColor: 'var(--primary-color)',
                        color: 'white',
                        padding: '12px 24px',
                        textDecoration: 'none',
                        borderRadius: '6px',
                        fontWeight: '600',
                        transition: 'background-color 0.2s ease-in-out'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-color-hover)'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-color)'}
                >
                    Jetzt bewerten
                </a>
            </div>
        </div>
    );
}
