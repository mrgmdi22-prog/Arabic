// محادثات السائح — Traveller's talk: short everyday dialogues for visitors to Saudi Arabia.
// Every line comes twice: f = Modern Standard Arabic (vowelled), d = Saudi dialect (as people say it),
// with tr = how to say the dialect line in Latin letters, and en = the meaning.
// who: 't' = the visitor, 'l' = the local speaker (named in roles).
window.TALK_CATS = [
  { id: 'basics', ar: 'الأساسيات', en: 'The basics', ic: 'dallah' },
  { id: 'move', ar: 'التنقّل والتسوّق', en: 'Getting around & shopping', ic: 'camel' },
  { id: 'tour', ar: 'السياحة والطوارئ', en: 'Sightseeing & emergencies', ic: 'facade' },
  { id: 'host', ar: 'الضيافة السعودية', en: 'Saudi hospitality', ic: 'tent' },
  { id: 'hajj', ar: 'العمرة والزيارة', en: 'Umrah & the holy mosques', ic: 'kaaba' }
];
window.TALKS = [
{ id: 'greet', cat: 'basics', ar: 'التَّحِيَّةُ وَالتَّعَارُفُ', en: 'Greeting and meeting', roles: { t: ['سائح', 'Visitor'], l: ['شاب سعودي', 'Young Saudi'] },
  lines: [
    { who: 't', f: 'السَّلَامُ عَلَيْكُمْ.', d: 'السلام عليكم.', tr: 'as-salāmu ʿalaykum.', en: 'Peace be upon you (hello).' },
    { who: 'l', f: 'وَعَلَيْكُمُ السَّلَامُ، أَهْلاً وَسَهْلاً.', d: 'وعليكم السلام، هلا والله!', tr: 'wa ʿalaykum as-salām, hala wallah!', en: 'And peace be upon you. Welcome!' },
    { who: 't', f: 'كَيْفَ حَالُكَ؟', d: 'كيف حالك؟ وش لونك؟', tr: 'kēf ḥālak? wish lōnak?', en: 'How are you?' },
    { who: 'l', f: 'بِخَيْرٍ، وَالحَمْدُ لِلَّهِ. مِنْ أَيِّ بَلَدٍ أَنْتَ؟', d: 'بخير الحمد لله. من وين إنت؟', tr: 'bikhēr al-ḥamdu lillāh. min wēn inta?', en: 'Fine, thank God. Where are you from?' },
    { who: 't', f: 'أَنَا مِنْ مَالِيزِيَا، وَاسْمِي آدَمُ.', d: 'أنا من ماليزيا، واسمي آدم.', tr: 'ana min malēzya, w-ismi ādam.', en: 'I am from Malaysia, and my name is Adam.' },
    { who: 'l', f: 'تَشَرَّفْنَا يَا آدَمُ، حَيَّاكَ اللَّهُ فِي السُّعُودِيَّةِ.', d: 'تشرفنا يا آدم، حيّاك الله في السعودية.', tr: 'tsharrafna yā ādam, ḥayyāk allāh fi s-saʿūdiyya.', en: 'Nice to meet you, Adam. Welcome to Saudi Arabia.' }
  ],
  tip: { ar: '«حيّاك الله» ترحيب سعودي شائع، والرد عليه: «الله يحييك».', en: '«Ḥayyāk allāh» is the everyday Saudi welcome; answer «allāh yḥayyīk».' } },

{ id: 'airport', cat: 'basics', ar: 'فِي المَطَارِ', en: 'At passport control', roles: { t: ['مسافر', 'Traveller'], l: ['موظف الجوازات', 'Passport officer'] },
  lines: [
    { who: 'l', f: 'أَهْلاً بِكَ. جَوَازُ السَّفَرِ مِنْ فَضْلِكَ.', d: 'حيّاك الله. الجواز لو سمحت.', tr: 'ḥayyāk allāh. al-jawāz law samaḥt.', en: 'Welcome. Your passport, please.' },
    { who: 't', f: 'تَفَضَّلْ، هَذَا جَوَازِي وَهَذِهِ التَّأْشِيرَةُ.', d: 'تفضل، هذا جوازي وهذي التأشيرة.', tr: 'tfaḍḍal, hādha jawāzi w-hādhi t-taʾshīra.', en: 'Here you are: my passport and my visa.' },
    { who: 'l', f: 'مَا سَبَبُ الزِّيَارَةِ؟', d: 'وش سبب الزيارة؟', tr: 'wish sabab az-ziyāra?', en: 'What is the reason for your visit?' },
    { who: 't', f: 'السِّيَاحَةُ. سَأَزُورُ الرِّيَاضَ وَالعُلَا.', d: 'سياحة. بزور الرياض والعلا.', tr: 'siyāḥa. bazūr ar-riyāḍ w-al-ʿula.', en: 'Tourism. I will visit Riyadh and AlUla.' },
    { who: 'l', f: 'كَمْ يَوْماً سَتَبْقَى؟', d: 'كم يوم بتجلس؟', tr: 'kam yōm bitijlis?', en: 'How many days will you stay?' },
    { who: 't', f: 'عَشَرَةَ أَيَّامٍ.', d: 'عشرة أيام.', tr: 'ʿashara ayyām.', en: 'Ten days.' },
    { who: 'l', f: 'حَسَناً، رِحْلَةً سَعِيدَةً.', d: 'تمام، الله يحييك، رحلة سعيدة.', tr: 'tamām, allāh yḥayyīk, riḥla saʿīda.', en: 'Fine. Welcome, and have a good trip.' }
  ],
  tip: { ar: 'في اللهجة: «يجلس» تعني يبقى أو يقيم، لا الجلوس فقط.', en: 'In the dialect «yijlis» (to sit) also means to stay somewhere.' } },

{ id: 'hotel', cat: 'basics', ar: 'فِي الفُنْدُقِ', en: 'At the hotel', roles: { t: ['نزيلة', 'Guest'], l: ['موظف الاستقبال', 'Receptionist'] },
  lines: [
    { who: 't', f: 'مَسَاءُ الخَيْرِ، عِنْدِي حَجْزٌ بِاسْمِ سَارَةَ.', d: 'مساء الخير، عندي حجز باسم سارة.', tr: 'masāʾ al-khēr, ʿindi ḥajz b-ism sāra.', en: 'Good evening, I have a booking under the name Sara.' },
    { who: 'l', f: 'مَسَاءُ النُّورِ. لَحْظَةً مِنْ فَضْلِكِ… نَعَمْ، غُرْفَةٌ لِثَلَاثِ لَيَالٍ.', d: 'مسا النور. لحظة لو سمحتي… إيه، غرفة لثلاث ليالي.', tr: 'masa n-nūr. laḥẓa law samaḥti… ēh, ghurfa li-thalāth layāli.', en: 'Good evening. One moment, please… yes, a room for three nights.' },
    { who: 't', f: 'هَلِ الفُطُورُ مَشْمُولٌ؟', d: 'الفطور داخل؟', tr: 'al-fuṭūr dākhil?', en: 'Is breakfast included?' },
    { who: 'l', f: 'نَعَمْ، مِنَ السَّادِسَةِ إِلَى العَاشِرَةِ صَبَاحاً.', d: 'إيه، من الساعة ست لين عشر الصبح.', tr: 'ēh, min as-sāʿa sitt lēn ʿashr aṣ-ṣubḥ.', en: 'Yes, from six to ten in the morning.' },
    { who: 't', f: 'وَمَا كَلِمَةُ سِرِّ الإِنْتَرْنِتْ؟', d: 'وش رمز الواي فاي؟', tr: 'wish ramz al-wāy fāy?', en: 'And what is the Wi-Fi password?' },
    { who: 'l', f: 'مَكْتُوبَةٌ عَلَى البِطَاقَةِ. إِقَامَةً طَيِّبَةً!', d: 'مكتوب على الكرت. نوّرتينا!', tr: 'maktūb ʿala l-kart. nawwartīna!', en: 'It is written on the key card. Enjoy your stay!' }
  ],
  tip: { ar: '«نوّرتنا» أي أضأت المكان بحضورك، وتقال للضيف ترحيباً.', en: '«Nawwartina» (you lit up our place) is a warm way to welcome a guest.' } },

{ id: 'food', cat: 'basics', ar: 'فِي المَطْعَمِ', en: 'At the restaurant', roles: { t: ['زبون', 'Customer'], l: ['النادل', 'Waiter'] },
  lines: [
    { who: 'l', f: 'أَهْلاً، تَفَضَّلْ. مَاذَا تَطْلُبُ؟', d: 'هلا، تفضل. وش تطلب؟', tr: 'hala, tfaḍḍal. wish taṭlub?', en: 'Hello, go ahead. What would you like?' },
    { who: 't', f: 'مَا أَشْهَرُ طَبَقٍ عِنْدَكُمْ؟', d: 'وش أشهر أكلة عندكم؟', tr: 'wish ashhar akla ʿindakum?', en: 'What is your most famous dish?' },
    { who: 'l', f: 'الكَبْسَةُ بِاللَّحْمِ، وَهِيَ طَبَقُنَا الشَّعْبِيُّ.', d: 'الكبسة باللحم، أكلتنا الشعبية.', tr: 'al-kabsa bil-laḥam, aklatna sh-shaʿbiyya.', en: 'Kabsa with meat: our national dish.' },
    { who: 't', f: 'أُرِيدُ صَحْناً مِنْهَا، مِنْ غَيْرِ فُلْفُلٍ حَارٍّ مِنْ فَضْلِكَ.', d: 'أبغى صحن، بدون حار لو سمحت.', tr: 'abgha ṣaḥn, bidūn ḥārr law samaḥt.', en: 'I would like a plate, not spicy, please.' },
    { who: 'l', f: 'حَاضِرٌ. وَمَاذَا تَشْرَبُ؟', d: 'أبشر. وش تشرب؟', tr: 'abshir. wish tishrab?', en: 'Certainly. And to drink?' },
    { who: 't', f: 'مَاءً وَلَبَناً. وَالحِسَابَ بَعْدَ الأَكْلِ مِنْ فَضْلِكَ.', d: 'موية ولبن. والحساب بعد الأكل لو سمحت.', tr: 'mōya w-laban. w-al-ḥsāb baʿd al-akl law samaḥt.', en: 'Water and laban (buttermilk). And the bill after the meal, please.' }
  ],
  tip: { ar: '«أبشر» جواب سعودي معناه: طلبك مُجاب وبكل سرور.', en: '«Abshir» is the Saudi “at your service”: your request is granted with pleasure.' } },

{ id: 'taxi', cat: 'move', ar: 'فِي سَيَّارَةِ الأُجْرَةِ', en: 'In a taxi', roles: { t: ['راكب', 'Passenger'], l: ['السائق', 'Driver'] },
  lines: [
    { who: 't', f: 'السَّلَامُ عَلَيْكُمْ، أُرِيدُ الذَّهَابَ إِلَى البَلَدِ فِي جُدَّةَ.', d: 'السلام عليكم، أبغى البلد لو سمحت.', tr: 'as-salāmu ʿalaykum, abgha l-balad law samaḥt.', en: 'Hello, I want to go to Al-Balad (old Jeddah), please.' },
    { who: 'l', f: 'وَعَلَيْكُمُ السَّلَامُ، تَفَضَّلِ ارْكَبْ.', d: 'وعليكم السلام، حيّاك، اركب.', tr: 'wa ʿalaykum as-salām, ḥayyāk, irkab.', en: 'Welcome, get in.' },
    { who: 't', f: 'كَمِ الأُجْرَةُ تَقْرِيباً؟', d: 'كم تقريباً المشوار؟', tr: 'kam taqrīban al-mishwār?', en: 'About how much is the ride?' },
    { who: 'l', f: 'نَحْوَ أَرْبَعِينَ رِيَالاً.', d: 'حوالي أربعين ريال.', tr: 'ḥawāli arbaʿīn riyāl.', en: 'About forty riyals.' },
    { who: 't', f: 'حَسَناً. مِنْ فَضْلِكَ، قِفْ هُنَا.', d: 'طيب. لو سمحت، وقّف هنا.', tr: 'ṭayyib. law samaḥt, waggif hina.', en: 'OK. Please stop here.' },
    { who: 'l', f: 'وَصَلْنَا، الحَمْدُ لِلَّهِ عَلَى السَّلَامَةِ.', d: 'وصلنا، الحمد لله على السلامة.', tr: 'wiṣalna, al-ḥamdu lillāh ʿala s-salāma.', en: 'Here we are. Thank God you arrived safely.' }
  ],
  tip: { ar: '«الحمد لله على السلامة» تقال لكل من وصل من سفر أو مشوار، والرد: «الله يسلمك».', en: 'Say «al-ḥamdu lillāh ʿala s-salāma» to anyone who has just arrived; the reply is «allāh yisallimak».' } },

{ id: 'way', cat: 'move', ar: 'السُّؤَالُ عَنِ الطَّرِيقِ', en: 'Asking the way', roles: { t: ['سائحة', 'Visitor'], l: ['رجل في الشارع', 'Passer-by'] },
  lines: [
    { who: 't', f: 'عَفْواً، أَيْنَ المَتْحَفُ الوَطَنِيُّ؟', d: 'لو سمحت، وين المتحف الوطني؟', tr: 'law samaḥt, wēn al-matḥaf al-waṭani?', en: 'Excuse me, where is the National Museum?' },
    { who: 'l', f: 'امْشِي مُسْتَقِيماً، ثُمَّ خُذِي أَوَّلَ شَارِعٍ يَمِيناً.', d: 'امشي سيدا، وبعدين أول شارع يمين.', tr: 'imshi sīda, w-baʿdēn awwal shāriʿ yimīn.', en: 'Walk straight on, then take the first street on the right.' },
    { who: 't', f: 'هَلْ هُوَ بَعِيدٌ؟', d: 'بعيد؟', tr: 'baʿīd?', en: 'Is it far?' },
    { who: 'l', f: 'لَا، قَرِيبٌ جِدّاً، خَمْسُ دَقَائِقَ مَشْياً.', d: 'لا، قريب مرة، خمس دقايق مشي.', tr: 'la, garīb marra, khams dagāyig mashi.', en: 'No, very close: five minutes on foot.' },
    { who: 't', f: 'شُكْراً جَزِيلاً.', d: 'مشكور، يعطيك العافية.', tr: 'mashkūr, yaʿṭīk al-ʿāfya.', en: 'Thank you very much.' },
    { who: 'l', f: 'عَفْواً، فِي أَمَانِ اللَّهِ.', d: 'العفو، الله يعافيك.', tr: 'al-ʿafu, allāh yʿāfīk.', en: 'You are welcome. Go safely.' }
  ],
  tip: { ar: '«سيدا» يعني إلى الأمام مباشرة، و«مرة» يعني جداً.', en: '«Sīda» means straight ahead, and «marra» means very.' } },

{ id: 'souq', cat: 'move', ar: 'فِي السُّوقِ', en: 'Bargaining in the souq', roles: { t: ['سائح', 'Visitor'], l: ['البائع', 'Seller'] },
  lines: [
    { who: 't', f: 'بِكَمْ هَذِهِ السَّجَّادَةُ؟', d: 'بكم هذي الزولية؟', tr: 'bikam hādhi z-zūliyya?', en: 'How much is this rug?' },
    { who: 'l', f: 'بِخَمْسِمِئَةِ رِيَالٍ.', d: 'بخمسمية ريال.', tr: 'bi-khamsimiyya riyāl.', en: 'Five hundred riyals.' },
    { who: 't', f: 'غَالِيَةٌ! هَلْ تَبِيعُهَا بِثَلَاثِمِئَةٍ؟', d: 'غالية! تبيعها بثلاثمية؟', tr: 'ghālya! tbīʿha bi-thalāthmiyya?', en: 'Expensive! Will you sell it for three hundred?' },
    { who: 'l', f: 'لَا، وَلَكِنْ آخِرُ سِعْرٍ أَرْبَعُمِئَةٍ.', d: 'لا والله، بس آخر سعر أربعمية.', tr: 'la wallah, bass ākhir siʿr arbaʿmiyya.', en: 'No, but my last price is four hundred.' },
    { who: 't', f: 'اتَّفَقْنَا. هَلْ أَدْفَعُ بِالبِطَاقَةِ؟', d: 'تم. فيه شبكة؟', tr: 'tamm. fīh shabaka?', en: 'Deal. Can I pay by card?' },
    { who: 'l', f: 'نَعَمْ، تَفَضَّلْ. مَبْرُوكٌ عَلَيْكَ!', d: 'إيه فيه شبكة، تفضل. مبروك عليك!', tr: 'ēh fīh shabaka, tfaḍḍal. mabrūk ʿalēk!', en: 'Yes, here you go. Enjoy it!' }
  ],
  tip: { ar: 'في السعودية يسمّون الدفع بالبطاقة «شبكة»، و«الزولية» هي السجادة.', en: 'Saudis call card payment «shabaka» (the network); a rug is a «zūliyya».' } },

{ id: 'alula', cat: 'tour', ar: 'فِي الحِجْرِ بِالعُلَا', en: 'At Hegra in AlUla', roles: { t: ['سائح', 'Visitor'], l: ['مرشدة سياحية', 'Tour guide'] },
  lines: [
    { who: 't', f: 'مَا هَذِهِ المَقَابِرُ المَنْحُوتَةُ فِي الصَّخْرِ؟', d: 'وش هالمقابر المنحوتة في الصخر؟', tr: 'wish hal-magābir al-manḥūta fi ṣ-ṣakhr?', en: 'What are these tombs carved in the rock?' },
    { who: 'l', f: 'هَذِهِ الحِجْرُ، نَحَتَهَا الأَنْبَاطُ قَبْلَ نَحْوِ أَلْفَيْ سَنَةٍ.', d: 'هذي الحِجر، نحتوها الأنباط قبل ألفين سنة تقريباً.', tr: 'hādhi l-ḥijr, naḥatūha l-anbāṭ gabl alfēn sana taqrīban.', en: 'This is Hegra; the Nabataeans carved it about two thousand years ago.' },
    { who: 't', f: 'هَلْ يُمْكِنُنِي التَّصْوِيرُ هُنَا؟', d: 'أقدر أصوّر هنا؟', tr: 'agdar aṣawwir hina?', en: 'May I take photos here?' },
    { who: 'l', f: 'نَعَمْ، وَلَكِنْ لَا تَلْمِسِ الجُدْرَانَ مِنْ فَضْلِكَ.', d: 'إيه، بس لا تلمس الجدران لو سمحت.', tr: 'ēh, bass la tilmis al-judrān law samaḥt.', en: 'Yes, but please do not touch the walls.' },
    { who: 't', f: 'مَتَى تَبْدَأُ الجَوْلَةُ القَادِمَةُ؟', d: 'متى الجولة الجاية؟', tr: 'mita l-jōla l-jāya?', en: 'When does the next tour start?' },
    { who: 'l', f: 'بَعْدَ نِصْفِ سَاعَةٍ، مِنْ عِنْدِ بَوَّابَةِ الزُّوَّارِ.', d: 'بعد نص ساعة، من عند بوابة الزوار.', tr: 'baʿd nuṣṣ sāʿa, min ʿind bawwābat az-zuwwār.', en: 'In half an hour, from the visitors’ gate.' }
  ],
  tip: { ar: 'في كثير من مناطق السعودية تُنطق القاف قريبة من «g» الإنجليزية: قريب ← «garīb»، أقدر ← «agdar».', en: 'In much of Saudi Arabia «q» is said like «g»: garīb (near), agdar (I can).' } },

{ id: 'pharmacy', cat: 'tour', ar: 'فِي الصَّيْدَلِيَّةِ', en: 'At the pharmacy', roles: { t: ['سائحة', 'Visitor'], l: ['الصيدلي', 'Pharmacist'] },
  lines: [
    { who: 't', f: 'عِنْدِي صُدَاعٌ وَحَرَارَةٌ.', d: 'عندي صداع وحرارة.', tr: 'ʿindi ṣudāʿ w-ḥarāra.', en: 'I have a headache and a fever.' },
    { who: 'l', f: 'مُنْذُ مَتَى؟', d: 'من متى؟', tr: 'min mita?', en: 'Since when?' },
    { who: 't', f: 'مُنْذُ أَمْسِ.', d: 'من أمس.', tr: 'min ams.', en: 'Since yesterday.' },
    { who: 'l', f: 'هَذَا خَافِضٌ لِلْحَرَارَةِ، خُذِيهِ كَمَا هُوَ مَكْتُوبٌ عَلَى العُلْبَةِ، بَعْدَ الأَكْلِ.', d: 'هذا خافض حرارة، خذيه مثل ما مكتوب على العلبة، بعد الأكل.', tr: 'hādha khāfiḍ ḥarāra, khudhīh mithl ma maktūb ʿala l-ʿilba, baʿd al-akl.', en: 'This brings fever down. Take it as written on the box, after eating.' },
    { who: 't', f: 'وَإِذَا لَمْ أَتَحَسَّنْ؟', d: 'وإذا ما تحسنت؟', tr: 'w-idha ma taḥassant?', en: 'And if I do not get better?' },
    { who: 'l', f: 'اذْهَبِي إِلَى الطَّبِيبِ، وَفِي الطَّوَارِئِ اتَّصِلِي بِالإِسْعَافِ عَلَى ٩٩٧.', d: 'روحي للدكتور، وإذا طوارئ اتصلي على الإسعاف ٩٩٧.', tr: 'rūḥi lid-daktūr, w-idha ṭawāriʾ ittaṣli ʿala l-isʿāf 997.', en: 'See a doctor; in an emergency call the ambulance on 997.' }
  ],
  tip: { ar: 'رقم الإسعاف في السعودية ٩٩٧، والطوارئ الموحّد ٩١١.', en: 'In Saudi Arabia the ambulance number is 997, and the unified emergency number is 911.' } },

{ id: 'lost', cat: 'tour', ar: 'طَلَبُ المُسَاعَدَةِ', en: 'Asking for help', roles: { t: ['سائح', 'Visitor'], l: ['رجل الأمن', 'Police officer'] },
  lines: [
    { who: 't', f: 'مِنْ فَضْلِكَ، أَضَعْتُ حَقِيبَتِي.', d: 'لو سمحت، ضاعت شنطتي.', tr: 'law samaḥt, ḍāʿat shanṭati.', en: 'Excuse me, I have lost my bag.' },
    { who: 'l', f: 'أَيْنَ رَأَيْتَهَا آخِرَ مَرَّةٍ؟', d: 'وين آخر مرة شفتها؟', tr: 'wēn ākhir marra shiftaha?', en: 'Where did you last see it?' },
    { who: 't', f: 'فِي المَقْهَى عِنْدَ المَحَطَّةِ.', d: 'في الكوفي عند المحطة.', tr: 'fi l-kōfi ʿind al-maḥaṭṭa.', en: 'In the café by the station.' },
    { who: 'l', f: 'مَا لَوْنُهَا؟ وَمَاذَا فِيهَا؟', d: 'وش لونها؟ ووش فيها؟', tr: 'wish lōnha? w-wish fīha?', en: 'What colour is it, and what is in it?' },
    { who: 't', f: 'سَوْدَاءُ، وَفِيهَا جَوَازِي وَهَاتِفِي.', d: 'سودا، وفيها جوازي وجوالي.', tr: 'sōda, w-fīha jawāzi w-jawwāli.', en: 'Black, with my passport and my phone in it.' },
    { who: 'l', f: 'لَا تَقْلَقْ، سَنَتَّصِلُ بِالمَقْهَى الآنَ.', d: 'لا تشيل هم، بنتصل على الكوفي الحين.', tr: 'la tshīl hamm, bnittiṣil ʿala l-kōfi l-ḥīn.', en: 'Do not worry, we will call the café now.' }
  ],
  tip: { ar: '«لا تشيل هم» أي لا تحمل همّاً، و«الحين» تعني الآن.', en: '«La tshīl hamm» means don’t worry (don’t carry worry); «al-ḥīn» means now.' } },

{ id: 'coffee', cat: 'host', ar: 'القَهْوَةُ فِي المَجْلِسِ', en: 'Coffee in the majlis', roles: { t: ['ضيف', 'Guest'], l: ['المضيف', 'Host'] },
  lines: [
    { who: 'l', f: 'حَيَّاكَ اللَّهُ، تَفَضَّلِ اجْلِسْ.', d: 'حيّاك الله، تفضل استريح.', tr: 'ḥayyāk allāh, tfaḍḍal istarīḥ.', en: 'Welcome, please have a seat.' },
    { who: 't', f: 'اللَّهُ يُحَيِّيكَ.', d: 'الله يحييك.', tr: 'allāh yḥayyīk.', en: 'Thank you (may God give you life too).' },
    { who: 'l', f: 'تَفَضَّلِ القَهْوَةَ وَالتَّمْرَ.', d: 'تفضل القهوة والتمر.', tr: 'tfaḍḍal al-gahwa w-at-tamr.', en: 'Please, have coffee and dates.' },
    { who: 't', f: 'شُكْراً، مَا أَطْيَبَ هَذَا التَّمْرَ!', d: 'تسلم، التمر مرة لذيذ!', tr: 'tislam, at-tamr marra ladhīdh!', en: 'Thank you, these dates are delicious!' },
    { who: 'l', f: 'هَذَا مِنْ تَمْرِ المَدِينَةِ. أَصُبُّ لَكَ فِنْجَاناً آخَرَ؟', d: 'هذا تمر من المدينة. أصب لك؟', tr: 'hādha tamr min al-madīna. aṣubb lak?', en: 'These dates are from Madinah. Shall I pour you another cup?' },
    { who: 't', f: 'يَكْفِي، شُكْراً.', d: 'بس، تسلم.', tr: 'bass, tislam.', en: 'That is enough, thank you.' }
  ],
  tip: { ar: 'إذا اكتفيت من القهوة فهزّ الفنجان هزّاً خفيفاً وأنت تعيده إلى المضيف.', en: 'When you have had enough coffee, gently shake the little cup as you hand it back to the host.' } },

{ id: 'invite', cat: 'host', ar: 'دَعْوَةٌ إِلَى البَيْتِ', en: 'An invitation home', roles: { t: ['سائحة', 'Visitor'], l: ['جارة سعودية', 'Saudi neighbour'] },
  lines: [
    { who: 'l', f: 'نَتَشَرَّفُ بِزِيَارَتِكِ لَنَا يَوْمَ الجُمُعَةِ عَلَى الغَدَاءِ.', d: 'ودنا تزورينا يوم الجمعة على الغدا.', tr: 'waddana tzūrīna yōm al-jumʿa ʿala l-ghada.', en: 'We would love you to visit us on Friday for lunch.' },
    { who: 't', f: 'شُكْراً عَلَى الدَّعْوَةِ! فِي أَيِّ سَاعَةٍ؟', d: 'مشكورة على العزيمة! الساعة كم؟', tr: 'mashkūra ʿala l-ʿazīma! as-sāʿa kam?', en: 'Thank you for the invitation! What time?' },
    { who: 'l', f: 'بَعْدَ صَلَاةِ الجُمُعَةِ، نَحْوَ السَّاعَةِ الوَاحِدَةِ.', d: 'بعد صلاة الجمعة، تقريباً الساعة وحدة.', tr: 'baʿd ṣalāt al-jumʿa, taqrīban as-sāʿa waḥda.', en: 'After the Friday prayer, around one o’clock.' },
    { who: 't', f: 'هَلْ أُحْضِرُ شَيْئاً مَعِي؟', d: 'أجيب معي شي؟', tr: 'ajīb maʿi shay?', en: 'Shall I bring something?' },
    { who: 'l', f: 'لَا، حُضُورُكِ يَكْفِي.', d: 'لا والله، بس تعالي ونوّرينا.', tr: 'la wallah, bass taʿāli w-nawwirīna.', en: 'No, just come and brighten our home.' },
    { who: 't', f: 'إِنْ شَاءَ اللَّهُ، أَرَاكِ يَوْمَ الجُمُعَةِ.', d: 'إن شاء الله، أشوفك الجمعة.', tr: 'in shāʾ allāh, ashūfik al-jumʿa.', en: 'God willing, see you on Friday.' }
  ],
  tip: { ar: '«العزيمة» في اللهجة هي الدعوة إلى الطعام.', en: 'In the dialect an invitation to a meal is an «ʿazīma».' } },

{ id: 'makkah', cat: 'hajj', ar: 'فِي المَسْجِدِ الحَرَامِ', en: 'In the Grand Mosque, Makkah', roles: { t: ['معتمر', 'Pilgrim'], l: ['مرشد في الحرم', 'Mosque guide'] },
  lines: [
    { who: 't', f: 'السَّلَامُ عَلَيْكُمْ، مِنْ أَيْنَ يَبْدَأُ الطَّوَافُ؟', d: 'السلام عليكم، من وين يبدأ الطواف؟', tr: 'as-salāmu ʿalaykum, min wēn yibdaʾ aṭ-ṭawāf?', en: 'Peace be upon you. Where does the tawaf begin?' },
    { who: 'l', f: 'وَعَلَيْكُمُ السَّلَامُ، يَبْدَأُ مِنَ الحَجَرِ الأَسْوَدِ، وَعَلَى الجِدَارِ ضَوْءٌ أَخْضَرُ يَدُلُّكَ.', d: 'وعليكم السلام، من عند الحجر الأسود، تشوف ضوء أخضر يدلك.', tr: 'wa ʿalaykum as-salām, min ʿind al-ḥajar al-aswad, tshūf ḍōʾ akhḍar ydillak.', en: 'It begins at the Black Stone; a green light on the wall shows you the line.' },
    { who: 't', f: 'وَكَمْ شَوْطاً أَطُوفُ؟', d: 'كم شوط؟', tr: 'kam shōṭ?', en: 'How many circuits do I make?' },
    { who: 'l', f: 'سَبْعَةَ أَشْوَاطٍ، ثُمَّ تُصَلِّي رَكْعَتَيْنِ، ثُمَّ تَسْعَى بَيْنَ الصَّفَا وَالمَرْوَةِ.', d: 'سبعة أشواط، وبعدها تصلي ركعتين، وبعدين تسعى بين الصفا والمروة.', tr: 'sabʿa ashwāṭ, w-baʿdaha tṣalli rakʿatēn, w-baʿdēn tisʿa bēn aṣ-ṣafa w-al-marwa.', en: 'Seven circuits; then pray two rak‘ahs, then walk between Safa and Marwa.' },
    { who: 't', f: 'وَأَيْنَ المَسْعَى؟', d: 'وين المسعى؟', tr: 'wēn al-masʿa?', en: 'Where is the Mas‘a?' },
    { who: 'l', f: 'مِنْ هُنَا، اتَّبِعِ اللَّوْحَاتِ المَكْتُوبَ عَلَيْهَا «المَسْعَى». تَقَبَّلَ اللَّهُ مِنْكَ.', d: 'من هنا، امشِ مع اللوحات اللي مكتوب عليها المسعى. تقبل الله منك.', tr: 'min hina, imshi maʿ al-lōḥāt illi maktūb ʿalēha l-masʿa. taqabbal allāh minnak.', en: 'This way; follow the signs that say «Mas‘a». May God accept it from you.' }
  ],
  tip: { ar: 'يقال للمعتمر بعد عمرته: «تقبّل الله منك»، والرد: «منا ومنكم».', en: 'After an umrah people say «taqabbal allāh minnak»; the reply is «minna w-minkum».' } },

{ id: 'madinah', cat: 'hajj', ar: 'فِي المَسْجِدِ النَّبَوِيِّ', en: 'In the Prophet’s Mosque, Madinah', roles: { t: ['زائر', 'Visitor'], l: ['مرشد في المسجد', 'Mosque guide'] },
  lines: [
    { who: 't', f: 'كَيْفَ أَزُورُ الرَّوْضَةَ الشَّرِيفَةَ؟', d: 'كيف أزور الروضة؟', tr: 'kēf azūr ar-rōḍa?', en: 'How can I visit the Rawdah?' },
    { who: 'l', f: 'احْجِزْ مَوْعِداً فِي تَطْبِيقِ «نُسُك» أَوَّلاً.', d: 'لازم تحجز موعد في تطبيق نسك أول.', tr: 'lāzim tiḥjiz mawʿid fi taṭbīq nusuk awwal.', en: 'First book a time in the Nusuk app.' },
    { who: 't', f: 'وَمِنْ أَيِّ بَابٍ أَدْخُلُ؟', d: 'ومن أي باب أدخل؟', tr: 'w-min ay bāb adkhul?', en: 'And which gate do I go in by?' },
    { who: 'l', f: 'يُكْتَبُ ذَلِكَ فِي التَّصْرِيحِ، وَاحْضُرْ قَبْلَ مَوْعِدِكَ بِقَلِيلٍ.', d: 'مكتوب في التصريح، وتعال قبل موعدك بشوي.', tr: 'maktūb fi t-taṣrīḥ, w-taʿāl gabl mawʿidak bshwayy.', en: 'It is written on your permit; come a little before your time.' },
    { who: 't', f: 'وَأَيْنَ أُسَلِّمُ عَلَى النَّبِيِّ ﷺ؟', d: 'ووين أسلم على النبي ﷺ؟', tr: 'w-wēn asallim ʿala n-nabi ﷺ?', en: 'And where do I greet the Prophet ﷺ?' },
    { who: 'l', f: 'عِنْدَ المُوَاجَهَةِ الشَّرِيفَةِ، تَدْخُلُ إِلَيْهَا مِنْ بَابِ السَّلَامِ.', d: 'عند المواجهة الشريفة، تدخل لها من باب السلام.', tr: 'ʿind al-muwājaha sh-sharīfa, tidkhul laha min bāb as-salām.', en: 'At the Muwajaha; you reach it through Bab al-Salam.' }
  ],
  tip: { ar: 'زيارة الروضة الشريفة بموعد مسبق عبر تطبيق «نُسُك».', en: 'Visits to the Rawdah need a booking in advance through the Nusuk app.' } },

{ id: 'quba', cat: 'hajj', ar: 'إِلَى مَسْجِدِ قُبَاءَ', en: 'To Quba Mosque', roles: { t: ['زائرة', 'Visitor'], l: ['السائق', 'Driver'] },
  lines: [
    { who: 't', f: 'أُرِيدُ الذَّهَابَ إِلَى مَسْجِدِ قُبَاءَ.', d: 'أبغى مسجد قباء لو سمحت.', tr: 'abgha masjid gubāʾ law samaḥt.', en: 'I would like to go to Quba Mosque.' },
    { who: 'l', f: 'حَاضِرٌ. هُوَ أَوَّلُ مَسْجِدٍ بُنِيَ فِي الإِسْلَامِ.', d: 'أبشري. ترى هو أول مسجد انبنى في الإسلام.', tr: 'abshiri. tara hu awwal masjid inbana fi l-islām.', en: 'Of course. It is the first mosque built in Islam.' },
    { who: 't', f: 'سَمِعْتُ أَنَّ الصَّلَاةَ فِيهِ كَعُمْرَةٍ.', d: 'سمعت إن الصلاة فيه مثل العمرة؟', tr: 'simiʿt inn aṣ-ṣalāh fīh mithl al-ʿumra?', en: 'I heard that praying there is like an umrah.' },
    { who: 'l', f: 'نَعَمْ، مَنْ تَطَهَّرَ فِي بَيْتِهِ ثُمَّ أَتَاهُ فَصَلَّى فِيهِ كَانَ لَهُ كَأَجْرِ عُمْرَةٍ، كَمَا فِي الحَدِيثِ.', d: 'إيه، اللي يتوضأ في بيته ويجي يصلي فيه له أجر عمرة، مثل ما في الحديث.', tr: 'ēh, illi yitwaḍḍa fi bētih w-yiji yṣalli fīh lah ajr ʿumra, mithl ma fi l-ḥadīth.', en: 'Yes: whoever purifies at home, then comes and prays there, has a reward like an umrah, as the hadith says.' },
    { who: 't', f: 'كَمْ يَبْعُدُ عَنِ المَسْجِدِ النَّبَوِيِّ؟', d: 'كم يبعد عن الحرم؟', tr: 'kam yibʿid ʿan al-ḥaram?', en: 'How far is it from the Prophet’s Mosque?' },
    { who: 'l', f: 'نَحْوَ ثَلَاثَةِ كِيلُومِتْرَاتٍ، وَيُمْكِنُكِ المَشْيُ فِي طَرِيقِ قُبَاءَ.', d: 'تقريباً ثلاثة كيلو، وتقدرين تمشين في ممشى قباء.', tr: 'taqrīban thalātha kīlo, w-tigdirīn timshīn fi mamsha gubāʾ.', en: 'About three kilometres, and you can walk along the Quba walkway.' }
  ],
  tip: { ar: '«ترى» في اللهجة كلمة تنبيه معناها: اعلم أنّ…', en: '«Tara» in the dialect means “you know…, note that…”.' } }
];
