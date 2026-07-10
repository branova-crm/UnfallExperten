/**
 * Gibt strukturierte Daten (JSON-LD) als <script>-Tag aus.
 * Server-Komponente – kann auf jeder Seite eingebunden werden.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}
