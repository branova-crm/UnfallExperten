"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import SchadenMeldenForm from "@/components/SchadenMeldenForm";
import { SCHADEN_MODAL_EVENT } from "@/lib/schaden-modal";

export default function SchadenMeldenModal() {
    const [open, setOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const close = useCallback(() => setOpen(false), []);

    useEffect(() => {
        const handleOpen = () => setOpen(true);
        window.addEventListener(SCHADEN_MODAL_EVENT, handleOpen);
        return () => window.removeEventListener(SCHADEN_MODAL_EVENT, handleOpen);
    }, []);

    useEffect(() => {
        if (!open) return;

        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") close();
        };
        document.addEventListener("keydown", onKey);
        document.body.classList.add("ue-modal-open");

        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.classList.remove("ue-modal-open");
        };
    }, [open, close]);

    if (!mounted || !open) return null;

    return createPortal(
        <div
            className="ue-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="ue-schaden-title"
        >
            <div className="ue-modal__overlay" onClick={close} />
            <div className="ue-modal__dialog">
                <button
                    type="button"
                    className="ue-modal__close"
                    aria-label="Schließen"
                    onClick={close}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                <div className="ue-modal__header">
                    <span className="ue-modal__eyebrow">Schnell & kostenlos</span>
                    <h2 className="ue-modal__title" id="ue-schaden-title">
                        Schaden melden
                    </h2>
                    <p className="ue-modal__subtitle">
                        Schildern Sie uns kurz Ihren Schaden – wir melden uns
                        umgehend bei Ihnen zurück. Für Geschädigte komplett
                        kostenlos.
                    </p>
                </div>

                <SchadenMeldenForm />
            </div>
        </div>,
        document.body,
    );
}
