# Team AXIOM — Playbook

Reusable knowledge for running an AI-native hackathon team.  
This directory is independent of any specific hackathon run.

---

## What is in here

| Path | Contents |
|---|---|
| `WORKFLOW.md` | **Full process reference.** All phases, Jira lifecycle, handover protocol, dependency map, blocker escalation, platform fallback decisions. Load when a card doesn't cover your situation. |
| `cards/` | **Per-persona operation cards.** Load your card at session start instead of WORKFLOW.md — they cover 95% of what you need with ~60% less context. |
| `personas/` | Persona profiles and Claude.ai system prompt templates. Load one file per session to initialise a persona in Claude.ai. |
| `docs/` | **Reusable document templates.** Copy templates to the active run folder — never fill in the originals. `PRD_TEMPLATE.md` → `runs/<run>/docs/prd.md`. `BACKLOG_TEMPLATE.md` → `runs/<run>/docs/BACKLOG.md`. |
| `skills/` | Domain-specific build references. Jordan loads these as needed during BUILD. |
| `process/` | Phase-by-phase guides for each major activity. |
| `log-templates/` | Blank templates — copy into `runs/<run>/logs/` at run initialisation. |
| `setup/` | Infrastructure, Claude Code, and Claude.ai configuration guides. |

---

## Skills files

| File | What it covers |
|---|---|
| `skills/platform.md` | GlideRecord, Script Includes, scoped app conventions, ACLs, logging |
| `skills/flows.md` | Fluent SDK flow DSL (imports, trigger, action, dataPill), Flow Designer patterns |
| `skills/integration.md` | IntegrationHub REST, Claude API request/response, sn_ws fallback, credential alias pattern |
| `skills/ui.md` | UX channel routing (D-002), SP widgets, Employee Center, UI Builder Workspaces, Now Assist |
| `skills/jira.md` | Jira ticket lifecycle, START/DONE comment format, closure protocol, API usage |

---

## Process guides

| File | What it covers |
|---|---|
| `process/ideation.md` | Multi-phase app ideation session (Alex-led) |
| `process/architecture.md` | Architecture document template and checklist (Sam-led) |
| `process/hackathon_day.md` | Hour-by-hour day-of guide |
| `process/pitch.md` | HeyGen script and pitch structure (Riley-led) |
| `process/retrospective.md` | Post-run retrospective process (Casey-led) |

---

## How to use this for a new hackathon

**1. Read `docs/TEAM_CHARTER.md` first.** Understand the team model, handover format, and operating protocol. All other documents assume you know this.

**2. Set up infrastructure.** Follow `setup/infrastructure.md`. Covers now-sdk, GitHub, Jira + API token, Confluence, Figma, HeyGen, and Credential Store setup.

**3. Configure AI tools.** Follow `setup/claude_ai.md` (Claude.ai Project) and `setup/claude_code.md` (Jordan's workspace).

**4. Create a run folder.** See `runs/README.md` for the exact structure to copy.

**5. Initialise logs.** Copy templates from `log-templates/` into `runs/<run>/logs/`. Fill the ACTIVITY.log header, commit.

**6. Run ideation.** Alex follows `process/ideation.md`. Output → `runs/<run>/ideation/session.md`.

**7. PRD, architecture, and wireframes.** Alex produces `runs/<run>/docs/prd.md` (copy from `playbook/docs/PRD_TEMPLATE.md`). Sam reads prd.md then produces `runs/<run>/docs/architecture.md`. Morgan produces `runs/<run>/docs/wireframes.md`. Architecture template in `process/architecture.md`.

**8. Build.** Jordan reads `CLAUDE.md` and follows the build manifest in architecture.md. Skills files available on demand.

**9. Validate.** Casey runs test cases from `personas/casey.md`. Blocks pitch hand-off until happy path passes.

**10. Pitch.** Riley scripts and assembles in HeyGen. Follows `process/pitch.md`.

**11. Retrospective.** Casey facilitates within 48 hours of run end. Template: `log-templates/RETRO.md`. Process: `process/retrospective.md`.

---

## Run history

| Run | Event | App | Platform | Result |
|---|---|---|---|---|
| [2026-04_dryrun](../runs/2026-04_dryrun/) | Full dry run — AXIOM process rehearsal | Team Kudos | Yokohama | ✅ Complete |
| [2026-05_creatorcon](../runs/2026-05_creatorcon/) | CreatorCon Hackathon, Knowledge Las Vegas 2026 | RetroNow | Zurich / Australia | TBD |

---

*Team AXIOM. Built differently.*
