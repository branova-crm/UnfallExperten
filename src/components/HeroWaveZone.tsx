import type { ReactNode } from 'react';
import HeroWaveMarquee, { DEFAULT_HERO_MARQUEE_ITEMS } from '@/components/HeroWaveMarquee';

type HeroWaveZoneProps = {
    children: ReactNode;
    marqueeItems?: string[];
    className?: string;
};

export default function HeroWaveZone({
    children,
    marqueeItems = DEFAULT_HERO_MARQUEE_ITEMS,
    className,
}: HeroWaveZoneProps) {
    return (
        <div className={className ? `hero-wave-zone ${className}` : 'hero-wave-zone'}>
            {children}
            <HeroWaveMarquee items={marqueeItems} />
        </div>
    );
}
