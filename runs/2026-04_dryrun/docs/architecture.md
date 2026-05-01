# Architecture Document — Team Kudos
# AXM-DR-03 | Sam | 2026-04-29
# Run: 2026-04_dryrun

---

## 1. App Scope

**App name:** Team Kudos
**Scope (sys_name):** `x_9274_kudos`
**Scope ID:** `8f59e7b4aa4a42c79236d248bd1672a3`
**Display name:** Team Kudos
**PDI:** `https://dev390976.service-now.com`
**App URL:** `https://dev390976.service-now.com/sys_app.do?sys_id=8f59e7b4aa4a42c79236d248bd1672a3`

> **D-001 RESOLVED:** Vendor prefix `9274` confirmed from PDI. Scope `x_9274_kudos` assigned.
> App scaffolded via `now-sdk init`, deployed clean. now.config.json is source of truth.

**What it does:**
- Employees submit peer kudos (giver, receiver, message, category)
- Submitted kudo triggers an in-platform notification to the receiver
- Claude AI generates a team kudos digest on demand, summarising recent kudos by theme

**What it does NOT do (dry run):**
- No email notifications
- No manager dashboard (feed widget provides equivalent visibility)
- No scheduled digest (digest is on-demand only)
- No HeyGen pitch, no submission artefacts

---

## 2. Table Schema

### `x_9274_kudos_entry`

**Display name:** Kudos Entry
**Parent table:** `task` (extends task — gives us sys_id, number, state, assignment for free)
**Label:** Kudos Entry
**Auto-number prefix:** KUD

| sys_name          | Display label    | Type           | Mandatory | Default    | Notes                                          |
|-------------------|------------------|----------------|-----------|------------|------------------------------------------------|
| `u_giver`         | Given By         | Reference → sys_user | Yes   | Current user | Set on insert via business rule or flow      |
| `u_receiver`      | Received By      | Reference → sys_user | Yes   | —          | Chosen by submitter in the widget              |
| `u_message`       | Message          | String (max 500) | Yes    | —          | Free text; validated non-empty in Script Include |
| `u_category`      | Category         | Choice           | Yes   | `teamwork` | Values: `teamwork`, `innovation`, `leadership`, `above_beyond` |
| `u_digest_text`   | Claude Digest    | String (journal/long) | No | —          | Populated by ClaudeDigest SI — not editable by users |

**Note:** Extending `task` is intentional. It gives notifications, activity stream, and number auto-generation without custom code. Jordan must confirm the table extends `task` (not base `sys_metadata`) in the Fluent schema definition.

---

## 3. OOB Tables Used

| Table      | Purpose                        | Access   | Modification |
|------------|--------------------------------|----------|--------------|
| `sys_user` | Resolve giver/receiver display names | Read | None — never modify |
| `sys_notification` | Platform notification record | Write (via Notification API) | None |

No OOB table modifications. Notifications are created programmatically — we do not modify OOB notification templates.

---

## 4. Flow Designer

### Flow: Kudos Submitted Notification

| Property | Value |
|----------|-------|
| **Name** | Kudos Submitted Notification |
| **Sys name** | `x_9274_kudos_notification_flow` |
| **Trigger** | Record Created — table: `x_9274_kudos_entry` — condition: always (no filter) |
| **Scope** | `x_9274_kudos` |

**Actions (in order):**

1. **Get Kudo Details** *(Run Script)*
   - Input: `trigger.current` (the new kudos record)
   - Script: reads `u_giver`, `u_receiver`, `u_message`, `u_category` via `GlideRecord`
   - Output: `giver_name` (String), `receiver_sys_id` (String), `message` (String), `category_label` (String)

2. **Send In-Platform Notification** *(Run Script)*
   - Input: `receiver_sys_id`, `giver_name`, `message`, `category_label`
   - Script: calls `KudosService.sendNotification(receiverSysId, giverName, message, categoryLabel)`
   - Output: `notification_sent` (Boolean)

3. **Error Lane** *(if any action fails)*
   - Run Script: logs error via `gs.error()` with kudos sys_id and failure reason
   - Does NOT re-throw — a failed notification must not block the kudo record creation

**No Claude call in this flow.** The notification flow must be fast; Claude digest is separate and on-demand.

---

### Flow: Generate Claude Digest (on-demand)

| Property | Value |
|----------|-------|
| **Name** | Generate Team Kudos Digest |
| **Sys name** | `x_9274_kudos_digest_flow` |
| **Trigger** | Service Catalog Item OR manual "Run Flow" — table: `x_9274_kudos_entry` is the data source but trigger is a Record action on a dummy "Digest Request" record. **Simplification for dry run:** trigger is a manually-runnable flow (no trigger table) — Jordan triggers it via Flow Designer UI for validation |
| **Scope** | `x_9274_kudos` |

**Actions (in order):**

1. **Fetch Recent Kudos** *(Run Script)*
   - Script: calls `KudosService.getRecentKudos(30)` (last 30 days)
   - Output: `kudos_json` (String — JSON array)

2. **Build Claude Prompt** *(Run Script)*
   - Input: `kudos_json`
   - Script: calls `ClaudeDigest.buildPrompt(kudosJson)`
   - Output: `prompt_text` (String)

3. **Call Claude API** *(REST Step)*
   - Connection alias: `Claude API` (Credential Store — set up by Kostya)
   - Method: POST
   - Path: `/v1/messages`
   - Headers: `anthropic-version: 2023-06-01`, `content-type: application/json`
   - Body: built dynamically — see Section 5
   - Timeout: 45 seconds
   - Output: `api_response_body` (String), `api_status_code` (String)

4. **Parse Claude Response** *(Run Script)*
   - Input: `api_response_body`, `api_status_code`
   - Script: calls `ClaudeDigest.parseResponse(responseBody, statusCode)`
   - Output: `digest_text` (String), `parse_success` (Boolean)

5. **Store Digest** *(Run Script)*
   - Input: `digest_text`, `parse_success`
   - Script: if `parse_success`, calls `KudosService.storeDigest(digestText)`; else logs error
   - Output: `store_success` (Boolean)

6. **Error Lane** *(REST step fails or parse_success = false)*
   - Run Script: calls `KudosService.storeDigest('Digest unavailable — Claude API error.')` as fallback
   - Ensures the feed widget always has something to display

---

## 5. Claude Integration

**Pattern:** IntegrationHub REST Step (not direct Script Include HTTP call)

**Credential name in SN store:** `Claude API Key`
**Connection alias:** `Claude API`
**Endpoint:** `https://api.anthropic.com/v1/messages`
**Model:** `claude-sonnet-4-20250514`
**Max tokens:** `512` (digest is short — 3 paragraphs max)

**Request body structure (built in Run Script step before REST step):**

```json
{
  "model": "claude-sonnet-4-20250514",
  "max_tokens": 512,
  "system": "You are an internal recognition analyst. Produce concise, warm team digest summaries.",
  "messages": [
    {
      "role": "user",
      "content": "<prompt_text flow variable>"
    }
  ]
}
```

**Prompt design (built by `ClaudeDigest.buildPrompt`):**
- Input: JSON array of kudos objects `[{giver, receiver, message, category}, ...]`
- Groups by category
- Asks Claude for: (1) one-paragraph overview, (2) top recognised person and why, (3) standout theme
- Output format: plain text, no markdown headers (easier to display in Service Portal)

**Output handling:**
- Parsed text stored in `x_9274_kudos_entry.u_digest_text` on a designated "digest record"
- **Simpler approach for dry run:** store digest in a single global System Property `x_9274_kudos.latest_digest` — no extra table needed. Widget reads this property.

---

## 6. Script Includes

### `KudosService`

| Property | Value |
|----------|-------|
| **Name** | KudosService |
| **Scope** | `x_9274_kudos` |
| **Accessible from** | This application scope only (no cross-scope calls needed) |
| **Extends** | AbstractAjaxProcessor (for potential AJAX calls from widget client script) |

**Public methods:**

```javascript
/**
 * Creates a kudo record.
 * @param {string} receiverSysId - sys_id of sys_user receiving the kudo
 * @param {string} message       - kudo message text
 * @param {string} category      - one of: teamwork, innovation, leadership, above_beyond
 * @returns {string} sys_id of created record, or '' on failure
 */
createKudo(receiverSysId, message, category)

/**
 * Returns last N days of kudos as a JSON string array.
 * @param {number} days - lookback window (default 30)
 * @returns {string} JSON — [{giver, receiver, message, category, created_on}]
 */
getRecentKudos(days)

/**
 * Sends an in-platform notification to a user.
 * @param {string} receiverSysId  - sys_user sys_id
 * @param {string} giverName      - display name of sender
 * @param {string} message        - kudo message
 * @param {string} categoryLabel  - human-readable category string
 * @returns {boolean}
 */
sendNotification(receiverSysId, giverName, message, categoryLabel)

/**
 * Stores the Claude digest in System Property x_9274_kudos.latest_digest.
 * @param {string} digestText
 * @returns {boolean}
 */
storeDigest(digestText)

/**
 * Reads the stored digest.
 * @returns {string} digest text or empty string
 */
getDigest()
```

**Dependencies:** None external. Uses GlideRecord, GlideSystem, GlideSysAttachment (if needed).

---

### `ClaudeDigest`

| Property | Value |
|----------|-------|
| **Name** | ClaudeDigest |
| **Scope** | `x_9274_kudos` |
| **Accessible from** | This application scope only |
| **Extends** | (none — plain Script Include) |

**Public methods:**

```javascript
/**
 * Builds the Claude prompt from kudos JSON.
 * @param {string} kudosJson - JSON string from KudosService.getRecentKudos()
 * @returns {string} prompt text ready to POST to Claude
 */
buildPrompt(kudosJson)

/**
 * Parses Claude API response body.
 * @param {string} responseBody - raw JSON string from REST step
 * @param {string} statusCode   - HTTP status code string
 * @returns {{ success: boolean, text: string, error: string }}
 */
parseResponse(responseBody, statusCode)
```

**Dependencies:** None — pure string manipulation and JSON parsing.

---

## 7. UI Components

### Widget 1: Submit Kudo

| Property | Value |
|----------|-------|
| **Name** | Kudos Submit Widget |
| **Sys name** | `x_9274_kudos_submit_widget` |
| **Type** | Service Portal Widget |
| **Data source** | `sys_user` (receiver lookup) + `x_9274_kudos_entry` (write) |
| **Fields displayed** | Receiver (reference field / people picker), Message (textarea), Category (dropdown) |
| **User role** | `snc_internal` (any logged-in employee) |
| **Wireframe cross-ref** | Screen 1 — Submit Kudo Form (Morgan AXM-DR-04) |
| **Server script** | Calls `KudosService.createKudo()` on submit |
| **Client script** | Validates: receiver not self, message not empty, category selected |

### Widget 2: Team Kudos Feed

| Property | Value |
|----------|-------|
| **Name** | Kudos Feed Widget |
| **Sys name** | `x_9274_kudos_feed_widget` |
| **Type** | Service Portal Widget |
| **Data source** | `x_9274_kudos_entry` (read, last 30 records) + System Property for digest |
| **Fields displayed** | Giver name, Receiver name, Message, Category badge, Created date; Claude Digest block |
| **User role** | `snc_internal` (any logged-in employee) |
| **Wireframe cross-ref** | Screen 2 — Team Feed + Claude Digest (Morgan AXM-DR-04) |
| **Server script** | Calls `KudosService.getRecentKudos(30)` and `KudosService.getDigest()` |
| **Client script** | None required — read-only display |
| **Empty state** | "No kudos yet — be the first to recognise a colleague!" |
| **Claude digest error state** | "Digest unavailable — check back shortly." (shown when digest text is empty or contains error sentinel) |

---

## 8. Plugin Dependencies

| Plugin | ID | Purpose | PDI Status |
|--------|----|---------|------------|
| Flow Designer | `com.glide.hub.flow_designer` | Flow execution | ✅ Standard on all PDIs (Yokohama+) |
| IntegrationHub | `com.glide.hub.integrations` | REST step for Claude API | ✅ Confirmed on dev PDI (AXM-11 auth setup completed) |
| Service Portal | `com.glide.service-portal` | Widget rendering | ✅ Standard on all dev PDIs |

**No unverified plugins.** All three are confirmed available.
No Store apps required.

---

## 9. Build Sequence

Jordan builds in this order exactly. Do not skip ahead.

```
1.  Table: x_9274_kudos_entry
    - Define schema in src/fluent/ per Section 2
    - Extend task, add all u_ fields
    - npm run build && npm run deploy
    - Validate: table visible in Studio → Data Model

2.  Script Include: KudosService
    - Implement all 5 public methods from Section 6
    - Unit test in ServiceNow Scripts – Background:
        var ks = new KudosService();
        var id = ks.createKudo('<your sys_user sys_id>', 'Great work!', 'teamwork');
        gs.info(id);  // should return a sys_id
    - npm run build && npm run deploy
    - Validate: script runs in Scripts – Background, returns sys_id

3.  Script Include: ClaudeDigest
    - Implement buildPrompt() and parseResponse() from Section 6
    - Unit test buildPrompt() in Scripts – Background with a static kudos array
    - npm run build && npm run deploy
    - Validate: output string is sensible; parseResponse() handles 200 and non-200

4.  Flow: Kudos Submitted Notification
    - Build per Section 4 (notification flow)
    - Test: insert a kudo record manually → confirm notification appears for receiver
    - npm run build && npm run deploy
    - Validate: notification visible in sys_notification table

5.  Flow: Generate Team Kudos Digest
    - Build per Section 4 (digest flow)
    - TEST CLAUDE CALL INDEPENDENTLY before wiring: run a REST test from IntegrationHub
    - Wire flows only after independent test passes
    - Trigger manually from Flow Designer
    - Validate: System Property x_9274_kudos.latest_digest has content from Claude

6.  Widget: Submit Kudo (Screen 1)
    - Implement per Section 7 and Morgan's wireframe
    - Validate: submit form → record appears in x_9274_kudos_entry → notification fires

7.  Widget: Team Kudos Feed (Screen 2)
    - Implement per Section 7 and Morgan's wireframe
    - Validate: kudos list populates, Claude digest block shows, empty states render

8.  End-to-end happy path
    - Submit kudo → notification fires → kudo in feed → trigger digest → digest appears in feed
    - Hand off to Casey
```

---

## 10. Known Risks

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|-----------|
| Claude API credential not configured in PDI | Medium | High | Kostya configures credential alias before Step 5. Jordan confirms before wiring flow. |
| IntegrationHub REST step times out (LLM latency) | Low | Medium | Set timeout to 45s. Add error lane with fallback digest text. |
| `task` extension causes unexpected ACL inheritance | Low | Low | Test record creation in Step 1 as non-admin user. If blocked, switch to extending `sn_hr_core_case` or base table. |
| Service Portal not on PDI (unlikely but check) | Very Low | High | Confirm in Studio on first deploy. Fallback: Now Experience page (more build time). |
| Notification API requires additional plugin | Low | Medium | Test `sendNotification()` in Scripts – Background at Step 2 before wiring flow. |

---

## 11. Open Questions

| # | Question | Decides | By when |
|---|----------|---------|---------|
| Q1 | Credential alias name: confirm it is `Claude API` matching AXM-10 setup | Kostya | Before Step 5 |
| Q2 | Which sys_user sys_id to use for test submissions in dry run? | Kostya | Before Step 2 validation |
| Q3 | Service Portal: does the dev PDI have a portal already? Or does Jordan create one? | Jordan confirms on first deploy | Step 6 |

No open questions blocking Sam. Jordan may proceed from Step 1 immediately.

---

**Sam — 2026-04-29**
*Architecture locked. No decisions pending for Jordan to start.*

---

## 12. Build Manifest

Jordan's primary build guide. Build top-to-bottom. Check off each row after deploy.
Do not start a row until all its dependencies are `[x]`.

| # | Type | Display name | sys_name | Source file | Key info | Depends on | PDI validate | ✓ |
|---|------|--------------|----------|-------------|----------|------------|--------------|---|
| 1 | Table | Kudos Entry | `x_9274_kudos_entry` | `src/fluent/kudos_entry.now.ts` | giver (ref:sys_user, M), receiver (ref:sys_user, M), message (string, M), category (string, M, choice: recognition/teamwork/innovation/above_beyond), state (string, auto: active) — extends `task` | — | Studio → Tables → `x_9274_kudos_entry` exists, insert test record as non-admin | [x] |
| 2 | Script Include | KudosService | `KudosService` | `src/server/KudosService.ts` | `getRecentKudos(days): string` (JSON), `sendNotification(receiverSysId, giverName, message, categoryLabel): boolean`, `storeDigest(text): boolean`, `getDigest(): string` | #1 | Scripts → Script Includes → `KudosService` present, run `new KudosService().getRecentKudos(7)` in Scripts-Background → no error | [ ] |
| 3 | Script Include | ClaudeDigest | `ClaudeDigest` | `src/server/ClaudeDigest.ts` | `buildPrompt(kudosJson): string`, `parseResponse(responseBody, statusCode): {success, text, error}` | — | Scripts → Script Includes → `ClaudeDigest` present, run `new ClaudeDigest().buildPrompt('[]')` → returns non-empty string | [ ] |
| 4 | Claude integration | Digest REST call | — | `src/server/ClaudeDigest.ts` (inside `generateDigest` method) | credential alias: `Claude API`, endpoint: `https://api.anthropic.com/v1/messages`, model: `claude-sonnet-4-20250514`, output: stored via `KudosService.storeDigest()` | #2 #3 | Run `new ClaudeDigest().generateDigest()` in Scripts-Background → returns digest text, confirm `x_9274_kudos.latest_digest` sys_property updated | [ ] |
| 5 | Flow | Kudos Notification Flow | — | `src/fluent/flows/kudos_notification.now.ts` | Trigger: record inserted into `x_9274_kudos_entry`, Action 1: get giver display name, Action 2: call `KudosService.sendNotification()`, Error lane: log failure to field `work_notes` | #1 #2 | Flow Designer → activate flow → insert test record → confirm receiver gets in-platform notification | [ ] |
| 6 | Flow | Kudos Digest Flow | — | `src/fluent/flows/kudos_digest.now.ts` | Trigger: manual (Run Now only — no schedule), Action 1: call `ClaudeDigest.generateDigest()`, Action 2: store result via `KudosService.storeDigest()`, Error lane: log to ACTIVITY.log | #2 #3 #4 | Flow Designer → activate → Run Now → confirm digest stored in sys_property `x_9274_kudos.latest_digest` | [ ] |
| 7 | UI Widget | Kudos Submit Widget | `x_9274_kudos_submit_widget` | `src/fluent/widgets/kudos_submit.now.ts` | Screen: "Submit Kudo" (wireframes.md), data: reads `sys_user`, writes `x_9274_kudos_entry`, role: `snc_internal` | #1 #5 | Service Portal → widget renders, submit form with valid data → record created in `x_9274_kudos_entry`, notification received | [ ] |
| 8 | UI Widget | Kudos Feed Widget | `x_9274_kudos_feed_widget` | `src/fluent/widgets/kudos_feed.now.ts` | Screen: "Kudos Feed" (wireframes.md), data: reads `x_9274_kudos_entry` (last 30 days, ordered by created_on desc), role: `snc_internal`, shows digest if `getDigest()` non-empty | #1 #6 | Service Portal → widget renders, confirm feed shows recent records, confirm digest section appears after flow run | [ ] |
