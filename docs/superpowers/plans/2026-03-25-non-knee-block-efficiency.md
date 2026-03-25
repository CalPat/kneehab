# Non-Knee Block Efficiency Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update mobility, glute, spinal & shoulder, and Phase 2 docs to reflect Phase 1 exit status — dropping stale exercises, upgrading the glute block, and documenting new Phase 2 lateral hip work.

**Architecture:** All changes are in `index.html` (single-file app, ~3300 lines). Two data systems must stay in sync for every exercise change: (1) the HTML `src-*` elements that feed the Reference hub, and (2) the `BLOCKS` JS object that drives the Today tab. Hip Abduction has a third location: the Day C schedule card text. Version bumps to v10.0.

**Tech Stack:** Vanilla HTML/CSS/JS. No build step. No test suite — verification is manual browser open.

---

## File Map

| File | What changes |
|---|---|
| `index.html` | All changes below |
| `kneehab V10.0.html` | Copy of index.html after all edits (CLAUDE.md requirement) |
| `kneehab V10.0.MD` | Summary doc (CLAUDE.md requirement) |

---

## Touch Points Reference

Before editing, confirm these line numbers by searching — the file may shift between sessions.

| Location | Search string | What to change |
|---|---|---|
| `src-mob` HTML (~L1920) | `<div class="ex-body" id="src-mob">` | Cat-Cow card → flow card; remove Lateral Quad Roll card |
| `src-postC` HTML (~L1963) | `<div class="ex-body" id="src-postC">` | Remove Down Dog → Upward Dog card |
| `src-glute` HTML (~L1994) | `<div class="ex-body" id="src-glute">` | Hip Abduction card → Adductor Isometric Hold card |
| Day C lc-body text (~L1492) | `RKC Plank · Hip Abduction` | → `RKC Plank · Adductor ISO Hold` |
| Day C card detail (~L1723) | `Hip Abduction — 2 × 12 each · 2s hold top` | → `Adductor ISO Hold — 3 × 30s each side` |
| `sA_mob` BLOCKS (~L2721) | `{n:'Cat-Cow',rx:'10 reps slow'` | Replace entry; remove Lateral Quad Roll entry on next line |
| `sA_glut` BLOCKS (~L2735) | `{n:'Hip Abduction',rx:'2 × 12 each` | → Adductor Isometric entry |
| `sC_mob` BLOCKS (~L2778) | `{n:'Cat-Cow',rx:'10 reps'` | Replace entry; remove Lateral Quad Roll entry |
| `sC_gap` BLOCKS (~L2785) | `{n:'Down Dog → Upward Dog'` | Remove this entry |
| `sC_glut` BLOCKS (~L2796) | `{n:'Hip Abduction',rx:'2×12 each` | → Adductor Isometric entry |
| MVD array (~L2824) | `{n:'Cat-Cow',` | → Cat-Cow → Down Dog → Up Dog flow entry |
| BLOCKS 'D' steps (~L2876) | After `sD_sf` entry | Add `sD_qlr` Lateral Quad Roll step |
| Phase 2 `#phases` (~L2362) | `Cossack Squat: introduce at partial depth` | Replace with expanded ladder + add Crossunder Lunge item |
| Version header (~L1164) | `PHASE 1` or version string | Update to v10.0 |

---

## Task 1: Mobility Block — HTML (`src-mob`)

**Files:** Modify `index.html` around line 1920–1925

- [ ] **Step 1: Replace Cat-Cow card with combined flow card**

Find and replace this exact string in `src-mob`:
```html
      <div class="ex-card"><div class="ex-top"><span class="ex-name">Cat-Cow</span><span class="ex-rx">10 reps · slow</span></div><div class="ex-desc">Hands and knees. Arch spine up (cat), drop belly and lift head (cow).</div></div>
```
Replace with:
```html
      <div class="ex-card"><div class="ex-top"><span class="ex-name">Cat-Cow → Down Dog → Up Dog</span><span class="ex-rx">5 Cat-Cows · 3–5 cycles · ~90s</span></div><div class="ex-desc">Hands and knees. 5 Cat-Cows (arch spine up, drop belly) — then flow directly into Down Dog (hips back, arms long, heels toward floor) → Up Dog (hips down, chest forward, arms straight). 2s hold at each end. Single setup, continuous sequence. Cat-Cow primes spinal segments before Down Dog loads the posterior chain and opens the anterior hip.</div></div>
```

- [ ] **Step 2: Remove Lateral Quad Roll card from `src-mob`**

Find and remove this entire line from `src-mob`:
```html
      <div class="ex-card"><div class="ex-top"><span class="ex-name">Lateral Quad Roll</span><span class="ex-rx">60s each side · foam roller</span></div><div class="ex-desc">Foam roller on outer quad, hip to just above lateral knee. Addresses VL tightness — the lateral pull directly opposing VMO function on the patella. Restricted lateral retinaculum forces the patella laterally regardless of how much VMO work you do. Roll slowly; 2s pause on any tender spot. Keep to the muscle belly — avoid the bony IT band line itself.</div></div>
```

---

## Task 2: Mobility Block — BLOCKS JS (`sA_mob` and `sC_mob`)

**Files:** Modify `index.html` around lines 2721–2725 and 2778–2782

- [ ] **Step 1: Update `sA_mob` — replace Cat-Cow entry**

Find:
```javascript
               {n:'Cat-Cow',rx:'10 reps slow',d:'Spinal segmental mobility. Gentle activation before loading.'},
```
Replace with:
```javascript
               {n:'Cat-Cow → Down Dog → Up Dog',rx:'5 Cat-Cows · 3–5 cycles · ~90s',d:'Spinal segmental warm-up flowing into posterior chain loading. Cat-Cow primes lumbar and thoracic segments before Down Dog lengthens hamstrings and calves and loads the shoulder girdle. Up Dog opens hip flexors and thoracic extension. Zero position change — continuous from all-fours.'},
```

- [ ] **Step 2: Remove Lateral Quad Roll from `sA_mob`**

Find and remove this line:
```javascript
               {n:'Lateral Quad Roll',rx:'60s each side · foam roller',d:'Reduces VL tightness. Tight VL creates lateral patellar pull opposing VMO — a direct contributor to maltracking. Keep to muscle belly, not the bony IT band line.',timer:60}]},
```
The `sA_mob` detail array now closes on the `Couch Stretch` entry. Update that line to end with `]},`:
```javascript
               {n:'Couch Stretch',rx:'2 × 30s each side',d:'Targets rectus femoris — the hip flexor that crosses the knee joint and directly increases patellofemoral pressure when tight.',timer:30}]},
```

- [ ] **Step 3: Update `sC_mob` — replace Cat-Cow entry**

Find:
```javascript
               {n:'Cat-Cow',rx:'10 reps',d:'Spinal segmental mobility before loading.'},
```
Replace with:
```javascript
               {n:'Cat-Cow → Down Dog → Up Dog',rx:'5 Cat-Cows · 3–5 cycles · ~90s',d:'Spinal segmental warm-up flowing into posterior chain loading. Cat-Cow primes lumbar and thoracic segments before Down Dog lengthens hamstrings and calves. Up Dog opens hip flexors. Zero position change — continuous from all-fours.'},
```

- [ ] **Step 4: Remove Lateral Quad Roll from `sC_mob`**

Find and remove this line:
```javascript
               {n:'Lateral Quad Roll',rx:'60s each side · foam roller',d:'Reduces VL tightness — lateral patellar pull opposing VMO tracking.',timer:60}]},
```
The `sC_mob` detail array now closes on `Couch Stretch`. Update that line to end with `]},`:
```javascript
               {n:'Couch Stretch',rx:'2 × 30s each',d:'Rectus femoris stretch — the hip flexor that crosses the knee joint.',timer:30}]},
```

- [ ] **Step 5: Update MVD Cat-Cow entry**

Find (inside the `mvd:` array of BLOCKS 'C'):
```javascript
      {n:'Cat-Cow',             rx:'5 reps slow · floor'},
```
Replace with:
```javascript
      {n:'Cat-Cow → Down Dog → Up Dog', rx:'5 Cat-Cows · 2–3 cycles · floor'},
```

- [ ] **Step 6: Commit**
```bash
git add index.html
git commit -m "v10.0 — Mobility: Cat-Cow→Down Dog flow, remove Lateral Quad Roll from block"
```

---

## Task 3: Daily Habits — Add Lateral Quad Roll

**Files:** Modify `index.html` around line 2876 (BLOCKS 'D' steps array)

- [ ] **Step 1: Add `sD_qlr` step after `sD_sf`**

Find the `sD_sf` entry:
```javascript
      {id:'sD_sf',   time:'Any', title:'Short Foot Isometric',          sub:'30s each side · barefoot',
       detail:[{n:'Short Foot Isometric',rx:'30s each side · barefoot',d:'Intrinsic foot muscle activation for arch stability during ground contact. Motor pattern drill — builds the self-supporting arch that load transfer relies on.'}]},
```
After that entry, insert:
```javascript
      {id:'sD_qlr',  time:'Any', title:'Lateral Quad Roll',             sub:'60s each side · foam roller',
       detail:[{n:'Lateral Quad Roll',rx:'60s each side · foam roller',d:'VL tightness reduction — tight VL creates lateral patellar pull directly opposing VMO tracking. Foam roller on outer quad, hip to just above lateral knee. Roll slowly; 2s pause on any tender spot. Keep to the muscle belly, not the bony IT band line.',timer:60}]},
```

- [ ] **Step 2: Commit**
```bash
git add index.html
git commit -m "v10.0 — Daily Habits: add Lateral Quad Roll"
```

---

## Task 4: Recovery Spinal & Shoulder — Remove Standalone Down Dog

**Files:** Modify `index.html` around lines 1965 and 2785

- [ ] **Step 1: Remove Down Dog card from `src-postC` HTML**

Find and remove this line from `src-postC`:
```html
      <div class="ex-card"><div class="ex-top"><span class="ex-name">Down Dog → Upward Dog</span><span class="ex-rx">60s total</span></div><div class="ex-desc">2 sec hold at each end.</div></div>
```

- [ ] **Step 2: Remove Down Dog entry from `sC_gap` BLOCKS data**

Find and remove this line from `sC_gap` detail array:
```javascript
               {n:'Down Dog → Upward Dog',rx:'60s total',d:'Spinal decompression and anterior chain opening. 2s hold each end.',timer:60},
```

- [ ] **Step 3: Commit**
```bash
git add index.html
git commit -m "v10.0 — Recovery S&S: remove standalone Down Dog (now in mobility flow)"
```

---

## Task 5: Glute Block — Hip Abduction → Adductor Isometric Hold

**Files:** Modify `index.html` at five locations

- [ ] **Step 1: Replace Hip Abduction card in `src-glute` HTML**

Find:
```html
      <div class="ex-card"><div class="ex-top"><span class="ex-name">Hip Abduction</span><span class="ex-rx">2 × 12 each · 2s hold top</span></div><div class="ex-desc">Side-lying, top leg straight, lift to 45°. Targets gluteus medius. Add band when easy. <strong>Phase 2 progression:</strong> adductor side-lying isometric hold (30s each side) → Copenhagen Plank. Do not jump directly from hip abduction to Copenhagen plank — the load gap is large enough to cause groin strain.</div></div>
```
Replace with:
```html
      <div class="ex-card"><div class="ex-top"><span class="ex-name">Adductor Side-Lying Isometric Hold</span><span class="ex-rx">3 × 30s each side</span></div><div class="ex-desc">Side-lying. Feet stacked or slight offset. Squeeze adductors isometrically — hold 30s each side. Targets adductor longus and magnus. Builds the tissue tolerance required before Copenhagen Plank can safely load the groin. <strong>Next lever:</strong> after 2–4 weeks pain-free, progress to Copenhagen Plank — replace this exercise. Do not run both simultaneously.</div></div>
```

- [ ] **Step 2: Replace Hip Abduction entry in `sA_glut` BLOCKS data**

Find:
```javascript
               {n:'Hip Abduction',rx:'2 × 12 each · 2s hold top',d:'Gluteus medius activation. Lateral hip stability reduces femoral internal rotation — an upstream driver of patellar maltracking.'},
```
Replace with:
```javascript
               {n:'Adductor Side-Lying Isometric Hold',rx:'3 × 30s each side',d:'Adductor tissue loading — the required bridge before Copenhagen Plank. Builds adductor longus and magnus tolerance the CPH moment arm demands. After 2–4 weeks pain-free, progress to Copenhagen Plank and replace this exercise.'},
```

- [ ] **Step 3: Replace Hip Abduction entry in `sC_glut` BLOCKS data**

Find:
```javascript
               {n:'Hip Abduction',rx:'2×12 each · 2s hold top',d:'Gluteus medius activation — upstream lateral hip stability.'},
```
Replace with:
```javascript
               {n:'Adductor Side-Lying Isometric Hold',rx:'3 × 30s each side',d:'Adductor tissue loading — bridge to Copenhagen Plank. After 2–4 weeks pain-free, progress to Copenhagen Plank and replace this exercise.'},
```

- [ ] **Step 4: Update Day C schedule lc-body text**

Find:
```
RKC Plank · Hip Abduction
```
Replace with:
```
RKC Plank · Adductor ISO Hold
```

- [ ] **Step 5: Update Day C card detail line**

Find:
```
Hip Abduction — 2 × 12 each · 2s hold top
```
Replace with:
```
Adductor ISO Hold — 3 × 30s each side
```

- [ ] **Step 6: Commit**
```bash
git add index.html
git commit -m "v10.0 — Glute: Hip Abduction → Adductor Isometric Hold (Phase 2 bridge to CPH)"
```

---

## Task 6: Phase 2 Documentation — Cossack Ladder + Crossunder Lunge

**Files:** Modify `index.html` around line 2362 (inside `<div id="phases">`)

- [ ] **Step 1: Replace Cossack Squat phase-item with expanded ladder and add Crossunder Lunge**

Find:
```html
    <div class="phase-item">Cossack Squat: introduce at partial depth when deep knee flexion pain-free and single-leg control established. Start bodyweight, progress to full depth per 2×2 rule.</div>
```
Replace with:
```html
    <div class="phase-item">Cossack Squat: introduce when deep knee flexion pain-free and single-leg control established. Progression ladder — each rung governed by 2×2 rule. Limiting factor is usually passive adductor flexibility — do not force depth: (1) Lateral lunge, partial depth, feet ~1.5× shoulder width; (2) Lateral lunge, full depth, wider stance; (3) Cossack with heel elevated on small plate or wedge (reduces dorsiflexion demand); (4) Full Cossack, flat floor, bodyweight; (5) Cossack with load (goblet hold).</div>
    <div class="phase-item">Lateral Crossunder Lunge: introduce at bodyweight, 2 × 8 each side. Step one foot behind and across into a deep lunge — transverse and frontal plane hip loading combined. Targets glute medius (eccentric), hip adductors, and hip external rotators under load. Ski-relevant rotational hip control. <strong>Distinct from Cossack</strong> — different planes, different primary demands. Introduce as a concurrent Phase 2 addition, not as a Cossack regression or alternative.</div>
```

- [ ] **Step 2: Commit**
```bash
git add index.html
git commit -m "v10.0 — Phase 2 docs: expand Cossack ladder, add Lateral Crossunder Lunge"
```

---

## Task 7: Version Bump + File Outputs

**Files:** `index.html`, create `kneehab V10.0.html`, create `kneehab V10.0.MD`

- [ ] **Step 1: Update four version strings in index.html**

Find and replace all four occurrences of `v9.9`:

| Line | Find | Replace |
|---|---|---|
| ~9 | `<title>Knee Rehab v9.9</title>` | `<title>Knee Rehab v10.0</title>` |
| ~1163 | `KNEE REHAB v9.9` | `KNEE REHAB v10.0` |
| ~1270 | `<em>v9.9</em>` | `<em>v10.0</em>` |
| ~2445 | `v9.9 — March 2026` | `v10.0 — March 2026` |

Note: Phase 1 label on cover and ms-sub stays — it reflects the rehab phase, not the app version.

- [ ] **Step 2: Copy index.html to kneehab V10.0.html**
```bash
cp index.html "kneehab V10.0.html"
```

- [ ] **Step 3: Create kneehab V10.0.MD summary**

Create file `kneehab V10.0.MD` with this content:
```markdown
# KneeHab V10.0 — Non-Knee Block Efficiency

**Date:** 2026-03-25
**Change type:** Medium (multi-block update + Phase 2 content)

## Summary

Phase 1 exit milestone update. Knee & Lower Body block unchanged. Four supporting blocks updated for phase-appropriate efficiency.

## Changes

### Mobility
- **Cat-Cow** replaced by **Cat-Cow → Down Dog → Up Dog flow** (5 Cat-Cows → 3–5 cycles, ~90s). Natural all-fours transition. Higher yield: posterior chain loading + anterior hip opening added to spinal warm-up slot.
- **Lateral Quad Roll** moved from Mobility block to Daily Habits. Myofascial release benefits from frequency over block position.
- **MVD** updated: Cat-Cow entry → Cat-Cow → Down Dog → Up Dog flow.

### Spinal & Shoulder
- **Down Dog → Upward Dog** removed from Recovery S&S block (was 7 exercises → now 6). Covered by the mobility flow on all day types.

### Core
No changes.

### Glute
- **Hip Abduction** (Phase 1) replaced by **Adductor Side-Lying Isometric Hold** (3 × 30s each side). Phase 1 exit means Hip Abduction has served its purpose. Adductor isometric is the documented bridge to Copenhagen Plank — builds the adductor tissue tolerance the CPH moment arm demands. Next lever: Copenhagen Plank after 2–4 weeks pain-free.

### Phase 2 Documentation
- **Cossack Squat** expanded with 5-rung progression ladder. Entry at lateral lunge partial depth, progressing through heel elevation to full Cossack with load.
- **Lateral Crossunder Lunge** added as new Phase 2 exercise. Transverse + frontal plane hip loading. Glute medius (eccentric), adductors, hip ER under load. Distinct from Cossack — introduce concurrently, not as a regression.

## Foundations
Baar · Bellemans · ATG · Phase 1
```

- [ ] **Step 4: Final commit**
```bash
git add index.html "kneehab V10.0.html" "kneehab V10.0.MD"
git commit -m "v10.0 — Version outputs and summary doc"
```

---

## Verification

After all tasks complete, open `index.html` in a browser and check:

| Check | Where to look |
|---|---|
| Mobility block shows Cat-Cow → Down Dog → Up Dog (not plain Cat-Cow) | Today tab → Load Day → Mobility step |
| Mobility block has no Lateral Quad Roll | Today tab → Load Day → Mobility step |
| Daily Habits shows Lateral Quad Roll | Today tab → Day D |
| Recovery S&S has no Down Dog (6 exercises, not 7) | Today tab → Recovery Day → Spinal & Shoulder |
| Glute step shows Adductor ISO Hold (not Hip Abduction) on both Load and Recovery days | Today tab → both day types |
| Reference hub → Base tab → Mobility shows updated exercises | Hub → Base → Mobility |
| Reference hub → Base tab → Glute shows Adductor ISO Hold | Hub → Base → Glute |
| MVD toggle on Recovery day shows Cat-Cow → Down Dog → Up Dog | Today tab → Recovery Day → tap MVD toggle |
| Phase 2 shows Cossack 5-rung ladder + Crossunder Lunge | More → Phases & Progression |
| Day C schedule card shows "Adductor ISO Hold" (not Hip Abduction) | More → Schedule → Recovery tab |
