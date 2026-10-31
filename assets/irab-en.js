// مختبر الإعراب in English: in the English interface, every grammar term gets a small English gloss,
// each i‘rab line gets a short English summary (case + sign), and each topic a one-line explanation.
(function () {
  var T = {
    'فعل': 'verb', 'فاعل': 'subject (doer)', 'مفعول به': 'direct object', 'مبتدأ': 'subject of a nominal sentence', 'خبر': 'predicate',
    'فعل وفاعل': 'verb + subject', 'حرف جر': 'preposition', 'اسم مجرور': 'noun after a preposition (genitive)', 'جار ومجرور': 'preposition + its noun',
    'نعت': 'adjective', 'مضاف إليه': 'second noun of an iḍāfa (genitive)', 'مضاف': 'first noun of an iḍāfa', 'حرف ناسخ': 'inna-type particle', 'فعل ناسخ': 'kāna-type verb',
    'حال': 'circumstantial word (how?)', 'نائب فاعل': 'subject of a passive verb', 'مبتدأ مؤخر': 'delayed subject', 'خبر مقدم': 'fronted predicate',
    'حرف عطف ومعطوف': 'conjunction + joined word', 'حرف عطف': 'conjunction (and, or…)', 'معطوف': 'joined word', 'حرف جزم': 'jussive particle', 'حرف نصب': 'subjunctive particle',
    'حرف مصدري': 'particle that makes a verbal noun', 'تمييز': 'specifier (of what?)', 'مفعول مطلق': 'absolute object (emphasis)', 'مفعول لأجله': 'object of purpose (why?)',
    'مفعول فيه': 'adverb of time or place', 'ظرف ومضاف إليه': 'adverb + following noun', 'ظرف مكان': 'adverb of place', 'ظرف زمان': 'adverb of time', 'اسم موصول': 'relative pronoun',
    'خبر كان': 'predicate of kāna', 'اسم كان': 'subject of kāna', 'خبر إنّ': 'predicate of inna', 'اسم إنّ': 'subject of inna', 'خبر ليس': 'predicate of laysa', 'اسم ليس': 'subject of laysa',
    'خبر لعلّ': 'predicate of laʿalla', 'اسم لعلّ': 'subject of laʿalla', 'خبر كأنّ': 'predicate of kaʾanna', 'اسم كأنّ': 'subject of kaʾanna', 'خبر أصبح': 'predicate of aṣbaḥa', 'اسم أصبح': 'subject of aṣbaḥa',
    'الخبر شبه جملة': 'predicate = phrase', 'شبه جملة': 'phrase (preposition or adverb)', 'جملة فعلية': 'verbal sentence', 'جملة اسمية': 'nominal sentence', 'جملة': 'sentence',
    'ضمير': 'pronoun', 'مستتر': 'hidden', 'فعل ماض': 'past verb', 'فعل مضارع': 'present verb', 'فعل أمر': 'imperative verb', 'حرف': 'particle', 'اسم': 'noun'
  };
  var TOPICS = {
    'المبتدأ والخبر': ['Subject and predicate', 'A nominal sentence: a subject (mubtadaʾ) and what we say about it (khabar), both nominative.'],
    'الخبر شبه جملة': ['Predicate as a phrase', 'The predicate is a preposition phrase or an adverb: «the book is on the table».'],
    'الجملة الفعلية': ['The verbal sentence', 'A sentence that starts with a verb, then its subject (fāʿil) and maybe an object.'],
    'الفاعل الضمير': ['Pronoun subjects', 'The doer is a pronoun joined to the verb or hidden in it.'],
    'كان وأخواتها': ['Kāna and its sisters', 'Kāna, aṣbaḥa, laysa…: the subject stays nominative and the predicate becomes accusative.'],
    'إنّ وأخواتها': ['Inna and its sisters', 'Inna, anna, laʿalla, kaʾanna…: the subject becomes accusative and the predicate stays nominative.'],
    'الإضافة': ['The iḍāfa (possessive)', 'Two nouns together: the second is always genitive (kitābu ṭ-ṭālibi, the student’s book).'],
    'النعت': ['The adjective', 'The adjective follows its noun in case, gender, number and definiteness.'],
    'العطف': ['Joining words', 'Words joined by wa, fa, thumma, aw… take the same case as the first word.'],
    'الحال': ['The ḥāl (how?)', 'An accusative word that tells how or in what state something happened.'],
    'المضارع المنصوب والمجزوم': ['Present verb: subjunctive and jussive', 'After an, lan, kay the verb is subjunctive (-a); after lam, lā (don’t) it is jussive (sukun).'],
    'الأفعال الخمسة والأسماء الخمسة': ['The five verbs and five nouns', 'Verbs like yafʿalūna show case with the nūn; nouns like abū, akhū show it with a long vowel.'],
    'المفاعيل': ['The objects', 'Direct object, absolute object, object of purpose and adverbs of time and place: all accusative.'],
    'المبني للمجهول': ['The passive', 'The doer is not mentioned; the object becomes the subject of the passive verb (nāʾib fāʿil).'],
    'التمييز': ['The specifier', 'An accusative word that answers “of what?” after numbers, measures or vague words.'],
    'المصدر المؤول': ['The interpreted verbal noun', 'An, anna or mā + a verb work like one noun (verbal noun) in the sentence.']
  };
  function caseEn(s) {
    var c = /مرفوع/.test(s) ? 'nominative' : /منصوب/.test(s) ? 'accusative' : /مجرور/.test(s) ? 'genitive' : /مجزوم/.test(s) ? 'jussive' : /مبني/.test(s) ? 'fixed ending (mabnī)' : '';
    var m = /الضمة/.test(s) ? 'damma' : /الفتحة/.test(s) ? 'fatha' : /الكسرة/.test(s) ? 'kasra' : /السكون/.test(s) ? 'sukun' : /ثبوت النون/.test(s) ? 'keeping the nūn' : /حذف النون/.test(s) ? 'dropping the nūn' : /الياء/.test(s) ? 'the letter yāʾ' : /الواو/.test(s) ? 'the letter wāw' : /الألف/.test(s) ? 'the letter alif' : '';
    return c ? c + (m ? ', marked by ' + m : '') : '';
  }
  function en() { return document.documentElement.getAttribute('data-lang') === 'en'; }
  function gloss(txt) { txt = String(txt).replace(/\s*\(.*\)\s*/, '').trim(); return T[txt] || ''; }
  var UI = {
    'جملة عربية': 'Arabic sentence', 'ابنِ جملتك': 'Build your sentence', 'أعرب بنفسك': 'Parse it yourself', 'آية قرآنية': 'Quranic verse',
    'جملتك': 'Your sentence', 'أعرب الجملة': 'Parse the sentence', 'اختر باباً من أبواب النحو:': 'Choose a grammar topic:', 'جمل هذا الباب:': 'Sentences in this topic:',
    'الباب:': 'Topic:', 'جملة جديدة': 'New sentence', 'شجرة الجملة': 'Sentence tree', 'الإعراب التفصيلي': 'Word-by-word i‘rab', 'جانبية': 'Sideways', 'عمودية': 'Top-down',
    'موقع الكلمة': 'Role of the word', 'جملة أو تركيب': 'Sentence or phrase', 'ضمير مستتر': 'Hidden pronoun', 'السورة': 'Sura', 'رقم الآية': 'Verse number',
    'اعرض المراجع': 'Show references', 'موضع الإعراب في المراجع': 'Where to find its i‘rab in the books',
    'اختر لكل كلمة موقعها الإعرابي، ثم قارن جوابك بالإعراب الصحيح.': 'Choose the grammatical role of each word, then compare with the correct i‘rab.',
    'إعراب القرآن الكريم يؤخذ من كتب أهل الاختصاص، ولا يعرب هذا البرنامج الآيات من عنده. اختر السورة ورقم الآية، ليرشدك إلى موضع إعرابها في المراجع المعتمدة.': 'The i‘rab of the Quran is taken from specialist books; this lab does not parse verses itself. Choose the sura and verse and it shows you where to find their i‘rab in trusted references.'
  };
  function uiGloss() {
    document.querySelectorAll('label, button, h2, h3, p, legend, summary, [role=tab]').forEach(function (el) {
      if (el.querySelector('.gl-en') || el.closest('.gl-en')) return;
      var own = Array.from(el.childNodes).filter(function (n) { return n.nodeType === 3; }).map(function (n) { return n.textContent; }).join('').trim();
      var g = UI[own]; if (!g) return;
      var sm = document.createElement('small'); sm.className = 'gl-en'; sm.textContent = g; el.appendChild(sm);
    });
  }
  function run() {
    document.querySelectorAll('.gl-en').forEach(function (x) { if (!en()) x.remove(); });
    document.querySelectorAll('select option').forEach(function (o) {
      if (!o.dataset.ar) o.dataset.ar = o.textContent;
      var t = TOPICS[o.dataset.ar.replace(/\s*\(\d+\)\s*$/, '')]; o.textContent = en() && t ? o.dataset.ar + ' — ' + t[0] : o.dataset.ar;
    });
    if (!en()) { document.querySelectorAll('.topic-en').forEach(function (x) { x.remove(); }); return; }
    uiGloss();
    document.querySelectorAll('.chip2, .tag').forEach(function (el) {
      if (el.querySelector('.gl-en')) return; var g = gloss(el.firstChild ? el.firstChild.textContent : el.textContent); if (!g) return;
      var s = document.createElement('small'); s.className = 'gl-en'; s.textContent = g; el.appendChild(s);
    });
    document.querySelectorAll('.itext').forEach(function (p) {
      if (p.nextElementSibling && p.nextElementSibling.classList.contains('gl-en')) return; var g = caseEn(p.textContent); if (!g) return;
      var s = document.createElement('p'); s.className = 'gl-en gl-line'; s.textContent = g; p.after(s);
    });
    ['topic', 'pTopic'].forEach(function (id) {
      var sel = document.getElementById(id); if (!sel) return;
      var box = sel.parentElement.querySelector('.topic-en[data-for="' + id + '"]'), t = TOPICS[((sel.options[sel.selectedIndex] || {}).dataset ? sel.options[sel.selectedIndex].dataset.ar || '' : '').replace(/\s*\(\d+\)\s*$/, '')];
      if (!t) { if (box) box.remove(); return; }
      if (!box) { box = document.createElement('p'); box.className = 'topic-en gl-en'; box.dataset.for = id; sel.parentElement.appendChild(box); }
      if (box.textContent !== t[1]) box.textContent = t[1];
    });
  }
  var tm = 0, busy = false;
  function soon() { if (busy) return; clearTimeout(tm); tm = setTimeout(function () { busy = true; try { run(); } finally { setTimeout(function () { busy = false; }, 0); } }, 80); }
  new MutationObserver(soon).observe(document.body, { childList: true, subtree: true });
  document.addEventListener('langchange', soon);
  document.addEventListener('change', soon);
  soon();
  var css = document.createElement('style');
  css.textContent = '.gl-en{display:block;direction:ltr;font-family:var(--ui-en);font-size:.78rem;font-weight:400;color:#7A6A58;line-height:1.3}button .gl-en,[role=tab] .gl-en{color:inherit;opacity:.85}.tag .gl-en,.chip2 .gl-en{margin-top:2px}.gl-line{margin:2px 0 0;text-align:left;font-size:.92rem;font-style:italic}.topic-en{flex-basis:100%;width:100%;margin:6px 0 0;font-size:.95rem;text-align:left}';
  document.head.appendChild(css);
})();
