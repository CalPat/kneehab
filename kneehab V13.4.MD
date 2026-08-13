# kneehab v13.4 — Ankle-Driven Lateral-Knee Block

**Date:** 2026-08-13
**Type:** Medium change (`.1` bump from v13.31)
**Driver:** User — "Knee a little tight under kneecap, bottom, outer side" → "Any ankle related imbalances that could cause tightness" → knee-to-wall self-test came back **shorter on the symptomatic side** (confirmed asymmetric dorsiflexion restriction).

## Clinical read

Tightness at the **inferolateral patella** (under and outside the kneecap) with an **asymmetric knee-to-wall test** points to an **ankle-driven lateral-tracking** pattern:

- A **restricted ankle dorsiflexion** forces the knee to steal range medially — tibia + femur internally rotate, the arch collapses — which drives the patella laterally into the inferolateral corner. The program already flags restricted DF as a *primary upstream PFPS driver* (Kneeling Ankle Drive note), so this extends an existing thread rather than introducing a new claim.
- The **fibularis (peroneus) longus originates at the head of the fibula — the outer knee** — and shares one continuous **lateral line** with the IT band and vastus lateralis. A tight lateral ankle compartment loads that chain, which is why the tightness sits on the *outer*, lower kneecap rather than dead-center.

## What changed

The old **`sW_ankle` Kneeling Ankle Dorsiflexion** slot (1 detail entry) is **retargeted** into an **Ankle DF + Peroneal (lateral line)** block (3 detail entries). Slot count unchanged — **still 12 warm-up items** — the slot was upgraded, not added, keeping the tight-warm-up philosophy intact.

New three-part structure:
1. **Knee-to-Wall self-test** *(NEW)* — the tracked metric that gates the dose. Measure both sides; the shorter side is the "restricted side." Re-test ~weekly toward symmetry (rough target: both ≥ ~10 cm and within ~1–1.5 cm side-to-side). Framed as a **range test, not a pain test** (Safety First).
2. **Kneeling Ankle Dorsiflexion — asymmetry-biased** — same ankle dive, but the restricted side gets **~1.5–2× the reps + light forward load**, done first. Compensation watch: heel lifting / foot rolling in to fake range.
3. **Peroneal / lateral-line release + banded eversion** *(NEW — the lateral-compartment element the program never had)* — roll the outer shin ~30–45s each side (**off the fibular head** — common peroneal nerve), then **banded ankle eversion 2×12–15** biased to the restricted/symptomatic side. Targets fibularis longus + brevis (lateral-ankle stability, pronation control) with a lateral-line fascia off-load.

## Why this and not more

The program is already rich in **tibialis-anterior / dorsiflexion** work (Tib Raise ×2 exposures, Kneeling Ankle, slant boards on Step Down / Split Squat). The genuine gaps for this specific finding were narrow:
- **Lateral compartment (peroneal) + lateral-line release** — absent entirely (Lateral Quad Roll lives only in Day A/B mobility, not the daily warm-up, and nothing addressed the peroneals).
- **An asymmetry metric** — the program had bilateral ankle work but no self-test to detect or track a side-to-side DF gap, and no instruction to load the restricted side harder.

So the change adds exactly those two things and re-doses the existing ankle slot — no duplication, no new standalone item.

## Ripple fixes
- Warm-Up `W` block `note`: v13.4 line prepended (symptom → test → what changed → kinetic-chain rationale + Safety First).
- Reference-hub mirror card (`src-warmup`) updated to match the retargeted slot and highlighted (`card-highlight`).
- 3 version strings bumped to v13.4 (`<title>`, `.ms-title`, `.cover-h1`).
- `index.html` re-synced (byte-identical to the v13.4 file).
- Old `kneehab V13.31.html` / `.MD` renamed to v13.4.

## Verification
- Embedded data `<script>` parses cleanly (`node --check` on the extracted block — OK).
- 3 version strings = v13.4; `index.html` byte-identical to the v13.4 file.
- Warm-up still 12 steps (slot retargeted, not added).

## Foundations touched
- **Ben Patrick / ATG** — loaded dorsiflexion (kneeling ankle dive, KB-loaded DF holds) as the progression path.
- **Johan Bellemans** — easy cyclic movement after the slot to feed the avascular cartilage at the inferolateral surface.
- **Keith Baar** — collagen-window placement for the loaded 20–30s DF holds.
