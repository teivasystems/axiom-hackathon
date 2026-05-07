import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

// ─── ZONES ───────────────────────────────────────────────────────────────────
// Five Las Vegas districts. Zone B at 89% — one intake tips it to At Risk live.
// Zone C already evacuated (Henderson — "three districts gone" from brief).

const zoneStrip = Record({
  $id: Now.ID['zone_a_strip'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_apocalypse_0_zone',
  data: {
    short_description: 'Zone A — The Strip',
    district:          'District 1 — Central',
    zone_status:       'safe',
    capacity:          2000,
    headcount:         1243,
    public_notes:      'Open. Water station and medical tent at Gate C. Convention Centre is primary shelter.',
  },
})

const zoneFremont = Record({
  $id: Now.ID['zone_b_fremont'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_apocalypse_0_zone',
  data: {
    short_description: 'Zone B — Fremont Street',
    district:          'District 2 — Downtown',
    zone_status:       'safe',
    capacity:          800,
    headcount:         712,   // 89% — one more civilian tips the auto-flip live
    public_notes:      'Open. Approaching capacity — register early. Overflow routing to Zone D active.',
  },
})

const zoneHenderson = Record({
  $id: Now.ID['zone_c_henderson'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_apocalypse_0_zone',
  data: {
    short_description: 'Zone C — Henderson',
    district:          'District 3 — Southeast',
    zone_status:       'evacuated',
    capacity:          1500,
    headcount:         0,
    public_notes:      'CLOSED — structural damage from seismic event. All civilians redirected to Zone D (Summerlin).',
  },
})

const zoneSummerlin = Record({
  $id: Now.ID['zone_d_summerlin'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_apocalypse_0_zone',
  data: {
    short_description: 'Zone D — Summerlin',
    district:          'District 4 — West',
    zone_status:       'safe',
    capacity:          2500,
    headcount:         891,
    public_notes:      'Open. Primary intake hub for Zone C displaced civilians. Medical unit on-site.',
  },
})

Record({
  $id: Now.ID['zone_e_northlv'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_apocalypse_0_zone',
  data: {
    short_description: 'Zone E — North Las Vegas',
    district:          'District 5 — North',
    zone_status:       'safe',
    capacity:          1800,
    headcount:         1314,
    public_notes:      'Open. Curfew in effect north of Craig Rd after 21:00.',
  },
})

// ─── RESCUE REQUESTS ─────────────────────────────────────────────────────────
// Three active requests — one Critical (SLA breach demo), one High, one open Medium.
// Task priority: 1=Critical 2=High 3=Moderate | state: 1=Open 2=Work In Progress

Record({
  $id: Now.ID['rescue_001'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_apocalypse_0_rescue',
  data: {
    short_description: 'Multiple civilians trapped — Henderson parking structure',
    description:       'Partial collapse of Level 3, 3rd St & Water Ave. Rescue Team Alpha deployed. Estimated 4–6 civilians unaccounted for.',
    zone:              `${zoneHenderson.$id}`,
    location_detail:   '3rd St & Water Ave — Parking Structure Level 3',
    request_type:      'person_trapped',
    priority:          1,
    state:             2,
  },
})

Record({
  $id: Now.ID['rescue_002'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_apocalypse_0_rescue',
  data: {
    short_description: 'Cardiac emergency — Fremont & 4th',
    description:       'Male, approx 60, chest pain and left arm numbness. Unable to walk. Corner of Fremont St and 4th Ave.',
    zone:              `${zoneFremont.$id}`,
    location_detail:   'Corner of Fremont St and 4th Ave',
    request_type:      'medical_emergency',
    priority:          2,
    state:             2,
  },
})

Record({
  $id: Now.ID['rescue_003'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_apocalypse_0_rescue',
  data: {
    short_description: 'Cracked load-bearing wall — Strip shelter',
    description:       'Hairline fracture observed in wall of temporary shelter structure at LVCC South Hall. Requires structural assessment before occupancy continues.',
    zone:              `${zoneStrip.$id}`,
    location_detail:   'LVCC South Hall — temporary shelter, west wall',
    request_type:      'structural',
    priority:          3,
    state:             1,
  },
})

// ─── CIVILIAN INTAKE — TRIAGE QUEUE ──────────────────────────────────────────
// Four records seeding the Mission Control triage queue.
// Queue sort: quarantine → manual_review → medical → cleared.
// Jane and Ray give the operator two decision moments during the demo.

Record({
  $id: Now.ID['civilian_001_jane'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_apocalypse_0_civilian',
  data: {
    full_name:         'Jane Flores',
    contact_info:      '702-555-0191',
    zone_requested:    `${zoneFremont.$id}`,
    zone_assigned:     `${zoneFremont.$id}`,
    symptom_text:      'High fever for 3 days, temperature hit 104°F this morning. Severe confusion and disorientation — kept asking where she was. Persistent cough, some blood. Was near the Henderson event on Tuesday.',
    triage_class:      'quarantine',
    triage_reasoning:  'High fever with neurological symptoms, haemoptysis, and confirmed proximity to outbreak zone. Quarantine indicated pending medical evaluation.',
    triage_source:     'ai',
    civilian_status:   'pending',
  },
})

Record({
  $id: Now.ID['civilian_002_ray'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_apocalypse_0_civilian',
  data: {
    full_name:         'Ray Kim',
    contact_info:      '702-555-0348',
    zone_requested:    `${zoneSummerlin.$id}`,
    zone_assigned:     `${zoneSummerlin.$id}`,
    symptom_text:      'Difficulty breathing, spreading rash on both forearms. Was near an area with a strong chemical smell close to Zone C this afternoon. No prior respiratory issues.',
    triage_class:      'manual_review',
    triage_reasoning:  'AI unavailable — classify manually.',
    triage_source:     'ai',
    civilian_status:   'pending',
  },
})

Record({
  $id: Now.ID['civilian_003_marcus'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_apocalypse_0_civilian',
  data: {
    full_name:         'Marcus Webb',
    contact_info:      '702-555-0274',
    zone_requested:    `${zoneStrip.$id}`,
    zone_assigned:     `${zoneStrip.$id}`,
    symptom_text:      'Chest pain since this morning, left arm feels numb and heavy. 58 years old, history of heart problems. Not taking current meds — left them at home.',
    triage_class:      'medical',
    triage_reasoning:  'Chest pain with radiating arm numbness in a patient with known cardiac history. Urgent medical evaluation required.',
    triage_source:     'ai',
    civilian_status:   'pending',
  },
})

Record({
  $id: Now.ID['civilian_004_sofia'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_apocalypse_0_civilian',
  data: {
    full_name:         'Sofia Reyes',
    contact_info:      '702-555-0512',
    zone_requested:    `${zoneStrip.$id}`,
    zone_assigned:     `${zoneStrip.$id}`,
    symptom_text:      'Mild headache and very thirsty. Walked about 2 miles from my apartment to get here in the heat. No fever, no cough, no injuries.',
    triage_class:      'cleared',
    triage_reasoning:  'Symptoms consistent with heat-related dehydration from exertion. No indicators of infection, injury, or exposure requiring escalation.',
    triage_source:     'ai',
    civilian_status:   'pending',
  },
})
