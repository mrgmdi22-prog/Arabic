// ورشة الجملة — the main patterns of the Arabic sentence, for the sentence-building puzzle.
// Each pattern: roles (Arabic, English, colour) in the order the words are read; items: tiles in the right order + English.
window.SP_PATTERNS = [
{ id: 'mubtada', ar: 'مبتدأ + خبر', en: 'Subject + predicate', kind: 'اسمية', roles: [['مبتدأ', 'subject', '#2D6F92'], ['خبر', 'predicate', '#A26F1C']],
  tip: { ar: 'الجملة الاسمية تبدأ باسم مرفوع (المبتدأ)، ثم نخبر عنه بالخبر وهو مرفوع أيضاً.', en: 'A nominal sentence starts with a noun (the subject); then we say something about it (the predicate). Both end in -u/-un (nominative). There is no word for “is”.' },
  items: [
    { w: ['الجَوُّ', 'جَمِيلٌ'], en: 'The weather is lovely.' },
    { w: ['البَيْتُ', 'كَبِيرٌ'], en: 'The house is big.' },
    { w: ['المُعَلِّمُ', 'نَشِيطٌ'], en: 'The teacher is active.' },
    { w: ['القَهْوَةُ', 'سَاخِنَةٌ'], en: 'The coffee is hot.' },
    { w: ['الطَّرِيقُ', 'طَوِيلٌ'], en: 'The road is long.' }
  ] },
{ id: 'shibh', ar: 'مبتدأ + خبر شبه جملة', en: 'Subject + where (phrase)', kind: 'اسمية', roles: [['مبتدأ', 'subject', '#2D6F92'], ['خبر (شبه جملة)', 'predicate: a phrase', '#A26F1C']],
  tip: { ar: 'قد يكون الخبر جاراً ومجروراً أو ظرفاً يدل على المكان.', en: 'The predicate can be a place phrase: a preposition + noun (on the table, in the house).' },
  items: [
    { w: ['الكِتَابُ', 'عَلَى الطَّاوِلَةِ'], en: 'The book is on the table.' },
    { w: ['أَبِي', 'فِي العَمَلِ'], en: 'My father is at work.' },
    { w: ['القِطُّ', 'تَحْتَ الكُرْسِيِّ'], en: 'The cat is under the chair.' },
    { w: ['المَسْجِدُ', 'قُرْبَ البَيْتِ'], en: 'The mosque is near the house.' },
    { w: ['الطُّلَّابُ', 'فِي الفَصْلِ'], en: 'The students are in the class.' }
  ] },
{ id: 'muqaddam', ar: 'خبر مقدم + مبتدأ مؤخر', en: 'There is… (place first)', kind: 'اسمية', roles: [['خبر مقدم (شبه جملة)', 'fronted predicate: place', '#A26F1C'], ['مبتدأ مؤخر', 'delayed subject', '#2D6F92']],
  tip: { ar: 'إذا كان المبتدأ نكرة والخبر شبه جملة قدّمنا الخبر: في البيتِ ضيفٌ.', en: 'To say “there is a…”, put the place first and the indefinite noun after it: fī l-bayti ḍayfun (in the house is a guest).' },
  items: [
    { w: ['فِي البَيْتِ', 'ضَيْفٌ'], en: 'There is a guest in the house.' },
    { w: ['عِنْدِي', 'سُؤَالٌ'], en: 'I have a question.' },
    { w: ['فِي الحَدِيقَةِ', 'أَشْجَارٌ'], en: 'There are trees in the garden.' },
    { w: ['لِأَخِي', 'سَيَّارَةٌ'], en: 'My brother has a car.' },
    { w: ['عَلَى البَابِ', 'رَجُلٌ'], en: 'There is a man at the door.' }
  ] },
{ id: 'fiil', ar: 'فعل + فاعل', en: 'Verb + subject', kind: 'فعلية', roles: [['فعل', 'verb', '#2C7A6E'], ['فاعل', 'subject (doer)', '#2D6F92']],
  tip: { ar: 'الجملة الفعلية تبدأ بفعل، ثم الفاعل الذي قام بالفعل، وهو مرفوع.', en: 'A verbal sentence starts with the verb; the doer (fāʿil) comes after it and is nominative (-u).' },
  items: [
    { w: ['نَامَ', 'الطِّفْلُ'], en: 'The child slept.' },
    { w: ['نَزَلَ', 'المَطَرُ'], en: 'The rain came down.' },
    { w: ['وَصَلَ', 'القِطَارُ'], en: 'The train arrived.' },
    { w: ['طَلَعَتِ', 'الشَّمْسُ'], en: 'The sun rose.' },
    { w: ['حَضَرَ', 'الضُّيُوفُ'], en: 'The guests came.' }
  ] },
{ id: 'mafool', ar: 'فعل + فاعل + مفعول به', en: 'Verb + subject + object', kind: 'فعلية', roles: [['فعل', 'verb', '#2C7A6E'], ['فاعل', 'subject', '#2D6F92'], ['مفعول به', 'object', '#A23E2E']],
  tip: { ar: 'المفعول به من وقع عليه الفعل، وهو منصوب (ـَ).', en: 'The object receives the action and is accusative: it ends in -a (al-darsa).' },
  items: [
    { w: ['كَتَبَ', 'الطَّالِبُ', 'الدَّرْسَ'], en: 'The student wrote the lesson.' },
    { w: ['شَرِبَ', 'الوَلَدُ', 'الحَلِيبَ'], en: 'The boy drank the milk.' },
    { w: ['قَرَأَتْ', 'سَارَةُ', 'القِصَّةَ'], en: 'Sara read the story.' },
    { w: ['فَتَحَ', 'الرَّجُلُ', 'البَابَ'], en: 'The man opened the door.' },
    { w: ['زَرَعَ', 'الفَلَّاحُ', 'النَّخْلَ'], en: 'The farmer planted the palm trees.' }
  ] },
{ id: 'jar', ar: 'فعل + فاعل + جار ومجرور', en: 'Verb + subject + where', kind: 'فعلية', roles: [['فعل', 'verb', '#2C7A6E'], ['فاعل', 'subject', '#2D6F92'], ['جار ومجرور', 'preposition + noun', '#6B4E9B']],
  tip: { ar: 'الاسم بعد حرف الجر مجرور (ـِ): إلى المدرسةِ.', en: 'After a preposition (ilā, fī, min, ʿalā…) the noun is genitive: it ends in -i (ilā l-madrasati).' },
  items: [
    { w: ['ذَهَبَ', 'أَحْمَدُ', 'إِلَى المَدْرَسَةِ'], en: 'Ahmed went to school.' },
    { w: ['جَلَسَ', 'الضَّيْفُ', 'فِي المَجْلِسِ'], en: 'The guest sat in the majlis.' },
    { w: ['خَرَجَ', 'الأَطْفَالُ', 'مِنَ البَيْتِ'], en: 'The children went out of the house.' },
    { w: ['سَافَرَتْ', 'الأُسْرَةُ', 'إِلَى أَبْهَا'], en: 'The family travelled to Abha.' },
    { w: ['وَقَفَ', 'العُصْفُورُ', 'عَلَى الغُصْنِ'], en: 'The sparrow stood on the branch.' }
  ] },
{ id: 'zarf', ar: 'فعل + فاعل + مفعول به + ظرف', en: 'Verb + subject + object + when', kind: 'فعلية', roles: [['فعل', 'verb', '#2C7A6E'], ['فاعل', 'subject', '#2D6F92'], ['مفعول به', 'object', '#A23E2E'], ['ظرف زمان', 'time word', '#3B7A39']],
  tip: { ar: 'ظرف الزمان يدل على وقت الفعل، وهو منصوب: صباحاً، مساءً، اليومَ.', en: 'A time word tells when it happened and is accusative: ṣabāḥan (in the morning), al-yawma (today).' },
  items: [
    { w: ['شَرِبَ', 'أَبِي', 'القَهْوَةَ', 'صَبَاحاً'], en: 'My father drank coffee in the morning.' },
    { w: ['زَارَ', 'خَالِدٌ', 'جَدَّهُ', 'أَمْسِ'], en: 'Khalid visited his grandfather yesterday.' },
    { w: ['رَاجَعَتْ', 'مَرْيَمُ', 'الدَّرْسَ', 'مَسَاءً'], en: 'Maryam revised the lesson in the evening.' },
    { w: ['حَمَلَ', 'المُسَافِرُ', 'الحَقِيبَةَ', 'لَيْلاً'], en: 'The traveller carried the bag at night.' },
    { w: ['سَقَى', 'الفَلَّاحُ', 'الزَّرْعَ', 'عَصْراً'], en: 'The farmer watered the crops in the afternoon.' }
  ] },
{ id: 'hal', ar: 'فعل + فاعل + حال', en: 'Verb + subject + how', kind: 'فعلية', roles: [['فعل', 'verb', '#2C7A6E'], ['فاعل', 'subject', '#2D6F92'], ['حال', 'how? (ḥāl)', '#B9822F']],
  tip: { ar: 'الحال تبيّن هيئة صاحبها وقت الفعل، وهي نكرة منصوبة: مبتسماً.', en: 'The ḥāl tells how the doer was at that moment; it is indefinite and accusative: mubtasiman (smiling).' },
  items: [
    { w: ['جَاءَ', 'الضَّيْفُ', 'مُبْتَسِماً'], en: 'The guest came smiling.' },
    { w: ['رَجَعَ', 'الفَرِيقُ', 'فَائِزاً'], en: 'The team came back victorious.' },
    { w: ['نَامَ', 'الطِّفْلُ', 'هَادِئاً'], en: 'The child slept calmly.' },
    { w: ['دَخَلَ', 'المُعَلِّمُ', 'مُسْرِعاً'], en: 'The teacher came in quickly.' },
    { w: ['وَقَفَ', 'الطُّلَّابُ', 'صَامِتِينَ'], en: 'The students stood silent.' }
  ] },
{ id: 'kana', ar: 'كان + اسمها + خبرها', en: 'Kāna + subject + predicate', kind: 'كان وأخواتها', roles: [['كان', 'was (kāna)', '#2C7A6E'], ['اسم كان', 'subject of kāna', '#2D6F92'], ['خبر كان', 'predicate of kāna', '#A26F1C']],
  tip: { ar: 'كان ترفع الاسم وتنصب الخبر: كانَ الجوُّ بارداً.', en: 'Kāna (was) keeps its subject nominative (-u) and makes the predicate accusative (-a/-an): kāna l-jawwu bāridan.' },
  items: [
    { w: ['كَانَ', 'الجَوُّ', 'بَارِداً'], en: 'The weather was cold.' },
    { w: ['كَانَ', 'الامْتِحَانُ', 'سَهْلاً'], en: 'The exam was easy.' },
    { w: ['أَصْبَحَتِ', 'السَّمَاءُ', 'صَافِيَةً'], en: 'The sky became clear.' },
    { w: ['كَانَتِ', 'الرِّحْلَةُ', 'مُمْتِعَةً'], en: 'The trip was enjoyable.' },
    { w: ['لَيْسَ', 'الطَّرِيقُ', 'بَعِيداً'], en: 'The road is not far.' }
  ] },
{ id: 'inna', ar: 'إنّ + اسمها + خبرها', en: 'Inna + subject + predicate', kind: 'إنّ وأخواتها', roles: [['إنّ', 'indeed (inna)', '#2C7A6E'], ['اسم إنّ', 'subject of inna', '#2D6F92'], ['خبر إنّ', 'predicate of inna', '#A26F1C']],
  tip: { ar: 'إنّ تنصب الاسم وترفع الخبر: إنَّ العلمَ نورٌ.', en: 'Inna (indeed) makes its subject accusative (-a) and keeps the predicate nominative (-un): inna l-ʿilma nūrun.' },
  items: [
    { w: ['إِنَّ', 'العِلْمَ', 'نُورٌ'], en: 'Knowledge is indeed light.' },
    { w: ['إِنَّ', 'الصِّدْقَ', 'جَمِيلٌ'], en: 'Truthfulness is indeed beautiful.' },
    { w: ['لَعَلَّ', 'المَطَرَ', 'قَادِمٌ'], en: 'Perhaps the rain is coming.' },
    { w: ['كَأَنَّ', 'القَمَرَ', 'مِصْبَاحٌ'], en: 'The moon is like a lamp.' },
    { w: ['إِنَّ', 'الصَّبْرَ', 'مِفْتَاحٌ'], en: 'Patience is indeed a key.' }
  ] },
{ id: 'naat', ar: 'مبتدأ + نعت + خبر', en: 'Subject + adjective + predicate', kind: 'اسمية', roles: [['مبتدأ', 'subject', '#2D6F92'], ['نعت', 'adjective', '#6B4E9B'], ['خبر', 'predicate', '#A26F1C']],
  tip: { ar: 'النعت يتبع المنعوت في إعرابه وتعريفه: البيتُ الكبيرُ جميلٌ.', en: 'An adjective follows its noun and copies it: definite with definite, -u with -u (al-baytu l-kabīru).' },
  items: [
    { w: ['البَيْتُ', 'الكَبِيرُ', 'جَمِيلٌ'], en: 'The big house is beautiful.' },
    { w: ['الطَّالِبُ', 'المُجْتَهِدُ', 'نَاجِحٌ'], en: 'The hard-working student succeeds.' },
    { w: ['المَدِينَةُ', 'القَدِيمَةُ', 'هَادِئَةٌ'], en: 'The old city is quiet.' },
    { w: ['الشَّايُ', 'الأَخْضَرُ', 'مُفِيدٌ'], en: 'Green tea is good for you.' },
    { w: ['البَحْرُ', 'الأَحْمَرُ', 'صَافٍ'], en: 'The Red Sea is clear.' }
  ] },
{ id: 'idafa', ar: 'مبتدأ (مضاف) + مضاف إليه + خبر', en: 'Iḍāfa subject + predicate', kind: 'اسمية', roles: [['مبتدأ (مضاف)', 'subject (first noun)', '#2D6F92'], ['مضاف إليه', 'second noun (genitive)', '#6B4E9B'], ['خبر', 'predicate', '#A26F1C']],
  tip: { ar: 'المضاف لا يأخذ «ال» ولا تنويناً، والمضاف إليه مجرور: بابُ البيتِ مفتوحٌ.', en: 'In an iḍāfa (“the door of the house”) the first noun has no al- and no -n, and the second noun is genitive (-i): bābu l-bayti.' },
  items: [
    { w: ['بَابُ', 'البَيْتِ', 'مَفْتُوحٌ'], en: 'The door of the house is open.' },
    { w: ['كِتَابُ', 'الطَّالِبِ', 'جَدِيدٌ'], en: 'The student’s book is new.' },
    { w: ['مَاءُ', 'البَحْرِ', 'مَالِحٌ'], en: 'Sea water is salty.' },
    { w: ['سُوقُ', 'المَدِينَةِ', 'مُزْدَحِمٌ'], en: 'The city market is crowded.' },
    { w: ['لَوْنُ', 'السَّمَاءِ', 'أَزْرَقُ'], en: 'The colour of the sky is blue.' }
  ] }
];
