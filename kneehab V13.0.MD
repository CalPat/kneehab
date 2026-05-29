# kneehab v13.0 — Three-by-Three Restructure (2026-05-29)

## What changed

Major structural restructure. Replaces v12 Day A/B/R/X/N/D weekly framework with a three-by-three rotation: **Strength · Cardio · Rest**.

### New BLOCKS

- **W — Daily Warm-Up (NEW).** ~16 min, 10 items. Mobility + anterior core (Hollow + RKC combo) + lateral core + glute med + adductor + anti-rotation + scap retraction. Before every Strength and Cardio session. Optional on Rest.
- **S — Strength (NEW, replaces Day A + Day B).** Single template, 13 mandatory items + 3 optional finishers. ~47–52 min loaded. Ordered per Baar: ISO Step-Up first (tendon priming), then plyo when scheduled.
- **C — Cardio (NEW, replaces Activity Day).** 60 min protected slot. 3x per cycle = 180 min/week, hitting v12.04 cardio target by structure. Bellemans Bike default opener, modality flex (ride/ruck/hike/row/swim/activity).
- **R — Rest (RESTRUCTURED).** Light walk + Pigeon + Lizard + **Couch Stretch (moved here from Day B at 90s/side).** Long-hold viscoelastic creep work consolidated.

### Removed

- Day A (BLOCKS.A), Day B (BLOCKS.B), Activity Day (BLOCKS.X) — superseded by S, C
- Wall Slide from Daily Habits — WLYT in daily warm-up covers scap retraction 6x/week
- Rule 00 (alternate A/B), Rule 11 (Activity replaces training day), Rule 14 (Upper body mandatory on Day B)

### Considered but cut after expert review

- **Cossack Squat** — frontal-plane work, dropped per BBM critique (corrective-exercise overload for someone months pain-free). Deferred to future versions when bilateral compound progression plateaus.
- **Pallof Press** — loaded anti-rotation, dropped same rationale. Bird Dog in daily warm-up provides positional anti-rotation 6x/week.

## 7-session rotation

`Strength → Cardio → Strength → Cardio → Strength → Cardio → Rest`

| # | Session | Plyo |
|---|---|---|
| 1 | Strength | Jump Rope |
| 2 | Cardio | — |
| 3 | Strength | KB Swing |
| 4 | Cardio | — |
| 5 | Strength | — |
| 6 | Cardio | — |
| 7 | Rest | — |

Days of week not specified — Cal maps cycle positions to calendar. Activity Day absorbs any Cardio slot.

## Strength session (single template)

1. ISO Step-Up (tendon primer, first per Baar)
2. Plyo Primer (when scheduled — Jump Rope / KB Swing / none rotation)
3. KB Front Rack Squat
4. SL RDL
5. Step Down (slant board)
6. Split Squat 2s
7. KB Press
8. Push-Up Tempo
9. Eccentric Pull-Up
10. Ring Row
11. SL Glute Bridge
12. Soleus Calf Raise
13. Tib Raise

**Optional finishers:** Suitcase Carry · Front-Rack Carry · Ab Wheel Rollout (pick 1–2)

**Right-side bodyweight gated:** Step Down, ISO Step-Up, Split Squat (v12.01 thread).

## Daily Warm-Up (~16 min)

90/90 Hip Rotations · Cat-Cow → Down Dog → Up Dog · Half-Kneeling Rotation · Kneeling Ankle DF · **Core Hold Combo (30s Hollow + 30s RKC Plank, NEW)** · Side Plank with Abduction · Copenhagen Plank · Hip Flexor · Bird Dog · WLYT

## Cardio session (60 min)

Bellemans Bike 10–12 min (cartilage opener) + 45–50 min sustained aerobic (ride/ruck/hike/row/swim) OR Activity Day variable.

## Rest session (~35 min)

Light walk 20–30 min · Pigeon 60–90s/side · Lizard 60–90s/side · **Couch Stretch 90s/side (NEW location)** · Warm-up optional.

## Frequency analysis

Every major strength pattern: **3x/week.** Adaptation concern (Schoenfeld meta-analyses, 2–3x/week beats 1x/week) resolved.

| Pattern | Per cycle |
|---|---|
| Squat (KB FR) · Hinge (SL RDL) · Push (KB Press + Push-Up) · Pull (Eccentric PU + Ring Row) · Knee eccentric (Step Down) · Knee isometric (ISO Step-Up) · Knee unilateral (Split Squat) · Glute (SL Bridge) · Calf · Tib | 3x |
| Plyo (Jump Rope + KB Swing rotation) | 2x |
| Daily warm-up patterns (Core Hold, Side Plank w/ Abduction, Copenhagen, Bird Dog, WLYT, etc.) | 6x |
| Long-hold mobility (Pigeon + Lizard + Couch Stretch) | 1x (Rest day) |
| Cardio (intentional) | 3x = 180 min |

## Volume bump vs v12.04

| Item | v12.04 | v13.0 | Change |
|---|---|---|---|
| KB Front Rack Squat | 2x/wk | 3x/wk | +50% |
| Step Down | 2x/wk | 3x/wk | +50–100% |
| ISO Step-Up | rotation choice | 3x/wk | +200% |
| Split Squat 2s | rotation choice | 3x/wk | +200% |
| Knee unilateral total | ~6 exposures/wk | ~9 exposures/wk | +50% |

Right-side bodyweight gating preserved until clean 30s right SL stance reassessment (v12.01 thread, Daily Habits SL Standing Micro-Dose).

## Architecture

- BLOCKS keys: `W`, `S`, `C`, `R`, `N`, `D` (was `A`, `B`, `R`, `X`, `N`, `D`)
- `src-warmup`, `src-strength`, `src-cardio` (new) · `src-rest` (does not exist — Rest renders from BLOCKS.R only, no Reference hub mirror needed) · `src-daily`, src-collagen (preserved)
- `currentBlock` initializes to `'S'` (was `'A'`); load-time IIFE also renders `'S'` first
- Day button row order: W · S · C · R · N · D
- Reference hub tabs: Warm-Up · Strength · Cardio · Daily Habits · Schedule
- Inner Schedule tabs (Reference hub → Schedule sub-tab): Strength · Cardio · Rest
- Schedule page tabs: Strength · Cardio · Rest · Rotation

## Expert review applied

Stress-tested against Attia, Barbell Medicine, Baar, Bellemans, and a generalist kinesiology lens. See `docs/superpowers/specs/2026-05-29-v13-three-by-three-restructure-design.md` Appendix A for full critique log.

Key decisions:
- **Baar:** ISO Step-Up reordered to first in Strength (tendon priming before plyo)
- **BBM:** Cossack and Pallof cut (corrective-exercise overload for asymptomatic state). Barbell + bench acknowledged as future addition (Cal beginner to weight training)
- **Attia VO2 max, Bellemans bike-mandatory, Kinesiology rotational power:** acknowledged, deferred

## Reversibility

If knee symptoms return during Strength: drop Split Squat first (most overlapped with Step Down), then ISO Step-Up. If fatigue overall: drop optional finishers, then cut Strength to 2x per cycle. Plyo intolerance: drop one phase per v12.0 rule.

## Re-evaluate

**2026-07-24 (8 weeks).** Questions: knee tolerance to ~9x/wk unilateral exposures · right-side reassessment criterion (clean 30s right SL stance) · 180 min cardio hitting · warm-up adherence · optional finisher uptake · plyo Phase 2 readiness.

## Total weekly commitment

~7:45–8:15 active. 3 Strength + 3 Cardio + 6 Warm-ups + 1 Rest walk + optional finishers.

## Known acceptable orphans

The following DOM elements remain in `index.html` after v13.0 but are not user-reachable. Acceptable for v13 minimum-viable; future cleanup candidates:

- `ex-base` pane (Reference hub) — old Base · Daily content
- `ex-load` pane (Reference hub) — old Load Day content
- `rs-end` pane (Reference hub → Schedule) — old Endurance content
- `s-end` pane (Schedule page) — old Endurance content
- Legacy Rules 01–18 still reference Day A/Day B/Couch Stretch on Day B — content stale but not contradicting v13 rules above them
- Historical changelog references to Wall Slide and v12 Day A/B (intentionally preserved for change history)
