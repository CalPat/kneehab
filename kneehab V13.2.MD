# kneehab v13.2 — Anterior Core Restructure

**Date:** 2026-07-07
**Type:** Medium change (`.1` bump from the v13.1x minor line)
**Driver:** User review of the anterior-core exercises (Hollow Hold vs RKC Plank vs Ab Wheel) — "should the ab roller replace either of these? is there one exercise that's preferred?" — followed by a decision to also remove the optional finishers entirely.

## The biomechanical read

All three exercises are the **same movement category — anti-extension** (resisting lumbar extension). They differ only in contraction type and range:

- **Hollow Hold** — isometric, supine; rectus + hip-flexor dominant.
- **RKC Plank** — isometric, prone; full-body co-contraction (irradiation). The more complete of the two isometrics — it *contains* the Hollow.
- **Ab Wheel Rollout** — dynamic, eccentric, full-ROM under load. The only progressive option, and the closest core match to ski/MTB descents (dynamic anti-extension under load, not a static hold).

**Conclusions:** Hollow and RKC are near-redundant → RKC is the keeper, Hollow is the most dispensable. The Ab Wheel is the highest-value of the three for a healthy, pain-free athlete because it's the one with progression runway and sport transfer. Straight-swapping the Ab Wheel into the daily warm-up was rejected — loaded eccentric anti-extension 6×/week is an overuse setup; it belongs in the (less frequent) Strength session while the isometric brace stays as the daily primer.

## Changes

### Change A — Warm-Up: Hollow dropped, RKC solo
- `sW_core` retitled **Core Hold Combo → RKC Plank**. Sub `30–45s · max tension`, timer 60s → 45s.
- Detail rewritten to RKC-only (no supine→prone transition). Primary muscles + compensations (lumbar sag, hip pike, breath-holding) baked in.
- Framed as the daily **bracing-skill primer**; progressive anterior-core load explicitly handed off to the Strength Ab Wheel.
- Warm-Up still 12 items (1:1 replacement).

### Change B — Strength: Ab Wheel promoted to a fixed every-S core slot
- New step `sS_abwheel` (**2 × 6–10 · 3s eccentric**), placed last in the template (position 14, anterior core after the main lifts).
- Full protocol detail: primary muscles (rectus/obliques/TVA + lats/serratus), compensations, regression (tall-kneeling short ROM / barbell+plates), progression (knees → tall kneeling → toes → standing).
- **Self-titration note** added — every-S loaded eccentric has no built-in deload, so back off ROM/volume if the low back is fatigued (or grip aggravates the lateral elbow → sub barbell).

### Change C — Optional finishers removed entirely (not integrated)
- The `sS_opt` block is deleted. **Suitcase Carry (heavy) + Front-Rack Carry are gone**, not folded into the mandatory template.
- The **Warm-Up Suitcase Carry activation dose is kept.** Its detail + reference-hub card were updated: with the heavy-carry Strength finisher removed, the Warm-Up carry is now the program's home for loaded lateral-core work (no ceiling — go heavier, 20–24 kg+).

### Change D — Set volume trimmed 3 → 2 working sets (main lifts)
- User leans toward 2 sets; asked if that's sufficient per the strength literature. Answer: **yes, for a strength/rehab/longevity goal — provided the 2 sets go to ~RPE 8 (2 reps in reserve).**
- **Evidence:** strength adaptation is largely neural and captured in the first 1–2 sets; the marginal 2→3 set gain for *maximal strength* is small (Krieger 2010; Ralston 2017; Schoenfeld/Ogborn/Krieger 2017). The 3rd set mainly buys *hypertrophy* (volume-dependent), which isn't the priority. Tendon adaptation responds to load/TUT more than set count. Fewer sets also lowers cumulative knee/tendon/systemic fatigue across the 3 S sessions/cycle.
- **Dropped 3 → 2 (nine lifts):** KB Front Rack Squat, Step Down, Kickstand RDL, Split Squat, KB Press, Push-Up, Eccentric Pull-Up, Ring Row, SL Glute Bridge.
- **Kept at 3 (deliberate):** ISO Step-Up (tendon time-under-tension, Baar/Rio), Soleus (its only exposure). Unchanged low-volume: Tib Raise (1), Ab Wheel (2), KB Swing primer (3×10, a power primer not a strength set).
- **Effort must rise to RPE 8** — this is baked into the note + briefing + a new "2 sets @ RPE 8" pill. Don't drop the set AND stay easy.
- Time drops ~50–55 → **~40–45 min**. Progression triggers updated (Kickstand ladder now "2×8 clean RPE 8 ×2 sessions → +4 kg"; no-KB substitute 3×6 → 2×6).

## Ripple fixes (so nothing dangles)
- Strength template count **13 → 14 mandatory items** (Rule row, briefing `ok`, note).
- Strength time estimate `~47–52 min` → `~50–55 min` (stepLabel + pill).
- Warm-Up `note`, `briefing.ok`, `caution` all updated to RKC-only; floor-block ordering list "Core Combo" → "RKC Plank".
- Reference hub: Core Hold Combo card → RKC Plank; Optional Finishers card → Ab Wheel Rollout card; two Suitcase Carry pointers to the deleted finisher rewritten.
- 3 version locations bumped to v13.2 (title, `.ms-title`, `.cover-h1`).

## Untouched (intentional)
- Pre-2100 changelog history and the unreachable legacy ex-cards (Hollow Body Hold / RKC / Ab Wheel at ~line 2067–2070) — acceptable orphans per project convention.
- Everything else in Strength, Cardio, Rest, Daily Habits, Collagen Block.

## Verification
- 14 Strength step IDs present, ending in `sS_abwheel`.
- Inline script parses cleanly (`node --check` equivalent on embedded `<script>`).
- No live references to "Optional Finishers", "Core Hold Combo", or "sS_opt" remain.

## Watch
- Does the Ab Wheel actually get done every S now that it's mandatory (it was the most-skipped optional)?
- Low-back fatigue / carryover from every-S loaded eccentric — the self-titration note is the release valve.
- Does the Warm-Up Suitcase Carry actually get loaded heavier now that it's the sole lateral-core home, or does it stay at the 16 kg activation floor?
- 2026-07-24 volume-bump gate still the one load-bearing date.
