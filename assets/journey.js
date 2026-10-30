// رحلة التعلّم — the learning voyage map on the home page.
// The ship sets sail from Al-Khuraybah and calls at seven harbours; each harbour is one section of the site,
// in the order a learner meets them, coloured by level. Stations you have visited turn solid and
// the little ship waits at your next stop.
// Needs site.js, land.js, ports.js and seamap.js first.
(function () {
  var LEVELS = [
    { c: '#2C7A6E', en: 'Introductory', ar: 'التمهيدي' },
    { c: '#A26F1C', en: 'Beginner', ar: 'المبتدئ' },
    { c: '#2D6F92', en: 'Intermediate', ar: 'المتوسط' },
    { c: '#A23E2E', en: 'Advanced', ar: 'المتقدم' }
  ];
  // side: where the label sits (L left, R right, B below, T above)
  var STATIONS = [
    { id: 'guide', port: 'khuraybah', href: 'guide/index.html', ic: 'compass', lv: 0, side: 'R',
      ar: 'دليل المتعلّم', en: 'Learner’s Guide', whyAr: 'من الخريبة، ميناء الأنباط القديم «القرية البيضاء»، تنطلق الرحلة: اعرف طريقك قبل أن تبحر.', whyEn: 'The voyage sets sail from Al-Khuraybah, the old Nabataean port of the “White Village”: learn the way before you sail.' },
    { id: 'words', port: 'jeddah', href: 'vocab/index.html', ic: 'cards', lv: 0, side: 'L',
      ar: 'مرفأ المفردات', en: 'Harbour of Words', whyAr: 'في جدة، باب مكة على البحر، تجمع زادك الأول من الكلمات.', whyEn: 'At Jeddah, Makkah’s gate on the sea, you gather your first store of words.' },
    { id: 'tales', port: 'sirrain', href: 'stories/index.html', ic: 'book', lv: 1, side: 'L',
      ar: 'مرفأ الحكايات', en: 'Harbour of Tales', whyAr: 'في السرّين، ميناء مكة القديم، يتسامر البحّارة بالحكايات.', whyEn: 'At Al-Sirrain, an old port of Makkah, the sailors sit and tell their tales.' },
    { id: 'reading', port: 'athar', href: 'reading/index.html', ic: 'lamp', lv: 1, side: 'R', nudge: [0.45, 0.3], nudgeN: [0.95, 0.6],
      ar: 'مرفأ الفهم', en: 'Harbour of Understanding', whyAr: 'في عثّر يلتقي تجّار الحجاز واليمن وأفريقيا، ولا تجارة بلا فهم، فاختبر فهمك لما قرأت.', whyEn: 'At Athar traders from the Hijaz, Yemen and Africa met, and trade needs understanding: test how well you understood.' },
    { id: 'spelling', port: 'farasan', href: 'dictation/index.html', ic: 'qalam', lv: 1, side: 'L', nudge: [-0.35, -0.25], nudgeN: [-0.75, -0.45],
      ar: 'مرفأ الإملاء', en: 'Harbour of Spelling', whyAr: 'في جزر فرسان نقوش قديمة على الحجر، فتعلّم أن تكتب كلماتك صحيحة.', whyEn: 'The Farasan Islands keep old inscriptions in stone: learn to write your words correctly.' },
    { id: 'voyage', port: 'sohar', href: 'ports/index.html', ic: 'dhow', lv: 2, side: 'B',
      ar: 'رحلة المرافئ', en: 'The Harbours Voyage', whyAr: 'من صحار، مدينة السندباد، تبحر إلى سبعة وعشرين مرفأً.', whyEn: 'From Sohar, Sindbad’s city, sail on to twenty-seven harbours.' },
    { id: 'irab', port: 'ubulla', href: 'irab/index.html', ic: 'branches', lv: 3, side: 'L',
      ar: 'مختبر الإعراب', en: 'I‘rab Lab', whyAr: 'الأبلّة مرفأ البصرة، وفي البصرة وُلد علم النحو.', whyEn: 'Al-Ubulla is the port of Basra, where Arabic grammar was born.' }
  ];
  // harbours the ship passes on the way, without a stop
  var PASS = [{ port: 'mokha', side: 'L' }, { port: 'aden', side: 'B' }, { port: 'qana', side: 'T' }];
  var VIEW = [31.6, 32.3, 62.4, 8.6];   // west, north, east, south (degrees)
  var VIEW_N = [33.6, 31.6, 60.4, 10.9]; // narrow screens
  var KEY = 'ar-journey';

  function visited() { try { return JSON.parse(localStorage.getItem(KEY) || '[]'); } catch (e) { return []; } }
  function nextIndex() { var v = visited(); for (var i = 0; i < STATIONS.length; i++) if (v.indexOf(STATIONS[i].id) < 0) return i; return STATIONS.length - 1; }

  // the route: from Al-Khuraybah down the Red Sea, round Aden, along Arabia and up the Gulf (lanes already checked to stay at sea)
  function route() {
    var r1 = window.ROUTES[1], r2 = window.ROUTES[2], start = 0, best = 1e9;
    r1.forEach(function (p, i) { var d = Math.hypot(p[0] - 34.75, p[1] - 28.0); if (d < best) { best = d; start = i; } });
    return r1.slice(start).concat(r2.slice(1));
  }
  function nearest(pts, lon, lat, from) {
    var k = from, best = 1e9;
    for (var i = from; i < pts.length; i++) { var d = Math.hypot(pts[i][0] - lon, pts[i][1] - lat); if (d < best) { best = d; k = i; } }
    return k;
  }

  function draw(el, opt) {
    opt = opt || {};
    var S = window.Site, xy = SeaMap.xy, f = SeaMap.f, L = window.LAND, root = opt.root || '';
    var lang = document.documentElement.getAttribute('data-lang') === 'en' ? 'en' : 'ar';
    var cw = Math.max(el.clientWidth || 360, 280), narrow = cw < 560, V = narrow ? VIEW_N : VIEW;
    var a = xy(V[0], V[1]), b = xy(V[2], V[3]), vb = [a[0], a[1], b[0] - a[0], b[1] - a[1]];
    var u = vb[2] / cw;
    var seen = visited(), nx = nextIndex();
    var pts = route(), idx = [], from = 0;
    var port = function (id) { return window.PORTS.filter(function (p) { return p.id === id; })[0]; };
    STATIONS.forEach(function (s) { var p = port(s.port); s.lon = p.lon; s.lat = p.lat; s.portAr = S.strip(p.ar).replace(/\s*\(.*\)/, ''); s.portEn = p.en;
      from = nearest(pts, p.lon, p.lat, from); idx.push(from); });
    // legs between stations, coloured by the level of the station they lead to
    var legs = '';
    for (var i = 1; i < STATIONS.length; i++) {
      var seg = pts.slice(idx[i - 1], idx[i] + 1); if (seg.length < 2) continue;
      var done = seen.indexOf(STATIONS[i].id) >= 0;
      legs += '<path class="leg' + (done ? ' done' : '') + '" d="' + SeaMap.smooth(seg) + '" style="stroke:' + LEVELS[STATIONS[i].lv].c + '"/>';
    }
    legs = '<path id="jroute" class="leg-base" d="' + SeaMap.smooth(pts.slice(idx[0], idx[idx.length - 1] + 1)) + '"/>' + legs;
    // stations
    var st = STATIONS.map(function (s, i) {
      var nd = (narrow ? s.nudgeN : s.nudge) || [0, 0], q = xy(s.lon + nd[0], s.lat + nd[1]), c = LEVELS[s.lv].c, on = seen.indexOf(s.id) >= 0, cur = i === nx;
      var r = (cur ? (narrow ? 14 : 17) : (narrow ? 11.5 : 14)) * u, ic = (narrow ? 12.5 : 15) * u, side = narrow && s.sideN ? s.sideN : s.side;
      var lx = q[0], ly = q[1], anchor = 'middle', gap = r + 7 * u;
      if (side === 'L') { lx -= gap; anchor = 'end'; } else if (side === 'R') { lx += gap; anchor = 'start'; }
      else if (side === 'B') { ly += gap + 12 * u; } else { ly -= gap + (narrow ? 6 : 20) * u; }
      if (side === 'L' || side === 'R') ly += (narrow ? 5 : 0) * u;
      var line2 = lang === 'en' ? s.en : 'في ' + s.portAr;
      return '<a class="stn' + (on ? ' on' : '') + (cur ? ' cur' : '') + '" href="' + root + s.href + '" aria-label="' + s.ar + ' · ' + s.en + '" style="--c:' + c + '">' +
        '<circle class="hit" cx="' + f(q[0]) + '" cy="' + f(q[1]) + '" r="' + f(30 * u) + '"/>' +
        (cur ? '<circle class="halo" cx="' + f(q[0]) + '" cy="' + f(q[1]) + '" r="' + f(r + 7 * u) + '"/>' : '') +
        '<circle class="disc" cx="' + f(q[0]) + '" cy="' + f(q[1]) + '" r="' + f(r) + '"/>' +
        '<svg class="jic" x="' + f(q[0] - ic / 2) + '" y="' + f(q[1] - ic / 2) + '" width="' + f(ic) + '" height="' + f(ic) + '" viewBox="0 0 32 32">' + (S.I[s.ic] || '') + '</svg>' +
        (narrow ? '<circle class="badge" cx="' + f(q[0] + r * .78) + '" cy="' + f(q[1] - r * .78) + '" r="' + f(8 * u) + '"/><text class="bn" x="' + f(q[0] + r * .78) + '" y="' + f(q[1] - r * .78 + 3.8 * u) + '" text-anchor="middle">' + (i + 1) + '</text></a>' : '') +
        (narrow ? '' : '<g class="lbl" data-anchor="' + anchor + '">' +
          '<text class="t1" x="' + f(lx) + '" y="' + f(ly) + '" text-anchor="' + anchor + '">' + '<tspan class="n">' + (i + 1) + '</tspan> ' + s.ar + '</text>' +
          (narrow ? '' : '<text class="t2" x="' + f(lx) + '" y="' + f(ly + 17 * u) + '" text-anchor="' + anchor + '">' + line2 + '</text>') + '</g></a>');
    }).join('');
    var pass = PASS.map(function (w) { var p = port(w.port), q = xy(p.lon, p.lat), lx = q[0], ly = q[1] + 4.5 * u, an = 'middle';
      if (w.side === 'L') { lx -= 9 * u; an = 'end'; } else if (w.side === 'B') ly += 16 * u; else ly -= 13 * u;
      return '<a class="pass" href="' + root + 'ports/port.html?p=' + p.id + '"><circle cx="' + f(q[0]) + '" cy="' + f(q[1]) + '" r="' + f(4.5 * u) + '"/>' +
        (narrow ? '' : '<text x="' + f(lx) + '" y="' + f(ly) + '" text-anchor="' + an + '">' + S.strip(p.ar) + '</text>') + '</a>'; }).join('');
    var start = xy(STATIONS[0].lon, STATIONS[0].lat);
    var shipAt = xy(pts[idx[nx]][0], pts[idx[nx]][1]);
    el.innerHTML = '<svg class="seamap journey' + (narrow ? ' narrow' : '') + '" viewBox="' + vb.map(f).join(' ') + '" style="--u:' + u.toFixed(3) + '" role="img" aria-label="خريطة رحلة التعلّم">' +
      '<defs><linearGradient id="seaJ" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#DDEFF7"/><stop offset="1" stop-color="#C6E1EE"/></linearGradient>' +
      '<pattern id="wavesJ" width="46" height="22" patternUnits="userSpaceOnUse" patternTransform="scale(' + f(u) + ')"><path d="M2 12 q9 -7 18 0 t18 0" fill="none" stroke="#C4E0EC" stroke-width="1.6"/></pattern></defs>' +
      '<rect x="-50" y="-50" width="' + (L.w + 100) + '" height="' + (L.h + 100) + '" fill="url(#seaJ)"/><rect x="-50" y="-50" width="' + (L.w + 100) + '" height="' + (L.h + 100) + '" fill="url(#wavesJ)"/>' +
      '<path class="coast" d="' + L.d + '"/><path class="land" d="' + L.d + '"/>' +
      legs +
      (narrow ? '' : '<text class="j-start" x="' + f(start[0]) + '" y="' + f(start[1] - 24 * u) + '" text-anchor="middle">' + (lang === 'en' ? 'Set sail ↓' : 'الانطلاق ↓') + '</text>') +
      '<g class="j-ship" transform="translate(' + f(shipAt[0]) + ' ' + f(shipAt[1] - 26 * u) + ')"><g transform="scale(' + f(u * 1.05) + ') translate(-15 -22)"><path d="M2 21h27l-4 6H6z"/><path d="M15 21V3"/><path class="sail" d="M15 4c6 4 10 9 11 15H15z"/><path class="sail" d="M15 8l-7 11h7z"/></g></g>' +
      pass + st + '</svg>';
    // a soft paper plate behind every label so it reads over land and sea
    var svg = el.querySelector('svg.journey');
    svg.querySelectorAll('.lbl').forEach(function (g) {
      var bb = g.getBBox(), pad = 5 * u, rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      rect.setAttribute('x', bb.x - pad); rect.setAttribute('y', bb.y - pad * .6); rect.setAttribute('width', bb.width + pad * 2); rect.setAttribute('height', bb.height + pad * 1.2);
      rect.setAttribute('rx', 5 * u); rect.setAttribute('class', 'plate'); g.insertBefore(rect, g.firstChild);
    });
  }

  // the panel under the map: next stop and the four levels
  function panel(el, opt) {
    var S = window.Site, i = nextIndex(), s = STATIONS[i], all = visited().length >= STATIONS.length, root = (opt && opt.root) || '';
    el.innerHTML =
      '<a class="jnext" href="' + root + s.href + '" style="--c:' + LEVELS[s.lv].c + '">' +
        '<span class="jn-ic">' + S.icon(s.ic) + '</span>' +
        '<span class="jn-tx"><small>' + (all ? S.bi('Sail again', 'أبحر من جديد') : S.bi('Your next stop', 'محطتك التالية')) + ' · ' + S.bi('stop ' + (i + 1) + ' of ' + STATIONS.length, 'المحطة ' + (i + 1) + ' من ' + STATIONS.length) + '</small>' +
        '<b>' + S.bi(s.en, s.ar) + '</b><span class="jn-why">' + S.bi(s.whyEn, s.whyAr) + '</span></span>' +
        '<span class="jn-go">' + S.bi('Sail', 'أبحر') + S.icon('next') + '</span></a>' +
      (el.clientWidth < 560 ? '<ol class="jlist">' + STATIONS.map(function (t, k) { var on = visited().indexOf(t.id) >= 0, p = window.PORTS.filter(function (x) { return x.id === t.port; })[0];
        return '<li class="' + (on ? 'on' : '') + (k === i ? ' cur' : '') + '" style="--c:' + LEVELS[t.lv].c + '"><a href="' + root + t.href + '"><span class="no">' + (on ? S.icon('check') : (k + 1)) + '</span>' +
          '<span class="nm"><b>' + S.bi(t.en, t.ar) + '</b><small>' + S.bi(p.en.replace(/\s*\(.*\)/, ''), S.strip(p.ar).replace(/\s*\(.*\)/, '')) + ' · ' + S.bi(LEVELS[t.lv].en, LEVELS[t.lv].ar) + '</small></span></a></li>'; }).join('') + '</ol>' : '') +
      '<div class="jlevels">' + LEVELS.map(function (l) { return '<span style="--c:' + l.c + '"><i></i>' + S.bi(l.en, l.ar) + '</span>'; }).join('') +
        '<a href="' + root + 'guide/index.html#levels">' + S.bi('About the levels', 'عن المستويات') + '</a></div>';
  }

  // remember which stations the learner has reached (called on every page by site.js)
  function mark(id) { var v = visited(); if (v.indexOf(id) < 0) { v.push(id); try { localStorage.setItem(KEY, JSON.stringify(v)); } catch (e) {} } }

  window.Journey = { draw: draw, panel: panel, mark: mark, STATIONS: STATIONS, LEVELS: LEVELS };
})();
