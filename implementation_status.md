# ApocalypseNow — Implementation Status
**App:** ApocalypseNow | **Scope:** `x_snc_apocalypse_0` | **Instance:** `hackathon045.service-now.com`
**Last updated:** 2026-05-05 | **Built by:** Jordan (Claude Code)

---

## Build Status

| Layer | Status | Notes |
|---|---|---|
| Tables (5) | ✅ Deployed | T1–T5 live, types synced |
| Seed Data | ✅ Deployed | Las Vegas demo data, 6 zones + civilians + rescues |
| Script Includes (3) | ✅ Deployed | ZoneHelper, RescueAssign, TriageAI |
| Now Assist Skill | ✅ Deployed | Prompt in draft — **publish in Skill Kit UI** |
| Application Menu | ✅ Deployed | 3 separators, 11 modules + Mission Control link |
| Forms & Lists | ✅ Deployed | All 5 tables, default view |
| Service Portal | ✅ Deployed | Public civilian portal at `/apoc` |
| Mission Control Workspace | ✅ Deployed | 7 tabs, full left nav, 23 reports |
| Reports (23) | ✅ Deployed | sys_report, category: ApocalypseNow |
| Flows (FL-1 through FL-4) | ❌ Not built | Descoped — time constraint |
| SLA Definitions | ❌ Not built | Descoped — time constraint |
| Catalog Item | ❌ Not built | Descoped — portal replaces it |

---

## Module 1 — Evacuation Zone Management

**Table:** `x_snc_apocalypse_0_zone` (extends `task`)
**Auto-number:** `ZONE0001000`

| Field | Type | Notes |
|---|---|---|
| `short_description` | String | Inherited from task |
| `district` | String | District name |
| `zone_status` | Choice | safe / at_risk / evacuated / closed |
| `capacity` | Integer | Max civilians |
| `headcount` | Integer | Current count |
| `zone_commander` | Reference → sys_user | — |
| `public_notes` | Multi-line | Shown on public portal |

**Script Include:** `ApocZoneHelper`
- `incrementHeadcount(zoneId)` — adds 1, flips to `at_risk` at ≥ 90% capacity
- `decrementHeadcount(zoneId)` — subtracts 1, floor 0
- `getAvailableZone(excludeZoneId)` — returns lowest-fill safe zone

**Reports:** Active Zones Count · At-Risk Count · Zones by Status (donut) · Headcount vs Capacity (bar)

---

## Module 2 — Rescue Team Dispatch

**Table:** `x_snc_apocalypse_0_rescue` (extends `task`)
**Auto-number:** `RES0001000`

| Field | Type | Notes |
|---|---|---|
| `short_description` | String | Inherited |
| `zone` | Reference → zone table | Incident location |
| `request_type` | Choice | medical / structural / fire / missing_person / hazmat |
| `priority` | Choice | Inherited from task (1=Critical … 4=Low) |
| `state` | Choice | Inherited from task |
| `location_detail` | String | Free-text address |
| `description` | Multi-line | Inherited |
| `assigned_to` | Reference → sys_user | Inherited |
| `assignment_group` | Reference → sys_user_group | Inherited |

**Script Include:** `ApocRescueAssign`
- `getNextTeam(zoneId, priority)` — district-matched group first, falls back to any rescue/response/emergency group

**Reports:** Open Count · Critical Count · Unassigned Count · By Priority (bar) · By Type (donut)

---

## Module 3 — Civilian Intake & Triage

**Table:** `x_snc_apocalypse_0_civilian`
**Auto-number:** `CIV0001000`

| Field | Type | Notes |
|---|---|---|
| `full_name` | String | — |
| `contact_info` | String | Phone or email |
| `zone_requested` | Reference → zone table | Preferred zone |
| `zone_assigned` | Reference → zone table | Confirmed assignment |
| `symptom_text` | Multi-line | Raw intake text, max 800 chars |
| `triage_class` | Choice | cleared / medical / quarantine / manual_review |
| `triage_reasoning` | Multi-line | AI-generated explanation |
| `triage_source` | Choice | ai / manual |
| `confirmed_by` | Reference → sys_user | Officer who confirmed |
| `civilian_status` | Choice | pending / cleared / medical / quarantine / evacuated |

**Now Assist Skill:** `ApocCivilianTriage`
- Input: `symptom text` (string, mandatory)
- Tool: `SanitizeInput` (InlineScript — trims to 800 chars, strips `<>`)
- Model: `llm_generic_small_v2`, temp 0.1, maxTokens 150
- Output: `{"classification":"CLEARED|MEDICAL_ATTENTION|QUARANTINE","reasoning":"one sentence"}`
- Skill Kit URL: `/now/now-assist-skillkit/skill/fca04f7d4e3845e6aaa1251299812af9/`
- **Action required:** Publish prompt version in Skill Kit UI before invocation works

**Script Include:** `ApocTriageAI`
- `classify(symptomText)` — calls `sn_skill_kit.SkillHelper.execute()` with `inputValues`, falls back to `manual_review` on any failure

**Reports:** Pending Triage Count · Quarantine-Classified Count · By Triage Class (donut) · AI vs Manual (donut) · By Status (bar)

---

## Module 4 — Supply Chain & Inventory (Stub)

**Table:** `x_snc_apocalypse_0_supply`
**Status:** Scaffolded — no flows or automation. Manual data entry only in v1.

| Field | Type | Notes |
|---|---|---|
| `supply_name` | String | — |
| `supply_type` | Choice | medical / food_water / shelter / safety / communication |
| `zone` | Reference → zone table | Zone allocation |
| `supply_status` | Choice | available / low / depleted / in_transit |
| `quantity` | Integer | Units on hand |

**Reports:** Low/Depleted Count · By Status (donut) · Quantity by Type (bar)

---

## Module 5 — Quarantine Case Management

**Table:** `x_snc_apocalypse_0_quarantine`
**Auto-number:** `QUA0001000`

| Field | Type | Notes |
|---|---|---|
| `civilian` | Reference → civilian table | Linked intake record |
| `zone` | Reference → zone table | Isolation zone |
| `case_status` | Choice | open / under_review / resolved / transferred |
| `opened_at` | DateTime | Auto-set on insert |

**Reports:** Open Cases Count · By Status (donut) · By Zone (bar)

---

## Module 6 — Public Alerts & Mission Control

### Service Portal (Public Civilian Portal)

**Portal URL:** `/apoc` | **Theme:** Emergency dark (`#0f0f0f` bg, `#dc2626` accent)

| Page | URL | Widget | Access |
|---|---|---|---|
| Zone Status | `/apoc?id=apoc-zones` | `apoc-zone-grid` | Public (anonymous) |
| Registration | `/apoc?id=apoc-register` | `apoc-register-form` | Public (anonymous) |

**Zone Grid widget:** Live zone cards with capacity bars, status colour-coding, 30s auto-refresh (`$interval`)
**Register Form widget:** Full-name + contact + zone picker + symptom text → inserts civilian record with `civilian_status=pending`

### Mission Control Workspace

**Workspace URL:** `/now/apoc-mission-control/home`
**UI Builder:** `/now/builder/ui/experience/0247d1acf05a4510a4055d2eca4a7436`
**Role:** `x_snc_apocalypse_0.operator` (contains `canvas_user`)

**Dashboard tabs (7):**

| Tab | Reports |
|---|---|
| Overview | Zones by Status · Rescue by Priority · Triage Classifications |
| M1 Zone Management | Active count · At-Risk count · By Status · Headcount bar |
| M2 Rescue Dispatch | Open · Critical · Unassigned counts · By Priority · By Type |
| M3 Civilian Intake | Pending · Quarantine counts · By Triage · AI vs Manual · By Status |
| M4 Supply Chain | Low/Depleted count · By Status · Quantity by Type |
| M5 Quarantine | Open count · By Status · By Zone |
| M6 Mission Control | Zones · Rescue · Triage (cross-module summary) |

**Left nav (6 categories, 17 filtered lists):**
- M1: Active Zones · At Risk · All Zones
- M2: Open · Critical · Unassigned · All Rescue
- M3: Pending Triage · Manual Review · Quarantine Classified · All Civilians
- M4: Low/Depleted · All Inventory
- M5: Open Cases · Under Review · All Cases
- M6: All Zones · Active Rescue · Pending Triage

**Dashboard report script:** `runs/2026-05_creatorcon/docs/dashboard_reports_script.js`
Run at `/sys_script.do` to attach all 23 reports to their dashboard tabs.

---

## Application Menu

| Section | Module | Link type |
|---|---|---|
| Operations | Evacuation Zones (list) | LIST |
| Operations | + New Zone | NEW |
| Operations | Rescue Requests (list) | LIST |
| Operations | + New Rescue Request | NEW |
| Civilian Intake | All Civilians | LIST |
| Civilian Intake | Pending Triage | FILTER (`civilian_status=pending`) |
| Civilian Intake | Quarantine Cases | LIST |
| Administration | Supply Items | LIST |
| Mission Control | Mission Control Workspace | DIRECT → `/now/apoc-mission-control/home` |

---

## Seed Data (Las Vegas demo)

**6 Evacuation Zones:**

| Zone | District | Status | Headcount | Capacity |
|---|---|---|---|---|
| Zone A — The Strip | District 1 — Las Vegas Strip | safe | 342 | 1200 |
| Zone B — Fremont Street | District 2 — Downtown | safe | 712 | 800 |
| Zone C — Convention Center | District 3 — Paradise | at_risk | 945 | 1050 |
| Zone D — Summerlin | District 4 — Summerlin | safe | 203 | 600 |
| Zone E — Henderson | District 5 — Henderson | evacuated | 0 | 500 |
| Zone F — North Las Vegas | District 6 — North LV | safe | 88 | 400 |

Zone C is intentionally at 90% (triggers at-risk threshold for demo).
Zone E is evacuated (demonstrates full lifecycle).

**Demo civilians** with pre-set triage classifications across all four outcomes (cleared, medical, quarantine, manual_review).

---

## Key URLs

| Resource | URL |
|---|---|
| PDI Home | `https://hackathon045.service-now.com` |
| App record | `/sys_app.do?sys_id=53c763a3fbac8f10f147f5b26eefdc75` |
| Public Portal — Zones | `/apoc?id=apoc-zones` |
| Public Portal — Register | `/apoc?id=apoc-register` |
| Mission Control Workspace | `/now/apoc-mission-control/home` |
| UI Builder (workspace) | `/now/builder/ui/experience/0247d1acf05a4510a4055d2eca4a7436` |
| Skill Kit (TriageAI) | `/now/now-assist-skillkit/skill/fca04f7d4e3845e6aaa1251299812af9/` |

---

## Source File Map

```
src/
├── fluent/
│   ├── tables.now.ts              — 5 custom tables (T1–T5)
│   ├── seed.now.ts                — Las Vegas demo data
│   ├── script-includes.now.ts    — SI registrations (3 SIs)
│   ├── triage-skill.now.ts       — NowAssistSkillConfig: ApocCivilianTriage
│   ├── views.now.ts               — Form + List views, all 5 tables
│   ├── nav.now.ts                 — ApplicationMenu + 11 modules
│   ├── portal.now.ts              — ServicePortal + SPTheme + 2 SPPages + 2 SPWidgets
│   ├── reports.now.ts             — 23 sys_report records
│   └── workspaces/
│       └── mission-control/
│           ├── workspace.now.ts   — Role + Applicability + UxListMenuConfig + Workspace + ACL
│           └── dashboard.now.ts   — Dashboard with 7 tabs
└── server/
    ├── ApocZoneHelper.server.js   — Zone headcount management
    ├── ApocRescueAssign.server.js — Rescue team assignment
    ├── ApocTriageAI.server.js     — Now Assist skill invocation wrapper
    ├── sp-zone-grid.server.js     — Portal: zone status data
    ├── sp-zone-grid.client.js     — Portal: zone grid controller + $interval refresh
    ├── sp-zone-grid.html          — Portal: zone card template
    ├── sp-zone-grid.css           — Portal: emergency dark theme
    ├── sp-register.server.js      — Portal: zone picker + civilian insert
    ├── sp-register.client.js      — Portal: form controller + validation
    ├── sp-register.html           — Portal: registration form + confirmation
    └── sp-register.css            — Portal: matching dark theme
```

---

## Known Gaps & Pending Actions

| Item | Owner | Action |
|---|---|---|
| Publish Now Assist prompt | Kostya | Open Skill Kit URL → publish TriageClassify prompt version |
| Attach reports to dashboard | Kostya | Run `dashboard_reports_script.js` in Scripts - Background |
| FL-1 Civilian Triage Flow | Jordan | Not built — triggers TriageAI on civilian insert |
| FL-2 Zone Auto-Flip Flow | Jordan | Not built — triggers on headcount update |
| FL-3 Rescue Dispatch Flow | Jordan | Not built — auto-assigns team on rescue create |
| FL-4 Rescue Escalate Flow | Jordan | Not built — SLA breach escalation |
| Casey smoke test | Casey | Tables, portal, workspace nav validation |

---

*Team AXIOM. Built differently.*
