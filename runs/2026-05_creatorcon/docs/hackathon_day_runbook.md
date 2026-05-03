# Hackathon Day Runbook — CreatorCon 2026
> **RUN-SPECIFIC** — 2026-05_creatorcon. Derived from `playbook/process/hackathon_day.md`.  
> Run-specific details override the template. Template is the fallback for anything not specified here.

**Alex | Team AXIOM | AXM-18**
**Event:** ServiceNow CreatorCon Hackathon, Knowledge Las Vegas 2026
**Clock:** 10 hours

> **Process reference:** `playbook/process/hackathon_day.md` — build sequence, blocker protocol, validation checklist, commit convention. This runbook is the run-specific command document. It does not duplicate the process guide.

---

## Team on the Day

| Persona | Role | Active window | Unblocked by |
|---|---|---|---|
| Kostya | Human Interface + Exec Sponsor | All 10 hours | — |
| Alex | Scope triage only | T+0:00–T+3:00, then on-call | — |
| Sam | Architecture → hands off | T+0:00–T+1:00 | Nothing — must be ready at T+0 |
| Morgan | Wireframes → hands off | T+0:00–T+2:00 | Sam's architecture doc |
| Jordan | Build | T+0:00–T+7:00 | Sam (tables), Morgan (UI) |
| Casey | Validation + submission docs | T+4:00–T+10:00 | Jordan's happy path |
| Riley | Pitch assembly | T+5:00–T+8:30 | Casey's validation |

---

## Pre-Clock Checklist
Complete **before** the hackathon starts — day before if possible.

> Full pre-clock checklist: `playbook/process/hackathon_day.md → Pre-clock`

Additional items for this run:
```
[ ] Claude.ai Project AXIOM loaded with:
    - playbook/team_charter.md
    - runs/2026-05_creatorcon/docs/architecture.md  (Sam — AXM-3)
    - runs/2026-05_creatorcon/docs/wireframes.md    (Morgan — AXM-4)
    - playbook/skills/platform.md
    - playbook/skills/flows.md
    - playbook/skills/integration.md
    - playbook/skills/ui.md
[ ] Jira AXM board open — all BUILD tickets in Backlog, ready to move
[ ] HeyGen Sections 1 and 3 recorded and approved (Riley — AXM-9)
[ ] Pitch outline committed (Riley — AXM-6)
[ ] Casey's test cases drafted against AXM-4 wireframe spec (AXM-5)
[ ] App name confirmed and all [app name] placeholders in Jira updated
```

---

## 10-Hour Timeline

### T+0:00 — Kickoff (Owner: Kostya + Jordan, 30 min)
```
[ ] now-sdk auth --use axiom-hackathon
[ ] now-sdk auth --list   ← confirm axiom-hackathon is active
[ ] npm run build         ← must be clean, zero errors
[ ] npm run deploy        ← scaffold deploys to hackathon PDI
[ ] Open PDI: System Applications → My Company Applications → app exists
[ ] Confirm Claude API Key credential in hackathon PDI Credential Store
[ ] CLAUDE.md: update instance name if hackathon PDI differs from dev PDI
```
**Gate:** Jordan does not begin building tables until deploy is confirmed clean.
If deploy fails at T+0: Kostya fixes. Alex holds Sprint 1 start until resolved.

---

### T+0:30 — Sprint 1: Foundation (Owner: Jordan + Sam)
**Sam:**
- Finalise and commit `runs/2026-05_creatorcon/docs/architecture.md` (AXM-3)
- Hand off to Jordan with explicit: table names, scope name, Claude integration pattern
- Sam's handover format:
  ```
  FROM: Sam
  TO: Jordan
  TICKET: AXM-3
  STATUS: Complete
  ARTIFACT: runs/2026-05_creatorcon/docs/architecture.md
  SUMMARY: [2-3 sentences on key decisions]
  OPEN ITEMS: [anything Jordan needs to decide]
  ```

**Jordan (after Sam's handover):**
- `now-sdk init` with confirmed scope name from AXM-3
- Build all tables (data model first — nothing else works without it)
- Deploy and confirm tables visible in PDI

**Morgan:**
- Finalise `runs/2026-05_creatorcon/docs/wireframes.md` (AXM-4)
- Can work in parallel with Jordan's table build
- Morgan's handover to Jordan:
  ```
  FROM: Morgan
  TO: Jordan
  TICKET: AXM-4
  STATUS: Complete
  ARTIFACT: runs/2026-05_creatorcon/docs/wireframes.md
  SUMMARY: [screens, components, empty states confirmed]
  OPEN ITEMS: [any layout decisions Jordan needs to make]
  ```

**End of Sprint 1 gate (T+2:00):**
- Sam's architecture doc committed ✅
- Tables deployed and visible ✅
- Morgan's wireframes committed ✅

---

### T+2:00 — Sprint 2: Core Build (Owner: Jordan)
Build order (mandatory — do not reorder):
1. Script Includes — core logic and Claude API wrapper
2. Flows — triggers and integrations (Claude API call must succeed)
3. UI — per Morgan's wireframe spec (do not start before tables + flows exist)

**Casey:** Review test cases against confirmed wireframes. Adjust edge cases if Morgan's spec changed. No build involvement yet.

**End of Sprint 2 gate (T+4:00):** → Scope Lock (see below)

---

### T+4:00 — SCOPE LOCK + Checkpoint (Owner: Alex)

**This gate is hard. No exceptions.**

Casey runs happy path validation:
```
[ ] Primary user flow — complete end-to-end
[ ] Claude API call — response received and rendered
[ ] Core output created correctly (e.g. summary, action items)
[ ] App visible and functional on hackathon PDI
```

**Scope lock decision:**
- Anything not built by T+4:00 is **cut**, not deferred
- Alex makes the call — do not debate, do not negotiate
- Cut features go to the Known Issues log (Casey writes)
- Jordan continues with what's built, polishing only

```
Alex scope lock statement (say this out loud at T+4:00):
"Scope is locked. Feature list is: [what Casey validated].
Everything else is cut. Jordan: polish only from here."
```

---

### T+5:00 — Sprint 3: Polish + Pitch (Owner: Jordan + Riley)

**Jordan:**
- UI polish: empty states, error states, loading states
- Fix any issues Casey flagged in T+4:00 checkpoint
- No new features — polish only

**Riley:**
- Record HeyGen Section 2: app demo narration (90 sec)
- Kostya operates HeyGen and screen recording
- Section 2 must reference only Casey-validated features
- Riley's cue: Casey gives thumbs up at T+4:00 → Section 2 can be scripted

---

### T+7:00 — Final Validation (Owner: Casey + Jordan)

Casey runs full test pass per `playbook/process/hackathon_day.md → Validation Checklist`.

Additional for this run:
```
[ ] Demo recording matches Casey-validated feature set
[ ] Known issues log complete and honest
[ ] No features in the video that aren't in the app
```

Any test failure: Jordan fixes immediately. Casey re-runs. Clock is running.

---

### T+8:00 — Pitch Assembly (Owner: Riley + Kostya)

```
[ ] HeyGen Sections 1, 2, 3 assembled into final video
[ ] Video exported and ready for upload
[ ] Demo recording (screen capture) ready as backup
[ ] Pitch length confirmed: under 3 minutes
```

Casey in parallel:
```
[ ] Submission form fields drafted (app name, description, category, team)
[ ] Store listing description written
[ ] Judge notes / README written
[ ] Known issues log finalised
```

---

### T+9:00 — Submission Prep (Owner: Casey + Kostya + Alex)

Alex reviews submission form before Kostya submits:
```
[ ] App name correct
[ ] Category correct (GenAI)
[ ] Description accurate — no claims that aren't in the app
[ ] Team members listed
[ ] Video uploaded or URL submitted
[ ] Store listing attached
[ ] Judge notes attached
```

**Alex sign-off required before submission.** Kostya does not submit until Alex says go.

---

### T+9:45 — Submit (Owner: Kostya)

```
[ ] Kostya hits submit
[ ] Screenshot the confirmation page
[ ] Post confirmation to team
```

---

### T+10:00 — Done

```
[ ] All Jira tickets updated to Done
[ ] Git: final commit pushed to main
[ ] Jordan updates runs/2026-05_creatorcon/personas/jordan.md
[ ] Casey commits final release notes
[ ] Riley commits final pitch script
```

---

## Comms Protocol — How Personas Hand Over on the Day

All handovers use the standard format from `playbook/team_charter.md`:
```
FROM: [persona]
TO: [persona]
TICKET: AXM-XX
STATUS: Complete / Blocked
ARTIFACT: [file path]
SUMMARY: [2-3 sentences]
OPEN ITEMS: [decisions the receiver needs to make]
```

**How handovers happen physically:**
- Kostya pastes the handover note into the relevant Jira ticket comment
- Receiving persona is activated in Claude.ai Project AXIOM
- Receiving persona reads the handover note + linked artifact before starting

**Escalation path:**
```
Jordan hits blocker → tells Kostya immediately
Kostya assesses → can Kostya fix in < 15 min?
  Yes → fix it
  No  → Alex decides: cut / simplify / defer
Alex decides → Jordan continues with decision in hand
No revisiting decisions after they are made
```

---

## Decision Authority

| Decision | Owner | When |
|---|---|---|
| Scope changes | Alex | Any time, immediately |
| Cut a feature | Alex | Must happen before T+7:00 |
| Technical approach | Jordan | During build — flag to Sam if blocked |
| UI changes | Morgan | Before T+2:00 only — after that Jordan owns |
| What to claim in the pitch | Casey | Must match validated features only |
| Submit | Kostya | After Alex sign-off |

---

## If Everything Goes Wrong

**App doesn't deploy at T+0:** Kostya escalates to CreatorCon support immediately. Do not waste more than 30 minutes on environment issues — that's the contest organiser's problem, not Jordan's.

**Claude API fails at T+2:00:** Jordan implements a static mock response so the rest of the app can be built and validated. Riley pitches the integration as implemented — Casey notes the mock in Known Issues.

**Jordan falls more than 1 hour behind at T+4:00:** Alex cuts the lowest-value feature. Jordan does not decide what to cut — Alex does.

**Casey can't pass happy path at T+7:00:** Jordan gets 30 minutes to fix. If not fixed: Casey documents the failure honestly. Do not submit a broken app with a passing demo video.

---

*Reference: `playbook/process/hackathon_day.md` — build loop, blocker protocol, validation checklist, commit convention, submission checklist.*
