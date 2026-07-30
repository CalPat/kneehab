# kneehab v13.32 — Shin-Box Get-Up as a Hands-Free Continuous Flow

**Date:** 2026-07-30
**Type:** Minor change (`.01` bump from v13.31)
**Driver:** User — doing the 90/90 rotation hands-free and pushing it harder → "hands free with getup full flow. Add."

## What changed

The Shin-Box Get-Up (`sW_9090`, the v13.3 replacement for static 90/90) was described as "rise to a tall kneel … return under control and switch shins." This bump recues it as the **hands-free continuous flow** the user is actually doing — one unbroken loop where the shin-switch sweep serves as the hands-free 90/90 rotation and the rise as the glute-driven strength. No dose or item change (still 12 warm-up items).

### Content added (both the inline step and the mirrored reference card)
- **Hands-free as the default cue**, not just a progression rung: hands float forward at chest height as a **counterbalance**, never a push-off lever.
- **The loop reframed:** rise to tall kneel (pelvis leads, chest tall) → own the top → lower under control → **sweep shins through the floor to the other side without planting a hand**. The sweep *is* the hands-free rotation, travelling the same hip IR (front) / ER (back) end-ranges the old static drill isolated. Bottom + switch = rotation; top = glute-driven rise.
- **Counterbalance-not-push cue:** reach the hands forward to shift centre of mass over the base rather than pressing the ground.
- **Autoregulation (rep-by-rep):** if you can't rise cleanly, drop one fingertip as a kickstand for that rep only, then remove it as you warm — not a permanent regression.
- **Knee-safety note:** the back-leg knee is in loaded flexion + rotation on the rise — sharp medial pinch (not a muscular stretch) → reduce depth or narrow the back-leg angle; sharp pain = stop.
- **Loaded progression added:** pause at tall-kneel → overhead reach at the top → **light goblet KB at the chest through the flow**.

## Placement
- **Inline step detail (`sW_9090`)** and the **`src-warmup` "Shin-Box Get-Ups" reference card** (which feeds the "▼ Full description" toggle via the name-keyed `exDescLookup`, and the reachable Warm-Up hub tab) both updated and kept in sync.
- **Static/slow 90/90 stays on Day R** (General flow + "Hips Tight") as the dedicated deep-mobility dose — warm-up = integrated strength+mobility (get-up), Day R = mobility depth. Unchanged this bump.

## Ripple fixes
- Warm-Up `note`: v13.32 line prepended (what recued, and the hands-free-loop principle).
- `sub` on the step and `ex-rx` on the reference card annotated "· hands-free".
- 3 version strings bumped to v13.32 (`<title>`, `.ms-title`, `.cover-h1`).
- `index.html` re-synced (byte-identical). Old `kneehab V13.31.html` / `.MD` removed.

## Verification
- Embedded `<script>` parses cleanly (`new Function` on the extracted block — OK). New apostrophes in the JS string (`don\'t`, `can\'t`) properly escaped; the HTML reference card uses literal apostrophes.
- 3 version strings = v13.32; remaining `v13.31` refs are historical changelog entries only (Sun Salutation A card/step, and the retained history line in the Warm-Up note).
- `index.html` byte-identical to the v13.32 file (`cmp` clean).
- No exercise, dose, or ordering change — coaching/execution detail only. Still 12 warm-up items.

## Foundations touched
- **Ben Patrick / ATG** — the hands-free get-up loads the anterior/rotational hip pattern through range under active control, addressing upstream PFPS drivers.
- **Peter Attia** — the floor→tall-kneel rise is a "get off the floor" functional/longevity pattern; the goblet-loaded progression pushes it toward a trainable strength stimulus rather than a mobility ritual.
