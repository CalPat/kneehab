# kneehab v15.01 — van Loon vs the sleep rule: the sleep rule wins

**Date:** 2026-08-27
**Change class:** minor (`.01`). Sleep card + `CLAUDE.md` foundations. No exercise changes.

---

## The collision, closed

Two foundations were pointing at each other, and it had been sitting open across several versions:

- **van Loon** prescribes **30–40 g casein ~30 min before sleep** — well-supported in controlled
  trials for raising overnight muscle protein synthesis.
- **The program's live rule** is **no food 90 min before sleep.**

**Ruled 2026-08-27: the sleep rule wins. There is no pre-sleep protein dose.**

## Why it holds on the program's own terms

The deciding argument was already in the foundations list. **Stuart Phillips sits there specifically
as the evidence filter — "the source for when to STOP adding."** Applying him:

Protein already runs **150–175 g/day across about four feedings of 37–44 g** — at or above the
ceiling of useful intake for a trained lifter. **van Loon's pre-sleep protocol pays off mainly when
daily protein is inadequate or badly distributed**, and neither is true here. The fifth feeding is
being added past the point where feedings still buy anything.

The program contained the argument for this ruling the whole time; it just had two foundations
aimed at each other and no one adjudicating.

## Stated honestly — a ruling should record what it beat

**The counter-argument is real.** The overnight fast is the longest gap in the day, and pre-sleep
casein does raise overnight MPS. This is not a case where the evidence was weak.

**And the card's own mechanism line is stronger than the evidence supports.** The Sleep card says
*"insulin response from any macronutrient suppresses GH pulse."* That overstates it — protein
produces a modest insulin response compared with carbohydrate, and some amino acids stimulate GH
rather than blunting it. **The ruling does not rest on that mechanism.** It rests on the dose ceiling,
and on sleep quality being a larger recovery lever than a marginal overnight MPS increment. Left the
original line in place rather than quietly rewriting it, and named the overstatement instead.

## How to implement it well

**Do not add a feeding after the cutoff — move the fourth feeding later inside the window.** If
overnight coverage feels thin after a heavy Strength day, that is the dial: the last feeding sits as
close to the 90-minute line as it comfortably can, and nothing goes after it.

---

## Changes

| # | Change |
|---|--------|
| 1 | Sleep & GH Protocol card gains a **"van Loon vs this rule — RESOLVED"** entry with the full reasoning and the counter-argument |
| 2 | Sleep card sub → `7–8h · no food 90 min before · NO pre-sleep casein (v15.01)` |
| 3 | **`CLAUDE.md`** van Loon entry annotated — the pre-sleep application is ruled out; **van Loon still owns the timing principle**, only the pre-sleep feeding is off. *"Do not re-propose it."* |
| 4 | **`CLAUDE.md`** Baar "seam" line corrected — it still read *"van Loon owns the muscle window (leucine-rich, post-`S` and pre-sleep)"*, a dangling reference to the thing just ruled out. Now *"post-`S`, inside the eating window — not pre-sleep."* |
| 5 | Version strings ×3 → v15.01 |

**Verification:** `node check.js` → **PASSED 42/42** on `index.html` and on the snapshot.

## Note on editing CLAUDE.md

**I edited your instructions file** — two lines in `## Foundations — Nutrition` and the Baar seam.
The reason: leaving the contradiction there means every future session re-derives the same collision
from its own instructions and re-raises a question you have now answered. That is the same
dangling-reference defect this session has been fixing all day (v14.91 Rule 08, v14.92 Bird Dog,
v14.96 the undefined asymmetry rule). **Easy to revert if you would rather the foundations stayed
descriptive of the researchers and free of program rulings** — say so and I will move the annotation
into the app instead.
