(function () {
    if (input && input.action === 'submitKudo') {
        var ks = new x_9274_kudos.KudosService();
        var sysId = ks.createKudo(input.receiver, input.message, input.category);
        data.success = !!sysId;
        data.sys_id = sysId;
        data.error = sysId ? '' : 'Failed to submit kudos. Please try again.';
        return;
    }

    // Initial page load — provide category choices
    data.categories = [
        { value: 'recognition',  label: 'Recognition' },
        { value: 'teamwork',     label: 'Teamwork' },
        { value: 'innovation',   label: 'Innovation' },
        { value: 'above_beyond', label: 'Above & Beyond' },
    ];
})();
