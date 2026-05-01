# AXIOM Backlog Template
> **Usage:** Copy this file to `docs/BACKLOG.md` at kick-off. Fill in the shaded sections once the product idea is confirmed. Add items as the build progresses. Do **not** edit this template directly — keep it as the canonical stub.

---

## 1. Product context (fill at kick-off)

| Field | Value |
|---|---|
| **Product name** | _TBD_ |
| **One-liner** | _What it does, for whom, on what platform_ |
| **Primary ServiceNow surface** | _e.g. Service Portal, Now Mobile, Workspace, Flow_ |
| **Hackathon theme alignment** | _e.g. AI-native, Employee Experience, Agentic Automation_ |
| **Demo target** | _What must be live and demoable at pitch time_ |

---

## 2. Epics (define after product context is clear)

> Add one row per Epic. Keep to 3–5 Epics maximum for a hackathon build.

| ID | Epic name | Goal | Owner persona | Priority |
|---|---|---|---|---|
| E01 | _Core workflow_ | _The single flow a judge must see_ | Jordan | P0 |
| E02 | _UX polish_ | _Look & feel, no rough edges on the happy path_ | Morgan | P1 |
| E03 | _AI / Now Assist integration_ | _The "wow" moment_ | Sam / Jordan | P0 |
| E04 | _Pitch assets_ | _Slide, script, demo script_ | Riley | P1 |
| E05 | _QA & docs_ | _Test pass, README, submission checklist_ | Casey | P1 |

---

## 3. Product backlog

> Stories follow the format: **As a [role], I want [action], so that [value].**
> Acceptance criteria are the minimum bar for "done" during the hackathon.
> Add rows freely. Archive (strike-through or move to §5) if de-scoped.

### P0 — Must demo

| ID | Epic | Story | Acceptance criteria | Assignee | Status |
|---|---|---|---|---|---|
| US-001 | E01 | _As a [role], I want …_ | _AC: …_ | — | 🔲 Todo |
| US-002 | E01 | _As a [role], I want …_ | _AC: …_ | — | 🔲 Todo |
| US-003 | E03 | _As a [role], I want …_ | _AC: …_ | — | 🔲 Todo |

### P1 — Should have

| ID | Epic | Story | Acceptance criteria | Assignee | Status |
|---|---|---|---|---|---|
| US-010 | E02 | _As a [role], I want …_ | _AC: …_ | — | 🔲 Todo |
| US-011 | E04 | _As a [role], I want …_ | _AC: …_ | — | 🔲 Todo |
| US-012 | E05 | _As a [role], I want …_ | _AC: …_ | — | 🔲 Todo |

### P2 — Nice to have (cut if time-pressured)

| ID | Epic | Story | Acceptance criteria | Assignee | Status |
|---|---|---|---|---|---|
| US-020 | — | _As a [role], I want …_ | _AC: …_ | — | 🔲 Todo |

---

## 4. Technical / platform tasks

> Non-story work: environment setup, integrations, table design, deployment.

| ID | Task | Epic | Assignee | Status |
|---|---|---|---|---|
| T-001 | Scaffold app on Zurich / Australia instance | E01 | Sam | 🔲 Todo |
| T-002 | Configure now-sdk 4.6.0 + repo link | E01 | Sam / Jordan | 🔲 Todo |
| T-003 | Now Assist NLU / skill registration | E03 | Sam | 🔲 Todo |
| T-004 | Final submission package & upload | E05 | Casey | 🔲 Todo |

---

## 5. Parking lot / de-scoped

> Move items here rather than deleting them. Keeps the conversation honest.

| ID | Item | Why parked | Date |
|---|---|---|---|
| — | — | — | — |

---

## 6. Status key

| Symbol | Meaning |
|---|---|
| 🔲 Todo | Not started |
| 🔄 In progress | Actively being worked |
| 👀 In review | PR open / QA pass needed |
| ✅ Done | Merged, tested, demo-ready |
| 🚫 Blocked | Waiting on dependency — add comment |

---

## How to seed this backlog at kick-off (prompt guide)

Once the product idea is decided, any team member can paste the following prompt into this Claude project to generate an initial set of stories:

```
Team AXIOM — Alex (Product Owner) mode.
Product: [one-liner]
Platform surface: [e.g. Service Portal + Flow Designer]
AI integration: [e.g. Now Assist, NLU, GenAI APIs]
Demo constraint: [what must be live in ~8 hours]

Generate a minimal P0/P1 backlog for BACKLOG.md in the AXIOM template format.
Keep to 6–10 stories total. Include 2–3 technical tasks.
Flag any story that depends on release-specific APIs (Zurich / Australia).
```

Edit the generated items, assign owners, and commit `BACKLOG.md` before the first stand-up.

---

## Handover note

| Field | Value |
|---|---|
| **Produced by** | Alex (Product Owner) |
| **Next action** | Sam — confirm T-001 / T-002 environment tasks are correct for Zurich / Australia; Jordan — review story format and add any developer-side technical tasks you foresee |
| **When to instantiate** | Immediately at hackathon kick-off, before first team sync |
| **Commit target** | `docs/BACKLOG.md` (this template stays at `docs/BACKLOG_TEMPLATE.md`) |
