# kneehab v13.4 — RPE → RIR + observable terminators (2026-08-11)

## What changed

Set-termination language on the Strength template moved from a subjective effort scale (RPE 8) to **reps in reserve plus observable backstops**. Volume is unchanged (still 2 working sets on the nine main lifts); what changed is how a set *ends*.

### The three terminators

1. **RIR (default, seven of the nine main lifts).** Rep range, stop at **2 RIR or the first grinding (visibly slower) rep, whichever comes first**. Same target as RPE 8 — modern lifting RPE is literally defined in RIR terms (Zourdos/Helms) — but "could I do 2 more clean reps?" is a concrete counterfactual, rated far more reliably than a 1–10 feel scale that anchors on burn and breathing. RIR accuracy is best near failure (0–3 out) on sets of ~5–15, which is exactly where the prescription lives. The rep-speed backstop is the no-equipment version of velocity-based training: the first obvious grind sits around 1–2 RIR on most lifts and is observable, not introspective.

2. **Quality terminator (right-side gated unilaterals: Step Down, Split Squat).** The set ends at the **first compensated rep** — pelvis drop, valgus drift, trunk lean — regardless of RIR. On these lifts compensation arrives *before* muscular failure, and grinding past it rehearses the exact v12.01 motor pattern being extinguished. Effort rules never override this.

3. **Tempo terminator (Eccentric Pull-Up; secondary on Push-Up Tempo).** On eccentric-only work the stimulus IS the controlled lowering — a fast negative is a missed rep, not a harder one. When the 5s lowering can't be controlled (~under 4s), the set is over. Push-Up's 3s eccentric doubles the same way.

**Universal ceiling:** no set continues past form breakdown on *any* exercise.

### New prescriptions (nine main lifts)

| Lift | Was (v13.2) | Now (v13.4) |
|---|---|---|
| KB Front Rack Squat | 2 × 8 @ RPE 8 | 2 × 5–10 · 2s pause · 2 RIR / first grind |
| Step Down | 2 × 8 ea @ RPE 8 | 2 × 6–10 ea · 3s ecc · **first compensation** |
| Kickstand RDL (KB) | 2 × 8 ea @ RPE 8 | 2 × 6–10 ea · 2 RIR / first grind |
| Split Squat 2s | 2 × 8 ea @ RPE 8 | 2 × 6–10 ea · 2s pause · **first compensation** |
| KB Press | 2 × 5–8 ea @ RPE 8 | 2 × 5–8 ea · 2 RIR / first grind |
| Push-Up Tempo | 2 × 8–10 @ RPE 8 | 2 × 6–12 · 3s ecc · 2 RIR / tempo break |
| Eccentric Pull-Up | 2 × 3–5 @ RPE 8 | 2 × 3–5 · **stop when 5s tempo breaks** |
| Ring Row | 2 × 8–10 @ RPE 8 | 2 × 8–12 · 2 RIR / first grind |
| SL Glute Bridge | 2 × 12 ea @ RPE 8 | 2 × 10–15 ea · 2 RIR / first pelvis drop |

Fixed reps became ranges because KB load jumps are coarse (+4 kg): a fixed rep number forces effort to drift as the bell gets relatively lighter/heavier; the range absorbs that plus daily readiness (a day the knee is off, 2 RIR arrives earlier and the set self-limits).

### Load progression (double progression)

Top of the rep range at 2 RIR on **both** sets for **2 consecutive sessions** → +4 kg (or next progression step), re-enter at the bottom of the range. Kickstand RDL ladder updated accordingly (2×10 @ 2 RIR × 2 sessions → +4 kg, re-enter 2×6). Balance-based graduation criteria unchanged.

### Calibration protocol (new)

Every 3–4 weeks, take the **last set of one lift** to clean-form failure and count how many reps were actually left when "2 RIR" would have been called. This directly audits the standing v13.2 watch item — *does effort actually reach the prescribed level* — with data instead of vibes.

## What deliberately did NOT change

- **ISO Step-Up (3 × 30s)** — Baar tendon work; the stimulus is time-under-tension in the collagen window, not proximity to failure. Duration-fixed.
- **Plyo Primer (KB Swing 3 × 10)** — power work lives nowhere near failure; terminate on lost snap, not effort.
- **RKC Plank, Copenhagen, Mǎbù, all holds** — RKC is max-tension × short fixed time by definition; "hold to RPE" would invert it into a submaximal plank.
- **Long-hold mobility (Pigeon/Lizard/Couch)** — viscoelastic creep is time-dependent (Mitchell); the subjective dial there is stretch discomfort, not effort.
- **Soleus (3 × 15), Tib (1 × 20), Ab Wheel (2 × 6–10 self-titrated)** — unchanged.

## Watch items (carried + new)

- Does the calibration set confirm "2 left" is actually 2? (replaces the vaguer "does effort reach RPE 8")
- Do the gated unilaterals actually stop on the first compensated rep, or does rep-counting momentum win?
- 2026-07-24 volume-bump gate re-eval remains outstanding (knee unilateral exposure 6→9/wk since v13.0).

## Version locations updated

`<title>` · `.ms-title` · `.cover-h1` → v13.4. S-block pill "2 sets @ RPE 8" → "2 sets · 2 RIR". Note, briefing, caution, and all nine lift cards updated in both `BLOCKS.S` and `src-strength`. Orphaned legacy cards (v12-era, `src-postA`/`src-knee`) untouched per convention.
