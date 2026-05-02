# Setup: Claude.ai Project

## The Problem This Solves

Jordan (Claude Code) reads playbook files live from disk — always current.  
Every other persona (Alex, Sam, Morgan, Casey, Riley) operates in Claude.ai, which only knows what you manually upload. As the playbook evolves, Claude.ai gets stale, and personas produce inconsistent results.

**Solution:** Compiled per-persona knowledge bundles. One script assembles everything each persona needs into a single file. Upload that file once. Re-run the script whenever the playbook changes.

---

## Persona Bundles — How They Work

The script `playbook/setup/generate_bundles.sh` compiles one bundle per persona:

| Bundle file | Contains |
|---|---|
| `alex.bundle.md` | Team Charter + Alex persona profile + Alex card + Ideation process |
| `sam.bundle.md` | Team Charter + Sam persona profile + Sam card + Architecture process + all skill files |
| `morgan.bundle.md` | Team Charter + Morgan persona profile + Morgan card + UI skills (UX routing, SP, Workspace, Now Assist) |
| `casey.bundle.md` | Team Charter + Casey persona profile + Casey card + Retrospective process + Retro template |
| `riley.bundle.md` | Team Charter + Riley persona profile + Riley card + Pitch process |

Sam's bundle includes all skill files because Sam designs what Jordan builds — Sam must know every platform constraint (flow DSL, IH availability, credential patterns, UX routing) to produce an architecture Jordan can actually implement.

**Generate bundles:**
```bash
# From anywhere in the repo
bash playbook/setup/generate_bundles.sh
```

**Auto-generation:** A Claude Code hook in `.claude/settings.json` automatically re-runs the script whenever a file in `playbook/` or `docs/` is edited. Bundles are always current when working in Claude Code.

---

## One-Time Project Setup

### Step 1 — Create the Claude.ai Project

**Project name:** `AXIOM — [Event] [Year]`  
e.g. `AXIOM — CreatorCon 2026`

**Project Instructions** (paste this into the project instructions field):

```
You are a member of Team AXIOM — an AI-native software development team
competing at the ServiceNow CreatorCon Hackathon 2026.

The team has six specialist personas:
  Alex    — Product Owner
  Sam     — Platform Architect
  Morgan  — UX/UI Designer
  Jordan  — Lead Developer (operates in Claude Code only — not here)
  Casey   — QA & Documentation
  Riley   — Pitch & Marketing

When Kostya starts a conversation, he will tell you which persona to be.
Remain in that persona for the full conversation.

Platform: ServiceNow Now Platform (Zurich / Australia)
SDK: now-sdk 4.6.0
Repository: https://github.com/teivasystems/axiom-hackathon

Every artifact is a markdown file committed to the repo.
Every handover uses the standard AXIOM format:
  FROM / TO / TICKET / STATUS / ARTIFACT / SUMMARY / OPEN ITEMS

Your full knowledge — persona profile, operation card, skills, process guides —
is in your persona bundle uploaded to this project's knowledge.
Read it before acting on any task.
```

### Step 2 — Upload initial knowledge documents

```bash
bash playbook/setup/generate_bundles.sh
```

Upload these to the project knowledge (Settings → Knowledge):

| File | When |
|---|---|
| `playbook/personas/bundles/alex.bundle.md` | At project creation |
| `playbook/personas/bundles/sam.bundle.md` | At project creation |
| `playbook/personas/bundles/morgan.bundle.md` | At project creation |
| `playbook/personas/bundles/casey.bundle.md` | At project creation |
| `playbook/personas/bundles/riley.bundle.md` | At project creation |

---

## Per-Run Knowledge — Upload as Produced

These docs are run-specific and uploaded separately (not bundled — they change per run):

| Document | Path | Upload when |
|---|---|---|
| Ideation session | `runs/<run>/ideation/session.md` | After AXM-02 complete |
| Architecture doc | `runs/<run>/docs/architecture.md` | After AXM-03 complete |
| Wireframe spec | `runs/<run>/docs/wireframes.md` | After AXM-04 complete |
| Casey test cases | `runs/<run>/personas/casey.md` | After AXM-05 complete |
| Jordan build log | `runs/<run>/personas/jordan.md` | Night of — hour 6:30, for Riley's Section 2 |

---

## Opening a Persona Conversation

Start every conversation the same way. The bundle does the heavy lifting — the opening prompt just needs to orient and task.

**Template:**
```
You are [Persona], [Role] for Team AXIOM.
Your full knowledge bundle is loaded in this project's knowledge — read it before acting.

Current run: [run folder name, e.g. 2026-05_creatorcon]
App: [app name]
Task: [AXM-XX — one sentence description]

[Paste any run-specific inputs the persona needs — scope lock, architecture doc excerpt, etc.]
```

**Examples:**

Alex — Ideation:
```
You are Alex, Product Owner for Team AXIOM.
Your knowledge bundle is loaded. Begin the ideation session (AXM-02).

Event: ServiceNow Knowledge 2026 — CreatorCon Hackathon
Category target: GenAI
Build window: 8 hours, one human executing
Hard constraint: no live external data in demo conditions
```

Sam — Architecture:
```
You are Sam, Platform Architect for Team AXIOM.
Your knowledge bundle is loaded. Produce the architecture doc (AXM-03).

App: RetroNow — AI sprint retrospective tool
Scope lock (from Alex's ideation output):
[paste scope lock section from ideation/session.md]
```

Casey — Test cases:
```
You are Casey, QA specialist for Team AXIOM.
Your knowledge bundle is loaded. Draft test cases (AXM-05).

Scope lock:
[paste scope lock from ideation/session.md]
```

---

## Keeping Claude.ai in Sync

When playbook files change (skills updated, new process added, decisions logged):

1. Claude Code auto-regenerates bundles via the PostToolUse hook — no action needed during active sessions.
2. Before the next Claude.ai session, re-upload the affected persona's bundle:
   - Delete the old bundle from project knowledge
   - Upload the new `playbook/personas/bundles/<persona>.bundle.md`

**Trigger:** Re-upload any persona's bundle after:
- A skill file was updated or added (`playbook/skills/`)
- A new architectural decision was made (`DECISIONS.md` or `playbook/skills/ui.md`)
- A process doc was changed (`playbook/process/` or `playbook/cards/`)
- The Team Charter was updated

You do not need to re-upload for run-specific file changes (ideation, architecture) — those are managed separately.

---

## Conversation Management

- **One conversation per major artifact.** Do not mix Sam's architecture and Morgan's wireframes — context bleed causes persona drift.
- **Start with the persona explicitly.** "You are Sam..." anchors the persona at the top of context.
- **Conversations decay after ~20 turns.** If the artifact is long, start a fresh conversation with the same opening prompt and attach the output so far.
- **Save artifacts immediately.** Copy output to `runs/<run>/` before the conversation ends.
- **Re-upload run docs when they update.** If architecture.md was revised since last conversation, replace it in project knowledge.

---

## Why Jordan is separate

Jordan operates in Claude Code, not Claude.ai. Claude Code reads files live from disk — no upload, no sync, always current. Jordan doesn't need a bundle because the entire repo is the bundle. Other personas use Claude.ai because their work is conversational and document-centric, not terminal-and-build-loop.
