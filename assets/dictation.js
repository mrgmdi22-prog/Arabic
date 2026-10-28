// Dictation (إملاء) units. Each item: w = correct vocalised word, en = meaning, x = common wrong spellings,
// g = the word with "_" where a letter is missing, a = the missing letter(s). Unit `letters` are the choices for the gap.
window.DICTATION = [
{
  id: 'taa', ar: 'التَّاءُ المَرْبُوطَةُ وَالمَفْتُوحَةُ', en: 'Tied taa (ة) and open taa (ت)', icon: 'ة', c: '#0f7f74', t: '#e2f4f1',
  ruleEn: 'Use ة at the end of a noun when it sounds like “h” if you stop on it, and like “t” if you keep reading. Use ت when it is always heard as “t” (بِنْت، بَيْت), and in verbs (كَتَبَتْ). Use ه when there is no “t” sound at all (وَجْه).',
  ruleAr: 'تُكْتَبُ التَّاءُ مَرْبُوطَةً (ة) إِذَا نُطِقَتْ هَاءً عِنْدَ الوَقْفِ، وَتُكْتَبُ مَفْتُوحَةً (ت) إِذَا نُطِقَتْ تَاءً دَائِماً، وَفِي آخِرِ الفِعْلِ. وَتُكْتَبُ هَاءً (ه) إِذَا لَمْ يَكُنْ فِيهَا صَوْتُ التَّاءِ.',
  letters: ['ة', 'ت', 'ه'],
  items: [
    { w: 'مَدْرَسَة', en: 'school', x: ['مدرسه', 'مدرست'], g: 'مَدْرَسَ_', a: 'ة' },
    { w: 'بِنْت', en: 'girl', x: ['بنة', 'بنه'], g: 'بِنْ_', a: 'ت' },
    { w: 'شَجَرَة', en: 'tree', x: ['شجره', 'شجرت'], g: 'شَجَرَ_', a: 'ة' },
    { w: 'بَيْت', en: 'house', x: ['بية', 'بيه'], g: 'بَيْ_', a: 'ت' },
    { w: 'وَجْه', en: 'face', x: ['وجة', 'وجت'], g: 'وَجْ_', a: 'ه' },
    { w: 'قِطَّة', en: 'cat', x: ['قطه', 'قطت'], g: 'قِطَّ_', a: 'ة' },
    { w: 'كَتَبَتْ', en: 'she wrote', x: ['كتبة', 'كتبه'], g: 'كَتَبَ_', a: 'ت' },
    { w: 'سَيَّارَة', en: 'car', x: ['سياره', 'سيارت'], g: 'سَيَّارَ_', a: 'ة' },
    { w: 'وَقْت', en: 'time', x: ['وقة', 'وقه'], g: 'وَقْ_', a: 'ت' },
    { w: 'مِيَاه', en: 'water (plural)', x: ['مياة', 'ميات'], g: 'مِيَا_', a: 'ه' },
    { w: 'مُعَلِّمَات', en: 'female teachers', x: ['معلماة', 'معلماه'], g: 'مُعَلِّمَا_', a: 'ت' },
    { w: 'حَدِيقَة', en: 'garden', x: ['حديقه', 'حديقت'], g: 'حَدِيقَ_', a: 'ة' }
  ]
},
{
  id: 'hamza', ar: 'الهَمْزَةُ', en: 'Hamza (ء أ إ ؤ ئ)', icon: 'ء', c: '#4552c9', t: '#ebedfd',
  ruleEn: 'Hamza sits on a “seat” chosen by the vowels around it. Kasra is strongest (ئ), then damma (ؤ), then fatha (أ). At the start of a word: أ with fatha or damma, إ with kasra. At the end after a long vowel or sukun it stands alone (ء).',
  ruleAr: 'تُكْتَبُ الهَمْزَةُ عَلَى الحَرْفِ المُنَاسِبِ لِأَقْوَى الحَرَكَتَيْنِ: الكَسْرَةُ (ئ) ثُمَّ الضَّمَّةُ (ؤ) ثُمَّ الفَتْحَةُ (أ). وَفِي أَوَّلِ الكَلِمَةِ تُكْتَبُ (أ) مَعَ الفَتْحِ وَالضَّمِّ، وَ(إ) مَعَ الكَسْرِ.',
  letters: ['أ', 'إ', 'ؤ', 'ئ', 'ء'],
  items: [
    { w: 'سُؤَال', en: 'question', x: ['سئال', 'سأال'], g: 'سُ_ال', a: 'ؤ' },
    { w: 'بِئْر', en: 'a well', x: ['بأر', 'بؤر'], g: 'بِ_ر', a: 'ئ' },
    { w: 'رَأْس', en: 'head', x: ['رئس', 'رؤس'], g: 'رَ_س', a: 'أ' },
    { w: 'سَمَاء', en: 'sky', x: ['سماأ', 'سمائ'], g: 'سَمَا_', a: 'ء' },
    { w: 'شَاطِئ', en: 'shore', x: ['شاطء', 'شاطأ'], g: 'شَاطِ_', a: 'ئ' },
    { w: 'أَب', en: 'father', x: ['اب', 'إب'], g: '_ب', a: 'أ' },
    { w: 'إِنْسَان', en: 'human', x: ['أنسان', 'انسان'], g: '_نْسَان', a: 'إ' },
    { w: 'يَقْرَأُ', en: 'he reads', x: ['يقرء', 'يقرؤ'], g: 'يَقْرَ_', a: 'أ' },
    { w: 'فَأْر', en: 'mouse', x: ['فئر', 'فؤر'], g: 'فَ_ر', a: 'أ' },
    { w: 'مُؤَدَّب', en: 'polite', x: ['مئدب', 'مأدب'], g: 'مُ_دَّب', a: 'ؤ' },
    { w: 'سُئِلَ', en: 'he was asked', x: ['سؤل', 'سأل'], g: 'سُ_لَ', a: 'ئ' },
    { w: 'مَسَاء', en: 'evening', x: ['مساأ', 'مسائ'], g: 'مَسَا_', a: 'ء' }
  ]
},
{
  id: 'alif', ar: 'الأَلِفُ اللَّيِّنَةُ', en: 'Final alif (ا or ى)', icon: 'ى', c: '#a2650c', t: '#fdf1da',
  ruleEn: 'A long “aa” at the end of a word is written ى when it comes from ي (مَشَى ← يَمْشِي) and ا when it comes from و (دَعَا ← يَدْعُو). Many nouns of four letters or more end in ى (مُسْتَشْفَى).',
  ruleAr: 'تُكْتَبُ الأَلِفُ فِي آخِرِ الفِعْلِ الثُّلَاثِيِّ مَقْصُورَةً (ى) إِذَا كَانَ أَصْلُهَا يَاءً (مَشَى ← يَمْشِي)، وَمَمْدُودَةً (ا) إِذَا كَانَ أَصْلُهَا وَاواً (دَعَا ← يَدْعُو). وَتُكْتَبُ (ى) فِي آخِرِ أَكْثَرِ الأَسْمَاءِ الَّتِي تَزِيدُ عَلَى ثَلَاثَةِ أَحْرُفٍ.',
  letters: ['ا', 'ى'],
  items: [
    { w: 'عَلَى', en: 'on', x: ['علا'], g: 'عَلَ_', a: 'ى' },
    { w: 'إِلَى', en: 'to', x: ['إلا'], g: 'إِلَ_', a: 'ى' },
    { w: 'دَعَا', en: 'he called', x: ['دعى'], g: 'دَعَ_', a: 'ا' },
    { w: 'مَشَى', en: 'he walked', x: ['مشا'], g: 'مَشَ_', a: 'ى' },
    { w: 'عَصَا', en: 'stick', x: ['عصى'], g: 'عَصَ_', a: 'ا' },
    { w: 'مُسْتَشْفَى', en: 'hospital', x: ['مستشفا'], g: 'مُسْتَشْفَ_', a: 'ى' },
    { w: 'بَكَى', en: 'he cried', x: ['بكا'], g: 'بَكَ_', a: 'ى' },
    { w: 'نَجَا', en: 'he escaped', x: ['نجى'], g: 'نَجَ_', a: 'ا' },
    { w: 'رَمَى', en: 'he threw', x: ['رما'], g: 'رَمَ_', a: 'ى' },
    { w: 'فَتَى', en: 'young man', x: ['فتا'], g: 'فَتَ_', a: 'ى' },
    { w: 'سَمَا', en: 'it rose high', x: ['سمى'], g: 'سَمَ_', a: 'ا' },
    { w: 'لَيْلَى', en: 'Layla (name)', x: ['ليلا'], g: 'لَيْلَ_', a: 'ى' }
  ]
},
{
  id: 'lam', ar: 'اللَّامُ الشَّمْسِيَّةُ وَالقَمَرِيَّةُ', en: 'Sun and moon letters (ال)', icon: 'ال', c: '#b03a66', t: '#fdecf2',
  ruleEn: 'We always write “ال” at the start of a definite word. Before “sun letters” (like ش ر س د ن ت ط) the ل is written but not pronounced, and the next letter is doubled: الشَّمْس = ash-shams. Before “moon letters” (like ق ب ك ي) the ل is pronounced: القَمَر = al-qamar.',
  ruleAr: 'تُكْتَبُ «ال» دَائِماً فِي أَوَّلِ الكَلِمَةِ المُعَرَّفَةِ. فَإِذَا جَاءَ بَعْدَهَا حَرْفٌ شَمْسِيٌّ كُتِبَتِ اللَّامُ وَلَمْ تُنْطَقْ، وَشُدِّدَ الحَرْفُ بَعْدَهَا (الشَّمْس). وَإِذَا جَاءَ بَعْدَهَا حَرْفٌ قَمَرِيٌّ نُطِقَتِ اللَّامُ (القَمَر).',
  letters: ['ال', 'ا', 'أل'],
  items: [
    { w: 'الشَّمْس', en: 'the sun', x: ['اشّمس', 'اششمس'], g: '_شَّمْس', a: 'ال' },
    { w: 'القَمَر', en: 'the moon', x: ['لقمر', 'ألقمر'], g: '_قَمَر', a: 'ال' },
    { w: 'النَّهْر', en: 'the river', x: ['انّهر', 'اننهر'], g: '_نَّهْر', a: 'ال' },
    { w: 'البَاب', en: 'the door', x: ['لباب', 'ألباب'], g: '_بَاب', a: 'ال' },
    { w: 'الرَّجُل', en: 'the man', x: ['ارّجل', 'اررجل'], g: '_رَّجُل', a: 'ال' },
    { w: 'الكِتَاب', en: 'the book', x: ['لكتاب', 'ألكتاب'], g: '_كِتَاب', a: 'ال' },
    { w: 'السَّمَاء', en: 'the sky', x: ['اسّماء', 'اسسماء'], g: '_سَّمَاء', a: 'ال' },
    { w: 'اليَوْم', en: 'today', x: ['ليوم', 'أليوم'], g: '_يَوْم', a: 'ال' },
    { w: 'الدَّرْس', en: 'the lesson', x: ['ادّرس', 'اددرس'], g: '_دَّرْس', a: 'ال' },
    { w: 'الطِّفْل', en: 'the child', x: ['اطّفل', 'اططفل'], g: '_طِّفْل', a: 'ال' },
    { w: 'الثَّعْلَب', en: 'the fox', x: ['اثّعلب', 'اثثعلب'], g: '_ثَّعْلَب', a: 'ال' },
    { w: 'الأَرْنَب', en: 'the hare', x: ['لأرنب', 'ألأرنب'], g: '_أَرْنَب', a: 'ال' }
  ]
},
{
  id: 'tanween', ar: 'تَنْوِينُ الفَتْحِ', en: 'Tanween with fatha (ـاً)', icon: 'اً', c: '#2d7d3a', t: '#e6f5e8', marks: true,
  ruleEn: 'When a word ends with the sound “-an”, we usually add an alif: كِتَاباً. We do not add the alif after ة (شَجَرَةً) or after ء that follows an alif (سَمَاءً).',
  ruleAr: 'نَزِيدُ أَلِفاً فِي آخِرِ الكَلِمَةِ المُنَوَّنَةِ بِالفَتْحِ (كِتَاباً)، إِلَّا إِذَا انْتَهَتْ بِتَاءٍ مَرْبُوطَةٍ (شَجَرَةً)، أَوْ بِهَمْزَةٍ قَبْلَهَا أَلِفٌ (سَمَاءً).',
  letters: ['اً', 'ً'],
  items: [
    { w: 'كِتَاباً', en: 'a book', x: ['كِتَابً', 'كِتَاباا'], g: 'كِتَاب_', a: 'اً' },
    { w: 'شَجَرَةً', en: 'a tree', x: ['شَجَرَةاً', 'شَجَرَتاً'], g: 'شَجَرَة_', a: 'ً' },
    { w: 'مَاءً', en: 'water', x: ['مَاءاً', 'مَائاً'], g: 'مَاء_', a: 'ً' },
    { w: 'بَيْتاً', en: 'a house', x: ['بَيْتً', 'بَيْتَا'], g: 'بَيْت_', a: 'اً' },
    { w: 'وَلَداً', en: 'a boy', x: ['وَلَدً', 'وَلَدَا'], g: 'وَلَد_', a: 'اً' },
    { w: 'مَدِينَةً', en: 'a city', x: ['مَدِينَةاً', 'مَدِينَتاً'], g: 'مَدِينَة_', a: 'ً' },
    { w: 'سَمَاءً', en: 'a sky', x: ['سَمَاءاً', 'سَمَائاً'], g: 'سَمَاء_', a: 'ً' },
    { w: 'شُكْراً', en: 'thanks', x: ['شُكْرً', 'شُكْرَا'], g: 'شُكْر_', a: 'اً' },
    { w: 'أَبَداً', en: 'never / ever', x: ['أَبَدً', 'أَبَدَا'], g: 'أَبَد_', a: 'اً' },
    { w: 'هَدِيَّةً', en: 'a gift', x: ['هَدِيَّةاً', 'هَدِيَّتاً'], g: 'هَدِيَّة_', a: 'ً' },
    { w: 'صَدِيقاً', en: 'a friend', x: ['صَدِيقً', 'صَدِيقَا'], g: 'صَدِيق_', a: 'اً' },
    { w: 'طَعَاماً', en: 'food', x: ['طَعَامً', 'طَعَامَا'], g: 'طَعَام_', a: 'اً' }
  ]
},
{
  id: 'jumal', ar: 'جُمَلٌ مِنَ القِصَصِ', en: 'Sentences from the stories', icon: '✍️', c: '#7a46b8', t: '#f1ecfb', listenOnly: true,
  ruleEn: 'Listen to a whole sentence from the Kalila wa Dimna stories and write it. Vowel marks are not needed.',
  ruleAr: 'اسْتَمِعْ إِلَى جُمْلَةٍ كَامِلَةٍ مِنْ قِصَصِ كَلِيلَةَ وَدِمْنَةَ، ثُمَّ اكْتُبْهَا. لَا يَلْزَمُ كِتَابَةُ التَّشْكِيلِ.',
  items: [
    { w: 'خَرَجَ الثَّعْلَبُ جَائِعاً', en: 'The fox went out hungry.' },
    { w: 'جَفَّ مَاءُ البُحَيْرَةِ', en: 'The lake’s water dried up.' },
    { w: 'عِنْدِي فِكْرَةٌ', en: 'I have an idea.' },
    { w: 'رَكِبَ القِرْدُ عَلَى ظَهْرِهِ', en: 'The monkey climbed on his back.' },
    { w: 'طَارَ الحَمَامُ مَعاً', en: 'The doves flew together.' },
    { w: 'نَظَرَ الأَسَدُ فِي البِئْرِ', en: 'The lion looked into the well.' },
    { w: 'وَجَدَ الطَّبْلَ فَارِغاً', en: 'He found the drum empty.' },
    { w: 'فِي الاتِّحَادِ قُوَّةٌ', en: 'In unity there is strength.' }
  ]
}
];
