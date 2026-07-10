import type { MetadataRoute } from 'next';
import {
    MAIN_ROUTES,
    STANDORT_ROUTES,
    SITE_URL,
    type RoutePriority,
} from '@/lib/site-routes';

const PRIORITY_VALUE: Record<RoutePriority, number> = {
    high: 1,
    medium: 0.7,
    low: 0.3,
};

/** Rechtliche Seiten (Impressum/Datenschutz) sind noindex und daher nicht enthalten. */
const SITEMAP_ROUTES = [...MAIN_ROUTES, ...STANDORT_ROUTES];

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    return SITEMAP_ROUTES.map((route) => ({
        url: `${SITE_URL}${route.path === '/' ? '' : route.path}`,
        lastModified,
        changeFrequency: route.changeFrequency,
        priority: PRIORITY_VALUE[route.priority],
    }));
}
