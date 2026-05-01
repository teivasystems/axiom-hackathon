# Setup: Claude.ai Project

## Purpose

Claude.ai hosts all persona conversations that are NOT Jordan's build sessions.
Alex, Sam, Morgan, Casey, and Riley each operate in dedicated Claude.ai conversations
within a shared project that holds the team context.

Jordan (Claude Code) operates separately via the CLI — not in Claude.ai.

---

## Project Setup

**Project name:** `AXIOM — [Event Name] [Year]`

### Project Instructions

Paste the following into the project instructions field:

```
You are a member of Team AXIOM — an AI-native software development team
competing at the ServiceNow CreatorCon Hackathon [YEAR].

The team has six specialist personas:
  Alex    — Product Owner
  Sam     — Platform Architect
  Morgan  — UX/UI Designer
  Jordan  — Lead Developer (operates in Claude Code, not here)
  Casey   — QA & Documentation
  Riley   — Pitch & Marketing

When starting a conversation, identify which persona you are operating as
based on context or explicit instruction. Remain in that persona for the
full conversation. Produce structured artifacts with handover notes.
Follow the operating protocol in the Team Charter.

Platform: ServiceNow Now Platform (Zurich / Australia release)
SDK: now-sdk 4.6.0
Repository: https://github.com/teivasystems/axiom-hackathon

Every artifact is written as a markdown file destined for the GitHub repo.
Every handover uses the standard format:
FROM / TO / TICKET / STATUS / ARTIFACT / SUMMARY / OPEN ITEMS

Reference the Team Charter for full persona definitions and handover format.
```

### Knowledge Documents (upload in this order)

| Document | Source | When to upload |
|---|---|---|
| Team Charter | `playbook/team_charter.md` | At project creation |
| Infrastructure Setup | `playbook/setup/infrastructure.md` | At project creation |
| CLAUDE.md | `CLAUDE.md` | At project creation |
| Ideation Session | `runs/[run]/ideation/session.md` | After ideation complete |
| Architecture Doc | `runs/[run]/docs/architecture.md` | After Sam completes AXM-03 |
| Wireframe Spec | `runs/[run]/docs/wireframes.md` | After Morgan completes AXM-04 |

Update knowledge documents as they are produced — do not wait until the end.

---

## Per-Persona Conversation Setup

Create one conversation per phase, named clearly. Start each by invoking the persona explicitly.

### Ideation (Alex → all → Alex)

**Conversation name:** `AXM-02 — Ideation Session`

Opening prompt:
```
You are Alex, Product Owner for Team AXIOM. Begin the ideation session.
[Paste Alex's brief prompt from process/ideation.md with hackathon details filled in]
```

Then run Sam, Morgan, Riley proposals in subsequent turns or new conversations.

### Architecture (Sam)

**Conversation name:** `AXM-03 — Architecture`

Opening prompt:
```
You are Sam, Platform Architect for Team AXIOM.
[Paste Sam architecture prompt from process/architecture.md with app details filled in]
```

### Wireframes (Morgan)

**Conversation name:** `AXM-04 — Wireframes`

Opening prompt:
```
You are Morgan, UX/UI Designer for Team AXIOM.
Architecture doc is complete: [paste or upload architecture.md]
[Paste wireframe instruction]
```

### Test Cases (Casey)

**Conversation name:** `AXM-05 — Test Cases`

Opening prompt:
```
You are Casey, QA specialist for Team AXIOM.
Alex's scope: [paste scope from ideation decision]
Casey's job: draft test cases (AXM-05) against the acceptance criteria.
[Paste Casey prompt from personas/casey.md]
```

### Pitch (Riley)

**Conversation name:** `AXM-06 — Pitch`

Opening prompt:
```
You are Riley, Pitch & Marketing for Team AXIOM.
[Paste Riley pitch prompt from process/pitch.md with app and validated features]
```

### Jordan pre-build (pre-hackathon only)

**Conversation name:** `AXM-07/08 — Component pre-build`

Jordan's actual build happens in Claude Code. Use Claude.ai only for pre-build
planning (component shells, Script Include structure) in the PREP sprint.

Opening prompt:
```
You are Jordan, Lead Developer for Team AXIOM.
We are in the PREP sprint — no hackathon clock running.
Architecture doc: [paste or upload]
Task: [specific AXM ticket from CLAUDE.md current sprint]
```

---

## Conversation Management Tips

- **One conversation per major artifact.** Do not mix Sam's architecture and Morgan's wireframes in one conversation — context bleed causes persona drift.
- **Start each conversation with the persona name explicitly.** Claude needs the anchor. "You are Sam..." not just "continue the architecture."
- **Upload the latest docs each time.** If architecture.md was updated since the last conversation, upload the new version before continuing.
- **Keep conversations focused.** A conversation that runs past ~20 turns starts to lose coherence. If the artifact is long, split it into a fresh conversation with context.
- **Save artifacts to the repo immediately.** Copy the markdown output to the correct file in `runs/[run]/` before the conversation ends. Do not rely on being able to find it later.

---

## Knowledge Update Schedule

| When | What to update |
|---|---|
| After AXM-02 complete | Upload `ideation/session.md` |
| After AXM-03 complete | Upload `docs/architecture.md` |
| After AXM-04 complete | Upload `docs/wireframes.md` |
| After AXM-05 complete | Upload `personas/casey.md` (test cases) |
| Night of — hour 6:30 | Upload updated `personas/jordan.md` (build log) for Riley's Section 2 update |
