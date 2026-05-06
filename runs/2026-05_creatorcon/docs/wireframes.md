# Wireframes — Run 2026-05_creatorcon
# Author: Morgan (UX Designer)
# Status: COMPLETE — Gate 2 supplement. UI-3 map page fully specced. Ready for Jordan.

---

## 1. UX Channel

Per D-ARC-002 (Sam):
- **Civilians (public)** → Employee Center / Service Portal, anonymous, no login
- **Operators / Commanders** → UI Builder Workspace (`pg_mission_control`)

---

## 2. Screens / Views

### UI-1 — Civilian Self-Registration (Catalog Item)

**Purpose:** Anonymous self-intake. Feeds FL-1 triage flow.

**Fields / Components:**

| Element | Type | Bound To | Notes |
|---------|------|----------|-------|
| Full Name | Text input (required) | `full_name` | Placeholder: "Your full name" |
| Contact Number | Text input | `contact_info` | Placeholder: "Phone or email" |
| Zone | Reference picker | `zone_requested` | Dropdown of active zones — show name + district + status badge. Greyed-out if `status = closed`. |
| Symptom Description | Textarea (required) | `symptom_text` | Label: "Describe your situation or symptoms". Min 20 chars. |
| Submit | Primary danger button | — | "Submit Registration →" |

**Behaviour:**
- Mobile-first, single column.
- On submit: show spinner, then confirmation message: "You are registered. An operator will contact you shortly. Your reference: [number]"
- No redirect — stay on page with confirmation banner.

---

### UI-3 — Public Alert Board with District Map

**Purpose:** Civilians see live Las Vegas district statuses on a colour-coded map, active alerts, and a link to self-register. Anonymous, no login. Mobile-first.

---

#### Layout (desktop: 2 columns. mobile: single column, map first)

```
┌─────────────────────────────────────────────────────┐
│  ⚠  APOC EMERGENCY OPERATIONS — LAS VEGAS           │
│  LIVE STATUS  •  Updated [timestamp]  •  Auto-refresh│
└─────────────────────────────────────────────────────┘

┌────────────────────────┐  ┌─────────────────────────┐
│                        │  │  DISTRICT STATUS         │
│   LAS VEGAS MAP        │  │  ─────────────────────   │
│   (SVG, colour-coded   │  │  ● Downtown       SAFE   │
│    by district status) │  │  ● The Strip    AT RISK  │
│                        │  │  ● Summerlin      SAFE   │
│   Click district →     │  │  ● Henderson      SAFE   │
│   shows detail panel   │  │  ● North LV  EVACUATED   │
│                        │  │  ● East LV        SAFE   │
│                        │  │  ● Spring Valley  SAFE   │
│                        │  │  ● Enterprise  CLOSED    │
└────────────────────────┘  └─────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  ACTIVE ALERTS & NOTICES                            │
│  ─────────────────────────────────────────────────  │
│  🔴  [alert text — public_notes from zone record]   │
│  🟠  [alert text]                                   │
│  ─────────────────────────────────────────────────  │
│  No active alerts shown as: "All clear in this area"│
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│       [ REGISTER AS CIVILIAN → ]  (danger button)   │
└─────────────────────────────────────────────────────┘
```

---

#### Map Component — District SVG Panel

**Implementation:** Inline SVG, Jordan renders as a Service Portal widget.  
SVG viewBox `0 0 600 480` — 8 named district regions.

**District → Zone mapping** (driven by `district` field on `x_snc_apocalypse_0_zone`):

| District label (in SVG) | Zone `district` value | Approximate screen position |
|------------------------|----------------------|------------------------------|
| Downtown | `downtown` | Centre-left |
| The Strip | `the_strip` | Centre |
| Summerlin | `summerlin` | Left |
| Henderson | `henderson` | Bottom-right |
| North Las Vegas | `north_lv` | Top-centre |
| East Las Vegas | `east_lv` | Right |
| Spring Valley | `spring_valley` | Bottom-centre |
| Enterprise | `enterprise` | Bottom-left |

**Colour coding (matches Mission Control):**

| Status | Fill colour | Border | Label |
|--------|-------------|--------|-------|
| `safe` | `#22c55e` (green-500) | `#16a34a` | SAFE |
| `at_risk` | `#f59e0b` (amber-400) | `#d97706` | AT RISK |
| `evacuated` | `#ef4444` (red-500) | `#dc2626` | EVACUATED |
| `closed` | `#6b7280` (grey-500) | `#4b5563` | CLOSED |
| *(no zone record)* | `#d1d5db` (grey-200) | `#9ca3af` | UNKNOWN |

**Interactions:**
- Click a district → highlight border (2px → 4px), show detail card below map:
  - Zone name, District, Status badge, Headcount / Capacity bar, Public Notes
- Hover: lighten fill 15%, cursor pointer
- No click on mobile — tap shows the same detail card

**Auto-refresh:** widget polls server every 15 s (matches Mission Control cadence). No full page reload — GlideAjax call updates `c.data.zones`, AngularJS `$interval`.

---

#### District Status List Panel

Read-only list, right of map on desktop, below map on mobile.

| Element | Detail |
|---------|--------|
| Per-row layout | Status dot (colour) + district name (bold) + status badge chip |
| Sort order | `at_risk` first → `evacuated` → `safe` → `closed` |
| Tap/click | Selects same district on map (cross-highlight) |

---

#### Active Alerts Panel

Driven by `public_notes` field on zones where `status IN ('at_risk', 'evacuated')`.  
One alert card per zone that has non-empty `public_notes`.

| Element | Detail |
|---------|--------|
| Alert icon | 🔴 for `evacuated`, 🟠 for `at_risk` |
| Alert title | District name |
| Alert body | `public_notes` value |
| Empty state | Single row: "✓ No active alerts. Conditions are currently stable." |

---

#### Register CTA

Full-width red button: **"Register as Civilian →"**  
Links to SP catalog item for `cat_civilian_intake`.  
Sticky bottom bar on mobile (fixed position, z-index above scroll).

---

#### Header / Footer

| Element | Spec |
|---------|------|
| Header bg | `#1e293b` (dark navy) |
| Logo text | `⚠ APOC EMERGENCY OPERATIONS` in white, monospace |
| Subtitle | `Las Vegas Emergency Management System` |
| Timestamp | `Last updated: [relative time]` — updated on each poll |
| Footer | `ApocalypseNow · Powered by ServiceNow · Data refreshes every 15s` |

---

### UI-2 — Mission Control (Workspace — Operators only)

**Purpose:** Zone Commander / Operator real-time ops. Not public.

**Panels (per Sam §5):**
1. **Zone Grid** — colour-coded cards, 15s refresh. Same status scheme as UI-3.
2. **Civilian Intake Queue** — list of `triage_class = pending`. Operator confirms or overrides AI classification inline (single click → sets `triage_source = manual_override`, writes `confirmed_by`).
3. **Rescue Request Board** — open rescue requests sorted by SLA breach risk. SLA indicator: green / amber / red chip. Priority filter.

**Layout:** Left sidebar nav (Zones / Civilians / Rescue) + main content area. Standard Workspace conventions. Not a custom design — use OOTB Workspace record list + configured list layouts.

---

## 3. Navigation Flow

```
Public (anonymous)
  └── UI-3: District Map & Alert Board
        ├── [Register CTA] → UI-1: Civilian Self-Registration
        └── [District click] → inline detail card (same page)

Operators (authenticated)
  └── UI-2: Mission Control (Workspace)
        ├── Zones tab → Zone Grid
        ├── Civilians tab → Intake Queue
        └── Rescue tab → Rescue Board
```

No cross-navigation between public and operator surfaces.

---

## 4. Component Notes for Jordan

### sp-district-map (new widget — `sp_district_map`)

- **Widget $id:** `sp_district_map`
- Server script: GlideRecord query on `x_snc_apocalypse_0_zone`, return array of `{sys_id, name, district, status, headcount, capacity, fillPct, publicNotes}`. Guest user ACL read on zone (public fields only — per Sam §10 note 5).
- Client script: `$interval` poll every 15 000 ms. `c.selectDistrict(districtKey)` function for map/list cross-highlight.
- HTML: inline SVG + district list panel + alerts panel + CTA. AngularJS `ng-attr-fill` on each SVG `<path>` bound to `c.statusColor(districtKey)`.
- CSS: dark-mode header, responsive two-column grid (`@media (max-width: 768px)` single column).
- **SVG district paths:** Jordan draws simplified rectilinear paths for 8 districts — exact coordinates are flexible, visual accuracy matters more than geo-precision. Reference: approximate bounding boxes below.

**Approximate SVG district bounding boxes (viewBox 600×480):**

```
north_lv:     x=200 y=0   w=200 h=100   (top band)
summerlin:    x=0   y=100 w=180 h=180   (left mid)
downtown:     x=180 y=100 w=120 h=120   (centre-left)
the_strip:    x=180 y=220 w=120 h=120   (centre)
east_lv:      x=300 y=100 w=300 h=140   (right mid)
spring_valley:x=180 y=340 w=140 h=140   (bottom centre)
henderson:    x=320 y=240 w=280 h=240   (bottom right)
enterprise:   x=0   y=280 w=180 h=200   (bottom left)
```

Labels: `<text>` centred in each region, 11px, white, bold.

### sp-zone-grid (existing widget — keep as-is)

Already built. Jordan keeps it on the existing SP page — the new `sp_district_map` is the *enhanced* public page, not a replacement. Both SP pages can coexist, or the zone grid can be embedded below the map on the same page. **Jordan decides based on time — flag to Alex if scope question.**

### Colour helper function

```javascript
c.statusColor = function(status) {
  var map = {
    safe: '#22c55e',
    at_risk: '#f59e0b',
    evacuated: '#ef4444',
    closed: '#6b7280'
  };
  return map[status] || '#d1d5db';
};
c.statusBorder = function(status) {
  var map = {
    safe: '#16a34a',
    at_risk: '#d97706',
    evacuated: '#dc2626',
    closed: '#4b5563'
  };
  return map[status] || '#9ca3af';
};
c.statusLabel = function(status) {
  return {safe:'SAFE', at_risk:'AT RISK', evacuated:'EVACUATED', closed:'CLOSED'}[status] || 'UNKNOWN';
};
```

### Alert sort order (client)

```javascript
c.sortedZones = function() {
  var order = {at_risk: 0, evacuated: 1, safe: 2, closed: 3};
  return c.data.zones.slice().sort(function(a,b){
    return (order[a.status]||4) - (order[b.status]||4);
  });
};
```

### Alert filter (client)

```javascript
c.alertZones = function() {
  return c.data.zones.filter(function(z){
    return (z.status === 'at_risk' || z.status === 'evacuated') && z.publicNotes;
  });
};
```

---

## 5. Open Questions for Jordan

1. **Single page or two pages?** District map + existing zone grid can live on one SP page. Saves a nav link. Recommend: embed zone grid *below* the map as a detail section — remove the standalone zone-grid page. Flag to Alex if scope question.
2. **SVG accuracy:** Las Vegas shape is approximate. Exact geo boundaries are out of scope — rectilinear boxes labelled by district are sufficient for the demo.
3. **Guest ACL:** Confirm guest user has `read` on `x_snc_apocalypse_0_zone` for fields: `name`, `district`, `status`, `headcount`, `capacity`, `public_notes`. Jordan adds security rule per Sam §10 note 5.

---

*Status: COMPLETE — Morgan hands off to Jordan. Build UI-3 enhanced map as `sp_district_map` widget.*
