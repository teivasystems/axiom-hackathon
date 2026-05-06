(function() {
    var KB_TITLES = [
        'Emergency Response Protocols',
        'Public Communication & Crisis Messaging',
        'Evacuation & Civilian Management',
        'Medical & Quarantine Operations',
        'Logistics & Supply Chain',
    ];

    // Fetch the 5 knowledge bases by title
    var bases = [];
    var baseMap = {};

    var grBase = new GlideRecord('kb_knowledge_base');
    grBase.addQuery('title', 'IN', KB_TITLES.join(','));
    grBase.addQuery('active', true);
    grBase.query();

    while (grBase.next()) {
        var id = grBase.getUniqueValue();
        var base = {
            sys_id:      id,
            title:       grBase.getDisplayValue('title'),
            description: grBase.getDisplayValue('description'),
            articles:    [],
        };
        baseMap[id] = base;
        bases.push(base);
    }

    // Preserve the intended display order
    bases.sort(function(a, b) {
        return KB_TITLES.indexOf(a.title) - KB_TITLES.indexOf(b.title);
    });

    // Fetch all published articles belonging to those bases
    if (bases.length > 0) {
        var baseIds = bases.map(function(b) { return b.sys_id; }).join(',');
        var grArt = new GlideRecord('kb_knowledge');
        grArt.addQuery('kb_knowledge_base', 'IN', baseIds);
        grArt.addQuery('workflow_state', 'published');
        grArt.addQuery('active', true);
        grArt.orderBy('short_description');
        grArt.query();

        while (grArt.next()) {
            var baseId = grArt.getValue('kb_knowledge_base');
            if (baseMap[baseId]) {
                baseMap[baseId].articles.push({
                    sys_id: grArt.getUniqueValue(),
                    title:  grArt.getDisplayValue('short_description'),
                    text:   grArt.getDisplayValue('text'),
                });
            }
        }
    }

    data.bases = bases;
})();
