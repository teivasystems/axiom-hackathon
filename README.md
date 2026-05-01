# Team AXIOM — CreatorCon Hackathon 2026

An AI-native software development team competing at ServiceNow Knowledge 2026.  
Platform: ServiceNow Now Platform (Zurich / Australia) · SDK: now-sdk 4.6.0

---

## The Team

Six AI specialists. One human interface. Fully documented process.

| Persona | Role |
|---|---|
| **Alex** | Product Owner — scope, decisions, Jira |
| **Sam** | Platform Architect — data model, integration spec, build manifest |
| **Morgan** | UX / UI Designer — wireframes, portal and workspace spec |
| **Jordan** | Lead Developer — Claude Code, now-sdk build and deploy |
| **Casey** | QA & Documentation — test cases, validation, retrospective, submission |
| **Riley** | Pitch & Marketing — HeyGen script, demo storyboard |
| **Kostya** | Human Interface & Executive Sponsor — terminal, PDI, scope calls |

---

## Repository Structure

```
axiom-hackathon/
├── CLAUDE.md                    ← Jordan's Claude Code workspace (read on session start)
├── README.md                    ← this file
│
├── claude-code/                 ← Claude Code session config and hooks
│
├── docs/                        ← Team-level documents (cross-run)
│   ├── TEAM_CHARTER.md          ← persona definitions, operating protocol, handover format
│   └── BACKLOG_TEMPLATE.md      ← backlog generation prompt template for Alex
│
├── playbook/                    ← Reusable knowledge — independent of any specific run
│   ├── WORKFLOW.md              ← full end-to-end process reference (load when card doesn't cover it)
│   ├── cards/                   ← per-persona operation cards (runtime reference — load these, not WORKFLOW.md)
│   │   ├── alex.md
│   │   ├── sam.md
│   │   ├── morgan.md
│   │   ├── jordan.md
│   │   ├── casey.md
│   │   └── riley.md
│   ├── personas/                ← persona profiles + Claude.ai system prompt templates
│   ├── skills/                  ← build reference by domain (load as needed)
│   │   ├── platform.md          ← GlideRecord, Script Includes, scoped app patterns
│   │   ├── flows.md             ← Fluent SDK flow DSL + Flow Designer patterns
│   │   ├── integration.md       ← IntegrationHub, Claude API, sn_ws fallback
│   │   ├── ui.md                ← UX channel routing, SP widgets, UI Builder, Now Assist
│   │   └── jira.md              ← Jira ticket lifecycle, comment format, closure protocol
│   ├── process/                 ← phase-by-phase guides
│   │   ├── ideation.md
│   │   ├── architecture.md
│   │   ├── hackathon_day.md
│   │   ├── pitch.md
│   │   └── retrospective.md     ← Casey's post-run retrospective process
│   ├── log-templates/           ← copy these into runs/<run>/logs/ at run init
│   │   ├── ACTIVITY.log
│   │   ├── DECISIONS.md
│   │   ├── HANDOVERS.md
│   │   └── RETRO.md             ← retrospective template
│   └── setup/                   ← infrastructure, Claude Code, Claude.ai configuration
│
└── runs/                        ← one subfolder per hackathon or dry run
    ├── README.md                ← runs index
    ├── 2026-04_dryrun/          ← dry run — Team Kudos app — dev390976.service-now.com
    │   ├── app/                 ← now-sdk app (package.json, now.config.json, src/)
    │   ├── docs/                ← architecture.md, wireframes.md
    │   ├── ideation/
    │   ├── logs/                ← ACTIVITY.log, DECISIONS.md, HANDOVERS.md, RETRO-*.md
    │   └── personas/            ← per-persona build logs for this run
    └── 2026-05_creatorcon/      ← CreatorCon Hackathon — RetroNow app
        ├── app/                 ← separate now-sdk app (different PDI, different scope prefix)
        ├── docs/
        ├── ideation/
        ├── logs/
        └── personas/
```

**Key structural rule:** Each run has its own `app/` subfolder because each PDI assigns a different system-scoped prefix. There is no shared SDK app at the repo root.

---

## How to Run This

**First time — read these in order:**
1. `docs/TEAM_CHARTER.md` — team model, persona responsibilities, operating protocol
2. `playbook/README.md` — setup sequence for tools, infrastructure, and Claude.ai
3. `playbook/setup/infrastructure.md` — now-sdk, GitHub, Jira, Jira API token, credentials

**Starting a new hackathon or dry run:**
1. Create `runs/YYYY-MM_eventname/` with the structure in `runs/README.md`
2. Init the now-sdk app inside `runs/YYYY-MM_eventname/app/` (after AES creates the app and confirms the scope prefix — never guess the prefix)
3. Follow `playbook/process/ideation.md` → `architecture.md` → `hackathon_day.md`
4. Jordan reads `CLAUDE.md` on session start — it is the sole build-time reference

**During a session (Jordan):**
- Orient: `runs/<run>/personas/jordan.md` → then `grep "[CHECKPOINT]" logs/ACTIVITY.log | tail -1`
- Build loop: `pwd` → build → deploy → validate → commit → update personas/jordan.md
- Skill files: load `playbook/skills/*.md` as needed — do not guess platform behaviour

**Post-run:**
- Casey runs the retrospective: `playbook/process/retrospective.md`
- Template: `playbook/log-templates/RETRO.md` → file at `runs/<run>/logs/RETRO-YYYY-MM-DD.md`

---

## Runs

| Run | App | PDI | Platform | Result |
|---|---|---|---|---|
| [2026-04_dryrun](runs/2026-04_dryrun/) | Team Kudos — peer recognition + AI digest | dev390976 | Yokohama (dry run) | ✅ Complete |
| [2026-05_creatorcon](runs/2026-05_creatorcon/) | RetroNow — AI sprint retrospective tool | TBD | Zurich / Australia | TBD |

---

## Key Architectural Decisions

| ID | Decision | Where documented |
|---|---|---|
| D-001 | Scope prefix is PDI-assigned — get from AES, never guess | `runs/2026-04_dryrun/logs/DECISIONS.md` |
| D-002 | UX channel routing — employee/end-user → SP; manager/fulfiller → Workspace; Now Assist applies to both | `playbook/skills/ui.md` + `runs/2026-04_dryrun/logs/DECISIONS.md` |

---

*Team AXIOM. Built differently.*
