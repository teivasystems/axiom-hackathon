# AXIOM Decision Register — Run 2026-04_dryrun

> **Purpose:** Every decision that changes scope, architecture, process, or design
> is recorded here. This is the authoritative reference when anything is re-litigated.

---

## Decision Index

| ID    | Phase | Type   | Summary                        | Made by | Status    |
|-------|-------|--------|--------------------------------|---------|-----------|

*(Update this table when adding each entry below.)*

---

## Decisions

### D-001

```
ID:          D-001
DATE:        2026-04-29T01:00:00Z
PHASE:       PREP → BUILD
TYPE:        ARCHITECTURE
RAISED BY:   Jordan (identified during first deploy attempt)
DECIDED BY:  Kostya (pending — action required)
CONFIRMED BY: Jordan (will log once Kostya reports assigned scope)

CONTEXT:
  Sam's architecture doc specified scope x_axiom_kudos as a freely chosen name.
  ServiceNow PDI namespace identifiers are system-assigned — the x_<prefix> portion
  is bound to the PDI and cannot be set manually. The specified scope is invalid.
  Deploy cannot succeed until the real scope is known and config is updated.

OPTIONS CONSIDERED:
  A) Create app in AES, accept system-assigned prefix, update architecture.md + now.config.json
  B) Use an existing scoped app already on the PDI (if one exists)

DECISION:
  Option A — Kostya creates app in App Engine Studio, reports the assigned scope.
  Sam updates architecture.md. Jordan updates now.config.json. Then redeploy.

RATIONALE:
  Option B requires an existing app to be present; PDI state unknown.
  Option A is the documented now-sdk flow per ServiceNow documentation.

IMPACT:
  Tickets affected:  AXM-22 (Sam — architecture.md update), AXM-25 (Jordan — now.config.json)
  Personas notified: Sam, Jordan
  Changes required:
    Sam: update Section 1 (App Scope) and Section 2 (table sys_name prefix) with real scope
    Jordan: update now.config.json scopeName field once real scope is known

JIRA REF:    AXM-25 comment#40134
ACTIVITY REF: 2026-04-29T01:00:00Z
STATUS:      Active — awaiting Kostya action

NOTE: CLAUDE.md updated to reflect per-run app folder structure.
  SDK app must be initialised at runs/<run>/app/ not repo root.
  now-sdk init must be run from runs/2026-04_dryrun/app/ once scope is known.
```
