'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  gutachterReferenceImageSections,
  homeReferencePreviews,
} from '@/lib/gutachterImages';

export default function HomeImageCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [openSectionIndex, setOpenSectionIndex] = useState<number | null>(null);
  const [openImageIndex, setOpenImageIndex] = useState(0);

  const activeSection =
    openSectionIndex !== null
      ? gutachterReferenceImageSections[openSectionIndex]
      : null;
  const activeImages = activeSection?.images ?? [];
  const activeImage = activeImages[openImageIndex] ?? null;

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const closeLightbox = useCallback(() => {
    setOpenSectionIndex(null);
    setOpenImageIndex(0);
  }, []);

  const openReference = useCallback((sectionIndex: number) => {
    setOpenSectionIndex(sectionIndex);
    setOpenImageIndex(0);
  }, []);

  useEffect(() => {
    if (openSectionIndex === null) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeLightbox();
        return;
      }

      if (event.key === 'ArrowLeft' && openImageIndex > 0) {
        setOpenImageIndex((prev) => prev - 1);
      }

      if (event.key === 'ArrowRight' && openImageIndex < activeImages.length - 1) {
        setOpenImageIndex((prev) => prev + 1);
      }
    };

    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [openSectionIndex, openImageIndex, activeImages.length, closeLightbox]);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -360 : 360,
      behavior: 'smooth',
    });
    window.setTimeout(checkScroll, 450);
  };

  return (
    <section className="home-case-studies home-image-carousel" aria-label="Referenzgalerie">
      <div className="container">
        <div className="home-image-carousel__header">
          <span className="home-image-carousel__kicker">Einblicke</span>
          <h2 className="section-title home-image-carousel__title">
            Echte Schadenaufnahmen aus unserer Gutachterpraxis
          </h2>
          <p className="home-image-carousel__subtitle">
            Jede Referenz mit einem Vorschaubild – per Klick öffnen Sie die
            vollständige Bildserie des jeweiligen Schadenfalls.
          </p>
        </div>

        <div
          className="home-image-carousel__controls"
          aria-hidden={!canScrollLeft && !canScrollRight}
        >
          <button
            type="button"
            className="home-image-carousel__nav"
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            aria-label="Vorherige Referenz"
          >
            ‹
          </button>
          <button
            type="button"
            className="home-image-carousel__nav"
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            aria-label="Nächste Referenz"
          >
            ›
          </button>
        </div>

        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="home-image-carousel__track"
        >
          {homeReferencePreviews.map((preview) => (
            <motion.figure
              key={preview.src}
              className="home-image-carousel__slide"
              whileHover={{ y: -4 }}
            >
              <button
                type="button"
                className="home-image-carousel__slide-btn"
                onClick={() => openReference(preview.sectionIndex)}
                aria-label={`${preview.vehicle}: ${preview.imageCount} Bilder ansehen`}
              >
                <div className="home-image-carousel__image-wrap">
                  <Image
                    src={preview.src}
                    alt={preview.alt}
                    title={preview.title}
                    fill
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 320px"
                    style={{ objectFit: 'cover' }}
                  />
                  <span className="home-image-carousel__count">
                    {preview.imageCount} Bilder
                  </span>
                  <figcaption className="home-image-carousel__caption">
                    <span>{preview.vehicle}</span>
                    <small>{preview.series}</small>
                  </figcaption>
                </div>
              </button>
            </motion.figure>
          ))}
        </div>

        <div className="home-image-carousel__footer">
          <Link href="/referenzen" className="home-image-carousel__cta">
            Alle Referenzen ansehen
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {activeImage && activeSection && (
          <motion.div
            className="referenzen-gallery-lightbox-backdrop"
            role="dialog"
            aria-modal="true"
            aria-label={`${activeSection.title} vergrößert`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="referenzen-gallery-lightbox-panel"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.22 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="referenzen-gallery-lightbox-close"
                onClick={closeLightbox}
                aria-label="Schließen"
              >
                ×
              </button>
              {openImageIndex > 0 && (
                <button
                  type="button"
                  className="referenzen-gallery-lightbox-nav referenzen-gallery-lightbox-nav--prev"
                  onClick={() => setOpenImageIndex((prev) => prev - 1)}
                  aria-label="Vorheriges Bild"
                >
                  ‹
                </button>
              )}
              {openImageIndex < activeImages.length - 1 && (
                <button
                  type="button"
                  className="referenzen-gallery-lightbox-nav referenzen-gallery-lightbox-nav--next"
                  onClick={() => setOpenImageIndex((prev) => prev + 1)}
                  aria-label="Nächstes Bild"
                >
                  ›
                </button>
              )}
              <div className="referenzen-gallery-lightbox-image">
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  title={activeImage.title}
                  fill
                  sizes="(max-width: 900px) 92vw, 900px"
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <p className="referenzen-gallery-lightbox-caption">
                {activeSection.title} – Bild {openImageIndex + 1} von{' '}
                {activeImages.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
