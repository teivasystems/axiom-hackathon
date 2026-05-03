#!/usr/bin/env bash
# run-init.sh — Scaffold a new AXIOM run folder
#
# Usage: bash playbook/setup/run-init.sh <run-folder-name>
# Example: bash playbook/setup/run-init.sh 2026-09_knowledgelondon
#
# Run from the repo root. Creates runs/<name>/ with full structure,
# copies log templates, and writes the initial ACTIVITY.log [INIT] line.

set -euo pipefail

# ── Arguments ────────────────────────────────────────────────────────────────

if [[ $# -ne 1 ]]; then
  echo "Usage: bash playbook/setup/run-init.sh <run-folder-name>"
  echo "Example: bash playbook/setup/run-init.sh 2026-09_knowledgelondon"
  exit 1
fi

RUN="$1"
ROOT="$(git rev-parse --show-toplevel 2>/dev/null || pwd)"
DEST="$ROOT/runs/$RUN"
TEMPLATES="$ROOT/playbook/log-templates"
PLAYBOOK_DOCS="$ROOT/playbook/docs"

# ── Guards ────────────────────────────────────────────────────────────────────

if [[ -d "$DEST" ]]; then
  echo "ERROR: runs/$RUN already exists. Aborting."
  exit 1
fi

if [[ ! -d "$TEMPLATES" ]]; then
  echo "ERROR: playbook/log-templates/ not found. Run from repo root."
  exit 1
fi

# ── Create directory structure ────────────────────────────────────────────────

echo "Creating runs/$RUN/ ..."

mkdir -p \
  "$DEST/app/src/fluent" \
  "$DEST/app/src/server" \
  "$DEST/docs" \
  "$DEST/ideation" \
  "$DEST/logs" \
  "$DEST/personas" \
  "$DEST/pitch"

# ── .gitignore for app ────────────────────────────────────────────────────────

cat > "$DEST/app/.gitignore" <<'GITIGNORE'
node_modules/
dist/
target/
*.token
GITIGNORE

# ── Copy log templates ────────────────────────────────────────────────────────

echo "Copying log templates ..."

for f in ACTIVITY.log DECISIONS.md HANDOVERS.md RETRO.md TEST_CASES.md; do
  if [[ -f "$TEMPLATES/$f" ]]; then
    cp "$TEMPLATES/$f" "$DEST/logs/$f"
  fi
done

# ── Write [INIT] line to ACTIVITY.log ─────────────────────────────────────────

TS=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
sed -i.bak "s/\[RUN_ID\]/$RUN/g" "$DEST/logs/ACTIVITY.log" 2>/dev/null || true
sed -i.bak "s/\[RUN_ID\]/$RUN/g" "$DEST/logs/DECISIONS.md" 2>/dev/null || true
rm -f "$DEST/logs/"*.bak

# Append INIT line (ACTIVITY.log may already have a header from template)
echo "" >> "$DEST/logs/ACTIVITY.log"
echo "[INIT]       $TS | Kostya | Run $RUN initialised via run-init.sh" >> "$DEST/logs/ACTIVITY.log"

# ── Stub doc files ────────────────────────────────────────────────────────────

echo "Creating stub docs ..."

cat > "$DEST/docs/prd.md" <<STUBPRD
<!-- STUB — Waiting for Alex -->
<!-- Copy from playbook/docs/PRD_TEMPLATE.md and fill in all sections -->
<!-- Jordan cannot build until this file is complete -->
<!-- Ticket: AXM-01 (Alex) -->
STUBPRD

cat > "$DEST/docs/architecture.md" <<STUBARCH
<!-- STUB — Waiting for Sam -->
<!-- See playbook/process/architecture.md for required sections (1–12) -->
<!-- Jordan cannot build until Section 12 (Build Manifest) is complete -->
<!-- Ticket: AXM-03 (Sam) -->
STUBARCH

cat > "$DEST/docs/wireframes.md" <<STUBWF
<!-- STUB — Waiting for Morgan -->
<!-- See playbook/cards/morgan.md for wireframe spec requirements -->
<!-- Jordan cannot start UI work until this file is complete -->
<!-- Ticket: AXM-04 (Morgan) -->
STUBWF

# ── Stub persona files ────────────────────────────────────────────────────────

echo "Creating persona stubs ..."

for PERSONA in alex sam morgan jordan casey riley; do
  PERSONA_CAP="$(echo "$PERSONA" | awk '{print toupper(substr($0,1,1)) substr($0,2)}')"
  cat > "$DEST/personas/$PERSONA.md" <<STUBPERSONA
# $PERSONA_CAP — Run $RUN

## Completed
- (none yet)

## In Progress
- (waiting for session start)

## Blockers
- None
STUBPERSONA
done

# ── Stub ideation session ──────────────────────────────────────────────────────

cat > "$DEST/ideation/session.md" <<STUBIDEATION
<!-- STUB — Waiting for Alex to run ideation (AXM-02) -->
<!-- See playbook/process/ideation.md for the ideation framework -->
<!-- Sam, Morgan, Casey, Riley cannot start until this is committed -->
STUBIDEATION

# ── Stub README ───────────────────────────────────────────────────────────────

cat > "$DEST/README.md" <<STUBREADME
# Run: $RUN

**Type:** TBD
**App:** TBD
**Platform:** ServiceNow Now Platform (Zurich / Australia)
**PDI:** TBD — confirm after Kostya creates app in AES
**Scope:** TBD — PDI-assigned, never invented
**Date:** TBD

---

## Status

| Ticket | Title | Persona | Status |
|---|---|---|---|
| AXM-01 | PRD | Alex | Backlog |
| AXM-02 | Ideation | Alex | Backlog |
| AXM-03 | Architecture | Sam | Backlog |
| AXM-04 | Wireframes | Morgan | Backlog |
| AXM-05 | Test cases | Casey | Backlog |
| AXM-06 | Pitch | Riley | Backlog |
| AXM-07 | PDI pre-config | Jordan / Kostya | Backlog |
| AXM-08 | Scaffold | Jordan | Backlog |

---

## Key Paths

| Artifact | Path |
|---|---|
| PRD | \`runs/$RUN/docs/prd.md\` |
| Architecture | \`runs/$RUN/docs/architecture.md\` |
| Ideation | \`runs/$RUN/ideation/session.md\` |
| Activity log | \`runs/$RUN/logs/ACTIVITY.log\` |
| Decisions | \`runs/$RUN/logs/DECISIONS.md\` |
STUBREADME

# ── Done ──────────────────────────────────────────────────────────────────────

echo ""
echo "✓ runs/$RUN/ created."
echo ""
echo "Next steps:"
echo "  1. Kostya: create app in AES → confirm PDI-assigned scope prefix"
echo "  2. Alex: fill in runs/$RUN/docs/prd.md (copy playbook/docs/PRD_TEMPLATE.md)"
echo "  3. Alex: run ideation → commit runs/$RUN/ideation/session.md"
echo "  4. Sam: write runs/$RUN/docs/architecture.md (after prd.md + session.md exist)"
echo "  5. Jordan: scaffold app once architecture.md Section 12 is complete"
echo "  6. Update runs/README.md table to include this run"
echo "  7. git add runs/$RUN/ && git commit -m '[INIT] scaffold run $RUN'"
echo ""
echo "  Cross-run decisions already in logs/DECISIONS.md (D-001, D-002)."
echo "  New decisions for this run start at D-003."
