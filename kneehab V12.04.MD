# kneehab v12.04 — Weekly Cardio Total (2026-05-28)

## What changed

- **NEW · Weekly Cardio Total at top of Daily Habits.** First item in BLOCKS.D.steps and first card in src-daily. Target 180 min/week, floor 150 min/week. The only Daily Habit with a weekly accountability target.
- **NEW · Key Rule 06.5** in the Rules section captures the target, the sequencing rule, and the time-constrained hierarchy.
- **No structural change to Day A, Day B, Day R, Activity Day, or Collagen Block.** This is an accountability layer over existing aerobic exposure (Bellemans Bike, PM rucks, Activity Day, walking-as-base), not new sessions.

## Why

Cardio exposure had been informal — Bellemans Bike, optional PM rucks, weekly Activity Day, walking habits. No prescription, no weekly tally, no floor. The user noted that aerobic habits are less consistent than Day A / Day B and asked for a weekly target at the top of Daily Habits, plus a priority order for time-constrained weeks.

## The number: 180 min/week, 150 min floor

Cross-source consensus on the weekly aerobic budget for cardiovascular and metabolic health:

| Source | Floor | Ideal |
| --- | --- | --- |
| WHO Physical Activity Guidelines | 150 min/week moderate | 300 min/week |
| AHA | 150 min/week moderate | 150–300 min/week |
| Peter Attia | 180 min/week Zone 2 | 240+ min/week |
| Iñigo San Millán | 180 min/week for mito adaptation | 4–5× 45 min/week |
| Barbell Medicine | 150 min/week | 300 min/week |

180 min/week sits between the WHO/AHA/BBM floor (150) and the higher end (300). Both longevity-oriented (Attia / San Millán) and strength-training-oriented (Barbell Medicine) camps converge here.

## Framing: BBM-flavored, not strict-zone

User does not subscribe to strict zone prescription ("do what feels good"). v12.04 adopts the Barbell Medicine framing:

- **Log time, not HR.** No zone gating.
- **Intuitive intensity.** Mix easy and tempo as the day dictates.
- **Volume matters more than session structure.** 2–3 sessions × 30–60 min works.
- Rationale cited generally (cardiovascular + metabolic health) rather than leaning hard on mitochondrial-density-as-primary-mechanism. The number is consensus regardless of which mechanism you weight.

## What counts vs. what does not

| Counts | Does NOT count |
| --- | --- |
| Bellemans Bike sessions | Errand walking |
| PM rucks | Pacing while on calls |
| Activity Day (ski, hike, ride) | Getting around the house |
| Dedicated ride / row / hike / swim | (these are the unlimited movement floor — separate goal) |
| Loaded carry walks |  |

The line: above ambient walking, with a sustained aerobic effort.

## Sequencing rule

Dedicated cardio session goes **after** strength on the same day, or **6+ hours separated**. Never immediately before Day A or Day B (acute fatigue blunts strength output). Within a week, distribution is flexible.

## Time-constrained hierarchy

When the week is squeezed, drop in this order (skip from the bottom up):

| Priority | Item | Why it survives a hard cut |
| --- | --- | --- |
| 1 | Day A (full) | Named primary outcome (knee). Irreplaceable. |
| 2 | Daily Habits floor — Tib Raise, Posture Check, SL Standing | <5 min total, knee-critical. |
| 3 | Collagen Block × 2–3 / week | Tendon synthesis window can't be reconstructed elsewhere. |
| 4 | Day B (full) | Upper-body balance, spinal axial load. |
| 5 | Weekly cardio floor (150 min) | Mito and CV adaptation. Distributable across any day. |
| 6 | Day R (mobility flow) | Beneficial but not load-bearing for outcomes. |
| 7 | Day B Suitcase Carry finisher | Nice-to-have if Day B is rushed. |

**On "min cardio before another strength day":** The literature does not support per-session gating between strength days — what matters is weekly tally and not stacking cardio *immediately before* strength. Walking the dog between Day A and Day B counts as the movement floor; the 150-min target is cumulative across the week regardless of strength sequencing.

## Architecture notes

- New step `sD_cardio` added at the top of `BLOCKS.D.steps` (above existing `sD_stand` and `sD_slstand`).
- New `card-highlight` card added at the top of `src-daily` for Reference hub mirroring via `exDescLookup`.
- New Key Rule **06.5** (amber accent, between Rule 06 Zone 2 and Rule 07 Skin-sourced collagen).
- `BLOCKS.D.note` updated to reference v12.04 at the very top.
- Three version strings bumped: `<title>`, `.ms-title`, `.cover-h1`.
- No changes to Day A, Day B, Day R, Activity, Collagen Block structure.

## Reversibility

If the weekly tally creates friction or feels punitive (against user's "do what feels good" stance), the cardio step and Key Rule 06.5 can both be removed in a single change without touching other content. The src-daily card removes cleanly from the hub mirror.

## Re-evaluation

Re-evaluate **2026-07-28** (~9 weeks). Questions:
- Is 180 min/week being hit in typical weeks? If consistently under, is 150 the realistic target?
- Does Activity Day usually carry the week, or is dedicated midweek cardio actually filling the gap?
- Does the floor (150) protect against weeks where Activity Day doesn't happen?
