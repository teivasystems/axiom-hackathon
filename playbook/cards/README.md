# Persona Operation Cards

Each card is the **sole runtime reference** for that persona during a session.  
Load your card at session start. Do not load `WORKFLOW.md` as a startup read — it is a reference document for edge cases and conflicts.

---

## personas/ vs cards/ — which file to use

| File location | Used by | Purpose |
|---|---|---|
| `playbook/cards/<name>.md` | **CLAUDE Code** (this workspace) | In-session operation guide — commands, build loop, handover format, blocker protocol. Load at session start. |
| `playbook/personas/<name>.md` | **Claude.ai Project AXIOM** | System prompt — persona identity, voice, backstory, and capabilities. Load once into the Claude.ai Project knowledge base. |
| `playbook/personas/bundles/<name>.bundle.md` | **Claude.ai Project AXIOM** | Auto-generated bundle combining persona + key playbook sections. Use instead of the raw persona file when context is tight. |

**Rule:** If you are in CLAUDE Code, use a card. If you are in Claude.ai, use a persona or bundle. Never mix them.

| Card | Persona | Role | Loads at start | On-demand references |
|---|---|---|---|---|
| [alex.md](alex.md) | Alex | Product Owner | `ideation/session.md` | `process/ideation.md` |
| [sam.md](sam.md) | Sam | Platform Architect | `ideation/session.md` | `process/architecture.md` |
| [morgan.md](morgan.md) | Morgan | UX / UI Designer | `ideation/session.md` | `docs/architecture.md`, `skills/ui.md` |
| [jordan.md](jordan.md) | Jordan | Lead Developer | `personas/jordan.md`, `docs/architecture.md` | `skills/platform.md`, `skills/flows.md`, `skills/integration.md`, `skills/ui.md`, `skills/jira.md` |
| [casey.md](casey.md) | Casey | QA & Documentation | `ideation/session.md` | `personas/casey.md`, `logs/DECISIONS.md`, `process/retrospective.md` |
| [riley.md](riley.md) | Riley | Pitch & Marketing | `ideation/session.md` | `docs/wireframes.md`, `personas/casey.md` |

---

## Context load by persona

Cards were introduced to replace the previous pattern of each persona loading `WORKFLOW.md` (1,300+ lines) at session start.

| Persona | Card size | Input artifacts | Total | vs. WORKFLOW.md load |
|---|---|---|---|---|
| Alex | ~200 lines | ideation framework | ~600 lines | −55% |
| Sam | ~200 lines | ideation/session.md | ~500 lines | −60% |
| Jordan | ~250 lines | architecture.md + personas/jordan.md | ~700 lines | −45% |
| Morgan | ~150 lines | ideation/session.md | ~350 lines | −70% |
| Casey | ~250 lines | ideation/session.md + DECISIONS.md | ~550 lines | −55% |
| Riley | ~150 lines | ideation/session.md | ~300 lines | −75% |

---

## When to load WORKFLOW.md

Load it when:
- A card instruction says "see WORKFLOW.md for detail"
- A conflict arises between two personas' scope or output
- A blocker requires a process decision not covered in the card
- A ticket needs escalation to Alex and the card doesn't specify the format

Do not load it as a default startup read. Every startup load costs ~1,300 lines of context.

---

## Skills files (Jordan)

Jordan loads skill files on demand during BUILD — not all at once at session start.

| File | Load when |
|---|---|
| `skills/platform.md` | GlideRecord query, Script Include, ACL, or scoped app question |
| `skills/flows.md` | Writing any Fluent SDK flow, or any Flow Designer behaviour question |
| `skills/integration.md` | Claude API, IntegrationHub, sn_ws.RESTMessageV2, or credential pattern |
| `skills/ui.md` | SP widget, UI Builder, Employee Center, Now Assist, or UX channel question |
| `skills/jira.md` | Ticket comment format, closure protocol, or Jira API usage |
