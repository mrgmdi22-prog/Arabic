// أصوات الموقع — soft sounds of old Arabia, made in the browser (no audio files):
// an oud-like plucked string in maqam Hijaz, a frame-drum "dum", and a small camel bell.
// Quiet by design; a speaker button in the top bar turns them off and the choice is remembered.
(function () {
  var KEY = 'ar-sfx', on = true;
  try { on = localStorage.getItem(KEY) !== 'off'; } catch (e) {}
  var ctx = null, master = null;
  function ac() {
    if (!ctx) {
      var C = window.AudioContext || window.webkitAudioContext; if (!C) return null;
      ctx = new C(); master = ctx.createGain(); master.gain.value = 0.22;
      var lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 5200;
      master.connect(lp); lp.connect(ctx.destination);
    }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }
  // maqam Hijaz on D
  var HIJAZ = [293.66, 311.13, 369.99, 392.0, 440.0, 466.16, 523.25, 587.33];

  // oud-like pluck: Karplus–Strong string rendered into a short buffer
  var cache = {};
  function pluck(freq, vol, when) {
    var c = ac(); if (!c || !on) return;
    var key = Math.round(freq), sr = c.sampleRate, buf = cache[key];
    if (!buf) {
      var dur = 0.9, n = Math.floor(sr * dur), N = Math.max(2, Math.round(sr / freq));
      buf = c.createBuffer(1, n, sr); var d = buf.getChannelData(0), ring = new Float32Array(N);
      for (var i = 0; i < N; i++) ring[i] = (Math.random() * 2 - 1) * (1 - i / N * 0.5);
      var p = 0, damp = 0.994;
      for (var j = 0; j < n; j++) {
        var nx = (p + 1) % N, v = (ring[p] + ring[nx]) * 0.5 * damp;
        d[j] = ring[p]; ring[p] = v; p = nx;
      }
      cache[key] = buf;
    }
    var s = c.createBufferSource(), g = c.createGain(), t = c.currentTime + (when || 0);
    s.buffer = buf; g.gain.setValueAtTime((vol || 0.5), t); g.gain.exponentialRampToValueAtTime(0.0008, t + 0.85);
    var bp = c.createBiquadFilter(); bp.type = 'lowpass'; bp.frequency.value = 2400;
    s.connect(bp); bp.connect(g); g.connect(master); s.start(t); s.stop(t + 0.9);
  }
  // frame drum (daff/tar) "dum": a low tone that falls, with a soft skin slap
  function dum(vol, when) {
    var c = ac(); if (!c || !on) return;
    var t = c.currentTime + (when || 0), o = c.createOscillator(), g = c.createGain();
    o.type = 'sine'; o.frequency.setValueAtTime(118, t); o.frequency.exponentialRampToValueAtTime(58, t + 0.28);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol || 0.55, t + 0.012); g.gain.exponentialRampToValueAtTime(0.0008, t + 0.42);
    o.connect(g); g.connect(master); o.start(t); o.stop(t + 0.45);
    var nb = c.createBuffer(1, Math.floor(c.sampleRate * 0.06), c.sampleRate), nd = nb.getChannelData(0);
    for (var i = 0; i < nd.length; i++) nd[i] = (Math.random() * 2 - 1) * (1 - i / nd.length);
    var ns = c.createBufferSource(), nf = c.createBiquadFilter(), ng = c.createGain();
    ns.buffer = nb; nf.type = 'bandpass'; nf.frequency.value = 900; nf.Q.value = 0.8; ng.gain.value = (vol || 0.55) * 0.18;
    ns.connect(nf); nf.connect(ng); ng.connect(master); ns.start(t);
  }
  // small camel bell: a few inharmonic partials, very short
  function bell(vol, when) {
    var c = ac(); if (!c || !on) return;
    var t = c.currentTime + (when || 0);
    [[1, 1], [2.76, 0.4], [5.4, 0.18]].forEach(function (pt) {
      var o = c.createOscillator(), g = c.createGain();
      o.type = 'sine'; o.frequency.value = 1180 * pt[0];
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime((vol || 0.18) * pt[1], t + 0.005); g.gain.exponentialRampToValueAtTime(0.0005, t + 0.6 / pt[0] + 0.15);
      o.connect(g); g.connect(master); o.start(t); o.stop(t + 0.8);
    });
  }

  var SFX = {
    open: function () { dum(0.5); pluck(HIJAZ[0], 0.42, 0.04); },                       // entering a section
    tap: function () { pluck(HIJAZ[3 + Math.floor(Math.random() * 4)] * 2, 0.22); },     // buttons, tabs, icons
    turn: function () { pluck(HIJAZ[4], 0.3); pluck(HIJAZ[2], 0.22, 0.07); },            // next page, flip a card
    right: function () { pluck(HIJAZ[4], 0.42); pluck(HIJAZ[7], 0.42, 0.11); bell(0.12, 0.2); },
    wrong: function () { dum(0.35); pluck(HIJAZ[1], 0.25, 0.05); },
    done: function () { [0, 2, 4, 7].forEach(function (k, i) { pluck(HIJAZ[k], 0.38, i * 0.11); }); bell(0.15, 0.5); }
  };
  window.SFX = SFX;

  // ---------- speaker switch in the top bar ----------
  var SPK = '<svg class="ic-svg" viewBox="0 0 32 32" aria-hidden="true"><path d="M5 12h5l7-6v20l-7-6H5z"/><path class="w" d="M21 11c2 2.5 2 7.5 0 10M24.5 8c4 4.5 4 11.5 0 16"/><path class="x" d="M21 12l7 8M28 12l-7 8"/></svg>';
  function paintBtn(b) { b.classList.toggle('off', !on); b.setAttribute('aria-pressed', on); b.title = on ? 'الأصوات تعمل' : 'الأصوات متوقفة'; }
  function addBtn() {
    var bar = document.querySelector('.topbar .in'); if (!bar || document.getElementById('sfxBtn')) return;
    var b = document.createElement('button'); b.type = 'button'; b.id = 'sfxBtn'; b.className = 'pill sfx'; b.innerHTML = SPK;
    b.setAttribute('aria-label', 'Sounds / الأصوات');
    b.onclick = function (e) { e.stopPropagation(); on = !on; try { localStorage.setItem(KEY, on ? 'on' : 'off'); } catch (er) {} paintBtn(b); if (on) SFX.tap(); };
    bar.insertBefore(b, document.getElementById('langBtn')); paintBtn(b);
  }
  var st = document.createElement('style');
  st.textContent = '.pill.sfx{padding:5px 10px;color:var(--sand)}.pill.sfx .x{display:none}.pill.sfx.off{color:var(--muted)}.pill.sfx.off .w{display:none}.pill.sfx.off .x{display:inline}';
  document.head.appendChild(st);
  addBtn();

  // ---------- what plays when ----------
  var lastOpt = 0;
  document.addEventListener('click', function (e) {
    if (!on) return;
    var el = e.target.closest('a, button, .mc, .tile, .gl, summary, label[for]');
    if (!el || el.id === 'sfxBtn' || el.closest('.aud')) return;
    // answers: judge after the page has marked them right or wrong
    if (el.matches('.opt, .tile, .mc, .ev, .popts button')) {
      if (el.matches('.opt, .popts button')) lastOpt = Date.now();
      setTimeout(function () {
        if (el.classList.contains('no')) SFX.wrong();
        else if (el.classList.contains('ok') && !document.querySelector('.feedback.on')) SFX.right();
        else if (el.matches('.mc, .tile, .ev')) SFX.tap();
      }, 40);
      return;
    }
    var href = el.localName === 'a' ? (el.getAttribute('href') || el.getAttribute('xlink:href')) : null;
    if (href && !el.target && !e.ctrlKey && !e.metaKey && !e.shiftKey && href.charAt(0) !== '#' && !/^(mailto|tel):/.test(href)) {
      var external = /^https?:/.test(href) && href.indexOf(location.host) < 0;
      SFX.open();
      if (!external) { e.preventDefault(); setTimeout(function () { location.href = href; }, 170); }
      return;
    }
    if (el.matches('#bNext, #bPrev, .nav .btn')) { SFX.turn(); return; }
    SFX.tap();
  }, true);
  // feedback boxes and score panels announce right / wrong / finished
  new MutationObserver(function (ms) {
    if (!on) return;
    ms.forEach(function (m) {
      var t = m.target;
      if (m.type === 'attributes' && t.classList && t.classList.contains('feedback') && t.classList.contains('on')) {
        if (t.classList.contains('ok')) SFX.right(); else if (t.classList.contains('no') && Date.now() - lastOpt > 30) SFX.wrong();
      }
      if (m.type === 'childList') m.addedNodes.forEach(function (n) { if (n.nodeType === 1 && (n.matches('.score') || n.querySelector && n.querySelector('.panel.score, .pscore'))) SFX.done(); });
    });
  }).observe(document.body, { attributes: true, attributeFilter: ['class'], subtree: true, childList: true });
  // flipping a flashcard
  document.addEventListener('click', function (e) { if (on && e.target.closest('#flip')) SFX.turn(); });
})();
