// -------------------- Greeter Bible App --------------------

const GreeterApp = {
  userName: "",
  currentBackground: "",
  API_KEY: "YOUR_API_KEY_HERE", // replace safely in production

  // ----- Initialization -----
  init() {
    this.loadUserName();
    this.updateGreeting();
    this.updateClock();
    this.fetchWeather();

    setInterval(() => this.updateClock(), 1000);
    setInterval(() => this.updateGreeting(), 60000);

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
      verseArray = this.versesD
