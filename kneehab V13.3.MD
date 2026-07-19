# kneehab v13.3 — Warm-Up Freshen (Shin-Box + Sun Salute A)

**Date:** 2026-07-19
**Type:** Medium change (`.1` bump from v13.2)
**Driver:** User — "the daily warm-up is starting to become stale. It's been 8+ months doing some of the same exercises. Let's discuss alternate exercises, but do not want to reduce effectiveness of each."

## The biomechanical read

Staleness ≠ ineffectiveness. After 8+ months the tissue adaptation is banked; what's gone stale is the **novelty of stimulus**. So the constraint was: swap the *exercise*, hold the **role + contraction type + ROM + dose** constant. Two slots were swapped for like-for-like (or better) movements; everything else was reviewed and deliberately kept. No dose changed, item count stays **12**.

Discussion covered candidate swaps for all 12 items; the user accepted two, kept the rest.

## Changes

### Change A — 90/90 Hip Rotations → Shin-Box Get-Ups (`sW_9090`)
- Title/sub retitled; **`id` kept `sW_9090`** so saved step/timer state and the description lookup don't break (same convention v13.2 used retitling `sW_core`).
- **Self-warming, so it's a true 1:1 replacement — not an addition.** The get-up rises from and returns through the exact 90/90 IR (front leg) / ER (back leg) end-ranges the static drill isolated, so the first 2–3 slow reps *are* the mobility on-ramp. User asked directly whether a light 90/90 was still needed first — answer baked into the detail: no.
- Full protocol in detail: primary (hip IR/ER rotators through range, glute max + med on the rise), compensations (momentum into end-range, pushing off the hands, torso pitching forward), regression (stay seated, slow 90/90 pivots before adding the rise — recovers the old drill on cold mornings), progression (hands-free → pause at tall-kneel → overhead reach).

### Change B — Cat-Cow → Down Dog → Up Dog flow → Sun Salutation A (`sW_catcow`)
- Title/sub retitled; **`id` kept `sW_catcow`**.
- Richer flow, **same spinal-articulation + scap targets** (Mitchell: poses = mechanical loading). User asked to **enumerate the sequence** — the full 10-step breath-linked sequence (Mountain → Forward Fold → Halfway Lift → Plank → Chaturanga → Up Dog → Down Dog → Halfway Lift → Forward Fold → Mountain) is written into the detail.
- The **v12.02 serratus cue "press the floor, scaps wide"** is preserved in the Down Dog hold, so the scap-protraction stimulus carries over intact.
- Compensations (lumbar dumping in Up Dog, shrugging in Down Dog, breath-holding), regression (knees-down through Plank, or the plain Cat-Cow flow), progression (longer Down Dog hold / float to a hop) all included.

### Reviewed and kept unchanged (user decision)
- **Bird Dog** — user preferred it over the Dead Bug alternate and declined a variation-menu expansion. Left exactly as-is.
- WLYT, RKC Plank, Copenhagen, Hip Flexor, the kneeling block (Half-Kneeling Rotation, Ankle DF), and the whole standing block (Suitcase Carry, Standing Hip Abduction, Mǎbù) — all confirmed fine.

## Ripple fixes (so nothing dangles)
- **`src-warmup` reference cards** for both swapped items renamed + rewritten. Required, not cosmetic: the "Full description" button resolves via `exDescLookup[name]`, keyed by exercise name — a renamed step title with no matching `src-warmup` card would show no description. Cards now match the new titles.
- These cards also mirror into the reachable **Warm-Up** reference-hub tab via `initExHub()`, so the hub is current too.
- Warm-Up `note`: v13.3 changelog line prepended; floor-block ordering list updated `90/90 · Cat-Cow` → `Shin-Box · Sun Salute A`.
- 3 version locations bumped to v13.3 (`<title>`, `.ms-title`, `.cover-h1`).
- `index.html` re-synced to the v13.3 file (byte-identical). Old `kneehab V13.2.html` / `.MD` deleted.

## Untouched (intentional)
- **The separate "Base Exercises → Mobility Block"** reference tab still lists its own legacy 90/90 and Cat-Cow entries (different dose: 10×/3s hold). This is the parallel legacy structure v13.2 treated as acceptable orphans; left alone to keep scope on the daily warm-up. **Flagged for the user** — align on a later pass if desired.
- Bird Dog's v13.11 historical annotation still reads "follows Cat-Cow"; kept as a dated historical note (convention: old version notes reference old names).
- Pre-2100 changelog history and unreachable legacy ex-cards.

## Verification
- Embedded `<script>` parses cleanly (`node --check` on the extracted script block — OK).
- Both swaps present as live step objects; both `src-warmup` cards renamed; 3 version strings = v13.3; `index.html` byte-identical to the v13.3 file.
- `id` values unchanged → no saved-state / description-lookup breakage.

## Watch
- **Sun Salute A returns to standing each round**, so the strict floor→kneeling→standing clustering from v13.11 (which existed to cut up/down transitions) is slightly relaxed. Detail + note tell the user to run the rounds knees-down or slot it first if the up/down is annoying. Watch whether this actually bugs them in practice.
- Does the Shin-Box get treated as self-warming, or does the user tack a redundant 90/90 on the front out of habit?
- Staleness relief: two swaps this round. The other ~10 slots have banked alternates from the discussion (Sun Salute already in; Dead Bug, band pull-aparts, stir-the-pot, Open Book, banded ankle distraction, lateral walks, goblet Cossack) ready for the next refresh wave if needed.
