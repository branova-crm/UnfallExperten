import type { Metadata } from 'next';
import { SEO, absoluteUrl } from '@/lib/seo/config';

/**
 * Einheitlicher Metadaten-Builder: erzeugt Title, Description,
 * Canonical-URL sowie OpenGraph-/Twitter-Tags für saubere Google-Snippets.
 */
export function buildMetadata(params: {
    title: string;
    description: string;
    path: string;
    /** OpenGraph-Typ (Standard: website) */
    type?: 'website' | 'article' | 'profile';
    /** Seite von der Indexierung ausschließen */
    noindex?: boolean;
    /** Abweichendes Vorschaubild */
    image?: string;
}): Metadata {
    const url = absoluteUrl(params.path);
    const image = params.image ?? SEO.ogImageUrl;

    return {
        title: params.title,
        description: params.description,
        alternates: {
            canonical: params.path === '/' ? '/' : params.path,
        },
        robots: params.noindex
            ? { index: false, follow: true }
            : { index: true, follow: true },
        openGraph: {
            type: params.type ?? 'website',
            url,
            siteName: SEO.brandName,
            title: params.title,
            description: params.description,
            locale: 'de_DE',
            images: [{ url: image, width: 1200, height: 630, alt: params.title }],
        },
        twitter: {
            card: 'summary_large_image',
            title: params.title,
            description: params.description,
            images: [image],
        },
    };
}
