# kneehab v14.91 — the Key Rules staleness sweep

**Date:** 2026-08-27
**Change class:** minor (`.01`) — reference-page corrections, no program change. Nothing you do changes.

---

## The open item, and what it turned out to be

Flagged since v14.8: **Key Rules 01 was stale.** Fixing it revealed the row was not an isolated
error — it was one of **three rows in the same list still documenting the dead Day A / Day B
program**, plus a fourth carrying a live factual error. Rule 01's own contradiction was sitting
**three rows above it** on the same page.

## Rule 01 — corrected

**Was:** *"Mobility is non-negotiable — daily on both days. Full mobility block runs on both days.
Couch Stretch on Day B only (active recovery for rectus femoris after Day A loading)."*

Three dead facts in two sentences:
1. **There is no Day A/B.** The rotation is S → C → S → C → S → C → R.
2. **There is no "full mobility block."** v14.0 dissolved it.
3. **Couch Stretch moved to Rest day in v13.0** — `sR_couch`, 90s/side. Its own card says *"moved
   here from Day B (v13.0)."* The rule had been wrong for four versions, and the **v13 row three
   above it** ("Long-hold mobility consolidates on Rest day") already stated the correct fact.

**Now:** *"Mobility is daily as LOADING, and weekly as LONG HOLDS — two different jobs."* Daily =
the Opener, 7/7, end range under load, returns a reading — tendon and joint work, not stretching.
Weekly = Pigeon / Lizard / Couch Stretch at 90s/side on Rest day, because a long single hold beats
daily short holds for viscoelastic creep (Mitchell). Non-negotiable still applies to the daily half.

## Rule 08 — corrected. This was the worst of the three.

**Was:** *"Hamstring slides on every Day A. A/B alternation guarantees 48h+ eccentric recovery."*

**Hamstring slides do not exist anywhere in the program** — this rule row was the only surviving
mention in the entire file. It prescribed an exercise that isn't there, on a day that doesn't exist.

**Now:** eccentric recovery is **structural, not prescribed** — S → C → S puts a Cardio or Rest day
between every pair of Strength days, so the 48h+ window needs no rule to enforce it. The posterior-
chain eccentric work is the **Kickstand RDL** (`S`#3).

## Rule 04 — retired in place

**Was:** *"Morning sequence is recommended on both days. Mobility → Core → strength progression."*
Dead vocabulary, and the ordering describes the dissolved Daily Warm-Up. **Fully superseded by the
v14 Opener row above it**, which already carries the live ordering rule (Sun Salute first because it
is the warmer; 90/90 second and never on a cold hip; then the box station; then the hang). Kept as a
row with the correction recorded rather than deleted, matching how this list already carries history.

## The fourth error — the Opener rule said FIVE

The v14 Opener row read *"Five items... Sun Salutation A → 90/90 Lift-Offs → Squat to Box → ISO
Step-Down Hold → Dead Hang"* — **omitting the Bird Dog, which v14.7 added.** Six since v14.7.

This is **exactly the count-bug class v14.71 built a check for**, and it slipped through because the
check only scanned the three `S`-block count strings; nobody had asserted the `W` count stated in
*prose*. Now fixed and guarded.

---

## Two new build assertions — 40 → 42

| Assertion | What it prevents |
|---|---|
| `Key Rules Opener prose count matches BLOCKS.W` | Parses the spelled-out number ("Six items, equipment-light, 7 of 7 days") and compares it to `BLOCKS.W.steps` minus S-days-only items. The count can no longer drift in prose. |
| `no live rule TITLE prescribes Day A/B` | Scans every `rule-t`. Rows may narrate A/B historically in `rule-d`; **none may prescribe it in a title.** |

**Negative-tested:** a deliberately broken copy (count reverted to "Five", "Day A" reinserted into a
rule title) fails both. They are real guards, not decoration.

**Verification:** `node check.js` → **PASSED 42/42** on `index.html` and on the snapshot.

---

## Not changed — one substantive question, deliberately left open

**Rule 07: "Skin-sourced collagen only — Type I. Bone broth and gelatin are not equivalent."**

This is not staleness, so it was out of scope for a cleanup sweep, but it should be looked at:
**Shaw 2017 — the study the whole collagen protocol rests on — used gelatin.** A rule saying gelatin
is not equivalent sits awkwardly against the foundational citation. That is a substantive nutrition
question, not a dead-vocabulary fix, and nutrition is brainstormed in session rather than shipped.
Flagged, untouched.

## Also noted
- 39 `Day A` / `Day B` strings remain in the file, now confined to **historical narration** inside
  exercise-card and changelog text (e.g. "moved here from Day B (v13.0)"), which is correct — that
  is a record of when something moved, not an instruction. The new guard permits those and blocks
  only rule titles.
- Rule numbering keeps its existing gaps (09, 11 absent). Numbers were left stable rather than
  resequenced, so anything referencing a rule number still resolves.
