# Technischer Kontext

## Stack
- **Framework:** Next.js 16 (App Router)
- **Sprache:** TypeScript + React 19
- **Styling:** Globales CSS (`src/app/css/style.css`), Consent-CSS (`consent.css`)
- **Animation:** Framer Motion, GSAP (GlobalAnimations)
- **Fonts:** Inter via `next/font` (self-hosted)
- **Deployment-Ziel:** Hetzner (laut Datenschutz)

## Wichtige Pfade
| Bereich | Pfad |
|---------|------|
| Kontaktdaten | `src/lib/site-contact.ts` |
| Content-Flags (versteckte Sektionen) | `src/lib/content-flags.ts` |
| Consent-Kern | `src/lib/consent/` |
| Consent-UI | `src/components/consent/` |
| Memory Bank | `memory-bank/` |

## Befehle (Projektroot)
```bash
npm run dev
npm run build
npm run lint
```

## Skills (Cursor)
- UI/UX: `.cursor/skills/ui-ux-pro-max/`
- Glass-Effekt: `.glass-panel` in `style.css`
