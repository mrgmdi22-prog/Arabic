// Stories from Kalila wa Dimna (Ibn al-Muqaffa'), retold in simple, vocalised Arabic for learners.
// Marking inside a page: [word|English meaning] makes a tappable glossary word.
// Each story also carries its reading-comprehension questions (quiz) and the events to put in order (order).
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
}
];
