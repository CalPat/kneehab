# kneehab v14.95 — Rule 07 corrected, and the Strength block audited

**Date:** 2026-08-27
**Change class:** minor (`.01`) — one rule corrected. **The audit changed nothing** (reported for a ruling).

---

## Part 1 — Rule 07 corrected

**Was:** *"Skin-sourced collagen only. Type I. Bone broth and gelatin are not equivalent."*

**The gelatin half contradicted the study the whole protocol rests on: Shaw 2017 used GELATIN.**
Flagged in v14.91 and v14.92, resolved here.

**Type still matters.** Type I — bovine hide or fish skin — is the collagen of tendon and ligament.
Type II (chicken cartilage, UC-II) is a different product for a different tissue and is not a
substitute.

**Form mostly does not.** Gelatin is denatured collagen; hydrolysed collagen is that same gelatin cut
into shorter peptides. Both deliver the glycine / proline / hydroxyproline load — and per the
**v14.81 mechanism correction**, that load in the blood *on a schedule*, with vitamin C as cofactor,
**is** the mechanism. **Hydrolysed is the practical default because it dissolves cold and does not
gel** — not because gelatin fails.

**Bone broth stays out, but on DOSE, not on type.** Collagen content is low and varies batch to
batch, so ~15 g is not reliably reachable. Filing that as *"not equivalent"* hid the real reason and
swept gelatin out alongside it. **v14.8 still governs above all of it: no load, no dose.**

---

## Part 2 — the Strength audit (16 items, no changes made)

Standard applied: *what reading justifies it · what variable does it move · does another item already
move that variable · does it work where the problem expresses · does it progress.*

### The one real defect

**#2 Step Down — the live card has NO progression, and the orphan holds the full ladder.**

Live card: 985 characters. Tempo, compensation watch, the v13.4 terminator, right-side gating — and
**no progression whatsoever.**

The orphaned `src-knee` card (line ~1541, no hub tab points at it) carries:

- **Step height ladder: 10 cm → 15 cm → 20 cm → 25 cm**
- **Eccentric ladder: 3s → 4s**
- **Load ladder: bodyweight → KB at chest** *(gated by right-side tracking)*
- **2s pause at the bottom**, foot hovering — converts eccentric to eccentric-plus-isometric,
  explicitly matched to sustained ski loading
- **Weaker-side pre-activation:** 5s single-leg stance, pelvis level, glute med actively holding,
  before each set on that side
- **Soreness modifier (>2/10):** drop to the working angle and hold 30–45s per side instead of reps
- **Side-specific regression:** lower the slant, flat step, or substitute the Opener's ISO Step-Down
  Hold *on that side only*

**This is the v14.82 pattern exactly** — live card thin, orphan richer — and it is worse here than it
was there, because **#2 is one of only two right-side-gated items and sits directly on the active
constraint (right-knee squat depth).** The item carrying the constraint has no documented way to
advance.

**Highest-value fix available in the block.**

### Two smaller gaps

- **#12 Soleus Calf Raise (3 × 15) and #13 Tib Raise (1 × 20)** — fixed dose, no progression named,
  ~270 characters each. Same fixed-dose-that-progresses-nothing profile v14.0 dissolved the Warm-Up
  to remove. They are cheap and doctrinally sound, so the fix is **naming a progression** (load,
  single-leg, tempo), not removal.
- **#3 Kickstand RDL has no asymmetry rule** despite being single-leg posterior-chain work on a body
  with a documented right-side thread. Copenhagen carries "right-side bias," Step Down and Split
  Squat are right-side gated, and the Suitcase Carry took "right side first" in v14.92. This one is
  the odd item out — possibly deliberately, possibly an oversight.

### Two suspicions I raised and now withdraw

Both were mine, from the previous message, and both failed on inspection:

- **"Three capped knee-flexion items are redundant" (#1, #2, #4)** — **withdrawn.** They are
  genuinely distinct: bilateral loaded (box-capped), single-leg eccentric on a slant, and single-leg
  with rear-leg length. Two of the three are the right-side-gated pair. No redundancy.
- **"SL Glute Bridge duplicates Kickstand RDL" (#11 vs #3)** — **withdrawn.** The RDL is a loaded hip
  hinge, hamstring-dominant and eccentric. The bridge is short-range glute max **with a psoas lock**,
  which exists specifically to reveal the hamstring taking over. Different jobs, and the bridge has a
  progression the audit had missed (hands off → hold the knee with hip flexors alone).

I also claimed WLYT had no progression. **It does** — 2s pause at the top, then very light plates.
Concern downgraded; it lacks a *mechanism* statement, not a dial.

### Verdict

**The block is in better shape than the last two versions' cut rate implied.** Two additions failed
recently because they were *new and under-argued*, not because the block is bloated. The audit found
**one item needing real work (#2), two needing a progression named (#12, #13), and one open question
(#3)** — and it retracted two of the three concerns that prompted it.

---

## Changes

| # | Change |
|---|--------|
| 1 | Rule 07 rewritten: type vs form separated, gelatin restored, bone broth excluded on dose |
| 2 | Version strings ×3 → v14.95 |
| 3 | Audit recorded here; **no program changes made** |

**Verification:** `node check.js` → **PASSED 42/42** on `index.html` and on the snapshot.
