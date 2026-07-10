import type { CSSProperties, ReactNode } from 'react';
import HeroWaveMarquee, { DEFAULT_HERO_MARQUEE_ITEMS } from '@/components/HeroWaveMarquee';

type HeroWaveZoneProps = {
    children: ReactNode;
    marqueeItems?: string[];
    className?: string;
    /** Hintergrundfarbe der Sektion direkt unter der Welle – muss zur Folge-Section passen (Standard: Weiß). */
    surfaceColor?: string;
};

export default function HeroWaveZone({
    children,
    marqueeItems = DEFAULT_HERO_MARQUEE_ITEMS,
    className,
    surfaceColor,
}: HeroWaveZoneProps) {
    const style = surfaceColor
        ? ({ ['--hero-wave-surface' as string]: surfaceColor } as CSSProperties)
        : undefined;

    return (
        <div
            className={className ? `hero-wave-zone ${className}` : 'hero-wave-zone'}
            style={style}
        >
            {children}
            <HeroWaveMarquee items={marqueeItems} />
        </div>
    );
}
