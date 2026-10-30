// مرفأ الشعر — famous verses for learners, fully vowelled.
// Each poem: lines = [[first half, second half], …]; gl = hard words with their meaning;
// hide = a word of the last half the learner completes, with two wrong choices.
window.POEMS = [
{
  id: 'tarafa', poet: 'طَرَفَةُ بْنُ العَبْدِ', poetEn: 'Tarafa ibn al-Abd', era: 'الجاهلي', eraEn: 'Pre-Islamic', c: '#7A4A24',
  lines: [['عَدَوْلِيَّةٌ أَوْ مِنْ سَفِينِ ابْنِ يَامِنٍ', 'يَجُورُ بِهَا المَلَّاحُ طَوْراً وَيَهْتَدِي']],
  en: '(Ships) of Adulis, or from the fleet of Ibn Yamin: the sailor veers off course at times, and at times finds his way.',
  gl: [['عَدَوْلِيَّةٌ', 'from Adulis'], ['سَفِين', 'ships'], ['يَجُورُ', 'veers off course'], ['طَوْراً', 'at times'], ['يَهْتَدِي', 'finds the way']],
  noteAr: 'من معلّقة طرفة، شبّه فيها هوادج الإبل بالسفن الكبيرة التي تأتي من مرفأ عدولى.',
  noteEn: 'From Tarafa’s Mu‘allaqa: he likens the camel litters to the great ships that came from the harbour of Adulis.',
  hide: 'وَيَهْتَدِي', wrong: ['وَيَرْتَدِي', 'وَيَبْتَدِي'], port: 'adulis'
},
{
  id: 'hafiz', poet: 'حَافِظ إِبْرَاهِيم', poetEn: 'Hafiz Ibrahim', era: 'الحديث', eraEn: 'Modern', c: '#2D6F92',
  lines: [['أَنَا البَحْرُ فِي أَحْشَائِهِ الدُّرُّ كَامِنٌ', 'فَهَلْ سَأَلُوا الغَوَّاصَ عَنْ صَدَفَاتِي']],
  en: 'I am the sea; pearls lie hidden in its depths. Did they ever ask the diver about my shells?',
  gl: [['أَحْشَائِهِ', 'its depths'], ['الدُّرُّ', 'pearls'], ['كَامِنٌ', 'hidden'], ['الغَوَّاص', 'the diver'], ['صَدَفَاتِي', 'my shells']],
  noteAr: 'اللغة العربية هي التي تتكلم في هذا البيت: هي بحر، وكنوزها في أعماقها.',
  noteEn: 'Here the Arabic language itself speaks: it is a sea, and its treasures lie deep inside.',
  hide: 'الغَوَّاصَ', wrong: ['الصَّيَّادَ', 'المَلَّاحَ']
},
{
  id: 'shafii', poet: 'يُنسَبُ إلى الإِمَامِ الشَّافِعِيِّ', poetEn: 'Attributed to Imam al-Shafi‘i', era: 'العباسي', eraEn: 'Abbasid', c: '#2C7A6E',
  lines: [['تَغَرَّبْ عَنِ الأَوْطَانِ فِي طَلَبِ العُلَا', 'وَسَافِرْ فَفِي الأَسْفَارِ خَمْسُ فَوَائِدِ'],
          ['تَفَرُّجُ هَمٍّ وَاكْتِسَابُ مَعِيشَةٍ', 'وَعِلْمٌ وَآدَابٌ وَصُحْبَةُ مَاجِدِ']],
  en: 'Leave your homeland in search of high things, and travel: in travel there are five gains — relief from worry, earning a living, knowledge, good manners, and the company of noble people.',
  gl: [['تَغَرَّبْ', 'go abroad'], ['العُلَا', 'high rank'], ['فَوَائِد', 'benefits'], ['تَفَرُّجُ هَمٍّ', 'relief from worry'], ['مَاجِد', 'a noble person']],
  noteAr: 'بيتان في فوائد السفر، يناسبان كل من يبحر إلى العربية من بلد بعيد.',
  noteEn: 'Two lines on the gains of travel, for everyone who sails to Arabic from a faraway land.',
  hide: 'فَوَائِدِ', wrong: ['مَوَائِدِ', 'قَصَائِدِ'], hideLine: 0
},
{
  id: 'mutanabbi1', poet: 'المُتَنَبِّي', poetEn: 'al-Mutanabbi', era: 'العباسي', eraEn: 'Abbasid', c: '#A23E2E',
  lines: [['أَعَزُّ مَكَانٍ فِي الدُّنَى سَرْجُ سَابِحٍ', 'وَخَيْرُ جَلِيسٍ فِي الزَّمَانِ كِتَابُ']],
  en: 'The dearest seat in the world is the saddle of a swift horse, and the best companion in all time is a book.',
  gl: [['أَعَزُّ', 'dearest'], ['الدُّنَى', 'the world'], ['سَرْج', 'saddle'], ['سَابِح', 'a swift horse'], ['جَلِيس', 'companion']],
  noteAr: 'من أشهر ما قيل في فضل الكتاب.',
  noteEn: 'One of the most famous lines in praise of books.',
  hide: 'كِتَابُ', wrong: ['سَحَابُ', 'شَرَابُ']
},
{
  id: 'mutanabbi2', poet: 'المُتَنَبِّي', poetEn: 'al-Mutanabbi', era: 'العباسي', eraEn: 'Abbasid', c: '#A23E2E',
  lines: [['الخَيْلُ وَاللَّيْلُ وَالبَيْدَاءُ تَعْرِفُنِي', 'وَالسَّيْفُ وَالرُّمْحُ وَالقِرْطَاسُ وَالقَلَمُ']],
  en: 'The horses, the night and the desert know me, and the sword, the spear, the paper and the pen.',
  gl: [['البَيْدَاء', 'the desert'], ['الرُّمْح', 'the spear'], ['القِرْطَاس', 'paper']],
  noteAr: 'يفخر الشاعر بأنه فارس وكاتب معاً.',
  noteEn: 'The poet is proud to be both a horseman and a writer.',
  hide: 'وَالقَلَمُ', wrong: ['وَالعَلَمُ', 'وَالحَرَمُ']
},
{
  id: 'zuhair', poet: 'زُهَيْرُ بْنُ أَبِي سُلْمَى', poetEn: 'Zuhayr ibn Abi Sulma', era: 'الجاهلي', eraEn: 'Pre-Islamic', c: '#6B4E9B',
  lines: [['وَمَهْمَا تَكُنْ عِنْدَ امْرِئٍ مِنْ خَلِيقَةٍ', 'وَإِنْ خَالَهَا تَخْفَى عَلَى النَّاسِ تُعْلَمِ']],
  en: 'Whatever trait a man has, even if he thinks it is hidden from people, it will become known.',
  gl: [['امْرِئ', 'a man'], ['خَلِيقَة', 'a trait, character'], ['خَالَهَا', 'he thought it'], ['تَخْفَى', 'is hidden']],
  noteAr: 'من حِكَم معلّقة زهير: الأخلاق تظهر مهما أخفاها صاحبها.',
  noteEn: 'A piece of wisdom from Zuhayr’s Mu‘allaqa: character shows, however one tries to hide it.',
  hide: 'تُعْلَمِ', wrong: ['تُكْتَمِ', 'تُرْسَمِ']
},
{
  id: 'imru', poet: 'امْرُؤُ القَيْسِ', poetEn: 'Imru’ al-Qays', era: 'الجاهلي', eraEn: 'Pre-Islamic', c: '#A26F1C',
  lines: [['قِفَا نَبْكِ مِنْ ذِكْرَى حَبِيبٍ وَمَنْزِلِ', 'بِسِقْطِ اللِّوَى بَيْنَ الدَّخُولِ فَحَوْمَلِ']],
  en: 'Stop, my two friends, and let us weep at the memory of a beloved and a dwelling, where the sands end, between al-Dakhul and Hawmal.',
  gl: [['قِفَا', 'stop (you two)'], ['ذِكْرَى', 'memory'], ['مَنْزِل', 'dwelling'], ['سِقْط اللِّوَى', 'where the sand dunes end']],
  noteAr: 'مطلع أشهر قصيدة في الشعر العربي: معلّقة امرئ القيس.',
  noteEn: 'The opening of the most famous poem in Arabic: the Mu‘allaqa of Imru’ al-Qays.',
  hide: 'فَحَوْمَلِ', wrong: ['فَيَذْبُلِ', 'فَعَاقِلِ']
},
{
  id: 'abutammam', poet: 'أَبُو تَمَّامٍ', poetEn: 'Abu Tammam', era: 'العباسي', eraEn: 'Abbasid', c: '#34578A',
  lines: [['السَّيْفُ أَصْدَقُ أَنْبَاءً مِنَ الكُتُبِ', 'فِي حَدِّهِ الحَدُّ بَيْنَ الجِدِّ وَاللَّعِبِ']],
  en: 'The sword tells truer news than books; its edge marks the line between earnest and play.',
  gl: [['أَصْدَقُ', 'more truthful'], ['أَنْبَاء', 'news'], ['حَدّ', 'edge; limit'], ['الجِدّ', 'seriousness']],
  noteAr: 'مطلع قصيدة فتح عمّورية، وفيه جناس بين «حَدِّه» و«الحَدّ».',
  noteEn: 'The opening of the poem on the conquest of Amorium, with a play on «hadd» (edge) and «hadd» (limit).',
  hide: 'وَاللَّعِبِ', wrong: ['وَالتَّعَبِ', 'وَالأَدَبِ']
}
];
