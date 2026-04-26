# AXIOM Handover Archive — Run [RUN_ID]

> **Purpose:** Every handover note is archived here in addition to being posted
> to Jira. This is the single source of truth when Jira comments are hard to scan
> or when a new session needs full context fast.
>
> **Who writes it:** The *sending* persona appends their handover note here immediately
> after posting it to Jira. The entry number (H-NNN) is then referenced in the
> Jira comment and ACTIVITY.log.
>
> **Format:** Append only. Number sequentially. Never edit a posted handover.

---

## Handover Index

| ID    | From    | To      | Ticket  | Phase | Time (UTC)          | Status   |
|-------|---------|---------|---------|-------|---------------------|----------|
| H-001 |         |         |         |       |                     |          |

*(Update this table when adding each entry below.)*

---

## Handovers

### H-001

```
ID:            H-001
DATE:          YYYY-MM-DDTHH:MM:SSZ
FROM:          [Persona]
TO:            [Persona]
TICKET:        [AXM-XX]
STATUS:        [Complete / Blocked / In Review]

ARTIFACT:      [repo-relative path]
ARTIFACT_URL:  https://github.com/teivasystems/axiom-hackathon/blob/main/runs/[run]/[path]
COMMIT:        [short SHA]
BRANCH:        main

RELATED_FILES:
  - [path] — [what the receiver needs from it]
  - [path] — [what the receiver needs from it]

SUMMARY:
  [2–3 sentences: what was decided or built, why it matters for the receiver]

OPEN ITEMS:
  - [item 1 — be explicit, not vague]
  - [item 2]

DEPENDENCIES:
  [What the receiver must not start without. Be explicit.]

JIRA COMMENT:  [link to the Jira comment where this was posted]
ACTIVITY REF:  [timestamp of [HANDOVER] entry in ACTIVITY.log]
```

---

*(Copy the block above for each new handover. Update the index table.)*
