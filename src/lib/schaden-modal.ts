/** Globales Event zum Öffnen des "Schaden melden"-Modals. */
export const SCHADEN_MODAL_EVENT = 'ue:open-schaden';

export function openSchadenModal(): void {
    if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent(SCHADEN_MODAL_EVENT));
    }
}
