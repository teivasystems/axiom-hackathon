function controller($scope, spUtil, $interval) {
    var c = this;

    // District key → SVG bounding box centre (for label placement)
    c.districtMeta = {
        north_lv:      { label: 'North Las Vegas', cx: 300, cy: 50  },
        summerlin:     { label: 'Summerlin',        cx: 90,  cy: 190 },
        downtown:      { label: 'Downtown',          cx: 240, cy: 160 },
        the_strip:     { label: 'The Strip',         cx: 240, cy: 280 },
        east_lv:       { label: 'East Las Vegas',    cx: 450, cy: 170 },
        spring_valley: { label: 'Spring Valley',     cx: 250, cy: 410 },
        henderson:     { label: 'Henderson',         cx: 460, cy: 360 },
        enterprise:    { label: 'Enterprise',        cx: 90,  cy: 380 }
    };

    c.selectedDistrict = null;

    // Build a keyed map of district → zone for fast SVG lookup
    c.zoneByDistrict = function() {
        var map = {};
        (c.data.zones || []).forEach(function(z) { map[z.district] = z; });
        return map;
    };

    c.statusColor = function(status) {
        return { safe: '#22c55e', at_risk: '#f59e0b', evacuated: '#ef4444', closed: '#6b7280' }[status] || '#d1d5db';
    };

    c.statusBorder = function(status) {
        return { safe: '#16a34a', at_risk: '#d97706', evacuated: '#dc2626', closed: '#4b5563' }[status] || '#9ca3af';
    };

    c.statusLabel = function(status) {
        return { safe: 'SAFE', at_risk: 'AT RISK', evacuated: 'EVACUATED', closed: 'CLOSED' }[status] || 'UNKNOWN';
    };

    c.statusClass = function(status) {
        return { safe: 'status-safe', at_risk: 'status-at-risk', evacuated: 'status-evacuated', closed: 'status-closed' }[status] || 'status-unknown';
    };

    c.fillClass = function(pct) {
        if (pct >= 90) return 'fill-critical';
        if (pct >= 70) return 'fill-warning';
        return 'fill-ok';
    };

    c.selectDistrict = function(districtKey) {
        c.selectedDistrict = (c.selectedDistrict === districtKey) ? null : districtKey;
    };

    c.selectedZone = function() {
        if (!c.selectedDistrict) return null;
        return c.zoneByDistrict()[c.selectedDistrict] || null;
    };

    c.sortedZones = function() {
        var order = { at_risk: 0, evacuated: 1, safe: 2, closed: 3 };
        return (c.data.zones || []).slice().sort(function(a, b) {
            return (order[a.status] !== undefined ? order[a.status] : 4) -
                   (order[b.status] !== undefined ? order[b.status] : 4);
        });
    };

    c.alertZones = function() {
        return (c.data.zones || []).filter(function(z) {
            return (z.status === 'at_risk' || z.status === 'evacuated') && z.publicNotes;
        });
    };

    c.districtFill = function(districtKey) {
        var zone = c.zoneByDistrict()[districtKey];
        return c.statusColor(zone ? zone.status : null);
    };

    c.districtStroke = function(districtKey) {
        var zone = c.zoneByDistrict()[districtKey];
        var base = c.statusBorder(zone ? zone.status : null);
        return c.selectedDistrict === districtKey ? '#ffffff' : base;
    };

    c.districtStrokeWidth = function(districtKey) {
        return c.selectedDistrict === districtKey ? 4 : 2;
    };

    c.districtStatus = function(districtKey) {
        var zone = c.zoneByDistrict()[districtKey];
        return zone ? zone.status : null;
    };

    // Auto-refresh every 15 s
    var refreshTimer = $interval(function() {
        spUtil.update($scope);
    }, 15000);

    $scope.$on('$destroy', function() {
        $interval.cancel(refreshTimer);
    });
}
