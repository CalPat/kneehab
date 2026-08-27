# kneehab v14.9 — the additions audit: two slots reviewed, one removed

**Date:** 2026-08-27
**Change class:** medium (`.1`) — an exercise slot removed, the block renumbered, a rationale replaced.

---

## The question

Four things had been added in quick succession — Banded Ankle Eversion, Outer-Shin Release,
Renegade Row, Pallof Press, plus a "plane audit." The user asked what they cover, whether the
backing holds, and signalled he would decline most of them absent compelling evidence. Two
follow-ups: can Bird Dog come back daily at reduced range, and can the release move to the Opener.

## First correction: four names, two slots

- **`S`#16 Anti-Rotation** — Renegade Row is the item. **Pallof Press is its swap**, not a second
  exercise; you do one or the other, never both. **The "plane audit" is a rationale card inside the
  same slot** — there is nothing to perform.
- **`S`#14 (was) Banded Ankle Eversion + Outer-Shin Release** — one slot, two components.

Declining Pallof and the audit therefore cost zero exercises. The real audit was of two slots.

## Bird Dog was already back — v14.7

Opener slot 3 (`sW_bird`), ~30s, range explicitly reduced: *lift only to the height the groin stays
quiet.* Filed as a **sensor, not training**, same class as Squat to Box. The Opener is six items.
The request had already shipped.

**But it created the governing tension:** the Bird Dog card says the threshold is *measured* there
and *moved* in Strength by the Renegade Row. **A sensor with no actuator is a thermometer in an
unheated room.** Keep both or cut both.

---

## Ruling 1 — `S`#14 REMOVED. 18 items → 17.

**The knee half of the rationale was never strong.** It leaned on a "continuous lateral line" from
fibularis longus → IT band → lateral patellar pull. But the IT band inserts at **Gerdy's tubercle on
the tibia**; fibularis longus originates on the **fibula**. Adjacent, not continuous, and the fibula
does not transmit patellar tracking force. It also invoked the v13.41/42 lateral-knee episode —
which had **already been re-attributed to exposure (deep-squat sitting)**. Dead premise.

**The one argument that stood alone was ankle-sprain prophylaxis** — eversion strength and peroneal
reaction time are established risk factors for *recurrent* lateral ankle sprain, and fibularis longus
plantarflexes the first ray to control pronation. That case requires a sprain history or an ankle
that rolls on terrain.

**User ruling: "ankle not a problem."** No indication → no slot. Removed.

### The Outer-Shin Release: to the optional pool as PRN, NOT to the Opener

Cut on its own merits regardless of the eversion verdict: rolling produces a transient range and
comfort change and no durable tissue change, so **it has nothing to progress**; the card's
"release first" sequencing has no proposed mechanism; and it carries the only real safety cost in
either slot (common peroneal nerve at the fibular head).

**Why it cannot go to the Opener — the program already argues this.** v14.0 dissolved the old Daily
Warm-Up precisely because it was full of fixed-dose, sub-maximal items that progressed nothing; a
foam-roll slot is the purest example of that class. The Opener is now defined as **the day's tendon
and joint *loading*, and a release loads nothing.** Moving it there re-imports exactly what v14.0
removed. It now sits in `src-opt` as PRN — after a long ride or a rocky descent, when the outer shin
is talking.

---

## Ruling 2 — Anti-Rotation KEPT, on a different argument

**The plane audit is retired as the justification.** "A plane was empty" is a filing complaint, not
a finding — the three-plane core model is a coaching heuristic, not a physiological law. And it
**contradicted its own release: v14.7 moved the KB Press to half-kneeling in the same version**, and
that card describes itself as *"a loaded anti-rotation and anti-lateral-flexion drill... the cheapest
item in v14.7."* The audit did not notice its own sibling.

**What holds the slot open is the Bird Dog reading, and it is about this body.** At end range of the
contralateral leg lift the support-side groin recruits — **right side worse, confirmed live**. The
support-side hip angle never changes during that lift, so nothing on that side lengthens: a sensation
you can switch on and off by loading a *different* limb is **recruitment, not tissue length**. That
is a demand threshold, and it plugs into the open right-side thread.

**Why the Renegade Row and not the half-kneeling press.** The press is genuine anti-rotation, but
from a narrow kneeling base with no adductor involvement — it does not move the number the sensor
reads. The Renegade Row reproduces the Bird Dog demand almost exactly: ground base, contralateral
limb loaded, pelvis square, plus external load and a real lever.

**Asymmetry rule applied:** right side first, right side sets the load and the rep count for both —
the convention Copenhagen and Hip Abduction already use.

**Mechanism caveat recorded:** the *anterior oblique sling* (external oblique → anterior abdominal
fascia → contralateral internal oblique → contralateral adductors) is real anatomical continuity,
but the claim that load **transfers** along it is a **model, not a demonstrated mechanism**. The
reading stands without it. Do not lean on the sling.

---

## The generalisable test — third application

1. **v14.72** — peroneal salvage: reject the branch's dead DF premise, keep the anatomy.
2. **v14.82** — slant board: reject the bundle, ask which variable the tool moves.
3. **v14.9** — here, extended: *when a proposal rests on a dead premise, check what survives without
   it — **then check whether what survives has an indication in THIS body.*** The eversion had a
   sound generic argument and no local indication. A good argument about a problem you do not have
   is still a cut.

**Second rule surfaced:** *a taxonomy gap is not a finding.* An empty cell in a 3×3 grid tells you
about the grid. Justify a slot with a reading, not with a filing system.

---

## Changes

| # | Change |
|---|--------|
| 1 | `sS_evers` step object deleted from `BLOCKS.S` |
| 2 | S renumbered 15–18 → 14–17; all three hand-maintained counts updated (18 → 17) |
| 3 | Hub `ex-card` for Banded Ankle Eversion removed from `src-strength` |
| 4 | **Outer-Shin Release — PRN** card added to `src-opt` with the Opener refusal stated |
| 5 | Key Rules `v14` row: v14.9 clause appended |
| 6 | S block `note:` head rewritten — the full withdrawal argument |
| 7 | Plane-audit detail card replaced by *"Why this slot exists — the reading, not the plane"* |
| 8 | Renegade Row card: right-side-first asymmetry rule |
| 9 | Briefing lines updated (count + rationale) |
| 10 | Version strings ×3 → v14.9 |

**Verification:** `node check.js` → **PASSED 40/40** on `index.html` and on the snapshot.

## Not changed
- Bird Dog sensor in the Opener — already correct, untouched.
- Half-kneeling KB Press — untouched; it is now noted as the *other* anti-rotation exposure.
- **Key Rules 01 is STILL STALE** ("daily on both days · Couch Stretch on Day B only") — flagged
  since v14.8, still untouched.
