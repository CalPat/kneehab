# kneehab v13.4 — Deep Squat Hold (collagen-window range acquisition)

**Date:** 2026-08-15
**Type:** Medium change (`.1` bump from v13.31)
**Driver:** User — "I wonder if limited hinge range and causes needs to be addressed more." → Socratic differential → self-assessment battery → "Only add deep squat hold."

## What prompted it

The presenting question was **limited hinge range**. Working the differential apart showed the framing was wrong in a useful way — it was three unrelated things, and the one that mattered was not the hinge.

### Self-assessment results (Aug 2026, right side unless noted)

| Test | Result | Reads as |
|---|---|---|
| Knee-to-wall (ankle DF) | 12–13 cm | Adequate — mild contributor only |
| Passive hip flexion (knee-to-chest) | 130°, groin block + tightness below kneecap | Top of normal range |
| Straight-leg raise | 80°, no neural response | Hamstring length adequate; nerve clear |
| Heel-elevated squat | Better, still rounds at bottom | Ankle assists but is not the limiter |
| Wide stance / toes out | No change | No hip-joint block |
| Supported + heel-elevated squat | **Reaches the floor, neutral spine** | **The range exists** |
| Down Dog | Low back, not thoracic | Explained by SLR 80° |
| Knee pain during/after deep squat | None | Tightness = unadapted tissue, not pathology |

### Conclusions

- **The hinge was never the problem.** Stopping at parallel is exactly what an 80° SLR predicts. Concern dropped.
- **Down Dog rounding is the same 80° SLR** meeting a straight-leg position that exceeds it. Already correctly accommodated by the existing bend-the-knees cue. No change made.
- **The deep squat is the real finding**, and nothing structural blocks it — hamstring, nerve, hip joint and ankle all cleared. What is missing is weight-shift control and simple exposure to a range the program has never trained.
- **Tightness below the right kneecap** in deep flexion is the extensor mechanism at the end of its current extensibility. Pain-free during and after, so unadapted rather than irritated — trainable.
- Note the biarticular logic that drove the differential: in a deep squat the hamstrings are slack at the knee, so hamstring length cannot be the limiter. Taking "limited hinge range" at face value would have targeted the one tissue that is not the problem.

## What changed

**One addition. No new exercises elsewhere, no time added to any morning session.**

### `sN_dsq` — Deep Squat Hold, Collagen Block

Placed immediately after the collagen dose and **before** the loading options, as a **~3 min add-on that pairs with any option** rather than a sixth mutually-exclusive pick. Range acquisition depends on frequency, and at 3 min it does not displace the chosen option.

**Prescription:** 3 × 30–45s, heels on a 1–2 inch elevation, light KB/plate at the chest as counterbalance. Sit to the deepest position where the low back stays **neutral** — that depth, not maximum depth, is the training position. Last 10–15s spent rocking gently (Bellemans cyclic compression).

**Four detail cards:**
1. **The exercise** — setup, primary muscles (quads in deep lengthened position, glute max, adductor magnus, deep hip ERs), connective-tissue target (patellar/quad tendon at depth, capsule, deep-flexion cartilage), compensations (lumbar tuck = ceiling, heels lifting, knee valgus, breath-holding, hanging passively on the counterbalance), Safety First line.
2. **Progression ladder** — the assists *are* the levers. L1 heels+weight → L2 lighter weight → L3 hands free → L4 less elevation → L5 flat+weight → L6 flat unsupported 30s (graduation). Governed by the existing universal 2×2 rule, one lever at a time. Depth is explicitly **not** a lever.
3. **Why the collagen window** — Baar (tendon adaptation is angle-specific; the deep angle currently gets no loading anywhere in the program), Mitchell (30s+ = viscoelastic creep; v13.31 already routed holds of this length here rather than the warm-up), Bellemans (rocking = cyclic compression of deep-flexion cartilage contact zones that otherwise get no fluid exchange). Includes the keep-it-unfussy warning against repeating the v13.07 Bellemans Bike failure.
4. **Gate** — do not start while the knee is tight. Start criterion in 2×2 language (≤2/10 during and morning after, two consecutive sessions). Reassessment markers: knee-to-wall cm, and the L6 graduation target. Long-ride note: post-ride tightness tracks knee state going in, not the ride.

## Ripple fixes
- Collagen Block `note`: v13.4 line prepended (what was added, why this slot, that it is gated).
- Collagen Block `briefing.ok`: line added clarifying add-on vs. pick.
- 3 version strings bumped to v13.4 (`<title>`, `.ms-title`, `.cover-h1`).
- `index.html` re-synced. Old `kneehab V13.31.html` / `.MD` removed.

## Deliberately NOT changed

User scoped this to the hold only — the other two candidates were judged obvious enough not to need writing in:

- **Depth as a progression lever on the KB Front Rack Squat.** Still progresses by load only (single → double KB). If it is ever added, note the 2×2 rule requires alternating with load, not stacking.
- **Activity-day readiness gate.** Ski/hike/ride still has no knees-permitting decision tree of the kind plyo has, despite post-ride tightness tracking pre-ride knee state.
- **Down Dog / SLR 80°.** Low priority, already accommodated.

## Prior-art note

A "Deep Squat Hold" was dropped from Daily Habits in v13.03 as an unmeasured casual item. This is a different thing — assessment-driven, laddered, gated, and placed in the synthesis window for a specific mechanical reason. Called out explicitly in the exercise card so the history is not confusing later.

## Verification
- Embedded `<script>` parses cleanly (`node --check` on the extracted block — OK).
- 3 version strings = v13.4; 4 remaining `v13.31` strings are historical changelog citations, correct to keep.
- `index.html` byte-identical to `kneehab V13.4.html`.
- No change to any existing exercise, dose, session length, or ordering.

## Foundations touched
- **Keith Baar** — angle-specific tendon adaptation; the deep knee angle is the range with no current loading.
- **Jules Mitchell** — 30s+ holds as viscoelastic creep, not stretching.
- **Johan Bellemans** — cyclic compressive loading for avascular cartilage in the deep-flexion contact zones.
- **Ben Patrick / ATG** — deep-range anterior chain tolerance; the reason unadapted-but-painless tightness at depth is trainable rather than a stop signal.
