var ApocTriageAI = Class.create();
ApocTriageAI.prototype = {
    initialize: function() {},

    /**
     * Classify civilian symptom text via the ApocCivilianTriage Now Assist skill.
     * Skill Kit URL: /now/now-assist-skillkit/skill/fca04f7d4e3845e6aaa1251299812af9/
     * @param {string} symptomText - raw text from intake form
     * @returns {{ classification: 'cleared'|'medical'|'quarantine'|'manual_review', reasoning: string }}
     */
    classify: function(symptomText) {
        try {
            var inputValues = {};
            inputValues['symptom text'] = (symptomText || '').substring(0, 800);

            var skillResponse = sn_skill_kit.SkillHelper.execute({
                skillName:   'ApocCivilianTriage',
                skillScope:  'x_snc_apocalypse_0',
                inputValues: inputValues,
            });

            if (!skillResponse) {
                return this._fallback('Null skill response');
            }

            // Response surface varies by platform version — try all known shapes
            var raw = skillResponse.response
                   || skillResponse.getOutput && skillResponse.getOutput('response')
                   || skillResponse.outputs && skillResponse.outputs.response
                   || '';

            if (!raw) {
                var errMsg = skillResponse.error
                          || skillResponse.errorMessage
                          || skillResponse.status
                          || 'Empty response';
                return this._fallback(String(errMsg));
            }

            // Strip markdown fences if model wrapped the JSON
            raw = raw.trim()
                .replace(/^```json\s*/i, '')
                .replace(/```\s*$/, '')
                .trim();

            var result = JSON.parse(raw);

            var classMap = {
                'CLEARED':           'cleared',
                'MEDICAL_ATTENTION': 'medical',
                'QUARANTINE':        'quarantine',
            };

            var cls = (result.classification || '').toUpperCase();
            if (!classMap[cls]) {
                return this._fallback('Unexpected classification: ' + cls);
            }

            return { classification: classMap[cls], reasoning: result.reasoning || '' };

        } catch(e) {
            gs.warn('ApocTriageAI.classify exception: ' + e.message);
            return this._fallback(e.message);
        }
    },

    _fallback: function(reason) {
        return {
            classification: 'manual_review',
            reasoning: 'AI unavailable — classify manually. (' + reason + ')',
        };
    },

    type: 'ApocTriageAI',
};
