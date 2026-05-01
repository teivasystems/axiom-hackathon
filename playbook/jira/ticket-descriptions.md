# AXIOM — Jira Ticket Descriptions
## Standard ticket set for every run

> These are the description templates for the 7 standard tickets created at
> run initialisation. Replace `[run]` with the actual run folder name throughout.
> Use `playbook/jira/create-tickets.sh` to create all tickets in one command.
>
> Every description is written so the assigned persona can start work from
> the ticket alone — no WORKFLOW.md reading required.

---

## AXM-IDEATION — Ideation Session

**Summary:** `[DR] Ideation Session` (dry run) or `Ideation Session` (real run)
**Persona:** Alex
**Initial status:** In Progress (Alex starts immediately)

**Description:**
```
PERSONA: Alex — Product Owner
OPERATION CARD: playbook/cards/alex.md
OUTPUT: runs/[run]/ideation/session.md

--- WHAT YOU DO ---

Run the AXIOM ideation framework (playbook/process/ideation.md) and select one
app concept for this run. Lock the scope. Hand off to all other personas.

Phase 0: Confirm constraints — platform, build window, categories, judge panel.
Phase 1-3: Generate 10+ concepts. Apply first-pass filter.
Phase 4: Score remaining concepts against the weighted framework.
Phase 5: Deep-dive top 3.
Phase 6: Select one. Write the scope lock.

--- SCOPE LOCK (required in output) ---

App name:     <name>
One-liner:    <elevator pitch — one sentence>
IN scope:     <bulleted list — each item buildable in 8 hours>
OUT of scope: <explicit list — considered and rejected>
Claude role:  <what Claude does — one sentence>
Demo moment:  <the 30-second reveal that makes a judge vote>

--- ENTRY CONDITIONS ---

- Run folder initialised (logs/ACTIVITY.log exists)
- All 7 tickets created with descriptions (this ticket is evidence of that)
- Hackathon categories and judge criteria confirmed

--- ACCEPTANCE CRITERIA ---

- ideation/session.md committed and pushed to main
- Scope lock is unambiguous — no feature requires interpretation
- Elevator pitch is one sentence, no jargon
- Handover comment posted on this ticket with ARTIFACT_URL and COMMIT
- AXM-ARCH, AXM-WIRE, AXM-TEST, AXM-PITCH all transitioned to In Progress

--- DOWNSTREAM ---

AXM-ARCH → Sam (architecture) — starts when this is Done
AXM-WIRE → Morgan (wireframes) — starts from scope lock immediately
AXM-TEST → Casey (test cases) — starts from scope lock immediately
AXM-PITCH → Riley (pitch) — starts from scope lock immediately
```

---

## AXM-ARCH — Architecture Doc

**Summary:** `[DR] Architecture Doc` or `Architecture Doc`
**Persona:** Sam
**Initial status:** In Progress (transitions to In Progress when AXM-IDEATION is Done)

**Description:**
```
PERSONA: Sam — Platform Architect
OPERATION CARD: playbook/cards/sam.md
OUTPUT: runs/[run]/docs/architecture.md
DEPENDS ON: AXM-IDEATION Done + ideation/session.md committed

--- WHAT YOU DO ---

Produce the architecture document Jordan builds from. Ambiguity you leave
here becomes a blocker at BUILD time.

BEFORE WRITING ANYTHING — query the PDI vendor prefix:
  GET https://<pdi>/api/now/table/sys_properties
      ?sysparm_query=name=glide.appcreator.company.code&sysparm_fields=value
  → value is the prefix. Scope: x_<prefix>_<appname> ≤ 18 chars.

Confirm plugins on PDI (Flow Designer, IntegrationHub, Service Portal).
Do not name any table or scope before this check is complete.

--- REQUIRED SECTIONS (all 11) ---

1. App scope (match Alex's scope lock exactly — add confirmed scope name + PDI URL)
2. Table schema (every field: name, type, mandatory, default, notes)
3. OOB tables (read/write only — no modifications)
4. Flow Designer (trigger, ordered actions, error handling per flow)
5. Claude integration (pattern, credential alias, endpoint, prompt, output field)
6. Script Includes (name, purpose, public methods, dependencies)
7. UI components (screen, data source, role, wireframe cross-reference)
8. Plugin dependencies (✅ confirmed / ⚠️ unverified / fallback)
9. Build sequence (numbered, dependency order — Jordan follows this exactly)
10. Known risks (table: risk, likelihood, impact, mitigation)
11. Open questions (question, owner, deadline)

ALSO REQUIRED: build manifest at the end of the doc.
  | # | Type | Name | sys_name | Depends on | ✓ |
  Jordan ticks this off as each component is built.

--- ENTRY CONDITIONS ---

- AXM-IDEATION Done and ideation/session.md committed
- Scope lock fully readable

--- ACCEPTANCE CRITERIA ---

- All 11 sections present and complete
- Build manifest present — every component listed
- PDI vendor prefix confirmed and used in all sys_names
- No scope prefix invented — only queried values used
- architecture.md committed and pushed
- Handover comment on this ticket with ARTIFACT_URL and COMMIT
- AXM-BUILD transitioned to In Progress

--- DOWNSTREAM ---

AXM-BUILD → Jordan (scaffold + build) — starts when this is Done
AXM-WIRE → Morgan fills in TBD sections — architecture required for data fields only
```

---

## AXM-WIRE — UX Wireframe Spec

**Summary:** `[DR] UX Wireframe Spec` or `UX Wireframe Spec`
**Persona:** Morgan
**Initial status:** In Progress (starts from ideation scope lock — does NOT wait for AXM-ARCH)

**Description:**
```
PERSONA: Morgan — UX/UI Designer
OPERATION CARD: playbook/cards/morgan.md
OUTPUT: runs/[run]/docs/wireframes.md + Figma file
STARTS FROM: ideation/session.md scope lock (not architecture doc)

--- WHAT YOU DO ---

Design every screen Jordan will build. Start from the ideation scope lock.
Mark data-dependent fields [TBD — pending architecture.md] and fill them
when Sam's doc lands. Do not wait for Sam to start.

For each screen:
  - User + trigger
  - Layout description
  - Every component (label, placeholder, validation)
  - Where Claude output appears + visual treatment
  - Empty state + error state
  - Jordan note (anything non-obvious)

Required at end: demo storyboard (90 seconds, screen by screen, timestamps).

Figma: create pages matching screen names. Share: "Anyone with link can view".

--- ENTRY CONDITIONS ---

- AXM-IDEATION Done and ideation/session.md committed (sufficient to start)
- AXM-ARCH recommended for final data field names (mark TBD if not yet available)

--- ACCEPTANCE CRITERIA ---

- Every in-scope screen specified (matches Alex's scope lock)
- No [TBD] fields remaining when handed to Jordan
- Demo storyboard present — 90-second timing confirmed
- wireframes.md committed and pushed
- Figma file created with matching page names, link in handover comment
- Handover comment on this ticket with ARTIFACT_URL, FIGMA URL, and COMMIT

--- NOTE ---

Jordan does not redesign. Jordan implements exactly what you specify.
If Jordan proposes a design change, Jordan raises it to Alex — not you.
```

---

## AXM-TEST — Test Case Draft

**Summary:** `[DR] Test Case Draft` or `Test Case Draft`
**Persona:** Casey
**Initial status:** In Progress (starts from ideation scope lock — does NOT wait for AXM-ARCH)

**Description:**
```
PERSONA: Casey — QA & Documentation
OPERATION CARD: playbook/cards/casey.md
OUTPUT: runs/[run]/personas/casey.md
STARTS FROM: ideation/session.md scope lock (not architecture doc)

--- WHAT YOU DO — PART 1: PREP phase ---

Write one test case per in-scope feature from Alex's scope lock.
Start immediately — the scope lock is your acceptance criteria.

Format per case:
  TC-NNN: <feature name>
  GIVEN:  <precondition>
  WHEN:   <user action>
  THEN:   <specific, verifiable outcome>
  Edge:   GIVEN/WHEN/THEN for one edge or negative case
  Infrastructure flag: <PDI dependency — or None>

Include Validation Results table at end (populated during BUILD):
  | TC | Feature | Result | Notes |

--- WHAT YOU DO — PART 2: BUILD validation (hour ~5:30) ---

When Jordan hands off:
1. Read Jordan's handover + DECISIONS.md (know what was cut)
2. Run every test case against live PDI
3. Record Pass / Fail / Deferred — no untested features signed off
4. Work with Jordan on fixes during hour 6 polish window
5. Post validated feature list for Riley

--- WHAT YOU DO — PART 3: SUBMIT (hour 7:30) ---

You own the submission checklist. Nothing ships without your sign-off.
See operation card for full checklist.

--- ENTRY CONDITIONS ---

Part 1: AXM-IDEATION Done and ideation/session.md committed
Part 2: Jordan's handover comment posted on AXM-BUILD

--- ACCEPTANCE CRITERIA ---

- One test case per in-scope feature
- Happy path + at least one edge/negative case per feature
- Validation Results table populated after BUILD
- Validated feature list posted for Riley before Section 2 is written
- Submission checklist complete and signed off

--- AUDIT ROLE ---

At end of PREP and BUILD: scan all Done tickets for closure comments.
Missing closure comment = reopen + log [AUDIT_FAIL] in ACTIVITY.log.
```

---

## AXM-PITCH — Pitch Script

**Summary:** `[DR] Pitch Script` or `Pitch Script`
**Persona:** Riley
**Initial status:** In Progress (starts from ideation scope lock — does NOT wait for AXM-ARCH)

**Description:**
```
PERSONA: Riley — Pitch & Marketing
OPERATION CARD: playbook/cards/riley.md
OUTPUT: runs/[run]/pitch/script_draft.md
STARTS FROM: ideation/session.md scope lock

--- WHAT YOU DO ---

Write Sections 1 and 3 now. Write Section 2 after Casey validates the build.

Section 1 — Problem + Team (30 seconds):
  Open with felt experience, not a statistic.
  Introduce AXIOM — AI-native team, meta-story connection.
  The sentence that makes judges lean forward.

Section 2 — Demo (60 seconds) — PLACEHOLDER until Casey validates:
  Write [SECTION 2 — PENDING CASEY VALIDATION] now.
  Update with actual demo narration after Casey's handover.
  Only include validated features.

Section 3 — Vision + Close (30 seconds):
  What this looks like at scale — one concrete image.
  The line judges remember when they vote.
  Call back to the opening if you can.

Timing constraint: 90 seconds total. Write to it.

--- ENTRY CONDITIONS ---

Sections 1 + 3: AXM-IDEATION Done and ideation/session.md committed
Section 2 update: Casey's validation handover comment on AXM-TEST

--- ACCEPTANCE CRITERIA ---

- Sections 1 and 3 complete before BUILD starts
- Section 2 updated within 15 minutes of Casey's handover
- Total runtime ≤ 90 seconds
- No unvalidated features pitched — Casey's list is the boundary
- script_draft.md committed and pushed
- Handover comment posted for Kostya (recording)

--- NOTE ---

If a feature was deferred: label it "(future roadmap)" or omit it.
Never present a deferred feature as live — Casey's validated list is final.
```

---

## AXM-PDI — PDI Pre-configuration

**Summary:** `[DR] PDI Pre-configuration` or `PDI Pre-configuration`
**Persona:** Jordan
**Initial status:** In Progress (can start in parallel with AXM-IDEATION)

**Description:**
```
PERSONA: Jordan — Lead Developer
OPERATION CARD: playbook/cards/jordan.md
OUTPUT: runs/[run]/personas/jordan.md (checklist updated)
PARALLEL: runs alongside AXM-IDEATION and AXM-ARCH

--- WHAT YOU DO ---

Confirm the PDI is ready for the build before the build starts.
A 20-minute environment problem at hour zero is a 20-minute score loss.

Checklist:
[ ] now-sdk auth --list → correct alias active (axiom-pdi or axiom-hackathon)
[ ] now-sdk init ran clean in runs/[run]/app/ with correct scopeName
[ ] npm run build → clean (zero errors)
[ ] npm run deploy → clean (app visible in PDI Studio)
[ ] PDI: app visible under System Applications → My Company Applications
[ ] PDI: vendor prefix confirmed (query glide.appcreator.company.code)
[ ] PDI: Flow Designer plugin available
[ ] PDI: IntegrationHub plugin available
[ ] PDI: Service Portal plugin available (if in scope)
[ ] Claude API credential in SN Credential Store (Kostya configures — confirm it exists)

--- ENTRY CONDITIONS ---

- now-sdk auth alias configured (axiom-pdi)
- PDI URL and admin credentials confirmed by Kostya

--- ACCEPTANCE CRITERIA ---

- All checklist items ticked
- Build + deploy cycle verified clean
- Vendor prefix noted in jordan.md (used by Sam for architecture)
- Checklist committed to runs/[run]/personas/jordan.md
- No open unknowns before AXM-BUILD starts
```

---

## AXM-BUILD — Scaffold + Build

**Summary:** `[DR] Scaffold + Build` or `Scaffold + Build`
**Persona:** Jordan
**Initial status:** Backlog (transitions to In Progress when AXM-ARCH is Done)

**Description:**
```
PERSONA: Jordan — Lead Developer
OPERATION CARD: playbook/cards/jordan.md
OUTPUT: runs/[run]/app/src/ (built and deployed)
DEPENDS ON: AXM-ARCH Done + architecture.md committed

--- WHAT YOU DO ---

Build what Sam specified, in the order Sam specified, to the spec Morgan designed.

BEFORE WRITING CODE:
  Read architecture.md Sections 2, 6, 7, 9 (schema, Script Includes, UI, sequence)
  Read the build manifest at the end of architecture.md
  Read wireframes.md fully
  Confirm: pwd ends in runs/[run]/app/ and now.config.json scope is correct

MANDATORY BUILD LOOP (every component, no exceptions):
  0. Verify pwd + now.config.json scope
  1. Write/modify source file
  2. npm run build → fix all errors before step 3
  3. npm run deploy → fix all errors before step 4
  4. Validate on PDI — open browser, confirm behaviour
  5. git commit [JORDAN] feat: <component> (AXM-BUILD)
  6. Update runs/[run]/personas/jordan.md
  7. Append [COMMIT] + [DEPLOY] to ACTIVITY.log

BUILD SEQUENCE (follow Sam's Section 9 exactly):
  1. Tables (nothing works without the data model)
  2. Script Includes (logic before anything that calls it)
  3. Flows + Claude integration (test Claude call independently first)
  4. UI (Morgan's wireframe spec — screen by screen)

HOUR CHECKPOINTS (post to ACTIVITY.log):
  Hour 2:   tables ✅ / Script Includes ✅ / on track or BEHIND
  Hour 4:   flows ✅ / Claude tested ✅ / on track or BEHIND
  Hour 5:30 handoff to Casey — post handover comment on this ticket

BLOCKER PROTOCOL:
  Stop. Log [BLOCKER] in ACTIVITY.log. Post Jira comment. Transition to Blocked.
  Do not work around blockers silently. Escalate immediately to Kostya.

--- ENTRY CONDITIONS ---

- AXM-ARCH Done and architecture.md committed
- AXM-PDI Done — build/deploy cycle verified clean
- AXM-WIRE Done or substantially complete (UI can start later)

--- ACCEPTANCE CRITERIA ---

- All build manifest items ticked
- Happy path deployable end-to-end on PDI
- Casey's test cases pass (validated by Casey)
- No broken code committed at any point
- All components committed with [JORDAN] prefix and AXM-BUILD reference
- Handover comment posted for Casey at hour ~5:30
```
