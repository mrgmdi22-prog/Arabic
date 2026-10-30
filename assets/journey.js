// رحلة التعلّم — the learning voyage map on the home page.
// Seven harbours of Arabia are the launch harbours: each one is a section of the site (numbered in the order
// a learner meets them, coloured by level). From them the sea lanes run out to the world: Adulis, Alexandria,
// Zanzibar, Calicut, Serendib, Dina Arobi … Each far harbour is reached by effort: it opens when the learner
// has gathered enough stars anywhere on the site. The little ship waits at the farthest harbour reached.
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
    { id: 'guide', port: 'khuraybah', href: 'guide/index.html', ic: 'compass', lv: 0, side: 'L',
      ar: 'دليل المتعلّم', en: 'Learner’s Guide', whyAr: 'من الخريبة، ميناء الأنباط القديم «القرية البيضاء»، تنطلق الرحلة: اعرف طريقك قبل أن تبحر.', whyEn: 'The voyage sets sail from Al-Khuraybah, the old Nabataean port of the “White Village”: learn the way before you sail.' },
    { id: 'words', port: 'jeddah', href: 'vocab/index.html', ic: 'cards', lv: 0, side: 'L',
      ar: 'مرفأ المفردات', en: 'Harbour of Words', whyAr: 'في جدة، باب مكة على البحر، تجمع زادك الأول من الكلمات.', whyEn: 'At Jeddah, Makkah’s gate on the sea, you gather your first store of words.' },
    { id: 'tales', port: 'sirrain', href: 'stories/index.html', ic: 'book', lv: 1, side: 'R',
      ar: 'مرفأ الحكايات', en: 'Harbour of Tales', whyAr: 'في السرّين، ميناء مكة القديم، يتسامر البحّارة بالحكايات.', whyEn: 'At Al-Sirrain, an old port of Makkah, the sailors sit and tell their tales.' },
    { id: 'reading', port: 'athar', href: 'reading/index.html', ic: 'lamp', lv: 1, side: 'R', nudge: [0.75, 0.45],
      ar: 'مرفأ الفهم', en: 'Harbour of Understanding', whyAr: 'في عثّر يلتقي تجّار الحجاز واليمن وأفريقيا، ولا تجارة بلا فهم، فاختبر فهمك لما قرأت.', whyEn: 'At Athar traders from the Hijaz, Yemen and Africa met, and trade needs understanding: test how well you understood.' },
    { id: 'spelling', port: 'farasan', href: 'dictation/index.html', ic: 'qalam', lv: 1, side: 'L', nudge: [-0.6, -0.35],
      ar: 'مرفأ الإملاء', en: 'Harbour of Spelling', whyAr: 'في جزر فرسان نقوش قديمة على الحجر، فتعلّم أن تكتب كلماتك صحيحة.', whyEn: 'The Farasan Islands keep old inscriptions in stone: learn to write your words correctly.' },
    { id: 'voyage', port: 'sohar', href: 'ports/index.html', ic: 'dhow', lv: 2, side: 'T',
      ar: 'رحلة المرافئ', en: 'The Harbours Voyage', whyAr: 'من صحار، مدينة السندباد، تبحر إلى سبعة وعشرين مرفأً.', whyEn: 'From Sohar, Sindbad’s city, sail on to twenty-seven harbours.' },
    { id: 'irab', port: 'ubulla', href: 'irab/index.html', ic: 'branches', lv: 3, side: 'L',
      ar: 'مختبر الإعراب', en: 'I‘rab Lab', whyAr: 'الأبلّة مرفأ البصرة، وفي البصرة وُلد علم النحو.', whyEn: 'Al-Ubulla is the port of Basra, where Arabic grammar was born.' }
  ];
  // the far harbours, reached by effort (stars gathered anywhere on the site)
  var DEST = [
    { port: 'adulis', from: 'farasan', need: 3, href: 'poetry/index.html', ar: 'مرفأ الشعر', en: 'Harbour of Poetry' },
    { port: 'alexandria', from: 'khuraybah', need: 8 },
    { port: 'zanzibar', from: 'athar', need: 15 },
    { port: 'calicut', from: 'sohar', need: 25 },
    { port: 'kilwa', from: 'athar', need: 35 },
    { port: 'comoros', from: 'athar', need: 50 },
    { port: 'serendib', from: 'sohar', need: 70 },
    { port: 'dinaarobi', from: 'athar', need: 95 },
    { port: 'waqwaq', from: 'athar', need: 130 }
  ];
  var VIEW = [22.6, 33.2, 90.5, -25.0];   // west, north, east, south (degrees)
  var MINW = 720;                         // narrower screens scroll sideways, like the harbours map
  var KEY = 'ar-journey';

  function visited() { try { return JSON.parse(localStorage.getItem(KEY) || '[]'); } catch (e) { return []; } }
  function nextIndex() { var v = visited(); for (var i = 0; i < STATIONS.length; i++) if (v.indexOf(STATIONS[i].id) < 0) return i; return STATIONS.length - 1; }
  function port(id) { return window.PORTS.filter(function (p) { return p.id === id; })[0]; }
  function nearest(pts, lon, lat) { var k = 0, best = 1e9; pts.forEach(function (q, i) { var d = Math.hypot(q[0] - lon, q[1] - lat); if (d < best) { best = d; k = i; } }); return k; }
  function plain(s) { return window.Site.strip(s).replace(/\s*\(.*\)/, ''); }

  // sea paths (built from lanes already checked to stay at sea)
  function path(d) {
    var R = window.ROUTES, p = port(d.port), out;
    var red = R[1], africa = R[5], india = R[4];
    if (d.port === 'adulis') return { sea: [[41.6, 16.55], [40.8, 16.5], [40.1, 16.2], [39.85, 15.7], [39.72, 15.38]] };
    if (d.port === 'alexandria') return { land: [[35.15, 28.06], [34.95, 29.4], [34.7, 30.5], [34.45, 31.5]], sea: R[0].slice().reverse() };
    if (d.from === 'athar') {
      out = red.slice(nearest(red, 41.9, 17.3)).concat(africa.slice(1));
      if (d.port === 'waqwaq') return { sea: out.concat([[58.3, -19.55], [64, -21], [72, -22.3], [80, -22.3], [86.5, -21.5]]) };
      var k = nearest(out, p.lon, p.lat); return { sea: out.slice(0, k + 1) };
    }
    if (d.from === 'sohar') {
      out = [[57.6, 24.8], [58.9, 23.9], [59.9, 23.0], [60.4, 22.3], [60.7, 21.3], [62.8, 18.4], [66, 15.5], [70, 13]].concat(india.slice(nearest(india, 73, 11.4)));
      return { sea: out.slice(0, nearest(out, p.lon, p.lat) + 1) };
    }
  }

  function draw(el, opt) {
    opt = opt || {};
    var S = window.Site, xy = SeaMap.xy, f = SeaMap.f, L = window.LAND, root = opt.root || '', stars = opt.stars || 0;
    var lang = document.documentElement.getAttribute('data-lang') === 'en' ? 'en' : 'ar';
    var a = xy(VIEW[0], VIEW[1]), b = xy(VIEW[2], VIEW[3]), vb = [a[0], a[1], b[0] - a[0], b[1] - a[1]];
    el.innerHTML = '<div class="mapscroll"><div class="jcanvas"></div></div>';
    var scroller = el.firstChild, canvas = scroller.firstChild;
    var cw = Math.max(el.clientWidth || 360, 280), w = Math.max(cw, MINW), u = vb[2] / w;
    var seen = visited(), nx = nextIndex();

    // lanes to the far harbours: faint until reached
    var lanes = '', far = null;
    DEST.forEach(function (d) {
      var g = path(d), p = port(d.port), ok = stars >= d.need, c = window.SEAS[p.sea].c;
      d.ok = ok; d.end = g.sea[g.sea.length - 1];
      if (ok) far = d;
      lanes += '<g class="dl' + (ok ? ' ok' : '') + '" style="--c:' + c + '">' +
        (g.land ? '<path class="caravan" d="' + SeaMap.smooth(g.land) + '"/>' : '') +
        '<path class="lane" d="' + SeaMap.smooth(g.sea) + '"/></g>';
    });
    // far harbours
    var dst = DEST.map(function (d) {
      var p = port(d.port), q = xy(p.lon, p.lat), c = window.SEAS[p.sea].c, nm = (lang === 'en' ? p.en.replace(/\s*\(.*\)/, '') : plain(p.ar)) + (d.ar ? ' · ' + (lang === 'en' ? d.en : d.ar) : '');
      var left = { zanzibar: 1, kilwa: 1, adulis: 1, alexandria: 1 }[d.port], tx = q[0] + (left ? -12 : 12) * u, an = left ? 'end' : 'start';
      var dy = ({ adulis: 18 })[d.port] || 0;
      var lbl = '<text class="dn" x="' + f(tx) + '" y="' + f(q[1] + (5 + dy) * u) + '" text-anchor="' + an + '">' + nm + '</text>' +
        (d.ok ? '' : '<text class="need" x="' + f(tx) + '" y="' + f(q[1] + (21 + dy) * u) + '" text-anchor="' + an + '">★ ' + d.need + '</text>');
      var dot = '<circle class="dring" cx="' + f(q[0]) + '" cy="' + f(q[1]) + '" r="' + f(10 * u) + '"/><circle class="ddot" cx="' + f(q[0]) + '" cy="' + f(q[1]) + '" r="' + f(5.5 * u) + '"/>';
      var tip = d.ok ? '' : '<title>' + (lang === 'en' ? 'Gather ' + d.need + ' stars to reach ' + nm : 'اجمع ' + d.need + ' نجمة لتصل إلى ' + nm) + '</title>';
      return d.ok ? '<a class="dst ok" style="--c:' + c + '" href="' + root + (d.href || 'ports/port.html?p=' + d.port) + '">' + dot + lbl + '</a>'
                  : '<g class="dst" style="--c:' + c + '">' + tip + dot + lbl + '</g>';
    }).join('');
    // launch harbours = sections
    var st = STATIONS.map(function (s, i) {
      var p = port(s.port), nd = s.nudge || [0, 0], q = xy(p.lon + nd[0], p.lat + nd[1]), c = LEVELS[s.lv].c, on = seen.indexOf(s.id) >= 0, cur = i === nx;
      var r = (cur ? 15 : 12.5) * u, ic = 13.5 * u, lx = q[0], ly = q[1] + 5.5 * u, anchor = 'middle', gap = r + 6 * u;
      if (s.side === 'L') { lx -= gap; anchor = 'end'; } else if (s.side === 'R') { lx += gap; anchor = 'start'; }
      else if (s.side === 'B') { ly += gap + 10 * u; } else { ly -= gap + 8 * u; }
      return '<a class="stn' + (on ? ' on' : '') + (cur ? ' cur' : '') + '" href="' + root + s.href + '" aria-label="' + s.ar + ' · ' + s.en + '" style="--c:' + c + '">' +
        '<circle class="hit" cx="' + f(q[0]) + '" cy="' + f(q[1]) + '" r="' + f(22 * u) + '"/>' +
        (cur ? '<circle class="halo" cx="' + f(q[0]) + '" cy="' + f(q[1]) + '" r="' + f(r + 6 * u) + '"/>' : '') +
        '<circle class="disc" cx="' + f(q[0]) + '" cy="' + f(q[1]) + '" r="' + f(r) + '"/>' +
        '<svg class="jic" x="' + f(q[0] - ic / 2) + '" y="' + f(q[1] - ic / 2) + '" width="' + f(ic) + '" height="' + f(ic) + '" viewBox="0 0 32 32">' + (S.I[s.ic] || '') + '</svg>' +
        '<g class="lbl"><text class="t1" x="' + f(lx) + '" y="' + f(ly) + '" text-anchor="' + anchor + '"><tspan class="n">' + (i + 1) + '</tspan> ' + s.ar + '</text></g></a>';
    }).join('');
    var home = xy(port('khuraybah').lon, port('khuraybah').lat), shipAt = far ? xy(far.end[0], far.end[1]) : home;
    canvas.innerHTML = '<svg class="seamap journey" viewBox="' + vb.map(f).join(' ') + '" style="--u:' + u.toFixed(3) + ';min-width:' + MINW + 'px" role="img" aria-label="خريطة رحلة التعلّم">' +
      '<defs><linearGradient id="seaJ" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#DDEFF7"/><stop offset="1" stop-color="#C6E1EE"/></linearGradient>' +
      '<pattern id="wavesJ" width="46" height="22" patternUnits="userSpaceOnUse" patternTransform="scale(' + f(u) + ')"><path d="M2 12 q9 -7 18 0 t18 0" fill="none" stroke="#C4E0EC" stroke-width="1.6"/></pattern></defs>' +
      '<rect x="-50" y="-50" width="' + (L.w + 100) + '" height="' + (L.h + 100) + '" fill="url(#seaJ)"/><rect x="-50" y="-50" width="' + (L.w + 100) + '" height="' + (L.h + 100) + '" fill="url(#wavesJ)"/>' +
      '<path class="coast" d="' + L.d + '"/><path class="land" d="' + L.d + '"/>' +
      '<g class="lanes">' + lanes + '</g>' +
      '<g class="j-ship" transform="translate(' + f(shipAt[0]) + ' ' + f(shipAt[1] - 18 * u) + ')"><g transform="scale(' + f(u * 1.1) + ') translate(-15 -22)"><path d="M2 21h27l-4 6H6z"/><path d="M15 21V3"/><path class="sail" d="M15 4c6 4 10 9 11 15H15z"/><path class="sail" d="M15 8l-7 11h7z"/></g></g>' +
      dst + st + '</svg>';
    var svg = canvas.querySelector('svg');
    svg.querySelectorAll('.lbl').forEach(function (g) {
      var bb = g.getBBox(), pad = 4 * u, rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      rect.setAttribute('x', bb.x - pad); rect.setAttribute('y', bb.y - pad * .5); rect.setAttribute('width', bb.width + pad * 2); rect.setAttribute('height', bb.height + pad);
      rect.setAttribute('rx', 4 * u); rect.setAttribute('class', 'plate'); g.insertBefore(rect, g.firstChild);
    });
    // on a narrow screen, open the map on Arabia
    if (w > cw) requestAnimationFrame(function () { var hx = (xy(41, 0)[0] - vb[0]) / u; scroller.scrollLeft = Math.max(0, hx - cw / 2); });
  }

  // the panel under the map: how far your effort has taken you, your next study stop, and the levels
  function panel(el, opt) {
    opt = opt || {};
    var S = window.Site, i = nextIndex(), s = STATIONS[i], all = visited().length >= STATIONS.length, root = opt.root || '', stars = opt.stars || 0;
    var reached = DEST.filter(function (d) { return stars >= d.need; }), next = DEST.filter(function (d) { return stars < d.need; })[0];
    var prev = reached.length ? reached[reached.length - 1].need : 0, pct = next ? Math.round((stars - prev) / (next.need - prev) * 100) : 100;
    var nm = function (d) { var p = port(d.port); return S.bi(p.en.replace(/\s*\(.*\)/, '') + (d.en ? ' · ' + d.en : ''), plain(p.ar) + (d.ar ? ' · ' + d.ar : '')); };
    el.innerHTML =
      '<div class="jfar">' +
        '<div class="jf-top"><span class="jf-st">' + S.icon('star') + '<b>' + stars + '</b> ' + S.bi('stars', 'نجمة') + '</span>' +
          '<span class="jf-n">' + S.bi(reached.length + ' of ' + DEST.length + ' far harbours reached', 'وصلتَ إلى ' + reached.length + ' من ' + DEST.length + ' مرافئ بعيدة') + '</span></div>' +
        (next ? '<div class="jf-bar"><i style="width:' + Math.max(4, pct) + '%"></i></div>' +
          '<p class="jf-next">' + S.bi('Next far harbour: ', 'المرفأ البعيد التالي: ') + '<b>' + nm(next) + '</b> · ' +
            S.bi((next.need - stars) + ' more stars', 'تحتاج ' + (next.need - stars) + ' نجمة أخرى') + '</p>'
              : '<p class="jf-next">' + S.bi('You have reached every far harbour, even the Waqwaq Islands!', 'وصلتَ إلى كل المرافئ البعيدة، حتى جزر الواقواق!') + '</p>') +
        '<p class="jf-how">' + S.bi('Gather stars in the tales, spelling, word games and harbour lessons. The farther the harbour, the more stars it asks.', 'اجمع النجوم من الحكايات والإملاء وألعاب المفردات ودروس المرافئ. كلما بَعُد المرفأ احتاج نجوماً أكثر.') + '</p>' +
      '</div>' +
      '<a class="jnext" href="' + root + s.href + '" style="--c:' + LEVELS[s.lv].c + '">' +
        '<span class="jn-ic">' + S.icon(s.ic) + '</span>' +
        '<span class="jn-tx"><small>' + (all ? S.bi('Sail again', 'أبحر من جديد') : S.bi('Your next launch harbour', 'مرفأ انطلاقك التالي')) + ' · ' + S.bi(i + 1 + ' of ' + STATIONS.length, (i + 1) + ' من ' + STATIONS.length) + '</small>' +
        '<b>' + S.bi(s.en, s.ar) + '</b><span class="jn-why">' + S.bi(s.whyEn, s.whyAr) + '</span></span>' +
        '<span class="jn-go">' + S.bi('Sail', 'أبحر') + S.icon('next') + '</span></a>' +
      (el.clientWidth < 560 ? '<ol class="jlist">' + STATIONS.map(function (t, k) { var on = visited().indexOf(t.id) >= 0, p = port(t.port);
        return '<li class="' + (on ? 'on' : '') + (k === i ? ' cur' : '') + '" style="--c:' + LEVELS[t.lv].c + '"><a href="' + root + t.href + '"><span class="no">' + (on ? S.icon('check') : (k + 1)) + '</span>' +
          '<span class="nm"><b>' + S.bi(t.en, t.ar) + '</b><small>' + S.bi(p.en.replace(/\s*\(.*\)/, ''), plain(p.ar)) + ' · ' + S.bi(LEVELS[t.lv].en, LEVELS[t.lv].ar) + '</small></span></a></li>'; }).join('') + '</ol>' : '') +
      '<div class="jlevels">' + LEVELS.map(function (l) { return '<span style="--c:' + l.c + '"><i></i>' + S.bi(l.en, l.ar) + '</span>'; }).join('') +
        '<span class="jl-far"><i></i>' + S.bi('far harbour, waiting for your stars', 'مرفأ بعيد ينتظر نجومك') + '</span>' +
        '<a href="' + root + 'guide/index.html#levels">' + S.bi('About the levels', 'عن المستويات') + '</a></div>';
  }

  // remember which stations the learner has reached (called on every page by site.js)
  function mark(id) { var v = visited(); if (v.indexOf(id) < 0) { v.push(id); try { localStorage.setItem(KEY, JSON.stringify(v)); } catch (e) {} } }

  window.Journey = { draw: draw, panel: panel, mark: mark, STATIONS: STATIONS, LEVELS: LEVELS };
})();
