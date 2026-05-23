'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const JOURNEY_STEPS = [
    {
        period: '[JAHR / ZEITRAUM 1]',
        title: '[Erste Station / Einstieg]',
        text: 'Hier steht ein kurzer Platzhaltertext zur ersten wichtigen Station. Dieser Text kann später durch echte Informationen ersetzt werden und beschreibt knapp den Einstieg oder den Startpunkt.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-5" />
            </svg>
        ),
    },
    {
        period: '[JAHR / ZEITRAUM 2]',
        title: '[Ausbildung / Weiterbildung / Entwicklungsschritt]',
        text: 'Dieser Platzhalter beschreibt den nächsten Entwicklungsschritt. Später kann hier eine echte berufliche oder fachliche Station mit eigenen Worten eingefügt werden.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
        ),
    },
    {
        period: '[JAHR / ZEITRAUM 3]',
        title: '[Praxisphase / Spezialisierung]',
        text: 'Dieser Abschnitt dient als Muster für eine Phase mit praktischer Erfahrung, zusätzlicher Spezialisierung oder wachsender Verantwortung.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
        ),
    },
    {
        period: '[JAHR / ZEITRAUM 4]',
        title: '[Weiterer Meilenstein]',
        text: 'Hier kann später ein weiterer Meilenstein ergänzt werden, etwa eine zusätzliche Qualifikation, ein besonderer Entwicklungsschritt oder eine relevante berufliche Phase.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="8" r="6" />
                <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
            </svg>
        ),
    },
    {
        period: '[JAHR / ZEITRAUM 5]',
        title: '[Aufbau / Positionierung / neuer Schwerpunkt]',
        text: 'Dieser Platzhalter steht für den nächsten wichtigen Schritt im Werdegang und kann später mit individuellen Inhalten ersetzt werden.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
            </svg>
        ),
    },
    {
        period: '[SEIT / HEUTE]',
        title: '[Heutige Position / aktueller Stand]',
        text: 'Dieser Platzhalter beschreibt die heutige Rolle, den aktuellen Schwerpunkt oder den heutigen beruflichen Status und kann später mit den finalen Informationen vervollständigt werden.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
            </svg>
        ),
    },
];

const TRIGGER_RATIO = 0.58;

export default function AboutJourneyTimeline() {
    const timelineRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<(HTMLElement | null)[]>([]);
    const [progressPct, setProgressPct] = useState(0);
    const [activeThrough, setActiveThrough] = useState(-1);
    const [reduceMotion, setReduceMotion] = useState(false);

    const setItemRef = useCallback((index: number) => (el: HTMLElement | null) => {
        itemRefs.current[index] = el;
    }, []);

    useEffect(() => {
        const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
        const applyMotionPref = () => setReduceMotion(mq.matches);
        applyMotionPref();
        mq.addEventListener('change', applyMotionPref);
        return () => mq.removeEventListener('change', applyMotionPref);
    }, []);

    useEffect(() => {
        const update = () => {
            const timeline = timelineRef.current;
            const line = lineRef.current;
            const items = itemRefs.current.filter((el): el is HTMLElement => el !== null);

            if (!timeline || !line || items.length === 0) return;

            const lineRect = line.getBoundingClientRect();
            const lineHeight = lineRect.height;
            if (lineHeight <= 0) return;

            const triggerY = window.innerHeight * TRIGGER_RATIO;
            const lineStart = lineRect.top;
            const lineEnd = lineRect.bottom;

            let maxActive = -1;
            items.forEach((item, index) => {
                const iconWrap = item.querySelector('.about-journey-icon-wrap');
                if (!iconWrap) return;
                const iconRect = iconWrap.getBoundingClientRect();
                const iconCenter = iconRect.top + iconRect.height / 2;
                if (iconCenter <= triggerY) {
                    maxActive = index;
                }
            });

            const rawProgress = (triggerY - lineStart) / (lineEnd - lineStart);
            const clamped = Math.min(Math.max(rawProgress, 0), 1);

            setProgressPct(clamped * 100);
            setActiveThrough(maxActive);
        };

        update();

        if (reduceMotion) {
            setProgressPct(100);
            setActiveThrough(JOURNEY_STEPS.length - 1);
            return;
        }

        let raf = 0;
        const onScroll = () => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(update);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll, { passive: true });

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, [reduceMotion]);

    return (
        <section className="about-journey about-chapter about-chapter--journey">
            <div className="about-chapter-bg" aria-hidden="true" />
            <div className="container">
                <div className="about-journey-header about-reveal">
                    <span className="about-journey-kicker">MEIN WEG</span>
                    <h2 className="about-journey-headline">Von [erster Station] bis zu [heutiger Position]</h2>
                    <p className="about-journey-intro">
                        Jeder Schritt hat dazu beigetragen, meinen heutigen Weg zu formen.
                    </p>
                </div>

                <div className="about-journey-timeline" ref={timelineRef}>
                    <div className="about-journey-line" ref={lineRef} aria-hidden="true">
                        <div className="about-journey-line-track" />
                        <div
                            className="about-journey-line-progress"
                            style={{ height: `${progressPct}%` }}
                        />
                        {!reduceMotion && (
                            <div
                                className="about-journey-laser-head"
                                style={{ top: `${progressPct}%` }}
                            />
                        )}
                    </div>

                    {JOURNEY_STEPS.map((step, index) => {
                        const isActive = index <= activeThrough;
                        const isFinal = index === JOURNEY_STEPS.length - 1;
                        const isFinalActive = isFinal && isActive;

                        return (
                            <article
                                key={step.period}
                                ref={setItemRef(index)}
                                className={`about-journey-item${isActive ? ' about-journey-item--active' : ''}${isFinal ? ' about-journey-item--final' : ''}`}
                            >
                                <div className="about-journey-marker">
                                    <div
                                        className={`about-journey-icon-wrap${isActive ? ' about-journey-icon-wrap--active' : ''}${isFinal ? ' about-journey-icon-wrap--final' : ''}${isFinalActive ? ' about-journey-icon-wrap--final-active' : ''}`}
                                    >
                                        {!reduceMotion && isFinalActive && (
                                            <>
                                                <span className="about-journey-echo" aria-hidden="true" />
                                                <span className="about-journey-echo about-journey-echo--delayed" aria-hidden="true" />
                                                <span className="about-journey-ring-loop" aria-hidden="true" />
                                            </>
                                        )}
                                        {!reduceMotion && isActive && !isFinal && (
                                            <span className="about-journey-ring-loop" aria-hidden="true" />
                                        )}
                                        <div className="about-journey-icon" aria-hidden="true">
                                            {step.icon}
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={`about-journey-content about-journey-card${isActive ? ' about-journey-card--active' : ''}`}
                                >
                                    <span className="about-journey-label">{step.period}</span>
                                    <h3 className="about-journey-title">{step.title}</h3>
                                    <p className="about-journey-text">{step.text}</p>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
