function controller($scope, spUtil, $interval) {
    var c = this;

    c.statusClass = function(status) {
        return {
            'safe':      'zone-safe',
            'at_risk':   'zone-at-risk',
            'evacuated': 'zone-evacuated',
            'closed':    'zone-closed'
        }[status] || 'zone-safe';
    };

    c.fillClass = function(pct) {
        if (pct >= 90) return 'fill-critical';
        if (pct >= 70) return 'fill-warning';
        return 'fill-ok';
    };

    // Auto-refresh every 30 seconds using Angular $interval
    var refreshTimer = $interval(function() {
        spUtil.update($scope);
    }, 30000);

    $scope.$on('$destroy', function() {
        $interval.cancel(refreshTimer);
    });
}
