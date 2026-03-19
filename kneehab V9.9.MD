# KneeHab v9.9 — Reference Consolidation + Phase Indicator

## Changes

### 1. Rename Exercises → Reference
- Bottom nav tab label: "Exercises" → "Reference"
- Page header sh-title: "Exercises" → "Reference"
- Clarifies the tab's role: it's a library/browse view, not a daily execution tool

### 2. Knee-Specific Optional in Today Load Day
- New `sA_opt` step added to BLOCKS 'A' after Bellemans Bike
- Time: Optional — after bike or as standalone add-on
- Exercises (Pick 2):
  - Hamstring Isometric in Flexion ★ POSTERIOR — priority while posterior symptoms active
  - Terminal Knee Extension ★ — first pick once posterior symptoms resolve
  - Single-Leg Wall Sit — progression from bilateral wall sit
  - Hanging Knee Raise ★ — primary hip flexor strength exercise
- Full description toggle pulls from Reference hub cards (same lookup mechanism)
- Eliminates need to switch to Reference tab mid-session to find optional exercises

### 3. Schedule Merged into Reference Hub
- "Schedule" added as 4th sub-tab in Reference hub (alongside Base·Daily, Load, Daily Habits)
- `ex-sched` pane with nested Load/Recovery/Activity/Endurance sub-tabs
- `initSchedHub()` IIFE clones s-bike/s-base/s-act/s-end content into rs-* destinations (no duplication — single source of truth)
- `exSchedTab()` function scoped to #ex-sched using `.ref-sched-pane` class (avoids conflict with global `schedTab()`)
- "Schedule Reference" removed from More menu — accessed via Reference tab
- Schedule page (`id="schedule"`) retained in HTML as source for clone operation

### 4. Phase Indicator
- Ph 1 / Ph 2 / Ph 3 selector added to Today tab, above day-type buttons
- Persists via `localStorage` key `kh_phase`
- Amber pill style when active (consistent with app design language)
- `setPhase()` function updates state and localStorage
- `restorePhase()` IIFE reads saved value on load

## Architecture Notes
- `ref-sched-pane` CSS class added alongside `sched-pane` for scoped schedule sub-pane visibility
- Phase state stored in `currentPhase` variable — available for future use in exercise rendering logic
- No breaking changes to existing BLOCKS, initExHub, or exDescLookup architecture
