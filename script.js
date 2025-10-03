// -------------------- Greeting App --------------------

// ----- User Name -----
let userName = "";
if (localStorage.getItem("userName")) {
  userName = localStorage.getItem("userName");
  document.getElementById("nameInput").value = userName;
}

// ----- Track Background -----
let currentBackground = "";

// ----- Bible Verses & Quotes -----
const versesMorning = [
  "Psalm 5:3 - 'In the morning, Lord, you hear my voice.'",
  "Lamentations 3:22-23 - 'The Lord’s mercies are new every morning.'",
  "Psalm 59:16 - 'I will sing of your strength in the morning.'",
  // ... add remaining verses up to 20
];

const versesDay = [
  "Psalm 118:24 - 'This is the day the Lord has made; rejoice and be glad.'",
  "Colossians 3:23 - 'Whatever you do, work heartily.'",
  "Proverbs 16:3 - 'Commit your work to the Lord.'",
  // ... add remaining verses up to 20
];

const versesAfternoon = [
  "Isaiah 40:31 - 'Those who hope in the Lord will renew their strength.'",
  "Psalm 27:14 - 'Wait for the Lord; be strong.'",
  // ... add remaining verses up to 20
];

const versesEvening = [
  "Psalm 141:2 - 'May my prayer be set before you like incense.'",
  "Psalm 119:148 - 'My eyes stay open through the watches of the night.'",
  // ... add remaining verses up to 20
];

const versesNight = [
  "Psalm 4:8 - 'In peace I will lie down and sleep.'",
  "Psalm 127:2 - 'It is vain for you to rise up early.'",
  // ... add remaining verses up to 20
];

const dailyQuotes = [
  "Trust in the Lord with all your heart. – Proverbs 3:5",
  "Do not be anxious about anything. – Philippians 4:6",
  "I can do all things through Christ. – Philippians 4:13",
  "The Lord is my shepherd; I shall not want. – Psalm 23:1",
  "Be strong and courageous. – Joshua 1:9"
];

// ----- Helper Functions -----
function getRandomVerse(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

function getDailyQuote() {
  const today = new Date();
  return dailyQuotes[today.getDate() % dailyQuotes.length];
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

  document.getElementById("icon").innerText = icon;
  document.getElementById("text").innerText = displayGreeting;
  document.getElementById("verse").innerText = `${getRandomVerse(verseArray)}\n\nDaily Quote: ${getDailyQuote()}`;
}

// ----- Clock -----
function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2,'0');
  const m = String(now.getMinutes()).padStart(2,'0');
  const s = String(now.getSeconds()).padStart(2,'0');
  document.getElementById("clock").innerText = `${h}:${m}:${s}`;
}

// ----- Name Input Listeners -----
document.getElementById("nameInput").addEventListener("input", e => {
  userName = e.target.value.trim();
  localStorage.setItem("userName", userName);
  updateGreeting();
});

document.getElementById("resetButton").addEventListener("click", () => {
  localStorage.removeItem("userName");
  userName = "";
  document.getElementById("nameInput").value = "";
  updateGreeting();
});

// -------------------- Weather Integration --------------------

// Replace '6eb470c882b961c9d1fd4de794611c18' with your OpenWeatherMap API key
const API_KEY = "YOUR_API_KEY_HERE";

// Fetch weather for current location
function fetchWeather() {
  if (!navigator.geolocation) {
    document.getElementById("weather").innerText = "Geolocation is not supported.";
    return;
  }

  navigator.geolocation.getCurrentPosition(async position => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    try {
      const currentResp = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);
      const currentData = await currentResp.json();

      const forecastResp = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&cnt=2&appid=${API_KEY}`);
      const forecastData = await forecastResp.json();

      const temp = Math.round(currentData.main.temp);
      const description = currentData.weather[0].description;

      document.getElementById("weather").innerText = `Current: ${temp}°C, ${description}`;
      if(forecastData.list && forecastData.list[1]) {
        const nextTemp = Math.round(forecastData.list[1].main.temp);
        const nextDesc = forecastData.list[1].weather[0].description;
        document.getElementById("forecast").innerText = `Next forecast: ${nextTemp}°C, ${nextDesc}`;
      }

    } catch (error) {
      document.getElementById("weather").innerText = "Error fetching weather.";
      console.error(error);
    }
  }, () => {
    document.getElementById("weather").innerText = "Permission denied for location.";
  });
}

// ----- Initialize -----
updateGreeting();
updateClock();
fetchWeather();

setInterval(updateClock, 1000);
setInterval(updateGreeting, 60000);
