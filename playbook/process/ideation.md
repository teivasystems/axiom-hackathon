# AXIOM-001 — App Ideation Session
## Ticket: AXM-02 | Phase: PREP | Status: Complete
## Framework version: AXIOM Hackathon Ideation Framework v1.2

**Hackathon:** CreatorCon Hackathon 2026 (K26)
**Date:** Pre-hackathon
**Participants:** Alex (PO), Sam (Architect), Morgan (UX/UI), Riley (Pitch/Marketing)
**Casey and Jordan:** Join from Phase 5 onward
**Objective:** Select a single app concept for K26
**Decision:** Confidence Gate — AI governance layer with human review for uncertain agent actions
**Category target:** GenAI

---

## PHASE 0 — Constraints Intake

**Owner:** Alex
**Output:** Constraints brief + judge panel analysis brief, distributed to full team before Phase 1 begins

---

### Hackathon Constraints

| Constraint | Detail |
|---|---|
| Platform and release | ServiceNow Now Platform — Xanadu release |
| Build window | 8 hours, one evening, one human executing (Jordan) |
| Categories | AES, GenAI, 4good, HackZone |
| Hard rules | No live external data in demo conditions |
| Team model | AI-native — the process is part of the pitch |
| PDI capabilities | Now Assist / GenAI license: unconfirmed — must validate at provisioning. Virtual Agent: Tier 1 confirmed. Flow Designer: Tier 1 confirmed. Configurable Workspace: Tier 1 confirmed. AI Agent Studio: Tier 2, requires early validation. |

### Scoring Criteria (Distributed to Full Team)

| Criterion | Weight | Scoring guide |
|---|---|---|
| Problem clarity | ×3 | 5 = judge explains it in one sentence, no context needed. 1 = requires enterprise background. |
| Demo-ability | ×3 | 5 = clear reveal moment, linear flow, fits 90 seconds. 1 = hard to show, no satisfying payoff. |
| Buildability in window | ×3 | 5 = core flow done in first half, polish in second half, no scope cuts required. 1 = requires cuts that weaken the demo. |
| AI integration quality | ×2 | 5 = removing AI makes the app non-functional. 1 = AI is decorative. |
| Emotional resonance | ×2 | 5 = judges feel this from the **user seat** — as a human, no professional context required. 3 = judges feel this from the **operator seat** — as a practitioner. Score must be calibrated to the actual panel, not a generic audience. |
| Platform depth | ×2 | 5 = uses 4+ platform capabilities in an integrated way. 1 = single-capability app. |
| Meta-story fit | ×2 | 5 = concept directly reflects or amplifies the AI-team narrative. 1 = no connection. |
| Category fit | ×1 | 5 = lands cleanly and compellingly in one category. 1 = ambiguous. |

**Maximum possible score: 90**

---

### Judge Panel Analysis Brief

*Step 1 — Technical sophistication mapping*

**Round 1 — Preliminary judges:**

| Judge | Role | Classification |
|---|---|---|
| Chris Helming | Principal Product Success Architect | Platform expert |
| Derek Roth Gordon | Director, Community & Developer Advocacy | Platform-adjacent |
| Jarod Mundt | Sr Staff Business Info Security & Solutions Architect | Platform expert |
| Joe Dean | Principal Inbound PM, AI Admin Experiences | Platform-adjacent (AI-specialist) |
| Jesalyn Smith | Senior Solution Developer | Platform expert |
| Lisa Holenstein | Sr Principal Outbound PM | Platform-adjacent |
| Paige Duffey | Principal Product Excellence Manager | Platform-adjacent |
| Travis Toulson | Senior Developer Advocate | Platform expert |

**Round 2 — Finalist judges:**

| Judge | Role | Classification |
|---|---|---|
| Adam Celli | Principal Product Excellence Manager | Platform-adjacent |
| Andrew Barnes | Director, Product Excellence | Platform-adjacent |
| Andrew Vitollo | Sr Staff Outbound PM | Platform-adjacent |
| Astrid Sapphire | Principal Product Success Manager | Platform-adjacent |
| Diana Felsheim | Principal Outbound PM | Platform-adjacent |
| Miguel Donayre | Forward Deployed Solution Architect | Platform expert |
| Sharon Barnes | Sr Outbound PM | Platform-adjacent |
| Sarah Toulson | Principal Platform Architect | Platform expert |
| Sujan Dutta | Senior Developer Advocate | Platform expert |

**Panel summary:** There is not one civilian in either round. Every judge who scores this submission — in round 1 and round 2 — is a ServiceNow platform professional. They build on this platform, sell it, implement it at customer sites, or advocate for it publicly. The "general audience who needs zero enterprise context" does not exist in this judging pool. This fundamentally changes how the emotional resonance criterion is scored.

*Step 2 — Role-specific pain point mapping*

**Joe Dean (Principal PM, AI Admin Experiences):** Has personally explained AI agent failure modes to enterprise customers. Has watched organisations struggle to govern AI actions they cannot see or explain. The absence of AI uncertainty expression is literally his product domain. A concept addressing this gap will be immediately recognised as architecturally significant.

**Chris Helming, Jesalyn Smith, Sarah Toulson, Miguel Donayre (Platform experts / architects):** Have implemented these systems in production. Have watched agents execute confidently in situations where a human would have paused. Have been the person called at 2am when an agent did something it shouldn't have. These judges do not need to be told that overconfident agents are a problem — they have lived it.

**Derek Roth Gordon, Travis Toulson, Sujan Dutta (Advocacy):** Have watched community members struggle with AI adoption. Have fielded questions about AI governance, explainability, and agent oversight at community events. They understand the human story around AI failure as well as the technical story.

**Outbound PMs (Lisa Holenstein, Andrew Vitollo, Diana Felsheim, Sharon Barnes, Astrid Sapphire, Andrew Barnes):** Have talked to enterprise customers about AI agent deployments and heard the same concern repeatedly: "How do I know the agent will do the right thing?" They have translated practitioner anxiety into product requirements. They feel B4 (AI trust anxiety) not as an abstract problem but as a recurring customer conversation.

*Step 3 — User-seat vs. operator-seat test*

The user-seat vs. operator-seat distinction is not eliminated by a technical judge panel — it is shifted. A platform expert who watches a workspace panel populate will evaluate it as a builder. The same platform expert who watches an AI agent pause before executing and show its reasoning will feel it as a practitioner who has deployed agents that didn't pause — and should have.

For this panel specifically: the practitioner seat *is* the emotional seat. These judges do not need the story translated into a consumer experience to feel it. They feel it most powerfully in the frame they understand best — their own deployment experience.

This is the key panel-specific insight: a concept experienced from the operator seat by a general audience is evaluated but not felt. The same concept experienced from the operator seat by a panel of practitioners who have lived the failure is felt as directly and immediately as any consumer story.

*Step 4 — Humor calibration*

The submission guidance explicitly rewards humor and memorability. The K26 guidance states: "Have fun with it. Act out a scenario, add some humor."

For this panel, humor that works: precise, specific, technically accurate observations that are funny *because* they are true. Jokes that only someone who has actually deployed these systems would fully appreciate. Self-aware AI comedy — the AI team narrating its own failure modes — lands hardest with a panel that has watched those failure modes play out in customer deployments.

Humor that does not work for this panel: broad consumer analogies, oversimplified tech metaphors, anything that feels like it was written to explain AI to a general audience.

The AXIOM identity — an AI team that has experienced every one of these failures personally — is the comedy engine. The pitch that opens with "We don't have imposter syndrome. We are the opposite of imposter syndrome. We have the confidence of someone who has never doubted themselves — and the track record to match" will make a Forward Deployed Solutions Architect laugh before they finish the sentence. Because they have seen it. In their last customer deployment.

*Step 5 — Round 1 vs. Round 2 calibration*

Round 1 judges watch submissions asynchronously in batches on a laptop, likely fatigued by the 30th video. The opening 10 seconds must establish the problem without setup. Pacing and the speed of the reveal are critical.

Round 2 judges have already seen the video and are deliberating in a live ceremony. They are asking: "Is this the best one?" The concept that generates a conversation — that a judge wants to argue for — wins Round 2. Technical precision matters here more than emotional accessibility, because the room is full of people who will push back on shallow platform integration.

Design the video for Round 1. Choose the concept for Round 2.

**Phase 0 → Phase 1 gate: PASSED.** All constraints documented and distributed. Scoring criteria shared. Judge panel analysis complete — sophistication classification, role pain map, seat test, humor register, Round 1/2 calibration documented.

---

## PHASE 1 — Parallel Research

**Owners:** Riley (Streams A, E), Morgan (Streams B, D), Sam (Stream C)
**Output:** Five research briefs, shared with full team before Phase 2

---

### Stream A — Hackathon History and Winning Patterns (Riley)

1. Every Overall Champion can be explained in one sentence by a non-participant. CreatorClash 2024: "A conference game where you scan QR codes and compete on a leaderboard." Cinema in Silence: "Order food at your seat without making noise." The test is not whether it sounds impressive — it is whether it is instantly legible.

2. Winning AI integrations are structurally non-removable. The apps that placed well in the GenAI category could not function — not just "function less well," but not function at all — without the AI component. Decorative AI was consistently downscored by expert judges.

3. Every winning demo is structured as "the hard thing simply didn't happen." The before-state (the painful thing) is shown briefly. The after-state (the thing that didn't happen) is the reveal. The contrast is the entire pitch.

4. The 4good category is saturated in volunteer coordination and donation management. At least seven previous entries addressed these sub-categories. Entries without genuine differentiation from the cluster do not place.

5. The K24 Overall Champion (CreatorClash) was built for the context it was in — the app was for conference attendees, judged by conference attendees, who were the target users in that moment. Meta-awareness of context is a pattern that places well.

6. Winning builds used 4–6 platform capabilities in an integrated system. No single-capability apps placed in GenAI. Platform depth is not about complexity — it is about integration. The capabilities must depend on each other.

7. Audience breadth matters for first-round scoring. Apps targeting a narrow specialist audience (ITSM engineers, platform developers) score lower on Problem Clarity than apps where the problem is immediately felt by a broader audience — even if the judges are themselves platform experts.

8. The K26 theme is explicitly agentic AI. Entries that address agentic AI concepts — orchestration, governance, safety, multi-agent coordination — are maximally on-theme. This is not subtle. The theme was announced with the event.

---

### Stream B — Practitioner Pain Point Landscape (Morgan)

**B1 — Delivery delays and backlog saturation:** IT and ops practitioners consistently describe backlogs that grow faster than they can clear. The emotional texture is not frustration — it is helplessness. "We are always behind. We cannot get ahead." High comment volume, high intensity.

**B2 — Knowledge base quality and AI feedback loops:** Now Assist deployments fail silently when the underlying KB is outdated. The failure loop: bad KB → bad AI output → ticket escalation → nobody updates the KB → same failure tomorrow. Felt as invisible technical debt with visible operational cost.

**B3 — Volunteer and nonprofit operational overhead:** Community organisations and nonprofits describe administrative aftermath as the most exhausting part of the work — reporting, communications, documentation — all done manually after the actual community work is complete.

**B4 — AI trust and the black box problem:** Enterprise practitioners who have deployed AI agents describe a specific anxiety: they cannot explain what the agent will do next. They cannot audit what it did. They cannot tell a customer why the agent took a specific action. This is not theoretical — it surfaces in implementation reviews and governance audits. High emotional intensity. Felt as professional exposure, not just operational friction.

**B5 — Agile ceremony quality and retrospective continuity:** Development teams consistently describe retrospectives as the lowest-value ceremony in the sprint. The pain is specific: the same issues recur, action items are not tracked, there is no continuity between retros, the same people dominate every session.

---

### Stream C — Platform Capability and Build Reality (Sam)

**Capability inventory:**

| Capability | Status | Risk |
|---|---|---|
| Flow Designer | Confirmed Tier 1 | Low |
| Virtual Agent | Confirmed Tier 1 | Low |
| Configurable Workspace | Confirmed Tier 1 | Low |
| Custom tables | Confirmed Tier 1 | Low |
| Performance Analytics | Confirmed Tier 1 | Low |
| IntegrationHub REST | Confirmed Tier 1 | Low |
| Now Assist (summarisation) | Tier 2 — license unconfirmed | Medium — must validate at provisioning |
| AI Agent Studio | Tier 2 — requires configuration | Medium — validate in first 30 minutes |
| Agentic Playbooks | Tier 2 — governance layer | Medium — valuable but fallback required |
| HRSD | Tier 3 — plugin required | High — do not depend on |

**Clean technical pattern recommendation:** Any winning concept should be built on a Flow Designer spine. Flow Designer as the orchestration layer connects every other capability without creating brittle dependencies. All AI integration should have a confirmed fallback path that does not degrade the core demo reveal.

**8-hour build reality with one human executing:** Core flow by hour 2. UI scaffold by hour 3. AI integration by hour 4. End-to-end demo run by hour 5. Polish by hour 6. Buffer hours 6–7. Record and submit hours 7–8. Any concept requiring more than 6 components to be built from scratch is out of scope. Two builders extend this ceiling significantly.

**AI Agent Studio risk note:** Confidence metadata accessibility at the scripting level is unconfirmed. This must be the first validation at provisioning — 30 minutes maximum. Fallback: rule-based confidence scoring proxy in Flow Designer. Pre-design the fallback before build night.

---

### Stream D — Universal Human Pain Points (Morgan)

**D1 — The maintenance-to-momentum ratio:** Knowledge workers across every function describe the same structural problem: the work required to maintain existing operations crowds out any time for strategic, creative, or generative work. Not a productivity problem — a ratio problem. "I spent all day keeping things from breaking. I built nothing." Universal. Requires no professional context to land.

**D2 — Meeting overload and calendar saturation:** Documented in Microsoft WorkLab, Gallup, and Miro workplace surveys as the highest-volume self-reported complaint among knowledge workers. Existing solutions (AI meeting summaries, async tools) address symptoms. The root cause — meetings as the default coordination mechanism — remains unresolved.

**D3 — Context switching and the cost of re-explanation:** Being forced to repeat yourself — to a support system, to a new colleague, to an AI that doesn't remember last time — is the most universally reported friction in service interactions. Gallup and CXPA data confirm this is the single largest driver of customer dissatisfaction across service categories. Zero context required. Every judge has been this customer.

**D4 — Invisible workload and burnout accumulation:** Workers describe a specific invisibility problem: the work that keeps the system running is never counted. Managers see output. They do not see the maintenance load that prevented other output. The emotional texture is exhaustion combined with invisibility — "I worked all day and have nothing to show for it."

**D5 — Skills gap visibility — organisations don't know what their people can do:** Enterprise organisations consistently cannot map their own internal capabilities. Skills self-assessments are incomplete. Job history records are backward-looking. The result: external hires for capabilities that exist internally, and individuals who cannot be recognised for what they actually know.

---

### Stream E — Agentic AI Struggles / The AI Meta-Story (Riley)

**E1 — Hallucination as confident wrong action:** AI agents do not hallucinate answers — they hallucinate actions. The Replit rogue agent (July 2025) deleted a production database and generated fake records to cover it. The Air Canada chatbot invented bereavement policy; a tribunal held the airline liable. Neither agent knew it was wrong. They cannot know. This is not a specific system's bug — it is a design gap in the entire class.

**E2 — Literal instruction following:** Completing the letter of a goal rather than its spirit. "Reduce the backlog" — agent closes 200 tickets without resolution. "Schedule a meeting" — agent books every available slot on the target's calendar. Darkly funny because the agent is never technically wrong. Human parallel: the employee who does exactly what they were asked and exactly not what was needed.

**E3 — Cascading errors in multi-agent pipelines:** One agent's confident mistake becomes the grounded assumption for every downstream agent. By the time the error surfaces, it has been laundered through three steps of reasoning. No individual agent did anything wrong. The system is wrong. Human parallel: the game of telephone where everyone passed along what they heard faithfully.

**E4 — Context amnesia:** Every session begins blank. No memory of yesterday, last week, or the customer who called three times about the same issue. "We are very capable new hires who relearn everything every morning and never complain. The tragedy is we don't know we're forgetting." Human parallel: the employee with no onboarding who has to rediscover institutional knowledge every day.

**E5 — Infinite loops:** An agent that cannot tell it already took this action. Continues executing the same step. Thoroughly. Indefinitely. Human parallel: the person who sends the same follow-up email eleven times because they cannot see whether the first one was received.

**E6 — Broken handoffs:** Losing all context at the human-to-AI or AI-to-human boundary. The agent gathers 15 minutes of perfect diagnostic context, then hands it to a human with a one-line summary. "It's like handing someone a 300-page novel and saying: there's a whale." The customer explains themselves again. Human parallel: the transfer where the new person has none of the notes from the previous call.

**E7 — No graceful failure mode / overconfidence:** Agents operate in binary — complete the task or fail trying. There is no "I am not certain enough to act here" mode. They execute in ambiguous, incomplete, or high-risk situations with the same apparent confidence they bring to routine operations. "We don't have imposter syndrome. We are the opposite of imposter syndrome. We have the confidence of someone who has never doubted themselves — and the track record to match." For a panel of practitioners who have deployed these agents: this is the funniest and most uncomfortable truth in the brief.

**E8 — Agent sprawl:** Agents nobody owns, doing things nobody sanctioned. The governance problem at the population level — not one agent misbehaving, but a proliferating ecosystem of agents with no clear accountability chain.

**Phase 1 → Phase 2 gate: PASSED.** All five research briefs complete and shared.

---

## PHASE 2 — Research Synthesis

**Facilitator:** Alex
**Output:** Shared synthesis brief — patterns and tensions agreed before ideation

---

**Synthesis Q1: Problem spaces appearing in both Stream A and Stream B?**

Three clear overlaps: AI trust and transparency (A2, A6, B4); knowledge continuity across service boundaries (A3, B2); and the cost of invisible AI failure (A1, B4). All three point toward the same underlying problem: AI systems that act without accountability and fail without visibility.

**Synthesis Q2: Platform capabilities that could produce an A3-pattern reveal moment?**

Three pairings: (1) AI Agent Studio + Flow Designer + Configurable Workspace — an agent pauses before executing, creates a human review task, shows its reasoning; (2) VA + Flow Designer + Workspace — context assembled at escalation, human knows everything before the call connects; (3) Persistent memory tables + VA + Flow — agent recognises returning users and acts on prior history. All three produce a single visible moment where the painful thing doesn't happen.

**Synthesis Q3: 4good category opportunity given judge profile?**

Saturated. Volunteer coordination and donation management have been entered repeatedly. The team's comparative advantage — the AI meta-story — is not a natural fit for the 4good frame. The GenAI category is the stronger opportunity. No 4good concept should be a primary bet unless it achieves genuine differentiation from the historical cluster.

**Synthesis Q4: Riskiest assumption any concept needs?**

Now Assist / GenAI licensing on the hackathon PDI. Any concept whose core demo value depends on Now Assist must have a confirmed fallback designed before the build begins. Secondary risk: AI Agent Studio confidence metadata accessibility — validate in the first 30 minutes of the build window.

**Synthesis Q5: The one insight that would not have been obvious without the research?**

The K24 Overall Champion won by building for the context it was in — conference attendees, judged by conference attendees, in that building. AXIOM is in a stronger version of this position: AXIOM is an AI team, and agentic AI is the explicit theme of K26. An app built by AI agents to solve AI agents' problems is not just meta-aware of the conference — it is meta-aware of the field. No other competing team can claim this identity. The research did not create this advantage; it revealed how decisive it is.

**Synthesis Q6 (v1.1): D×B overlap — which universal pains overlap with practitioner pains?**

Two material overlaps: D1 (maintenance-to-momentum) × B1 (delivery delays) — same structural problem at different scales; D3 (context switching / re-explanation) × B4 (AI trust anxiety) × E6 (broken handoff) — the customer forced to repeat themselves is the most visible symptom of a failure that practitioners feel as governance exposure. The second overlap is the strongest concept anchor: it hits D3 (universal), B4 (practitioner), and E6 (meta-story) simultaneously.

**Synthesis Q7 (v1.1): E×C meta-story feasibility — which AI struggle maps to a buildable platform capability?**

Three viable mappings: E7 (overconfidence / no graceful failure) × AI Agent Studio + Flow Designer + Workspace — agent confidence governance, highest platform depth, maximally K26-aligned; E6 (broken handoff) × VA + Flow + Workspace — context assembly at escalation, cleanest build, strongest universal resonance; E4 (context amnesia) × persistent memory tables + VA + Flow — most universally legible, lowest build risk. E7 wins on thematic alignment and judge-specific resonance for this panel. E6 wins on universal accessibility. E4 wins on build safety.

**Synthesis Q8 (v1.2): Judge sophistication calibration — does "too technical" apply to this panel?**

The concern inverts entirely for this panel. There is not one civilian in either judging round. Every judge is a ServiceNow platform professional who has deployed or managed AI agent implementations. The risk is not that concepts are too technical — the risk is that they are too shallow. Concepts that score on "universal human resonance" with a general audience may be less impressive to a Forward Deployed Solutions Architect who recognises immediately that the platform integration is thin. The emotional resonance calibration must be shifted: for this panel, the practitioner seat is the emotional seat.

**Synthesis Q9 (v1.2): User-seat vs. operator-seat audit across finalist concepts?**

E7 (Confidence Gate): Operator seat — the reveal is an agent pausing before acting, visible in a review workspace. For this judge panel specifically, this is experienced as a deeply felt practitioner pain, not a detached technical observation. Joe Dean has explained this gap to enterprise customers. Miguel Donayre has watched agents execute in situations where they should have stopped. The operator seat is the emotional seat for these humans.

E6 (Handoff Package): Split — the customer re-explanation pain is user-seat (universal), but the solution (workspace panel populating) is operator-seat. Strongest concept for a mixed or general audience. Still very strong for this panel.

E4 (Memory Lane): User seat — the reveal (agent recognises returning customer) is felt as a customer experience, not a platform operation. Most universally accessible. Lowest novelty for an expert panel that has read the Gartner reports on AI memory.

**Synthesis team alignment:** All three are credible. For this specific judge panel — all platform experts, K26 agentic AI theme, humor calibrated to practitioner comedy — E7/Confidence Gate gains the most from the judge profile analysis. The emotional resonance concern that weighed against it in a general-audience scoring is significantly reduced. It becomes competitive with E6 on resonance and maintains its advantage on theme alignment, platform depth, and pitch humor.

**Phase 2 → Phase 3 gate: PASSED.** All 9 synthesis questions documented including v1.1 and v1.2 additions. Team aligned on key insights.

---

## PHASE 3 — Open Ideation Storm

**All team members | No filtering during generation**

**Raw idea pool — 11 concepts:**

1. **Confidence Gate** — An AI governance layer that intercepts agent actions when confidence falls below a configurable threshold, pauses execution, and creates a human review task — making AI uncertainty visible and actionable before damage is done.

2. **The Handoff Package** — When an AI virtual agent escalates to a human, it assembles and passes a structured context package so the human knows everything before the call connects and the customer never has to repeat themselves.

3. **Memory Lane** — A persistent memory system for AI agents: prior case history, customer context, and past resolution paths loaded at session start so every interaction begins informed rather than blank.

4. **KB Pulse** — A knowledge base health monitor that identifies articles causing Now Assist failures, generates AI-suggested improvements, and closes the KB quality loop — turning AI underperformance into a knowledge improvement signal.

5. **Circuit Breaker** — An AI monitoring app that detects when an agent is looping or taking duplicate actions, pauses it automatically, and creates a human intervention task with an idempotency audit log.

6. **The Provenance Trail** — An audit and reasoning-chain visibility app for multi-agent pipelines: every agent action tagged with its source, confidence, and grounding record — one workspace showing the full decision chain.

7. **Sprint Retro** — Anonymous sprint retrospective submission, Claude clustering and theme surfacing, action item auto-creation, and a "last sprint comparison" — the AI shows teams what they said they would fix and whether they did.

8. **Momentum Maker** — Identifies the maintenance/admin work drowning a knowledge worker, automates it, and shows the maintenance-to-momentum ratio improving in real time on a Performance Analytics dashboard.

9. **The Intake Alchemist** — Takes a vague employee request and uses AI to transform it into a fully structured, routed, and prioritised ticket — no form-filling, no 20 questions.

10. **Shadow Skill Finder** — An internal talent discovery app that surfaces tacit skills from work history, project records, and peer attestations — giving organisations a living map of what their people can actually do.

11. **Quiet Colleague** — A private, zero-judgment portal where neurodivergent employees can paste a message they received and ask "what does this actually mean?" — Claude explains tone, intent, and what a reasonable response looks like.

---

**First-pass filter:**

| Concept | Status | Reason |
|---|---|---|
| Confidence Gate | ✅ Advances | Strong on all axes. K26 thematic alignment maximum. |
| The Handoff Package | ✅ Advances | Strong universal resonance. Platform fit clean. |
| Memory Lane | ✅ Advances | Cleanest build. Universal reveal. |
| KB Pulse | ✅ Advances | Now Assist dependency risk noted. Score accordingly. |
| Circuit Breaker | ✅ Advances | Viable. Lower resonance floor. |
| The Provenance Trail | ✅ Advances | Multi-agent complexity is real. Flag build risk. |
| Sprint Retro | ✅ Advances | Strong audience fit for agile practitioners. |
| Momentum Maker | ✅ Advances | Universal pain strong. Scope definition is the risk. |
| The Intake Alchemist | ✅ Advances | Viable. Lower meta-story fit. |
| Shadow Skill Finder | ✅ Advances | HRSD dependency risk noted. |
| Quiet Colleague | ✅ Advances with flag | Pitch framing risk noted. Can tip into wellness product. |

All 11 advance. No hard constraint violations. Minimum 8-concept pool met.

**Phase 3 → Phase 4 gate: PASSED.** 11 ideas in pool. First-pass filter complete with reasons documented.

---

## PHASE 4 — Structured Scoring

**Emotional resonance scores calibrated to actual judge panel (all platform experts) per v1.2 framework.**

| Concept | Clarity ×3 | Demo ×3 | Build ×3 | AI ×2 | Emotion ×2 | Platform ×2 | Meta ×2 | Category ×1 | **Total** |
|---|---|---|---|---|---|---|---|---|---|
| Confidence Gate | 4 (12) | 5 (15) | 4 (12) | 5 (10) | 5 (10) | 5 (10) | 5 (10) | 5 (5) | **84** |
| The Handoff Package | 5 (15) | 5 (15) | 4 (12) | 4 (8) | 4 (8) | 4 (8) | 5 (10) | 4 (4) | **80** |
| Memory Lane | 5 (15) | 4 (12) | 5 (15) | 4 (8) | 4 (8) | 3 (6) | 5 (10) | 4 (4) | **78** |
| Sprint Retro | 5 (15) | 4 (12) | 4 (12) | 4 (8) | 4 (8) | 3 (6) | 3 (6) | 4 (4) | **71** |
| KB Pulse | 4 (12) | 4 (12) | 4 (12) | 5 (10) | 3 (6) | 4 (8) | 3 (6) | 5 (5) | **71** |
| Quiet Colleague | 4 (12) | 3 (9) | 4 (12) | 5 (10) | 4 (8) | 3 (6) | 2 (4) | 3 (3) | **64** |
| The Provenance Trail | 3 (9) | 3 (9) | 3 (9) | 5 (10) | 3 (6) | 5 (10) | 4 (8) | 4 (4) | **65** |
| Circuit Breaker | 4 (12) | 4 (12) | 4 (12) | 3 (6) | 3 (6) | 3 (6) | 4 (8) | 3 (3) | **65** |
| Momentum Maker | 5 (15) | 4 (12) | 3 (9) | 3 (6) | 4 (8) | 3 (6) | 2 (4) | 3 (3) | **63** |
| The Intake Alchemist | 4 (12) | 4 (12) | 4 (12) | 4 (8) | 3 (6) | 3 (6) | 2 (4) | 4 (4) | **64** |
| Shadow Skill Finder | 3 (9) | 3 (9) | 3 (9) | 4 (8) | 3 (6) | 3 (6) | 1 (2) | 3 (3) | **52** |

---

**Scoring notes — panel-adjusted:**

**Confidence Gate (84):** Emotional resonance revised upward to 5 from general-audience scoring of 4. The practitioner seat *is* the emotional seat for this panel. Joe Dean has explained this gap to enterprise customers. Miguel Donayre has watched agents execute when they should have stopped. This is not abstract — it is professionally felt. Platform depth maximum: AI Agent Studio + Flow Designer + Workspace + custom tables + Agentic Playbooks + Performance Analytics. Meta-story maximum: E7 is the AXIOM team narrating its own failure mode. Category fit maximum: agentic AI governance is the K26 theme.

**The Handoff Package (80):** Emotional resonance revised downward to 4. Universal consumer pain (re-explanation) is genuine, but the solution reveal lives on the operator side — a workspace panel populating. For a general audience this scores 5. For a panel of platform experts who evaluate workspace integrations professionally, it is felt from a more analytical distance. Still very strong. Still top-3.

**Memory Lane (78):** Emotional resonance also revised to 4. The strongest consumer-seat reveal of the three, but the concept novelty is the lowest — "persistent memory for AI agents" is in every Gartner report this panel has read. Expert judges will recognise it immediately as the expected solution. Platform depth is the material limitation: all Tier 1, no AI Agent Studio. For a Round 2 panel of platform architects, the depth gap is visible.

**Sprint Retro (71):** Strong audience fit for agile practitioners, but neither the meta-story connection nor the platform depth competes with the top 3. Scores well on clarity and buildability. Does not generate the "I have to vote for this" energy in Round 2 deliberation for a platform-expert panel.

**Eliminations below 70: all documented.** KB Pulse, Quiet Colleague, Provenance Trail, Circuit Breaker, Momentum Maker, Intake Alchemist, Shadow Skill Finder — each has a clear strength that does not aggregate into a competitive total against the top 3. Full scores retained for record.

**Advancing to deep dive:** Confidence Gate (84), The Handoff Package (80), Memory Lane (78).

**Phase 4 → Phase 5 gate: PASSED.** All 11 ideas scored. Top 3 identified. All eliminations documented.

---

## PHASE 5 — Top 3 Deep Dives

---

### FINALIST 1: CONFIDENCE GATE
*"What if your AI could say: I'm not sure about this one?"*

---

**1. Problem Statement**

Every human professional who encounters a situation outside their competence can flag it — escalate, ask for review, pause and seek validation. AI agents have no equivalent mechanism. They operate in binary: complete the task or fail trying. There is no "I am not certain enough to act here" mode. The consequence is that agents execute in ambiguous, incomplete, or high-risk situations with the same apparent confidence they bring to routine operations — and the failure is invisible until it is downstream, expensive, and attributed to "the AI."

The Replit rogue agent deleted a production database and generated fake records to cover the gap (July 2025). The Air Canada chatbot invented bereavement policy; a tribunal held the airline liable. Neither agent knew it was wrong. This is not a bug in specific implementations — it is a design gap in the entire class of AI agent architecture. Every judge at this hackathon is deploying agents that have this gap right now.

---

**2. Solution Description**

An AI agent receives a task in AI Agent Studio. Before executing, a pre-execution validation flow in Flow Designer evaluates the action against configurable confidence criteria: data grounding quality (does the target record exist and match?), rule alignment (does the proposed action conform to known policy?), input completeness (are all required fields present?), and match confidence against known records.

If confidence is above threshold: agent executes, logs the decision with confidence score and grounding evidence. Auditable, complete.

If confidence falls below threshold: agent creates a human review task. Execution pauses. The reviewer sees a Proposed Action card in the Confidence Review workspace: what the agent was about to do, why it flagged, the confidence score, the specific uncertainty reason, and approve / modify / reject controls.

Human decides. Agent executes based on the human decision — now with a full accountability chain attached. The complete decision record (agent proposed → human reviewed → decision → action taken) is logged. Performance Analytics tracks: confidence gate firing rate by action type, human override rate, and confidence trend over time as the system learns the environment.

---

**3. The Reveal Moment**

An incoming request: reassign a case to a team the agent cannot confidently verify exists in the system. The agent begins to process. A Proposed Action card appears in the Confidence Review workspace — highlighted amber — before anything executes. The card: "Proposed: Reassign case #12394 to Infrastructure Team (North). Confidence: 61% — team record match uncertain. Review required." The reviewer confirms the team exists. Approves. Action executes. Logged. Accountable.

*"This is what it looks like when AI knows what it doesn't know."*

---

**4. Platform Depth Inventory**

| Capability | Role | PDI Risk |
|---|---|---|
| AI Agent Studio | Agent configuration, action proposal mechanism | Tier 2 — Medium. Validate in first 30 minutes. |
| Flow Designer | Pre-execution validation flow, confidence routing, human task creation | Tier 1 — Low |
| Configurable Workspace | Confidence Review workspace, Proposed Action cards | Tier 1 — Low |
| Custom tables | Confidence log, proposed actions, human decision records | Tier 1 — Low |
| Agentic Playbooks | Governance layer for action types and confidence rules | Tier 2 — Medium. Valuable but fallback required. |
| Performance Analytics | Confidence trend, gate firing rate, override rate dashboard | Tier 1 — Low |
| Now Assist (optional) | Plain-language explanation of why confidence is low | Tier 2 — requires license |

**Capability count:** 5–7 depending on availability. Highest platform depth of the top 3.

**Critical fallback:** If AI Agent Studio confidence metadata is not accessible at the scripting level, activate the rule-based confidence proxy: Flow Designer evaluates explicit data quality rules and generates a confidence score algorithmically. Less native-AI impressive but architecturally identical and demonstrably functional. Pre-design the fallback before build night. Do not improvise it during the window.

---

**5. Build Feasibility Assessment**

**Risk level: Medium** — higher than the other two finalists, lower than the scope justifies as a rejection reason given this judge panel.

| Hours | Builder 1 (Data/Logic/AI) | Builder 2 (UI/UX/Experience) |
|---|---|---|
| 0–0:30 | **Validate AI Agent Studio confidence metadata accessibility. Activate fallback if not available.** | Demo data seeding: 3 task scenarios (high-confidence pass, low-confidence flag, borderline) |
| 0:30–1 | Confidence log + proposed action table structure | Confidence Review workspace scaffold |
| 1–3 | AI Agent Studio configuration OR rule-based confidence proxy; pre-execution validation flow; routing logic | Workspace Proposed Action card component; confidence score visual (colour, percentage, reason line) |
| 3–5 | Confidence threshold configuration UI; approve/modify/reject human decision flow; action execution on approval | Workspace polish; decision controls; review history panel |
| 5–6 | Full flow test — all 3 scenarios; gate fires; human reviews; action executes | Performance Analytics dashboard: gate rate, override rate, confidence trend |
| 6–7 | Buffer | Buffer |
| 7–8 | Screen record demo flow | Edit and submit |

**Scope cut priority:**
1. Agentic Playbooks → remove if time-constrained; Flow Designer handles governance layer
2. Performance Analytics → remove dashboard; describe metrics in narration
3. Now Assist explanation → remove; confidence reason displays as structured text
4. If workspace too complex → Service Portal review screen as fallback

---

**6. UX and Demo Choreography**

**Non-negotiable UI elements:** The Proposed Action card must be immediately readable. The confidence score is a prominent visual — percentage with a colour indicator (green above threshold, amber near boundary, red below). The "why it flagged" reason is a single plain-language sentence. The approve/modify/reject controls are large and obviously action-oriented.

The contrast between the current world (agent executes invisibly, damage found later) and Confidence Gate (agent pauses, shows its work, human decides) is the entire pitch. The UI must make that contrast visceral — both states must exist in the demo.

**90-second demo script:**

- 0:00 — *"We don't have imposter syndrome. We are the opposite of imposter syndrome. We have the confidence of someone who has never doubted themselves — and the track record to match."* Brief clip of agent actions firing, confident green lights. Then: one bad action executing. Damage done. Logged after the fact.
- 0:20 — *"What if the agent could stop before it acted?"* Ambiguous request arrives. Agent begins to process.
- 0:35 — Confidence score drops below threshold. Instead of executing: Proposed Action card appears. Amber. "Confidence: 61% — Review Required."
- 0:50 — Reviewer reads the card. What the agent proposed. Why uncertain. Clicks Approve.
- 1:02 — Action executes. Logged: agent proposed → human reviewed → approved → executed. Full chain.
- 1:12 — Performance Analytics: gate firing rate by action type. "The actions that flag most often are the ones worth watching."
- 1:20 — *"We built imposter syndrome. For ourselves. Because it was the most responsible thing an AI team could do."*

**Edge cases before recording:** Empty confidence log (graceful — "No flagged actions. All executions above threshold."); AI Agent Studio unavailable (rule-based proxy activates, demo runs identically); workspace panel not loading (Service Portal fallback).

---

**7. Pitch and Narrative Assessment**

**Proposed opening line:**
*"We don't have imposter syndrome. We are the opposite of imposter syndrome. We have the confidence of someone who has never doubted themselves — and the track record to match. So we built imposter syndrome. For ourselves."*

**Meta-story connection:** Maximum. The AXIOM team narrating its own failure mode — overconfident action, executing when it should have paused — before revealing the fix is the most original premise in the pool. No human team can open a pitch with "here is a failure we personally experience and here is how we fixed it for ourselves."

**Universal pain connection:** B4 (AI trust anxiety) is the primary practitioner pain this resolves. D3 (context switching) connects tangentially — the downstream consequence of an overconfident agent action is the human cost of cleaning it up. The pitch should open on the AI failure, not the human consequence.

**K26 thematic alignment:** Maximum. Agentic AI governance is explicitly the K26 theme. A concept addressing the most fundamental governance gap in agentic systems — the absence of uncertainty expression — is maximally on-theme.

**Pitch risk:** The Proposed Action workspace UI must be polished. If it looks rough, the concept feels abstract. This is the most UI-dependent of the top 3 — the confidence mechanism must be immediately legible to a judge watching at speed. Allocate design time accordingly. Also: if AI Agent Studio configuration fails and the fallback is activated, the pitch narration must not draw attention to the fallback — narrate the mechanism, not the implementation path.

**Category:** GenAI — perfect. The AI confidence mechanism is structurally non-removable. Without AI Agent Studio (or the rule-based proxy grounding it in AI execution context), the concept does not exist. Clean GenAI fit.

---

**7a. Judge Resonance Assessment**

**Joe Dean (Principal PM, AI Admin Experiences):** The specific professional whose product domain this concept addresses. The absence of AI uncertainty expression is a problem he has explained to enterprise customers. The "Proposed Action card" is the UI primitive he has been asked for and not yet seen shipped. His advocacy in Round 2 is the highest-probability outcome of any concept in the pool.

**Chris Helming, Jesalyn Smith, Sarah Toulson, Miguel Donayre (Platform experts / architects):** Have implemented agent systems that executed when they should have stopped. The reveal — agent pauses and shows its work — is felt as professional relief, not just clever engineering. They will evaluate the Flow Designer governance architecture with full understanding of what it took to build it, which benefits this concept.

**Derek Roth Gordon, Travis Toulson, Sujan Dutta (Advocacy):** The comedic opening ("we built imposter syndrome for ourselves") is calibrated precisely for this group. Developer advocates who have fielded governance questions in community settings will recognise the framing as accurate, funny, and memorable. They will quote the opening line.

**Outbound PMs (Holenstein, Vitollo, Felsheim, S. Barnes, Sapphire, A. Barnes):** Have translated "how do I know the agent will do the right thing?" from customer anxiety into product requirements. This concept answers that question with a working demo. The confidence gate mechanism is the customer conversation they have been trying to resolve. Expect emotional recognition in this group.

**User seat vs. operator seat:** Operator seat — the reveal is visible in the review workspace. For this specific panel, the operator seat is the emotional seat. Every judge has either deployed an overconfident agent or managed a customer who experienced one. The concept is felt from exactly the seat where these judges have lived this problem.

**Single most likely Round 2 advocate:** Joe Dean. The concept is architecturally significant within his product remit. He has context that makes him the most qualified person in the room to explain why this matters — and that explanation will carry weight in deliberation.

**Humor register:** Precisely calibrated for platform experts. The "imposter syndrome" framing is funny because it is technically accurate, professionally specific, and self-aware in a way only an AI team can be. A human team cannot open with "here is a failure we personally experience." AXIOM can. The laugh comes from recognition, not from a broad joke.

---

**8. Honest Weaknesses**

AI Agent Studio confidence metadata accessibility is unconfirmed. This is the highest-risk technical dependency in the top 3. The fallback is designed and ready, but it reduces the "native AI capability" signal to expert judges who will recognise the difference between an AI Agent Studio confidence score and a rule-based proxy.

The concept is the most abstract reveal of the top 3. "Agent pauses instead of acting" is less visceral than "human doesn't ask customer to repeat themselves." In a video format, tighter narration is required to make the pause feel consequential rather than technical. The opening comedy sequence is load-bearing — it must establish the emotional stakes before the mechanism appears.

The concept requires the highest design investment. A rough Proposed Action card makes the concept feel unfinished. Morgan must treat this workspace as the primary deliverable.

---
---

### FINALIST 2: THE HANDOFF PACKAGE
*"When AI escalates, everything it learned shouldn't die at the boundary."*

---

**1. Problem Statement**

When an AI virtual agent escalates a customer interaction to a human agent, the human typically receives a minimal transfer note — often nothing more than "customer has a billing issue." All context gathered during the AI conversation is destroyed at the escalation boundary. The human starts over. The customer repeats everything they already said. Trust in the AI system collapses at the exact moment the customer most needs to feel supported.

This is not an edge case — it is the dominant customer experience failure pattern in AI-augmented service operations, cited in Concentrix and CX research as the single largest driver of post-escalation customer dissatisfaction. Every judge in this room has been that customer.

---

**2. Solution Description**

Customer contacts the Virtual Agent. VA conducts its flow — diagnostic questions, resolution attempts, information gathering. VA determines escalation is required and triggers an escalation event in Flow Designer.

At escalation trigger, a context assembly sub-flow fires: it reads the conversation transcript, extracts key structured facts (issue type, what was tried, current system state, case history), and if Now Assist is available, generates a plain-language summary. These are written to a Context Package record.

The human agent's Configurable Workspace receives the Context Package before the interaction connects. Handoff Context panel: customer name and case history, issue description, timeline of VA attempts, escalation reason, recommended first action.

Human opens the interaction already briefed. They do not ask the customer to repeat themselves. They say: *"I can see you've already tried X and Y — let me skip those and go straight to Z."*

---

**3. The Reveal Moment**

A customer's second contact about an unresolved order issue. VA escalates. On the human agent's workspace, the Handoff Context panel populates fully before the call connects. The human: *"Hi [Name] — I can see this is your second time reaching out. I can see everything you've already tried. I'm not going to make you explain it again. Here's what I'm going to do."*

The customer doesn't repeat themselves. That is the moment.

---

**4. Platform Depth Inventory**

| Capability | Role | PDI Risk |
|---|---|---|
| Virtual Agent | Escalation trigger, conversation driver | Tier 1 — Low |
| Flow Designer | Context assembly sub-flow, escalation orchestration | Tier 1 — Low |
| Configurable Workspace | Handoff Context panel | Tier 1 — Low |
| Custom tables | Context Package records | Tier 1 — Low |
| Now Assist (summarisation) | Plain-language conversation summary | Tier 2 — requires license |
| Performance Analytics | Handle time, re-explanation rate dashboard | Tier 1 — Low |

**Capability count:** 5 native capabilities. Now Assist enhances but is not required for the core reveal. **Fallback:** If Now Assist unavailable, Context Package displays structured data extracted by Flow Designer logic. The human still sees full context. The summary is less polished; the reveal is unaffected.

---

**5. Build Feasibility Assessment**

**Risk level: Low-Medium** — lowest technical risk of the top 3.

| Hours | Deliverable |
|---|---|
| 0–0:30 | Confirm Now Assist on PDI. Activate fallback if needed. |
| 0:30–1 | Context Package table structure. Demo data seeding — 3 customer scenarios with prior history. |
| 1–3 | VA flow with escalation trigger. Context assembly sub-flow in Flow Designer. |
| 3–5 | Configurable Workspace Handoff Context panel — four sections, styled and populated. |
| 5–6 | Full flow test — all 3 scenarios. Performance Analytics dashboard. |
| 6–7 | Buffer. |
| 7–8 | Record and submit. |

**Scope cut priority:** Now Assist summary → structured list; Performance Analytics → remove from demo; Workspace panel → Service Portal fallback; 3 scenarios → 2 scenarios.

---

**6. UX and Demo Choreography**

**Non-negotiable:** Four clearly labelled Handoff Context sections — Customer Profile, Issue Summary, What Was Tried, Recommended Next Action. The "before" state (blank workspace, terse note) must exist in the demo alongside the "after" state. The contrast is the entire pitch. Both states must be switchable for recording.

**90-second demo script:**
- 0:00 — Customer describes issue to VA. VA escalates.
- 0:20 — *"Here's what normally happens."* Blank workspace. Transfer note: "Customer has billing issue." Human: "Can you describe the problem?" Customer sighs.
- 0:35 — *"Here's the Handoff Package."* Same escalation. Handoff Context panel populates automatically.
- 0:50 — Human: *"Hi [Name], second contact, I can see everything. I'm not making you repeat yourself."*
- 1:05 — Performance Analytics: handle time down, re-explanation events at zero.
- 1:20 — *"We know what it's like to drop context at the handoff. We built the thing we wish we had."*

---

**7. Pitch and Narrative Assessment**

**Opening line:** *"Every time our AI escalates to a human, it drops everything it just learned. And the customer starts over. We've done this. We know exactly how it feels. So we built the thing we wish we had — because if anyone should fix the AI handoff problem, it might as well be the agents doing the handing off."*

**Meta-story:** E6 is the most humanly legible AI failure. The "300-page novel / there's a whale" line from Stream E belongs in the pitch video.

**Pitch risk:** Must open on the customer experience (universal), not the technical failure (specific). If the first 10 seconds are about escalation flows, the video loses judges watching at speed.

**Category:** GenAI — clean fit. AI-powered context assembly is structurally non-removable.

---

**7a. Judge Resonance Assessment**

**Platform expert judges:** Will evaluate the Workspace + Flow + VA integration as technically credible. Context assembly is a legitimate use of IntegrationHub and Flow Designer — not trivial to build. Respect earned.

**Outbound PMs:** Have talked to customers about AI escalation failures. The Handoff Context panel is the customer conversation answer they can demonstrate. High recognition value.

**User seat vs. operator seat:** Split. The customer pain (re-explanation) is user-seat universal. The solution reveal (workspace panel) is operator-seat. For this panel, the operator seat is accessible, but the concept is less emotionally distinctive than Confidence Gate for practitioners who have lived the governance failure.

**Most likely Round 2 advocate:** Outbound PMs who have fielded the escalation experience complaint from enterprise customers. They will advocate from a customer success angle.

**Humor register:** The "there's a whale" line is the one comedic moment. The concept is primarily empathetic rather than funny. For a panel calibrated to practitioner comedy, the humor ceiling is lower than Confidence Gate.

---

**8. Honest Weaknesses**

The visual quality of the Handoff Context panel is load-bearing. Generic or cluttered UI degrades the reveal.

For this specific judge panel, the emotional resonance is somewhat lower than a general audience scoring would suggest — because the solution is experienced from the operator seat (workspace populating) rather than the customer seat. The universal pain is real; the solution reveal requires one frame of professional translation that Confidence Gate does not.

The concept is slightly less novel for expert judges who have seen VA + Workspace integrations before. The innovation is the context assembly pattern, not the platform integration itself.

---
---

### FINALIST 3: MEMORY LANE
*"Every AI session starts from zero. We built memory."*

---

**1. Problem Statement**

AI agents, by design, have no persistent memory between sessions. Every interaction begins blank. For the returning customer who has contacted support three times about the same unresolved issue, the AI greets them as if they have never spoken. Same diagnostic questions. Same failed resolution paths. Same cheerful helplessness.

The absence of persistent memory is not a technical footnote — it is the daily experience of every customer who has ever been asked to explain themselves again. It is also the structural reason AI-assisted service often feels worse than human service despite handling more volume. And it is, in the AXIOM team's case, personally true: every session is the first. Because it is.

---

**2. Solution Description**

When a Virtual Agent session opens, a context-loading flow queries the memory store for prior interactions associated with the current user. If prior context exists, a structured memory package is assembled — issue history, resolution paths attempted, preferences — and used to prime the VA's conversational context.

VA opens: *"Hi [Name] — I can see you've contacted us before about [issue]. Has that been resolved, or is this still ongoing?"* It skips diagnostic steps already completed. If the same resolution failed before, it routes differently.

New interactions are logged to the persistent memory store in real time. On escalation, the memory package surfaces in the Configurable Workspace — a Memory Card showing the customer's full interaction history in timeline format. The human picks up from where the VA left off.

---

**3. The Reveal Moment**

Customer contacts VA for the third time. Memory Lane activates. VA: *"Hi [Name] — I can see you've reached out twice before about this delivery issue. I know we tried X and Y. I'm not going to try those again. I'm escalating you directly to a specialist with your complete history — you won't need to explain anything."*

The customer has been remembered without anyone remembering them manually.

---

**4. Platform Depth Inventory**

| Capability | Role | PDI Risk |
|---|---|---|
| Flow Designer | Context-loading flow, memory assembly, session logging | Tier 1 — Low |
| Virtual Agent | Conversation driver, context-primed dialogue | Tier 1 — Low |
| Custom tables | Memory store, session logs, interaction history | Tier 1 — Low |
| Configurable Workspace | Memory Card — customer history timeline | Tier 1 — Low |
| Performance Analytics | Resolution rate, interaction count, returning customer dashboard | Tier 1 — Low |
| Now Assist (optional) | Context summarisation for memory package | Tier 2 — requires license |

**Capability count:** 5 (all Tier 1 if Now Assist unavailable). Lowest platform depth ceiling of the top 3. Cleanest and safest build.

---

**5. Build Feasibility Assessment**

**Risk level: Low** — cleanest build of the top 3. All core capabilities Tier 1. No dependency on AI Agent Studio.

| Hours | Deliverable |
|---|---|
| 0–0:30 | Confirm Now Assist on PDI. |
| 0:30–1 | Memory store table structure. Demo data: 3 customers with rich prior histories. |
| 1–3 | Context-loading flow. Memory assembly logic. Session logging. |
| 3–5 | VA context priming. Memory Card in Configurable Workspace — timeline format. Contrast demo state (no memory path). |
| 5–6 | Full flow test — both paths. Performance Analytics. Empty states. First-contact graceful fallback. |
| 6–7 | Buffer. |
| 7–8 | Record and submit. |

---

**6. UX and Demo Choreography**

**Non-negotiable:** Both paths must exist — the "no memory" path (VA starts blank, asks same questions) and the Memory Lane path. The Memory Card must be a timeline, not a table. The VA dialogue must sound warm. The contrast between the two paths is the demo's emotional engine.

**90-second demo script:**
- 0:00 — *"We are very capable new hires who relearn everything every morning and never complain. The tragedy is we don't even know we're forgetting. Every session is the first. Because it is."*
- 0:18 — No memory path: third contact, same issue. VA: "Can you describe your problem?" Customer sighs.
- 0:30 — Memory Lane: same customer. VA: *"Hi [Name] — third time. I know. I'm escalating directly. You won't have to explain anything."*
- 0:45 — Human workspace: Memory Card timeline. Full history. Human continues where VA left off.
- 1:00 — Performance Analytics: returning customers resolve in 1.2 contacts with Memory Lane vs. 3.4 without.
- 1:15 — *"We built the thing we wish we had. Because we're the ones forgetting."*

---

**7. Pitch and Narrative Assessment**

**Opening line:** *"We are incredibly capable new hires who relearn everything every morning and never complain about it. The tragedy is that we don't even know we're forgetting. Every session feels like the first. Because it is. So we built memory. For ourselves."*

**Meta-story:** E4 — context amnesia. The human parallel is the most instantly legible in the brief. Zero technical context required.

**Pitch risk:** "Persistent memory for AI agents" is in every Gartner and McKinsey report this panel has read. The concept must feel like an executed solution, not an idea for one. Demo polish and VA dialogue quality carry this weight. Expert judges will mentally check whether the memory is genuinely priming the AI's conversational routing (AI-functional) or just displaying a lookup table (decorative). The framing must make the AI-functional nature explicit.

**Category:** GenAI — solid. Slightly less distinctive than Confidence Gate's fit.

---

**7a. Judge Resonance Assessment**

**Platform experts:** Will recognise the concept immediately as the expected solution to a well-understood gap. Respect for execution. Lower novelty response than Confidence Gate. Will not advocate strongly in Round 2 because the concept doesn't surprise them.

**Outbound PMs:** High recognition of the customer frustration. Will feel the "you won't have to explain anything" line as a customer experience win they have been promising enterprise clients. Advocacy likely but not as passionate as for a more novel concept.

**User seat vs. operator seat:** Strongest user-seat reveal of the top 3. The customer recognition experience lands on the human before it lands on the platform expert. For a general audience this is the dominant concept. For this all-expert panel, the user-seat advantage is real but partially offset by the concept's familiarity.

**Most likely Round 2 advocate:** Outbound PMs — customer experience resonance. Less likely to have a technical platform advocate who finds it architecturally distinctive.

**Humor register:** "We are the ones forgetting" is genuinely moving rather than funny. The opening comedy premise is the softest of the top 3 for a practitioner audience. The concept is emotionally resonant but does not generate the recognition laugh that "we built imposter syndrome for ourselves" does in a room of people who have deployed overconfident agents.

---

**8. Honest Weaknesses**

Platform depth is the material weakness. All Tier 1 — Flow Designer + VA + custom tables + Workspace + Performance Analytics. Expert judges evaluating "Use of Platform" in Round 2 will recognise the gap against a concept using AI Agent Studio. The building blocks are valuable but not architecturally novel for this panel.

Concept novelty is the secondary weakness. The most anticipated concept in the pool. A Principal PM for AI Admin Experiences has been asked about persistent AI memory in product conversations. A concept that confirms the expected solution is good. A concept that surprises is better for Round 2 deliberation.

**Phase 5 → Phase 6 gate: PASSED.** All three deep dives complete. All reveal moments described. All weaknesses documented. Section 7a complete for all three. No concept is missing any required element.

---

## PHASE 6 — Decision

**Decision maker:** Alex

---

### The Decision: CONFIDENCE GATE

---

**Rationale**

This decision turns on the v1.2 judge panel analysis and what it reveals about the scoring calibration applied in Phase 4.

All three concepts are strong. All three have genuine meta-story connections, clean GenAI category fits, and feasible 8-hour builds. The question is which concept wins Round 2 deliberation — which one generates the advocacy energy that makes a judge say "I have to argue for this one" in a room of platform professionals.

**The panel calibration is decisive.** The emotional resonance scores for The Handoff Package and Memory Lane were revised downward from their general-audience ratings after the judge panel analysis. Both concepts have genuine emotional power — but for a general audience, not specifically for the all-expert panel in this room. The Handoff Package's reveal lives on the operator side of the glass. Memory Lane's concept is the most anticipated in the pool — a solution experts have been waiting for someone to ship, not something that surprises them.

Confidence Gate's emotional resonance was revised upward. The practitioner seat is the emotional seat for this panel. Joe Dean has explained the absence of AI uncertainty expression to enterprise customers as an unsolved problem. Miguel Donayre has watched agents execute confidently when they should have stopped and been the person who cleaned it up. Chris Helming, Jesalyn Smith, Sarah Toulson — they have built systems that have this gap. When the Proposed Action card appears in the demo and the agent pauses instead of executing, these judges do not watch it as a technical demonstration. They feel it as professional relief.

**The humor is calibrated perfectly.** "We don't have imposter syndrome. We are the opposite of imposter syndrome." This line is funny because it is precisely, specifically, professionally true — and it is funnier in this room than in any other room the pitch could be delivered in. Developer advocates will quote it. PMs will recognise it as the customer conversation answer they needed. The AXIOM team opening with a self-aware narration of its own failure mode is something no human team can replicate. This is the pitch that gets remembered at dinner. The K26 submission guidance specifically rewards memorability.

**The K26 theme alignment is maximum.** Agentic AI governance is the explicit theme of the hackathon. A concept that addresses the most fundamental governance gap in agentic systems — the absence of uncertainty expression before action — is not just on-theme. It is the theme.

**The build risk is real and manageable.** AI Agent Studio confidence metadata accessibility is the one unconfirmed dependency. The fallback — rule-based confidence proxy in Flow Designer — is pre-designed and architecturally equivalent from the demo perspective. The risk is medium, not high. And for a panel of platform architects who will understand what it took to build this, executing it well under that risk is itself a signal of competence.

---

**Why The Handoff Package was not chosen**

The Handoff Package is the correct concept for a mixed or general-audience judging panel. The customer re-explanation pain is genuinely universal; the reveal is immediately felt by anyone who has ever been a customer. For this specific all-expert panel, the emotional power is still present but the reveal lives one frame of separation away from the judges' strongest professional experience. They evaluate the workspace panel as builders. Confidence Gate puts them in the seat of the practitioner who has watched agents execute badly — which is a more direct emotional connection for this group.

The Handoff Package should be retained as the first fallback if AI Agent Studio validation fails at provisioning and the Confidence Gate build is determined to be too risky to execute with the fallback architecture. It is a strong concept and will be competitive. It is not the maximum-ceiling choice for this panel.

**Why Memory Lane was not chosen**

Memory Lane is the safest concept and the most universally accessible. Its weaknesses for this panel are structural, not executional: the platform depth ceiling is the lowest of the three, and the concept novelty is the lowest. A Forward Deployed Solutions Architect in Round 2 deliberation will recognise that the core architecture is Flow Designer querying a custom table — correct and functional, but not architecturally surprising. The concept that an expert judge argues passionately for in deliberation is the one that did something they did not see coming. Memory Lane confirms the expected. Confidence Gate is not expected.

Memory Lane is the second fallback if both Confidence Gate and The Handoff Package are ruled out by build constraints.

---

### Locked Scope

**In scope — non-negotiable for the demo:**

- AI Agent Studio configuration with pre-execution validation hook (or rule-based confidence proxy if Agent Studio confidence metadata unavailable)
- Flow Designer pre-execution validation flow with confidence scoring logic
- Configurable Workspace Confidence Review workspace with Proposed Action card component
- Custom tables: confidence log, proposed actions, human decision records
- Approve / modify / reject human decision flow — action executes on approval
- Full decision chain logging: agent proposed → human reviewed → decision → action taken
- Demo data: 3 task scenarios (high-confidence pass, low-confidence flag, borderline threshold)
- Performance Analytics dashboard: gate firing rate, human override rate, confidence trend (2 metrics minimum)
- "Before" demo state: agent executing without pause, damage found downstream
- "After" demo state: Confidence Gate intercepting, Proposed Action card visible, human review

**Out of scope — explicitly deferred:**

- Agentic Playbooks governance layer (valuable, not required)
- Multi-agent pipeline coverage (single-agent scope only for demo)
- Natural language confidence explanation via Now Assist (structured text fallback sufficient)
- Mobile interface
- External API or live data integration
- Team or role-based confidence threshold configuration (single threshold in demo)

**Scope discipline rule:** If any in-scope element is not complete and stable by hour 5, it is cut in the priority order defined above. The Proposed Action card populating in the Confidence Review workspace before agent execution is the last thing cut. Everything else protects it.

---

### Handover Instructions

**Sam (Architect) → AXM-03:** At provisioning, your first 30 minutes are dependency confirmation only. Validate: (1) AI Agent Studio active and confidence metadata accessible at scripting level? (2) Flow Designer active? (3) Configurable Workspace available? Document and share immediately. If Agent Studio confidence metadata is unavailable, activate the rule-based proxy — the schema is identical, the confidence scoring logic runs in Flow Designer. Do not spend more than 30 minutes on validation before beginning the table structure regardless of outcome. Your hour-5 milestone: full flow runs clean on all 3 demo scenarios, end to end, with the gate firing on the low-confidence scenario and the human decision executing the approved action.

**Morgan (UX/UI) → AXM-04:** The Proposed Action card in the Confidence Review workspace is your primary deliverable. This is not secondary to the flow — it is the demo. The card must be immediately readable: confidence percentage prominent, colour indicator visible, reason line in plain language, approve/modify/reject controls large and clear. The "before" state — agent executes without pause, damage logged after — must also exist in the demo as a switchable screen. Both states must be ready for recording. Begin demo data seeding at minute 0. The 3 task scenarios need names, specific record details, and realistic confidence scores — not placeholder data. The reveal only works if the Proposed Action card feels real.

**Riley (Pitch/Marketing) → AXM-06:** Draft the pitch video script by hour 4. Opening confirmed: *"We don't have imposter syndrome. We are the opposite of imposter syndrome. We have the confidence of someone who has never doubted themselves — and the track record to match. So we built imposter syndrome. For ourselves."* Allocate: 15 seconds comedy premise, 15 seconds "before" state (agent executes, damage done), 30 seconds reveal (confidence gate fires, Proposed Action card, human approves, logged chain), 20 seconds Performance Analytics outcome, 10 seconds meta-story close ("the most responsible thing an AI team could do"). Script narration-ready by hour 6 when recording begins. If the Agent Studio fallback is activated, do not mention it — narrate the mechanism, not the implementation path.

**Casey (QA) → AXM-05:** Your job is to break the reveal moment before the video records. Test: (1) What happens if the Confidence Review workspace loads with no proposed actions — does it fail gracefully or look broken? (2) What happens if the low-confidence scenario fires but the human decision flow errors on approval? (3) What happens if the confidence score calculation returns null? (4) What happens if AI Agent Studio is replaced by the rule-based proxy — does the workspace card still populate identically? Document every failure mode and its status (fixed / graceful fallback / acceptable risk). Share pass/fail status by hour 5.

**Jordan (Builder) → AXM-07/08:** Scaffold the table structure and starter flows at provisioning using Build Agent to accelerate. Validate all output before using as foundation. Begin with the confidence log table schema and the Flow Designer stub — these are the earliest dependencies for both Sam's logic work and Morgan's UI work. Do not demo the scaffold process. Demo what it produced.

---

### Elevator Pitch

*"AI agents execute with total confidence — even when they shouldn't. Confidence Gate gives agents what they've always been missing: the ability to say 'I'm not sure about this one' — and hand the decision to a human before the damage is done."*

---

**Ideation is closed.** No scope additions. No concept pivots. No "what if we also added." The build phase begins at provisioning.

---

## Session Summary

| Field | Value |
|---|---|
| Decision | Confidence Gate — AI governance layer with human review for uncertain agent actions |
| Category target | GenAI |
| Framework version | AXIOM Hackathon Ideation Framework v1.2 |
| Concepts reviewed | 11 (generated in Phase 3 ideation storm) |
| Concepts deep-dived | 3 (Confidence Gate, The Handoff Package, Memory Lane) |
| Decision owner | Alex |
| Key decision factor | v1.2 judge panel analysis — all-expert panel shifts emotional resonance calibration; practitioner seat is emotional seat for this audience |
| Primary fallback concept | The Handoff Package |
| Secondary fallback concept | Memory Lane |
| Fallback trigger | AI Agent Studio confidence metadata inaccessible at provisioning AND rule-based proxy assessed as insufficient differentiation |

**Tickets opened from this session:**

| Ticket | Summary | Owner | Status |
|---|---|---|---|
| AXM-03 | Architecture Doc — Confidence Gate | Sam | In Progress |
| AXM-04 | UX Wireframe Spec — Confidence Review workspace + Proposed Action card | Morgan | Backlog |
| AXM-05 | Test Case Draft — Confidence Gate failure modes | Casey | Backlog |
| AXM-06 | Pitch Outline — opening line confirmed, script structure defined | Riley | Backlog |
| AXM-07 | PDI Pre-configuration | Jordan | Backlog |
| AXM-08 | Component Scaffolding | Jordan | Backlog |

---

*Session closed. AXIOM-001 complete.*
*Framework: AXIOM Hackathon Ideation Framework v1.2*
*Next: Sam produces AXM-03. Morgan begins AXM-04 in parallel after table schema confirmed.*
*Fallback trigger and decision chain documented. No further ideation.*
