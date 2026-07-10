"use client";

import ConsentGatedScript from '@/components/consent/ConsentGatedScript';

export default function TrustindexWidget({ scriptUrl }: { scriptUrl: string }) {
    return (
        <ConsentGatedScript
            src={scriptUrl}
            category="statistics"
            className="trustindex-container"
            placeholder={
                <p className="consent-script-placeholder">
                    Bewertungen von Trustindex werden erst nach Ihrer Einwilligung zur
                    Kategorie „Statistik“ geladen.
                </p>
            }
        />
    );
}
