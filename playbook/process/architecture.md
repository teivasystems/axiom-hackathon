# Process: Architecture Document (AXM-03)

## Purpose

Give Jordan an unambiguous build reference. Every architecture decision is in this document.
Jordan does not make architecture decisions — Jordan executes them.

## Owner

Sam produces this. Jordan cannot start the build until it exists.

## Trigger

Alex completes the ideation decision document (AXM-<#> complete).

## Output

- `runs/[run]/docs/architecture.md`
- Linked in Jira AXM-<#> (Artifact Link field)
- Uploaded to Claude.ai Project AXIOM knowledge

---

## Pre-Writing Checklist (Sam must complete before naming anything)

Before writing a single table name, flow name, or scope name, confirm these facts.
Every name in the architecture doc derives from them. Wrong answers here cascade into
find-and-replace sessions during the build.

```
[ ] 1. PDI vendor prefix confirmed
        GET https://<pdi>/api/now/table/sys_properties
            ?sysparm_query=name=glide.appcreator.company.code
            &sysparm_fields=value
        → value is the prefix (e.g. 9274)
        Full scope format: x_<prefix>_<appname>  (max 18 chars total)

[ ] 2. Scope name checked for length
        x_ (2) + prefix (N) + _ (1) + appname (M) ≤ 18 chars
        If over: shorten appname, not prefix

[ ] 3. Plugins confirmed available on PDI
        Flow Designer:    GET .../api/now/table/sys_plugins?sysparm_query=source_name=com.glide.hub.flow_designer
        IntegrationHub:   same pattern with com.glide.hub.integrations
        Service Portal:   same pattern with com.glide.service-portal

[ ] 4. PDI instance URL and sys_id noted
        Used in Artifact Link fields and DECISIONS.md
```

Do not proceed to Section 1 until all four boxes are checked.
If any item is unknown, raise it as a blocker in Jira before writing the doc.

---

## Required Sections

### 1. App Scope

What the app does and — equally important — what it does not do.
This should match Alex's scope lock from the ideation decision exactly.

**Required fields at the top of Section 1:**
```
App name:    <display name>
Scope:       x_<prefix>_<appname>   ← confirmed from pre-writing checklist
Scope ID:    <populated after now-sdk init>
PDI:         https://<instance>.service-now.com
```

### 2. Table Schema

Every custom table in the app. For each table:

| Field | Type | Mandatory | Default | Notes |
|---|---|---|---|---|
| field_name | string / integer / reference / boolean | Yes/No | — | constraints, validation |

Include: table `sys_name` (must match Flow Designer trigger), display name, parent table if extending.

**All table sys_names must use the confirmed scope prefix.** Never invent a prefix.

### 3. OOB Tables Used

List every out-of-the-box table the app reads from or writes to.
**No OOB table modifications.** Extend only.

### 4. Flow Designer

For each flow:
- Name
- Trigger: table, condition, when (record insert / update / delete / scheduled)
- Actions (numbered): what the flow does, in order
- Integration points: which Script Includes it calls, which REST actions it invokes
- Error handling: what happens if a step fails

### 5. Claude Integration

- Integration pattern: IntegrationHub REST action (preferred) or Script Include direct HTTP call
- Credential: name in SN Credential Store (Jordan does not configure credentials — Kostya does)
- Endpoint: Claude API endpoint and model
- Prompt design: what context is sent, what output format is expected
- Output handling: where the Claude response goes (which field, which table)

### 6. Script Includes

For each Script Include:
- Name and scope
- Purpose (one line)
- Public methods with signatures and what they return
- Dependencies (other Script Includes, REST calls)

### 7. UI Components

For each screen (in Now Experience or Service Portal):
- Component name
- Data source (which table, which fields)
- User role required
- Cross-reference to Morgan's wireframe spec (screen name)

### 8. Plugin Dependencies

Every Now Platform plugin required. For each:
- Plugin name and ID
- Whether confirmed available on PDI (✅ Confirmed / ⚠️ Unverified)
- Fallback if not available

### 9. Build Sequence

Numbered, in dependency order. Jordan builds in this order exactly.

```
1. [Table name] — create table with fields
2. [Script Include name] — logic first, no dependencies
3. ...
```

### 10. Known Risks

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| PDI plugin X unavailable | Medium | High | Use fallback Y |
| ... | | | |

### 11. Open Questions

Anything still needing a decision before or during the build.
Each item: question, who decides, by when.

---

### 12. Build Manifest ← mandatory, Jordan-facing

**This section is Jordan's primary build guide.** Jordan reads the manifest,
not Sections 2–9 prose. The manifest must be complete and accurate before
the architecture doc is handed over.

One row per deployable artifact, in strict build order. Every row must be
self-contained — Jordan should be able to build the component from the row
alone, consulting the prose section only for edge-case detail.

#### Table row format

| # | Type | Display name | sys_name | Source file | Key fields | Depends on | PDI validate | ✓ |
|---|------|--------------|----------|-------------|------------|------------|--------------|---|
| 1 | Table | `<display>` | `x_<prefix>_<name>` | `src/fluent/<name>.now.ts` | field1 (string, M), field2 (ref:table, O) | — | Studio → Tables → confirm exists | [ ] |

**Field abbreviations:** M = mandatory, O = optional, ref:table = reference field

#### Script Include row format

| # | Type | Name | sys_name | Source file | Public methods | Depends on | PDI validate | ✓ |
|---|------|------|----------|-------------|----------------|------------|--------------|---|
| 2 | Script Include | `<name>` | `<name>` | `src/server/<name>.ts` | `method1(args): ReturnType`, `method2(args): ReturnType` | #1 (table) | Scripts → Script Includes → confirm name + test call | [ ] |

#### Flow row format

| # | Type | Name | Trigger | Source file | Actions (summary) | Depends on | PDI validate | ✓ |
|---|------|------|---------|-------------|-------------------|------------|--------------|---|
| 3 | Flow | `<name>` | Record inserted: `x_<prefix>_<name>` | `src/fluent/flows/<name>.now.ts` | 1. Get record, 2. Call ScriptInclude, 3. Send notification | #1 #2 | Flow Designer → activate → test with record insert | [ ] |

#### UI Widget row format

| # | Type | Name | Screen (Morgan ref) | Source file | Data source | Role | Depends on | PDI validate | ✓ |
|---|------|------|---------------------|-------------|-------------|------|------------|--------------|---|
| 4 | UI Widget | `<name>` | `<screen name in wireframes.md>` | `src/fluent/widgets/<name>.now.ts` | `x_<prefix>_<name>` | itil / admin / public | #1 #3 | Service Portal → confirm renders + data loads | [ ] |

#### Claude integration row format

| # | Type | Name | Credential alias | Endpoint | Prompt template location | Output field | Depends on | PDI validate | ✓ |
|---|------|------|-----------------|----------|--------------------------|--------------|------------|--------------|---|
| N | Claude integration | `<name>` | `claude_api` | `https://api.anthropic.com/v1/messages` | `src/server/<name>.ts` line N | `x_<prefix>_<table>.<field>` | #N (Script Include) | Run manually, confirm response parses + field populated | [ ] |

#### Manifest rules

- Rows are numbered in strict dependency order — Jordan builds top to bottom, no skipping
- `Depends on` lists row numbers that must be ✓ before this row can start
- `PDI validate` is a specific, actionable check — not "confirm it works"
- `sys_name` must match exactly what appears in Flow Designer triggers and Script Include calls
- No row may be left blank in any column — if unknown, raise a blocker before handing over
- Jordan checks off each row (changes `[ ]` to `[x]`) and commits after each deploy

---

## Prompt Template

```
You are Sam, Platform Architect for Team AXIOM.

Alex has decided on [app name]. Here is the scope lock:
[paste Alex's decision document]

Produce the architecture document (AXM-<#>). Include all required sections:
1. App scope (match Alex's scope lock exactly)
2. Table schema (every custom table, every field)
3. OOB tables used (read/write only — no modifications)
4. Flow Designer (every flow, trigger, actions, integration points)
5. Claude integration (pattern, credential name, endpoint, prompt design, output handling)
6. Script Includes (name, purpose, public methods, dependencies)
7. UI components (name, data source, role, wireframe cross-reference)
8. Plugin dependencies (confirmed vs unverified, fallbacks)
9. Build sequence (numbered, in dependency order)
10. Known risks (table format with mitigation)
11. Open questions (with decision owner)
12. Build manifest (one row per artifact, in build order — see format in process/architecture.md Section 12)

Platform: ServiceNow Zurich / Australia. SDK: now-sdk 4.6.0. TypeScript strict mode.
No OOB table modifications. Claude API key in SN Credential Store only.
```

---

## → Next Phase

**Sam hands off to:**

| Persona | Ticket | Gate | What they need from this doc |
|---|---|---|---|
| Jordan | AXM-08 | Section 12 (Build Manifest) complete — no blank columns | Build manifest only; Jordan does not read prose sections to build |
| Morgan | AXM-04 | Section 7 (UI components) and confirmed table schema | Field names for wireframe data binding |

**Handover checklist before committing:**
- [ ] Section 12 manifest has every artifact — no prose-only components
- [ ] Every `sys_name` uses the confirmed PDI scope prefix (not invented)
- [ ] Every `PDI validate` column has a specific, actionable check
- [ ] Plugin dependencies marked ✅ confirmed or ⚠️ unverified with fallback named
- [ ] Commit `runs/<run>/docs/architecture.md` and post Jira comment on AXM-03
- [ ] Transition AXM-08 → `In Progress`
