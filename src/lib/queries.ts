/** CMS-Seite mit Sections (früher aus Supabase); aktuell unbenutzt. */
export type CmsPageRecord = {
    id: string;
    title: string;
    slug?: string;
    sections?: unknown[];
    [key: string]: unknown;
} | null;

export async function getPublishedPage(_slug: string): Promise<CmsPageRecord> {
    return null;
}

export async function getDraftPage(_slug: string): Promise<CmsPageRecord> {
    return null;
}

export async function getAllPages() {
    return [];
}

export async function getPageById(_id: string) {
    return null;
}

export async function getPageSectionData(_slug: string, _sectionType: string) {
    return null;
}

export async function getNavigation(_key: string = 'main') {
    return null;
}

export async function getGlobal(_key: string) {
    return null;
}

export async function getAllGlobals() {
    return [];
}

export async function getAllMedia() {
    return [];
}

export async function getAllLocations() {
    return [];
}

export async function getPublishedLocations() {
    return [];
}

export async function getLocationBySlug(_slug: string) {
    return null;
}

export async function getLocationById(_id: string) {
    return null;
}
