# kneehab v13.05 — Plyo: rotation dropped, knees-permitting every Strength session

**Date:** 2026-06-09
**Type:** Minor (frequency change, no new items)

## Driver

User self-report: "deep squat with racked KB or jump rope can be performed every Strength day. I even feel both can be completed both Strength days as long as knees feel good."

KB Front Rack Squat was already every S session (mandatory at #3). The real change is **plyo**: drop the 3-session rotation (JR → Swing → none) in favor of both every session, titrated by knee feel.

## What changed

**Plyo Primer (sS_plyo)**:

| | Before (v13.0–v13.04) | After (v13.05) |
|---|---|---|
| Frequency | Rotates across 3 S sessions: JR · Swing · none | Every S session, knees-permitting |
| Default | "1st S = JR, 2nd S = Swing, 3rd S = none" | Both JR + Swing if knees feel good |
| Title | Plyo Primer (when scheduled) | Plyo Primer |
| `sub` | "Jump Rope / KB Swing — rotate · 2 of 3 sessions" | "Jump Rope + KB Swing · every S · knees-permitting" |
| Pill | "Plyo 2 of 3" | "Plyo every S · knees-permitting" |

## Knees-permitting decision tree (new)

| Knee feel at start of S session | Plyo prescription |
|---|---|
| Good | Both JR (3×30s) + KB Swing (3×10) — full plyo primer, ~5 min |
| Mildly grumbly | JR only — lowest-amplitude Phase 1 option |
| Pain or post-session effusion from last S | Skip plyo this session, return when clean |

This replaces a rigid calendar rotation with intuitive symptom-based load management — same philosophy as v12.04 no-zone-gating cardio.

## Physiology rationale

**Why daily-ish jump rope is safe (and better):**
- JR is the lowest-amplitude plyo in the catalogue — Phase 1 movement, designed as the GRF entry point
- Bone responds to **strain rate**, not just magnitude or recovery gap — daily-ish exposure at 48h S-session spacing is a better osteogenic stimulus than every-other, when contacts stay crisp
- Bonus: directly loads soleus + Achilles (downstream knee stabilizers)
- User months pain-free — no longer naive tissue requiring conservative 96h spacing

**Why KB Swing every S session is also fine:**
- Hardstyle swing = neutral knee, hip-dominant → near-zero direct knee load
- Different stimulus from JR (horizontal hip-power vs vertical impact)
- Different planes don't compete for recovery — they stack rather than redundancy

**Stacking JR + KB Swing in one session:** ~30s JR → ~30s rest → 10 KB Swings = ~2–3 min total plyo. Covers the full explosive vector (vertical + horizontal) each S session rather than once-per-cycle each.

## What did NOT change

- Total Strength items: still 13 mandatory + 3 optional finishers
- Order: ISO Step-Up · Plyo · KB Front Rack Squat · Step Down · SL RDL · Split Squat · KB Press · Push-Up · Eccentric Pull-Up · Ring Row · SL Glute Bridge · Soleus · Tib (v13.04 ordering preserved)
- ISO Step-Up first per Baar (tendon priming before plyo) — load-bearing decision, unchanged
- Right-side bodyweight gating on Step Down · ISO Step-Up · Split Squat (v12.01 thread) — unchanged
- Phasing language for jump rope amplitude progression (Phase 1 rope → Phase 2 box jump-up → Phase 3 broad jumps + drop jump 12" → Phase 4 SL hops + drop jump 18–24") — unchanged. This is **amplitude** progression, separate from **frequency** which is what v13.05 changes.
- Same stop-rule: knee pain or effusion → drop one phase, hold 2 weeks
- KB Front Rack Squat at #3 — already every S session, no functional change (user verified)
- Cardio, Daily Habits, Warm-Up, Rest blocks — unchanged

## Risk flag

The 3rd Strength session in cycle was originally the "no plyo" deload. Removing that means full GRF exposure 3× per cycle. **Mitigation:** the decision tree itself is the deload — if knees object, JR-only or skip kicks in automatically. Rest day at end of cycle still gives one full GRF-free day per 7-session block.

## Files updated

- `index.html` — title, ms-title, cover-h1 → v13.05 · BLOCKS.S.note rewritten · BLOCKS.S.pills updated · sS_plyo step rewritten (title, sub, two detail entries + new "Knees-permitting decision tree" detail entry replacing "Plyo rotation across cycle") · briefing.ok plyo line rewritten · Rule 00 plyo language rewritten · src-strength schedule page Plyo card rewritten
- `kneehab V13.05.html` — snapshot
- `kneehab V13.04.html` / `kneehab V13.04.MD` — deleted
- `MEMORY.md` — Current Version bumped, v13.05 block added

## Re-evaluation

No new gate. 2026-06-17 (v12.01 standing protocol) and 2026-07-24 (v13.0 volume bump) remain the load-bearing dates. The 7/24 reassessment now has an extra dimension: did the "every S" plyo cause any knee carryover, or did the symptom-titration decision tree absorb load fluctuations cleanly?
