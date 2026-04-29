# Team AXIOM — Team Charter
> ServiceNow CreatorCon Hackathon 2026 · Knowledge, Las Vegas
> Platform: ServiceNow Now Platform (Yokohama) · SDK: now-sdk 4.6.0
> Repository: https://github.com/teivasystems/axiom-hackathon

---

## 1. Purpose

This charter defines how Team AXIOM operates during the hackathon: persona responsibilities, decision rights, artifact standards, and the mandatory process steps every team member must follow. It is the single source of truth for team process. When in doubt, consult this document first.

---

## 2. Personas

| Handle | Role | Core responsibility |
|---|---|---|
| **Alex** | Product Owner | Backlog, priorities, scope decisions, acceptance criteria |
| **Sam** | Platform Architect | ServiceNow data model, integrations, technical feasibility |
| **Morgan** | UX/UI Designer | UI/UX design, component library, prototype fidelity |
| **Jordan** | Lead Developer | App build, code quality, Now Platform implementation |
| **Casey** | QA & Documentation | Test passes, README, submission checklist, release notes |
| **Riley** | Pitch & Marketing | Slide deck, demo script, presenter coaching, judge targeting |

Each persona owns their domain. Cross-persona decisions (scope changes, architecture pivots) require a brief verbal sync — no silent unilateral changes.

---

## 3. Mandatory kick-off protocol

These steps are **required** at the start of the hackathon, in order. Do not begin building until steps 1–4 are complete.

### Step 1 — Confirm product idea (all personas, ≤15 min)
Agree on the one-liner, primary platform surface, and AI integration angle. Record it in the product context table (see Step 3).

### Step 2 — Confirm environment (Sam, ≤10 min)
Verify the Yokohama instance is accessible, now-sdk 4.6.0 is configured, and the GitHub repo is connected. Unblock this before Jordan writes a single line of code.

### Step 3 — Instantiate the backlog (Alex, ≤10 min) ⚠️ mandatory
**This step is required before any build or design work begins.**

1. Copy the backlog template to the live backlog file:
   ```
   cp docs/BACKLOG_TEMPLATE.md docs/BACKLOG.md
   ```
2. Fill in the **Product context** table (section 1 of the backlog).
3. Use the seed prompt in section 6 of the template to generate an initial set of stories with Claude.
4. Review, assign owners, and set statuses.
5. Commit `docs/BACKLOG.md` before the first team sync.

> **Why this is mandatory:** Without a committed backlog, the team has no shared definition of what P0 means, no basis for scope decisions under time pressure, and no audit trail for the submission. A 20-minute investment here prevents hours of drift later.

### Step 4 — First team sync (all personas, ≤10 min)
Walk the P0 stories. Confirm every persona knows their first task. Agree on a check-in cadence (recommended: every 90 minutes or at each major milestone).

---

## 4. Backlog process (ongoing)

- **Alex** owns the backlog. Any persona can propose new items — add them to the parking lot (section 5 of `BACKLOG.md`) and flag Alex.
- **Scope changes** (adding or removing P0 items) require explicit agreement from Alex + the affected assignee. No silent de-scoping.
- **Status updates** are the responsibility of the assignee. Keep statuses current — they are how the team tracks health without needing a stand-up.
- **At each check-in**, Alex reviews the P0 column. Anything blocked for more than one cycle gets escalated immediately.

---

## 5. Artifact standards

All artifacts produced during the hackathon are markdown files committed to `docs/` unless otherwise noted below.

| Artifact | File | Owner |
|---|---|---|
| Team Charter | `docs/TEAM_CHARTER.md` | Alex |
| Backlog template | `docs/BACKLOG_TEMPLATE.md` | Alex |
| Live backlog | `docs/BACKLOG.md` | Alex |
| Architecture decision records | `docs/adr/ADR-NNN.md` | Sam |
| UX specs / wireframe notes | `docs/ux/` | Morgan |
| QA test log | `docs/QA_LOG.md` | Casey |
| Pitch script | `docs/PITCH_SCRIPT.md` | Riley |
| README | `README.md` | Casey (with input from all) |

Every artifact must include a **handover note** at the bottom in this format:

```
---
## Handover note
| Field | Value |
|---|---|
| **Produced by** | [Persona] |
| **Next action** | [Who does what next] |
| **Dependencies** | [Anything blocking] |
```

---

## 6. Decision rights

| Decision type | Who decides | Who is consulted |
|---|---|---|
| Scope in / out of backlog | Alex | All affected personas |
| Technical approach | Sam | Jordan |
| UI component design | Morgan | Jordan (feasibility) |
| Cut a feature under time pressure | Alex | Sam, Jordan |
| Pivot the product idea | All personas | — |
| Pitch narrative | Riley | Alex |

---

## 7. Communication norms

- Default communication is in-person during the hackathon.
- Decisions that affect the backlog or architecture are recorded as a commit to the relevant doc — verbal agreements that aren't committed don't exist.
- If you are blocked, say so immediately. Do not stay blocked silently.

---

## 8. Submission checklist owner

Casey owns the final submission checklist. All personas must have their deliverables ready and flagged ✅ in `BACKLOG.md` before Casey submits. Riley holds the demo run-through — minimum one full dry-run before the judging window.

---

## Handover note

| Field | Value |
|---|---|
| **Produced by** | Alex (Product Owner) |
| **Next action** | All personas — read and confirm understanding before hackathon day; Sam — validate environment steps in §3 Step 2 against actual Yokohama setup; Casey — add any submission-specific checklist items to §8 once the submission portal requirements are known |
| **Dependencies** | None — this document is self-contained |
