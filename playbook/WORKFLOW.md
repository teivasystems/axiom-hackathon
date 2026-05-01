# Team AXIOM — End-to-End Workflow

## Reference document — personas use their operation cards, not this file

> **Personas:** do NOT read this document at session start.
> Read your operation card in `playbook/cards/<your-name>.md` instead.
> It contains everything you need in 150–200 lines.
>
> **This document** is the authoritative reference for the full process,
> dependency map, conflict resolution protocol, and submission checklist.
> Read it when your card doesn't cover a specific situation.

---

## 0. How to Determine Where You Are

Before doing anything, answer these three questions:

**1. Which phase is the project in?**

| Phase  | Entry condition                    | End condition                          |
|--------|------------------------------------|----------------------------------------|
| PREP   | Repo exists                        | All pre-hackathon artifacts ready, clock starts |
| BUILD  | Hackathon clock starts             | Full app deployed and Casey signs off  |
| PITCH  | Casey signs off                    | Video uploaded                         |
| SUBMIT | Video uploaded                     | Submission confirmed                   |

Check by reading `runs/[run]/README.md` — the artifact index shows what is done
and what is pending. If README is stale, check `runs/[run]/logs/ACTIVITY.log` —
the last 10 entries show current state faster than anything else.

**2. Which ticket is yours?**

Check `runs/[run]/README.md` → Ticket Status table. Find your persona's tickets.
The ones marked `In Progress` are yours. If none are `In Progress`, check `Backlog`
for the next unstarted ticket assigned to your persona.

**3. What must exist before you can start?**

Each ticket has entry conditions (listed in the Phase sections below). If an entry
condition is not met, do not start — document the block in `ACTIVITY.log` and
escalate to Kostya.

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

## Run Initialisation (do this once, before PREP work begins)

**Who:** Kostya (or Alex if Kostya is unavailable)
**When:** Before AXM-02 starts. Takes < 10 minutes.

### Step 0 — Kostya Pre-flight Checklist

Confirm these operational facts before touching the repo. Missing any one of these
will stop the clock during the run.

```
[ ] PDI URL:              https://<instance>.service-now.com
[ ] PDI admin username:   admin
[ ] PDI admin password:   <confirm in password manager — do NOT store in repo>
[ ] PDI vendor prefix:    query sys_properties (glide.appcreator.company.code)
[ ] now-sdk auth alias:   confirm with: now-sdk auth --list → correct alias starred
[ ] Jira site URL:        https://<site>.atlassian.net  (NOT assumed from username)
[ ] Jira project key:     AXM (confirm project exists)
[ ] Jira API token:       confirm valid (test: GET /rest/api/3/myself → 200)
[ ] Jira account email:   confirm matches the API token owner
[ ] Claude API key:       confirm in SN Credential Store on PDI (not shell env)
[ ] Git remote:           confirm push access: git push --dry-run
[ ] MCP servers:          if Jira MCP configured, restart Claude Code session to activate
```

If any item is red before the clock starts: stop. Fix it. The hackathon cannot
absorb a 20-minute credential hunt at hour zero.

### Step 1 — Create Run Folder Structure

```bash
# 1. Create folder structure
mkdir -p runs/[run]/{logs,ideation,docs/decisions,personas,pitch,app}

# 2. Copy log templates
cp playbook/log-templates/ACTIVITY.log  runs/[run]/logs/ACTIVITY.log
cp playbook/log-templates/DECISIONS.md  runs/[run]/logs/DECISIONS.md
cp playbook/log-templates/HANDOVERS.md  runs/[run]/logs/HANDOVERS.md

# 3. Create persona files (required — empty stubs, personas fill them in)
for p in alex sam morgan jordan casey riley; do
  cat > runs/[run]/personas/$p.md << EOF
# $p — Session Log — Run [run]

## Completed
(none yet)

## In Progress
(none yet)

## Blockers
None
EOF
done

# 4. Create README (ticket IDs filled in after Step 2)
cat > runs/[run]/README.md << 'EOF'
# Run: [run]

## Ticket Status

| Ticket | Summary | Persona | Status | Artifact |
|--------|---------|---------|--------|----------|
| — | Ideation Session | Alex | In Progress | — |
| — | Architecture Doc | Sam | Backlog | — |
| — | UX Wireframe Spec | Morgan | In Progress | — |
| — | Test Case Draft | Casey | In Progress | — |
| — | Pitch Script | Riley | In Progress | — |
| — | PDI Pre-configuration | Jordan | In Progress | — |
| — | Scaffold + Build | Jordan | Backlog | — |

## Key Paths
- Ideation: runs/[run]/ideation/session.md
- Architecture: runs/[run]/docs/architecture.md
- Wireframes: runs/[run]/docs/wireframes.md
- App: runs/[run]/app/ (now-sdk project)
- Logs: runs/[run]/logs/

## PDI
- Instance: https://<instance>.service-now.com
- Scope: x_<prefix>_<appname>  (confirmed after now-sdk init)
- App URL: (populated after first deploy)
EOF

# 5. Seed the activity log
echo "[INIT] $(date -u +%Y-%m-%dT%H:%M:%SZ) | Kostya | Run [run] initialised. Repo: https://github.com/teivasystems/axiom-hackathon" \
  >> runs/[run]/logs/ACTIVITY.log

# 6. Commit
git add runs/[run]/
git commit -m "[INIT] Run [run] infrastructure created"
git push
```

**The logs, persona files, and README must exist before any persona posts their first Jira comment.**

---

### Step 2 — Create All Jira Tickets

Run this immediately after Step 1. All tickets are created with full descriptions
before ideation starts. No persona creates tickets mid-run.

```bash
# Set credentials (one time per shell session)
export JIRA_URL="https://teiva.atlassian.net"
export JIRA_EMAIL="k.bazanov@teivasys.com"
export JIRA_TOKEN="<your-api-token>"
export JIRA_PROJECT="AXM"

# Create all 7 tickets
./playbook/jira/create-tickets.sh [run]

# → prints ticket IDs + a ready-to-paste README table
# Copy the output table into runs/[run]/README.md and commit
```

For dry runs, add `--dry-run` to preview without creating:
```bash
./playbook/jira/create-tickets.sh [run] --dry-run
```

Ticket descriptions: `playbook/jira/ticket-descriptions.md`
Creation script:     `playbook/jira/create-tickets.sh`

**Do not start ideation until all 7 tickets exist in Jira with full descriptions.**
The ideation ticket being In Progress is how Alex knows to begin.

---

## Log Files — What They Are and Who Writes Them

Three log files live at `runs/[run]/logs/`. Every persona writes to them.
They are the authoritative trail when Jira or a session context is unavailable.

### `ACTIVITY.log` — the running heartbeat

One line per event. Append-only. Written by every persona at every meaningful action.

**Format:**
```
[TAG] YYYY-MM-DDTHH:MM:SSZ | Persona | Description | Refs
```

**Tags:**

| Tag            | Used when                                                    |
|----------------|--------------------------------------------------------------|
| `[START]`      | Persona begins work on a ticket                              |
| `[DONE]`       | Ticket or sub-task completed                                 |
| `[HANDOVER]`   | Handover posted to Jira and HANDOVERS.md                     |
| `[BLOCKER]`    | Blocker raised                                               |
| `[UNBLOCK]`    | Blocker resolved                                             |
| `[DECISION]`   | Decision recorded in DECISIONS.md                            |
| `[COMMIT]`     | Significant git commit (build milestones only)               |
| `[DEPLOY]`     | Successful `npm run deploy`                                  |
| `[VALIDATE]`   | Casey passes or fails a test case                            |
| `[SCOPE]`      | Scope change approved                                        |
| `[INIT]`       | Run initialised                                              |
| `[SUBMIT]`     | Submission action taken                                      |
| `[MILESTONE]`  | Phase transition or named checkpoint                         |
| `[CHECKPOINT]` | **State snapshot — written at every handover. Read this first when recovering.** |

**`[CHECKPOINT]` format — one line, written immediately after every `[HANDOVER]`:**
```
[CHECKPOINT] YYYY-MM-DDTHH:MM:SSZ | <Persona> | Phase: <PREP/BUILD/PITCH/SUBMIT> | Done: <what just completed> | Next: <who does what> | Blockers: <None or description>
```

**To recover after any session drop — run this one command:**
```bash
grep "\[CHECKPOINT\]" runs/[run]/logs/ACTIVITY.log | tail -1
```
→ That single line tells you phase, last completed item, next action, and open blockers.
Full session recovery in under 30 seconds.

**Example entries:**
```
[START]      2026-05-19T09:00:00Z | Alex    | AXM-IDEATION started
[DONE]       2026-05-19T09:45:00Z | Alex    | AXM-IDEATION complete | runs/[run]/ideation/session.md
[HANDOVER]   2026-05-19T09:46:00Z | Alex    | → Sam/Morgan/Casey/Riley | HANDOVERS.md#H-001
[CHECKPOINT] 2026-05-19T09:46:00Z | Alex    | Phase: PREP | Done: AXM-IDEATION | Next: Sam AXM-ARCH + Morgan/Casey/Riley parallel | Blockers: None
[START]      2026-05-19T09:50:00Z | Sam     | AXM-ARCH started
[BLOCKER]    2026-05-19T10:20:00Z | Jordan  | PDI plugin missing: Flow Designer | Escalated to Kostya
[DECISION]   2026-05-19T10:35:00Z | Kostya  | IntegrationHub workaround approved | DECISIONS.md#D-001
[UNBLOCK]    2026-05-19T10:36:00Z | Jordan  | AXM-PDI unblocked — continuing
[COMMIT]     2026-05-19T11:00:00Z | Jordan  | Tables deployed | sha: a1b2c3d
[MILESTONE]  2026-05-19T11:05:00Z | Jordan  | BUILD Hour 2: tables ✅ Script Includes ✅
[HANDOVER]   2026-05-19T13:30:00Z | Jordan  | → Casey (validation) | HANDOVERS.md#H-004
[CHECKPOINT] 2026-05-19T13:30:00Z | Jordan  | Phase: BUILD | Done: Jordan handoff 4/5 features | Next: Casey validation | Blockers: None
```

**Rules:**
- Write the entry **at the moment the event happens**, not retrospectively.
- `[CHECKPOINT]` is written immediately after every `[HANDOVER]` — same persona, same moment.
- Keep each line under 200 characters (use refs for detail).
- Never delete or edit existing entries. Append corrections as new `[CORRECTION]` lines.
- Commit the log alongside every significant git commit.

---

### `DECISIONS.md` — the decision register

Every decision that changes scope, architecture, or process is recorded here.
This is the document Kostya and Alex read when something is re-litigated.

**Format:** see `playbook/log-templates/DECISIONS.md`

Decisions are numbered `D-001`, `D-002`, etc. in order of occurrence.

**Who writes it:** The persona who *receives* the decision posts it (usually Jordan or Sam).
Kostya confirms by replying to the Jira comment with `[DECISION LOGGED] D-NNN`.

---

### `HANDOVERS.md` — the full handover archive

Every handover note is copied here in addition to being posted to Jira.
This is the single source of truth when Jira comments are hard to scan.

**Format:** see `playbook/log-templates/HANDOVERS.md`

Handovers are numbered `H-001`, `H-002`, etc. in order of occurrence.

**Who writes it:** The *sending* persona appends their handover note immediately
after posting it to Jira.

---

## Phase 1 — PREP

### AXM-02 — Ideation Session (Alex)

**Entry conditions:**

* Infrastructure complete (AXM-11, AXM-15 done)
* Jira and Confluence set up (AXM-14)
* Hackathon categories and judge criteria known
* `runs/[run]/logs/` initialised (see Run Initialisation above)

**What Alex does:**

1. Opens session with scoring framework and brief to each persona
2. Collects proposals: Sam (2), Morgan (2), Riley (2)
3. Evaluates against scoring framework
4. Decides: one app, locked scope, handover instructions for all personas
5. Writes decision as structured artifact

**Detailed steps:** see `process/ideation.md`

**Output:** `runs/[run]/ideation/session.md`

**Log entries to write:**
```
[START]  | Alex | AXM-02 Ideation started
[DONE]   | Alex | AXM-02 complete | runs/[run]/ideation/session.md
[HANDOVER] | Alex | → Sam (AXM-03) | Jira: AXM-02 comment#N | HANDOVERS.md#H-001
```

**Jira actions:**

* On start: transition AXM-02 → `In Progress`, post comment:

```
[AXM-02] Starting — Ideation session open.
Entry conditions met: AXM-11 ✅  AXM-15 ✅  AXM-14 ✅
Expected output: runs/[run]/ideation/session.md
Activity log: https://github.com/teivasystems/axiom-hackathon/blob/main/runs/[run]/logs/ACTIVITY.log
```

* On complete: transition AXM-02 → `Done`, post handover comment (see template below),
  paste output file URL into Artifact Link field.
* Open new tickets from decision: AXM-03 (Sam), AXM-04 (Morgan), AXM-05 (Casey),
  AXM-06 (Riley) — set status `In Progress` for Sam, `Backlog` for the rest.

**Jira handover comment (AXM-02 → AXM-03):**

```
[AXM-02] Complete — handing to Sam (AXM-03)

FROM:          Alex
TO:            Sam
TICKET:        AXM-03
STATUS:        Ready to start — all entry conditions met

ARTIFACT:      runs/[run]/ideation/session.md
ARTIFACT_URL:  https://github.com/teivasystems/axiom-hackathon/blob/main/runs/[run]/ideation/session.md
COMMIT:        [short SHA — run: git log --oneline -1]
BRANCH:        main

RELATED_FILES:
  - playbook/WORKFLOW.md (Section AXM-03)
  - process/architecture.md (Sam's detailed steps)

SUMMARY:
  App selected: [name]. Scope locked — see Step 5 of ideation/session.md.
  Sam's task: produce architecture doc. Confirm table schema, Flow Designer
  triggers, Claude integration pattern, and build sequence.

OPEN ITEMS:
  - [List any PDI capability questions Alex flagged]

DEPENDENCIES:
  Morgan starts AXM-04 ONLY after AXM-03 is complete.
  Jordan starts AXM-08 ONLY after AXM-03 is complete.

HANDOVER LOG: https://github.com/teivasystems/axiom-hackathon/blob/main/runs/[run]/logs/HANDOVERS.md
ACTIVITY LOG: https://github.com/teivasystems/axiom-hackathon/blob/main/runs/[run]/logs/ACTIVITY.log
```

---

### AXM-03 — Architecture Doc (Sam)

**Entry conditions:**

* AXM-02 complete — `runs/[run]/ideation/session.md` exists and is committed
* App name, scope, and accepted/rejected features are clear

**What Sam does:**

1. Reads ideation/session.md fully — especially Alex's scope lock
2. Assesses every in-scope feature for platform feasibility
3. Designs table schema, flow triggers, Claude integration, Script Includes
4. Writes build sequence Jordan will follow exactly
5. Flags every risk and every open question explicitly

**Required sections:** all 11 sections — see `process/architecture.md`

**Output:** `runs/[run]/docs/architecture.md`

**Log entries to write:**
```
[START]    | Sam | AXM-03 Architecture started
[DONE]     | Sam | AXM-03 complete | runs/[run]/docs/architecture.md
[HANDOVER] | Sam | → Jordan (AXM-08) and Morgan (AXM-04) | HANDOVERS.md#H-002
```

**Jira actions:**

* On start: transition AXM-03 → `In Progress`, post comment:

```
[AXM-03] Starting — Architecture doc.
Entry conditions met: ideation/session.md ✅
Source artifact: https://github.com/teivasystems/axiom-hackathon/blob/main/runs/[run]/ideation/session.md
Will flag scope concerns before completing. Expected output: runs/[run]/docs/architecture.md
```

* If a scope item is unbuildable:

```
[BLOCKER] AXM-03 blocked — scope conflict.
Item: [feature name]
Constraint: [exact technical reason it cannot be built as specified]
Tried: [what was investigated]
Options: (A) cut feature  (B) defer  (C) simplify to [alternative]
Decision needed from: Kostya / Alex
Blocking: AXM-03 and AXM-04
```

  Then: transition AXM-03 → `Blocked`, append `[BLOCKER]` to ACTIVITY.log.

* On complete: transition AXM-03 → `Done`, update Artifact Link field.
  Transition AXM-04 from `Backlog` → `In Progress`.
  Post handover comment:

```
[AXM-03] Complete — handing to Jordan (AXM-08) and Morgan (AXM-04)

FROM:          Sam
TO:            Jordan (primary), Morgan (secondary)
TICKETS:       AXM-08 (Jordan), AXM-04 (Morgan)
STATUS:        Complete — both tickets now unblocked

ARTIFACT:      runs/[run]/docs/architecture.md
ARTIFACT_URL:  https://github.com/teivasystems/axiom-hackathon/blob/main/runs/[run]/docs/architecture.md
COMMIT:        [short SHA]
BRANCH:        main

RELATED_FILES:
  - runs/[run]/ideation/session.md  (scope source — read if anything is ambiguous)
  - process/architecture.md         (Sam's detailed process notes)
  - playbook/WORKFLOW.md            (Jordan: Section AXM-08 | Morgan: Section AXM-04)

SUMMARY:
  [App name] architecture complete. [N] custom tables. Claude integration via
  IntegrationHub REST. Build sequence in Section 9 — Jordan must follow it exactly.
  [Any plugin dependency that needs PDI confirmation before build.]

OPEN ITEMS:
  - [List any open questions or risks Jordan and Morgan need to act on]
  - Jordan: confirm [plugin name] is available on PDI before starting tables

DEPENDENCIES:
  Jordan: do not build until this doc is fully read.
  Morgan: data available for display is in Section 7.

HANDOVER LOG: https://github.com/teivasystems/axiom-hackathon/blob/main/runs/[run]/logs/HANDOVERS.md
DECISIONS LOG: https://github.com/teivasystems/axiom-hackathon/blob/main/runs/[run]/logs/DECISIONS.md
```

---

### AXM-04 — UX Wireframe Spec (Morgan)

**Entry conditions:**

* AXM-03 complete — `runs/[run]/docs/architecture.md` exists
* Section 7 (UI components) of architecture doc is readable
* AXM-13 (Figma) is set up

**What Morgan does:**

1. Reads architecture doc Section 7 — understand what data is available
2. Designs every screen: layout, components, labels, CTAs, empty states, error states
3. Specifies the demo storyboard: what judges see in 90 seconds
4. Marks where Claude-generated content appears and how it is visually distinguished

**Output:** `runs/[run]/docs/wireframes.md`

**Log entries to write:**
```
[START]    | Morgan | AXM-04 Wireframe spec started
[DONE]     | Morgan | AXM-04 complete | runs/[run]/docs/wireframes.md + Figma URL
[HANDOVER] | Morgan | → Jordan (unblocks UI build) | HANDOVERS.md#H-003
```

**Jira actions:**

* On start: transition AXM-04 → `In Progress`, post comment:

```
[AXM-04] Starting — UX wireframe spec.
Entry conditions met: architecture.md ✅  Figma ✅
Source artifact: https://github.com/teivasystems/axiom-hackathon/blob/main/runs/[run]/docs/architecture.md
Expected output: runs/[run]/docs/wireframes.md + Figma link
```

* On complete: transition AXM-04 → `Done`, update Artifact Link. Post handover comment:

```
[AXM-04] Complete — handing to Jordan (UI build, after flows are tested)

FROM:          Morgan
TO:            Jordan
TICKET:        AXM-04 → unblocks UI build in BUILD phase
STATUS:        Complete

ARTIFACT:      runs/[run]/docs/wireframes.md
ARTIFACT_URL:  https://github.com/teivasystems/axiom-hackathon/blob/main/runs/[run]/docs/wireframes.md
FIGMA:         [Figma file URL]
COMMIT:        [short SHA]
BRANCH:        main

RELATED_FILES:
  - runs/[run]/docs/architecture.md Section 7  (data contract — do not deviate)
  - playbook/WORKFLOW.md Section AXM-04

SUMMARY:
  [N] screens specified. Figma file mirrors these exactly. The centrepiece
  interaction is [describe demo wow moment]. Claude output appears on [screen
  name] as [visual treatment — e.g. distinct card, coloured border].

OPEN ITEMS:
  - [Any screen where Jordan must make a call]

DEPENDENCIES:
  Jordan: implement exactly as spec'd. Do not redesign without flagging to Morgan.
  Jordan: UI build cannot start before flows are tested (BUILD hour 4:00).

HANDOVER LOG: https://github.com/teivasystems/axiom-hackathon/blob/main/runs/[run]/logs/HANDOVERS.md
```

---

### AXM-05 — Test Case Draft (Casey)

**Entry conditions:**

* AXM-02 complete — Alex's scope lock is the acceptance criteria
* Can be started in parallel with AXM-03

**What Casey does:**

1. Reads Alex's scope lock from ideation/session.md
2. Writes one test case per in-scope feature
3. Includes happy path AND at least one edge/negative case per feature
4. Flags anything requiring infrastructure confirmation

**Output:** `runs/[run]/personas/casey.md`

**Log entries to write:**
```
[START] | Casey | AXM-05 Test case draft started
[DONE]  | Casey | AXM-05 complete — [N] test cases written | runs/[run]/personas/casey.md
```

**Jira actions:**

* On start: transition AXM-05 → `In Progress`.
* On complete: transition AXM-05 → `Done`. Post comment:

```
[AXM-05] Complete — test cases ready. [N] cases written covering [N] features.
Artifact: https://github.com/teivasystems/axiom-hackathon/blob/main/runs/[run]/personas/casey.md
Note: execution blocked until Jordan hands off happy path (BUILD ~hour 5:30).
Infrastructure flags: [list any plugin/PDI preconditions Casey is watching]
```

---

### AXM-06 — Pitch Outline (Riley)

**Entry conditions:**

* AXM-02 complete — app name, problem statement, meta-story connection known
* Sections 1 and 3 can be started in parallel with AXM-03

**What Riley does:**

1. Reads Alex's decision including draft elevator pitch and meta-story note
2. Writes Sections 1 and 3 (problem + team story, vision + close) — finalisable now
3. Writes Section 2 as a placeholder — updated after Casey validates the build
4. Evaluates against the pitch scoring checklist in `process/pitch.md`

**Output:** `runs/[run]/pitch/script_draft.md`

**Log entries to write:**
```
[START] | Riley | AXM-06 Pitch outline started (Sections 1 + 3)
[DONE]  | Riley | AXM-06 Sections 1+3 complete, Section 2 placeholder | runs/[run]/pitch/script_draft.md
```

**Jira actions:**

* On start: transition AXM-06 → `In Progress`.
* On Sections 1+3 done: transition AXM-06 → `In Review` (not Done — Section 2 pending). Post:

```
[AXM-06] In Review — Sections 1 and 3 complete. Section 2 placeholder written.
Artifact: https://github.com/teivasystems/axiom-hackathon/blob/main/runs/[run]/pitch/script_draft.md
Awaiting: Casey's validation log (BUILD ~hour 6:30) to finalise Section 2.
```

* On Section 2 finalised (BUILD phase, hour 7): transition AXM-06 → `Done`.

---

### AXM-07 — PDI Pre-configuration (Jordan)

**Entry conditions:**

* AXM-11 and AXM-15 complete
* Can run in parallel with AXM-02, AXM-03

**What Jordan does:**

1. Confirms plugins available on the PDI (check against Sam's architecture when available)
2. Verifies now-sdk build/deploy cycle end-to-end
3. Confirms `application was null` error is not reproducible (or documents workaround)
4. Confirms ATF approach

**Output:** Checklist updated in `runs/[run]/personas/jordan.md`

**Log entries to write:**
```
[START]  | Jordan | AXM-07 PDI pre-config started
[DEPLOY] | Jordan | AXM-07 build/deploy verified clean | PDI: [instance URL]
[DONE]   | Jordan | AXM-07 complete | runs/[run]/personas/jordan.md
```

---

### AXM-08 — Component Scaffolding (Jordan)

**Entry conditions:**

* AXM-03 complete — architecture doc exists and is committed
* AXM-07 complete — PDI confirmed working

**What Jordan does:**

1. Reads architecture doc fully — Sections 2, 6, and 9 (schema, Script Includes, build sequence)
2. Creates empty Fluent and server file shells — no logic, just structure
3. Writes `ClaudeIntegration.ts` shell with JSDoc header
4. Confirms all file names match `sys_name` values in Sam's schema

**Output:** Scaffolded files in `src/fluent/` and `src/server/`

**Log entries to write:**
```
[START]  | Jordan | AXM-08 Scaffolding started
[COMMIT] | Jordan | AXM-08 scaffold complete — [N] shells created | sha: [SHA]
[DEPLOY] | Jordan | AXM-08 scaffold deployed clean | PDI: [instance URL]
[DONE]   | Jordan | AXM-08 complete | runs/[run]/personas/jordan.md updated
```

**Jira actions:**

* On complete: transition AXM-08 → `Done`. Post comment:

```
[AXM-08] Complete — scaffold deployed to hackathon PDI.
Artifact: https://github.com/teivasystems/axiom-hackathon/blob/main/runs/[run]/personas/jordan.md
Commit: https://github.com/teivasystems/axiom-hackathon/commit/[SHA]
Files scaffolded: [list src/ paths]
PDI instance: [URL — confirm app is visible in System Applications → My Company Applications]
Blocked items: [anything that could not be scaffolded and why]
```

---

## Phase 2 — BUILD

The 8-hour clock. Jordan is primary. Everyone else is on call.

### State at clock start

Before the first commit, Jordan confirms:

```
[ ] now-sdk auth --use axiom-hackathon    ← switched to hackathon instance
[ ] now-sdk auth --list                   ← axiom-hackathon is default
[ ] npm run build                         ← clean (zero errors)
[ ] npm run deploy                        ← scaffold is on hackathon instance
[ ] PDI: app visible in System Applications → My Company Applications
[ ] Credential: Claude API key confirmed in SN Credential Store
[ ] CLAUDE.md: architecture and wireframe paths point to correct run folder
[ ] Sam's architecture doc: fully read — Section 9 build sequence memorised
[ ] Morgan's wireframe spec: fully read — every screen understood
[ ] Casey's test cases: skimmed — know what the acceptance criteria are
[ ] ACTIVITY.log: entry posted — [MILESTONE] BUILD clock started
```

If any item is red: stop. Fix it. Do not begin the build loop until the environment
is confirmed.

**Log entry at clock start:**
```
[MILESTONE] YYYY-MM-DDTHH:MM:SSZ | Jordan | BUILD phase clock started — environment confirmed clean
```

### Jordan's mandatory build loop

For every single component, without exception:

```
1. Write or modify source file (src/fluent/ or src/server/)
2. npm run build         ← read ENTIRE output. Fix all errors before step 3.
3. npm run deploy        ← read ENTIRE output. Fix all errors before step 4.
4. Validate on PDI       ← open the browser. Check the record, flow, or script.
5. git commit            ← [JORDAN] feat: <what was built> (AXM-XX)
6. Update jordan.md      ← move item from "In Progress" to "Completed"
7. Append to ACTIVITY.log ← [COMMIT] + [DEPLOY] entries
```

Never commit broken code. Never skip step 4. Never proceed with an unresolved error.

### Hour checkpoint log entries

Jordan posts these at each hour mark — they are the heartbeat Kostya reads remotely:

```
[MILESTONE] HH:MM | Jordan | Hour 2 checkpoint: tables ✅ / Script Includes ✅ — on track
[MILESTONE] HH:MM | Jordan | Hour 4 checkpoint: flows ✅ — Claude call tested independently ✅
[MILESTONE] HH:MM | Jordan | Hour 5:30 checkpoint: UI [N/N screens] — handing to Casey
```

If behind:
```
[MILESTONE] HH:MM | Jordan | Hour 4 checkpoint: BEHIND — [flow X] not complete. Flagging to Kostya.
```

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
2. **Document in ACTIVITY.log first:**
   ```
   [BLOCKER] HH:MM | Jordan | [error in one line] | AXM-XX | Escalating to Kostya
   ```
3. **Post Jira comment:**
   ```
   [BLOCKER] [error description]
   Tried: [what was attempted — be specific]
   Blocked: [what cannot proceed]
   Decision needed from: Kostya / Alex
   Activity log: https://github.com/teivasystems/axiom-hackathon/blob/main/runs/[run]/logs/ACTIVITY.log
   ```
4. **Escalate immediately** to Kostya. A 15-minute blocker becomes a 2-hour one if it sits.
5. **Kostya decides:** cut / defer / simplify. Posts decision to Jira.
6. **Record decision in DECISIONS.md** (see format in template). Post `[DECISION LOGGED] D-NNN` in Jira.
7. **Alex confirms** if the decision changes in-scope items.
8. **Jordan posts:**
   ```
   [UNBLOCKED] Decision: [what was decided — ref D-NNN in DECISIONS.md]. Continuing.
   ```
   And appends to ACTIVITY.log:
   ```
   [UNBLOCK]   HH:MM | Jordan | [blocker] resolved — D-NNN | Continuing AXM-XX
   [DECISION]  HH:MM | Jordan | D-NNN logged | runs/[run]/logs/DECISIONS.md
   ```

### Platform fallback decision protocol

When a PDI lacks a plugin or capability that the architecture depends on (e.g., IntegrationHub not installed, ATF plugin inactive, Service Portal missing):

1. **Detect early.** Run the PREP plugin checklist (`playbook/skills/platform.md`) before build night. Discovering gaps mid-build wastes time under the clock.
2. **Stop — do not implement a workaround silently.** A silent fallback is a scope change. Alex must know.
3. **Log the gap immediately:**
   ```
   [BLOCKER] HH:MM | Jordan | <plugin> not available on PDI — arch assumes it | AXM-XX | Escalating to Alex
   ```
4. **State the exact decision needed:** "IntegrationHub REST spoke is not installed. Architecture spec uses IH REST step for Claude API. Options: (a) request IH installation, (b) approve sn_ws.RESTMessageV2 fallback in ClaudeDigest SI, (c) cut Claude integration from scope."
5. **Wait for Alex's call.** Do not begin implementing option (b) while waiting — the decision may be (c).
6. **If Alex approves fallback:** document it as a DECISION, update architecture.md to match the actual implementation, then build. No surprises for Casey's test cases.

**Common approved fallbacks:**
| Missing | Approved fallback |
|---|---|
| IntegrationHub REST spoke | `sn_ws.RESTMessageV2` in Script Include, credential read via `sn_cc.ConnectionCredentialsUtil` |
| ATF plugin inactive | Skip ATF — do not build test files that cannot run |
| Service Portal not installed | Confirm with Morgan — may switch to UI Builder or cut the widget scope |

### Scope triage if behind

| Hour check | If behind                          | Action                                              |
|------------|------------------------------------|-----------------------------------------------------|
| Hour 2     | Tables or Script Includes incomplete | Drop one Script Include feature — flag to Alex    |
| Hour 4     | Flows not tested                   | Cut lowest-priority flow — confirm with Alex        |
| Hour 5:30  | UI incomplete                      | Cut lowest-priority screen — confirm with Morgan which one |
| Hour 6     | Happy path not running             | Run Casey's test on core flow only. Everything else → known issues |

**Do not add features after hour 4.** If ahead of schedule: polish existing features.

Every scope cut is recorded in DECISIONS.md and ACTIVITY.log with a `[SCOPE]` tag.

### Handover (Jordan → Casey) at hour 5:30

**Log entry:**
```
[HANDOVER] HH:MM | Jordan | → Casey (BUILD validation) | HANDOVERS.md#H-NNN
```

**Jira comment on BUILD ticket:**

```
[BUILD] Handing to Casey — validation ready (or: partial — see below)

FROM:          Jordan
TO:            Casey
TICKET:        BUILD validation (AXM-05 execution)
STATUS:        Ready for validation [or: Partially ready — [feature X] deferred]

PDI INSTANCE:  [https://instance.service-now.com]
CREDENTIALS:   [how Casey logs in — or reference to secure store]
DEMO USER:     [username / role to use for testing]

ARTIFACT:      runs/[run]/personas/jordan.md (build log — validated features listed)
ARTIFACT_URL:  https://github.com/teivasystems/axiom-hackathon/blob/main/runs/[run]/personas/jordan.md
LAST_COMMIT:   [SHA] https://github.com/teivasystems/axiom-hackathon/commit/[SHA]
BRANCH:        main

RELATED_FILES:
  - runs/[run]/personas/casey.md   (Casey's test cases — run these)
  - runs/[run]/docs/architecture.md Section 9  (build sequence — explains what was built)
  - runs/[run]/logs/DECISIONS.md   (scope changes — explains what was cut and why)

SUMMARY:
  Core happy path deployable. [N] of [N] in-scope features implemented.
  Deferred: [list + reason for each]. Jordan available for hotfixes during hour 6.

OPEN ITEMS:
  - [Anything Casey should not test — known broken or deliberately deferred]
  - [Any test that requires a specific data state to be set up first]

DEPENDENCIES:
  Casey must complete validation and sign off before Riley records Section 2.

HANDOVER LOG: https://github.com/teivasystems/axiom-hackathon/blob/main/runs/[run]/logs/HANDOVERS.md
ACTIVITY LOG: https://github.com/teivasystems/axiom-hackathon/blob/main/runs/[run]/logs/ACTIVITY.log
```

---

### Casey's validation (hour 5:30–6:30)

**Entry conditions:**

* Jordan has handed off — happy path is deployable
* Casey's test cases (AXM-05) exist and are committed

**What Casey does:**

1. Runs every test case against the live PDI
2. Records Pass / Fail / Deferred for each (directly in casey.md)
3. Documents actual vs expected result for failures
4. Works with Jordan on immediate fixes during hour 6 polish
5. Produces validation log and signed-off feature list

**Log entries Casey writes:**
```
[VALIDATE] HH:MM | Casey | TC-001 [feature name] — PASS
[VALIDATE] HH:MM | Casey | TC-004 [feature name] — FAIL: [actual vs expected in one line]
[VALIDATE] HH:MM | Casey | TC-007 [feature name] — DEFERRED (feature cut per D-NNN)
[MILESTONE] HH:MM | Casey | Validation complete. [N] pass / [N] fail / [N] deferred
```

**Casey does NOT sign off on untested features.** "It probably works" is not validated.

**Handover (Casey → Riley) at hour 6:30:**

**Log entry:**
```
[HANDOVER] HH:MM | Casey | → Riley (AXM-06 Section 2 update) | HANDOVERS.md#H-NNN
```

**Jira comment on AXM-06:**

```
[AXM-06] Validation complete — handing to Riley (Section 2 update)

FROM:          Casey
TO:            Riley
TICKET:        AXM-06 (Section 2 finalisation)
STATUS:        Validation complete — feature list is final

ARTIFACT:      runs/[run]/personas/casey.md (validation log — Section: Validation Results)
ARTIFACT_URL:  https://github.com/teivasystems/axiom-hackathon/blob/main/runs/[run]/personas/casey.md
COMMIT:        [SHA]
BRANCH:        main

RELATED_FILES:
  - runs/[run]/pitch/script_draft.md  (Riley's current draft — Section 2 is placeholder)
  - runs/[run]/logs/DECISIONS.md      (scope cuts — features Riley cannot pitch)
  - runs/[run]/logs/ACTIVITY.log      (full build trail if Riley needs context)

VALIDATED FEATURES (Riley may pitch these):
  - [feature 1]
  - [feature 2]
  - [feature N]

DEFERRED FEATURES (label "(future)" or omit):
  - [feature A] — reason: [one line]

HAPPY PATH: [PASS / FAIL + one-line note if fail]

OPEN ITEMS:
  Riley may only pitch validated features. Deferred features must be labelled
  "(if live)" or omitted entirely. No exceptions.

DEPENDENCIES:
  Riley must update Section 2 before Kostya records at hour 7:15.

HANDOVER LOG: https://github.com/teivasystems/axiom-hackathon/blob/main/runs/[run]/logs/HANDOVERS.md
```

---

## Phase 3 — PITCH

### Riley's Section 2 update (hour 7:00–7:15)

**Entry conditions:**

* Casey's validation log exists and is committed — validated feature list is final
* Sections 1 and 3 of script are already written (done in PREP)

**What Riley does:**

1. Reads Casey's validation log (casey.md, Validation Results section)
2. Reads DECISIONS.md — knows what was cut and why
3. Updates Section 2 (demo narration) to match actual live demo sequence
4. Removes or labels any feature Casey has not validated
5. Hands final script to Kostya

**Output:** Updated `runs/[run]/pitch/script_draft.md`

**Log entries:**
```
[START]    | Riley | Section 2 update started — working from casey.md validation log
[DONE]     | Riley | AXM-06 Section 2 final | runs/[run]/pitch/script_draft.md
[HANDOVER] | Riley | → Kostya (recording) | HANDOVERS.md#H-NNN
```

**Jira comment on AXM-09:**

```
[AXM-06] Section 2 final — handing to Kostya for recording

FROM:          Riley
TO:            Kostya
TICKET:        AXM-09 (recording)
STATUS:        Script ready — all three sections final

ARTIFACT:      runs/[run]/pitch/script_draft.md
ARTIFACT_URL:  https://github.com/teivasystems/axiom-hackathon/blob/main/runs/[run]/pitch/script_draft.md
COMMIT:        [SHA]
BRANCH:        main

RELATED_FILES:
  - runs/[run]/personas/casey.md   (validated feature list — what demo shows)

SUMMARY:
  Full script final. Sections 1 and 3 unchanged from PREP. Section 2 reflects
  validated demo flow only. [N]-minute runtime.

OPEN ITEMS:
  - [Timing notes or emphasis instructions for Kostya's delivery]
  - [Any slide / screen transitions to note]

DEPENDENCIES:
  Kostya records immediately. Casey validates video plays through before upload.

HANDOVER LOG: https://github.com/teivasystems/axiom-hackathon/blob/main/runs/[run]/logs/HANDOVERS.md
```

### Kostya records (hour 7:15–7:30)

1. Record Section 2 in HeyGen (narration + screen recording overlay)
2. Assemble all three sections in HeyGen project
3. Export and confirm video plays through completely
4. Upload to submission platform or host for URL submission

**Log entries:**
```
[MILESTONE] HH:MM | Kostya | HeyGen recording complete — video assembled
[MILESTONE] HH:MM | Kostya | Video confirmed playable — handing to Casey + submit
```

---

## Phase 4 — SUBMIT

### Casey + Kostya (hour 7:30–8:00)

**Entry conditions:**

* Video is ready and playable
* App is live on hackathon instance (confirm URL works)
* Casey's validation log is complete

Casey produces:

* Store listing description (max 150 words, problem-first)
* README / judge notes (what to look at, how to demo it)
* Known issues log (honest — do not omit)

Kostya executes:

* Submission form: app name, description, category, team members
* Video upload or URL
* README / documentation upload
* Screenshots upload

**Submission checklist:**

```
[ ] App live on hackathon instance (confirm URL works)
[ ] Submission form filled completely
[ ] Demo video uploaded and playable
[ ] Store listing description attached
[ ] README / judge notes attached
[ ] Known issues documented (not hidden)
[ ] DECISIONS.md committed and pushed
[ ] HANDOVERS.md committed and pushed
[ ] ACTIVITY.log committed and pushed (final [SUBMIT] entry present)
[ ] Jira: all AXM tickets transitioned to Done
[ ] Git: all changes committed and pushed to main
[ ] Screenshot the submission confirmation page
```

Casey signs off on the submission. If anything in the checklist is unchecked at 7:55 — Casey makes the call on what to drop to hit the deadline.

**Final log entry (Casey writes this):**
```
[SUBMIT]    YYYY-MM-DDTHH:MM:SSZ | Casey | Submission confirmed. Screenshot at runs/[run]/submit/confirmation.png
[MILESTONE] YYYY-MM-DDTHH:MM:SSZ | Casey | AXIOM hackathon run [run] complete ✅
```

---

## Jira Ticket Lifecycle

### Status flow

```
Backlog → In Progress → In Review → Done
                ↓
            Blocked  (escalate to Kostya immediately)
```

### What to do at each transition

| Transition             | Who                       | Required actions |
|------------------------|---------------------------|------------------|
| Backlog → In Progress  | Persona starting the work | Post start comment with entry conditions and expected output file path. Write `[START]` to ACTIVITY.log. |
| In Progress → In Review | Persona completing draft  | Post artifact URL + commit SHA. Ask specific reviewer. |
| In Review → Done       | Receiving persona confirms | Post acceptance comment. Transition. Update Artifact Link. Write `[DONE]` to ACTIVITY.log. |
| In Progress → Blocked  | Persona hitting a blocker  | Post `[BLOCKER]` comment. Write `[BLOCKER]` to ACTIVITY.log. Tag Kostya. |
| Blocked → In Progress  | After Kostya decides       | Post `[UNBLOCKED]` comment with decision ref. Write `[UNBLOCK]` + `[DECISION]` to logs. |

### Required Jira fields per ticket

| Field          | Set when                                                                        |
|----------------|---------------------------------------------------------------------------------|
| Persona        | On ticket creation (do not change)                                              |
| Phase          | On ticket creation (PREP / BUILD / PITCH / SUBMIT)                              |
| Artifact Link  | When output file is committed — paste GitHub blob URL                           |
| Handover Note  | On Done transition — paste full handover comment text                           |

### Required content in every Jira handover comment

Every handover comment must include:

```
ARTIFACT_URL:  https://github.com/teivasystems/axiom-hackathon/blob/main/runs/[run]/[path]
COMMIT:        [short SHA]
BRANCH:        main
RELATED_FILES: [at minimum: the docs the receiver must read before starting]
HANDOVER LOG:  https://github.com/teivasystems/axiom-hackathon/blob/main/runs/[run]/logs/HANDOVERS.md
ACTIVITY LOG:  https://github.com/teivasystems/axiom-hackathon/blob/main/runs/[run]/logs/ACTIVITY.log
```

A handover without direct links is not a handover. The receiver must be able to
click through to everything they need without searching.

### Comment discipline

Every Jira comment starts with `[AXM-XX]` and a status tag:

| Tag             | When to use                                   |
|-----------------|-----------------------------------------------|
| `[AXM-XX] Starting —` | Beginning work, entry conditions met  |
| `[AXM-XX] In progress —` | Interim update during long tasks   |
| `[AXM-XX] Complete —` | Artifact committed, handover posted    |
| `[BLOCKER]`     | Blocking issue raised                         |
| `[CONFLICT]`    | Scope or design conflict requiring decision   |
| `[UNBLOCKED]`   | After Kostya resolves a blocker               |
| `[SCOPE CHANGE]` | Approved scope change, per Alex              |
| `[DECISION LOGGED]` | After writing to DECISIONS.md            |
| `[STATUS CHECK]` | When state is unclear — ask Kostya           |

---

## Handover Protocol (full specification)

Every handover between personas is a structured document. No informal hand-offs.
The structured format — plus direct repo links — is what allows the next persona
to start immediately without re-reading the entire project.

### Full format

```
FROM:          [Persona name]
TO:            [Persona name]
TICKET:        [AXM-XX]
STATUS:        Complete / Blocked / In Review

ARTIFACT:      [repo-relative file path]
ARTIFACT_URL:  [full GitHub blob URL]
COMMIT:        [short SHA — get from: git log --oneline -1]
BRANCH:        main

RELATED_FILES:
  - [path 1] — [one-line note on what the receiver needs from it]
  - [path 2] — [one-line note]

SUMMARY:       [2–3 sentences: what was decided or built, why it matters for the receiver]
OPEN ITEMS:    [Anything the receiver must decide or act on — be explicit]
DEPENDENCIES:  [What the receiver must not start without]

HANDOVER LOG:  https://github.com/teivasystems/axiom-hackathon/blob/main/runs/[run]/logs/HANDOVERS.md
ACTIVITY LOG:  https://github.com/teivasystems/axiom-hackathon/blob/main/runs/[run]/logs/ACTIVITY.log
DECISIONS LOG: https://github.com/teivasystems/axiom-hackathon/blob/main/runs/[run]/logs/DECISIONS.md
```

### Where it goes (three places, in this order)

1. **Append to `runs/[run]/logs/HANDOVERS.md`** — the archive.
   Do this first, get the handover number (H-NNN).
2. **Post to Jira** as a comment on the outgoing ticket.
   Reference the handover number: `HANDOVER LOG: … #H-NNN`.
3. **Append `[HANDOVER]` entry to `ACTIVITY.log`** with the Jira comment link.
4. **If the receiver has a Claude.ai session open:** paste the handover note as
   the first message of their next turn.

### Rules

* **Do not hand off broken work.** Status is Blocked — not Complete.
* **Do not hand off without the artifact committed and pushed.** "I'll push it shortly" is not a handover.
* **Do not hand off with unresolved scope decisions.** Resolve with Alex first, or list explicitly in OPEN ITEMS.
* **Do not accept a handover missing its artifact URL or commit.** Reply: `[AXM-XX] Cannot start — ARTIFACT_URL missing from handover comment.`
* **Do not accept a handover whose artifact is not present at the stated URL.** Reply: `[AXM-XX] Cannot start — [file] not found at [URL]. Sender to confirm commit and push.`

---

## Agent State Awareness and Recovery

When a persona starts a new session in Claude.ai or Claude Code, orient before acting.
This procedure recovers full context in under 60 seconds.

### Orientation — 3 steps, in order

```
1. Read your persona file: runs/[run]/personas/[me].md
   → What did I complete last session?
   → What am I mid-way through?
   → Any open blockers I logged?

2. Get current project state — one command:
   grep "\[CHECKPOINT\]" runs/[run]/logs/ACTIVITY.log | tail -1
   → Phase, last completed item, next action, open blockers — all in one line.
   → If a [BLOCKER] has no matching [UNBLOCK]: do not start, escalate first.

3. Confirm your entry conditions are met (see your operation card)
   → If not met: write [BLOCKER] to ACTIVITY.log and escalate before starting.
   → BUILD phase only: check the hour. If behind, write [MILESTONE BEHIND] and flag Kostya.
```

**That's it. Three reads. Under 60 seconds.**

If after these three steps the state is still unclear — read HANDOVERS.md last entry
addressed to you, then DECISIONS.md. Those are the next most informative sources.

### Recovery order when the 3-step orientation isn't enough

| Priority | Source | Command | Why |
|----------|--------|---------|-----|
| 1st | Last CHECKPOINT | `grep "\[CHECKPOINT\]" runs/[run]/logs/ACTIVITY.log \| tail -1` | Phase + state in one line |
| 2nd | Persona file | `runs/[run]/personas/[me].md` | What I was doing and what I completed |
| 3rd | HANDOVERS.md | last entry addressed to me | Full handover context from sender |
| 4th | DECISIONS.md | `runs/[run]/logs/DECISIONS.md` | Scope changes that override earlier docs |
| 5th | Jira tickets | In Progress tickets | Authoritative status, slower to scan |
| 6th | git log | `git log --oneline -20` | What Jordan actually built and committed |

If after all six the state is still unclear:
```
Post [STATUS CHECK] on the most recent In Progress Jira ticket.
Ask Kostya to confirm. Do not start work until confirmed.
```

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
                    SUBMIT         ← cannot start before video assembled

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

1. Jordan or Sam raises it immediately — not at hour 5
2. Transition relevant ticket → `Blocked`
3. Post `[BLOCKER]` / `[CONFLICT]` comment with: the constraint, why it blocks, 2–3 options
4. Kostya reads and decides
5. Alex confirms if scope changes
6. Kostya posts: `[SCOPE CHANGE] Approved by Alex: [decision]`
7. Record in DECISIONS.md with tag `SCOPE`. Post `[DECISION LOGGED] D-NNN` in Jira.
8. All affected personas note the decision and continue
9. Casey updates test cases. Riley notes in pitch.

### Persona conflict (two personas disagree on a design decision)

1. Each persona states their position briefly in a Jira comment with rationale
2. Escalate: `[CONFLICT] Jordan and Morgan disagree on [topic]. Positions: [A] vs [B]. Kostya to decide.`
3. Kostya posts: `[DECISION] [decision]. Final — not revisited.`
4. Record in DECISIONS.md with tag `DESIGN`.
5. Both personas proceed.

### Clock conflict (Jordan is behind and the plan cannot be saved)

1. Jordan flags at hour mark in ACTIVITY.log: `[MILESTONE BEHIND]` with specifics
2. Jordan flags to Kostya
3. Kostya and Jordan agree on what to cut — Alex confirms scope change
4. Record in DECISIONS.md with tag `SCOPE`. Post `[SCOPE CHANGE]` in Jira.
5. Casey removes tests for cut features (note in casey.md and ACTIVITY.log)
6. Riley notes which features are cut — remove or label "(future)"
7. Everyone continues on reduced scope — no revisiting

---

## Rules That Override Everything Else

These are absolute. No exceptions, no edge cases, no "just this once."

1. **Never commit broken code.** Build green, deploy green, then commit.
2. **Never start a phase without its entry conditions met.** Check before acting.
3. **Never pitch a feature Casey has not validated.** Riley only pitches the validated list.
4. **Never hardcode credentials or API keys.** Claude API key lives in SN Credential Store only.
5. **Never modify OOB tables.** Extend only.
6. **Never make scope decisions unilaterally.** Alex owns scope. All questions go to Alex.
7. **Never hand off broken work.** Status is Blocked, not Complete.
8. **Never hand off without the artifact committed and the URL in the Jira comment.**
9. **Never work around a blocker silently.** Escalate immediately.
10. **Never add features after hour 4.** Polish only.
11. **Always write to ACTIVITY.log at every significant action.** If it is not logged, it did not happen.
12. NEVER transition a ticket to Done, Closed, or Won't Do without first posting
    a closure comment per playbook/skills/jira.md. The comment is mandatory and
    must include WORKED BY, KEY TAKEAWAYS, BLOCKERS HIT, ARTIFACT_URL, and COMMIT.
    Order: closure comment → ACTIVITY.log entry → transition. Not the other way.
13. **The submission deadline is absolute.** If it is not done by hour 8, it does not ship.

---

## Quick Reference — Persona Log Write Points

| Event                      | Tag           | Who writes it    |
|----------------------------|---------------|------------------|
| Starting a ticket          | `[START]`     | That persona     |
| Ticket / sub-task complete | `[DONE]`      | That persona     |
| Handover posted            | `[HANDOVER]`  | Sending persona  |
| Blocker raised             | `[BLOCKER]`   | Blocking persona |
| Blocker resolved           | `[UNBLOCK]`   | Receiving resolution |
| Decision made              | `[DECISION]`  | Persona who posts DECISIONS.md entry |
| Git commit (milestones)    | `[COMMIT]`    | Jordan           |
| Successful deploy          | `[DEPLOY]`    | Jordan           |
| Test result                | `[VALIDATE]`  | Casey            |
| Scope change               | `[SCOPE]`     | Alex or Kostya   |
| Hour checkpoint            | `[MILESTONE]` | Jordan (hourly)  |
| Phase transition           | `[MILESTONE]` | Relevant persona |
| Submission action          | `[SUBMIT]`    | Casey            |

---

*Maintained by Casey — QA & Documentation*
*Last revised: 2026-04-26*
*For changes to this document: raise a Jira comment on AXM-01 tagging Casey.*
