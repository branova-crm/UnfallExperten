'use client';

import { useState } from 'react';

const ABOUT_FAQ = [
    {
        q: 'Warum ist das Gutachten für mich als Geschädigten kostenlos?',
        a: 'Bei einem unverschuldeten Unfall trägt in der Regel die gegnerische Haftpflichtversicherung die notwendigen Kosten der Schadenfeststellung. Dazu kann auch ein unabhängiges Gutachten gehören.',
    },
    {
        q: 'Was unterscheidet UnfallExperten von einem Versicherungsgutachter?',
        a: 'Ein Versicherungsgutachter wird von der Versicherung beauftragt. UnfallExperten unterstützt Sie unabhängig und dokumentiert den Schaden nachvollziehbar aus Sicht des Geschädigten.',
    },
    {
        q: 'Wie schnell kann jemand vor Ort sein?',
        a: 'Wir sind kurzfristig erreichbar und prüfen schnellstmöglich, wann ein Termin bei Ihnen vor Ort möglich ist.',
    },
    {
        q: 'Muss ich mit meinem Fahrzeug zu Ihnen kommen?',
        a: 'Nein. Wir kommen je nach Situation direkt zum Unfallort, zu Ihnen nach Hause, zur Werkstatt oder an Ihren Arbeitsplatz.',
    },
    {
        q: 'Kann ich den Schaden zuerst per WhatsApp melden?',
        a: 'Ja. Sie können uns Fotos und erste Informationen bequem per WhatsApp senden. Danach melden wir uns zur weiteren Einschätzung.',
    },
];

export default function AboutFaq() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="about-faq-section about-faq" id="faq">
            <div className="container">
                <div className="text-center about-reveal">
                    <span className="section-label">FAQ</span>
                    <h2 className="section-title">Häufige Fragen</h2>
                    <p className="section-subtitle mx-auto">Antworten zu Gutachten, Erreichbarkeit und Ablauf – kurz und verständlich.</p>
                </div>
                <div className="faq-list about-faq-list about-stagger about-reveal about-delay-1">
                    {ABOUT_FAQ.map((faq, index) => (
                        <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
                            <button type="button" className="faq-question about-faq-question" onClick={() => toggle(index)}>
                                {faq.q}
                                <span className="faq-toggle">
                                    <svg viewBox="0 0 24 24" aria-hidden="true">
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
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
