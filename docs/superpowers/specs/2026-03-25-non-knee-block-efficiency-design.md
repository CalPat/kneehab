# Non-Knee Block Efficiency — Design Spec
**Date:** 2026-03-25
**Version target:** v10.0

---

## Context

The user has reached Phase 1 exit criteria: all exercises performed pain-free, Slant Board Step Down (hardest exercise) feels solid. The knee and lower body block is retained as-is. This spec covers efficiency and phase-appropriate upgrades to the four supporting blocks: Mobility, Spinal & Shoulder, Core, and Glute.

**Scope boundary:** Knee & Lower Body block is untouched.

---

## Changes

### 1. Mobility Block

**Before:** 6 exercises — 90/90 Hip Rotations, Cat-Cow, World's Greatest Stretch, Wall Ankle Dorsiflexion, Couch Stretch, Lateral Quad Roll

**After:** 5 exercises — 90/90 Hip Rotations, Cat-Cow → Down Dog → Up Dog (flow), World's Greatest Stretch, Wall Ankle Dorsiflexion, Couch Stretch

#### 1a. Cat-Cow → Down Dog → Up Dog (combined flow)
Replaces standalone Cat-Cow. Natural transition — already on all fours. Cat-Cow primes segmental spinal mobility before Down Dog loads hamstrings, calves, and shoulder girdle.

- **Prescription:** 5 Cat-Cows → flow directly into Down Dog → Up Dog, 3–5 cycles. ~90s total.
- **Rationale:** Increases yield of the Cat-Cow slot from general spinal mobility to a multi-joint warm-up sequence. Zero setup change.

#### 1b. Lateral Quad Roll → Daily Habits
Myofascial release, not mobility work. Moved to Daily Habits alongside tibialis raise and backward walk. Benefits from frequency (daily) more than a formal block position.

- **Prescription in Daily Habits:** 60s each side, any time. Foam roller.
- **Rationale:** Frees ~60s from the formal mobility block without losing the VL/patella tracking stimulus.

#### 1c. Recovery Spinal & Shoulder — Remove standalone Down Dog → Up Dog
Down Dog → Up Dog currently appears in the Recovery Spinal & Shoulder block (7 exercises). Since the Cat-Cow → Down Dog → Up Dog flow now runs in the Mobility block on all day types, the standalone in Recovery S&S is redundant. Remove it. Recovery S&S goes from 7 → 6 exercises.

#### 1d. MVD (Minimum Viable Day) — Update Cat-Cow entry
The Recovery Day MVD prescription lists "Cat-Cow" as one of its four exercises. Update this to "Cat-Cow → Down Dog → Up Dog flow" so MVD days retain the Down Dog coverage now that the standalone is removed from Recovery S&S. MVD stays at 4 exercises; the slot extends from ~60s to ~90s.

---

### 2. Spinal & Shoulder Block

**No changes.** Load Day (Bird Dog, WLYT, Face Pull) is already optimal — three distinct patterns covering anti-rotation, scapular stability, and external rotation. No cuts warranted.

---

### 3. Core Block

**No changes.** Three exercises (Hollow Body Hold, Side Plank, RKC Plank) cover three distinct planes and are already lean at ~4 min.

---

### 4. Glute Block

#### 4a. Hip Abduction → Adductor Side-Lying Isometric Hold
Hip Abduction is a Phase 1 glute medius activation exercise. The program already documents its own exit path: adductor isometric → Copenhagen Plank. At Phase 1 exit, Hip Abduction is the most phase-stale exercise in these four blocks.

- **Replacement:** Adductor Side-Lying Isometric Hold — 3 × 30s each side.
- **Position:** Same lying-down setup as Hip Abduction. Feet stacked or slight offset, squeeze adductors isometrically.
- **Rationale:** Builds the specific adductor tissue tolerance required before Copenhagen Plank can safely load the groin. The load gap between Hip Abduction and CPH is large enough to cause groin strain without this bridge.
- **Next lever:** Copenhagen Plank — introduce after 2–4 weeks of adductor isometric tolerance (pain-free, consistent). The exercise card description must include: "After 2–4 weeks pain-free, progress to Copenhagen Plank — replace this exercise. Do not run both simultaneously."

#### 4b. Single-Leg Glute Bridge and Supine Hip ER with Block
No changes. Both are distinct, justified, and have unpulled levers (SLGB: elevated foot, loaded).

---

### 5. Phase 2 Lateral Hip Additions (Phases & Progression page)

Two exercises added to Phase 2 documentation — not introduced into the current Load Day block immediately, but available to introduce one at a time per the 2×2 rule once Phase 1 readiness criteria are confirmed.

#### 5a. Lateral Crossunder Lunge
- **Movement:** Step one foot behind and across the body into a deep lunge. Transverse + frontal plane hip loading.
- **Primary muscles:** Glute medius (eccentric), hip adductors, quad (front leg), hip external rotators.
- **Phase 2 prescription:** Bodyweight, 2 × 8 each side, controlled descent.
- **Levers:** Bodyweight → loaded (dumbbell) / standard → 3s eccentric / bilateral → single direction emphasis.
- **Rationale:** Distinct from Cossack — transverse and frontal plane combined vs. pure frontal plane. Not a regression of Cossack; introduce as a concurrent Phase 2 addition, not as a Cossack alternative. Ski-relevant rotational hip control. Phase 2 documentation should note this distinction explicitly to prevent future conflation.
- **Common compensation:** Trunk rotation or lateral lean — keep torso upright and square.

#### 5b. Cossack Squat (expanded progression ladder)
Already referenced in Phase 2 notes. Expand with explicit ladder:

1. Lateral lunge, partial depth (bodyweight, feet ~1.5× shoulder width)
2. Lateral lunge, full depth (increase stance, full knee drive over toes)
3. Cossack with heel elevated (small plate or wedge under squatting heel — reduces dorsiflexion demand)
4. Full Cossack, flat floor, bodyweight
5. Full Cossack with load (goblet hold)

- **Entry gate:** Deep knee flexion pain-free, single-leg control established (per existing Phase 2 note).
- **Limiting factor is usually passive adductor flexibility** — do not force depth. Each rung governed by 2×2 rule.
- **Primary muscles:** Hip adductors (squatting side), hip extensors, quad (squatting), hip external rotators (extended leg).
- **Common compensation:** Squatting heel rising — use elevation until dorsiflexion improves.

---

## Summary Table

| Block | Exercise | Change |
|---|---|---|
| Mobility | Cat-Cow | Replaced by Cat-Cow → Down Dog → Up Dog flow |
| Mobility | Lateral Quad Roll | Moved to Daily Habits |
| Recovery S&S | Down Dog → Up Dog (standalone) | Removed (covered in mobility block) |
| Spinal & Shoulder | All | No change |
| Core | All | No change |
| Glute | Hip Abduction | Replaced by Adductor Side-Lying Isometric Hold |
| Glute | SLGB, Hip ER | No change |
| Phase 2 docs | Lateral Crossunder Lunge | New addition |
| Phase 2 docs | Cossack Squat | Expanded with full progression ladder |

---

## Implementation Notes

- Version bump: v9.9 → v10.0 (medium change — multiple block updates + new Phase 2 content)
- Files to update: `index.html` (all changes), `index.html` updated as `kneehab V10.0.html`, `kneehab V10.0.MD` summary
- `src-mob` element: update exercise cards (Cat-Cow → combined flow card)
- `src-glute` element: replace Hip Abduction card with Adductor Isometric Hold card — **also update `sC_glut` in BLOCKS 'C' JS object and the Day C schedule card description text** (three locations total)
- `src-postC` element (Recovery S&S): remove Down Dog → Up Dog card
- MVD prescription: update "Cat-Cow" → "Cat-Cow → Down Dog → Up Dog flow"
- Daily Habits section: add Lateral Quad Roll (60s each side, foam roller)
- Phase 2 section of `#phases` page: add Crossunder Lunge item (with "distinct from Cossack — not an alternative" note) + expand Cossack ladder
- Adductor Isometric Hold card description: include next-lever note — "After 2–4 weeks pain-free, progress to Copenhagen Plank. Do not run both simultaneously."
