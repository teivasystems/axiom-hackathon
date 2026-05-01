# Persona Operation Cards

Each card is the **sole runtime reference** for that persona.
Load your card at session start. Do not load WORKFLOW.md — it is a reference
document, not a runtime read.

| Card | Persona | Loads at start | Also reads |
|------|---------|----------------|------------|
| [alex.md](alex.md) | Product Owner | `ideation/session.md` | `process/ideation.md` (detail) |
| [sam.md](sam.md) | Platform Architect | `ideation/session.md` | `process/architecture.md` (detail) |
| [jordan.md](jordan.md) | Lead Developer | `personas/jordan.md`, `docs/architecture.md` | `skills/platform.md` `flows.md` `integration.md` |
| [morgan.md](morgan.md) | UX Designer | `ideation/session.md` | `docs/architecture.md` (when ready) |
| [casey.md](casey.md) | QA & Documentation | `ideation/session.md` | `personas/casey.md`, `logs/DECISIONS.md` |
| [riley.md](riley.md) | Pitch & Marketing | `ideation/session.md` | `docs/wireframes.md`, `personas/casey.md` |

## Context load by persona (estimated tokens)

| Persona | Card | Input artifacts | Total |
|---------|------|-----------------|-------|
| Alex | ~200 lines | ideation framework | ~600 lines |
| Sam | ~200 lines | ideation/session.md + pre-checklist | ~500 lines |
| Jordan | ~200 lines | architecture.md | ~600 lines |
| Morgan | ~150 lines | ideation/session.md | ~350 lines |
| Casey | ~200 lines | ideation/session.md | ~350 lines |
| Riley | ~150 lines | ideation/session.md | ~300 lines |

Previous approach: each persona loaded WORKFLOW.md (1,288 lines) + multiple other files.
Cards reduce per-persona context load by ~60–70%.

## WORKFLOW.md

Still the authoritative reference for the full process, dependency map, conflict
resolution, and submission checklist. Read it when something in the cards is
ambiguous — not as a startup read.
