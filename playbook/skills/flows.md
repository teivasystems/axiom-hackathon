# Flow Designer — Skill Reference
**Jordan | Claude Code | Team AXIOM**
> SDK build loop and deploy cycle: see `CLAUDE.md`. This file covers Flow Designer patterns only.

---

## Trigger Types

| Trigger | When to use | Key config |
|---|---|---|
| **Record Created** | New retro session submitted | Table, Condition (optional) |
| **Record Updated** | State change on session | Table, Field changes filter |
| **Record Created or Updated** | Either event | Table, Condition |
| **Scheduled** | Periodic cleanup / digest | Frequency, Run as |
| **REST (Inbound)** | Triggered from external call or Action | Defined in Flow inputs |

**Hackathon default:** Record Created or Updated on the primary table. Add a field condition to avoid triggering on every field save.

---

## Trigger Variable Access

```javascript
// In action steps, access trigger record via:
trigger.current          // the record that fired the trigger (GlideRecord-like)
trigger.current.sys_id   // sys_id of the trigger record

// In subflows, access via input variables — trigger.current is NOT available
// Always pass sys_id as an explicit input when calling a subflow
```

---

## Action Steps — Core Patterns

### Look Up Record
```
Action: Look Up Records
Table: x_axiom_retroapp_retro_item
Conditions: Session | is | [trigger.current.sys_id]
Return: First record / All records
Output: retro_item (GlideRecord pill) or items (Array)
```
Use **All Records** when you need to iterate. Use **First Record** when expecting one result.

### Create Record
```
Action: Create Record
Table: x_axiom_retroapp_retro_summary
Fields:
  session  → [trigger.current.sys_id]
  content  → [Claude API response text]
  state    → 'draft'
Output: summary_record (GlideRecord pill with sys_id)
```

### Update Record
```
Action: Update Record
Record: [summary_record pill from previous step]
Fields:
  state → 'published'
```
**Always use a GlideRecord pill from a previous step** — do not hardcode sys_ids.

### Run Script (Inline)
```javascript
// Access flow variables via inputs/outputs defined on the step
// inputs.session_id   — value passed in
// outputs.item_count  — value passed out

(function execute(inputs, outputs) {
    var gr = new GlideRecord('x_axiom_retroapp_retro_item');
    gr.addQuery('session', inputs.session_id);
    gr.query();
    outputs.item_count = gr.getRowCount();
})(inputs, outputs);
```

---

## Subflows

```
// Subflow definition
Name: Get Retro Items For Session
Inputs:
  session_id  (String, required)
Outputs:
  items       (Array)
  item_count  (Integer)

// Calling a subflow from a flow
Action: Subflow
Subflow: Get Retro Items For Session
Inputs:
  session_id → [trigger.current.sys_id]
Outputs:
  items       → flow variable 'retro_items'
  item_count  → flow variable 'retro_count'
```

**Naming convention:** Subflow names are verb phrases — `Get X`, `Create X`, `Summarise X`. Never noun-only names.

---

## Input / Output Variable Naming

| Type | Convention | Example |
|---|---|---|
| String | snake_case | `session_id`, `summary_text` |
| Boolean | is_/has_ prefix | `is_complete`, `has_error` |
| Integer | _count / _limit suffix | `item_count`, `retry_limit` |
| Record (GlideRecord pill) | noun, singular | `session_record`, `summary_record` |
| Array | noun, plural | `retro_items`, `action_items` |

---

## Error Handling

```
// Add error lane to EVERY action that calls an external API
// or any action that can fail

Action: Call Claude API (IntegrationHub REST step)
  ✅ Success lane → Parse response, update record
  ❌ Error lane   → Log error, set session state = 'error', notify
```

```javascript
// In error lane Run Script:
(function execute(inputs, outputs) {
    gs.error('RetroApp Flow: Claude API call failed — session {0}, error: {1}',
        inputs.session_id,
        inputs.error_message
    );
    // Update session state so UI can show failure
    var gr = new GlideRecord('x_axiom_retroapp_retro_session');
    if (gr.get(inputs.session_id)) {
        gr.setValue('state', 'error');
        gr.update();
    }
})(inputs, outputs);
```

---

## Run As — Critical Gotcha

Flows run as **System** by default. This means:
- `gs.getUserID()` returns the system user
- Record ACLs are bypassed
- `gs.hasRole()` returns false for non-system roles

**For hackathon:** keep "Run as System" unless you explicitly need submitter context. If you need submitter context, set "Run As" = "Flow Initiator" and pass the user sys_id as a trigger input.

---

## Flow Conditions (Trigger Filter)

```
// Prevent re-firing on every field update
// Add a condition to the trigger:

Field: state     | Changes to | pending_summary
// OR
Field: state     | is         | pending_summary
AND
Field: sys_mod_count | is | 1   // only on first update to this state
```

**Gotcha:** "Record Updated" fires on EVERY update including system field changes (sys_updated_on). Always add a field condition.

---

## Yokohama Flow Designer Notes

| Item | Detail |
|---|---|
| Spoke actions | Defined in their own scope — IntegrationHub spoke is `sn_ih` scope |
| Flow scope | Flows live in your scoped app scope — keep them there |
| Test flow | Use "Test" button with a real record sys_id — fake sys_ids cause silent failures |
| Flow logs | System Log → All → filter by source = your flow name |
| Versioning | Flows are versioned — always activate after editing or changes won't run |

---

## Frequently Needed Actions (Quick Reference)

```
sn_fd.CreateTask          → Create a task record
sn_fd.LookUpRecords       → Query table, return array or first record  
sn_fd.UpdateRecord        → Update a GlideRecord pill
sn_fd.RunScript           → Inline GlideScript
sn_fd.Wait                → Pause flow (use sparingly — blocks thread)
sn_ih.RESTStep            → IntegrationHub HTTP call (Claude API)
sn_fd.LogMessage          → Write to flow log (useful for debugging)
```
