# kneehab v14.94 — the Bird Dog decision rule gets a failure exit

**Date:** 2026-08-27
**Change class:** minor (`.01`) — completing v14.92's approved change, which shipped incomplete.

---

## The defect

v14.92 gave the Bird Dog sensor a decision rule, because it had been reporting a number nothing acted
on. The rule had an exit for **success**:

> gap closes and stays closed for ~3 cycles → the item leaves the Opener.

It had **no exit for failure.** That left an open-ended loop:

> gap does not move → escalate the carry → gap does not move → escalate again → …

Which is the same trap in a new costume. v14.92's whole argument was that *a reading you never act on
is a habit, not information* — but a reading that only ever triggers **more intervention**, and can
never conclude *"this is not trainable"*, is equally unfalsifiable. It just takes longer to notice.

## The fix

**If the gap has not moved after ONE full escalation held for ~3 cycles** — a rung up on the carry, or
added right-side distance — **the finding is not trainable by this route, and the sensor retires
anyway.**

A diagnostic that reports the same number through two rounds of intervention is not measuring
something you can change. **Retiring it then is the correct outcome, not a defeat.**

Keeping it would be precisely how the old Daily Warm-Up accumulated items whose justification had
already been withdrawn — the failure mode v14.0 was built to end, and the one v13.43 acted on when it
retired the daily glute-med work after capacity tests came back symmetric.

## Both exits, stated together

| Reading | Conclusion | Action |
|---|---|---|
| Gap **closing** | Working | Change nothing; the reading is the proof |
| Gap **static**, no escalation yet | Not landing | One escalation: carry up a rung, or right-side distance |
| Gap **static** after one escalation × ~3 cycles | **Not trainable by this route** | **Sensor retires** |
| Gap **widening** | Overreaching | Stop adding load; read against the right-side thread |
| Gap **closed + stable** ~3 cycles | Job done | **Sensor retires** |

Two of the five rows end with the item leaving the Opener. That is the point — **it is a diagnostic,
not a fixture.**

---

## Changes

| # | Change |
|---|--------|
| 1 | Failure exit appended to the `sW_bird` decision rule |
| 2 | Version strings ×3 → v14.94 |

**Verification:** `node check.js` → **PASSED 42/42** on `index.html` and on the snapshot.

The edit script now carries a **straight-apostrophe guard** on any content injected into a `BLOCKS`
`d:'...'` string — the v14.93 failure, converted into a precondition rather than a lesson.

## The generalisable rule

**Every decision rule needs both exits.** A rule that can only ever say *"keep going"* is not a
decision rule — it is a commitment device. When writing one, ask what reading would make you
**abandon** the intervention, and write that down first.
