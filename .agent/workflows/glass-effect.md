---
description: Wie man den Glasseffekt (Milk Glass / frosted glass) fuer Hintergrund-Container anwendet
---
# Standardisierter UI Glass-Effekt (UnfallExperten)

Immer wenn der User nach einem "Glasseffekt" (z. B. "gib dem background ein glasseffekt") für einen Container, Header oder einen Hintergrund fragt, **MUSS** exakt dieser CSS/Inline-Styling Code verwendet werden.

Dieser Effekt ist validiert und beinhaltet die essenziellen `translateZ` und `will-change` Fixes, um Rendering-Bugs (wie flackernden oder verzögerten Blur in WebKit/Safari/Chrome) zu verhindern.

## Inline-Style Definition (React/Next.js)

```tsx
style={{
  /* 1. Haupt-Glasseffekt (css.glass) */
  background: 'rgba(255, 255, 255, 0.2)',
  borderRadius: '16px',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(8.1px)',
  WebkitBackdropFilter: 'blur(8.1px)',
  border: '1px solid rgba(255, 255, 255, 0.3)',

  /* 2. Zwingende GPU / Webkit Fixes! (NIEMALS WEGLASSEN) */
  transform: 'translateZ(0)',
  willChange: 'transform, backdrop-filter',
  
  /* 3. Stacking Context (falls Child-Elemente vorhanden) */
  position: 'relative' // Child-Elemente benötigen zIndex: 2
}}
```

## CSS Definition (für reguläres .css)

```css
.deine-klasse {
    position: relative;
    
    /* css.glass Base */
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(8.1px);
    -webkit-backdrop-filter: blur(8.1px);
    border: 1px solid rgba(255, 255, 255, 0.3);

    /* GPU-Rendering Fixes für Performance & Safari Bug */
    transform: translateZ(0);
    will-change: transform, backdrop-filter;
}

/* Kinder müssen immer über dem Glass-Layer liegen */
.deine-klasse > * {
    position: relative;
    z-index: 2;
}
```

## Wichtige Regeln für KI-Assistenten
1. **Kein `opacity` auf dem Element animieren!** Wenn der Glasseffekt animiert werden soll, dann weise stets an, dass nur `transform` (z.B. translateY) animiert wird. Opacity-Übergänge zerstören in Webkit während der Animation den `backdrop-filter`.
2. Verändere diese Werte (insbesondere `0.2` Alphakanal und `8.1px` Blur) nicht.
