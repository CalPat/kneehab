# kneehab v15.0 — version roll, and where the program stands

**Date:** 2026-08-27
**Change:** version strings only. **No program content changed from v14.96.**

Rolled on instruction — *"versioning is not that important. go to v15."* The `.01` / `.1` / `1.`
scheme had run out of room in the 14.9x range; rather than invent a sub-tier, the number just moves
on. **Do not agonise over version arithmetic again.**

Because v15.0 is a clean marker, this file records the current state rather than a changelog.

---

## The program

**Rotation:** S → C → S → C → S → C → R. Seven sessions, days-of-week agnostic, becoming reactive —
a big day *buys* a strength day.

**Opener — 6 items, every morning, 7/7.** Sun Salutation A · 90/90 Lift-Offs · **Bird Dog (sensor)** ·
Squat to Box · ISO Step-Down Hold · Dead Hang. **+ RKC Plank on `S` days.** Not prep — this is the
day's tendon and joint loading, and the reading comes free.

**`S` Strength — 16 mandatory**, 2 working sets, 2 RIR or a quality terminator:
KB Front Rack Squat · Step Down · Kickstand RDL · Split Squat · Copenhagen · **KB Press
(half-kneeling)** · Push-Up · Eccentric Pull-Up · Ring Row · WLYT · SL Glute Bridge · Soleus ·
Tib Raise · Hip Flexor · Ab Wheel · **Suitcase Carry**.

**`C` Cardio** 3×/cycle, 180 min/wk, no zone gating. **`R` Rest** long-hold mobility. **`N` Collagen
Block** afternoon, the single amplified window. **`D` Daily Habits.**

## The rules that govern additions

Accumulated across this session, and they did most of the work:

1. **A taxonomy gap is not a finding.** An empty cell in a grid tells you about the grid. Justify a
   slot with a reading.
2. **Check the indication in THIS body.** A sound generic argument about a problem you do not have is
   still a cut. *(Killed the ankle eversion slot.)*
3. **Match where the problem EXPRESSES, not where the test FINDS it.** *(Killed the Renegade Row.)*
4. **Grade the evidence tier** — well-supported / suggestive-but-not-transferable / your own inference
   chain. Never ship an inference chain as a finding.
5. **Every decision rule needs both exits.** A rule that can only say "keep going" is a commitment
   device. Write the abandon condition first.
6. **No progression ladders.** A fixed dose with no ladder is the intended state, not a gap. The
   program is revised when progression actually happens. *(Existing ladders stay; settled.)*
7. **Axes, not ladders.** Naming which variable a change moves is analysis. Scheduling how far to
   move it is phasing.

## Live clinical state

- **Active constraint: right-knee squat depth.** Box-capped in `S`, Step Down and Split Squat
  right-side bodyweight-gated, deep-squat sitting capped in `D`, 24h morning check after every `S`.
- **Bird Dog reading: support-side groin recruits near end range, right worse.** Sensor in the
  Opener with a full decision rule — log both sides, **the R–L gap is the signal**, and two of its
  five outcomes end with the item retiring.
- **Anti-rotation** carried by the half-kneeling KB Press (long lever) and the Suitcase Carry
  (single-leg, weight-bearing). No dedicated slot.
- **Asymmetry rule (Key Rules 09)** applies everywhere: weak side first and it sets the number;
  extra volume if it feels weaker; **volume never range or load — where it meets a gate, the gate
  wins.**

## Open, flagged, untouched

- **Key Rules 16** — *"Bird Dog: pick one variation per session"* is stale. It is a sensor with one
  fixed form now; there is no variation to pick.
- **~405 lines of unreachable pages** (`#schedule`, `#base`, `#load`, `#micro`) still in the DOM.
- **Orphaned containers** (`src-postA`, `src-knee`, `src-bike`, `src-load`, `src-glute`) hold content
  no tab reaches — including the only prior mentions of the asymmetry rule, which is how it went
  undefined. **Worth checking whenever a live card looks thin.**
- **van Loon's pre-sleep casein** still collides with the live *"no food 90 min before sleep"* rule.

**Verification:** `node check.js` → **PASSED 42/42** on `index.html` and on the snapshot.
