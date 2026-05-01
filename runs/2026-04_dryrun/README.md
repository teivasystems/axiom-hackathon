# Run: 2026-04_dryrun — Team Kudos

**Type:** Dry run — full AXIOM persona process rehearsal  
**App:** Team Kudos — peer recognition feed with AI-generated digest  
**Platform:** ServiceNow Now Platform (Yokohama)  
**PDI:** https://dev390976.service-now.com  
**Scope:** `x_9274_kudos` (vendor prefix 9274, app sys_id `8f59e7b4aa4a42c79236d248bd1672a3`)  
**Date:** 2026-04-29 → 2026-05-02

---

## What was built

A scoped ServiceNow app that lets employees give peer kudos. Features:
- `x_9274_kudos_entry` table — kudos records with giver, receiver, category, message
- `KudosService` Script Include — createKudo, getRecentKudos, sendNotification, storeDigest, getDigest
- `ClaudeDigest` Script Include — buildPrompt, generateDigest (Claude API via sn_ws.RESTMessageV2), parseResponse
- Kudos Submitted Notification Flow — fires on record created, logs category
- Kudos Digest Flow — manual trigger, lookUp + log placeholder (wired to ClaudeDigest via credential alias)
- Kudos Submit Widget (SP) — employee kudos submission form
- Kudos Feed Widget (SP) — kudos list + AI digest display

**Row 4 status:** Claude API credential alias configured (sys_id `6ebf2a5683a4031048f69496feaad39b`). ClaudeDigest.generateDigest() wired in server JS. End-to-end validation pending (AXM-26 assigned to Kostya).

---

## Ticket Status

| Ticket | Title | Persona | Status |
|---|---|---|---|
| AXM-21 | Ideation session | Alex | ✅ Done |
| AXM-22 | Architecture doc | Sam | ✅ Done |
| AXM-23 | Wireframes | Morgan | In Progress |
| AXM-24 | Test cases | Casey | In Progress |
| AXM-25 | Build (Rows 1–3, 5–8) | Jordan | ✅ Done |
| AXM-26 | Row 4 — Claude API credential + REST wiring | Kostya | In Progress |

---

## Key Paths

| Artifact | Path |
|---|---|
| Ideation decision | `runs/2026-04_dryrun/ideation/session.md` |
| Architecture doc | `runs/2026-04_dryrun/docs/architecture.md` |
| App source | `runs/2026-04_dryrun/app/src/` |
| Activity log | `runs/2026-04_dryrun/logs/ACTIVITY.log` |
| Decisions | `runs/2026-04_dryrun/logs/DECISIONS.md` |
| Handovers | `runs/2026-04_dryrun/logs/HANDOVERS.md` |
| Retrospective | `runs/2026-04_dryrun/logs/RETRO-*.md` (pending — Casey to run) |

---

## Key Decisions

| ID | Summary | Status |
|---|---|---|
| D-001 | Scope prefix is PDI-assigned — use AES-assigned prefix (`x_9274_kudos`) | ✅ Resolved |
| D-002 | UX channel routing — employee/end-user → SP; manager/fulfiller → Workspace; Now Assist applies to both | ✅ Signed off (cross-run) |

---

## Process gaps found and fixed

This run validated the full AXIOM persona process and exposed several gaps, all fixed in the playbook:

1. **Scope prefix procedure** — vendor prefix is system-assigned; must query AES before naming anything. Added to `CLAUDE.md` and `runs/README.md`.
2. **Fluent SDK flow DSL** — `Flow`, `wfa`, `trigger`, `action` must import from `@servicenow/sdk/automation` (not `/core`). `wfa.trigger()` and `wfa.action()` take 3 args. All trigger/action outputs must be wrapped in `wfa.dataPill()`. Flow body must use `(_params)` — no destructuring. Added full guide to `playbook/skills/flows.md`.
3. **IntegrationHub availability** — IH REST spoke not installed on all PDIs. Must check during PREP. Fallback: `sn_ws.RESTMessageV2` + `sn_cc.ConnectionCredentialsUtil`. Added to `playbook/skills/integration.md` and `playbook/skills/platform.md`.
4. **ATF deployment gap** — `npm run deploy` does not push `sys_atf_test` records. Check ATF plugin during PREP; drop if inactive. Added to `CLAUDE.md`.
5. **Platform fallback decision protocol** — silent workarounds are undocumented scope changes. Flag → Decision → Implement. Added to `playbook/WORKFLOW.md`.
6. **UX channel routing** — signed off as D-002. Employee/end-user → SP; manager/fulfiller → Workspace; Now Assist applies to both; mobile = avoid in hackathon. Added to `playbook/skills/ui.md`.
7. **Retrospective process** — Casey now owns a post-run retro. Template at `playbook/log-templates/RETRO.md`. Process at `playbook/process/retrospective.md`.
