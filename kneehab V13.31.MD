# kneehab v13.31 — Sun Salutation A Coaching Detail

**Date:** 2026-07-20
**Type:** Minor change (`.01` bump from v13.3)
**Driver:** User — "Provide sun salutation steps. How long to hold each hold? Benefit to hold longer?" → then "Add this detail somewhere."

## What changed

v13.3 swapped the Cat-Cow → Down Dog → Up Dog flow for **Sun Salutation A** but only listed the 10-step sequence. This bump adds the full per-position coaching layer the user asked for — **what to feel and what to look out for at each position** — plus explicit hold timing.

### Placement (deliberate)
- **Inline step detail (`sW_catcow`)** stays the quick-glance version: the 10-step breath-linked sequence, kept short for use mid-warm-up. Added a one-line pointer: *"Tap Full description for per-position Feel / Watch coaching cues."*
- **`src-warmup` "Sun Salutation A" reference card** now carries the deep detail. This is the right home: it renders behind the step's **"▼ Full description"** toggle (via the name-keyed `exDescLookup`) and also populates the reachable **Warm-Up** reference-hub tab. Long content lives here without cluttering the timer view.

### Content added to the card
- **Hold timing summary:** everything flows one breath (~3–5s) except **Down Dog = 5 breaths (~20–30s)**; optional 2-breath Up Dog hold. Note that 30s+ static holds shift from warm-up into connective-tissue remodelling and belong in the **collagen window**, not pre-training (a long static hold right before lifting can transiently blunt force).
- **Per-position Feel / Watch** for all 10 positions (Mountain, Forward Fold, Halfway Lift, Plank, Chaturanga, Up Dog, Down Dog, and the return Halfway Lift / Forward Fold / Mountain), with the biggest faults flagged: lumbar dump in Up Dog, elbows-flaring / shoulders-below-elbow in Chaturanga, rounding the upper back in Down Dog.
- **Knee-safety notes** where relevant (micro-soft knees in Mountain, soft-bend in Forward Fold, thighs-lifted in Up Dog, generous knee-bend in Down Dog — nothing here loads the knee compressively).
- **Safety First** line: sharp/pinching pain (low-back in Up Dog, shoulder in Chaturanga) → back off or take the Cobra / knees-down regression.

## Ripple fixes
- Warm-Up `note`: v13.31 line prepended (what moved where, and the hold-timing principle).
- 3 version strings bumped to v13.31 (`<title>`, `.ms-title`, `.cover-h1`).
- `index.html` re-synced (byte-identical). Old `kneehab V13.3.html` / `.MD` renamed to v13.31.

## Verification
- Embedded `<script>` parses cleanly (`node --check` on the extracted block — OK).
- 7 Feel + 7 Watch entries present in the card; Chaturanga apostrophe is plain HTML (`don't`, no stray backslash — the card is literal HTML, not a JS string).
- 3 version strings = v13.31; `index.html` byte-identical to the v13.31 file.
- No exercise, dose, or ordering change — this is documentation/coaching detail only. Still 12 warm-up items.

## Foundations touched
- **Jules Mitchell** — the hold-timing rationale (poses as loading; sustained holds drive viscoelastic creep) is why long holds are routed to the collagen window rather than the warm-up.
- **Keith Baar** — the collagen-window framing for where 30–60s tissue-loading holds actually pay off.
