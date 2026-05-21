const cases = [
    {
        title: 'Auffahrunfall auf der A40',
        description:
            'Ein unverschuldeter Kunde wurde im Ruhrgebiet von hinten angefahren. Die gegnerische Versicherung wollte zunächst nur eine günstige Reparaturkalkulation anerkennen und stritt Wertminderung sowie Nutzungsausfall weitgehend ab.',
        rows: [
            { label: 'Reparaturkosten (gutachtlich)', value: '4.650 €' },
            { label: 'Wertminderung', value: '780 €' },
            { label: 'Nutzungsausfall', value: '420 €' },
        ],
        result: 'Mit Gutachten abgesichert: 5.850 €',
        footer:
            'Erst das unabhängige Gutachten hat die vollständige Schadenposition dokumentiert – die Regulierung erfolgte anschließend ohne weiteren Streit.',
    },
    {
        title: 'Parkschaden in der Innenstadt',
        description:
            'Nach einem Parkrempler in einem öffentlichen Parkhaus wollte die Haftpflichtversicherung des Verursachers den Schaden allein anhand eines Kurz-Kostenvoranschlags regulieren – ohne Demontage und ohne Prüfung verdeckter Folgeschäden.',
        rows: [
            { label: 'Angebot Versicherung (KVA)', value: '1.920 €' },
            { label: 'Ergebnis mit Gutachten', value: '3.180 €' },
        ],
        result: 'Mehrbetrag durch Gutachten: +1.260 €',
        footer:
            'Im Gutachten wurden u. a. Halterungen und Anbauteile mit bewertet, die im Erstansatz nicht sichtbar waren.',
    },
    {
        title: 'Totalschaden nach Kreuzungsunfall',
        description:
            'Nach einem schweren Zusammenstoß an einem vielbefahrenen Knotenpunkt in NRW wurde das Fahrzeug als wirtschaftlicher Totalschaden eingestuft. Das erste Versicherungsangebot lag deutlich unter dem marktgerechten Wiederbeschaffungswert.',
        rows: [
            { label: 'Angebot Versicherung', value: '8.900 €' },
            { label: 'Wiederbeschaffungswert lt. Gutachten', value: '11.800 €' },
        ],
        result: 'Mehrbetrag durch Gutachten: +2.900 €',
        footer:
            'Die korrekte Ermittlung des Wiederbeschaffungswerts war die Grundlage für eine faire Auszahlung an den Geschädigten.',
    },
];

export default function ReferenzenFallbeispiele() {
    return (
        <section className="ref-fallbeispiele-section">
            <div className="container">
                <header className="ref-fallbeispiele-header">
                    <span className="ref-fallbeispiele-kicker">Fallbeispiele</span>
                    <h2 className="ref-fallbeispiele-title">So setzen wir uns für Geschädigte ein</h2>
                    <p className="ref-fallbeispiele-lead">
                        Drei nachvollziehbare Fälle aus der Praxis in NRW – sie zeigen, welchen Unterschied ein unabhängiges Kfz-Schadensgutachten in der Regulierung ausmachen kann.
                    </p>
                </header>
                <div className="ref-fallbeispiele-grid">
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
        </section>
    );
}
