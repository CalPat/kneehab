# kneehab v14.92 — the anti-rotation slot is cut. I optimised for the test, not the expression.

**Date:** 2026-08-27
**Change class:** minor (`.01`) — filed as a **correction to v14.9**, not new program direction. It
reverts one slot rather than adding one. *(Note: the scheme is running out of room at 14.9x; the
next medium change should roll to v15.0.)*

**Strength: 17 → 16 items.**

---

## The question that undid it

*"Is anti-rotation really going to help knee pain? Is the Renegade Row that beneficial? Is the
Suitcase Carry a better intervention?"*

The third question was one I had not asked myself. In v14.9 I compared the Renegade Row only against
the half-kneeling KB Press, on the criterion *"which one reproduces the Bird Dog demand."* Comparing
it against the **Suitcase Carry** instead exposes that the criterion itself was wrong.

## The error, named

**I optimised for matching the TEST POSITION rather than the position where the problem EXPRESSES.**

The compensation being chased is *adductors substituting for pelvic control*. Adductors do pelvic
control in **single-leg weight-bearing** — and that is also the only place this plausibly reaches a
knee, via femoral adduction and internal rotation into lateral patellar tracking.

The Bird Dog *finds* the compensation in quadruped. The Renegade Row reproduces quadruped. But
quadruped is **prone, non-weight-bearing, double-support** — roughly the furthest position in the
program from where the thing actually shows up. I matched the diagnostic instead of the target.

## The evidence, graded honestly — v14.9 did not do this

| Tier | Claim | Status |
|---|---|---|
| **Well supported** | Hip abductor / external rotator strengthening improves patellofemoral pain outcomes; proximal-focused programs beat knee-only | Solid. This is **glute med and max**, not obliques. |
| **Suggestive, not transferable** | Trunk neuromuscular control predicts knee injury (Zazulak 2007 — lateral trunk displacement, core proprioception) | **ACL injury in young female athletes; predictive, not interventional.** Different mechanism, different population. |
| **My inference** | Obliques fail → adductors recruited → adductor-dominant pelvic control → femoral adduction/IR → lateral tracking → anterior knee pain | **Five links, each plausible, none demonstrated.** v14.9 built a slot on this and called it a finding. |
| **Needs no knee at all** | Loaded trunk anti-rotation is directly the demand of MTB, backcountry ski, kayak, ruck | Direct. If the demand survives, **this is the honest reason** — not the knee. |

## Why the Suitcase Carry wins

| | Renegade Row | Suitcase Carry |
|---|---|---|
| Weight-bearing | No | **Yes** |
| Single-leg | No | **Yes, every step** |
| Progression | Uncalibrated (narrow the feet = a large uncontrolled jump; heavier bell degrades the plank) | **Distance, then load** |
| Glute med | ~None | **Yes** — the one hip→knee link with real evidence |
| Position vs. expression | Prone, double-support | **Matches where the compensation lives** |
| Setup friction | Two bells, floor | One bell |
| Already in the program | New in v14.7 | **Already there** |

Further criticisms of the Renegade Row that stand on their own: it is a **compromised hybrid** — the
anti-rotation demand caps the row load below what the lats can handle while the row load caps the
anti-rotation stimulus, so both halves are undertrained. It sat at **#16 of 17**, meaning an exercise
whose entire terminator is a *quality* standard was performed most fatigued. And it loads the grip in
a plank, on someone who already carries a lateral-elbow note on the Ab Wheel card.

## The counter-argument, recorded rather than buried

**A suitcase carry is not a like-for-like anti-rotation swap.** A bell hanging at your side sits close
to the body, so its *rotational* moment is small — the frontal-plane moment is the big one, and the
anti-rotation content comes from **gait mechanics, not from the load.** It is a better tool for the
compensation, operating on a different plane.

That gap is closed by the **half-kneeling KB Press (#6)**, which supplies the long-lever rotational
moment and has since v14.7 — the sibling the v14.9 plane-audit critique already caught. **Between the
two, the demand is covered without a dedicated slot.**

**If more rotational demand is wanted later, the dial is the rack position, not a new exercise:**
heavy suitcase → front rack one side → overhead/waiter's. Each rung lengthens the moment arm;
distance stays the progression within a rung.

---

## The Bird Dog now has a decision rule

The flaw was not the reduced range — it was that **nothing acted on the number.** Squat to Box is a
sensor with a decision attached (it reads against the capped height, and that cap is the active
constraint). Bird Dog had none. **A reading you never act on is a habit, not information** — the
exact class v14.0 dissolved the old Warm-Up to remove.

**Log two numbers: the quiet height LEFT and RIGHT. The gap is the signal, not the absolute height.**
Absolute height drifts with sleep, warmth and time of day; the left–right gap does not, because both
sides are read within the same 30 seconds under identical conditions.

- **Gap has not narrowed across ~3 cycles** → the work is not landing. Take the carry up a rung, or
  add distance on the right only.
- **Gap is closing** → change nothing. It is working, and the reading is the proof.
- **Gap widens across a cycle** → stop adding load; read it against the right-side thread rather than
  pushing through.
- **Exit condition, stated up front:** gap closed and stable for ~3 cycles → the item comes out of
  the Opener. It is a diagnostic, not a fixture — the standard v13.43 used when it retired the daily
  glute-med work after capacity tests came back symmetric.

---

## Changes

| # | Change |
|---|--------|
| 1 | `sS_antirot` step deleted from `BLOCKS.S` (Renegade Row + Pallof Press + the v14.9 rationale card) |
| 2 | Suitcase Carry renumbered 17 → 16; retitled **"the loaded trunk-stability slot"**; right-side-first rule; the full argument and its counter-argument written onto the card |
| 3 | Half-kneeling KB Press card names its anti-rotation role explicitly, with *"do not add load to compensate for the cut"* |
| 4 | Bird Dog: decision rule + exit condition; header now reads *"log BOTH sides · the R–L GAP is the signal"* |
| 5 | Renegade Row + Pallof Press hub `ex-card`s removed from `src-strength` |
| 6 | **Two dangling references repointed** — both Bird Dog cards still read *"the threshold is moved in Strength, by the Renegade Row"*, naming a cut exercise. That is precisely the Rule-08 defect fixed in v14.91, caught here by grepping for the cut item rather than trusting the step deletion |
| 7 | Briefing line rewritten whole (patching had left it self-contradictory — *"the reason the slot stands"* next to *"the slot is cut"*, plus a terminator for a deleted exercise) |
| 8 | Key Rules `v14` row records the reversal; all three counts 17 → 16 |
| 9 | Version strings ×3 → v14.92 |

**Verification:** `node check.js` → **PASSED 42/42** on `index.html` and on the snapshot. Final grep
for `Renegade`/`Pallof` returns **only historical narration** of the reversal — no live prescription.

## The lesson

**Match the tool to where the problem EXPRESSES, not to where the test FINDS it.** A diagnostic is
built to provoke a compensation in a convenient position; the intervention has to work in the
position that matters. They are rarely the same position, and v14.9 assumed they were.

Second, on the same theme as v14.9's own ruling: **when a slot is cut, grep for every mention of the
cut item.** Deleting the step object is not the fix — two other cards were still pointing at it.
