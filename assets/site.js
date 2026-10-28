// مرافئ العربية · Arabic Harbours — shared helpers: top bar + footer, interface language (EN/AR), Arabic speech, text helpers, progress.
(function () {
  var ENGLISH_CLUB = 'https://mrgmdi22-prog.github.io/English/';
  var root = document.body.getAttribute('data-root') || '';

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
        '<a class="brand" href="' + root + 'index.html"><span class="mark" aria-hidden="true">ض</span>' +
          '<span class="nm"><span class="t-en">Arabic Harbours</span><span class="t-ar">مرافئ العربية</span></span></a>' +
        '<a class="pill eng" href="' + ENGLISH_CLUB + '"><span aria-hidden="true">🇬🇧</span><span class="t-en">English Club</span><span class="t-ar">نادي الإنجليزية</span></a>' +
        '<button class="pill lang" id="langBtn" type="button"><span aria-hidden="true">🌐</span><span class="t-en">العربية</span><span class="t-ar">English</span></button>' +
      '</div>';
    document.getElementById('langBtn').addEventListener('click', function () { setLang(getLang() === 'en' ? 'ar' : 'en'); });
  }
  var foot = document.getElementById('sitefoot');
  if (foot) {
    foot.className = 'site';
    foot.innerHTML =
      '<div><span class="t-en">Prepared by: <b>Mr. Ahmed Al-Salim</b></span><span class="t-ar">إعداد: <b>أ. أحمد آل سالم</b></span></div>' +
      '<div><a href="' + ENGLISH_CLUB + '"><span class="t-en">Visit the English Club site →</span><span class="t-ar">زر موقع نادي اللغة الإنجليزية ←</span></a></div>';
  }

  // ---------- Arabic text helpers ----------
  var HARAKAT = /[ً-ْٰـ]/g;   // tashkeel, dagger alif, tatweel
  function strip(s) { return String(s).replace(HARAKAT, ''); }
  // loose form for comparing typed answers: no tashkeel, no extra spaces
  function norm(s) { return strip(s).replace(/\s+/g, ' ').trim(); }

  // ---------- speech (uses the device's Arabic voice when there is one) ----------
  var voice = null;
  function pickVoice() {
    if (!('speechSynthesis' in window)) return;
    var vs = speechSynthesis.getVoices() || [];
    voice = vs.filter(function (v) { return /^ar(-|_)SA/i.test(v.lang); })[0] ||
            vs.filter(function (v) { return /^ar/i.test(v.lang); })[0] || null;
  }
  if ('speechSynthesis' in window) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
  function canSpeak() { return 'speechSynthesis' in window && !!voice; }
  function speak(text, opts) {
    if (!('speechSynthesis' in window)) return false;
    opts = opts || {};
    speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text);
    u.lang = voice ? voice.lang : 'ar-SA';
    if (voice) u.voice = voice;
    u.rate = opts.rate || 0.82;
    if (opts.onend) u.onend = opts.onend;
    speechSynthesis.speak(u);
    return true;
  }
  function stopSpeak() { if ('speechSynthesis' in window) speechSynthesis.cancel(); }

  // ---------- progress (stars per exercise, kept on this device) ----------
  function getStars(key) { try { return +localStorage.getItem('ar-stars-' + key) || 0; } catch (e) { return 0; } }
  function saveStars(key, n) { try { if (n > getStars(key)) localStorage.setItem('ar-stars-' + key, n); } catch (e) {} }
  function starsFor(score, total) { var p = total ? score / total : 0; return p >= .9 ? 3 : p >= .6 ? 2 : p > 0 ? 1 : 0; }

  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function lang() { return getLang(); }
  function t(en, ar) { return getLang() === 'ar' ? ar : en; }
  function bi(en, ar) { return '<span class="t-en">' + en + '</span><span class="t-ar">' + ar + '</span>'; }

  // gentle reveal on scroll
  function reveal() {
    var els = document.querySelectorAll('.reveal:not(.in)');
    if (!('IntersectionObserver' in window)) { els.forEach(function (e) { e.classList.add('in'); }); return; }
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -5% 0px' });
    els.forEach(function (el, i) { el.style.transitionDelay = Math.min(i % 8, 7) * 50 + 'ms'; io.observe(el); });
  }
  document.addEventListener('DOMContentLoaded', reveal);

  window.Site = { strip: strip, norm: norm, speak: speak, stopSpeak: stopSpeak, canSpeak: canSpeak,
    getStars: getStars, saveStars: saveStars, starsFor: starsFor, shuffle: shuffle, esc: esc,
    lang: lang, t: t, bi: bi, reveal: reveal, root: root, ENGLISH_CLUB: ENGLISH_CLUB };
})();
