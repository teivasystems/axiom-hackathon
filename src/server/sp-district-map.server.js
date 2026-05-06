(function() {
    // Derive the SVG district key from zone name or district field.
    // Zone names follow the pattern "Zone X — <Location>" so we search both.
    function toDistrictKey(name, district) {
        var s = ((name || '') + ' ' + (district || '')).toLowerCase();
        if (s.indexOf('north')        !== -1) return 'north_lv';
        if (s.indexOf('fremont')      !== -1) return 'downtown';
        if (s.indexOf('downtown')     !== -1) return 'downtown';
        if (s.indexOf('strip')        !== -1) return 'the_strip';
        if (s.indexOf('henderson')    !== -1) return 'henderson';
        if (s.indexOf('southeast')    !== -1) return 'henderson';
        if (s.indexOf('summerlin')    !== -1) return 'summerlin';
        if (s.indexOf('spring')       !== -1) return 'spring_valley';
        if (s.indexOf('enterprise')   !== -1) return 'enterprise';
        if (s.indexOf('southwest')    !== -1) return 'enterprise';
        if (s.indexOf('east')         !== -1) return 'east_lv';
        return null;
    }

    var zones = [];
    var gr = new GlideRecord('x_snc_apocalypse_0_zone');
    gr.orderBy('zone_status');
    gr.orderBy('short_description');
    gr.query();

    while (gr.next()) {
        var capacity  = parseInt(gr.getValue('capacity'))  || 0;
        var headcount = parseInt(gr.getValue('headcount')) || 0;
        var fillPct   = capacity > 0 ? Math.round((headcount / capacity) * 100) : 0;
        var name      = gr.getDisplayValue('short_description');
        var district  = gr.getValue('district');

        zones.push({
            sys_id:      gr.getUniqueValue(),
            name:        name,
            district:    district,
            districtKey: toDistrictKey(name, district),
            status:      gr.getValue('zone_status'),
            statusLabel: gr.getDisplayValue('zone_status'),
            capacity:    capacity,
            headcount:   headcount,
            fillPct:     fillPct,
            publicNotes: gr.getDisplayValue('public_notes')
        });
    }

    data.zones       = zones;
    data.lastUpdated = new GlideDateTime().getDisplayValue();
})();
