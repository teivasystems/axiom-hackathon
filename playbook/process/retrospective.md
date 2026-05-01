# AXIOM Retrospective Process
## Owner: Casey | Phase: Post-run (and optional mid-run) | Ticket: AXM-07 (or ad-hoc)

---

## When to run a retrospective

| Trigger | Timing | Mandatory? |
|---|---|---|
| End of every run (PREP dry run or hackathon) | Within 48 hours of run end | Yes |
| Mid-run blocker cluster (3+ blockers in one phase) | Immediately after phase completes | Recommended |
| Post-mortem for a critical failure | Within 24 hours of incident | Yes |

A retrospective is not a celebration. It runs even if the build was clean and the pitch was strong. The purpose is to tighten the process, not debrief feelings.

---

## Who does what

| Role | Responsibility |
|---|---|
| **Casey** | Facilitates. Owns the RETRO file. Drives section by section. Posts ACTIVITY.log entry. |
| **Alex** | Reviews scope and decision quality. Signs off section 9. |
| **Jordan** | Reports build and tooling gaps. Owns playbook edits from section 8. |
| **Sam** | Reports architecture gaps. Reviews phase timeline. |
| **Morgan** | Reports UX/handover gaps. |
| **Riley** | Reports pitch and output gaps. |
| **Kostya** | Reviews retrospective output. Approves action items. Final sign-off. |

Casey facilitates, everyone contributes. Casey does not fill in other personas' sections alone — ask each persona directly.

---

## Process — step by step

### Step 1 — Create the file (Casey)

```bash
# From repo root
cp playbook/log-templates/RETRO.md runs/<run>/logs/RETRO-YYYY-MM-DD.md
```

Fill in the metadata block (Section 1) before the session starts.

### Step 2 — Run summary (Casey, 5 min)

Read the last `[CHECKPOINT]` in ACTIVITY.log. Read DECISIONS.md entries for the run. Write Section 1 summary and delivery counts before the session — do not do this live.

### Step 3 — Timeline review (all, 5 min)

Walk through Section 2 together. Fill actual durations from ACTIVITY.log timestamps. Flag any phase more than 30% over or under plan — note in the Notes column.

### Step 4 — What went well (all, 5 min)

Go around by persona. Each names one concrete thing. Casey writes it. No discussion during capture — capture first, discuss after.

### Step 5 — What to improve (all, 10 min)

Same round. Each persona names one gap. Casey writes it under the correct subsection (process / tooling / communication). Root cause is mandatory — "it was slow" is not a gap, "IH plugin status was not checked in PREP so we discovered it missing during BUILD" is.

### Step 6 — Action items (Casey + all, 5 min)

For every gap in Section 4 that has a clear fix: create an action item. No unowned actions. No "someone should look at this." Owner + target date or it does not go on the list.

For playbook improvements: Casey adds them to Section 8 and assigns to Jordan. Jordan updates the playbook files within 24 hours of the retrospective.

### Step 7 — Sign-off and commit (Casey)

```bash
# After all sections are filled
git add runs/<run>/logs/RETRO-YYYY-MM-DD.md
git commit -m "[CASEY] docs: retrospective for run <run> (RETRO-YYYY-MM-DD)"
```

Log in ACTIVITY.log:

```
[RETRO]     YYYY-MM-DDTHH:MM:SSZ | Casey | Retrospective complete — <N> action items | runs/<run>/logs/RETRO-YYYY-MM-DD.md
[CHECKPOINT] YYYY-MM-DDTHH:MM:SSZ | Casey | Phase: POST-RUN | Done: retro complete | Next: playbook updates (Jordan) | Blockers: None
```

### Step 8 — Jira (Casey)

- Create one Jira sub-task per action item in Section 7 (if not already tracked).
- Link to the RETRO file in the Jira ticket description.
- Mark the retro ticket Done.

---

## File naming and location

```
runs/<run>/logs/RETRO-YYYY-MM-DD.md
```

One file per session. If a second retrospective is run for the same run on a different date, create a second file — do not overwrite.

---

## What makes a good retrospective

**Good gap:** "The Fluent SDK `wfa-flow-guide` explain command was not in any skill file. We spent 40 minutes on trial-and-error that the command would have resolved in 2. Jordan will add it to flows.md."

**Bad gap:** "We should communicate better." — no root cause, no action, no owner.

**Good action item:** "Jordan: add IH plugin availability check to `playbook/skills/platform.md` by 2026-05-03."

**Bad action item:** "Improve the platform.md file." — no owner, no date, no specific change.

**Rule of thumb:** if you can't write a Jira ticket for it, it's not an action item yet.

---

## ACTIVITY.log tags used by retrospective

```
[RETRO]      Casey | Retrospective complete — <N> action items | <file path>
[CHECKPOINT] Casey | Phase: POST-RUN | Done: <what> | Next: <what> | Blockers: <none/description>
```

Do not use `[MILESTONE]` for a retrospective — milestones are delivery events, not process events.
