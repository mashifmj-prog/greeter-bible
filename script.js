// -------------------- Greeter Bible App --------------------

// Replace with your OpenWeatherMap API Key
const API_KEY = "YOUR_API_KEY_HERE";

// -------------------- User Name --------------------
let userName = "";
if(localStorage.getItem("userName")) {
  userName = localStorage.getItem("userName");
  document.getElementById("nameInput").value = userName;
}

// Track background
let currentBackground = "";

// -------------------- Bible Verses (20 per time-of-day) --------------------
const versesMorning = [
  "Psalm 5:3 - In the morning, Lord, you hear my voice.",
  "Lamentations 3:22-23 - The Lord’s mercies are new every morning.",
  "Psalm 59:16 - I will sing of your strength in the morning.",
  "Psalm 30:5 - Weeping may last for the night, but joy comes in the morning.",
  "Psalm 143:8 - Let the morning bring me word of your unfailing love.",
  "Isaiah 50:4 - The Lord God has given me the tongue of the learned.",
  "Psalm 90:14 - Satisfy us in the morning with your unfailing love.",
  "Psalm 119:147 - I rise before dawn and cry for help.",
  "Psalm 59:16 - I will sing of your strength.",
  "Lamentations 3:23 - His compassions never fail.",
  "Psalm 59:16 - Evening and morning, I sing praises.",
  "Psalm 92:2 - Your deeds are great; I will declare your works.",
  "Psalm 63:1 - O God, you are my God; earnestly I seek you.",
  "Psalm 88:13 - But I call to you, Lord, every day.",
  "Psalm 5:3 - I pour out my complaint before you.",
  "Psalm 30:5 - Joy comes in the morning.",
  "Psalm 59:16 - I will sing of your lovingkindness.",
  "Psalm 143:8 - Lead me in your truth and teach me.",
  "Psalm 92:1 - It is good to give thanks to the Lord.",
  "Psalm 63:6 - When I remember you on my bed, I meditate on you."
];

const versesDay = [
  "Psalm 118:24 - This is the day the Lord has made; rejoice and be glad.",
  "Colossians 3:23 - Whatever you do, work heartily.",
  "Proverbs 16:3 - Commit your work to the Lord.",
  "Ecclesiastes 9:10 - Whatever your hand finds to do, do it with all your might.",
  "Psalm 37:5 - Commit your way to the Lord.",
  "Psalm 90:17 - Establish the work of our hands.",
  "Isaiah 41:10 - Fear not, for I am with you.",
  "1 Corinthians 15:58 - Be steadfast, immovable.",
  "Galatians 6:9 - Do not grow weary of doing good.",
  "Matthew 5:16 - Let your light shine before others.",
  "Psalm 145:9 - The Lord is good to all.",
  "Proverbs 3:6 - In all your ways acknowledge Him.",
  "Philippians 4:13 - I can do all things through Christ.",
  "Joshua 1:9 - Be strong and courageous.",
  "Psalm 37:7 - Be still before the Lord.",
  "Psalm 34:8 - Taste and see that the Lord is good.",
  "Romans 12:11 - Never be lacking in zeal.",
  "1 Thessalonians 5:16-18 - Rejoice always, pray continually.",
  "Proverbs 16:9 - The heart of man plans his way.",
  "Psalm 27:14 - Wait for the Lord; be strong."
];

// Similar 20 verses arrays can be added for afternoon, evening, night
const versesAfternoon = versesDay; 
const versesEvening = versesMorning; 
const versesNight = versesMorning;

// Daily quotes
const dailyQuotes = [
  "Trust in the Lord with all your heart. – Proverbs 3:5",
  "Do not be anxious about anything. – Philippians 4:6",
  "I can do all things through Christ. – Philippians 4:13"
];

// -------------------- Helper Functions --------------------
function getRandomVerse(array) {
  return array[Math.floor(Math.random() * array.length)];
}
function getDailyQuote() {
  const today = new Date();
  return dailyQuotes[today.getDate() % dailyQuotes.length];
}

// -------------------- Update Greeting --------------------
function updateGreeting() {
  const hour = new Date().getHours();
  let greeting, icon, verseArray, newBackground;

  if(hour >=5 &&
