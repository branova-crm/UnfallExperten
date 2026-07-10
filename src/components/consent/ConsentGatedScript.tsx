'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { useConsent } from './ConsentProvider';
import type { ConsentCategory } from '@/lib/consent/types';

type ConsentGatedScriptProps = {
  src: string;
  category: ConsentCategory;
  className?: string;
  placeholder?: ReactNode;
};

export default function ConsentGatedScript({
  src,
  category,
  className,
  placeholder,
}: ConsentGatedScriptProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { hasCategory, isReady } = useConsent();
  const allowed = isReady && hasCategory(category);

  useEffect(() => {
    if (!allowed) return;

    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = '';
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.defer = true;
    script.type = 'text/javascript';
    script.setAttribute('data-consent-category', category);
    container.appendChild(script);

    return () => {
      container.innerHTML = '';
    };
  }, [allowed, src, category]);

  if (!allowed) {
    return (
      <div className={className}>
        {placeholder ?? (
          <p className="consent-script-placeholder">
            Dieser Inhalt wird erst nach Ihrer Einwilligung geladen.
          </p>
        )}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ width: '100%', minHeight: '60px' }}
    />
  );
}
