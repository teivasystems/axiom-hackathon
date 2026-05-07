import '@servicenow/sdk/global'
import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['si_triage_ai'],
    name: 'ApocTriageAI',
    active: true,
    apiName: 'x_snc_apocalypse_0.ApocTriageAI',
    accessibleFrom: 'public',
    description: 'Calls the ApocCivilianTriage Now Assist skill. Returns {classification, reasoning}. Falls back to manual_review on any failure.',
    script: Now.include('../server/ApocTriageAI.server.js'),
})

ScriptInclude({
    $id: Now.ID['si_zone_helper'],
    name: 'ApocZoneHelper',
    active: true,
    apiName: 'x_snc_apocalypse_0.ApocZoneHelper',
    description: 'Zone headcount management. incrementHeadcount(zoneId), decrementHeadcount(zoneId), getAvailableZone(excludeZoneId). Evaluates 90% threshold — flows stay thin.',
    script: Now.include('../server/ApocZoneHelper.server.js'),
})

ScriptInclude({
    $id: Now.ID['si_rescue_assign'],
    name: 'ApocRescueAssign',
    active: true,
    apiName: 'x_snc_apocalypse_0.ApocRescueAssign',
    description: 'Rescue team assignment. getNextTeam(zoneId, priority) returns sys_user_group sys_id.',
    script: Now.include('../server/ApocRescueAssign.server.js'),
})
