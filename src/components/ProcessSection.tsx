"use client";

import { useRef, useEffect, useState } from "react";

export default function ProcessSection() {
    const [isMobile, setIsMobile] = useState(false);
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    if (!hasMounted) return null;

    return (
        <div className="process-parallax-container">
            <section className="steps-section">
                <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>

                    <div className="steps-container glass-panel" style={{
                        padding: '1.5rem 1.5rem 1.25rem 1.5rem',
                        marginTop: isMobile ? '-20px' : '-40px',
                        background: '#ffffff',
                        border: '1px solid rgba(15, 47, 122, 0.1)',
                        boxShadow: '0 20px 40px rgba(12, 28, 68, 0.1)',
                        position: 'relative',
                        zIndex: 20,
                        borderRadius: '20px',
                    }}>
                        <div className="steps-grid" style={{
                            display: 'grid',
                            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
                            gap: isMobile ? '2.5rem' : '2.5rem',
                        }}>
                            <style jsx>{`
                                @media (min-width: 1024px) {
                                    .steps-grid {
                                        grid-template-columns: repeat(4, 1fr) !important;
                                    }
                                    .step-item:not(:last-child) {
                                        border-right: 1px solid rgba(15, 47, 122, 0.08);
                                    }
                                }
                            `}</style>
                            {[1, 2, 3, 4].map((step) => (
                                <div key={step} className="step-item home-process-card" style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    padding: '0 1.5rem',
                                    position: 'relative'
                                }}>
                                <div className="step-number home-process-card__number">{step === 1 ? '01' : step === 2 ? '02' : step === 3 ? '03' : '04'}</div>
                                <div className="step-icon home-process-card__icon">
                                    {step === 1 && (
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <rect x="3" y="4" width="18" height="18" rx="2" />
                                            <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                                        </svg>
                                    )}
                                    {step === 2 && (
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" />
                                        </svg>
                                    )}
                                    {step === 3 && (
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
                                        </svg>
                                    )}
                                    {step === 4 && (
                                        <img
                                            src="/schild.svg"
                                            alt=""
                                            width={45}
                                            height={45}
                                            aria-hidden="true"
                                            className="home-process-card__icon-img"
                                        />
                                    )}
                                </div>
                                <h3 className="home-process-card__title" style={{ textTransform: 'none' }}>
                                    {step === 1 ? "Termin vereinbaren" : 
                                     step === 2 ? "Begutachtung vor Ort" : 
                                     step === 3 ? "Gutachten erhalten" : 
                                     "Versicherungsabwicklung"}
                                </h3>
                                <p className="home-process-card__text" style={{ fontSize: '0.9rem' }}>
                                    {step === 1 ? "Einfach per Telefon oder WhatsApp einen Termin sichern. Wir kommen schnell zu Ihnen." : 
                                     step === 2 ? "Unser KFZ Gutachter prüft Ihr Fahrzeug direkt vor Ort. Alle Schäden werden sorgfältig dokumentiert." : 
                                     step === 3 ? "Sie erhalten Ihr Unfallgutachten innerhalb von 24–72 Stunden. Damit sind Sie bestens vorbereitet." : 
                                     "Die Versicherung zahlt Ihnen den von uns festgestellten Schadensbetrag aus."}
                                </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
