// -------------------- Greeting App --------------------
let userName = "";
if (localStorage.getItem("userName")) {
  userName = localStorage.getItem("userName");
  document.getElementById("nameInput").value = userName;
}

let currentBackground = "";

// Bible Verses per Time-of-Day (sample, can extend to 20 each)
const versesMorning = [
  "Psalm 5:3 - 'In the morning, Lord, you hear my voice.'",
  "Lamentations 3:22-23 - 'The Lord’s mercies are new every morning.'"
];
const versesDay = [
  "Psalm 118:24 - 'This is the day the Lord has made; rejoice and be glad.'",
  "Colossians 3:23 - 'Whatever you do, work heartily.'"
];
const versesAfternoon = [
  "Isaiah 40:31 - 'Those who hope in the Lord will renew their strength.'",
  "Psalm 27:14 - 'Wait for the Lord; be strong.'"
];
const versesEvening = [
  "Psalm 4:8 - 'In peace I will lie down and sleep.'",
  "Psalm 141:2 - 'May my prayer be set before you like incense.'"
];
const versesNight = [
  "Psalm 91:1 - 'Whoever dwells in the shelter of the Most High.'",
  "Proverbs 3:24 - 'When you lie down, you will not be afraid.'"
];

// Quotes
const quotes = [
  "Faith is taking the first step even when you don't see the whole staircase. – Martin Luther King Jr.",
  "The will of God will never take you where the grace of God cannot protect you."
];

// Pick random
function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Update greeting + verse + background
function updateGreeting() {
  const hour = new Date().getHours();
  let greeting = "";
  let icon = "";
  let verseList = [];

  if (hour >= 5 && hour < 12) {
    greeting = "Good Morning";
    icon = "🌅";
    verseList = versesMorning;
    setBackground("morning");
  } else if (hour >= 12 && hour < 15) {
    greeting = "Good Day";
    icon = "☀️";
    verseList = versesDay;
    setBackground("day");
  } else if (hour >= 15 && hour < 18) {
    greeting = "Good Afternoon";
    icon = "🌤️";
    verseList = versesAfternoon;
    setBackground("afternoon");
  } else if (hour >= 18 && hour < 21) {
    greeting = "Good Evening";
    icon = "🌆";
    verseList = versesEvening;
    setBackground("evening");
  } else {
    greeting = "Good Night";
    icon = "🌙";
    verseList = versesNight;
    setBackground("night");
  }

  document.getElementById("icon").innerText = icon;
  document.getElementById("text").innerText =
    `${greeting}${userName ? ", " + userName : ""}`;
  document.getElementById("verse").innerText = randomItem(verseList);
  document.getElementById("quote").innerText = randomItem(quotes);
}

// Set background
function setBackground(className) {
  if (currentBackground !== className) {
    document.body.className = className;
    currentBackground = className;
  }
}

// Clock
function updateClock() {
  const now = new Date();
  document.getElementById("clock").innerText =
    now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
}
setInterval(updateClock, 1000);

// Name input
document.getElementById("nameInput").addEventListener("change", e => {
  userName = e.target.value;
  localStorage.setItem("userName", userName);
  updateGreeting();
});

document.getElementById("resetButton").addEventListener("click", () => {
  localStorage.removeItem("userName");
  userName = "";
  document.getElementById("nameInput").value = "";
  updateGreeting();
});

// -------------------- Weather --------------------
const API_KEY = "YOUR_API_KEY_HERE";

function fetchWeather(lat, lon) {
  const urlNow = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  // Current weather
  fetch(urlNow)
    .then(res => res.json())
    .then(data => {
      const temp = Math.round(data.main.temp);
      const desc = data.weather[0].description;
      document.getElementById("weatherNow").innerText =
        `🌤️ Current: ${temp}°C, ${desc}`;
    })
    .catch(() => {
      document.getElementById("weatherNow").innerText = "Weather unavailable.";
    });

  // Forecast for tomorrow
  fetch(urlForecast)
    .then(res => res.json())
    .then(data => {
      const forecast = data.list[8]; // 24h later
      const temp = Math.round(forecast.main.temp);
      const desc = forecast.weather[0].description;
      document.getElementById("weatherForecast").innerText =
        `🌦️ Tomorrow: ${temp}°C, ${desc}`;
    })
    .catch(() => {
      document.getElementById("weatherForecast").innerText = "Forecast unavailable.";
    });
}

// Geolocation
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    pos => {
      const { latitude, longitude } = pos.coords;
      fetchWeather(latitude, longitude);
    },
    () => {
      document.getElementById("weatherNow").innerText = "Location access denied.";
    }
  );
} else {
  document.getElementById("weatherNow").innerText = "Geolocation not supported.";
}

// -------------------- Init --------------------
updateGreeting();
updateClock();
