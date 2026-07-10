'use client';

import { useRef } from 'react';

const cases = [
    {
        title: 'Mercedes GLC Coupe – Lack- und Karosseriespuren',
        description:
            'Bei dem grauen Mercedes wurden Gesamtansichten und Detailaufnahmen kombiniert. So bleibt nachvollziehbar, wo der Schaden liegt und wie er sich im Verhältnis zur gesamten Fahrzeugseite darstellt.',
        rows: [
            { label: 'Fokus', value: 'Lack, Kante, Heckbereich' },
            { label: 'Dokumentation', value: '6 Bilder' },
            { label: 'Nutzen', value: 'Schaden eindeutig zuordenbar' },
        ],
        result: 'Wichtig für Geschädigte: Der sichtbare Kleinschaden wird beweissicher festgehalten.',
        footer:
            'Gerade bei hochwertigen Fahrzeugen können saubere Detailbilder helfen, Kürzungen oder pauschale Einschätzungen besser einzuordnen.',
    },
    {
        title: 'BMW X3 – Frontschaden und Anbauteile',
        description:
            'Beim schwarzen BMW X3 wurde der Frontbereich aus mehreren Perspektiven aufgenommen. Neben den Übersichten sind besonders Gitter, Scheinwerferumfeld und Radbereich relevant.',
        rows: [
            { label: 'Fokus', value: 'Front, Radlauf, Anbauteile' },
            { label: 'Dokumentation', value: '9 Bilder' },
            { label: 'Nutzen', value: 'Detailprüfung statt Sichtprüfung' },
        ],
        result: 'Wichtig für Geschädigte: Auch angrenzende Bauteile werden nachvollziehbar dokumentiert.',
        footer:
            'Mehrere Blickwinkel helfen, Schäden an Stoßfänger, Haltern, Leuchten oder angrenzenden Bereichen nicht zu übersehen.',
    },
    {
        title: 'VW Polo – deutlicher Seitenschaden',
        description:
            'Die Serie des blauen VW Polo zeigt einen deutlich sichtbaren Seitenschaden mit Messskala und vielen Detailaufnahmen. Dadurch wird der Schadenumfang kompakt, aber belastbar sichtbar.',
        rows: [
            { label: 'Fokus', value: 'Tür, Schweller, Radlauf' },
            { label: 'Dokumentation', value: '23 Bilder' },
            { label: 'Nutzen', value: 'Schadenumfang klar belegt' },
        ],
        result: 'Wichtig für Geschädigte: Die Mess- und Detailbilder schaffen eine klare Grundlage für die Regulierung.',
        footer:
            'Bei Seitenschäden ist die Abgrenzung zwischen sichtbaren und möglichen angrenzenden Schäden besonders wichtig.',
    },
    {
        title: 'VW Golf – Park- und Streifschaden',
        description:
            'Beim schwarzen VW Golf wurden Front, Scheinwerferbereich, Radlauf und einzelne Kratzspuren dokumentiert. Das passt zu typischen Park- oder Streifschäden, bei denen Details schnell unterschätzt werden.',
        rows: [
            { label: 'Fokus', value: 'Front, Radlauf, Lackspuren' },
            { label: 'Dokumentation', value: '10 Bilder' },
            { label: 'Nutzen', value: 'Kratzer und Kontaktspuren sichtbar' },
        ],
        result: 'Wichtig für Geschädigte: Klein wirkende Kontaktspuren werden nicht nur grob fotografiert, sondern sauber eingeordnet.',
        footer:
            'Solche Bilder helfen, den Schadenhergang und die betroffenen Bereiche für Versicherung und Reparaturbetrieb verständlicher zu machen.',
    },
    {
        title: 'Mazda MX-30 – Heckbereich und Rückleuchte',
        description:
            'Beim grauen Mazda MX-30 stehen Heckbereich, Rückleuchte und angrenzende Karosseriekanten im Vordergrund. Übersicht und Nahaufnahme ergänzen sich dabei.',
        rows: [
            { label: 'Fokus', value: 'Heck, Rückleuchte, Karosseriekante' },
            { label: 'Dokumentation', value: '9 Bilder' },
            { label: 'Nutzen', value: 'Bauteilgrenzen klar erkennbar' },
        ],
        result: 'Wichtig für Geschädigte: Die betroffenen Bereiche werden so dokumentiert, dass Reparaturweg und Schadenabgrenzung nachvollziehbar bleiben.',
        footer:
            'Gerade an Übergängen zwischen Leuchte, Stoßfänger und Karosserie sind präzise Detailbilder wertvoll.',
    },
];

export default function ReferenzenFallbeispiele() {
    const sliderRef = useRef<HTMLDivElement>(null);

    const scrollCases = (direction: 'left' | 'right') => {
        const slider = sliderRef.current;
        const firstCard = slider?.querySelector<HTMLElement>('.ref-fallbeispiele-card');

        if (!slider || !firstCard) {
            return;
        }

        const gap = Number.parseFloat(window.getComputedStyle(slider).columnGap || '0');
        const distance = firstCard.offsetWidth + gap;

        slider.scrollBy({
            left: direction === 'left' ? -distance : distance,
            behavior: 'smooth',
        });
    };

    return (
        <section className="ref-fallbeispiele-section">
            <div className="container">
                <header className="ref-fallbeispiele-header">
                    <span className="ref-fallbeispiele-kicker">Fallbeispiele</span>
                    <h2 className="ref-fallbeispiele-title">So setzen wir uns für Geschädigte ein</h2>
                    <p className="ref-fallbeispiele-lead">
                        Die folgenden Praxisnotizen orientieren sich an den gezeigten Bildserien. Sie zeigen, worauf wir bei der Schadenaufnahme achten und warum eine saubere Dokumentation für Geschädigte wichtig ist.
                    </p>
                </header>
                <div className="ref-fallbeispiele-slider" aria-label="Fallbeispiele Slider">
                    <div className="ref-fallbeispiele-controls" aria-label="Fallbeispiele Navigation">
                        <button
                            type="button"
                            className="ref-fallbeispiele-nav"
                            aria-label="Vorherige Fallbeispiele anzeigen"
                            onClick={() => scrollCases('left')}
                        >
                            ‹
                        </button>
                        <button
                            type="button"
                            className="ref-fallbeispiele-nav"
                            aria-label="Weitere Fallbeispiele anzeigen"
                            onClick={() => scrollCases('right')}
                        >
                            ›
                        </button>
                    </div>

                    <div ref={sliderRef} className="ref-fallbeispiele-grid">
                        {cases.map((c) => (
                            <article key={c.title} className="ref-fallbeispiele-card">
                                <h3 className="ref-fallbeispiele-card-title">{c.title}</h3>
                                <p className="ref-fallbeispiele-card-desc">{c.description}</p>
                                <dl className="ref-fallbeispiele-rows">
                                    {c.rows.map((row) => (
                                        <div key={row.label} className="ref-fallbeispiele-row">
                                            <dt>{row.label}</dt>
                                            <dd>{row.value}</dd>
                                        </div>
                                    ))}
                                </dl>
                                <p className="ref-fallbeispiele-result">{c.result}</p>
                                {c.footer ? <p className="ref-fallbeispiele-foot">{c.footer}</p> : null}
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
