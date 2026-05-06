import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

// ─── M1: Evacuation Zone Management ──────────────────────────────────────────

Record({
    $id: Now.ID['rpt_zones_by_status'],
    table: 'sys_report',
    data: {
        title: '[APOC] Zones by Status',
        table: 'x_snc_apocalypse_0_zone',
        type: 'donut',
        field: 'zone_status',
        aggregate: 'COUNT',
        filter: '',
        is_public: true,
        category: 'ApocalypseNow',
    },
})

Record({
    $id: Now.ID['rpt_zones_active_count'],
    table: 'sys_report',
    data: {
        title: '[APOC] Active Zones Count',
        table: 'x_snc_apocalypse_0_zone',
        type: 'single_score',
        aggregate: 'COUNT',
        filter: 'zone_status=safe^ORzone_status=at_risk',
        is_public: true,
        category: 'ApocalypseNow',
    },
})

Record({
    $id: Now.ID['rpt_zones_atrisk_count'],
    table: 'sys_report',
    data: {
        title: '[APOC] At-Risk Zones Count',
        table: 'x_snc_apocalypse_0_zone',
        type: 'single_score',
        aggregate: 'COUNT',
        filter: 'zone_status=at_risk',
        is_public: true,
        category: 'ApocalypseNow',
    },
})

Record({
    $id: Now.ID['rpt_zones_headcount_bar'],
    table: 'sys_report',
    data: {
        title: '[APOC] Zone Headcount vs Capacity',
        table: 'x_snc_apocalypse_0_zone',
        type: 'bar_horizontal',
        field: 'short_description',
        aggregate: 'MAX',
        sum_field: 'headcount',
        filter: 'zone_status=safe^ORzone_status=at_risk',
        is_public: true,
        category: 'ApocalypseNow',
    },
})

// ─── M2: Rescue Team Dispatch ─────────────────────────────────────────────────

Record({
    $id: Now.ID['rpt_rescue_open_count'],
    table: 'sys_report',
    data: {
        title: '[APOC] Open Rescue Requests',
        table: 'x_snc_apocalypse_0_rescue',
        type: 'single_score',
        aggregate: 'COUNT',
        filter: 'active=true',
        is_public: true,
        category: 'ApocalypseNow',
    },
})

Record({
    $id: Now.ID['rpt_rescue_critical_count'],
    table: 'sys_report',
    data: {
        title: '[APOC] Critical Rescue Requests',
        table: 'x_snc_apocalypse_0_rescue',
        type: 'single_score',
        aggregate: 'COUNT',
        filter: 'priority=1^active=true',
        is_public: true,
        category: 'ApocalypseNow',
    },
})

Record({
    $id: Now.ID['rpt_rescue_by_priority'],
    table: 'sys_report',
    data: {
        title: '[APOC] Rescue Requests by Priority',
        table: 'x_snc_apocalypse_0_rescue',
        type: 'bar',
        field: 'priority',
        aggregate: 'COUNT',
        filter: 'active=true',
        is_public: true,
        category: 'ApocalypseNow',
    },
})

Record({
    $id: Now.ID['rpt_rescue_by_type'],
    table: 'sys_report',
    data: {
        title: '[APOC] Rescue Requests by Type',
        table: 'x_snc_apocalypse_0_rescue',
        type: 'donut',
        field: 'request_type',
        aggregate: 'COUNT',
        filter: '',
        is_public: true,
        category: 'ApocalypseNow',
    },
})

Record({
    $id: Now.ID['rpt_rescue_unassigned_count'],
    table: 'sys_report',
    data: {
        title: '[APOC] Unassigned Rescue Requests',
        table: 'x_snc_apocalypse_0_rescue',
        type: 'single_score',
        aggregate: 'COUNT',
        filter: 'assignment_groupISEMPTY^active=true',
        is_public: true,
        category: 'ApocalypseNow',
    },
})

// ─── M3: Civilian Intake & Triage ─────────────────────────────────────────────

Record({
    $id: Now.ID['rpt_civilian_pending_count'],
    table: 'sys_report',
    data: {
        title: '[APOC] Civilians Pending Triage',
        table: 'x_snc_apocalypse_0_civilian',
        type: 'single_score',
        aggregate: 'COUNT',
        filter: 'civilian_status=pending',
        is_public: true,
        category: 'ApocalypseNow',
    },
})

Record({
    $id: Now.ID['rpt_civilian_by_triage'],
    table: 'sys_report',
    data: {
        title: '[APOC] Civilians by Triage Classification',
        table: 'x_snc_apocalypse_0_civilian',
        type: 'donut',
        field: 'triage_class',
        aggregate: 'COUNT',
        filter: '',
        is_public: true,
        category: 'ApocalypseNow',
    },
})

Record({
    $id: Now.ID['rpt_civilian_by_source'],
    table: 'sys_report',
    data: {
        title: '[APOC] Triage Source: AI vs Manual',
        table: 'x_snc_apocalypse_0_civilian',
        type: 'donut',
        field: 'triage_source',
        aggregate: 'COUNT',
        filter: 'triage_classISNOTEMPTY',
        is_public: true,
        category: 'ApocalypseNow',
    },
})

Record({
    $id: Now.ID['rpt_civilian_quarantine_count'],
    table: 'sys_report',
    data: {
        title: '[APOC] Quarantine-Classified Civilians',
        table: 'x_snc_apocalypse_0_civilian',
        type: 'single_score',
        aggregate: 'COUNT',
        filter: 'triage_class=quarantine',
        is_public: true,
        category: 'ApocalypseNow',
    },
})

Record({
    $id: Now.ID['rpt_civilian_by_status'],
    table: 'sys_report',
    data: {
        title: '[APOC] Civilians by Status',
        table: 'x_snc_apocalypse_0_civilian',
        type: 'bar',
        field: 'civilian_status',
        aggregate: 'COUNT',
        filter: '',
        is_public: true,
        category: 'ApocalypseNow',
    },
})

// ─── M4: Supply Chain ────────────────────────────────────────────────────────

Record({
    $id: Now.ID['rpt_supply_by_status'],
    table: 'sys_report',
    data: {
        title: '[APOC] Supply Items by Status',
        table: 'x_snc_apocalypse_0_supply',
        type: 'donut',
        field: 'supply_status',
        aggregate: 'COUNT',
        filter: '',
        is_public: true,
        category: 'ApocalypseNow',
    },
})

Record({
    $id: Now.ID['rpt_supply_critical_count'],
    table: 'sys_report',
    data: {
        title: '[APOC] Low or Depleted Supply Items',
        table: 'x_snc_apocalypse_0_supply',
        type: 'single_score',
        aggregate: 'COUNT',
        filter: 'supply_status=low^ORsupply_status=depleted',
        is_public: true,
        category: 'ApocalypseNow',
    },
})

Record({
    $id: Now.ID['rpt_supply_by_type'],
    table: 'sys_report',
    data: {
        title: '[APOC] Supply Quantity by Type',
        table: 'x_snc_apocalypse_0_supply',
        type: 'bar_horizontal',
        field: 'supply_type',
        aggregate: 'SUM',
        sum_field: 'quantity',
        filter: '',
        is_public: true,
        category: 'ApocalypseNow',
    },
})

// ─── M5: Quarantine Case Management ──────────────────────────────────────────

Record({
    $id: Now.ID['rpt_quarantine_open_count'],
    table: 'sys_report',
    data: {
        title: '[APOC] Open Quarantine Cases',
        table: 'x_snc_apocalypse_0_quarantine',
        type: 'single_score',
        aggregate: 'COUNT',
        filter: 'case_status=open',
        is_public: true,
        category: 'ApocalypseNow',
    },
})

Record({
    $id: Now.ID['rpt_quarantine_by_status'],
    table: 'sys_report',
    data: {
        title: '[APOC] Quarantine Cases by Status',
        table: 'x_snc_apocalypse_0_quarantine',
        type: 'donut',
        field: 'case_status',
        aggregate: 'COUNT',
        filter: '',
        is_public: true,
        category: 'ApocalypseNow',
    },
})

Record({
    $id: Now.ID['rpt_quarantine_by_zone'],
    table: 'sys_report',
    data: {
        title: '[APOC] Quarantine Cases by Zone',
        table: 'x_snc_apocalypse_0_quarantine',
        type: 'bar',
        field: 'zone',
        aggregate: 'COUNT',
        filter: 'case_status=open',
        is_public: true,
        category: 'ApocalypseNow',
    },
})

// ─── M6: Mission Control (cross-module summary) ───────────────────────────────

Record({
    $id: Now.ID['rpt_mc_zones_status'],
    table: 'sys_report',
    data: {
        title: '[APOC] MC — Zones by Status',
        table: 'x_snc_apocalypse_0_zone',
        type: 'donut',
        field: 'zone_status',
        aggregate: 'COUNT',
        filter: '',
        is_public: true,
        category: 'ApocalypseNow',
    },
})

Record({
    $id: Now.ID['rpt_mc_rescue_priority'],
    table: 'sys_report',
    data: {
        title: '[APOC] MC — Rescue by Priority',
        table: 'x_snc_apocalypse_0_rescue',
        type: 'bar',
        field: 'priority',
        aggregate: 'COUNT',
        filter: 'active=true',
        is_public: true,
        category: 'ApocalypseNow',
    },
})

Record({
    $id: Now.ID['rpt_mc_triage_class'],
    table: 'sys_report',
    data: {
        title: '[APOC] MC — Triage Classifications',
        table: 'x_snc_apocalypse_0_civilian',
        type: 'donut',
        field: 'triage_class',
        aggregate: 'COUNT',
        filter: '',
        is_public: true,
        category: 'ApocalypseNow',
    },
})
