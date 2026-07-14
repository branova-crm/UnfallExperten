"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

const INITIAL = {
    name: "",
    phone: "",
    email: "",
    kennzeichen: "",
    vehicle: "",
    date: "",
    location: "",
    description: "",
    privacy: false,
    website: "", // Honeypot
};

export default function SchadenMeldenForm() {
    const [data, setData] = useState(INITIAL);
    const [step, setStep] = useState<1 | 2>(1);
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

        if (!data.privacy) {
            setError("Bitte stimmen Sie der Datenschutzerklärung zu.");
            return;
        }

        const message = [
            `Fahrzeug: ${data.vehicle || "–"}`,
            `Kennzeichen: ${data.kennzeichen || "–"}`,
            `Unfalldatum: ${data.date || "–"}`,
            `Unfallort: ${data.location || "–"}`,
            "",
            "Schadensbeschreibung:",
            data.description || "–",
        ].join("\n");

        setStatus("sending");
        try {
            const res = await fetch("/api/send-lead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    website: data.website,
                    privacy: data.privacy ? "1" : "0",
                    name: data.name,
                    phone: data.phone,
                    email: data.email,
                    kennzeichen: data.kennzeichen,
                    interests: "Schadenmeldung",
                    message,
                    source: "Schaden melden (Formular)",
                }),
            });
            const json = await res.json().catch(() => null);
            if (!res.ok || (json && json.success === false)) {
                throw new Error("send failed");
            }
            setStatus("success");
            setData(INITIAL);
            setStep(1);
        } catch {
            setStatus("error");
            setError(
                "Es ist ein Fehler aufgetreten. Bitte rufen Sie uns an oder versuchen Sie es später erneut.",
            );
        }
    };

    if (status === "success") {
        return (
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
                <h3>Schaden erfolgreich gemeldet!</h3>
                <p>
                    Vielen Dank. Wir haben Ihre Schadenmeldung erhalten und melden
                    uns umgehend bei Ihnen – in der Regel innerhalb von 15 Minuten.
                </p>
            </div>
        );
    }

    return (
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

            <div className="ue-form__steps" aria-hidden="true">
                <div className={`ue-form__step ${step === 1 ? "is-active" : "is-done"}`}>
                    <span className="ue-form__step-num">1</span>
                    <span className="ue-form__step-label">Unfalldaten</span>
                </div>
                <span className={`ue-form__step-line ${step === 2 ? "is-done" : ""}`} />
                <div className={`ue-form__step ${step === 2 ? "is-active" : ""}`}>
                    <span className="ue-form__step-num">2</span>
                    <span className="ue-form__step-label">Kontakt</span>
                </div>
            </div>

            {step === 1 && (
                <>
                    <div className="ue-form__row">
                        <div className="ue-form__group">
                            <label className="ue-form__label" htmlFor="sm-kennzeichen">
                                Kennzeichen
                            </label>
                            <input
                                className="ue-form__input"
                                id="sm-kennzeichen"
                                name="kennzeichen"
                                type="text"
                                placeholder="z. B. EU-AB 123"
                                value={data.kennzeichen}
                                onChange={handleChange}
                                suppressHydrationWarning
                            />
                        </div>
                        <div className="ue-form__group">
                            <label className="ue-form__label" htmlFor="sm-vehicle">
                                Fahrzeug (Marke & Modell)
                            </label>
                            <input
                                className="ue-form__input"
                                id="sm-vehicle"
                                name="vehicle"
                                type="text"
                                placeholder="z. B. VW Golf"
                                value={data.vehicle}
                                onChange={handleChange}
                                suppressHydrationWarning
                            />
                        </div>
                    </div>

                    <div className="ue-form__row">
                        <div className="ue-form__group">
                            <label className="ue-form__label" htmlFor="sm-date">
                                Unfalldatum
                            </label>
                            <input
                                className="ue-form__input"
                                id="sm-date"
                                name="date"
                                type="date"
                                value={data.date}
                                onChange={handleChange}
                                suppressHydrationWarning
                            />
                        </div>
                        <div className="ue-form__group">
                            <label className="ue-form__label" htmlFor="sm-location">
                                Unfallort (Stadt / PLZ)
                            </label>
                            <input
                                className="ue-form__input"
                                id="sm-location"
                                name="location"
                                type="text"
                                placeholder="z. B. 53881 Euskirchen"
                                value={data.location}
                                onChange={handleChange}
                                suppressHydrationWarning
                            />
                        </div>
                    </div>

                    <div className="ue-form__group">
                        <label className="ue-form__label" htmlFor="sm-description">
                            Was ist passiert?
                        </label>
                        <textarea
                            className="ue-form__textarea"
                            id="sm-description"
                            name="description"
                            placeholder="Kurze Schilderung des Unfalls und der Schäden am Fahrzeug…"
                            value={data.description}
                            onChange={handleChange}
                            suppressHydrationWarning
                        />
                    </div>

                    <button
                        type="button"
                        className="ue-form__submit"
                        onClick={() => setStep(2)}
                        suppressHydrationWarning
                    >
                        Weiter
                    </button>
                </>
            )}

            {step === 2 && (
                <>
                    <div className="ue-form__row">
                        <div className="ue-form__group">
                            <label className="ue-form__label" htmlFor="sm-name">
                                Name
                            </label>
                            <input
                                className="ue-form__input"
                                id="sm-name"
                                name="name"
                                type="text"
                                placeholder="Vor- und Nachname"
                                value={data.name}
                                onChange={handleChange}
                                suppressHydrationWarning
                            />
                        </div>
                        <div className="ue-form__group">
                            <label className="ue-form__label" htmlFor="sm-phone">
                                Telefon
                            </label>
                            <input
                                className="ue-form__input"
                                id="sm-phone"
                                name="phone"
                                type="tel"
                                placeholder="0171 1234567"
                                value={data.phone}
                                onChange={handleChange}
                                suppressHydrationWarning
                            />
                        </div>
                    </div>

                    <div className="ue-form__group">
                        <label className="ue-form__label" htmlFor="sm-email">
                            E-Mail
                        </label>
                        <input
                            className="ue-form__input"
                            id="sm-email"
                            name="email"
                            type="email"
                            placeholder="ihre@email.de"
                            value={data.email}
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

                    {error && (
                        <p className="ue-form__note ue-form__note--error">{error}</p>
                    )}

                    <div className="ue-form__nav">
                        <button
                            type="button"
                            className="ue-form__btn-back"
                            onClick={() => setStep(1)}
                            suppressHydrationWarning
                        >
                            Zurück
                        </button>
                        <button
                            type="submit"
                            className="ue-form__submit"
                            disabled={status === "sending"}
                            suppressHydrationWarning
                        >
                            {status === "sending" ? "Wird gesendet…" : "Schaden melden"}
                        </button>
                    </div>
                </>
            )}
        </form>
    );
}
