# Process: Hackathon Day Runbook

## The 8-hour clock

Every minute counts. No improvisation on process. Follow this runbook exactly.

---

## Pre-clock (Before Hour 0)

Complete BEFORE the hackathon starts — ideally the day before.

```
[ ] now-sdk auth --use axiom-hackathon    (add hackathon instance credential)
[ ] now-sdk auth --list                   (confirm axiom-hackathon is active default)
[ ] npm run build                         (confirm clean build — zero errors)
[ ] npm run deploy                        (confirm scaffold deploys to hackathon instance)
[ ] Open PDI: System Applications → My Company Applications → confirm app exists
[ ] Confirm Anthropic API key in Credential Store on hackathon instance
[ ] CLAUDE.md updated with hackathon instance name (if needed)
[ ] Architecture doc path is correct in CLAUDE.md
[ ] Wireframe spec path is correct in CLAUDE.md
[ ] Claude.ai Project AXIOM has all current docs uploaded
[ ] HeyGen Sections 1 and 3 are recorded and approved
[ ] Casey's test cases are drafted and ready
```

If any pre-clock item is red: fix it before the clock starts. Do not enter the 8 hours with a broken environment.

---

## Hour-by-Hour Plan

| Hour | Activity | Owner | Check |
|---|---|---|---|
| 0:00–0:30 | Auth swap, PDI confirmation, scaffold deploy | Jordan / Kostya | App visible in PDI |
| 0:30–2:00 | Tables and Script Includes | Jordan | Build and deploy clean |
| 2:00–4:00 | Flows and integrations | Jordan | Claude API call succeeds |
| 4:00–5:30 | UI screens | Jordan | All screens render |
| 5:30–6:30 | End-to-end validation | Casey + Jordan | Happy path passes |
| 6:30–7:00 | Bug fixes and polish | Jordan | Casey re-runs failing tests |
| 7:00–7:30 | Pitch script update + HeyGen Section 2 | Riley + Kostya | Video assembled |
| 7:30–8:00 | Submission prep and upload | Casey + Kostya | Submission confirmed |

**Hard rules:**
- Do not start UI before tables exist
- Do not start flows before Script Includes are tested
- Do not hand off to Casey before full happy path is deployable
- Do not record demo narration before Casey validates the flow

---

## Build Sequence (Jordan's mandatory loop)

For every component:
```
1. Write or modify source file (src/fluent/ or src/server/)
2. npm run build        ← read output entirely — fix errors before proceeding
3. npm run deploy       ← read output entirely — fix errors before proceeding
4. Validate on PDI      ← check the record, flow, or script behaviour in browser
5. git commit           ← [JORDAN] feat: <description> (AXM-XX)
6. Update personas/jordan.md (in progress and completed sections)
```

Never commit broken code. Never skip step 4.

---

## Blocker Protocol

When Jordan hits a blocker:

1. Jordan stops. Does not work around it silently.
2. Jordan documents: what the error is, what was tried, what is blocked.
3. Jordan flags to Kostya immediately (not at hour 6).
4. Kostya decides: cut, defer, or simplify.
5. If scope changes: Alex confirms.
6. Jordan continues with the decision in hand. No revisiting.

**Time cost of a blocker:** 15–30 minutes if escalated immediately. 2–3 hours if worked around silently. Always escalate immediately.

---

## Scope Triage (if Jordan falls behind)

At each hour mark, Kostya checks Jordan's progress against the plan. If behind:

**Hour 2 behind:** Drop one Script Include feature — flag to Alex.
**Hour 4 behind:** Cut one UI screen — confirm with Morgan which one.
**Hour 5:30 behind:** Run Casey's happy path on the core flow only. Deferred features go to the known issues log.

Do not add features after hour 4. If you are ahead: polish, not features.

---

## Validation Checklist (Casey runs at hour 5:30)

```
[ ] Happy path: [primary user flow] — complete end-to-end
[ ] Claude API call: response received and rendered correctly
[ ] Action items / output created correctly
[ ] Second user role (if applicable): can access and act on their view
[ ] Empty state: what does the app show before any data exists?
[ ] Error state: what happens if Claude call fails?
[ ] Performance: page load under 3 seconds on the PDI
[ ] Mobile: portal form works on phone (if applicable)
```

Any failure: Jordan fixes. Casey re-validates. Not submitted until happy path passes.

---

## Submission Checklist (Casey + Kostya at hour 7:30)

```
[ ] Application deployed and running on hackathon instance
[ ] Submission form filled (app name, description, category, team members)
[ ] Demo video uploaded (or URL submitted)
[ ] Store listing description (Casey produces)
[ ] README / judge notes (Casey produces)
[ ] Jira tickets updated to Done
[ ] Git repo committed and pushed (all changes on main)
[ ] Known issues log honest and complete
[ ] Submission confirmed (screenshot the confirmation page)
```

---

## Commit Convention

```
[JORDAN] feat: <what was built> (AXM-XX)
[JORDAN] fix: <what was fixed> (AXM-XX)
[SAM]    docs: architecture doc v1 (AXM-03)
[MORGAN] docs: wireframe spec v1 (AXM-04)
[CASEY]  docs: test cases draft (AXM-05)
[RILEY]  docs: pitch outline v1 (AXM-06)
[AXIOM]  chore: <infrastructure or repo changes>
```
