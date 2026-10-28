// مرافئ العربية · Arabic Harbours — shared helpers: hand-drawn icons, top bar + footer,
// interface language (EN/AR), Arabic text helpers and progress. No machine speech: recordings will come later.
(function () {
  var ENGLISH_CLUB = 'https://mrgmdi22-prog.github.io/English/';
  var root = document.body.getAttribute('data-root') || '';

  // ---------- icons: simple line drawings from the world of the old harbours ----------
  var I = {
    dhow: '<path d="M4 21h24l-3 5H8z"/><path d="M15 21V5"/><path d="M15 6c5 3 9 8 10 13H15"/><path d="M15 10l-6 9h6"/>',
    anchor: '<circle cx="16" cy="6" r="2.5"/><path d="M16 8.5V27M10 13h12M6 19c1 5 5 8 10 8s9-3 10-8M6 19l-2 2M26 19l2 2"/>',
    tent: '<path d="M3 24L9 12l7 3 7-5 6 14z"/><path d="M9 12v12M23 10v14M14 24l2-5 2 5"/>',
    facade: '<path d="M5 28h22M7 28V14h18v14M6 14h20"/><path d="M8 14v-3h2V8h2v3M24 14v-3h-2V8h-2v3"/><path d="M13 28v-7a3 3 0 0 1 6 0v7"/>',
    incense: '<path d="M10 14h12l-2 6h-8z"/><path d="M12 20l-1 6h10l-1-6"/><path d="M9 26h14"/><path d="M14 11c-1.5-2 1.5-3.5 0-6M18 11c-1.5-2 1.5-3.5 0-6"/>',
    coin: '<circle cx="16" cy="16" r="11"/><circle cx="16" cy="16" r="7"/><path d="M13 16h6"/>',
    jar: '<path d="M13 4h6M14 4v4c-5 2-7 7-5 13 1 3 3 6 7 7 4-1 6-4 7-7 2-6 0-11-5-13V4"/><path d="M11 10c-3 0-4 3-2 5M21 10c3 0 4 3 2 5"/>',
    lighthouse: '<path d="M12 28l2-16h4l2 16zM11 12h10M13 8h6v4h-6zM16 8V5M6 8l4 2M26 8l-4 2M8 28h16"/>',
    fort: '<path d="M5 28V12h4V9h3v3h8V9h3v3h4v16z"/><path d="M14 28v-6h4v6M9 17h2M21 17h2"/>',
    compass: '<circle cx="16" cy="16" r="12"/><path d="M16 7l3 9-3 9-3-9z"/><path d="M16 4v2M16 26v2M4 16h2M26 16h2"/>',
    pepper: '<path d="M8 26c6-4 10-10 12-20"/><circle cx="20" cy="12" r="2"/><circle cx="16" cy="15" r="2"/><circle cx="21" cy="17" r="2"/><circle cx="14" cy="20" r="2"/><circle cx="19" cy="21" r="2"/>',
    gem: '<path d="M9 6h14l5 7-12 14L4 13z"/><path d="M4 13h24M12 6l4 21 4-21M9 6l3 7M23 6l-3 7"/>',
    clove: '<path d="M16 28V14"/><circle cx="16" cy="10" r="3"/><path d="M16 14l-6-4M16 14l6-4"/><circle cx="9" cy="9" r="2"/><circle cx="23" cy="9" r="2"/>',
    dome: '<path d="M4 28h24M7 28V17h18v11"/><path d="M8 17c0-5 4-8 8-9 4 1 8 4 8 9"/><path d="M16 8V4"/><path d="M14 28v-5a2 2 0 0 1 4 0v5"/>',
    crescent: '<path d="M20 5a11 11 0 1 0 7 18A9 9 0 0 1 20 5z"/><path d="M24 9l.8 1.8 1.9.3-1.4 1.3.4 1.9-1.7-1-1.7 1 .4-1.9-1.4-1.3 1.9-.3z"/>',
    cane: '<path d="M11 28V4M20 28V6M9 10h4M9 17h4M9 23h4M18 12h4M18 19h4M18 25h4"/><path d="M11 4c3 0 5 2 6 5M20 6c-3-1-5 0-6 2"/>',
    tree: '<path d="M16 28V16"/><path d="M16 17c-6 0-9-4-8-8 3-4 13-4 16 0 1 4-2 8-8 8z"/><path d="M11 15v5M21 15v5"/><circle cx="11" cy="21.5" r="1.6"/><circle cx="21" cy="21.5" r="1.6"/>',
    dallah: '<path d="M11 26h11l-1-4c2-2 2-6 0-8l1-3H11l1 3c-2 2-2 6 0 8z"/><path d="M14 11l2-5 2 5"/><path d="M11 17l-5-4 1-1"/><path d="M22 14c3 0 3 6 0 7"/><path d="M9 28h15"/>',
    kaaba: '<path d="M6 11l10-5 10 5v12l-10 5-10-5z"/><path d="M6 11l10 5 10-5M16 16v12M6 14l10 5 10-5"/>',
    wheat: '<path d="M16 28V8"/><path d="M16 10c-3-1-4-4-3-6 2 1 3 3 3 6zM16 10c3-1 4-4 3-6-2 1-3 3-3 6zM16 16c-3-1-4-4-3-6 2 1 3 3 3 6zM16 16c3-1 4-4 3-6-2 1-3 3-3 6zM16 22c-3-1-4-4-3-6 2 1 3 3 3 6zM16 22c3-1 4-4 3-6-2 1-3 3-3 6z"/>',
    shell: '<path d="M5 14c2-6 20-6 22 0L16 27z"/><path d="M16 27V8M16 27l-5-18M16 27l5-18M16 27L8 11M16 27l8-16"/>',
    column: '<path d="M7 6h18M9 9h14M10 9v15M14 9v15M18 9v15M22 9v15M8 24h16M6 27h20"/><path d="M7 6c1-1.5 2-2 3-2h12c1 0 2 .5 3 2"/>',
    gate: '<path d="M5 28V8h22v20"/><path d="M11 28V18a5 5 0 0 1 10 0v10"/><path d="M5 8l2-3h18l2 3"/>',
    scroll: '<path d="M8 6h15a3 3 0 0 1 0 6H9"/><path d="M8 6a3 3 0 0 0 0 6v14h14a3 3 0 0 0 3-3V12"/><path d="M12 17h9M12 21h7"/>',
    camel: '<path d="M4 26v-7c0-3 2-5 4-5 1-3 3-4 5-2 1-2 3-3 5-1 2 2 3 5 4 6h2c1 0 2-1 2-2V9h2v6c0 3-2 5-4 5v6M8 26v-6M19 26v-6"/>',
    book: '<path d="M16 8c-3-2-7-2-11-1v18c4-1 8-1 11 1 3-2 7-2 11-1V7c-4-1-8-1-11 1z"/><path d="M16 8v18"/>',
    lamp: '<path d="M4 20c0-3 4-5 9-5h8l5-3-2 5c-1 3-5 5-11 5-5 0-9-1-9-2z"/><path d="M26 11c0-2 1-4 0-6-2 2-2 4 0 6z"/><path d="M11 22v3h7v-3"/>',
    qalam: '<path d="M6 26L22 10l3-5-5 3L4 24z"/><path d="M4 28l2-2M15 17l3 3"/>',
    branches: '<rect x="12" y="4" width="8" height="5" rx="1"/><rect x="3" y="23" width="8" height="5" rx="1"/><rect x="12" y="23" width="8" height="5" rx="1"/><rect x="21" y="23" width="8" height="5" rx="1"/><path d="M16 9v14M7 23v-5h18v5"/>',
    eye: '<path d="M3 16c3-6 8-9 13-9s10 3 13 9c-3 6-8 9-13 9S6 22 3 16z"/><circle cx="16" cy="16" r="4"/>',
    check: '<path d="M6 17l6 6L26 9"/>',
    cross: '<path d="M8 8l16 16M24 8L8 24"/>',
    back: '<path d="M12 8l8 8-8 8"/>',
    next: '<path d="M20 8l-8 8 8 8"/>',
    redo: '<path d="M8 12a10 10 0 1 1-2 8"/><path d="M8 5v7h7"/>',
    translate: '<path d="M4 7h12M10 4v3M7 7c1 5 4 8 8 10M13 7c-1 5-4 8-8 10"/><path d="M17 27l5-12 5 12M19 23h6"/>',
    marks: '<path d="M6 12l8-3M6 20l8-3"/><path d="M19 9c2 1 4 0 5-1M18 22a3 3 0 1 0 6 0 3 3 0 1 0-6 0"/>',
    keyboard: '<rect x="3" y="9" width="26" height="15" rx="2"/><path d="M7 13h2M12 13h2M17 13h2M22 13h2M7 17h2M12 17h2M17 17h2M22 17h2M10 21h12"/>',
    sparkle: '<path d="M16 4l2.5 9.5L28 16l-9.5 2.5L16 28l-2.5-9.5L4 16l9.5-2.5z"/>',
    star: '<path d="M16 4l3.6 7.4 8.1 1.2-5.9 5.7 1.4 8.1L16 22.6l-7.2 3.8 1.4-8.1-5.9-5.7 8.1-1.2z"/>',
    pin: '<path d="M16 28s-9-8-9-15a9 9 0 0 1 18 0c0 7-9 15-9 15z"/><circle cx="16" cy="13" r="3"/>',
    roc: '<path d="M3 13c5-1 9 0 13 4 4-4 8-5 13-4-4 1-7 3-9 6l-4 7-4-7c-2-3-5-5-9-6z"/><path d="M16 17v-4"/><circle cx="16" cy="11" r="2"/>',
    lantern: '<path d="M13 4h6M16 4v3M11 10h10l-1-3h-8zM11 10c-1 5-1 10 0 14h10c1-4 1-9 0-14M11 24l1 3h8l1-3"/><path d="M16 14v6"/>'
  };
  function icon(name, cls) {
    return '<svg class="ic-svg' + (cls ? ' ' + cls : '') + '" viewBox="0 0 32 32" aria-hidden="true" focusable="false">' + (I[name] || I.sparkle) + '</svg>';
  }
  function stars(n, of) {
    of = of || 3; var s = '';
    for (var k = 0; k < of; k++) s += '<svg class="ic-star' + (k < n ? ' on' : '') + '" viewBox="0 0 32 32" aria-hidden="true">' + I.star + '</svg>';
    return '<span class="stars-row" aria-label="' + n + ' / ' + of + '">' + s + '</span>';
  }
  // static markup can ask for an icon with <i data-ic="name"></i>
  function hydrate(scope) { (scope || document).querySelectorAll('i[data-ic]').forEach(function (el) { el.outerHTML = icon(el.getAttribute('data-ic'), el.className); }); }

  // ---------- interface language ----------
  function getLang() { try { return localStorage.getItem('ar-site-lang') || 'en'; } catch (e) { return 'en'; } }
  function setLang(l) {
    document.documentElement.setAttribute('data-lang', l);
    document.documentElement.lang = l;
    document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
    try { localStorage.setItem('ar-site-lang', l); } catch (e) {}
    document.dispatchEvent(new CustomEvent('langchange', { detail: l }));
  }
  setLang(getLang());

  // ---------- top bar + footer ----------
  var top = document.getElementById('topbar');
  if (top) {
    top.className = 'topbar';
    top.innerHTML =
      '<div class="in">' +
        '<a class="brand" href="' + root + 'index.html">' + icon('facade', 'mark') +
          '<span class="nm"><span class="t-en">Arabic Harbours</span><span class="t-ar">مرافئ العربية</span></span></a>' +
        '<a class="pill" href="' + ENGLISH_CLUB + '"><span class="t-en">English Club</span><span class="t-ar">نادي الإنجليزية</span></a>' +
        '<button class="pill lang" id="langBtn" type="button"><span class="t-en">العربية</span><span class="t-ar">English</span></button>' +
      '</div><div class="sadu" aria-hidden="true"></div>';
    document.getElementById('langBtn').addEventListener('click', function () { setLang(getLang() === 'en' ? 'ar' : 'en'); });
  }
  var foot = document.getElementById('sitefoot');
  if (foot) {
    foot.className = 'site';
    foot.innerHTML = '<div class="sadu" aria-hidden="true"></div>' +
      '<div class="sig"><span class="t-en">Prepared by <b>Mr. Ahmed Al-Salim</b></span><span class="t-ar">إعداد: <b>أ. أحمد آل سالم</b></span></div>' +
      '<div><a href="' + ENGLISH_CLUB + '"><span class="t-en">Visit the English Club site</span><span class="t-ar">زر موقع نادي اللغة الإنجليزية</span></a></div>';
  }
  hydrate();

  // ---------- Arabic text helpers ----------
  var HARAKAT = /[ً-ْٰـ]/g;   // tashkeel, dagger alif, tatweel
  function strip(s) { return String(s).replace(HARAKAT, ''); }
  function norm(s) { return strip(s).replace(/\s+/g, ' ').trim(); }

  // ---------- progress (stars per exercise, kept on this device) ----------
  function getStars(key) { try { return +localStorage.getItem('ar-stars-' + key) || 0; } catch (e) { return 0; } }
  function saveStars(key, n) { try { if (n > getStars(key)) localStorage.setItem('ar-stars-' + key, n); } catch (e) {} }
  function starsFor(score, total) { var p = total ? score / total : 0; return p >= .9 ? 3 : p >= .6 ? 2 : p > 0 ? 1 : 0; }

  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function lang() { return getLang(); }
  function t(en, ar) { return getLang() === 'ar' ? ar : en; }
  function bi(en, ar) { return '<span class="t-en">' + en + '</span><span class="t-ar">' + ar + '</span>'; }

  window.Site = { strip: strip, norm: norm, getStars: getStars, saveStars: saveStars, starsFor: starsFor, shuffle: shuffle, esc: esc,
    lang: lang, t: t, bi: bi, icon: icon, stars: stars, hydrate: hydrate, reveal: function () {}, root: root, ENGLISH_CLUB: ENGLISH_CLUB };
})();
