# AXIOM Decision Register — Run [RUN_ID]

> **Purpose:** Every decision that changes scope, architecture, process, or design
> is recorded here. This is the authoritative reference when anything is re-litigated.
> Do not rely on Jira comment threads for decisions — they drift and get buried.
>
> **Who writes it:** The persona who *receives* the decision (usually Jordan or Sam).
> Kostya or Alex confirms by replying to the Jira comment with `[DECISION LOGGED] D-NNN`.
>
> **Format:** Append only. Number sequentially. Never edit a posted decision
> — post a superseding entry instead.

---

## Decision Index

| ID    | Phase | Type   | Summary                        | Made by | Status    |
|-------|-------|--------|--------------------------------|---------|-----------|
| D-001 |       |        |                                |         |           |

*(Update this table when adding each entry below.)*

---

## Decisions

### D-001

```
ID:          D-001
DATE:        YYYY-MM-DDTHH:MM:SSZ
PHASE:       [PREP / BUILD / PITCH / SUBMIT]
TYPE:        [SCOPE / ARCHITECTURE / DESIGN / PROCESS / BLOCKER-RESOLUTION]
RAISED BY:   [Persona]
DECIDED BY:  [Kostya / Alex / both]
CONFIRMED BY: [Persona who logged this entry]

CONTEXT:
  [What situation or conflict triggered this decision? 2–4 sentences.]

OPTIONS CONSIDERED:
  A) [option — one line]
  B) [option — one line]
  C) [option — one line, if applicable]

DECISION:
  [Exactly what was decided. Be precise. Future personas must be able to act on
  this sentence alone without reading the context.]

RATIONALE:
  [Why this option? One sentence is enough if obvious.]

IMPACT:
  Tickets affected:  [AXM-XX, AXM-YY]
  Personas notified: [list]
  Changes required:  [what each persona must do differently because of this]

JIRA REF:    [AXM-XX comment link or Jira comment text]
ACTIVITY REF: [timestamp of [DECISION] entry in ACTIVITY.log]
STATUS:      Active  ← change to "Superseded by D-NNN" if overridden
```

---

*(Copy the block above for each new decision. Update the index table.)*
