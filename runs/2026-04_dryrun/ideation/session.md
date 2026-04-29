# Ideation Session — Run 2026-04_dryrun
# AXM-DR-02 | Alex | 2026-04-29

---

## Purpose

Dry run of the full AXIOM process end-to-end. Goal: exercise every layer of the
now-sdk stack (table → Script Include → Flow → UI) in a controlled environment
before the real hackathon. This is not a competition submission.

---

## App Selected: Team Kudos

**Problem statement:**
Recognition in organisations is manual and forgettable. Managers send Slack
messages that vanish. There is no searchable record of who recognised whom for
what, no trend analysis, and no automated nudge when a team member has gone
unrecognised for a long time.

**Users:**
- Employees (submit kudos for a colleague)
- Managers (view team kudos summary)
- HR (platform-level visibility)

**The app in one sentence:**
A ServiceNow app where employees submit peer kudos that are stored, trigger a
notification flow, and are summarised by Claude AI into a weekly team digest.

---

## Scope Lock

### In scope

| # | Feature | Priority |
|---|---------|----------|
| 1 | `x_axiom_kudos_entry` table — stores each kudo (giver, receiver, message, category) | P0 |
| 2 | `KudosService` Script Include — core logic: create kudo, get team summary data | P0 |
| 3 | Flow: on kudo submitted → notify receiver via in-platform notification | P0 |
| 4 | `ClaudeDigest` Script Include — calls Claude API via IntegrationHub, generates digest text | P0 |
| 5 | Service Portal widget — submit kudo form (name, message, category dropdown) | P1 |
| 6 | Service Portal widget — team kudos feed (list of recent kudos, Claude digest block) | P1 |

### Out of scope (dry run)

- HeyGen video / pitch
- Submission checklist
- ATF automated tests
- Email notifications (in-platform notification only)
- Manager dashboard (view handled by feed widget)

---

## Scoring Framework (dry run criteria)

Since this is a dry run, we evaluate against process fidelity, not judge criteria:

| Criterion | Weight | Target |
|-----------|--------|--------|
| All layers exercised (table, SI, flow, UI) | 40% | All 4 must be present |
| Build-deploy-validate loop followed for every component | 30% | Zero skipped steps |
| Handover artifacts complete and linked | 20% | All H-NNN posted |
| Casey signs off happy path | 10% | Pass on first run ideally |

---

## Elevator Pitch (for context — dry run only)

"Team Kudos uses ServiceNow and Claude AI to make peer recognition searchable,
persistent, and insightful. In 30 seconds an employee logs a kudo. In under a
minute their colleague gets notified. Once a week the manager gets a Claude-
generated digest of who's winning and why."

---

## Handover Instructions for All Personas

**Sam (AXM-DR-03 — Architecture):**
Design the table schema and Script Include signatures. The Claude call goes
through IntegrationHub REST. Confirm Flow Designer trigger: record inserted on
`x_axiom_kudos_entry`. Section 7 (UI components) must list every field the
widgets need to display.

**Morgan (AXM-DR-04 — Wireframes):**
Two screens: (1) Submit Kudo form, (2) Team Feed with Claude digest block.
Keep it simple — this is a dry run, not a polished demo. Spec must include
empty state and error state for the Claude digest.

**Casey (AXM-DR-05 — Test Cases):**
Happy path: submit kudo → notification fires → kudo appears in feed → Claude
digest generates. Edge cases: empty message, self-kudo attempt, Claude API
unavailable (graceful fallback).

**Riley (AXM-DR-06 — Pitch Outline):**
Skipped for dry run. No video or pitch required.

**Jordan (AXM-DR-08 — Scaffold + Build):**
Do not start until architecture doc is committed. Follow Sam's build sequence
exactly. Test Claude call independently before wiring to flow.

---

## Decision Log

No scope decisions required at ideation — scope is straightforward for a dry run.

---

## Alex Sign-off

Scope locked. All in-scope features are buildable on now-sdk 4.6.0 with
IntegrationHub. No plugin risks identified (Flow Designer and Service Portal
are standard on dev PDIs). Claude integration pattern matches AXM-10 credential
setup already completed.

**Alex — 2026-04-29**
