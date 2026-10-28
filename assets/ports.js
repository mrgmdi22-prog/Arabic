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
{ id: 'ayla', ar: 'أَيْلَةُ', en: 'Ayla (Aqaba)', sea: 'red', lon: 35.0, lat: 29.53, icon: 'gate',
  text: [
    { ar: 'أَيْلَةُ مَدِينَةٌ عَلَى رَأْسِ خَلِيجِ العَقَبَةِ، بُنِيَتْ فِي صَدْرِ الإِسْلَامِ. أَحَاطَ بِهَا [سُورٌ|a wall] مِنَ الحَجَرِ، فِيهِ أَبْوَابٌ تَخْرُجُ مِنْهَا الطُّرُقُ إِلَى مِصْرَ وَالشَّامِ وَالحِجَازِ.',
      en: 'Ayla is a city at the head of the Gulf of Aqaba, built in the early days of Islam. A stone wall surrounded it, with gates from which roads led to Egypt, the Levant and the Hijaz.' },
    { ar: 'كَانَ يَمُرُّ بِهَا [الحُجَّاجُ|pilgrims] القَادِمُونَ مِنْ مِصْرَ، وَتَرْسُو فِيهَا السُّفُنُ القَادِمَةُ مِنَ اليَمَنِ وَالهِنْدِ. وَآثَارُهَا اليَوْمَ فِي وَسَطِ مَدِينَةِ العَقَبَةِ.',
      en: 'Pilgrims coming from Egypt passed through it, and ships from Yemen and India anchored there. Its ruins lie today in the middle of the city of Aqaba.' }
  ],
  fact: { ar: 'كَشَفَ عُلَمَاءُ الآثَارِ سُورَ أَيْلَةَ وَأَبْوَابَهُ، وَيَزُورُهَا النَّاسُ فِي العَقَبَةِ.', en: 'Archaeologists uncovered Ayla’s wall and gates, and visitors can see them in Aqaba.' },
  quiz: [
    { t: 'mcq', q: 'أَيْنَ تَقَعُ آثَارُ أَيْلَةَ اليَوْمَ؟', qen: 'Where are Ayla’s ruins today?', o: ['فِي العَقَبَةِ', 'فِي جُدَّةَ', 'فِي عَدَنَ'], a: 0 },
    { t: 'tf', q: 'كَانَ لِأَيْلَةَ سُورٌ فِيهِ أَبْوَابٌ.', qen: 'Ayla had a wall with gates.', a: true },
    { t: 'mcq', q: 'مَنْ كَانَ يَمُرُّ بِأَيْلَةَ؟', qen: 'Who passed through Ayla?', o: ['الحُجَّاجُ القَادِمُونَ مِنْ مِصْرَ', 'جُنُودُ الرُّومِ', 'تُجَّارُ الصِّينِ فَقَطْ'], a: 0 }
  ] },

{ id: 'farasan', ar: 'جُزُرُ فُرَسَانَ', en: 'Farasan Islands', sea: 'red', lon: 41.9, lat: 16.75, icon: 'column',
  text: [
    { ar: 'جُزُرُ فُرَسَانَ فِي البَحْرِ الأَحْمَرِ، قُبَالَةَ سَاحِلِ جَازَانَ. وَفِي القَرْنِ الثَّانِي المِيلَادِيِّ [احْتَلَّهَا|occupied it] الرُّومَانُ، وَأَقَامُوا فِيهَا [حَامِيَةً|a garrison] عَسْكَرِيَّةً تَحْرُسُ طَرِيقَ السُّفُنِ إِلَى الهِنْدِ.',
      en: 'The Farasan Islands lie in the Red Sea off the coast of Jazan. In the 2nd century AD the Romans occupied them and set up a military garrison to guard the ship route to India.' },
    { ar: 'وُجِدَ فِيهَا [نَقْشٌ|an inscription] لَاتِينِيٌّ مِنْ سَنَةِ ١٤٤م، يَذْكُرُ جُنُوداً مِنْ فَيْلَقٍ رُومَانِيٍّ كَانَ فِي مِصْرَ، وَيُسَمِّي المَكَانَ «مِينَاءَ فِرِّيسَانَ». ثُمَّ وُجِدَتْ فِيهَا [دُرُوعٌ|armour] رُومَانِيَّةٌ قَدِيمَةٌ.',
      en: 'A Latin inscription from 144 AD was found there. It mentions soldiers from a Roman legion based in Egypt and calls the place “the port of Ferresan”. Later, old Roman armour was found there too.' }
  ],
  fact: { ar: 'يُعَدُّ نَقْشُ فُرَسَانَ أَبْعَدَ نَقْشٍ لَاتِينِيٍّ عُثِرَ عَلَيْهِ فِي جَنُوبِ العَالَمِ الرُّومَانِيِّ.', en: 'The Farasan inscription is the southernmost Latin inscription ever found from the Roman world.' },
  quiz: [
    { t: 'mcq', q: 'مَنِ احْتَلَّ جُزُرَ فُرَسَانَ فِي القَرْنِ الثَّانِي المِيلَادِيِّ؟', qen: 'Who occupied the Farasan Islands in the 2nd century AD?', o: ['الرُّومَانُ', 'الفُرْسُ', 'البُرْتُغَالِيُّونَ'], a: 0 },
    { t: 'mcq', q: 'بِأَيِّ لُغَةٍ كُتِبَ النَّقْشُ؟', qen: 'In which language was the inscription written?', o: ['العَرَبِيَّةِ', 'اللَّاتِينِيَّةِ', 'الصِّينِيَّةِ'], a: 1 },
    { t: 'tf', q: 'كَانَتِ الحَامِيَةُ تَحْرُسُ طَرِيقَ السُّفُنِ إِلَى الهِنْدِ.', qen: 'The garrison guarded the ship route to India.', a: true }
  ] },

{ id: 'adulis', ar: 'عَدَوْلَى', en: 'Adulis', sea: 'red', lon: 39.65, lat: 15.27, icon: 'dhow',
  text: [
    { ar: 'عَدَوْلَى مِينَاءٌ قَدِيمٌ عَلَى السَّاحِلِ الإِفْرِيقِيِّ لِلْبَحْرِ الأَحْمَرِ، فِي إِرِتْرِيَا اليَوْمَ. كَانَ مِينَاءَ [مَمْلَكَةِ|the kingdom of] أَكْسُومَ، تَخْرُجُ مِنْهُ [العَاجُ|ivory] وَبَضَائِعُ أَفْرِيقْيَا إِلَى العَالَمِ.',
      en: 'Adulis is an old port on the African coast of the Red Sea, in today’s Eritrea. It was the port of the kingdom of Aksum, and ivory and African goods left from it for the world.' },
    { ar: 'وَاشْتَهَرَتْ سُفُنُهُ عِنْدَ العَرَبِ، فَشَبَّهَ بِهَا الشَّاعِرُ طَرَفَةُ بْنُ العَبْدِ [الهَوَادِجَ|camel litters] فِي مُعَلَّقَتِهِ، فَقَالَ:<br>«عَدَوْلِيَّةٌ أَوْ مِنْ سَفِينِ ابْنِ يَامِنٍ ... يَجُورُ بِهَا المَلَّاحُ طَوْراً وَيَهْتَدِي»',
      en: 'Its ships were famous among the Arabs: the poet Tarafa ibn al-Abd compared camel litters to them in his Mu‘allaqa: “Ships of Adulis, or of Ibn Yamin’s fleet — the sailor veers off course with them at times, and at times finds the way.”' }
  ],
  fact: { ar: 'طَرَفَةُ شَاعِرٌ جَاهِلِيٌّ، وَبَيْتُهُ دَلِيلٌ عَلَى أَنَّ العَرَبَ عَرَفُوا سُفُنَ عَدَوْلَى قَبْلَ الإِسْلَامِ.', en: 'Tarafa was a pre-Islamic poet; his verse shows that Arabs knew the ships of Adulis before Islam.' },
  quiz: [
    { t: 'mcq', q: 'عَدَوْلَى كَانَ مِينَاءَ أَيِّ مَمْلَكَةٍ؟', qen: 'Adulis was the port of which kingdom?', o: ['أَكْسُومَ', 'سَبَأٍ', 'الأَنْبَاطِ'], a: 0 },
    { t: 'mcq', q: 'مَنِ الشَّاعِرُ الَّذِي ذَكَرَ سُفُنَ عَدَوْلَى؟', qen: 'Which poet mentioned the ships of Adulis?', o: ['المُتَنَبِّي', 'طَرَفَةُ بْنُ العَبْدِ', 'أَحْمَد شَوْقِي'], a: 1 },
    { t: 'tf', q: 'يَقَعُ عَدَوْلَى عَلَى السَّاحِلِ الإِفْرِيقِيِّ.', qen: 'Adulis lies on the African coast.', a: true }
  ] },

{ id: 'qana', ar: 'قِنَا', en: 'Qana', sea: 'arab', lon: 48.33, lat: 14.0, icon: 'incense',
  text: [
    { ar: 'قِنَا مِينَاءٌ قَدِيمٌ عَلَى سَاحِلِ حَضْرَمَوْتَ، قُرْبَ بِئْرِ عَلِيٍّ اليَوْمَ، وَفَوْقَهُ صَخْرَةٌ سَوْدَاءُ عَالِيَةٌ اسْمُهَا «حِصْنُ الغُرَابِ».',
      en: 'Qana is an old port on the coast of Hadramawt, near today’s Bir Ali, with a tall black rock above it called “the Raven’s Fort”.' },
    { ar: 'كَانَ مِينَاءَ مَمْلَكَةِ حَضْرَمَوْتَ: يُجْمَعُ فِيهِ [اللُّبَانُ|frankincense] مِنَ الجِبَالِ، ثُمَّ يُحْمَلُ فِي السُّفُنِ، أَوْ عَلَى [الجِمَالِ|camels] فِي دَرْبِ البَخُورِ.',
      en: 'It was the port of the kingdom of Hadramawt: frankincense was gathered there from the mountains, then carried by ship, or by camel along the Incense Road.' }
  ],
  fact: { ar: 'ذَكَرَ البَحَّارَةُ الإِغْرِيقُ مِينَاءَ قِنَا فِي دَلِيلٍ قَدِيمٍ لِلْمِلَاحَةِ فِي البَحْرِ الأَحْمَرِ وَبَحْرِ العَرَبِ.', en: 'Greek sailors mentioned Qana in an ancient navigation guide to the Red Sea and Arabian Sea (the Periplus).' },
  quiz: [
    { t: 'mcq', q: 'عَلَى أَيِّ سَاحِلٍ يَقَعُ قِنَا؟', qen: 'On which coast is Qana?', o: ['سَاحِلِ حَضْرَمَوْتَ', 'سَاحِلِ الشَّامِ', 'سَاحِلِ الهِنْدِ'], a: 0 },
    { t: 'mcq', q: 'مَا اسْمُ الصَّخْرَةِ الَّتِي فَوْقَ المِينَاءِ؟', qen: 'What is the rock above the port called?', o: ['جَبَلُ النُّورِ', 'حِصْنُ الغُرَابِ', 'قَلْعَةُ البَحْرِ'], a: 1 },
    { t: 'tf', q: 'كَانَ اللُّبَانُ يُجْمَعُ فِي قِنَا.', qen: 'Frankincense was gathered at Qana.', a: true }
  ] },

{ id: 'qalhat', ar: 'قَلْهَاتُ', en: 'Qalhat', sea: 'arab', lon: 59.38, lat: 22.7, icon: 'dome',
  text: [
    { ar: 'قَلْهَاتُ مَدِينَةٌ قَدِيمَةٌ عَلَى سَاحِلِ عُمَانَ، قُرْبَ مَدِينَةِ صُورَ. كَانَتْ تُصَدِّرُ [الخُيُولَ|horses] العَرَبِيَّةَ إِلَى الهِنْدِ، وَتَصِلُ إِلَيْهَا سُفُنٌ كَثِيرَةٌ مِنَ الهِنْدِ.',
      en: 'Qalhat is an old city on the coast of Oman, near the city of Sur. It exported Arabian horses to India, and many ships from India came to it.' },
    { ar: 'زَارَهَا مَارْكُو بُولُو، ثُمَّ ابْنُ بَطُّوطَةَ الَّذِي أَعْجَبَتْهُ [أَسْوَاقُهَا|its markets]، وَمَسْجِدٌ جَمِيلٌ بَنَتْهُ امْرَأَةٌ صَالِحَةٌ اسْمُهَا بِيبِي مَرْيَمُ.',
      en: 'Marco Polo visited it, then Ibn Battuta, who admired its markets and a beautiful mosque built by a pious woman named Bibi Maryam.' }
  ],
  fact: { ar: 'سُجِّلَتْ مَدِينَةُ قَلْهَاتَ القَدِيمَةُ فِي قَائِمَةِ التُّرَاثِ العَالَمِيِّ سَنَةَ ٢٠١٨م.', en: 'The ancient city of Qalhat was added to the World Heritage list in 2018.' },
  quiz: [
    { t: 'mcq', q: 'مَاذَا كَانَتْ قَلْهَاتُ تُصَدِّرُ إِلَى الهِنْدِ؟', qen: 'What did Qalhat export to India?', o: ['الخُيُولَ العَرَبِيَّةَ', 'القَهْوَةَ', 'الذَّهَبَ'], a: 0 },
    { t: 'mcq', q: 'مَنْ بَنَتِ المَسْجِدَ الجَمِيلَ؟', qen: 'Who built the beautiful mosque?', o: ['مَلِكَةُ سَبَأٍ', 'بِيبِي مَرْيَمُ', 'زَوْجَةُ التَّاجِرِ'], a: 1 },
    { t: 'tf', q: 'زَارَ ابْنُ بَطُّوطَةَ قَلْهَاتَ.', qen: 'Ibn Battuta visited Qalhat.', a: true }
  ] },

{ id: 'siraf', ar: 'سِيرَافُ', en: 'Siraf', sea: 'gulf', lon: 52.34, lat: 27.66, icon: 'scroll',
  text: [
    { ar: 'سِيرَافُ مِينَاءٌ قَدِيمٌ عَلَى السَّاحِلِ الشَّرْقِيِّ لِلْخَلِيجِ. ازْدَهَرَ قَبْلَ أَلْفِ سَنَةٍ، وَكَانَتْ سُفُنُهُ تُبْحِرُ إِلَى الهِنْدِ وَ[الصِّينِ|China]، وَيَسْكُنُهُ تُجَّارٌ أَغْنِيَاءُ.',
      en: 'Siraf is an old port on the eastern shore of the Gulf. It flourished a thousand years ago; its ships sailed to India and China, and rich merchants lived there.' },
    { ar: 'وَمِنْ أَهْلِهِ أَبُو زَيْدٍ السِّيرَافِيُّ، الَّذِي جَمَعَ أَخْبَارَ البَحَّارَةِ فِي كِتَابِ «أَخْبَارِ الصِّينِ وَالهِنْدِ». ثُمَّ ضَرَبَهُ [زِلْزَالٌ|an earthquake] شَدِيدٌ، فَضَعُفَ شَأْنُهُ.',
      en: 'Among its people was Abu Zayd al-Sirafi, who gathered sailors’ reports in the book “Accounts of China and India”. Then a strong earthquake struck it, and it declined.' }
  ],
  fact: { ar: 'كِتَابُ «أَخْبَارِ الصِّينِ وَالهِنْدِ» مِنْ أَقْدَمِ مَا كَتَبَهُ العَرَبُ عَنِ الصِّينِ.', en: '“Accounts of China and India” is among the earliest Arabic writing about China.' },
  quiz: [
    { t: 'mcq', q: 'إِلَى أَيْنَ كَانَتْ سُفُنُ سِيرَافَ تُبْحِرُ؟', qen: 'Where did Siraf’s ships sail?', o: ['إِلَى الهِنْدِ وَالصِّينِ', 'إِلَى أُورُوبَّا', 'إِلَى أَمْرِيكَا'], a: 0 },
    { t: 'mcq', q: 'مَا الكِتَابُ الَّذِي جَمَعَهُ أَبُو زَيْدٍ السِّيرَافِيُّ؟', qen: 'Which book did Abu Zayd al-Sirafi compile?', o: ['كَلِيلَةُ وَدِمْنَةُ', 'أَخْبَارُ الصِّينِ وَالهِنْدِ', 'عَجَائِبُ المَخْلُوقَاتِ'], a: 1 },
    { t: 'tf', q: 'ضَعُفَ سِيرَافُ بَعْدَ زِلْزَالٍ شَدِيدٍ.', qen: 'Siraf declined after a strong earthquake.', a: true }
  ] },

{ id: 'aden', ar: 'عَدَنُ', en: 'Aden', sea: 'arab', lon: 45.03, lat: 12.78, icon: 'dhow',
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

{ id: 'mokha', ar: 'المُخَا', en: 'Mocha', sea: 'red', lon: 43.25, lat: 13.32, icon: 'dallah',
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

{ id: 'athar', ar: 'عَثَّرُ', en: 'Athar', sea: 'red', lon: 42.68, lat: 17.22, icon: 'coin',
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

{ id: 'sirrain', ar: 'السِّرَّيْنُ', en: 'Al-Sirrain', sea: 'red', lon: 40.55, lat: 19.85, icon: 'jar',
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

{ id: 'jeddah', ar: 'جُدَّةُ', en: 'Jeddah', sea: 'red', lon: 39.17, lat: 21.49, icon: 'kaaba',
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

{ id: 'jar', ar: 'الجَارُ', en: 'Al-Jar', sea: 'red', lon: 38.55, lat: 23.65, icon: 'wheat',
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

{ id: 'khuraybah', ar: 'الخُرَيْبَةُ (لُويكِي كُومِي)', en: 'Al-Khuraybah (Leuke Kome)', sea: 'red', lon: 35.15, lat: 28.06, icon: 'facade',
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

{ id: 'gaza', ar: 'غَزَّةُ هَاشِمٍ', en: 'Gaza of Hashim', sea: 'rum', lon: 34.45, lat: 31.5, icon: 'camel',
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

{ id: 'alexandria', ar: 'الإِسْكَنْدَرِيَّةُ', en: 'Alexandria', sea: 'rum', lon: 29.92, lat: 31.2, icon: 'lighthouse',
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

{ id: 'jubail', ar: 'الجُبَيْلُ', en: 'Jubail', sea: 'gulf', lon: 49.66, lat: 27.0, icon: 'shell',
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

{ id: 'uqair', ar: 'العُقَيْرُ', en: 'Al-Uqair', sea: 'gulf', lon: 50.21, lat: 25.65, icon: 'fort',
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

{ id: 'ubulla', ar: 'الأُبُلَّةُ', en: 'Al-Ubulla', sea: 'gulf', lon: 47.85, lat: 30.45, icon: 'dhow',
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

{ id: 'sohar', ar: 'صُحَارُ', en: 'Sohar', sea: 'arab', lon: 56.75, lat: 24.35, icon: 'compass',
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

{ id: 'sumhuram', ar: 'سَمْهَرَمُ (ظَفَارُ)', en: 'Sumhuram (Dhofar)', sea: 'arab', lon: 54.43, lat: 17.04, icon: 'incense',
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

{ id: 'calicut', ar: 'قَالِيقُوطُ', en: 'Calicut', sea: 'ocean', lon: 75.78, lat: 11.25, icon: 'pepper',
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

{ id: 'serendib', ar: 'سَرَنْدِيبُ', en: 'Serendib (Sri Lanka)', sea: 'ocean', lon: 79.86, lat: 6.93, icon: 'gem',
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

{ id: 'zanzibar', ar: 'زِنْجِبَارُ', en: 'Zanzibar', sea: 'ocean', lon: 39.19, lat: -6.16, icon: 'clove',
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

{ id: 'kilwa', ar: 'كِلْوَةُ', en: 'Kilwa', sea: 'ocean', lon: 39.51, lat: -8.96, icon: 'dome',
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

{ id: 'comoros', ar: 'جُزُرُ القَمَرِ', en: 'Comoros', sea: 'ocean', lon: 43.3, lat: -11.7, icon: 'crescent',
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

{ id: 'dinaarobi', ar: 'دِينَا عَرُوبِي (مُورِيشْيُوسُ)', en: 'Dina Arobi (Mauritius)', sea: 'ocean', lon: 57.55, lat: -20.25, icon: 'cane',
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

{ id: 'waqwaq', ar: 'جُزُرُ الوَاقْوَاقِ', en: 'The Waqwaq Islands', sea: 'legend', lon: 86.5, lat: -21.5, icon: 'tree', legend: true,
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

// sea lanes drawn on the map (lon/lat waypoints through open water; checked against the coastline so no lane crosses land)
// voyage order for previous/next
window.PORTS = ['alexandria','gaza','ayla','khuraybah','jar','jeddah','sirrain','farasan','athar','adulis','mokha','aden','qana','sumhuram','qalhat','sohar','siraf','ubulla','jubail','uqair','calicut','serendib','zanzibar','kilwa','comoros','dinaarobi','waqwaq'].map(function(id){ return window.PORTS.filter(function(p){ return p.id === id; })[0]; });

window.ROUTES = [
  [[29.92,31.25],[30.6,31.6],[31.8,31.75],[33.2,31.55],[34.3,31.6]],
  [[34.97,29.45],[34.82,29.0],[34.62,28.45],[34.6,28.0],[35.1,27.35],[36.0,26.05],[37.0,24.4],[38.1,22.9],[38.8,21.5],[39.6,20.0],[40.4,18.6],[41.0,17.3],[41.4,16.1],[41.9,15.2],[42.6,14.0],[43.25,12.7],[43.6,12.38],[44.3,12.42],[45.0,12.62]],
  [[45.0,12.62],[47.5,13.3],[48.4,13.75],[50.5,14.6],[52.5,15.6],[54.4,16.75],[56.5,17.6],[58.2,19.2],[59.2,20.4],[60.0,21.6],[59.8,22.8],[58.9,23.9],[57.6,24.8],[56.8,25.6],[56.6,26.4],[56.0,26.25],[55.0,26.05],[54.0,26.3],[53.0,26.6],[52.2,27.3],[51.0,27.75],[50.2,28.4],[49.3,29.1],[48.65,29.75]],
  [[51.6,27.3],[50.6,27.2],[49.95,27.1],[50.25,26.55],[50.33,26.0],[50.3,25.75]],
  [[45.0,12.62],[48.5,12.9],[52.2,13.4],[56,13.8],[62,12.8],[68,11.8],[73,11.4],[75.3,11.2],[75.5,10.0],[76.0,8.6],[77.4,7.7],[78.8,7.3],[79.7,6.95],[80.2,5.7],[82,5.6],[86,6.0],[92.5,6.0]],
  [[45.0,12.62],[48.5,12.25],[51.8,12.05],[52.1,10.3],[50.8,5.5],[47.8,1.8],[44.3,-1.3],[41.2,-4.4],[39.85,-6.1],[39.9,-8.9],[41.6,-10.6],[43.5,-11.15],[46.5,-10.7],[49.4,-11.35],[51.0,-12.8],[53.5,-15.5],[56.0,-18.5],[57.35,-19.95]],
  [[29.92,31.25],[29.0,31.75],[27.6,32.7],[26.6,34.2],[26.5,35.25],[25.6,35.75],[24.4,36.15],[23.85,36.75],[23.65,37.3],[23.6,37.85]],
  [[29.92,31.25],[29.0,31.75],[27.6,32.7],[26.0,33.6],[24.3,34.2],[22.8,34.6],[20.8,35.4],[18.0,36.4]]
];
// the Incense Road over land, from Dhofar to Gaza
window.INCENSE = [[54.43,17.04],[51.0,16.0],[47.0,15.1],[44.2,17.5],[42.0,19.6],[39.8,21.4],[39.6,24.5],[37.9,26.8],[36.4,28.5],[35.45,30.33],[34.45,31.5]];
