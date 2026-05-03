# Hackathon Runs

Each subdirectory is one hackathon attempt or dry run.  
Every run is self-contained: its own now-sdk app, its own PDI, its own scope prefix.

| Run | Event | Date | App | Platform | Result |
|---|---|---|---|---|---|
| [2026-04_dryrun](2026-04_dryrun/) | Full AXIOM process dry run | 2026-04-29 | Team Kudos | Yokohama | ✅ Complete |
| [2026-05_creatorcon](2026-05_creatorcon/) | ServiceNow Knowledge 2026 — CreatorCon Hackathon | May 2026 | RetroNow | Zurich / Australia | TBD |

---

## Starting a New Run

**Step 1 — Kostya creates the app in AES** and confirms the system-assigned scope prefix. Do not name any artifact before this is known (D-001).

**Step 2 — Run the init script** from the repo root:

```bash
bash playbook/setup/run-init.sh YYYY-MM_eventname
```

This creates the full folder structure, copies log templates (including cross-run decisions D-001/D-002), writes the `[INIT]` ACTIVITY.log line, and prints a next-steps checklist.

**Step 3 — Complete the stubs:**

| File | Owner | Ticket |
|---|---|---|
| `runs/<run>/docs/prd.md` | Alex | AXM-01 |
| `runs/<run>/ideation/session.md` | Alex | AXM-02 |
| `runs/<run>/docs/architecture.md` | Sam | AXM-03 |
| `runs/<run>/docs/wireframes.md` | Morgan | AXM-04 |
| `runs/<run>/personas/casey.md` (test cases) | Casey | AXM-05 |

**Step 4 — Update tables:**
- Add this run to the `runs/README.md` table (below)
- Add this run to the root `README.md` Runs table

**Step 5 — Scaffold the now-sdk app** (Jordan, after architecture.md Section 12 is complete):
```bash
cd runs/<run>/app
now-sdk init --appName "<App Display Name>" --scopeName "<x_prefix_appname>" \
  --template typescript.basic --auth axiom-pdi
npm run build
npm run deploy
```

> CLAUDE.md uses `<run>` placeholders throughout — no per-run edits needed. Jordan substitutes the active run folder name at session start.

---

## Scope prefix rule

The `x_<vendor>_<appname>` scope prefix is **system-assigned by the PDI** when the app is created in AES.  
- Never invent a prefix.
- Query `glide.appcreator.company.code` sys_property on the PDI to find the vendor portion.
- Total scope length ≤ 18 characters (including `x_` prefix).
- See D-001 in `runs/2026-04_dryrun/logs/DECISIONS.md` for the full context.
