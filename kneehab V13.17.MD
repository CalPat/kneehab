# kneehab v13.17 — move per-block "what changed" note to the bottom

**Date:** 2026-06-30
**Type:** Minor (.01) — UI/layout only. No protocol, exercise, dosing, or prescription change.

## Driver
User: "On each page, there is a section near the top dedicated to explaining the changes made to the latest version. Move this to the bottom."

That section is the per-block `note` rendered in `renderBlock()` on the Today tab. Each of the six block views (W · S · C · R · N · D) leads with a `note` whose opening sentences are the version-change history for that block (e.g. S-block opens `<strong>v13.14</strong> — all box work parked…`). It sat directly under the block header, pushing the actual session steps down the page.

## Change
- **Relocated `d.note`** in `renderBlock()` from immediately below the header (above the Day Briefing) to the **very bottom of the block**, after the steps/micro section (`#dayStepsSection`).
- **Border/radius cleanup** so both pieces read as standalone cards instead of a connected stack:
  - Header card: was `border-bottom:none; border-radius:10px 10px 0 0; margin-bottom:0` (designed to butt against the note) → now self-contained `border-radius:10px; margin-bottom:16px` with a full border.
  - Note card: was `border-top:none` (open top, butted under the header) → now `border-radius:10px; margin-top:16px; margin-bottom:0`, a fully bordered card at the foot of the page.
- The Day Briefing (`border-top:none` by design) is untouched and now follows the header directly, exactly as it visually did before (open top after a gap).

## Scope / what did NOT change
- Note **content** is byte-for-byte identical — only its position moved. The version history each block carries (W: v13.11/v13.1/v13.0; S: v13.14/v13.13/v13.06/v13.05/v13.04/v13.0; C: v13.0; D: v13.03; N, R: descriptive) is preserved verbatim.
- No change to steps, briefings, pills, exercise prescriptions, collagen dosing, rotation, or the Revision History page (`#revisions`), which remains the full changelog.
- Single rendering path (`renderBlock`) → the move applies uniformly to all six blocks at once.

## Locations touched
- `renderBlock()` `card.innerHTML` template (header style, note position, note style).
- 3 version strings: `<title>`, `.ms-title` (More menu), `.cover-h1` (Home).

## Housekeeping
- Versioned files realigned: created `kneehab V13.17.html`; removed stale `kneehab V13.15.*` (repo had skipped versioned copies for v13.16).

## Watch
- Confirm on device that the note reading from the **bottom** is acceptable — if the user actually wants the version note *gone* from the block view entirely (it lives in full on the Revision History page), the next step is to drop it from `renderBlock` rather than relocate it.
- 2026-07-24 volume-bump gate still the one load-bearing date.
