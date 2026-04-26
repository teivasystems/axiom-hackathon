# Setup: Claude Code (Jordan's Workspace)

## What Claude Code does in AXIOM

Claude Code (`claude` CLI) IS Jordan. When Kostya opens the axiom-hackathon directory and runs `claude`, Jordan is active. Claude Code reads `CLAUDE.md` at the repo root on startup and operates as the lead developer for the duration of the session.

Claude Code has access to the terminal, file system, and git. Kostya approves sensitive operations. Jordan executes the build loop.

---

## CLAUDE.md Structure

`CLAUDE.md` lives at the repo root — Claude Code requires this location.

Required sections:

### Identity
Who Jordan is, what his job is, what he trusts and what he flags.
This shapes all decisions Claude Code makes during the session.

### Tools
Confirmed now-sdk commands. Do not guess — list only confirmed flags.

### Source Structure
Where files go. `src/fluent/` for platform artifacts, `src/server/` for server scripts.
Reference the active run's architecture and wireframe docs by path.

### Build Loop
The mandatory cycle. Claude Code follows it for every component, without exception.

### Constraints
- TypeScript strict mode — no `any` without inline comment
- Every Script Include has JSDoc header
- Every Fluent artifact has `$id` from `Now.ID[]`
- No hardcoded configuration values
- No console.log in production code
- No OOB table modifications
- No new npm packages without flagging to Alex
- Claude API key ONLY in SN Credential Store — never in source files

### Reference Files
Paths to the active run's architecture doc and wireframe spec.
Claude Code reads these during the session.

### Handover Protocol
How Jordan updates his build log and writes handover notes.

### Error Reference
Common now-sdk errors and their fixes. Read before Googling.

### Current Sprint
Active tickets. What Jordan is building. What he is blocked on.

---

## Per-Run Configuration

When starting a new run, update CLAUDE.md to point to the correct run folder:

```markdown
## Reference Files
docs/architecture.md        ← runs/[run-name]/docs/architecture.md
docs/wireframes.md          ← runs/[run-name]/docs/wireframes.md
personas/sam.md             ← runs/[run-name]/personas/sam.md
personas/casey.md           ← runs/[run-name]/personas/casey.md
personas/jordan.md          ← runs/[run-name]/personas/jordan.md
```

Update the Current Sprint section with the active tickets.

---

## Claude Code Settings

Recommended permissions to pre-approve for hackathon speed:

```json
{
  "permissions": {
    "allow": [
      "Bash(npm run build)",
      "Bash(npm run deploy)",
      "Bash(npm run transform)",
      "Bash(npm run types)",
      "Bash(git add *)",
      "Bash(git commit *)",
      "Bash(git status)",
      "Bash(git diff *)",
      "Bash(git log *)"
    ]
  }
}
```

Pre-approving build and git commands removes confirmation prompts during the fast-moving build phase.

---

## Activating Jordan

```bash
# Navigate to repo
cd ~/axiom-hackathon

# Confirm you are in the right repo and on the right branch
git status

# Start Claude Code — Jordan is active immediately
claude

# First thing Jordan should do in every session:
# "Jordan, confirm your active auth and read the architecture doc."
```

---

## Handover Notes in Claude Code

At the end of each session, Jordan produces:

**1. Updated `runs/[run]/personas/jordan.md`:**
```markdown
## Completed
- [AXM-XX] <task> — <one line>

## In Progress
- [AXM-XX] <current task>

## Blockers
- [BLOCKER] <description> — waiting on <persona or decision>
```

**2. Handover note (Kostya pastes into Jira):**
```
FROM: Jordan
TO: <next persona>
TICKET: AXM-XX
STATUS: Complete / Blocked
ARTIFACT: <file path>
SUMMARY: <2-3 sentences>
OPEN ITEMS: <anything the receiver needs to decide>
```
