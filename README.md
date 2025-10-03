📖 Greeter-Bible

A lightweight Christian devotional web app that greets you by name, shows time-based Bible verses, a daily inspirational quote, a live clock, and real-time weather with tomorrow’s forecast.

🌅 Start your morning with scripture, 🌞 stay inspired throughout the day, 🌇 wind down in the evening with peace, and 🌙 rest at night with God’s Word.

✨ Features

👋 Personalized Greeting – Enter your name once, and the app remembers you.

📖 Bible Verses – 20 curated verses for each time-of-day (morning, day, afternoon, evening, night).

🌟 Daily Quote – Rotates daily with inspirational verses and messages.

🕒 Live Clock – Always up-to-date digital clock.

🌤️ Weather Integration – Real-time local weather and tomorrow’s forecast (via OpenWeatherMap API).

🎨 Dynamic Backgrounds – Changes with time-of-day.

📱 Mobile Friendly – Fully responsive for phones, tablets, and desktops.

📂 File Structure
greeter-bible/
│── index.html        # Main HTML structure
│── style.css         # Styling and themes
│── script.js         # Greeting, verses, quotes, weather logic
│── README.md         # Documentation

🔧 Installation & Setup

Clone Repository

git clone https://github.com/your-username/greeter-bible.git
cd greeter-bible


Get OpenWeatherMap API Key

Sign up at OpenWeatherMap
.

Copy your free API key.

Add API Key
Inside script.js, replace YOUR_API_KEY_HERE with your actual OpenWeatherMap API key.

const API_KEY = "YOUR_API_KEY_HERE";


Run Locally
Simply open index.html in your browser.

Deploy to GitHub Pages

Go to Settings > Pages in your repo.

Select branch main and / (root) folder.

Save → Your app will be live at:

https://your-username.github.io/greeter-bible/

🌍 Example Screenshot

(you can add a screenshot once deployed)

🙏 Future Improvements

📅 Add “Verse of the Day” API option

🎵 Background Christian music toggle

📖 Devotional plan integration

🕌 Related Project

This app is part of a series:

Greeter-Bible – Christian Bible version (this repo)

Greeter-Quran – Islamic Quran version (coming soon)

📜 License

MIT License. Free to use, modify, and share.