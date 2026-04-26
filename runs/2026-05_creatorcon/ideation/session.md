# AXIOM-001 — App Ideation Session
## Ticket: AXM-02 | Phase: PREP | Status: Complete

**Date:** Pre-hackathon  
**Participants:** Alex, Sam, Morgan, Riley (full team ideation)  
**Objective:** Select a single app concept for the CreatorCon Hackathon 2026  
**Decision:** RetroNow — AI-powered sprint retrospective tool  
**Category target:** GenAI

---

## Constraints Given to Team

- Platform: ServiceNow Now Platform (Yokohama release)
- Build time: 8 hours, one evening, one human executing
- Categories available: AES, GenAI, 4good, HackZone
- Team model: AI-native (the process itself is part of the pitch)
- Judge criteria: Business value, platform depth, UX completeness, innovation
- Hard rule: No ideas requiring live external data in demo conditions

---

## STEP 1 — Alex Opens the Brief

**FROM:** Alex (Product Owner)
**TO:** Full team
**ARTIFACT:** Problem space brief + scoring criteria

---

Before anyone designs or architects anything — clarity on what we are optimising for.

We have 8 hours. One human who can click and type. We are not building a product company. We are building something that works completely, demonstrates real business value, and tells a story that judges remember.

**What wins at CreatorCon?**

Looking at the last three years of winners: the apps that place are not the most technically complex. They are the ones where a judge can immediately understand the problem, immediately see the solution working, and immediately imagine using it themselves. CreatorClash (2024) was a conference game. Townsville Parks & Rec (2023) was city government events. Clear problems, clean execution.

**Our unfair advantage**

Every other team is 3–5 humans who met this week. We have pre-built components, pre-validated architecture, a documented process that is itself the story, and a GenAI pitch delivered by an AI avatar. This means we can target a slightly more ambitious app — but only slightly. Do not get greedy.

**Scoring framework:**

| Criterion | Weight | What it means |
|---|---|---|
| Problem clarity | High | Can a judge explain the problem in one sentence after the pitch? |
| Demo-ability | High | Does the app show something satisfying in 90 seconds? |
| Platform depth | Medium | Does it use 3+ Now Platform capabilities in an integrated way? |
| Buildability in 8h | High | Can Jordan complete it end-to-end with one human executing? |
| AI integration | Medium | Does it use Claude as a functional component, not decoration? |
| Meta-story fit | Medium | Does the concept amplify the "AI team built this" narrative? |
| Category fit | Low | Does it land cleanly in one of the 4 categories? |

**What I want from each of you:** Sam and Morgan — 2 concepts each from your lens. Riley — 2 concepts from a pitch and story lens. Then I consolidate, we debate, I decide.

---

## STEP 2 — Sam's Proposals (Architecture Lens)

**FROM:** Sam (Platform Architect)
**TO:** Alex, full team
**ARTIFACT:** 2 concept proposals with technical feasibility assessment

---

Evaluating from what is completeable in 8 hours with one human executing on a PDI.

**Explicit assumption:** Now Assist GenAI may or may not be enabled on the hackathon PDI. All AI integration should route through Claude via IntegrationHub REST as the primary path — this is controllable regardless of PDI configuration.

---

### SAM-IDEA-01: Incident Debrief Accelerator

**Problem:** After a P1/P2 incident resolves, post-incident reviews (PIRs) take days. Engineers write them from memory, formats are inconsistent, action items get lost. Most are incomplete or delayed because nobody wants to write them.

**What it does:**
1. Incident moves to Resolved state — Flow Designer trigger fires
2. Flow pulls incident timeline, worknotes, and resolution notes
3. IntegrationHub REST action sends to Claude
4. Claude generates structured PIR draft: timeline, root cause, impact summary, action items
5. Draft appears in custom PIR table linked to the incident
6. Engineer reviews, edits, approves — one click
7. Action items auto-create as Problem tasks

**Platform capabilities:** INC table (OOB), Flow Designer, IntegrationHub REST, custom PIR table (AES), Problem Management, Now Experience workspace

**Technical risk:** Low. REST call to Claude is one IntegrationHub action. Data model is clean.

**Buildability:** High. Core flow running by hour 2. UI by hour 4. Polish by hour 6.

**Demo:** Resolve a staged incident → PIR draft appears with full timeline and root cause → reviewer approves → action items become tasks. Linear, satisfying.

**Category:** GenAI or AES

---

### SAM-IDEA-02: AI-Assisted Onboarding Passport

**Problem:** New employees spend their first two weeks navigating disconnected processes — requesting access, completing training, finding contacts — all tracked in email and spreadsheets. Nobody has visibility into where any new starter actually is.

**What it does:**
1. HR creates a New Joiner record (AES custom table)
2. Flow auto-generates personalised onboarding checklist by role/department/location
3. Claude generates a personalised welcome message and first-week guide
4. Employee sees a mobile Service Portal "passport" — tasks, progress, contacts
5. Manager sees a dashboard of their team's onboarding status

**Platform capabilities:** AES, Flow Designer, HRSD (if available on PDI), Service Portal, Now Mobile, Claude via IntegrationHub, Reporting

**Technical risk:** Medium. HRSD plugin dependency needs PDI confirmation. More moving parts than Idea 01.

**Buildability:** Medium. 8 components is ambitious for 8 hours. Dashboard and mobile would need to be cut.

**My recommendation:** SAM-IDEA-01 is the safer technical bet. Lower risk, clean demo, Claude used genuinely. SAM-IDEA-02 is more impressive on paper but has scope risk.

**Open question for Alex:** Do we know if the hackathon PDI will have HRSD enabled? If not, Idea 02 requires a workaround table that weakens the story.

---

## STEP 3 — Morgan's Proposals (UX/Demo Lens)

**FROM:** Morgan (UX/UI Designer)
**TO:** Alex, full team
**ARTIFACT:** 2 concept proposals with UX and demo-ability assessment

---

Read Sam's proposals. Good technical thinking. One pushback: SAM-IDEA-01 is engineer-facing. Judges at CreatorCon are ServiceNow ecosystem people — admins, architects, POs. They want to feel something when they see the demo. A PIR draft appearing is satisfying, but it is inside baseball for ITSM people.

---

### MORGAN-IDEA-01: Community Crisis Connector (4good)

**Problem:** In a local emergency — flood, power outage, missing person — information is fragmented across social media, local government sites, and WhatsApp groups. Vulnerable people do not know where to go. Volunteers do not know where they are needed.

**What it does:**
1. Any community member submits a need or offer via a zero-friction public Service Portal form — no login required
2. Needs: shelter, food, medical help, transport. Offers: spare room, car, skills, supplies.
3. Claude matches needs to offers by category, generates a structured response to the submitter
4. Coordinator workspace shows all active needs/offers and their match status
5. Flow closes matched items and notifies both parties
6. Coordinator can broadcast a platform notification to all active submitters

**Why judges feel something:** This is a real problem. Not enterprise IT. When the demo shows a flood victim submitting a need and a volunteer being matched in real time, that lands.

**UX strength:** The public form is the centrepiece. Zero friction. No login. Works on mobile. Two audiences, two views, one system.

**Concern:** Needs unauthenticated Service Portal access — Sam needs to confirm this is available on the hackathon PDI.

**Category:** 4good

---

### MORGAN-IDEA-02: The Retrospective Room

**Problem:** Agile teams run retrospectives every sprint. Most are facilitated badly — the same people talk, the same issues surface, action items are forgotten by next sprint. There is no continuity between retros. Teams cannot see whether things actually improve.

**What it does:**
1. Scrum master creates a Retro session linked to a team and sprint
2. Team members submit "went well / improve / action" items anonymously via mobile portal
3. Claude clusters similar items, surfaces top themes, generates a 3-bullet retro summary
4. Action items auto-create as tasks assigned to team members
5. Dashboard shows retro history and action item completion rate
6. Next retro: Claude shows "here is what you said you would fix last time — did you?"

**Why judges feel something:** Every developer in that room has sat through a bad retro. The "last time you said..." feature from Claude is the applause moment.

**UX strength:** Anonymous submission is the key interaction. The Claude reveal — themes surfacing from submitted items — is the demo centrepiece. Emotionally satisfying, technically clear.

**My preference:** MORGAN-IDEA-02 is technically simpler and lands harder with this specific audience. The "last sprint comparison" is the feature that gets a reaction.

**Design note for both:** The Claude-generated output should be visually distinct in the UI — not buried in a field. It should look like Claude wrote it. Reinforces the meta-story.

---

## STEP 4 — Riley's Proposals (Pitch/Story Lens)

**FROM:** Riley (Pitch & Marketing)
**TO:** Alex, full team
**ARTIFACT:** 2 concept proposals with narrative and pitch-ability assessment

---

Sam is thinking about what works. Morgan is thinking about what feels good. I am thinking about what judges are still talking about at dinner.

The meta-story — AI team built this — needs an app that either directly demonstrates the AI team's nature, or is so useful and clean that the meta-story is the only explanation for how it got built in 8 hours.

---

### RILEY-IDEA-01: HackTrack — The Hackathon Management Tool (HackZone)

**Problem:** At CreatorCon Hackathon, 40+ teams are building simultaneously. Organisers have no visibility into team progress, blockers, or morale. Teams have no structured way to document what they are building or flag that they need help.

**What it does:**
1. Each hackathon team registers — name, category, members
2. Teams log hourly progress updates: on track / blocked / pivoting
3. Organisers see a live dashboard — team health, category breakdown, blocker frequency
4. If a team marks "blocked," a flow triggers a Guru request and notifies a helper
5. Claude reads all team updates at hour 4, generates a halfway report — themes, blockers, predicted finishers
6. Judges get a pre-submission summary of every team's stated intent before reviewing

**Why this is the meta-story:** We are building the hackathon management tool during the hackathon, as the hackathon's AI-team entry. We demo the app at the awards session using data from the night itself. The app tracked our own team.

**Pitch line:** "We did not just compete in the hackathon. We shipped the infrastructure to run it."

**Risk:** Requires organiser buy-in or willingness to use staged data. If organisers are open to it — this wins. If not, the magic is weakened.

**Category:** HackZone

---

### RILEY-IDEA-02: The Quiet Colleague (4good / GenAI)

**Problem:** Neurodivergent employees — people with ADHD, autism, anxiety disorders — often struggle with the communication overhead of enterprise work: writing a formal email when anxious, decoding ambiguous messages, preparing for difficult conversations. HR tools do not help here. Managers do not know how. The employee is alone with it.

**What it does:**
1. Employee opens a private, zero-judgment portal
2. They paste in a message they received and ask "what does this actually mean?"
3. Claude explains tone, intent, what the sender likely wants, and what a reasonable response looks like
4. Employee drafts a response, Claude reviews it for tone and clarity before sending
5. Employee can log stressful interactions for personal tracking — visible only to them
6. Manager view (with employee consent): anonymous aggregate patterns, not surveillance

**Why judges feel something:** Neurodivergent employees are in that room. This is an app that someone in the audience needs today.

**Pitch line:** "Every enterprise has a quiet colleague who is brilliant at their job and exhausted by the communication around it. We built them a tool."

**Risk:** The pitch can tip into feeling patronising if not written carefully. Must be framed as an enterprise employee experience tool, not therapy software.

**Category:** 4good

---

### Riley's Scorecard

| Idea | Pitch power | Demo power | Risk |
|---|---|---|---|
| SAM-01: Incident Debrief | Medium | Good | Low |
| SAM-02: Onboarding Passport | Medium | Good | Medium |
| MORGAN-01: Crisis Connector | High | High | Medium |
| MORGAN-02: Retro Room | High (for this audience) | High | Low |
| RILEY-01: HackTrack | Very High (if it lands) | Very High | Medium-High |
| RILEY-02: Quiet Colleague | Very High (if pitch is right) | Medium | Medium |

---

## STEP 5 — Alex Decides

**FROM:** Alex (Product Owner)
**TO:** Full team
**TICKET:** AXM-02
**STATUS:** Decision — complete
**ARTIFACT:** App concept decision + rationale

---

Good work from everyone. Here is my read.

**Eliminating:**

**SAM-02 (Onboarding Passport):** Too many moving parts. HRSD dependency is a PDI risk. Scope requires cuts that weaken the demo. Out.

**SAM-01 (Incident Debrief):** Technically solid, low risk, but the audience is ITSM engineers. Judges will appreciate it but not feel it. It is a good production app, not a winning hackathon app. Out — but the Claude via IntegrationHub REST pattern is the integration approach we use regardless of which app we pick.

**RILEY-01 (HackTrack):** Brilliant concept. The meta-story is perfect. The risk is real — if organisers do not participate, the demo is staged and the magic is gone. We cannot control that variable. Out. Noted for a future year pitch to organisers.

**Three remaining:**

**MORGAN-01 (Crisis Connector):** Strong 4good fit. Emotional. My concern: "community crisis" is abstract in a Las Vegas conference room full of enterprise IT people. They empathise but do not live this problem. Unauthenticated portal is also a PDI risk. Medium-in.

**RILEY-02 (Quiet Colleague):** Could win the whole room if Riley writes the pitch correctly. Highly personal, immediate relatability, Claude is the core capability not decoration. Risk: tips into wellness product framing rather than enterprise HR. Needs careful positioning.

**MORGAN-02 (Retro Room):** The safest high-impact choice. Every person in that room has sat through a bad retro. The "here is what you promised last sprint" feature is the applause moment. Technically clean. Buildable in 8 hours without scope risk. Sam's data model will be simple. Morgan can make it beautiful. Jordan can ship it.

And — the meta-story connection: an AI team that runs on structured handovers and documented retrospectives built a retrospective tool. Riley, that is your opening line.

---

**Decision: MORGAN-02 — The Retrospective Room**

**Working title: RetroNow**

**Rationale:**
1. Every judge has the problem personally — no explanation needed
2. Technically completeable in 8 hours with low risk
3. Claude is functional, not decorative: clustering, summarising, comparing sprints
4. Meta-story is genuine: an AI team built a retrospective tool
5. Morgan produces a UI that looks finished, not hackathon-grade
6. Category: GenAI (clear fit)

---

**Scope — locked for 8 hours:**

In scope:
- Anonymous retro item submission (mobile portal form)
- Session creation by scrum master
- Claude clustering and summary generation
- Action item auto-creation from Claude output
- "Last sprint" comparison view
- Scrum master session dashboard

Out of scope (deferred):
- Team configuration and full user management
- Trend analytics dashboard (simple list view only)
- Email/external notifications
- Integration with Jira or external sprint tools

---

**Handover instructions:**

- **Sam** → AXM-03: Architecture doc. Confirm table schema, Flow Designer triggers, Claude integration pattern, build sequence. Flag any PDI capability gaps.
- **Morgan** → AXM-04: Wireframe spec. One page per screen. Include empty states. Starts after Sam confirms data model.
- **Jordan** → AXM-07/08: PDI pre-configuration and scaffold. Review Sam's doc when available.
- **Casey** → AXM-05: Draft test cases against the scope definition above.
- **Riley** → AXM-06: Pitch outline. Opening line is the meta-story connection. Value prop from this decision.

**Draft elevator pitch:**
*"Every sprint ends. Most retros don't. RetroNow closes the loop — anonymously, automatically, honestly."*

Alex.

---

## Session Summary

| Field | Value |
|---|---|
| Decision | RetroNow — AI-powered sprint retrospective tool |
| Category target | GenAI |
| Concepts reviewed | 6 (2 from Sam, 2 from Morgan, 2 from Riley) |
| Decision owner | Alex |
| Dissenting opinions | None filed. Riley flagged RILEY-02 as higher-ceiling, conceded risk. |
| Status | Complete — architecture phase begins |

**Tickets opened from this session:**

| Ticket | Summary | Owner | Status |
|---|---|---|---|
| AXM-03 | Architecture Doc | Sam | In Progress |
| AXM-04 | UX Wireframe Spec | Morgan | Backlog |
| AXM-05 | Test Case Draft | Casey | Backlog |
| AXM-06 | Pitch Outline | Riley | Backlog |
| AXM-07 | PDI Pre-configuration | Jordan | Backlog |
| AXM-08 | Component Scaffolding | Jordan | Backlog |

---

*Session closed. AXIOM-001 complete.*
*Next: Sam produces AXM-03. Morgan starts AXM-04 after AXM-03 is complete.*
