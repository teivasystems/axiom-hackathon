import '@servicenow/sdk/global'
import { Form, List, default_view } from '@servicenow/sdk/core'

// ─── T-1: Evacuation Zone ─────────────────────────────────────────────────────

Form({
    table: 'x_snc_apocalypse_0_zone' as any,
    view: default_view,
    sections: [
        {
            caption: 'Zone Details',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        { type: 'table_field', field: 'short_description' },
                        { type: 'table_field', field: 'district' },
                    ],
                    rightElements: [
                        { type: 'table_field', field: 'zone_status' },
                        { type: 'table_field', field: 'zone_commander' },
                    ],
                },
            ],
        },
        {
            caption: 'Capacity',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        { type: 'table_field', field: 'capacity' },
                    ],
                    rightElements: [
                        { type: 'table_field', field: 'headcount' },
                    ],
                },
            ],
        },
        {
            caption: 'Public Information',
            content: [
                {
                    layout: 'one-column',
                    elements: [
                        { type: 'table_field', field: 'public_notes' },
                    ],
                },
            ],
        },
        {
            caption: 'Activity',
            content: [
                {
                    layout: 'one-column',
                    elements: [
                        { type: 'formatter', formatterRef: 'Activities_Filtered' },
                    ],
                },
            ],
        },
    ],
})

List({
    table: 'x_snc_apocalypse_0_zone' as any,
    view: default_view,
    columns: [
        { element: 'number',            position: 0 },
        { element: 'short_description', position: 1 },
        { element: 'district',          position: 2 },
        { element: 'zone_status',       position: 3 },
        { element: 'headcount',         position: 4 },
        { element: 'capacity',          position: 5 },
        { element: 'zone_commander',    position: 6 },
    ],
})

// ─── T-2: Rescue Request ──────────────────────────────────────────────────────

Form({
    table: 'x_snc_apocalypse_0_rescue' as any,
    view: default_view,
    sections: [
        {
            caption: 'Request Details',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        { type: 'table_field', field: 'number' },
                        { type: 'table_field', field: 'short_description' },
                    ],
                    rightElements: [
                        { type: 'table_field', field: 'priority' },
                        { type: 'table_field', field: 'state' },
                    ],
                },
            ],
        },
        {
            caption: 'Location',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        { type: 'table_field', field: 'zone' },
                    ],
                    rightElements: [
                        { type: 'table_field', field: 'request_type' },
                    ],
                },
                {
                    layout: 'one-column',
                    elements: [
                        { type: 'table_field', field: 'location_detail' },
                        { type: 'table_field', field: 'description' },
                    ],
                },
            ],
        },
        {
            caption: 'Assignment',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        { type: 'table_field', field: 'assigned_to' },
                    ],
                    rightElements: [
                        { type: 'table_field', field: 'assignment_group' },
                    ],
                },
            ],
        },
        {
            caption: 'Activity',
            content: [
                {
                    layout: 'one-column',
                    elements: [
                        { type: 'formatter', formatterRef: 'Activities_Filtered' },
                    ],
                },
            ],
        },
    ],
})

List({
    table: 'x_snc_apocalypse_0_rescue' as any,
    view: default_view,
    columns: [
        { element: 'number',            position: 0 },
        { element: 'short_description', position: 1 },
        { element: 'zone',              position: 2 },
        { element: 'request_type',      position: 3 },
        { element: 'priority',          position: 4 },
        { element: 'state',             position: 5 },
        { element: 'assigned_to',       position: 6 },
        { element: 'opened_at',         position: 7 },
    ],
})

// ─── T-3: Civilian Intake ─────────────────────────────────────────────────────

Form({
    table: 'x_snc_apocalypse_0_civilian' as any,
    view: default_view,
    sections: [
        {
            caption: 'Civilian Information',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        { type: 'table_field', field: 'full_name' },
                        { type: 'table_field', field: 'contact_info' },
                    ],
                    rightElements: [
                        { type: 'table_field', field: 'civilian_status' },
                        { type: 'table_field', field: 'zone_requested' },
                        { type: 'table_field', field: 'zone_assigned' },
                    ],
                },
            ],
        },
        {
            caption: 'Symptom Report',
            content: [
                {
                    layout: 'one-column',
                    elements: [
                        { type: 'table_field', field: 'symptom_text' },
                    ],
                },
            ],
        },
        {
            caption: 'Triage Classification',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        { type: 'table_field', field: 'triage_class' },
                        { type: 'table_field', field: 'triage_source' },
                    ],
                    rightElements: [
                        { type: 'table_field', field: 'confirmed_by' },
                    ],
                },
                {
                    layout: 'one-column',
                    elements: [
                        { type: 'table_field', field: 'triage_reasoning' },
                    ],
                },
            ],
        },
        {
            caption: 'Activity',
            content: [
                {
                    layout: 'one-column',
                    elements: [
                        { type: 'formatter', formatterRef: 'Activities_Filtered' },
                    ],
                },
            ],
        },
    ],
})

List({
    table: 'x_snc_apocalypse_0_civilian' as any,
    view: default_view,
    columns: [
        { element: 'number',          position: 0 },
        { element: 'full_name',       position: 1 },
        { element: 'zone_requested',  position: 2 },
        { element: 'triage_class',    position: 3 },
        { element: 'triage_source',   position: 4 },
        { element: 'civilian_status', position: 5 },
        { element: 'sys_created_on',  position: 6 },
    ],
})

// ─── T-4: Quarantine Case ─────────────────────────────────────────────────────

Form({
    table: 'x_snc_apocalypse_0_quarantine' as any,
    view: default_view,
    sections: [
        {
            caption: 'Case Details',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        { type: 'table_field', field: 'civilian' },
                        { type: 'table_field', field: 'case_status' },
                    ],
                    rightElements: [
                        { type: 'table_field', field: 'zone' },
                        { type: 'table_field', field: 'opened_at' },
                    ],
                },
            ],
        },
    ],
})

List({
    table: 'x_snc_apocalypse_0_quarantine' as any,
    view: default_view,
    columns: [
        { element: 'number',      position: 0 },
        { element: 'civilian',    position: 1 },
        { element: 'zone',        position: 2 },
        { element: 'case_status', position: 3 },
        { element: 'opened_at',   position: 4 },
    ],
})

// ─── T-5: Supply Item (stub) ──────────────────────────────────────────────────

Form({
    table: 'x_snc_apocalypse_0_supply' as any,
    view: default_view,
    sections: [
        {
            caption: 'Supply Details',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        { type: 'table_field', field: 'supply_name' },
                        { type: 'table_field', field: 'supply_type' },
                    ],
                    rightElements: [
                        { type: 'table_field', field: 'zone' },
                        { type: 'table_field', field: 'supply_status' },
                        { type: 'table_field', field: 'quantity' },
                    ],
                },
            ],
        },
    ],
})

List({
    table: 'x_snc_apocalypse_0_supply' as any,
    view: default_view,
    columns: [
        { element: 'supply_name',   position: 0 },
        { element: 'supply_type',   position: 1 },
        { element: 'zone',          position: 2 },
        { element: 'quantity',      position: 3 },
        { element: 'supply_status', position: 4 },
    ],
})
