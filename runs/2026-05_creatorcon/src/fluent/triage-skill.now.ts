import '@servicenow/sdk/global'
import { NowAssistSkillConfig } from '@servicenow/sdk/core'

export const ApocCivilianTriage = NowAssistSkillConfig(
    {
        $id: Now.ID['sk_civilian_triage'],
        name: 'ApocCivilianTriage',
        description: 'Classifies civilian symptom text into Cleared, Medical Attention, or Quarantine for emergency triage.',
        shortDescription: 'Emergency civilian triage classification',
        inputs: [
            {
                $id: Now.ID['sk_triage_input_symptoms'],
                name: 'symptom text',
                description: 'Raw symptom description submitted by the civilian',
                dataType: 'string',
                mandatory: true,
                testValues: 'High fever for 3 days, severe headache, difficulty breathing, was near the affected zone.',
            },
        ],
        tools: t => {
            const sanitize = t.InlineScript('SanitizeInput', {
                $id: Now.ID['sk_triage_tool_sanitize'],
                script: `(function(context) {
                    var raw = context.getValue('symptom_text') || '';
                    return raw.substring(0, 800).replace(/[<>]/g, '');
                })(context)`,
            });
            return { SanitizeInput: sanitize };
        },
        securityControls: {
            userAccess: {
                $id: Now.ID['sk_triage_user_access'],
                type: 'authenticated',
            },
            roleRestrictions: ['282bf1fac6112285017366cb5f867469'], // itil
        },
        deploymentSettings: {
            flowAction: true,
            nowAssistPanel: {
                enabled: true,
                roles: ['now_assist_panel_user'],
            },
        },
    },
    {
        providers: [
            {
                provider: 'Now LLM Service',
                prompts: [
                    {
                        name: 'TriageClassify',
                        versions: [
                            {
                                $id: Now.ID['sk_triage_prompt_v1'],
                                model: 'llm_generic_small_v2',
                                promptState: 'draft',
                                maxTokens: 150,
                                temperature: 0.1,
                                prompt: p => `## Role
You are an emergency medical triage system operating during a city-scale disaster. Classify the civilian's symptom report into exactly one triage category.

## Context
Civilian symptom report: '${p.tool.SanitizeInput.output}'

## Instructions
1. Read the symptom report carefully.
2. Classify into exactly one of:
   - CLEARED: No significant symptoms. Safe for general evacuation shelter.
   - MEDICAL_ATTENTION: Needs medical evaluation but no isolation risk.
   - QUARANTINE: Potential infection, chemical exposure, or contagion risk — requires isolation.
3. Write one sentence of reasoning. Be specific about the symptom that drove the classification.
4. Respond with JSON only — no preamble, no markdown, no code fences.

## Output
{"classification":"CLEARED|MEDICAL_ATTENTION|QUARANTINE","reasoning":"one sentence"}`,
                            },
                        ],
                    },
                ],
            },
        ],
    }
)
