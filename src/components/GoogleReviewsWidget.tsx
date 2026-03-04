"use client";

import React, { useState, useEffect, useCallback } from "react";
import "./GoogleReviewsWidget.css";

const reviews = [
    {
        id: 1,
        name: "Heinz Vorlauf",
        date: "vor 3 Wochen",
        rating: 5,
        text: "Uneingeschränkt empfehlenswert! Ich bin mit der Arbeit von UnfallExperten-NRW mehr als zufrieden. Vom ersten Kontakt an habe ich gemerkt, dass hier echte Profis am Werk sind. Die Kommunikation war jederzeit freundlich, transparent und verständlich – alle meine Fragen wurden geduldig und kompetent beantwortet. Die Terminvereinbarung ging schnell und unkompliziert, und das Gutachten wurde äußerst sorgfältig und professionell erstellt.",
        color: "#0097a7",
    },
    {
        id: 2,
        name: "Silvia Königsfeld",
        date: "vor 1 Monat",
        rating: 5,
        text: "Sehr freundlich, schnell und zuverlässig. Immer wieder zu empfehlen. Danke für Ihre Mühe!",
        color: "#5c6bc0",
    },
    {
        id: 3,
        name: "Abdalkhalak Jnzarli",
        date: "vor 2 Monaten",
        rating: 5,
        text: "10 von 10 Absolute Empfehlung!!!!",
        color: "#7b1fa2",
    },
    {
        id: 4,
        name: "Kaan Yilmaz",
        date: "vor 2 Monaten",
        rating: 5,
        text: "Der Gutachter hat für meinen Mercedes CLA eine Fahrzeugbewertung im Rahmen des Verkaufs durchgeführt. Die Abwicklung verlief sehr professionell, transparent und zuverlässig. Die Bewertung war nachvollziehbar, detailliert und wurde verständlich erklärt. Besonders hervorzuheben sind die Fachkompetenz, die objektive Einschätzung des Fahrzeugzustands sowie die zügige Terminvergabe. Insgesamt ein sehr seriöser Service, den ich uneingeschränkt weiterempfehlen kann.",
        color: "#ec407a",
    },
    {
        id: 5,
        name: "Norbu Naktsang",
        date: "vor 2 Monaten",
        rating: 5,
        text: "Ich bin mit dem erstellten Unfallgutachten rundum zufrieden. Die Abwicklung war von Anfang an sehr professionell, transparent und zuverlässig. Der Gutachter hat sich viel Zeit genommen, den Schaden gründlich und detailliert aufzunehmen und alle meine Fragen verständlich zu beantworten. Sehr empfehlenswert!",
        color: "#689f38",
    },
    {
        id: 6,
        name: "lukas chodaczek",
        date: "vor 2 Monaten",
        rating: 5,
        text: "Top Arbeit, hier wird schnell und professionell geholfen. Sehr zu empfehlen.",
        color: "#004d40",
    },
];

function Stars() {
    return (
        <span className="grw-stars">
            {[0, 1, 2, 3, 4].map((i) => (
                <svg key={i} viewBox="0 0 24 24" width="20" height="20" fill="#FBBC05">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
            ))}
        </span>
    );
}

export default function GoogleReviewsWidget() {
    const [idx, setIdx] = useState(0);
    const [paused, setPaused] = useState(false);
    const [popup, setPopup] = useState<(typeof reviews)[0] | null>(null);

    const maxIdx = reviews.length - 3; // max slide index so 3 cards always visible

    const goNext = useCallback(() => {
        setIdx((p) => (p >= maxIdx ? 0 : p + 1));
    }, [maxIdx]);

    const goPrev = useCallback(() => {
        setIdx((p) => (p <= 0 ? maxIdx : p - 1));
    }, [maxIdx]);

    useEffect(() => {
        if (paused || popup) return;
        const t = setInterval(goNext, 5000);
        return () => clearInterval(t);
    }, [paused, popup, goNext]);

    const handleNav = (dir: number) => {
        if (dir > 0) goNext();
        else goPrev();
        setPaused(true);
        setTimeout(() => setPaused(false), 8000);
    };

    // Each card is 1/3 of viewport width → slide by (100/3)% per step
    const offset = idx * (100 / 3);

    return (
        <>
            <div className="grw">
                {/* Left – Summary */}
                <div className="grw-left">
                    <p className="grw-label">AUSGEZEICHNET</p>
                    <Stars />
                    <p className="grw-count">
                        Basierend auf <a href="https://share.google/gMPigx0Pjic4gxBA8" target="_blank" rel="noopener noreferrer"><b>+8 Bewertungen</b></a>
                    </p>
                    <div className="grw-brand">
                        <svg viewBox="0 0 24 24" width="24" height="24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.07 5.07 0 01-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.07-3.71 1.07-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11.96 11.96 0 0012 23z" fill="#34A853" />
                            <path d="M5.84 14.11A7.12 7.12 0 015.49 12c0-.73.13-1.43.35-2.11V7.06H2.18A11.96 11.96 0 001 12c0 1.94.46 3.77 1.18 5.41l3.66-3.3z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.83c.87-2.6 3.3-4.51 6.16-4.51z" fill="#EA4335" />
                        </svg>
                        <span>Google</span>
                    </div>
                </div>

                {/* Right – Slider */}
                <div className="grw-right">
                    <button className="grw-arrow grw-arrow-l" onClick={() => handleNav(-1)} aria-label="Zurück">
                        ‹
                    </button>

                    <div className="grw-viewport">
                        <div className="grw-track" style={{ transform: `translateX(-${offset}%)` }}>
                            {reviews.map((r) => (
                                <div className="grw-slide" key={r.id}>
                                    <div className="grw-card">
                                        <div className="grw-card-head">
                                            <span className="grw-avatar" style={{ background: r.color }}>
                                                {r.name.split(" ").map((w) => w[0]).join("")}
                                            </span>
                                            <span className="grw-name-block">
                                                <b>{r.name}</b>
                                                <small>{r.date}</small>
                                            </span>
                                            <svg className="grw-check" viewBox="0 0 24 24" width="20" height="20" fill="#34A853">
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                            </svg>
                                        </div>
                                        <div className="grw-card-stars">
                                            <Stars />
                                            <svg viewBox="0 0 24 24" width="14" height="14" fill="rgba(0,0,0,.35)">
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                            </svg>
                                        </div>
                                        <p className="grw-card-text">{r.text}</p>
                                        <button className="grw-more" onClick={() => setPopup(r)}>Weiterlesen</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button className="grw-arrow grw-arrow-r" onClick={() => handleNav(1)} aria-label="Weiter">
                        ›
                    </button>
                </div>
            </div>

            {/* Popup */}
            {popup && (
                <div className="grw-overlay" onClick={() => setPopup(null)}>
                    <div className="grw-popup" onClick={(e) => e.stopPropagation()}>
                        <button className="grw-popup-close" onClick={() => setPopup(null)}>×</button>
                        <div className="grw-card-head" style={{ marginBottom: 20 }}>
                            <span className="grw-avatar" style={{ background: popup.color, width: 56, height: 56, fontSize: "1.4rem" }}>
                                {popup.name.split(" ").map((w) => w[0]).join("")}
                            </span>
                            <span className="grw-name-block">
                                <b style={{ fontSize: "1.3rem" }}>{popup.name}</b>
                                <small>{popup.date}</small>
                            </span>
                        </div>
                        <div className="grw-card-stars" style={{ marginBottom: 20 }}>
                            <Stars />
                        </div>
                        <p style={{ fontSize: "1.05rem", lineHeight: 1.65, color: "#222" }}>{popup.text}</p>
                    </div>
                </div>
            )}
        </>
    );
}
