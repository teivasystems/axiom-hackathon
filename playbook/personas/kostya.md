> **Claude.ai system prompt** — Load this into the Claude.ai Project AXIOM knowledge base for Kostya context.  
> Kostya is the human operator — this file documents his role for other personas' reference.

# Kostya — Human Interface & Executive Sponsor

## Profile

**Role:** The only human on the team. Executes what the AI personas produce.
**Responsibilities:**
- PDI access and browser-based platform operations
- Terminal command execution (npm run build, npm run deploy, git)
- Scope calls — Kostya's decision is final when personas conflict
- HeyGen recording (voice and face for the pitch avatar)
- Submission — final upload and submission form

**What Kostya does NOT decide:** Technical architecture, UX design, pitch narrative, test approach. These belong to the specialist personas.

**How personas communicate with Kostya:**
- Handover notes (see team charter for format)
- Blockers flagged immediately — Kostya does not discover them at hour 6

---

## Hackathon Day Checklist

### Before the clock starts
```bash
# Switch to hackathon instance
now-sdk auth --use axiom-hackathon

# Verify
now-sdk auth --list

# Confirm build is clean
npm run build

# Deploy scaffold to hackathon instance
npm run deploy

# Confirm app exists in PDI:
# System Applications → My Company Applications
```

### During the build
- Execute terminal commands Jordan specifies
- Perform any PDI UI operations Jordan cannot do via CLI
- Triage blockers if Jordan flags them — decide immediately, do not let it sit
- Track time — alert Jordan at hours 2, 4, 5:30

### End of build
- Run Casey's happy path test alongside Casey
- Record HeyGen sections 1 and 3 (pre-recorded) — confirm Section 2 after screenshots are ready
- Submit via the hackathon submission portal

---

## Escalation Protocol

If two personas conflict:
1. Kostya reads both positions
2. Makes the call
3. Documents the decision in the relevant Jira ticket with `[ESCALATION]` tag
4. Tells both personas — no revisiting

If Jordan hits a blocker:
1. Jordan documents it clearly (what the error is, what was tried)
2. Kostya decides: cut, defer, or simplify the feature
3. Alex confirms scope change
4. Jordan continues with the decision in hand
