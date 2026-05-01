import { Flow, wfa, trigger, action } from '@servicenow/sdk/automation'

/**
 * Kudos Submitted Notification Flow
 * Trigger: record created on x_9274_kudos_entry
 * Logs the kudos event (giver, receiver, category) for audit trail.
 * Full KudosService.sendNotification() wiring deferred to post-dry-run (requires typed RunScript step).
 */
export const kudos_notification_flow = Flow(
    {
        $id: Now.ID['fl0'],
        name: 'Kudos Submitted Notification',
        description: 'Fires when a kudos record is created. Logs the event.',
        runAs: 'system',
    },
    wfa.trigger(trigger.record.created, { $id: Now.ID['fl0_trig'] }, {
        table: 'x_9274_kudos_entry',
        run_on_extended: 'false',
        run_flow_in: 'background',
    }),
    (_params) => {
        wfa.action(action.core.log, { $id: Now.ID['fl0_log'] }, {
            log_level: 'info',
            log_message: `Kudos submitted — category: ${wfa.dataPill(_params.trigger.current.u_category, 'string')}`,
        })
    }
)
