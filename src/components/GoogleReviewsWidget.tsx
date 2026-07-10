"use client";

import React, { useState, useEffect, useCallback } from "react";
import "./GoogleReviewsWidget.css";

const reviews = [
    {
        id: 1,
        name: "Kaan Yilmaz",
        rating: 5,
        text: "Der Gutachter hat für meinen Mercedes CLA eine Fahrzeugbewertung im Rahmen des Verkaufs durchgeführt. Die Abwicklung verlief sehr professionell, transparent und zuverlässig. Die Bewertung war nachvollziehbar, detailliert und wurde verständlich erklärt. Besonders positiv hervorzuheben sind die Fachkompetenz, die objektive Einschätzung des Fahrzeugzustands sowie die zügige Terminvergabe. Insgesamt ein sehr seriöser Service, den ich uneingeschränkt weiterempfehlen kann.",
        color: "#ec407a",
    },
    {
        id: 2,
        name: "Heinz Vorlauf",
        rating: 5,
        text: "Uneingeschränkt empfehlenswert!\n\nIch bin mit der Arbeit von UnfallExperten-NRW mehr als zufrieden. Vom ersten Kontakt an habe ich gemerkt, dass hier echte Profis am Werk sind. Die Kommunikation war jederzeit freundlich, transparent und verständlich – alle meine Fragen wurden geduldig und kompetent beantwortet.\n\nDie Terminvereinbarung ging schnell und unkompliziert, und das Gutachten wurde äußerst sorgfältig und professionell erstellt. Man merkt sofort, dass hier viel Erfahrung und Fachwissen vorhanden ist. Ich hatte zu jeder Zeit das Gefühl, ehrlich beraten zu werden und dass meine Interessen im Mittelpunkt stehen.\n\nBesonders positiv fand ich die Zuverlässigkeit und die klare Erklärung der nächsten Schritte, was einem in einer ohnehin stressigen Situation nach einem Unfall sehr viel Sicherheit gibt. Genau so stellt man sich einen seriösen und vertrauenswürdigen Gutachter vor.\n\nIch würde UnfallExperten-NRW jederzeit wieder beauftragen und kann das Unternehmen ohne Einschränkungen jedem empfehlen, der einen kompetenten, fairen und professionellen Kfz-Gutachter sucht.",
        color: "#0097a7",
    },
    {
        id: 3,
        name: "Lukas Kreidler",
        rating: 5,
        text: "Die Terminvereinbarung verlief völlig problemlos, und vor Ort hat mich die moderne und sehr gepflegte Halle direkt überzeugt. Man wurde freundlich empfangen und sogar mit Kaffee versorgt. Von der Schadenaufnahme über das fertige Gutachten bis hin zur Regulierung ging alles äußerst schnell und ohne irgendwelche Umstände. Rundum ein hervorragender Service. Klare Weiterempfehlung!",
        color: "#5c6bc0",
    },
    {
        id: 4,
        name: "Jason Rodrigues",
        rating: 5,
        text: "Bin sehr zufrieden, vielen Dank. Kann nur weiterempfehlen. Schnelle Terminvergabe, schnelle Abwicklung.",
        color: "#7b1fa2",
    },
    {
        id: 5,
        name: "Kristina Sate",
        rating: 5,
        text: "Ich bin mit der Arbeit des Gutachters, Herrn Berkay Okur, nach meinem Autounfall sehr zufrieden. Die gesamte Abwicklung verlief schnell, professionell und zuverlässig. Alles wurde verständlich erklärt, und ich habe mich jederzeit gut beraten gefühlt. Besonders positiv fand ich die freundliche Kommunikation, die schnelle Terminvergabe und die sorgfältige Erstellung des Gutachtens. Dank der Unterstützung lief alles unkompliziert über den Anwalt. Klare Empfehlung – kompetent, engagiert und vertrauenswürdig. Vielen Dank für die tolle Hilfe!",
        color: "#689f38",
    },
    {
        id: 6,
        name: "Wayne B.",
        rating: 5,
        text: "Sehr zuverlässiger, engagierter, gründlicher und vertrauenswürdiger Gutachter. Nach Erstkontakt habe ich am Unfalltag, abends noch einen Termin bekommen zur Begutachtung, für den man sich gründlich Zeit genommen hat. Professioneller Ablauf! Absolut weiter zu empfehlen. Ich danke vielmals für den TOP Service.",
        color: "#004d40",
    },
    {
        id: 7,
        name: "Kevin Mahr",
        rating: 5,
        text: "Super Erfahrung mit dem KFZ-Gutachter! Alles lief total unkompliziert und entspannt ab. Termin ging schnell, die Begutachtung war gründlich und verständlich erklärt. Das Gutachten kam auch zügig – genau so wünscht man sich das. Man fühlt sich einfach gut aufgehoben. Klare Empfehlung!",
        color: "#d84315",
    },
    {
        id: 8,
        name: "Niko",
        rating: 5,
        text: "The service was very professional and uncomplicated, the engineer was fast and friendly. The collection of the necessary data was quick and thorough. Thanks!",
        color: "#1565c0",
    },
    {
        id: 9,
        name: "Eraldi Hamolli",
        rating: 5,
        text: "Super angenehm und kompetente Begutachtung. Terminvereinbarung lief schnell und zuverlässig, Rückfragen wurden auch geduldig und transparent beantwortet.\nDanke dafür, absolut empfehlenswert.",
        color: "#6d4c41",
    },
    {
        id: 10,
        name: "Norbu Naktsang",
        rating: 5,
        text: "Ich bin mit dem erstellten Unfallgutachten rundum zufrieden. Die Abwicklung war von Anfang an sehr professionell, transparent und zuverlässig. Der Gutachter hat sich viel Zeit genommen, den Schaden gründlich und detailliert aufzunehmen und alle meine Fragen verständlich zu beantworten. Sehr empfehlenswert!",
        color: "#00838f",
    },
    {
        id: 11,
        name: "Hüseyin",
        rating: 5,
        text: "Bin sehr zufrieden mit der Abwicklung! In meinem Fall musste es sehr schnell gehen, was für den Gutachter kein Problem war! Ein Anruf und der Gutachter war innerhalb weniger Minuten da. Das Gutachten wurde sehr präzise und genau erstellt und die Versicherung hat dies bestätigt. Auch in der Zukunft werde ich hier meine Gutachten erstellen lassen. Viele Grüße",
        color: "#ad1457",
    },
    {
        id: 12,
        name: "Silvia Königsfeld",
        rating: 5,
        text: "Sehr freundlich, schnell und zuverlässig. Immer wieder zu empfehlen. Danke für Ihre Mühe!",
        color: "#2e7d32",
    },
    {
        id: 13,
        name: "Anja Weist",
        rating: 5,
        text: "Man merkt, dass ein Fachmann am Werk ist … ich bin sehr zufrieden … Daumen hoch",
        color: "#4527a0",
    },
    {
        id: 14,
        name: "lukas chodaczek",
        rating: 5,
        text: "Top Arbeit, hier wird schnell und professionell geholfen. Sehr zu empfehlen.",
        color: "#c62828",
    },
    {
        id: 15,
        name: "Abdalkhalak Jnzarli",
        rating: 5,
        text: "10 von 10 Absolute Empfehlung!!!!",
        color: "#00695c",
    },
    {
        id: 16,
        name: "Marcel Teixeira",
        rating: 5,
        text: "Wenn ich könnte, würde ich noch mehr als 5 Sterne vergeben! Über den gesamten Prozess, vom Gutachten bis zur finalen Auszahlung der gegnerischen Versicherung war Berkay stets sehr engagiert, immer erreichbar und hilfsbereit.\nVielen Dank!",
        color: "#f9a825",
    },
    {
        id: 17,
        name: "Virgil Ardeleanu",
        rating: 5,
        text: "Ein hervorragender Service! Ich habe ein Gutachten für meinen Verkehrsunfall erstellen lassen und bin äußerst zufrieden. Sehr schnelle Terminvergabe, klare Kommunikation und ein professionelles Gutachten, das direkt an meine Kanzlei weitergeleitet wurde. Herr Okur war freundlich, zuverlässig und hat alles transparent erklärt. Absolut empfehlenswert für jeden, der ein präzises und seriöses Unfallgutachten braucht.",
        color: "#283593",
    },
    {
        id: 18,
        name: "Karl heinz Schmitz",
        rating: 5,
        text: "Sehr schnelle Abwicklung, brauchte mich um nichts zu kümmern, bin sehr zufrieden.",
        color: "#37474f",
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
    const [visibleCount, setVisibleCount] = useState(3);
    const [hasMounted, setHasMounted] = useState(false);
    const [popup, setPopup] = useState<(typeof reviews)[0] | null>(null);

    useEffect(() => {
        setHasMounted(true);
        const handleResize = () => {
            if (window.innerWidth < 768) setVisibleCount(1);
            else if (window.innerWidth < 1024) setVisibleCount(2);
            else setVisibleCount(3);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIdx = Math.max(0, reviews.length - visibleCount); 

    const goNext = useCallback(() => {
        setIdx((p) => (p >= maxIdx ? 0 : p + 1));
    }, [maxIdx]);

    const goPrev = useCallback(() => {
        setIdx((p) => (p <= 0 ? maxIdx : p - 1));
    }, [maxIdx]);

    useEffect(() => {
        if (paused || popup || !hasMounted) return;
        const t = setInterval(goNext, 5000);
        return () => clearInterval(t);
    }, [paused, popup, goNext, hasMounted]);

    const handleNav = (dir: number) => {
        if (dir > 0) goNext();
        else goPrev();
        setPaused(true);
        setTimeout(() => setPaused(false), 8000);
    };

    const offset = idx * (100 / visibleCount);

    if (!hasMounted) return null;

    return (
        <>
            <div className="grw">
                {/* Left – Summary */}
                <div className="grw-left">
                    <p className="grw-label">AUSGEZEICHNET</p>
                    <Stars />
                    <p className="grw-count">
                        Basierend auf <a href="https://share.google/gMPigx0Pjic4gxBA8" target="_blank" rel="noopener noreferrer"><b>21 Bewertungen</b></a>
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
                            </span>
                        </div>
                        <div className="grw-card-stars" style={{ marginBottom: 20 }}>
                            <Stars />
                        </div>
                        <p style={{ fontSize: "1.05rem", lineHeight: 1.65, color: "#222", whiteSpace: "pre-line" }}>{popup.text}</p>
                    </div>
                </div>
            )}
        </>
    );
}
