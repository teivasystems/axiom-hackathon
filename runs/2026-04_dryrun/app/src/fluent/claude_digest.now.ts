import { ScriptInclude } from '@servicenow/sdk/core'

export const ClaudeDigest = ScriptInclude({
    $id: Now.ID['si1'],
    name: 'ClaudeDigest',
    description: 'Builds Claude API prompts from kudos data and parses Claude responses. Pure string manipulation — no external calls.',
    active: true,
    accessibleFrom: 'package_private',
    clientCallable: false,
    script: Now.include('../server/ClaudeDigest.js'),
})
