"use client";

import { useState } from "react";

const FAQ_DATA = [
    {
        q: "Was macht ein Kfz-Gutachter in NRW?",
        a: "Ein Kfz-Gutachter (Sachverständiger) dokumentiert und bewertet Fahrzeugschäden nach einem Unfall. Er erstellt ein unabhängiges Gutachten, das alle Schäden, die Reparaturkosten, eine mögliche Wertminderung und den Wiederbeschaffungswert Ihres Fahrzeugs erfasst. Dieses Gutachten dient als Grundlage für die Schadensregulierung mit der Versicherung."
    },
    {
        q: "Wer zahlt den Gutachter nach einem Unfall?",
        a: "Bei einem unverschuldeten Unfall übernimmt die gegnerische Versicherung (Haftpflichtversicherung des Unfallverursachers) die Kosten für den Gutachter. Für Sie als Geschädigten entstehen keinerlei Kosten. Bei Kaskoschäden können die Kosten je nach Versicherungsvertrag variieren – wir beraten Sie gerne vorab."
    },
    {
        q: "Wie lange dauert die Gutachtenerstellung?",
        a: "In der Regel erstellen wir Ihr Gutachten innerhalb von 24 bis 72 Stunden nach der Begutachtung vor Ort. Bei dringenden Fällen bieten wir auch einen Express-Service an. Sie erhalten das fertige Dokument digital per E-Mail oder auf Wunsch auch als Ausdruck."
    },
    {
        q: "Muss ich den Gutachter der gegnerischen Versicherung akzeptieren?",
        a: "Nein! Sie haben als Geschädigter das Recht, einen eigenen unabhängigen Gutachter zu wählen. Versicherungen schlagen oft eigene Gutachter vor, die tendenziell die Schadenshöhe niedriger bewerten. Ein unabhängiger Gutachter wie UnfallExperten NRW vertritt ausschließlich Ihre Interessen."
    },
    {
        q: "Kann ich den Gutachter auch für Motorräder, Oldtimer oder LKW beauftragen?",
        a: "Ja, unsere Sachverständigen sind für alle Fahrzeugtypen qualifiziert – ob PKW, Motorrad, E-Auto, LKW, Wohnmobil, Anhänger oder Oldtimer. Bei besonderen Fahrzeugen berücksichtigen wir selbstverständlich deren speziellen Wert und Besonderheiten."
    },
    {
        q: "Warum ist ein unabhängiges Gutachten wichtig?",
        a: "Ein unabhängiges Gutachten schützt Sie vor zu niedrigen Schadenszahlungen. Versicherungsgutachter und Werkstatt-Kostenvoranschläge liegen erfahrungsgemäß 30–40 % unter dem tatsächlichen Schadenwert. Unser Gutachten erfasst zudem Wertminderung, Nutzungsausfall und weitere Ansprüche, die sonst oft übersehen werden."
    },
    {
        q: "Was ist mit Mietwagen und Nutzungsausfall?",
        a: "Bei einem unverschuldeten Unfall steht Ihnen ein Mietwagen oder eine Nutzungsausfallentschädigung zu. Wir vermitteln Ihnen auf Wunsch einen Mietwagen und kümmern uns um die Abrechnung. Die Nutzungsausfallentschädigung wird in unserem Gutachten dokumentiert."
    },
    {
        q: "Welche Unterlagen benötigt ihr?",
        a: "Für die Gutachtenerstellung benötigen wir: den Unfallbericht, Ihren Fahrzeugschein (Zulassungsbescheinigung Teil I), Fotos vom Unfallort (falls vorhanden) und die Kontaktdaten der gegnerischen Versicherung. Falls Unterlagen fehlen, helfen wir Ihnen bei der Beschaffung."
    }
];

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
            <div className="container">
                <div className="text-center">
                    <span className="section-label" style={{ color: 'var(--clr-accent)' }}>Häufige Fragen</span>
                    <h2 className="section-title text-white">Ihre Fragen – unsere Antworten</h2>
                    <p className="section-subtitle mx-auto">Hier finden Sie Antworten auf die häufigsten Fragen rund um Kfz-Gutachten und Unfallabwicklung in NRW.</p>
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
