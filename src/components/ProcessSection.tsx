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
                {/* Background Image (Static) */}
                <img
                    src="/images/bmw_gutachten.png"
                    alt=""
                    className="steps-bg-image"
                    aria-hidden="true"
                    style={{
                        opacity: 0.15,
                        filter: 'grayscale(30%)'
                    }}
                />

                <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
                    <div style={{ marginBottom: isMobile ? '2.5rem' : '4rem', textAlign: 'center' }}>
                        <span className="section-label" style={{ color: 'var(--clr-primary)' }}>So einfach geht's</span>
                        <h2 className="section-title">In 3 Schritten zu Ihrem Gutachten</h2>
                        <p className="section-subtitle mx-auto">Unkompliziert, schnell und transparent – wir begleiten Sie vom ersten Anruf bis zur Auszahlung.</p>
                    </div>

                    <div className="steps-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
                        gap: isMobile ? '1.5rem' : '2rem',
                        marginBottom: isMobile ? '2rem' : '4rem'
                    }}>
                        {[1, 2, 3].map((step) => (
                            <div key={step} className="step-card">
                                <div className="step-number">{step}</div>
                                <div className="step-icon">
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
                                </div>
                                <h3>{step === 1 ? "Termin vereinbaren" : step === 2 ? "Begutachtung vor Ort" : "Gutachten erhalten"}</h3>
                                <p>{step === 1 ? "Per Telefon oder WhatsApp flexiblen Termin sichern." : step === 2 ? "Unser Gutachter dokumentiert alle Schäden gründlich." : "Sie erhalten Ihr Gutachten innerhalb von 24–72 Stunden."}</p>
                            </div>
                        ))}
                    </div>

                    {/* WhatsApp CTA */}
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <a
                            href="https://wa.me/4902111234567"
                            className="btn btn-whatsapp"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                padding: '16px 32px',
                                fontSize: '18px',
                                borderRadius: '50px',
                                boxShadow: '0 10px 30px rgba(37, 211, 102, 0.3)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px'
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.113 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785h-.005a9.868 9.868 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374A9.86 9.86 0 0 1 2.17 12.06c0-5.456 4.436-9.893 9.9-9.893a9.827 9.827 0 0 1 7.001 2.902 9.828 9.828 0 0 1 2.893 7.003c-.004 5.456-4.44 9.893-9.913 9.893zM20.52 3.449C18.24 1.245 15.24 0 12.05 0 5.463 0 .104 5.334.101 11.893a11.793 11.793 0 0 0 1.587 5.946L0 24l6.335-1.652A11.882 11.882 0 0 0 12.05 24c6.584 0 11.94-5.335 11.943-11.893a11.808 11.808 0 0 0-3.473-8.658z" />
                            </svg>
                            WhatsApp schreiben
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
