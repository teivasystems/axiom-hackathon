# Team AXIOM — Playbook

Reusable knowledge for running an AI-native hackathon team.
This directory is independent of any specific hackathon run.

---

## What is in here

| Directory | Contents |
|---|---|
| `personas/` | Profile + Claude.ai system prompt for each team member |
| `process/` | Step-by-step guides for each phase (ideation, architecture, pitch, day-of) |
| `setup/` | Infrastructure, Claude Code, and Claude.ai configuration guides |
| `team_charter.md` | Full persona definitions, operating protocol, handover format |

---

## How to use this for a new hackathon

**1. Read `team_charter.md` first.** Understand the team model, handover format, and operating protocol.

**2. Set up infrastructure.** Follow `setup/infrastructure.md`. This covers now-sdk, GitHub, Jira, Confluence, Figma, HeyGen, and API keys.

**3. Configure your AI tools.** Follow `setup/claude_ai.md` to create a Claude.ai Project. Follow `setup/claude_code.md` to prepare Jordan's workspace.

**4. Create a run folder.** Copy the structure from an existing run in `../runs/` or start fresh:
```
runs/
  YYYY-MM_eventname/
    ideation/
    docs/
    personas/
    pitch/
```

**5. Run ideation.** Follow `process/ideation.md`. Output goes into `runs/YYYY-MM_eventname/ideation/session.md`.

**6. Architecture and wireframes.** Sam produces `docs/architecture.md`. Morgan produces `docs/wireframes.md`. Follow the templates in `process/architecture.md`.

**7. Pitch prep.** Follow `process/pitch.md`. Output goes into `runs/YYYY-MM_eventname/pitch/`.

**8. Hackathon day.** Follow `process/hackathon_day.md`. Jordan's build log goes into `runs/YYYY-MM_eventname/personas/jordan.md`.

---

## Run history

| Run | Event | App | Result |
|---|---|---|---|
| [2026-05_creatorcon](../runs/2026-05_creatorcon/) | CreatorCon Hackathon, Knowledge Las Vegas 2026 | RetroNow | TBD |

---

*Team AXIOM. Built differently.*
