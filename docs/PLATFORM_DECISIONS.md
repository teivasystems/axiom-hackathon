# AXIOM Platform Decisions — Permanent Registry

> **Scope:** Cross-run decisions that apply to every AXIOM hackathon run.  
> These are inherited by default. Do not re-litigate without Alex + Sam approval.  
> New run-level decisions use D-003+ in that run's own `logs/DECISIONS.md`.  
> When a new cross-run decision is made, add it here AND reference it from `docs/PLATFORM_DECISIONS.md` in the run log.

---

## Decision Index

| ID | Summary | Applies to | Status |
|---|---|---|---|
| D-001 | Scope prefix is PDI-assigned — never invent it | All runs | Resolved ✅ |
| D-002 | UX channel routing — SP for employee, Workspace for fulfiller | All runs | Signed off ✅ |

---

## D-001 — Scope Prefix Is System-Assigned

```
ID:          D-001
DATE:        2026-04-29T01:00:00Z
PHASE:       PREP → BUILD
TYPE:        ARCHITECTURE
RAISED BY:   Jordan (identified during first deploy attempt)
DECIDED BY:  Kostya
CONFIRMED BY: Jordan

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
  Sam: query PDI vendor prefix before naming anything in architecture.md.
       Format: x_<prefix>_<appname> ≤ 18 chars. Query: glide.appcreator.company.code sys_property.
  Jordan: never invent a scope name — wait for Kostya to confirm from AES.
  All runs: this procedure is now documented in CLAUDE.md and sam.md card.

ORIGINAL REF: runs/2026-04_dryrun/logs/DECISIONS.md#D-001
STATUS:       Resolved ✅ — incorporated into all persona cards and CLAUDE.md
```

---

## D-002 — UX Channel Routing

```
ID:          D-002
DATE:        2026-05-02T00:00:00Z
PHASE:       CROSS-RUN
TYPE:        ARCHITECTURE — UX Channel Routing
RAISED BY:   Kostya
DECIDED BY:  Kostya
SIGNED OFF:  Sam (architecture)

CONTEXT:
  No team-wide principle existed for which ServiceNow UI channel to use for a given
  user type. Without this, each run risks building in the wrong channel (e.g. a
  fulfiller workspace in Service Portal, or an employee form in UI Builder), wasting
  build time or producing a weak demo.

DECISION:
  The following routing applies to all AXIOM runs:

  Employee / end-user self-service    → Employee Center or custom SP portal
  Customer / external user            → Customer Service Portal (CSM plugin)
  Manager / fulfiller / agent         → UI Builder Workspace
  Admin / internal tooling            → UI Builder or SP (build-time dependent)
  Now Assist / Voice AI               → Applicable to both Workspace and Portal
                                        (Workspace OOB sidebar preferred; VA topic for SP)
  Mobile                              → Avoid in hackathon unless pitch is mobile-first
                                        AND Alex explicitly approves it as a scope item.

RATIONALE:
  Employee Center and SP are optimised for self-service UX — low friction, accessible,
  mobile-friendly. UI Builder Workspaces are designed for agent productivity — queue
  management, activity feeds, Now Assist integration. Mixing channels creates an awkward
  UX that weakens the demo. Mobile is architecturally sound but takes 3–4h minimum to
  build and test — too costly for a hackathon unless it IS the differentiator.

IMPACT:
  Sam: name the UX channel explicitly in architecture.md Section 1 for every run.
  Jordan: do not start UI work until the channel is confirmed.
  Full routing guide and per-channel build patterns: playbook/skills/ui.md

ORIGINAL REF: runs/2026-04_dryrun/logs/DECISIONS.md#D-002
PLAYBOOK REF: playbook/skills/ui.md — "UX Channel Routing — Architectural Decision (D-002)"
STATUS:       Signed off ✅
```
