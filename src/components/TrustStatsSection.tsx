"use client";

import React from 'react';

const stats = [
    {
        number: "5,0 ⭐",
        text: "Google Bewertung, über 140 Rezensionen von echten Kunden aus NRW und Umgebung"
    },
    {
        number: "0 €",
        text: "Kosten für Unfallgeschädigte. Die gegnerische Versicherung zahlt unser Honorar"
    },
    {
        number: "30 Min",
        text: "Bin ich bei Ihnen in NRW. Egal ob Euskirchen, Köln, Bonn oder Düsseldorf"
    },
    {
        number: "24h",
        text: "Gutachten fertig. Sie bekommen es digital per E-Mail, direkt weiter an die Versicherung"
    },
    {
        number: "24/7",
        text: "Erreichbar. Auch nachts, am Wochenende und an Feiertagen. Kein Callcenter"
    }
];

export default function TrustStatsSection() {
    return (
        <section className="trust-stats-section">
            <div className="container">
                <div className="text-center stats-header">
                    <span className="section-label">UnfallExperten Euskirchen in Zahlen</span>
                    <h2 className="section-title">Warum Kunden uns vertrauen</h2>
                </div>
                <div className="stats-grid">
                    {stats.map((stat, i) => (
                        <div key={i} className="stat-card">
                            <div className="stat-number">{stat.number}</div>
                            <p className="stat-text">{stat.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
