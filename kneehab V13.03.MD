# kneehab v13.03 — Daily Habits: laterality dropped, SL items merged

**Date:** 2026-06-03
**Type:** Minor (Daily Habits refinement, no protocol change)

## Driver

Follow-on to v13.02 Daily Habits restructure. User observation: SL Standing Micro-Dose and SL Balance look like the same drill with different cues — and the explicit right-only programming isn't needed because side asymmetry surfaces naturally during normal exercise (the weaker side gets a little more attention without programming it that way).

## What changed

**1. Cut `sD_slstand` (Right-Side SL Standing Micro-Dose).** The v12.01 motor lesson — glute med engagement, pelvis level, no lurch — is preserved as a **cue inside SL Balance** rather than a separate right-only drill.

**2. SL Balance rewritten** to carry both jobs:
- Proprioception (existing 7-level progression unchanged)
- Glute med motor recruitment (new cue: "active glute engagement, pelvis level, ribs stacked, no lurch")
- Bilateral — side asymmetry observed during the drill is the self-check ("the side that wobbles more is the side that needs the work")
- Self-check replaces the v12.01 explicit reassessment: "clean 30s on each side with no compensation = right-side inhibition pattern resolving"
- `sub` updated: "60s total · both legs · glute med cue"

**3. Standing Posture Check cue #3 de-lateralized.** Was: "light right glute engagement." Now: "even glute tone on both sides — sustained baseline, not a flash." Updated in both BLOCKS.D detail and src-daily card.

**4. BLOCKS.D `pills` updated.** "5 actions · 5 reference" → "4 actions · 5 reference."

**5. BLOCKS.D `note` rewritten** to explain the laterality-dropped framing and document v13.03 cuts alongside v13.02 cuts.

**6. BLOCKS.D `briefing.ok` updated** — drops the "two ⭐ items" framing, adds "SL Balance now carries the v12.01 glute med cue too."

**7. Rule 10 rewritten** to reflect the new 4-action list and the intuitive-asymmetry philosophy.

## What did NOT change

- **Strength right-side bodyweight gating stays.** Step Down, ISO Step-Up, Split Squat remain bodyweight on both sides — user confirmed these are still difficult bilaterally, so the gating isn't about laterality but about overall difficulty.
- Standing Posture Check stays as the lone ⭐ action habit — the v12.01 unconscious-loading clinical thread is intact.
- 2026-06-17 reassessment date stays. The question shifts slightly: "does the standing-day discomfort pattern resolve?" rather than "can I hold a clean 30s right SL stance?" — both still load-bearing.
- No change to Strength, Cardio, Rest, Warm-Up, or Collagen Block.
- Reference cards (Protein, Cold, Heat, Sleep, Cardio tracker) unchanged.

## Why this is the right call now

Months pain-free. The v12.01 right-only programming was appropriate during active diagnosis — it gave a specific motor cue and a clear reassessment criterion. Now that the user is in maintenance mode and the explicit drill wasn't getting done, folding the cue into a bilateral drill is more honest:
- The motor lesson is preserved (cue + self-check)
- Compliance friction drops (one item, bilateral, no special protocol)
- Side asymmetry still surfaces — through the natural feedback loop of "this side feels weaker, give it more attention"

Cost: the explicit "clean 30s right SL stance" milestone is no longer a programmed checkpoint. Replaced with the more diffuse "if right side stops feeling like the wobbly side, the pattern is resolving."

## Tally

Daily Habits item count: 14 (pre-v13.02) → 10 (v13.02) → 9 (v13.03). Four action habits + five reference cards.

## Files

- `index.html` — three version-string locations bumped (title, ms-title, cover-h1); BLOCKS.D `sD_slstand` removed; `sD_bal` rewritten with glute med cue and self-check; `sD_stand` cue #3 updated; `pills`, `note`, `briefing` updated; src-daily SL Standing card removed and SL Balance card rewritten with matching glute med cue; src-daily Standing Posture Check cue #3 updated; Rule 10 rewritten.
- `kneehab V13.03.html` — snapshot.
- `kneehab V13.02.html` and `kneehab V13.02.MD` — deleted per single-latest-version rule.

## Reversibility

Trivial — git restore. To re-add the right-only Micro-Dose: copy the `sD_slstand` step object back into BLOCKS.D between `sD_stand` and `sD_bal`; restore the matching src-daily card; restore the Standing Posture Check cue #3 to "light right glute engagement"; bump pills back to "5 actions."
