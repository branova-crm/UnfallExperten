"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PLACEHOLDER_COUNT = 8;

export default function ReferenzenGallery() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const close = useCallback(() => setOpenIndex(null), []);

    useEffect(() => {
        if (openIndex === null) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") close();
            if (e.key === "ArrowLeft" && openIndex > 0) setOpenIndex(openIndex - 1);
            if (e.key === "ArrowRight" && openIndex < PLACEHOLDER_COUNT - 1) setOpenIndex(openIndex + 1);
        };
        window.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [openIndex, close]);

    return (
        <div className="referenzen-gallery-root">
            <div className="referenzen-gallery-grid">
                {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
                    <button
                        key={i}
                        type="button"
                        className="referenzen-gallery-thumb"
                        onClick={() => setOpenIndex(i)}
                        aria-label={`Fahrzeugbild ${i + 1} vergrößern`}
                    >
                        <span className="referenzen-gallery-placeholder" aria-hidden />
                    </button>
                ))}
            </div>

            <AnimatePresence>
                {openIndex !== null && (
                    <motion.div
                        className="referenzen-gallery-lightbox-backdrop"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Vergrößerte Ansicht"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={close}
                    >
                        <motion.div
                            className="referenzen-gallery-lightbox-panel"
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.96 }}
                            transition={{ duration: 0.22 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                type="button"
                                className="referenzen-gallery-lightbox-close"
                                onClick={close}
                                aria-label="Schließen"
                            >
                                ×
                            </button>
                            {openIndex > 0 && (
                                <button
                                    type="button"
                                    className="referenzen-gallery-lightbox-nav referenzen-gallery-lightbox-nav--prev"
                                    onClick={() => setOpenIndex(openIndex - 1)}
                                    aria-label="Vorheriges Bild"
                                >
                                    ‹
                                </button>
                            )}
                            {openIndex < PLACEHOLDER_COUNT - 1 && (
                                <button
                                    type="button"
                                    className="referenzen-gallery-lightbox-nav referenzen-gallery-lightbox-nav--next"
                                    onClick={() => setOpenIndex(openIndex + 1)}
                                    aria-label="Nächstes Bild"
                                >
                                    ›
                                </button>
                            )}
                            <div className="referenzen-gallery-lightbox-placeholder" aria-hidden />
                            <p className="referenzen-gallery-lightbox-caption">
                                Beispielansicht {openIndex + 1} von {PLACEHOLDER_COUNT} – hier können später echte Gutachtenfotos stehen.
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
