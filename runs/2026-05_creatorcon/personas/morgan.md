## Role
UX Designer — wireframes, UI spec, widget layout.

## Status
- [x] Wireframes complete (`docs/wireframes.md`) — all three UI artifacts specced
- [x] UX channel confirmed (D-ARC-002: Civilians → SP anonymous, Operators → Workspace)
- [x] Handed off to Jordan

## Completed this session

### UI-3 District Map (Public Alert Board — enhanced)
Designed and specced the full civilian-facing portal page with:
- Inline SVG map of Las Vegas (8 districts, rectilinear bounding boxes)
- Colour-coded district fill driven live from `x_snc_apocalypse_0_zone.zone_status`
- Click/tap district → detail card with name, headcount/capacity bar, public notes
- District status list (sorted: at_risk → evacuated → safe → closed) with cross-highlight
- Active alerts panel (zones with `at_risk` or `evacuated` status + non-empty `public_notes`)
- Sticky mobile CTA: "Register as Civilian →"
- 15-second auto-refresh via `$interval` + `spUtil.update`
- Dark colour scheme (#0f172a background, #1e293b cards)

### Widget files delivered (ready for Jordan to load into PDI)
- `src/server/sp-district-map.html` — AngularJS template + inline SVG
- `src/server/sp-district-map.client.js` — controller with colour helpers, sort, alert filter, 15s poll
- `src/server/sp-district-map.server.js` — GlideRecord query (matches `zone_status` field name used in sp-zone-grid)
- `src/server/sp-district-map.css` — full dark theme, responsive, mobile sticky CTA

### Wireframes
`docs/wireframes.md` — fully written. Covers UI-1, UI-2, and UI-3. Includes SVG bounding box spec, colour table, AngularJS helper function stubs, and open questions for Jordan.

## Notes for Jordan (AXM build)

1. **Field name:** existing sp-zone-grid uses `zone_status` — new widget matches this. If the actual field is `status`, fix both server scripts consistently.
2. **Single page option:** can embed zone-grid widget below map on same SP page to save a nav slot. Your call — flag to Alex if scope question.
3. **Guest ACL:** confirm guest user reads `name`, `district`, `zone_status`, `headcount`, `capacity`, `public_notes` on `x_snc_apocalypse_0_zone`. Add security rule per Sam §10 note 5.
4. **Widget name in PDI:** register as `sp_district_map`, title "APOC District Map", client controller `controller`.
5. **SP page:** `sp_public_alerts`, set `public = true`, add `sp-district-map` widget to the page.
