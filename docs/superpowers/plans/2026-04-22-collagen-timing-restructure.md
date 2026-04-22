# Collagen Timing Restructure — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Decouple collagen supplementation from the morning training session on Day A & B, creating a standalone afternoon "Collagen Block" tab with rotating loading options. Move Diet & Supplements content into Daily Habits.

**Architecture:** Single-file app (`index.html`, ~3400 lines). All changes are in this file. The BLOCKS JS object drives the Today tab — each day type is a key ('A', 'B', 'R', 'X', 'N', 'D'). Block 'N' (currently Diet & Supplements, 🥩 button) becomes the new Collagen Block. Block 'D' (Daily Habits, ✨ button) absorbs the diet/supplement reference content.

**Tech Stack:** HTML, inline CSS, inline JS

---

## File Structure

- **Modify:** `index.html` — all tasks modify this single file
  - Lines ~9, ~1119, ~1222: version bump (v11.61 → v11.7)
  - Lines ~1611-1628: day-type buttons (change 🥩 label/emoji for block N)
  - Lines ~2734-2791: BLOCKS['A'] — remove collagen step, retiming, update warnings
  - Lines ~2793-2844: BLOCKS['B'] — remove collagen step, retiming, update warnings
  - Lines ~2946-2977: BLOCKS['N'] — replace Diet & Supplements with Collagen Block
  - Lines ~2979-3013: BLOCKS['D'] — add diet/supplement reference content
  - Lines ~1666-1694: Schedule reference panes (Day A, Day B) — remove T=0 collagen rows, retiming
  - Lines ~1697: Upper Body reference note — remove "Collagen required"
  - Lines ~2440-2468: Rules section — update rules 02, 03, 04, 06
  - Lines ~2180-2247: Supplements reference page — update for new timing model
  - Lines ~1275, ~1283, ~1332, ~1344-1345: changelog entries (add v11.7 entry)

---

### Task 1: Version Bump to v11.7

**Files:**
- Modify: `index.html:9` (title tag)
- Modify: `index.html:1119` (ms-title)
- Modify: `index.html:1222` (cover-h1)

- [ ] **Step 1: Update title tag**

```html
<!-- Line 9: change from -->
<title>kneehab v11.61</title>
<!-- to -->
<title>kneehab v11.7</title>
```

- [ ] **Step 2: Update ms-title**

```html
<!-- Line 1119: change from -->
<div class="ms-title">kneehab v11.61</div>
<!-- to -->
<div class="ms-title">kneehab v11.7</div>
```

- [ ] **Step 3: Update cover-h1**

```html
<!-- Line 1222: change from -->
<div class="cover-h1">kneehab<br><em>v11.6</em></div>
<!-- to -->
<div class="cover-h1">kneehab<br><em>v11.7</em></div>
```

---

### Task 2: Remove Collagen from Day A Morning Session (BLOCKS['A'])

**Files:**
- Modify: `index.html` — BLOCKS['A'] object (~lines 2734-2791)

- [ ] **Step 1: Update Day A pills — remove "Collagen T=0" chip**

```js
// Change from:
pills:[{t:'Collagen T=0',c:'amber'},{t:'~55 min',c:''},{t:'Bike aim to do',c:''},{t:'Ruck optional PM',c:''}],
// To:
pills:[{t:'~45 min',c:''},{t:'Bike aim to do',c:''},{t:'Ruck optional PM',c:''},{t:'Collagen PM',c:'amber'}],
```

- [ ] **Step 2: Remove sA_col step and retiming all subsequent steps**

Remove the entire `sA_col` step object (lines ~2740-2743). Then update timings:
- `sA_mob`: `T+5` → `T=0`
- `sA_core`: `T+10` → `T+5`
- `sA_glut`: `T+16` → `T+11`
- `sA_hang`: `T+19` → `T+14`
- `sA_knee`: `T+20` → `T+15`, remove sub text `· collagen rising into peak`
- `sA_bike`: `T+38` → `T+33`

- [ ] **Step 3: Update Day A warnings and ok notes**

Remove from `warn` array:
```js
'Do not skip collagen timing — if you miss T=0, delay the whole sequence.',
```

Remove from `ok` array:
```js
'Zone 2 cycling unrestricted — collagen 45 min before any Zone 2 ride.',
```

Add to `ok` array:
```js
'Collagen is a separate afternoon block — not part of this session.',
```

---

### Task 3: Remove Collagen from Day B Morning Session (BLOCKS['B'])

**Files:**
- Modify: `index.html` — BLOCKS['B'] object (~lines 2793-2844)

- [ ] **Step 1: Update Day B pills — remove "Collagen T=0" chip**

```js
// Change from:
pills:[{t:'Collagen T=0',c:'amber'},{t:'~40 min',c:''},{t:'Knee maintenance',c:''},{t:'Ruck optional PM',c:''}],
// To:
pills:[{t:'~35 min',c:''},{t:'Knee maintenance',c:''},{t:'Ruck optional PM',c:''},{t:'Collagen PM',c:'amber'}],
```

- [ ] **Step 2: Remove sB_col step and retiming all subsequent steps**

Remove the entire `sB_col` step object (lines ~2798-2801). Then update timings:
- `sB_mob`: `T+5` → `T=0`
- `sB_core`: `T+11` → `T+6`
- `sB_hang`: `T+18` → `T+13`
- `sB_knee`: `T+19` → `T+14`
- `sB_ub`: `T+25` → `T+20`

- [ ] **Step 3: Update Day B warnings and ok notes**

Remove from `warn` array:
```js
'Do not skip collagen — upper body mechanical loading qualifies under Baar protocol.',
```

Remove from `ok` array:
```js
'Zone 2 cycling unrestricted — collagen 45 min before any Zone 2 ride.',
```

Add to `ok` array:
```js
'Collagen is a separate afternoon block — not part of this session.',
```

---

### Task 4: Replace BLOCKS['N'] — Diet & Supplements → Collagen Block

**Files:**
- Modify: `index.html` — BLOCKS['N'] object (~lines 2946-2977)

- [ ] **Step 1: Replace the entire BLOCKS['N'] object**

Replace the full `'N': { ... }` block with the new Collagen Block:

```js
'N': {
    type:'N', title:'COLLAGEN<br>BLOCK', titleClass:'', stepLabel:'Afternoon — Pick a Loading Option',
    pills:[{t:'Afternoon',c:'amber'},{t:'~10 min loading',c:''},{t:'Pick one option',c:''}],
    note:'Standalone collagen synthesis block. Take collagen + vit C + creatine during your eating window (early afternoon ideal for 16:8 IF). 45–60 min later, pick one loading option. The goal is to maximise the number of connective tissues seeing mechanical stimulus at peak circulating hydroxyproline. Loading only needs ~10 min — after that, the tissue enters a 6-hour refractory period (Baar). On Activity days, collagen timing stays pre-activity — skip this block.',
    steps:[
      {id:'sN_col', time:'T=0',       title:'Collagen + Vitamin C + Creatine',  sub:'During eating window · 2+ hrs after protein',
       detail:[{n:'Collagen',rx:'15g hydrolyzed, skin-sourced (Type I)',d:'Take during eating window — early afternoon works well with 16:8 IF. Must be 2+ hours after any protein meal (leucine blunts connective tissue synthesis). Skin-sourced only — bone broth is not equivalent.'},
               {n:'Vitamin C',rx:'200mg',d:'Required cofactor for collagen crosslinking. Take with collagen.'},
               {n:'Creatine Monohydrate',rx:'5g',d:'Mix with collagen drink. No absorption interaction — timing doesn\'t matter, just daily consistency.'}]},
      {id:'sN_bike', time:'T+45',     title:'Option 1: Bellemans Bike',         sub:'10 min · stationary bike · cartilage',
       detail:[{n:'Bellemans Protocol',rx:'10–12 min · hard stop 15 min',d:'Stationary bike. Seat height: knee at 15–20° flexion at bottom of stroke. Steady moderate resistance. Cyclic compressive loading drives fluid exchange in articular cartilage — nutrients in, waste out. Cartilage is avascular, so this is the only way to feed it. Window closes at 15 min — stop. A Zone 2 ride does NOT replace this (different seat height and loading angle).',timer:720},
               {n:'Substitute',rx:'10 min elliptical if no stationary bike',d:'Not equivalent but preserves cyclic loading pattern.'}]},
      {id:'sN_iso',  time:'T+45',     title:'Option 2: Isometric Circuit',      sub:'~8 min · no equipment · tendons',
       detail:[{n:'Tibialis Raise',rx:'1 × 20 · 1s hold top',d:'Anterior tibialis tendon loading. Dorsiflexion under load.'},
               {n:'Single-Leg Wall Sit',rx:'3 × 20s each · 45s rest',d:'Patellar and quad tendon isometric loading. 45° flexion. Isometric = sustained tendon tension without joint shear.',timer:20},
               {n:'Soleus Calf Raise',rx:'2 × 12 each · 3s down',d:'Achilles tendon and soleus under eccentric load. Knee bent ~30° isolates soleus over gastrocnemius.'},
               {n:'Copenhagen Plank',rx:'2 × 20s each side',d:'Adductor tendon loading. Short lever (knee on bench).',timer:20}]},
      {id:'sN_yoga', time:'T+45',     title:'Option 3: Yoga Holds',             sub:'~10 min · mat · fascia & joint capsules',
       detail:[{n:'Lizard Pose',rx:'60s each side',d:'Hip flexor and adductor fascia under sustained bodyweight load. Drop to forearms if flexibility allows. Mitchell principle: 60s holds drive viscoelastic creep — connective tissue adaptation, not just stretching.',timer:60},
               {n:'Pigeon Pose',rx:'60s each side',d:'Deep external rotator and hip capsule loading. Piriformis, obturator group. Sustained load at collagen peak = tissue-loading opportunity (Mitchell + Baar synergy).',timer:60},
               {n:'Down Dog',rx:'60s',d:'Full posterior chain connective tissue — hamstring fascia, Achilles, plantar fascia, thoracolumbar fascia. Press heels toward floor.',timer:60},
               {n:'Child\'s Pose with Reach',rx:'60s',d:'Shoulder capsule, lat fascia, thoracolumbar fascia. Arms extended overhead, walk fingers forward.',timer:60}]},
      {id:'sN_walk', time:'T+45',     title:'Option 4: Loaded Walk / Ruck',     sub:'15–20 min · general CT',
       detail:[{n:'Loaded Walk',rx:'15–20 min · easy pace',d:'Cyclic loading across all lower limb connective tissues under functional gait — Achilles, plantar fascia, knee joint capsule, hip capsule. Backpack optional (10–15 lbs). This is Zone 1 — conversational pace. Include 2–3 rounds of backward walking (30–60s each) for anterior tibial chain.'},
               {n:'Barefoot Walk Option',rx:'10–15 min · soft surface',d:'If available — grass, sand, carpet. Intrinsic foot connective tissue stimulus. Short foot musculature and plantar fascia under natural loading.'}]},
    ],
    micro:[],
    briefing:{
      warn:['Skip this block on Activity days — collagen timing stays pre-activity on those days.',
            'Must be 2+ hours after any protein meal — leucine blunts connective tissue synthesis.'],
      ok:['Pick whichever loading option fits your day — all are effective.',
          'Bellemans Bike is the best option for cartilage specifically (cyclic compression).',
          'Isometric circuit is the best no-equipment option for tendons.',
          'Yoga holds complement Baar with Mitchell — sustained loading at collagen peak.',
          'Rotate options across the week for maximum tissue coverage.',
          'Rest day (no training): take collagen before bed instead — target the nocturnal GH pulse.'],
      caution:['Loading only needs ~10 min. More does not increase synthesis — tissue enters a 6-hour refractory period.',
               'Collagen without mechanical load is metabolised as general protein — not directed to connective tissue.'],
    }
  },
```

- [ ] **Step 2: Update the 🥩 button label**

```html
<!-- Line 1623-1625: change from -->
<button class="day-btn" data-block="N" onclick="selectBlock('N',this)">
    <span class="day-btn-num">🥩</span>
<!-- to -->
<button class="day-btn" data-block="N" onclick="selectBlock('N',this)">
    <span class="day-btn-num">🦴</span>
```

---

### Task 5: Add Diet & Supplement Content to BLOCKS['D'] (Daily Habits)

**Files:**
- Modify: `index.html` — BLOCKS['D'] object (~lines 2979-3013)

- [ ] **Step 1: Add diet/supplement steps to the end of BLOCKS['D'].steps array**

Insert these new steps after the existing `sD_hang` step:

```js
{id:'sD_prot', time:'Daily', title:'Protein Target',               sub:'140–180g per day',
 detail:[{n:'Protein Target',rx:'140–180g / day',d:'Distribute across meals — ~35-45g per feeding to maximise muscle protein synthesis (Attia). Four meals is ideal. Quality sources: meat, fish, eggs, dairy.'},
         {n:'Collagen Spacing',rx:'2+ hr gap',d:'Keep 2+ hours between any protein meal and collagen dose. Dietary amino acids (especially leucine) compete with collagen peptides for absorption and blunt the connective tissue synthesis signal.'}]},
{id:'sD_cold', time:'Day A/B', title:'Cold Exposure',              sub:'Avoid within 4–6 hrs of training',
 detail:[{n:'Post-Training Window',rx:'No cold for 4–6 hrs after Day A/B',d:'Cold suppresses mTOR signalling — the pathway that drives muscle protein synthesis and hypertrophy. Even short dips (2–5 min) are not proven safe post-training. The blunting is dose-dependent (colder + longer = worse) but no threshold has been established (Roberts 2015, Petersen & Fyfe 2021).'},
         {n:'Safe Windows',rx:'Off days · mornings · after Zone 2',d:'OK on Recovery days, Activity days, or morning before training. Endurance / Zone 2 adaptations are unaffected — cold only blunts the strength/hypertrophy (mTOR) pathway.'}]},
{id:'sD_heat', time:'Any', title:'Heat (Sauna / Hot Bath)',        sub:'No timing restriction',
 detail:[{n:'Heat Exposure',rx:'Post-training or evening',d:'No blunting effect on muscle adaptation. Increases blood flow and may aid recovery. No timing restriction relative to training. Use as desired.'}]},
{id:'sD_sleep', time:'Nightly', title:'Sleep & GH Protocol',       sub:'7–8h · no food 90 min before',
 detail:[{n:'Sleep Duration',rx:'7–8h minimum',d:'GH pulse amplitude is sleep-duration dependent. Chronic short sleep suppresses the nocturnal collagen synthesis peak regardless of supplementation.'},
         {n:'No Food Before Bed',rx:'90 min before sleep',d:'Insulin response from any macronutrient suppresses GH pulse. Any protein meal within 90 min of sleep blunts the overnight synthesis window.'},
         {n:'Rest Day Collagen',rx:'Before bed on rest days',d:'No training stimulus — target the nocturnal GH pulse. Small collagen dose is not a meal — does not trigger the insulin response that suppresses GH.'}]},
```

- [ ] **Step 2: Update BLOCKS['D'] note text**

```js
// Change from:
note:'Informal habits — do opportunistically throughout the day. Tibialis Raise and Dead Hang are in structured knee blocks on Day A/B — listed here for frequency on off days. Backward Walk is part of the evening ruck.',
// To:
note:'Informal habits and daily reference. Habits: do opportunistically throughout the day. Tibialis Raise and Dead Hang are in structured knee blocks on Day A/B — listed here for frequency on off days. Backward Walk is part of the evening ruck. Diet, cold/heat exposure, and sleep protocol are reference items — not exercises.',
```

- [ ] **Step 3: Add diet/supplement notes to BLOCKS['D'] briefing**

Add to `ok` array:
```js
'Protein target assumes active adult in rehab/training context (Attia: 1.6–2.2 g/kg).',
'Collagen + Creatine can be mixed in the same drink.',
```

Add to `caution` array (create it — D doesn't have one):
```js
caution:['Collagen must be separated from protein meals by 2+ hours.',
         'Cold water after Day A/B blunts strength gains — even brief exposure.'],
```

---

### Task 6: Update Schedule Reference Panes (Day A & Day B)

**Files:**
- Modify: `index.html` — schedule panes (~lines 1666-1694)

- [ ] **Step 1: Update Day A schedule pane**

Remove the T=0 collagen row (line 1669), retiming all subsequent rows. Update the note (line 1667) and footer (line 1678).

```html
<!-- Line 1667: change note -->
<p class="note" style="margin-bottom:12px;">Day A — Lower Body. Alternates with Day B. ~45 min. Collagen is a separate afternoon block.</p>

<!-- Remove line 1669 entirely (T=0 Collagen + vitamin C row) -->

<!-- Retiming: T+5→T=0, T+10→T+5, T+16→T+11, T+19→T+14, T+20→T+15, T+38→T+33 -->

<!-- Line 1678: change footer -->
<p class="note">Sequence order is recommended but no longer collagen-dependent.</p>
```

- [ ] **Step 2: Update Day B schedule pane**

Remove the T=0 collagen row (line 1686), retiming all subsequent rows. Update the note (line 1684).

```html
<!-- Line 1684: change note -->
<p class="note" style="margin-bottom:12px;">Day B — Upper Body. Alternates with Day A. ~35 min. Collagen is a separate afternoon block.</p>

<!-- Remove line 1686 entirely (T=0 Collagen + vitamin C row) -->

<!-- Retiming: T+5→T=0, T+11→T+6, T+18→T+13, T+19→T+14, T+25→T+20 -->
```

- [ ] **Step 3: Update Upper Body reference note**

```html
<!-- Line 1697: change from -->
<p class="note" style="margin-bottom:10px;">Mandatory on Day B. Pull: 7 sets total. Push: 6 sets. Intentionally asymmetric until pull-ups reach 3×5 — corrects current imbalance. Collagen required (upper body qualifies).</p>
<!-- to -->
<p class="note" style="margin-bottom:10px;">Mandatory on Day B. Pull: 7 sets total. Push: 6 sets. Intentionally asymmetric until pull-ups reach 3×5 — corrects current imbalance.</p>
```

---

### Task 7: Update Rules Section

**Files:**
- Modify: `index.html` — rules (~lines 2448-2468)

- [ ] **Step 1: Rewrite Rule 02**

```html
<!-- Change from: -->
<div class="rule-row"><div class="rule-n">02</div><div class="rule-c"><div class="rule-t">Collagen on both Day A and Day B</div><div class="rule-d">Both days have qualifying mechanical load (lower body or upper body). 15g + 200mg vit C, 45–60 min before training, 2+ hrs after protein. Zone 1 does not require collagen.</div></div></div>
<!-- To: -->
<div class="rule-row"><div class="rule-n">02</div><div class="rule-c"><div class="rule-t">Collagen Block is a separate afternoon session on Day A and Day B</div><div class="rule-d">Take collagen + vit C + creatine during eating window (early afternoon for 16:8 IF). 45–60 min later, pick a loading option (~10 min). Skip on Activity days — collagen timing stays pre-activity. Rest days: collagen before bed.</div></div></div>
```

- [ ] **Step 2: Update Rule 03**

```html
<!-- Change from: -->
<div class="rule-row"><div class="rule-n">03</div><div class="rule-c"><div class="rule-t">All collagen: 2+ hours after any protein meal</div><div class="rule-d">Leucine blunts connective tissue synthesis response.</div></div></div>
<!-- To: -->
<div class="rule-row"><div class="rule-n">03</div><div class="rule-c"><div class="rule-t">All collagen: 2+ hours after any protein meal</div><div class="rule-d">Leucine blunts connective tissue synthesis response. Plan collagen dose around your meal schedule — early afternoon works well with 16:8 IF (first meal ~11-12, collagen ~2 PM, load ~3 PM).</div></div></div>
```

- [ ] **Step 3: Rewrite Rule 04**

```html
<!-- Change from: -->
<div class="rule-row"><div class="rule-n">04</div><div class="rule-c"><div class="rule-t">Morning sequence is fixed on both days</div><div class="rule-d">Reordering disrupts the collagen timing architecture.</div></div></div>
<!-- To: -->
<div class="rule-row"><div class="rule-n">04</div><div class="rule-c"><div class="rule-t">Morning sequence is recommended on both days</div><div class="rule-d">Mobility → Core → strength progression warms tissues in the right order. No longer collagen-dependent but the sequence is still optimal.</div></div></div>
```

- [ ] **Step 4: Update Rule 06**

```html
<!-- Change from: -->
<div class="rule-row"><div class="rule-n">06</div><div class="rule-c"><div class="rule-t">Zone 2 cycling unrestricted</div><div class="rule-d">Collagen 45 min before any Zone 2 ride. Zone 1 unrestricted on all days, no collagen needed.</div></div></div>
<!-- To: -->
<div class="rule-row"><div class="rule-n">06</div><div class="rule-c"><div class="rule-t">Zone 2 cycling unrestricted</div><div class="rule-d">Zone 1 unrestricted on all days. Zone 2 rides can serve as the Collagen Block loading option if timed within the collagen window.</div></div></div>
```

---

### Task 8: Update Supplements Reference Page

**Files:**
- Modify: `index.html` — supplements page (~lines 2180-2247)

- [ ] **Step 1: Update "The Rule" section**

```html
<!-- Change from: -->
<div class="cr-val">Take 15g hydrolyzed collagen (skin-sourced, Type I) + 200mg vitamin C approximately 45–60 minutes before any qualifying mechanical load session. Minimum 2 hours after your last protein meal.</div>
<!-- To: -->
<div class="cr-val">Take 15g hydrolyzed collagen (skin-sourced, Type I) + 200mg vitamin C + 5g creatine during your eating window, then load mechanically 45–60 min later (~10 min). Minimum 2 hours after your last protein meal. On Activity days, take 45 min before heading out. Rest days: before bed.</div>
```

- [ ] **Step 2: Update "Collagen Warranted" section**

Replace the four warranted rows:

```html
<div class="card-row card-highlight">
  <div class="cr-left" style="min-width:0;flex:0 0 auto;width:50%;"><div class="cr-key">Day A / Day B — afternoon block</div></div>
  <div class="cr-right"><div class="cr-desc">Standalone Collagen Block. Pick a loading option: Bellemans Bike, isometric circuit, yoga holds, or loaded walk.</div></div>
</div>
<div class="card-row card-highlight">
  <div class="cr-left" style="min-width:0;flex:0 0 auto;width:50%;"><div class="cr-key">Activity day — hike, ski, sport</div></div>
  <div class="cr-right"><div class="cr-desc">Take 45–60 min before heading out. Activity is the loading stimulus.</div></div>
</div>
<div class="card-row card-highlight">
  <div class="cr-left" style="min-width:0;flex:0 0 auto;width:50%;"><div class="cr-key">Zone 2 ride (if timed in collagen window)</div></div>
  <div class="cr-right"><div class="cr-desc">Can serve as the Collagen Block loading option if taken 45–60 min after collagen.</div></div>
</div>
```

- [ ] **Step 3: Update "Collagen Not Warranted" section**

Replace the three not-warranted rows:

```html
<div class="card-row card-warn">
  <div class="cr-left" style="min-width:0;flex:0 0 auto;width:50%;"><div class="cr-key">True rest day (daytime)</div></div>
  <div class="cr-right"><div class="cr-desc">No qualifying loading event during the day. Take before bed to target GH pulse instead.</div></div>
</div>
<div class="card-row">
  <div class="cr-left" style="min-width:0;flex:0 0 auto;width:50%;"><div class="cr-key">Zone 1 easy walk or commute</div></div>
  <div class="cr-right"><div class="cr-desc">Sub-threshold for meaningful mechanotransduction.</div></div>
</div>
```

---

### Task 9: Update Remaining Collagen References

**Files:**
- Modify: `index.html` — scattered references throughout

- [ ] **Step 1: Update Day A Knee block subtitle**

```js
// Line ~2761: change from
{id:'sA_knee', time:'T+20',   title:'Knee & Lower Body',          sub:'~18 min · collagen rising into peak', navPage:'load',
// to (after retiming in Task 2)
{id:'sA_knee', time:'T+15',   title:'Knee & Lower Body',          sub:'~18 min', navPage:'load',
```

(This is part of Task 2 retiming — listed here as a reminder that the sub text also changes.)

- [ ] **Step 2: Update Day A Bellemans Bike description**

In the `sA_bike` detail, update the description to remove "at collagen peak":

```js
// Change from:
d:'Stationary bike. Seat: knee at 15–20° flexion at bottom of stroke. Steady moderate resistance. Cyclic cartilage loading at collagen peak. Window closes at 15 min — stop. A Zone 2 ride does NOT replace this — different seat height and loading angle.'
// To:
d:'Stationary bike. Seat: knee at 15–20° flexion at bottom of stroke. Steady moderate resistance. Cyclic cartilage loading. Window closes at 15 min — stop. A Zone 2 ride does NOT replace this — different seat height and loading angle.'
```

- [ ] **Step 3: Update Day B Upper Body note**

In `sB_ub` detail (line ~2821), the sub mentions nothing about collagen — no change needed. But check the note at line 1697 (handled in Task 6).

- [ ] **Step 4: Update Couch Stretch description (Day B mobility)**

```js
// Line ~2807: change from
d:'Targets rectus femoris — the hip flexor that crosses the knee joint. Day B placement: active recovery stretch for rec fem after Day A loading. Stretching during the remodeling window promotes better collagen fiber alignment.'
// To:
d:'Targets rectus femoris — the hip flexor that crosses the knee joint. Day B placement: active recovery stretch for rec fem after Day A loading. Stretching during the remodeling window promotes better tissue alignment.'
```

- [ ] **Step 5: Update Day R note about collagen**

The Day R block note (line ~2892) and briefing already say "consider collagen 45 min before" for heavy sessions. This is still valid guidance. Update the note slightly:

```js
// In BLOCKS['R'].note, the collagen note at the end is still correct — heavy session guidance stays.
// No change needed for Day R.
```

- [ ] **Step 6: Update reference page notes**

Lines ~1885 and ~2049 reference "Load Day only. Collagen at T=0." and similar. Update:

```html
<!-- Line 1885: change from -->
<p class="note" style="margin-bottom:12px;">Load Day only. Collagen at T=0. Sequence is fixed.</p>
<!-- To: -->
<p class="note" style="margin-bottom:12px;">Load Day only. Sequence is recommended.</p>
```

```html
<!-- Line 2049: change from -->
<p class="body">Added on Load Days only. Collagen at T=0. Sequence is fixed.</p>
<!-- To: -->
<p class="body">Added on Load Days only.</p>
```

```html
<!-- Line 2077: change from -->
<p class="note" style="margin-bottom:8px;">Collagen rising into peak window. Day A only. Tib Raise opens the block. Overcoming ISO Step-Up is the current default; swap Curtsy Squat as optional variation.</p>
<!-- To: -->
<p class="note" style="margin-bottom:8px;">Day A only. Tib Raise opens the block. Overcoming ISO Step-Up is the current default; swap Curtsy Squat as optional variation.</p>
```

```html
<!-- Line 2100: change from -->
<div class="cr-val">T+45 — inside collagen peak window</div>
<!-- To: -->
<div class="cr-val">After knee block — aim to do</div>
```

---

### Task 10: Add v11.7 Changelog Entry

**Files:**
- Modify: `index.html` — changelog area (~line 1225)

- [ ] **Step 1: Add v11.7 changelog block after the cover-h1**

Insert after the existing `<span class="cover-chip">COLLAGEN REBUILT</span>` line (~1227) and before the v11.6 changelog. Add a new version block:

```html
<div class="changes" style="margin-bottom:18px;">
  <div class="changes-title">v11.7 — Collagen Timing Restructure</div>
  <ul class="changes-list">
    <li><strong>Collagen decoupled from morning sessions.</strong> Day A and Day B no longer start with collagen at T=0. Morning sessions are pure training — start immediately with Mobility.</li>
    <li><strong>New Collagen Block tab (🦴).</strong> Standalone afternoon session. Take collagen + vit C + creatine during eating window, load 45–60 min later. Four loading options: Bellemans Bike (cartilage), Isometric Circuit (tendons), Yoga Holds (fascia/capsules), Loaded Walk (general CT). Pick one per day.</li>
    <li><strong>Diet & Supplements → Daily Habits.</strong> Protein target, cold/heat exposure, and sleep protocol moved to Daily Habits tab. 🥩 button replaced with 🦴.</li>
    <li><strong>IF-compatible.</strong> Collagen timing works within 16:8 intermittent fasting — afternoon dosing avoids breaking the fast while honoring the 2+ hour post-protein spacing.</li>
    <li><strong>Activity days unchanged.</strong> Collagen still taken 45 min before heading out on activity days.</li>
    <li><strong>Morning session times shortened.</strong> Day A: ~55 → ~45 min. Day B: ~40 → ~35 min (collagen wait removed).</li>
    <li><strong>Rules updated.</strong> Rules 02, 03, 04, 06 rewritten for afternoon collagen model. Morning sequence recommended but no longer collagen-dependent.</li>
  </ul>
</div>
```

- [ ] **Step 2: Update the cover chip**

```html
<!-- Line 1227: keep or update -->
<span class="cover-chip">COLLAGEN REBUILT</span>
```

This chip is already appropriate for v11.7.

---

### Task 11: Verify in Browser

- [ ] **Step 1: Open index.html in browser**

Check:
1. Title shows v11.7
2. Cover shows v11.7
3. More menu shows v11.7
4. Day A card: no collagen step, starts with Mobility at T=0, times are correct
5. Day B card: no collagen step, starts with Mobility at T=0, times are correct
6. 🦴 button opens Collagen Block with 4 loading options
7. Daily Habits (✨) now shows protein, cold/heat, sleep entries
8. Activity day unchanged — collagen at T=0
9. Recovery day unchanged
10. Schedule reference panes: Day A and Day B updated
11. Rules page: rules 02, 03, 04, 06 updated
12. Supplements reference page updated
13. Changelog shows v11.7

- [ ] **Step 2: Commit**

```bash
git add index.html
git commit -m "v11.7: decouple collagen from morning sessions, add standalone Collagen Block tab"
```
