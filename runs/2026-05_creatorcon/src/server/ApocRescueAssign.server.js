var ApocRescueAssign = Class.create();
ApocRescueAssign.prototype = {
    initialize: function() {},

    /**
     * Return the sys_id of the next available rescue team for a zone and priority.
     * Preference order: group assigned to zone → any active rescue/response group.
     * @param {string} zoneId   - sys_id of x_snc_apocalypse_0_zone
     * @param {number} priority - 1=Critical, 2=High, 3=Moderate
     * @returns {string} sys_user_group sys_id, or '' if none found
     */
    getNextTeam: function(zoneId, priority) {
        // First pass: group whose name contains the zone's district or description
        if (zoneId) {
            var zone = new GlideRecord('x_snc_apocalypse_0_zone');
            if (zone.get(zoneId)) {
                var district = zone.getValue('district') || '';
                var districtWord = district.split(' ')[1] || ''; // e.g. "District 2 — Downtown" → "2"
                if (districtWord) {
                    var gr = new GlideRecord('sys_user_group');
                    gr.addQuery('active', true);
                    gr.addQuery('name', 'CONTAINS', districtWord);
                    gr.setLimit(1);
                    gr.query();
                    if (gr.next()) {
                        return gr.getUniqueValue();
                    }
                }
            }
        }

        // Second pass: any group with 'rescue' or 'response' in the name
        var fallback = new GlideRecord('sys_user_group');
        fallback.addQuery('active', true);
        var qc = fallback.addQuery('name', 'CONTAINS', 'rescue');
        qc.addOrCondition('name', 'CONTAINS', 'response');
        qc.addOrCondition('name', 'CONTAINS', 'emergency');
        fallback.setLimit(1);
        fallback.query();
        if (fallback.next()) {
            return fallback.getUniqueValue();
        }

        gs.warn('ApocRescueAssign.getNextTeam: no rescue group found for zone ' + zoneId);
        return '';
    },

    type: 'ApocRescueAssign'
};
