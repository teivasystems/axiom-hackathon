# Team AXIOM — Infrastructure Setup Guide
## Version 3.0 | Pre-Hackathon Phase | now-sdk 4.6.0

---

## Stack

| Layer | Tool | Version | Status |
|---|---|---|---|
| AI Build Engine | Claude Code CLI | Latest | Pending install |
| Platform SDK | now-sdk | 4.6.0 | ✅ Installed |
| PDI Auth | OAuth 2.0 — axiom-pdi | — | ✅ Configured |
| Hackathon Auth | OAuth 2.0 — axiom-hackathon | — | Pending (add on day) |
| Source Control | GitHub — teivasystems/axiom-hackathon | — | ✅ Created |
| Task Management | Jira — AXIOM project | — | Pending |
| Documentation | Confluence — AXIOM space | — | Pending |
| Design | Figma — RetroNow UX Spec | — | Pending |
| Pitch | HeyGen | — | Pending |
| AI Runtime | Anthropic API (Claude) | — | Pending credential setup |
| Team Context | Claude.ai Project — AXIOM | — | Pending |

---

## 1. now-sdk — Confirmed Commands

All commands confirmed against now-sdk 4.6.0. No guesswork.

### 1.1 Auth Management

```bash
# Add a credential (triggers browser OAuth flow)
now-sdk auth \
  --add https://INSTANCE.service-now.com \
  --type oauth \
  --alias ALIAS-NAME

# List all credentials
now-sdk auth --list

# Set active default
now-sdk auth --use axiom-pdi

# Delete a credential (e.g. to re-authenticate)
now-sdk auth --delete axiom-hackathon
```

**Current credentials:**

| Alias | Instance | Type | Default |
|---|---|---|---|
| axiom-pdi | dev390976.service-now.com | oauth | ✅ Yes |
| axiom-hackathon | TBD (hackathon day) | oauth | Pending |

Other credentials present (pre-existing, not used by AXIOM):
`admin` (basic), `teivasystems1` (basic), `stuutdev` (basic)

---

### 1.2 App Initialisation — Confirmed Flow

**Critical:** now-sdk creates the app locally first. The PDI app is registered when `now-sdk install` runs. Do not create in AES first.

```bash
# Step 1 — initialise locally
now-sdk init \
  --appName "APP NAME" \
  --packageName "package_name" \
  --scopeName "x_vendor_appname" \
  --auth axiom-pdi \
  --template typescript.basic

# Step 2 — install dependencies
npm install
now-sdk dependencies     # downloads @servicenow type definitions

# Step 3 — build and deploy (creates app on PDI)
npm run build
npm run deploy
```

**Template choice: `typescript.basic`**

Available templates in 4.6.0:
```
base
javascript.basic
javascript.react
typescript.basic          ← AXIOM uses this
typescript.react
typescript.vue
```

**Confirmed file structure after init:**
```
[project-root]/
├── .gitignore
├── .vscode/
│   └── extensions.json
├── now.config.json        ← scope, scopeId, name, tsconfigPath
├── package.json           ← build/deploy/transform/types npm scripts
└── src/
    ├── fluent/
    │   └── example.now.ts ← sample Fluent artifact
    ├── server/
    │   └── script.ts      ← sample server script
    ├── tsconfig.client.json
    ├── tsconfig.json
    ├── tsconfig.server.json
    └── tsconfig.server.json
```

**Confirmed now.config.json schema:**
```json
{
  "scope": "x_vendor_appname",
  "scopeId": "auto-generated-sys-id",
  "name": "App Name",
  "tsconfigPath": "./src/server/tsconfig.json"
}
```

Note: No credential config in `now.config.json`. Auth is handled entirely by `now-sdk auth --use`. Switching instances requires only `now-sdk auth --use axiom-hackathon` — no file edits.

---

### 1.3 Confirmed npm Scripts

```bash
npm run build      # → now-sdk build    (compile Fluent source)
npm run deploy     # → now-sdk install  (push to active instance)
npm run transform  # → now-sdk transform (sync instance → local)
npm run types      # → now-sdk dependencies (fetch type defs)
```

Jordan uses `npm run` wrappers, not bare `now-sdk` commands, during build.

---

### 1.4 Confirmed Build Loop

```bash
# Jordan's standard cycle
npm run build && npm run deploy

# After making AES/Flow Designer GUI changes
npm run transform

# Full reset (type defs + build + deploy)
npm run types && npm run build && npm run deploy
```

---

### 1.5 Sync from Instance — Confirmed Flags

```bash
# Pull instance XML → Fluent source
now-sdk transform \
  --auth axiom-pdi \
  --directory ./[project-dir] \
  --format

# From local XML file (exported update set)
now-sdk transform \
  --from ./path/to/export.xml \
  --directory ./[project-dir] \
  --format

# --format flag auto-formats output — always use it
```

---

### 1.6 Hackathon Night Auth Switch

```bash
# Add hackathon instance (as soon as URL is provided)
now-sdk auth \
  --add https://HACKATHON_INSTANCE.service-now.com \
  --type oauth \
  --alias axiom-hackathon

# Switch (one command — everything else stays identical)
now-sdk auth --use axiom-hackathon

# Verify
now-sdk auth --list
```

If token expires between setup and hackathon night:
```bash
now-sdk auth --delete axiom-hackathon
# Re-add with --add command above
```

---

### 1.7 Known Issue — application was null

**Error:** `ERROR: Exception occurred while installing application — Unable to install application as application was null`

**Cause:** `now-sdk install` called before the app exists on the PDI. This happens if `init` ran without a prior AES app, and the `scopeId` generated locally has no matching record on the instance.

**Fix:**
1. Create the app manually in AES on the PDI (match scope exactly)
2. Re-run `npm run deploy`

**Or:** Delete the local project, re-run `now-sdk init` — the init process may register the app during initialisation if the PDI is reachable. Test this with a fresh scope name.

---

### 1.8 ATF — No now-sdk Runner

`now-sdk 4.6.0` has no built-in ATF command. Casey's test cases are documentation and manual validation guides. ATF suites are run via PDI UI or ServiceNow REST API directly.

---

## 2. GitHub Repository

**URL:** https://github.com/teivasystems/axiom-hackathon  
**Visibility:** Private  
**Branch:** main

### 2.1 Setup Commands

```bash
# Clone
git clone https://github.com/teivasystems/axiom-hackathon.git
cd axiom-hackathon

# Create directory structure
mkdir -p docs/decisions
mkdir -p claude-code/personas
mkdir -p claude-code/prompts
mkdir -p pitch
mkdir -p src/fluent
mkdir -p src/server

# Placeholder files (git tracks empty directories)
touch claude-code/personas/jordan.md
touch claude-code/personas/sam.md
touch claude-code/personas/morgan.md
touch claude-code/personas/casey.md
touch claude-code/personas/riley.md
touch docs/architecture.md
touch docs/wireframes.md
touch docs/decisions/.gitkeep
touch pitch/script_draft.md
touch pitch/heygen_storyboard.md
touch src/fluent/.gitkeep
touch src/server/.gitkeep
```

### 2.2 .gitignore

```gitignore
# now-sdk
.sdk/
*.token
now.config.local.json

# Build output
dist/
build/
*.pkg

# Node
node_modules/

# OS
.DS_Store
Thumbs.db

# Environment
.env

# Temporary
*.tmp
.cache/
```

### 2.3 Target Repository Structure

```
axiom-hackathon/
├── CLAUDE.md                      ← Jordan's Claude Code workspace
├── README.md                      ← project overview + team story
├── .gitignore
├── [app-dir]/                     ← now-sdk project (name TBD after ideation)
│   ├── now.config.json
│   ├── package.json
│   └── src/
│       ├── fluent/
│       └── server/
├── docs/
│   ├── team_charter.md            ← AXM-01
│   ├── ideation_session.md        ← AXM-02 ✅ complete
│   ├── infrastructure_setup.md    ← this document
│   ├── architecture.md            ← AXM-03 (Sam — pending)
│   ├── wireframes.md              ← AXM-04 (Morgan — pending)
│   └── decisions/                 ← Architecture Decision Records
├── claude-code/
│   ├── CLAUDE.md                  ← Jordan's persona (also at root)
│   └── personas/
│       ├── jordan.md              ← build log + blockers
│       ├── sam.md                 ← architecture notes
│       ├── morgan.md              ← design notes
│       ├── casey.md               ← test notes
│       └── riley.md               ← pitch notes
└── pitch/
    ├── script_draft.md            ← AXM-06 (Riley — pending)
    └── heygen_storyboard.md
```

Note: `[app-dir]` name is determined by `--packageName` in `now-sdk init`. This happens after the team ideation session confirms the app.

### 2.4 Commit Convention

```
[JORDAN] feat: <what was built> (AXM-XX)
[JORDAN] fix: <what was fixed> (AXM-XX)
[SAM]    docs: architecture doc v1 (AXM-03)
[MORGAN] docs: wireframe spec v1 (AXM-04)
[CASEY]  docs: test cases draft (AXM-05)
[RILEY]  docs: pitch outline v1 (AXM-06)
[AXIOM]  chore: <infrastructure or repo changes>
```

---

## 3. CLAUDE.md — Jordan's Workspace

`CLAUDE.md` lives at the repo root. Claude Code reads it on startup. It defines Jordan's identity, tools, constraints, and references.

**Current status:** Written. App-specific scope and component details will be added by Jordan after Sam completes AXM-03.

**Location in repo:** `axiom-hackathon/CLAUDE.md`

Key sections:
- Identity (who Jordan is, how he thinks)
- Tools (confirmed now-sdk commands)
- Build loop (mandatory cycle)
- Constraints (scope, code quality, security)
- Reference files (Sam's and Morgan's docs)
- Handover protocol
- Hackathon day protocol
- Error reference table

---

## 4. Jira Setup

### 4.1 Create Project

```
Type:    Scrum
Name:    AXIOM
Key:     AXM
Access:  Private
```

### 4.2 Custom Fields

| Field | Type | Values |
|---|---|---|
| Persona | Single select | Alex, Sam, Morgan, Jordan, Casey, Riley, Kostya |
| Handover Note | Paragraph | free text |
| Artifact Link | URL | GitHub file or Confluence page |
| Phase | Single select | PREP, BUILD, PITCH, SUBMIT |

### 4.3 Components

`Product · Architecture · Design · Development · QA · Pitch`

### 4.4 Sprints

| Sprint | Purpose |
|---|---|
| AXIOM-PREP | All pre-hackathon work (now → May 5) |
| AXIOM-BUILD | Hackathon day (8 hours) |
| AXIOM-POST | Submission, Store listing, content |

### 4.5 Backlog

| Key | Summary | Persona | Phase | Status |
|---|---|---|---|---|
| AXM-01 | Team Charter | Alex | PREP | ✅ Done |
| AXM-02 | Ideation Session | Alex | PREP | ✅ Done |
| AXM-03 | Architecture Doc | Sam | PREP | In Progress |
| AXM-04 | UX Wireframe Spec | Morgan | PREP | Backlog |
| AXM-05 | Test Case Draft | Casey | PREP | Backlog |
| AXM-06 | Pitch Outline | Riley | PREP | Backlog |
| AXM-07 | PDI Pre-configuration | Jordan | PREP | Backlog |
| AXM-08 | GitHub repo + scaffold | Jordan | PREP | In Progress |
| AXM-09 | HeyGen account + avatar | Riley / Kostya | PREP | Backlog |
| AXM-10 | Claude API credential (SN store) | Sam / Kostya | PREP | Backlog |
| AXM-11 | now-sdk OAuth (axiom-pdi) | Jordan / Kostya | PREP | ✅ Done |
| AXM-12 | CLAUDE.md | Jordan | PREP | ✅ Done |
| AXM-13 | Figma file setup | Morgan | PREP | Backlog |
| AXM-14 | Confluence space + page tree | Kostya | PREP | Backlog |
| AXM-15 | Confirm now-sdk init + transform flags | Jordan / Kostya | PREP | ✅ Done |

---

## 5. Confluence Setup

### 5.1 Create Space

```
Name: AXIOM
Key:  AXIOM
```

### 5.2 Page Tree

```
AXIOM Home
├── 00 Team
│   └── Team Charter                     ← paste docs/team_charter.md
├── 01 Ideation
│   └── AXIOM-001 Session Record          ← paste docs/ideation_session.md
├── 02 Architecture
│   └── AXIOM-003 Architecture Doc        ← Sam produces, link when done
├── 03 Design
│   ├── AXIOM-004 Wireframe Spec          ← Morgan produces, link when done
│   └── Figma Link                        ← paste Figma share URL
├── 04 Development
│   ├── AXIOM-008 Build Sequence          ← Jordan produces
│   ├── Component Library                 ← Jordan populates during build
│   └── now-sdk Command Reference         ← paste section 1 of this doc
├── 05 QA
│   └── AXIOM-005 Test Cases              ← Casey produces
├── 06 Pitch
│   └── AXIOM-006 Pitch Outline           ← Riley produces
├── 07 Infrastructure
│   └── Setup Guide                       ← paste this document
└── 08 Hackathon Day
    ├── Build Log                         ← fill live on the night
    ├── Hour-by-Hour Plan
    └── Submission Checklist
```

### 5.3 Jira ↔ Confluence Linking

Every Confluence page: add Jira ticket macro at top.
Every Jira ticket: paste Confluence page URL into Artifact Link field.

---

## 6. Figma Setup

**File name:** `RetroNow — UX Spec (AXM-04)`

**Pages (create now, Morgan fills during AXM-04):**

```
00 Design System
01 Submit Retro Item (mobile form)
02 Session Dashboard (scrum master)
03 Claude Summary Reveal
04 Action Items View
05 Historical Comparison (last sprint)
06 Empty States
```

Share setting: "Anyone with link can view"
Paste link into Confluence 03 Design → Figma Link page.

---

## 7. HeyGen Setup

**Account:** heygen.com — Creator plan (required for Instant Avatar)

**Avatar decision:**

| Option | Method | Lead time | Credibility |
|---|---|---|---|
| A — Instant Avatar | 2 min video of Kostya speaking | ~24h processing | High — human face on the team |
| B — Stock presenter | Choose from HeyGen library | Immediate | Medium |

Recommendation: Option A. The "human interface" story is stronger with Kostya's face.

**Pre-record now (before hackathon):**
- Section 1: Problem + Team story (60 sec)
- Section 3: Vision + close (30 sec)

**Record night-of:**
- Section 2: App demo narration (90 sec) — requires final screenshots

---

## 8. Anthropic API Key

**Source:** console.anthropic.com

**Never in any file. Never in GitHub. Never in Jira or Confluence.**

### 8.1 ServiceNow Credential Store (PDI)

```
Navigate to: Connections & Credentials → Credentials → New
  Type:       API Key Credentials
  Name:       Claude API Key
  API Key:    [your key]
  Sys scope:  [app scope — set after now-sdk init]
```

Referenced by name in IntegrationHub REST action. Never hardcoded.

### 8.2 Shell Environment (Claude Code)

```bash
# Add to ~/.zshrc
export ANTHROPIC_API_KEY="your-key-here"
source ~/.zshrc
echo $ANTHROPIC_API_KEY    # verify
```

---

## 9. Claude.ai Project

**Name:** `AXIOM — CreatorCon Hackathon 2026`

### 9.1 Project Instructions

```
You are a member of Team AXIOM — an AI-native software development team
competing at the ServiceNow CreatorCon Hackathon 2026 (Knowledge, Las Vegas).

The team has six specialist personas:
  Alex    — Product Owner
  Sam     — Platform Architect
  Morgan  — UX/UI Designer
  Jordan  — Lead Developer
  Casey   — QA & Documentation
  Riley   — Pitch & Marketing

When starting a conversation, identify which persona you are operating as
based on context or explicit instruction. Remain in that persona for the
full conversation. Produce structured artifacts with handover notes.
Follow the operating protocol in the Team Charter.

Platform: ServiceNow Now Platform (Yokohama release)
SDK: now-sdk 4.6.0
Repository: https://github.com/teivasystems/axiom-hackathon

All artifacts are written as markdown files destined for the GitHub repo.
Reference the Team Charter for persona definitions and handover format.
```

### 9.2 Knowledge Documents (upload in order)

| File | Status |
|---|---|
| docs/team_charter.md | ✅ Ready |
| docs/ideation_session.md | ✅ Ready |
| docs/infrastructure_setup.md | ✅ Ready (this doc) |
| CLAUDE.md | ✅ Ready |
| docs/architecture.md | Pending Sam (AXM-03) |
| docs/wireframes.md | Pending Morgan (AXM-04) |

### 9.3 Conversation Per Phase

| Conversation | Persona | Trigger |
|---|---|---|
| Architecture | Sam | Infrastructure complete |
| Wireframes | Morgan | AXM-03 complete |
| Component pre-build | Jordan | AXM-03 complete |
| Test cases | Casey | AXM-04 complete |
| Pitch outline | Riley | AXM-05 complete |
| Hackathon build | Jordan | Night of — 8-hour session in Claude Code |

---

## 10. Setup Execution Order

```
Step  Est.    Task                                          Status
────────────────────────────────────────────────────────────────────
  1   Done    now-sdk 4.6.0 install                        ✅
  2   Done    OAuth axiom-pdi configured                   ✅
  3   Done    now-sdk init / transform flags confirmed      ✅
  4   Done    CLAUDE.md written                            ✅
  5   Done    Ideation session complete (RetroNow)          ✅
  6   Done    GitHub repo created                          ✅
  7   15min   GitHub repo structure + initial commit        ← Next
  8   20min   Jira project + fields + 15 tickets
  9   15min   Confluence space + page tree + paste 3 docs
 10    5min   Figma file + 6 pages
 11   10min   HeyGen account + avatar decision
 12    5min   Anthropic API key → shell env var
 13   10min   Claude.ai Project + upload 4 docs
 14   10min   now-sdk init (app scope TBD — post ideation)
────────────────────────────────────────────────────────────────────
Remaining: ~90 minutes
```

Note: Step 14 (now-sdk init for the real app) is blocked on app scope name,
which is determined during the full ideation session with Jira/Confluence
in place. Infrastructure comes first.

---

## 11. Verification Checklist

```
[✅] now-sdk 4.6.0 installed
[✅] now-sdk auth --list → axiom-pdi, oauth, default = Yes
[✅] now-sdk init flags confirmed
[✅] now-sdk transform flags confirmed
[✅] CLAUDE.md written and ready to commit
[✅] Ideation session complete — RetroNow selected
[✅] GitHub repo created (teivasystems/axiom-hackathon)
[ ] GitHub repo structure committed and pushed
[ ] Jira: AXIOM project, 15 tickets, 3 sprints
[ ] Confluence: AXIOM space, page tree, 3 docs pasted
[ ] Figma: file created, 6 pages, link in Confluence
[ ] HeyGen: account active, avatar decision made
[ ] ANTHROPIC_API_KEY set in ~/.zshrc and verified
[ ] Claude.ai Project: created, instructions set, 4 docs uploaded
[ ] now-sdk init: app scaffolded (after Jira/Confluence ready)
```

When all green: infrastructure is complete. Team starts AXM-03 (Sam).

---

## 12. Open Items

| # | Item | Owner | Blocks |
|---|---|---|---|
| 1 | `application was null` fix — confirm correct init → AES → deploy flow | Jordan / Kostya | AXM-08 |
| 2 | ATF runner approach (no now-sdk atf command) | Casey | AXM-05 |
| 3 | App scope name (set during now-sdk init) | Alex / Team | AXM-08, AXM-10 |
| 4 | Hackathon PDI URL (provided by SN on the day) | Kostya | axiom-hackathon auth |

---

*Infrastructure owned by Kostya.*
*CLI questions to Jordan. Architecture questions to Sam.*
*Team AXIOM. Built differently.*
