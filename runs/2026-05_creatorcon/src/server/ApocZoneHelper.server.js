var ApocZoneHelper = Class.create();
ApocZoneHelper.prototype = {
    initialize: function() {},

    /**
     * Increment headcount for a zone. Flips status to at_risk if headcount >= 90% of capacity.
     * @param {string} zoneId - sys_id of x_snc_apocalypse_0_zone
     * @returns {string} new zone_status value
     */
    incrementHeadcount: function(zoneId) {
        var gr = new GlideRecord('x_snc_apocalypse_0_zone');
        if (!gr.get(zoneId)) {
            gs.warn('ApocZoneHelper.incrementHeadcount: zone not found — ' + zoneId);
            return '';
        }

        var capacity = parseInt(gr.getValue('capacity') || '0', 10);
        var headcount = parseInt(gr.getValue('headcount') || '0', 10) + 1;
        var currentStatus = gr.getValue('zone_status');

        gr.setValue('headcount', headcount);

        var newStatus = currentStatus;
        if (capacity > 0 && headcount / capacity >= 0.90 && currentStatus === 'safe') {
            newStatus = 'at_risk';
            gr.setValue('zone_status', newStatus);
            gs.info('ApocZoneHelper: zone ' + zoneId + ' flipped to at_risk (' + headcount + '/' + capacity + ')');
        }

        gr.update();
        return newStatus;
    },

    /**
     * Decrement headcount for a zone, floored at 0.
     * @param {string} zoneId
     */
    decrementHeadcount: function(zoneId) {
        var gr = new GlideRecord('x_snc_apocalypse_0_zone');
        if (!gr.get(zoneId)) {
            gs.warn('ApocZoneHelper.decrementHeadcount: zone not found — ' + zoneId);
            return;
        }
        var headcount = Math.max(0, parseInt(gr.getValue('headcount') || '0', 10) - 1);
        gr.setValue('headcount', headcount);
        gr.update();
    },

    /**
     * Return the sys_id of the best available safe zone, excluding the given zone.
     * "Best" = lowest fill percentage among safe zones with remaining capacity.
     * @param {string} excludeZoneId - zone to exclude (e.g. the at_risk zone)
     * @returns {string} sys_id of best zone, or '' if none available
     */
    getAvailableZone: function(excludeZoneId) {
        var gr = new GlideRecord('x_snc_apocalypse_0_zone');
        gr.addQuery('zone_status', 'safe');
        gr.addQuery('capacity', '>', 0);
        if (excludeZoneId) {
            gr.addQuery('sys_id', '!=', excludeZoneId);
        }
        gr.query();

        var bestId = '';
        var bestFill = 2; // sentinel — higher than any real fill ratio

        while (gr.next()) {
            var capacity = parseInt(gr.getValue('capacity') || '0', 10);
            var headcount = parseInt(gr.getValue('headcount') || '0', 10);
            var fill = capacity > 0 ? headcount / capacity : 1;
            if (fill < bestFill) {
                bestFill = fill;
                bestId = gr.getUniqueValue();
            }
        }
        return bestId;
    },

    type: 'ApocZoneHelper'
};
