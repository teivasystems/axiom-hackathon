# Run: 2026-05_creatorcon — RetroNow

**Type:** Live hackathon — ServiceNow Knowledge 2026, CreatorCon  
**App:** RetroNow — AI-powered sprint retrospective tool  
**Platform:** ServiceNow Now Platform (Zurich / Australia)  
**PDI:** TBD (Kostya creates in AES — scope prefix confirmed before build night)  
**Category:** GenAI  
**Date:** May 2026 (hackathon night)  
**Status:** PREP phase — infrastructure and architecture in progress

---

## App: RetroNow

**Elevator pitch:** *"Every sprint ends. Most retros don't. RetroNow closes the loop — anonymously, automatically, honestly."*

**What it does:**
1. Scrum master creates a Retro session linked to a team and sprint
2. Team members submit "went well / improve / action" items anonymously via mobile portal (Service Portal — D-002)
3. Claude clusters similar items, surfaces top themes, generates a 3-bullet retro summary
4. Action items auto-create as tasks assigned to team members
5. "Last sprint" comparison: Claude shows what the team said they would fix and whether they did

**Scrum master view:** UI Builder Workspace (D-002 — fulfiller channel)  
**Team member view:** Service Portal widget (D-002 — end-user channel)

---

## Scope (locked at ideation)

**In scope:**
- Anonymous retro item submission (mobile-friendly SP form)
- Session creation by scrum master
- Claude clustering and summary generation
- Action item auto-creation from Claude output
- "Last sprint" comparison view
- Scrum master session dashboard (Workspace)

**Out of scope:**
- Team configuration and full user management
- Trend analytics dashboard (simple list only)
- Email / external notifications
- Integration with Jira or external sprint tools

---

## Artifact Index

| Artifact | File | Status |
|---|---|---|
| Ideation session | [ideation/session.md](ideation/session.md) | ✅ Complete |
| Architecture doc | [docs/architecture.md](docs/architecture.md) | Pending — Sam (AXM-03) |
| Wireframe spec | [docs/wireframes.md](docs/wireframes.md) | Pending — Morgan (AXM-04) |
| Test cases | [personas/casey.md](personas/casey.md) | Pending — Casey (AXM-05) |
| Pitch outline | [pitch/script_draft.md](pitch/script_draft.md) | Pending — Riley (AXM-06) |
| HeyGen storyboard | [pitch/heygen_storyboard.md](pitch/heygen_storyboard.md) | Pending |
| Retrospective | `logs/RETRO-*.md` | Post-run — Casey |

---

## Ticket Status

| Key | Summary | Owner | Status |
|---|---|---|---|
| AXM-01 | Team Charter | Alex | ✅ Done |
| AXM-02 | Ideation Session | Alex | ✅ Done |
| AXM-03 | Architecture Doc | Sam | In Progress |
| AXM-04 | UX Wireframe Spec | Morgan | Backlog |
| AXM-05 | Test Case Draft | Casey | Backlog |
| AXM-06 | Pitch Outline | Riley | Backlog |
| AXM-07 | PDI Pre-configuration (plugin checks) | Jordan | Backlog |
| AXM-08 | GitHub repo + scaffold | Jordan | In Progress |
| AXM-09 | HeyGen account + avatar | Riley / Kostya | Backlog |
| AXM-10 | Claude API credential (SN store) | Sam / Kostya | Backlog |
| AXM-11 | now-sdk OAuth (axiom-pdi) | Jordan / Kostya | ✅ Done |
| AXM-12 | CLAUDE.md | Jordan | ✅ Done |
| AXM-13 | Figma file setup | Morgan | Backlog |
| AXM-14 | Confluence space + page tree | Kostya | Backlog |
| AXM-15 | Confirm now-sdk init + transform flags | Jordan / Kostya | ✅ Done |

---

## PREP Checklist — Before Build Night

- [ ] Kostya creates app in AES, confirms scope prefix
- [ ] Jordan runs `npm run types` after table deploy to refresh type defs
- [ ] Plugin availability checks (Jordan — Scripts-Background on PDI):
  - [ ] IntegrationHub REST spoke: `sys_hub_action_type_definition` → `action_namespace = sn_ih, name CONTAINS REST`
  - [ ] ATF: `GlidePluginManager.isActive('com.snc.test_management')`
  - [ ] Service Portal: `GlidePluginManager.isActive('com.glide.service-portal')`
  - [ ] Now Assist: `GlidePluginManager.isActive('com.glide.now_assist')`
  - [ ] UI Builder: `GlidePluginManager.isActive('com.glide.ui-builder')`
- [ ] Claude API credential alias created in PDI Credential Store (Kostya)
- [ ] Sam confirms architecture.md Section 1 names the UX channels (D-002)
- [ ] `now-sdk auth --use axiom-hackathon` confirmed working

---

## Key Decisions

| ID | Summary | Ref |
|---|---|---|
| D-002 | UX channel routing: team member SP portal, scrum master Workspace | `runs/2026-04_dryrun/logs/DECISIONS.md` + `playbook/skills/ui.md` |
| D-003+ | Pending — Sam to log architecture decisions in `logs/DECISIONS.md` as they arise |
