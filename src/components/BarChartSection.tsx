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
                <div className="appraisal-grid" style={{ gridTemplateColumns: '1fr', maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center' }}>
                        <span className="section-label" style={{ color: 'var(--clr-primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Gutachten vermeiden ungerechte Schadenszahlungen</span>
                        <h2 className="section-title" style={{ marginBottom: '2.5rem', color: 'var(--clr-text)' }}>Bei uns gibt es keine Schätzung, sondern Ergebnisse.</h2>
                        <div className="bar-chart" ref={chartRef}>
                            {/* Low Bar */}
                            <div className="bar-item">
                                <div className="bar-title-mobile">Gegnerische Versicherung</div>
                                <div className="bar-track">
                                    <div className={`bar-fill low ${isVisible ? 'animated' : ''}`} style={{ width: isVisible ? '30%' : '10%' }}>
                                        <span className="label-desktop">Gegnerische Versicherung</span>
                                        <span className="price-mobile">2.100 €</span>
                                    </div>
                                    <span className="bar-price-desktop">2.100 €</span>
                                </div>
                            </div>
                            
                            {/* Mid Bar */}
                            <div className="bar-item">
                                <div className="bar-title-mobile">Kostenvoranschlag Werkstatt</div>
                                <div className="bar-track">
                                    <div className={`bar-fill mid ${isVisible ? 'animated' : ''}`} style={{ width: isVisible ? '55%' : '10%' }}>
                                        <span className="label-desktop">Kostenvoranschlag Werkstatt</span>
                                        <span className="price-mobile">3.600 €</span>
                                    </div>
                                    <span className="bar-price-desktop">3.600 €</span>
                                </div>
                            </div>

                            {/* High Bar */}
                            <div className="bar-item">
                                <div className="bar-title-mobile">UnfallExperten NRW Gutachten</div>
                                <div className="bar-track">
                                    <div className={`bar-fill high ${isVisible ? 'animated' : ''} shine-bar`} style={{ width: isVisible ? '82%' : '10%', position: 'relative', overflow: 'hidden' }}>
                                        <span className="label-desktop">UnfallExperten NRW Gutachten</span>
                                        <span className="price-mobile">5.700 €</span>
                                    </div>
                                    <span className="bar-price-desktop">5.700 €</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
