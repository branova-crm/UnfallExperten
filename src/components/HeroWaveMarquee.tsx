const WAVE_TEXT_PATH =
    'M -1440 24 C -1200 0 -960 0 -720 24 C -480 48 -240 48 0 24 C 240 0 480 0 720 24 C 960 48 1200 48 1440 24';

const WAVE_FILL_PATH =
    'M0 72 L0 24 C240 0 480 0 720 24 C960 48 1200 48 1440 24 L1440 72 Z';

export const DEFAULT_HERO_MARQUEE_ITEMS = [
    'Unabhängige Gutachter-Experten',
    'Mobil in ganz NRW',
    'Kostenlose Ersteinschätzung',
];

type HeroWaveMarqueeProps = {
    items?: string[];
    ariaLabel?: string;
};

export default function HeroWaveMarquee({
    items = DEFAULT_HERO_MARQUEE_ITEMS,
    ariaLabel = 'Kernvorteile',
}: HeroWaveMarqueeProps) {
    const segment = `${items.join(' · ')} · `;
    const marqueeText = segment.repeat(6);

    return (
        <div className="hero-wave-marquee" aria-label={ariaLabel}>
            <svg
                className="hero-wave-marquee-svg"
                viewBox="0 0 1440 72"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                role="presentation"
            >
                <defs>
                    <path id="hero-wave-text-path" d={WAVE_TEXT_PATH} fill="none" />
                </defs>

                <path className="hero-wave-fill" d={WAVE_FILL_PATH} fill="#ffffff" />

                <text
                    className="hero-wave-marquee-text hero-wave-marquee-text--animated"
                    fill="rgba(255, 255, 255, 0.92)"
                    fontSize="13"
                    dy="-6"
                >
                    <textPath href="#hero-wave-text-path" startOffset="0%">
                        {marqueeText}
                        <animate
                            attributeName="startOffset"
                            from="0%"
                            to="-50%"
                            dur="48s"
                            repeatCount="indefinite"
                        />
                    </textPath>
                </text>
            </svg>

            <p className="hero-wave-marquee-static">{items.join(' · ')}</p>
        </div>
    );
}
