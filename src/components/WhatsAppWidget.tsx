"use client";

import { useState, useEffect, useRef } from 'react';

export default function WhatsAppWidget() {
    const WHATSAPP_NUMBER = "4902111234567";

    const [isOpen, setIsOpen] = useState(false);
    const [showBadge, setShowBadge] = useState(false);
    const [autoOpened, setAutoOpened] = useState(false);
    const [chatStep, setChatStep] = useState(0);
    const [messages, setMessages] = useState([
        { text: "Hallo! 👋<br>Wie kann ich helfen?", sender: "bot", time: "" as string | Date }
    ]);
    const [inputText, setInputText] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    const [userContext, setUserContext] = useState({ issue: "", name: "", contact: "" });

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        // Set actual time on client to prevent hydration errors
        setMessages(prev => [{ ...prev[0], time: new Date() }, ...prev.slice(1)]);

        // Auto-open logic after 2 seconds
        const timer1 = setTimeout(() => {
            if (!autoOpened && !isOpen) {
                setShowBadge(true);
                const timer2 = setTimeout(() => {
                    if (!autoOpened && !isOpen) {
                        setIsOpen(true);
                        setShowBadge(false);
                        setAutoOpened(true);
                    }
                }, 800);
                return () => clearTimeout(timer2);
            }
        }, 2000);

        return () => clearTimeout(timer1);
    }, [autoOpened, isOpen]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isTyping]);

    useEffect(() => {
        if (isOpen && chatStep < 3) {
            setTimeout(() => inputRef.current?.focus(), 300);
        }
    }, [isOpen, chatStep]);

    const addMessage = (htmlText: string, sender: "bot" | "user") => {
        setMessages(prev => [...prev, { text: htmlText, sender, time: new Date() }]);
    };

    const botReply = (htmlText: string, delayMin = 1200, delayMax = 2200) => {
        setIsTyping(true);
        const delay = Math.floor(Math.random() * (delayMax - delayMin + 1) + delayMin);

        setTimeout(() => {
            setIsTyping(false);
            addMessage(htmlText, "bot");
        }, delay);
    };

    const handleSend = () => {
        const text = inputText.trim();
        if (!text) return;

        addMessage(text, "user");
        setInputText("");

        setUserContext(prev => {
            const newCtx = { ...prev };
            if (chatStep === 0) {
                newCtx.issue = text;
                setChatStep(1);
                botReply("Wie lautet dein Name?");
            } else if (chatStep === 1) {
                newCtx.name = text;
                setChatStep(2);
                botReply(`${text}, wann bist du am besten zu sprechen?`);
            } else if (chatStep === 2) {
                newCtx.contact = text;
                setChatStep(3);
                botReply(`Danke ${newCtx.name}! Wir verbinden dich jetzt direkt mit deinem persönlichen Ansprechpartner auf WhatsApp. Klicke hier unten, um den Chat zu starten.`);
            }
            return newCtx;
        });
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") handleSend();
    };

    const toggleWidget = () => {
        setIsOpen(!isOpen);
        setShowBadge(false);
        setAutoOpened(true);
    };

    const startWhatsAppChat = () => {
        const template = `Hallo UnfallExperten,\nich benötige Hilfe!\n\n*Name:* ${userContext.name}\n*Erreichbarkeit:* ${userContext.contact}\n*Mein Anliegen:* ${userContext.issue}`;
        const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(template)}`;
        window.open(whatsappURL, '_blank');
        setIsOpen(false);
    };

    const formatTime = (date: Date | string) => {
        if (!date) return "";
        if (typeof date === "string") date = new Date(date);

        const hrs = date.getHours().toString().padStart(2, '0');
        const mins = date.getMinutes().toString().padStart(2, '0');
        return `${hrs}:${mins}`;
    };

    return (
        <div className="wa-widget" id="wa-widget">
            <div className={`wa-widget-popup ${isOpen ? 'open' : ''}`} id="wa-popup">
                <div className="wa-popup-header">
                    <div className="wa-profile-wrap">
                        <img src="/images/chatberkay.png" alt="Berkay Profilbild" className="wa-profile-img" />
                        <span className="wa-online-dot"></span>
                    </div>
                    <div className="wa-header-text">
                        <strong>Berkay - Ihre Gutachter-Experten</strong>
                        <span>Online</span>
                    </div>
                    <button className="wa-close" id="wa-close" onClick={() => setIsOpen(false)}>&times;</button>
                </div>

                <div className="wa-popup-body">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`wa-message-bubble ${msg.sender}`}>
                            <div dangerouslySetInnerHTML={{ __html: msg.text }} />
                            <span className="wa-time">{formatTime(msg.time)}</span>
                        </div>
                    ))}
                    {isTyping && (
                        <div className="wa-message-bubble bot wa-typing">
                            <div className="wa-typing-indicator"><span></span><span></span><span></span></div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {chatStep < 3 ? (
                    <div className="wa-popup-footer" style={{ display: chatStep < 3 ? 'flex' : 'none' }}>
                        <input
                            type="text"
                            ref={inputRef}
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Schreibe eine Nachricht..."
                            autoComplete="off"
                        />
                        <button aria-label="Senden" onClick={handleSend}>
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                            </svg>
                        </button>
                    </div>
                ) : (
                    <div className="wa-final-action visible">
                        <button onClick={startWhatsAppChat}>Jetzt mit Mitarbeiter sprechen</button>
                    </div>
                )}
            </div>

            <div className="wa-widget-btn" onClick={toggleWidget}>
                <span className={`wa-badge ${showBadge ? 'show' : ''}`}>1</span>
                <img src="/images/chatberkay.png" alt="WhatsApp Chat" className="wa-btn-img" />
                <div className="wa-whatsapp-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785h-.005a9.868 9.868 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374A9.86 9.86 0 0 1 2.17 12.06c0-5.456 4.436-9.893 9.9-9.893a9.827 9.827 0 0 1 7.001 2.902 9.828 9.828 0 0 1 2.893 7.003c-.004 5.456-4.44 9.893-9.913 9.893zM20.52 3.449C18.24 1.245 15.24 0 12.05 0 5.463 0 .104 5.334.101 11.893a11.793 11.793 0 0 0 1.587 5.946L0 24l6.335-1.652A11.882 11.882 0 0 0 12.05 24c6.584 0 11.94-5.335 11.943-11.893a11.808 11.808 0 0 0-3.473-8.658z" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
