#!/usr/bin/env bash
# Generates per-persona knowledge bundles for Claude.ai upload.
# Each bundle is a single markdown file containing everything that persona needs.
# Run whenever playbook/ or docs/ files change, or manually before a session.
#
# Usage (from anywhere in the repo):
#   bash playbook/setup/generate_bundles.sh
#
# Output: playbook/personas/bundles/<persona>.bundle.md

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
BUNDLE_DIR="$REPO_ROOT/playbook/personas/bundles"
mkdir -p "$BUNDLE_DIR"

TIMESTAMP=$(date -u +"%Y-%m-%dT%H:%M:%SZ")

# ------------------------------------------------------------
bundle() {
    local persona="$1"; shift
    local out="$BUNDLE_DIR/${persona}.bundle.md"
    {
        echo "# AXIOM Knowledge Bundle — $(echo "$persona" | awk '{print toupper(substr($0,1,1)) substr($0,2)}')"
        echo "# Generated: $TIMESTAMP"
        echo "# Purpose:   Upload to Claude.ai Project knowledge for $(echo "$persona" | awk '{print toupper(substr($0,1,1)) substr($0,2)}') conversations."
        echo "#             This file is auto-generated — do not edit directly."
        echo "#             Source: https://github.com/teivasystems/axiom-hackathon"
        echo ""
        for f in "$@"; do
            local path="$REPO_ROOT/$f"
            if [[ -f "$path" ]]; then
                echo ""
                echo "---"
                echo "<!-- SOURCE: $f -->"
                echo ""
                cat "$path"
            else
                echo "# WARNING: source file not found — $f" >&2
            fi
        done
    } > "$out"
    local size
    size=$(wc -l < "$out")
    echo "  ✓ ${persona} (${size} lines) → ${out#"$REPO_ROOT/"}"
}
# ------------------------------------------------------------

echo "Generating AXIOM persona bundles (${TIMESTAMP})..."
echo ""

# Alex — Product Owner
# Needs: persona profile, operation card, ideation process guide
bundle "alex" \
    "docs/TEAM_CHARTER.md" \
    "playbook/personas/alex.md" \
    "playbook/cards/alex.md" \
    "playbook/process/ideation.md"

# Sam — Platform Architect
# Needs: persona profile, operation card, architecture process,
#        all skill files (Sam designs what Jordan builds — must know platform constraints)
bundle "sam" \
    "docs/TEAM_CHARTER.md" \
    "playbook/personas/sam.md" \
    "playbook/cards/sam.md" \
    "playbook/process/architecture.md" \
    "playbook/skills/platform.md" \
    "playbook/skills/flows.md" \
    "playbook/skills/integration.md" \
    "playbook/skills/ui.md"

# Morgan — UX / UI Designer
# Needs: persona profile, operation card, UX channel routing and UI patterns
bundle "morgan" \
    "docs/TEAM_CHARTER.md" \
    "playbook/personas/morgan.md" \
    "playbook/cards/morgan.md" \
    "playbook/skills/ui.md"

# Casey — QA & Documentation
# Needs: persona profile, operation card, retrospective process, retro template
bundle "casey" \
    "docs/TEAM_CHARTER.md" \
    "playbook/personas/casey.md" \
    "playbook/cards/casey.md" \
    "playbook/process/retrospective.md" \
    "playbook/log-templates/RETRO.md"

# Riley — Pitch & Marketing
# Needs: persona profile, operation card, pitch process guide
bundle "riley" \
    "docs/TEAM_CHARTER.md" \
    "playbook/personas/riley.md" \
    "playbook/cards/riley.md" \
    "playbook/process/pitch.md"

echo ""
echo "Done. Upload each bundle to Claude.ai:"
echo "  Alex   → playbook/personas/bundles/alex.bundle.md"
echo "  Sam    → playbook/personas/bundles/sam.bundle.md"
echo "  Morgan → playbook/personas/bundles/morgan.bundle.md"
echo "  Casey  → playbook/personas/bundles/casey.bundle.md"
echo "  Riley  → playbook/personas/bundles/riley.bundle.md"
echo ""
echo "Then add run-specific docs (ideation/session.md, docs/architecture.md) as separate uploads."
