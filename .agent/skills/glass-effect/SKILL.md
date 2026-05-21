---
name: glass-effect
description: Applies the validated UnfallExperten frosted-glass (milk glass) effect for containers, headers, and backgrounds. Use when the user asks for Glaseffekt, glass effect, backdrop blur, or frosted UI panels.
---
# Standardisierter UI Glass-Effekt (UnfallExperten)

Immer wenn der User nach einem „Glasseffekt“ (z. B. „gib dem background ein glasseffekt“) für einen Container, Header oder einen Hintergrund fragt, **MUSS** exakt dieser Code verwendet werden — oder die bestehenden Klassen `.glass-panel` / `.glass-button` in `src/app/css/style.css`.

Dieser Effekt ist validiert und beinhaltet die essenziellen `translateZ` und `will-change` Fixes, um Rendering-Bugs (flackernder oder verzögerter Blur in WebKit/Safari/Chrome) zu verhindern.

## Bevorzugt: bestehende CSS-Klassen

```tsx
<div className="glass-panel">…</div>
<button className="btn glass-button">…</button>
```

## Inline-Style (React/Next.js)

```tsx
style={{
  background: 'rgba(255, 255, 255, 0.2)',
  borderRadius: '16px',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(8.1px)',
  WebkitBackdropFilter: 'blur(8.1px)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  transform: 'translateZ(0)',
  willChange: 'transform, backdrop-filter',
  position: 'relative',
}}
```

## Regeln

1. **Kein `opacity` auf dem Glass-Element animieren** — nur `transform` (z. B. `translateY`). Opacity-Übergänge zerstören in WebKit während der Animation den `backdrop-filter`.
2. **Werte nicht ändern:** Alpha `0.2`, Blur `8.1px`, Border `rgba(255, 255, 255, 0.3)`.
3. Kinder über dem Glass-Layer: `position: relative; z-index: 2`.
