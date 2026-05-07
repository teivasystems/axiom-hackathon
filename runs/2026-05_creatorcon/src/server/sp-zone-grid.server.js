(function() {
    var zones = [];
    var gr = new GlideRecord('x_snc_apocalypse_0_zone');
    gr.addQuery('zone_status', '!=', 'closed');
    gr.orderBy('zone_status');
    gr.orderBy('short_description');
    gr.query();

    while (gr.next()) {
        var capacity = parseInt(gr.getValue('capacity')) || 0;
        var headcount = parseInt(gr.getValue('headcount')) || 0;
        var fillPct = capacity > 0 ? Math.round((headcount / capacity) * 100) : 0;

        zones.push({
            sys_id:      gr.getUniqueValue(),
            name:        gr.getDisplayValue('short_description'),
            district:    gr.getDisplayValue('district'),
            status:      gr.getValue('zone_status'),
            statusLabel: gr.getDisplayValue('zone_status'),
            capacity:    capacity,
            headcount:   headcount,
            fillPct:     fillPct,
            notes:       gr.getDisplayValue('public_notes')
        });
    }

    data.zones = zones;
    data.lastUpdated = new GlideDateTime().getDisplayValue();
})();
