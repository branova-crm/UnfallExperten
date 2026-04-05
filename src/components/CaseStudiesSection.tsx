"use client";

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const caseStudies = [
  {
    id: 1,
    category: 'REPARATURSCHADEN',
    categoryColor: 'rgba(17, 52, 133, 0.65)',
    image: '/images/1.jpg',
    vehicleInfo: 'BMW X7 xDRIVE40d · MJ 2024',
    title: 'Parkplatz-Kollision: Streifschaden an der Fahrerseite professionell bewertet',
    slug: 'bmw-x7-parkplatz-kollision',
    stats: [
      { label: 'Schadenshöhe', value: '6.227 €', highlight: true },
      { label: 'Wertminderung', value: '1.750 €', highlight: false },
      { label: 'Fahrzeugwert', value: '117.100 €', highlight: false },
      { label: 'Reparaturdauer', value: '3 Tage', highlight: false },
    ]
  },
  {
    id: 2,
    category: 'REPARATURSCHADEN',
    categoryColor: 'rgba(17, 52, 133, 0.65)',
    image: '/images/3.jpg',
    vehicleInfo: 'MERCEDES-BENZ E 300 e 4MATIC · BJ 2021',
    title: 'Vorfahrt missachtet: Komplexer Flankenschaden im Stadtverkehr',
    slug: 'mercedes-e300-vorfahrt-missachtet',
    stats: [
      { label: 'Schadenshöhe', value: '18.797 €', highlight: true },
      { label: 'Wertminderung', value: '1.500 €', highlight: false },
      { label: 'Fahrzeugwert', value: '44.436 €', highlight: false },
      { label: 'Reparaturdauer', value: '7 Tage', highlight: false },
    ]
  },
  {
    id: 3,
    category: 'TOTALSCHADEN',
    categoryColor: 'rgba(220, 38, 38, 0.65)',
    image: '/images/2.jpg',
    vehicleInfo: 'PORSCHE MACAN GTS · EZ 2023',
    title: 'Autobahn-Auffahrunfall: Feststellung eines wirtschaftlichen Totalschadens',
    slug: 'porsche-macan-autobahn-unfall',
    stats: [
      { label: 'Schadenshöhe', value: '32.223 €', highlight: true },
      { label: 'Restwert', value: '5.600 €', highlight: false },
      { label: 'Fahrzeugwert', value: '26.075 €', highlight: false },
      { label: 'Wertminderung', value: '2.200 €', highlight: false },
    ]
  },
  {
    id: 4,
    category: 'HAFTPFLICHTSCHADEN',
    categoryColor: 'rgba(17, 52, 133, 0.65)',
    image: '/images/4.jpg',
    vehicleInfo: 'AUDI RS6 AVANT · MJ 2022',
    title: 'Auffahrunfall an der Ampel: Heckschaden und Wertminderung',
    slug: 'audi-rs6-auffahrunfall',
    stats: [
      { label: 'Schadenshöhe', value: '12.450 €', highlight: true },
      { label: 'Wertminderung', value: '3.100 €', highlight: false },
      { label: 'Fahrzeugwert', value: '98.500 €', highlight: false },
      { label: 'Reparaturdauer', value: '5 Tage', highlight: false },
    ]
  },
  {
    id: 5,
    category: 'TOTALSCHADEN',
    categoryColor: 'rgba(220, 38, 38, 0.65)',
    image: '/images/5.jpg',
    vehicleInfo: 'TESLA MODEL Y · EZ 2024',
    title: 'Wildschaden: Massive Frontschäden nach Kollision',
    slug: 'tesla-model-y-wildschaden',
    stats: [
      { label: 'Schadenshöhe', value: '24.800 €', highlight: true },
      { label: 'Restwert', value: '12.000 €', highlight: false },
      { label: 'Fahrzeugwert', value: '48.000 €', highlight: false },
      { label: 'Wertminderung', value: '0 €', highlight: false },
    ]
  }
];

export default function CaseStudiesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400; // Ungefähre Breite einer Karte + Gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      // Check after a short delay for animation
      setTimeout(checkScroll, 500);
    }
  };

  return (
    <section style={{
      padding: '24px 0 96px 0',
      background: '#ffffff',
      overflow: 'hidden'
    }}>
      <div className="container">

        {/* Section Header - Centered */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center', 
          textAlign: 'center',
          marginBottom: '56px',
          gap: '24px'
        }}>
          <div style={{ maxWidth: '850px' }}>
            <span style={{
              color: 'var(--clr-primary)',
              fontWeight: 700,
              textTransform: 'uppercase',
              fontSize: '0.75rem',
              letterSpacing: '3px',
              display: 'block',
              marginBottom: '12px'
            }}>
              Fallbeispiele
            </span>
            <h2 className="section-title" style={{ color: '#0c1c44', marginBottom: '16px' }}>
              KFZ-Gutachten & Schadensbewertungen aus der Praxis
            </h2>
            <p style={{
              color: 'var(--clr-text-muted)',
              fontSize: '0.9rem',
              lineHeight: '1.7',
              margin: 0
            }}>
              Echte Schadensfälle, professionell dokumentiert und rechtssicher bewertet. Entdecken Sie anschauliche Beispiele unserer täglichen Arbeit als KFZ-Gutachter – von der Unfallaufnahme bis zum vollständigen Gutachten für Geschädigte.
            </p>
          </div>

        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          onScroll={checkScroll}
          style={{
            display: 'flex',
            gap: '24px',
            overflowX: 'auto',
            paddingBottom: '32px',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
            alignItems: 'stretch' // Sorgt für gleiche Höhe der Items
          }}
        >
          {caseStudies.map((study) => (
            <motion.div 
              key={study.id} 
              whileHover={{ y: -5 }}
              className="case-study-card"
              style={{
                background: '#ffffff',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(15, 47, 122, 0.08)',
                border: '1px solid rgba(15, 47, 122, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                flexShrink: 0
              }}
            >

              {/* Image */}
              <div style={{ position: 'relative', height: '240px', width: '100%' }}>
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(12,28,68,0.6) 0%, transparent 60%)'
                }} />
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  background: study.categoryColor,
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  padding: '6px 14px',
                  borderRadius: '10px',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  color: '#fff',
                  letterSpacing: '1px',
                  textTransform: 'uppercase'
                }}>
                  {study.category}
                </div>
              </div>

              {/* Card Body - Centered Content */}
              <div style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column', gap: '24px', textAlign: 'center', alignItems: 'center' }}>

                <div>
                  {/* Vehicle Info */}
                  <div style={{
                    color: 'var(--clr-primary)',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    letterSpacing: '1.2px',
                    textTransform: 'uppercase',
                    marginBottom: '12px'
                  }}>
                    {study.vehicleInfo}
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    color: '#0c1c44',
                    lineHeight: '1.4',
                    margin: 0
                  }}>
                    {study.title}
                  </h3>
                </div>

                {/* Stats Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '10px',
                  width: '100%'
                }}>
                  {study.stats.map((stat, i) => (
                    <div key={i} style={{
                      background: stat.highlight ? 'rgba(15,47,122,0.04)' : '#f8fafc',
                      border: '1px solid rgba(15, 47, 122, 0.06)',
                      borderRadius: '12px',
                      padding: '10px 8px',
                      textAlign: 'center'
                    }}>
                      <div style={{
                        color: stat.highlight ? 'var(--clr-primary)' : '#0c1c44',
                        fontSize: '1rem',
                        fontWeight: 800,
                        marginBottom: '2px'
                      }}>
                        {stat.value}
                      </div>
                      <div style={{
                        color: 'var(--clr-text-muted)',
                        fontSize: '0.6rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mehr dazu Button */}
                <Link 
                  href={`/fallbeispiele/${study.slug}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    background: '#113485',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    marginTop: 'auto',
                    padding: '12px 24px',
                    width: '100%', // Button über die volle Breite für besseren Look
                    borderRadius: '12px',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: '0 4px 12px rgba(15, 47, 122, 0.2)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 16px rgba(15, 47, 122, 0.3)';
                    const arrow = e.currentTarget.querySelector('.arrow');
                    if (arrow) (arrow as HTMLElement).style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(15, 47, 122, 0.2)';
                    const arrow = e.currentTarget.querySelector('.arrow');
                    if (arrow) (arrow as HTMLElement).style.transform = 'translateX(0)';
                  }}
                >
                  <span style={{ position: 'relative', zIndex: 2 }}>Mehr dazu</span>
                  <span className="arrow" style={{ transition: 'transform 0.3s ease', display: 'flex', alignItems: 'center', position: 'relative', zIndex: 2 }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14m-7-7 7 7-7 7"/>
                    </svg>
                  </span>
                </Link>

              </div>
            </motion.div>
          ))}
        </div>

        <style jsx global>{`
          .case-study-card {
            /* Desktop Default (3 Cards) */
            min-width: calc((100% - 48px) / 3);
            width: calc((100% - 48px) / 3);
          }

          @media (max-width: 1024px) {
            /* Table / iPad (2 Cards) */
            .case-study-card {
              min-width: calc((100% - 24px) / 2);
              width: calc((100% - 24px) / 2);
            }
          }

          @media (max-width: 640px) {
            /* Mobile (1 Card) */
            .case-study-card {
              min-width: 100%;
              width: 100%;
            }
          }

          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </section>
  );
}
