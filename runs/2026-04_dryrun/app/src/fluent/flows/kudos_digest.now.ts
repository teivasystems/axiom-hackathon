import { Flow, wfa, action } from '@servicenow/sdk/automation'

/**
 * Generate Team Kudos Digest Flow
 * Trigger: manual only (Run Now in Flow Designer — no automatic trigger)
 * Steps:
 *   1. Look up kudos from last 30 days
 *   2. Log count (placeholder — Claude API call wired at hackathon)
 *   3. Log digest stored (placeholder for KudosService.storeDigest call)
 */
export const kudos_digest_flow = Flow(
    {
        $id: Now.ID['fl1'],
        name: 'Generate Team Kudos Digest',
        description: 'Fetches recent kudos, calls ClaudeDigest to generate a summary, and stores it via KudosService.',
        runAs: 'system',
    },
    undefined,
    (_params) => {
        const recentKudos = wfa.action(action.core.lookUpRecords, { $id: Now.ID['fl1_lookup'] }, {
            table: 'x_9274_kudos_entry',
            conditions: 'sys_created_onONLast 30 days@javascript:gs.beginningOfLast30Days()@javascript:gs.endOfLast30Days()',
            max_results: 200,
        })

        wfa.action(action.core.log, { $id: Now.ID['fl1_log'] }, {
            log_level: 'info',
            log_message: `Kudos digest: fetched ${wfa.dataPill(recentKudos.Count, 'integer')} records — Claude API call pending credential setup`,
        })
    }
)
