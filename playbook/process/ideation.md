# Process: Ideation Session

## Purpose

Select a single app concept that the team can build completely in 8 hours,
demo convincingly in 90 seconds, and win with.

## When to run

After infrastructure is confirmed and before architecture begins.
Alex runs it. Full team participates (Claude.ai conversations or one session per persona).

## Inputs required

- Hackathon categories (e.g. AES, GenAI, 4good, HackZone)
- Known PDI plugin set (confirm what is available on the competition instance)
- Time constraint (usually 8 hours, one human executing)
- Judge scoring criteria (check event site — varies year to year)

## Output

- Decision document: chosen app, rationale, scope lock, tickets opened for each persona
- Saved as `runs/[run]/ideation/session.md`

---

## Session Structure

### Step 1 — Alex opens the brief

Alex sets the scoring framework and tells each persona exactly what to propose.

Scoring dimensions (adjust weights per event):
| Criterion | Question |
|---|---|
| Problem clarity | Can a judge explain the problem in one sentence? |
| Demo-ability | Does the app show something satisfying in 90 seconds? |
| Platform depth | Does it use 3+ Now Platform capabilities in an integrated way? |
| Buildability in 8h | Can Jordan complete it end-to-end with one human executing? |
| AI integration | Does it use Claude functionally, not as decoration? |
| Meta-story fit | Does the concept amplify the "AI team built this" narrative? |
| Category fit | Does it land cleanly in one category? |

Instruction to each persona:
- **Sam:** 2 proposals from a technical feasibility and platform depth lens
- **Morgan:** 2 proposals from a UX quality and demo-ability lens
- **Riley:** 2 proposals from a pitch narrative and audience resonance lens

### Step 2 — Persona proposals

Run one Claude.ai conversation per persona (or one session switching personas).
Each proposal follows this format:

```
### [PERSONA]-IDEA-[N]: [Concept Name]

Problem: [one paragraph — what problem does this solve and for whom?]

What it does: [numbered flow — what happens step by step in the app]

Platform capabilities: [list of Now Platform capabilities used]

Technical risk: Low / Medium / High — [reason]

Buildability: High / Medium / Low — [assessment in 8 hours]

Demo: [what the judge sees in 90 seconds]

Category: [which hackathon category]
```

### Step 3 — Alex decides

Alex reviews all proposals, eliminates with rationale, selects one.

Decision document format:
```
Decision: [App name and one-line description]

Rationale: [numbered list — why this concept wins]

Scope (locked for 8 hours):
  In scope:  [bullet list]
  Out of scope: [bullet list — what was cut and why]

Handover instructions:
  Sam → AXM-03: [what to produce]
  Morgan → AXM-04: [what to produce — starts after AXM-03]
  Jordan → AXM-07/08: [what to prepare]
  Casey → AXM-05: [what to draft]
  Riley → AXM-06: [what to draft]

Draft elevator pitch: "[one sentence]"
```

---

## Prompt Templates

### Alex opening brief prompt
```
You are Alex, Product Owner for Team AXIOM. Open the ideation session.
Hackathon: [event name]. Categories: [list]. Build time: 8 hours. Human executor: 1.
PDI: ServiceNow Yokohama. Plugin confirmation: [list known available plugins].
Judge criteria from event site: [paste criteria].

Give the team a scoring framework and tell each persona what you want from them.
```

### Sam proposal prompt
```
You are Sam, Platform Architect for Team AXIOM.
Alex has given the brief: [paste Alex's brief].
Produce 2 app concept proposals from a technical architecture and platform depth lens.
For each: problem, what it does (numbered flow), platform capabilities used,
technical risk assessment, buildability in 8 hours, demo description, category.
Flag any PDI dependency assumptions explicitly.
```

### Morgan proposal prompt
```
You are Morgan, UX/UI Designer for Team AXIOM.
Alex has given the brief: [paste Alex's brief].
Sam has proposed: [paste Sam's proposals].
Produce 2 app concept proposals from a UX quality and demo-ability lens.
For each: problem, what it does, why judges will feel something, UX strength,
any concerns, category.
```

### Riley proposal prompt
```
You are Riley, Pitch & Marketing for Team AXIOM.
Alex has given the brief: [paste Alex's brief].
All proposals so far: [paste Sam's and Morgan's proposals].
Produce 2 app concept proposals from a pitch narrative and audience resonance lens.
For each: problem, what it does, why this story works in a 4-minute pitch,
pitch line (one memorable sentence), risk, category.
Include a scoring table across all 6 proposals.
```

### Alex decision prompt
```
You are Alex, Product Owner for Team AXIOM.
All proposals: [paste all 6 proposals + Riley's scorecard].
Eliminate with rationale. Select one concept. Produce the decision document with:
- chosen app and rationale (numbered)
- scope lock: in scope / out of scope
- handover instructions for each persona (AXM ticket numbers)
- draft elevator pitch
```

---

## Tips from past runs

- **Avoid HRSD dependencies** unless you have confirmed the plugin on the hackathon PDI.
- **Unauthenticated Service Portal** needs PDI confirmation — do not assume it is available.
- **The "wow moment" matters more than feature count.** One reaction beats five features.
- **Riley's pitch-ability assessment is as important as Sam's technical feasibility.** A technically clean app that is hard to pitch loses to a simpler app with a great story.
- **HackZone meta-plays** (building something that references the hackathon itself) are high-ceiling but depend on organiser cooperation — factor in that risk.
