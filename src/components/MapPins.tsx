"use client";

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

const mapAreas = [
    { id: "Süd", coords: [225, 554, 9], shape: "circle", title: "Standort Süd" },
    { id: "Mitte 1", coords: [249, 505, 7], shape: "circle", title: "Standort Mitte 1" },
    { id: "West", coords: [188, 505, 9], shape: "circle", title: "Standort West" },
    { id: "Nord 1", coords: [237, 443, 8], shape: "circle", title: "Standort Nord 1" },
    { id: "Nord-West", coords: [185, 435, 7], shape: "circle", title: "Standort Nord-West" },
    { id: "Ost", coords: [284, 476, 9], shape: "circle", title: "Standort Ost" },
    { id: "Mitte 2", coords: [260, 435, 8], shape: "circle", title: "Standort Mitte 2" },
    { id: "Neu 1", coords: [170, 530, 8], shape: "circle", title: "Standort Neu 1" },
    { id: "Neu 2", coords: [260, 535, 8], shape: "circle", title: "Standort Neu 2" },
];

const HAUPTSTANDORT = { id: "Hauptstandort", coords: [214, 492], title: "Unser Standort: Euskirchen" };

export default function MapPins() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [scale, setScale] = useState({ x: 1, y: 1 });
    const [visibleTooltip, setVisibleTooltip] = useState<string | null>(null);

    const ORIG_WIDTH = 1000;
    const ORIG_HEIGHT = 1000;

    const updateScale = () => {
        if (containerRef.current) {
            const { clientWidth, clientHeight } = containerRef.current;
            setScale({
                x: clientWidth / ORIG_WIDTH,
                y: clientHeight / ORIG_HEIGHT
            });
        }
    };

    useEffect(() => {
        updateScale();
        window.addEventListener('resize', updateScale);
        return () => window.removeEventListener('resize', updateScale);
    }, []);

    const handleMouseEnter = (id: string) => {
        if (window.matchMedia("(pointer: fine)").matches) {
            setVisibleTooltip(id);
        }
    };

    const handleMouseLeave = () => {
        if (window.matchMedia("(pointer: fine)").matches) {
            setVisibleTooltip(null);
        }
    };

    const handleClick = (id: string) => {
        if (window.matchMedia("(pointer: coarse)").matches) {
            if (visibleTooltip === id) {
                setVisibleTooltip(null);
            } else {
                setVisibleTooltip(id);
            }
        }
    };

    return (
        <div className="einsatzgebiet-map-container" id="map-container">
            <div className="map-wrap" ref={containerRef} style={{ overflow: 'visible' }}>
                <Image
                    src="/images/de-map.png"
                    alt="Deutschlandkarte Einsatzgebiet"
                    id="de-map"
                    width={500}
                    height={500}
                    onLoad={updateScale}
                    priority
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                />
                <div id="pins-layer">
                    {mapAreas.map((area, i) => {
                        let cx = area.coords[0];
                        let cy = area.coords[1];

                        const finalX = cx * scale.x;
                        const finalY = cy * scale.y;

                        const randomPhase1 = -((i * 1.3) % 4);
                        const randomPhase2 = randomPhase1 - 2;

                        return (
                            <div
                                key={area.id}
                                className="map-pin"
                                style={{ left: `${finalX}px`, top: `${finalY}px` }}
                                onMouseEnter={() => handleMouseEnter(area.id)}
                                onMouseLeave={handleMouseLeave}
                                onClick={() => handleClick(area.id)}
                            >
                                <div className="map-pin-pulse pulse-1" style={{ animationDelay: `${randomPhase1}s` }}></div>
                                <div className="map-pin-pulse pulse-2" style={{ animationDelay: `${randomPhase2}s` }}></div>
                                <svg className="map-pin-icon" viewBox="0 0 24 24" fill="var(--clr-primary)">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                </svg>
                                <div className={`map-pin-tooltip ${visibleTooltip === area.id ? 'visible' : ''}`}>
                                    Hier sind wir tätig
                                </div>
                            </div>
                        );
                    })}

                    {/* Hauptstandort – hervorgehobener eigener Pin */}
                    <div
                        className="map-pin map-pin-hauptstandort"
                        style={{
                            left: `${HAUPTSTANDORT.coords[0] * scale.x}px`,
                            top: `${HAUPTSTANDORT.coords[1] * scale.y}px`,
                            width: '32px',
                            height: '32px'
                        }}
                        onMouseEnter={() => handleMouseEnter(HAUPTSTANDORT.id)}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleClick(HAUPTSTANDORT.id)}
                    >
                        <svg className="map-pin-icon" viewBox="0 0 24 24" fill="var(--clr-accent)">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                        <div className={`map-pin-tooltip ${visibleTooltip === HAUPTSTANDORT.id ? 'visible' : ''}`}>
                            {HAUPTSTANDORT.title}
                        </div>
                    </div>
                </div>
            </div>

            {/* Standort-Texte */}
            <div style={{
                marginTop: '1rem',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px'
            }}>
                <p style={{ fontWeight: 700, color: 'var(--clr-white)', fontSize: '1rem' }}>
                    Wir sind nur ø 20 Minuten entfernt.
                </p>
                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.875rem' }}>
                    Oder kommen Sie direkt vorbei
                </p>
            </div>
        </div>
    );
}
