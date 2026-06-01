# kneehab v13.01 — Default Day = Warm-Up

**Date:** 2026-06-01
**Type:** Minor (UX / default-state change, no protocol change)

## What changed
1. **Today tab default load = W (Daily Warm-Up).** Was S (Strength) in v13.0.
   - `let currentBlock = 'W'` (was `'S'`)
   - Load-time IIFE selector and `renderBlock()` now target `'W'` (was `'S'`)
2. **W (Warm-Up) day-button icon: 🌅 → ☀️.** Kept the sun semantic (morning / wake-up) but switched from the sunrise scene-pictogram (renders as a square photo of horizon + sun) to the plain sun symbol (round, no frame).

## Why
- Warm-Up is now the daily entry point (precedes every S and C session, optional on R) — it should be what loads when the app opens, not whichever session is next.
- Icon style consistency: every other day button is either a figure (💪 🚴 🧘) or a symbol (⚗️ ✨). The sunrise scene was the visual outlier.

## What did NOT change
- No protocol, exercise, dose, or rotation change.
- Day buttons stay in the same order: W · S · C · R · N · D.
- Reference hub tabs unchanged.
- Schedule, rotation rules, right-side gating — all unchanged.

## Files
- `index.html` — three version-string locations bumped (title, ms-title, cover-h1), icon swapped, default-block init changed.
- `kneehab V13.01.html` — snapshot.
- `kneehab V13.0.html` and `kneehab V13.0.MD` — deleted per single-latest-version rule.

## Reversibility
Trivial. Revert default-block lines + icon character + three version strings.
