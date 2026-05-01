import { Table, ReferenceColumn, MultiLineTextColumn, StringColumn } from '@servicenow/sdk/core'

export const x_9274_kudos_entry = Table({
    $id: Now.ID['t0'],
    name: 'x_9274_kudos_entry',
    label: 'Kudos Entry',
    extends: 'task',
    schema: {
        u_giver: ReferenceColumn({
            label: 'Given By',
            mandatory: true,
            referenceTable: 'sys_user',
        }),
        u_receiver: ReferenceColumn({
            label: 'Received By',
            mandatory: true,
            referenceTable: 'sys_user',
        }),
        u_message: MultiLineTextColumn({
            label: 'Message',
            mandatory: true,
            maxLength: 1000,
        }),
        u_category: StringColumn({
            label: 'Category',
            mandatory: true,
            choices: {
                recognition:   { label: 'Recognition' },
                teamwork:       { label: 'Teamwork' },
                innovation:     { label: 'Innovation' },
                above_beyond:   { label: 'Above & Beyond' },
            },
        }),
        u_digest_text: MultiLineTextColumn({
            label: 'Digest Text',
        }),
    },
})
