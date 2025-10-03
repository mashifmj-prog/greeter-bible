// -------------------- Greeter Bible App --------------------

const GreeterApp = {
  userName: "",
  currentBackground: "",

  // ----- Initialization -----
  init() {
    this.loadUserName();
    this.updateGreeting();
    this.updateClock();
    this.updateDayAndDate();

    setInterval(() => this.updateClock(), 1000);
    setInterval(() => this.updateGreeting(), 60000);
    setInterval(() => this.updateDayAndDate(), 60000); // refresh day/date every minute

    this.addListeners();
  },

  // ----- Load Username from Local Storage -----
  loadUserName() {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      this.userName = storedName;
      document.getElementById("nameInput").value = storedName;
    }
  },

  // ----- Add Event Listeners -----
  addListeners() {
    const nameInput = document.getElementById("nameInput");
    const resetBtn = document.getElementById("resetButton");

    nameInput.addEventListener("input", e => {
      this.userName = e.target.value.trim();
      localStorage.setItem("userName", this.userName);
      this.updateGreeting();
    });

    resetBtn.addEventListener("click", () => {
      localStorage.removeItem("userName");
      this.userName = "";
      nameInput.value = "";
      this.updateGreeting();
    });
  },

  // ----- Time-Based Verses & Quotes -----
  versesMorning: [
    "Psalm 5:3 - 'In the morning, Lord, you hear my voice.'",
    "Lamentations 3:22-23 - 'The Lord’s mercies are new every morning.'",
    "Psalm 59:16 - 'I will sing of your strength in the morning.'"
    // ... add up to 20
  ],

  versesDay: [
    "Psalm 118:24 - 'This is the day the Lord has made; rejoice and be glad.'",
    "Colossians 3:23 - 'Whatever you do, work heartily.'",
    "Proverbs 16:3 - 'Commit your work to the Lord.'"
    // ... add up to 20
  ],

  versesAfternoon: [
    "Isaiah 40:31 - 'Those who hope in the Lord will renew their strength.'",
    "Psalm 27:14 - 'Wait for the Lord; be strong.'"
    // ... add up to 20
  ],

  versesEvening: [
    "Psalm 141:2 - 'May my prayer be set before you like incense.'",
    "Psalm 119:148 - 'My eyes stay open through the watches of the night.'"
    // ... add up to 20
  ],

  versesNight: [
    "Psalm 4:8 - 'In peace I will lie down and sleep.'",
    "Psalm 127:2 - 'It is vain for you to rise up early.'"
    // ... add up to 20
  ],

  dailyQuotes: [
    "Trust in the Lord with all your heart. – Proverbs 3:5",
    "Do not be anxious about anything. – Philippians 4:6",
    "I can do all things through Christ. – Philippians 4:13",
    "The Lord is my shepherd; I shall not want. – Psalm 23:1",
    "Be strong and courageous. – Joshua 1:9"
  ],

  // ----- Helper Functions -----
  getRandomVerse(array) {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
  },

  getDailyQuote() {
    const today = new Date();
    return this.dailyQuotes[today.getDate() % this.dailyQuotes.length];
  },

  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  },

  // ----- Update Greeting & Verse -----
  updateGreeting() {
    const hour = new Date().getHours();
    let greeting, icon, verseArray, newBackground;

    if (hour >= 5 && hour < 12) {
      greeting = "Good Morning";
      icon = "🌅";
      verseArray = this.versesMorning;
      newBackground = "morning";
    } else if (hour >= 12 && hour < 15) {
      greeting = "Good Day";
      icon = "☀️";
      verseArray = this.versesDay;
      newBackground = "day";
    } else if (hour >= 15 && hour < 18) {
      greeting = "Good Afternoon";
      icon = "🌤️";
      verseArray = this.versesAfternoon;
      newBackground = "afternoon";
    } else if (hour >= 18 && hour < 22) {
      greeting = "Good Evening";
      icon = "🌇";
      verseArray = this.versesEvening;
      newBackground = "evening";
    } else {
      greeting = "Good Night";
      icon = "🌙";
      verseArray = this.versesNight;
      newBackground = "night";
    }

    if (this.currentBackground !== newBackground) {
      document.body.className = newBackground;
      this.currentBackground = newBackground;
    }

    const displayGreeting = this.userName ? `${greeting}, ${this.userName}!` : greeting;

    document.getElementById("icon").innerText = icon;
    document.getElementById("text").innerText = displayGreeting;
    document.getElementById("verse").innerText = `${this.getRandomVerse(verseArray)}\n\nDaily Quote: ${this.getDailyQuote()}`;
  },

  // ----- Clock -----
  updateClock() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2,'0');
    const m = String(now.getMinutes()).padStart(2,'0');
    const s = String(now.getSeconds()).padStart(2,'0');
    document.getElementById("clock").innerText = `${h}:${m}:${s}`;
  },

  // ----- Day of Week & Calendar Date -----
  updateDayAndDate() {
    const dayEl = document.getElementById("weather");
    const dateEl = document.getElementById("forecast");

    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    dayEl.innerText = `Today is ${now.toLocaleDateString(undefined, { weekday: 'long' })}`;
    dateEl.innerText = `Date: ${now.toLocaleDateString(undefined, options)}`;
  }
};

// -------------------- Initialize App --------------------
GreeterApp.init();
