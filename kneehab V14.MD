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
