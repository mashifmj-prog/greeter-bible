/* -------------------- Greeter Bible App -------------------- */

// ----- User Name -----
let userName = "";
try {
  const storedName = localStorage.getItem("userName");
  if (storedName) {
    userName = storedName;
    const nameInput = document.getElementById("nameInput");
    if (nameInput) nameInput.value = userName;
  }
} catch (e) {
  console.warn("localStorage is not available:", e);
}

// ----- Track Background -----
let currentBackground = "";

// ----- Bible Verses & Quotes -----
const versesMorning = [
 "Psalm 5:3 - In the morning, Lord, you hear my voice.",
  "Lamentations 3:22-23 - The Lord’s mercies are new every morning.",
  "Psalm 59:16 - I will sing of your strength in the morning.",
  "Philippians 4:4 - Rejoice in the Lord always; again I will say, rejoice.",
  "Psalm 51:10 - Create in me a clean heart, O God, and renew a right spirit within me.",
  "Psalm 108:2 - I will awake the dawn! I will give thanks to you, O Lord.",
  "John 16:24 - Ask, and you will receive, that your joy may be full.",
  "Psalm 139:23-24 - Search me, O God, and know my heart! Try me and know my thoughts!",
  "Isaiah 12:2 - Behold, God is my salvation; I will trust, and will not be afraid.",
  "Psalm 95:1-2 - Oh come, let us sing to the Lord; let us make a joyful noise to the rock of our salvation!",
  "Titus 3:5 - He saved us by the washing of regeneration and renewal of the Holy Spirit.",
  "Psalm 119:18 - Open my eyes, that I may behold wondrous things out of your law.",
  "Psalm 16:8 - I have set the Lord always before me; because he is at my right hand, I shall not be shaken.",
  "1 Chronicles 16:34 - Oh give thanks to the Lord, for he is good; for his steadfast love endures forever!",
  "Psalm 40:3 - He put a new song in my mouth, a song of praise to our God.",
  "Mark 1:35 - And rising very early in the morning, while it was still dark, he departed and went out to a desolate place, and there he prayed.",
  "Psalm 150:6 - Let everything that has breath praise the Lord! Praise the Lord!",
  "Romans 12:2 - Be transformed by the renewal of your mind.",
  "Psalm 33:3 - Sing to him a new song; play skillfully on the strings, with loud shouts.",
  "Ephesians 4:23 - Be renewed in the spirit of your minds.",
  "Psalm 57:8 - Awake, my soul! Awake, harp and lyre! I will awaken the dawn.",
  "1 Thessalonians 5:16-18 - Rejoice always, pray without ceasing, give thanks in all circumstances.",
  "Psalm 65:8 - The whole earth is filled with awe at your wonders; where morning dawns, where evening fades, you call forth songs of joy.",
  "Romans 15:13 - May the God of hope fill you with all joy and peace in believing.",
  "Psalm 119:105 - Your word is a lamp to my feet and a light to my path.",
  "Psalm 92:4 - For you, O Lord, have made me glad by your work; at the works of your hands I sing for joy.",
  "Psalm 88:13 - But I, O Lord, cry to you; in the morning my prayer comes before you.",
  "Colossians 1:11 - Being strengthened with all power, according to his glorious might, for all endurance and patience with joy.",
  "Psalm 66:1-2 - Shout for joy to God, all the earth; sing the glory of his name.",
  "Psalm 119:97 - Oh how I love your law! It is my meditation all the day.",
  "1 Peter 1:3 - Blessed be the God and Father of our Lord Jesus Christ! According to his great mercy, he has caused us to be born again to a living hope.",
  "Psalm 96:11-12 - Let the heavens be glad, and let the earth rejoice; let the sea roar, and all that fills it.",
  "Psalm 55:17 - Evening and morning and at noon I utter my complaint and moan, and he hears my voice.",
  "Philippians 1:6 - He who began a good work in you will bring it to completion.",
  "Psalm 98:1 - Oh sing to the Lord a new song, for he has done marvelous things!",
  "Psalm 119:164 - Seven times a day I praise you for your righteous rules.",
  "Isaiah 55:6 - Seek the Lord while he may be found; call upon him while he is near.",
  "Psalm 21:13 - Be exalted, O Lord, in your strength! We will sing and praise your power.",
  "Ephesians 5:20 - Giving thanks always and for everything to God the Father in the name of our Lord Jesus Christ.",
  "Psalm 119:62 - At midnight I rise to praise you, because of your righteous rules.",
  "John 15:11 - These things I have spoken to you, that my joy may be in you, and that your joy may be full.",
  "Psalm 119:111 - Your testimonies are my heritage forever, for they are the joy of my heart.",
  "Hosea 6:3 - Let us know; let us press on to know the Lord; his going out is sure as the dawn.",
  "Psalm 30:11-12 - You have turned for me my mourning into dancing; you have loosed my sackcloth and clothed me with gladness.",
  "Psalm 71:23 - My lips will shout for joy, when I sing praises to you; my soul also, which you have redeemed.",
  "Psalm 119:135 - Make your face shine upon your servant, and teach me your statutes.",
  "2 Corinthians 5:17 - If anyone is in Christ, he is a new creation. The old has passed away; behold, the new has come.",
  "Psalm 89:1 - I will sing of the steadfast love of the Lord, forever; with my mouth I will make known your faithfulness.",
  "Psalm 119:47 - I find my delight in your commandments, which I love.",
  "Psalm 145:2 - Every day I will bless you and praise your name forever and ever.",
  "Isaiah 61:10 - I will greatly rejoice in the Lord; my soul shall exult in my God.",
  "Psalm 119:130 - The unfolding of your words gives light; it imparts understanding to the simple.",
  "Psalm 9:1 - I will give thanks to the Lord with my whole heart; I will recount all of your wonderful deeds.",
  "Psalm 119:24 - Your testimonies are my delight; they are my counselors.",
  "Psalm 119:143 - Trouble and anguish have found me out, but your commandments are my delight.",
  "Psalm 119:131 - I open my mouth and pant, because I long for your commandments.",
  "Psalm 97:11 - Light is sown for the righteous, and joy for the upright in heart.",
  "Psalm 119:2 - Blessed are those who keep his testimonies, who seek him with their whole heart.",
  "Psalm 119:35 - Lead me in the path of your commandments, for I delight in it.",
  "Psalm 119:10 - With my whole heart I seek you; let me not wander from your commandments!",
  "Psalm 119:70 - Their heart is unfeeling like fat, but I delight in your law.",
  "Psalm 119:145 - With my whole heart I cry; answer me, O Lord! I will keep your statutes.",
  "Psalm 119:92 - If your law had not been my delight, I would have perished in my affliction.",
  "Psalm 119:174 - I long for your salvation, O Lord, and your law is my delight.",
  "Psalm 119:27 - Make me understand the way of your precepts, and I will meditate on your wondrous works.",
  "Psalm 119:148 - My eyes are awake before the watches of the night, that I may meditate on your promise.",
  "Psalm 119:165 - Great peace have those who love your law; nothing can make them stumble.",
  "Psalm 119:11 - I have stored up your word in my heart, that I might not sin against you.",
  "Psalm 119:99 - I have more understanding than all my teachers, for your testimonies are my meditation.",
  "Psalm 119:103 - How sweet are your words to my taste, sweeter than honey to my mouth!",
  "Psalm 119:127 - Therefore I love your commandments above gold, above fine gold.",
  "Psalm 119:159 - Consider how I love your precepts! Give me life according to your steadfast love.",
  "Psalm 119:171 - My lips will pour forth praise, for you teach me your statutes.",
  "Psalm 25:5 - Lead me in your truth and teach me, for you are the God of my salvation; for you I wait all the day long.",
  "Psalm 119:76 - Let your steadfast love comfort me according to your promise to your servant.",
  "Psalm 33:21 - For our heart is glad in him, because we trust in his holy name.",
  "Psalm 119:81 - My soul longs for your salvation; I hope in your word.",
  "Psalm 147:11 - The Lord takes pleasure in those who fear him, in those who hope in his steadfast love.",
  "Psalm 119:166 - I hope for your salvation, O Lord, and I do your commandments."
  // Add more verses here
];

const versesDay = [
 "Psalm 118:24 - This is the day the Lord has made; rejoice and be glad.",
  "Colossians 3:23 - Whatever you do, work heartily.",
  "Proverbs 16:3 - Commit your work to the Lord.",
  "Micah 6:8 - He has told you, O man, what is good; and what does the Lord require of you but to do justice, and to love kindness, and to walk humbly with your God?",
  "2 Thessalonians 3:10 - For even when we were with you, we would give you this command: If anyone is not willing to work, let him not eat.",
  "Psalm 1:1-2 - Blessed is the man who walks not in the counsel of the wicked... but his delight is in the law of the Lord.",
  "Proverbs 13:4 - The soul of the sluggard craves and gets nothing, while the soul of the diligent is richly supplied.",
  "Romans 12:11 - Do not be slothful in zeal, be fervent in spirit, serve the Lord.",
  "Psalm 25:4-5 - Make me to know your ways, O Lord; teach me your paths. Lead me in your truth.",
  "Proverbs 18:9 - Whoever is slack in his work is a brother to him who destroys.",
  "Ephesians 5:15-16 - Look carefully then how you walk, not as unwise but as wise, making the best use of the time.",
  "Psalm 128:2 - You shall eat the fruit of the labor of your hands; you shall be blessed.",
  "Proverbs 3:6 - In all your ways acknowledge him, and he will make straight your paths.",
  "Colossians 3:17 - And whatever you do, in word or deed, do everything in the name of the Lord Jesus.",
  "Proverbs 12:24 - The hand of the diligent will rule, while the slothful will be put to forced labor.",
  "Psalm 119:1 - Blessed are those whose way is blameless, who walk in the law of the Lord!",
  "Ecclesiastes 5:18 - Behold, what I have seen to be good and fitting is to eat and drink and find enjoyment in all the toil.",
  "Proverbs 16:9 - The heart of man plans his way, but the Lord establishes his steps.",
  "John 8:12 - Again Jesus spoke to them, saying, 'I am the light of the world. Whoever follows me will not walk in darkness.'",
  "Proverbs 10:5 - He who gathers in summer is a prudent son, but he who sleeps in harvest is a son who brings shame.",
  "Psalm 37:23-24 - The steps of a man are established by the Lord, when he delights in his way.",
  "1 Corinthians 15:58 - Therefore, my beloved brothers, be steadfast, immovable, always abounding in the work of the Lord.",
  "Proverbs 19:15 - Slothfulness casts into a deep sleep, and an idle person will suffer hunger.",
  "Psalm 119:133 - Keep steady my steps according to your promise, and let no iniquity get dominion over me.",
  "Proverbs 15:19 - The way of a sluggard is like a hedge of thorns, but the path of the upright is a level highway.",
  "Ephesians 4:1 - Walk in a manner worthy of the calling to which you have been called.",
  "Proverbs 6:6-8 - Go to the ant, O sluggard; consider her ways, and be wise... she prepares her bread in summer.",
  "Psalm 32:8 - I will instruct you and teach you in the way you should go; I will counsel you with my eye upon you.",
  "2 Timothy 1:7 - For God gave us a spirit not of fear but of power and love and self-control.",
  "Proverbs 24:30-31 - I passed by the field of a sluggard... and behold, it was all overgrown with thorns.",
  "Psalm 119:15 - I will meditate on your precepts and fix my eyes on your ways.",
  "Proverbs 20:13 - Love not sleep, lest you come to poverty; open your eyes, and you will have plenty of bread.",
  "Galatians 6:9 - And let us not grow weary of doing good, for in due season we will reap, if we do not give up.",
  "Psalm 16:11 - You make known to me the path of life; in your presence there is fullness of joy.",
  "Proverbs 11:27 - Whoever diligently seeks good seeks favor, but evil comes to him who searches for it.",
  "Isaiah 30:21 - And your ears shall hear a word behind you, saying, 'This is the way, walk in it.'",
  "Proverbs 28:19 - Whoever works his land will have plenty of bread, but he who follows worthless pursuits will have plenty of poverty.",
  "Philippians 2:13 - For it is God who works in you, both to will and to work for his good pleasure.",
  "Psalm 119:30 - I have chosen the way of faithfulness; I set your rules before me.",
  "Proverbs 16:1 - The plans of the heart belong to man, but the answer of the tongue is from the Lord.",
  "1 Thessalonians 4:11 - Aspire to live quietly, and to mind your own affairs, and to work with your hands.",
  "Psalm 119:59 - When I think on my ways, I turn my feet to your testimonies.",
  "Proverbs 12:14 - From the fruit of his mouth a man is satisfied with good, and the work of a man's hands comes back to him.",
  "Romans 8:28 - And we know that for those who love God all things work together for good.",
  "Psalm 119:112 - I incline my heart to perform your statutes forever, to the end.",
  "Proverbs 10:16 - The wage of the righteous leads to life, the gain of the wicked to sin.",
  "Ephesians 6:7 - Rendering service with a good will as to the Lord and not to man.",
  "Psalm 25:9 - He leads the humble in what is right, and teaches the humble his way.",
  "Proverbs 27:23 - Know well the condition of your flocks, and give attention to your herds.",
  "Colossians 1:10 - So as to walk in a manner worthy of the Lord, fully pleasing to him: bearing fruit in every good work.",
  "Proverbs 13:11 - Wealth gained hastily will dwindle, but whoever gathers little by little will increase it.",
  "Psalm 119:32 - I will run in the way of your commandments when you enlarge my heart!",
  "Proverbs 22:4 - The reward for humility and fear of the Lord is riches and honor and life.",
  "1 Corinthians 10:31 - So, whether you eat or drink, or whatever you do, do all to the glory of God.",
  "Psalm 119:45 - And I shall walk in a wide place, for I have sought your precepts.",
  "Proverbs 24:27 - Prepare your work outside; get everything ready for yourself in the field.",
  "2 Corinthians 5:7 - For we walk by faith, not by sight.",
  "Proverbs 15:22 - Without counsel plans fail, but with many advisers they succeed.",
  "Psalm 119:165 - Great peace have those who love your law; nothing can make them stumble.",
  "Proverbs 6:10-11 - A little sleep, a little slumber, a little folding of the hands to rest, and poverty will come upon you like a robber.",
  "John 6:29 - Jesus answered them, 'This is the work of God, that you believe in him whom he has sent.'",
  "Psalm 119:66 - Teach me good judgment and knowledge, for I believe in your commandments.",
  "Proverbs 16:20 - Whoever gives thought to the word will discover good, and blessed is he who trusts in the Lord.",
  "1 Timothy 5:8 - But if anyone does not provide for his relatives, and especially for members of his household, he has denied the faith.",
  "Psalm 119:97 - Oh how I love your law! It is my meditation all the day.",
  "Proverbs 17:24 - The discerning sets his face toward wisdom, but the eyes of a fool are on the ends of the earth.",
  "Ephesians 4:28 - Let the thief no longer steal, but rather let him labor, doing honest work with his own hands.",
  "Psalm 119:130 - The unfolding of your words gives light; it imparts understanding to the simple.",
  "Proverbs 21:21 - Whoever pursues righteousness and kindness will find life, righteousness, and honor.",
  "2 Thessalonians 3:13 - As for you, brothers, do not grow weary in doing good."
  // Add more verses here
];

const versesAfternoon = [
  "Isaiah 40:31 - Those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
  "Psalm 27:14 - Wait for the Lord; be strong, and let your heart take courage; wait for the Lord!",
  "Psalm 37:7 - Be still before the Lord and wait patiently for him; fret not yourself over the one who prospers in his way.",
  "Proverbs 4:25 - Let your eyes look straight ahead; fix your gaze directly before you.",
  "Matthew 11:28 - Come to me, all who labor and are heavy laden, and I will give you rest.",
  "Hebrews 12:1-2 - Let us run with endurance the race that is set before us, looking to Jesus, the founder and perfecter of our faith.",
  "Philippians 4:13 - I can do all things through him who strengthens me.",
  "James 1:12 - Blessed is the man who remains steadfast under trial, for when he has stood the test he will receive the crown of life.",
  "Psalm 31:24 - Be strong, and let your heart take courage, all you who wait for the Lord!",
  "Romans 15:5 - May the God of endurance and encouragement grant you to live in such harmony with one another.",
  "2 Corinthians 12:9 - My grace is sufficient for you, for my power is made perfect in weakness.",
  "Psalm 46:1 - God is our refuge and strength, a very present help in trouble.",
  "Galatians 6:9 - And let us not grow weary of doing good, for in due season we will reap, if we do not give up.",
  "Ephesians 6:10 - Finally, be strong in the Lord and in the strength of his might.",
  "Hebrews 11:1 - Now faith is the assurance of things hoped for, the conviction of things not seen.",
  "Psalm 130:5 - I wait for the Lord, my soul waits, and in his word I hope.",
  "2 Timothy 4:7 - I have fought the good fight, I have finished the race, I have kept the faith.",
  "Isaiah 41:10 - Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you.",
  "Romans 5:3-4 - We rejoice in our sufferings, knowing that suffering produces endurance, and endurance produces character.",
  "Psalm 55:22 - Cast your burden on the Lord, and he will sustain you; he will never permit the righteous to be moved.",
  "James 5:11 - Behold, we consider those blessed who remained steadfast. You have heard of the steadfastness of Job.",
  "Psalm 28:7 - The Lord is my strength and my shield; in him my heart trusts, and I am helped.",
  "1 Peter 5:7 - Casting all your anxieties on him, because he cares for you.",
  "Proverbs 3:5-6 - Trust in the Lord with all your heart, and do not lean on your own understanding.",
  "Psalm 62:5-6 - For God alone, O my soul, wait in silence, for my hope is from him. He only is my rock and my salvation.",
  "1 Corinthians 16:13 - Be watchful, stand firm in the faith, act like men, be strong.",
  "Isaiah 26:4 - Trust in the Lord forever, for the Lord God is an everlasting rock.",
  "Romans 12:12 - Rejoice in hope, be patient in tribulation, be constant in prayer.",
  "Psalm 18:2 - The Lord is my rock and my fortress and my deliverer, my God, my rock, in whom I take refuge.",
  "Hebrews 10:36 - For you have need of endurance, so that when you have done the will of God you may receive what is promised.",
  "Joshua 1:9 - Be strong and courageous. Do not be frightened, and do not be dismayed, for the Lord your God is with you.",
  "Psalm 37:39 - The salvation of the righteous is from the Lord; he is their stronghold in the time of trouble.",
  "2 Thessalonians 3:13 - As for you, brothers, do not grow weary in doing good.",
  "Psalm 119:28 - My soul melts away for sorrow; strengthen me according to your word!",
  "Romans 8:25 - But if we hope for what we do not see, we wait for it with patience.",
  "Nehemiah 8:10 - The joy of the Lord is your strength.",
  "Hebrews 6:15 - And thus Abraham, having patiently waited, obtained the promise.",
  "Psalm 16:8 - I have set the Lord always before me; because he is at my right hand, I shall not be shaken.",
  "Colossians 1:11 - Being strengthened with all power, according to his glorious might, for all endurance and patience with joy.",
  "Psalm 138:3 - On the day I called, you answered me; my strength of soul you increased.",
  "James 1:3-4 - For you know that the testing of your faith produces steadfastness.",
  "Psalm 73:26 - My flesh and my heart may fail, but God is the strength of my heart and my portion forever.",
  "Romans 15:13 - May the God of hope fill you with all joy and peace in believing, so that by the power of the Holy Spirit you may abound in hope.",
  "Psalm 62:1-2 - For God alone my soul waits in silence; from him comes my salvation. He alone is my rock and my salvation.",
  "2 Corinthians 4:16 - So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day.",
  "Psalm 29:11 - May the Lord give strength to his people! May the Lord bless his people with peace!",
  "Hebrews 11:6 - And without faith it is impossible to please him, for whoever would draw near to God must believe that he exists.",
  "Psalm 37:5 - Commit your way to the Lord; trust in him, and he will act.",
  "1 Chronicles 16:11 - Seek the Lord and his strength; seek his presence continually!",
  "Romans 5:5 - And hope does not put us to shame, because God's love has been poured into our hearts.",
  "Psalm 40:1 - I waited patiently for the Lord; he inclined to me and heard my cry.",
  "Philippians 3:14 - I press on toward the goal for the prize of the upward call of God in Christ Jesus.",
  "Psalm 18:32 - The God who equipped me with strength and made my way blameless.",
  "2 Timothy 2:1 - You then, my child, be strengthened by the grace that is in Christ Jesus.",
  "Psalm 119:114 - You are my hiding place and my shield; I hope in your word.",
  "James 5:7 - Be patient, therefore, brothers, until the coming of the Lord.",
  "Deuteronomy 31:6 - Be strong and courageous. Do not fear or be in dread of them, for it is the Lord your God who goes with you.",
  "Romans 8:18 - For I consider that the sufferings of this present time are not worth comparing with the glory that is to be revealed.",
  "Psalm 119:50 - This is my comfort in my affliction, that your promise gives me life.",
  "1 Corinthians 9:24 - Do you not know that in a race all the runners run, but only one receives the prize? Run in such a way as to obtain it.",
  "Psalm 59:17 - O my Strength, I will sing praises to you, for you, O God, are my fortress.",
  "Ephesians 3:16 - That according to the riches of his glory he may grant you to be strengthened with power through his Spirit.",
  "Psalm 130:6 - My soul waits for the Lord more than watchmen for the morning, more than watchmen for the morning.",
  "Hebrews 12:11 - For the moment all discipline seems painful rather than pleasant, but later it yields the peaceful fruit of righteousness.",
  "Psalm 46:10 - Be still, and know that I am God. I will be exalted among the nations.",
  "2 Corinthians 1:21 - And it is God who establishes us with you in Christ, and has anointed us.",
  "Psalm 119:71 - It is good for me that I was afflicted, that I might learn your statutes.",
  "Romans 10:17 - So faith comes from hearing, and hearing through the word of Christ.",
  "Psalm 91:1-2 - He who dwells in the shelter of the Most High will abide in the shadow of the Almighty.",
  "James 1:2-3 - Count it all joy, my brothers, when you meet trials of various kinds, for you know that the testing of your faith produces steadfastness.",
  "Psalm 119:105 - Your word is a lamp to my feet and a light to my path.",
  "2 Timothy 2:3 - Share in suffering as a good soldier of Christ Jesus.",
  "Psalm 18:1 - I love you, O Lord, my strength."
  // Add more verses here
];

const versesEvening = [
  "Psalm 141:2 - May my prayer be set before you like incense; may the lifting up of my hands be like the evening sacrifice.",
  "Psalm 119:148 - My eyes are awake before the watches of the night, that I may meditate on your promise.",
  "Psalm 63:6 - When I remember you upon my bed, and meditate on you in the watches of the night.",
  "Psalm 34:8 - Oh, taste and see that the Lord is good! Blessed is the man who takes refuge in him!",
  "Proverbs 3:24 - When you lie down, you will not be afraid; when you lie down, your sleep will be sweet.",
  "Psalm 4:8 - In peace I will both lie down and sleep; for you alone, O Lord, make me dwell in safety.",
  "Philippians 4:6-7 - Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts.",
  "Psalm 107:1 - Oh give thanks to the Lord, for he is good, for his steadfast love endures forever!",
  "Psalm 77:11-12 - I will remember the deeds of the Lord; yes, I will remember your wonders of old. I will ponder all your work, and meditate on your mighty deeds.",
  "John 16:33 - I have said these things to you, that in me you may have peace. In the world you will have tribulation. But take heart; I have overcome the world.",
  "1 Thessalonians 5:18 - Give thanks in all circumstances; for this is the will of God in Christ Jesus for you.",
  "Psalm 119:62 - At midnight I rise to praise you, because of your righteous rules.",
  "Isaiah 26:3 - You keep him in perfect peace whose mind is stayed on you, because he trusts in you.",
  "Psalm 143:5 - I remember the days of old; I meditate on all that you have done; I ponder the work of your hands.",
  "Colossians 3:15 - And let the peace of Christ rule in your hearts, to which indeed you were called in one body. And be thankful.",
  "Psalm 55:17 - Evening and morning and at noon I utter my complaint and moan, and he hears my voice.",
  "Psalm 136:1 - Give thanks to the Lord, for he is good, for his steadfast love endures forever.",
  "Psalm 77:6 - I said, 'Let me remember my song in the night; let me meditate in my heart.' Then my spirit made a diligent search.",
  "John 14:27 - Peace I leave with you; my peace I give to you. Not as the world gives do I give to you.",
  "Psalm 9:1 - I will give thanks to the Lord with my whole heart; I will recount all of your wonderful deeds.",
  "Psalm 119:55 - I remember your name in the night, O Lord, and keep your law.",
  "Ephesians 5:20 - Giving thanks always and for everything to God the Father in the name of our Lord Jesus Christ.",
  "Psalm 46:10 - Be still, and know that I am God. I will be exalted among the nations, I will be exalted in the earth!",
  "Psalm 119:15 - I will meditate on your precepts and fix my eyes on your ways.",
  "1 Chronicles 16:34 - Oh give thanks to the Lord, for he is good; for his steadfast love endures forever!",
  "Psalm 3:5 - I lay down and slept; I woke again, for the Lord sustained me.",
  "Psalm 119:97 - Oh how I love your law! It is my meditation all the day.",
  "Colossians 4:2 - Continue steadfastly in prayer, being watchful in it with thanksgiving.",
  "Psalm 29:11 - May the Lord give strength to his people! May the Lord bless his people with peace!",
  "Psalm 119:165 - Great peace have those who love your law; nothing can make them stumble.",
  "Psalm 145:2 - Every day I will bless you and praise your name forever and ever.",
  "Psalm 119:27 - Make me understand the way of your precepts, and I will meditate on your wondrous works.",
  "Isaiah 32:17 - And the effect of righteousness will be peace, and the result of righteousness, quietness and trust forever.",
  "Psalm 34:1 - I will bless the Lord at all times; his praise shall continually be in my mouth.",
  "Psalm 139:17-18 - How precious to me are your thoughts, O God! How vast is the sum of them! If I would count them, they are more than the sand. I awake, and I am still with you.",
  "1 Timothy 2:1 - First of all, then, I urge that supplications, prayers, intercessions, and thanksgivings be made for all people.",
  "Psalm 23:6 - Surely goodness and mercy shall follow me all the days of my life, and I shall dwell in the house of the Lord forever.",
  "Numbers 6:24-26 - The Lord bless you and keep you; the Lord make his face to shine upon you and be gracious to you; the Lord lift up his countenance upon you and give you peace.",
  "Psalm 119:105 - Your word is a lamp to my feet and a light to my path.",
  "Psalm 100:4 - Enter his gates with thanksgiving, and his courts with praise! Give thanks to him; bless his name!",
  "Psalm 4:7 - You have put more joy in my heart than they have when their grain and wine abound.",
  "Psalm 119:130 - The unfolding of your words gives light; it imparts understanding to the simple.",
  "1 Thessalonians 5:16-18 - Rejoice always, pray without ceasing, give thanks in all circumstances; for this is the will of God in Christ Jesus for you.",
  "Psalm 91:1-2 - He who dwells in the shelter of the Most High will abide in the shadow of the Almighty. I will say to the Lord, 'My refuge and my fortress, my God, in whom I trust.'",
  "Psalm 92:1-2 - It is good to give thanks to the Lord, to sing praises to your name, O Most High; to declare your steadfast love in the morning, and your faithfulness by night.",
  "Psalm 119:7 - I will praise you with an upright heart, when I learn your righteous rules.",
  "John 16:22 - So also you have sorrow now, but I will see you again, and your hearts will rejoice, and no one will take your joy from you.",
  "Psalm 119:111 - Your testimonies are my heritage forever, for they are the joy of my heart.",
  "Psalm 16:9 - Therefore my heart is glad, and my whole being rejoices; my flesh also dwells secure.",
  "Psalm 95:1-2 - Oh come, let us sing to the Lord; let us make a joyful noise to the rock of our salvation! Let us come into his presence with thanksgiving.",
  "Psalm 119:164 - Seven times a day I praise you for your righteous rules.",
  "Romans 15:13 - May the God of hope fill you with all joy and peace in believing, so that by the power of the Holy Spirit you may abound in hope.",
  "Psalm 119:57 - The Lord is my portion; I promise to keep your words.",
  "Psalm 34:18 - The Lord is near to the brokenhearted and saves the crushed in spirit.",
  "Psalm 119:76 - Let your steadfast love comfort me according to your promise to your servant.",
  "Psalm 136:26 - Give thanks to the God of heaven, for his steadfast love endures forever.",
  "Psalm 119:12 - Blessed are you, O Lord; teach me your statutes!",
  "Isaiah 30:15 - In returning and rest you shall be saved; in quietness and in trust shall be your strength.",
  "Psalm 118:1 - Oh give thanks to the Lord, for he is good; for his steadfast love endures forever!",
  "Psalm 119:48 - I will lift up my hands toward your commandments, which I love, and I will meditate on your statutes.",
  "Philippians 4:9 - What you have learned and received and heard and seen in me—practice these things, and the God of peace will be with you.",
  "Psalm 147:3 - He heals the brokenhearted and binds up their wounds.",
  "Psalm 119:135 - Make your face shine upon your servant, and teach me your statutes.",
  "Psalm 30:11-12 - You have turned for me my mourning into dancing; you have loosed my sackcloth and clothed me with gladness, that my glory may sing your praise and not be silent.",
  "Psalm 119:171 - My lips will pour forth praise, for you teach me your statutes.",
  "Psalm 16:11 - You make known to me the path of life; in your presence there is fullness of joy; at your right hand are pleasures forevermore.",
  "Psalm 119:24 - Your testimonies are my delight; they are my counselors.",
  "Psalm 145:18 - The Lord is near to all who call on him, to all who call on him in truth.",
  "Psalm 116:1-2 - I love the Lord, because he has heard my voice and my pleas for mercy. Because he inclined his ear to me, therefore I will call on him as long as I live."
  // Add more verses here
];

const versesNight = [
  "Psalm 4:8 - In peace I will both lie down and sleep; for you alone, O Lord, make me dwell in safety.",
  "Psalm 91:1-2 - He who dwells in the shelter of the Most High will abide in the shadow of the Almighty. I will say to the Lord, 'My refuge and my fortress, my God, in whom I trust.'",
  "Proverbs 3:24 - When you lie down, you will not be afraid; when you lie down, your sleep will be sweet.",
  "Psalm 23:1-2 - The Lord is my shepherd; I shall not want. He makes me lie down in green pastures. He leads me beside still waters.",
  "Isaiah 26:3 - You keep him in perfect peace whose mind is stayed on you, because he trusts in you.",
  "Psalm 121:7-8 - The Lord will keep you from all evil; he will keep your life. The Lord will keep your going out and your coming in from this time forth and forevermore.",
  "John 16:33 - I have said these things to you, that in me you may have peace. In the world you will have tribulation. But take heart; I have overcome the world.",
  "Psalm 3:5 - I lay down and slept; I woke again, for the Lord sustained me.",
  "Psalm 91:4 - He will cover you with his pinions, and under his wings you will find refuge; his faithfulness is a shield and buckler.",
  "Philippians 4:6-7 - Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts.",
  "Psalm 46:1 - God is our refuge and strength, a very present help in trouble.",
  "Matthew 11:28 - Come to me, all who labor and are heavy laden, and I will give you rest.",
  "Psalm 55:22 - Cast your burden on the Lord, and he will sustain you; he will never permit the righteous to be moved.",
  "Isaiah 30:15 - In returning and rest you shall be saved; in quietness and in trust shall be your strength.",
  "Psalm 127:2 - It is in vain that you rise up early and go late to rest, eating the bread of anxious toil; for he gives to his beloved sleep.",
  "Psalm 34:7 - The angel of the Lord encamps around those who fear him, and delivers them.",
  "John 14:27 - Peace I leave with you; my peace I give to you. Not as the world gives do I give to you. Let not your hearts be troubled.",
  "Psalm 28:7 - The Lord is my strength and my shield; in him my heart trusts, and I am helped.",
  "Psalm 121:3-4 - He will not let your foot be moved; he who keeps you will not slumber. Behold, he who keeps Israel will neither slumber nor sleep.",
  "Colossians 3:15 - And let the peace of Christ rule in your hearts, to which indeed you were called in one body. And be thankful.",
  "Psalm 16:9 - Therefore my heart is glad, and my whole being rejoices; my flesh also dwells secure.",
  "Proverbs 16:7 - When a man's ways please the Lord, he makes even his enemies to be at peace with him.",
  "Psalm 91:5-6 - You will not fear the terror of the night, nor the arrow that flies by day, nor the pestilence that stalks in darkness.",
  "Isaiah 41:10 - Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you.",
  "Psalm 29:11 - May the Lord give strength to his people! May the Lord bless his people with peace!",
  "Psalm 62:1-2 - For God alone my soul waits in silence; from him comes my salvation. He alone is my rock and my salvation, my fortress.",
  "2 Thessalonians 3:16 - Now may the Lord of peace himself give you peace at all times in every way.",
  "Psalm 119:165 - Great peace have those who love your law; nothing can make them stumble.",
  "Psalm 18:2 - The Lord is my rock and my fortress and my deliverer, my God, my rock, in whom I take refuge.",
  "Numbers 6:24-26 - The Lord bless you and keep you; the Lord make his face to shine upon you and be gracious to you; the Lord lift up his countenance upon you and give you peace.",
  "Psalm 46:10 - Be still, and know that I am God. I will be exalted among the nations, I will be exalted in the earth!",
  "Psalm 37:7 - Be still before the Lord and wait patiently for him; fret not yourself over the one who prospers in his way.",
  "Isaiah 54:10 - For the mountains may depart and the hills be removed, but my steadfast love shall not depart from you, and my covenant of peace shall not be removed.",
  "Psalm 31:3 - For you are my rock and my fortress; and for your name's sake you lead me and guide me.",
  "John 16:22 - So also you have sorrow now, but I will see you again, and your hearts will rejoice, and no one will take your joy from you.",
  "Psalm 91:11 - For he will command his angels concerning you to guard you in all your ways.",
  "Proverbs 3:5-6 - Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.",
  "Psalm 23:4 - Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me.",
  "Romans 15:13 - May the God of hope fill you with all joy and peace in believing, so that by the power of the Holy Spirit you may abound in hope.",
  "Psalm 121:5-6 - The Lord is your keeper; the Lord is your shade on your right hand. The sun shall not strike you by day, nor the moon by night.",
  "Psalm 16:8 - I have set the Lord always before me; because he is at my right hand, I shall not be shaken.",
  "Isaiah 32:17 - And the effect of righteousness will be peace, and the result of righteousness, quietness and trust forever.",
  "Psalm 3:3 - But you, O Lord, are a shield about me, my glory, and the lifter of my head.",
  "Philippians 4:9 - What you have learned and received and heard and seen in me—practice these things, and the God of peace will be with you.",
  "Psalm 34:18 - The Lord is near to the brokenhearted and saves the crushed in spirit.",
  "Psalm 62:5-6 - For God alone, O my soul, wait in silence, for my hope is from him. He only is my rock and my salvation.",
  "2 Timothy 1:7 - For God gave us a spirit not of fear but of power and love and self-control.",
  "Psalm 91:9-10 - Because you have made the Lord your dwelling place—the Most High, who is my refuge—no evil shall be allowed to befall you.",
  "John 10:28 - I give them eternal life, and they will never perish, and no one will snatch them out of my hand.",
  "Psalm 131:2 - But I have calmed and quieted my soul, like a weaned child with its mother; like a weaned child is my soul within me.",
  "Psalm 119:76 - Let your steadfast love comfort me according to your promise to your servant.",
  "Isaiah 12:2 - Behold, God is my salvation; I will trust, and will not be afraid; for the Lord God is my strength and my song.",
  "Psalm 27:1 - The Lord is my light and my salvation; whom shall I fear? The Lord is the stronghold of my life; of whom shall I be afraid?",
  "Romans 8:31 - What then shall we say to these things? If God is for us, who can be against us?",
  "Psalm 139:7-10 - Where shall I go from your Spirit? Or where shall I flee from your presence? If I ascend to heaven, you are there! If I make my bed in Sheol, you are there!",
  "Psalm 85:8 - Let me hear what God the Lord will speak, for he will speak peace to his people, to his saints.",
  "Deuteronomy 31:6 - Be strong and courageous. Do not fear or be in dread of them, for it is the Lord your God who goes with you.",
  "Psalm 119:114 - You are my hiding place and my shield; I hope in your word.",
  "Ephesians 3:16-17 - That according to the riches of his glory he may grant you to be strengthened with power through his Spirit in your inner being, so that Christ may dwell in your hearts through faith.",
  "Psalm 18:30 - This God—his way is perfect; the word of the Lord proves true; he is a shield for all those who take refuge in him.",
  "Psalm 116:7 - Return, O my soul, to your rest; for the Lord has dealt bountifully with you.",
  "Isaiah 43:2 - When you pass through the waters, I will be with you; and through the rivers, they shall not overwhelm you.",
  "Psalm 119:50 - This is my comfort in my affliction, that your promise gives me life.",
  "John 15:4 - Abide in me, and I in you. As the branch cannot bear fruit by itself, unless it abides in the vine, neither can you, unless you abide in me.",
  "Psalm 31:19 - Oh, how abundant is your goodness, which you have stored up for those who fear you and worked for those who take refuge in you.",
  "Romans 15:33 - May the God of peace be with you all. Amen.",
  "Psalm 121:1-2 - I lift up my eyes to the hills. From where does my help come? My help comes from the Lord, who made heaven and earth.",
  "Psalm 17:8 - Keep me as the apple of your eye; hide me in the shadow of your wings.",
  "Colossians 1:11 - Being strengthened with all power, according to his glorious might, for all endurance and patience with joy.",
  "Psalm 32:7 - You are a hiding place for me; you preserve me from trouble; you surround me with shouts of deliverance.",
  "Isaiah 57:2 - He enters into peace; they rest in their beds who walk in their uprightness.",
  "Psalm 61:2 - From the end of the earth I call to you when my heart is faint. Lead me to the rock that is higher than I.",
  "2 Corinthians 1:3-4 - Blessed be the God and Father of our Lord Jesus Christ, the Father of mercies and God of all comfort, who comforts us in all our affliction.",
  "Psalm 91:14-15 - Because he holds fast to me in love, I will deliver him; I will protect him, because he knows my name.",
  "Proverbs 18:10 - The name of the Lord is a strong tower; the righteous man runs into it and is safe.",
  "Psalm 62:8 - Trust in him at all times, O people; pour out your heart before him; God is a refuge for us.",
  "Isaiah 40:29 - He gives power to the faint, and to him who has no might he increases strength.",
  "Psalm 138:3 - On the day I called, you answered me; my strength of soul you increased.",
  "John 10:27-28 - My sheep hear my voice, and I know them, and they follow me. I give them eternal life, and they will never perish.",
  "Psalm 119:28 - My soul melts away for sorrow; strengthen me according to your word!",
  "Romans 8:38-39 - For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, will be able to separate us from the love of God.",
  "Psalm 27:5 - For he will hide me in his shelter in the day of trouble; he will conceal me under the cover of his tent.",
  "Psalm 119:116 - Uphold me according to your promise, that I may live, and let me not be put to shame in my hope!",
  "Isaiah 46:4 - Even to your old age I am he, and to gray hairs I will carry you. I have made, and I will bear; I will carry and will save.",
  "Psalm 16:1 - Preserve me, O God, for in you I take refuge.",
  "Philippians 1:6 - And I am sure of this, that he who began a good work in you will bring it to completion at the day of Jesus Christ.",
  "Psalm 91:16 - With long life I will satisfy him and show him my salvation.",
  "Psalm 31:14-15 - But I trust in you, O Lord; I say, 'You are my God.' My times are in your hand.",
  "Isaiah 55:6 - Seek the Lord while he may be found; call upon him while he is near.",
  "Psalm 119:133 - Keep steady my steps according to your promise, and let no iniquity get dominion over me.",
  "2 Corinthians 4:16 - So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day.",
  "Psalm 34:4 - I sought the Lord, and he answered me and delivered me from all my fears.",
  "Psalm 147:3 - He heals the brokenhearted and binds up their wounds.",
  "Psalm 119:105 - Your word is a lamp to my feet and a light to my path.",
  "Isaiah 41:13 - For I, the Lord your God, hold your right hand; it is I who say to you, 'Fear not, I am the one who helps you.'",
  "Psalm 31:5 - Into your hand I commit my spirit; you have redeemed me, O Lord, faithful God.",
  "Ephesians 6:16 - In all circumstances take up the shield of faith, with which you can extinguish all the flaming darts of the evil one.",
  "Psalm 33:18-19 - Behold, the eye of the Lord is on those who fear him, on those who hope in his steadfast love, that he may deliver their soul from death.",
  "Psalm 116:7-8 - Return, O my soul, to your rest; for the Lord has dealt bountifully with you. For you have delivered my soul from death.",
  "Psalm 121:3 - He will not let your foot be moved; he who keeps you will not slumber.",
  "Psalm 91:3 - For he will deliver you from the snare of the fowler and from the deadly pestilence."
  // Add more verses here
];

const dailyQuotes = [
  "Trust in the Lord with all your heart. – Proverbs 3:5",
  "Do not be anxious about anything. – Philippians 4:6",
  "I can do all things through Christ. – Philippians 4:13",
  "The Lord is my shepherd; I shall not want. – Psalm 23:1",
  "Be strong and courageous. – Joshua 1:9",
  "Commit your works to the Lord, and your plans will be established. – Proverbs 16:3",
  "The joy of the Lord is your strength. – Nehemiah 8:10",
  "Cast your burden on the Lord, and He will sustain you. – Psalm 55:22",
  "Blessed is the one who trusts in the Lord. – Jeremiah 17:7",
  "Fear not, for I am with you. – Isaiah 41:10",
  "Delight yourself in the Lord, and He will give you the desires of your heart. – Psalm 37:4",
  "Love the Lord your God with all your heart, soul, and mind. – Matthew 22:37",
  "Rejoice always. – 1 Thessalonians 5:16",
  "Pray without ceasing. – 1 Thessalonians 5:17",
  "Give thanks in all circumstances. – 1 Thessalonians 5:18",
  "The Lord is my light and my salvation; whom shall I fear? – Psalm 27:1",
  "Cast all your anxieties on Him, because He cares for you. – 1 Peter 5:7",
  "Be strong and courageous. – Deuteronomy 31:6",
  "He who dwells in the shelter of the Most High will abide in the shadow of the Almighty. – Psalm 91:1",
  "I have loved you with an everlasting love. – Jeremiah 31:3",
  "For I know the plans I have for you, declares the Lord. – Jeremiah 29:11",
  "Let all that you do be done in love. – 1 Corinthians 16:14",
  "Love does no wrong to a neighbor; therefore love is the fulfilling of the law. – Romans 13:10",
  "Rejoice in the Lord, O you righteous, and give thanks to His holy name! – Psalm 97:12",
  "Be faithful, even to the point of death, and I will give you the crown of life. – Revelation 2:10",
  "Blessed is the one who perseveres under trial. – James 1:12",
  "Do not be overcome by evil, but overcome evil with good. – Romans 12:21",
  "The Lord is near to all who call on Him. – Psalm 145:18",
  "You keep him in perfect peace whose mind is stayed on you. – Isaiah 26:3",
  "Wait for the Lord; be strong, and let your heart take courage. – Psalm 27:14",
  "The Lord is gracious and merciful, slow to anger and abounding in steadfast love. – Psalm 145:8",
  "Come to me, all who labor and are heavy laden, and I will give you rest. – Matthew 11:28",
  "Peace I leave with you; my peace I give to you. – John 14:27",
  "For God gave us a spirit not of fear but of power and love and self-control. – 2 Timothy 1:7",
  "The steadfast love of the Lord never ceases; His mercies never come to an end. – Lamentations 3:22",
  "He restores my soul. – Psalm 23:3",
  "I am the vine; you are the branches. – John 15:5",
  "Let your light shine before others, that they may see your good works. – Matthew 5:16",
  "The Lord is good, a stronghold in the day of trouble; He knows those who take refuge in Him. – Nahum 1:7",
  "Be kind to one another, tenderhearted, forgiving one another. – Ephesians 4:32",
  "Do not fear, for I have redeemed you; I have called you by name, you are mine. – Isaiah 43:1",
  "He will cover you with His feathers, and under His wings you will find refuge. – Psalm 91:4",
  "The Lord is my strength and my song; He has become my salvation. – Psalm 118:14",
  "My grace is sufficient for you, for my power is made perfect in weakness. – 2 Corinthians 12:9",
  "Let everything that has breath praise the Lord! – Psalm 150:6",
  "Blessed are the peacemakers, for they shall be called sons of God. – Matthew 5:9",
  "Your word is a lamp to my feet and a light to my path. – Psalm 119:105",
  "Trust in the Lord and do good; dwell in the land and befriend faithfulness. – Psalm 37:3",
  "The Lord is my refuge and my fortress, my God, in whom I trust. – Psalm 91:2",
  "Be still, and know that I am God. – Psalm 46:10",
  "Do not let your hearts be troubled. – John 14:1",
  "For we walk by faith, not by sight. – 2 Corinthians 5:7",
  "The Lord will fight for you, and you have only to be silent. – Exodus 14:14",
  "Rejoice in hope, be patient in tribulation, be constant in prayer. – Romans 12:12",
  "The Lord is near to the brokenhearted and saves the crushed in spirit. – Psalm 34:18",
  "A soft answer turns away wrath. – Proverbs 15:1",
  "Better is a little with righteousness than great revenues with injustice. – Proverbs 16:8",
  "Let your reasonableness be known to everyone. – Philippians 4:5",
  "The Lord is my light and my salvation; whom shall I fear? – Psalm 27:1",
  "Blessed is the one who trusts in the Lord, whose confidence is in Him. – Jeremiah 17:7",
  "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil. – Jeremiah 29:11",
  "He heals the brokenhearted and binds up their wounds. – Psalm 147:3",
  "Commit your way to the Lord; trust in Him, and He will act. – Psalm 37:5",
  "Do not be conformed to this world, but be transformed by the renewal of your mind. – Romans 12:2",
  "The Lord your God is in your midst, a mighty one who will save. – Zephaniah 3:17",
  "Be strong and courageous. Do not fear or be in dread of them. – Deuteronomy 31:6",
  "Rejoice always, pray without ceasing, give thanks in all circumstances. – 1 Thessalonians 5:16-18",
  "The Lord is righteous in all His ways and kind in all His works. – Psalm 145:17",
  "A joyful heart is good medicine, but a crushed spirit dries up the bones. – Proverbs 17:22",
  "Let not your hearts be troubled. Believe in God; believe also in me. – John 14:1",
  "For nothing will be impossible with God. – Luke 1:37",
  "The name of the Lord is a strong tower; the righteous man runs into it and is safe. – Proverbs 18:10",
  "Bear one another's burdens, and so fulfill the law of Christ. – Galatians 6:2",
  "Do everything in love. – 1 Corinthians 16:14",
  "Let the peace of Christ rule in your hearts. – Colossians 3:15",
  "I have loved you with an everlasting love; therefore I have continued my faithfulness to you. – Jeremiah 31:3",
  "Be strong in the Lord and in the strength of His might. – Ephesians 6:10",
  "For by grace you have been saved through faith. – Ephesians 2:8",
  "You keep him in perfect peace whose mind is stayed on you. – Isaiah 26:3",
  "Let us not grow weary of doing good, for in due season we will reap. – Galatians 6:9",
  "I have set the Lord always before me; because He is at my right hand, I shall not be shaken. – Psalm 16:8",
  "The Lord will guide you continually and satisfy your desire in scorched places. – Isaiah 58:11",
  "Do not be afraid, little flock, for it is your Father's good pleasure to give you the kingdom. – Luke 12:32",
  "He who calls you is faithful; He will surely do it. – 1 Thessalonians 5:24",
  "Even though I walk through the valley of the shadow of death, I will fear no evil, for You are with me. – Psalm 23:4",
  "But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness. – Galatians 5:22",
  "Therefore encourage one another and build one another up. – 1 Thessalonians 5:11",
  "Be strong, and let your heart take courage, all you who wait for the Lord! – Psalm 31:24",
  "For the Lord your God is He who goes with you, to fight for you against your enemies. – Deuteronomy 20:4",
  "The Lord is my rock, my fortress, and my deliverer. – 2 Samuel 22:2",
  "Blessed are those who hunger and thirst for righteousness, for they shall be satisfied. – Matthew 5:6",
  "He who began a good work in you will bring it to completion. – Philippians 1:6",
  "Love your enemies and pray for those who persecute you. – Matthew 5:44",
  "For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come. – Romans 8:38",
  "Behold, I am with you always, to the end of the age. – Matthew 28:20",
  "The Lord will bless you and keep you. – Numbers 6:24",
  "May the God of hope fill you with all joy and peace in believing. – Romans 15:13",
  "Trust in the Lord forever, for the Lord God is an everlasting rock. – Isaiah 26:4",
  "The Lord is good, a stronghold in the day of trouble. – Nahum 1:7",
  "Sing to the Lord, bless His name; tell of His salvation from day to day. – Psalm 96:2",
  "Behold, God is my salvation; I will trust, and will not be afraid. – Isaiah 12:2",
  "Do not let your hearts be troubled, neither let them be afraid. – John 14:27",
  "In all your ways acknowledge Him, and He will make straight your paths. – Proverbs 3:6",
  "For the Lord takes pleasure in His people; He adorns the humble with salvation. – Psalm 149:4",
  "The steadfast love of the Lord never ceases; His mercies never come to an end. – Lamentations 3:22",
  "The Lord is my strength and my song; He has become my salvation. – Exodus 15:2",
  "God is our refuge and strength, a very present help in trouble. – Psalm 46:1",
  "Your word is truth. – John 17:17",
  "Blessed is the man who remains steadfast under trial. – James 1:12",
  "For the Lord is righteous; He loves righteous deeds. – Psalm 11:7",
  "Behold, I am making all things new. – Revelation 21:5",
  "He gives strength to the weary and increases the power of the weak. – Isaiah 40:29",
  "Let the word of Christ dwell in you richly. – Colossians 3:16",
  "The Lord is my rock and my fortress and my deliverer. – Psalm 18:2",
  "Blessed are the pure in heart, for they shall see God. – Matthew 5:8",
  "The Lord gives strength to His people; the Lord blesses His people with peace. – Psalm 29:11",
  "The righteous cry out, and the Lord hears them; He delivers them from all their troubles. – Psalm 34:17",
  "But they who wait for the Lord shall renew their strength; they shall mount up with wings like eagles. – Isaiah 40:31",
  "Do not worry about tomorrow, for tomorrow will worry about itself. – Matthew 6:34",
  "Therefore, if anyone is in Christ, he is a new creation. – 2 Corinthians 5:17",
  "And let us not grow weary of doing good, for in due season we will reap if we do not give up. – Galatians 6:9",
  "Taste and see that the Lord is good; blessed is the man who takes refuge in Him. – Psalm 34:8",
  "Rejoice in the Lord always; again I will say, rejoice. – Philippians 4:4",
  "Seek first the kingdom of God and His righteousness, and all these things will be added to you. – Matthew 6:33",
  "Blessed is the man who trusts in the Lord, whose trust is the Lord. – Jeremiah 17:7",
  "And we know that for those who love God all things work together for good. – Romans 8:28",
  "I sought the Lord, and He answered me and delivered me from all my fears. – Psalm 34:4",
  "The Lord is compassionate and gracious, slow to anger, abounding in love. – Psalm 103:8",
  "The Lord upholds all who fall and lifts up all who are bowed down. – Psalm 145:14",
  "Let us hold fast the confession of our hope without wavering. – Hebrews 10:23",
  "And my God will supply every need of yours according to His riches in glory in Christ Jesus. – Philippians 4:19",
  "The Lord your God is in your midst, a mighty one who will save; He will rejoice over you with gladness. – Zephaniah 3:17",
  "Be strong and courageous. Do not be frightened, and do not be dismayed, for the Lord your God is with you wherever you go. – Joshua 1:9",
  "Delight yourself in the Lord, and He will give you the desires of your heart. – Psalm 37:4",
  "A new commandment I give to you, that you love one another. – John 13:34",
  "God is faithful, by whom you were called into the fellowship of His Son, Jesus Christ our Lord. – 1 Corinthians 1:9",
  "The Lord is righteous in all His ways and kind in all His works. – Psalm 145:17"
];

// ----- Helper Functions -----
function getRandomVerse(array) {
  if (!array || array.length === 0) return "No verse available.";
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

function getDailyQuote() {
  if (!dailyQuotes || dailyQuotes.length === 0) return "No quote available.";
  const today = new Date();
  return dailyQuotes[today.getDate() % dailyQuotes.length];
}

function encodeShareText(text) {
  return encodeURIComponent(text);
}

// ----- Update Greeting -----
function updateGreeting() {
  const hour = new Date().getHours();
  let greeting, icon, verseArray, newBackground;

  if (hour >= 5 && hour < 12) {
    greeting = "Good Morning";
    icon = "🌅";
    verseArray = versesMorning;
    newBackground = "morning";
  } else if (hour >= 12 && hour < 15) {
    greeting = "Good Day";
    icon = "☀️";
    verseArray = versesDay;
    newBackground = "day";
  } else if (hour >= 15 && hour < 18) {
    greeting = "Good Afternoon";
    icon = "🌤️";
    verseArray = versesAfternoon;
    newBackground = "afternoon";
  } else if (hour >= 18 && hour < 22) {
    greeting = "Good Evening";
    icon = "🌇";
    verseArray = versesEvening;
    newBackground = "evening";
  } else {
    greeting = "Good Night";
    icon = "🌙";
    verseArray = versesNight;
    newBackground = "night";
  }

  if (currentBackground !== newBackground) {
    document.body.className = newBackground;
    currentBackground = newBackground;
  }

  const displayGreeting = userName ? `${greeting}, ${userName}!` : greeting;
  const iconElement = document.getElementById("icon");
  const textElement = document.getElementById("text");
  const verseElement = document.getElementById("verse");

  if (iconElement) iconElement.innerText = icon;
  if (textElement) textElement.innerText = displayGreeting;
  if (verseElement) verseElement.innerText = `${getRandomVerse(verseArray)}\n\nDaily Quote: ${getDailyQuote()}`;
}

// ----- Update Clock -----
function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  const s = String(now.getSeconds()).padStart(2, "0");
  const clockElement = document.getElementById("clock");
  if (clockElement) clockElement.innerText = `${h}:${m}:${s}`;
}

// ----- Update Date -----
function updateDate() {
  const now = new Date();
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  const dateElement = document.getElementById("date");
  if (dateElement) dateElement.innerText = now.toLocaleDateString("en-US", options);
}

// ----- Event Listeners -----
const nameInput = document.getElementById("nameInput");
const resetButton = document.getElementById("resetButton");
const shareButton = document.getElementById("shareButton");
const shareModal = document.getElementById("shareModal");
const shareDevice = document.getElementById("shareDevice");
const shareWhatsApp = document.getElementById("shareWhatsApp");
const shareTwitter = document.getElementById("shareTwitter");
const shareFacebook = document.getElementById("shareFacebook");
const shareTikTok = document.getElementById("shareTikTok");
const copyVerse = document.getElementById("copyVerse");
const closeModal = document.getElementById("closeModal");

if (nameInput) {
  nameInput.addEventListener("input", (e) => {
    userName = e.target.value.trim();
    try {
      localStorage.setItem("userName", userName);
    } catch (e) {
      console.warn("localStorage is not available:", e);
    }
    updateGreeting();
  });
}

if (resetButton) {
  resetButton.addEventListener("click", () => {
    try {
      localStorage.removeItem("userName");
    } catch (e) {
      console.warn("localStorage is not available:", e);
    }
    userName = "";
    if (nameInput) nameInput.value = "";
    updateGreeting();
  });
}

if (shareButton) {
  shareButton.addEventListener("click", () => {
    if (shareModal) shareModal.style.display = "block";
  });
}

if (closeModal) {
  closeModal.addEventListener("click", () => {
    if (shareModal) shareModal.style.display = "none";
  });
}

// Close modal if clicking outside content
window.addEventListener("click", (event) => {
  if (event.target === shareModal) {
    shareModal.style.display = "none";
  }
});

// Get share text
function getShareText() {
  const verseElement = document.getElementById("verse");
  if (verseElement) {
    return `${verseElement.innerText}\n\nFrom Greeter Bible App: ${window.location.href}`;
  }
  return "";
}

if (shareDevice) {
  shareDevice.addEventListener("click", async () => {
    const shareData = {
      title: "Greeter Bible Verse",
      text: getShareText(),
      url: window.location.href
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error("Share failed:", err);
      }
    } else {
      alert("Device sharing not supported in this browser.");
    }
  });
}

if (shareWhatsApp) {
  shareWhatsApp.addEventListener("click", () => {
    const text = encodeShareText(getShareText());
    window.open(`https://wa.me/?text=${text}`, "_blank");
  });
}

if (shareTwitter) {
  shareTwitter.addEventListener("click", () => {
    const text = encodeShareText(getShareText());
    window.open(`https://x.com/intent/tweet?text=${text}`, "_blank");
  });
}

if (shareFacebook) {
  shareFacebook.addEventListener("click", () => {
    const text = getShareText();
    const encodedUrl = encodeShareText(window.location.href);
    // Simplify text for Facebook share dialog to avoid truncation
    const shortText = encodeShareText(
      text.split("\n\n")[0] + "\n\nFrom Greeter Bible App" // Share only verse and app name to fit
    );
    // Open Facebook share dialog
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${shortText}`,
      "_blank"
    );
    // Alert user to paste full text if needed
    alert(
      "Facebook may only show the link or part of the verse. To share the full verse and quote, copy the text using the 'Copy Verse' button and paste it into your Facebook post."
    );
  });
}

if (shareTikTok) {
  shareTikTok.addEventListener("click", () => {
    const text = encodeShareText(getShareText());
    window.open(`https://www.tiktok.com/upload?text=${text}`, "_blank");
  });
}

if (copyVerse) {
  copyVerse.addEventListener("click", async () => {
    const text = getShareText();
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(text);
        alert("Verse copied to clipboard!");
      } catch (err) {
        console.error("Copy failed:", err);
      }
    } else {
      alert("Clipboard not supported.");
    }
  });
}

// ----- Initialize -----
updateGreeting();
updateClock();
updateDate();

setInterval(updateClock, 1000); // Update clock every second
setInterval(updateGreeting, 300000); // Update greeting every 5 minutes
setInterval(updateDate, 3600000); // Update date every hour
