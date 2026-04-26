# Process: Pitch & HeyGen Video

## Purpose

A 4-minute pitch that wins. Delivered via HeyGen avatar (Kostya's face and voice).
The pitch has three jobs: make judges feel the problem, show the solution working, leave them remembering the story.

## Owner

Riley produces the script. Kostya records it. Both are active pre-hackathon.

## Timing

- **Pre-hackathon:** Sections 1 and 3 scripted and recorded (problem, team story, vision/close)
- **Hackathon night:** Section 2 updated with actual demo screenshots, then recorded (hour 7–7:30)

---

## Pitch Structure

### Section 1 — Problem + Team Story (60 seconds)

The hook. Judges decide whether they care in the first 30 seconds.

Structure:
1. Open with the pain (not the solution, not the technology)
2. Make it personal — someone in that room has this problem
3. Introduce the team meta-story ("we are not a typical hackathon team...")
4. Bridge to the app

### Section 2 — App Demo Narration (90 seconds)

Narrate the demo as it happens on screen. Show the happy path only.

Structure:
1. Show the trigger / entry point (what prompts someone to use this?)
2. Walk through the user action (keep it to 2–3 clicks maximum)
3. The reveal — show the Claude-generated output appearing
4. The "wow moment" — the feature that gets a reaction
5. Close the loop (action taken, result confirmed)

Demo constraints:
- Pre-stage all data — no live typing of long inputs during the demo
- Use realistic, recognisable scenario data
- Show Claude output as visually distinct (as per Morgan's spec)
- The demo runs on the live PDI — Casey must have validated the full flow before recording narration

### Section 3 — Vision + Close (30 seconds)

What this becomes. Why it matters. Leave them with one sentence.

Structure:
1. One sentence on where this goes (next sprint, next quarter)
2. The meta-story payoff ("six AI specialists, one human interface, eight hours")
3. Close — team name, app name, memorable line

---

## HeyGen Setup

**Account:** heygen.com — Creator plan (required for Instant Avatar)

**Avatar:**
- Preferred: Instant Avatar using Kostya's face (2-minute consent video, ~24h processing)
- Fallback: HeyGen stock presenter

**Project naming:** `AXIOM — [App Name] — [Event Name]`

**Script format for HeyGen:**

```
[SECTION 1 — Problem + Team Story]

[AVATAR ACTION: confident, direct eye contact]

Script text here. Written for spoken delivery, not reading.

[PAUSE 1 second]

More script text.

[CUT TO: slide showing the problem statement]

[SECTION 2 — App Demo]

[AVATAR ACTION: engaged, slightly leaning forward]

Narration text synced to demo recording.

[CUT TO: screen recording of app]

[SECTION 3 — Vision + Close]

[AVATAR ACTION: open, direct]

Closing text.

[PAUSE]

"Team AXIOM. Built differently."
```

**Recording order:**
1. Record Section 1 and Section 3 pre-hackathon (these do not depend on the final build)
2. Take screenshots of the live build after Casey validates (hour 6:30)
3. Update Section 2 script with actual demo flow
4. Record Section 2 (hour 7–7:15)
5. Assemble full video in HeyGen (hour 7:15–7:30)

---

## Prompt Templates

### Riley pitch outline prompt
```
You are Riley, Pitch & Marketing for Team AXIOM.

App: [app name]. Problem: [one sentence]. Audience: ServiceNow ecosystem professionals
(admins, architects, POs, developers) at [event name].

Casey has validated the following features as working: [list from Casey's validation log].

The meta-story: this app was designed and built by six AI specialist personas
(Alex, Sam, Morgan, Jordan, Casey, Riley) with one human interface (Kostya).
The process is fully documented. The team story IS part of the pitch.

Write the pitch outline (AXM-06):
- Section 1: Problem + team story (60 sec target)
- Section 2: Demo narration — happy path only, 2-3 user actions (90 sec target)
- Section 3: Vision + close (30 sec target)

Format for HeyGen avatar delivery. Write for spoken voice, not reading.
Every sentence earns its place. Open with the pain, not the technology.
The wow moment in Section 2 is: [the feature that gets a reaction — from Casey's validation log].
```

### Riley script finalisation prompt (night of)
```
You are Riley, Pitch & Marketing for Team AXIOM.

Section 2 of the pitch needs updating. The app is live. Here are the actual screenshots
and demo flow: [describe or paste demo sequence].

Casey has confirmed these features work: [final list].
These features were deferred: [deferred list — do NOT pitch these].

Rewrite Section 2 to match the actual demo. Keep the same structure, match the timing.
```

---

## Scoring for Pitch Quality

Before recording, Riley should evaluate against:

| Criterion | Check |
|---|---|
| Opens with problem, not technology | Yes / No |
| Problem is personally relatable to the audience | Yes / No |
| Meta-story is present and not forced | Yes / No |
| Demo shows the app working, not slides about the app | Yes / No |
| Wow moment is clear and lands within 2 minutes | Yes / No |
| Only validated features are pitched | Yes / No |
| Close is memorable (one sentence Kostya can deliver with conviction) | Yes / No |
| Total runtime under 4:00 | Yes / No |
