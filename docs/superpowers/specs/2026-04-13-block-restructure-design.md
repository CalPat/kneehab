# v11.x Block Restructure — Design Spec

**Date:** 2026-04-13
**Scope:** 5 structural changes to Day A/B flow. No new exercises. No exercise removal.

---

## Change 1: Shoulder CARs → Daily Habits

**What:** Remove Shoulder CARs from Mobility block on both Day A and Day B. Add to Daily Habits section.

**Why:** Equipment-free, can be done anywhere/anytime. Doesn't need to be in the structured floor flow.

**Impact:**
- Day A Mobility: 7 → 6 items (remove CARs)
- Day B Mobility: 6 → 5 items (remove CARs, before Couch Stretch moves in)
- Daily Habits gains: Shoulder CARs (1 × 5 each arm)

**Locations to update:**
- `sA_mob` detail array — remove Shoulder CARs entry
- `sB_mob` detail array — remove Shoulder CARs entry
- Daily Habits section (`steps` array) — add Shoulder CARs
- Day A/B summary card Mobility notes
- Reference hub Mobility section
- `src-postA` / exercise hub descriptions

---

## Change 2: Dead Hang → After Floor Work

**What:** Remove Dead Hang from Primer block (T+5) on both days. Relocate to after the last floor block, before standing/bar work begins.

**Why:** Dead Hang requires a pull-up bar. All exercises from Mobility through Core (and Glute on Day A) are floor-based. Placing Dead Hang after floor work avoids the friction of getting to the bar early in the routine.

**Day A placement:** Between Glute and Knee Block (~T+22). New standalone block or inline.
**Day B placement:** Between Core and Knee Maintenance (~T+20). Right before Upper Body bar work (Scap Pull-Up, Eccentric Pull-Up).

**Impact:**
- Primer block becomes Tib Raise only on both days. Rename sub to "~1 min" or keep "Primer" label.
- New Dead Hang entry needed at the transition point on each day.
- Timings shift: Core starts ~T+13 instead of T+15 on Day A.

**Locations to update:**
- `sA_prime` detail array — remove Dead Hang
- `sB_prime` detail array — remove Dead Hang
- Insert Dead Hang as standalone item or mini-block after `sA_glute` / after `sB_core`
- Day A/B summary card Primer notes
- Primer sub timing
- Rule 10 and Rule 15 references to Primer content

---

## Change 3: Couch Stretch → Day B Mobility

**What:** Remove Couch Stretch from Day A Mobility. Add to Day B Mobility.

**Why:** Active recovery for rectus femoris after Day A loading. Stretching during the remodeling window (24h post-load) is more valuable than pre-load prep. Lizard Pose + Kneeling Ankle Drive still provide hip flexor prep on Day A.

**Impact:**
- Day A Mobility: loses Couch Stretch (now 5 items total after CARs also removed)
- Day B Mobility: gains Couch Stretch (now 6 items total after CARs removed)
- Update Couch Stretch description to reflect active recovery rationale

**Locations to update:**
- `sA_mob` detail array — remove Couch Stretch entry
- `sB_mob` detail array — add Couch Stretch entry (with updated description)
- Day A summary card Mobility note
- Day B summary card Mobility note (no longer "Same as Day A minus Couch Stretch")
- Reference hub Mobility section description

---

## Change 4: Spinal Block Merges into Core

**What:** Eliminate the standalone "Spinal" block on Day A and "Spinal & Shoulder" block on Day B. Move Bird Dog (and WLYT on Day B) into the Core block as the first exercises.

**Why:** Day A Spinal has a single exercise (Bird Dog) — a full block header for one item is overhead. Bird Dog is functionally anti-rotation core work. WLYT (scapular stabilization) pairs naturally with core.

**Day A Core becomes:** Bird Dog → Hollow Body → Side Plank → Hip Flexor (~6 min)
**Day B Core becomes:** Bird Dog → WLYT → Hollow/RKC → Side Plank → Hip Flexor (~7 min)

**Impact:**
- `sA_spine` block eliminated, exercises prepended to `sA_core`
- `sB_spine` block eliminated, exercises prepended to `sB_core`
- Core block timing/sub updates
- Core starts at T+13 (was T+17 Day A / T+18 Day B after separate Spinal)

**Locations to update:**
- Delete `sA_spine` block from BLOCKS
- Delete `sB_spine` block from BLOCKS
- Prepend Bird Dog to `sA_core` detail array
- Prepend Bird Dog + WLYT to `sB_core` detail array
- Update `sA_core` and `sB_core` time, sub fields
- Day A/B summary cards — remove Spinal row, update Core row
- Reference hub "Spinal & Shoulder" section — rename/merge with Core
- Rule 16 (Bird Dog variation) — update to reference Core block
- `src-postA` section labeling

---

## Change 5: Lateral Step-Up as Default (remove alternation)

**What:** Lateral Step-Up becomes the standard exercise in the Knee Block. Curtsy Squat available as optional swap, not mandatory alternation.

**Why:** Simplifies decision-making. Lateral Step-Up targets glute med (primary upstream PFPS driver) and has lower knee compression. Curtsy remains available when desired.

**Impact:**
- Knee Block exercise list: "Curtsy OR Lateral Step-Up (alternate)" → "Lateral Step-Up (or Curtsy)"
- Remove Rule 09 (alternation rule)

**Locations to update:**
- `sA_knee` detail array — update the Curtsy/Lateral entry
- Day A summary card Knee Block note
- Rule 09 — delete or update
- Reference hub Knee Block description

---

## Updated Day Flows

### Day A (Lower Body)
| Time | Block | Exercises |
|------|-------|-----------|
| T=0 | Collagen | Collagen + Vitamin C |
| T+5 | Primer | Tib Raise |
| T+6 | Mobility (~6 min) | 90/90, Cat-Cow, Lizard, Kneeling Ankle, Pigeon |
| T+12 | Core (~6 min) | Bird Dog, Hollow Body, Side Plank, Hip Flexor |
| T+18 | Glute (~3 min) | Glute Bridge / progression |
| T+21 | Dead Hang | 60s |
| T+22 | Knee Block (~17 min) | SL Wall Sit, Step Down, Split Squat, Lateral Step-Up (or Curtsy), Ham Slide, Standing Ham ISO, SL RDL, Soleus Calf Raise |
| T+39 | Bellemans Bike | 10-12 min |

### Day B (Upper Body)
| Time | Block | Exercises |
|------|-------|-----------|
| T=0 | Collagen | Collagen + Vitamin C |
| T+5 | Primer | Tib Raise |
| T+6 | Mobility (~7 min) | 90/90, Cat-Cow, Lizard, Kneeling Ankle, Couch Stretch, Pigeon |
| T+13 | Core (~7 min) | Bird Dog, WLYT, Hollow/RKC, Side Plank, Hip Flexor |
| T+20 | Dead Hang | 60s |
| T+21 | Knee Maintenance (~5 min) | SL Wall Sit, Standing Ham ISO, Copenhagen |
| T+26 | Upper Body (~20 min) | Scap Pull-Up, Eccentric Pull-Up, Ring Row, Push-Up, KB Press, Face Pull, Scap Push-Up |

### Daily Habits
Short Foot, SL Balance, Backward Walk, Wall Slide, Shoulder CARs

---

## Not Changed
- Exercise prescriptions (sets, reps, holds) — unchanged
- Day R, Activity day, Bellemans Bike — unchanged
- Collagen protocol — unchanged
- MVD logic — unchanged
- Upper body exercises — unchanged
- Knee Block exercises (except default swap) — unchanged
