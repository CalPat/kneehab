# kneehab v14.93 — the half-kneeling press, specified

**Date:** 2026-08-27
**Change class:** minor (`.01`) — card content on one existing item. No slot change; Strength stays 16.

---

## Why this item, now

v14.92 cut the dedicated anti-rotation slot and handed the demand to two items that already produced
it. The half-kneeling KB Press is one of the two — and its card gave a position and a load but never
said **which arm presses**, which is the variable the whole claim depends on. Specified here.

---

## 1 · The arm on the SAME side as the DOWN knee

Right knee down, left foot forward, **right** arm presses. This is a rule, not a preference.

**The mechanism.** The down-side hip is the one held in extension. Reaching overhead on that same
side puts the **latissimus dorsi on stretch** — and the lat runs from the humerus into the
thoracolumbar fascia and the pelvis, so a stretched lat pulls the pelvis toward **anterior tilt and
lumbar extension**. The down-side glute max has to hold hip extension *and* posterior tilt against
that pull for the whole set.

**That is the Split Squat tuck (v14.83) with an overhead lever added.** Pubic bone toward sternum,
tailbone under, ribs down, squeeze the down-side glute. Same demand, different position — and the
program's only other loaded expression of it. Choosing the opposite arm removes exactly this
conflict, which is the part worth training.

**Feel:** the down-side glute working, trunk refusing to side-bend away from the bell.
**Lost it:** low back taking the load, ribs flaring, or sinking into the down hip — all three are the
pelvis leaving the tuck so the arm can get overhead. Shorten range or lighten *before* losing the tuck.

**Stated honestly:** which side feels harder varies by person, and the card does not claim a
difficulty ranking. **Standardise on the down-knee side for the glute-and-tuck link, not for
difficulty.** Front-foot side is a temporary regression only.

---

## 2 · Three grips are THREE AXES, not a ladder

Filing these as "harder versions of the press" would repeat the **v14.84 error exactly** — front-foot
elevation vs slant board, two separate axes conflated into one dial. Each moves a different variable.

| Grip | Axis it moves | Progression | Notes |
|---|---|---|---|
| **Rack** (default) | **LOAD** | Weight | Load line closest to the body, most stable. **The only one that takes a heavy bell — the load ladder lives here and nowhere else.** |
| **Bottoms-up / inverted** | **CONTROL** | Not weight | Self-limiting by design. Crush grip → irradiation → cuff and scapular stabilisers switch on. **The bell tipping IS the terminator** — same quality-terminator class as Step Down and Split Squat. **A lighter bell here is not a regression.** Never compare its weight to the rack's. |
| **Palming the ball** | **WRIST / FOREARM** | Position | Hand on the body of the bell, wrist stacked and neutral, no handle to crush. **Lowest grip and extensor load of the three — the elbow-friendly option.** Moving the contact point changes where load sits relative to the forearm, so the shoulder is asked a slightly different question. |

**Elbow caution, specific to this body:** bottoms-up carries the **highest crush-grip and
forearm-extensor demand of the three**, and the program already notes grip aggravating the lateral
elbow on the Ab Wheel card. When the elbow is talking, bottoms-up is the wrong week and palming is
the right substitution. That is a real interaction, not a generic warning.

**How to use them.** Rack is the default and carries the progression. The other two are
**substitutions, not additions** — one press slot, one grip that day. **Pick a grip and hold it for a
full cycle** rather than rotating within a session, or the set returns no reading comparable to
anything. **The trunk job never changes with the grip:** down-knee side, tuck set standing before the
press, ribs down. The grip changes what the arm does; it never changes what the pelvis does.

---

## Changes

| # | Change |
|---|--------|
| 1 | `sS_press` header → *"press the DOWN-KNEE side · rack / bottoms-up / palmed"* |
| 2 | Down-knee-side rule + lat→pelvis mechanism + the Split Squat tuck link appended to the detail card |
| 3 | Three-grips-three-axes section appended, with the v14.84 conflation warning and the elbow interaction |
| 4 | Hub `ex-card` (`src-strength`) updated with rx line and a compact version of both notes |
| 5 | Version strings ×3 → v14.93 |

**Verification:** `node check.js` → **PASSED 42/42** on `index.html` and on the snapshot.

## Process note

First attempt broke the page: **a straight apostrophe in "the rack's" terminated the JS string** it
was being injected into (`d:'...'`). The suite caught it instantly — *"script executes end-to-end ::
Unexpected identifier"*, 2/14 — and the fix was `git checkout --` and redo, per the standing rule
never to patch a bad cut. **Content injected into the BLOCKS strings must use typographic
apostrophes (’), which is why the rest of the file already does.**
