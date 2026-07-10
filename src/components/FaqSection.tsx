"use client";

import { useState } from "react";
import { HOME_FAQ as FAQ_DATA } from "@/lib/faq-home";

export default function FaqSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <section className="faq-section" id="faq">
            <div className="container" style={{ position: 'relative', zIndex: 5 }}>
                <div className="text-center">
                    <span className="section-label" style={{ color: 'var(--clr-white)' }}>Häufige Fragen</span>
                    <h2 className="section-title text-white">Ihre Fragen – unsere Antworten</h2>
                    <p className="section-subtitle mx-auto">Hier finden Sie Antworten auf die häufigsten Fragen rund um KFZ-Gutachten und Unfallabwicklung in NRW.</p>
                </div>
                <div className="faq-list">
                    {FAQ_DATA.map((faq, index) => (
                        <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
                            <button className="faq-question" onClick={() => toggle(index)} suppressHydrationWarning>
                                {faq.q}
                                <span className="faq-toggle">
                                    <svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9" /></svg>
                                </span>
                            </button>
                            <div className="faq-answer">
                                <div className="faq-answer-inner">{faq.a}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
