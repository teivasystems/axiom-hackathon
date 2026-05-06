import '@servicenow/sdk/global'
import { Dashboard } from '@servicenow/sdk/core'
import { missionControlWorkspace } from './workspace.now'

// Visualization widgets (single-score, bar, donut) must be added via UI Builder.
// Open: /now/builder/ui/experience/0247d1acf05a4510a4055d2eca4a7436
// Each tab is a module page. Headings and rich-text deploy cleanly via SDK.

Dashboard({
    $id: Now.ID['apoc_mission_control_dashboard'],
    name: 'Mission Control Overview',
    tabs: [

        // ── M1: Evacuation Zone Management ───────────────────────────────────
        {
            $id: Now.ID['apoc_dash_tab_zones'],
            name: 'Zone Management',
            widgets: [
                {
                    $id: Now.ID['apoc_dash_zones_h1'],
                    component: 'heading',
                    componentProps: {
                        title: 'Module 1 — Evacuation Zone Management',
                        subtitle: 'Persona: Zone Commander | Track capacity, status, and district conditions across all active evacuation zones.',
                    },
                    height: 6,
                    width: 48,
                    position: { x: 0, y: 0 },
                },
                {
                    $id: Now.ID['apoc_dash_zones_info'],
                    component: 'rich-text',
                    componentProps: {
                        content: '<h3>Key Indicators</h3><ul><li><strong>Zone Status</strong> — Safe / At Risk / Evacuated / Closed</li><li><strong>Capacity Threshold</strong> — Auto-flip to At Risk when headcount ≥ 90%</li><li><strong>Zone Commander</strong> — Assigned per zone for command authority</li></ul><h3>Actions</h3><ul><li>Open a zone → set capacity and assign commander</li><li>Update headcount → triggers zone auto-flip flow</li><li>Close a zone → prevents new civilian assignments</li></ul><h3>Key Queries</h3><ul><li>At-risk zones: zone_status = at_risk</li><li>Near capacity: headcount ≥ 0.9 × capacity</li></ul>',
                    },
                    height: 20,
                    width: 24,
                    position: { x: 0, y: 6 },
                },
                {
                    $id: Now.ID['apoc_dash_zones_viz_stub'],
                    component: 'rich-text',
                    componentProps: {
                        content: '<h3>Add in UI Builder</h3><ul><li><strong>Donut</strong> — Zones by status (zone_status)</li><li><strong>Single Score</strong> — Active zones count</li><li><strong>Single Score</strong> — At-risk zones count</li><li><strong>Vertical Bar</strong> — Headcount vs capacity per zone</li></ul>',
                    },
                    height: 20,
                    width: 24,
                    position: { x: 24, y: 6 },
                },
            ],
        },

        // ── M2: Rescue Team Dispatch ─────────────────────────────────────────
        {
            $id: Now.ID['apoc_dash_tab_rescue'],
            name: 'Rescue Dispatch',
            widgets: [
                {
                    $id: Now.ID['apoc_dash_rescue_h1'],
                    component: 'heading',
                    componentProps: {
                        title: 'Module 2 — Rescue Team Dispatch',
                        subtitle: 'Persona: Rescue Coordinator | Manage active rescue requests, team assignments, and SLA compliance.',
                    },
                    height: 6,
                    width: 48,
                    position: { x: 0, y: 0 },
                },
                {
                    $id: Now.ID['apoc_dash_rescue_info'],
                    component: 'rich-text',
                    componentProps: {
                        content: '<h3>Key Indicators</h3><ul><li><strong>Priority</strong> — Critical (15 min SLA) / High (30 min) / Medium (60 min)</li><li><strong>Request Type</strong> — Medical / Structural / Fire / Missing Person / Hazmat</li><li><strong>Assignment</strong> — Team matched to zone district, then escalated</li></ul><h3>Actions</h3><ul><li>Create request → auto-dispatches nearest team (FL-3)</li><li>SLA breach → escalates priority + notifies zone commander (FL-4)</li><li>Resolve → close request and release team</li></ul><h3>Key Queries</h3><ul><li>Critical open: priority=1^active=true</li><li>Unassigned: assignment_group=NULL^active=true</li><li>SLA breaching: business_stc > 0^active=true</li></ul>',
                    },
                    height: 20,
                    width: 24,
                    position: { x: 0, y: 6 },
                },
                {
                    $id: Now.ID['apoc_dash_rescue_viz_stub'],
                    component: 'rich-text',
                    componentProps: {
                        content: '<h3>Add in UI Builder</h3><ul><li><strong>Single Score</strong> — Open requests count</li><li><strong>Single Score</strong> — Critical priority count</li><li><strong>Vertical Bar</strong> — Requests by priority</li><li><strong>Vertical Bar</strong> — Requests by request_type</li><li><strong>Single Score</strong> — Unassigned requests</li></ul>',
                    },
                    height: 20,
                    width: 24,
                    position: { x: 24, y: 6 },
                },
            ],
        },

        // ── M3: Civilian Intake & Triage ─────────────────────────────────────
        {
            $id: Now.ID['apoc_dash_tab_civilian'],
            name: 'Civilian Intake',
            widgets: [
                {
                    $id: Now.ID['apoc_dash_civ_h1'],
                    component: 'heading',
                    componentProps: {
                        title: 'Module 3 — Civilian Intake & Triage',
                        subtitle: 'Persona: Medical Triage Officer | Review AI-classified intake records, confirm triage decisions, and manage zone assignments.',
                    },
                    height: 6,
                    width: 48,
                    position: { x: 0, y: 0 },
                },
                {
                    $id: Now.ID['apoc_dash_civ_info'],
                    component: 'rich-text',
                    componentProps: {
                        content: '<h3>Triage Classifications</h3><ul><li><strong>Cleared</strong> — No symptoms. Safe for general zone assignment.</li><li><strong>Medical Attention</strong> — Needs evaluation, no isolation required.</li><li><strong>Quarantine</strong> — Potential contagion risk. Isolation case auto-opened.</li><li><strong>Manual Review</strong> — AI unavailable. Officer classifies manually.</li></ul><h3>AI Triage Flow (FL-1)</h3><ol><li>Civilian submits via portal → civilian record created (pending)</li><li>Now Assist skill ApocCivilianTriage classifies symptom text</li><li>Classification written back + zone assigned</li><li>Quarantine → quarantine case opened automatically</li></ol><h3>Key Queries</h3><ul><li>Pending triage: civilian_status=pending</li><li>Quarantine queue: triage_class=quarantine</li><li>Manual review: triage_source=manual</li></ul>',
                    },
                    height: 20,
                    width: 24,
                    position: { x: 0, y: 6 },
                },
                {
                    $id: Now.ID['apoc_dash_civ_viz_stub'],
                    component: 'rich-text',
                    componentProps: {
                        content: '<h3>Add in UI Builder</h3><ul><li><strong>Single Score</strong> — Pending triage count</li><li><strong>Single Score</strong> — Quarantine classifications today</li><li><strong>Donut</strong> — Civilians by triage_class</li><li><strong>Donut</strong> — Triage source (AI vs manual)</li><li><strong>Line</strong> — Intake volume over time</li></ul>',
                    },
                    height: 20,
                    width: 24,
                    position: { x: 24, y: 6 },
                },
            ],
        },

        // ── M4: Supply Chain & Inventory ─────────────────────────────────────
        {
            $id: Now.ID['apoc_dash_tab_supply'],
            name: 'Supply Chain',
            widgets: [
                {
                    $id: Now.ID['apoc_dash_supply_h1'],
                    component: 'heading',
                    componentProps: {
                        title: 'Module 4 — Supply Chain & Inventory',
                        subtitle: 'Persona: Logistics Officer | Track supply stock levels, zone allocations, and critical shortfalls. (Stub — descoped from v1)',
                    },
                    height: 6,
                    width: 48,
                    position: { x: 0, y: 0 },
                },
                {
                    $id: Now.ID['apoc_dash_supply_info'],
                    component: 'rich-text',
                    componentProps: {
                        content: '<h3>Supply Types (Planned)</h3><ul><li>Medical — first aid kits, medications, stretchers</li><li>Food &amp; Water — rations, potable water, containers</li><li>Shelter — tents, blankets, cots</li><li>Safety — PPE, hazmat suits, decontamination kits</li><li>Communication — radios, batteries, satellite phones</li></ul><h3>Status Values</h3><ul><li><strong>Available</strong> — In stock at zone</li><li><strong>Low</strong> — Below 20% threshold, reorder needed</li><li><strong>Depleted</strong> — Out of stock</li><li><strong>In Transit</strong> — En route to zone</li></ul><h3>v1 Scope Note</h3><p>Supply table is scaffolded. Full flows (reorder triggers, inter-zone transfers) are deferred to v2. Use the Supply Items list to manually track inventory during the event.</p>',
                    },
                    height: 20,
                    width: 24,
                    position: { x: 0, y: 6 },
                },
                {
                    $id: Now.ID['apoc_dash_supply_viz_stub'],
                    component: 'rich-text',
                    componentProps: {
                        content: '<h3>Add in UI Builder (v2)</h3><ul><li><strong>Horizontal Bar</strong> — Quantity by supply_type</li><li><strong>Single Score</strong> — Low/depleted items count</li><li><strong>Donut</strong> — Supply by zone</li><li><strong>List</strong> — Critical shortfalls (supply_status=low OR depleted)</li></ul>',
                    },
                    height: 20,
                    width: 24,
                    position: { x: 24, y: 6 },
                },
            ],
        },

        // ── M5: Quarantine Case Management ───────────────────────────────────
        {
            $id: Now.ID['apoc_dash_tab_quarantine'],
            name: 'Quarantine',
            widgets: [
                {
                    $id: Now.ID['apoc_dash_quar_h1'],
                    component: 'heading',
                    componentProps: {
                        title: 'Module 5 — Quarantine Case Management',
                        subtitle: 'Persona: Quarantine Officer | Manage isolation cases opened from civilian triage, monitor case status and zone containment.',
                    },
                    height: 6,
                    width: 48,
                    position: { x: 0, y: 0 },
                },
                {
                    $id: Now.ID['apoc_dash_quar_info'],
                    component: 'rich-text',
                    componentProps: {
                        content: '<h3>Case Lifecycle</h3><ol><li>Civilian classified as Quarantine by triage flow (FL-1)</li><li>Quarantine case auto-created, linked to civilian + zone</li><li>Officer reviews and manages isolation</li><li>Case resolved when civilian cleared or transferred</li></ol><h3>Case Status Values</h3><ul><li><strong>Open</strong> — Active isolation in progress</li><li><strong>Under Review</strong> — Medical assessment pending</li><li><strong>Resolved</strong> — Civilian cleared from isolation</li><li><strong>Transferred</strong> — Moved to dedicated medical facility</li></ul><h3>Key Queries</h3><ul><li>Open cases: case_status=open</li><li>Cases by zone: zone=&lt;zone_sys_id&gt;</li><li>Resolved today: case_status=resolved^resolved_atONToday@javascript:gs.beginningOfToday()@javascript:gs.endOfToday()</li></ul>',
                    },
                    height: 20,
                    width: 24,
                    position: { x: 0, y: 6 },
                },
                {
                    $id: Now.ID['apoc_dash_quar_viz_stub'],
                    component: 'rich-text',
                    componentProps: {
                        content: '<h3>Add in UI Builder</h3><ul><li><strong>Single Score</strong> — Open quarantine cases</li><li><strong>Single Score</strong> — Cases opened today</li><li><strong>Donut</strong> — Cases by case_status</li><li><strong>Vertical Bar</strong> — Cases by zone</li></ul>',
                    },
                    height: 20,
                    width: 24,
                    position: { x: 24, y: 6 },
                },
            ],
        },

        // ── M6: Public Alerts & Mission Control ──────────────────────────────
        {
            $id: Now.ID['apoc_dash_tab_mission'],
            name: 'Mission Control',
            widgets: [
                {
                    $id: Now.ID['apoc_dash_mission_h1'],
                    component: 'heading',
                    componentProps: {
                        title: 'Module 6 — Public Alerts & Mission Control',
                        subtitle: 'Persona: Incident Commander | Full system situational awareness — zone health, rescue load, triage queue, and public-facing portal.',
                    },
                    height: 6,
                    width: 48,
                    position: { x: 0, y: 0 },
                },
                {
                    $id: Now.ID['apoc_dash_mission_links'],
                    component: 'rich-text',
                    componentProps: {
                        content: '<h3>Civilian Portal</h3><ul><li><strong>Zone Status Board</strong> — <a href="/apoc?id=apoc-zones">/apoc?id=apoc-zones</a> (public)</li><li><strong>Civilian Registration</strong> — <a href="/apoc?id=apoc-register">/apoc?id=apoc-register</a> (public)</li></ul><h3>System Health Checklist</h3><ul><li>All zones have a commander assigned</li><li>No zone at 100% capacity</li><li>No rescue requests unassigned &gt; 15 min</li><li>Triage pending queue &lt; 10 records</li><li>No open quarantine cases in general population zones</li></ul><h3>Escalation Path</h3><p>Zone Commander → Rescue Coordinator → Medical Officer → Incident Commander</p>',
                    },
                    height: 20,
                    width: 24,
                    position: { x: 0, y: 6 },
                },
                {
                    $id: Now.ID['apoc_dash_mission_viz_stub'],
                    component: 'rich-text',
                    componentProps: {
                        content: '<h3>Add in UI Builder — Cross-Module Summary</h3><ul><li><strong>Single Score</strong> — Active zones</li><li><strong>Single Score</strong> — Open rescue requests</li><li><strong>Single Score</strong> — Pending triage</li><li><strong>Single Score</strong> — Open quarantine cases</li><li><strong>Vertical Bar</strong> — Rescue by priority</li><li><strong>Donut</strong> — Zones by status</li><li><strong>Line</strong> — Civilian intake volume (today)</li></ul>',
                    },
                    height: 20,
                    width: 24,
                    position: { x: 24, y: 6 },
                },
            ],
        },
    ],

    visibilities: [{
        $id: Now.ID['apoc_dash_visibility'],
        experience: missionControlWorkspace,
    }],
    permissions: [],
})
