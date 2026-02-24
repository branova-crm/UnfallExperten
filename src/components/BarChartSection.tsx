"use client";

import { useEffect, useRef, useState } from 'react';

export default function BarChartSection() {
    const chartRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = chartRef.current;
        if (!el) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        observer.observe(el);

        return () => {
            if (el) observer.unobserve(el);
        };
    }, []);

    return (
        <section className="appraisal-section">
            <div className="container">
                <div className="appraisal-grid">
                    <div>
                        <span className="section-label">Gut zu wissen</span>
                        <h2 className="section-title">Gutachten vermeiden ungerechte Schadenszahlungen</h2>
                        <p className="section-subtitle">Viele Geschädigte verlieren bares Geld, weil sie sich auf den Kostenvoranschlag der gegnerischen Versicherung verlassen. Ein unabhängiges Gutachten sichert Ihre Ansprüche – und bringt im Schnitt 30–40 % mehr Auszahlung.</p>
                        <div className="bar-chart" ref={chartRef}>
                            <div className="bar-item">
                                <div className="bar-label">Gegnerische Versicherung</div>
                                <div className="bar-track">
                                    <div className={`bar-fill low ${isVisible ? 'animated' : ''}`} style={{ width: isVisible ? '35%' : '0%' }}>2.100 €</div>
                                </div>
                            </div>
                            <div className="bar-item">
                                <div className="bar-label">Kostenvoranschlag Werkstatt</div>
                                <div className="bar-track">
                                    <div className={`bar-fill mid ${isVisible ? 'animated' : ''}`} style={{ width: isVisible ? '60%' : '0%' }}>3.600 €</div>
                                </div>
                            </div>
                            <div className="bar-item">
                                <div className="bar-label">UnfallExperten NRW Gutachten</div>
                                <div className="bar-track">
                                    <div className={`bar-fill high ${isVisible ? 'animated' : ''}`} style={{ width: isVisible ? '95%' : '0%' }}>5.700 €</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="appraisal-portrait animate-on-scroll visible">
                        <img src="/images/hero-bg.png" alt="UnfallExperten NRW Team" loading="lazy" />
                        <p className="appraisal-caption">Unser erfahrenes Team von Kfz-Sachverständigen</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
