"use client";

import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    gutachterReferenceImageSections,
    gutachterReferenceImages,
} from "@/lib/gutachterImages";

export default function ReferenzenGallery() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const rowRefs = useRef(new Map<string, HTMLDivElement>());

    const close = useCallback(() => setOpenIndex(null), []);
    const activeIndex = openIndex ?? 0;
    const openImage = openIndex !== null ? gutachterReferenceImages[openIndex] : null;
    const imageIndexBySrc = useMemo(
        () => new Map(gutachterReferenceImages.map((image, index) => [image.src, index])),
        []
    );

    const scrollGroup = useCallback((title: string, direction: "left" | "right") => {
        const row = rowRefs.current.get(title);
        if (!row) return;

        const distance = Math.min(row.clientWidth * 0.9, 760);
        row.scrollBy({
            left: direction === "left" ? -distance : distance,
            behavior: "smooth",
        });
    }, []);

    useEffect(() => {
        if (openIndex === null) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") close();
            if (e.key === "ArrowLeft" && openIndex > 0) setOpenIndex(openIndex - 1);
            if (e.key === "ArrowRight" && openIndex < gutachterReferenceImages.length - 1) setOpenIndex(openIndex + 1);
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
            <div className="referenzen-gallery-sections">
                {gutachterReferenceImageSections.map((section) => (
                    <section key={section.title} className="referenzen-gallery-group">
                        <header className="referenzen-gallery-group__header">
                            <div>
                                <span className="referenzen-gallery-group__kicker">
                                    Referenzserie
                                </span>
                                <h3 className="referenzen-gallery-group__title">
                                    {section.title}
                                </h3>
                            </div>
                            <div className="referenzen-gallery-group__tools">
                                <span className="referenzen-gallery-group__count">
                                    {section.images.length} Bilder
                                </span>
                                <div className="referenzen-gallery-group__nav">
                                    <button
                                        type="button"
                                        className="referenzen-gallery-group__nav-btn"
                                        onClick={() => scrollGroup(section.title, "left")}
                                        aria-label={`${section.title} nach links schieben`}
                                    >
                                        ‹
                                    </button>
                                    <button
                                        type="button"
                                        className="referenzen-gallery-group__nav-btn"
                                        onClick={() => scrollGroup(section.title, "right")}
                                        aria-label={`${section.title} nach rechts schieben`}
                                    >
                                        ›
                                    </button>
                                </div>
                            </div>
                        </header>

                        <p className="referenzen-gallery-group__subtitle">
                            {section.subtitle}
                        </p>

                        <div
                            className="referenzen-gallery-row"
                            ref={(node) => {
                                if (node) {
                                    rowRefs.current.set(section.title, node);
                                } else {
                                    rowRefs.current.delete(section.title);
                                }
                            }}
                        >
                            {section.images.map((image) => {
                                const imageIndex = imageIndexBySrc.get(image.src) ?? 0;

                                return (
                                    <button
                                        key={image.src}
                                        type="button"
                                        className="referenzen-gallery-thumb"
                                        onClick={() => setOpenIndex(imageIndex)}
                                        aria-label={`${image.title} vergroessern`}
                                    >
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            title={image.title}
                                            fill
                                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 220px"
                                            style={{ objectFit: "cover" }}
                                        />
                                    </button>
                                );
                            })}
                        </div>
                    </section>
                ))}
            </div>

            <AnimatePresence>
                {openImage && (
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
                            {activeIndex > 0 && (
                                <button
                                    type="button"
                                    className="referenzen-gallery-lightbox-nav referenzen-gallery-lightbox-nav--prev"
                                    onClick={() => setOpenIndex(activeIndex - 1)}
                                    aria-label="Vorheriges Bild"
                                >
                                    ‹
                                </button>
                            )}
                            {activeIndex < gutachterReferenceImages.length - 1 && (
                                <button
                                    type="button"
                                    className="referenzen-gallery-lightbox-nav referenzen-gallery-lightbox-nav--next"
                                    onClick={() => setOpenIndex(activeIndex + 1)}
                                    aria-label="Nächstes Bild"
                                >
                                    ›
                                </button>
                            )}
                            <div className="referenzen-gallery-lightbox-image">
                                <Image
                                    src={openImage.src}
                                    alt={openImage.alt}
                                    title={openImage.title}
                                    fill
                                    sizes="(max-width: 900px) 92vw, 900px"
                                    style={{ objectFit: "contain" }}
                                />
                            </div>
                            <p className="referenzen-gallery-lightbox-caption">
                                {openImage.title} - Bild {activeIndex + 1} von {gutachterReferenceImages.length}
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
