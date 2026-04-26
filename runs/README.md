# Hackathon Runs

Each subdirectory is one hackathon attempt (or dry run).

| Run | Event | Date | App | Result |
|---|---|---|---|---|
| [2026-05_creatorcon](2026-05_creatorcon/) | ServiceNow Knowledge 2026 — CreatorCon Hackathon | May 2026 | RetroNow | TBD |

---

## Starting a New Run

1. Create a new folder: `YYYY-MM_eventname/`
2. Copy this structure:
```
YYYY-MM_eventname/
├── README.md          ← run summary (fill in as you go)
├── ideation/
│   └── session.md     ← AXM-02 output
├── docs/
│   ├── architecture.md   ← AXM-03 (Sam)
│   ├── wireframes.md     ← AXM-04 (Morgan)
│   └── decisions/        ← Architecture Decision Records
├── personas/
│   ├── alex.md           ← Alex's decision log (usually just the ideation output)
│   ├── sam.md            ← Sam's architecture notes and open questions
│   ├── morgan.md         ← Morgan's design notes
│   ├── jordan.md         ← Jordan's build log: completed / in progress / blockers
│   ├── casey.md          ← Casey's test cases and validation log
│   └── riley.md          ← Riley's pitch notes and script status
└── pitch/
    ├── script_draft.md       ← AXM-06 (Riley)
    └── heygen_storyboard.md  ← demo sequence and HeyGen assembly notes
```
3. Update `runs/README.md` to add the new run to the table above.
4. Update `CLAUDE.md` to reference the new run's `docs/` and `personas/` paths.
5. Update the Claude.ai Project knowledge with any new docs.
6. Follow `playbook/process/ideation.md` to start.
