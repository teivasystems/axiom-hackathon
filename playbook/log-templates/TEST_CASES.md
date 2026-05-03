# Test Cases — [RUN_ID]

> **Owner:** Casey  
> **Run:** [e.g. 2026-05_creatorcon]  
> **App:** [App display name]  
> **Status key:** `[ ]` Todo · `[x]` Pass · `[!]` Fail · `[-]` Skipped  
> **Format:** GIVEN / WHEN / THEN  
> Copy this file to `runs/<run>/personas/casey.md` at the start of PREP.

---

## Pre-Handoff Smoke Tests

Run before accepting Jordan's handover. If any fails, do not accept handover — return to Jordan.

- [ ] App loads without errors in PDI Studio
- [ ] All P0 flows visible in Flow Designer
- [ ] All custom tables present in Studio → Data Model
- [ ] No deploy errors in `npm run deploy` output (Jordan confirms)
- [ ] Credential alias `claude_api` present in SN Credential Store (if Claude integration in scope)

---

## Happy Path

### TC-001: [Feature name — map to scope lock IN-SCOPE item]

```
GIVEN   [precondition: user role, record state, data present]
WHEN    [action: user submits form / flow triggers / button clicked]
THEN    [expected outcome: record created, notification sent, field updated]
```

**PDI check:** [Where to verify — e.g. "Service Portal → /kudos, submit form, check x_table list"]  
**Status:** `[ ]`  
**Notes:** —

---

### TC-002: [Next feature]

```
GIVEN   ...
WHEN    ...
THEN    ...
```

**PDI check:** ...  
**Status:** `[ ]`  
**Notes:** —

---

## Edge Cases

### TC-010: [Edge case name]

```
GIVEN   [the unhappy path setup]
WHEN    [the action that should trigger graceful handling]
THEN    [expected error state, message, or fallback behaviour]
```

**PDI check:** ...  
**Status:** `[ ]`  
**Notes:** —

---

## Claude / AI Integration Tests (if in scope)

### TC-020: Claude API responds correctly

```
GIVEN   A record that triggers the Claude integration
WHEN    The flow executes
THEN    The AI-generated field is populated with a non-empty, coherent response
        AND the response is stored in the correct field
        AND no error is thrown
```

**PDI check:** Check field on record after flow runs. Check syslog for errors.  
**Status:** `[ ]`

### TC-021: Claude API credential missing

```
GIVEN   The credential alias is absent or misconfigured
WHEN    The flow executes
THEN    A meaningful error is logged (not a silent failure)
        AND the record is not left in a broken state
```

**PDI check:** Remove or rename credential alias, trigger flow, check syslog.  
**Status:** `[ ]`

---

## Validation Checklist (pre-submission)

Run this before handing off to Riley for pitch prep.

- [ ] All TC-00x Happy Path tests: `[x]`
- [ ] All TC-01x Edge Cases: `[x]` or `[-]` with documented reason
- [ ] All TC-02x AI tests: `[x]` (if Claude in scope)
- [ ] No JavaScript errors in browser console on happy path
- [ ] Demo user account configured (correct role, test data seeded)
- [ ] PDI URL confirmed stable — no maintenance window during demo slot
- [ ] `runs/<run>/personas/casey.md` updated with final validation status

---

## Defect Log

| ID | TC ref | Severity | Description | Status | Jordan ticket |
|---|---|---|---|---|---|
| BUG-001 | — | — | — | — | — |
