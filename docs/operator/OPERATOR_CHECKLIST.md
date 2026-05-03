AXIOM — Operator Cheat Sheet
You are the human conductor. The AI crew executes. Your job is to unblock, commit, and keep the clock honest.

════════════════════════════════════════════════════════════
BEFORE THE CLOCK STARTS
════════════════════════════════════════════════════════════

Environment
  [ ] PDI logged in and responsive
  [ ] now-sdk auth --use axiom-hackathon  →  now-sdk auth --list to confirm
  [ ] Repo cloned, main branch clean (git pull)
  [ ] Run folder scaffolded:  bash playbook/setup/run-init.sh YYYY-MM_eventname
  [ ] Claude.ai Project AXIOM open in browser — persona bundles ready to paste
  [ ] Claude Code open in terminal (Jordan's workspace, runs/<run>/app/)

Documents ready (must be committed before clock)
  [ ] runs/<run>/ideation/session.md  (Alex, AXM-02)
  [ ] runs/<run>/docs/prd.md          (Alex, AXM-01)
  [ ] runs/<run>/docs/architecture.md (Sam,  AXM-03)  — Jordan cannot build without this
  [ ] runs/<run>/docs/wireframes.md   (Morgan, AXM-04) — Jordan cannot start UI without this

PDI pre-check (before clock)
  [ ] Scope prefix confirmed: query glide.appcreator.company.code on PDI
        Format: x_<prefix>_<appname>  total ≤ 18 chars
  [ ] Plugin check: Flow Designer / IntegrationHub / Service Portal confirmed active
  [ ] Credential alias "claude_api" present in SN Credential Store
  [ ] Scaffold clean:  cd runs/<run>/app  &&  npm run build && npm run deploy

Timer
  [ ] Write start time to ACTIVITY.log:
        [INIT]  YYYY-MM-DDTHH:MM:SSZ | Kostya | Hackathon clock started


════════════════════════════════════════════════════════════
THE LOOP — RUN THIS FOR EVERY PERSONA HANDOVER
════════════════════════════════════════════════════════════

1. Open a fresh Claude.ai conversation. Never reuse one across personas.

2. Load context in this order:
     a. Persona bundle:  playbook/personas/bundles/<name>.bundle.md
     b. runs/<run>/ideation/session.md
     c. runs/<run>/docs/prd.md
     d. runs/<run>/docs/architecture.md  (Sam / Morgan / Jordan / Casey)
     e. The prior handover note from runs/<run>/logs/HANDOVERS.md

3. Paste the kickoff prompt from OPERATOR_PROMPT_COPYPASTE.md

4. Before closing the conversation, get two things:
     a. The artifact  →  commit it to runs/<run>/
     b. A handover note  →  append it to runs/<run>/logs/HANDOVERS.md

5. Write to ACTIVITY.log:
        [DONE]      HH:MM | <Persona> | AXM-XX complete | <artifact path>
        [HANDOVER]  HH:MM | <Persona> | → <Next> (AXM-XX) | HANDOVERS.md#H-NNN

6. Start the next persona.


════════════════════════════════════════════════════════════
PERSONA SEQUENCE AND TIME BUDGET
════════════════════════════════════════════════════════════

Ticket   Persona   Output                               Budget    Tool
-------  --------  -----------------------------------  --------  -----------
AXM-01   Alex      docs/prd.md                          20 min    Claude.ai
AXM-02   Alex      ideation/session.md (scope lock)     30 min    Claude.ai
AXM-03   Sam       docs/architecture.md (Secs 1-12)     45 min    Claude.ai   ← PARALLEL
AXM-04   Morgan    docs/wireframes.md                   30 min    Claude.ai   ← PARALLEL
AXM-05   Casey     personas/casey.md (test cases)       20 min    Claude.ai
AXM-08   Jordan    Full build — manifest row by row       ~6 h    Claude Code
AXM-05   Casey     Validation dry-run                   45 min    Claude.ai
AXM-06   Riley     Pitch script + narration             30 min    Claude.ai

Sam and Morgan run PARALLEL — start them within 5 minutes of each other.
Jordan (AXM-08) cannot start until architecture.md Section 12 (Build Manifest) has zero blank cells.


════════════════════════════════════════════════════════════
AT EACH HANDOVER — GATE CHECK
════════════════════════════════════════════════════════════

  [ ] Persona stayed in role — no invented scope?
  [ ] Artifact committed to runs/<run>/ ?
  [ ] Handover note appended to HANDOVERS.md?
  [ ] Open questions resolved OR escalated to Alex?
  [ ] ACTIVITY.log has [DONE] + [HANDOVER] lines?


════════════════════════════════════════════════════════════
MONITORING JORDAN (CLAUDE CODE — BUILD PHASE)
════════════════════════════════════════════════════════════

Jordan runs in Claude Code, not Claude.ai. You execute terminal commands Jordan requests.
You do not write code. Jordan does.

Watch for in ACTIVITY.log:
  [BLOCKER]           →  Jordan is stuck. Needs your decision NOW (15-min SLA)
  [MILESTONE] BEHIND  →  flag to Alex for scope cut within 15 min

Hour targets:
  H+1:30   Tables deployed ✅
  H+3:00   Script Includes + Claude integration tested ✅
  H+4:30   Flows deployed ✅
  H+5:30   UI complete — hand to Casey ✅

If no [MILESTONE] by H+1:45, ask Jordan for status.
If Jordan is behind at H+4:00, call Alex for a scope cut. Don't let polish block the happy path.


════════════════════════════════════════════════════════════
BLOCKER PROTOCOL
════════════════════════════════════════════════════════════

1. Jordan writes [BLOCKER] in ACTIVITY.log and Jira.
2. You read it within 15 minutes. Do not let it sit.
3. Decide:
     Technical (platform missing / deploy error)  →  Sam diagnoses, you execute in PDI
     Scope conflict                                →  Alex decides (cut / defer / simplify)
     Missing credential                            →  you add it in SN Credential Store
4. Write to ACTIVITY.log:
        [UNBLOCKED]  HH:MM | Kostya | D-NNN — <decision one line>
5. Jordan continues.


════════════════════════════════════════════════════════════
EMERGENCY SCOPE CUTS (cut from the bottom up)
════════════════════════════════════════════════════════════

  1. All P2 stories — gone immediately
  2. UI polish — raw OOB is acceptable if the flow works
  3. Secondary user roles — demo with one role only
  4. Cut to 1 complete end-to-end flow — demo that, narrate the rest
  5. Pre-record the happy path — run live first, switch to recording if it breaks

Protect in all scenarios:
  → The Claude integration moment (something AI does that's visible to judges)
  → The happy path completing start to finish


════════════════════════════════════════════════════════════
KILL CONDITIONS (Casey calls these at dry-run)
════════════════════════════════════════════════════════════

  Demo crashes reliably           →  switch to pre-recorded fallback
  Happy path not completable      →  cut scope, fix, re-validate
  Claude API not responding       →  show cached response, narrate it honestly
  Platform plugin missing         →  label as "architecture stub", do not fake behaviour


════════════════════════════════════════════════════════════
LOG ENTRIES YOU WRITE (runs/<run>/logs/ACTIVITY.log)
════════════════════════════════════════════════════════════

[INIT]       YYYY-MM-DDTHH:MM:SSZ | Kostya | Hackathon clock started
[DECISION]   YYYY-MM-DDTHH:MM:SSZ | Kostya | D-NNN <one-line decision>
[UNBLOCKED]  YYYY-MM-DDTHH:MM:SSZ | Kostya | D-NNN — <persona> continuing
[CHECKPOINT] YYYY-MM-DDTHH:MM:SSZ | Kostya | Hour N: <status> | Next: <what>


════════════════════════════════════════════════════════════
COMMIT PATTERN (after every persona gate)
════════════════════════════════════════════════════════════

  git add runs/<run>/
  git commit -m "[<PERSONA>] <artifact>: <one-line> (AXM-XX)"
  git push origin main


════════════════════════════════════════════════════════════
IF EVERYTHING IS ON FIRE
════════════════════════════════════════════════════════════

Stop. Ask Casey what to cut.
The demo must show one complete flow with Claude doing something visible to judges.
Everything else is negotiable.
