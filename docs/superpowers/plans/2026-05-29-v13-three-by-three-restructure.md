# v13.0 Three-by-Three Restructure Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restructure kneehab from the v12 Day A/B/R/X/N/D framework into the v13.0 three-by-three rotation: Strength (S) · Cardio (C) · Rest (R), with a single Strength template, a new Daily Warm-Up block (W), and Cardio elevated from informal to a protected 60-min slot.

**Architecture:** Single-file HTML app (`index.html` ~3400 lines). The `BLOCKS` object drives the Today tab; `src-*` DOM containers mirror to `ex-*` hub panes via the `exDescLookup` array. All changes happen in `index.html` plus a snapshot file and the MD summary. **No test suite — verification is manual browser check** (per CLAUDE.md).

**Tech Stack:** HTML, vanilla JS, CSS. No build step. Open `index.html` directly in browser to verify.

---

## Spec Reference

Design spec: `docs/superpowers/specs/2026-05-29-v13-three-by-three-restructure-design.md`

Key spec sections:
- §3 Rotation Sequence (S → C → S → C → S → C → R)
- §4 Daily Warm-Up (10 items)
- §5 Strength Session (13 items + 3 optional finishers)
- §6 Cardio Session (60 min flexible)
- §7 Rest Session (Pigeon · Lizard · Couch Stretch)
- §8 Daily Habits (Wall Slide dropped, rest unchanged from v12.04)
- §11 Architecture (new BLOCKS keys S/C/W, MVD check update)
- Appendix A — Expert Review Decisions

---

## File Structure

**Files modified:**
- `index.html` — all program structure changes (~3400 lines, primary source of truth)
- `C:\Users\cpboa\.claude\projects\C--Users-cpboa-Dropbox-Cal-Cal-Active-Projects-kneehab\memory\MEMORY.md` — version bump and v13 changelog

**Files created:**
- `kneehab V13.0.html` — snapshot of new index.html state (per CLAUDE.md output protocol)
- `kneehab V13.0.MD` — version summary

**Files deleted (per CLAUDE.md "delete old versions"):**
- `kneehab V12.04.html`
- `kneehab V12.04.MD`

---

## Architectural Decisions (locked from spec)

1. **New BLOCKS keys:** `W` (Warm-Up), `S` (Strength), `C` (Cardio). Existing `R` (Rest), `N` (Collagen), `D` (Daily Habits) preserved.
2. **Removed BLOCKS keys:** `A`, `B`, `X` (Activity Day absorbed into `C`).
3. **Warm-Up standalone:** `W` is its own day button — user navigates to W before S or C. Auto-prepending warm-up to S/C cards adds JS complexity for marginal UX gain; kept simple.
4. **MVD check** updated from `key === 'B'` to `key === 'S'`.
5. **Day button row** order: `W`, `S`, `C`, `R`, `N`, `D`.
6. **Optional finishers** (Suitcase Carry, Front-Rack Carry, Ab Wheel Rollout) appended to the Strength steps list with a labeled separator.
7. **Right-side gating** notes preserved verbatim from v12 for Step Down, ISO Step-Up, Split Squat.

---

## Phase Overview

| Phase | Tasks | Outcome |
|---|---|---|
| 1. Setup | 1–2 | Version bumped, Wall Slide dropped |
| 2. Add Warm-Up block | 3–6 | W block live in UI |
| 3. Add Strength block | 7–10 | S block live in UI |
| 4. Add Cardio block | 11–14 | C block live in UI |
| 5. Restructure Rest | 15–16 | R updated with Couch Stretch |
| 6. Render logic & cleanup | 17–19 | MVD updated, old A/B/X removed |
| 7. Rules + schedule + hub tabs | 20–22 | Top-level UI reflects v13 |
| 8. Snapshot + docs + commit | 23–26 | V13.0 snapshot + summary + memory updated |

Each phase ends with a browser-verification step + commit. **Do not skip browser checks** — there is no test suite to catch regressions.

---

## Task 1: Bump version strings to v13.0

**Files:**
- Modify: `index.html` line 9 (`<title>`)
- Modify: `index.html` ~line 1119 (`.ms-title`)
- Modify: `index.html` ~line 1221 (`.cover-h1`)

- [ ] **Step 1: Edit `<title>` tag**

Use Edit tool:
- `old_string`: `<title>kneehab v12.04</title>`
- `new_string`: `<title>kneehab v13.0</title>`

- [ ] **Step 2: Edit `.ms-title` in More menu**

Use Edit tool:
- `old_string`: `  <div class="ms-title">kneehab v12.04</div>`
- `new_string`: `  <div class="ms-title">kneehab v13.0</div>`

- [ ] **Step 3: Edit `.cover-h1` on Home page**

Use Edit tool:
- `old_string`: `<div class="cover-h1">kneehab<br><em>v12.04</em></div>`
- `new_string`: `<div class="cover-h1">kneehab<br><em>v13.0</em></div>`

- [ ] **Step 4: Browser verify**

Open `index.html` in browser. Verify:
- Browser tab title = "kneehab v13.0"
- More menu (☰) shows "kneehab v13.0"
- Home page hero shows "v13.0"

- [ ] **Step 5: Commit**

```bash
git add index.html
git commit -m "v13.0: bump version strings"
```

---

## Task 2: Drop Wall Slide from Daily Habits

**Files:**
- Modify: `index.html` ~line 2858 (BLOCKS.D.steps `sD_ws` entry)
- Modify: `index.html` ~line 2173 (src-daily Wall Slide card)

- [ ] **Step 1: Remove `sD_ws` step from BLOCKS.D.steps**

Use Edit tool:
- `old_string`:
```
      {id:'sD_ws',   time:'Any', title:'Wall Slide',                    sub:'2 × 10 · slow',
       detail:[{n:'Wall Slide',rx:'2 × 10 · slow controlled',d:'Stand with back to wall, arms overhead in contact with wall. Slide arms down to shoulder height and back up. Scapular retraction and depression under load — same target as floor slide, standing position. Desk-friendly.'}]},
```
- `new_string`: (empty)

- [ ] **Step 2: Remove Wall Slide card from src-daily**

Use Edit tool to delete the Wall Slide card. The card is one of the cards in the src-daily `<div class="ex-body">`. Locate the exact card via Grep:

Run: search `index.html` for `Wall Slide` content in `src-daily` area.

Remove the matching `<div class="ex-card">` line.

- [ ] **Step 3: Browser verify**

Open `index.html`. Navigate to Daily Habits (D button). Verify Wall Slide no longer appears in either the Today card or the Reference > Daily Habits hub.

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "v13.0: drop Wall Slide from Daily Habits (WLYT in warm-up covers scap retraction)"
```

---

## Task 3: Add Daily Warm-Up BLOCKS data (key 'W')

**Files:**
- Modify: `index.html` insert before `};` that closes the BLOCKS object (~line 2898)

- [ ] **Step 1: Insert BLOCKS.W entry**

Locate the closing `};` of the BLOCKS object literal (after BLOCKS.D ends at ~line 2897).

Use Edit tool:
- `old_string`:
```
    }
  },

};
```
- `new_string`:
```
    }
  },

  'W': {
    type:'W', title:'DAILY WARM-UP', titleClass:'', stepLabel:'~16 min · before Strength or Cardio',
    pills:[{t:'~16 min',c:'amber'},{t:'Active days',c:'green'},{t:'Optional on Rest',c:''}],
    note:'<strong>v13.0 NEW</strong> — daily warm-up is real training, not just prep. 10 items covering mobility, anterior core (Hollow + RKC combo), lateral core + glute med (Side Plank w/ Abduction), adductor (Copenhagen), anti-rotation (Bird Dog), scap retraction (WLYT), and hip flexor under load. Performed before every Strength and Cardio session. Optional on Rest day. The right-side glute med pattern items (Side Plank w/ Abduction, Copenhagen, Bird Dog) reinforce the v12.01 thread daily — previously only 2x/week on Day A.',
    steps:[
      {id:'sW_9090',time:'~1 min', title:'90/90 Hip Rotations', sub:'1 × 5–8 each side',
       detail:[{n:'90/90 Hip Rotations',rx:'1 × 5–8 each side · slow controlled',d:'Seated 90/90 position — front leg 90° flexion, back leg 90° abduction. Rotate both knees side-to-side, finding end-range. Hip IR/ER mobility.'}]},
      {id:'sW_catcow',time:'~2 min', title:'Cat-Cow → Down Dog → Up Dog', sub:'5–8 breaths through flow',
       detail:[{n:'Cat-Cow → Down Dog → Up Dog',rx:'5–8 breaths through flow',d:'Cat-Cow (sagittal spinal articulation). Down Dog — <strong>"Press the floor, scaps wide"</strong> — active scap protraction 3–5 breaths (v12.02). Up Dog (thoracic extension + scap depression/retraction). Flow continuously through 5–8 breaths.'}]},
      {id:'sW_hkr',time:'~1.5 min', title:'Half-Kneeling Rotation', sub:'1 × 8 each side · 2s end-range pause',
       detail:[{n:'Half-Kneeling Rotation',rx:'1 × 8 each side · 2s end-range pause',d:'Thoracic rotation (v11.92). Half-kneeling stance, hands at chest height, rotate trunk to back-knee side. 2s pause at end-range. Switch sides.'}]},
      {id:'sW_ankle',time:'~1 min', title:'Kneeling Ankle Dorsiflexion', sub:'1 × 8–10 each side',
       detail:[{n:'Kneeling Ankle Dorsiflexion (ankle dive)',rx:'1 × 8–10 each side',d:'Half-kneeling. Front knee drives forward over toe, maintaining heel contact. Ankle DF mobility. Switch sides.'}]},
      {id:'sW_core',time:'~1.5 min', title:'Core Hold Combo', sub:'30s Hollow → 30s RKC Plank · back-to-back', timer:60,
       detail:[{n:'Core Hold Combo',rx:'30s Hollow → 30s RKC Plank · no rest between',d:'<strong>v13.0 NEW.</strong> 30s Hollow body (supine, arms overhead, legs hovering, lower back pressed to floor). Transition prone. 30s RKC Plank — <strong>max tension whole-body irradiation</strong> — squeeze glutes hard, brace core, drive elbows toward feet, quads on. No rest between. 60s total anti-extension under load, supine + prone, with transitional control bonus.'}]},
      {id:'sW_sp',time:'~2 min', title:'Side Plank with Abduction', sub:'2 × 30–45s each side',
       detail:[{n:'Side Plank with Abduction',rx:'2 × 30–45s each side',d:'Side plank position. <strong>Top leg lifts and holds</strong> during the side plank duration. Anti-lateral flexion + glute med direct (top leg abduction). Right-side compensation watch: top knee faces forward, no rolling open. Drives v12.01 right-side glute med thread.'}]},
      {id:'sW_cope',time:'~2 min', title:'Copenhagen Plank', sub:'2 × 20s each side',
       detail:[{n:'Copenhagen Plank',rx:'2 × 20s each side',d:'Side plank position with top leg knee resting on bench. Adductor + anti-lateral. Right-side bias for v12.01 thread.'}]},
      {id:'sW_hf',time:'~1.5 min', title:'Hip Flexor (Tuck L-Sit / Hanging Knee Raise)', sub:'1 × 10s hold or 1 × 8 reps',
       detail:[{n:'Hip Flexor',rx:'1 × 10s hold or 1 × 8 reps',d:'<strong>Default:</strong> Tuck L-Sit — seated on floor, hands beside hips, press up, knees tucked under chest, feet off floor. <strong>When near bar:</strong> Hanging Knee Raise. Active hip flexion + anterior core under load.'}]},
      {id:'sW_bd',time:'~1.5 min', title:'Bird Dog', sub:'1 × 8 each side · rotate variation',
       detail:[{n:'Bird Dog',rx:'1 × 8 each side',d:'Rotate variation: Slow Return / Elbow-to-Knee / Bird Dog Row. <strong>v11.95 compensation watch:</strong> support-leg adductor activation = pelvis rotating, brace obliques first.'}]},
      {id:'sW_wlyt',time:'~2 min', title:'WLYT', sub:'1 round (5 each letter)',
       detail:[{n:'WLYT',rx:'1 round (5 each letter)',d:'Floor, prone. W (elbows bent, shoulder blades squeezed back). L (arms 90° external rotation). Y (arms overhead, scap depression). T (arms horizontal abduction). 5 reps each letter, slow controlled.'}]},
    ],
    micro:[],
    briefing:{
      ok:['Daily warm-up serves as both mobility prep and core/glute med training.',
          'Performed before every Strength and Cardio session.',
          'Optional on Rest day.',
          'Right-side glute med items (Side Plank w/ Abduction, Copenhagen, Bird Dog) reinforce the v12.01 thread daily.',
          'Core Hold Combo: 60s sustained anti-extension under load with prone↔supine transitional control.'],
      sub:[],
      caution:['Hollow + RKC Plank must be done with intent — max tension on RKC Plank or it overlaps too much with the warm-up Hollow.'],
    }
  },

};
```

- [ ] **Step 2: Commit (data only, UI button still missing)**

```bash
git add index.html
git commit -m "v13.0: add BLOCKS.W (Daily Warm-Up) data"
```

---

## Task 4: Add src-warmup container

**Files:**
- Modify: `index.html` — insert new `<div class="ex-group">` before or after src-daily (~line 2160 area)

- [ ] **Step 1: Locate insertion point**

Read `index.html` around line 2155–2165 to find the start of the existing Daily Habits `ex-group`. Insert the Warm-Up `ex-group` immediately before it.

- [ ] **Step 2: Insert src-warmup ex-group**

Use Edit tool. Locate this exact string:

`old_string`:
```
    <div class="ex-group-head" onclick="togEx(this)" style="background:var(--green-bg);border-bottom-color:#1A3020;">
      <span class="eg-title" style="color:#80C0A0;">Daily Habits</span>
```

`new_string`:
```
  <div class="ex-group open">
    <div class="ex-group-head" onclick="togEx(this)" style="background:var(--amber-bg);border-bottom-color:var(--bg3);">
      <span class="eg-title" style="color:var(--amber);">Daily Warm-Up</span>
      <span class="eg-freq" style="color:#806040;border-color:var(--bg3);background:var(--bg);">~16 min · before S or C</span>
      <span class="eg-chev" style="color:#806040;">▼</span>
    </div>
    <div class="ex-body" id="src-warmup">
      <div class="ex-card"><div class="ex-top"><span class="ex-name">90/90 Hip Rotations</span><span class="ex-rx">1 × 5–8 each side</span></div><div class="ex-desc">Seated 90/90 position — front leg 90° flexion, back leg 90° abduction. Rotate both knees side-to-side finding end-range. Hip IR/ER mobility.</div></div>
      <div class="ex-card"><div class="ex-top"><span class="ex-name">Cat-Cow → Down Dog → Up Dog</span><span class="ex-rx">5–8 breaths through flow</span></div><div class="ex-desc">Cat-Cow (sagittal spinal articulation). Down Dog — <strong>"Press the floor, scaps wide"</strong> — active scap protraction 3–5 breaths (v12.02). Up Dog (thoracic extension + scap depression/retraction). Flow continuously through 5–8 breaths.</div></div>
      <div class="ex-card"><div class="ex-top"><span class="ex-name">Half-Kneeling Rotation</span><span class="ex-rx">1 × 8 each side · 2s pause</span></div><div class="ex-desc">Thoracic rotation (v11.92). Half-kneeling, hands at chest height, rotate trunk to back-knee side. 2s end-range pause. Switch sides.</div></div>
      <div class="ex-card"><div class="ex-top"><span class="ex-name">Kneeling Ankle Dorsiflexion</span><span class="ex-rx">1 × 8–10 each side</span></div><div class="ex-desc">"Ankle dive." Half-kneeling. Front knee drives forward over toe, maintaining heel contact. Ankle DF mobility. Switch sides.</div></div>
      <div class="ex-card card-highlight"><div class="ex-top"><span class="ex-name">Core Hold Combo</span><span class="ex-rx">30s Hollow → 30s RKC Plank · back-to-back</span></div><div class="ex-desc"><strong>v13.0 NEW.</strong> 30s Hollow body (supine, arms overhead, legs hovering, lower back pressed to floor). Transition prone. 30s RKC Plank — <strong>max tension whole-body irradiation</strong> — squeeze glutes hard, brace core, drive elbows toward feet, quads on. No rest between. 60s total anti-extension under load, supine + prone, with transitional control bonus.</div></div>
      <div class="ex-card"><div class="ex-top"><span class="ex-name">Side Plank with Abduction</span><span class="ex-rx">2 × 30–45s each side</span></div><div class="ex-desc">Side plank. Top leg lifts and holds during the side plank duration. Anti-lateral flexion + glute med direct. Right-side compensation watch: top knee faces forward, no rolling open. v12.01 right-side glute med thread.</div></div>
      <div class="ex-card"><div class="ex-top"><span class="ex-name">Copenhagen Plank</span><span class="ex-rx">2 × 20s each side</span></div><div class="ex-desc">Side plank position with top leg knee resting on bench. Adductor + anti-lateral. Right-side bias for v12.01 thread.</div></div>
      <div class="ex-card"><div class="ex-top"><span class="ex-name">Hip Flexor (Tuck L-Sit / Hanging Knee Raise)</span><span class="ex-rx">1 × 10s hold or 1 × 8 reps</span></div><div class="ex-desc"><strong>Default:</strong> Tuck L-Sit — seated, hands beside hips, press up, knees tucked under chest, feet off floor. <strong>When near bar:</strong> Hanging Knee Raise. Active hip flexion + anterior core under load.</div></div>
      <div class="ex-card"><div class="ex-top"><span class="ex-name">Bird Dog</span><span class="ex-rx">1 × 8 each side · rotate variation</span></div><div class="ex-desc">Rotate variation: Slow Return / Elbow-to-Knee / Bird Dog Row. <strong>v11.95 compensation watch:</strong> support-leg adductor activation = pelvis rotating, brace obliques first.</div></div>
      <div class="ex-card"><div class="ex-top"><span class="ex-name">WLYT</span><span class="ex-rx">1 round (5 each letter)</span></div><div class="ex-desc">Floor, prone. W (elbows bent, shoulder blades squeezed back). L (arms 90° ER). Y (arms overhead, scap depression). T (arms horizontal abduction). 5 reps each letter, slow controlled.</div></div>
    </div>
  </div>

    <div class="ex-group-head" onclick="togEx(this)" style="background:var(--green-bg);border-bottom-color:#1A3020;">
      <span class="eg-title" style="color:#80C0A0;">Daily Habits</span>
```

Note: this wraps a new `ex-group` for Warm-Up BEFORE the Daily Habits group. Verify by reading lines around the edit to confirm structure is sound.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "v13.0: add src-warmup container (Reference hub source)"
```

---

## Task 5: Add ex-warmup hub pane and exDescLookup entry

**Files:**
- Modify: `index.html` ~line 2421–2428 (exDescLookup array)
- Modify: `index.html` exercises page (~line 1880, sched-tabs and sched-panes)

- [ ] **Step 1: Add `['src-warmup', 'ex-warmup']` mirror entry to exDescLookup**

Use Edit tool. Read lines 2420–2430 first to confirm exact format.

`old_string` (the exDescLookup array entry list start):
```
    ['src-postA',  'ex-base-postA'],
```

`new_string`:
```
    ['src-warmup', 'ex-warmup'],
    ['src-postA',  'ex-base-postA'],
```

- [ ] **Step 2: Add ex-warmup pane to Exercises hub**

Locate the Exercises hub tabs and panes (~line 1880). Read lines 1876–2010 to understand current structure.

Add new tab and pane. The exact insertion location depends on tab order — see Task 22 for tab restructuring. For now, **add ex-warmup as a hidden pane** so the mirror works even before tabs are restructured:

`old_string`:
```
  <div id="ex-base" class="sched-pane on">
```

`new_string`:
```
  <div id="ex-warmup" class="sched-pane"></div>
  <div id="ex-base" class="sched-pane on">
```

- [ ] **Step 3: Browser verify warm-up mirroring**

Open `index.html`. Open browser DevTools. Inspect `#ex-warmup` element. Confirm it has been populated with the same cards as `#src-warmup` (the `initExHub` function mirrors src-* into ex-* on load).

If not populated, check that `initExHub` runs at load (it should — look for it in the script tag area).

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "v13.0: add ex-warmup hub pane and exDescLookup mirror entry"
```

---

## Task 6: Add Daily Warm-Up day button

**Files:**
- Modify: `index.html` ~line 1670 (day-btn row)

- [ ] **Step 1: Insert W button at the start of the day-btn row**

Read lines 1668–1690 to confirm the row structure.

Use Edit tool:

`old_string`:
```
  <button class="day-btn type-a" data-block="A" onclick="selectBlock('A',this)">
    <span class="day-btn-num">🦵</span>
```

`new_string`:
```
  <button class="day-btn" data-block="W" onclick="selectBlock('W',this)">
    <span class="day-btn-num">🌅</span>
    <span class="day-btn-type">Warm-Up</span>
  </button>
  <button class="day-btn type-a" data-block="A" onclick="selectBlock('A',this)">
    <span class="day-btn-num">🦵</span>
```

Note: emoji 🌅 chosen for warm-up identity. The `day-btn-type` text must match the existing buttons' format — read line 1672–1674 to confirm.

- [ ] **Step 2: Browser verify W button**

Open `index.html`. Verify:
- W button appears first in row
- Clicking W shows the 10 warm-up items as a day card
- All items expand/collapse correctly

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "v13.0: add W day button — Daily Warm-Up live in UI"
```

---

## Task 7: Add Strength BLOCKS data (key 'S')

**Files:**
- Modify: `index.html` — insert before BLOCKS.W (Warm-Up is at top of new blocks, S goes after to follow the natural order)

- [ ] **Step 1: Insert BLOCKS.S after BLOCKS.W**

Use Edit tool. Locate the end of BLOCKS.W (a `},` followed by blank line, then `};`).

`old_string`:
```
      caution:['Hollow + RKC Plank must be done with intent — max tension on RKC Plank or it overlaps too much with the warm-up Hollow.'],
    }
  },

};
```

`new_string`:
```
      caution:['Hollow + RKC Plank must be done with intent — max tension on RKC Plank or it overlaps too much with the warm-up Hollow.'],
    }
  },

  'S': {
    type:'S', title:'STRENGTH', titleClass:'type-a', stepLabel:'~47–52 min loaded · single template',
    pills:[{t:'~47–52 min',c:'amber'},{t:'3x per cycle',c:''},{t:'Plyo 2 of 3',c:''}],
    note:'<strong>v13.0 NEW</strong> — single Strength template, all mandatory. Replaces v12 Day A + Day B. Ordered per Baar (isometric ISO Step-Up before plyo, tendon priming). Plyo rotates across the 3 Strength sessions per cycle: Jump Rope → KB Swing → none. Right-side bodyweight gating preserved for Step Down, ISO Step-Up, and Split Squat per v12.01 thread. Optional finishers (Suitcase Carry, Front-Rack Carry, Ab Wheel Rollout) — pick 1–2 per session based on time and energy.',
    steps:[
      {id:'sS_iso',time:'~4 min', title:'ISO Step-Up (tendon primer)', sub:'3 × 30s each side · overcoming · right-side bodyweight',
       detail:[{n:'ISO Step-Up — overcoming isometric',rx:'3 × 30s each side',d:'<strong>v13.0 NEW position: first in session per Baar.</strong> Isometric loading primes tendon stiffness before plyo high-load impact. Single-leg overcoming isometric step-up — limited step height per v11.4. Push UP against an immovable load or active brace. Right-side bodyweight gated (v12.01). <strong>Replaces SL Wall Sit:</strong> more functional hip-extending position, glute med co-activation.'}]},
      {id:'sS_plyo',time:'~5 min', title:'Plyo Primer (when scheduled)', sub:'Jump Rope / KB Swing — rotate · 2 of 3 sessions',
       detail:[{n:'Plyo Primer — Jump Rope',rx:'3 × 30s · low-volume',d:'Vertical impact stimulus. Phase 1 (wk 1–3): rope only. Progression in v12.0 phasing: Phase 2 = box jump-up, Phase 3 = broad jumps + bilateral drop jump 12", Phase 4 = SL hops + drop jump 18–24". <strong>Stop rule:</strong> knee pain or effusion → drop one phase, hold 2 weeks.'},
               {n:'Plyo Primer — KB Swing',rx:'3 × 10',d:'Horizontal hip-power stimulus. Hip hinge, explosive lockout, KB swings to chest height (Russian) or overhead (American — only if shoulder mobility allows). Lower GRF than jump rope — different stimulus.'},
               {n:'Plyo rotation across cycle',rx:'2 of 3 Strength sessions',d:'First Strength of cycle: Jump Rope. Second Strength: KB Swing. Third Strength: no plyo. Same-exercise spacing 7 days; cross-exercise spacing 48h (different stimuli OK).'}]},
      {id:'sS_kbsq',time:'~5 min', title:'KB Front Rack Squat', sub:'3 × 8 · 2s pause · single → double KB',
       detail:[{n:'KB Front Rack Squat',rx:'3 × 8 · 2s pause at bottom',d:'Bilateral squat. Single KB alternating sides initially, progress to double KB front rack. <strong>Right-side gating does NOT apply</strong> (bilateral). Drives bilateral knee-dominant axial-load.'}]},
      {id:'sS_rdl',time:'~5 min', title:'SL RDL', sub:'3 × 8 each side · KB-loadable',
       detail:[{n:'SL RDL',rx:'3 × 8 each side',d:'Single-leg Romanian deadlift. Hinge at hip, soft knee bend, reach back with free leg. KB-loadable (start light, progress per 2×2 rule).'}]},
      {id:'sS_step',time:'~4 min', title:'Step Down (slant board)', sub:'3 × 8 each side · 3s eccentric · right-side bodyweight',
       detail:[{n:'Step Down (slant board)',rx:'3 × 8 each side · 3s eccentric',d:'Eccentric quad loading. Slant board for ankle DF demand. <strong>Stance-leg tracking cue:</strong> knee tracks over 2nd toe. <strong>Compensation watch (v11.95 + v12.01):</strong> knee valgus / trunk lean / pelvis drop. Right-side bodyweight gated.'}]},
      {id:'sS_split',time:'~4 min', title:'Split Squat 2s', sub:'3 × 8 each side · 2s pause · right-side bodyweight',
       detail:[{n:'Split Squat 2s',rx:'3 × 8 each side · 2s pause at bottom',d:'Stationary split stance. Lower with control, 2s pause, drive up. Right-side bodyweight gated.'}]},
      {id:'sS_press',time:'~5 min', title:'KB Press', sub:'3 × 5–8 each side',
       detail:[{n:'KB Press',rx:'3 × 5–8 each side',d:'Strict overhead press, KB in rack position. No leg drive (push-press deferred).'}]},
      {id:'sS_pu',time:'~4 min', title:'Push-Up Tempo', sub:'3 × 8–10 · 3s eccentric',
       detail:[{n:'Push-Up Tempo',rx:'3 × 8–10 · 3s lowering',d:'Standard push-up with 3s eccentric phase. Pause briefly at bottom, drive up.'}]},
      {id:'sS_pull',time:'~5 min', title:'Eccentric Pull-Up', sub:'3 × 3–5 · 5s lowering',
       detail:[{n:'Eccentric Pull-Up',rx:'3 × 3–5 · 5s lowering',d:'Jump or step up to top position, lower with 5s control. Pull volume asymmetric until pull-ups reach 3×5 strict, then rebalance.'}]},
      {id:'sS_row',time:'~5 min', title:'Ring Row', sub:'3 × 8–10',
       detail:[{n:'Ring Row',rx:'3 × 8–10',d:'Horizontal pull. Adjust foot position for difficulty (feet under rings = harder, feet behind = easier).'}]},
      {id:'sS_glute',time:'~3 min', title:'SL Glute Bridge', sub:'3 × 12 each side',
       detail:[{n:'Single-Leg Glute Bridge',rx:'3 × 12 each side',d:'Bridge on one leg. <strong>v11.95 cue: pelvis-level</strong> — no drop on unloaded side.'}]},
      {id:'sS_soleus',time:'~3 min', title:'Soleus Calf Raise', sub:'3 × 15 each side',
       detail:[{n:'Soleus Calf Raise',rx:'3 × 15 each side',d:'Seated or single-leg bent-knee calf raise. Soleus emphasis (gastrocnemius minimally engaged in bent-knee position). Slow controlled.'}]},
      {id:'sS_tib',time:'~2 min', title:'Tib Raise', sub:'1 × 20 · 1s hold top',
       detail:[{n:'Tib Raise',rx:'1 × 20 · 1s hold top',d:'Heels against wall. Lift toes as high as possible, 1s hold at top, lower slowly. Anterior tibialis stimulus highest at dorsiflexion end-range.'}]},
      {id:'sS_opt',time:'Optional', title:'Optional Finishers — pick 1–2', sub:'Suitcase Carry · Front-Rack Carry · Ab Wheel Rollout',
       detail:[{n:'Suitcase Carry',rx:'2 × 40m each side · heaviest KB',d:'Anti-lateral flexion + axial spinal load. Intentional right-side QL/glute med training.'},
               {n:'Front-Rack Carry',rx:'2 × 30m each side',d:'Heavier carry day — front-rack KB position adds anterior load. Pairs well with Suitcase as a carry combo.'},
               {n:'Ab Wheel Rollout',rx:'2 × 6–10 · 3s eccentric',d:'Dynamic eccentric anti-extension under full ROM. Unique stimulus — Bird Dog in warm-up is positional, Ab Wheel is loaded. Pick when time and energy allow.'}]},
    ],
    micro:[],
    briefing:{
      ok:['Single template — all 13 items mandatory.',
          'Plyo rotates: Jump Rope (1st S) → KB Swing (2nd S) → none (3rd S).',
          'ISO Step-Up FIRST per Baar — tendon priming before plyo.',
          'Right-side bodyweight gated: Step Down, ISO Step-Up, Split Squat.',
          'KB Front Rack Squat is bilateral — no gating.',
          'Optional finishers — pick 1–2 based on time and energy.',
          '2×2 progression rule per exercise.'],
      sub:['Warm-Up (W block) before this session, never during or after.',
           'Daily Habits cardio target counts when Cardio session follows.'],
      caution:['Stop on sharp pain. Dull ache OK; >4/10 reduce load or angle.',
               'Plyo stop-rule: knee pain or effusion → drop one phase, hold 2 weeks.'],
    }
  },

};
```

- [ ] **Step 2: Commit (data only)**

```bash
git add index.html
git commit -m "v13.0: add BLOCKS.S (Strength) data — 13 items + optional finishers"
```

---

## Task 8: Add src-strength container

**Files:**
- Modify: `index.html` — insert new ex-group near the src-warmup group (~line 2160 area)

- [ ] **Step 1: Insert src-strength ex-group after src-warmup**

Use Edit tool. Locate the end of the src-warmup ex-group (which closes with `</div>\n  </div>\n\n    <div class="ex-group-head"` for Daily Habits).

`old_string`:
```
      <div class="ex-card"><div class="ex-top"><span class="ex-name">WLYT</span><span class="ex-rx">1 round (5 each letter)</span></div><div class="ex-desc">Floor, prone. W (elbows bent, shoulder blades squeezed back). L (arms 90° ER). Y (arms overhead, scap depression). T (arms horizontal abduction). 5 reps each letter, slow controlled.</div></div>
    </div>
  </div>

    <div class="ex-group-head" onclick="togEx(this)" style="background:var(--green-bg);border-bottom-color:#1A3020;">
      <span class="eg-title" style="color:#80C0A0;">Daily Habits</span>
```

`new_string`:
```
      <div class="ex-card"><div class="ex-top"><span class="ex-name">WLYT</span><span class="ex-rx">1 round (5 each letter)</span></div><div class="ex-desc">Floor, prone. W (elbows bent, shoulder blades squeezed back). L (arms 90° ER). Y (arms overhead, scap depression). T (arms horizontal abduction). 5 reps each letter, slow controlled.</div></div>
    </div>
  </div>

  <div class="ex-group open">
    <div class="ex-group-head" onclick="togEx(this)">
      <span class="eg-title">Strength</span>
      <span class="eg-freq">~47–52 min · 3x per cycle</span>
      <span class="eg-chev">▼</span>
    </div>
    <div class="ex-body" id="src-strength">
      <div class="ex-card card-highlight"><div class="ex-top"><span class="ex-name">ISO Step-Up (tendon primer)</span><span class="ex-rx">3 × 30s each side · overcoming · right-side bodyweight</span></div><div class="ex-desc"><strong>v13.0 NEW position: first in session per Baar.</strong> Isometric loading primes tendon stiffness before plyo high-load impact. Single-leg overcoming isometric step-up — limited step height per v11.4. Push UP against an immovable load or active brace. Right-side bodyweight gated (v12.01). <strong>Replaces SL Wall Sit:</strong> more functional hip-extending position, glute med co-activation.</div></div>
      <div class="ex-card"><div class="ex-top"><span class="ex-name">Plyo Primer (when scheduled)</span><span class="ex-rx">Jump Rope / KB Swing · rotate · 2 of 3 sessions</span></div><div class="ex-desc">Plyo rotation across the 3 Strength sessions per cycle: <strong>1st = Jump Rope (3 × 30s), 2nd = KB Swing (3 × 10), 3rd = none.</strong> Same-exercise spacing 7 days, cross-exercise spacing 48h (different stimuli OK). Phase 1 (wk 1–3): rope only. Stop-rule: knee pain or effusion → drop one phase, hold 2 weeks.</div></div>
      <div class="ex-card"><div class="ex-top"><span class="ex-name">KB Front Rack Squat</span><span class="ex-rx">3 × 8 · 2s pause · single → double KB</span></div><div class="ex-desc">Bilateral squat. Single KB alternating sides initially, progress to double KB front rack. <strong>Right-side gating does NOT apply</strong> (bilateral). Drives bilateral knee-dominant axial-load.</div></div>
      <div class="ex-card"><div class="ex-top"><span class="ex-name">SL RDL</span><span class="ex-rx">3 × 8 each side · KB-loadable</span></div><div class="ex-desc">Single-leg Romanian deadlift. Hinge at hip, soft knee bend, reach back with free leg. KB-loadable (start light, progress per 2×2 rule).</div></div>
      <div class="ex-card"><div class="ex-top"><span class="ex-name">Step Down (slant board)</span><span class="ex-rx">3 × 8 each side · 3s eccentric · right-side bodyweight</span></div><div class="ex-desc">Eccentric quad loading. Slant board for ankle DF demand. <strong>Stance-leg tracking cue:</strong> knee tracks over 2nd toe. <strong>Compensation watch (v11.95 + v12.01):</strong> knee valgus / trunk lean / pelvis drop. Right-side bodyweight gated.</div></div>
      <div class="ex-card"><div class="ex-top"><span class="ex-name">Split Squat 2s</span><span class="ex-rx">3 × 8 each side · 2s pause · right-side bodyweight</span></div><div class="ex-desc">Stationary split stance. Lower with control, 2s pause, drive up. Right-side bodyweight gated.</div></div>
      <div class="ex-card"><div class="ex-top"><span class="ex-name">KB Press</span><span class="ex-rx">3 × 5–8 each side</span></div><div class="ex-desc">Strict overhead press, KB in rack position. No leg drive (push-press deferred).</div></div>
      <div class="ex-card"><div class="ex-top"><span class="ex-name">Push-Up Tempo</span><span class="ex-rx">3 × 8–10 · 3s eccentric</span></div><div class="ex-desc">Standard push-up with 3s eccentric phase. Pause briefly at bottom, drive up.</div></div>
      <div class="ex-card"><div class="ex-top"><span class="ex-name">Eccentric Pull-Up</span><span class="ex-rx">3 × 3–5 · 5s lowering</span></div><div class="ex-desc">Jump or step up to top position, lower with 5s control. Pull volume asymmetric until pull-ups reach 3×5 strict, then rebalance.</div></div>
      <div class="ex-card"><div class="ex-top"><span class="ex-name">Ring Row</span><span class="ex-rx">3 × 8–10</span></div><div class="ex-desc">Horizontal pull. Adjust foot position for difficulty (feet under rings = harder, feet behind = easier).</div></div>
      <div class="ex-card"><div class="ex-top"><span class="ex-name">SL Glute Bridge</span><span class="ex-rx">3 × 12 each side</span></div><div class="ex-desc">Bridge on one leg. <strong>v11.95 cue: pelvis-level</strong> — no drop on unloaded side.</div></div>
      <div class="ex-card"><div class="ex-top"><span class="ex-name">Soleus Calf Raise</span><span class="ex-rx">3 × 15 each side</span></div><div class="ex-desc">Seated or single-leg bent-knee calf raise. Soleus emphasis (gastrocnemius minimally engaged in bent-knee position). Slow controlled.</div></div>
      <div class="ex-card"><div class="ex-top"><span class="ex-name">Tib Raise</span><span class="ex-rx">1 × 20 · 1s hold top</span></div><div class="ex-desc">Heels against wall. Lift toes as high as possible, 1s hold at top, lower slowly. Anterior tibialis stimulus highest at dorsiflexion end-range.</div></div>
      <div class="ex-card" style="border-left:3px solid #4A7A5A;"><div class="ex-top"><span class="ex-name">Optional Finishers</span><span class="ex-rx">Pick 1–2 per session</span></div><div class="ex-desc"><strong>Suitcase Carry</strong> 2 × 40m each side, heaviest KB — anti-lateral flexion + axial spinal load. <strong>Front-Rack Carry</strong> 2 × 30m each side — anterior load, pairs well with Suitcase. <strong>Ab Wheel Rollout</strong> 2 × 6–10, 3s eccentric — dynamic eccentric anti-extension full ROM.</div></div>
    </div>
  </div>

    <div class="ex-group-head" onclick="togEx(this)" style="background:var(--green-bg);border-bottom-color:#1A3020;">
      <span class="eg-title" style="color:#80C0A0;">Daily Habits</span>
```

- [ ] **Step 2: Commit**

```bash
git add index.html
git commit -m "v13.0: add src-strength container with 13 items + optional finishers"
```

---

## Task 9: Add ex-strength hub mirror

**Files:**
- Modify: `index.html` exDescLookup (~line 2421)
- Modify: `index.html` exercises page (~line 1880)

- [ ] **Step 1: Add `['src-strength', 'ex-strength']` to exDescLookup**

Use Edit tool. Read lines 2418–2432 to confirm format.

`old_string`:
```
    ['src-warmup', 'ex-warmup'],
    ['src-postA',  'ex-base-postA'],
```

`new_string`:
```
    ['src-warmup', 'ex-warmup'],
    ['src-strength', 'ex-strength'],
    ['src-postA',  'ex-base-postA'],
```

- [ ] **Step 2: Add ex-strength pane**

`old_string`:
```
  <div id="ex-warmup" class="sched-pane"></div>
  <div id="ex-base" class="sched-pane on">
```

`new_string`:
```
  <div id="ex-warmup" class="sched-pane"></div>
  <div id="ex-strength" class="sched-pane"></div>
  <div id="ex-base" class="sched-pane on">
```

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "v13.0: add ex-strength hub pane and exDescLookup mirror entry"
```

---

## Task 10: Add Strength day button

**Files:**
- Modify: `index.html` ~line 1670 (day-btn row)

- [ ] **Step 1: Insert S button after W button**

Use Edit tool:

`old_string`:
```
  <button class="day-btn" data-block="W" onclick="selectBlock('W',this)">
    <span class="day-btn-num">🌅</span>
    <span class="day-btn-type">Warm-Up</span>
  </button>
  <button class="day-btn type-a" data-block="A" onclick="selectBlock('A',this)">
    <span class="day-btn-num">🦵</span>
```

`new_string`:
```
  <button class="day-btn" data-block="W" onclick="selectBlock('W',this)">
    <span class="day-btn-num">🌅</span>
    <span class="day-btn-type">Warm-Up</span>
  </button>
  <button class="day-btn type-a" data-block="S" onclick="selectBlock('S',this)">
    <span class="day-btn-num">💪</span>
    <span class="day-btn-type">Strength</span>
  </button>
  <button class="day-btn type-a" data-block="A" onclick="selectBlock('A',this)">
    <span class="day-btn-num">🦵</span>
```

- [ ] **Step 2: Browser verify**

Open `index.html`. Click S button. Verify:
- 13 strength items + optional finishers render
- ISO Step-Up is FIRST
- All cards expand/collapse
- Reference > (will be Strength tab after task 22) shows mirrored cards

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "v13.0: add S day button — Strength live in UI"
```

---

## Task 11: Add Cardio BLOCKS data (key 'C')

**Files:**
- Modify: `index.html` — insert after BLOCKS.S

- [ ] **Step 1: Insert BLOCKS.C after BLOCKS.S**

Use Edit tool. Locate end of BLOCKS.S:

`old_string`:
```
      caution:['Stop on sharp pain. Dull ache OK; >4/10 reduce load or angle.',
               'Plyo stop-rule: knee pain or effusion → drop one phase, hold 2 weeks.'],
    }
  },

};
```

`new_string`:
```
      caution:['Stop on sharp pain. Dull ache OK; >4/10 reduce load or angle.',
               'Plyo stop-rule: knee pain or effusion → drop one phase, hold 2 weeks.'],
    }
  },

  'C': {
    type:'C', title:'CARDIO', titleClass:'', stepLabel:'60 min intentional · 3x per cycle',
    pills:[{t:'60 min',c:'green'},{t:'3x per cycle',c:''},{t:'No zone gating',c:''}],
    note:'<strong>v13.0 NEW</strong> — Cardio elevated from informal to protected slot. 3 sessions per cycle × 60 min = 180 min/week, hitting the v12.04 weekly cardio target by structure. <strong>No zone gating:</strong> log time, not HR. Intuitive intensity per BBM-flavored framing. Bellemans Bike as default opener for cartilage stim (cyclic compressive loading at 15–20° flexion). Modality flexes: ride, ruck, hike, row, swim. Activity Day (ski/hike/ride) absorbs a Cardio slot — variable duration, replaces the 60-min target for that day.',
    steps:[
      {id:'sC_bike',time:'10–12 min', title:'Bellemans Bike (default opener)', sub:'15–20° flexion · hard stop 15 min', timer:720,
       detail:[{n:'Bellemans Bike',rx:'10–12 min working · hard stop 15 min',d:'Cyclic cartilage loading at 15–20° flexion at bottom of stroke. Specific seat height. <strong>Hard stop at 15 min</strong> — more does not improve cartilage nutrition. Most effective during collagen synthesis window (see Collagen Block).'}]},
      {id:'sC_main',time:'45–50 min', title:'Main aerobic', sub:'Ride · Ruck · Hike · Row · Swim',
       detail:[{n:'Modality flex',rx:'45–50 min sustained aerobic',d:'Pick what feels good. Ride · Loaded Ruck · Hike · Row · Swim. No HR target — intuitive intensity. <strong>Counts toward Weekly Cardio Total</strong> (180 min/week target, v12.04).'},
               {n:'Sequencing',rx:'After Strength or 6+ hr separated',d:'Dedicated cardio after strength on same day, or 6+ hours separated. Never immediately before Strength.'}]},
      {id:'sC_act',time:'Variable', title:'OR Activity Day', sub:'Ski · Hike · Ride · 60–180+ min',
       detail:[{n:'Activity Day',rx:'Variable, 60–180+ min',d:'Ski, hike, ride — absorbs the Cardio slot entirely. No additional 60-min cardio needed that day. Take collagen 45–60 min before heading out (Collagen Block timing pre-activity).'}]},
    ],
    micro:[],
    briefing:{
      ok:['60 min protected slot — 3x per cycle hits 180 min/week.',
          'No zone gating — log time, intensity flexes.',
          'Bellemans Bike is the cartilage-specific opener; ride/ruck/etc. do not replace it.',
          'Activity Day absorbs a Cardio slot when it happens.',
          'Daily Warm-Up (W) before this session.'],
      sub:['If cardio target consistently unmet, drop to 45 min × 3 = 135 min/week (between WHO floor and AHA range).'],
      caution:['Never immediately before Strength — 6+ hr separation or after Strength only.',
               'Bellemans Bike hard stop 15 min.'],
    }
  },

};
```

- [ ] **Step 2: Commit**

```bash
git add index.html
git commit -m "v13.0: add BLOCKS.C (Cardio) data"
```

---

## Task 12: Add src-cardio container

**Files:**
- Modify: `index.html` — add new ex-group after src-strength

- [ ] **Step 1: Insert src-cardio ex-group**

Use Edit tool. Locate end of src-strength ex-group:

`old_string`:
```
      <div class="ex-card" style="border-left:3px solid #4A7A5A;"><div class="ex-top"><span class="ex-name">Optional Finishers</span><span class="ex-rx">Pick 1–2 per session</span></div><div class="ex-desc"><strong>Suitcase Carry</strong> 2 × 40m each side, heaviest KB — anti-lateral flexion + axial spinal load. <strong>Front-Rack Carry</strong> 2 × 30m each side — anterior load, pairs well with Suitcase. <strong>Ab Wheel Rollout</strong> 2 × 6–10, 3s eccentric — dynamic eccentric anti-extension full ROM.</div></div>
    </div>
  </div>

    <div class="ex-group-head" onclick="togEx(this)" style="background:var(--green-bg);border-bottom-color:#1A3020;">
      <span class="eg-title" style="color:#80C0A0;">Daily Habits</span>
```

`new_string`:
```
      <div class="ex-card" style="border-left:3px solid #4A7A5A;"><div class="ex-top"><span class="ex-name">Optional Finishers</span><span class="ex-rx">Pick 1–2 per session</span></div><div class="ex-desc"><strong>Suitcase Carry</strong> 2 × 40m each side, heaviest KB — anti-lateral flexion + axial spinal load. <strong>Front-Rack Carry</strong> 2 × 30m each side — anterior load, pairs well with Suitcase. <strong>Ab Wheel Rollout</strong> 2 × 6–10, 3s eccentric — dynamic eccentric anti-extension full ROM.</div></div>
    </div>
  </div>

  <div class="ex-group open">
    <div class="ex-group-head" onclick="togEx(this)">
      <span class="eg-title">Cardio</span>
      <span class="eg-freq">60 min · 3x per cycle</span>
      <span class="eg-chev">▼</span>
    </div>
    <div class="ex-body" id="src-cardio">
      <div class="ex-card card-highlight"><div class="ex-top"><span class="ex-name">Bellemans Bike (default opener)</span><span class="ex-rx">10–12 min working · hard stop 15 min</span></div><div class="ex-desc">Cyclic cartilage loading at 15–20° flexion at bottom of stroke. Specific seat height. <strong>Hard stop at 15 min</strong> — more does not improve cartilage nutrition. Most effective during collagen synthesis window.</div></div>
      <div class="ex-card"><div class="ex-top"><span class="ex-name">Ride</span><span class="ex-rx">45–50 min sustained</span></div><div class="ex-desc">Outdoor or trainer. No HR target — intuitive intensity. Zone 2 ride can serve as Collagen Block loading option if timed within collagen window.</div></div>
      <div class="ex-card"><div class="ex-top"><span class="ex-name">Loaded Ruck</span><span class="ex-rx">45–50 min · weighted pack</span></div><div class="ex-desc">Walking with loaded backpack. Posterior chain + axial load. Not same day as a long bike — gate via Rule.</div></div>
      <div class="ex-card"><div class="ex-top"><span class="ex-name">Hike</span><span class="ex-rx">60+ min · variable terrain</span></div><div class="ex-desc">Trail walking. If &gt; 90 min counts as Activity Day equivalent.</div></div>
      <div class="ex-card"><div class="ex-top"><span class="ex-name">Row</span><span class="ex-rx">30–45 min</span></div><div class="ex-desc">Concept2 or similar. Full-body aerobic with pull bias.</div></div>
      <div class="ex-card"><div class="ex-top"><span class="ex-name">Swim</span><span class="ex-rx">30–45 min</span></div><div class="ex-desc">Knee-spared aerobic. Lap swimming or open water.</div></div>
      <div class="ex-card"><div class="ex-top"><span class="ex-name">Activity Day (ski / hike / ride)</span><span class="ex-rx">Variable · 60–180+ min</span></div><div class="ex-desc">Absorbs a Cardio slot entirely. Take collagen 45–60 min before heading out.</div></div>
    </div>
  </div>

    <div class="ex-group-head" onclick="togEx(this)" style="background:var(--green-bg);border-bottom-color:#1A3020;">
      <span class="eg-title" style="color:#80C0A0;">Daily Habits</span>
```

- [ ] **Step 2: Commit**

```bash
git add index.html
git commit -m "v13.0: add src-cardio container"
```

---

## Task 13: Add ex-cardio hub mirror

**Files:**
- Modify: `index.html` exDescLookup
- Modify: `index.html` exercises page

- [ ] **Step 1: Add `['src-cardio', 'ex-cardio']` to exDescLookup**

Use Edit tool:

`old_string`:
```
    ['src-warmup', 'ex-warmup'],
    ['src-strength', 'ex-strength'],
    ['src-postA',  'ex-base-postA'],
```

`new_string`:
```
    ['src-warmup', 'ex-warmup'],
    ['src-strength', 'ex-strength'],
    ['src-cardio', 'ex-cardio'],
    ['src-postA',  'ex-base-postA'],
```

- [ ] **Step 2: Add ex-cardio pane**

`old_string`:
```
  <div id="ex-warmup" class="sched-pane"></div>
  <div id="ex-strength" class="sched-pane"></div>
  <div id="ex-base" class="sched-pane on">
```

`new_string`:
```
  <div id="ex-warmup" class="sched-pane"></div>
  <div id="ex-strength" class="sched-pane"></div>
  <div id="ex-cardio" class="sched-pane"></div>
  <div id="ex-base" class="sched-pane on">
```

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "v13.0: add ex-cardio hub pane and exDescLookup mirror entry"
```

---

## Task 14: Add Cardio day button

**Files:**
- Modify: `index.html` ~line 1670 (day-btn row)

- [ ] **Step 1: Insert C button after S button**

Use Edit tool:

`old_string`:
```
  <button class="day-btn type-a" data-block="S" onclick="selectBlock('S',this)">
    <span class="day-btn-num">💪</span>
    <span class="day-btn-type">Strength</span>
  </button>
  <button class="day-btn type-a" data-block="A" onclick="selectBlock('A',this)">
    <span class="day-btn-num">🦵</span>
```

`new_string`:
```
  <button class="day-btn type-a" data-block="S" onclick="selectBlock('S',this)">
    <span class="day-btn-num">💪</span>
    <span class="day-btn-type">Strength</span>
  </button>
  <button class="day-btn" data-block="C" onclick="selectBlock('C',this)">
    <span class="day-btn-num">🚴</span>
    <span class="day-btn-type">Cardio</span>
  </button>
  <button class="day-btn type-a" data-block="A" onclick="selectBlock('A',this)">
    <span class="day-btn-num">🦵</span>
```

- [ ] **Step 2: Browser verify**

Open `index.html`. Click C button. Verify Cardio block renders with Bellemans Bike, main aerobic, and Activity Day options.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "v13.0: add C day button — Cardio live in UI"
```

---

## Task 15: Restructure Rest block (R) — add Couch Stretch

**Files:**
- Modify: `index.html` BLOCKS.R (~line 2750)

- [ ] **Step 1: Read current BLOCKS.R**

Read `index.html` lines 2748–2810 to see current BLOCKS.R structure.

- [ ] **Step 2: Update BLOCKS.R note and add Couch Stretch step**

Based on the read, identify the Pigeon and Lizard step entries. Add a Couch Stretch step immediately after Lizard.

Use Edit tool to insert the new step (exact `old_string`/`new_string` depends on what the Read returns — pattern:

`new_string` for the Couch Stretch step:
```
      {id:'sR_couch',time:'~2 min', title:'Couch Stretch (extended)', sub:'90s each side', timer:90,
       detail:[{n:'Couch Stretch — extended hold',rx:'90s each side',d:'<strong>v13.0 — moved here from Day B (was 60s).</strong> Rectus femoris stretch via kneeling against wall, back foot elevated. Sustained viscoelastic creep. Groups with Pigeon and Lizard as the long-hold mobility on Rest day. Dose increased to 90s/side to compensate for reduced frequency (was 2x/week, now 1x/week).'}]},
```

Also update BLOCKS.R.note to reflect Couch Stretch consolidation. Read the existing note text and update inline.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "v13.0: add Couch Stretch to Rest block (moved from Day B, dose 90s)"
```

---

## Task 16: Add Couch Stretch to src-rest

**Files:**
- Modify: `index.html` src-rest area (search for `id="src-rest"`)

- [ ] **Step 1: Locate src-rest container**

Run Grep for `id="src-rest"` in `index.html`. Identify the section.

- [ ] **Step 2: Add Couch Stretch card**

Use Edit tool to add:

```html
<div class="ex-card card-highlight"><div class="ex-top"><span class="ex-name">Couch Stretch (extended)</span><span class="ex-rx">90s each side</span></div><div class="ex-desc"><strong>v13.0 — moved from Day B.</strong> Rectus femoris stretch via kneeling against wall, back foot elevated. Sustained viscoelastic creep. Groups with Pigeon and Lizard as long-hold mobility on Rest day. Dose 90s/side compensates for reduced frequency (was 2x/week, now 1x/week).</div></div>
```

Insert after the Lizard card in src-rest.

- [ ] **Step 3: Browser verify**

Click R button. Verify Couch Stretch appears alongside Pigeon and Lizard.

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "v13.0: add Couch Stretch card to src-rest"
```

---

## Task 17: Update MVD check from 'B' to 'S'

**Files:**
- Modify: `index.html` — locate `key === 'B'` MVD check

- [ ] **Step 1: Find MVD check**

Run Grep for `key === 'B'` or `=== "B"` in `index.html`.

- [ ] **Step 2: Update to `key === 'S'`**

Use Edit tool with the exact match found. The MVD check enables the "minimum viable day" toggle on Day B; v13 moves this to the single Strength day.

- [ ] **Step 3: Browser verify**

Click S button. Verify MVD toggle (if visible) works correctly.

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "v13.0: update MVD check from 'B' to 'S'"
```

---

## Task 18: Remove BLOCKS.A, BLOCKS.B, BLOCKS.X

**Files:**
- Modify: `index.html` — delete BLOCKS.A (~line 2609), BLOCKS.B (~line 2661), BLOCKS.X (~line 2708)

- [ ] **Step 1: Read each block to confirm boundaries**

Read `index.html` lines 2605–2750 to see the full A, B, X block structure.

- [ ] **Step 2: Delete BLOCKS.A**

Use Edit tool with the exact `'A': { ... },` block content as `old_string`, empty as `new_string`. This is a large multi-line block — keep the surrounding `'B':` start intact.

- [ ] **Step 3: Delete BLOCKS.B**

Same approach. Preserve `'X':` start intact after deletion.

- [ ] **Step 4: Delete BLOCKS.X**

Same approach. Preserve `'R':` start intact after deletion.

- [ ] **Step 5: Browser verify**

Open `index.html`. Click each remaining day button (W, S, C, R, N, D). Verify each works.

Click old A, B, X buttons (not yet removed) — these should now show empty/error. That's expected (next task removes them).

- [ ] **Step 6: Commit**

```bash
git add index.html
git commit -m "v13.0: remove BLOCKS.A, B, X data (Strength + Cardio supersede)"
```

---

## Task 19: Remove A, B, X day buttons

**Files:**
- Modify: `index.html` ~line 1670–1687 (day-btn row)

- [ ] **Step 1: Remove A button**

Use Edit tool:

`old_string`:
```
  <button class="day-btn type-a" data-block="A" onclick="selectBlock('A',this)">
    <span class="day-btn-num">🦵</span>
    <span class="day-btn-type">Day A</span>
  </button>
```

(verify exact format via Read first)

`new_string`: (empty)

- [ ] **Step 2: Remove B button**

Same approach for B button block.

- [ ] **Step 3: Remove X button**

Same approach for X button block.

- [ ] **Step 4: Browser verify**

Open `index.html`. Verify day-btn row shows only W, S, C, R, N, D buttons. Each navigates correctly.

- [ ] **Step 5: Commit**

```bash
git add index.html
git commit -m "v13.0: remove A, B, X day buttons — v13 rotation only"
```

---

## Task 20: Update Rules section

**Files:**
- Modify: `index.html` Rules section (search for `<div id="rules"`)

- [ ] **Step 1: Locate and read Rules section**

Run Grep for `id="rules"` and read ~80 lines from there to capture the rules content.

- [ ] **Step 2: Remove Rule 00 (alternate Day A/B)**

Use Edit tool to remove the Rule 00 row. Pattern (verify via Read):

`old_string` pattern:
```
    <div class="rule-row" style="border-left:3px solid var(--amber);"><div class="rule-n" style="color:var(--amber);">00</div><div class="rule-c"><div class="rule-t">Alternate Day A and Day B...</div><div class="rule-d">...</div></div></div>
```

- [ ] **Step 3: Remove Rule 11 (Activity replaces training day)**

Locate and delete the Rule 11 row.

- [ ] **Step 4: Remove Rule 14 (Upper body mandatory on Day B)**

Locate and delete the Rule 14 row.

- [ ] **Step 5: Update Rule 06.5 reference**

v12.04 Rule 06.5 says "Tracked at the top of Daily Habits." Still accurate — leave as is.

- [ ] **Step 6: Add new v13 rules**

Insert a new amber-accented rule for the v13 rotation. After Rule 00 removal, add at the top:

```html
    <div class="rule-row" style="border-left:3px solid var(--amber);"><div class="rule-n" style="color:var(--amber);">00</div><div class="rule-c"><div class="rule-t">Rotation: Strength → Cardio → Strength → Cardio → Strength → Cardio → Rest</div><div class="rule-d">7-session cycle. Each Strength session bracketed by Cardio. Plyo rotation across the 3 Strength sessions: Jump Rope → KB Swing → none. Rest follows highest cumulative load.</div></div></div>
    <div class="rule-row"><div class="rule-n">v13</div><div class="rule-c"><div class="rule-t">Single Strength template — all 13 items mandatory</div><div class="rule-d">No A/B differentiation. Every Strength session covers full body. Optional finishers (Suitcase Carry, Front-Rack Carry, Ab Wheel) — pick 1–2 per session.</div></div></div>
    <div class="rule-row"><div class="rule-n">v13</div><div class="rule-c"><div class="rule-t">Daily Warm-Up before Strength or Cardio</div><div class="rule-d">~16 min, 10 items. Mobility + anterior core + lateral core + glute med + adductor + anti-rotation + scap retraction. Optional on Rest day. Real training, not just prep.</div></div></div>
    <div class="rule-row"><div class="rule-n">v13</div><div class="rule-c"><div class="rule-t">ISO Step-Up first in Strength session (Baar tendon-priming)</div><div class="rule-d">Isometric loading primes tendon stiffness before plyo high-load impact. ISO Step-Up at position 1, plyo at position 2 (when scheduled).</div></div></div>
    <div class="rule-row"><div class="rule-n">v13</div><div class="rule-c"><div class="rule-t">Long-hold mobility consolidates on Rest day</div><div class="rule-d">Pigeon (90s/side), Lizard (90s/side), Couch Stretch (90s/side). All share viscoelastic-creep mechanism. Light walk 20–30 min also on Rest day.</div></div></div>
    <div class="rule-row"><div class="rule-n">v13</div><div class="rule-c"><div class="rule-t">Activity Day absorbs a Cardio slot</div><div class="rule-d">Ski / hike / ride absorbs the day's Cardio target. No separate "Activity Day" category. Collagen 45–60 min before heading out.</div></div></div>
```

- [ ] **Step 7: Browser verify**

Navigate to Rules page. Verify old rules removed, new v13 rules present.

- [ ] **Step 8: Commit**

```bash
git add index.html
git commit -m "v13.0: update Rules section — drop A/B/Activity rules, add v13 rotation rules"
```

---

## Task 21: Update Schedule page tabs

**Files:**
- Modify: `index.html` ~line 1716–1720 (sched-tabs in #schedule div)

- [ ] **Step 1: Read current Schedule page tabs and panes**

Read `index.html` lines 1710–1880 to understand the Schedule page structure.

- [ ] **Step 2: Update Schedule tab labels**

Use Edit tool:

`old_string`:
```
    <button class="sched-tab on"  onclick="schedTab('s-bike',this)">Day A</button>
    <button class="sched-tab"     onclick="schedTab('s-base',this)">Day B</button>
    <button class="sched-tab"     onclick="schedTab('s-rec',this)">Recovery</button>
    <button class="sched-tab"     onclick="schedTab('s-act',this)">Activity</button>
    <button class="sched-tab"     onclick="schedTab('s-end',this)">Endurance</button>
```

`new_string`:
```
    <button class="sched-tab on"  onclick="schedTab('s-bike',this)">Strength</button>
    <button class="sched-tab"     onclick="schedTab('s-base',this)">Cardio</button>
    <button class="sched-tab"     onclick="schedTab('s-rec',this)">Rest</button>
    <button class="sched-tab"     onclick="schedTab('s-act',this)">Rotation</button>
```

The pane IDs (s-bike, s-base, etc.) stay the same — just the labels change. The pane content describes the schedule for each session type.

- [ ] **Step 3: Update Schedule pane content** (optional for v13 — content may need rewriting per session type)

This is a content update that can be deferred. For v13 minimum-viable, just updating the labels is acceptable. If time allows, update the pane content to describe the v13 rotation and each session's place in it.

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "v13.0: update Schedule page tabs to Strength · Cardio · Rest · Rotation"
```

---

## Task 22: Update Reference hub tabs

**Files:**
- Modify: `index.html` ~line 1881–1884 (exercises page sched-tabs)

- [ ] **Step 1: Update Reference hub tab labels**

Use Edit tool:

`old_string`:
```
    <button class="sched-tab on"  onclick="exTab('ex-base',this)">Base · Daily</button>
    <button class="sched-tab"     onclick="exTab('ex-load',this)">Load</button>
    <button class="sched-tab"     onclick="exTab('ex-micro',this)">Daily Habits</button>
    <button class="sched-tab"     onclick="exTab('ex-sched',this)">Schedule</button>
```

`new_string`:
```
    <button class="sched-tab on"  onclick="exTab('ex-warmup',this)">Warm-Up</button>
    <button class="sched-tab"     onclick="exTab('ex-strength',this)">Strength</button>
    <button class="sched-tab"     onclick="exTab('ex-cardio',this)">Cardio</button>
    <button class="sched-tab"     onclick="exTab('ex-micro',this)">Daily Habits</button>
    <button class="sched-tab"     onclick="exTab('ex-sched',this)">Schedule</button>
```

- [ ] **Step 2: Update default open pane**

The default `on` class is now on the Warm-Up tab. Update the pane class to match:

`old_string`:
```
  <div id="ex-warmup" class="sched-pane"></div>
  <div id="ex-strength" class="sched-pane"></div>
  <div id="ex-cardio" class="sched-pane"></div>
  <div id="ex-base" class="sched-pane on">
```

`new_string`:
```
  <div id="ex-warmup" class="sched-pane on"></div>
  <div id="ex-strength" class="sched-pane"></div>
  <div id="ex-cardio" class="sched-pane"></div>
  <div id="ex-base" class="sched-pane">
```

(Note `on` moved from ex-base to ex-warmup, and ex-base loses the `on` class)

- [ ] **Step 3: Browser verify**

Navigate to Exercises page. Verify:
- Warm-Up tab shows the warm-up exercises by default
- Each tab shows correct content
- ex-load tab is no longer in the tabs but the pane still exists (Load was the old name — content can be left in place for now, not visible)

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "v13.0: restructure Reference hub tabs — Warm-Up · Strength · Cardio · Daily Habits · Schedule"
```

---

## Task 23: Browser verification — full v13 manual check

- [ ] **Step 1: Test all day buttons**

Open `index.html`. For each button (W, S, C, R, N, D):
- Click button
- Verify day card renders
- Verify pills and note display
- Click 2–3 step items, verify expand/collapse
- Verify timers (where applicable) tick

- [ ] **Step 2: Test Reference hub**

Navigate to Exercises page. For each tab (Warm-Up, Strength, Cardio, Daily Habits, Schedule):
- Click tab
- Verify content matches expected source
- Verify card expand/collapse works

- [ ] **Step 3: Test Schedule page**

Navigate to Schedule page (via ☰ More menu or wherever it's accessible). Verify tabs and content.

- [ ] **Step 4: Test Rules page**

Navigate to Rules page. Verify v13 rules visible, old A/B/Activity rules removed.

- [ ] **Step 5: Test More menu**

Open ☰ More menu. Verify "kneehab v13.0" title and all nav links work.

- [ ] **Step 6: Verify version strings**

- Browser tab: "kneehab v13.0"
- More menu title: "kneehab v13.0"
- Home page hero: "kneehab v13.0"

- [ ] **Step 7: Console errors check**

Open browser DevTools Console. Refresh page. Verify no JS errors.

- [ ] **Step 8: If any issues found, fix and re-verify before proceeding**

Browser-verification gate. Do not proceed to snapshot until v13 renders cleanly.

---

## Task 24: Snapshot index.html → kneehab V13.0.html, delete old snapshot

**Files:**
- Create: `kneehab V13.0.html`
- Delete: `kneehab V12.04.html`

- [ ] **Step 1: Copy index.html to V13.0.html**

```bash
# PowerShell
Copy-Item -Path "index.html" -Destination "kneehab V13.0.html" -Force
```

- [ ] **Step 2: Delete V12.04 snapshot**

```bash
# PowerShell
Remove-Item -Path "kneehab V12.04.html" -Force
```

- [ ] **Step 3: Verify files**

Run Glob for `kneehab V*.html`. Verify only V13.0.html present.

- [ ] **Step 4: Commit (snapshot + deletion)**

```bash
git add "kneehab V13.0.html" "kneehab V12.04.html"
git commit -m "v13.0: snapshot index.html, remove V12.04 snapshot"
```

---

## Task 25: Write kneehab V13.0.MD summary, delete V12.04.MD

**Files:**
- Create: `kneehab V13.0.MD`
- Delete: `kneehab V12.04.MD`

- [ ] **Step 1: Delete V12.04.MD**

```bash
# PowerShell
Remove-Item -Path "kneehab V12.04.MD" -Force
```

- [ ] **Step 2: Write V13.0.MD**

Use Write tool to create `kneehab V13.0.MD` with this content:

```markdown
# kneehab v13.0 — Three-by-Three Restructure (2026-05-29)

## What changed

Major structural restructure. Replaces v12 Day A/B/R/X/N/D weekly framework with a three-by-three rotation: **Strength · Cardio · Rest**.

### New BLOCKS

- **W — Daily Warm-Up (NEW).** ~16 min, 10 items. Mobility + anterior core (Hollow + RKC combo) + lateral core + glute med + adductor + anti-rotation + scap retraction. Before every Strength and Cardio session. Optional on Rest.
- **S — Strength (NEW, replaces Day A + Day B).** Single template, 13 mandatory items + 3 optional finishers. ~47–52 min loaded. Ordered per Baar: ISO Step-Up first (tendon priming), then plyo when scheduled.
- **C — Cardio (NEW, replaces Activity Day).** 60 min protected slot. 3x per cycle = 180 min/week, hitting v12.04 cardio target by structure. Bellemans Bike default opener, modality flex (ride/ruck/hike/row/swim/activity).
- **R — Rest (RESTRUCTURED).** Light walk + Pigeon + Lizard + **Couch Stretch (moved here from Day B at 90s/side).** Long-hold viscoelastic creep work consolidated.

### Removed

- Day A (BLOCKS.A), Day B (BLOCKS.B), Activity Day (BLOCKS.X) — superseded by S, C
- Wall Slide from Daily Habits — WLYT in daily warm-up covers scap retraction 6x/week
- Rule 00 (alternate A/B), Rule 11 (Activity replaces training day), Rule 14 (Upper body mandatory on Day B)

### Considered but cut after expert review

- **Cossack Squat** — frontal-plane work, dropped per BBM critique (corrective-exercise overload for someone months pain-free). Deferred to future versions when bilateral compound progression plateaus.
- **Pallof Press** — loaded anti-rotation, dropped same rationale. Bird Dog in daily warm-up provides positional anti-rotation 6x/week.

## 7-session rotation

`Strength → Cardio → Strength → Cardio → Strength → Cardio → Rest`

| # | Session | Plyo |
|---|---|---|
| 1 | Strength | Jump Rope |
| 2 | Cardio | — |
| 3 | Strength | KB Swing |
| 4 | Cardio | — |
| 5 | Strength | — |
| 6 | Cardio | — |
| 7 | Rest | — |

Days of week not specified — Cal maps cycle positions to calendar. Activity Day absorbs any Cardio slot.

## Strength session (single template)

1. ISO Step-Up (tendon primer, first per Baar)
2. Plyo Primer (when scheduled — Jump Rope / KB Swing / none rotation)
3. KB Front Rack Squat
4. SL RDL
5. Step Down (slant board)
6. Split Squat 2s
7. KB Press
8. Push-Up Tempo
9. Eccentric Pull-Up
10. Ring Row
11. SL Glute Bridge
12. Soleus Calf Raise
13. Tib Raise

**Optional finishers:** Suitcase Carry · Front-Rack Carry · Ab Wheel Rollout (pick 1–2)

**Right-side bodyweight gated:** Step Down, ISO Step-Up, Split Squat (v12.01 thread).

## Daily Warm-Up (~16 min)

90/90 Hip Rotations · Cat-Cow → Down Dog → Up Dog · Half-Kneeling Rotation · Kneeling Ankle DF · **Core Hold Combo (30s Hollow + 30s RKC Plank, NEW)** · Side Plank with Abduction · Copenhagen Plank · Hip Flexor · Bird Dog · WLYT

## Cardio session (60 min)

Bellemans Bike 10–12 min (cartilage opener) + 45–50 min sustained aerobic (ride/ruck/hike/row/swim) OR Activity Day variable.

## Rest session (~35 min)

Light walk 20–30 min · Pigeon 60–90s/side · Lizard 60–90s/side · **Couch Stretch 90s/side (NEW location)** · Warm-up optional.

## Frequency analysis

Every major strength pattern: **3x/week.** Adaptation concern (Schoenfeld meta-analyses, 2–3x/week beats 1x/week) resolved.

| Pattern | Per cycle |
|---|---|
| Squat (KB FR) · Hinge (SL RDL) · Push (KB Press + Push-Up) · Pull (Eccentric PU + Ring Row) · Knee eccentric (Step Down) · Knee isometric (ISO Step-Up) · Knee unilateral (Split Squat) · Glute (SL Bridge) · Calf · Tib | 3x |
| Plyo (Jump Rope + KB Swing rotation) | 2x |
| Daily warm-up patterns (Core Hold, Side Plank w/ Abduction, Copenhagen, Bird Dog, WLYT, etc.) | 6x |
| Long-hold mobility (Pigeon + Lizard + Couch Stretch) | 1x (Rest day) |
| Cardio (intentional) | 3x = 180 min |

## Volume bump vs v12.04

| Item | v12.04 | v13.0 | Change |
|---|---|---|---|
| KB Front Rack Squat | 2x/wk | 3x/wk | +50% |
| Step Down | 2x/wk | 3x/wk | +50–100% |
| ISO Step-Up | rotation choice | 3x/wk | +200% |
| Split Squat 2s | rotation choice | 3x/wk | +200% |
| Knee unilateral total | ~6 exposures/wk | ~9 exposures/wk | +50% |

Right-side bodyweight gating preserved until clean 30s right SL stance reassessment (v12.01 thread, Daily Habits SL Standing Micro-Dose).

## Architecture

- BLOCKS keys: `W`, `S`, `C`, `R`, `N`, `D` (was `A`, `B`, `R`, `X`, `N`, `D`)
- `src-warmup`, `src-strength`, `src-cardio` (new) · `src-rest`, `src-daily`, src-collagen (preserved)
- MVD check: `key === 'S'` (was `key === 'B'`)
- Day button row order: W · S · C · R · N · D
- Reference hub tabs: Warm-Up · Strength · Cardio · Daily Habits · Schedule

## Expert review applied

Stress-tested against Attia, Barbell Medicine, Baar, Bellemans, and a generalist kinesiology lens. See `docs/superpowers/specs/2026-05-29-v13-three-by-three-restructure-design.md` Appendix A for full critique log.

Key decisions:
- **Baar:** ISO Step-Up reordered to first in Strength (tendon priming before plyo)
- **BBM:** Cossack and Pallof cut (corrective-exercise overload for asymptomatic state). Barbell + bench acknowledged as future addition (Cal beginner to weight training)
- **Attia VO2 max, Bellemans bike-mandatory, Kinesiology rotational power:** acknowledged, deferred

## Reversibility

If knee symptoms return during Strength: drop Split Squat first (most overlapped with Step Down), then ISO Step-Up. If fatigue overall: drop optional finishers, then cut Strength to 2x per cycle. Plyo intolerance: drop one phase per v12.0 rule.

## Re-evaluate

**2026-07-24 (8 weeks).** Questions: knee tolerance to 12x/wk unilateral exposures · right-side reassessment criterion (clean 30s right SL stance) · 180 min cardio hitting · warm-up adherence · optional finisher uptake · plyo Phase 2 readiness.

## Total weekly commitment

~7:45–8:15 active. 3 Strength + 3 Cardio + 6 Warm-ups + 1 Rest walk + optional finishers.
```

- [ ] **Step 3: Commit MD changes**

```bash
git add "kneehab V13.0.MD" "kneehab V12.04.MD"
git commit -m "v13.0: write V13.0.MD summary, remove V12.04.MD"
```

---

## Task 26: Update MEMORY.md

**Files:**
- Modify: `C:\Users\cpboa\.claude\projects\C--Users-cpboa-Dropbox-Cal-Cal-Active-Projects-kneehab\memory\MEMORY.md`

- [ ] **Step 1: Update Current Version line**

Use Edit tool on MEMORY.md:

`old_string`: `## Current Version: v12.04 (May 2026)`
`new_string`: `## Current Version: v13.0 (May 2026)`

- [ ] **Step 2: Add v13.0 changelog entry**

Use Edit tool. Insert before the `### v12.04 key changes` line:

```markdown
### v13.0 key changes (2026-05-29)
- **MAJOR restructure.** v12 Day A/B/R/X/N/D framework → v13 three-by-three rotation: **Strength · Cardio · Rest.**
- **7-session cycle:** S → C → S → C → S → C → R. Days-of-week agnostic — user maps cycle to calendar.
- **NEW · BLOCKS key W (Daily Warm-Up).** ~16 min, 10 items. Before every S and C session. Optional on R. Real training, not just prep — absorbs right-side glute med pattern work (v12.01) into daily commitment (was 2x/week on Day A).
- **NEW · BLOCKS key S (Strength).** Single template, 13 mandatory items + 3 optional finishers. ~47–52 min loaded. ISO Step-Up FIRST per Baar (tendon priming before plyo). Plyo rotates: Jump Rope → KB Swing → none.
- **NEW · BLOCKS key C (Cardio).** 60 min protected slot. 3x/cycle = 180 min/wk = v12.04 cardio target met by structure. Bellemans Bike default opener.
- **RESTRUCTURED · BLOCKS key R (Rest).** Pigeon + Lizard + **Couch Stretch (moved here from Day B at 90s/side).** Long-hold viscoelastic creep consolidated. Light walk 20–30 min.
- **DROPPED · BLOCKS.A, B, X.** Superseded by S + C.
- **DROPPED · Wall Slide from Daily Habits.** WLYT in warm-up covers scap retraction 6x/wk.
- **DROPPED · Rule 00 (alternate A/B), Rule 11 (Activity replaces training day), Rule 14 (Upper body mandatory on Day B).** Replaced with v13 rotation rules.
- **NEW rules:** rotation S→C→S→C→S→C→R · single Strength template all mandatory · daily warm-up before S/C · ISO Step-Up first (Baar) · long-hold mobility consolidates on Rest · Activity absorbs Cardio slot.
- **Considered but cut after expert review:** Cossack Squat (frontal-plane), Pallof Press (loaded anti-rotation). Dropped per BBM critique (corrective-exercise overload for someone months pain-free). Deferred to future versions.
- **Expert review applied** (Attia / BBM / Baar / Bellemans / Kinesiology). See spec Appendix A.
- **Architecture:** MVD check `key === 'B'` → `key === 'S'`. Day button row: W · S · C · R · N · D. Reference hub tabs: Warm-Up · Strength · Cardio · Daily Habits · Schedule.
- **Re-evaluate 2026-07-24** (8 weeks). Volume bump: knee unilateral 6 → 9 exposures/wk (+50%). Right-side gating preserved.

```

- [ ] **Step 3: Update Key Architecture (JS) section**

Use Edit tool. Update the bullet list to reflect new BLOCKS keys.

`old_string`:
```
## Key Architecture (JS)
- `BLOCKS` object drives Today tab (keys: 'A', 'B', 'R', 'X', 'N', 'D')
- `renderBlock(key)` renders day card from BLOCKS data
- MVD check uses `key === 'B'` (was 'C')
```

`new_string`:
```
## Key Architecture (JS)
- `BLOCKS` object drives Today tab (keys: 'W', 'S', 'C', 'R', 'N', 'D' as of v13.0)
- `renderBlock(key)` renders day card from BLOCKS data
- MVD check uses `key === 'S'` (v13.0 — was 'B' in v12)
```

- [ ] **Step 4: Update File Structure section**

`old_string`:
```
## File Structure
- `src-*` elements in base/load/micro pages → mirrored to `ex-*` hub panes
- `src-postA` contains Bird Dog variations + WLYT (now Day B only for Bird Dog)
- `src-knee` now also holds Plyo Primer items (Jump Rope, KB Swing) and KB Suitcase Carry for hub mirroring
- `src-casual` wired to `ex-micro-casual` in Reference hub
```

`new_string`:
```
## File Structure
- `src-*` elements in base/load/micro pages → mirrored to `ex-*` hub panes
- v13.0: `src-warmup`, `src-strength`, `src-cardio` are the primary containers
- `src-postA`, `src-knee`, `src-bike` retained but unlinked from active rendering (legacy v12)
- `src-casual` wired to `ex-micro-casual` in Reference hub
```

- [ ] **Step 5: Commit MEMORY.md**

```bash
git add "C:\Users\cpboa\.claude\projects\C--Users-cpboa-Dropbox-Cal-Cal-Active-Projects-kneehab\memory\MEMORY.md"
git commit -m "v13.0: update MEMORY.md changelog and architecture notes"
```

---

## Self-Review Checklist (after execution)

Before declaring v13 complete, verify:

- [ ] Browser tab title shows "kneehab v13.0"
- [ ] More menu title shows "kneehab v13.0"
- [ ] Home page hero shows "v13.0"
- [ ] Day button row: W · S · C · R · N · D (6 buttons, in order)
- [ ] No A, B, or X buttons remain
- [ ] Each button renders its day card correctly
- [ ] All step items expand/collapse
- [ ] Reference hub tabs: Warm-Up · Strength · Cardio · Daily Habits · Schedule
- [ ] Each Reference hub tab shows mirrored cards
- [ ] Rules page shows v13 rules; A/B/Activity rules removed
- [ ] Schedule page tabs labeled Strength · Cardio · Rest · Rotation
- [ ] No JS console errors on page load
- [ ] `kneehab V13.0.html` and `kneehab V13.0.MD` exist
- [ ] `kneehab V12.04.html` and `kneehab V12.04.MD` deleted
- [ ] MEMORY.md updated with v13.0 entry

---

## Notes for the executing agent

1. **Order matters.** New BLOCKS (W, S, C) and their buttons go in BEFORE removing old (A, B, X). This keeps the UI functional throughout — verify after each new block addition.

2. **Read before edit.** For every Edit tool call, read the surrounding context first (5–10 lines before/after the edit). The exact string-matching is sensitive to whitespace and formatting.

3. **Browser-verify at each phase end.** No test suite exists. Visual inspection is the only safety net.

4. **Worktree optional.** This is a major restructure but contained to a few files. Worktree is fine but not required. If user prefers main, work directly on main.

5. **Commit granularity.** Each task has commit points. Don't batch — the commit messages document the change history for future review.

6. **Right-side gating language.** Preserve exact wording for "right-side bodyweight gated" notes in Step Down, ISO Step-Up, Split Squat — this is clinically meaningful (v12.01 thread).

7. **Plyo rotation.** "Jump Rope → KB Swing → none" rotation is described in narrative form, not enforced by code. The user manually tracks which session is which.

8. **Couch Stretch dose.** 90s/side on Rest day (was 60s on Day B). Update is intentional — compensates for reduced frequency (was 2x/week, now 1x/week).
