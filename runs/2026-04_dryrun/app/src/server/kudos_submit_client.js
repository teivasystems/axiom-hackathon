function KudosSubmitCtrl($scope, spUtil) {
    var c = this;
    c.form = { receiver: '', message: '', category: '' };
    c.submitted = false;
    c.error = '';

    c.submit = function () {
        c.error = '';
        if (!c.form.receiver || !c.form.message || !c.form.category) {
            c.error = 'Please fill in all fields.';
            return;
        }
        if (c.form.receiver === gs.getUserID()) {
            c.error = 'You cannot give kudos to yourself.';
            return;
        }

        spUtil.update($scope, {
            action: 'submitKudo',
            receiver: c.form.receiver,
            message: c.form.message,
            category: c.form.category,
        }).then(function () {
            if (c.data.success) {
                c.submitted = true;
                c.form = { receiver: '', message: '', category: '' };
            } else {
                c.error = c.data.error || 'Submission failed.';
            }
        });
    };

    c.reset = function () {
        c.submitted = false;
        c.error = '';
    };
}
