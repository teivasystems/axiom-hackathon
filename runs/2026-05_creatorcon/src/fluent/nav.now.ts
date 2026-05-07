import '@servicenow/sdk/global'
import { ApplicationMenu, Record } from '@servicenow/sdk/core'

const appCategory = Record({
    $id: Now.ID['apoc_nav_category'],
    table: 'sys_app_category',
    data: {
        name: 'ApocalypseNow',
        style: 'border-color: #dc2626; background-color: #fef2f2;',
        default_order: 100,
    },
})

const appMenu = ApplicationMenu({
    $id: Now.ID['apoc_app_menu'],
    title: 'ApocalypseNow',
    hint: 'City-scale emergency response operations',
    description: 'Evacuation zones, rescue dispatch, civilian intake, and mission control.',
    category: appCategory,
    active: true,
})

// ─── OPERATIONS ───────────────────────────────────────────────────────────────

Record({
    $id: Now.ID['apoc_mod_sep_ops'],
    table: 'sys_app_module',
    data: {
        title: 'Operations',
        application: appMenu,
        link_type: 'SEPARATOR',
        active: true,
        order: 100,
    },
})

Record({
    $id: Now.ID['apoc_mod_zones'],
    table: 'sys_app_module',
    data: {
        title: 'Evacuation Zones',
        application: appMenu,
        link_type: 'LIST',
        name: 'x_snc_apocalypse_0_zone',
        hint: 'All evacuation zones and capacity status',
        active: true,
        order: 200,
    },
})

Record({
    $id: Now.ID['apoc_mod_zone_new'],
    table: 'sys_app_module',
    data: {
        title: '+ New Zone',
        application: appMenu,
        link_type: 'NEW',
        name: 'x_snc_apocalypse_0_zone',
        hint: 'Create a new evacuation zone',
        active: true,
        order: 300,
    },
})

Record({
    $id: Now.ID['apoc_mod_rescue'],
    table: 'sys_app_module',
    data: {
        title: 'Rescue Requests',
        application: appMenu,
        link_type: 'LIST',
        name: 'x_snc_apocalypse_0_rescue',
        hint: 'All active rescue requests',
        active: true,
        order: 400,
    },
})

Record({
    $id: Now.ID['apoc_mod_rescue_new'],
    table: 'sys_app_module',
    data: {
        title: '+ New Rescue Request',
        application: appMenu,
        link_type: 'NEW',
        name: 'x_snc_apocalypse_0_rescue',
        hint: 'Log a new rescue request',
        active: true,
        order: 500,
    },
})

// ─── CIVILIAN INTAKE ──────────────────────────────────────────────────────────

Record({
    $id: Now.ID['apoc_mod_sep_civilian'],
    table: 'sys_app_module',
    data: {
        title: 'Civilian Intake',
        application: appMenu,
        link_type: 'SEPARATOR',
        active: true,
        order: 600,
    },
})

Record({
    $id: Now.ID['apoc_mod_civilians'],
    table: 'sys_app_module',
    data: {
        title: 'All Civilians',
        application: appMenu,
        link_type: 'LIST',
        name: 'x_snc_apocalypse_0_civilian',
        hint: 'All civilian intake records',
        active: true,
        order: 700,
    },
})

Record({
    $id: Now.ID['apoc_mod_triage_pending'],
    table: 'sys_app_module',
    data: {
        title: 'Pending Triage',
        application: appMenu,
        link_type: 'FILTER',
        name: 'x_snc_apocalypse_0_civilian',
        filter: 'civilian_status=pending',
        hint: 'Civilians awaiting triage confirmation',
        active: true,
        order: 800,
    },
})

Record({
    $id: Now.ID['apoc_mod_quarantine'],
    table: 'sys_app_module',
    data: {
        title: 'Quarantine Cases',
        application: appMenu,
        link_type: 'LIST',
        name: 'x_snc_apocalypse_0_quarantine',
        hint: 'All quarantine cases opened by triage flow',
        active: true,
        order: 900,
    },
})

// ─── ADMINISTRATION ───────────────────────────────────────────────────────────

Record({
    $id: Now.ID['apoc_mod_sep_admin'],
    table: 'sys_app_module',
    data: {
        title: 'Administration',
        application: appMenu,
        link_type: 'SEPARATOR',
        active: true,
        order: 1000,
    },
})

Record({
    $id: Now.ID['apoc_mod_supply'],
    table: 'sys_app_module',
    data: {
        title: 'Supply Items',
        application: appMenu,
        link_type: 'LIST',
        name: 'x_snc_apocalypse_0_supply',
        hint: 'Supply inventory stub (Module 4 — descoped)',
        active: true,
        order: 1100,
    },
})

// ─── MISSION CONTROL ──────────────────────────────────────────────────────────

Record({
    $id: Now.ID['apoc_mod_sep_mission'],
    table: 'sys_app_module',
    data: {
        title: 'Mission Control',
        application: appMenu,
        link_type: 'SEPARATOR',
        active: true,
        order: 1200,
    },
})

Record({
    $id: Now.ID['apoc_mod_mission_control'],
    table: 'sys_app_module',
    data: {
        title: 'Mission Control Workspace',
        application: appMenu,
        link_type: 'DIRECT',
        html_content: '/now/apoc-mission-control/home',
        hint: 'UI Builder workspace — live ops dashboard, zone and rescue management',
        active: true,
        order: 1300,
    },
})
