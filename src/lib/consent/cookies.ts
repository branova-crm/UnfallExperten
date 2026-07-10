import type { ConsentCategory } from './types';

const COOKIES_BY_CATEGORY: Record<ConsentCategory, string[]> = {
  necessary: [],
  preferences: [],
  statistics: ['ti_', '__ti'],
  marketing: ['_fbp', '_fbc', 'fr'],
  externalMedia: ['NID', '1P_JAR', 'CONSENT', 'SOCS', 'AEC', 'APISID', 'HSID', 'SAPISID', 'SID', 'SSID'],
};

const STORAGE_KEYS_BY_CATEGORY: Record<ConsentCategory, string[]> = {
  necessary: [],
  preferences: [],
  statistics: [],
  marketing: [],
  externalMedia: [],
};

const PATH_VARIANTS = ['/', ''];

function deleteCookie(name: string, domain: string, path: string) {
  if (typeof document === 'undefined') return;
  const domainPart = domain ? `; domain=${domain}` : '';
  const pathPart = path ? `; path=${path}` : '; path=/';
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT${pathPart}${domainPart}`;
  document.cookie = `${name}=; Max-Age=0${pathPart}${domainPart}`;
}

export function clearCookiesForCategory(category: ConsentCategory) {
  const names = COOKIES_BY_CATEGORY[category];
  if (typeof window === 'undefined') return;

  const host = window.location.hostname;
  const domains = [
    '',
    host,
    `.${host}`,
    ...names.some((n) => ['NID', '1P_JAR', 'CONSENT'].includes(n))
      ? ['.google.com', '.google.de', 'google.com', 'google.de']
      : [],
  ];

  for (const name of names) {
    for (const domain of domains) {
      for (const path of PATH_VARIANTS) {
        deleteCookie(name, domain, path);
      }
    }
    // Prefix-based cookies (e.g. ti_*)
    if (name.endsWith('_')) {
      document.cookie.split(';').forEach((cookie) => {
        const cookieName = cookie.split('=')[0]?.trim();
        if (cookieName?.startsWith(name)) {
          for (const domain of domains) {
            for (const path of PATH_VARIANTS) {
              deleteCookie(cookieName, domain, path);
            }
          }
        }
      });
    }
  }
}

export function clearStorageForCategory(category: ConsentCategory) {
  if (typeof window === 'undefined') return;
  const keys = STORAGE_KEYS_BY_CATEGORY[category];
  for (const key of keys) {
    try {
      localStorage.removeItem(key);
      sessionStorage.removeItem(key);
    } catch {
      // ignore
    }
  }
}

export function clearRevokedCategories(categories: ConsentCategory[]) {
  for (const category of categories) {
    if (category === 'necessary') continue;
    clearCookiesForCategory(category);
    clearStorageForCategory(category);
  }
}

export function getRevokedCategories(
  previous: Record<ConsentCategory, boolean>,
  next: Record<ConsentCategory, boolean>
): ConsentCategory[] {
  const revoked: ConsentCategory[] = [];
  const all: ConsentCategory[] = [
    'preferences',
    'statistics',
    'marketing',
    'externalMedia',
  ];
  for (const cat of all) {
    if (previous[cat] && !next[cat]) revoked.push(cat);
  }
  return revoked;
}
