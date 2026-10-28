// رحلة المرافئ — the old harbours through which Arabic travelled by sea.
// Each port: map position (lon, lat), sea, a short reading lesson ([word|meaning] = glossary word), a fact, and questions.
window.SEAS = {
  red:    { ar: 'البَحْرُ الأَحْمَرُ', en: 'Red Sea', c: '#b03a66', t: '#fdecf2' },
  arab:   { ar: 'بَحْرُ العَرَبِ', en: 'Arabian Sea', c: '#0f7f74', t: '#e2f4f1' },
  gulf:   { ar: 'الخَلِيجُ العَرَبِيُّ', en: 'Arabian Gulf', c: '#a2650c', t: '#fdf1da' },
  ocean:  { ar: 'المُحِيطُ الهِنْدِيُّ', en: 'Indian Ocean', c: '#1f6f99', t: '#e3f3fb' },
  rum:    { ar: 'بَحْرُ الرُّومِ', en: 'Mediterranean (Sea of the Romans)', c: '#4552c9', t: '#ebedfd' },
  legend: { ar: 'جُزُرُ الخَيَالِ', en: 'Islands of legend', c: '#7a46b8', t: '#f1ecfb' }
};

window.PORTS = [
{ id: 'aden', ar: 'عَدَنُ', en: 'Aden', sea: 'arab', lon: 45.03, lat: 12.78, icon: '⛵',
  text: [
    { ar: 'عَدَنُ [مِينَاءٌ|a port] قَدِيمٌ فِي جَنُوبِ الجَزِيرَةِ العَرَبِيَّةِ، عِنْدَ بَابِ البَحْرِ الأَحْمَرِ. كَانَتِ [السُّفُنُ|ships] تَأْتِيهِ مِنَ الهِنْدِ وَأَفْرِيقْيَا، فَيَلْتَقِي فِيهِ [التُّجَّارُ|merchants] مِنْ كُلِّ مَكَانٍ.',
      en: 'Aden is an old port in the south of the Arabian Peninsula, at the gate of the Red Sea. Ships came to it from India and Africa, and merchants from everywhere met there.' },
    { ar: 'وَعَدَنُ قَلِيلَةُ المَطَرِ، فَبَنَى أَهْلُهَا [صَهَارِيجَ|cisterns] كَبِيرَةً فِي الجَبَلِ، تَجْمَعُ مَاءَ السُّيُولِ لِلنَّاسِ وَالسُّفُنِ.',
      en: 'Aden gets little rain, so its people built large cisterns in the mountain to collect flood water for people and ships.' }
  ],
  fact: { ar: 'صَهَارِيجُ عَدَنَ مَا زَالَتْ قَائِمَةً إِلَى اليَوْمِ.', en: 'The cisterns of Aden still stand today.' },
  quiz: [
    { t: 'mcq', q: 'أَيْنَ تَقَعُ عَدَنُ؟', qen: 'Where is Aden?', o: ['فِي جَنُوبِ الجَزِيرَةِ العَرَبِيَّةِ', 'فِي شَمَالِ أَفْرِيقْيَا', 'فِي الهِنْدِ'], a: 0 },
    { t: 'tf', q: 'كَانَتِ السُّفُنُ تَأْتِي عَدَنَ مِنَ الهِنْدِ وَأَفْرِيقْيَا.', qen: 'Ships came to Aden from India and Africa.', a: true },
    { t: 'mcq', q: 'لِمَاذَا بُنِيَتِ الصَّهَارِيجُ؟', qen: 'Why were the cisterns built?', o: ['لِحِفْظِ البَضَائِعِ', 'لِجَمْعِ مَاءِ السُّيُولِ', 'لِصِنَاعَةِ السُّفُنِ'], a: 1 }
  ] },

{ id: 'mokha', ar: 'المُخَا', en: 'Mocha', sea: 'red', lon: 43.25, lat: 13.32, icon: '☕',
  text: [
    { ar: 'المُخَا مِينَاءٌ عَلَى سَاحِلِ اليَمَنِ فِي البَحْرِ الأَحْمَرِ. قَبْلَ نَحْوِ أَرْبَعِمِئَةِ سَنَةٍ كَانَتْ تَخْرُجُ مِنْهُ [القَهْوَةُ|coffee] إِلَى العَالَمِ كُلِّهِ.',
      en: 'Mocha is a port on the coast of Yemen on the Red Sea. About four hundred years ago, coffee left from it for the whole world.' },
    { ar: '[وَاشْتَهَرَ|became famous] اسْمُهُ حَتَّى صَارَ النَّاسُ فِي أُورُوبَّا يُسَمُّونَ نَوْعاً مِنَ القَهْوَةِ «مُوكَا».',
      en: 'Its name became so famous that people in Europe named a kind of coffee “mocha”.' }
  ],
  fact: { ar: 'كَلِمَةُ «Mocha» فِي الإِنْجِلِيزِيَّةِ جَاءَتْ مِنِ اسْمِ هَذَا المِينَاءِ.', en: 'The English word “mocha” comes from the name of this port.' },
  quiz: [
    { t: 'mcq', q: 'بِمَاذَا اشْتَهَرَ مِينَاءُ المُخَا؟', qen: 'What was Mocha famous for?', o: ['بِالقَهْوَةِ', 'بِالذَّهَبِ', 'بِالسَّمَكِ'], a: 0 },
    { t: 'tf', q: 'المُخَا عَلَى سَاحِلِ الخَلِيجِ العَرَبِيِّ.', qen: 'Mocha is on the coast of the Arabian Gulf.', a: false },
    { t: 'mcq', q: 'مَاذَا يَعْنِي «مُوكَا» فِي أُورُوبَّا؟', qen: 'What does “mocha” mean in Europe?', o: ['نَوْعٌ مِنَ السُّفُنِ', 'نَوْعٌ مِنَ القَهْوَةِ', 'اسْمُ مَدِينَةٍ'], a: 1 }
  ] },

{ id: 'athar', ar: 'عَثَّرُ', en: 'Athar', sea: 'red', lon: 42.68, lat: 17.22, icon: '🪙',
  text: [
    { ar: 'عَثَّرُ مَدِينَةٌ قَدِيمَةٌ عَلَى سَاحِلِ جَازَانَ، كَانَ لَهَا مِينَاءٌ عِنْدَ [مَصَبِّ|the mouth of] وَادِي بِيشٍ. رَبَطَتْ جَنُوبَ الجَزِيرَةِ وَالحِجَازَ بِمَوَانِئِ أَفْرِيقْيَا الشَّرْقِيَّةِ.',
      en: 'Athar is an old city on the coast of Jazan. It had a port at the mouth of Wadi Baysh, and it linked southern Arabia and the Hijaz with the ports of East Africa.' },
    { ar: 'وَفِي العَصْرِ العَبَّاسِيِّ ضُرِبَتْ فِيهَا [عُمْلَةٌ|a coin] ذَهَبِيَّةٌ مَشْهُورَةٌ اسْمُهَا «الدِّينَارُ العَثَّرِيُّ». وَبَقِيَتِ المَدِينَةُ عَامِرَةً حَتَّى القَرْنِ الرَّابِعِ الهِجْرِيِّ.',
      en: 'In the Abbasid era a famous gold coin called the “Athari dinar” was minted there. The city stayed busy until the 4th century AH.' }
  ],
  fact: { ar: 'كَشَفَتِ السُّيُولُ فِي عَثَّرَ نَحْوَ ثَلَاثِينَ بِئْراً قَدِيمَةً.', en: 'Floods in Athar uncovered about thirty ancient wells.' },
  quiz: [
    { t: 'mcq', q: 'فِي أَيِّ مِنْطَقَةٍ تَقَعُ عَثَّرُ؟', qen: 'In which region is Athar?', o: ['جَازَانَ', 'تَبُوكَ', 'الأَحْسَاءِ'], a: 0 },
    { t: 'mcq', q: 'مَا اسْمُ العُمْلَةِ الَّتِي ضُرِبَتْ فِيهَا؟', qen: 'What was the coin minted there called?', o: ['الدِّرْهَمُ البَصْرِيُّ', 'الدِّينَارُ العَثَّرِيُّ', 'الرِّيَالُ'], a: 1 },
    { t: 'tf', q: 'رَبَطَتْ عَثَّرُ الجَزِيرَةَ بِمَوَانِئِ أَفْرِيقْيَا الشَّرْقِيَّةِ.', qen: 'Athar linked Arabia with the ports of East Africa.', a: true }
  ] },

{ id: 'sirrain', ar: 'السِّرَّيْنُ', en: 'Al-Sirrain', sea: 'red', lon: 40.55, lat: 19.85, icon: '🏺',
  text: [
    { ar: 'السِّرَّيْنُ مِينَاءٌ قَدِيمٌ جَنُوبَ مُحَافَظَةِ اللِّيثِ، كَانَ مِنْ مَوَانِئِ مَكَّةَ المُكَرَّمَةِ. [ازْدَهَرَ|flourished] فِي القَرْنَيْنِ الخَامِسِ وَالسَّادِسِ الهِجْرِيَّيْنِ، وَوَصَفَهُ الجُغْرَافِيُّونَ بِأَنَّهُ مَدِينَةٌ كَبِيرَةٌ.',
      en: 'Al-Sirrain is an old port south of Al-Lith, one of the ports of Makkah. It flourished in the 5th and 6th centuries AH, and geographers described it as a large city.' },
    { ar: 'وَجَدَ [عُلَمَاءُ الآثَارِ|archaeologists] فِيهِ شَوَاهِدَ قُبُورٍ مَكْتُوبَةً بِخَطٍّ جَمِيلٍ، وَقِطَعاً مِنَ [الخَزَفِ|porcelain] الصِّينِيِّ جَاءَتْ بِهَا السُّفُنُ مِنْ بَعِيدٍ.',
      en: 'Archaeologists found gravestones written in beautiful script there, and pieces of Chinese porcelain that ships had brought from far away.' }
  ],
  fact: { ar: 'خَزَفٌ صِينِيٌّ فِي سَاحِلِ الحِجَازِ: دَلِيلٌ عَلَى طَرِيقِ الحَرِيرِ البَحْرِيِّ.', en: 'Chinese porcelain on the Hijaz coast is evidence of the maritime Silk Road.' },
  quiz: [
    { t: 'mcq', q: 'السِّرَّيْنُ كَانَ مِنْ مَوَانِئِ أَيِّ مَدِينَةٍ؟', qen: 'Al-Sirrain was a port of which city?', o: ['المَدِينَةِ المُنَوَّرَةِ', 'مَكَّةَ المُكَرَّمَةِ', 'الرِّيَاضِ'], a: 1 },
    { t: 'tf', q: 'وُجِدَ فِي السِّرَّيْنِ خَزَفٌ صِينِيٌّ.', qen: 'Chinese porcelain was found at Al-Sirrain.', a: true },
    { t: 'mcq', q: 'مَتَى ازْدَهَرَ المِينَاءُ؟', qen: 'When did the port flourish?', o: ['فِي القَرْنَيْنِ الخَامِسِ وَالسَّادِسِ الهِجْرِيَّيْنِ', 'فِي القَرْنِ العِشْرِينَ', 'قَبْلَ سَبْعَةِ آلَافِ سَنَةٍ'], a: 0 }
  ] },

{ id: 'jeddah', ar: 'جُدَّةُ', en: 'Jeddah', sea: 'red', lon: 39.17, lat: 21.49, icon: '🕋',
  text: [
    { ar: 'صَارَتْ جُدَّةُ مِينَاءَ مَكَّةَ المُكَرَّمَةِ فِي عَهْدِ [الخَلِيفَةِ|the caliph] عُثْمَانَ بْنِ عَفَّانَ رَضِيَ اللهُ عَنْهُ، سَنَةَ سِتٍّ وَعِشْرِينَ لِلْهِجْرَةِ.',
      en: 'Jeddah became the port of Makkah in the time of Caliph Uthman ibn Affan, in the year 26 AH.' },
    { ar: 'وَمُنْذُ ذَلِكَ الوَقْتِ يَصِلُ إِلَيْهَا [الحُجَّاجُ|pilgrims] وَالتُّجَّارُ مِنَ البَحْرِ، فَكَانَتْ بَابَ مَكَّةَ إِلَى العَالَمِ، وَمَا زَالَتْ مِنْ أَكْبَرِ مَوَانِئِ البَحْرِ الأَحْمَرِ.',
      en: 'Since then pilgrims and merchants have arrived there by sea. It was Makkah’s door to the world, and it is still one of the biggest ports on the Red Sea.' }
  ],
  fact: { ar: 'جُدَّةُ التَّارِيخِيَّةُ (البَلَدُ) مُسَجَّلَةٌ فِي قَائِمَةِ التُّرَاثِ العَالَمِيِّ.', en: 'Historic Jeddah (Al-Balad) is on the World Heritage list.' },
  quiz: [
    { t: 'mcq', q: 'فِي عَهْدِ مَنْ صَارَتْ جُدَّةُ مِينَاءَ مَكَّةَ؟', qen: 'Under whom did Jeddah become Makkah’s port?', o: ['عُثْمَانَ بْنِ عَفَّانَ', 'هَارُونَ الرَّشِيدِ', 'صَلَاحِ الدِّينِ'], a: 0 },
    { t: 'tf', q: 'يَصِلُ الحُجَّاجُ إِلَى جُدَّةَ مِنَ البَحْرِ.', qen: 'Pilgrims reach Jeddah by sea.', a: true },
    { t: 'mcq', q: 'جُدَّةُ بَابُ مَكَّةَ إِلَى ...', qen: 'Jeddah is Makkah’s door to ...', o: ['الصَّحْرَاءِ', 'العَالَمِ', 'الجِبَالِ'], a: 1 }
  ] },

{ id: 'jar', ar: 'الجَارُ', en: 'Al-Jar', sea: 'red', lon: 38.55, lat: 23.65, icon: '🌾',
  text: [
    { ar: 'الجَارُ مِينَاءٌ قَدِيمٌ قُرْبَ يَنْبُعَ، جَعَلَهُ الخَلِيفَةُ عُمَرُ بْنُ الخَطَّابِ رَضِيَ اللهُ عَنْهُ مِينَاءً لِلْمَدِينَةِ المُنَوَّرَةِ. وَكَانَتْ تَصِلُ إِلَيْهِ السُّفُنُ [بِالقَمْحِ|wheat] وَالطَّعَامِ.',
      en: 'Al-Jar is an old port near Yanbu. Caliph Umar ibn al-Khattab made it the port of Madinah, and ships reached it carrying wheat and food.' },
    { ar: 'بَقِيَ الجَارُ أَهَمَّ مَوَانِئِ البَحْرِ الأَحْمَرِ قُرُوناً، ثُمَّ [ضَعُفَ|weakened]، فَانْتَقَلَتْ مَكَانَتُهُ إِلَى يَنْبُعَ.',
      en: 'Al-Jar remained the most important Red Sea port for centuries, then it weakened, and its role passed to Yanbu.' }
  ],
  fact: { ar: 'يُنَقِّبُ عُلَمَاءُ الآثَارِ فِي الجَارِ اليَوْمَ، وَوَجَدُوا فِيهِ نُقُوداً وَزُجَاجاً وَخَزَفاً صِينِيّاً.', en: 'Archaeologists dig at Al-Jar today and have found coins, glass and Chinese porcelain.' },
  quiz: [
    { t: 'mcq', q: 'الجَارُ كَانَ مِينَاءَ أَيِّ مَدِينَةٍ؟', qen: 'Al-Jar was the port of which city?', o: ['المَدِينَةِ المُنَوَّرَةِ', 'عَدَنَ', 'غَزَّةَ'], a: 0 },
    { t: 'tf', q: 'انْتَقَلَتْ مَكَانَةُ الجَارِ إِلَى جُدَّةَ.', qen: 'Al-Jar’s role passed to Jeddah.', a: false },
    { t: 'mcq', q: 'مَاذَا كَانَتِ السُّفُنُ تَحْمِلُ إِلَى الجَارِ؟', qen: 'What did ships carry to Al-Jar?', o: ['القَهْوَةَ', 'القَمْحَ وَالطَّعَامَ', 'اللُّؤْلُؤَ'], a: 1 }
  ] },

{ id: 'khuraybah', ar: 'الخُرَيْبَةُ (لُويكِي كُومِي)', en: 'Al-Khuraybah (Leuke Kome)', sea: 'red', lon: 35.15, lat: 28.06, icon: '🏛️',
  text: [
    { ar: 'الخُرَيْبَةُ قَرْيَةُ صَيْدٍ قُرْبَ عَيْنُونَةَ، عِنْدَ مَدْخَلِ خَلِيجِ العَقَبَةِ. وَتَحْتَهَا [آثَارُ|the remains of] مِينَاءٍ قَدِيمٍ لِلْأَنْبَاطِ، سَمَّاهُ الإِغْرِيقُ «لُويكِي كُومِي» أَيِ القَرْيَةُ البَيْضَاءُ.',
      en: 'Al-Khuraybah is a fishing village near Aynuna, at the entrance of the Gulf of Aqaba. Under it lie the remains of an ancient Nabataean port that the Greeks called “Leuke Kome”, the White Village.' },
    { ar: 'كَانَتِ البَضَائِعُ تَنْزِلُ فِيهِ مِنَ السُّفُنِ، ثُمَّ تَحْمِلُهَا [القَوَافِلُ|caravans] عَلَى الجِمَالِ إِلَى مَدِينَةِ البَتْرَاءِ.',
      en: 'Goods were unloaded there from the ships, then caravans carried them on camels to the city of Petra.' }
  ],
  fact: { ar: 'تُنَقِّبُ بَعْثَةٌ سُعُودِيَّةٌ بُولَنْدِيَّةٌ فِي المَوْقِعِ، وَوَجَدَتْ بُرْجَ مُرَاقَبَةٍ وَسُوقاً قَدِيمَةً.', en: 'A Saudi-Polish team excavates the site and has found a watchtower and an old market.' },
  quiz: [
    { t: 'mcq', q: 'مَا مَعْنَى «لُويكِي كُومِي»؟', qen: 'What does “Leuke Kome” mean?', o: ['المَدِينَةُ الكَبِيرَةُ', 'القَرْيَةُ البَيْضَاءُ', 'المِينَاءُ الجَدِيدُ'], a: 1 },
    { t: 'mcq', q: 'إِلَى أَيْنَ كَانَتِ القَوَافِلُ تَحْمِلُ البَضَائِعَ؟', qen: 'Where did the caravans carry the goods?', o: ['إِلَى البَتْرَاءِ', 'إِلَى عَدَنَ', 'إِلَى الهِنْدِ'], a: 0 },
    { t: 'tf', q: 'كَانَ المِينَاءُ لِلْأَنْبَاطِ.', qen: 'The port belonged to the Nabataeans.', a: true }
  ] },

{ id: 'gaza', ar: 'غَزَّةُ', en: 'Gaza', sea: 'rum', lon: 34.45, lat: 31.5, icon: '🌿',
  text: [
    { ar: 'غَزَّةُ مِينَاءٌ قَدِيمٌ عَلَى بَحْرِ الرُّومِ، وَهِيَ نِهَايَةُ [دَرْبِ البَخُورِ|the Incense Road]. كَانَتِ القَوَافِلُ تَحْمِلُ [اللُّبَانَ|frankincense] مِنْ جَنُوبِ الجَزِيرَةِ إِلَيْهَا، ثُمَّ تَأْخُذُهُ السُّفُنُ إِلَى بِلَادِ الرُّومِ.',
      en: 'Gaza is an old port on the Mediterranean, and the end of the Incense Road. Caravans carried frankincense to it from southern Arabia, then ships took it on to the lands of the Romans.' },
    { ar: 'وَكَانَتْ قُرَيْشٌ تَخْرُجُ إِلَيْهَا فِي رِحْلَةِ الصَّيْفِ. وَيُرْوَى أَنَّ هَاشِمَ بْنَ عَبْدِ مَنَافٍ، جَدَّ النَّبِيِّ ﷺ، مَاتَ فِيهَا فِي تِجَارَةٍ، فَقِيلَ لَهَا: «غَزَّةُ هَاشِمٍ».',
      en: 'Quraysh travelled to it on their summer journey. It is told that Hashim ibn Abd Manaf, the Prophet’s great-grandfather, died there on a trade journey, so it was called “Gaza of Hashim”.' }
  ],
  fact: { ar: 'رِحْلَةُ الشِّتَاءِ وَالصَّيْفِ مَذْكُورَةٌ فِي سُورَةِ قُرَيْشٍ.', en: 'The winter and summer journeys are mentioned in Surat Quraysh.' },
  quiz: [
    { t: 'mcq', q: 'غَزَّةُ نِهَايَةُ أَيِّ طَرِيقٍ؟', qen: 'Gaza is the end of which road?', o: ['دَرْبِ البَخُورِ', 'طَرِيقِ الحَجِّ', 'طَرِيقِ الحَرِيرِ البَرِّيِّ'], a: 0 },
    { t: 'mcq', q: 'لِمَاذَا قِيلَ «غَزَّةُ هَاشِمٍ»؟', qen: 'Why was it called “Gaza of Hashim”?', o: ['لِأَنَّ هَاشِماً بَنَاهَا', 'لِأَنَّ هَاشِماً مَاتَ فِيهَا', 'لِأَنَّ هَاشِماً وُلِدَ فِيهَا'], a: 1 },
    { t: 'tf', q: 'تَقَعُ غَزَّةُ عَلَى بَحْرِ الرُّومِ.', qen: 'Gaza lies on the Mediterranean.', a: true }
  ] },

{ id: 'alexandria', ar: 'الإِسْكَنْدَرِيَّةُ', en: 'Alexandria', sea: 'rum', lon: 29.92, lat: 31.2, icon: '🗼',
  text: [
    { ar: 'الإِسْكَنْدَرِيَّةُ مِينَاءٌ عَظِيمٌ فِي مِصْرَ عَلَى بَحْرِ الرُّومِ. كَانَتْ فِيهَا [مَنَارَةٌ|a lighthouse] عَالِيَةٌ تُرْشِدُ السُّفُنَ فِي اللَّيْلِ، وَعَدَّهَا النَّاسُ مِنْ عَجَائِبِ الدُّنْيَا.',
      en: 'Alexandria is a great port in Egypt on the Mediterranean. It had a tall lighthouse that guided ships at night, and people counted it among the wonders of the world.' },
    { ar: 'كَانَتْ [بَضَائِعُ|goods] الشَّرْقِ، مِنَ التَّوَابِلِ وَالحَرِيرِ، تَصِلُ إِلَيْهَا، ثُمَّ تُبْحِرُ إِلَى مُدُنِ أُورُوبَّا.',
      en: 'Goods from the East, such as spices and silk, arrived there and then sailed on to the cities of Europe.' }
  ],
  fact: { ar: 'قَلْعَةُ قَايِتْبَايَ بُنِيَتْ فِي مَكَانِ المَنَارَةِ القَدِيمَةِ.', en: 'The Citadel of Qaitbay was built on the site of the old lighthouse.' },
  quiz: [
    { t: 'mcq', q: 'بِمَاذَا اشْتَهَرَتِ الإِسْكَنْدَرِيَّةُ قَدِيماً؟', qen: 'What was Alexandria famous for in the past?', o: ['بِمَنَارَتِهَا', 'بِالقَهْوَةِ', 'بِالقُرُنْفُلِ'], a: 0 },
    { t: 'tf', q: 'كَانَتِ المَنَارَةُ تُرْشِدُ السُّفُنَ فِي النَّهَارِ فَقَطْ.', qen: 'The lighthouse guided ships only in the daytime.', a: false },
    { t: 'mcq', q: 'إِلَى أَيْنَ تُبْحِرُ البَضَائِعُ مِنَ الإِسْكَنْدَرِيَّةِ؟', qen: 'Where did goods sail from Alexandria?', o: ['إِلَى الصِّينِ', 'إِلَى أُورُوبَّا', 'إِلَى سَرَنْدِيبَ'], a: 1 }
  ] },

{ id: 'jubail', ar: 'الجُبَيْلُ', en: 'Jubail', sea: 'gulf', lon: 49.66, lat: 27.0, icon: '🐚',
  text: [
    { ar: 'الجُبَيْلُ عَلَى سَاحِلِ الخَلِيجِ العَرَبِيِّ. وَجَدَ عُلَمَاءُ الآثَارِ قُرْبَهَا فِي مَوْقِعِ الدَّوْسَرِيَّةِ [قَرْيَةً|a village] مِنْ أَقْدَمِ قُرَى السَّوَاحِلِ، عُمْرُهَا نَحْوُ سَبْعَةِ آلَافِ سَنَةٍ.',
      en: 'Jubail is on the coast of the Arabian Gulf. Near it, at the Dosariyah site, archaeologists found one of the oldest coastal villages, about seven thousand years old.' },
    { ar: 'كَانَ أَهْلُهَا يَعِيشُونَ عَلَى البَحْرِ: يَصِيدُونَ [السَّمَكَ|fish]، وَيَجْمَعُونَ [الأَصْدَافَ|shells]، وَيُتَاجِرُونَ مَعَ بِلَادِ الرَّافِدَيْنِ.',
      en: 'Its people lived from the sea: they caught fish, gathered shells, and traded with the land of Mesopotamia.' }
  ],
  fact: { ar: 'وَجَدَ العُلَمَاءُ فِي الدَّوْسَرِيَّةِ فَخَّاراً مُلَوَّناً جَاءَ مِنَ العِرَاقِ القَدِيمِ.', en: 'At Dosariyah, scientists found coloured pottery that came from ancient Iraq.' },
  quiz: [
    { t: 'mcq', q: 'عَلَى أَيِّ بَحْرٍ تَقَعُ الجُبَيْلُ؟', qen: 'On which sea is Jubail?', o: ['الخَلِيجِ العَرَبِيِّ', 'البَحْرِ الأَحْمَرِ', 'بَحْرِ الرُّومِ'], a: 0 },
    { t: 'mcq', q: 'كَمْ عُمْرُ قَرْيَةِ الدَّوْسَرِيَّةِ تَقْرِيباً؟', qen: 'About how old is the Dosariyah village?', o: ['مِئَةُ سَنَةٍ', 'أَلْفُ سَنَةٍ', 'سَبْعَةُ آلَافِ سَنَةٍ'], a: 2 },
    { t: 'tf', q: 'كَانَ أَهْلُ الدَّوْسَرِيَّةِ يَصِيدُونَ السَّمَكَ.', qen: 'The people of Dosariyah caught fish.', a: true }
  ] },

{ id: 'uqair', ar: 'العُقَيْرُ', en: 'Al-Uqair', sea: 'gulf', lon: 50.21, lat: 25.65, icon: '🌴',
  text: [
    { ar: 'العُقَيْرُ مِينَاءُ الأَحْسَاءِ التَّارِيخِيُّ عَلَى الخَلِيجِ العَرَبِيِّ. كَانَتْ تَصِلُ إِلَيْهِ السُّفُنُ، فَتَنْقُلُ القَوَافِلُ بَضَائِعَهَا إِلَى [وَاحَةِ|the oasis of] الأَحْسَاءِ وَقَلْبِ الجَزِيرَةِ.',
      en: 'Al-Uqair is the historic port of Al-Ahsa on the Arabian Gulf. Ships arrived there, and caravans carried their goods to the oasis of Al-Ahsa and the heart of Arabia.' },
    { ar: 'وَفِي العُقَيْرِ [خَانٌ|an inn] قَدِيمٌ لِلتُّجَّارِ، وَمَبْنَى لِلجَمَارِكِ، وَقَلْعَةٌ تَحْرُسُ المِينَاءَ.',
      en: 'In Al-Uqair there is an old inn for merchants, a customs building, and a fort that guards the port.' }
  ],
  fact: { ar: 'فِي العُقَيْرِ عَقَدَ المَلِكُ عَبْدُ العَزِيزِ لِقَاءَاتٍ وَمُعَاهَدَاتٍ مُهِمَّةً، مِنْهَا مُعَاهَدَةُ العُقَيْرِ سَنَةَ ١٩١٥م.', en: 'King Abdulaziz held important meetings and treaties at Al-Uqair, including the Treaty of Uqair in 1915.' },
  quiz: [
    { t: 'mcq', q: 'العُقَيْرُ مِينَاءُ أَيِّ وَاحَةٍ؟', qen: 'Al-Uqair is the port of which oasis?', o: ['الأَحْسَاءِ', 'العُلَا', 'تَيْمَاءَ'], a: 0 },
    { t: 'tf', q: 'فِي العُقَيْرِ قَلْعَةٌ تَحْرُسُ المِينَاءَ.', qen: 'There is a fort guarding the port at Al-Uqair.', a: true },
    { t: 'mcq', q: 'مَا الخَانُ؟', qen: 'What is a khan?', o: ['سَفِينَةٌ كَبِيرَةٌ', 'مَكَانٌ يَنْزِلُ فِيهِ التُّجَّارُ', 'نَوْعٌ مِنَ السَّمَكِ'], a: 1 }
  ] },

{ id: 'ubulla', ar: 'الأُبُلَّةُ', en: 'Al-Ubulla', sea: 'gulf', lon: 47.85, lat: 30.45, icon: '🛶',
  text: [
    { ar: 'الأُبُلَّةُ مِينَاءٌ قَدِيمٌ قُرْبَ البَصْرَةِ فِي رَأْسِ الخَلِيجِ العَرَبِيِّ. كَانَتِ العَرَبُ تُسَمِّيهَا «فَرْجَ الهِنْدِ»، أَيْ [بَابَ|gateway of] الهِنْدِ، لِكَثْرَةِ سُفُنِ الهِنْدِ فِيهَا.',
      en: 'Al-Ubulla is an old port near Basra at the head of the Arabian Gulf. The Arabs called it “the gateway of India” because so many Indian ships came there.' },
    { ar: 'وَمِنَ البَصْرَةِ وَالأُبُلَّةِ خَرَجَ [البَحَّارَةُ|sailors] العَرَبُ إِلَى الهِنْدِ وَالصِّينِ، وَعَادُوا [بِالحَرِيرِ|silk] وَالتَّوَابِلِ.',
      en: 'From Basra and Al-Ubulla, Arab sailors set out for India and China, and came back with silk and spices.' }
  ],
  fact: { ar: 'حِكَايَاتُ «السِّنْدِبَادِ البَحْرِيِّ» تَبْدَأُ رِحْلَاتُهَا مِنَ البَصْرَةِ.', en: 'The voyages of Sindbad the Sailor begin from Basra.' },
  quiz: [
    { t: 'mcq', q: 'مَاذَا كَانَتِ العَرَبُ تُسَمِّي الأُبُلَّةَ؟', qen: 'What did the Arabs call Al-Ubulla?', o: ['فَرْجَ الهِنْدِ', 'بَابَ المَنْدَبِ', 'دِهْلِيزَ الصِّينِ'], a: 0 },
    { t: 'tf', q: 'عَادَ البَحَّارَةُ مِنَ الصِّينِ بِالحَرِيرِ.', qen: 'Sailors returned from China with silk.', a: true },
    { t: 'mcq', q: 'الأُبُلَّةُ قُرْبَ أَيِّ مَدِينَةٍ؟', qen: 'Al-Ubulla is near which city?', o: ['جُدَّةَ', 'البَصْرَةِ', 'عَدَنَ'], a: 1 }
  ] },

{ id: 'sohar', ar: 'صُحَارُ', en: 'Sohar', sea: 'arab', lon: 56.75, lat: 24.35, icon: '🧭',
  text: [
    { ar: 'صُحَارُ مِينَاءٌ قَدِيمٌ فِي عُمَانَ. وَصَفَهَا الجُغْرَافِيُّ المَقْدِسِيُّ بِأَنَّهَا «[دِهْلِيزُ|the hallway of] الصِّينِ»، لِأَنَّ السُّفُنَ كَانَتْ تُبْحِرُ مِنْهَا إِلَى الشَّرْقِ البَعِيدِ.',
      en: 'Sohar is an old port in Oman. The geographer al-Muqaddasi called it “the hallway of China”, because ships sailed from it to the Far East.' },
    { ar: 'وَيَقُولُ أَهْلُ عُمَانَ فِي [حِكَايَاتِهِمْ|their tales] إِنَّ السِّنْدِبَادَ البَحْرِيَّ خَرَجَ مِنْ صُحَارَ.',
      en: 'And the people of Oman say in their tales that Sindbad the Sailor set out from Sohar.' }
  ],
  fact: { ar: 'بُنِيَتْ فِي عُمَانَ سَفِينَةٌ عَلَى الطَّرِيقَةِ القَدِيمَةِ اسْمُهَا «صُحَارُ»، وَأَبْحَرَتْ إِلَى الصِّينِ سَنَةَ ١٩٨٠م.', en: 'A ship named “Sohar” was built in Oman the old way and sailed to China in 1980.' },
  quiz: [
    { t: 'mcq', q: 'فِي أَيِّ بَلَدٍ تَقَعُ صُحَارُ؟', qen: 'In which country is Sohar?', o: ['عُمَانَ', 'اليَمَنِ', 'مِصْرَ'], a: 0 },
    { t: 'mcq', q: 'لِمَاذَا سُمِّيَتْ «دِهْلِيزَ الصِّينِ»؟', qen: 'Why was it called “the hallway of China”?', o: ['لِأَنَّهَا قَرِيبَةٌ مِنَ الصِّينِ', 'لِأَنَّ السُّفُنَ تُبْحِرُ مِنْهَا إِلَى الشَّرْقِ', 'لِأَنَّ أَهْلَهَا مِنَ الصِّينِ'], a: 1 },
    { t: 'tf', q: 'تَقُولُ الحِكَايَاتُ إِنَّ السِّنْدِبَادَ خَرَجَ مِنْ صُحَارَ.', qen: 'The tales say Sindbad set out from Sohar.', a: true }
  ] },

{ id: 'sumhuram', ar: 'سَمْهَرَمُ (ظَفَارُ)', en: 'Sumhuram (Dhofar)', sea: 'arab', lon: 54.43, lat: 17.04, icon: '🌳',
  text: [
    { ar: 'سَمْهَرَمُ مِينَاءٌ قَدِيمٌ فِي ظَفَارَ، فِي جَنُوبِ عُمَانَ. حَوْلَهُ تَنْبُتُ أَشْجَارُ [اللُّبَانِ|frankincense]، وَهُوَ صَمْغٌ طَيِّبُ الرَّائِحَةِ كَانَ أَغْلَى مِنَ الذَّهَبِ أَحْيَاناً.',
      en: 'Sumhuram is an old port in Dhofar, in southern Oman. Frankincense trees grow around it; frankincense is a sweet-smelling resin that was sometimes worth more than gold.' },
    { ar: 'مِنْ هُنَا كَانَ يَبْدَأُ دَرْبُ البَخُورِ: تَحْمِلُ [الجِمَالُ|camels] اللُّبَانَ شَمَالاً عَبْرَ الجَزِيرَةِ حَتَّى غَزَّةَ.',
      en: 'The Incense Road began here: camels carried the frankincense north across Arabia all the way to Gaza.' }
  ],
  fact: { ar: 'آثَارُ سَمْهَرَمَ فِي خَوْرِ رُورِي جُزْءٌ مِنْ «أَرْضِ اللُّبَانِ» فِي قَائِمَةِ التُّرَاثِ العَالَمِيِّ.', en: 'The ruins at Khor Rori are part of the “Land of Frankincense” World Heritage site.' },
  quiz: [
    { t: 'mcq', q: 'مَا الشَّجَرُ الَّذِي يَنْبُتُ حَوْلَ سَمْهَرَمَ؟', qen: 'What trees grow around Sumhuram?', o: ['النَّخْلُ', 'اللُّبَانُ', 'القُرُنْفُلُ'], a: 1 },
    { t: 'tf', q: 'دَرْبُ البَخُورِ يَبْدَأُ مِنْ جَنُوبِ الجَزِيرَةِ.', qen: 'The Incense Road starts in southern Arabia.', a: true },
    { t: 'mcq', q: 'إِلَى أَيْنَ كَانَتِ الجِمَالُ تَحْمِلُ اللُّبَانَ؟', qen: 'Where did the camels carry the frankincense?', o: ['إِلَى غَزَّةَ', 'إِلَى سَرَنْدِيبَ', 'إِلَى كِلْوَةَ'], a: 0 }
  ] },

{ id: 'calicut', ar: 'قَالِيقُوطُ', en: 'Calicut', sea: 'ocean', lon: 75.78, lat: 11.25, icon: '🌶️',
  text: [
    { ar: 'قَالِيقُوطُ مِينَاءٌ عَلَى سَاحِلِ مَلِيبَارَ فِي جَنُوبِ الهِنْدِ، اشْتَهَرَ [بِالفُلْفُلِ|pepper] وَالتَّوَابِلِ. وَكَانَ فِيهِ تُجَّارٌ عَرَبٌ كَثِيرُونَ.',
      en: 'Calicut is a port on the Malabar coast in southern India, famous for pepper and spices. Many Arab merchants lived there.' },
    { ar: 'زَارَهُ [الرَّحَّالَةُ|the traveller] ابْنُ بَطُّوطَةَ، وَوَصَفَ سُفُنَهُ الكَبِيرَةَ الَّتِي تُبْحِرُ إِلَى الصِّينِ.',
      en: 'The traveller Ibn Battuta visited it and described its great ships that sailed to China.' }
  ],
  fact: { ar: 'فِي لُغَةِ مَلِيبَارَ كَلِمَاتٌ عَرَبِيَّةٌ جَاءَ بِهَا التُّجَّارُ.', en: 'The language of Malabar has Arabic words brought by merchants.' },
  quiz: [
    { t: 'mcq', q: 'بِمَاذَا اشْتَهَرَتْ قَالِيقُوطُ؟', qen: 'What was Calicut famous for?', o: ['بِالفُلْفُلِ وَالتَّوَابِلِ', 'بِالقَهْوَةِ', 'بِاللُّبَانِ'], a: 0 },
    { t: 'mcq', q: 'مَنِ الرَّحَّالَةُ الَّذِي زَارَهَا؟', qen: 'Which traveller visited it?', o: ['المَقْدِسِيُّ', 'ابْنُ بَطُّوطَةَ', 'السِّنْدِبَادُ'], a: 1 },
    { t: 'tf', q: 'قَالِيقُوطُ فِي شَمَالِ أَفْرِيقْيَا.', qen: 'Calicut is in North Africa.', a: false }
  ] },

{ id: 'serendib', ar: 'سَرَنْدِيبُ', en: 'Serendib (Sri Lanka)', sea: 'ocean', lon: 79.86, lat: 6.93, icon: '💎',
  text: [
    { ar: 'سَرَنْدِيبُ اسْمٌ عَرَبِيٌّ قَدِيمٌ [لِجَزِيرَةِ|the island of] سِرِيلَانْكَا. وَصَلَ إِلَيْهَا التُّجَّارُ العَرَبُ مُنْذُ قُرُونٍ، يَطْلُبُونَ [اليَاقُوتَ|rubies] وَالقِرْفَةَ.',
      en: 'Serendib is an old Arabic name for the island of Sri Lanka. Arab merchants reached it centuries ago, seeking rubies and cinnamon.' },
    { ar: 'وَزَارَهَا ابْنُ بَطُّوطَةَ، وَصَعِدَ جَبَلَهَا العَالِيَ. وَمِنَ اسْمِهَا جَاءَتِ الكَلِمَةُ الإِنْجِلِيزِيَّةُ serendipity، وَمَعْنَاهَا: أَنْ تَجِدَ شَيْئاً جَمِيلاً دُونَ أَنْ تَبْحَثَ عَنْهُ.',
      en: 'Ibn Battuta visited it and climbed its high mountain. The English word “serendipity”, finding something lovely without looking for it, comes from its name.' }
  ],
  fact: { ar: 'فِي سِرِيلَانْكَا اليَوْمَ مُسْلِمُونَ كَثِيرُونَ مِنْ أَحْفَادِ التُّجَّارِ العَرَبِ.', en: 'Many Sri Lankan Muslims today descend from Arab merchants.' },
  quiz: [
    { t: 'mcq', q: 'مَا الاسْمُ الحَدِيثُ لِسَرَنْدِيبَ؟', qen: 'What is the modern name of Serendib?', o: ['سِرِيلَانْكَا', 'مُورِيشْيُوسُ', 'زِنْجِبَارُ'], a: 0 },
    { t: 'mcq', q: 'مَاذَا كَانَ التُّجَّارُ يَطْلُبُونَ فِيهَا؟', qen: 'What did merchants seek there?', o: ['القَمْحَ', 'اليَاقُوتَ وَالقِرْفَةَ', 'القَهْوَةَ'], a: 1 },
    { t: 'tf', q: 'كَلِمَةُ serendipity جَاءَتْ مِنِ اسْمِ سَرَنْدِيبَ.', qen: 'The word “serendipity” comes from Serendib.', a: true }
  ] },

{ id: 'zanzibar', ar: 'زِنْجِبَارُ', en: 'Zanzibar', sea: 'ocean', lon: 39.19, lat: -6.16, icon: '🌸',
  text: [
    { ar: 'زِنْجِبَارُ جَزِيرَةٌ قُرْبَ سَاحِلِ أَفْرِيقْيَا الشَّرْقِيِّ. جَاءَهَا التُّجَّارُ العَرَبُ بِالسُّفُنِ الشِّرَاعِيَّةِ مَعَ [الرِّيَاحِ المَوْسِمِيَّةِ|the monsoon winds]، وَاشْتَهَرَتْ بَعْدَ ذَلِكَ [بِالقُرُنْفُلِ|cloves].',
      en: 'Zanzibar is an island near the coast of East Africa. Arab merchants came to it in sailing ships with the monsoon winds, and it later became famous for cloves.' },
    { ar: 'وَفِي اللُّغَةِ [السَّوَاحِلِيَّةِ|Swahili] كَلِمَاتٌ عَرَبِيَّةٌ كَثِيرَةٌ، مِثْلُ: kitabu (كِتَاب)، وَsaa (سَاعَة)، وَbahari (بَحْر).',
      en: 'The Swahili language has many Arabic words, such as kitabu (book), saa (hour) and bahari (sea).' }
  ],
  fact: { ar: 'اسْمُ «السَّوَاحِلِيَّةِ» نَفْسُهُ مِنَ الكَلِمَةِ العَرَبِيَّةِ «السَّوَاحِلِ».', en: 'The name “Swahili” itself comes from the Arabic word for “coasts”.' },
  quiz: [
    { t: 'mcq', q: 'كَيْفَ وَصَلَ التُّجَّارُ إِلَى زِنْجِبَارَ؟', qen: 'How did merchants reach Zanzibar?', o: ['بِالقَوَافِلِ', 'بِالسُّفُنِ مَعَ الرِّيَاحِ المَوْسِمِيَّةِ', 'بِالقِطَارِ'], a: 1 },
    { t: 'mcq', q: 'مَا مَعْنَى كَلِمَةِ bahari؟', qen: 'What does bahari mean?', o: ['بَحْر', 'كِتَاب', 'سَاعَة'], a: 0 },
    { t: 'tf', q: 'اسْمُ «السَّوَاحِلِيَّةِ» مِنْ كَلِمَةٍ عَرَبِيَّةٍ.', qen: 'The name “Swahili” comes from an Arabic word.', a: true }
  ] },

{ id: 'kilwa', ar: 'كِلْوَةُ', en: 'Kilwa', sea: 'ocean', lon: 39.51, lat: -8.96, icon: '🕌',
  text: [
    { ar: 'كِلْوَةُ مَدِينَةٌ عَلَى جَزِيرَةٍ صَغِيرَةٍ فِي تَنْزَانْيَا اليَوْمَ. [اغْتَنَتْ|grew rich] مِنْ تِجَارَةِ الذَّهَبِ، وَكَانَ فِيهَا جَامِعٌ كَبِيرٌ وَقَصْرٌ جَمِيلٌ.',
      en: 'Kilwa is a city on a small island in today’s Tanzania. It grew rich from the gold trade, and it had a great mosque and a beautiful palace.' },
    { ar: 'زَارَهَا ابْنُ بَطُّوطَةَ وَقَالَ إِنَّهَا مِنْ أَحْسَنِ المُدُنِ وَأَتْقَنِهَا [عِمَارَةً|in building].',
      en: 'Ibn Battuta visited it and said it was one of the finest and best-built cities.' }
  ],
  fact: { ar: 'آثَارُ كِلْوَةَ مُسَجَّلَةٌ فِي قَائِمَةِ التُّرَاثِ العَالَمِيِّ.', en: 'The ruins of Kilwa are on the World Heritage list.' },
  quiz: [
    { t: 'mcq', q: 'مِنْ أَيِّ تِجَارَةٍ اغْتَنَتْ كِلْوَةُ؟', qen: 'Which trade made Kilwa rich?', o: ['الذَّهَبِ', 'القَهْوَةِ', 'الحَرِيرِ'], a: 0 },
    { t: 'tf', q: 'قَالَ ابْنُ بَطُّوطَةَ إِنَّ كِلْوَةَ مِنْ أَحْسَنِ المُدُنِ.', qen: 'Ibn Battuta said Kilwa was one of the finest cities.', a: true },
    { t: 'mcq', q: 'فِي أَيِّ بَلَدٍ تَقَعُ كِلْوَةُ اليَوْمَ؟', qen: 'In which country is Kilwa today?', o: ['الهِنْدِ', 'تَنْزَانْيَا', 'عُمَانَ'], a: 1 }
  ] },

{ id: 'comoros', ar: 'جُزُرُ القَمَرِ', en: 'Comoros', sea: 'ocean', lon: 43.3, lat: -11.7, icon: '🌙',
  text: [
    { ar: 'جُزُرُ القَمَرِ مَجْمُوعَةُ جُزُرٍ بَيْنَ أَفْرِيقْيَا وَمَدَغَشْقَرَ. وَصَلَ إِلَيْهَا البَحَّارَةُ العَرَبُ قَدِيماً، فَبَقِيَ اسْمُهَا عَرَبِيّاً.',
      en: 'The Comoros are a group of islands between Africa and Madagascar. Arab sailors reached them long ago, so their name stayed Arabic.' },
    { ar: 'وَالعَرَبِيَّةُ اليَوْمَ مِنَ [اللُّغَاتِ الرَّسْمِيَّةِ|the official languages] فِيهَا، وَهِيَ [عُضْوٌ|a member] فِي جَامِعَةِ الدُّوَلِ العَرَبِيَّةِ.',
      en: 'Today Arabic is one of their official languages, and the country is a member of the Arab League.' }
  ],
  fact: { ar: 'تَظْهَرُ عَلَى عَلَمِ جُزُرِ القَمَرِ صُورَةُ هِلَالٍ.', en: 'A crescent moon appears on the flag of the Comoros.' },
  quiz: [
    { t: 'mcq', q: 'أَيْنَ تَقَعُ جُزُرُ القَمَرِ؟', qen: 'Where are the Comoros?', o: ['بَيْنَ أَفْرِيقْيَا وَمَدَغَشْقَرَ', 'فِي الخَلِيجِ العَرَبِيِّ', 'قُرْبَ الهِنْدِ'], a: 0 },
    { t: 'tf', q: 'العَرَبِيَّةُ لُغَةٌ رَسْمِيَّةٌ فِي جُزُرِ القَمَرِ.', qen: 'Arabic is an official language in the Comoros.', a: true },
    { t: 'mcq', q: 'جُزُرُ القَمَرِ عُضْوٌ فِي ...', qen: 'The Comoros are a member of ...', o: ['الاتِّحَادِ الأُورُوبِّيِّ', 'جَامِعَةِ الدُّوَلِ العَرَبِيَّةِ', 'لَا شَيْءَ'], a: 1 }
  ] },

{ id: 'dinaarobi', ar: 'دِينَا عَرُوبِي (مُورِيشْيُوسُ)', en: 'Dina Arobi (Mauritius)', sea: 'ocean', lon: 57.55, lat: -20.25, icon: '🍬',
  text: [
    { ar: 'فِي [خَرِيطَةٍ|a map] قَدِيمَةٍ رُسِمَتْ نَحْوَ سَنَةِ ١٥٠٢م ظَهَرَتْ جُزُرٌ صَغِيرَةٌ فِي المُحِيطِ الهِنْدِيِّ بِأَسْمَاءٍ أَخَذَهَا الرَّسَّامُ مِنَ البَحَّارَةِ العَرَبِ، مِنْهَا «دِينَا عَرُوبِي»، وَيُرَجَّحُ أَنَّهَا مُورِيشْيُوسُ.',
      en: 'On an old map drawn around 1502, small islands in the Indian Ocean appear with names the mapmaker took from Arab sailors, among them “Dina Arobi”, which is thought to be Mauritius.' },
    { ar: 'وَيَرْوِي أَهْلُ الجَزِيرَةِ أَنَّ أَقْدَمَ [رُفَاتٍ|remains] إِنْسَانِيٍّ وُجِدَ فِيهَا لِبَحَّارٍ عَرَبِيٍّ. وَهِيَ اليَوْمَ «مَرْفَأُ السُّكَّرِ»، تَمْلَؤُهَا حُقُولُ [قَصَبِ السُّكَّرِ|sugar cane]. وَفِي شَامَارِيلَ أَرْضٌ بِسَبْعَةِ أَلْوَانٍ، تُشْبِهُ أَلْوَانَ وُجُوهِ النَّاسِ: مُخْتَلِفَةٌ وَجَمِيلَةٌ مَعاً.',
      en: 'The islanders tell that the oldest human remains found there belonged to an Arab sailor. Today it is “the harbour of sugar”, full of sugar-cane fields. At Chamarel there is earth of seven colours, like the colours of people’s faces: different, and beautiful together.' }
  ],
  fact: { ar: 'الخَرِيطَةُ تُعْرَفُ بِاسْمِ «خَرِيطَةِ كَانْتِينُو»، وَتَظْهَرُ عَلَيْهَا ثَلَاثُ جُزُرٍ بِأَسْمَاءٍ عَرَبِيَّةٍ.', en: 'The map is known as the Cantino planisphere; three islands appear on it with Arabic names.' },
  quiz: [
    { t: 'mcq', q: 'مَا الاسْمُ القَدِيمُ الَّذِي يُرَجَّحُ أَنَّهُ لِمُورِيشْيُوسَ؟', qen: 'What old name is thought to be Mauritius?', o: ['سَرَنْدِيبُ', 'دِينَا عَرُوبِي', 'الوَاقْوَاقُ'], a: 1 },
    { t: 'mcq', q: 'مِمَّنْ أَخَذَ الرَّسَّامُ أَسْمَاءَ الجُزُرِ؟', qen: 'From whom did the mapmaker take the island names?', o: ['مِنَ البَحَّارَةِ العَرَبِ', 'مِنَ المُلُوكِ', 'مِنَ الكُتُبِ'], a: 0 },
    { t: 'tf', q: 'فِي شَامَارِيلَ أَرْضٌ بِسَبْعَةِ أَلْوَانٍ.', qen: 'At Chamarel there is earth of seven colours.', a: true }
  ] },

{ id: 'waqwaq', ar: 'جُزُرُ الوَاقْوَاقِ', en: 'The Waqwaq Islands', sea: 'legend', lon: 86.5, lat: -21.5, icon: '🌳', legend: true,
  text: [
    { ar: 'فِي كُتُبِ [العَجَائِبِ|marvels] الَّتِي كَتَبَهَا البَحَّارَةُ وَالجُغْرَافِيُّونَ العَرَبُ، مِثْلِ كِتَابِ «عَجَائِبِ الهِنْدِ»، حَدِيثٌ عَنْ جُزُرٍ بَعِيدَةٍ فِي آخِرِ البَحْرِ اسْمُهَا جُزُرُ الوَاقْوَاقِ.',
      en: 'In the books of marvels written by Arab sailors and geographers, such as “The Wonders of India”, there are stories of faraway islands at the end of the sea called the Waqwaq Islands.' },
    { ar: 'تَقُولُ [الحِكَايَةُ|the tale] إِنَّ فِيهَا شَجَراً يُثْمِرُ ثِمَاراً عَلَى صُورَةِ نِسَاءٍ، فَإِذَا نَضِجَتْ صَاحَتْ: «وَاقْ وَاقْ!». وَلَا أَحَدَ يَعْرِفُ مَكَانَهَا، فَهِيَ مِنْ [خَيَالِ|the imagination of] البَحَّارَةِ.',
      en: 'The tale says there were trees whose fruit had the shape of women, and when ripe they cried “Waq waq!”. No one knows where they are; they come from sailors’ imagination.' }
  ],
  fact: { ar: 'جُزُرُ الوَاقْوَاقِ أُسْطُورَةٌ، وَلَيْسَتْ مَكَاناً حَقِيقِيّاً عَلَى الخَرِيطَةِ.', en: 'The Waqwaq Islands are a legend, not a real place on the map.' },
  quiz: [
    { t: 'tf', q: 'جُزُرُ الوَاقْوَاقِ مَكَانٌ حَقِيقِيٌّ نَعْرِفُهُ.', qen: 'The Waqwaq Islands are a real place we know.', a: false },
    { t: 'mcq', q: 'مَاذَا تَقُولُ الثِّمَارُ إِذَا نَضِجَتْ؟', qen: 'What do the fruits cry when ripe?', o: ['وَاقْ وَاقْ', 'يَا بَحْرُ', 'سَلَامٌ'], a: 0 },
    { t: 'mcq', q: 'أَيْنَ نَجِدُ حِكَايَةَ الوَاقْوَاقِ؟', qen: 'Where do we find the Waqwaq tale?', o: ['فِي كُتُبِ العَجَائِبِ', 'فِي الصُّحُفِ', 'فِي كُتُبِ الطَّبْخِ'], a: 0 }
  ] }
];

// sea lanes drawn on the map (lon/lat waypoints through open water)
window.ROUTES = [
  [[29.92,31.2],[32.3,31.6],[34.45,31.5]],
  [[35.0,29.4],[35.15,28.06],[37.0,25.8],[38.55,23.65],[39.0,21.5],[40.5,19.7],[41.9,17.3],[42.6,15.0],[43.25,13.4],[43.5,12.5],[45.03,12.6]],
  [[45.03,12.6],[49.5,13.6],[54.43,16.8],[58.5,19.0],[59.8,22.4],[57.2,24.6],[56.4,26.4],[53.0,26.2],[50.6,26.2],[50.21,25.8],[49.9,27.0],[48.6,28.9],[47.85,30.2]],
  [[45.03,12.6],[52.5,12.4],[62,11.5],[70,11],[75.78,11.25],[77.6,8.0],[79.86,6.93],[86,6.5],[92.5,6.2]],
  [[45.03,12.6],[51.3,11.8],[49.5,5],[44,-1],[40.2,-5.5],[39.6,-6.16],[40.0,-8.96],[42.0,-11.0],[43.3,-11.7],[48,-14],[52,-17],[57.55,-20.25]]
];
// the Incense Road over land, from Dhofar to Gaza
window.INCENSE = [[54.43,17.04],[51.0,16.0],[47.0,15.1],[44.2,17.5],[42.0,19.6],[39.8,21.4],[39.6,24.5],[37.9,26.8],[36.4,28.5],[35.45,30.33],[34.45,31.5]];
