# kneehab v14.0 — Clock to Tissue

**Date:** 2026-08-21
**Type:** Major restructure (v13.44 → v14.0)
**One line:** The program was organised by time of day; its foundations are organised by tissue. v14.0 re-sorts it, dissolves the Daily Warm-Up, and gives every surviving item either a progression or a reading.

---

## The problem

The Daily Warm-Up had gone stale, and the staleness was an accurate reading of the block rather than a motivation failure. Three things were true at once:

1. **The label was wrong by roughly a factor of two.** The per-item times in `W` summed to ~18 minutes but counted work time only — no bench trip for the Copenhagen, no side switch, no walking to find the bell. Twelve items at 60–90s of setup overhead apiece put the real figure closer to 30–40 minutes. A Strength day never cost what the app implied.
2. **Nothing in it progressed.** Every dose was fixed — `1 × 8 each side`, `2 × 20s`, `30–45s` — and unchanged since v13.0. `S` has a mechanic (2 working sets, 2 RIR, clean → +4 kg). `W` had none.
3. **It was deliberately sub-threshold, and said so.** The v13.15 note calculated the Suitcase Carry at 16 kg as ~30 N·m against a side plank's ~200, called it *"roughly 10–15% of max… the activation slot."*

On top of which, **v13.43 had already withdrawn the clinical rationale that made it daily.** Glute med tested symmetric on isolated abduction, side-lying endurance, and 30s single-leg stance; the four right-biased items reverted to maintenance. The reason for the frequency was retired. The frequency was not.

A daily, fixed-dose, deliberately sub-maximal block whose primary justification had been withdrawn goes stale on schedule.

---

## The principle change

**Organise by tissue and contraction type, not by clock time.** The program's entire intellectual foundation is tissue-typed — Baar is tendon, Bellemans is cartilage, Mitchell is connective tissue, San Millán is mitochondria — while its *structure* was time-of-day. That mismatch is what allowed three quad isometrics to end up in three different blocks.

| Tissue | Responds to | Recovery cost | Wants | Lives in |
|---|---|---|---|---|
| **Muscle** | Mechanical tension, volume, proximity to failure | 48–72 h | 2–3×/week per pattern | `S` |
| **Tendon** | Strain magnitude × duration; ~10 min saturates, then ~6 h refractory (Baar) | ≈ none | **Daily, or twice daily** | Opener + `N` |
| **Bone** | Strain *rate* and novelty; saturates ~40–50 impacts, ~8 h to resensitise | Low | Short bouts split across the day | `N` — rope + ruck |
| **Cartilage** | Cyclic compression — avascular, fed by fluid exchange (Bellemans) | None | Continuous / incidental | Rucking, walking, riding |

These are not four intensities of one thing. **Only muscle needs rest days** — that single fact reorganises everything downstream.

---

## What changed

### `W` dissolves → the Opener

Not a shrunken warm-up. A tendon-and-joint block that returns a daily reading, because you cannot hold isometrics and pass through end range without learning how the tissue is. **Five items, 7 of 7 days, equipment-light (a box and a bar).** On Strength days, add RKC Plank and go straight into the session — there is no second block to start.

| # | Item | What it reads |
|---|---|---|
| 1 | **Sun Salutation A** — 2 rounds | Overhead shoulder, posterior chain, thoracic, anterior core, systemic feel. Also the warmer, which is why it is first. |
| 2 | **90/90 Lift-Offs** *(new)* | **The transverse plane** — active hip ER (front leg) and IR (back leg) at end range. Nothing else in the program reads rotation. |
| 3 | **Squat to Box** *(new)* | The knee, at fixed depth. Terminal flexion, **terminal extension** (an effusing knee loses lockout before it hurts), catch, shift. |
| 4 | **ISO Step-Up** — 3 × 30s/side | The tendon dose, plus left/right tolerance asymmetry. Same box as #3 — one station. |
| 5 | **Dead Hang** — 30s | Shoulder capsule and elbow extensor origin. Sensor *and* loading. |
| + | **RKC Plank** — Strength days only | Bracing primer immediately before load. |

### Item disposition

| Item | From → To | Reasoning |
|---|---|---|
| Sun Salutation A | `W` → Opener | Four readings in one movement — highest yield per minute in the program |
| **ISO Step-Up** | **`S` → Opener** | A Baar isometric was at the front of a hypertrophy session because the clock put it there. Tendon wants frequency, not a session slot. Unilateral, so it also reads asymmetry. |
| RKC Plank | `W` → Opener (S days) | The only item appended on Strength days |
| **Suitcase Carry** | `W` → `S`, **heavy** | The headline move. Restores the loaded lateral-core work v13.2 deleted; fixes the 10–15%-of-max problem the block's own note had diagnosed. No ceiling. |
| Copenhagen Plank | `W` → `S` | Isometric, but it *fatigues* → muscle bucket. Now on a short-lever → long-lever ladder. Also off a cold 6am adductor origin. |
| Hip Flexor (L-Sit / HKR) | `W` → `S` | Loaded anterior core — belongs beside the Ab Wheel |
| WLYT | `W` → `S` | Free as a filler between press and pull sets |
| Mǎbù | `W` → `N` | **Replaces SL Wall Sit** in the Isometric Circuit — better item (adductors at length, isometric foot/ankle), and it resolves the duplicate quad isometric |
| ~~Shin-Box Get-Ups~~ | Cut | Superseded by 90/90 Lift-Offs — same end ranges, actively loaded, and it returns a reading |
| ~~Bird Dog~~ | Cut | Fixed dose for eight months; rationale withdrawn v13.43 |
| ~~Half-Kneeling Rotation~~ | Cut | Day R's Thoracic Stiff category does it at longer holds |
| ~~Kneeling Ankle DF~~ | Cut | DF measured 5in knee-to-wall, ruled out as a limiter (v13.43) |
| ~~Standing Hip Abduction~~ | Cut | Thread closed; and ISO Step-Up is a heavier weightbearing glute-med isometric than a banded set |

### `S` — now the muscle block, and only that

17 items. Everything in it fatigues and progresses. Session order changed: **Plyo Primer now opens**, since the isometric that used to precede it per Baar has moved to the morning — the isometric-before-impact sequencing is now preserved *across the day* rather than inside the session.

**New grip-stack watch.** A heavier Suitcase Carry plus Eccentric Pull-Up plus Ring Row, on top of the Opener's daily Dead Hang, is four exposures converging on the common extensor origin. If the elbow reports on the morning check, look here first — strap the carry, or cap it at what grip tolerates. The lateral-core demand should be the limiter, never the forearm.

### `C` — no Opener requirement, and rucking promoted

**The Opener requirement before Cardio is deleted.** The first ten minutes of a ride, ruck or ski *is* the warm-up — progressive, specific, self-regulating. Requiring floor work first was never defensible.

**Rucking becomes a named modality** at its real load (15–20% bodyweight, not the "optional 10–15 lb backpack" the program had recorded). It was already routine — the mirror image of the v13.43 discovery, a practice running outside the program's accounting, except this one is *good*. It is the only modality that loads three tissues at once:

- **Cartilage** — cyclic compression at higher amplitude than unloaded walking, sustained over thousands of cycles. Probably the best cartilage stimulus in the program.
- **Bone** — strain magnitude and volume. **Complementary to the rope, not redundant**: rope supplies strain *rate*.
- **Zone 2** — counts toward the 180 min/week total.

**It also validates the framework.** Two loaded knee practices, opposite verdicts — deep squat sitting is loaded, *static*, *end range*, long duration and provoked the 2026-08-13 event; rucking is loaded, *cyclic*, *mid range*, long duration and feeds the tissue. Same joint, no contradiction: cartilage is viscoelastic, so cyclic loading pumps fluid in and out while sustained compression expresses it out and keeps it out. The v13.43 reasoning holding up under a second, independent test case.

**Regression ladder replaces "skip if sore"** — the old rule was binary and over-conservative in one direction:

| Signal | Response |
|---|---|
| Muscle soreness (diffuse, sore to press, better after warm-up) | **Ruck as normal.** Low-load cyclic movement is treatment for DOMS. |
| Joint signal (stiffness, effusion, joint line) | **Drop the pack, keep the walk.** Never skip outright — that surrenders the fluid exchange the joint wants. |
| Sharp / anterolateral | Stop. Route to the 24-hour rule. |

Ladder: *full load → lighter → no pack → shorter → stop.*
**Watch the straps** — a pack loads the upper trapezius and anterior shoulder for the entire duration, and shoulder is a named site.

### Collagen timing — unchanged, but now explicit

One dose, afternoon, in `N`. **The Opener is an unamplified second loading window.** Mechanical loading is the primary signal and raises collagen synthesis on its own; the collagen dose is what roughly doubles it (Shaw 2017). A morning dose is blocked by the existing protocol — inside the eating window, 2 h clear of protein, and 6–7am is mid-fast.

**6–7am to a ~3:15pm load is an ~8 h gap, which clears tendon's ~6 h refractory.** Two loading bouts, one amplified. If that gap ever compresses below 6 h, the Opener stays a sensor but stops being a second bout.

---

## Key rulings

**ISO Step-Up: the free foot comes OFF the floor.** Two reasons. *Strain* — full bodyweight on one leg is the load available without equipment. *Standardisation, the stronger reason* — a reading needs a fixed reference; regulate weight through the free foot and a worse-feeling hold could mean the knee is worse or that you leaned harder. Two moving parts, no signal. Balance is the real confound, not load: fix it with a fingertip on a wall. **The foot being off is also what makes the stance-hip glute-med demand real**, which is why this replaces banded Standing Hip Abduction rather than sitting alongside it.

Regulate intensity with **knee angle** (primary dial, and the safety dial — within a step-up's usable range, deeper means more patellofemoral stress) and **added load**. Never the free foot. Both run on the **ratchet**: hold constant until a full clean cycle passes the 24-hour check, then step up.

**Squat to Box, not a heel-elevated full-range squat.** Heel elevation is *ankle*-friendly, not knee-friendly — the upright torso it permits shifts load anteriorly and raises both knee flexion angle and patellofemoral demand, making it the most knee-loading squat variant available. DF measured 5in and was ruled out as a limiter. And v13.43 concluded that *gating depth inside the session is meaningless while uncapped end-range compression accumulates outside it* — a daily full-range squat is that exposure through the front door. It is also a worse sensor, because "full range" is a moving reference. **Depth is earned on the existing ratchet, not taken daily.**

**Copenhagen is muscle, not tendon.** The sorting test is *recovery cost*, not contraction type. It fatigues → `S`. And the adductor longus origin is a classic strain site, which makes it the one exercise in the program with meaningful acute strain risk when done cold at 6am.

**90/90 Lift-Offs: knee-silence rule.** The hip should feel the work and the knee should feel nothing — watch the *back* leg especially, which is knee flexion plus hip internal rotation, on the knee with the anterolateral history. Always performed *after* Sun Salute A, never on a cold hip.

---

## Deferred to v14.1

1. **The router** — morning Opener reading → the day's block. Three soreness signals (muscle / tendon / joint) crossed with what the last 24–48 h actually loaded. Better designed against a few weeks of real readings than against guesses.
2. **Activity picker for `C`** — two axes (did it load the legs eccentrically × what is left) giving four prescriptions, built on the pick-a-category pattern `R` already uses. Rucking is the obvious prescription for the *legs-cooked-but-time-available* quadrant.
3. **Explicit progression mechanics** for the four items arriving in `S`.
4. **Box-height ratchet restatement** — it lived in `S`; the daily Squat to Box now reads against the same box.
5. **Formal reactive rotation** — what the fixed `S → C → S → C → S → C → R` cycle becomes when the calendar stops driving it.

---

## Build items — measure these

- **ISO Step-Up hold angle has never been specified in this program**, and angle is the single biggest determinant of what the exercise is. Measure what is currently being held and record it — that becomes the ratchet's zero.
- **Time one actual old-`W` session** if a check on the diagnosis is wanted. The 30–40 min figure is an estimate, and the case for the restructure scaled off it.

## Notes on this version

- **No time estimates anywhere in the program.** Per-item minute labels are what produced the 18-vs-35 error in the first place; timing is analysis, not prescription. `S` and Opener steps are numbered by sequence position instead. Cardio duration *targets* (180 min/week) remain, because those are prescriptions rather than estimates.
- **Block key `W` retained** in the JS for the Opener — the nav uses emoji rather than letters, so the key is not user-visible and changing it would touch nav, hub and render wiring for no benefit.
- **Mǎbù lost its Reference-hub card** when `src-warmup` was rewritten. Its inline description in `N` is complete, and `N` items uniformly lack hub cards (there is no `src-collagen` pane), so this is consistent rather than a regression.
- Unchanged: `R`, `D` (including the capped Deep Squat Sitting from v13.43), 2 working sets / 2 RIR terminators (v13.4), right-side gating on Step Down and Split Squat, the box-capped depth gate and 24-hour response rule (v13.41–44).

---

## v14.0 follow-up — the timer feature is removed

Timers are not used. The whole feature is gone rather than partly gone:

- **30 `timer:` fields** across `R` (22), `N` (6) and `D` (1), plus the button `renderBlock` emitted for them
- **The Timer tab** — one of three top-level tabs. Its presets advertised three things the program no longer has: the Bellemans bike protocol (dropped v13.07), Single-Leg Wall Sit (removed v14.0), and a Wall Sit Tracker for an exercise that exists nowhere in the program. It was not merely unused; it was actively wrong.
- **The countdown modal** that `launchTimer` opened, which became orphaned once the buttons went
- **The supporting JS** — `tSet` / `tStartPause` / `tReset` / `tUpdateFace`, the whole Wall Sit Tracker (`wsNext` / `wsStartHold` / `wsStartRest` / `wsReset` / `wsRenderDots`), `launchTimer`, and the `tModal*` set
- **The CSS** — `.timer-box`, `.timer-face`, `.timer-btns`, `.timer-note`, `.preset-grid`, `.tpre`, `.ws-dot`, `#wsFace`, `.sde-timer-btn`, and all `.tmodal-*` rules

**Kept:** the `.tbtn` button rules, which live inside the old TIMER CSS section but are also used by the metronome — that section is retitled `SHARED BUTTONS`. The metronome is a separate feature and is untouched.

`index.html` drops from 3386 to 2963 lines. Nav goes from three tabs to two (Home, Exercises) plus More.

**Verification:** the removal script asserts eleven invariants — three tab buttons survive, all pages present, `BLOCKS` intact with six keys, metronome wired, no timer residue — and refuses to write unless all pass. It caught one over-deletion (a boundary walk that would have taken the tab bar) before anything was saved. After writing: `node --check` passes, all six blocks render clean with zero timers and zero `undefined`, and no dangling handler references remain.

## v14.0 follow-up — the metronome is removed

The floating 30 BPM pill and everything behind it: the widget, the expandable panel (BPM adjusters, TAP tempo, tempo presets, beat selector, dot display), all `metro*` JS, and the `.metro-*` CSS.

`.tbtn` goes with it — the `SHARED BUTTONS` header created during the timer removal existed only because the metronome still used those rules. Nothing else did, so it is gone too.

`index.html`: 2964 → 2694 lines. Combined with the timer removal, the file is down from **3386 to 2694 lines** — about 20% smaller — with no change to any programming content.

---

# v14.1 — anchor + complement, and two corrections

## The Collagen Block: the window is an amplifier, not a gate

**Correction 1 — the "10 minutes saturates" rule is per *tissue*, not per person.** The old note said loading only needs ~10 min and more does not increase synthesis. True of the tissue you just loaded — its cells stop responding for roughly six hours. Not true across tissues: the amino-acid pool from the dose is **systemic**, and any tissue that gets a mechanical signal can use it. Loading the patellar tendon does nothing to saturate the hip capsule, the shoulder, or the plantar fascia.

**So the way to get more out of one dose is more tissues, never more minutes.**

**Correction 2 — do not let the window gate the loading.** Mechanical loading raises collagen synthesis on its own; the dose roughly doubles it. Missing the timing costs the amplification, not the session, and skipping because the timing slipped is strictly worse. The program has made this mistake once already — v13.07 dropped the rigid Bellemans bike protocol as *"too onerous, never followed."*

The instruction inverts: **you are loading today anyway — when convenient, time the collagen so the loading lands 45–60 min after. When it isn't, load anyway.**

## Anchor + complement replaces "pick one of five"

| | Options | Why |
|---|---|---|
| **Anchor** — pick **one** | Jump Rope *(default)* · Isometric Circuit · Ruck | All load lower-limb tendon. Two of them is the same tissue twice — no extra synthesis, and for rope, real impact cost for nothing. |
| **Complement** — optional | **Yoga Holds** *(default)* · Easy Movement | Loads tissue the anchor misses, so it genuinely adds. |

**Default pairing: Rope + Yoga Holds** — near-zero overlap, roughly double the coverage. Run them **back to back, not spread across the afternoon**: hydrolysed collagen peaks around 45–60 min and washes out over hours, so a later second bout runs on a thinner pool.

**Yoga Holds is close to mandatory rather than optional** — it is the only item in the block that loads anything above the waist (shoulder capsule and lat fascia in Child's Pose with Reach). Everything else is legs, and shoulder and elbow are named sites.

**Window-independent, listed for convenience only:** Ruck and Easy Movement. Cartilage is fed by cyclic fluid exchange, not amino acids, and has no refractory period, so it never competes. The *bone* half of jump rope is likewise strain-rate driven and indifferent to collagen.

## The overlap rules

> **One anchor per window.**
> **Add a complement freely** — different tissue, so it adds.
> **A different window 6h+ away is NOT overlap** — the Opener (~06:30) and this block (~15:15) are ~8h apart, so they are two legitimate bouts on the same tissue. The Opener is unamplified; this one isn't.
> **Cartilage work never counts against any of this.**

**Is redundant loading harmful, or merely wasted?** Depends on the modality, and the principle is: *the adaptive response saturates, the mechanical load does not.*

| Twice in one window | Extra benefit | Extra cost | Verdict |
|---|---|---|---|
| Isometrics on already-loaded tendon | None | Near zero | Harmless, wasted time |
| Rope past ~10 min, or repeated | None | Real — impact accrues whether or not bone is listening | **Net negative** |
| Walk / bike / ruck | Still accruing | Near zero | Not overlap at all |

And **"it felt fine" is not the test.** v13.41 established that the knee signal can arrive on a lag — that is why the 24-hour rule exists. Redundant impact you can't feel today is exactly what shows up tomorrow as a knee short of full lockout on the Squat to Box.

**Bone footnote:** bone saturates at ~40–50 impacts, takes ~8h to resensitise, and split bouts beat one long bout (Robling; rodent-derived, human data thinner). A second short rope bout ~8h away is a real gain — a couple of minutes at the **end** of the Opener plus the afternoon bout. Never at the *start* of the morning: impact into cold, overnight-hyper-hydrated tissue is the worst risk-per-benefit slot in the day.

## Suitcase Carry — progresses on distance, not load

v14.0 said go heavy. **That was wrong, and the v13.15 note already said why:** the gap between a carry (~30 N·m) and a side plank (~200 N·m) is *the lever, not the weight*. Torque is force × moment arm, and the bell hangs about 20 cm from the spine however heavy it is. **Even a maximal one-arm carry cannot reach side-plank torque.** More bell was never going to close that gap — and the user does not have a heavier bell in any case.

- **The high-torque lateral work is the Copenhagen lever ladder** — same session, no equipment. A long-lever Copenhagen is side-plank-class and arguably harder, since the support point is at the ankle and the adductors carry a share.
- **The carry keeps the job only it can do:** *loaded standing* — stance-leg glute med holding the pelvis level through gait, the actual v12.01 fault, which a horizontal side plank never trains.
- **Progression is distance:** 2 × 40m → 3 × 40m → 2 × 60m → continuous. Not a consolation prize — the target fault is a sustained postural failure, and QL and glute med in gait are endurance-role muscles, so distance is arguably the *more* specific progression.
- **Optional load route:** the ruck pack carried one-handed by the haul handle — the one piece of kit with no ceiling and fine increments. **Strap it**, because a thin haul handle puts grip on the critical path.
- **Held in reserve:** overhead (waiter) carry — same bell, higher centre of mass, larger destabilising moment, genuinely harder at identical weight. Shifts emphasis to shoulder, which is a named site, so it's a deliberate choice not the default.

---

# v14.11 — the Ruck is not an anchor

A correction to v14.1. The Ruck was listed as one of three anchors because it used to be "Option 5" — wrong slot.

**Its value is cartilage and strain-*magnitude* bone.** Neither has a refractory period, and neither cares about collagen peptides. And 15–20+ minutes of walking doesn't fit a ten-minute loading window regardless. So it was never competing for the window, and listing it as an anchor implied a trade-off that doesn't exist.

| | |
|---|---|
| **Anchor — pick one** | Jump Rope · Isometric Circuit |
| **Complement — optional** | Yoga Holds |
| **Needs no window** | Ruck · Easy Movement |

The rule is unchanged and now unambiguous: **Rope or Isometric Circuit, never both** — same tissue twice (patellar/quad tendon, Achilles), no extra synthesis, and with the rope you pay real impact for it.

**"Can I ruck and rope?" is not a question this block answers.** Rope in the window, ruck when you ruck. They aren't two options on one menu.

---

# v14.2 — the Collagen Block becomes a staged decision

The block was a *decision tree* rendered as a flat list of five identical rows. The rule — pick one anchor, optionally add a complement, ignore the rest — existed only in prose. You had to read a paragraph to learn what the screen should have shown you.

## What changed

**Stage headers.** The step list is now grouped, each group carrying its own instruction:

```
01  THE DOSE            Eating window · 2.5h clear of protein
02  PICK ONE ANCHOR     Same tissue twice buys nothing
03  ADD A COMPLEMENT    Optional · different tissue, so it adds
—   NEEDS NO WINDOW     Not part of the choice — do these whenever
```

That last group is deliberately un-numbered and set in muted type. Ruck and Easy Movement are *outside* the decision, and the typography now says so without a sentence.

**Mutual exclusivity you can feel.** The two anchors carry a selection marker. Tap one and it fills pink; the sibling drops to 34% opacity with its marker collapsing to a dash. The rule stops being something you remember and becomes something the screen enforces. The complement is a separate toggle in mint, so anchor and complement never look like competing choices.

**A live readout.** Above the list, in Bebas: `ROPE + YOGA`, updating as you select, reading `Pick an anchor` when empty. The block now answers its own question at a glance.

**Motion, once.** A 180ms dim on the sibling and a small rise on the readout swap. Nothing else animates — one moment, where the decision happens.

## Implementation

Generic rather than special-cased. Any block that gains a `stages` array plus per-step `stage` / `pick` / `pickLabel` renders this way — `R`'s "pick 1–2 categories" could adopt it unchanged.

- `stages:[{k,n,label,hint,free}]` on the block; `stage:` / `pick:'one'|'opt'` / `pickLabel:` on steps
- Selection lives in `localStorage` under `kneehab.picks`, **every access wrapped in try/catch** so a blocked or absent store degrades to unselected rather than breaking the render
- Stage headers emit once per stage via a `Set`, so a future reorder degrades gracefully instead of repeating headers
- Markers are `role="button"`, keyboard-reachable, and `stopPropagation` so tapping one selects without expanding the row

Colours come from the existing tokens — `--amber` for anchors, `--green` for the complement — so it reads as the same app, not a bolt-on.

**Also removed:** a stale `// ── Timer Modal` comment header left behind by the v14.0 timer removal.

## Verification

Beyond `node --check` and the six-block render pass: a dedicated harness with a real `classList` stub exercises the interaction — initial state, pick, add complement, switch anchor, deselect, persistence, and the localStorage-blocked path.

```
stage headers: The dose | Pick ONE anchor | Add a complement | Needs no window
markers rendered: 3 (expect 3)
initial      readout: "Pick an anchor"
pick rope    rope=[picked] iso=[dimmed]   readout="Rope"
add yoga     yoga=[picked-alt]            readout="Rope + Yoga"
switch iso   rope=[dimmed] iso=[picked]   readout="Isometrics + Yoga"
deselect     rope=[-] iso=[-]             readout="Pick an anchor"
savePicks with blocked storage: survived
```

---

# v14.21 — version history older than v14 removed

## What went

**The Revision History page** — 402 lines, ~46 kB, linked from the More menu. It covered **v11.1 → v12.03**: Day A / Day B splits, the Bellemans Bike, the Knee Maintenance block, Scap Push-Ups, the yoga day. None of those structures exist any more, so the page was documenting a program that no longer runs. Its menu link went with it, leaving Key Rules and Supplements.

**The pre-v14 tails on the block notes**, which had been accumulating since v13.0:

| Note | Before | After | Versions now referenced |
|---|---|---|---|
| `S` | 14,591 | 2,663 | v14.0, v14.1 |
| `C` | 1,753 | 1,216 | v14.0 |
| `D` | 1,267 | 922 | — |
| `R` | 927 | 900 | — |
| `N` | 4,590 | 4,590 | v14.1, v14.11 |
| `W` | 4,275 | 4,275 | v14.0 |

The `S` note alone shed **11,920 characters** of v13.44 → v13.0 changelog.

**Total: `index.html` 2848 → 2444 lines, 328 kB → 269 kB.**

## What deliberately stayed

A version label is not the same thing as version history. Several pre-v14 *rules* still govern, and all of them survive — they live in the briefings and step details rather than the notes, which is exactly why the notes were safe to cut:

- The **squat depth gate** and the box ratchet (v13.41) — in the KB Front Rack Squat detail and the `S` briefing
- The **24-hour response rule** (v13.41) — `S` briefing
- The **PFJ force-vs-stress correction** and "the box is not a safe angle" (v13.44) — both places
- **Capped Deep Squat Sitting** (v13.43) and **Frog Rock** (v13.41) — their own step details

Where a still-governing rule carried a pre-v14 label in a note, the label was stripped and the content kept, so the note now reads as a description of how the block works rather than as a changelog. **No note references any version below v14.**

Nothing is lost: the full chain is in the git log, and v11.0→v13.2 is also summarised in project memory.

## Also found, not touched

Four pages are **unreachable** — zero nav references anywhere: `#schedule` (165 lines), `#base` (77), `#load` (57), `#micro` (106). They are v12-era content describing Day A / Day B, and `#schedule` holds the last surviving `Current Baseline` changelog block. That is ~405 lines of dead markup, but removing pages is a wider change than trimming history, so it is flagged rather than done.

---

# v14.22 — alternate the anchors; drop what never belonged on the menu

The block now matches how it's actually used.

## Alternate, don't default

v14.1 made Jump Rope the default and the Isometric Circuit the flared-knee swap. **They alternate instead.** Both land on the same tissue — patellar/quad tendon, Achilles — so doing both in one window still buys nothing. But they load it in **different modes**: the rope is strain *rate*, the circuit is sustained tension. Tendon responds to both, so alternating gives varied stimulus and halves cumulative impact.

**Rope, then circuit, then rope.** The circuit remains the **override** — on a grumbly knee, take it regardless of whose turn it is, because it's the zero-impact one.

## Yoga is optional — a correction

v14.1 called Yoga Holds "near-mandatory," on the grounds that it was the only above-waist loading in the block. **That overstated it.** The Opener's Dead Hang covers shoulder capsule, lat fascia and the elbow *every single day*, so the gap it was supposedly filling is already filled.

What yoga uniquely adds here is **hip capsule and fascia loaded at the collagen peak**. Worth having; not worth forcing. Add it when you feel like it. If you do, run it back to back with the anchor.

## Easy Movement and Ruck cards removed

Both were in the "needs no window" group, which is a contradiction: if something isn't a choice you make in this block, listing it as a row implies it is one. That was the exact confusion behind "so no ruck and rope?"

- **Cartilage** is fed by cyclic fluid exchange, not amino acids, and has **no refractory period**.
- **Bone** responds to strain rate and is equally indifferent to collagen peptides.

Neither competes with anything here. **Walk, ride and ruck whenever you like** — the principle stays in the note and briefing, the false menu-items don't. Rucking keeps its full card in Cardio.

## The block, end to end

```
01  THE DOSE                 Collagen + Vit C + Creatine
02  PICK ONE ANCHOR          Jump Rope  ⇄  Isometric Circuit   (alternate)
03  ADD IF YOU FEEL LIKE IT  Yoga Holds
```

Four rows, three stages, no "needs no window" group at all. Down from five competing options in v14.0.

---

# v14.3 — does the activity count as the anchor?

The blanket rule was *"skip this block on Activity days — the activity itself is the loading."* Written for a big day, and **wrong for the most common case**: a 60-minute session landing at collagen time.

## Ask what it loaded, not what it was called

Both a trail ride and a bike commute live under the word "ride," and they are not the same exposure.

| Session | Loads tendon? | Why |
|---|---|---|
| **MTB (real trail ride)** | **Yes** | Out-of-saddle climbing is a high knee-extensor moment; the descending attack position is a *sustained quad isometric*; terrain absorption adds eccentric work and impact |
| **Ruck, hike, ski** | **Yes** | Achilles, plantar, patellar under genuine strain |
| **Seated commute, fire road, recovery spin** | **No** | Low peak force, no impact, near-nothing through the patellar tendon |
| **Kayak, row, swim** | **Not the knee** | Upper limb only |

**Self-check: could you feel your quads working?** Sustained quad engagement is the signal. Legs merely turning over isn't.

*(Correcting v14.1's implicit assumption that cycling is uniformly low tendon load — that's true of road cycling and false of mountain biking.)*

## The two cases

**It counts** → dose 45–60 min before, go, and the activity takes its turn in the rope ⇄ circuit alternation rather than sitting outside it. Sixty minutes is far past the ~10-minute saturation point.

**It doesn't** → **anchor first, then go.** Nothing has to move:

```
14:30  Collagen + vit C + creatine
15:15  ANCHOR — rope 6–10 min, or the circuit
15:25  Ride
```

Neither anchor is fatiguing enough to compromise a 60-minute session. **Don't reverse it** — a ride starting at T+45 ends near T+105 with the amino pool thinning, so you'd be loading the tail rather than the peak.

## The second-order cost, which is the non-obvious part

**The anchor slot and the bone stimulus are not the same thing.**

If MTB regularly takes the anchor slot, the tendon is covered — but **rope quietly disappears from the week**, and with it the osteogenic work. Trail chatter through a suspended bike is nowhere near rope for strain *rate*.

The fix is free: **bone ignores the collagen window entirely.** A couple of minutes of rope at any point on a ride day restores it without touching the anchor logic. It isn't competing for anything.

---

# v14.31 — FIX: v14.21 deleted the Today page

**v14.21 through v14.3 were broken.** The Today tab — the main screen — rendered nothing.

## Root cause

v14.21 removed the Revision History page with a cut running from `<div id="revisions" class="page">` to `<div id="schedule" class="page">`. Three things sat **between** those two markers, and all three went with it:

- the **global day selector** — the whole W/S/C/R/N/D block picker
- the **`#today` page** and its `#dayCard` render target
- the `SCHEDULE` section banner (leaving an orphaned `REVISIONS` banner above `#schedule`)

`renderBlock` opens with `const card = document.getElementById('dayCard')` and ends with `card.innerHTML = _cardHtml`. With `#dayCard` gone, `card` was null and the assignment threw. No block could render, and there were no buttons to switch blocks with either.

## Why the invariants missed it

The removal script had 17 assertions and they all passed, because they were built on a wrong picture of the file. I enumerated pages with:

```python
re.search(r'<div id="(\w+)" class="page"', line)
```

The Today page is the default-visible tab, so its markup is `class="page on"` — **the regex requires `class="page"` closed immediately by a quote, so it never matched.** Today never appeared in my page list, so I never thought to assert it, and the cut spanned a region I believed was empty.

The lesson isn't "add another assertion." It's that **assertions derived from an incomplete survey inherit the survey's blind spot.** A checklist of things I already knew about could never have caught a page I didn't know existed.

## The check that would have caught it

Not a page list — a **referential integrity check**. Every `getElementById('x')` in the script must find an `id="x"` in the HTML:

```
getElementById targets missing from the HTML: today, dayCard    ← on the broken file
getElementById targets missing from the HTML: none              ← after the fix
```

That check makes no assumptions about which elements matter. It derives the requirement from the code itself.

## New standing tests

Both now run before any commit:

- **`loadtest.js`** — executes the entire script against a DOM stub built from the real HTML's id set, and reports any `getElementById` target that doesn't exist.
- **`e2e.js`** — runs the actual page-load path, then asserts `#dayCard` exists, the Today block rendered on load, the default block is the Opener, all six blocks render, and the `N` pick interaction survives a real render.

```
PASS  dayCard element exists
PASS  Today block rendered on load (26333 chars)
PASS  default block is the Opener
PASS  renderBlock('W'|'S'|'C'|'R'|'N'|'D') produced output
PASS  pickStep on a freshly rendered N did not throw
```

Also added: a tag-balance check across every string in `BLOCKS`, and HTML div-balance and CSS brace-balance checks.

## Restored

The day selector, `#today`, `#dayCard` and the `SCHEDULE` banner, all taken verbatim from `ffccbc1` (v14.2, the last good commit). A full id-and-class diff against v14.2 now shows only `revisions` missing, which is intentional. **No program content changed** — v14.21's note trims and everything in v14.22 and v14.3 stand.

---

# v14.4 — the Isometric Circuit is now actually isometric

It had four items and **three were duplicates of Strength**:

| Circuit | Strength |
|---|---|
| Tibialis Raise `1 × 20 · 1s hold` | **Tib Raise** `1 × 20 · 1s hold` — identical |
| Soleus Calf Raise `2 × 12` | **Soleus Calf Raise** `3 × 15` |
| Copenhagen Plank `2 × 20s` | **Copenhagen Plank** `2 × 20s` + lever ladder |
| Mǎbù | — unique |

**v14.0 created the worst of them.** It moved Copenhagen into `S` precisely because it *fatigues* — muscle bucket — and then left it in the collagen circuit too. Soleus and Tib Raise predate the sort and were never re-examined; v14.0 swapped SL Wall Sit → Mǎbù and stopped there.

## The real problem, not the duplication

All three are **rep-based work that fatigues**, which is the muscle bucket by this program's own sorting test. So the "Isometric Circuit" was mostly a muscle circuit wearing an isometric label — exactly the category error the v14.0 re-sort existed to remove. Only Mǎbù was a genuine sustained hold.

## Rebuilt

Two true holds, chosen to be the rope's zero-impact equivalent **tissue for tissue**:

| | Rope loads | Circuit answer |
|---|---|---|
| Quad / patellar tendon | impact + eccentric | **Mǎbù** — 4 × 45s |
| Achilles | strain rate | **Bent-Knee Calf Hold** — 4 × 45s |
| Plantar fascia | impact | same hold, barefoot on a step edge |

**Bent-Knee Calf Hold** *(new)*: forefoot on the edge of a step, barefoot, heels hanging, rise onto the forefoot and **hold** — no reps. Knee bent ~30° throughout, which biases soleus over gastrocnemius and puts the Achilles under sustained tension; barefoot on the step edge loads the plantar fascia in the same hold. **Watch:** letting the knee straighten (shifts load off the soleus), rolling to the outside of the foot, gripping with the toes. **Progression:** longer → single leg → hold a KB.

Explicitly *not* the same exercise as the Soleus Calf Raise in `S` — that one is 3 × 15 eccentric reps, which is muscle work. This is a tendon hold.

**Dose matters here.** 4 × 45s each puts the circuit alongside the rope's 6–10 min rather than well under it. And Baar and Rio both run isometrics near **70% MVC** — bodyweight versions may sit below that, which makes the load progressions (goblet Mǎbù, single-leg calf hold) the point rather than an optional extra.

Nothing was lost: Tib Raise, Soleus Calf Raise and Copenhagen all remain in `S`, where the tissue sort says they belong.
