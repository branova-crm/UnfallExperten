"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function GlobalAnimations() {
    const pathname = usePathname();

    useEffect(() => {
        // Small delay to ensure DOM is ready after client navigation
        const timer = setTimeout(() => {
            const animateElements = document.querySelectorAll('.animate-on-scroll');
            if (animateElements.length > 0) {
                const showObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('visible');
                            showObserver.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.05, rootMargin: '0px 0px -50px 0px' });

                animateElements.forEach(el => showObserver.observe(el));

                return () => {
                    animateElements.forEach(el => showObserver.unobserve(el));
                };
            }
        }, 50);

        return () => clearTimeout(timer);
    }, [pathname]);

    return null;
}
