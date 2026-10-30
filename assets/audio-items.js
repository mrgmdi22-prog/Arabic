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
  out.plain = plain;
  return out;
};
