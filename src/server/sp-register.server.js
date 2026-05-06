(function() {
    // Load available zones for picker
    if (!input) {
        var zones = [];
        var gr = new GlideRecord('x_snc_apocalypse_0_zone');
        gr.addQuery('zone_status', 'IN', 'safe,at_risk');
        gr.orderBy('short_description');
        gr.query();

        while (gr.next()) {
            var capacity = parseInt(gr.getValue('capacity')) || 0;
            var headcount = parseInt(gr.getValue('headcount')) || 0;
            var fillPct = capacity > 0 ? Math.round((headcount / capacity) * 100) : 0;
            zones.push({
                sys_id:  gr.getUniqueValue(),
                name:    gr.getDisplayValue('short_description'),
                district: gr.getDisplayValue('district'),
                fillPct: fillPct,
                full:    fillPct >= 100
            });
        }
        data.zones = zones;
        data.submitted = false;
        data.error = '';
        return;
    }

    // Handle form submission
    if (input.action === 'register') {
        try {
            var civilian = new GlideRecord('x_snc_apocalypse_0_civilian');
            civilian.initialize();
            civilian.setValue('full_name',     (input.full_name     || '').substring(0, 100));
            civilian.setValue('contact_info',  (input.contact_info  || '').substring(0, 200));
            civilian.setValue('symptom_text',  (input.symptom_text  || '').substring(0, 800));
            civilian.setValue('civilian_status', 'pending');

            if (input.zone_requested) {
                civilian.setValue('zone_requested', input.zone_requested);
            }

            var sysId = civilian.insert();

            if (sysId) {
                data.submitted = true;
                data.confirmationNumber = civilian.getDisplayValue('number');
                data.error = '';
            } else {
                data.submitted = false;
                data.error = 'Registration could not be saved. Please try again.';
            }
        } catch (e) {
            gs.warn('sp-register: insert failed — ' + e.message);
            data.submitted = false;
            data.error = 'System error. Please notify a zone coordinator.';
        }
    }
})();
