# AXIOM Decision Register — Run 2026-04_dryrun

> **Purpose:** Every decision that changes scope, architecture, process, or design
> is recorded here. This is the authoritative reference when anything is re-litigated.

---

## Decision Index

| ID    | Phase | Type   | Summary                        | Made by | Status    |
|-------|-------|--------|--------------------------------|---------|-----------|
| D-001 | PREP→BUILD | ARCHITECTURE | Scope prefix system-assigned — use x_9274_kudos | Kostya | Resolved ✅ |
| D-002 | CROSS-RUN | ARCHITECTURE — UX Channel Routing | Employee/end-user → SP/EC; Manager/fulfiller → Workspace; Mobile → avoid; Now Assist → either | Kostya | Signed off ✅ |

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
STATUS:      Resolved ✅

RESOLUTION:
  Vendor prefix queried from PDI sys_properties (glide.appcreator.company.code = 9274).
  Scope x_9274_kudos confirmed (12 chars, within 18-char limit).
  App scaffolded via: now-sdk init --appName "Team Kudos" --scopeName "x_9274_kudos" --template typescript.basic --auth axiom-pdi
  Build clean. Deployed to https://dev390976.service-now.com/sys_app.do?sys_id=8f59e7b4aa4a42c79236d248bd1672a3
  architecture.md updated — all x_axiom_kudos references replaced with x_9274_kudos.
  CLAUDE.md updated — per-run app folder structure documented, scope prefix procedure added.
```

---

### D-002

```
ID:          D-002
DATE:        2026-05-02T00:00:00Z
PHASE:       CROSS-RUN (applies to all future runs — not run-specific)
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
  Sam must name the UX channel explicitly in architecture.md Section 1 for every run.
  Jordan must not start UI work until the channel is confirmed.
  The full routing guide and per-channel build patterns live in:
    playbook/skills/ui.md — UX Channel Routing section (canonical reference)

PLAYBOOK REF: playbook/skills/ui.md — "UX Channel Routing — Architectural Decision (D-002)"
STATUS:       Signed off ✅
```
