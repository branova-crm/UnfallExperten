# Agent-Konfiguration (UnfallExperten)

Dieses Projekt enthält lauffähige **Skills** für Cursor und Antigravity. Befehle immer vom **Projektroot** ausführen.

## Cursor

| Skill | Pfad | Wann nutzen |
|-------|------|-------------|
| `ui-ux-pro-max` | `.cursor/skills/ui-ux-pro-max/` | UI/UX entwerfen, Design-System, Farben, Typografie, Review |
| `glass-effect` | `.cursor/skills/glass-effect/` | Glaseffekt / Frosted Glass für Container, Header, Hintergründe |

### UI/UX Pro Max (Beispiel)

```bash
python3 .cursor/skills/ui-ux-pro-max/scripts/search.py "legal service professional trust" --design-system -p "UnfallExperten"
python3 .cursor/skills/ui-ux-pro-max/scripts/search.py "animation accessibility" --domain ux
python3 .cursor/skills/ui-ux-pro-max/scripts/search.py "layout form" --stack nextjs
```

Design-System persistieren: `--persist` (erzeugt `design-system/MASTER.md`).

**Voraussetzung:** Python 3 (`python3 --version`).

## Antigravity

Gleiche Skills unter `.agent/skills/` — Pfade mit `.agent/` statt `.cursor/`:

```bash
python3 .agent/skills/ui-ux-pro-max/scripts/search.py "…" --design-system -p "UnfallExperten"
```

## Aktualisieren

```bash
npx uipro-cli update
npx uipro-cli init --ai cursor
npx uipro-cli init --ai antigravity
```

Nach Updates Pfade in `SKILL.md` prüfen (Installer kann generische Pfade setzen).

## Projekt-CSS

Glass-Effekt ist bereits als `.glass-panel` und `.glass-button` in `src/app/css/style.css` definiert — bevorzugt diese Klassen nutzen.
