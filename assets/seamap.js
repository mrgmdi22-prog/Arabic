// Sea map of مرافئ العربية: coastlines, sea lanes, the Incense Road and clickable ports.
// SeaMap.mount(el, {root})          — full map with zoom tabs (whole map, Red Sea, Arabian Gulf, East Africa)
// SeaMap.draw(el, {root, highlight, view}) — one map; view = [west, north, east, south] in degrees zooms in.
// Labels, dots and lines keep the same size on screen at every zoom (sizes are multiplied by --u).
// Needs land.js and ports.js loaded first.
(function () {
  var L = window.LAND;
  function xy(lon, lat) { return [(lon - L.w0) * L.sc, (L.n0 - lat) * L.sc]; }
  function f(v) { return v.toFixed(1); }
  // smooth line through points (Catmull-Rom → cubic Bézier)
  function smooth(pts) {
    var p = pts.map(function (q) { return xy(q[0], q[1]); }), d = 'M' + f(p[0][0]) + ' ' + f(p[0][1]);
    for (var i = 0; i < p.length - 1; i++) {
      var p0 = p[i - 1] || p[i], p1 = p[i], p2 = p[i + 1], p3 = p[i + 2] || p2;
      var c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6], c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
      d += 'C' + c1.map(f).join(' ') + ' ' + c2.map(f).join(' ') + ' ' + p2.map(f).join(' ');
    }
    return d;
  }
  var LEFT = { farasan: 1, adulis: 1, mokha: 1, jubail: 1, uqair: 1, ubulla: 1, calicut: 1, zanzibar: 1, kilwa: 1, waqwaq: 1 };
  var DY = { jubail: -6, uqair: 10, mokha: -4, aden: 10 };
  var plain = function (s) { return String(s).replace(/[ً-ْٰ]/g, '').replace(/\s*\(.*\)/, ''); };
  var VIEWS = {
    all: null,
    red: [31.5, 31.2, 46.5, 11.0],
    gulf: [44.8, 31.2, 60.5, 21.5],
    africa: [36.0, 0.5, 61.0, -23.0]
  };
  var VIEW_NAMES = [['all', 'Whole map', 'الخريطة كاملة'], ['red', 'Red Sea', 'البحر الأحمر'], ['gulf', 'Arabian Gulf', 'الخليج العربي'], ['africa', 'East Africa', 'شرق أفريقيا']];

  function ship(lane, dur, begin, u) {
    return '<g class="ship"><g transform="scale(' + f(u) + ') translate(-15 -22)"><path d="M2 21h27l-4 6H6z"/><path d="M15 21V3"/><path class="sail" d="M15 4c6 4 10 9 11 15H15z"/><path class="sail" d="M15 8l-7 11h7z"/></g>' +
      '<animateMotion dur="' + dur + 's" begin="' + begin + 's" repeatCount="indefinite"><mpath href="#' + lane + '"/></animateMotion></g>';
  }

  function draw(el, opt) {
    opt = opt || {};
    var root = opt.root || '', S = window.SEAS, hl = opt.highlight, v = opt.view;
    // the visible box in map units
    var vb = [0, 0, L.w, L.h];
    if (v) { var a = xy(v[0], v[1]), b = xy(v[2], v[3]); vb = [a[0], a[1], b[0] - a[0], b[1] - a[1]]; }
    // how many map units one screen pixel covers (so text stays ~19px on screen)
    var cw = Math.max(el.clientWidth || 360, 280), u;
    var boxH = opt.height || Math.min(window.innerHeight * 0.72, 640);
    if (v) u = 1 / Math.min(cw / vb[2], boxH / vb[3]);
    else u = vb[2] / Math.max(cw, window.innerWidth < 700 ? 820 : cw);
    var lanes = window.ROUTES.map(function (r, i) { return '<path id="lane' + i + '" class="lane" d="' + smooth(r) + '"/>'; }).join('');
    var seaLbl = [
      ['البحر الأحمر', 'Red Sea', 38.25, 21.7, 60, 'big'], ['بحر العرب', 'Arabian Sea', 63, 16, 0, 'big'], ['الخليج العربي', 'Arabian Gulf', 51.75, 26.9, 20, 'gulf'],
      ['المحيط الهندي', 'Indian Ocean', 70, -8, 0, 'big'], ['بحر الروم', 'Mediterranean', 26, 34.3, 0, 'big']
    ].filter(function (s) { return !(hl && s[5] === 'gulf'); }).map(function (s) {
      var p = xy(s[2], s[3]);
      return '<g class="sea-l ' + s[5] + '" transform="translate(' + f(p[0]) + ' ' + f(p[1]) + ') rotate(' + s[4] + ')"><text text-anchor="middle" dominant-baseline="central">' + s[0] + '</text>' +
        (s[5] === 'big' && !s[4] ? '<text class="en" y="' + f(24 * u) + '" text-anchor="middle">' + s[1] + '</text>' : '') + '</g>';
    }).join('');
    var ports = window.PORTS.map(function (p) {
      var q = xy(p.lon, p.lat), c = S[p.sea].c, left = !!LEFT[p.id], on = hl === p.id;
      var tx = (left ? -13 : 13) * u, anchor = left ? 'end' : 'start', dy = (DY[p.id] || 0) * u;
      if (p.id === 'alexandria' && !v) { tx = 0; anchor = 'middle'; dy = 28 * u; }
      return '<a class="port' + (on ? ' on' : '') + (p.legend ? ' legend' : '') + '" href="' + root + 'ports/port.html?p=' + p.id + '" aria-label="' + plain(p.ar) + ' · ' + p.en + '">' +
        '<circle class="hit" cx="' + f(q[0]) + '" cy="' + f(q[1]) + '" r="' + f(22 * u) + '"/>' +
        (p.legend ? '<circle class="mist" cx="' + f(q[0]) + '" cy="' + f(q[1]) + '" r="' + f(30 * u) + '"/>' : '') +
        '<circle class="ring" cx="' + f(q[0]) + '" cy="' + f(q[1]) + '" r="' + f((on ? 14 : 10) * u) + '" style="stroke:' + c + '"/>' +
        '<circle class="dot" cx="' + f(q[0]) + '" cy="' + f(q[1]) + '" r="' + f((on ? 7.5 : 5.5) * u) + '" style="fill:' + c + '"/>' +
        '<text x="' + f(q[0] + tx) + '" y="' + f(q[1] + 6.5 * u + dy) + '" text-anchor="' + anchor + '" style="fill:' + c + '">' + plain(p.ar) + '</text></a>';
    }).join('');
    var incLbl = xy(46.6, 17.6), china = xy(90.5, 7.6);
    el.innerHTML =
      '<svg class="seamap' + (v ? ' zoomed' : '') + '" viewBox="' + vb.map(f).join(' ') + '" style="--u:' + u.toFixed(3) + (v ? ';height:' + Math.round(Math.min(boxH, vb[3] / u)) + 'px' : '') + '" role="img" aria-label="خريطة مرافئ العربية">' +
      '<defs><linearGradient id="seaG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#DDEFF7"/><stop offset="1" stop-color="#C6E1EE"/></linearGradient>' +
      '<pattern id="waves" width="46" height="22" patternUnits="userSpaceOnUse" patternTransform="scale(' + f(u) + ')"><path d="M2 12 q9 -7 18 0 t18 0" fill="none" stroke="#C4E0EC" stroke-width="1.6"/></pattern></defs>' +
      '<rect x="-50" y="-50" width="' + (L.w + 100) + '" height="' + (L.h + 100) + '" fill="url(#seaG)"/><rect x="-50" y="-50" width="' + (L.w + 100) + '" height="' + (L.h + 100) + '" fill="url(#waves)"/>' +
      '<path class="coast" d="' + L.d + '"/><path class="land" d="' + L.d + '"/>' +
      seaLbl + lanes +
      '<path class="incense" d="' + smooth(window.INCENSE) + '"/>' +
      '<g class="inc-l" transform="translate(' + f(incLbl[0]) + ' ' + f(incLbl[1]) + ') rotate(-38)"><text text-anchor="middle">دَرْبُ البَخُورِ</text></g>' +
      '<text class="china" x="' + f(china[0] - 6 * u) + '" y="' + f(china[1]) + '" text-anchor="end">← إلى الصين</text>' +
      ship('lane4', 40, 0, u) + ship('lane5', 48, -14, u) +
      ports + '</svg>';
  }

  // full map with zoom tabs
  function mount(el, opt) {
    opt = opt || {};
    var cur = 'all';
    try { cur = sessionStorage.getItem('ar-mapview') || 'all'; } catch (e) {}
    var bi = window.Site ? Site.bi : function (en, ar) { return ar; };
    el.innerHTML = '<div class="mapzoom" role="tablist">' + VIEW_NAMES.map(function (z) {
      return '<button type="button" role="tab" data-z="' + z[0] + '">' + bi(z[1], z[2]) + '</button>'; }).join('') + '</div><div class="mapscroll"><div class="mapcanvas"></div></div>';
    var canvas = el.querySelector('.mapcanvas'), scroller = el.querySelector('.mapscroll');
    function show() {
      el.querySelectorAll('.mapzoom button').forEach(function (b) { b.setAttribute('aria-selected', b.dataset.z === cur); });
      draw(canvas, { root: opt.root, view: VIEWS[cur] });
      if (cur === 'all') requestAnimationFrame(function () { scroller.scrollLeft = (scroller.scrollWidth - scroller.clientWidth) * .28; });
      else scroller.scrollLeft = 0;
    }
    el.querySelector('.mapzoom').onclick = function (e) {
      var b = e.target.closest('button'); if (!b) return; cur = b.dataset.z;
      try { sessionStorage.setItem('ar-mapview', cur); } catch (er) {}
      show();
    };
    var t = 0; window.addEventListener('resize', function () { clearTimeout(t); t = setTimeout(show, 200); });
    show();
  }

  // a box around one harbour, for its lesson page
  function around(p, half) {
    half = half || 7;
    return [p.lon - half * 1.15, p.lat + half * 0.8, p.lon + half * 1.15, p.lat - half * 0.8];
  }
  window.SeaMap = { draw: draw, mount: mount, around: around, xy: xy, VIEWS: VIEWS };
})();
