(function () {
    var ks = new x_9274_kudos.KudosService();

    var raw = ks.getRecentKudos(30);
    data.kudos = JSON.parse(raw || '[]');
    data.digest = ks.getDigest();
    data.kudos_count = data.kudos.length;

    data.category_labels = {
        recognition:  'Recognition',
        teamwork:     'Teamwork',
        innovation:   'Innovation',
        above_beyond: 'Above & Beyond',
    };
})();
