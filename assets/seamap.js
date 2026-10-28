// Sea map of مرافئ العربية: coastlines, sea lanes, the Incense Road and clickable ports.
// SeaMap.draw(el, {root, highlight, small}) — needs land.js and ports.js loaded first.
(function () {
  var L = window.LAND;
  function xy(lon, lat) { return [(lon - L.w0) * L.sc, (L.n0 - lat) * L.sc]; }
  // smooth line through points (Catmull-Rom → cubic Bézier)
  function smooth(pts) {
    var p = pts.map(function (q) { return xy(q[0], q[1]); }), d = 'M' + p[0][0].toFixed(1) + ' ' + p[0][1].toFixed(1);
    for (var i = 0; i < p.length - 1; i++) {
      var p0 = p[i - 1] || p[i], p1 = p[i], p2 = p[i + 1], p3 = p[i + 2] || p2;
      var c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6], c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
      d += 'C' + c1.map(f).join(' ') + ' ' + c2.map(f).join(' ') + ' ' + p2.map(f).join(' ');
    }
    return d;
    function f(v) { return v.toFixed(1); }
  }
  var LEFT = { mokha: 1, jubail: 1, uqair: 1, ubulla: 1, calicut: 1, zanzibar: 1, kilwa: 1, waqwaq: 1 };
  var DY = { jubail: -6, uqair: 10, mokha: -4, aden: 10 };
  var plain = function (s) { return String(s).replace(/[ً-ْٰ]/g, '').replace(/\s*\(.*\)/, ''); };

  function draw(el, opt) {
    opt = opt || {};
    var root = opt.root || '', S = window.SEAS, hl = opt.highlight;
    var lanes = window.ROUTES.map(function (r, i) { return '<path id="lane' + i + '" class="lane" d="' + smooth(r) + '"/>'; }).join('');
    var inc = smooth(window.INCENSE);
    var seaLbl = [
      ['البحر الأحمر', 'Red Sea', 37.2, 21.6, -58], ['بحر العرب', 'Arabian Sea', 63, 16, 0], ['الخليج العربي', 'Arabian Gulf', 52.6, 27.6, -28],
      ['المحيط الهندي', 'Indian Ocean', 70, -8, 0], ['بحر الروم', 'Mediterranean', 26, 34.3, 0]
    ].map(function (s) {
      var p = xy(s[2], s[3]);
      return '<g class="sea-l" transform="translate(' + p[0].toFixed(0) + ' ' + p[1].toFixed(0) + ') rotate(' + s[4] + ')"><text text-anchor="middle">' + s[0] + '</text><text class="en" y="22" text-anchor="middle">' + s[1] + '</text></g>';
    }).join('');
    var ports = window.PORTS.map(function (p) {
      var q = xy(p.lon, p.lat), c = S[p.sea].c, left = !!LEFT[p.id], on = hl === p.id;
      var tx = left ? -14 : 14, anchor = left ? 'end' : 'start', dy = DY[p.id] || 0;
      if (p.id === 'alexandria') { tx = 0; anchor = 'middle'; dy = 30; }
      return '<a class="port' + (on ? ' on' : '') + (p.legend ? ' legend' : '') + '" href="' + root + 'ports/port.html?p=' + p.id + '" aria-label="' + plain(p.ar) + ' · ' + p.en + '">' +
        '<circle class="hit" cx="' + q[0].toFixed(0) + '" cy="' + q[1].toFixed(0) + '" r="24"/>' +
        (p.legend ? '<circle class="mist" cx="' + q[0].toFixed(0) + '" cy="' + q[1].toFixed(0) + '" r="34"/>' : '') +
        '<circle class="ring" cx="' + q[0].toFixed(0) + '" cy="' + q[1].toFixed(0) + '" r="' + (on ? 15 : 11) + '" style="stroke:' + c + '"/>' +
        '<circle class="dot" cx="' + q[0].toFixed(0) + '" cy="' + q[1].toFixed(0) + '" r="' + (on ? 8 : 6) + '" style="fill:' + c + '"/>' +
        '<text x="' + (q[0] + tx).toFixed(0) + '" y="' + (q[1] + 7 + dy).toFixed(0) + '" text-anchor="' + anchor + '" style="fill:' + c + '">' + plain(p.ar) + '</text></a>';
    }).join('');
    var incLbl = xy(46.6, 17.6), china = xy(90.5, 7.6);
    el.innerHTML =
      '<svg class="seamap" viewBox="0 0 ' + L.w + ' ' + L.h + '" role="img" aria-label="خريطة مرافئ العربية">' +
      '<defs><linearGradient id="seaG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e6f4f8"/><stop offset="1" stop-color="#d3ebf3"/></linearGradient>' +
      '<pattern id="waves" width="46" height="22" patternUnits="userSpaceOnUse"><path d="M2 12 q9 -7 18 0 t18 0" fill="none" stroke="#c2e1ec" stroke-width="1.6"/></pattern></defs>' +
      '<rect width="' + L.w + '" height="' + L.h + '" fill="url(#seaG)"/><rect width="' + L.w + '" height="' + L.h + '" fill="url(#waves)"/>' +
      '<path class="land-sh" d="' + L.d + '"/><path class="land" d="' + L.d + '"/>' +
      seaLbl + lanes +
      '<path class="incense" d="' + inc + '"/>' +
      '<g class="inc-l" transform="translate(' + incLbl[0].toFixed(0) + ' ' + incLbl[1].toFixed(0) + ') rotate(-38)"><text text-anchor="middle">دَرْبُ البَخُورِ</text></g>' +
      '<text class="china" x="' + (china[0] - 6).toFixed(0) + '" y="' + china[1].toFixed(0) + '" text-anchor="end">← إلى الصين</text>' +
      '<g class="ship"><text font-size="34" text-anchor="middle" dominant-baseline="central">⛵</text><animateMotion dur="38s" repeatCount="indefinite" rotate="0"><mpath href="#lane3"/></animateMotion></g>' +
      '<g class="ship"><text font-size="30" text-anchor="middle" dominant-baseline="central">⛵</text><animateMotion dur="46s" begin="-12s" repeatCount="indefinite" rotate="0"><mpath href="#lane4"/></animateMotion></g>' +
      ports + '</svg>';
  }
  window.SeaMap = { draw: draw, xy: xy };
})();
