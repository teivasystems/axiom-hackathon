function controller($scope, $sce) {
    var c = this;

    c.openBase    = null;
    c.openArticle = null;

    c.toggleBase = function(baseId) {
        c.openBase    = (c.openBase === baseId) ? null : baseId;
        c.openArticle = null;
    };

    c.toggleArticle = function(articleId) {
        c.openArticle = (c.openArticle === articleId) ? null : articleId;
    };

    c.trustedHtml = function(html) {
        return $sce.trustAsHtml(html || '');
    };

    c.articleCount = function(base) {
        return base.articles ? base.articles.length : 0;
    };

    // Icons per knowledge base title keyword
    c.baseIcon = function(title) {
        var t = (title || '').toLowerCase();
        if (t.indexOf('emergency')  !== -1) return '🚨';
        if (t.indexOf('communicat') !== -1) return '📢';
        if (t.indexOf('evacuati')   !== -1) return '🚶';
        if (t.indexOf('medical')    !== -1) return '🏥';
        if (t.indexOf('logistics')  !== -1) return '📦';
        return '📄';
    };
}
