"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

const INITIAL = {
    name: "",
    email: "",
    phone: "",
    message: "",
    privacy: false,
    website: "", // Honeypot
};

export default function ContactForm() {
    const [data, setData] = useState(INITIAL);
    const [status, setStatus] = useState<Status>("idle");
    const [error, setError] = useState<string | null>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;
        setData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (!data.name.trim() || !data.email.trim() || !data.message.trim()) {
            setError("Bitte füllen Sie alle Pflichtfelder (*) aus.");
            return;
        }
        if (!data.privacy) {
            setError("Bitte stimmen Sie der Datenschutzerklärung zu.");
            return;
        }

        setStatus("sending");
        try {
            const res = await fetch("/api/send-lead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    website: data.website,
                    privacy: data.privacy ? "1" : "0",
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    interests: "Kontaktanfrage",
                    message: data.message,
                    source: "Kontaktformular",
                }),
            });
            const json = await res.json().catch(() => null);
            if (!res.ok || (json && json.success === false)) {
                throw new Error("send failed");
            }
            setStatus("success");
            setData(INITIAL);
        } catch {
            setStatus("error");
            setError(
                "Es ist ein Fehler aufgetreten. Bitte rufen Sie uns an oder versuchen Sie es später erneut.",
            );
        }
    };

    if (status === "success") {
        return (
            <div className="ue-form-card">
                <div className="ue-form__success-box">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="56"
                        height="56"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <h3>Vielen Dank für Ihre Nachricht!</h3>
                    <p>
                        Wir haben Ihre Anfrage erhalten und melden uns
                        schnellstmöglich bei Ihnen zurück.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="ue-form-card">
            <h2 className="ue-form-card__title">Nachricht senden</h2>
            <p className="ue-form-card__subtitle">
                Schreiben Sie uns Ihr Anliegen – wir melden uns in Kürze bei Ihnen.
            </p>

            <form className="ue-form" onSubmit={handleSubmit} noValidate>
                <input
                    type="text"
                    name="website"
                    value={data.website}
                    onChange={handleChange}
                    autoComplete="off"
                    tabIndex={-1}
                    aria-hidden="true"
                    style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, width: 0 }}
                    suppressHydrationWarning
                />

                <div className="ue-form__group">
                    <label className="ue-form__label" htmlFor="cf-name">
                        Name <span className="ue-form__req">*</span>
                    </label>
                    <input
                        className="ue-form__input"
                        id="cf-name"
                        name="name"
                        type="text"
                        required
                        placeholder="Ihr vollständiger Name"
                        value={data.name}
                        onChange={handleChange}
                        suppressHydrationWarning
                    />
                </div>

                <div className="ue-form__group">
                    <label className="ue-form__label" htmlFor="cf-email">
                        E-Mail <span className="ue-form__req">*</span>
                    </label>
                    <input
                        className="ue-form__input"
                        id="cf-email"
                        name="email"
                        type="email"
                        required
                        placeholder="ihre@email.de"
                        value={data.email}
                        onChange={handleChange}
                        suppressHydrationWarning
                    />
                </div>

                <div className="ue-form__group">
                    <label className="ue-form__label" htmlFor="cf-phone">
                        Telefon
                    </label>
                    <input
                        className="ue-form__input"
                        id="cf-phone"
                        name="phone"
                        type="tel"
                        placeholder="Ihre Telefonnummer"
                        value={data.phone}
                        onChange={handleChange}
                        suppressHydrationWarning
                    />
                </div>

                <div className="ue-form__group">
                    <label className="ue-form__label" htmlFor="cf-message">
                        Nachricht <span className="ue-form__req">*</span>
                    </label>
                    <textarea
                        className="ue-form__textarea"
                        id="cf-message"
                        name="message"
                        required
                        placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                        value={data.message}
                        onChange={handleChange}
                        suppressHydrationWarning
                    />
                </div>

                <label className="ue-form__privacy">
                    <input
                        type="checkbox"
                        name="privacy"
                        checked={data.privacy}
                        onChange={handleChange}
                        suppressHydrationWarning
                    />
                    <span>
                        Ich habe die{" "}
                        <a href="/datenschutz" target="_blank" rel="noopener noreferrer">
                            Datenschutzerklärung
                        </a>{" "}
                        gelesen und bin mit der Verarbeitung meiner Daten
                        einverstanden. <span className="ue-form__req">*</span>
                    </span>
                </label>

                {error && <p className="ue-form__note ue-form__note--error">{error}</p>}

                <button
                    type="submit"
                    className="ue-form__submit"
                    disabled={status === "sending"}
                    suppressHydrationWarning
                >
                    {status === "sending" ? "Wird gesendet…" : "Nachricht senden"}
                </button>
            </form>
        </div>
    );
}
