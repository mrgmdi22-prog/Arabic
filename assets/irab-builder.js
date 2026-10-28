// ابنِ جملتك — the student assembles a sentence from word lists, and the lab writes its إعراب by rule.
// Every pattern here has a fixed, known إعراب, so the result is always correct and needs no outside service.
(function () {
  var PEOPLE = [
    { w: 'الطالب', g: 'm' }, { w: 'الطالبة', g: 'f' }, { w: 'المعلم', g: 'm' }, { w: 'المعلمة', g: 'f' },
    { w: 'الولد', g: 'm' }, { w: 'البنت', g: 'f' }, { w: 'التاجر', g: 'm' }, { w: 'البحّار', g: 'm' }
  ];
  var ADJ = [
    { m: 'مجتهد', f: 'مجتهدة' }, { m: 'سعيد', f: 'سعيدة' }, { m: 'نشيط', f: 'نشيطة' },
    { m: 'كريم', f: 'كريمة' }, { m: 'صادق', f: 'صادقة' }, { m: 'مسرور', f: 'مسرورة' }
  ];
  var PLACES = [['في', 'المدرسة'], ['في', 'السوق'], ['في', 'الحديقة'], ['في', 'البيت'], ['في', 'الميناء']];
  var VERBS = [
    { p: 'كتب', pf: 'كتبت', r: 'يكتب', rf: 'تكتب', obj: ['الدرس', 'الرسالة', 'القصة'], pp: [['في', 'الدفتر'], ['في', 'المدرسة']] },
    { p: 'قرأ', pf: 'قرأت', r: 'يقرأ', rf: 'تقرأ', obj: ['الكتاب', 'القصة', 'الرسالة'], pp: [['في', 'المكتبة'], ['في', 'البيت']] },
    { p: 'أكل', pf: 'أكلت', r: 'يأكل', rf: 'تأكل', obj: ['الطعام', 'التمر', 'الخبز'], pp: [['في', 'البيت'], ['في', 'الحديقة']] },
    { p: 'حمل', pf: 'حملت', r: 'يحمل', rf: 'تحمل', obj: ['الحقيبة', 'الكتاب'], pp: [['إلى', 'المدرسة'], ['إلى', 'السوق']] },
    { p: 'ذهب', pf: 'ذهبت', r: 'يذهب', rf: 'تذهب', obj: [], pp: [['إلى', 'المدرسة'], ['إلى', 'السوق'], ['إلى', 'الميناء']] },
    { p: 'جلس', pf: 'جلست', r: 'يجلس', rf: 'تجلس', obj: [], pp: [['في', 'الحديقة'], ['في', 'البيت']] },
    { p: 'رجع', pf: 'رجعت', r: 'يرجع', rf: 'ترجع', obj: [], pp: [['من', 'السوق'], ['إلى', 'البيت']] },
    { p: 'خرج', pf: 'خرجت', r: 'يخرج', rf: 'تخرج', obj: [], pp: [['من', 'البيت'], ['من', 'المدرسة']] }
  ];
  var KANA = [{ m: 'كان', f: 'كانت', name: 'كان' }, { m: 'أصبح', f: 'أصبحت', name: 'أصبح' }];
  var INNA = [{ w: 'إنَّ', name: 'إنّ', d: 'حرف توكيد ونصب' }, { w: 'لعلَّ', name: 'لعلّ', d: 'حرف ترجٍّ ونصب' }, { w: 'كأنَّ', name: 'كأنّ', d: 'حرف تشبيه ونصب' }];

  var U = 'ُ', A = 'َ', I = 'ِ';
  var PREP_TXT = { 'في': 'حرف جر مبني على السكون لا محل له من الإعراب.', 'إلى': 'حرف جر مبني على السكون لا محل له من الإعراب.', 'من': 'حرف جر مبني على السكون، وحُرّك بالفتح لالتقاء الساكنين، لا محل له من الإعراب.' };
  function prepWord(p) { return p === 'من' ? 'منَ' : p; }
  function jar(p, n, tail) {
    return [[prepWord(p), 'حرف جر', PREP_TXT[p]], [n + I, 'اسم مجرور', 'اسم مجرور بـ(' + p + ') وعلامة جره الكسرة الظاهرة على آخره' + tail]];
  }
  // past verb, feminine: تاء التأنيث is كسرة before a word starting with ال
  function pastFem(v) { return v + I; }
  var FEM_TXT = 'والتاء تاء التأنيث الساكنة حرف مبني على السكون لا محل له من الإعراب، وحُرّكت بالكسر لالتقاء الساكنين.';

  var PATTERNS = {
    verbal: {
      ar: 'جملة فعلية', hint: 'فعل + فاعل + مفعول به + جار ومجرور',
      slots: function (st) {
        var v = VERBS[st.verb || 0];
        return [
          { k: 'tense', label: 'الزمن', opts: [['p', 'ماضٍ'], ['r', 'مضارع']] },
          { k: 'verb', label: 'الفعل', opts: VERBS.map(function (x, i) { return [i, x.p + ' / ' + x.r]; }) },
          { k: 'subj', label: 'الفاعل', opts: PEOPLE.map(function (x, i) { return [i, x.w]; }) },
          { k: 'obj', label: 'المفعول به', opts: [['-', '— بلا مفعول —']].concat(v.obj.map(function (x, i) { return [i, x]; })) },
          { k: 'pp', label: 'الجار والمجرور', opts: [['-', '— بلا جار ومجرور —']].concat(v.pp.map(function (x, i) { return [i, x[0] + ' ' + x[1]]; })) }
        ];
      },
      build: function (st) {
        var v = VERBS[+st.verb || 0], s = PEOPLE[+st.subj || 0], words = [], groups = [];
        var fem = s.g === 'f', past = st.tense !== 'r';
        var vw = past ? (fem ? pastFem(v.pf) : v.p + A) : (fem ? v.rf : v.r) + U;
        var vt = past ? 'فعل ماضٍ مبني على الفتح' + (fem ? '، ' + FEM_TXT : '.') : 'فعل مضارع مرفوع وعلامة رفعه الضمة الظاهرة على آخره.';
        words.push([vw, 'فعل', vt]);
        words.push([s.w + U, 'فاعل', 'فاعل مرفوع وعلامة رفعه الضمة الظاهرة على آخره.']);
        if (st.obj !== '-' && v.obj.length) words.push([v.obj[+st.obj || 0] + A, 'مفعول به', 'مفعول به منصوب وعلامة نصبه الفتحة الظاهرة على آخره.']);
        if (st.pp !== '-') {
          var pp = v.pp[+st.pp || 0], from = words.length;
          jar(pp[0], pp[1], '، وشبه الجملة متعلقة بالفعل (' + (past ? v.p : v.r) + ').').forEach(function (w) { words.push(w); });
          groups.push({ type: 'شبه جملة جار ومجرور', mahall: '', from: from, to: from + 1 });
        }
        return { type: 'جملة فعلية', words: words, groups: groups };
      }
    },
    nominal: {
      ar: 'جملة اسمية', hint: 'مبتدأ + خبر (مفرد أو شبه جملة)',
      slots: function () {
        return [
          { k: 'subj', label: 'المبتدأ', opts: PEOPLE.map(function (x, i) { return [i, x.w]; }) },
          { k: 'kind', label: 'نوع الخبر', opts: [['adj', 'خبر مفرد'], ['pp', 'خبر شبه جملة']] },
          { k: 'adj', label: 'الخبر المفرد', opts: ADJ.map(function (x, i) { return [i, x.m + ' / ' + x.f]; }) },
          { k: 'place', label: 'الخبر شبه الجملة', opts: PLACES.map(function (x, i) { return [i, x[0] + ' ' + x[1]]; }) }
        ];
      },
      build: function (st) {
        var s = PEOPLE[+st.subj || 0], words = [[s.w + U, 'مبتدأ', 'مبتدأ مرفوع وعلامة رفعه الضمة الظاهرة على آخره.']], groups = [];
        if (st.kind === 'pp') {
          var pl = PLACES[+st.place || 0];
          jar(pl[0], pl[1], '، وشبه الجملة من الجار والمجرور في محل رفع خبر.').forEach(function (w) { words.push(w); });
          groups.push({ type: 'شبه جملة جار ومجرور', mahall: 'خبر', from: 1, to: 2 });
        } else {
          var a = ADJ[+st.adj || 0];
          words.push([(s.g === 'f' ? a.f : a.m) + 'ٌ', 'خبر', 'خبر مرفوع وعلامة رفعه الضمة الظاهرة على آخره.']);
        }
        return { type: 'جملة اسمية', words: words, groups: groups };
      }
    },
    kana: {
      ar: 'كان وأخواتها', hint: 'فعل ناسخ + اسمه مرفوع + خبره منصوب',
      slots: function () {
        return [
          { k: 'nasikh', label: 'الفعل الناسخ', opts: KANA.map(function (x, i) { return [i, x.m]; }) },
          { k: 'subj', label: 'الاسم', opts: PEOPLE.map(function (x, i) { return [i, x.w]; }) },
          { k: 'adj', label: 'الخبر', opts: ADJ.map(function (x, i) { return [i, x.m + ' / ' + x.f]; }) }
        ];
      },
      build: function (st) {
        var k = KANA[+st.nasikh || 0], s = PEOPLE[+st.subj || 0], a = ADJ[+st.adj || 0], fem = s.g === 'f';
        var kw = fem ? pastFem(k.f) : k.m + A;
        return { type: 'جملة اسمية منسوخة', groups: [], words: [
          [kw, 'فعل ناسخ', 'فعل ماضٍ ناقص مبني على الفتح' + (fem ? '، ' + FEM_TXT : '.')],
          [s.w + U, 'اسم ' + k.name, 'اسم ' + k.name + ' مرفوع وعلامة رفعه الضمة الظاهرة على آخره.'],
          [fem ? a.f + 'ً' : a.m + 'اً', 'خبر ' + k.name, 'خبر ' + k.name + ' منصوب وعلامة نصبه الفتحة الظاهرة على آخره.']
        ] };
      }
    },
    inna: {
      ar: 'إنّ وأخواتها', hint: 'حرف ناسخ + اسمه منصوب + خبره مرفوع',
      slots: function () {
        return [
          { k: 'harf', label: 'الحرف الناسخ', opts: INNA.map(function (x, i) { return [i, x.w]; }) },
          { k: 'subj', label: 'الاسم', opts: PEOPLE.map(function (x, i) { return [i, x.w]; }) },
          { k: 'adj', label: 'الخبر', opts: ADJ.map(function (x, i) { return [i, x.m + ' / ' + x.f]; }) }
        ];
      },
      build: function (st) {
        var h = INNA[+st.harf || 0], s = PEOPLE[+st.subj || 0], a = ADJ[+st.adj || 0];
        return { type: 'جملة اسمية منسوخة', groups: [], words: [
          [h.w, 'حرف ناسخ', h.d + ' مبني على الفتح لا محل له من الإعراب.'],
          [s.w + A, 'اسم ' + h.name, 'اسم ' + h.name + ' منصوب وعلامة نصبه الفتحة الظاهرة على آخره.'],
          [(s.g === 'f' ? a.f : a.m) + 'ٌ', 'خبر ' + h.name, 'خبر ' + h.name + ' مرفوع وعلامة رفعه الضمة الظاهرة على آخره.']
        ] };
      }
    }
  };

  // ---------- the builder panel ----------
  var box = document.getElementById('bBox'); if (!box) return;
  var state = { pat: 'verbal', tense: 'p', verb: 0, subj: 0, obj: 0, pp: 0, kind: 'adj', adj: 0, place: 0, nasikh: 0, harf: 0 };
  function sentenceOf(r) { return r.words.map(function (w) { return w[0]; }).join(' ') + '.'; }
  function draw() {
    var P = PATTERNS[state.pat];
    box.innerHTML =
      '<p class="qintro">اختر نوع الجملة وكلماتها، فيكتب المختبر إعرابها كاملاً. كل جملة تبنيها هنا إعرابها صحيح ومضمون.</p>' +
      '<div class="pats">' + Object.keys(PATTERNS).map(function (k) { return '<button type="button" data-p="' + k + '" class="' + (k === state.pat ? 'on' : '') + '">' + PATTERNS[k].ar + '</button>'; }).join('') + '</div>' +
      '<p class="phint">' + P.hint + '</p>' +
      '<div class="slots">' + P.slots(state).map(function (sl) {
        var hide = (state.pat === 'nominal' && ((sl.k === 'adj' && state.kind === 'pp') || (sl.k === 'place' && state.kind !== 'pp'))) ||
                   (state.pat === 'verbal' && sl.k === 'obj' && sl.opts.length === 1);
        return hide ? '' : '<label>' + sl.label + '<select data-k="' + sl.k + '">' + sl.opts.map(function (o) { return '<option value="' + o[0] + '"' + (String(state[sl.k]) === String(o[0]) ? ' selected' : '') + '>' + o[1] + '</option>'; }).join('') + '</select></label>';
      }).join('') + '</div>' +
      '<div class="preview" id="bPrev"></div>' +
      '<div class="row"><button class="primary" id="bGo">أعرب الجملة</button></div>';
    box.querySelectorAll('.pats button').forEach(function (b) { b.onclick = function () { state.pat = b.dataset.p; draw(); }; });
    box.querySelectorAll('select').forEach(function (s) { s.onchange = function () {
      state[s.dataset.k] = s.value;
      if (s.dataset.k === 'verb') { state.obj = VERBS[+s.value].obj.length ? 0 : '-'; state.pp = 0; draw(); return; }
      if (s.dataset.k === 'kind') { draw(); return; }
      preview();
    }; });
    document.getElementById('bGo').onclick = go;
    preview();
  }
  function result() { var r = PATTERNS[state.pat].build(state); r.sentence = sentenceOf(r); return r; }
  function preview() { document.getElementById('bPrev').textContent = sentenceOf(PATTERNS[state.pat].build(state)); }
  function go() { var r = result(); render(r); var t = document.getElementById('treeH'); if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  window.IrabBuilder = { draw: draw, PATTERNS: PATTERNS };
  draw();
})();
