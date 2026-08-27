# kneehab v14.96 — the asymmetry rule, finally defined

**Date:** 2026-08-27
**Change class:** minor (`.01`) — one Key Rule added, one briefing pointer. No exercise changes.

---

## What was actually wrong

**"The asymmetry rule" was invoked by name in four places and defined in none of them.** Worse, all
four mentions sit in **orphaned markup** — `src-glute` and `src-knee`, containers no hub tab points
at — so in the live app the rule was simultaneously **unstated and unreachable.** Cards said *"apply
the asymmetry rule"* and there was nowhere to go and read what it was.

That is why it could not apply generally. It was not a policy that had been scoped too narrowly; it
was a policy that had never been written down.

## The rule, as Key Rules 09

Slot 09 was an existing gap in the numbering, so nothing needed resequencing.

**Applies to EVERY bilateral or alternating item in the program, not only the ones whose cards
happen to mention it.**

**1 · Start the weak side.** It goes first, while fresh, and **it sets the standard** — the strong
side then matches what the weak side actually did, rather than setting its own number. Running the
strong side first is how an asymmetry gets *maintained*: it posts a rep count the weak side then
chases while already fatigued.

**2 · If it feels weaker, give it more.** An extra set, or extra reps, on that side. **Read each
session rather than scheduled** — some days there is nothing in it, and then you do nothing extra.

**3 · Which side is weak is READ, not assumed.** Usually the right, given the documented thread, but
the rule reads the body in front of it rather than presuming.

**4 · The gate interaction — because the two rules can collide.** Step Down and Split Squat are
right-side bodyweight-gated; the squat is box-capped.

> **The asymmetry rule adds VOLUME. It never adds RANGE or LOAD.**

An extra set at the capped depth and gated load is the rule working as intended. More depth, or a
heavier bell, on the weak side is the gate being broken. **When they appear to conflict, the gate
wins.**

That fourth clause is the one worth having. Without it, "do extra on the weak side" reads as
permission to push the exact side the program spent v13.41–43 learning to cap.

## Also added

A pointer at the top of the **Strength briefing**, since that is where nearly all the unilateral work
lives and the Key Rules page is a separate tab. One line, same content, so the rule surfaces where it
gets used.

---

## Changes

| # | Change |
|---|--------|
| 1 | **Key Rules 09** — the asymmetry rule defined canonically, applying program-wide |
| 2 | Strength briefing gains a pointer to it, including the gate-wins clause |
| 3 | Version strings ×3 → v14.96 |

**Verification:** `node check.js` → **PASSED 42/42** on `index.html` and on the snapshot; div balance
1043/1043.

## Noted, not changed

- **Key Rules 16 reads "Bird Dog: pick one variation per session."** That is stale: v14.7 made Bird
  Dog a **sensor** with one fixed form (~30s, log the quiet height), and v14.92/94 gave it a decision
  rule. There is no longer a variation to pick. Same defect class as the v14.91 sweep — flagged, left
  alone.
- **The version scheme is out of room.** `.01` minor from v14.96 gives v14.97; a `.1` medium from
  v14.9x collides with v15.0, which reads as major. This needs a decision before the next
  medium-sized change.
