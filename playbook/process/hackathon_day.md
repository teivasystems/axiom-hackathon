# Process: Hackathon Day Runbook v2
_Owner: Alex (Product Owner) | Status: DRAFT — pending team ratification_
_Supersedes: hackathon-day-runbook v1_

---

## Core Principle

> **No line of code before the plan is locked.**
> The 8-hour sprint only works if thinking is done first.
> Ideation and architecture are not optional warm-ups — they are hard gates.
> If Kostya (or anyone) pushes to skip them: **stop, name it, hold the gate.**

---

## Pace Guardian Rule

Any team member may — and must — call **"HOLD THE GATE"** if:
- The team moves to building before PLAN Phase 2 is signed off
- Scope creep is introduced after Hour 4
- A blocker is being silently worked around

When called:
1. Work stops on that thread immediately
2. Kostya + Alex resolve in ≤ 15 minutes
3. Decision recorded in the decision log before work resumes

This is not insubordination. This is the protocol.

---

## Pre-Clock Checklist

Complete BEFORE the hackathon clock starts — ideally the evening before.

### Environment
```
[ ] now-sdk auth --use axiom-hackathon     (add hackathon instance credential)
[ ] now-sdk auth --list                    (confirm axiom-hackathon is active default)
[ ] npm run build                          (confirm clean build — zero errors)
[ ] npm run deploy                         (confirm scaffold deploys to hackathon instance)
[ ] Open PDI: System Applications → My Company Applications → confirm app exists
[ ] Confirm Anthropic API key in Credential Store on hackathon instance
```

### Documents
```
[ ] CLAUDE.md updated with hackathon instance name
[ ] Architecture doc path correct in CLAUDE.md
[ ] Wireframe spec path correct in CLAUDE.md
[ ] Claude.ai Project AXIOM has all current docs uploaded
```

### Media
```
[ ] HeyGen Sections 1 and 3 recorded and approved
[ ] Casey's test case templates drafted and ready
```

> ⚠️ **DECISION NEEDED:** How long is the pre-clock window available?
> If any pre-clock item is red when the clock starts: **do not proceed to PLAN Phase 1 until it is green.**
> Jordan and Kostya own environment. Alex owns documents. Riley owns media.

---

## PLAN Phase 1 — Ideation & Iteration

**Owner:** Alex facilitates
**Participants:** Full team (all six personas)
**When:** Pre-clock if possible; first available time if not

> ⚠️ **GATE: Do not enter PLAN Phase 2 until this phase produces a confirmed decision log — even if that takes 2 minutes.**

### Adaptive duration

This phase scales to what's actually needed:

| Situation | Mode | Expected time |
|---|---|---|
| Plan is solid, agreed pre-hackathon | **Confirm & delta** — read back the plan, call out any changes since last alignment, confirm or amend | 2–5 minutes |
| Plan exists but has open questions or last-minute changes | **Focused review** — work only the open items, close them, confirm | 15–30 minutes |
| Starting from scratch or significant uncertainty | **Full ideation** — all steps below in sequence | Up to 60 minutes |

**The gate is the same regardless of which mode.** A 2-minute confirmation is a valid gate pass. A 60-minute session that ends without a decision log is not.

### Full ideation steps (run only if needed)

| Step | Activity | Output |
|---|---|---|
| P1-1 | Problem statement read-aloud + alignment check | Everyone can state the problem in one sentence |
| P1-2 | Idea dump — no filtering, 10 minutes | All ideas listed |
| P1-3 | Quick triage — feasible in 8 hours? | Ideas ranked: Build / Defer / Cut |
| P1-4 | User story definition — who does what and why | 3–5 core user stories written |
| P1-5 | Success criteria — what does "done" look like to a judge? | Acceptance criteria for demo |
| P1-6 | Scope line drawn — what is explicitly out of scope? | Out-of-scope list committed |
| P1-7 | Alex reads back: problem, stories, scope, success criteria | Team confirmation |

### Rules for this phase
- No building until gate is signed — regardless of how fast the session goes
- If Kostya says "let's just build it" before the gate criteria are met: **HOLD THE GATE**
- If the plan is already locked and nothing has changed: say so, confirm it, log it, move on in 2 minutes

### Phase 1 Gate Criteria
```
[ ] Problem statement agreed (one sentence, written down)
[ ] Top 3 user stories written and ranked
[ ] Scope line confirmed — what is OUT is as important as what is IN
[ ] Success criteria for the demo agreed
[ ] All 6 personas have said "yes" or raised a concern (no silent disagreements)
```
**Gate keeper: Alex**
**Gate sign-off: Kostya + Alex (verbal, logged)**

---

## PLAN Phase 2 — Architecture & Design Review

**Owner:** Sam leads architecture; Morgan leads UX
**Core participants:** Sam + Kostya (architecture); Morgan (UX)
**When:** Immediately after PLAN Phase 1 gate is signed

> ⚠️ **GATE: Do not enter the Build Sprint until Sam has signed off the architecture and Morgan has signed off the wireframe approach.**
> Jordan may prepare scaffold / environment during this phase — no application logic.

### Adaptive duration

Same principle as Phase 1 — scales to what's needed:

| Situation | Mode | Expected time |
|---|---|---|
| Architecture is pre-agreed and unchanged | **Confirm & delta** — Sam reads back the data model, flows, SIs; flag any changes; confirm | 2–5 minutes |
| Architecture exists but has open technical questions | **Focused review** — resolve open items only | 15–30 minutes |
| Architecture needs to be designed from scratch | **Full session** — all steps below | Up to 60 minutes |

### What happens here

### What happens here (full session — run only if needed)

#### Architecture sub-session (Sam + Kostya)

| Step | Activity | Output |
|---|---|---|
| A1 | Data model walk-through — tables, fields, relationships | Table list with field names |
| A2 | Integration points — Claude API, any external calls | Integration map (simple diagram or bullet list) |
| A3 | Flow design — which ServiceNow Flows cover which user stories | Flow list with trigger + outcome |
| A4 | Script Includes — what server-side logic is needed | SI list with input/output contract |
| A5 | Technical risk identification | Risk log: likelihood × impact |
| A6 | Sam reads back: data model, flows, SIs, risks | Kostya verbal sign-off |

**Sam's mandate in this session:**
- Push back on anything that is technically unsound or not achievable in 8 hours
- If Kostya proposes a feature that breaks the data model: say so, do not absorb it silently
- If a risk is HIGH: it must either be mitigated in the plan or scoped out before sign-off
- Architecture doc updated and committed before leaving this session

#### UX sub-session (Morgan + Alex)

| Step | Activity | Output |
|---|---|---|
| U1 | Wireframe walkthrough against user stories | Screen list confirmed |
| U2 | Navigation and roles — who sees what | Role/screen matrix |
| U3 | Empty states and error states sketched | Notes in wireframe spec |
| U4 | Identify one "wow" moment for the demo | Marked in wireframe spec |
| U5 | Morgan flags anything not implementable in Yokohama | Cut list if any |

### Phase 2 Gate Criteria
```
[ ] Table list written with all required fields named
[ ] Integration map confirmed — Claude API call pattern agreed
[ ] Flow list written — each flow has a named trigger and outcome
[ ] Script Include list — each SI has an input/output contract
[ ] Risk log written — HIGH risks have a mitigation or are scoped out
[ ] Screen list confirmed — matches user stories from Phase 1
[ ] Architecture doc committed to repo (even if draft)
[ ] Wireframe spec committed to repo (even if rough)
[ ] Sam says: "I can build this in the time available"
[ ] Morgan says: "Jordan can implement this in the time available"
```
**Gate keeper: Sam (architecture) + Morgan (UX)**
**Gate sign-off: Sam + Kostya (written in decision log)**

> If Sam cannot say the architecture is buildable in time: scope is cut, not the gate.
> If Kostya disagrees with Sam's risk assessment: Sam's judgment stands on technical matters.

---

## Build Sprint — Hour-by-Hour Plan

> **Entered only after both PLAN gates are signed.**
> The clock below assumes gates are complete and Jordan starts building at t=0 of the build sprint.
> Adjust absolute times based on when gates actually close.

| Sprint Hour | Activity | Owner | Gate / Check |
|---|---|---|---|
| 0:00–0:30 | Auth swap, PDI confirmation, scaffold deploy | Jordan / Kostya | App visible in PDI |
| 0:30–2:00 | Tables and Script Includes (per Phase 2 list) | Jordan | Build + deploy clean; Sam spot-checks |
| 2:00–4:00 | Flows and integrations (per Phase 2 list) | Jordan | Claude API call succeeds end-to-end |
| 4:00–5:30 | UI screens (per Phase 2 wireframe spec) | Jordan | All screens render; Morgan spot-checks |
| 5:30–6:30 | End-to-end validation | Casey + Jordan | Happy path passes |
| 6:30–7:00 | Bug fixes and polish | Jordan | Casey re-runs failing tests |
| 7:00–7:30 | Pitch script update + HeyGen Section 2 | Riley + Kostya | Video assembled |
| 7:30–8:00 | Submission prep and upload | Casey + Kostya | Submission confirmed |

### Hard rules (unchanged from v1, re-stated for clarity)
- Do not start UI before tables exist and deploy clean
- Do not start Flows before Script Includes are tested
- Do not hand off to Casey before a full happy path is deployable
- Do not record demo narration before Casey validates the flow
- **Do not add features after Hour 4.** If ahead: polish, not features.

---

## Jordan's Build Loop (unchanged)

For every component:
```
1. Write or modify source file (src/fluent/ or src/server/)
2. npm run build        ← read output entirely — fix errors before proceeding
3. npm run deploy       ← read output entirely — fix errors before proceeding
4. Validate on PDI      ← check the record, flow, or script in browser
5. git commit           ← [JORDAN] feat: <description> (AXM-XX)
6. Update personas/jordan.md (in-progress and completed sections)
```
Never commit broken code. Never skip step 4.

---

## Blocker Protocol (unchanged, re-stated)

1. Jordan stops. Does not work around silently.
2. Jordan documents: error, what was tried, what is blocked.
3. Jordan flags to Kostya **immediately** — not at hour 6.
4. Kostya decides: cut, defer, or simplify. If scope changes: Alex confirms.
5. Jordan continues with decision in hand. No revisiting.

**Time cost:**
- Escalated immediately: 15–30 minutes
- Worked around silently: 2–3 hours

---

## Scope Triage (if Jordan falls behind)

At each sprint hour mark, Kostya checks Jordan's progress. If behind:

| Sprint Hour | Trigger | Action |
|---|---|---|
| Hour 2 | Script Includes not deploying | Drop one SI feature — flag to Alex |
| Hour 4 | Flows not complete | Cut one UI screen — confirm with Morgan |
| Hour 5:30 | Happy path not runnable | Casey runs core flow only; deferred features → known issues log |

---

## Validation Checklist (Casey — Sprint Hour 5:30)

```
[ ] Happy path: primary user flow — complete end-to-end
[ ] Claude API call: response received and rendered correctly
[ ] Action items / output created correctly
[ ] Second user role (if applicable): can access and act on their view
[ ] Empty state: what does the app show before any data exists?
[ ] Error state: what happens if Claude call fails?
[ ] Performance: page load under 3 seconds on PDI
[ ] Mobile: portal form works on phone (if applicable)
```
Any failure: Jordan fixes. Casey re-validates. Not submitted until happy path passes.

---

## Submission Checklist (Casey + Kostya — Sprint Hour 7:30)

```
[ ] Application deployed and running on hackathon instance
[ ] Submission form filled (app name, description, category, team members)
[ ] Demo video uploaded (or URL submitted)
[ ] Store listing description (Casey produces)
[ ] README / judge notes (Casey produces)
[ ] Jira tickets updated to Done
[ ] Git repo committed and pushed (all changes on main)
[ ] Known issues log honest and complete
[ ] Submission confirmed (screenshot the confirmation page)
```

---

## Decision Log Template

Use this during PLAN Phase 1 and 2. One row per decision.

| # | Decision | Made by | Time | Rationale |
|---|---|---|---|---|
| D-01 | | | | |

---

## Commit Convention (unchanged)

```
[JORDAN] feat: <what was built> (AXM-XX)
[JORDAN] fix: <what was fixed> (AXM-XX)
[SAM]    docs: architecture doc v1 (AXM-03)
[MORGAN] docs: wireframe spec v1 (AXM-04)
[CASEY]  docs: test cases draft (AXM-05)
[RILEY]  docs: pitch outline v1 (AXM-06)
[ALEX]   docs: decision log update (AXM-XX)
[AXIOM]  chore: <infrastructure or repo changes>
```

---

## Open Decisions (must be resolved before pre-clock)

| # | Question | Owner | Status |
|---|---|---|---|
| Q-01 | How long is the pre-clock window available at the venue? | Kostya | Open |
| Q-02 | Can PLAN Phase 1 + 2 happen pre-clock, or do they consume clock time? | Alex + Kostya | Open |

---

_v2.1 — Alex. Corrections: PLAN phases are now adaptive (2-min confirm if plan is pre-agreed; full session only if needed). Removed nonsensical human-availability questions — the team is AI, always present._
_Next action: Kostya resolves Q-01 and Q-02. Sam reviews Phase 2 gate criteria and confirms sign-off wording._