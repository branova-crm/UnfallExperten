"use client";

import { useEffect, useRef } from 'react';

export default function TrustindexWidget({ scriptUrl }: { scriptUrl: string }) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Clear any prior injections to prevent duplicates on remount
        containerRef.current.innerHTML = "";

        const script = document.createElement("script");
        script.src = scriptUrl;
        script.async = true;
        script.defer = true;

        containerRef.current.appendChild(script);

        return () => {
            if (containerRef.current) {
                containerRef.current.innerHTML = "";
            }
        };
    }, [scriptUrl]);

    return <div ref={containerRef} className="trustindex-container" style={{ width: '100%', minHeight: '60px' }}></div>;
}
