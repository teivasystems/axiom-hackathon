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
        // ── Operations ──
        {
            $id: Now.ID['apoc_lm_cat_ops'],
            title: 'Operations',
            order: 100,
            lists: [
                {
                    $id: Now.ID['apoc_lm_zones_active'],
                    title: 'Active Zones',
                    table: 'x_snc_apocalypse_0_zone',
                    condition: 'zone_statusINsafe,at_risk^EQ',
                    columns: 'number,short_description,district,zone_status,headcount,capacity',
                    order: 100,
                    applicabilities: [{ $id: Now.ID['apoc_lm_zones_active_app'], applicability: apocApplicability }],
                },
                {
                    $id: Now.ID['apoc_lm_zones_all'],
                    title: 'All Zones',
                    table: 'x_snc_apocalypse_0_zone',
                    condition: '',
                    columns: 'number,short_description,district,zone_status,headcount,capacity,zone_commander',
                    order: 200,
                    applicabilities: [{ $id: Now.ID['apoc_lm_zones_all_app'], applicability: apocApplicability }],
                },
            ],
        },
        // ── Rescue ──
        {
            $id: Now.ID['apoc_lm_cat_rescue'],
            title: 'Rescue',
            order: 200,
            lists: [
                {
                    $id: Now.ID['apoc_lm_rescue_open'],
                    title: 'Open',
                    table: 'x_snc_apocalypse_0_rescue',
                    condition: 'stateNOT IN3,7^EQ',
                    columns: 'number,short_description,zone,request_type,priority,state,assigned_to',
                    order: 100,
                    applicabilities: [{ $id: Now.ID['apoc_lm_rescue_open_app'], applicability: apocApplicability }],
                },
                {
                    $id: Now.ID['apoc_lm_rescue_critical'],
                    title: 'Critical',
                    table: 'x_snc_apocalypse_0_rescue',
                    condition: 'priority=1^EQ',
                    columns: 'number,short_description,zone,request_type,state,assigned_to,opened_at',
                    order: 200,
                    applicabilities: [{ $id: Now.ID['apoc_lm_rescue_crit_app'], applicability: apocApplicability }],
                },
                {
                    $id: Now.ID['apoc_lm_rescue_all'],
                    title: 'All',
                    table: 'x_snc_apocalypse_0_rescue',
                    condition: '',
                    columns: 'number,short_description,zone,request_type,priority,state,assigned_to,opened_at',
                    order: 300,
                    applicabilities: [{ $id: Now.ID['apoc_lm_rescue_all_app'], applicability: apocApplicability }],
                },
            ],
        },
        // ── Civilian Intake ──
        {
            $id: Now.ID['apoc_lm_cat_civilian'],
            title: 'Civilian Intake',
            order: 300,
            lists: [
                {
                    $id: Now.ID['apoc_lm_civ_pending'],
                    title: 'Pending Triage',
                    table: 'x_snc_apocalypse_0_civilian',
                    condition: 'civilian_status=pending^EQ',
                    columns: 'number,full_name,zone_requested,triage_class,triage_source,civilian_status,sys_created_on',
                    order: 100,
                    applicabilities: [{ $id: Now.ID['apoc_lm_civ_pending_app'], applicability: apocApplicability }],
                },
                {
                    $id: Now.ID['apoc_lm_civ_quarantine'],
                    title: 'Quarantine',
                    table: 'x_snc_apocalypse_0_civilian',
                    condition: 'civilian_status=quarantine^EQ',
                    columns: 'number,full_name,zone_assigned,triage_class,triage_reasoning,sys_created_on',
                    order: 200,
                    applicabilities: [{ $id: Now.ID['apoc_lm_civ_quar_app'], applicability: apocApplicability }],
                },
                {
                    $id: Now.ID['apoc_lm_civ_all'],
                    title: 'All Civilians',
                    table: 'x_snc_apocalypse_0_civilian',
                    condition: '',
                    columns: 'number,full_name,zone_requested,triage_class,triage_source,civilian_status,sys_created_on',
                    order: 300,
                    applicabilities: [{ $id: Now.ID['apoc_lm_civ_all_app'], applicability: apocApplicability }],
                },
            ],
        },
        // ── Quarantine Cases ──
        {
            $id: Now.ID['apoc_lm_cat_quarantine'],
            title: 'Quarantine Cases',
            order: 400,
            lists: [
                {
                    $id: Now.ID['apoc_lm_quar_open'],
                    title: 'Open',
                    table: 'x_snc_apocalypse_0_quarantine',
                    condition: 'case_status=open^EQ',
                    columns: 'number,civilian,zone,case_status,opened_at',
                    order: 100,
                    applicabilities: [{ $id: Now.ID['apoc_lm_quar_open_app'], applicability: apocApplicability }],
                },
                {
                    $id: Now.ID['apoc_lm_quar_all'],
                    title: 'All',
                    table: 'x_snc_apocalypse_0_quarantine',
                    condition: '',
                    columns: 'number,civilian,zone,case_status,opened_at',
                    order: 200,
                    applicabilities: [{ $id: Now.ID['apoc_lm_quar_all_app'], applicability: apocApplicability }],
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
