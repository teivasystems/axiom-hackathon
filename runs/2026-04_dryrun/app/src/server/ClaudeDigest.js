var ClaudeDigest = Class.create();

ClaudeDigest.prototype = {
    type: 'ClaudeDigest',

    /**
     * Builds a Claude prompt from kudos JSON.
     * @param {string} kudosJson  JSON string from KudosService.getRecentKudos()
     * @returns {string}  prompt text ready to POST to Claude
     */
    buildPrompt: function (kudosJson) {
        var kudos = [];
        try {
            kudos = JSON.parse(kudosJson || '[]');
        } catch (e) {
            gs.warn('ClaudeDigest.buildPrompt: invalid JSON input');
        }

        if (!kudos.length) {
            return 'There are no kudos to summarise for this period.';
        }

        // Group by category
        var byCategory = {};
        for (var i = 0; i < kudos.length; i++) {
            var k = kudos[i];
            var cat = k.category || 'uncategorised';
            if (!byCategory[cat]) {
                byCategory[cat] = [];
            }
            byCategory[cat].push(k);
        }

        var lines = ['Here are the team kudos from the past 30 days:\n'];
        var cats = Object.keys(byCategory);
        for (var c = 0; c < cats.length; c++) {
            var catName = cats[c];
            var entries = byCategory[catName];
            lines.push('Category: ' + catName.toUpperCase());
            for (var j = 0; j < entries.length; j++) {
                var entry = entries[j];
                lines.push('  - ' + entry.giver + ' → ' + entry.receiver + ': "' + entry.message + '"');
            }
            lines.push('');
        }

        lines.push('Please write a brief team digest (plain text, no markdown headers) covering:');
        lines.push('1. A one-paragraph warm overview of recognition this period.');
        lines.push('2. The most recognised person and why they stood out.');
        lines.push('3. The standout theme across all kudos.');
        lines.push('Keep it to 3 short paragraphs maximum.');

        return lines.join('\n');
    },

    /**
     * Parses the raw Claude API response.
     * @param {string} responseBody  raw JSON string from REST step
     * @param {string} statusCode    HTTP status code string
     * @returns {{ success: boolean, text: string, error: string }}
     */
    parseResponse: function (responseBody, statusCode) {
        var result = { success: false, text: '', error: '' };

        if (statusCode !== '200') {
            result.error = 'Claude API returned status ' + statusCode;
            return result;
        }

        try {
            var parsed = JSON.parse(responseBody || '{}');
            var content = parsed.content;
            if (content && content.length > 0 && content[0].type === 'text') {
                result.text = content[0].text;
                result.success = true;
            } else {
                result.error = 'Unexpected response structure from Claude API';
            }
        } catch (e) {
            result.error = 'Failed to parse Claude API response: ' + e.message;
        }

        return result;
    },
};
