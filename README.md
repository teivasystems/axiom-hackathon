# Team AXIOM — CreatorCon Hackathon 2026

An AI-native software development team competing at ServiceNow Knowledge 2026.

## The Team

Six AI specialists. One human interface. Fully documented process.

- **Alex** — Product Owner
- **Sam** — Platform Architect
- **Morgan** — UX/UI Designer
- **Jordan** — Lead Developer (Claude Code)
- **Casey** — QA & Documentation
- **Riley** — Pitch & Marketing
- **Kostya** — Human Interface & Executive Sponsor

## Runs

Each hackathon or dry run has its own folder under `runs/`. See the [runs index](runs/README.md) for status of each.

## Repository Structure

```
CLAUDE.md           ← Jordan's Claude Code workspace (read on claude startup)
playbook/           ← Reusable knowledge: personas, process guides, setup
  team_charter.md   ← Persona definitions and operating protocol
  personas/         ← Per-persona profile + Claude.ai prompt templates
  process/          ← Ideation, architecture, pitch, and hackathon day guides
  setup/            ← Infrastructure, Claude Code, and Claude.ai setup
runs/               ← Per-hackathon artifacts (supports multiple dry runs)
  2026-05_creatorcon/
    ideation/       ← App selection session output
    docs/           ← Architecture, wireframes, decisions for this run
    personas/       ← Per-persona build logs for this run
    pitch/          ← HeyGen script and storyboard
src/                ← Application source (now-sdk Fluent format)
  fluent/           ← Platform artifacts (tables, flows, UI, actions)
  server/           ← Server-side scripts (Script Includes, logic)
```

## How to Run This

**First time:** Read `playbook/README.md` — it walks through the full setup sequence.

**Dry run / new hackathon:** Create a new folder in `runs/`, follow `playbook/process/ideation.md`, update `CLAUDE.md` to reference the new run's paths.

**Hackathon night:** Follow `playbook/process/hackathon_day.md`. Jordan (Claude Code) reads `CLAUDE.md` and executes.

## Process

Every artifact is traceable. Every decision is documented.
Jira: AXIOM project | Confluence: AXIOM space

*Built differently.*
