# Hackathon Runs

Each subdirectory is one hackathon attempt or dry run.  
Every run is self-contained: its own now-sdk app, its own PDI, its own scope prefix.

| Run | Event | Date | App | Platform | Result |
|---|---|---|---|---|---|
| [2026-04_dryrun](2026-04_dryrun/) | Full AXIOM process dry run | 2026-04-29 | Team Kudos | Yokohama | ✅ Complete |
| [2026-05_creatorcon](2026-05_creatorcon/) | ServiceNow Knowledge 2026 — CreatorCon Hackathon | May 2026 | RetroNow | Zurich / Australia | TBD |

---

## Starting a New Run

**Before creating the folder:** Kostya must create the app in AES and confirm the system-assigned scope prefix. Do not name any artifact before this is known.

1. Create: `runs/YYYY-MM_eventname/`
2. Copy this structure:

```
YYYY-MM_eventname/
├── README.md                  ← run summary (fill in as you go)
│
├── app/                       ← now-sdk app (one per run — different PDI, different scope)
│   ├── now.config.json        ← scope must match AES exactly
│   ├── package.json
│   ├── .gitignore             ← node_modules/, dist/, target/, *.token
│   └── src/
│       ├── fluent/            ← platform artifacts (tables, flows, UI, actions)
│       └── server/            ← Script Includes and server-side logic
│
├── docs/
│   ├── architecture.md        ← Sam (AXM-03) — REQUIRED before Jordan builds anything
│   └── wireframes.md          ← Morgan (AXM-04) — REQUIRED before Jordan builds UI
│
├── ideation/
│   └── session.md             ← Alex (AXM-02) — app concept, scope lock, constraints
│
├── logs/
│   ├── ACTIVITY.log           ← copy from playbook/log-templates/ACTIVITY.log
│   ├── DECISIONS.md           ← copy from playbook/log-templates/DECISIONS.md
│   ├── HANDOVERS.md           ← copy from playbook/log-templates/HANDOVERS.md
│   └── RETRO-YYYY-MM-DD.md    ← created by Casey post-run (template: playbook/log-templates/RETRO.md)
│
├── personas/
│   ├── alex.md                ← Alex's decision log
│   ├── sam.md                 ← Sam's architecture notes
│   ├── morgan.md              ← Morgan's design notes
│   ├── jordan.md              ← Jordan's build log: completed / in progress / blockers
│   ├── casey.md               ← Casey's test cases and validation results
│   └── riley.md               ← Riley's pitch notes and script status
│
└── pitch/
    ├── script_draft.md        ← Riley (AXM-06)
    └── heygen_storyboard.md   ← demo sequence and HeyGen assembly notes
```

3. Copy log templates from `playbook/log-templates/` into `logs/`. Fill the ACTIVITY.log `[INIT]` line.
4. Update this `runs/README.md` table.
5. Update the root `README.md` Runs table.
6. CLAUDE.md does not need editing per-run — it uses `<run>` placeholders throughout. Jordan substitutes the active run folder name at session start.
7. Follow `playbook/process/ideation.md` to start.

---

## Scope prefix rule

The `x_<vendor>_<appname>` scope prefix is **system-assigned by the PDI** when the app is created in AES.  
- Never invent a prefix.
- Query `glide.appcreator.company.code` sys_property on the PDI to find the vendor portion.
- Total scope length ≤ 18 characters (including `x_` prefix).
- See D-001 in `runs/2026-04_dryrun/logs/DECISIONS.md` for the full context.
