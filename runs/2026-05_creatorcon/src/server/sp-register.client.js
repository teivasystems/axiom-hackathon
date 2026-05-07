function controller($scope, spUtil) {
    var c = this;

    c.form = {
        full_name:      '',
        contact_info:   '',
        zone_requested: '',
        symptom_text:   ''
    };
    c.submitting = false;
    c.errors = {};

    c.validate = function() {
        c.errors = {};
        if (!c.form.full_name.trim())    c.errors.full_name    = 'Full name is required.';
        if (!c.form.contact_info.trim()) c.errors.contact_info = 'Contact information is required.';
        return Object.keys(c.errors).length === 0;
    };

    c.submit = function() {
        if (!c.validate()) return;
        c.submitting = true;
        $scope.c.data.action       = 'register';
        $scope.c.data.full_name    = c.form.full_name;
        $scope.c.data.contact_info = c.form.contact_info;
        $scope.c.data.zone_requested = c.form.zone_requested;
        $scope.c.data.symptom_text = c.form.symptom_text;

        spUtil.update($scope).then(function() {
            c.submitting = false;
        });
    };

    c.reset = function() {
        c.form = { full_name: '', contact_info: '', zone_requested: '', symptom_text: '' };
        c.errors = {};
        c.data.submitted = false;
        c.data.error = '';
        c.data.action = '';
    };
}
