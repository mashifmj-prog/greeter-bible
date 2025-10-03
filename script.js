// ================== Greeter - Bible (script.js) ==================
// Replace with your OpenWeatherMap API key (free tier available).
const OWM_API_KEY = "YOUR_OPENWEATHERMAP_API_KEY";

// Small utility
const $ = id => document.getElementById(id);

// ---- state
let userName = "";
let currentBackground = "";

// Load stored name (if any) after DOM loaded
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("userName")) {
    userName = localStorage.getItem("userName");
    $("nameInput").value = userName;
  }

  // initialize UI and logic
  updateGreeting();
  updateClock();
  fetchAndShowWeather(); // starts geolocation + weather
  // intervals
  setInterval(updateClock, 1000);
  setInterval(updateGreeting, 60_000); // update greeting every minute
  // Optional: update weather periodically (every 30 minutes)
  setInterval(fetchAndShowWeather, 30 * 60 * 1000);
});

// ------------------ Content: 20 verses per time period ------------------
// (Bible verses — 20 each)
const versesMorning = [
  "Psalm 5:3 — In the morning, Lord, you hear my voice.",
  "Lamentations 3:22–23 — The Lord’s mercies are new every morning.",
  "Psalm 59:16 — I will sing of your strength in the morning.",
  "Psalm 30:5 — Weeping may stay for the night, but joy comes in the morning.",
  "Psalm 143:8 — Let the morning bring me word of your unfailing love.",
  "Isaiah 50:4 — The Lord has given me the tongue of the learned.",
  "Psalm 90:14 — Satisfy us in the morning with your unfailing love.",
  "Psalm 119:147 — I rise before dawn and cry for help.",
  "Psalm 59:16 — I will sing of your strength.",
  "Lamentations 3:23 — His compassions never fail.",
  "Psalm 59:16 — Evening and morning, I sing praises.",
  "Psalm 92:2 — Your deeds are great; I will declare your works.",
  "Psalm 63:1 — O God, you are my God; earnestly I seek you.",
  "Psalm 88:13 — But I call to you, Lord, every day.",
  "Psalm 5:3 — I pour out my complaint before you.",
  "Psalm 30:5 — Joy comes in the morning.",
  "Psalm 59:16 — I will sing of your lovingkindness.",
  "Psalm 143:8 — Lead me in your truth and teach me.",
  "Psalm 92:1 — It is good to give thanks to the Lord.",
  "Psalm 63:6 — When I remember you on my bed, I meditate on you."
];

const versesDay = [
  "Psalm 118:24 — This is the day the Lord has made; rejoice and be glad.",
  "Colossians 3:23 — Whatever you do, work heartily as for the Lord.",
  "Proverbs 16:3 — Commit your work to the Lord.",
  "Ecclesiastes 9:10 — Whatever your hand finds to do, do it with all your might.",
  "Psalm 37:5 — Commit your way to the Lord.",
  "Psalm 90:17 — Establish the work of our hands.",
  "Isaiah 41:10 — Fear not, for I am with you.",
  "1 Corinthians 15:58 — Be steadfast and immovable.",
  "Galatians 6:9 — Do not grow weary of doing good.",
  "Matthew 5:16 — Let your light shine before others.",
  "Psalm 145:9 — The Lord is good to all.",
  "Proverbs 3:6 — In all your ways acknowledge Him.",
  "Philippians 4:13 — I can do all things through Christ.",
  "Joshua 1:9 — Be strong and courageous.",
  "Psalm 37:7 — Be still before the Lord.",
  "Psalm 34:8 — Taste and see that the Lord is good.",
  "Romans 12:11 — Never be lacking in zeal.",
  "1 Thessalonians 5:16–18 — Rejoice always; pray continually.",
  "Proverbs 16:9 — The heart of man plans his way.",
  "Psalm 27:14 — Wait for the Lord; be strong."
];

const versesAfternoon = [
  "Isaiah 40:31 — Those who hope in the Lord will renew their strength.",
  "Psalm 27:14 — Wait for the Lord; be strong.",
  "Psalm 143:8 — Let the morning bring me word of your unfailing love.",
  "Philippians 4:6 — Do not be anxious about anything.",
  "Psalm 46:10 — Be still and know that I am God.",
  "Psalm 62:5 — My soul, wait silently for God.",
  "Proverbs 3:5 — Trust in the Lord with all your heart.",
  "Psalm 34:18 — The Lord is near to the brokenhearted.",
  "Psalm 119:105 — Your word is a lamp to my feet.",
  "Psalm 37:7 — Be still before the Lord.",
  "Isaiah 41:13 — I am your God; I will strengthen you.",
  "Psalm 55:22 — Cast your burden on the Lord.",
  "Matthew 11:28 — Come to me, all you who are weary.",
  "Psalm 9:10 — Those who know your name trust in you.",
  "Psalm 34:17 — The righteous cry out, and the Lord hears.",
  "Psalm 31:24 — Be strong and take heart.",
  "Proverbs 16:3 — Commit your work to the Lord.",
  "Psalm 37:5 — Commit your way to the Lord.",
  "Psalm 121:1–2 — I lift my eyes to the hills.",
  "Psalm 46:1 — God is our refuge and strength."
];

const versesEvening = [
  "Psalm 141:2 — May my prayer be set before you like incense.",
  "Psalm 119:148 — My eyes stay open through the watches of the night.",
  "Psalm 4:8 — In peace I will lie down and sleep.",
  "Psalm 63:1 — On my bed I remember you.",
  "Psalm 16:7 — I will praise the Lord, who counsels me.",
  "Psalm 34:4 — I sought the Lord, and He answered me.",
  "Psalm 121:3 — He will not let your foot slip.",
  "Psalm 91:1–2 — Whoever dwells in the shelter of the Most High.",
  "Psalm 27:1 — The Lord is my light and my salvation.",
  "Psalm 37:7 — Be still before the Lord.",
  "Psalm 119:57 — The Lord is my portion.",
  "Psalm 91:5 — You will not fear the terror of night.",
  "Psalm 63:1 — O God, you are my God; earnestly I seek you.",
  "Psalm 4:9 — In peace I will both lie down and sleep.",
  "Psalm 121:7 — The Lord will keep you from all harm.",
  "Psalm 16:8 — I keep my eyes always on the Lord.",
  "Psalm 145:18 — The Lord is near to all who call on Him.",
  "Psalm 119:148 — My eyes are awake before the watches of the night.",
  "Psalm 31:20 — You keep them in perfect peace.",
  "Psalm 34:8 — Taste and see that the Lord is good."
];

const versesNight = [
  "Psalm 4:8 — In peace I will lie down and sleep.",
  "Psalm 127:2 — It is vain for you to rise up early.",
  "Proverbs 3:24 — When you lie down, you will not be afraid.",
  "Psalm 91:1 — He who dwells in the shelter of the Most High.",
  "Psalm 63:6 — On my bed I remember you.",
  "Psalm 16:7 — I will praise the Lord, who counsels me.",
  "Psalm 34:4 — I sought the Lord, and He answered me.",
  "Psalm 121:3 — He will not let your foot slip.",
  "Psalm 91:2 — I will say of the Lord: He is my refuge.",
  "Psalm 27:1 — The Lord is my light and my salvation.",
  "Psalm 37:7 — Be still before the Lord.",
  "Psalm 119:57 — The Lord is my portion.",
  "Psalm 91:5 — You will not fear the terror of night.",
  "Psalm 63:1 — O God, you are my God; earnestly I seek you.",
  "Psalm 4:9 — In peace I will both lie down and sleep.",
  "Psalm 121:7 — The Lord will keep you from all harm.",
  "Psalm 16:8 — I keep my eyes always on the Lord.",
  "Psalm 145:18 — The Lord is near to all who call on Him.",
  "Psalm 119:148 — My eyes are awake before the watches of the night.",
  "Psalm 31:20 — You keep them in perfect peace."
];

// ------------------ Daily quotes (31) ------------------
const dailyQuotes = [
  "Trust in the Lord with all your heart. — Proverbs 3:5",
  "Be strong and courageous. — Joshua 1:9",
  "The Lord is my shepherd; I shall not want. — Psalm 23:1",
  "I can do all things through Christ. — Philippians 4:13",
  "Rejoice in the Lord always. — 1 Thessalonians 5:16",
  "Commit your work to the Lord. — Proverbs 16:3",
  "The Lord is near to the brokenhearted. — Psalm 34:18",
  "Cast all your anxiety on Him. — 1 Peter 5:7",
  "Be still and know that I am God. — Psalm 46:10",
  "The Lord will fight for you; you need only to be still. — Exodus 14:14",
  "Delight yourself in the Lord. — Psalm 37:4",
  "Do not be anxious about anything. — Philippians 4:6",
  "Blessed is the one who trusts in the Lord. — Psalm 34:8",
  "The Lord is my light and my salvation. — Psalm 27:1",
  "Taste and see that the Lord is good. — Psalm 34:8",
  "Let your light shine before others. — Matthew 5:16",
  "Be patient in tribulation. — Romans 12:12",
  "Love one another as I have loved you. — John 13:34",
  "The steadfast love of the Lord never ceases. — Lamentations 3:22",
  "God is our refuge and strength. — Psalm 46:1",
  "Seek first the kingdom of God. — Matthew 6:33",
  "Do not fear, for I am with you. — Isaiah 41:10",
  "Your word is a lamp to my feet. — Psalm 119:105",
  "The joy of the Lord is your strength. — Nehemiah 8:10",
  "The Lord bless you and keep you. — Numbers 6:24",
  "He will cover you with His feathers. — Psalm 91:4",
  "Pray without ceasing. — 1 Thessalonians 5:17",
  "Whatever you do, work heartily. — Colossians 3:23",
  "The Lord is faithful; He will strengthen you. — 1 Corinthians 1:9",
  "Give thanks in all circumstances. — 1 Thessalonians 5:18",
  "Trust in the Lord forever. — Isaiah 26:4"
];

// ------------------ Helper functions ------------------
function getRandomVerse(array) {
  return array[Math.floor(Math.random() * array.length)];
}
function getDailyQuote() {
  const d = new Date();
  return dailyQuotes[(d.getDate() - 1) % dailyQuotes.length];
}

// ------------------ Update greeting/verse/background ------------------
function updateGreeting() {
  const hour = new Date().getHours();
  let greeting = "Hello", icon = "", verseArray = versesDay, newBackground = "day";

  if (hour >= 5 && hour < 12) {
    greeting = "Good Morning"; icon = "🌅"; verseArray = versesMorning; newBackground = "morning";
  } else if (hour >= 12 && hour < 15) {
    greeting = "Good Day"; icon = "☀️"; verseArray = versesDay; newBackground = "day";
  } else if (hour >= 15 && hour < 18) {
    greeting = "Good Afternoon"; icon = "🌤️"; verseArray = versesAfternoon; newBackground = "afternoon";
  } else if (hour >= 18 && hour < 22) {
    greeting = "Good Evening"; icon = "🌇"; verseArray = versesEvening; newBackground = "evening";
  } else {
    greeting = "Good Night"; icon = "🌙"; verseArray = versesNight; newBackground = "night";
  }

  // apply background class
  if (currentBackground !== newBackground) {
    document.body.className = newBackground;
    currentBackground = newBackground;
  }

  const displayGreeting = userName ? `${greeting}, ${userName}!` : greeting;
  $("icon").innerText = icon;
  $("text").innerText = displayGreeting;
  $("verse").innerText = `${getRandomVerse(verseArray)}\n\nDaily Quote: ${getDailyQuote()}`;
}

// ------------------ Clock ------------------
function updateClock() {
  const now = new Date();
  $("clock").innerText = now.toLocaleTimeString();
}

// ------------------ Name input & reset ------------------
$("nameInput").addEventListener("input", (e) => {
  userName = e.target.value.trim();
  localStorage.setItem("userName", userName);
  updateGreeting();
});
$("resetButton").addEventListener("click", () => {
  localStorage.removeItem("userName");
  userName = "";
  $("nameInput").value = "";
  updateGreeting();
});

// ------------------ Weather (Geolocation + OpenWeatherMap) ------------------
async function fetchAndShowWeather() {
  const errEl = $("error");
  const curEl = $("weather-current");
  const forEl = $("weather-forecast");
  errEl.style.display = "none";
  curEl.textContent = "Loading weather…";
  forEl.textContent = "";

  // check API key
  if (!OWM_API_KEY || OWM_API_KEY === "YOUR_OPENWEATHERMAP_API_KEY") {
    curEl.textContent = "Weather disabled — add OpenWeatherMap API key in script.js";
    return;
  }

  // get geolocation
  if (!navigator.geolocation) {
    errEl.style.display = "block";
    errEl.textContent = "Geolocation not supported by your browser.";
    curEl.textContent = "Weather unavailable";
    return;
  }

  navigator.geolocation.getCurrentPosition(async (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;

    try {
      // OneCall API (current + daily). Units metric for Celsius.
      const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly,alerts&appid=${OWM_API_KEY}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Weather API error: ${res.status}`);

      const data = await res.json();
      // Current
      const cur = data.current;
      const curTemp = Math.round(cur.temp);
      const curDesc = cur.weather && cur.weather[0] ? cur.weather[0].description : "";
      const feels = Math.round(cur.feels_like);
      curEl.textContent = `Now: ${curTemp}°C — ${capitalize(curDesc)} (feels like ${feels}°C)`;

      // Tomorrow (daily[1])
      if (data.daily && data.daily.length > 1) {
        const t = data.daily[1];
        const tMin = Math.round(t.temp.min);
        const tMax = Math.round(t.temp.max);
        const tDesc = t.weather && t.weather[0] ? t.weather[0].description : "";
        forEl.textContent = `Tomorrow: ${tMin}–${tMax}°C — ${capitalize(tDesc)}.`;
      } else {
        forEl.textContent = "Tomorrow: forecast unavailable.";
      }
    } catch (err) {
      console.error(err);
      errEl.style.display = "block";
      errEl.textContent = "Could not load weather — check API key and network.";
      $("weather-current").textContent = "Weather unavailable";
      $("weather-forecast").textContent = "";
    }
  }, (geoErr) => {
    // geolocation denied or failed
    errEl.style.display = "block";
    errEl.textContent = "Location access denied. Allow location or add manual city support.";
    $("weather-current").textContent = "Weather unavailable";
    $("weather-forecast").textContent = "";
  }, { timeout: 10000 });
}

function capitalize(s){
  if(!s) return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// ------------------ End of script ------------------
