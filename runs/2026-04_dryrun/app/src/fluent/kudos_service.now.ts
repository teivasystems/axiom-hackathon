import { ScriptInclude } from '@servicenow/sdk/core'

export const KudosService = ScriptInclude({
    $id: Now.ID['si0'],
    name: 'KudosService',
    description: 'Core data and notification logic for Team Kudos. Extends AbstractAjaxProcessor for Portal widget AJAX calls.',
    active: true,
    accessibleFrom: 'package_private',
    clientCallable: true,
    script: Now.include('../server/KudosService.js'),
})
