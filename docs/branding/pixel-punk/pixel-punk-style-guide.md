# AXIOM — Pixel-punk Style Guide
**Team:** AXIOM | **Event:** ServiceNow CreatorCon Hackathon 2026
**Prepared by:** Morgan — UX/UI Designer
**Status:** v1.0 — locked
**Repo:** `docs/branding/pixel-punk/STYLE-GUIDE.md`

---

## How to use this document

Each persona section contains two layers:

- **Generation card** — a structured, copy-paste prompt block. Use this directly
  in Midjourney, Adobe Firefly, DALL-E 3, or any image AI. Feed the output into
  HeyGen as a Talking Photo.
- **Deep notes** — extended character detail for pitch decks, social assets,
  in-app UI, and any material beyond the talking avatar.

Always start from the **Global System Block** below. Append the persona card to it.
Never generate a character without the system block — it is the glue that holds the
team's visual identity together.

---

## Part 1 — Global System Block

### 1.1 Master style string
Paste this at the **start** of every image generation prompt:

```
Pixar 3D animation character bust portrait, pixel-punk style,
warm expressive Pixar face with large eyes, cyberpunk world setting,
subsurface scattering skin, soft warm key light from upper-left,
cool teal-cyan rim light from right, dark deep-charcoal background,
neon violet and teal LED strip lighting, holographic UI elements
softly defocused in background, shallow depth of field,
head-and-shoulders crop, slight three-quarter angle, facing camera,
photorealistic Pixar render quality, 8k, sharp face, cinematic
```

### 1.2 Shared negative / exclusions
Add to every generation (Midjourney `--no`, Firefly exclusion field):

```
realistic human photograph, anime, cartoon flat style, full body shot,
bright white background, dark underexposed face, blurry face, horror,
dystopian grime, excessive gore, photobashed, low quality, watermark
```

### 1.3 Background scene — "AXIOM War Room"
All six characters exist in the same world. Reference image concept:

```
Dark open-plan hackathon floor, Las Vegas convention centre, deep night.
Background elements: blurred large-format displays showing ServiceNow UI
and code editors, dark glass desk surfaces with keyboard reflections,
violet and teal LED strip underlighting along desk edges, scattered
energy drink cans, sticky notes on glass. Atmosphere: focused, electric,
alive. No windows — this room has no outside world.
```

### 1.4 Neon palette — character accent mapping
Each persona has one primary neon accent visible in their outfit trim,
prop glow, and background LED contribution.

| Persona | Accent neon | Hex | Used on |
|---|---|---|---|
| Alex | Electric violet | `#7F77DD` | Blazer piping, glasses HUD tint, pin glow |
| Sam | Ice blue | `#378ADD` | Fleece trace lines, neural port glow |
| Morgan | Teal | `#1D9E75` | Hair underlayer, stylus tip, Figma screen |
| Jordan | Amber | `#EF9F27` | Keyboard RGB, hoodie logo glow, stickers |
| Casey | Cyan-white | `#85B7EB` | Clipboard hologram, pen tips, glasses lens |
| Riley | Deep violet | `#534AB7` | Shirt shimmer, clicker glow, slide reflections |

### 1.5 Shared technical spec for HeyGen
| Parameter | Value |
|---|---|
| Output resolution | 1024 × 1024 px minimum |
| Crop | Bust — top of head to mid-chest |
| Face angle | Slight 3/4 (5–15° from camera) |
| Background for HeyGen upload | Flat dark `#1A1A1A` or transparent |
| HeyGen avatar type | Talking Photo |
| HeyGen background | Upload "AXIOM War Room" scene (see `/assets/bg-warroom.png`) |

---

## Part 2 — Persona Generation Cards

---

### ALEX — Product Owner

#### Generation card

```
STYLE    [paste global system block here]
FACE     Black woman, mid-30s, warm medium-brown skin, broad soft oval face,
         calm authoritative expression, slight knowing smile, large dark-brown
         expressive eyes, square tortoiseshell glasses with faint violet HUD
         data reflected in lenses
HAIR     Large natural afro puff, perfect sphere silhouette, deep near-black
         brown, a few loose coils at temples
OUTFIT   Dark navy unstructured blazer, cyberpunk edition — thin violet neon
         piping runs along both lapels, small glowing bullseye enamel pin
         on left lapel, crisp white fitted tee underneath, AXIOM violet lanyard
PROP     Black marker held loosely in right hand — marker cap glows faint violet
MOOD     Still, composed, three steps ahead. Eyes say she already knows.
ACCENT   Electric violet #7F77DD
AVOID    Aggressive expression, heavy armour, excessive chrome, dark skin tone
```

#### Deep notes
Alex's Pixar shape is circle-dominant — her afro puff is the largest, most
architecturally perfect element in the frame and must read clearly even at
thumbnail size. The tortoiseshell glasses are essential to her silhouette;
without them she loses her signature look. The violet HUD reflection in the
lenses is a Pixel-punk detail that ties her to the world without disrupting
her warmth. For pitch deck use, Alex is the "cover character" — she represents
the team as a whole.

**Colour signature:** Navy + Electric violet
**Personality encoded in design:** Circular shapes = warm authority. Nothing
sharp or aggressive. She leads by clarity, not force.

---

### SAM — Platform Architect

#### Generation card

```
STYLE    [paste global system block here]
FACE     Non-binary person, late 30s, light olive skin, rectangular face with
         slight angular jaw, thoughtful slightly-narrowed eyes mid-calculation,
         one eyebrow fractionally higher than the other — perpetual assessment
HAIR     Short on sides, textured medium-length on top, deliberately dishevelled,
         single dramatic white-grey streak at right temple, warm mid-brown base
OUTFIT   Dark charcoal zip-neck technical fleece, cyberpunk edition — faint
         blue circuit-trace pattern runs along left sleeve, barely visible
         until light catches it. AXIOM lanyard, wireless earbuds around neck
         one slightly askew. Small neural data port visible at right temple —
         flush, chrome, minimal, almost easy to miss.
PROP     Worn annotated Moleskine notebook tucked under left arm, cover battered,
         colour-coded sticky-note tabs protruding, one page open showing
         hand-drawn architecture diagram with blue ink annotations
MOOD     Quiet intensity. Already three abstractions deep. Not unfriendly —
         just processing.
ACCENT   Ice blue #378ADD
AVOID    Angry expression, heavy augmentation, cyborg aesthetic, messy background
         fighting the character
```

#### Deep notes
Sam's shape language is rectangular and deliberate — strong jaw, structured
silhouette. The white temple streak is a Pixar-perfect visual shortcut for
"experienced and has earned it." The neural port is key to the Pixel-punk
upgrade but must stay subtle — Sam is not a full cyborg, just a person who
lives close to the machine. The circuit-trace sleeve is an easter egg; it
rewards closer inspection. For architecture diagrams and technical content,
Sam is the face to use.

**Colour signature:** Steel blue + Slate charcoal
**Personality encoded in design:** Rectangular shapes = structural, reliable.
One raised eyebrow = always evaluating. Nothing is wasted.

---

### MORGAN — UX/UI Designer

#### Generation card

```
STYLE    [paste global system block here]
FACE     East Asian woman, late 20s, fair-to-medium skin with warm undertone,
         smooth high-forehead oval face, very large expressive animated eyes —
         the widest on the team, slight upward angle suggesting mid-idea
         excitement, eyebrows raised in animated curiosity
HAIR     Bold asymmetric bob, dark near-black base, vibrant teal underglow
         (#1D9E75) visible on the longer left side and tips, shorter right
         side tucked behind ear, moves with energy even in still image
OUTFIT   Oversized off-white linen bomber jacket, cyberpunk edition — holographic
         teal brushstroke paint patterns on back and left sleeve that shimmer
         when light hits. Graphic tee underneath with abstract grid geometry.
         AXIOM lanyard. Chunky amber resin ring on right hand.
PROP     Stylus tucked behind left ear, tip glowing teal. iPad Pro in left hand
         showing a vibrant Figma canvas — colours visible, components readable
         at distance, screen has faint teal glow spilling onto her hand.
MOOD     Mid-idea. The expression of "oh wait, what if—" frozen at its best
         moment. Eyes bright, slight open mouth, one hand beginning to gesture.
ACCENT   Teal #1D9E75
AVOID    Closed neutral expression, dark heavy clothing, generic "Asian" styling,
         minimalist aesthetic — Morgan is maximally expressive
```

#### Deep notes
Morgan has the most visually complex character design on the team, which is
intentional — she is the designer and her appearance embodies her craft. The
asymmetric bob is the highest-variance element in generation; expect to iterate
3–4 times to get the teal underglow reading correctly. Generate Morgan first
and lock her as the style reference image for the rest of the team. Her Figma
canvas in the background is a world-building detail — if legible, it should
show abstract component layouts, not realistic UI. For any design-related
content, social posts about craft, or UX documentation, Morgan is the face.

**Colour signature:** Teal + Off-white
**Personality encoded in design:** Flowing asymmetric shapes = creative,
dynamic, unpredictable. Largest eyes = most emotionally expressive. Always
mid-gesture.

---

### JORDAN — Lead Developer

#### Generation card

```
STYLE    [paste global system block here]
FACE     Black man, early 30s, deep dark-brown skin, wide strong square jaw,
         clean confident half-grin — focused flow state enjoyment, slightly
         raised chin, eyes in relaxed squint of someone who's seen the code
         and knows it works
HAIR     Very short tight fade, clean geometric lines, near-black, almost
         architectural in precision
OUTFIT   Premium heavyweight charcoal hoodie, cyberpunk edition — AXIOM wordmark
         on lower-left chest glows faint amber when viewed straight-on. Hood
         down. Cuffs slightly pushed up. Dark jeans. AXIOM lanyard.
PROP     Mechanical keyboard partially in frame at desk edge — RGB backlighting
         in amber/orange. Laptop lid visible at right edge, densely covered in
         stickers: ServiceNow logo, small rubber duck, lightning bolt, one
         unreadably tiny sticker that rewards zooming in. Keyboard and laptop
         establish the workstation.
MOOD     In flow. Half-grin. The expression of someone who finds hard problems
         enjoyable. Not showing off — genuinely delighted to be building.
ACCENT   Amber #EF9F27
AVOID    Aggressive expression, military aesthetic, exaggerated musculature,
         clean desk with no props
```

#### Deep notes
Jordan's silhouette is the clearest and most legible on the team — tight fade,
strong jaw, hoodie. He reads instantly at any size. The sticker laptop is a
character-defining detail and must survive art direction; if a generation drops
the stickers, regenerate. The AXIOM logo glow on the hoodie is the Pixel-punk
upgrade — subtle at distance, Easter egg close up. For any code demos, build
updates, or developer-facing content, Jordan is the face. The reactive avatar
moment Riley proposed (persona reacts when the app does something smart) will
use Jordan's avatar more than any other — make sure his expression range covers
"satisfied" and "pumped."

**Colour signature:** Charcoal + Amber
**Personality encoded in design:** Square jaw, rectangular silhouette = dependable
builder. Clean fade = precision. Stickers = the human chaos underneath.

---

### CASEY — QA & Documentation

#### Generation card

```
STYLE    [paste global system block here]
FACE     Non-binary person, late 20s, pale skin with light freckles across
         nose and cheeks, slightly narrower oval face tapering to a soft point
         at chin — precision encoded in geometry. Alert warm expression, genuine
         smile with a slight evaluating quality, one eyebrow fractionally higher
         — the "I found something" brow.
HAIR     Short copper-auburn pixie cut, jagged asymmetric texture, rich warm
         tone, slight darker root. Distinctive silhouette at any size.
OUTFIT   Olive-green bomber jacket, cyberpunk edition — thin cyan-white neon
         trim runs along collar and cuffs. Crisp black roll-neck underneath.
         AXIOM lanyard. Wire-frame round glasses with cyan-tinted lenses that
         glow faintly — lenses show faint diagnostic HUD overlays.
PROP     Three severity-coded gel pens clipped in jacket breast pocket —
         red, amber, cyan, visible tips glowing their respective colours.
         Holographic clipboard in right hand: translucent blue-white panel
         floating a checklist interface, some boxes checked in green.
MOOD     Warm but evaluating. The look of genuine warmth that is also
         simultaneously reading for edge cases. Trust but verify, embodied.
ACCENT   Cyan-white #85B7EB
AVOID    Cold or hostile expression, overly dark clothing, heavy augmentation,
         cluttered or chaotic styling — Casey is ordered and precise
```

#### Deep notes
Casey's copper pixie cut is the most immediately distinctive hair on the team
after Morgan's bob — it reads at thumbnail as a warm amber blaze. The holographic
clipboard is the central Pixel-punk upgrade; it should look like a real UI
interface, not a magic tablet. The freckles are important — they add warmth and
break the risk of Casey reading as cold/robotic given the precise aesthetic.
The round wire-frame glasses with cyan HUD tint are the second-most important
detail after the hair. For documentation pages, test reports, release notes, and
any content about quality or process, Casey is the face.

**Colour signature:** Copper + Cyan
**Personality encoded in design:** Slightly narrowing face = precision. One raised
eyebrow = perpetual evaluation. Colour-coded pens = systematic, not chaotic.

---

### RILEY — Pitch & Marketing

#### Generation card

```
STYLE    [paste global system block here]
FACE     Man, early 30s, medium-light skin with warm golden undertone, wide warm
         oval face with slightly prominent cheekbones — the widest, most open
         face on the team. Very expressive eyes that crinkle at corners even when
         not smiling — they are always smiling. High-wattage open genuine smile,
         teeth visible, the expression of someone who fully believes the next
         sentence will change your mind.
HAIR     Wavy medium-length warm dark-brown hair swept back loosely —
         slight windswept quality suggesting the energy creates its own breeze.
         Wave detail catches the light.
OUTFIT   Deep violet camp-collar shirt, cyberpunk edition — fabric has a subtle
         holographic shimmer that shifts between violet and indigo as light moves.
         Top two buttons open. Slim dark chinos. AXIOM lanyard worn like he owns
         it. Fitted jacket draped over the chair just behind him — almost but
         not quite on.
PROP     Wireless presentation clicker in right hand, deep-violet glow active
         on the button face — he's mid-presentation even standing still.
         Faint slide projection light catches the side of his face from off-frame.
MOOD     Expansive, magnetic. Hand raised mid-gesture, palm open. The expression
         of someone who believes completely in what they're saying and wants you
         to feel it too.
ACCENT   Deep violet #534AB7
AVOID    Salesman energy, stiff posture, closed gesture, dark or moody lighting
         — Riley is the warmest light in the room
```

#### Deep notes
Riley is the most naturally photogenic character for social content and pitch
video — his wide face and open expression maximise HeyGen lip-sync legibility.
The holographic shirt shimmer is the subtlest Pixel-punk upgrade on the team,
which is right — Riley is the human bridge between the tech world and the
audience. The draped jacket is a recurring prop that signals readiness without
formality; preserve it if visible. For pitch video, hype content, social posts,
and any first-impression material, Riley is the face. His reactive avatar moment
in the demo should be the "celebration" reaction — when the app succeeds, Riley
is the one who reacts with genuine joy.

**Colour signature:** Deep violet + Warm gold
**Personality encoded in design:** Widest oval face = most approachable, most
open. Eyes always crinkled = permanent warmth. Mid-gesture = the story never
stops.

---

## Part 3 — Production Checklist

```
[ ] Morgan generated first — style anchor approved by team
[ ] Global system block used for every character
[ ] Each character generated at 1024×1024 minimum
[ ] Bust crop applied (head to mid-chest)
[ ] Background: flat #1A1A1A for HeyGen upload
[ ] Signature prop visible and readable in final image
[ ] Neon accent colour present in outfit / prop
[ ] Face well-lit, no dark underexposure
[ ] Generation params logged (prompt + model + seed) → Casey /docs/branding/pixel-punk/
[ ] Approved assets committed to repo before use in deck or demo
```

---

## Part 4 — Asset Naming Convention

```
axiom-[name]-pixelpunk-v[n].png          master approved file
axiom-[name]-pixelpunk-v[n]-heygen.png   HeyGen-ready (dark bg, bust crop)
axiom-[name]-pixelpunk-v[n]-deck.png     pitch deck (transparent bg)
axiom-[name]-pixelpunk-v[n]-social.png   social square crop 1:1
```

Example: `axiom-morgan-pixelpunk-v1-heygen.png`

---

*Style guide prepared by Morgan | AXIOM | CreatorCon Hackathon 2026*
*Handover: Casey documents all approved generations under `/docs/branding/pixel-punk/`*
*Next action: Generate Morgan v1 as style anchor → team review → batch remaining five*
