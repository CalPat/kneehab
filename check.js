// kneehab index.html standing checks.  Run: node check.js [path-to-index.html]
const fs = require('fs');
const file = process.argv[2] || 'C:/Users/cpboa/Dropbox/Cal/Cal Active/Projects/kneehab/index.html';
const html = fs.readFileSync(file, 'utf8');
let fails = 0, checks = 0;
const ok = (name, cond, detail) => {
  checks++;
  console.log((cond ? 'ok    ' : 'FAIL  ') + name + (detail ? '  :: ' + detail : ''));
  if (!cond) fails++;
};

// ---- extract the inline script that holds BLOCKS ----
const scripts = [...html.matchAll(/<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/g)].map(m => m[1]);
const src = scripts.find(s => /const BLOCKS\s*=/.test(s));
ok('inline BLOCKS script found', !!src);

// ---- 1. JS syntax ----
try { new Function(src); ok('JS parses', true); }
catch (e) { ok('JS parses', false, e.message); }

// ---- 2. referential integrity: static getElementById targets exist ----
const idsInHtml = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]));
const wanted = new Set([
  ...[...src.matchAll(/getElementById\(\s*['"]([^'"]+)['"]\s*\)/g)].map(m => m[1]),
  ...[...src.matchAll(/querySelector\(\s*['"]#([A-Za-z0-9_-]+)['"]/g)].map(m => m[1]),
]);
const missing = [...wanted].filter(id => !idsInHtml.has(id) && !/^(ex|src)-/.test(id));
ok('static getElementById targets exist', missing.length === 0, missing.join(', ') || wanted.size + ' checked');

// ---- 3. ids that have been deleted by accident before ----
for (const id of ['today', 'dayCard', 'exercises', 'menuSheet']) ok('id present: ' + id, idsInHtml.has(id));
const pages = [...html.matchAll(/<div id="([\w-]+)" class="page\b/g)].map(m => m[1]);
ok('pages found (matches "page" AND "page on")', pages.length >= 5, pages.join(' '));
ok('#today is a page', pages.includes('today'));
ok('nav tab buttons present', (html.match(/class="tab-btn/g) || []).length >= 2);

// ---- 4. balance ----
const opens = (html.match(/<div\b/g) || []).length, closes = (html.match(/<\/div>/g) || []).length;
ok('div balance', opens === closes, opens + ' / ' + closes);
const css = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)].map(m => m[1]).join('\n');
ok('CSS brace balance', (css.match(/{/g) || []).length === (css.match(/}/g) || []).length);

// ---- 5. the three live version strings agree ----
const vTitle = (html.match(/<title>kneehab (v[\d.]+)<\/title>/) || [])[1];
const vMenu = (html.match(/class="ms-title">kneehab (v[\d.]+)</) || [])[1];
const vCover = (html.match(/class="cover-h1">kneehab<br><em>(v[\d.]+)<\/em>/) || [])[1];
ok('3 version strings agree', !!vTitle && vTitle === vMenu && vMenu === vCover, [vTitle, vMenu, vCover].join(' / '));

// ---- 6. execute the script against a DOM stub, render every block ----
function mkEl(id) {
  return {
    id, innerHTML: '', textContent: '', value: '', style: {}, dataset: {}, children: [],
    classList: { add() {}, remove() {}, toggle() {}, contains: () => false },
    addEventListener() {}, appendChild() {}, scrollIntoView() {}, focus() {}, click() {},
    getAttribute: () => null, setAttribute() {}, closest: () => null,
    querySelector: () => mkEl('stub'), querySelectorAll: () => [],
  };
}
const store = {}, els = {};
global.document = {
  getElementById: id => (idsInHtml.has(id) || /^(ex|src|step|det|briefing)-/.test(id)) ? (els[id] || (els[id] = mkEl(id))) : null,
  querySelector: () => mkEl('stub'), querySelectorAll: () => [],
  addEventListener() {}, visibilityState: 'visible', body: mkEl('body'),
};
global.window = { scrollY: 0, scrollTo() {}, addEventListener() {}, matchMedia: () => ({ matches: false, addEventListener() {} }) };
global.localStorage = { getItem: k => (k in store ? store[k] : null), setItem: (k, v) => { store[k] = String(v); }, removeItem: k => { delete store[k]; } };
global.navigator = { userAgent: 'node' };

let api = null;
try {
  api = new Function(src + '\n;return {BLOCKS: typeof BLOCKS!=="undefined"&&BLOCKS, renderBlock: typeof renderBlock!=="undefined"&&renderBlock};')();
  ok('script executes end-to-end', true);
} catch (e) { ok('script executes end-to-end', false, e.message); }

if (api && api.BLOCKS) {
  const B = api.BLOCKS, S = B.S;
  const keys = Object.keys(B);
  ok('BLOCKS has 6 keys', keys.length === 6, keys.join(''));
  for (const k of ['W', 'S', 'C', 'R', 'N', 'D']) ok('BLOCKS.' + k, !!B[k]);

  // --- 7. the count bug class (v14.71): one fact, several hand-maintained copies ---
  const livePats = [
    /The muscle block · (\d+) items · single template/g,
    /Single Strength template — all (\d+) items mandatory/g,
    /Single template — all (\d+) items mandatory/g,
  ];
  const live = livePats.flatMap(re => [...html.matchAll(re)].map(m => m[1]));
  ok('every live Strength count matches BLOCKS.S',
     live.length === livePats.length && live.every(n => Number(n) === S.steps.length),
     '[' + live.join(', ') + '] vs real ' + S.steps.length);

  const wStated = Number((html.match(/\{t:'(\d+) items'/) || [])[1]);
  const wReal = B.W.steps.filter(st => !/ only\b/i.test(st.title)).length;
  ok('W pill count matches (RKC is S-days-only)', wStated === wReal, wStated + ' vs ' + wReal);

  const nums = S.steps.map(s => s.time).filter(t => /^\d+$/.test(t)).map(Number);
  ok('S step numbering sequential',
     nums.length === S.steps.length && nums.every((v, i) => v === i + 1), nums.join(','));

  for (const k of keys) {
    const ids = (B[k].steps || []).map(s => s.id);
    ok('unique step ids in ' + k, new Set(ids).size === ids.length);
  }

  // --- 8. render ---
  if (api.renderBlock) {
    for (const k of keys) {
      let err = null;
      try { api.renderBlock(k); } catch (e) { err = e.message; }
      ok('renderBlock(' + k + ')', !err, err || '');
    }
    const card = els['dayCard'];
    ok('dayCard received markup', !!card && card.innerHTML.length > 200, card ? card.innerHTML.length + ' chars' : 'no dayCard');
    ok('no "undefined" leaked into render', !!card && !/>undefined|undefined</.test(card.innerHTML));
    api.renderBlock('S');
    const sHtml = els['dayCard'].innerHTML;
    const noAnchor = S.steps.filter(st => !sHtml.includes('id="step-' + st.id + '"'));
    ok('every S step emits its step-<id> anchor', noAnchor.length === 0,
       noAnchor.map(x => x.id).join(', ') || S.steps.length + ' checked');
  }

  // --- 9. tag balance inside every BLOCKS string (node --check cannot see these) ---
  const unbalanced = [];
  const walk = (o, p) => {
    if (typeof o === 'string') {
      for (const t of ['strong', 'em', 'div', 'span']) {
        const a = (o.match(new RegExp('<' + t + '\\b', 'g')) || []).length;
        const b = (o.match(new RegExp('</' + t + '>', 'g')) || []).length;
        if (a !== b) unbalanced.push(p + ' <' + t + '> ' + a + '/' + b);
      }
    } else if (o && typeof o === 'object') {
      for (const kk of Object.keys(o)) walk(o[kk], p + '.' + kk);
    }
  };
  walk(B, 'BLOCKS');
  ok('HTML tag balance inside BLOCKS strings', unbalanced.length === 0, unbalanced.slice(0, 5).join(' | '));
}

console.log('\n' + (fails ? 'FAILED ' + fails + '/' + checks : 'PASSED ' + checks + '/' + checks));
process.exit(fails ? 1 : 0);
