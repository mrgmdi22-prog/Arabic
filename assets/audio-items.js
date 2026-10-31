// Every text on the site that can carry a recording, with a stable key.
// s/<story>/<page>, s/<story>/moral · p/<harbour>/<paragraph>, p/<harbour>/fact · w/<theme>/<n> · d/<unit>/<n> · v/<poem>/<line>
window.audioItems = function () {
  var plain = function (s) { return String(s).replace(/\[([^\]|]+)\|[^\]]+\]/g, '$1').replace(/<br>/g, ' '); };
  var out = [];
  (window.STORIES || []).forEach(function (s) {
    s.pages.forEach(function (p, i) { out.push({ key: 's/' + s.id + '/' + (i + 1), group: 'stories', set: s.id, setAr: s.ar, text: plain(p.ar), raw: p.ar, en: p.en }); });
    out.push({ key: 's/' + s.id + '/moral', group: 'stories', set: s.id, setAr: s.ar, text: plain(s.moral.ar), raw: s.moral.ar, en: s.moral.en });
  });
  (window.PORTS || []).forEach(function (p) {
    p.text.forEach(function (t, i) { out.push({ key: 'p/' + p.id + '/' + (i + 1), group: 'ports', set: p.id, setAr: p.ar, text: plain(t.ar), raw: t.ar, en: t.en }); });
    out.push({ key: 'p/' + p.id + '/fact', group: 'ports', set: p.id, setAr: p.ar, text: plain(p.fact.ar), raw: p.fact.ar, en: p.fact.en });
  });
  (window.THEMES || []).forEach(function (t) {
    t.words.forEach(function (w, i) { out.push({ key: 'w/' + t.id + '/' + (i + 1), group: 'words', set: t.id, setAr: t.ar, text: w.a, raw: w.a, en: w.e }); });
  });
  (window.DICTATION || []).forEach(function (u) {
    u.items.forEach(function (it, i) { out.push({ key: 'd/' + u.id + '/' + (i + 1), group: 'dictation', set: u.id, setAr: u.ar, text: it.w, raw: it.w, en: it.en }); });
  });
  (window.POEMS || []).forEach(function (p) {
    p.lines.forEach(function (l, i) { out.push({ key: 'v/' + p.id + '/' + (i + 1), group: 'poetry', set: p.id, setAr: p.poet, text: l[0] + ' … ' + l[1], raw: null, en: i === 0 ? p.en : '' }); });
  });
  (window.TALKS || []).forEach(function (t) {
    t.lines.forEach(function (x, i) {
      out.push({ key: 't/' + t.id + '/f' + (i + 1), group: 'talk', set: t.id, setAr: t.ar, text: x.f, raw: null, en: 'Fusha · ' + x.en });
      out.push({ key: 't/' + t.id + '/d' + (i + 1), group: 'talk', set: t.id, setAr: t.ar, text: x.d, raw: null, en: 'Saudi dialect · ' + x.tr });
    });
  });
  (window.RW_UNITS || []).forEach(function (u) {
    var set = 'u' + u.n, nm = 'الكلمات الشائعة ' + u.n;
    u.words.forEach(function (w) {
      out.push({ key: 'r/' + set + '/w' + w[0], group: 'common', set: set, setAr: nm, text: w[1], raw: null, en: w[3] });
      out.push({ key: 'r/' + set + '/e' + w[0], group: 'common', set: set, setAr: nm, text: w[4].replace(/[\[\]]/g, ''), raw: null, en: w[5] });
    });
    out.push({ key: 'r/' + set + '/read', group: 'common', set: set, setAr: nm, text: u.read.ar, raw: null, en: u.read.en });
  });
  (window.SOUNDS || []).forEach(function (x) {
    var it = function (k, t, en) { out.push({ key: 'n/' + x.id + '/' + k, group: 'sounds', set: x.id, setAr: x.name, text: t, raw: null, en: en }); };
    it('l', x.l + ' — ' + x.name, 'the letter on its own');
    x.words.forEach(function (w, k) { it('w' + (k + 1), w[0], w[1]); });
    if (x.pair) { it('p1', x.pair[0][0], x.pair[0][1]); it('p2', x.pair[1][0], x.pair[1][1]); }
  });
  out.plain = plain;
  return out;
};
