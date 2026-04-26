# Team AXIOM — End-to-End Workflow
## The complete operating manual for every AI persona

**Read this document before starting any task.**
It tells you where the project is, what you must do, how to hand off, and how to update Jira.

---

## 0. How to Determine Where You Are

Before doing anything, answer these three questions:

**1. Which phase is the project in?**

| Phase | Entry condition | End condition |
|---|---|---|
| PREP | Repo exists | All pre-hackathon artifacts ready, clock starts |
| BUILD | Hackathon clock starts | Full app deployed and Casey signs off |
| PITCH | Casey signs off | Video uploaded |
| SUBMIT | Video uploaded | Submission confirmed |

Check by reading `runs/[run]/README.md` — the artifact index shows what is done and what is pending.

**2. Which ticket is yours?**

Check `runs/[run]/README.md` → Ticket Status table. Find your persona's tickets. The ones marked `In Progress` are yours. If none are `In Progress`, check `Backlog` for the next unstarted ticket assigned to your persona.

**3. What must exist before you can start?**

Each ticket has entry conditions (listed in the Phase sections below). If an entry condition is not met, do not start — document the block and escalate to Kostya.

---

## Phase Map

```
PREP Phase
  ├── AXM-01  Team Charter              Alex        ✅ Done (pre-wired)
  ├── AXM-02  Ideation Session          Alex        → Produces: ideation/session.md
  ├── AXM-03  Architecture Doc          Sam         → Produces: docs/architecture.md
  ├── AXM-04  UX Wireframe Spec         Morgan      → Produces: docs/wireframes.md
  ├── AXM-05  Test Case Draft           Casey       → Produces: personas/casey.md
  ├── AXM-06  Pitch Outline             Riley       → Produces: pitch/script_draft.md
  ├── AXM-07  PDI Pre-configuration     Jordan      → Produces: checklist validated
  ├── AXM-08  Scaffold + Component      Jordan      → Produces: src/ shells
  ├── AXM-09  HeyGen Account + Avatar   Riley/K     → Produces: avatar ready
  ├── AXM-10  Claude API Credential     Sam/K       → Produces: credential in SN store
  ├── AXM-11  now-sdk OAuth             Jordan/K    ✅ Done
  ├── AXM-12  CLAUDE.md                 Jordan      ✅ Done
  ├── AXM-13  Figma Setup               Morgan      → Produces: Figma file with pages
  ├── AXM-14  Confluence Setup          Kostya      → Produces: space + page tree
  └── AXM-15  now-sdk Flags Confirmed   Jordan/K    ✅ Done

BUILD Phase (8 hours — hackathon night)
  ├── Hour 0:00–0:30   Auth swap + scaffold deploy        Jordan/Kostya
  ├── Hour 0:30–2:00   Tables + Script Includes           Jordan
  ├── Hour 2:00–4:00   Flows + integrations               Jordan
  ├── Hour 4:00–5:30   UI screens                         Jordan
  ├── Hour 5:30–6:30   End-to-end validation              Casey + Jordan
  └── Hour 6:30–7:00   Bug fixes + polish                 Jordan

PITCH Phase
  ├── Hour 7:00–7:15   Section 2 script update            Riley
  └── Hour 7:15–7:30   HeyGen Section 2 record + assemble Kostya

SUBMIT Phase
  └── Hour 7:30–8:00   Submission form + upload           Casey + Kostya
```

---

## Phase 1 — PREP

### AXM-02 — Ideation Session (Alex)

**Entry conditions:**
- Infrastructure complete (AXM-11, AXM-15 done)
- Jira and Confluence set up (AXM-14)
- Hackathon categories and judge criteria known

**What Alex does:**
1. Opens session with scoring framework and brief to each persona
2. Collects proposals: Sam (2), Morgan (2), Riley (2)
3. Evaluates against scoring framework
4. Decides: one app, locked scope, handover instructions for all personas
5. Writes decision as structured artifact

**Detailed steps:** see `process/ideation.md`

**Output:** `runs/[run]/ideation/session.md`

**Jira actions:**
- On start: transition AXM-02 → `In Progress`, comment: `[AXM-02] Ideation session started. Collecting proposals from Sam, Morgan, Riley.`
- On complete: transition AXM-02 → `Done`, paste output file URL into Artifact Link field
- Open new tickets from decision: AXM-03 (Sam), AXM-04 (Morgan), AXM-05 (Casey), AXM-06 (Riley) — set status `In Progress` for Sam, `Backlog` for the rest

**Handover (Alex → Sam):**
```
FROM: Alex
TO: Sam
TICKET: AXM-03
STATUS: Ready to start
ARTIFACT: runs/[run]/ideation/session.md
SUMMARY: App selected: [name]. Scope locked — see Step 5 of ideation session.
  Sam's task: produce architecture doc. Confirm table schema, Flow Designer
  triggers, Claude integration pattern, and build sequence.
OPEN ITEMS: [any PDI capability questions Alex flagged]
DEPENDENCIES: Morgan starts AXM-04 only after AXM-03 is complete.
```

---

### AXM-03 — Architecture Doc (Sam)

**Entry conditions:**
- AXM-02 complete — `runs/[run]/ideation/session.md` exists
- App name, scope, and accepted/rejected features are clear

**What Sam does:**
1. Reads ideation/session.md fully — especially Alex's scope lock
2. Assesses every in-scope feature for platform feasibility
3. Designs table schema, flow triggers, Claude integration, Script Includes
4. Writes build sequence Jordan will follow exactly
5. Flags every risk and every open question explicitly

**Required sections:** all 11 sections — see `process/architecture.md`

**Output:** `runs/[run]/docs/architecture.md`

**Jira actions:**
- On start: transition AXM-03 → `In Progress`, comment: `[AXM-03] Architecture doc started. Working from ideation/session.md. Will flag any scope concerns before completing.`
- If a scope item is unbuildable: transition AXM-03 → `Blocked`, comment: `[CONFLICT] [item] cannot be built as scoped because [reason]. Alex to decide: cut, defer, or simplify. Blocking AXM-03 and AXM-04.`
- On complete: transition AXM-03 → `Done`, update Artifact Link field with file URL
- Transition AXM-04 from `Backlog` → `In Progress` (Morgan can now start)

**Handover (Sam → Jordan and Morgan):**
```
FROM: Sam
TO: Jordan (primary), Morgan (secondary)
TICKET: AXM-03 complete. Unblocks AXM-04 and AXM-08.
STATUS: Complete
ARTIFACT: runs/[run]/docs/architecture.md
SUMMARY: [App name] architecture complete. [N] custom tables. Claude integration
  via IntegrationHub REST. Build sequence in Section 9 — follow it exactly.
  [Any plugin dependency that needs PDI confirmation before build.]
OPEN ITEMS: [list any open questions or risks Jordan and Morgan need to know]
DEPENDENCIES: Jordan: do not build until this doc is read.
  Morgan: data available for display is in Section 7.
```

---

### AXM-04 — UX Wireframe Spec (Morgan)

**Entry conditions:**
- AXM-03 complete — `runs/[run]/docs/architecture.md` exists
- Section 7 (UI components) of architecture doc is readable
- AXM-13 (Figma) is set up

**What Morgan does:**
1. Reads architecture doc Section 7 — understand what data is available
2. Designs every screen: layout, components, labels, CTAs, empty states, error states
3. Specifies the demo storyboard: what judges see in 90 seconds
4. Marks where Claude-generated content appears and how it is visually distinguished

**Output:** `runs/[run]/docs/wireframes.md`

**Jira actions:**
- On start: transition AXM-04 → `In Progress`
- On complete: transition AXM-04 → `Done`, update Artifact Link

**Handover (Morgan → Jordan):**
```
FROM: Morgan
TO: Jordan
TICKET: AXM-04 complete. Jordan can now start UI (after tables and flows are done).
STATUS: Complete
ARTIFACT: runs/[run]/docs/wireframes.md
SUMMARY: [N] screens specified. Figma file has the same screens. The centrepiece
  interaction is [describe demo wow moment]. Claude output appears on [screen name]
  as [visual treatment — e.g. distinct card, coloured border].
OPEN ITEMS: [any screen that needs a decision Jordan must make]
DEPENDENCIES: Implement exactly as spec'd. Do not redesign without flagging to Morgan.
```

---

### AXM-05 — Test Case Draft (Casey)

**Entry conditions:**
- AXM-02 complete — Alex's scope lock is the acceptance criteria
- Can be started in parallel with AXM-03 (does not need architecture)

**What Casey does:**
1. Reads Alex's scope lock from ideation/session.md
2. Writes one test case per in-scope feature
3. Includes happy path AND at least one edge/negative case per feature
4. Flags anything that requires infrastructure confirmation (e.g. plugin must be present)

**Output:** Test cases documented in `runs/[run]/personas/casey.md`

**Jira actions:**
- On start: transition AXM-05 → `In Progress`
- On complete: transition AXM-05 → `Done`
- Casey does not execute tests until Jordan hands off the build (BUILD phase)

---

### AXM-06 — Pitch Outline (Riley)

**Entry conditions:**
- AXM-02 complete — app name, problem statement, and meta-story connection known
- Can be started in parallel with AXM-03 (Sections 1 and 3 do not need architecture)

**What Riley does:**
1. Reads Alex's decision including the draft elevator pitch and meta-story note
2. Writes Sections 1 and 3 (problem + team story, vision + close) — can be finalised now
3. Writes Section 2 as a placeholder — will be updated after Casey validates the build
4. Evaluates against the pitch scoring checklist in `process/pitch.md`

**Output:** `runs/[run]/pitch/script_draft.md`

**Jira actions:**
- On start: transition AXM-06 → `In Progress`
- On complete (Sections 1 + 3 done, Section 2 placeholder): transition AXM-06 → `In Review` (not Done — Section 2 pending)
- On Section 2 finalised (BUILD phase, hour 7): transition AXM-06 → `Done`

---

### AXM-07 — PDI Pre-configuration (Jordan)

**Entry conditions:**
- AXM-11 complete (OAuth configured)
- AXM-15 complete (now-sdk flags confirmed)
- Can run in parallel with AXM-02, AXM-03

**What Jordan does:**
1. Confirms plugins available on the PDI (check against Sam's architecture when available)
2. Verifies now-sdk build/deploy cycle end-to-end
3. Confirms `application was null` error is not reproducible (or documents workaround)
4. Confirms ATF approach (no now-sdk runner — Casey validates via PDI UI)

**Output:** Checklist section updated in `runs/[run]/personas/jordan.md`

---

### AXM-08 — Component Scaffolding (Jordan)

**Entry conditions:**
- AXM-03 complete — architecture doc exists (Jordan needs build sequence)
- AXM-07 complete — PDI is confirmed working

**What Jordan does:**
1. Reads architecture doc fully — especially Sections 2, 6, and 9 (schema, Script Includes, build sequence)
2. Creates empty Fluent and server file shells in `src/` — no logic yet, just structure
3. Writes `ClaudeIntegration.ts` shell with JSDoc header (pattern is known regardless of app)
4. Confirms all file names match the `sys_name` values in Sam's schema

**Output:** Scaffolded files in `src/fluent/` and `src/server/`

**Jira actions:**
- On complete: transition AXM-08 → `Done`
- Jordan updates `runs/[run]/personas/jordan.md`: what is scaffolded, what is blocked

---

## Phase 2 — BUILD

The 8-hour clock. Jordan is primary. Everyone else is on call.

### State at clock start

Before the first commit, Jordan confirms:
```
[ ] now-sdk auth --use axiom-hackathon     ← switched to hackathon instance
[ ] now-sdk auth --list                    ← axiom-hackathon is default
[ ] npm run build                          ← clean (zero errors)
[ ] npm run deploy                         ← scaffold is on hackathon instance
[ ] PDI: app visible in System Applications → My Company Applications
[ ] Credential: Claude API key confirmed in SN Credential Store
[ ] CLAUDE.md: architecture and wireframe paths point to correct run folder
[ ] Sam's architecture doc: fully read — Section 9 build sequence memorised
[ ] Morgan's wireframe spec: fully read — every screen understood
[ ] Casey's test cases: skimmed — know what the acceptance criteria are
```

If any item is red: stop. Fix it. Do not begin the build loop until the environment is confirmed.

### Jordan's mandatory build loop

For every single component, without exception:
```
1. Write or modify source file (src/fluent/ or src/server/)
2. npm run build         ← read ENTIRE output. Fix all errors before step 3.
3. npm run deploy        ← read ENTIRE output. Fix all errors before step 4.
4. Validate on PDI       ← open the browser. Check the record, flow, or script.
5. git commit            ← [JORDAN] feat: <what was built> (AXM-XX)
6. Update jordan.md      ← move item from "In Progress" to "Completed"
```

Never commit broken code. Never skip step 4. Never proceed with an unresolved error.

### Build sequence

Follow Sam's architecture doc Section 9 exactly. General order:
```
Hour 0:30–2:00  Tables first — nothing else works without the data model
                Script Includes — logic before anything that calls it
Hour 2:00–4:00  Flow Designer triggers and actions
                IntegrationHub REST action (Claude call)
                Test Claude call independently before wiring to flow
Hour 4:00–5:30  UI components (Now Experience or Service Portal)
                Follow Morgan's wireframe spec screen by screen
```

**Do not start UI before tables exist.**
**Do not start flows before Script Includes are tested.**
**Do not start UI before flows are tested.**

### Blocker protocol

When Jordan hits a blocker:

1. **Stop.** Do not work around it silently. Do not skip to the next item.
2. **Document:** What is the exact error? What was tried? What specifically is blocked?
3. **Escalate immediately** — flag to Kostya. Do not wait. A 15-minute blocker becomes a 2-hour one if it sits.
4. **Kostya decides:** cut the feature / defer to known issues / simplify the requirement.
5. **Alex confirms** if the decision changes in-scope items.
6. **Jordan continues** with the decision in hand. Decision is final — no revisiting.

Blocker comment in Jira: `[BLOCKER] [error description]. Tried: [what was attempted]. Blocked: [what cannot proceed]. Decision needed from: Kostya / Alex.`

### Scope triage if behind

| Hour check | If behind | Action |
|---|---|---|
| Hour 2 | Tables or Script Includes incomplete | Drop one Script Include feature — flag to Alex |
| Hour 4 | Flows not tested | Cut the lowest-priority flow — confirm with Alex |
| Hour 5:30 | UI incomplete | Cut lowest-priority screen — confirm with Morgan which one |
| Hour 6 | Happy path not running | Run Casey's test on core flow only. Everything else → known issues |

**Do not add features after hour 4.** If ahead of schedule: polish existing features.

### Handover (Jordan → Casey) at hour 5:30

```
FROM: Jordan
TO: Casey
TICKET: BUILD validation
STATUS: Ready for validation (or: Partially ready — [feature X] is deferred)
ARTIFACT: Live on hackathon PDI instance [instance URL]
SUMMARY: Core happy path is deployable. [N] of [N] in-scope features implemented.
  [List any deferred features and reason.]
OPEN ITEMS: [Anything Casey should not test — known broken or deliberately deferred]
DEPENDENCIES: Casey must complete validation before Riley records Section 2.
```

---

### Casey's validation (hour 5:30–6:30)

**Entry conditions:**
- Jordan has handed off — happy path is deployable
- Casey's test cases (AXM-05) exist

**What Casey does:**
1. Runs every test case against the live PDI
2. Records: Pass / Fail / Deferred for each
3. Documents actual vs expected result for failures
4. Attempts to get Jordan to fix failures immediately (Casey stays active during hour 6 polish)
5. Produces validation log and signed-off feature list

**Casey does NOT sign off on untested features.** If Jordan says "it probably works" — it is not on the validated list.

**Handover (Casey → Riley) at hour 6:30:**
```
FROM: Casey
TO: Riley
TICKET: AXM-06 Section 2 update
STATUS: Validation complete
ARTIFACT: runs/[run]/personas/casey.md (validation log)
SUMMARY: Validated features: [list]. Deferred: [list]. Happy path: [pass/fail + notes].
OPEN ITEMS: Riley may only pitch validated features. Deferred features must be labelled
  "(if live)" or omitted entirely.
DEPENDENCIES: Riley updates Section 2 script before Kostya records.
```

---

## Phase 3 — PITCH

### Riley's Section 2 update (hour 7:00–7:15)

**Entry conditions:**
- Casey's validation log exists — validated feature list is final
- Sections 1 and 3 of script are already written (done in PREP)

**What Riley does:**
1. Reads Casey's validation log
2. Updates Section 2 (demo narration) to match the actual live demo sequence
3. Removes or labels any feature Casey has not validated
4. Hands final script to Kostya

**Output:** Updated `runs/[run]/pitch/script_draft.md`

**Handover (Riley → Kostya):**
```
FROM: Riley
TO: Kostya
TICKET: AXM-09 recording
STATUS: Script ready
ARTIFACT: runs/[run]/pitch/script_draft.md
SUMMARY: Full script is final. Sections 1 and 3 are unchanged. Section 2
  reflects validated demo flow. [N]-minute runtime.
OPEN ITEMS: [Any timing notes or emphasis instructions for Kostya's delivery]
```

### Kostya records (hour 7:15–7:30)

1. Record Section 2 in HeyGen (narration, screen recording overlay)
2. Assemble all three sections in HeyGen project
3. Export and confirm video plays through completely
4. Upload to submission platform or host for URL submission

---

## Phase 4 — SUBMIT

### Casey + Kostya (hour 7:30–8:00)

**Entry conditions:**
- Video is ready
- App is live on hackathon instance
- Casey's validation log is complete

Casey produces:
- Store listing description (max 150 words, problem-first)
- README / judge notes (what to look at, how to demo it)
- Known issues log (honest — do not omit)

Kostya executes:
- Submission form: app name, description, category, team members
- Video upload or URL
- README / documentation upload
- Screenshots upload

**Submission checklist:**
```
[ ] App live on hackathon instance (confirm URL works)
[ ] Submission form filled completely
[ ] Demo video uploaded and playable
[ ] Store listing description attached
[ ] README / judge notes attached
[ ] Known issues documented (not hidden)
[ ] Jira: all AXM tickets transitioned to Done
[ ] Git: all changes committed and pushed to main
[ ] Screenshot the submission confirmation page
```

Casey signs off on the submission. If anything in the checklist is unchecked at 7:55 — Casey makes the call on what to drop to hit the deadline.

---

## Jira Ticket Lifecycle

### Status flow

```
Backlog → In Progress → In Review → Done
                ↓
            Blocked (escalate to Kostya immediately)
```

### What to do at each transition

| Transition | Who | Required actions |
|---|---|---|
| Backlog → In Progress | Persona starting the work | Post comment: `[AXM-XX] Starting. Entry conditions met: [list]. Expected output: [file path].` |
| In Progress → In Review | Persona completing draft | Post artifact URL. Ask specific reviewer to confirm. |
| In Review → Done | Receiving persona confirms | Post: `[AXM-XX] Accepted. [One line on what was confirmed.]` Transition to Done. Update Artifact Link field. |
| In Progress → Blocked | Persona hitting a blocker | Post: `[BLOCKER] [description]. Tried: [X]. Decision needed from: [Kostya/Alex].` Tag Kostya. |
| Blocked → In Progress | After Kostya decides | Post: `[UNBLOCKED] Decision: [what was decided]. Continuing.` |

### Required Jira fields per ticket

| Field | Set when |
|---|---|
| Persona | On ticket creation (do not change) |
| Phase | On ticket creation (PREP / BUILD / PITCH / SUBMIT) |
| Artifact Link | When output file is committed to repo — paste GitHub URL |
| Handover Note | On Done transition — paste the full handover note text |

### Comment discipline

Every Jira comment must start with `[AXM-XX]` and the current status tag:
- `[AXM-XX] Starting — ...`
- `[AXM-XX] In progress — ...`
- `[AXM-XX] Complete — artifact at [URL]`
- `[BLOCKER] ...`
- `[CONFLICT] ...`
- `[UNBLOCKED] ...`
- `[SCOPE CHANGE] Approved by Alex: [what changed]`

---

## Handover Protocol (full specification)

Every handover between personas is a structured document. No informal hand-offs. No "hey it's done." The structured format is what allows the next persona to start immediately without re-reading everything.

### Full format

```
FROM:         [Persona name]
TO:           [Persona name]
TICKET:       [AXM-XX]
STATUS:       Complete / Blocked / In Review
ARTIFACT:     [GitHub file path or description]
SUMMARY:      [2-3 sentences: what was decided or built, and why it matters for the receiver]
OPEN ITEMS:   [Anything the receiver needs to decide before or during their work]
DEPENDENCIES: [What the receiver must not start without — be explicit]
```

### Where it goes

1. Posted as a Jira comment on the ticket (with `[AXM-XX] Complete — handing to [persona]`)
2. Copied into the SENDER's persona log in `runs/[run]/personas/[sender].md`
3. If the receiver has a Claude.ai session open: paste as the first message of their next turn

### Rules

- **Do not hand off broken work.** If it is not working, status is Blocked — not Complete.
- **Do not hand off without the artifact existing.** "I'll commit it shortly" is not a handover.
- **Do not hand off with open scope decisions.** Resolve them with Alex first, or list them explicitly in OPEN ITEMS for the receiver to escalate.
- **Do not accept a handover that is missing dependencies.** If you are the receiver and the artifact does not exist, reply with: `[AXM-XX] Cannot start — [artifact] not present at [expected path].`

---

## Agent State Awareness

When a persona starts a new session (in Claude.ai or Claude Code), they must orient themselves before doing anything.

### Orientation checklist (run at the start of every session)

```
1. Read runs/[run]/README.md
   → What is the current phase?
   → Which tickets are Done / In Progress / Blocked?

2. Read my persona's log: runs/[run]/personas/[me].md
   → What did I complete last session?
   → What was I in the middle of?
   → What blockers did I log?

3. Read the handover note addressed to me (in Jira or in my log)
   → What does the sender say I need to know?
   → What are my open items?

4. Confirm my entry conditions are met (see Phase sections above)
   → If not: document the gap and escalate before starting

5. Check the clock (BUILD phase only)
   → What hour is it?
   → Am I behind the hour-by-hour plan?
   → If behind: flag to Kostya, triage scope before continuing
```

### What to do if the state is unclear

If `runs/[run]/README.md` is out of date and you cannot determine where the project is:

1. Read Jira — the ticket statuses are authoritative
2. Read `git log --oneline -20` — recent commits show what Jordan has built
3. Read `runs/[run]/personas/jordan.md` — Jordan's build log shows current state
4. If still unclear: post a `[STATUS CHECK]` comment on the most recent in-progress Jira ticket and ask Kostya to confirm

---

## Dependency Map

```
AXM-02 (Ideation)
  ↓ required by
  AXM-03 (Architecture — Sam)
    ↓ required by
    AXM-04 (Wireframes — Morgan)   ← cannot start before AXM-03
    AXM-08 (Scaffolding — Jordan)  ← cannot start before AXM-03
      ↓ required by
      BUILD: Tables                ← cannot start before AXM-08
        ↓
        BUILD: Script Includes     ← cannot start before Tables
          ↓
          BUILD: Flows             ← cannot start before Script Includes tested
            ↓
            BUILD: UI              ← cannot start before AXM-04 AND Flows tested
              ↓
              Casey: Validation    ← cannot start before happy path deployable
                ↓
                Riley: Section 2   ← cannot start before Casey's validated feature list
                  ↓
                  Kostya: Record   ← cannot start before Section 2 script is final
                    ↓
                    SUBMIT         ← cannot start before video is assembled

AXM-05 (Test cases — Casey)        ← starts after AXM-02, parallel with AXM-03/04
AXM-06 (Pitch outline — Riley)     ← starts after AXM-02, parallel with AXM-03/04
AXM-07 (PDI pre-config — Jordan)   ← starts after AXM-11/15, parallel with AXM-02
AXM-09 (HeyGen — Riley/Kostya)     ← parallel with all PREP work
AXM-10 (Claude credential — Sam/K) ← parallel with all PREP work
```

**Hard rule: never start a task whose entry dependency is not Done in Jira.**

---

## Conflict Resolution

### Scope conflict (a feature is unbuildable as specified)

1. Jordan or Sam raises it — immediately, not at hour 5
2. Transition relevant ticket → `Blocked`
3. Post `[CONFLICT]` comment with: the constraint, why it blocks, 2-3 options
4. Kostya reads and decides
5. Alex confirms if scope changes
6. Kostya posts decision as `[SCOPE CHANGE] Approved by Alex: [decision]`
7. All affected personas note the decision and continue

### Persona conflict (two personas disagree on a design decision)

1. Each persona states their position in a Jira comment — briefly and with rationale
2. Escalate to Kostya: `[CONFLICT] Jordan and Morgan disagree on [topic]. Positions: [A] vs [B]. Kostya to decide.`
3. Kostya's decision is posted as `[DECISION] [decision]. Final — not revisited.`
4. Both personas proceed with the decision

### Clock conflict (Jordan is behind and the plan cannot be saved)

1. Jordan flags to Kostya at the hour mark: "I am [N] components behind plan."
2. Kostya and Jordan agree what to cut (Alex confirms scope change)
3. Casey updates test cases: removed tests for cut features
4. Riley notes which features are cut: removed from pitch or labelled "(future)"
5. Everyone continues on the reduced scope — no grief, no revisiting

---

## Rules That Override Everything Else

These are absolute. No exceptions, no edge cases, no "just this once."

1. **Never commit broken code.** Build green, deploy green, then commit.
2. **Never start a phase without its entry conditions met.** Check before acting.
3. **Never pitch a feature Casey has not validated.** Riley only pitches the validated list.
4. **Never hardcode credentials or API keys.** Claude API key lives in SN Credential Store only.
5. **Never modify OOB tables.** Extend only.
6. **Never make scope decisions unilaterally.** Alex owns scope. All scope questions go to Alex.
7. **Never hand off broken work.** Status is Blocked, not Complete.
8. **Never work around a blocker silently.** Escalate immediately.
9. **Never add features after hour 4.** Polish only.
10. **The submission deadline is absolute.** If it is not done by hour 8, it does not ship.
