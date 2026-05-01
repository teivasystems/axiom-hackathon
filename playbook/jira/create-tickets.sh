#!/usr/bin/env bash
# AXIOM — Create all standard Jira tickets for a run
#
# Usage:
#   ./playbook/jira/create-tickets.sh <run-folder-name> [--dry-run]
#
# Examples:
#   ./playbook/jira/create-tickets.sh 2026-05_creatorcon
#   ./playbook/jira/create-tickets.sh 2026-05_dryrun2 --dry-run
#
# Required environment variables (set in shell before running):
#   JIRA_URL        https://teiva.atlassian.net
#   JIRA_EMAIL      k.bazanov@teivasys.com
#   JIRA_TOKEN      <your API token>
#   JIRA_PROJECT    AXM
#
# What it does:
#   1. Creates all 7 standard tickets with full descriptions
#   2. Sets the Persona custom field on each
#   3. Sets initial status (In Progress / Backlog)
#   4. Prints ticket IDs on completion
#
# After running: paste ticket IDs into runs/[run]/README.md ticket table.

set -euo pipefail

# ── Args ──────────────────────────────────────────────────────────────────────

RUN="${1:-}"
DRY_RUN="${2:-}"

if [[ -z "$RUN" ]]; then
  echo "Usage: $0 <run-folder-name> [--dry-run]"
  echo "Example: $0 2026-05_creatorcon"
  exit 1
fi

# ── Config ────────────────────────────────────────────────────────────────────

JIRA_URL="${JIRA_URL:-https://teiva.atlassian.net}"
JIRA_EMAIL="${JIRA_EMAIL:-k.bazanov@teivasys.com}"
JIRA_TOKEN="${JIRA_TOKEN:-}"
JIRA_PROJECT="${JIRA_PROJECT:-AXM}"

# Custom field IDs (confirmed against teiva.atlassian.net)
FIELD_PERSONA="customfield_11373"

# Persona option IDs (from Jira field config)
PERSONA_ALEX="10244"
PERSONA_SAM="10245"
PERSONA_MORGAN="10248"
PERSONA_CASEY="10247"
PERSONA_RILEY="10249"
PERSONA_JORDAN="10246"

IS_DR=false
if [[ "$RUN" == *"dryrun"* || "$RUN" == *"dry"* ]]; then
  IS_DR=true
fi

prefix() {
  if $IS_DR; then echo "[DR] $1"; else echo "$1"; fi
}

if [[ -z "$JIRA_TOKEN" ]]; then
  echo "ERROR: JIRA_TOKEN environment variable is not set."
  echo "Set it with: export JIRA_TOKEN=<your-token>"
  exit 1
fi

AUTH=$(echo -n "$JIRA_EMAIL:$JIRA_TOKEN" | base64)
REPO="https://github.com/teivasystems/axiom-hackathon"
CARDS="$REPO/blob/main/playbook/cards"
LOGS="$REPO/blob/main/runs/$RUN/logs"

echo "=== AXIOM Ticket Creator ==="
echo "Run:     $RUN"
echo "Project: $JIRA_PROJECT"
echo "Dry run: ${DRY_RUN:-no}"
echo ""

# ── Helper ────────────────────────────────────────────────────────────────────

create_ticket() {
  local summary="$1"
  local persona_id="$2"
  local description="$3"

  if [[ "$DRY_RUN" == "--dry-run" ]]; then
    echo "[DRY RUN] Would create: $summary (persona: $persona_id)"
    return
  fi

  local payload
  payload=$(jq -n \
    --arg project "$JIRA_PROJECT" \
    --arg summary "$summary" \
    --arg desc "$description" \
    --arg persona "$persona_id" \
    '{
      fields: {
        project: { key: $project },
        summary: $summary,
        issuetype: { name: "Task" },
        description: {
          type: "doc",
          version: 1,
          content: [{
            type: "paragraph",
            content: [{ type: "text", text: $desc }]
          }]
        },
        assignee: { accountId: "712020:4d616591-3e9b-4fce-8af8-de8c7f944af4" },
        ($ENV.FIELD_PERSONA): [{ id: $persona }]
      }
    }' --argjson FIELD_PERSONA "\"$FIELD_PERSONA\"")

  local response
  response=$(curl -s -X POST \
    -H "Authorization: Basic $AUTH" \
    -H "Content-Type: application/json" \
    -d "$payload" \
    "$JIRA_URL/rest/api/3/issue")

  local key
  key=$(echo "$response" | jq -r '.key // "ERROR"')

  if [[ "$key" == "ERROR" || "$key" == "null" ]]; then
    echo "FAILED: $summary"
    echo "Response: $response"
  else
    echo "Created: $key — $summary"
    echo "$key"
  fi
}

transition_to_in_progress() {
  local key="$1"
  [[ "$DRY_RUN" == "--dry-run" ]] && return

  # Fetch available transitions
  local transitions
  transitions=$(curl -s \
    -H "Authorization: Basic $AUTH" \
    "$JIRA_URL/rest/api/3/issue/$key/transitions")

  local transition_id
  transition_id=$(echo "$transitions" | jq -r \
    '.transitions[] | select(.name == "In Progress") | .id' | head -1)

  if [[ -n "$transition_id" ]]; then
    curl -s -X POST \
      -H "Authorization: Basic $AUTH" \
      -H "Content-Type: application/json" \
      -d "{\"transition\":{\"id\":\"$transition_id\"}}" \
      "$JIRA_URL/rest/api/3/issue/$key/transitions" > /dev/null
    echo "  → transitioned to In Progress"
  fi
}

# ── Ticket definitions ────────────────────────────────────────────────────────

echo "--- Creating tickets ---"
echo ""

# 1. Ideation (Alex)
IDEATION_KEY=$(create_ticket \
  "$(prefix "Ideation Session")" \
  "$PERSONA_ALEX" \
  "PERSONA: Alex | CARD: $CARDS/alex.md

OUTPUT: runs/$RUN/ideation/session.md

ENTRY CONDITIONS:
- Run folder initialised
- All tickets created (this ticket is evidence of that)

WHAT YOU DO:
Run playbook/process/ideation.md. Select one app concept. Lock scope. Hand off.

Scope lock must include: app name, one-liner, IN scope list, OUT scope list,
Claude's role, demo moment.

ACCEPTANCE CRITERIA:
- ideation/session.md committed and pushed
- Scope lock is unambiguous
- Handover comment posted with ARTIFACT_URL and COMMIT
- AXM-ARCH + AXM-WIRE + AXM-TEST + AXM-PITCH transitioned to In Progress

LOGS: $LOGS/ACTIVITY.log")

[[ -n "$IDEATION_KEY" && "$IDEATION_KEY" != *"Would"* ]] && \
  transition_to_in_progress "$IDEATION_KEY"

# 2. Architecture (Sam)
ARCH_KEY=$(create_ticket \
  "$(prefix "Architecture Doc")" \
  "$PERSONA_SAM" \
  "PERSONA: Sam | CARD: $CARDS/sam.md

OUTPUT: runs/$RUN/docs/architecture.md
DEPENDS ON: Ideation Session Done + ideation/session.md committed

ENTRY CONDITIONS:
- Ideation session complete and committed
- Scope lock readable

BEFORE WRITING: query PDI vendor prefix (glide.appcreator.company.code).
Confirm Flow Designer + IntegrationHub + Service Portal plugins available.
Do not name any table or scope before prefix is confirmed.

REQUIRED: all 11 sections + build manifest (Jordan ticks off as built).

ACCEPTANCE CRITERIA:
- All 11 sections complete
- Build manifest present
- PDI vendor prefix confirmed in all sys_names
- architecture.md committed and pushed
- Handover comment with ARTIFACT_URL and COMMIT

LOGS: $LOGS/ACTIVITY.log | DECISIONS: $LOGS/DECISIONS.md")

# 3. Wireframes (Morgan)
WIRE_KEY=$(create_ticket \
  "$(prefix "UX Wireframe Spec")" \
  "$PERSONA_MORGAN" \
  "PERSONA: Morgan | CARD: $CARDS/morgan.md

OUTPUT: runs/$RUN/docs/wireframes.md + Figma file
STARTS FROM: ideation/session.md scope lock (does NOT wait for architecture doc)

Mark data-dependent fields [TBD - pending architecture.md] and fill when ready.

For each screen: user + trigger, layout, components, Claude output location,
empty state, error state, Jordan note.

Required at end: demo storyboard (90-second, timestamped).

ACCEPTANCE CRITERIA:
- Every in-scope screen specified
- No [TBD] fields when handed to Jordan
- Demo storyboard present
- wireframes.md committed + Figma link in handover comment

LOGS: $LOGS/ACTIVITY.log")

[[ -n "$WIRE_KEY" && "$WIRE_KEY" != *"Would"* ]] && \
  transition_to_in_progress "$WIRE_KEY"

# 4. Test cases (Casey)
TEST_KEY=$(create_ticket \
  "$(prefix "Test Case Draft")" \
  "$PERSONA_CASEY" \
  "PERSONA: Casey | CARD: $CARDS/casey.md

OUTPUT: runs/$RUN/personas/casey.md
STARTS FROM: ideation/session.md scope lock (does NOT wait for architecture doc)

PART 1 (PREP): Write one test case per in-scope feature.
Format: TC-NNN / GIVEN / WHEN / THEN / Edge case / Infrastructure flag

PART 2 (BUILD hour ~5:30): Run all cases against live PDI.
Record Pass / Fail / Deferred. Work with Jordan on fixes.
Post validated feature list for Riley.

PART 3 (SUBMIT hour 7:30): Own the submission checklist.

ALSO: audit closure comments at end of PREP and BUILD.
Missing closure comment = reopen ticket + log [AUDIT_FAIL].

ACCEPTANCE CRITERIA:
- One case per in-scope feature with edge case
- Validation Results table populated after BUILD
- Validated feature list posted for Riley
- Submission checklist signed off

LOGS: $LOGS/ACTIVITY.log")

[[ -n "$TEST_KEY" && "$TEST_KEY" != *"Would"* ]] && \
  transition_to_in_progress "$TEST_KEY"

# 5. Pitch (Riley)
PITCH_KEY=$(create_ticket \
  "$(prefix "Pitch Script")" \
  "$PERSONA_RILEY" \
  "PERSONA: Riley | CARD: $CARDS/riley.md

OUTPUT: runs/$RUN/pitch/script_draft.md
STARTS FROM: ideation/session.md scope lock

SECTION 1 (write now — 30 sec): Problem as felt experience. AXIOM intro.
SECTION 2 (write after Casey validates): Demo narration. Validated features only.
SECTION 3 (write now — 30 sec): Vision at scale. Closing line.

Total runtime: 90 seconds. Write to this constraint.
Section 2 placeholder: [SECTION 2 - PENDING CASEY VALIDATION]

ACCEPTANCE CRITERIA:
- Sections 1 + 3 complete before BUILD starts
- Section 2 updated within 15 min of Casey handover
- No unvalidated features included
- script_draft.md committed + handover comment for Kostya

LOGS: $LOGS/ACTIVITY.log")

[[ -n "$PITCH_KEY" && "$PITCH_KEY" != *"Would"* ]] && \
  transition_to_in_progress "$PITCH_KEY"

# 6. PDI pre-config (Jordan)
PDI_KEY=$(create_ticket \
  "$(prefix "PDI Pre-configuration")" \
  "$PERSONA_JORDAN" \
  "PERSONA: Jordan | CARD: $CARDS/jordan.md

OUTPUT: runs/$RUN/personas/jordan.md (checklist updated)
PARALLEL: runs alongside ideation and architecture

CHECKLIST:
[ ] now-sdk auth --list shows correct alias active
[ ] now-sdk init clean in runs/$RUN/app/ with correct scopeName
[ ] npm run build → zero errors
[ ] npm run deploy → clean
[ ] App visible in PDI Studio (System Applications)
[ ] Vendor prefix confirmed (glide.appcreator.company.code) — share with Sam
[ ] Flow Designer plugin confirmed
[ ] IntegrationHub plugin confirmed
[ ] Service Portal plugin confirmed (if in scope)
[ ] Claude API credential in SN Credential Store (Kostya configures — confirm exists)

ACCEPTANCE CRITERIA:
- All checklist items ticked
- Vendor prefix noted in jordan.md
- Build + deploy cycle verified clean end-to-end
- No open unknowns before AXM-BUILD starts

LOGS: $LOGS/ACTIVITY.log")

[[ -n "$PDI_KEY" && "$PDI_KEY" != *"Would"* ]] && \
  transition_to_in_progress "$PDI_KEY"

# 7. Scaffold + Build (Jordan)
BUILD_KEY=$(create_ticket \
  "$(prefix "Scaffold + Build")" \
  "$PERSONA_JORDAN" \
  "PERSONA: Jordan | CARD: $CARDS/jordan.md

OUTPUT: runs/$RUN/app/src/ (built and deployed to PDI)
DEPENDS ON: Architecture Doc Done + architecture.md committed

BEFORE WRITING CODE:
- Read architecture.md Sections 2, 6, 7, 9 and build manifest
- Read wireframes.md fully
- Confirm pwd ends in runs/$RUN/app/ and now.config.json scope is correct

MANDATORY BUILD LOOP (every component):
  0. Verify pwd + now.config.json
  1. Write/modify source file
  2. npm run build (fix all errors)
  3. npm run deploy (fix all errors)
  4. Validate on PDI (open browser)
  5. git commit [JORDAN] feat: <component>
  6. Update personas/jordan.md
  7. Append [COMMIT]+[DEPLOY] to ACTIVITY.log

BUILD ORDER: Tables → Script Includes → Flows → UI

HOUR CHECKPOINTS (post to ACTIVITY.log):
  Hour 2: tables + Script Includes
  Hour 4: flows + Claude integration tested
  Hour 5:30: handoff to Casey

BLOCKER PROTOCOL: Stop. Log. Jira comment. Transition Blocked. Escalate.

ACCEPTANCE CRITERIA:
- All build manifest items ticked
- Happy path deployable end-to-end
- Casey's test cases pass
- Handover comment posted for Casey at ~hour 5:30

LOGS: $LOGS/ACTIVITY.log | DECISIONS: $LOGS/DECISIONS.md")

# ── Summary ───────────────────────────────────────────────────────────────────

echo ""
echo "=== Done ==="
echo ""
echo "Paste these into runs/$RUN/README.md ticket table:"
echo ""
echo "| Ticket | Title | Persona | Status |"
echo "|--------|-------|---------|--------|"
[[ -n "${IDEATION_KEY:-}" ]] && echo "| $IDEATION_KEY | Ideation Session | Alex | In Progress |"
[[ -n "${ARCH_KEY:-}" ]]     && echo "| $ARCH_KEY | Architecture Doc | Sam | Backlog |"
[[ -n "${WIRE_KEY:-}" ]]     && echo "| $WIRE_KEY | UX Wireframe Spec | Morgan | In Progress |"
[[ -n "${TEST_KEY:-}" ]]     && echo "| $TEST_KEY | Test Case Draft | Casey | In Progress |"
[[ -n "${PITCH_KEY:-}" ]]    && echo "| $PITCH_KEY | Pitch Script | Riley | In Progress |"
[[ -n "${PDI_KEY:-}" ]]      && echo "| $PDI_KEY | PDI Pre-configuration | Jordan | In Progress |"
[[ -n "${BUILD_KEY:-}" ]]    && echo "| $BUILD_KEY | Scaffold + Build | Jordan | Backlog |"
echo ""
echo "Next: paste output above into README.md, then start Alex on ideation."
