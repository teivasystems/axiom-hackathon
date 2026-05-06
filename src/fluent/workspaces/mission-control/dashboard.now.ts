import '@servicenow/sdk/global'
import { Dashboard } from '@servicenow/sdk/core'
import { missionControlWorkspace } from './workspace.now'

Dashboard({
    $id: Now.ID['apoc_mission_control_dashboard'],
    name: 'Mission Control Overview',
    tabs: [
        {
            $id: Now.ID['apoc_dash_tab_overview'],
            name: 'Overview',
            widgets: [
                // ── Row 1: four single-score counters ──────────────────────
                {
                    $id: Now.ID['apoc_dash_w_zones_active'],
                    component: 'single-score',
                    componentProps: {
                        headerTitle: 'Active Zones',
                        dataSources: [{
                            id: 'ds_zones',
                            label: 'Evacuation Zone',
                            sourceType: 'table',
                            tableOrViewName: 'x_snc_apocalypse_0_zone',
                            filterQuery: 'zone_statusINsafe,at_risk^EQ',
                        }],
                        metrics: [{
                            id: 'metric_zones',
                            dataSource: 'ds_zones',
                            aggregateFunction: 'COUNT',
                            axisId: 'primary',
                        }],
                    },
                    height: 14,
                    width: 12,
                    position: { x: 0, y: 0 },
                },
                {
                    $id: Now.ID['apoc_dash_w_rescue_open'],
                    component: 'single-score',
                    componentProps: {
                        headerTitle: 'Open Rescue Requests',
                        dataSources: [{
                            id: 'ds_rescue',
                            label: 'Rescue Request',
                            sourceType: 'table',
                            tableOrViewName: 'x_snc_apocalypse_0_rescue',
                            filterQuery: 'stateNOT IN3,7^EQ',
                        }],
                        metrics: [{
                            id: 'metric_rescue',
                            dataSource: 'ds_rescue',
                            aggregateFunction: 'COUNT',
                            axisId: 'primary',
                        }],
                    },
                    height: 14,
                    width: 12,
                    position: { x: 12, y: 0 },
                },
                {
                    $id: Now.ID['apoc_dash_w_civ_pending'],
                    component: 'single-score',
                    componentProps: {
                        headerTitle: 'Pending Triage',
                        dataSources: [{
                            id: 'ds_civ_pending',
                            label: 'Civilian',
                            sourceType: 'table',
                            tableOrViewName: 'x_snc_apocalypse_0_civilian',
                            filterQuery: 'civilian_status=pending^EQ',
                        }],
                        metrics: [{
                            id: 'metric_civ_pending',
                            dataSource: 'ds_civ_pending',
                            aggregateFunction: 'COUNT',
                            axisId: 'primary',
                        }],
                    },
                    height: 14,
                    width: 12,
                    position: { x: 24, y: 0 },
                },
                {
                    $id: Now.ID['apoc_dash_w_quarantine_open'],
                    component: 'single-score',
                    componentProps: {
                        headerTitle: 'Open Quarantine Cases',
                        dataSources: [{
                            id: 'ds_quar',
                            label: 'Quarantine Case',
                            sourceType: 'table',
                            tableOrViewName: 'x_snc_apocalypse_0_quarantine',
                            filterQuery: 'case_status=open^EQ',
                        }],
                        metrics: [{
                            id: 'metric_quar',
                            dataSource: 'ds_quar',
                            aggregateFunction: 'COUNT',
                            axisId: 'primary',
                        }],
                    },
                    height: 14,
                    width: 12,
                    position: { x: 36, y: 0 },
                },

                // ── Row 2: rescue by priority (bar) + zones by status (donut) ──
                {
                    $id: Now.ID['apoc_dash_w_rescue_priority'],
                    component: 'vertical-bar',
                    componentProps: {
                        headerTitle: 'Rescue Requests by Priority',
                        dataSources: [{
                            id: 'ds_rescue_all',
                            label: 'Rescue Request',
                            sourceType: 'table',
                            tableOrViewName: 'x_snc_apocalypse_0_rescue',
                            filterQuery: '',
                        }],
                        metrics: [{
                            id: 'metric_rescue_all',
                            dataSource: 'ds_rescue_all',
                            aggregateFunction: 'COUNT',
                            axisId: 'primary',
                        }],
                        groupBy: [{
                            groupBy: [{ dataSource: 'ds_rescue_all', groupByField: 'priority' }],
                            maxNumberOfGroups: 5,
                            showOthers: false,
                        }],
                        sortBy: 'label',
                    },
                    height: 20,
                    width: 24,
                    position: { x: 0, y: 14 },
                },
                {
                    $id: Now.ID['apoc_dash_w_zone_status'],
                    component: 'donut',
                    componentProps: {
                        headerTitle: 'Zones by Status',
                        dataSources: [{
                            id: 'ds_zones_all',
                            label: 'Evacuation Zone',
                            sourceType: 'table',
                            tableOrViewName: 'x_snc_apocalypse_0_zone',
                            filterQuery: '',
                        }],
                        metrics: [{
                            id: 'metric_zones_all',
                            dataSource: 'ds_zones_all',
                            aggregateFunction: 'COUNT',
                            axisId: 'primary',
                        }],
                        groupBy: [{
                            groupBy: [{ dataSource: 'ds_zones_all', groupByField: 'zone_status' }],
                            maxNumberOfGroups: 10,
                            showOthers: false,
                        }],
                    },
                    height: 20,
                    width: 24,
                    position: { x: 24, y: 14 },
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
