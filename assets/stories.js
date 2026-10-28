// Stories from Kalila wa Dimna (Ibn al-Muqaffa'), retold in simple, vocalised Arabic for learners.
// Marking inside a page: [word|English meaning] makes a tappable glossary word.
// Each story also carries its reading-comprehension questions (quiz) and the events to put in order (order).
window.COLLECTIONS = {
  kd: { ar: 'حِكَايَاتُ كَلِيلَةَ وَدِمْنَةَ', en: 'Kalila wa Dimna', note: { en: 'Retold in simple Arabic from Kalila wa Dimna (Ibn al-Muqaffa’).', ar: 'بتصرّف مبسّط عن كتاب كليلة ودمنة لابن المقفع.' } },
  ln: { ar: 'حِكَايَاتُ أَلْفِ لَيْلَةٍ وَلَيْلَةٍ', en: 'One Thousand and One Nights', note: { en: 'Retold in simple Arabic from One Thousand and One Nights.', ar: 'بتصرّف مبسّط عن حكايات ألف ليلة وليلة.' } },
  mp: { ar: 'قِصَصٌ مِنَ الأَدَبِ العَالَمِيِّ: مُوبَاسَان', en: 'World stories: Guy de Maupassant', note: { en: 'Retold in simple Arabic from a story by Guy de Maupassant (1850–1893).', ar: 'بتصرّف مبسّط عن قصة للكاتب الفرنسي جي دي موباسان (١٨٥٠–١٨٩٣م).' } }
};
window.STORIES = [
{
  id: 'lion', ar: 'الأَسَدُ وَالأَرْنَبُ', en: 'The Lion and the Hare', level: 1,
  cover: '🦁', partner: '🐇', bg: ['#FBEFD8', '#F3E6CF'], c: '#A26F1C',
  pages: [
    { e: '🌳🦁🌳', ar: 'كَانَ فِي [غَابَةٍ|a forest] كَبِيرَةٍ [أَسَدٌ|a lion] قَوِيٌّ، وَكَانَ يَصْطَادُ الحَيَوَانَاتِ كُلَّ يَوْمٍ، [فَخَافَتْ|were afraid] مِنْهُ الحَيَوَانَاتُ خَوْفاً شَدِيداً.',
      en: 'In a big forest there lived a strong lion. He hunted the animals every day, so the animals were very afraid of him.' },
    { e: '🦌🐇🦓🦁', ar: 'اجْتَمَعَتِ الحَيَوَانَاتُ وَذَهَبَتْ إِلَى الأَسَدِ، وَقَالَتْ لَهُ: «نُرْسِلُ إِلَيْكَ كُلَّ يَوْمٍ حَيَوَاناً وَاحِداً لِطَعَامِكَ، وَاتْرُكْنَا نَعِيشُ فِي [أَمَانٍ|safety]». فَوَافَقَ الأَسَدُ.',
      en: 'The animals gathered and went to the lion. They said: “Every day we will send you one animal for your food, and let us live in safety.” The lion agreed.' },
    { e: '🐇💡', ar: 'وَفِي يَوْمٍ مِنَ الأَيَّامِ جَاءَ دَوْرُ [الأَرْنَبِ|the hare]. فَقَالَ لِلحَيَوَانَاتِ: «لَا تَحْزَنُوا، عِنْدِي [فِكْرَةٌ|an idea]». ثُمَّ مَشَى إِلَى الأَسَدِ بِبُطْءٍ، [وَتَأَخَّرَ|was late] عَنْ مَوْعِدِهِ.',
      en: 'One day it was the hare’s turn. He told the animals: “Don’t be sad, I have an idea.” Then he walked slowly to the lion and was late for his time.' },
    { e: '🦁💢🐇', ar: 'غَضِبَ الأَسَدُ وَقَالَ: «لِمَاذَا تَأَخَّرْتَ؟» فَقَالَ الأَرْنَبُ: «أَخَذَ طَعَامَكَ مِنِّي أَسَدٌ آخَرُ فِي الطَّرِيقِ، وَقَالَ: أَنَا مَلِكُ هَذِهِ الغَابَةِ!»',
      en: 'The lion grew angry and said: “Why are you late?” The hare said: “Another lion took your food from me on the way, and he said: I am the king of this forest!”' },
    { e: '🐇🦁🕳️', ar: 'قَالَ الأَسَدُ: «أَيْنَ هَذَا الأَسَدُ؟ أَرِنِي إِيَّاهُ!» فَذَهَبَ الأَرْنَبُ بِالأَسَدِ إِلَى [بِئْرٍ|a well] عَمِيقَةٍ فِيهَا مَاءٌ صَافٍ، وَقَالَ: «هُوَ هُنَا، فِي هَذِهِ البِئْرِ».',
      en: 'The lion said: “Where is this lion? Show him to me!” So the hare took the lion to a deep well with clear water and said: “He is here, in this well.”' },
    { e: '🦁💧🦁', ar: 'نَظَرَ الأَسَدُ فِي البِئْرِ، فَرَأَى [صُورَتَهُ|his reflection] فِي المَاءِ، فَظَنَّ أَنَّهُ أَسَدٌ آخَرُ. فَقَفَزَ فِي البِئْرِ لِيُقَاتِلَهُ، [فَغَرِقَ|drowned].',
      en: 'The lion looked into the well and saw his own reflection in the water. He thought it was another lion, so he jumped into the well to fight it, and he drowned.' },
    { e: '🐇🎉🦌🦓', ar: 'رَجَعَ الأَرْنَبُ إِلَى الحَيَوَانَاتِ، وَأَخْبَرَهَا بِمَا حَدَثَ، فَفَرِحَتْ فَرَحاً كَبِيراً، وَعَاشَتْ فِي الغَابَةِ بِأَمَانٍ.',
      en: 'The hare went back to the animals and told them what had happened. They were very happy, and they lived safely in the forest.' }
  ],
  moral: { ar: 'العَقْلُ أَقْوَى مِنَ القُوَّةِ.', en: 'A clever mind is stronger than force.' },
  quiz: [
    { t: 'mcq', q: 'لِمَاذَا خَافَتِ الحَيَوَانَاتُ مِنَ الأَسَدِ؟', qen: 'Why were the animals afraid of the lion?',
      o: ['لِأَنَّهُ كَانَ يَصْطَادُهَا كُلَّ يَوْمٍ', 'لِأَنَّهُ كَانَ مَرِيضاً', 'لِأَنَّهُ كَانَ صَغِيراً'], a: 0 },
    { t: 'tf', q: 'وَصَلَ الأَرْنَبُ إِلَى الأَسَدِ مُبَكِّراً.', qen: 'The hare reached the lion early.', a: false },
    { t: 'mcq', q: 'مَاذَا قَالَ الأَرْنَبُ لِلأَسَدِ؟', qen: 'What did the hare tell the lion?',
      o: ['إِنَّ أَسَداً آخَرَ أَخَذَ طَعَامَهُ', 'إِنَّهُ نَسِيَ الطَّرِيقَ', 'إِنَّ الحَيَوَانَاتِ هَرَبَتْ'], a: 0 },
    { t: 'mcq', q: 'مَاذَا رَأَى الأَسَدُ فِي البِئْرِ؟', qen: 'What did the lion see in the well?',
      o: ['أَسَداً حَقِيقِيّاً', 'صُورَتَهُ فِي المَاءِ', 'أَرْنَباً آخَرَ'], a: 1 },
    { t: 'mcq', q: 'كَيْفَ انْتَصَرَ الأَرْنَبُ عَلَى الأَسَدِ؟', qen: 'How did the hare defeat the lion?',
      o: ['بِقُوَّتِهِ', 'بِسُرْعَتِهِ', 'بِذَكَائِهِ'], a: 2 },
    { t: 'tf', q: 'فَرِحَتِ الحَيَوَانَاتُ فِي آخِرِ القِصَّةِ.', qen: 'The animals were happy at the end of the story.', a: true }
  ],
  order: ['اتَّفَقَتِ الحَيَوَانَاتُ مَعَ الأَسَدِ.', 'تَأَخَّرَ الأَرْنَبُ عَنْ مَوْعِدِهِ.', 'ذَهَبَ الأَرْنَبُ بِالأَسَدِ إِلَى البِئْرِ.', 'قَفَزَ الأَسَدُ فِي البِئْرِ.']
},
{
  id: 'tortoise', ar: 'السُّلَحْفَاةُ وَالبَطَّتَانِ', en: 'The Tortoise and the Two Ducks', level: 1,
  cover: '🐢', partner: '🦆', bg: ['#E1EFF5', '#EEF4E8'], c: '#2D6F92',
  pages: [
    { e: '🐢🏞️🦆🦆', ar: 'كَانَتْ [سُلَحْفَاةٌ|a tortoise] تَعِيشُ قُرْبَ [بُحَيْرَةٍ|a lake] صَغِيرَةٍ، وَكَانَ لَهَا صَدِيقَتَانِ مِنَ [البَطِّ|ducks] تَزُورَانِهَا كُلَّ يَوْمٍ.',
      en: 'A tortoise lived near a small lake, and she had two duck friends who visited her every day.' },
    { e: '☀️🏜️🦆', ar: 'وَفِي سَنَةٍ مِنَ السَّنَوَاتِ قَلَّ المَطَرُ، [فَجَفَّ|dried up] مَاءُ البُحَيْرَةِ. فَقَالَتِ البَطَّتَانِ: «سَنَطِيرُ إِلَى بُحَيْرَةٍ أُخْرَى فِيهَا مَاءٌ كَثِيرٌ».',
      en: 'One year there was little rain, and the lake’s water dried up. The two ducks said: “We will fly to another lake that has plenty of water.”' },
    { e: '🐢😢🦆🦆', ar: 'حَزِنَتِ السُّلَحْفَاةُ وَقَالَتْ: «أَنَا لَا أَسْتَطِيعُ الطَّيَرَانَ، خُذَانِي مَعَكُمَا». فَقَالَتِ البَطَّتَانِ: «سَنَحْمِلُ [عُوداً|a stick] مِنْ طَرَفَيْهِ، وَأَنْتِ تُمْسِكِينَ وَسَطَهُ [بِفَمِكِ|your mouth]. وَلَكِنْ لَا تَتَكَلَّمِي أَبَداً وَنَحْنُ فِي السَّمَاءِ».',
      en: 'The tortoise was sad and said: “I cannot fly, take me with you.” The ducks said: “We will carry a stick by its two ends, and you hold its middle with your mouth. But never speak while we are in the sky.”' },
    { e: '🦆🐢🦆☁️', ar: '[طَارَتِ|flew] البَطَّتَانِ وَالسُّلَحْفَاةُ مُعَلَّقَةٌ بِالعُودِ. فَرَآهُمُ النَّاسُ فَتَعَجَّبُوا وَصَاحُوا: «انْظُرُوا! سُلَحْفَاةٌ تَطِيرُ بَيْنَ بَطَّتَيْنِ!»',
      en: 'The ducks flew, with the tortoise hanging from the stick. People saw them, were amazed, and shouted: “Look! A tortoise flying between two ducks!”' },
    { e: '🐢💬⬇️', ar: 'سَمِعَتِ السُّلَحْفَاةُ كَلَامَهُمْ، فَأَرَادَتْ أَنْ تَرُدَّ عَلَيْهِمْ. فَفَتَحَتْ فَمَهَا لِتَتَكَلَّمَ، [فَسَقَطَتْ|fell] مِنَ السَّمَاءِ إِلَى الأَرْضِ.',
      en: 'The tortoise heard their words and wanted to answer them. She opened her mouth to speak, and she fell from the sky to the ground.' },
    { e: '🦆🦆😔', ar: 'حَزِنَتِ البَطَّتَانِ عَلَى صَدِيقَتِهِمَا، وَقَالَتَا: «لَوْ [حَفِظَتْ|had kept] لِسَانَهَا لَنَجَتْ».',
      en: 'The two ducks were sad for their friend and said: “If she had held her tongue, she would have been saved.”' }
  ],
  moral: { ar: 'مَنْ لَا يَحْفَظُ لِسَانَهُ يَنْدَمُ.', en: 'Whoever cannot hold their tongue will regret it.' },
  quiz: [
    { t: 'mcq', q: 'أَيْنَ كَانَتِ السُّلَحْفَاةُ تَعِيشُ؟', qen: 'Where did the tortoise live?',
      o: ['فِي الصَّحْرَاءِ', 'قُرْبَ بُحَيْرَةٍ صَغِيرَةٍ', 'عَلَى جَبَلٍ عَالٍ'], a: 1 },
    { t: 'mcq', q: 'لِمَاذَا أَرَادَتِ البَطَّتَانِ السَّفَرَ؟', qen: 'Why did the ducks want to travel?',
      o: ['لِأَنَّ مَاءَ البُحَيْرَةِ جَفَّ', 'لِأَنَّهُمَا تُحِبَّانِ الطَّيَرَانَ', 'لِأَنَّ السُّلَحْفَاةَ طَلَبَتْ ذَلِكَ'], a: 0 },
    { t: 'tf', q: 'كَانَتِ السُّلَحْفَاةُ تَسْتَطِيعُ الطَّيَرَانَ.', qen: 'The tortoise could fly.', a: false },
    { t: 'mcq', q: 'كَيْفَ حَمَلَتِ البَطَّتَانِ السُّلَحْفَاةَ؟', qen: 'How did the ducks carry the tortoise?',
      o: ['عَلَى ظَهْرَيْهِمَا', 'فِي سَلَّةٍ', 'بِعُودٍ تُمْسِكُهُ بِفَمِهَا'], a: 2 },
    { t: 'tf', q: 'طَلَبَتِ البَطَّتَانِ مِنَ السُّلَحْفَاةِ أَلَّا تَتَكَلَّمَ.', qen: 'The ducks asked the tortoise not to speak.', a: true },
    { t: 'mcq', q: 'لِمَاذَا سَقَطَتِ السُّلَحْفَاةُ؟', qen: 'Why did the tortoise fall?',
      o: ['لِأَنَّ العُودَ انْكَسَرَ', 'لِأَنَّهَا فَتَحَتْ فَمَهَا لِتَتَكَلَّمَ', 'لِأَنَّ الرِّيحَ كَانَتْ شَدِيدَةً'], a: 1 }
  ],
  order: ['جَفَّ مَاءُ البُحَيْرَةِ.', 'حَمَلَتِ البَطَّتَانِ العُودَ.', 'صَاحَ النَّاسُ مُتَعَجِّبِينَ.', 'فَتَحَتِ السُّلَحْفَاةُ فَمَهَا فَسَقَطَتْ.']
},
{
  id: 'dove', ar: 'الحَمَامَةُ المُطَوَّقَةُ', en: 'The Ringdove', level: 2,
  cover: '🕊️', partner: '🐭', bg: ['#E6ECF6', '#F1EAF8'], c: '#34578A',
  pages: [
    { e: '🧔🕸️🌾', ar: 'خَرَجَ [صَيَّادٌ|a hunter] إِلَى الغَابَةِ، فَنَصَبَ [شَبَكَتَهُ|his net]، وَنَثَرَ عَلَيْهَا [حَبّاً|grain]، وَجَلَسَ يَنْتَظِرُ.',
      en: 'A hunter went out to the forest. He set up his net, scattered grain on it, and sat down to wait.' },
    { e: '🕊️🕊️🕊️', ar: 'وَكَانَتْ هُنَاكَ [حَمَامَةٌ|a dove] مُطَوَّقَةٌ هِيَ مَلِكَةُ الحَمَامِ، تَطِيرُ مَعَ سِرْبِهَا. فَرَأَى الحَمَامُ الحَبَّ، فَنَزَلَ عَلَيْهِ، فَوَقَعَ فِي الشَّبَكَةِ.',
      en: 'There was a ringdove, the queen of the doves, flying with her flock. The doves saw the grain, landed on it, and were caught in the net.' },
    { e: '🕊️🕸️😟', ar: 'أَخَذَ كُلُّ حَمَامٍ يُحَاوِلُ أَنْ يُخَلِّصَ نَفْسَهُ وَحْدَهُ. فَقَالَتِ المُطَوَّقَةُ: «لَا تَتَفَرَّقُوا! [تَعَاوَنُوا|cooperate]، وَطِيرُوا مَعاً بِالشَّبَكَةِ».',
      en: 'Each dove began trying to free itself alone. The ringdove said: “Don’t split up! Work together, and fly off with the net all at once.”' },
    { e: '🕊️🕸️🕊️🏃', ar: 'فَتَعَاوَنَ الحَمَامُ، وَطَارَ بِالشَّبَكَةِ مَعاً، وَالصَّيَّادُ يَجْرِي خَلْفَهُ حَتَّى تَعِبَ، ثُمَّ رَجَعَ حَزِيناً.',
      en: 'The doves worked together and flew off with the net. The hunter ran after them until he was tired, then went back sad.' },
    { e: '🕊️🐭', ar: 'ذَهَبَتِ المُطَوَّقَةُ بِالحَمَامِ إِلَى صَدِيقِهَا [الجُرَذِ|the rat] زِيرَكَ، وَطَلَبَتْ مِنْهُ أَنْ [يَقْرِضَ|gnaw] [الحِبَالَ|the ropes]، وَأَنْ يَبْدَأَ بِأَصْحَابِهَا قَبْلَهَا.',
      en: 'The ringdove led the doves to her friend Zirak the rat. She asked him to gnaw the ropes, and to start with her companions before her.' },
    { e: '🐭✂️🕊️', ar: 'قَالَ الجُرَذُ: «لِمَاذَا تَبْدَئِينَ بِهِمْ؟» قَالَتْ: «أَنَا مَسْؤُولَةٌ عَنْهُمْ، وَأَخَافُ أَنْ تَتْعَبَ فَتَتْرُكَ أَحَدَهُمْ».',
      en: 'The rat asked: “Why do you start with them?” She said: “I am responsible for them, and I fear you might grow tired and leave one of them behind.”' },
    { e: '🕊️🕊️🕊️☀️', ar: 'فَقَطَعَ الجُرَذُ حِبَالَ الحَمَامِ كُلِّهِ، ثُمَّ حِبَالَ المُطَوَّقَةِ، فَطَارَ الجَمِيعُ أَحْرَاراً سُعَدَاءَ.',
      en: 'The rat cut the ropes of all the doves, then the ringdove’s ropes, and they all flew away free and happy.' }
  ],
  moral: { ar: 'فِي الاتِّحَادِ قُوَّةٌ.', en: 'In unity there is strength.' },
  quiz: [
    { t: 'mcq', q: 'مَاذَا وَضَعَ الصَّيَّادُ عَلَى الشَّبَكَةِ؟', qen: 'What did the hunter put on the net?',
      o: ['مَاءً', 'حَبّاً', 'لَحْماً'], a: 1 },
    { t: 'mcq', q: 'مَنِ المُطَوَّقَةُ؟', qen: 'Who is the ringdove?',
      o: ['مَلِكَةُ الحَمَامِ', 'زَوْجَةُ الصَّيَّادِ', 'صَدِيقَةُ الأَسَدِ'], a: 0 },
    { t: 'tf', q: 'نَجَا الحَمَامُ لِأَنَّ كُلَّ حَمَامَةٍ عَمِلَتْ وَحْدَهَا.', qen: 'The doves escaped because each one worked alone.', a: false },
    { t: 'mcq', q: 'مَنْ قَطَعَ الحِبَالَ؟', qen: 'Who cut the ropes?',
      o: ['الصَّيَّادُ', 'الجُرَذُ زِيرَكُ', 'الحَمَامَةُ المُطَوَّقَةُ'], a: 1 },
    { t: 'tf', q: 'طَلَبَتِ المُطَوَّقَةُ أَنْ يَبْدَأَ الجُرَذُ بِأَصْحَابِهَا.', qen: 'The ringdove asked the rat to start with her companions.', a: true },
    { t: 'mcq', q: 'أَيُّ صِفَةٍ تَصِفُ المُطَوَّقَةَ؟', qen: 'Which quality describes the ringdove?',
      o: ['أَنَانِيَّةٌ', 'كَسُولَةٌ', 'مَسْؤُولَةٌ تُحِبُّ أَصْحَابَهَا'], a: 2 }
  ],
  order: ['نَصَبَ الصَّيَّادُ شَبَكَتَهُ.', 'وَقَعَ الحَمَامُ فِي الشَّبَكَةِ.', 'طَارَ الحَمَامُ بِالشَّبَكَةِ مَعاً.', 'قَطَعَ الجُرَذُ الحِبَالَ.']
},
{
  id: 'monkey', ar: 'القِرْدُ وَالغَيْلَمُ', en: 'The Monkey and the Turtle', level: 2,
  cover: '🐒', partner: '🐢', bg: ['#E2F0EB', '#FBEFD8'], c: '#2C7A6E',
  pages: [
    { e: '🌴🐒🌊🐢', ar: 'كَانَ [قِرْدٌ|a monkey] يَعِيشُ عَلَى شَجَرَةِ [تِينٍ|figs] قُرْبَ البَحْرِ، وَكَانَ يَرْمِي التِّينَ [لِغَيْلَمٍ|a turtle] يَعِيشُ فِي المَاءِ، فَصَارَا صَدِيقَيْنِ.',
      en: 'A monkey lived in a fig tree near the sea. He used to throw figs to a turtle who lived in the water, and they became friends.' },
    { e: '🐢🏠😠', ar: 'غَابَ الغَيْلَمُ عَنْ بَيْتِهِ أَيَّاماً كَثِيرَةً، فَغَضِبَتْ زَوْجَتُهُ، [وَتَظَاهَرَتْ|pretended] بِالمَرَضِ، وَقَالَتْ: «لَا يَشْفِينِي إِلَّا [قَلْبُ|the heart of] قِرْدٍ!»',
      en: 'The turtle stayed away from home for many days. His wife became angry, pretended to be ill, and said: “Nothing will cure me except a monkey’s heart!”' },
    { e: '🐢🐒🌊', ar: 'ذَهَبَ الغَيْلَمُ إِلَى القِرْدِ وَقَالَ: «تَعَالَ إِلَى بَيْتِي لِأُكْرِمَكَ». فَرَكِبَ القِرْدُ عَلَى [ظَهْرِهِ|his back]، [وَسَبَحَ|swam] بِهِ فِي البَحْرِ.',
      en: 'The turtle went to the monkey and said: “Come to my home so I can honour you.” The monkey climbed on his back, and the turtle swam with him into the sea.' },
    { e: '🌊🐢😨🐒', ar: 'فِي وَسَطِ البَحْرِ قَالَ الغَيْلَمُ: «زَوْجَتِي مَرِيضَةٌ، وَدَوَاؤُهَا قَلْبُ قِرْدٍ». فَخَافَ القِرْدُ، وَلَكِنَّهُ فَكَّرَ بِسُرْعَةٍ.',
      en: 'In the middle of the sea the turtle said: “My wife is ill, and her medicine is a monkey’s heart.” The monkey was frightened, but he thought fast.' },
    { e: '🐒💡🌴', ar: 'قَالَ القِرْدُ: «لِمَاذَا لَمْ تُخْبِرْنِي؟ لَقَدْ تَرَكْتُ قَلْبِي عَلَى الشَّجَرَةِ! ارْجِعْ بِي لِآخُذَهُ». فَصَدَّقَهُ الغَيْلَمُ وَرَجَعَ.',
      en: 'The monkey said: “Why didn’t you tell me? I left my heart on the tree! Take me back so I can get it.” The turtle believed him and went back.' },
    { e: '🏝️🐒🌴', ar: 'لَمَّا وَصَلَا إِلَى [الشَّاطِئِ|the shore]، قَفَزَ القِرْدُ إِلَى أَعْلَى الشَّجَرَةِ وَقَالَ: «لَنْ أَنْزِلَ إِلَيْكَ أَبَداً، فَقَدْ خُنْتَ صَدَاقَتَنَا».',
      en: 'When they reached the shore, the monkey jumped to the top of the tree and said: “I will never come down to you; you betrayed our friendship.”' }
  ],
  moral: { ar: 'سُرْعَةُ التَّفْكِيرِ تُنْقِذُ مِنَ الخَطَرِ.', en: 'Quick thinking saves you from danger.' },
  quiz: [
    { t: 'mcq', q: 'مَاذَا كَانَ القِرْدُ يُعْطِي الغَيْلَمَ؟', qen: 'What did the monkey give the turtle?',
      o: ['تِيناً', 'سَمَكاً', 'مَاءً'], a: 0 },
    { t: 'tf', q: 'كَانَتْ زَوْجَةُ الغَيْلَمِ مَرِيضَةً حَقّاً.', qen: 'The turtle’s wife was really ill.', a: false },
    { t: 'mcq', q: 'مَاذَا طَلَبَتْ زَوْجَةُ الغَيْلَمِ؟', qen: 'What did the turtle’s wife ask for?',
      o: ['تِيناً كَثِيراً', 'قَلْبَ قِرْدٍ', 'بَيْتاً جَدِيداً'], a: 1 },
    { t: 'mcq', q: 'أَيْنَ عَرَفَ القِرْدُ الحَقِيقَةَ؟', qen: 'Where did the monkey learn the truth?',
      o: ['عَلَى الشَّجَرَةِ', 'فِي بَيْتِ الغَيْلَمِ', 'فِي وَسَطِ البَحْرِ'], a: 2 },
    { t: 'tf', q: 'قَالَ القِرْدُ إِنَّهُ تَرَكَ قَلْبَهُ عَلَى الشَّجَرَةِ.', qen: 'The monkey said he had left his heart on the tree.', a: true },
    { t: 'mcq', q: 'كَيْفَ نَجَا القِرْدُ؟', qen: 'How did the monkey escape?',
      o: ['بِحِيلَةٍ ذَكِيَّةٍ', 'بِالسِّبَاحَةِ', 'بِمُسَاعَدَةِ الطُّيُورِ'], a: 0 }
  ],
  order: ['صَارَ القِرْدُ وَالغَيْلَمُ صَدِيقَيْنِ.', 'تَظَاهَرَتِ الزَّوْجَةُ بِالمَرَضِ.', 'أَخْبَرَ الغَيْلَمُ القِرْدَ بِالحَقِيقَةِ.', 'قَفَزَ القِرْدُ إِلَى أَعْلَى الشَّجَرَةِ.']
},
{
  id: 'drum', ar: 'الثَّعْلَبُ وَالطَّبْلُ', en: 'The Fox and the Drum', level: 1,
  cover: '🦊', partner: '🥁', bg: ['#F8E5DD', '#FBEFD8'], c: '#A23E2E',
  pages: [
    { e: '🦊🍂', ar: 'خَرَجَ [ثَعْلَبٌ|a fox] [جَائِعٌ|hungry] يَبْحَثُ عَنْ طَعَامٍ، فَوَصَلَ إِلَى شَجَرَةٍ عُلِّقَ عَلَيْهَا [طَبْلٌ|a drum] كَبِيرٌ.',
      en: 'A hungry fox went out looking for food. He came to a tree on which a big drum had been hung.' },
    { e: '🌬️🌳🥁', ar: 'وَكَانَتِ [الرِّيحُ|the wind] تُحَرِّكُ أَغْصَانَ الشَّجَرَةِ، فَتَضْرِبُ الطَّبْلَ، فَيُخْرِجُ [صَوْتاً|a sound] عَالِياً.',
      en: 'The wind moved the branches of the tree; they hit the drum, and it made a loud sound.' },
    { e: '🦊🤔🥁', ar: 'سَمِعَ الثَّعْلَبُ الصَّوْتَ، وَنَظَرَ إِلَى الطَّبْلِ الكَبِيرِ، فَقَالَ فِي نَفْسِهِ: «هَذَا شَيْءٌ [ضَخْمٌ|huge]، وَلَا بُدَّ أَنَّ فِيهِ لَحْماً كَثِيراً».',
      en: 'The fox heard the sound and looked at the big drum. He said to himself: “This is something huge; there must be a lot of meat in it.”' },
    { e: '🦊💪🥁', ar: 'تَعِبَ الثَّعْلَبُ كَثِيراً حَتَّى شَقَّ جِلْدَ الطَّبْلِ. فَلَمَّا نَظَرَ فِيهِ وَجَدَهُ [فَارِغاً|empty] لَيْسَ فِيهِ شَيْءٌ.',
      en: 'The fox worked very hard until he tore the drum’s skin. When he looked inside, he found it empty, with nothing in it.' },
    { e: '🦊😮‍💨', ar: 'فَقَالَ الثَّعْلَبُ: «لَعَلَّ أَضْعَفَ الأَشْيَاءِ أَعْلَاهَا صَوْتاً، وَأَكْبَرُهَا حَجْماً!» ثُمَّ مَضَى يَبْحَثُ عَنْ طَعَامٍ حَقِيقِيٍّ.',
      en: 'The fox said: “Perhaps the weakest things are the loudest and the biggest!” Then he went on looking for real food.' }
  ],
  moral: { ar: 'لَا تَحْكُمْ عَلَى الشَّيْءِ مِنْ [مَظْهَرِهِ|its appearance].', en: 'Don’t judge a thing by its appearance.' },
  quiz: [
    { t: 'mcq', q: 'لِمَاذَا خَرَجَ الثَّعْلَبُ؟', qen: 'Why did the fox go out?',
      o: ['لِيَلْعَبَ', 'لِيَبْحَثَ عَنْ طَعَامٍ', 'لِيَزُورَ صَدِيقَهُ'], a: 1 },
    { t: 'mcq', q: 'مَا الَّذِي كَانَ يَضْرِبُ الطَّبْلَ؟', qen: 'What was hitting the drum?',
      o: ['أَغْصَانُ الشَّجَرَةِ', 'رَجُلٌ', 'الثَّعْلَبُ'], a: 0 },
    { t: 'tf', q: 'ظَنَّ الثَّعْلَبُ أَنَّ فِي الطَّبْلِ لَحْماً.', qen: 'The fox thought there was meat in the drum.', a: true },
    { t: 'tf', q: 'وَجَدَ الثَّعْلَبُ طَعَاماً كَثِيراً فِي الطَّبْلِ.', qen: 'The fox found a lot of food in the drum.', a: false },
    { t: 'mcq', q: 'مَاذَا تَعَلَّمَ الثَّعْلَبُ؟', qen: 'What did the fox learn?',
      o: ['أَنَّ الأَصْوَاتَ العَالِيَةَ مُخِيفَةٌ', 'أَنَّ الطُّبُولَ لَذِيذَةٌ', 'أَنَّ الكَبِيرَ قَدْ يَكُونُ فَارِغاً'], a: 2 }
  ],
  order: ['خَرَجَ الثَّعْلَبُ جَائِعاً.', 'سَمِعَ صَوْتَ الطَّبْلِ.', 'شَقَّ جِلْدَ الطَّبْلِ.', 'وَجَدَ الطَّبْلَ فَارِغاً.']
},
{
  id: 'weasel', ar: 'النَّاسِكُ وَابْنُ عِرْسٍ', en: 'The Hermit and the Weasel', level: 2,
  cover: '🦦', partner: '👶', bg: ['#F1EAF8', '#E7F3E3'], c: '#6B4E9B',
  pages: [
    { e: '👴👩👶🦦', ar: 'كَانَ رَجُلٌ [نَاسِكٌ|a hermit] يَعِيشُ مَعَ زَوْجَتِهِ، وَلَهُمَا ابْنٌ صَغِيرٌ. وَكَانَ عِنْدَهُمَا [ابْنُ عِرْسٍ|a weasel] أَلِيفٌ يُحِبُّهُ الجَمِيعُ.',
      en: 'A hermit lived with his wife, and they had a little son. They also had a tame weasel that everyone loved.' },
    { e: '👩🧺👴🚪', ar: 'ذَهَبَتِ الأُمُّ إِلَى السُّوقِ، وَتَرَكَتِ [الطِّفْلَ|the child] مَعَ أَبِيهِ. ثُمَّ خَرَجَ الأَبُ لِأَمْرٍ مُهِمٍّ، وَتَرَكَ ابْنَ عِرْسٍ عِنْدَ الطِّفْلِ.',
      en: 'The mother went to the market and left the child with his father. Then the father went out for something important and left the weasel with the child.' },
    { e: '🐍👶🦦', ar: 'دَخَلَتْ [حَيَّةٌ|a snake] سَوْدَاءُ إِلَى البَيْتِ، وَاقْتَرَبَتْ مِنَ الطِّفْلِ، فَقَفَزَ عَلَيْهَا ابْنُ عِرْسٍ وَقَتَلَهَا، فَصَارَ عَلَى فَمِهِ [دَمٌ|blood].',
      en: 'A black snake came into the house and moved close to the child. The weasel jumped on it and killed it, and there was blood on its mouth.' },
    { e: '👴😠🦦', ar: 'رَجَعَ النَّاسِكُ، فَاسْتَقْبَلَهُ ابْنُ عِرْسٍ عِنْدَ البَابِ فَرِحاً. فَلَمَّا رَأَى الدَّمَ عَلَى فَمِهِ [ظَنَّ|thought wrongly] أَنَّهُ آذَى ابْنَهُ، فَضَرَبَهُ بِعَصَاهُ قَبْلَ أَنْ يَتَأَكَّدَ.',
      en: 'The hermit returned, and the weasel greeted him happily at the door. When he saw blood on its mouth, he thought it had hurt his son, and he struck it with his stick before making sure.' },
    { e: '👴👶🐍', ar: 'دَخَلَ النَّاسِكُ البَيْتَ، فَوَجَدَ ابْنَهُ نَائِماً سَالِماً، وَوَجَدَ الحَيَّةَ مَقْتُولَةً. فَعَرَفَ الحَقِيقَةَ، [وَنَدِمَ|regretted] نَدَماً شَدِيداً.',
      en: 'The hermit went into the house and found his son sleeping safely, and the snake dead. He realised the truth and deeply regretted what he had done.' },
    { e: '👩👴💭', ar: 'وَلَمَّا رَجَعَتِ الأُمُّ وَعَرَفَتْ مَا حَدَثَ قَالَتْ: «هَذَا جَزَاءُ مَنْ يَعْجَلُ وَلَا [يَتَثَبَّتُ|makes sure]».',
      en: 'When the mother came back and learned what had happened, she said: “This is what comes to one who hurries and does not make sure.”' }
  ],
  moral: { ar: 'تَمَهَّلْ وَتَثَبَّتْ قَبْلَ أَنْ تَحْكُمَ.', en: 'Slow down and make sure before you judge.' },
  quiz: [
    { t: 'mcq', q: 'مَعَ مَنْ تَرَكَ الأَبُ الطِّفْلَ؟', qen: 'Who did the father leave the child with?',
      o: ['مَعَ ابْنِ عِرْسٍ', 'مَعَ جَارِهِ', 'مَعَ أُمِّهِ'], a: 0 },
    { t: 'mcq', q: 'مَاذَا دَخَلَ البَيْتَ؟', qen: 'What came into the house?',
      o: ['قِطٌّ', 'حَيَّةٌ', 'لِصٌّ'], a: 1 },
    { t: 'tf', q: 'حَمَى ابْنُ عِرْسٍ الطِّفْلَ مِنَ الحَيَّةِ.', qen: 'The weasel protected the child from the snake.', a: true },
    { t: 'mcq', q: 'لِمَاذَا غَضِبَ النَّاسِكُ؟', qen: 'Why did the hermit get angry?',
      o: ['لِأَنَّ ابْنَ عِرْسٍ هَرَبَ', 'لِأَنَّ الطِّفْلَ كَانَ يَبْكِي', 'لِأَنَّهُ رَأَى دَماً عَلَى فَمِ ابْنِ عِرْسٍ'], a: 2 },
    { t: 'tf', q: 'تَأَكَّدَ النَّاسِكُ مِنَ الأَمْرِ قَبْلَ أَنْ يَضْرِبَ.', qen: 'The hermit made sure before striking.', a: false },
    { t: 'mcq', q: 'مَا الدَّرْسُ مِنَ القِصَّةِ؟', qen: 'What is the lesson of the story?',
      o: ['لَا تَتْرُكْ بَيْتَكَ', 'تَثَبَّتْ قَبْلَ أَنْ تَحْكُمَ', 'لَا تُرَبِّ الحَيَوَانَاتِ'], a: 1 }
  ],
  order: ['خَرَجَ الأَبُ وَتَرَكَ ابْنَ عِرْسٍ عِنْدَ الطِّفْلِ.', 'قَتَلَ ابْنُ عِرْسٍ الحَيَّةَ.', 'ضَرَبَ النَّاسِكُ ابْنَ عِرْسٍ.', 'وَجَدَ النَّاسِكُ ابْنَهُ سَالِماً.']
},
// ---- World stories: Guy de Maupassant, retold in simple Arabic (originals are in the public domain) ----
{
  id: 'necklace', col: 'mp', ar: 'العِقْدُ', en: 'The Necklace', level: 3, icon: 'gem',
  cover: '', partner: '', bg: ['#F1EAF8', '#FBEFD8'], c: '#6B4E9B',
  pages: [
    { ar: 'كَانَتْ مَاتِيلْدُ امْرَأَةً جَمِيلَةً، تَعِيشُ مَعَ زَوْجِهَا المُوَظَّفِ الصَّغِيرِ فِي بَيْتٍ بَسِيطٍ فِي بَارِيسَ. وَكَانَتْ [تَحْلُمُ|dreamed] دَائِماً بِالقُصُورِ وَالثِّيَابِ الغَالِيَةِ [وَالجَوَاهِرِ|jewels]، فَلَا تَرْضَى بِحَيَاتِهَا.',
      en: 'Mathilde was a beautiful woman who lived with her husband, a minor clerk, in a simple home in Paris. She always dreamed of palaces, expensive clothes and jewels, and she was never content with her life.' },
    { ar: 'وَفِي يَوْمٍ جَاءَهَا زَوْجُهَا [بِدَعْوَةٍ|an invitation] إِلَى حَفْلٍ كَبِيرٍ فِي قَصْرِ الوَزِيرِ، فَبَكَتْ وَقَالَتْ: «لَيْسَ عِنْدِي ثَوْبٌ وَلَا حُلِيٌّ». فَأَعْطَاهَا المَالَ الَّذِي جَمَعَهُ لِنَفْسِهِ، فَاشْتَرَتْ ثَوْباً جَمِيلاً.',
      en: 'One day her husband brought her an invitation to a grand party at the minister’s palace. She cried and said: “I have no dress and no jewellery.” He gave her the money he had saved for himself, and she bought a beautiful dress.' },
    { ar: 'ثُمَّ ذَهَبَتْ إِلَى صَدِيقَتِهَا الغَنِيَّةِ مَدَامِ فُورِسْتِيِيه، [فَاسْتَعَارَتْ|borrowed] مِنْهَا عِقْداً مِنَ المَاسِ يَلْمَعُ لَمَعَاناً عَجِيباً.',
      en: 'Then she went to her rich friend, Madame Forestier, and borrowed a diamond necklace that sparkled wonderfully.' },
    { ar: 'وَفِي الحَفْلِ كَانَتْ مَاتِيلْدُ أَجْمَلَ النِّسَاءِ، وَكَانَتْ سَعِيدَةً جِدّاً. وَلَمَّا رَجَعَتْ إِلَى البَيْتِ نَظَرَتْ فِي المِرْآةِ، فَإِذَا العِقْدُ [ضَائِعٌ|lost]!',
      en: 'At the party Mathilde was the most beautiful woman there, and she was very happy. When she got home she looked in the mirror — and the necklace was gone!' },
    { ar: 'بَحَثَ الزَّوْجَانِ عَنْهُ فِي كُلِّ مَكَانٍ فَلَمْ يَجِدَاهُ. فَاشْتَرَيَا عِقْداً يُشْبِهُهُ بِسِتَّةٍ وَثَلَاثِينَ أَلْفَ فَرَنْكٍ، [وَاسْتَدَانَا|borrowed money] أَكْثَرَ ثَمَنِهِ، وَرَدَّا العِقْدَ الجَدِيدَ إِلَى صَاحِبَتِهِ.',
      en: 'The couple searched everywhere but could not find it. So they bought a necklace just like it for thirty-six thousand francs, borrowing most of the price, and returned the new necklace to its owner.' },
    { ar: 'وَعَاشَا عَشْرَ سَنَوَاتٍ فِي فَقْرٍ شَدِيدٍ: تَرَكَا بَيْتَهُمَا، وَصَارَتْ مَاتِيلْدُ تَغْسِلُ وَتَطْبُخُ وَتَحْمِلُ المَاءَ بِنَفْسِهَا، حَتَّى [سَدَّدَا|paid off] الدَّيْنَ كُلَّهُ، وَذَهَبَ جَمَالُهَا.',
      en: 'They lived ten years in hard poverty: they left their home, and Mathilde washed, cooked and carried water herself, until they had paid off the whole debt — and her beauty was gone.' },
    { ar: 'وَفِي يَوْمٍ رَأَتْ صَدِيقَتَهَا القَدِيمَةَ، فَحَكَتْ لَهَا القِصَّةَ كُلَّهَا. فَقَالَتِ الصَّدِيقَةُ وَهِيَ [مُتَأَثِّرَةٌ|deeply moved]: «يَا مِسْكِينَةُ! كَانَ عِقْدِي [مُزَيَّفاً|fake]، لَا يُسَاوِي أَكْثَرَ مِنْ خَمْسِمِئَةِ فَرَنْكٍ!»',
      en: 'One day she met her old friend and told her the whole story. Her friend, deeply moved, said: “Oh, you poor thing! My necklace was fake. It was worth no more than five hundred francs!”' }
  ],
  moral: { ar: 'لَا تَخْدَعْكَ المَظَاهِرُ، وَقُلِ الحَقِيقَةَ مِنَ البِدَايَةِ.', en: 'Don’t be fooled by appearances, and tell the truth from the start.' },
  quiz: [
    { t: 'mcq', q: 'بِمَاذَا كَانَتْ مَاتِيلْدُ تَحْلُمُ؟', qen: 'What did Mathilde dream of?', o: ['بِالقُصُورِ وَالجَوَاهِرِ', 'بِالسَّفَرِ فِي البَحْرِ', 'بِالعَمَلِ فِي مَكْتَبٍ'], a: 0 },
    { t: 'tf', q: 'اشْتَرَتْ مَاتِيلْدُ العِقْدَ مِنَ السُّوقِ قَبْلَ الحَفْلِ.', qen: 'Mathilde bought the necklace at the market before the party.', a: false },
    { t: 'mcq', q: 'مَتَى عَرَفَتْ أَنَّ العِقْدَ ضَاعَ؟', qen: 'When did she find out the necklace was lost?', o: ['فِي أَثْنَاءِ الحَفْلِ', 'بَعْدَ أَنْ رَجَعَتْ إِلَى البَيْتِ', 'بَعْدَ عَشْرِ سَنَوَاتٍ'], a: 1 },
    { t: 'mcq', q: 'كَمْ سَنَةً عَمِلَ الزَّوْجَانِ لِيُسَدِّدَا الدَّيْنَ؟', qen: 'How many years did the couple work to pay the debt?', o: ['سَنَةً وَاحِدَةً', 'خَمْسَ سَنَوَاتٍ', 'عَشْرَ سَنَوَاتٍ'], a: 2 },
    { t: 'tf', q: 'كَانَ عِقْدُ الصَّدِيقَةِ مِنَ المَاسِ الحَقِيقِيِّ.', qen: 'The friend’s necklace was made of real diamonds.', a: false },
    { t: 'mcq', q: 'مَا الَّذِي كَانَ سَيُغَيِّرُ القِصَّةَ كُلَّهَا؟', qen: 'What would have changed the whole story?', o: ['أَنْ تَقُولَ الحَقِيقَةَ لِصَدِيقَتِهَا', 'أَنْ تَشْتَرِيَ ثَوْباً آخَرَ', 'أَنْ تَبْقَى فِي الحَفْلِ أَطْوَلَ'], a: 0 }
  ],
  order: ['اسْتَعَارَتْ مَاتِيلْدُ العِقْدَ.', 'ضَاعَ العِقْدُ بَعْدَ الحَفْلِ.', 'عَمِلَ الزَّوْجَانِ عَشْرَ سَنَوَاتٍ.', 'عَرَفَتْ مَاتِيلْدُ أَنَّ العِقْدَ كَانَ مُزَيَّفاً.']
},
{
  id: 'jules', col: 'mp', ar: 'عَمِّي جُول', en: 'My Uncle Jules', level: 3, icon: 'dhow',
  cover: '', partner: '', bg: ['#E1EFF5', '#F3E6CF'], c: '#2D6F92',
  pages: [
    { ar: 'كَانَتْ أُسْرَتِي فَقِيرَةً، تَعِيشُ فِي مَدِينَةٍ عَلَى البَحْرِ. وَكَانَ لِأَبِي أَخٌ اسْمُهُ جُول، [أَضَاعَ|wasted] مَالَهُ فِي شَبَابِهِ، فَأَرْسَلَتْهُ الأُسْرَةُ فِي سَفِينَةٍ إِلَى أَمْرِيكَا.',
      en: 'My family was poor and lived in a town by the sea. My father had a brother named Jules who wasted his money when he was young, so the family sent him on a ship to America.' },
    { ar: 'وَبَعْدَ سَنَوَاتٍ جَاءَتْ مِنْهُ [رِسَالَةٌ|a letter] يَقُولُ فِيهَا: «صِرْتُ غَنِيّاً، وَسَأَرْجِعُ يَوْماً لِأُعَوِّضَكُمْ». فَصَارَ عَمِّي جُول أَمَلَ الأُسْرَةِ كُلِّهَا.',
      en: 'Years later a letter came from him saying: “I have become rich, and one day I will come back to repay you.” Uncle Jules became the hope of the whole family.' },
    { ar: 'وَكُنَّا كُلَّ يَوْمِ أَحَدٍ نَمْشِي عَلَى [رَصِيفِ المِينَاءِ|the harbour pier]، فَيَنْظُرُ أَبِي إِلَى السُّفُنِ القَادِمَةِ وَيَقُولُ: «لَعَلَّ جُول فِي هَذِهِ السَّفِينَةِ!»',
      en: 'Every Sunday we walked along the harbour pier, and my father looked at the arriving ships and said: “Perhaps Jules is on this ship!”' },
    { ar: 'وَلَمَّا تَزَوَّجَتْ أُخْتِي، سَافَرْنَا جَمِيعاً فِي سَفِينَةٍ صَغِيرَةٍ إِلَى جَزِيرَةِ جِيرْزِي. وَكَانَ عَلَى السَّفِينَةِ رَجُلٌ عَجُوزٌ فَقِيرٌ يَبِيعُ [المَحَارَ|oysters] لِلْمُسَافِرِينَ.',
      en: 'When my sister married, we all travelled on a small ship to the island of Jersey. On the ship a poor old man was selling oysters to the passengers.' },
    { ar: 'نَظَرَ أَبِي إِلَى البَائِعِ طَوِيلاً، ثُمَّ [شَحَبَ|turned pale] وَجْهُهُ، وَقَالَ لِأُمِّي: «إِنَّهُ يُشْبِهُ جُول!». فَسَأَلَ [القُبْطَانَ|the captain] عَنْهُ، فَقَالَ: «هُوَ رَجُلٌ عَادَ مِنْ أَمْرِيكَا فَقِيراً، وَلَا يُرِيدُ أَنْ يَرْجِعَ إِلَى أَهْلِهِ».',
      en: 'My father stared at the seller for a long time, then his face went pale and he told my mother: “He looks like Jules!” He asked the captain about him, who said: “He came back from America poor, and he doesn’t want to go back to his family.”' },
    { ar: 'غَضِبَتْ أُمِّي، وَخَافَ أَبِي أَنْ يَعْرِفَ النَّاسُ الحَقِيقَةَ، فَابْتَعَدَا عَنْهُ. وَأَرْسَلَتْنِي أُمِّي لِأَدْفَعَ ثَمَنَ المَحَارِ، فَنَظَرْتُ إِلَى يَدَيْهِ المُتْعَبَتَيْنِ، وَأَعْطَيْتُهُ مَالاً زَائِداً، وَقُلْتُ فِي نَفْسِي: «هَذَا عَمِّي».',
      en: 'My mother was angry, and my father was afraid people would learn the truth, so they kept away from him. My mother sent me to pay for the oysters. I looked at his tired hands, gave him extra money, and said to myself: “This is my uncle.”' },
    { ar: 'وَرَجَعْنَا فِي سَفِينَةٍ أُخْرَى حَتَّى لَا نَلْقَاهُ، وَلَمْ أَرَ عَمِّي جُول بَعْدَ ذَلِكَ أَبَداً.',
      en: 'We came back on a different ship so as not to meet him, and I never saw my Uncle Jules again.' }
  ],
  moral: { ar: 'قِيمَةُ الإِنْسَانِ لَيْسَتْ فِي مَالِهِ.', en: 'A person’s worth is not in his money.' },
  quiz: [
    { t: 'mcq', q: 'لِمَاذَا سَافَرَ جُول إِلَى أَمْرِيكَا؟', qen: 'Why did Jules go to America?', o: ['لِأَنَّهُ أَضَاعَ مَالَهُ', 'لِيَدْرُسَ فِي الجَامِعَةِ', 'لِيَزُورَ أَخَاهُ'], a: 0 },
    { t: 'tf', q: 'كَتَبَ جُول فِي رِسَالَتِهِ أَنَّهُ صَارَ غَنِيّاً.', qen: 'Jules wrote in his letter that he had become rich.', a: true },
    { t: 'mcq', q: 'مَاذَا كَانَ الأَبُ يَفْعَلُ يَوْمَ الأَحَدِ؟', qen: 'What did the father do on Sundays?', o: ['يَبِيعُ المَحَارَ', 'يَنْظُرُ إِلَى السُّفُنِ القَادِمَةِ', 'يَكْتُبُ الرَّسَائِلَ'], a: 1 },
    { t: 'mcq', q: 'مَنْ كَانَ بَائِعُ المَحَارِ؟', qen: 'Who was the oyster seller?', o: ['القُبْطَانُ', 'زَوْجُ الأُخْتِ', 'عَمِّي جُول'], a: 2 },
    { t: 'tf', q: 'فَرِحَ الأَبُ وَالأُمُّ بِلِقَاءِ جُول.', qen: 'The father and mother were happy to meet Jules.', a: false },
    { t: 'mcq', q: 'كَيْفَ عَامَلَ الطِّفْلُ عَمَّهُ؟', qen: 'How did the boy treat his uncle?', o: ['أَعْطَاهُ مَالاً زَائِداً', 'هَرَبَ مِنْهُ', 'ضَحِكَ عَلَيْهِ'], a: 0 }
  ],
  order: ['سَافَرَ جُول إِلَى أَمْرِيكَا.', 'جَاءَتْ رِسَالَةٌ مِنْ جُول.', 'رَكِبَتِ الأُسْرَةُ السَّفِينَةَ إِلَى جِيرْزِي.', 'عَرَفَ الأَبُ أَخَاهُ بَائِعَ المَحَارِ.']
},
{
  id: 'string', col: 'mp', ar: 'قِطْعَةُ الخَيْطِ', en: 'The Piece of String', level: 3, icon: 'scroll',
  cover: '', partner: '', bg: ['#FBEFD8', '#E7F3E3'], c: '#A26F1C',
  pages: [
    { ar: 'ذَهَبَ الفَلَّاحُ العَجُوزُ هُوشْكُورْن إِلَى سُوقِ البَلْدَةِ. وَفِي الطَّرِيقِ رَأَى عَلَى الأَرْضِ [قِطْعَةَ خَيْطٍ|a piece of string] صَغِيرَةً، فَالْتَقَطَهَا وَوَضَعَهَا فِي جَيْبِهِ، لِأَنَّهُ يَحْفَظُ كُلَّ شَيْءٍ قَدْ يَنْفَعُ.',
      en: 'The old farmer Hauchecorne went to the town market. On the way he saw a little piece of string on the ground. He picked it up and put it in his pocket, because he kept everything that might be useful.' },
    { ar: 'وَرَآهُ وَهُوَ يَلْتَقِطُهَا رَجُلٌ بَيْنَهُ وَبَيْنَهُ [عَدَاوَةٌ|a quarrel] قَدِيمَةٌ، اسْمُهُ مَالَانْدَان. فَخَجِلَ هُوشْكُورْن، وَخَبَّأَ الخَيْطَ بِسُرْعَةٍ.',
      en: 'A man with whom he had an old quarrel, named Malandain, saw him picking it up. Hauchecorne felt embarrassed and quickly hid the string.' },
    { ar: 'وَفِي السُّوقِ [أَعْلَنَ|announced] المُنَادِي أَنَّ رَجُلاً أَضَاعَ [مَحْفَظَةً|a wallet] فِيهَا مَالٌ كَثِيرٌ عَلَى الطَّرِيقِ نَفْسِهِ.',
      en: 'In the market the town crier announced that a man had lost a wallet full of money on that very road.' },
    { ar: 'وَبَعْدَ قَلِيلٍ اسْتُدْعِيَ هُوشْكُورْن إِلَى رَئِيسِ البَلْدَةِ، لِأَنَّ مَالَانْدَان قَالَ إِنَّهُ رَآهُ يَلْتَقِطُ المَحْفَظَةَ. فَأَخْرَجَ الخَيْطَ مِنْ جَيْبِهِ وَقَالَ: «أُقْسِمُ إِنِّي مَا أَخَذْتُ إِلَّا هَذَا!» فَلَمْ [يُصَدِّقْهُ|believed him] أَحَدٌ.',
      en: 'Soon Hauchecorne was called to the mayor, because Malandain said he had seen him pick up the wallet. He took the string from his pocket and said: “I swear I took nothing but this!” But nobody believed him.' },
    { ar: 'وَفِي اليَوْمِ التَّالِي وَجَدَ رَجُلٌ المَحْفَظَةَ وَرَدَّهَا إِلَى صَاحِبِهَا. فَفَرِحَ هُوشْكُورْن، وَصَارَ يَحْكِي القِصَّةَ لِكُلِّ مَنْ يَلْقَاهُ.',
      en: 'The next day a man found the wallet and returned it to its owner. Hauchecorne was overjoyed and began telling the story to everyone he met.' },
    { ar: 'وَلَكِنَّ النَّاسَ كَانُوا يَضْحَكُونَ وَيَقُولُونَ: «أَنْتَ أَخَذْتَهَا، ثُمَّ أَعْطَيْتَهَا لِغَيْرِكَ لِيَرُدَّهَا!». فَحَزِنَ حُزْناً شَدِيداً، وَظَلَّ يُكَرِّرُ قِصَّتَهُ حَتَّى [مَرِضَ|fell ill].',
      en: 'But people laughed and said: “You took it, then gave it to someone else to return!” He was deeply hurt, and kept repeating his story until he fell ill.' },
    { ar: 'وَحَتَّى آخِرِ أَيَّامِهِ كَانَ يَقُولُ: «قِطْعَةُ خَيْطٍ صَغِيرَةٌ... قِطْعَةُ خَيْطٍ فَقَطْ!»',
      en: 'Until his last days he kept saying: “A little piece of string… only a piece of string!”' }
  ],
  moral: { ar: 'لَا تَتَّهِمْ أَحَداً بِغَيْرِ دَلِيلٍ.', en: 'Never accuse anyone without proof.' },
  quiz: [
    { t: 'mcq', q: 'مَاذَا الْتَقَطَ هُوشْكُورْن مِنَ الأَرْضِ؟', qen: 'What did Hauchecorne pick up from the ground?', o: ['قِطْعَةَ خَيْطٍ', 'مَحْفَظَةً', 'قِطْعَةَ نُقُودٍ'], a: 0 },
    { t: 'mcq', q: 'مَنِ اتَّهَمَهُ بِأَخْذِ المَحْفَظَةِ؟', qen: 'Who accused him of taking the wallet?', o: ['رَئِيسُ البَلْدَةِ', 'مَالَانْدَان', 'صَاحِبُ المَحْفَظَةِ'], a: 1 },
    { t: 'tf', q: 'صَدَّقَ النَّاسُ هُوشْكُورْن حِينَ أَخْرَجَ الخَيْطَ.', qen: 'People believed Hauchecorne when he showed the string.', a: false },
    { t: 'tf', q: 'وُجِدَتِ المَحْفَظَةُ فِي اليَوْمِ التَّالِي.', qen: 'The wallet was found the next day.', a: true },
    { t: 'mcq', q: 'لِمَاذَا حَزِنَ هُوشْكُورْن بَعْدَ رُجُوعِ المَحْفَظَةِ؟', qen: 'Why was Hauchecorne sad after the wallet came back?', o: ['لِأَنَّهُ أَضَاعَ الخَيْطَ', 'لِأَنَّهُ خَسِرَ فِي السُّوقِ', 'لِأَنَّ النَّاسَ ظَلُّوا يَتَّهِمُونَهُ'], a: 2 }
  ],
  order: ['الْتَقَطَ هُوشْكُورْن قِطْعَةَ الخَيْطِ.', 'أُعْلِنَ عَنْ ضَيَاعِ مَحْفَظَةٍ.', 'اتُّهِمَ هُوشْكُورْن بِأَخْذِهَا.', 'وُجِدَتِ المَحْفَظَةُ وَرُدَّتْ إِلَى صَاحِبِهَا.']
},
{
  id: 'fields', col: 'mp', ar: 'فِي الحُقُولِ', en: 'In the Fields', level: 3, icon: 'wheat',
  cover: '', partner: '', bg: ['#E7F3E3', '#FBEFD8'], c: '#3B7A39',
  pages: [
    { ar: 'فِي قَرْيَةٍ صَغِيرَةٍ عَاشَتْ أُسْرَتَانِ مِنَ الفَلَّاحِينَ الفُقَرَاءِ فِي بَيْتَيْنِ [مُتَجَاوِرَيْنِ|next to each other]: أُسْرَةُ تُوفَاش وَأُسْرَةُ فَالَان، وَلِكُلِّ أُسْرَةٍ أَطْفَالٌ كَثِيرُونَ.',
      en: 'In a small village two poor farming families lived in houses next to each other: the Tuvache family and the Vallin family, and each had many children.' },
    { ar: 'وَفِي يَوْمٍ وَقَفَتْ [عَرَبَةٌ|a carriage] أَمَامَ البَيْتَيْنِ، وَنَزَلَتْ مِنْهَا سَيِّدَةٌ غَنِيَّةٌ لَيْسَ لَهَا أَوْلَادٌ، وَمَعَهَا زَوْجُهَا. فَأَحَبَّتْ طِفْلاً صَغِيراً مِنْ أَطْفَالِ تُوفَاش.',
      en: 'One day a carriage stopped in front of the two houses. A rich lady with no children of her own got out with her husband, and she grew fond of a little boy of the Tuvache family.' },
    { ar: 'قَالَتْ لِأَهْلِهِ: «أَعْطُونِي هَذَا الطِّفْلَ أُرَبِّيهِ، وَأُعْطِيكُمْ مَالاً كُلَّ شَهْرٍ». فَغَضِبَتِ الأُمُّ وَقَالَتْ: «أَبِيعُ وَلَدِي؟ أَبَداً!» فَخَرَجَتِ السَّيِّدَةُ حَزِينَةً.',
      en: 'She told his parents: “Give me this child to bring up, and I will give you money every month.” The mother grew angry and said: “Sell my son? Never!” The lady left, sad.' },
    { ar: 'ثُمَّ ذَهَبَتْ إِلَى أُسْرَةِ فَالَان، [فَوَافَقَتْ|agreed] أَنْ تُعْطِيَهَا ابْنَهَا جَان، وَأَخَذَتِ المَالَ. فَصَارَتْ أُسْرَةُ فَالَان تَعِيشُ فِي رَاحَةٍ، وَأُسْرَةُ تُوفَاش تَقُولُ [بِفَخْرٍ|proudly]: «نَحْنُ لَمْ نَبِعْ وَلَدَنَا».',
      en: 'Then she went to the Vallin family, who agreed to give her their son Jean, and took the money. The Vallins lived comfortably after that, while the Tuvaches said proudly: “We did not sell our son.”' },
    { ar: 'وَمَرَّتِ السِّنُونَ، وَكَبِرَ شَارْلُو ابْنُ تُوفَاش، وَصَارَ يَعْمَلُ فِي الحَقْلِ بِتَعَبٍ، وَيُسَاعِدُ أَهْلَهُ الفُقَرَاءَ.',
      en: 'The years went by. Charlot, the Tuvaches’ son, grew up and worked hard in the fields, helping his poor family.' },
    { ar: 'وَفِي يَوْمٍ رَجَعَ جَان شَابّاً [أَنِيقاً|elegant] فِي عَرَبَةٍ جَمِيلَةٍ، يَزُورُ أَهْلَهُ. فَنَظَرَ شَارْلُو إِلَيْهِ، ثُمَّ قَالَ لِوَالِدَيْهِ بِحُزْنٍ: «لِمَاذَا لَمْ تُعْطُونِي لِلسَّيِّدَةِ؟ لَوْ فَعَلْتُمْ لَكُنْتُ مِثْلَهُ!»',
      en: 'One day Jean came back as an elegant young man in a fine carriage to visit his family. Charlot looked at him, then said sadly to his parents: “Why didn’t you give me to the lady? If you had, I would be like him!”' },
    { ar: 'ثُمَّ تَرَكَ البَيْتَ وَمَضَى، فَبَكَتْ أُمُّهُ. وَبَقِيَ السُّؤَالُ [حَائِراً|unanswered]: مَنْ كَانَ عَلَى حَقٍّ؟',
      en: 'Then he left home and went away, and his mother wept. And the question remained unanswered: who was right?' }
  ],
  moral: { ar: 'بَعْضُ القَرَارَاتِ لَا يُعْرَفُ صَوَابُهَا إِلَّا بَعْدَ سِنِينَ.', en: 'Some choices are only understood many years later.' },
  quiz: [
    { t: 'mcq', q: 'مَاذَا طَلَبَتِ السَّيِّدَةُ الغَنِيَّةُ؟', qen: 'What did the rich lady ask for?', o: ['أَنْ تُرَبِّيَ طِفْلاً مِنْ أَطْفَالِهِمْ', 'أَنْ تَشْتَرِيَ البَيْتَ', 'أَنْ تَعْمَلَ فِي الحَقْلِ'], a: 0 },
    { t: 'tf', q: 'وَافَقَتْ أُسْرَةُ تُوفَاش عَلَى طَلَبِ السَّيِّدَةِ.', qen: 'The Tuvache family accepted the lady’s request.', a: false },
    { t: 'mcq', q: 'أَيُّ أُسْرَةٍ أَعْطَتْ ابْنَهَا؟', qen: 'Which family gave away their son?', o: ['أُسْرَةُ تُوفَاش', 'أُسْرَةُ فَالَان', 'لَمْ تُعْطِ أَيُّ أُسْرَةٍ'], a: 1 },
    { t: 'mcq', q: 'كَيْفَ رَجَعَ جَان؟', qen: 'How did Jean come back?', o: ['فَقِيراً مَرِيضاً', 'فَلَّاحاً مُتْعَباً', 'شَابّاً أَنِيقاً فِي عَرَبَةٍ'], a: 2 },
    { t: 'tf', q: 'شَكَرَ شَارْلُو وَالِدَيْهِ لِأَنَّهُمَا لَمْ يُعْطِيَاهُ.', qen: 'Charlot thanked his parents for not giving him away.', a: false }
  ],
  order: ['جَاءَتِ السَّيِّدَةُ الغَنِيَّةُ إِلَى القَرْيَةِ.', 'رَفَضَتْ أُسْرَةُ تُوفَاش.', 'أَعْطَتْ أُسْرَةُ فَالَان ابْنَهَا.', 'رَجَعَ جَان شَابّاً أَنِيقاً.']
},
// ---- One Thousand and One Nights, retold in simple Arabic ----
{
  id: 'sindbad1', col: 'ln', ar: 'السِّنْدِبَادُ وَالجَزِيرَةُ العَجِيبَةُ', en: 'Sindbad and the Strange Island', level: 2, icon: 'dhow',
  cover: '', partner: '', bg: ['#E1EFF5', '#FBEFD8'], c: '#2D6F92',
  pages: [
    { ar: 'كَانَ السِّنْدِبَادُ تَاجِراً شَابّاً فِي بَغْدَادَ، وَرِثَ عَنْ أَبِيهِ مَالاً كَثِيراً فَأَضَاعَهُ. فَبَاعَ مَا بَقِيَ عِنْدَهُ، وَاشْتَرَى [بِضَاعَةً|goods]، وَخَرَجَ إِلَى البَصْرَةِ لِيُسَافِرَ فِي البَحْرِ مَعَ التُّجَّارِ.',
      en: 'Sindbad was a young merchant in Baghdad who inherited a lot of money from his father and wasted it. He sold what he had left, bought goods, and set out for Basra to travel by sea with the merchants.' },
    { ar: 'أَبْحَرَتِ السَّفِينَةُ أَيَّاماً، حَتَّى وَصَلَتْ إِلَى [جَزِيرَةٍ|an island] خَضْرَاءَ جَمِيلَةٍ. فَنَزَلَ التُّجَّارُ عَلَيْهَا، وَأَشْعَلُوا النَّارَ لِيَطْبُخُوا طَعَامَهُمْ.',
      en: 'The ship sailed for days until it reached a beautiful green island. The merchants went ashore and lit a fire to cook their food.' },
    { ar: 'وَفَجْأَةً [تَحَرَّكَتِ|moved] الجَزِيرَةُ! فَصَاحَ القُبْطَانُ: «ارْجِعُوا إِلَى السَّفِينَةِ! هَذِهِ لَيْسَتْ جَزِيرَةً، بَلْ سَمَكَةٌ عَظِيمَةٌ نَامَتْ فِي البَحْرِ زَمَناً طَوِيلاً حَتَّى نَبَتَ الشَّجَرُ عَلَى ظَهْرِهَا!»',
      en: 'Suddenly the island moved! The captain shouted: “Back to the ship! This is not an island, it is a giant fish that slept in the sea so long that trees grew on its back!”' },
    { ar: 'رَكَضَ التُّجَّارُ إِلَى السَّفِينَةِ، وَلَكِنَّ السِّنْدِبَادَ تَأَخَّرَ، فَغَطَسَتِ السَّمَكَةُ فِي البَحْرِ وَبَقِيَ هُوَ فِي المَاءِ، فَتَعَلَّقَ [بِلَوْحٍ|to a plank] مِنَ الخَشَبِ.',
      en: 'The merchants ran to the ship, but Sindbad was too slow. The fish dived into the sea and he was left in the water, so he clung to a wooden plank.' },
    { ar: 'وَظَلَّتِ الأَمْوَاجُ تَحْمِلُهُ يَوْماً وَلَيْلَةً، حَتَّى رَمَتْهُ عَلَى [شَاطِئِ|the shore of] جَزِيرَةٍ بَعِيدَةٍ، فَأَكَلَ مِنْ ثِمَارِهَا وَشَرِبَ مِنْ عُيُونِهَا.',
      en: 'The waves carried him for a day and a night until they threw him onto the shore of a faraway island, where he ate its fruit and drank from its springs.' },
    { ar: 'وَفِي الجَزِيرَةِ لَقِيَ رِجَالَ مَلِكٍ طَيِّبٍ، فَأَكْرَمَهُ المَلِكُ، وَجَعَلَهُ يَعْمَلُ فِي [المِينَاءِ|the harbour]، يَكْتُبُ أَسْمَاءَ السُّفُنِ القَادِمَةِ.',
      en: 'On the island he met the men of a kind king, who welcomed him and gave him work in the harbour, writing down the names of arriving ships.' },
    { ar: 'وَفِي يَوْمٍ وَصَلَتْ سَفِينَةٌ، فَرَأَى السِّنْدِبَادُ عَلَيْهَا [بِضَاعَتَهُ|his goods] وَاسْمَهُ مَكْتُوباً عَلَيْهَا! إِنَّهَا سَفِينَتُهُ الأُولَى. فَعَرَفَهُ القُبْطَانُ وَفَرِحَ بِهِ، وَرَجَعَ السِّنْدِبَادُ إِلَى بَغْدَادَ غَنِيّاً.',
      en: 'One day a ship arrived, and Sindbad saw his own goods on it with his name written on them! It was his first ship. The captain recognised him and rejoiced, and Sindbad returned to Baghdad a rich man.' }
  ],
  moral: { ar: 'لَا تَيْأَسْ، فَبَعْدَ الشِّدَّةِ يَأْتِي الفَرَجُ.', en: 'Never lose hope: after hardship comes relief.' },
  quiz: [
    { t: 'mcq', q: 'مِنْ أَيِّ مَدِينَةٍ رَكِبَ السِّنْدِبَادُ البَحْرَ؟', qen: 'From which city did Sindbad set sail?', o: ['البَصْرَةِ', 'عَدَنَ', 'الإِسْكَنْدَرِيَّةِ'], a: 0 },
    { t: 'mcq', q: 'مَا الجَزِيرَةُ الخَضْرَاءُ فِي الحَقِيقَةِ؟', qen: 'What was the green island really?', o: ['سَفِينَةٌ كَبِيرَةٌ', 'سَمَكَةٌ عَظِيمَةٌ', 'جَبَلٌ عَالٍ'], a: 1 },
    { t: 'tf', q: 'رَجَعَ السِّنْدِبَادُ إِلَى السَّفِينَةِ مَعَ التُّجَّارِ.', qen: 'Sindbad got back to the ship with the merchants.', a: false },
    { t: 'mcq', q: 'بِمَاذَا تَعَلَّقَ السِّنْدِبَادُ فِي البَحْرِ؟', qen: 'What did Sindbad hold on to in the sea?', o: ['بِحَبْلٍ', 'بِشَجَرَةٍ', 'بِلَوْحٍ مِنَ الخَشَبِ'], a: 2 },
    { t: 'tf', q: 'عَمِلَ السِّنْدِبَادُ فِي مِينَاءِ المَلِكِ.', qen: 'Sindbad worked in the king’s harbour.', a: true },
    { t: 'mcq', q: 'كَيْفَ عَرَفَ سَفِينَتَهُ الأُولَى؟', qen: 'How did he recognise his first ship?', o: ['رَأَى بِضَاعَتَهُ وَاسْمَهُ عَلَيْهَا', 'سَمِعَ صَوْتَ القُبْطَانِ', 'رَأَى عَلَمَ بَغْدَادَ'], a: 0 }
  ],
  order: ['خَرَجَ السِّنْدِبَادُ إِلَى البَصْرَةِ.', 'نَزَلَ التُّجَّارُ عَلَى الجَزِيرَةِ الخَضْرَاءِ.', 'غَطَسَتِ السَّمَكَةُ وَبَقِيَ السِّنْدِبَادُ فِي المَاءِ.', 'وَصَلَتْ سَفِينَتُهُ إِلَى مِينَاءِ المَلِكِ.']
},
{
  id: 'sindbad2', col: 'ln', ar: 'السِّنْدِبَادُ وَطَائِرُ الرُّخِّ', en: 'Sindbad and the Roc', level: 2, icon: 'roc',
  cover: '', partner: '', bg: ['#F1EAF8', '#E1EFF5'], c: '#6B4E9B',
  pages: [
    { ar: 'لَمْ يَصْبِرِ السِّنْدِبَادُ طَوِيلاً فِي بَغْدَادَ، فَخَرَجَ فِي [رِحْلَةٍ|a voyage] ثَانِيَةٍ. وَنَزَلَ مَعَ التُّجَّارِ عَلَى جَزِيرَةٍ كَثِيرَةِ الشَّجَرِ، فَجَلَسَ فِي ظِلِّ شَجَرَةٍ وَنَامَ.',
      en: 'Sindbad could not stay long in Baghdad, so he set out on a second voyage. He went ashore with the merchants on an island full of trees, sat in the shade of a tree and fell asleep.' },
    { ar: 'وَلَمَّا اسْتَيْقَظَ لَمْ يَجِدِ السَّفِينَةَ، فَقَدْ نَسِيَهُ التُّجَّارُ وَأَبْحَرُوا! فَصَعِدَ شَجَرَةً عَالِيَةً، فَرَأَى قُبَّةً بَيْضَاءَ كَبِيرَةً، فَإِذَا هِيَ [بَيْضَةُ|the egg of] طَائِرٍ عَظِيمٍ اسْمُهُ «الرُّخُّ».',
      en: 'When he woke up the ship was gone — the merchants had forgotten him and sailed away! He climbed a tall tree and saw a great white dome. It was the egg of a giant bird called the Roc.' },
    { ar: 'وَعِنْدَ المَسَاءِ جَاءَ الرُّخُّ، فَغَطَّى الشَّمْسَ بِجَنَاحَيْهِ، وَنَامَ عَلَى بَيْضَتِهِ. فَرَبَطَ السِّنْدِبَادُ نَفْسَهُ [بِعِمَامَتِهِ|with his turban] فِي رِجْلِ الطَّائِرِ.',
      en: 'In the evening the Roc came, covering the sun with its wings, and slept on its egg. Sindbad tied himself to the bird’s leg with his turban.' },
    { ar: 'وَفِي الصَّبَاحِ طَارَ الرُّخُّ عَالِياً، ثُمَّ نَزَلَ فِي وَادٍ عَمِيقٍ، فَفَكَّ السِّنْدِبَادُ عِمَامَتَهُ وَنَزَلَ. فَإِذَا الوَادِي مَمْلُوءٌ [بِالمَاسِ|with diamonds]، وَفِيهِ حَيَّاتٌ كَبِيرَةٌ.',
      en: 'In the morning the Roc flew high, then landed in a deep valley. Sindbad untied his turban and climbed down. The valley was full of diamonds — and of great snakes.' },
    { ar: 'وَكَانَ التُّجَّارُ يَرْمُونَ قِطَعَ اللَّحْمِ مِنْ فَوْقِ الجَبَلِ، فَيَلْتَصِقُ بِهَا المَاسُ، ثُمَّ تَحْمِلُهَا [النُّسُورُ|eagles] إِلَى أَعْلَى الجَبَلِ، فَيَأْخُذُونَ المَاسَ مِنْهَا.',
      en: 'Merchants used to throw pieces of meat from the top of the mountain. Diamonds stuck to them, then eagles carried them up the mountain, and the merchants took the diamonds.' },
    { ar: 'فَمَلَأَ السِّنْدِبَادُ جُيُوبَهُ بِالمَاسِ، وَرَبَطَ نَفْسَهُ بِقِطْعَةِ لَحْمٍ كَبِيرَةٍ، فَحَمَلَهُ نَسْرٌ إِلَى أَعْلَى الجَبَلِ، [فَدَهِشَ|were amazed] التُّجَّارُ حِينَ رَأَوْهُ.',
      en: 'Sindbad filled his pockets with diamonds and tied himself to a large piece of meat. An eagle carried him to the top of the mountain, and the merchants were amazed to see him.' },
    { ar: 'فَأَعْطَاهُمْ مِنْ مَاسِهِ، وَسَافَرَ مَعَهُمْ حَتَّى وَصَلَ إِلَى البَصْرَةِ، ثُمَّ إِلَى بَغْدَادَ، وَحَكَى لِأَهْلِهِ [عَجَائِبَ|the wonders of] رِحْلَتِهِ.',
      en: 'He gave them some of his diamonds and travelled with them to Basra, then to Baghdad, and told his family the wonders of his voyage.' }
  ],
  moral: { ar: 'الحِيلَةُ وَالشَّجَاعَةُ تَفْتَحَانِ الطُّرُقَ المُغْلَقَةَ.', en: 'Cleverness and courage open closed roads.' },
  quiz: [
    { t: 'tf', q: 'انْتَظَرَ التُّجَّارُ السِّنْدِبَادَ حَتَّى اسْتَيْقَظَ.', qen: 'The merchants waited for Sindbad to wake up.', a: false },
    { t: 'mcq', q: 'مَا القُبَّةُ البَيْضَاءُ الَّتِي رَآهَا؟', qen: 'What was the white dome he saw?', o: ['قَصْرُ مَلِكٍ', 'بَيْضَةُ الرُّخِّ', 'خَيْمَةٌ كَبِيرَةٌ'], a: 1 },
    { t: 'mcq', q: 'كَيْفَ خَرَجَ مِنَ الجَزِيرَةِ؟', qen: 'How did he leave the island?', o: ['رَبَطَ نَفْسَهُ فِي رِجْلِ الرُّخِّ', 'صَنَعَ سَفِينَةً', 'سَبَحَ فِي البَحْرِ'], a: 0 },
    { t: 'mcq', q: 'بِمَاذَا كَانَ الوَادِي مَمْلُوءاً؟', qen: 'What was the valley full of?', o: ['بِالذَّهَبِ', 'بِاللُّؤْلُؤِ', 'بِالمَاسِ'], a: 2 },
    { t: 'tf', q: 'حَمَلَ نَسْرٌ السِّنْدِبَادَ إِلَى أَعْلَى الجَبَلِ.', qen: 'An eagle carried Sindbad to the top of the mountain.', a: true }
  ],
  order: ['نَامَ السِّنْدِبَادُ تَحْتَ الشَّجَرَةِ.', 'رَبَطَ نَفْسَهُ فِي رِجْلِ الرُّخِّ.', 'نَزَلَ فِي وَادِي المَاسِ.', 'حَمَلَهُ نَسْرٌ إِلَى أَعْلَى الجَبَلِ.']
},
{
  id: 'fisherman', col: 'ln', ar: 'الصَّيَّادُ وَالعِفْرِيتُ', en: 'The Fisherman and the Jinni', level: 2, icon: 'jar',
  cover: '', partner: '', bg: ['#E2F0EB', '#E1EFF5'], c: '#2C7A6E',
  pages: [
    { ar: 'كَانَ صَيَّادٌ فَقِيرٌ يَرْمِي [شَبَكَتَهُ|his net] فِي البَحْرِ أَرْبَعَ مَرَّاتٍ كُلَّ يَوْمٍ. وَفِي يَوْمٍ خَرَجَتِ الشَّبَكَةُ ثَقِيلَةً، فَإِذَا فِيهَا [قُمْقُمٌ|a brass jar] مِنَ النُّحَاسِ مَخْتُومٌ بِالرَّصَاصِ.',
      en: 'A poor fisherman cast his net into the sea four times every day. One day the net came up heavy, and in it was a brass jar sealed with lead.' },
    { ar: 'فَرِحَ الصَّيَّادُ وَقَالَ: «أَبِيعُهُ فِي السُّوقِ». ثُمَّ فَتَحَهُ، فَخَرَجَ مِنْهُ دُخَانٌ كَثِيفٌ صَعِدَ إِلَى السَّمَاءِ، ثُمَّ صَارَ [عِفْرِيتاً|a jinni] عَظِيماً، رَأْسُهُ فِي السَّحَابِ.',
      en: 'The fisherman was glad and said: “I’ll sell it in the market.” Then he opened it, and thick smoke rose up to the sky and became a huge jinni with its head in the clouds.' },
    { ar: 'قَالَ العِفْرِيتُ: «أَيُّهَا الصَّيَّادُ، لَقَدْ بَقِيتُ فِي هَذَا القُمْقُمِ مِئَاتِ السِّنِينَ، [وَأَقْسَمْتُ|I swore] أَنْ أُهْلِكَ مَنْ يُخْرِجُنِي!»',
      en: 'The jinni said: “Fisherman, I stayed in this jar for hundreds of years, and I swore to destroy whoever let me out!”' },
    { ar: 'خَافَ الصَّيَّادُ، وَلَكِنَّهُ فَكَّرَ بِسُرْعَةٍ وَقَالَ: «لَا [أُصَدِّقُ|I believe] أَنَّ عِفْرِيتاً كَبِيراً مِثْلَكَ كَانَ فِي هَذَا القُمْقُمِ الصَّغِيرِ!»',
      en: 'The fisherman was frightened, but he thought fast and said: “I don’t believe a jinni as big as you was inside this little jar!”' },
    { ar: 'قَالَ العِفْرِيتُ: «أَلَا تُصَدِّقُنِي؟ انْظُرْ!» ثُمَّ صَارَ دُخَاناً، وَدَخَلَ فِي القُمْقُمِ [شَيْئاً فَشَيْئاً|little by little].',
      en: 'The jinni said: “You don’t believe me? Watch!” Then he turned into smoke and went back into the jar little by little.' },
    { ar: 'فَأَسْرَعَ الصَّيَّادُ [وَأَغْلَقَ|closed] القُمْقُمَ بِالخَتْمِ، وَقَالَ: «الآنَ سَأَرْمِيكَ فِي البَحْرِ، وَأُحَذِّرُ كُلَّ الصَّيَّادِينَ مِنْكَ!»',
      en: 'The fisherman quickly sealed the jar and said: “Now I will throw you into the sea and warn every fisherman about you!”' },
    { ar: 'فَتَوَسَّلَ إِلَيْهِ العِفْرِيتُ، [وَوَعَدَهُ|promised him] أَنْ يَدُلَّهُ عَلَى رِزْقٍ كَثِيرٍ إِنْ أَطْلَقَهُ. فَأَخَذَ عَلَيْهِ العَهْدَ ثُمَّ أَطْلَقَهُ، فَدَلَّهُ عَلَى بُحَيْرَةٍ فِيهَا سَمَكٌ مُلَوَّنٌ عَجِيبٌ، بَاعَهُ لِلسُّلْطَانِ، فَصَارَ غَنِيّاً.',
      en: 'The jinni begged him and promised to lead him to great fortune if he let him go. The fisherman made him swear an oath, then released him, and the jinni led him to a lake of wonderful coloured fish, which he sold to the sultan and became rich.' }
  ],
  moral: { ar: 'بِالعَقْلِ يَنْجُو الضَّعِيفُ مِنَ القَوِيِّ.', en: 'With a clever mind, the weak can escape the strong.' },
  quiz: [
    { t: 'mcq', q: 'مَاذَا وَجَدَ الصَّيَّادُ فِي شَبَكَتِهِ؟', qen: 'What did the fisherman find in his net?', o: ['قُمْقُماً مِنَ النُّحَاسِ', 'سَمَكَةً كَبِيرَةً', 'صُنْدُوقَ ذَهَبٍ'], a: 0 },
    { t: 'tf', q: 'شَكَرَ العِفْرِيتُ الصَّيَّادَ لِأَنَّهُ أَخْرَجَهُ.', qen: 'The jinni thanked the fisherman for letting him out.', a: false },
    { t: 'mcq', q: 'كَيْفَ جَعَلَ الصَّيَّادُ العِفْرِيتَ يَرْجِعُ إِلَى القُمْقُمِ؟', qen: 'How did the fisherman get the jinni back into the jar?', o: ['ضَرَبَهُ بِالشَّبَكَةِ', 'قَالَ إِنَّهُ لَا يُصَدِّقُهُ', 'نَادَى السُّلْطَانَ'], a: 1 },
    { t: 'mcq', q: 'إِلَى أَيْنَ دَلَّ العِفْرِيتُ الصَّيَّادَ؟', qen: 'Where did the jinni lead the fisherman?', o: ['إِلَى قَصْرٍ', 'إِلَى مَغَارَةٍ', 'إِلَى بُحَيْرَةٍ فِيهَا سَمَكٌ مُلَوَّنٌ'], a: 2 },
    { t: 'tf', q: 'صَارَ الصَّيَّادُ غَنِيّاً فِي آخِرِ الحِكَايَةِ.', qen: 'The fisherman became rich at the end of the tale.', a: true }
  ],
  order: ['وَجَدَ الصَّيَّادُ القُمْقُمَ.', 'خَرَجَ العِفْرِيتُ مِنَ القُمْقُمِ.', 'رَجَعَ العِفْرِيتُ إِلَى القُمْقُمِ.', 'دَلَّ العِفْرِيتُ الصَّيَّادَ عَلَى البُحَيْرَةِ.']
},
{
  id: 'alibaba', col: 'ln', ar: 'عَلِي بَابَا وَالمَغَارَةُ', en: 'Ali Baba and the Cave', level: 2, icon: 'gate',
  cover: '', partner: '', bg: ['#FBEFD8', '#F8E5DD'], c: '#A26F1C',
  pages: [
    { ar: 'كَانَ عَلِي بَابَا [حَطَّاباً|a woodcutter] فَقِيراً. وَفِي يَوْمٍ رَأَى فِي الغَابَةِ أَرْبَعِينَ لِصّاً يَقِفُونَ أَمَامَ صَخْرَةٍ كَبِيرَةٍ، فَاخْتَبَأَ فَوْقَ شَجَرَةٍ.',
      en: 'Ali Baba was a poor woodcutter. One day in the forest he saw forty thieves standing in front of a huge rock, so he hid up in a tree.' },
    { ar: 'قَالَ رَئِيسُ اللُّصُوصِ: «افْتَحْ يَا سِمْسِمُ!» فَانْفَتَحَ بَابٌ فِي الصَّخْرَةِ، وَدَخَلَ اللُّصُوصُ [المَغَارَةَ|the cave]. ثُمَّ خَرَجُوا، فَقَالَ: «أَغْلِقْ يَا سِمْسِمُ!» فَانْغَلَقَ البَابُ.',
      en: 'The leader of the thieves said: “Open, Sesame!” A door opened in the rock and the thieves went into the cave. When they came out he said: “Close, Sesame!” and the door shut.' },
    { ar: 'وَلَمَّا ذَهَبُوا، نَزَلَ عَلِي بَابَا وَقَالَ الكَلِمَةَ فَدَخَلَ، فَإِذَا المَغَارَةُ مَمْلُوءَةٌ بِالذَّهَبِ وَالحَرِيرِ [وَالكُنُوزِ|treasures]. فَأَخَذَ قَلِيلاً مِنَ الذَّهَبِ وَرَجَعَ إِلَى بَيْتِهِ.',
      en: 'When they had gone, Ali Baba climbed down, said the words and went in. The cave was full of gold, silk and treasures. He took a little gold and went home.' },
    { ar: 'وَعَرَفَ أَخُوهُ الغَنِيُّ قَاسِمٌ السِّرَّ، فَذَهَبَ إِلَى المَغَارَةِ [طَمَعاً|out of greed] فِي الكَنْزِ كُلِّهِ. وَلَكِنَّهُ نَسِيَ الكَلِمَةَ وَهُوَ فِي الدَّاخِلِ، فَلَمْ يَسْتَطِعِ الخُرُوجَ حَتَّى رَجَعَ اللُّصُوصُ وَأَمْسَكُوا بِهِ.',
      en: 'His rich brother Qasim learned the secret and went to the cave, greedy for all the treasure. But inside he forgot the words and could not get out until the thieves came back and caught him.' },
    { ar: 'وَعَرَفَ اللُّصُوصُ أَنَّ أَحَداً آخَرَ يَعْرِفُ سِرَّهُمْ. فَجَاءَ رَئِيسُهُمْ إِلَى بَيْتِ عَلِي بَابَا فِي صُورَةِ تَاجِرِ زَيْتٍ، وَمَعَهُ [جِرَارٌ|jars] كَبِيرَةٌ، اخْتَبَأَ فِي كُلٍّ مِنْهَا لِصٌّ.',
      en: 'The thieves realised someone else knew their secret. Their leader came to Ali Baba’s house disguised as an oil merchant, with large jars, and a thief was hiding in each one.' },
    { ar: 'وَلَكِنَّ الخَادِمَةَ الذَّكِيَّةَ مَرْجَانَةَ ذَهَبَتْ لِتَأْخُذَ زَيْتاً، فَسَمِعَتْ صَوْتاً مِنْ جَرَّةٍ يَقُولُ: «هَلْ حَانَ الوَقْتُ؟» فَعَرَفَتِ [الخُطَّةَ|the plan].',
      en: 'But Marjana, the clever servant, went to fetch some oil and heard a voice from a jar asking: “Is it time?” And she understood the plan.' },
    { ar: 'فَأَغْلَقَتْ أَفْوَاهَ الجِرَارِ بِإِحْكَامٍ، وَنَبَّهَتْ عَلِي بَابَا وَالجِيرَانَ، فَقُبِضَ عَلَى اللُّصُوصِ كُلِّهِمْ. وَشَكَرَ عَلِي بَابَا مَرْجَانَةَ عَلَى ذَكَائِهَا [وَشَجَاعَتِهَا|her courage].',
      en: 'She sealed the mouths of the jars tightly and warned Ali Baba and the neighbours, and all the thieves were caught. Ali Baba thanked Marjana for her cleverness and courage.' }
  ],
  moral: { ar: 'الطَّمَعُ يُوقِعُ صَاحِبَهُ، وَالذَّكَاءُ يُنْقِذُ أَهْلَهُ.', en: 'Greed traps its owner; cleverness saves those around it.' },
  quiz: [
    { t: 'mcq', q: 'مَا الكَلِمَةُ الَّتِي تَفْتَحُ المَغَارَةَ؟', qen: 'What words open the cave?', o: ['افْتَحْ يَا سِمْسِمُ', 'افْتَحْ يَا بَابُ', 'يَا مَغَارَةُ انْفَتِحِي'], a: 0 },
    { t: 'tf', q: 'أَخَذَ عَلِي بَابَا الكَنْزَ كُلَّهُ.', qen: 'Ali Baba took all the treasure.', a: false },
    { t: 'mcq', q: 'لِمَاذَا لَمْ يَسْتَطِعْ قَاسِمٌ الخُرُوجَ؟', qen: 'Why couldn’t Qasim get out?', o: ['كَانَ البَابُ مَكْسُوراً', 'نَسِيَ الكَلِمَةَ', 'ضَاعَ فِي الغَابَةِ'], a: 1 },
    { t: 'mcq', q: 'أَيْنَ اخْتَبَأَ اللُّصُوصُ؟', qen: 'Where did the thieves hide?', o: ['فَوْقَ الشَّجَرَةِ', 'فِي المَغَارَةِ', 'فِي جِرَارِ الزَّيْتِ'], a: 2 },
    { t: 'mcq', q: 'مَنْ كَشَفَ خُطَّةَ اللُّصُوصِ؟', qen: 'Who uncovered the thieves’ plan?', o: ['مَرْجَانَةُ', 'قَاسِمٌ', 'رَئِيسُ اللُّصُوصِ'], a: 0 }
  ],
  order: ['رَأَى عَلِي بَابَا اللُّصُوصَ أَمَامَ الصَّخْرَةِ.', 'دَخَلَ عَلِي بَابَا المَغَارَةَ.', 'نَسِيَ قَاسِمٌ الكَلِمَةَ.', 'كَشَفَتْ مَرْجَانَةُ خُطَّةَ اللُّصُوصِ.']
}

];
window.STORIES.forEach(function (s) { if (!s.col) s.col = 'kd'; });
