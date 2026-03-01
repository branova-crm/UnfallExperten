// Section Renderer – maps CMS sections to React components for public pages
import React from 'react';
import Link from 'next/link';
import { type CmsSection } from '@/lib/cms/section-types';
import ProcessSection from '@/components/ProcessSection';
import FaqSection from '@/components/FaqSection';
import BarChartSection from '@/components/BarChartSection';
import GoogleMapsEmbed from '@/components/GoogleMapsEmbed';
import Konfigurator from '@/components/Konfigurator';
import TrustindexWidget from '@/components/TrustindexWidget';

export function renderSections(sections: CmsSection[]): React.ReactNode {
    return sections.map(sec => <SectionWrapper key={sec.id} section={sec}>{renderSectionContent(sec)}</SectionWrapper>);
}

function SectionWrapper({ section: sec, children }: { section: CmsSection; children: React.ReactNode }) {
    const { settings, advanced } = sec;
    const style: React.CSSProperties = {};

    // Spacing
    if (settings.spacing.paddingTop) style.paddingTop = settings.spacing.paddingTop;
    if (settings.spacing.paddingRight) style.paddingRight = settings.spacing.paddingRight;
    if (settings.spacing.paddingBottom) style.paddingBottom = settings.spacing.paddingBottom;
    if (settings.spacing.paddingLeft) style.paddingLeft = settings.spacing.paddingLeft;
    if (settings.spacing.marginTop) style.marginTop = settings.spacing.marginTop;
    if (settings.spacing.marginBottom) style.marginBottom = settings.spacing.marginBottom;

    // Background
    if (settings.background.type === 'color') style.backgroundColor = settings.background.color;
    if (settings.background.type === 'image' && settings.background.imageMediaId) {
        style.backgroundImage = `url(${settings.background.imageMediaId})`;
        style.backgroundPosition = settings.background.position || 'center';
        style.backgroundSize = settings.background.size || 'cover';
        style.backgroundRepeat = settings.background.repeat || 'no-repeat';
    }

    const inner = settings.layout.contentWidth === 'boxed'
        ? <div className="container" style={{ maxWidth: settings.layout.maxWidthPx }}>{children}</div>
        : children;

    return (
        <section id={advanced.anchorId || undefined} className={advanced.customClass || undefined} style={style}>
            {inner}
        </section>
    );
}

function renderSectionContent(sec: CmsSection): React.ReactNode {
    const d = sec.data;

    switch (sec.type) {
        case 'HERO_PRESET':
            return (
                <section className="hero" id="about">
                    <div className="hero-bg"><video autoPlay muted loop playsInline poster="/images/hero-bg.png"><source src="/images/herovideo.mp4" type="video/mp4" /></video></div>
                    <div className="hero-overlay"></div>
                    <div className="container"><div className="hero-content">
                        {d.badgeText && <div className="trust-badge" style={{ marginBottom: '20px' }}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg> {d.badgeText}</div>}
                        <h1 dangerouslySetInnerHTML={{ __html: (d.headline || '').replace(/\n/g, '<br/>') }} />
                        {d.subheadline && <p className="hero-subheadline">{d.subheadline}</p>}
                        <div className="hero-ctas">
                            {d.primaryCtaLink && <Link href={d.primaryCtaLink} className="btn btn-whatsapp" target="_blank">{d.primaryCtaText || 'WhatsApp'}</Link>}
                            {d.secondaryCtaLink && <a href={d.secondaryCtaLink} className="btn btn-outline">{d.secondaryCtaText || 'Anrufen'}</a>}
                        </div>
                    </div></div>
                </section>
            );

        case 'RICH_TEXT':
            return <div dangerouslySetInnerHTML={{ __html: d.content || '' }} />;

        case 'CTA_BANNER':
            return (
                <div className="cta-banner">
                    <div className="cta-banner-bg"></div>
                    <div className="container">
                        {d.headline && <h2 style={sec.settings.background.type === 'color' ? { color: 'white' } : {}}>{d.headline}</h2>}
                        {d.text && <p style={sec.settings.background.type === 'color' ? { color: 'rgba(255,255,255,0.85)' } : {}}>{d.text}</p>}
                        <div className="cta-banner-buttons">
                            {d.ctaLink && <a href={d.ctaLink} className="btn btn-outline">{d.ctaText || 'Kontakt'}</a>}
                            {d.secondaryCtaLink && <Link href={d.secondaryCtaLink} className="btn btn-whatsapp" target="_blank">{d.secondaryCtaText}</Link>}
                        </div>
                    </div>
                </div>
            );

        case 'IMAGE_SECTION': {
            const src = d.imageUrl || '';
            return (
                <div style={{ textAlign: 'center' }}>
                    {src && <img src={src} alt={d.alt || ''} style={{ maxWidth: '100%', borderRadius: 'var(--radius-md, 8px)' }} loading="lazy" />}
                    {d.caption && <p style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>{d.caption}</p>}
                </div>
            );
        }

        case 'FAQ_SECTION':
            return (
                <>
                    {d.headline && <div className="text-center" style={{ marginBottom: 'var(--sp-2xl, 40px)' }}><h2 className="section-title">{d.headline}</h2></div>}
                    <div className="faq-items">
                        {(Array.isArray(d.items) ? d.items : []).map((item: any, i: number) => (
                            <details key={i} className="faq-item"><summary>{item.question}</summary><p>{item.answer}</p></details>
                        ))}
                    </div>
                </>
            );

        case 'FEATURE_GRID':
            return (
                <>
                    {d.headline && <div className="text-center" style={{ marginBottom: 'var(--sp-2xl, 40px)' }}><h2 className="section-title">{d.headline}</h2></div>}
                    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${d.columns || 3}, 1fr)`, gap: '24px' }}>
                        {(Array.isArray(d.items) ? d.items : []).map((item: any, i: number) => (
                            <div key={i} className="service-card animate-on-scroll">
                                {item.icon && <div style={{ fontSize: '32px', marginBottom: '12px' }}>{item.icon}</div>}
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </>
            );

        case 'CONTACT_CARDS':
            return (
                <div className="contact-grid">
                    <div className="contact-info">
                        {d.headline && <h2>{d.headline}</h2>}
                        {d.text && <p>{d.text}</p>}
                        <div className="contact-direct">
                            {d.phoneLink && <a href={d.phoneLink}>{d.phone}</a>}
                            {d.email && <a href={`mailto:${d.email}`}>{d.email}</a>}
                        </div>
                        {d.address && <p>{d.address}</p>}
                    </div>
                    {d.showForm && <Konfigurator />}
                </div>
            );

        case 'LOCATION_META':
            return (
                <>
                    {d.showMap && <GoogleMapsEmbed />}
                </>
            );

        case 'HTML_SNIPPET':
            return <div dangerouslySetInnerHTML={{ __html: d.code || '' }} />;

        case 'SPACER':
            return <div style={{ height: d.height || 60 }} />;

        default:
            return <div style={{ padding: '20px', textAlign: 'center', color: '#999' }}>Unbekannte Section: {sec.type}</div>;
    }
}
