import '@servicenow/sdk/global'
import { Workspace, UxListMenuConfig, Acl, Applicability, Role } from '@servicenow/sdk/core'

// ─── Role & Applicability ─────────────────────────────────────────────────────

export const apocOperatorRole = Role({
    $id: Now.ID['apoc_operator_role'],
    name: 'x_snc_apocalypse_0.operator',
    containsRoles: ['canvas_user'],
})

const apocApplicability = Applicability({
    $id: Now.ID['apoc_applicability'],
    name: 'ApocalypseNow Operators',
    roles: [apocOperatorRole],
})

// ─── List Menu Config ─────────────────────────────────────────────────────────

const listConfig = UxListMenuConfig({
    $id: Now.ID['apoc_list_menu_config'],
    name: 'ApocalypseNow Mission Control Navigation',
    categories: [
        // ── M1: Evacuation Zone Management ──
        {
            $id: Now.ID['apoc_lm_cat_ops'],
            title: 'M1 — Zone Management',
            order: 100,
            lists: [
                {
                    $id: Now.ID['apoc_lm_zones_active'],
                    title: 'Active Zones',
                    table: 'x_snc_apocalypse_0_zone',
                    condition: 'zone_status=safe^ORzone_status=at_risk',
                    columns: 'number,short_description,district,zone_status,headcount,capacity',
                    order: 100,
                    applicabilities: [{ $id: Now.ID['apoc_lm_zones_active_app'], applicability: apocApplicability }],
                },
                {
                    $id: Now.ID['apoc_lm_zones_atrisk'],
                    title: 'At Risk',
                    table: 'x_snc_apocalypse_0_zone',
                    condition: 'zone_status=at_risk',
                    columns: 'number,short_description,district,zone_status,headcount,capacity,zone_commander',
                    order: 200,
                    applicabilities: [{ $id: Now.ID['apoc_lm_zones_atrisk_app'], applicability: apocApplicability }],
                },
                {
                    $id: Now.ID['apoc_lm_zones_all'],
                    title: 'All Zones',
                    table: 'x_snc_apocalypse_0_zone',
                    condition: '',
                    columns: 'number,short_description,district,zone_status,headcount,capacity,zone_commander',
                    order: 300,
                    applicabilities: [{ $id: Now.ID['apoc_lm_zones_all_app'], applicability: apocApplicability }],
                },
            ],
        },
        // ── M2: Rescue Team Dispatch ──
        {
            $id: Now.ID['apoc_lm_cat_rescue'],
            title: 'M2 — Rescue Dispatch',
            order: 200,
            lists: [
                {
                    $id: Now.ID['apoc_lm_rescue_open'],
                    title: 'Open',
                    table: 'x_snc_apocalypse_0_rescue',
                    condition: 'active=true',
                    columns: 'number,short_description,zone,request_type,priority,state,assigned_to',
                    order: 100,
                    applicabilities: [{ $id: Now.ID['apoc_lm_rescue_open_app'], applicability: apocApplicability }],
                },
                {
                    $id: Now.ID['apoc_lm_rescue_critical'],
                    title: 'Critical',
                    table: 'x_snc_apocalypse_0_rescue',
                    condition: 'priority=1^active=true',
                    columns: 'number,short_description,zone,request_type,state,assigned_to,opened_at',
                    order: 200,
                    applicabilities: [{ $id: Now.ID['apoc_lm_rescue_crit_app'], applicability: apocApplicability }],
                },
                {
                    $id: Now.ID['apoc_lm_rescue_unassigned'],
                    title: 'Unassigned',
                    table: 'x_snc_apocalypse_0_rescue',
                    condition: 'assignment_groupISEMPTY^active=true',
                    columns: 'number,short_description,zone,request_type,priority,opened_at',
                    order: 300,
                    applicabilities: [{ $id: Now.ID['apoc_lm_rescue_unassigned_app'], applicability: apocApplicability }],
                },
                {
                    $id: Now.ID['apoc_lm_rescue_all'],
                    title: 'All',
                    table: 'x_snc_apocalypse_0_rescue',
                    condition: '',
                    columns: 'number,short_description,zone,request_type,priority,state,assigned_to,opened_at',
                    order: 400,
                    applicabilities: [{ $id: Now.ID['apoc_lm_rescue_all_app'], applicability: apocApplicability }],
                },
            ],
        },
        // ── M3: Civilian Intake & Triage ──
        {
            $id: Now.ID['apoc_lm_cat_civilian'],
            title: 'M3 — Civilian Intake',
            order: 300,
            lists: [
                {
                    $id: Now.ID['apoc_lm_civ_pending'],
                    title: 'Pending Triage',
                    table: 'x_snc_apocalypse_0_civilian',
                    condition: 'civilian_status=pending',
                    columns: 'number,full_name,zone_requested,triage_class,triage_source,civilian_status,sys_created_on',
                    order: 100,
                    applicabilities: [{ $id: Now.ID['apoc_lm_civ_pending_app'], applicability: apocApplicability }],
                },
                {
                    $id: Now.ID['apoc_lm_civ_manual'],
                    title: 'Manual Review',
                    table: 'x_snc_apocalypse_0_civilian',
                    condition: 'triage_class=manual_review',
                    columns: 'number,full_name,symptom_text,triage_reasoning,civilian_status,sys_created_on',
                    order: 200,
                    applicabilities: [{ $id: Now.ID['apoc_lm_civ_manual_app'], applicability: apocApplicability }],
                },
                {
                    $id: Now.ID['apoc_lm_civ_quarantine'],
                    title: 'Quarantine Classified',
                    table: 'x_snc_apocalypse_0_civilian',
                    condition: 'triage_class=quarantine',
                    columns: 'number,full_name,zone_assigned,triage_reasoning,sys_created_on',
                    order: 300,
                    applicabilities: [{ $id: Now.ID['apoc_lm_civ_quar_app'], applicability: apocApplicability }],
                },
                {
                    $id: Now.ID['apoc_lm_civ_all'],
                    title: 'All Civilians',
                    table: 'x_snc_apocalypse_0_civilian',
                    condition: '',
                    columns: 'number,full_name,zone_requested,triage_class,triage_source,civilian_status,sys_created_on',
                    order: 400,
                    applicabilities: [{ $id: Now.ID['apoc_lm_civ_all_app'], applicability: apocApplicability }],
                },
            ],
        },
        // ── M4: Supply Chain ──
        {
            $id: Now.ID['apoc_lm_cat_supply'],
            title: 'M4 — Supply Chain',
            order: 400,
            lists: [
                {
                    $id: Now.ID['apoc_lm_supply_low'],
                    title: 'Low / Depleted',
                    table: 'x_snc_apocalypse_0_supply',
                    condition: 'supply_status=low^ORsupply_status=depleted',
                    columns: 'supply_name,supply_type,zone,quantity,supply_status',
                    order: 100,
                    applicabilities: [{ $id: Now.ID['apoc_lm_supply_low_app'], applicability: apocApplicability }],
                },
                {
                    $id: Now.ID['apoc_lm_supply_all'],
                    title: 'All Inventory',
                    table: 'x_snc_apocalypse_0_supply',
                    condition: '',
                    columns: 'supply_name,supply_type,zone,quantity,supply_status',
                    order: 200,
                    applicabilities: [{ $id: Now.ID['apoc_lm_supply_all_app'], applicability: apocApplicability }],
                },
            ],
        },
        // ── M5: Quarantine Case Management ──
        {
            $id: Now.ID['apoc_lm_cat_quarantine'],
            title: 'M5 — Quarantine',
            order: 500,
            lists: [
                {
                    $id: Now.ID['apoc_lm_quar_open'],
                    title: 'Open Cases',
                    table: 'x_snc_apocalypse_0_quarantine',
                    condition: 'case_status=open',
                    columns: 'number,civilian,zone,case_status,opened_at',
                    order: 100,
                    applicabilities: [{ $id: Now.ID['apoc_lm_quar_open_app'], applicability: apocApplicability }],
                },
                {
                    $id: Now.ID['apoc_lm_quar_review'],
                    title: 'Under Review',
                    table: 'x_snc_apocalypse_0_quarantine',
                    condition: 'case_status=under_review',
                    columns: 'number,civilian,zone,case_status,opened_at',
                    order: 200,
                    applicabilities: [{ $id: Now.ID['apoc_lm_quar_review_app'], applicability: apocApplicability }],
                },
                {
                    $id: Now.ID['apoc_lm_quar_all'],
                    title: 'All Cases',
                    table: 'x_snc_apocalypse_0_quarantine',
                    condition: '',
                    columns: 'number,civilian,zone,case_status,opened_at',
                    order: 300,
                    applicabilities: [{ $id: Now.ID['apoc_lm_quar_all_app'], applicability: apocApplicability }],
                },
            ],
        },
        // ── M6: Mission Control (cross-module) ──
        {
            $id: Now.ID['apoc_lm_cat_mission'],
            title: 'M6 — Mission Control',
            order: 600,
            lists: [
                {
                    $id: Now.ID['apoc_lm_mission_allzones'],
                    title: 'All Zones',
                    table: 'x_snc_apocalypse_0_zone',
                    condition: '',
                    columns: 'number,short_description,zone_status,headcount,capacity,zone_commander',
                    order: 100,
                    applicabilities: [{ $id: Now.ID['apoc_lm_mission_allzones_app'], applicability: apocApplicability }],
                },
                {
                    $id: Now.ID['apoc_lm_mission_rescue'],
                    title: 'Active Rescue',
                    table: 'x_snc_apocalypse_0_rescue',
                    condition: 'active=true',
                    columns: 'number,short_description,zone,priority,state,assigned_to',
                    order: 200,
                    applicabilities: [{ $id: Now.ID['apoc_lm_mission_rescue_app'], applicability: apocApplicability }],
                },
                {
                    $id: Now.ID['apoc_lm_mission_triage'],
                    title: 'Pending Triage',
                    table: 'x_snc_apocalypse_0_civilian',
                    condition: 'civilian_status=pending',
                    columns: 'number,full_name,triage_class,zone_requested,sys_created_on',
                    order: 300,
                    applicabilities: [{ $id: Now.ID['apoc_lm_mission_triage_app'], applicability: apocApplicability }],
                },
            ],
        },
    ],
})

// ─── Workspace ────────────────────────────────────────────────────────────────

export const missionControlWorkspace = Workspace({
    $id: Now.ID['apoc_mission_control_workspace'],
    title: 'Mission Control',
    path: 'apoc-mission-control',
    tables: [
        'x_snc_apocalypse_0_zone',
        'x_snc_apocalypse_0_rescue',
        'x_snc_apocalypse_0_civilian',
        'x_snc_apocalypse_0_quarantine',
    ],
    listConfig: listConfig,
})

// ─── ACL ─────────────────────────────────────────────────────────────────────

Acl({
    $id: Now.ID['apoc_mission_control_acl'],
    localOrExisting: 'Existing',
    type: 'ux_route',
    operation: 'read',
    roles: ['x_snc_apocalypse_0.operator'],
    name: 'now.apoc-mission-control.*',
})
