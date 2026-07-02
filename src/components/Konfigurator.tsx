"use client";

import { useState } from 'react';

const INTERESTS = [
    { id: "Unfallgutachten", label: "Unfallgutachten" },
    { id: "Kaskoschaden", label: "Kaskoschaden" },
    { id: "Wertgutachten", label: "Wertgutachten" },
    { id: "Reparaturbestätigung", label: "Reparaturbestätigung" },
    { id: "Kostenvoranschlag", label: "Kostenvoranschlag" },
    { id: "Sonstiges", label: "Sonstiges" }
];

function InterestIcon({ id }: { id: string }) {
    const s = { width: 28, height: 28, strokeWidth: 1.8, stroke: 'currentColor', fill: 'none' as const };
    switch (id) {
        case 'Unfallgutachten':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...s}>
                    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                    <circle cx="7" cy="17" r="2" />
                    <path d="M9 17h6" />
                    <circle cx="17" cy="17" r="2" />
                </svg>
            );
        case 'Kaskoschaden':
            return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...s}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>;
        case 'Wertgutachten':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={s.width} height={s.height} fill="currentColor">
                    <g>
                        <path d="M238.402,246.07c0,16.561-13.473,30.034-30.034,30.034h-12.009c-17.149,0-31.252-13.248-32.636-30.046h37.28V216.06 h-37.401v-30.046h37.401v-29.998h-37.28c1.384-16.798,15.488-30.046,32.637-30.046h12.008c16.561,0,30.034,13.473,30.034,30.034 H268.4c0-33.102-26.93-60.032-60.032-60.032h-12.009c-33.694,0-61.261,26.695-62.686,60.044h-30.102v29.998h30.034v30.046h-30.034 v29.998h30.102c1.426,33.349,28.992,60.044,62.687,60.044h12.008c33.102,0,60.032-26.93,60.032-60.032H238.402z" />
                    </g>
                    <g>
                        <path d="M495.882,418.026l-119.28-119.28c16.17-28.944,25.403-62.267,25.403-97.71c0-110.834-90.17-201.003-201.003-201.003 C90.169,0.034,0,90.203,0,201.037s90.169,201.003,201.003,201.003c35.479,0,68.832-9.252,97.797-25.452l119.261,119.261 c10.392,10.394,24.211,16.118,38.91,16.118s28.518-5.725,38.91-16.118C506.276,485.455,512,471.636,512,456.937 S506.276,428.42,495.882,418.026z M201.003,372.041c-94.292,0-171.005-76.713-171.005-171.005S106.711,30.032,201.003,30.032 s171.005,76.713,171.005,171.005S295.294,372.041,201.003,372.041z M345.643,381.008l-21.341-21.341 c13.21-10.291,25.105-22.193,35.39-35.408l21.343,21.343C370.537,358.655,358.692,370.505,345.643,381.008z M474.67,474.638 c-4.728,4.728-11.013,7.331-17.699,7.331c-6.686,0-12.972-2.604-17.699-7.331l-72.308-72.308 c12.908-10.653,24.743-22.492,35.392-35.406l72.314,72.314C484.43,448.998,484.43,464.877,474.67,474.638z" />
                    </g>
                </svg>
            );
        case 'Reparaturbestätigung':
            return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...s}><circle cx="12" cy="12" r="10" /><polyline points="9 12 11 14 15 10" /></svg>;
        case 'Kostenvoranschlag':
            return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...s}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>;
        default:
            return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...s}><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>;
    }
}

export default function Konfigurator() {
    const WHATSAPP_NUMBER = "4917684568618";

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
                                        <span className="unfall-wa-ico"><InterestIcon id={item.id} /></span>
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
