import { useId } from 'react';

const WAVE_TEXT_PATH =
    'M -1440 24 C -1200 0 -960 0 -720 24 C -480 48 -240 48 0 24 C 240 0 480 0 720 24 C 960 48 1200 48 1440 24';

/* Desktop: Fläche unterhalb der Welle (unverändert, veröffentlichte Version) */
const WAVE_FILL_PATH =
    'M0 72 L0 24 C240 0 480 0 720 24 C960 48 1200 48 1440 24 L1440 72 Z';

/* Mobile: Fläche unterhalb der Welle – reicht über die untere Kante hinaus (kein Haarlinien-Spalt) */
const WAVE_FILL_PATH_MOBILE =
    'M0 82 L0 24 C240 0 480 0 720 24 C960 48 1200 48 1440 24 L1440 82 Z';

/* Mobile: dunkle Fläche oberhalb der Welle – teilt exakt dieselbe Kurve, reicht über die obere Kante hinaus */
const WAVE_TOP_PATH_MOBILE =
    'M0 -6 L1440 -6 L1440 24 C1200 48 960 48 720 24 C480 0 240 0 0 24 Z';

export const DEFAULT_HERO_MARQUEE_ITEMS = [
    'Unabhängige Gutachter-Experten',
    'Mobil in ganz NRW',
    'Kostenlose Ersteinschätzung',
];

type HeroWaveMarqueeProps = {
    items?: string[];
    ariaLabel?: string;
};

type MarqueeTextProps = {
    textPathId: string;
    marqueeText: string;
    dy?: string;
};

function MarqueeText({ textPathId, marqueeText, dy = '-6' }: MarqueeTextProps) {
    return (
        <text
            className="hero-wave-marquee-text hero-wave-marquee-text--animated"
            fill="rgba(255, 255, 255, 0.92)"
            fontSize="13"
            dy={dy}
        >
            <textPath href={`#${textPathId}`} startOffset="0%">
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
    );
}

export default function HeroWaveMarquee({
    items = DEFAULT_HERO_MARQUEE_ITEMS,
    ariaLabel = 'Kernvorteile',
}: HeroWaveMarqueeProps) {
    const segment = `${items.join(' · ')} · `;
    const marqueeText = segment.repeat(6);
    const mobileTextPathId = useId().replace(/:/g, '');

    return (
        <div className="hero-wave-marquee" aria-label={ariaLabel}>
            {/* Desktop: veröffentlichte Version – unverändert */}
            <svg
                className="hero-wave-marquee-svg hero-wave-marquee-svg--desktop"
                viewBox="0 0 1440 72"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                role="presentation"
            >
                <defs>
                    <path id="hero-wave-text-path" d={WAVE_TEXT_PATH} fill="none" />
                </defs>

                <path className="hero-wave-fill" d={WAVE_FILL_PATH} fill="#ffffff" />

                <MarqueeText textPathId="hero-wave-text-path" marqueeText={marqueeText} />
            </svg>

            {/* Mobile: zweifarbig (dunkel oben + Fläche unten) – gleichmäßig skaliert (slice), keine Naht, keine Verzerrung */}
            <svg
                className="hero-wave-marquee-svg hero-wave-marquee-svg--mobile"
                viewBox="0 0 1440 76"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
                role="presentation"
            >
                <defs>
                    <path id={mobileTextPathId} d={WAVE_TEXT_PATH} fill="none" />
                </defs>

                <path className="hero-wave-fill--top" d={WAVE_TOP_PATH_MOBILE} fill="#0d2868" />
                <path className="hero-wave-fill" d={WAVE_FILL_PATH_MOBILE} fill="#ffffff" />

                <MarqueeText textPathId={mobileTextPathId} marqueeText={marqueeText} />
            </svg>

            <p className="hero-wave-marquee-static">{items.join(' · ')}</p>
        </div>
    );
}
