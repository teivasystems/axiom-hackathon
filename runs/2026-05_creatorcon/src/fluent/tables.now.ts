import '@servicenow/sdk/global'
import {
  Table,
  StringColumn,
  IntegerColumn,
  MultiLineTextColumn,
  ReferenceColumn,
  ChoiceColumn,
  DateTimeColumn,
} from '@servicenow/sdk/core'

// ─── T-1: Evacuation Zone ────────────────────────────────────────────────────
// Extends task for assignment engine + SLA. Drives zone state machine.
export const x_snc_apocalypse_0_zone = Table({
  name: 'x_snc_apocalypse_0_zone',
  label: 'Evacuation Zone',
  extends: 'task',
  autoNumber: { prefix: 'ZONE', number: 1000, numberOfDigits: 7 },
  allowWebServiceAccess: true,
  schema: {
    district: StringColumn({ label: 'District', maxLength: 100 }),
    zone_status: ChoiceColumn({
      label: 'Zone Status',
      choices: {
        safe:      'Safe',
        at_risk:   'At Risk',
        evacuated: 'Evacuated',
        closed:    'Closed',
      },
      default: 'safe',
      mandatory: true,
    }),
    capacity: IntegerColumn({ label: 'Capacity', mandatory: true }),
    headcount: IntegerColumn({ label: 'Current Headcount', default: 0 }),
    zone_commander: ReferenceColumn({
      label: 'Zone Commander',
      referenceTable: 'sys_user',
      cascadeRule: 'none',
    }),
    public_notes: StringColumn({ label: 'Public Notes', maxLength: 500 }),
  },
})

// ─── T-2: Rescue Request ─────────────────────────────────────────────────────
// Extends task for SLA, assignment, and notifications OOB.
export const x_snc_apocalypse_0_rescue = Table({
  name: 'x_snc_apocalypse_0_rescue',
  label: 'Rescue Request',
  extends: 'task',
  autoNumber: { prefix: 'RES', number: 1000, numberOfDigits: 7 },
  allowWebServiceAccess: true,
  schema: {
    zone: ReferenceColumn({
      label: 'Zone',
      referenceTable: 'x_snc_apocalypse_0_zone' as any,
      cascadeRule: 'none',
    }),
    location_detail: StringColumn({ label: 'Location Detail', maxLength: 200 }),
    request_type: ChoiceColumn({
      label: 'Request Type',
      choices: {
        person_trapped:    'Person Trapped',
        medical_emergency: 'Medical Emergency',
        structural:        'Structural Collapse',
        other:             'Other',
      },
    }),
  },
})

// ─── T-3: Civilian Intake ────────────────────────────────────────────────────
// One record per civilian self-registration. Holds symptom text + AI triage output.
export const x_snc_apocalypse_0_civilian = Table({
  name: 'x_snc_apocalypse_0_civilian',
  label: 'Civilian Intake',
  autoNumber: { prefix: 'APC', number: 1000, numberOfDigits: 7 },
  allowWebServiceAccess: true,
  schema: {
    full_name: StringColumn({ label: 'Full Name', maxLength: 100, mandatory: true }),
    contact_info: StringColumn({ label: 'Contact Info', maxLength: 100 }),
    zone_requested: ReferenceColumn({
      label: 'Zone Requested',
      referenceTable: 'x_snc_apocalypse_0_zone' as any,
      cascadeRule: 'none',
    }),
    zone_assigned: ReferenceColumn({
      label: 'Zone Assigned',
      referenceTable: 'x_snc_apocalypse_0_zone' as any,
      cascadeRule: 'none',
    }),
    symptom_text: MultiLineTextColumn({ label: 'Symptom Description', maxLength: 1000, mandatory: true }),
    triage_class: ChoiceColumn({
      label: 'Triage Classification',
      choices: {
        cleared:       'Cleared',
        medical:       'Medical Attention',
        quarantine:    'Quarantine',
        manual_review: 'Manual Review',
      },
    }),
    triage_reasoning: StringColumn({ label: 'Triage Reasoning', maxLength: 500 }),
    triage_source: ChoiceColumn({
      label: 'Triage Source',
      choices: {
        ai:              'AI',
        manual_override: 'Manual Override',
      },
    }),
    confirmed_by: ReferenceColumn({
      label: 'Confirmed By',
      referenceTable: 'sys_user',
      cascadeRule: 'none',
    }),
    civilian_status: ChoiceColumn({
      label: 'Status',
      choices: {
        pending:    'Pending',
        triaged:    'Triaged',
        placed:     'Placed',
        redirected: 'Redirected',
      },
      default: 'pending',
    }),
  },
})

// ─── T-4: Quarantine Case ────────────────────────────────────────────────────
// Stub lifecycle — created by triage flow when classification = quarantine.
export const x_snc_apocalypse_0_quarantine = Table({
  name: 'x_snc_apocalypse_0_quarantine',
  label: 'Quarantine Case',
  autoNumber: { prefix: 'QRN', number: 1000, numberOfDigits: 7 },
  allowWebServiceAccess: true,
  schema: {
    civilian: ReferenceColumn({
      label: 'Civilian',
      referenceTable: 'x_snc_apocalypse_0_civilian' as any,
      cascadeRule: 'none',
    }),
    zone: ReferenceColumn({
      label: 'Zone',
      referenceTable: 'x_snc_apocalypse_0_zone' as any,
      cascadeRule: 'none',
    }),
    opened_at: DateTimeColumn({ label: 'Opened At' }),
    case_status: ChoiceColumn({
      label: 'Status',
      choices: { open: 'Open' },
      default: 'open',
    }),
  },
})

// ─── T-5: Supply Item (stub) ─────────────────────────────────────────────────
// Module 4 descoped per DEC-001. Table only — no flows, no UI.
export const x_snc_apocalypse_0_supply = Table({
  name: 'x_snc_apocalypse_0_supply',
  label: 'Supply Item',
  allowWebServiceAccess: true,
  schema: {
    supply_name: StringColumn({ label: 'Name', maxLength: 100, mandatory: true }),
    supply_type: ChoiceColumn({
      label: 'Type',
      choices: {
        food:    'Food',
        water:   'Water',
        medical: 'Medical',
        shelter: 'Shelter',
      },
    }),
    zone: ReferenceColumn({
      label: 'Zone',
      referenceTable: 'x_snc_apocalypse_0_zone' as any,
      cascadeRule: 'none',
    }),
    quantity: IntegerColumn({ label: 'Quantity', default: 0 }),
    supply_status: ChoiceColumn({
      label: 'Status',
      choices: {
        available: 'Available',
        depleted:  'Depleted',
      },
      default: 'available',
    }),
  },
})
