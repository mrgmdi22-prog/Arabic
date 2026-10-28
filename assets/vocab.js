// مرفأ المفردات — themed vocabulary. Each word: a = vocalised Arabic, t = simple transliteration, e = English.
// Themes follow everyday situations; lvl = 0 introductory, 1 beginner, 2 intermediate.
window.THEMES = [
{ id: 'greet', ar: 'التَّحِيَّةُ وَالتَّعَارُفُ', en: 'Greetings', icon: 'dallah', c: '#A23E2E', t: '#F8E5DD', lvl: 0, words: [
  { a: 'السَّلَامُ عَلَيْكُمْ', t: 'as-salaamu ʿalaykum', e: 'peace be upon you (hello)' },
  { a: 'وَعَلَيْكُمُ السَّلَامُ', t: 'wa ʿalaykumu s-salaam', e: 'and upon you peace (reply)' },
  { a: 'مَرْحَباً', t: 'marhaban', e: 'hello' },
  { a: 'أَهْلاً وَسَهْلاً', t: 'ahlan wa sahlan', e: 'welcome' },
  { a: 'صَبَاحُ الخَيْرِ', t: 'sabaahu l-khayr', e: 'good morning' },
  { a: 'مَسَاءُ الخَيْرِ', t: 'masaa’u l-khayr', e: 'good evening' },
  { a: 'كَيْفَ حَالُكَ؟', t: 'kayfa haaluk?', e: 'how are you?' },
  { a: 'بِخَيْرٍ', t: 'bi-khayr', e: 'fine, well' },
  { a: 'مَا اسْمُكَ؟', t: 'ma smuk?', e: 'what is your name?' },
  { a: 'اسْمِي', t: 'ismee', e: 'my name is' },
  { a: 'مِنْ أَيْنَ أَنْتَ؟', t: 'min ayna anta?', e: 'where are you from?' },
  { a: 'تَشَرَّفْنَا', t: 'tasharrafnaa', e: 'nice to meet you' },
  { a: 'شُكْراً', t: 'shukran', e: 'thank you' },
  { a: 'عَفْواً', t: 'ʿafwan', e: 'you’re welcome / pardon' },
  { a: 'مِنْ فَضْلِكَ', t: 'min fadlik', e: 'please' },
  { a: 'نَعَمْ', t: 'naʿam', e: 'yes' },
  { a: 'لَا', t: 'laa', e: 'no' },
  { a: 'مَعَ السَّلَامَةِ', t: 'maʿa s-salaama', e: 'goodbye' }
] },
{ id: 'family', ar: 'الأُسْرَةُ', en: 'Family', icon: 'tent', c: '#A26F1C', t: '#FBEFD8', lvl: 0, words: [
  { a: 'أَبٌ', t: 'ab', e: 'father' }, { a: 'أُمٌّ', t: 'umm', e: 'mother' },
  { a: 'أَخٌ', t: 'akh', e: 'brother' }, { a: 'أُخْتٌ', t: 'ukht', e: 'sister' },
  { a: 'جَدٌّ', t: 'jadd', e: 'grandfather' }, { a: 'جَدَّةٌ', t: 'jadda', e: 'grandmother' },
  { a: 'ابْنٌ', t: 'ibn', e: 'son' }, { a: 'بِنْتٌ', t: 'bint', e: 'daughter, girl' },
  { a: 'عَمٌّ', t: 'ʿamm', e: 'uncle (father’s brother)' }, { a: 'خَالٌ', t: 'khaal', e: 'uncle (mother’s brother)' },
  { a: 'زَوْجٌ', t: 'zawj', e: 'husband' }, { a: 'زَوْجَةٌ', t: 'zawja', e: 'wife' },
  { a: 'طِفْلٌ', t: 'tifl', e: 'child' }, { a: 'صَدِيقٌ', t: 'sadeeq', e: 'friend' },
  { a: 'جَارٌ', t: 'jaar', e: 'neighbour' }, { a: 'أُسْرَةٌ', t: 'usra', e: 'family' }
] },
{ id: 'colors', ar: 'الأَلْوَانُ', en: 'Colours', icon: 'clove', c: '#6B4E9B', t: '#F1EAF8', lvl: 0, words: [
  { a: 'أَحْمَرُ', t: 'ahmar', e: 'red' }, { a: 'أَخْضَرُ', t: 'akhdar', e: 'green' },
  { a: 'أَزْرَقُ', t: 'azraq', e: 'blue' }, { a: 'أَصْفَرُ', t: 'asfar', e: 'yellow' },
  { a: 'أَبْيَضُ', t: 'abyad', e: 'white' }, { a: 'أَسْوَدُ', t: 'aswad', e: 'black' },
  { a: 'بُنِّيٌّ', t: 'bunniyy', e: 'brown' }, { a: 'بُرْتُقَالِيٌّ', t: 'burtuqaaliyy', e: 'orange' },
  { a: 'رَمَادِيٌّ', t: 'ramaadiyy', e: 'grey' }, { a: 'وَرْدِيٌّ', t: 'wardiyy', e: 'pink' },
  { a: 'ذَهَبِيٌّ', t: 'dhahabiyy', e: 'golden' }, { a: 'لَوْنٌ', t: 'lawn', e: 'colour' }
] },
{ id: 'numbers', ar: 'الأَعْدَادُ', en: 'Numbers', icon: 'coin', c: '#2C7A6E', t: '#E2F0EB', lvl: 0, words: [
  { a: 'وَاحِدٌ', t: 'waahid', e: 'one (1)' }, { a: 'اثْنَانِ', t: 'ithnaan', e: 'two (2)' },
  { a: 'ثَلَاثَةٌ', t: 'thalaatha', e: 'three (3)' }, { a: 'أَرْبَعَةٌ', t: 'arbaʿa', e: 'four (4)' },
  { a: 'خَمْسَةٌ', t: 'khamsa', e: 'five (5)' }, { a: 'سِتَّةٌ', t: 'sitta', e: 'six (6)' },
  { a: 'سَبْعَةٌ', t: 'sabʿa', e: 'seven (7)' }, { a: 'ثَمَانِيَةٌ', t: 'thamaaniya', e: 'eight (8)' },
  { a: 'تِسْعَةٌ', t: 'tisʿa', e: 'nine (9)' }, { a: 'عَشَرَةٌ', t: 'ʿashara', e: 'ten (10)' },
  { a: 'عِشْرُونَ', t: 'ʿishroon', e: 'twenty (20)' }, { a: 'مِئَةٌ', t: 'mi’a', e: 'a hundred (100)' },
  { a: 'أَلْفٌ', t: 'alf', e: 'a thousand (1000)' }, { a: 'كَمْ؟', t: 'kam?', e: 'how many? how much?' }
] },
{ id: 'time', ar: 'الوَقْتُ وَالأَيَّامُ', en: 'Time and days', icon: 'crescent', c: '#2D6F92', t: '#E1EFF5', lvl: 0, words: [
  { a: 'اليَوْمَ', t: 'al-yawm', e: 'today' }, { a: 'غَداً', t: 'ghadan', e: 'tomorrow' },
  { a: 'أَمْسِ', t: 'amsi', e: 'yesterday' }, { a: 'صَبَاحٌ', t: 'sabaah', e: 'morning' },
  { a: 'مَسَاءٌ', t: 'masaa’', e: 'evening' }, { a: 'لَيْلٌ', t: 'layl', e: 'night' },
  { a: 'سَاعَةٌ', t: 'saaʿa', e: 'hour, clock' }, { a: 'أُسْبُوعٌ', t: 'usbooʿ', e: 'week' },
  { a: 'شَهْرٌ', t: 'shahr', e: 'month' }, { a: 'سَنَةٌ', t: 'sana', e: 'year' },
  { a: 'الأَحَدُ', t: 'al-ahad', e: 'Sunday' }, { a: 'الاثْنَيْنِ', t: 'al-ithnayn', e: 'Monday' },
  { a: 'الثُّلَاثَاءُ', t: 'ath-thulaathaa’', e: 'Tuesday' }, { a: 'الأَرْبِعَاءُ', t: 'al-arbiʿaa’', e: 'Wednesday' },
  { a: 'الخَمِيسُ', t: 'al-khamees', e: 'Thursday' }, { a: 'الجُمُعَةُ', t: 'al-jumuʿa', e: 'Friday' },
  { a: 'السَّبْتُ', t: 'as-sabt', e: 'Saturday' }
] },
{ id: 'home', ar: 'البَيْتُ', en: 'At home', icon: 'gate', c: '#A26F1C', t: '#FBEFD8', lvl: 1, words: [
  { a: 'بَيْتٌ', t: 'bayt', e: 'house, home' }, { a: 'غُرْفَةٌ', t: 'ghurfa', e: 'room' },
  { a: 'مَطْبَخٌ', t: 'matbakh', e: 'kitchen' }, { a: 'حَمَّامٌ', t: 'hammaam', e: 'bathroom' },
  { a: 'بَابٌ', t: 'baab', e: 'door' }, { a: 'نَافِذَةٌ', t: 'naafidha', e: 'window' },
  { a: 'سَرِيرٌ', t: 'sareer', e: 'bed' }, { a: 'كُرْسِيٌّ', t: 'kursiyy', e: 'chair' },
  { a: 'طَاوِلَةٌ', t: 'taawila', e: 'table' }, { a: 'مِفْتَاحٌ', t: 'miftaah', e: 'key' },
  { a: 'جِدَارٌ', t: 'jidaar', e: 'wall' }, { a: 'مِصْبَاحٌ', t: 'misbaah', e: 'lamp' },
  { a: 'سَجَّادَةٌ', t: 'sajjaada', e: 'carpet, rug' }, { a: 'وِسَادَةٌ', t: 'wisaada', e: 'pillow, cushion' },
  { a: 'خَيْمَةٌ', t: 'khayma', e: 'tent' }
] },
{ id: 'food', ar: 'الطَّعَامُ وَالسُّوقُ', en: 'Food and the market', icon: 'wheat', c: '#3B7A39', t: '#E7F3E3', lvl: 1, words: [
  { a: 'خُبْزٌ', t: 'khubz', e: 'bread' }, { a: 'مَاءٌ', t: 'maa’', e: 'water' },
  { a: 'حَلِيبٌ', t: 'haleeb', e: 'milk' }, { a: 'تَمْرٌ', t: 'tamr', e: 'dates' },
  { a: 'أَرُزٌّ', t: 'aruzz', e: 'rice' }, { a: 'لَحْمٌ', t: 'lahm', e: 'meat' },
  { a: 'سَمَكٌ', t: 'samak', e: 'fish' }, { a: 'بَيْضٌ', t: 'bayd', e: 'eggs' },
  { a: 'تُفَّاحٌ', t: 'tuffaah', e: 'apples' }, { a: 'قَهْوَةٌ', t: 'qahwa', e: 'coffee' },
  { a: 'شَايٌ', t: 'shaay', e: 'tea' }, { a: 'سُوقٌ', t: 'sooq', e: 'market' },
  { a: 'دُكَّانٌ', t: 'dukkaan', e: 'shop' }, { a: 'بَائِعٌ', t: 'baa’iʿ', e: 'seller' },
  { a: 'ثَمَنٌ', t: 'thaman', e: 'price' }, { a: 'غَالٍ', t: 'ghaalin', e: 'expensive' },
  { a: 'رَخِيصٌ', t: 'rakhees', e: 'cheap' }, { a: 'بِكَمْ هَذَا؟', t: 'bikam haadhaa?', e: 'how much is this?' }
] },
{ id: 'travel', ar: 'السَّفَرُ وَالمُوَاصَلَاتُ', en: 'Travel and transport', icon: 'dhow', c: '#2D6F92', t: '#E1EFF5', lvl: 1, words: [
  { a: 'سَيَّارَةٌ', t: 'sayyaara', e: 'car' }, { a: 'حَافِلَةٌ', t: 'haafila', e: 'bus' },
  { a: 'قِطَارٌ', t: 'qitaar', e: 'train' }, { a: 'طَائِرَةٌ', t: 'taa’ira', e: 'aeroplane' },
  { a: 'سَفِينَةٌ', t: 'safeena', e: 'ship' }, { a: 'مِينَاءٌ', t: 'meenaa’', e: 'port, harbour' },
  { a: 'مَطَارٌ', t: 'mataar', e: 'airport' }, { a: 'طَرِيقٌ', t: 'tareeq', e: 'road, way' },
  { a: 'تَذْكِرَةٌ', t: 'tadhkira', e: 'ticket' }, { a: 'جَوَازُ سَفَرٍ', t: 'jawaazu safar', e: 'passport' },
  { a: 'حَقِيبَةٌ', t: 'haqeeba', e: 'bag, suitcase' }, { a: 'فُنْدُقٌ', t: 'funduq', e: 'hotel' },
  { a: 'يَمِينٌ', t: 'yameen', e: 'right' }, { a: 'يَسَارٌ', t: 'yasaar', e: 'left' },
  { a: 'أَمَامَ', t: 'amaama', e: 'in front of' }, { a: 'أَيْنَ؟', t: 'ayna?', e: 'where?' }
] },
{ id: 'school', ar: 'المَدْرَسَةُ وَالعَمَلُ', en: 'School and work', icon: 'book', c: '#34578A', t: '#E6ECF6', lvl: 1, words: [
  { a: 'مَدْرَسَةٌ', t: 'madrasa', e: 'school' }, { a: 'جَامِعَةٌ', t: 'jaamiʿa', e: 'university' },
  { a: 'مُعَلِّمٌ', t: 'muʿallim', e: 'teacher' }, { a: 'طَالِبٌ', t: 'taalib', e: 'student' },
  { a: 'كِتَابٌ', t: 'kitaab', e: 'book' }, { a: 'قَلَمٌ', t: 'qalam', e: 'pen' },
  { a: 'دَفْتَرٌ', t: 'daftar', e: 'notebook' }, { a: 'دَرْسٌ', t: 'dars', e: 'lesson' },
  { a: 'سُؤَالٌ', t: 'su’aal', e: 'question' }, { a: 'جَوَابٌ', t: 'jawaab', e: 'answer' },
  { a: 'طَبِيبٌ', t: 'tabeeb', e: 'doctor' }, { a: 'مُهَنْدِسٌ', t: 'muhandis', e: 'engineer' },
  { a: 'تَاجِرٌ', t: 'taajir', e: 'merchant' }, { a: 'فَلَّاحٌ', t: 'fallaah', e: 'farmer' },
  { a: 'صَيَّادٌ', t: 'sayyaad', e: 'fisherman, hunter' }, { a: 'عَمَلٌ', t: 'ʿamal', e: 'work' }
] },
{ id: 'health', ar: 'الجِسْمُ وَالصِّحَّةُ', en: 'Body and health', icon: 'heart', c: '#A23E2E', t: '#F8E5DD', lvl: 1, words: [
  { a: 'رَأْسٌ', t: 'ra’s', e: 'head' }, { a: 'عَيْنٌ', t: 'ʿayn', e: 'eye' },
  { a: 'أُذُنٌ', t: 'udhun', e: 'ear' }, { a: 'أَنْفٌ', t: 'anf', e: 'nose' },
  { a: 'فَمٌ', t: 'fam', e: 'mouth' }, { a: 'يَدٌ', t: 'yad', e: 'hand' },
  { a: 'رِجْلٌ', t: 'rijl', e: 'leg, foot' }, { a: 'قَلْبٌ', t: 'qalb', e: 'heart' },
  { a: 'صِحَّةٌ', t: 'sihha', e: 'health' }, { a: 'مَرِيضٌ', t: 'mareed', e: 'ill, a patient' },
  { a: 'دَوَاءٌ', t: 'dawaa’', e: 'medicine' }, { a: 'مُسْتَشْفَى', t: 'mustashfaa', e: 'hospital' },
  { a: 'صَيْدَلِيَّةٌ', t: 'saydaliyya', e: 'pharmacy' }, { a: 'أَلَمٌ', t: 'alam', e: 'pain' }
] },
{ id: 'leisure', ar: 'الرِّيَاضَةُ وَالتَّرْفِيهُ', en: 'Sport and leisure', icon: 'ball', c: '#3B7A39', t: '#E7F3E3', lvl: 2, words: [
  { a: 'كُرَةُ القَدَمِ', t: 'kuratu l-qadam', e: 'football' }, { a: 'سِبَاحَةٌ', t: 'sibaaha', e: 'swimming' },
  { a: 'جَرْيٌ', t: 'jary', e: 'running' }, { a: 'فُرُوسِيَّةٌ', t: 'furoosiyya', e: 'horse riding' },
  { a: 'مَلْعَبٌ', t: 'malʿab', e: 'stadium, pitch' }, { a: 'فَرِيقٌ', t: 'fareeq', e: 'team' },
  { a: 'مُبَارَاةٌ', t: 'mubaaraa', e: 'match' }, { a: 'فَوْزٌ', t: 'fawz', e: 'win' },
  { a: 'قِرَاءَةٌ', t: 'qiraa’a', e: 'reading' }, { a: 'رَسْمٌ', t: 'rasm', e: 'drawing' },
  { a: 'رِحْلَةٌ', t: 'rihla', e: 'trip, journey' }, { a: 'حَدِيقَةٌ', t: 'hadeeqa', e: 'garden, park' },
  { a: 'لُعْبَةٌ', t: 'luʿba', e: 'game, toy' }, { a: 'عُطْلَةٌ', t: 'ʿutla', e: 'holiday' }
] },
{ id: 'nature', ar: 'الطَّبِيعَةُ وَالأَرْضُ', en: 'Nature and the earth', icon: 'palm', c: '#2C7A6E', t: '#E2F0EB', lvl: 2, words: [
  { a: 'شَمْسٌ', t: 'shams', e: 'sun' }, { a: 'قَمَرٌ', t: 'qamar', e: 'moon' },
  { a: 'نَجْمٌ', t: 'najm', e: 'star' }, { a: 'سَمَاءٌ', t: 'samaa’', e: 'sky' },
  { a: 'بَحْرٌ', t: 'bahr', e: 'sea' }, { a: 'جَبَلٌ', t: 'jabal', e: 'mountain' },
  { a: 'صَحْرَاءُ', t: 'sahraa’', e: 'desert' }, { a: 'وَادٍ', t: 'waadin', e: 'valley' },
  { a: 'جَزِيرَةٌ', t: 'jazeera', e: 'island' }, { a: 'شَجَرَةٌ', t: 'shajara', e: 'tree' },
  { a: 'نَخْلَةٌ', t: 'nakhla', e: 'palm tree' }, { a: 'مَطَرٌ', t: 'matar', e: 'rain' },
  { a: 'رِيحٌ', t: 'reeh', e: 'wind' }, { a: 'رَمْلٌ', t: 'raml', e: 'sand' },
  { a: 'صَخْرٌ', t: 'sakhr', e: 'rock' }
] },
{ id: 'feasts', ar: 'الأَعْيَادُ وَالمُنَاسَبَاتُ', en: 'Feasts and occasions', icon: 'lantern', c: '#6B4E9B', t: '#F1EAF8', lvl: 2, words: [
  { a: 'عِيدٌ', t: 'ʿeed', e: 'feast, holiday' }, { a: 'عِيدُ الفِطْرِ', t: 'ʿeedu l-fitr', e: 'Eid al-Fitr' },
  { a: 'عِيدُ الأَضْحَى', t: 'ʿeedu l-adhaa', e: 'Eid al-Adha' }, { a: 'رَمَضَانُ', t: 'ramadaan', e: 'Ramadan' },
  { a: 'اليَوْمُ الوَطَنِيُّ', t: 'al-yawmu l-watani', e: 'National Day' }, { a: 'يَوْمُ التَّأْسِيسِ', t: 'yawmu t-ta’sees', e: 'Founding Day' },
  { a: 'عِيدٌ سَعِيدٌ', t: 'ʿeedun saʿeed', e: 'happy Eid' }, { a: 'كُلُّ عَامٍ وَأَنْتُمْ بِخَيْرٍ', t: 'kullu ʿaamin wa antum bikhayr', e: 'many happy returns' },
  { a: 'هَدِيَّةٌ', t: 'hadiyya', e: 'gift' }, { a: 'ضَيْفٌ', t: 'dayf', e: 'guest' },
  { a: 'حَفْلَةٌ', t: 'hafla', e: 'party, celebration' }, { a: 'تَهْنِئَةٌ', t: 'tahni’a', e: 'congratulations' },
  { a: 'مَبْرُوكٌ', t: 'mabrook', e: 'congratulations!' }, { a: 'زِيَارَةٌ', t: 'ziyaara', e: 'visit' }
] }
];
window.LEVELS = [
  { ar: 'المُسْتَوَى التَّمْهِيدِيُّ', en: 'Introductory' },
  { ar: 'المُسْتَوَى المُبْتَدِئُ', en: 'Beginner' },
  { ar: 'المُسْتَوَى المُتَوَسِّطُ', en: 'Intermediate' },
  { ar: 'المُسْتَوَى المُتَقَدِّمُ', en: 'Advanced' }
];
