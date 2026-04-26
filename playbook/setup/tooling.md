# Tooling Guide — Claude.ai vs Claude Code

> **Location:** `playbook/setup/tooling.md`  
> **Owner:** Sam (Platform Architect)  
> **Relates to:** `CLAUDE.md` (Jordan's workspace) · `playbook/team_charter.md` (persona definitions) · `playbook/setup/` (setup sequence)

---

## The One Rule

> **Decide and document in Claude.ai. Build and execute in Claude Code.**

---

## Decision Table

| Task | Tool | Primary Persona |
|---|---|---|
| Persona roleplay sessions | Claude.ai | All |
| Architecture decisions & ADRs | Claude.ai | Sam |
| PRD, backlog, Jira tickets | Claude.ai | Alex |
| UX specs, wireframe reviews | Claude.ai | Morgan |
| Pitch copy, README hero text | Claude.ai | Riley |
| Test plans, handover notes | Claude.ai | Casey |
| Writing / editing app source | Claude Code | Jordan |
| Running `now-sdk` commands | Claude Code | Jordan |
| Git commits and branching | Claude Code | Jordan |
| Running test suites | Claude Code | Casey |
| Debugging with file context | Claude Code | Jordan |

---

## Why Two Tools

**Claude.ai (this Project)** retains memory across sessions via the Project context. All Team AXIOM personas, the Team Charter, and artifact history live here. Use it for anything that produces a `.md` file or requires cross-session continuity.

**Claude Code** operates inside the repo with direct file-system and shell access. It reads `CLAUDE.md` on startup for full run context. Use it for anything that touches `src/` or requires command execution. See `CLAUDE.md` for Jordan's workspace configuration.

---

## Artifact Routing

```
Claude.ai → produces .md → commit to playbook/ or runs/<run>/docs/
Claude Code → produces source → commit to src/
```

Artifacts generated in Claude.ai are manually committed (or pasted via Jordan). Claude Code commits directly.

---

## Setup References

- **Claude Code workspace:** see `CLAUDE.md` at repo root  
- **Claude.ai Project setup:** see `playbook/setup/` (claude_ai_setup guide)  
- **Persona definitions:** see `playbook/team_charter.md`
