import { Metadata } from 'next';
import Image from 'next/image';
import AboutFaq from '@/components/AboutFaq';
import AboutJourneyTimeline from '@/components/AboutJourneyTimeline';
import HeroWaveZone from '@/components/HeroWaveZone';

export const metadata: Metadata = {
    title: 'Über uns – UnfallExperten NRW | Ihre Gutachter-Experten',
    description:
        'Lernen Sie UnfallExperten NRW und Berkay Okur kennen. Unabhängige Unterstützung nach einem Unfall, schnelle Schadenaufnahme und persönliche Begleitung in NRW.',
};

const TEL = 'tel:+4902111234567';
const WHATSAPP = 'https://wa.me/4902111234567?text=Hallo%2C%20ich%20habe%20eine%20Frage%20zu%20UnfallExperten.';

const TIMELINE = [
    {
        title: 'Unfall aufnehmen',
        text: 'Wir hören zu, klären die Situation und erfassen alle wichtigen Informationen zu Ihrem Schadenfall.',
    },
    {
        title: 'Schaden dokumentieren',
        text: 'Der Fahrzeugschaden wird sorgfältig aufgenommen, damit keine relevanten Positionen übersehen werden.',
    },
    {
        title: 'Gutachten erstellen',
        text: 'Sie erhalten eine nachvollziehbare Grundlage für die weitere Schadenregulierung.',
    },
    {
        title: 'Regulierung begleiten',
        text: 'Wir unterstützen Sie dabei, den weiteren Ablauf verständlich und stressfrei zu gestalten.',
    },
];

const VALUES = [
    {
        title: 'Unabhängigkeit',
        text: 'Wir arbeiten nicht im Interesse einer Versicherung, sondern unterstützen Sie als Geschädigten mit einer neutralen und nachvollziehbaren Schadenaufnahme.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
    },
    {
        title: 'Ehrlichkeit',
        text: 'Wir erklären offen, welcher Schritt sinnvoll ist und ob ein Gutachten, ein Kostenvoranschlag oder eine andere Lösung passend ist.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
        ),
    },
    {
        title: 'Schnelligkeit',
        text: 'Nach einem Unfall zählt Zeit. Deshalb sind wir kurzfristig erreichbar und kommen bei Bedarf direkt zu Ihnen.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </svg>
        ),
    },
    {
        title: 'Verständlichkeit',
        text: 'Wir erklären den Ablauf so, dass Sie wissen, was passiert und welche nächsten Schritte wichtig sind.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
        ),
    },
];

const VEHICLE_TYPES = [
    { title: 'PKW', text: 'Alle Marken und Modelle', iconSrc: '/images/auto.svg' },
    { title: 'E-Auto', text: 'Inkl. Batteriecheck', iconSrc: '/images/eauto.svg' },
    { title: 'LKW', text: 'Alle Gewichtsklassen', iconSrc: '/images/lkw.svg' },
    { title: 'Caravan', text: 'Inkl. Aufbau & Innenraum', iconSrc: '/images/caravan.svg' },
    { title: 'Anhänger', text: 'Alle Typen', iconSrc: '/images/anhänger.svg' },
    { title: 'Motorrad', text: 'Alle Hersteller', iconSrc: '/images/motorrad.svg' },
];

const PERSONAL_POINTS = [
    'Direkter Ansprechpartner',
    'Klare Kommunikation',
    'Schnelle Rückmeldung',
    'Unterstützung vor Ort',
];

const HERO_PILLS = [
    'Unabhängige Gutachter-Experten',
    'Mobil in ganz NRW',
    'Kostenlose Ersteinschätzung',
];

function PhoneIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '6px' }} aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    );
}

function WhatsAppIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '6px' }} aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785h-.005a9.868 9.868 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374A9.86 9.86 0 0 1 2.17 12.06c0-5.456 4.436-9.893 9.9-9.893a9.827 9.827 0 0 1 7.001 2.902 9.828 9.828 0 0 1 2.893 7.003c-.004 5.456-4.44 9.893-9.913 9.893zM20.52 3.449C18.24 1.245 15.24 0 12.05 0 5.463 0 .104 5.334.101 11.893a11.793 11.793 0 0 0 1.587 5.946L0 24l6.335-1.652A11.882 11.882 0 0 0 12.05 24c6.584 0 11.94-5.335 11.943-11.893a11.808 11.808 0 0 0-3.473-8.658z" />
        </svg>
    );
}

export default function UeberUnsPage() {
    return (
        <div className="about-page">
            <HeroWaveZone marqueeItems={HERO_PILLS}>
            {/* Premium Hero */}
            <section className="about-hero-premium about-hero">
                <div className="hero-bg">
                    <video autoPlay muted loop playsInline>
                        <source src="/images/herovideo2.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="hero-overlay" aria-hidden="true" />
                <div className="about-hero-premium-bg" aria-hidden="true" />
                <div className="container about-hero-premium-inner">
                    <div className="about-hero-premium-grid about-hero-grid">
                        <div className="about-hero-premium-content about-hero-content">
                            <span className="about-hero-kicker">Über UnfallExperten</span>
                            <h1>Berkay Okur, Ihr KFZ-Gutachter für NRW</h1>
                            <p className="about-hero-premium-lead">
                                Persönliche Unterstützung nach einem Unfall – unabhängig, schnell und verständlich.
                            </p>
                            <p className="about-hero-premium-text">
                                Nach einem Unfall zählt nicht nur ein schnelles Gutachten, sondern auch ein Ansprechpartner,
                                der den gesamten Ablauf verständlich begleitet. UnfallExperten steht für unabhängige
                                Unterstützung, klare Kommunikation und eine schnelle Schadenaufnahme direkt vor Ort.
                            </p>
                            <div className="about-hero-premium-ctas about-hero-actions">
                                <a href={TEL} className="btn btn-primary">
                                    <PhoneIcon />
                                    Jetzt anrufen
                                </a>
                                <a href={WHATSAPP} className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
                                    <WhatsAppIcon />
                                    WhatsApp schreiben
                                </a>
                            </div>
                        </div>

                        <div className="about-hero-media">
                            <div className="about-profile-card">
                                <div className="about-profile-frame">
                                    <Image
                                        src="/images/chatberkay.png"
                                        alt="Berkay Okur – KFZ-Gutachter bei UnfallExperten NRW"
                                        width={420}
                                        height={520}
                                        priority
                                        className="about-profile-img"
                                    />
                                    <span className="about-profile-badge">Ihr Ansprechpartner</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </HeroWaveZone>

            {/* Begleitung / Prozess */}
            <section className="about-process-section about-chapter about-chapter--process">
                <div className="about-chapter-bg" aria-hidden="true" />
                <div className="container">
                    <div className="about-section-head about-reveal">
                        <span className="section-label">Ihre Begleitung</span>
                        <h2 className="section-title">So begleiten wir Sie nach dem Unfall</h2>
                        <p className="section-subtitle">
                            Vom ersten Kontakt bis zur fertigen Schadenaufnahme – klar, schnell und ohne unnötigen Stress.
                        </p>
                    </div>
                    <div className="about-process-grid about-stagger about-reveal">
                        {TIMELINE.map((step, index) => (
                            <article
                                key={step.title}
                                className="about-process-card"
                                tabIndex={0}
                            >
                                <span className="about-process-number">{String(index + 1).padStart(2, '0')}</span>
                                <div className="about-process-content">
                                    <h3>{step.title}</h3>
                                    <p>{step.text}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Werte */}
            <section className="about-values-premium about-chapter about-chapter--values">
                <div className="about-chapter-bg" aria-hidden="true" />
                <div className="container">
                    <div className="about-section-head about-reveal">
                        <span className="section-label">Unsere Philosophie</span>
                        <h2 className="section-title">Wofür UnfallExperten steht</h2>
                        <p className="section-subtitle">
                            Im Schadenfall brauchen Sie Klarheit, Verlässlichkeit und jemanden, der Ihre Situation ernst nimmt.
                        </p>
                    </div>
                    <div className="about-values-premium-grid about-stagger about-reveal">
                        {VALUES.map((value) => (
                            <article key={value.title} className="about-values-premium-card">
                                <div className="about-values-premium-icon">{value.icon}</div>
                                <h3>{value.title}</h3>
                                <p>{value.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <AboutJourneyTimeline />

            {/* Persönlicher Abschnitt */}
            <section className="about-personal-section">
                <div className="container">
                    <div className="about-personal-grid">
                        <div className="about-personal-content about-reveal">
                            <span className="section-label">Persönlich vor Ort</span>
                            <h2 className="section-title">Persönliche Hilfe nach dem Unfall</h2>
                            <p>
                                Berkay Okur begleitet Sie nach einem Unfall direkt und verständlich. Sie erhalten eine
                                schnelle Einschätzung, klare Informationen zum weiteren Ablauf und eine nachvollziehbare
                                Dokumentation Ihres Fahrzeugschadens. So wissen Sie von Anfang an, welche Schritte wichtig sind.
                            </p>
                            <ul className="about-personal-checklist about-stagger about-reveal">
                                {PERSONAL_POINTS.map((point) => (
                                    <li key={point}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fahrzeugtypen */}
            <section className="about-vehicle-types about-chapter about-chapter--vehicles">
                <div className="about-chapter-bg" aria-hidden="true" />
                <div className="container">
                    <div className="about-vehicle-header about-reveal">
                        <span className="about-vehicle-kicker">FAHRZEUGTYPEN</span>
                        <h2 className="about-vehicle-headline">Unsere Expertise – Umfassende Fahrzeugtypen</h2>
                        <p className="about-vehicle-intro">
                            Egal welches Fahrzeug – unsere Gutachter-Experten sind für alle Typen qualifiziert.
                        </p>
                    </div>
                    <div className="about-vehicle-grid about-stagger about-reveal">
                        {VEHICLE_TYPES.map((vehicle) => (
                            <article key={vehicle.title} className="about-vehicle-card">
                                <div className="about-vehicle-icon">
                                    <Image
                                        src={vehicle.iconSrc}
                                        alt=""
                                        width={48}
                                        height={48}
                                        loading="lazy"
                                        aria-hidden="true"
                                    />
                                </div>
                                <h3 className="about-vehicle-title">{vehicle.title}</h3>
                                <p className="about-vehicle-text">{vehicle.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <AboutFaq />
        </div>
    );
}
