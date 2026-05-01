## Completed
- [AXM-DR-08] App scaffold — x_9274_kudos scope, build/deploy cycle clean
- [AXM-25] BUILD Row 1 — Table x_9274_kudos_entry — deployed, manifest ticked
- [AXM-25] BUILD Row 2 — KudosService Script Include — deployed (si0)
- [AXM-25] BUILD Row 3 — ClaudeDigest Script Include — deployed (si1)
- [AXM-25] BUILD Row 5 — Kudos Notification Flow — deployed, activated (fl0) — logs category pill on insert
- [AXM-25] BUILD Row 6 — Kudos Digest Flow — deployed (fl1) — manual trigger, lookUpRecords + log step
- [AXM-25] BUILD Row 7 — Kudos Submit Widget — deployed (w0)
- [AXM-25] BUILD Row 8 — Kudos Feed Widget — deployed (w1)

## In Progress
- Nothing — full manifest deployed

## Blockers
- Row 4 (Claude REST integration in digest flow): needs Kostya to set up `Claude API` credential alias in PDI Credential Store. The digest flow currently uses lookUpRecords + log as a placeholder. Once credential is set up, wire the IntegrationHub REST step manually in Flow Designer or extend kudos_digest.now.ts.

## Open Items for Hackathon Night
- Wire ClaudeDigest.generateDigest() into the digest flow (needs typed RunScript or IH REST step)
- Test KudosService.sendNotification() via Scripts-Background to confirm platform event fires
- Activate digest flow manually (no trigger) — Kostya runs from Flow Designer
- Add people-picker to Submit Widget client script (currently uses raw sys_id field)
