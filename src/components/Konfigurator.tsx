"use client";

import { useState } from 'react';

const INTERESTS = [
    { id: "Unfallgutachten", icon: "🚗", label: "Unfallgutachten" },
    { id: "Kaskoschaden", icon: "🛡️", label: "Kaskoschaden" },
    { id: "Wertgutachten", icon: "💶", label: "Wertgutachten" },
    { id: "Reparaturbestätigung", icon: "✅", label: "Reparaturbestätigung" },
    { id: "Kostenvoranschlag", icon: "📝", label: "Kostenvoranschlag" },
    { id: "Sonstiges", icon: "➕", label: "Sonstiges" }
];

export default function Konfigurator() {
    const WHATSAPP_NUMBER = "4902111234567";

    const [step, setStep] = useState(1);
    const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
    const [formData, setFormData] = useState({
        name: "",
        kennzeichen: "",
        email: "",
        phone: "",
        message: "",
        privacy: false,
        website: "" // honeypot
    });
    const [emailSent, setEmailSent] = useState(false);

    const toggleInterest = (interestId: string) => {
        setSelectedInterests(prev =>
            prev.includes(interestId)
                ? prev.filter(i => i !== interestId)
                : [...prev, interestId]
        );
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const validateStep1 = () => {
        if (selectedInterests.length === 0) {
            alert("Bitte wählen Sie mindestens ein Anliegen aus.");
            return false;
        }
        return true;
    };

    const validateStep2 = () => {
        if (!formData.name.trim()) { alert("Bitte geben Sie Ihren vollständigen Namen ein."); return false; }
        if (!formData.phone.trim()) { alert("Bitte geben Sie Ihre Telefonnummer ein."); return false; }
        if (!formData.privacy) { alert("Bitte akzeptieren Sie die Datenschutzerklärung."); return false; }
        return true;
    };

    const nextStep = async (targetStep: number) => {
        if (step === 1 && targetStep > 1 && !validateStep1()) return;
        if (step === 2 && targetStep > 2 && !validateStep2()) return;

        if (step === 2 && targetStep === 3) {
            await sendLeadOnce();
        }

        setStep(targetStep);
    };

    const prevStep = (targetStep: number) => {
        setStep(targetStep);
    };

    const sendLeadOnce = async () => {
        if (emailSent) return;
        setEmailSent(true);

        const payload = {
            website: formData.website,
            privacy: formData.privacy ? "1" : "0",
            name: formData.name,
            kennzeichen: formData.kennzeichen,
            email: formData.email,
            phone: formData.phone,
            interests: selectedInterests.join(", "),
            message: formData.message,
            source: "UnfallExperten Konfigurator"
        };

        try {
            const res = await fetch("/api/send-lead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });
            const data = await res.json().catch(() => null);
            if (!res.ok || (data && data.success === false)) setEmailSent(false);
        } catch (e) {
            setEmailSent(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateStep1() || !validateStep2()) return;

        await sendLeadOnce();

        let text = "Hallo UnfallExperten,\nich benötige Hilfe:\n\n";
        if (selectedInterests.length) {
            text += "*Anliegen:*\n" + selectedInterests.map(i => "• " + i).join("\n") + "\n\n";
        }
        text += `*Name:* ${formData.name}\n`;
        if (formData.kennzeichen) text += `*Kennzeichen:* ${formData.kennzeichen}\n`;
        if (formData.email) text += `*E-Mail:* ${formData.email}\n`;
        text += `*Telefon:* ${formData.phone}\n`;
        if (formData.message) text += `\n*Details:*\n${formData.message}`;

        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank");
    };

    return (
        <div className="unfall-wa">
            <div className="unfall-wa-card">
                <div className="unfall-wa-header">
                    <h2 className="unfall-wa-title">Wir rufen Sie gerne zurück!</h2>
                    <p className="unfall-wa-subtitle">In nur 3 Schritten zu Ihrer kostenlosen Beratung.</p>
                </div>

                {/* Progress */}
                <div className="unfall-wa-progress" aria-label="Fortschritt">
                    <div className="unfall-wa-stepper">
                        <span className={`unfall-wa-stepper-dot ${step === 1 ? 'is-active' : step > 1 ? 'is-done' : ''}`} data-stepper="1">1</span>
                        <span className={`unfall-wa-stepper-line ${step > 1 ? 'is-active' : ''}`} data-line="1"></span>
                        <span className={`unfall-wa-stepper-dot ${step === 2 ? 'is-active' : step > 2 ? 'is-done' : ''}`} data-stepper="2">2</span>
                        <span className={`unfall-wa-stepper-line ${step > 2 ? 'is-active' : ''}`} data-line="2"></span>
                        <span className={`unfall-wa-stepper-dot ${step === 3 ? 'is-active' : ''}`} data-stepper="3">3</span>
                    </div>
                    <div className="unfall-wa-stepper-labels">
                        <span>Anliegen</span><span>Daten</span><span>Kontakt</span>
                    </div>
                </div>

                <form id="unfall-wa-form" className="unfall-wa-form" onSubmit={handleSubmit} noValidate>
                    {/* Honeypot */}
                    <input
                        type="text"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        autoComplete="off"
                        tabIndex={-1}
                        aria-hidden="true"
                        style={{ position: 'absolute', left: '-9999px', opacity: '0', height: '0', width: '0' }}
                        suppressHydrationWarning
                    />

                    {/* STEP 1 */}
                    <section className={`unfall-wa-step ${step === 1 ? 'is-active' : ''}`} style={{ display: step === 1 ? 'block' : 'none' }}>
                        <p className="unfall-wa-text">Wählen Sie Ihr Anliegen aus:</p>
                        <div className="unfall-wa-grid" role="group" aria-label="Anliegen">
                            {INTERESTS.map(item => {
                                const isSelected = selectedInterests.includes(item.id);
                                return (
                                    <button
                                        key={item.id}
                                        type="button"
                                        className={`unfall-wa-option ${isSelected ? 'is-selected is-glint' : ''}`}
                                        onClick={() => toggleInterest(item.id)}
                                        suppressHydrationWarning
                                    >
                                        <span className="unfall-wa-ico">{item.icon}</span>
                                        <span className="unfall-wa-label">{item.label}</span>
                                    </button>
                                )
                            })}
                        </div>
                        <div className="unfall-wa-nav">
                            <button type="button" className="unfall-wa-btn unfall-wa-btn-primary" onClick={() => nextStep(2)} suppressHydrationWarning>Weiter</button>
                        </div>
                    </section>

                    {/* STEP 2 */}
                    <section className={`unfall-wa-step ${step === 2 ? 'is-active' : ''}`} style={{ display: step === 2 ? 'block' : 'none' }}>
                        <div className="unfall-wa-fields">
                            <div className="unfall-wa-field">
                                <label className="unfall-wa-lbl" htmlFor="unfall-name">Vollständiger Name*</label>
                                <input className="unfall-wa-input" id="unfall-name" name="name" type="text" required placeholder="Nachname, Vorname" value={formData.name} onChange={handleInputChange} />
                            </div>

                            <div className="unfall-wa-field">
                                <label className="unfall-wa-lbl" htmlFor="unfall-kennzeichen">Kennzeichen</label>
                                <input className="unfall-wa-input" id="unfall-kennzeichen" name="kennzeichen" type="text" placeholder="D-AB 1234 (optional)" value={formData.kennzeichen} onChange={handleInputChange} />
                            </div>

                            <div className="unfall-wa-field">
                                <label className="unfall-wa-lbl" htmlFor="unfall-email">E-Mail</label>
                                <input className="unfall-wa-input" id="unfall-email" name="email" type="email" placeholder="ihre@email.de (optional)" value={formData.email} onChange={handleInputChange} />
                            </div>

                            <div className="unfall-wa-field">
                                <label className="unfall-wa-lbl" htmlFor="unfall-phone">Telefon / WhatsApp*</label>
                                <input className="unfall-wa-input" id="unfall-phone" name="phone" type="tel" required placeholder="0171 1234567" value={formData.phone} onChange={handleInputChange} />
                            </div>
                        </div>

                        <div className="unfall-wa-privacy">
                            <label className="unfall-wa-privacy-row">
                                <input type="checkbox" id="unfall-privacy" name="privacy" checked={formData.privacy} onChange={handleInputChange} />
                                <span>
                                    Ich bin einverstanden, dass meine Daten zur Bearbeitung meines Anliegens verwendet werden. Details in der <a href="/datenschutz" target="_blank" rel="noopener noreferrer">Datenschutzerklärung</a>.
                                </span>
                            </label>
                        </div>

                        <div className="unfall-wa-nav">
                            <button type="button" className="unfall-wa-btn unfall-wa-btn-ghost" onClick={() => prevStep(1)}>Zurück</button>
                            <button type="button" className="unfall-wa-btn unfall-wa-btn-primary" onClick={() => nextStep(3)} suppressHydrationWarning>Weiter</button>
                        </div>
                    </section>

                    {/* STEP 3 */}
                    <section className={`unfall-wa-step ${step === 3 ? 'is-active' : ''}`} style={{ display: step === 3 ? 'block' : 'none' }}>
                        <h3 className="unfall-wa-h3">Ihre Situation (optional)</h3>

                        <div className="unfall-wa-field">
                            <label className="unfall-wa-lbl" htmlFor="unfall-message">Haben Sie weitere Details für uns?</label>
                            <textarea className="unfall-wa-textarea" id="unfall-message" name="message" rows={4} placeholder="Z. B. Parkunfall am 12.03., Gegner ist bekannt..." value={formData.message} onChange={handleInputChange}></textarea>
                        </div>

                        <p className="unfall-wa-consent">
                            Mit Klick auf „WhatsApp-Chat starten“ erklären Sie sich damit einverstanden, dass wir Sie per WhatsApp kontaktieren.
                        </p>

                        <div className="unfall-wa-nav">
                            <button type="button" className="unfall-wa-btn unfall-wa-btn-ghost" onClick={() => prevStep(2)}>Zurück</button>
                            <button type="submit" className="unfall-wa-btn unfall-wa-btn-primary">WhatsApp-Chat starten</button>
                        </div>
                    </section>
                </form>
            </div>
        </div>
    );
}
