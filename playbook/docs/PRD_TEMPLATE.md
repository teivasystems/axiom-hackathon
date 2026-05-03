# AXIOM PRD Template
> **Owner:** Alex (Product Owner) — writes §1–3, §5–6  
> **Contributor:** Sam (Architect) — writes §4 (data model summary), §5 (integration list)  
> **Usage:** Copy to `runs/<run>/docs/prd.md` at kick-off. Fill in before Sam writes `architecture.md`. This document answers *why* and *who*. `architecture.md` answers *how*.  
> Do **not** edit this template directly — keep it as the canonical stub.

---

## 1. PURPOSE

> What the app does and why it exists. Two to four sentences maximum.  
> Answer: what problem does this solve, for whom, and why now?

| Field | Value |
|---|---|
| **App name** | _TBD_ |
| **One-liner** | _What it does, for whom, using what ServiceNow capability_ |
| **Hackathon theme** | _e.g. AI-native automation, Employee Experience, Agentic Workflow_ |
| **Demo target** | _The single flow a judge must see working_ |
| **Success criterion** | _How do we know the demo landed?_ |

**Problem statement:**  
_Replace this with 2–4 sentences: what pain exists today, what causes it, and what the app removes._

---

## 2. USERS AND ROLES

> Who uses the app. Map each role to a ServiceNow user group and the UX channel they get.  
> Reference D-002 for channel routing rules (SP = employee/end-user, Workspace = manager/fulfiller).

| Role | Who they are | Primary action | UX channel | SN group / ACL |
|---|---|---|---|---|
| _e.g. Employee_ | _Any staff member_ | _Submits a request_ | Service Portal | _sn_requester_ |
| _e.g. Manager_ | _People with direct reports_ | _Approves / reviews_ | Workspace | _sn_approver_ |
| _e.g. Admin_ | _App owner_ | _Configures, monitors_ | Studio / Workspace | _admin_ |

**Permission boundaries:**  
_List any explicit "role X cannot see Y" rules here. These become ACL requirements for Sam._

---

## 3. BUSINESS RULES

> What the app enforces — validations, state machines, auto-assignments, SLAs.  
> Write as plain conditions, not code. Jordan translates these into Business Rules and Script Includes.

| ID | Trigger | Condition | Action | Priority |
|---|---|---|---|---|
| BR-001 | _Record created_ | _Field X is empty_ | _Block save, show error_ | P0 |
| BR-002 | _State → Approved_ | _Always_ | _Trigger notification to requester_ | P0 |
| BR-003 | _Record age > N days_ | _State = Open_ | _Escalate to manager_ | P1 |

**State machine** _(if applicable)_:  
```
Draft → Submitted → In Review → Approved / Rejected → Closed
```
_Replace with the actual states. Mark terminal states and who can trigger each transition._

---

## 4. DATA MODEL

> Summary level only — Sam owns the full spec in `architecture.md`.  
> List the tables the business cares about and the fields that matter to users or business rules.  
> Sam will add sys_names, field types, and relationships in architecture.md.

| Table (display name) | Purpose | Key fields | Related to |
|---|---|---|---|
| _e.g. Kudos Entry_ | _Stores each kudos record_ | _Giver, Receiver, Category, Message_ | _sys_user (giver, receiver)_ |
| _e.g. Digest_ | _Cached AI-generated digest_ | _Content, Generated On, Period_ | _Kudos Entry_ |

**Notes for Sam:**  
_Any constraints Alex knows about — e.g. "receiver must be an active employee", "category is a fixed choice list with values X/Y/Z"._

---

## 5. INTEGRATIONS

> External systems and APIs this app calls or is called by.  
> Enough detail for Sam to verify availability on the PDI and select the right spoke.

| System | Direction | Purpose | Auth method | PDI availability |
|---|---|---|---|---|
| _Claude API_ | _Outbound_ | _Generate AI content_ | _SN Credential Store (API key)_ | _Verify: sn_ws or IH REST spoke_ |
| _Email / Notify_ | _Outbound_ | _User notifications_ | _Platform (no external auth)_ | _OOB — always available_ |
| _Jira_ | _Inbound_ | _Webhook on ticket update_ | _TBD_ | _Check IH availability_ |

**Notification events** _(list messages users receive)_:

| Event | Recipient | Channel | Content summary |
|---|---|---|---|
| _Record submitted_ | _Requester_ | _Email_ | _Confirmation + ticket number_ |
| _State changed_ | _Requester_ | _Email / In-app_ | _New state + any action required_ |

---

## 6. SCOPE CUTS

> Decisions about what is explicitly **out of scope** for this run.  
> Do not delete items — park them here with a reason. This prevents mid-build scope creep.  
> Alex owns these decisions. Jordan flags conflicts; Alex approves any reversal.

| Item | Why excluded | Could be added in a future run? |
|---|---|---|
| _Mobile app UI_ | _Hackathon constraint — D-002 routes mobile out of scope_ | Yes |
| _Multi-language support_ | _Time constraint — no i18n tooling available on PDI_ | Yes |
| _Reporting / dashboards_ | _Not on the demo critical path_ | Yes |

---

## Handover note

| Field | Value |
|---|---|
| **Produced by** | Alex (Product Owner) |
| **Reviewed by** | Sam (confirms §4–5 are buildable), Jordan (confirms §3 is implementable) |
| **Next action** | Sam — use §4–5 to write `runs/<run>/docs/architecture.md` |
| **When to instantiate** | Before ideation closes — must exist before Sam begins architecture |
| **Commit target** | `runs/<run>/docs/prd.md` (this template stays at `playbook/docs/PRD_TEMPLATE.md`) |

---

## Kickoff prompt guide

Once the product idea is decided, paste the following into this Claude project to generate a first draft:

```
Team AXIOM — Alex (Product Owner) mode.
Product idea: [one-liner]
Platform surface: [e.g. Service Portal + Flow Designer + Now Assist]
AI integration: [e.g. Claude API via sn_ws, Now Assist NLU]
Demo constraint: [what must be live and demoable in ~8 hours]
Primary users: [who submits, who approves, who admins]

Generate a first-draft prd.md using the AXIOM PRD template structure.
Keep business rules to the P0 set only.
Flag any integration that may not be available on a Zurich / Australia PDI.
```

Review the draft, confirm scope cuts with the team, then commit before handing to Sam.
