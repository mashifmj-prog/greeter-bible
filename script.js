// -------------------- Greeting App --------------------

// Store user name
let userName = "";
try {
  if (localStorage.getItem("userName")) {
    userName = localStorage.getItem("userName");
    const nameInput = document.getElementById("nameInput");
    if (nameInput) nameInput.value = userName;
  }
} catch (e) {
  console.error("Error accessing localStorage:", e);
}

// Track current background class
let currentBackground = "";

// Enhanced Bible verses with categories
const versesMorning = [
  {text: "Lamentations 3:22-23 - 'The Lord's mercies are new every morning.'", category: "hope"},
  {text: "Psalm 5:3 - 'In the morning, Lord, you hear my voice.'", category: "faith"},
  {text: "Psalm 59:16 - 'I will sing of your strength in the morning.'", category: "strength"},
  {text: "Psalm 30:5 - 'Weeping may last for the night, but joy comes in the morning.'", category: "joy"},
  {text: "Psalm 143:8 - 'Let the morning bring me word of your unfailing love.'", category: "love"},
  {text: "Psalm 90:14 - 'Satisfy us in the morning with your unfailing love.'", category: "love"},
  {text: "Psalm 119:147 - 'I rise before dawn and cry for help.'", category: "faith"},
  {text: "Psalm 92:2 - 'Your deeds are great; I will declare your works.'", category: "joy"},
  {text: "Psalm 63:1 - 'O God, you are my God; earnestly I seek you.'", category: "faith"},
  {text: "Psalm 88:13 - 'But I call to you, Lord, every day.'", category: "faith"}
];

const versesDay = [
  {text: "Psalm 118:24 - 'This is the day the Lord has made; rejoice and be glad.'", category: "joy"},
  {text: "Colossians 3:23 - 'Work heartily, as for the Lord.'", category: "strength"},
  {text: "Proverbs 16:3 - 'Commit your work to the Lord, and your plans will succeed.'", category: "guidance"},
  {text: "Ecclesiastes 9:10 - 'Whatever your hand finds to do, do it with all your might.'", category: "strength"},
  {text: "Psalm 37:5 - 'Commit your way to the Lord.'", category: "faith"},
  {text: "Isaiah 41:10 - 'Fear not, for I am with you.'", category: "strength"},
  {text: "Philippians 4:13 - 'I can do all things through Christ.'", category: "strength"},
  {text: "Joshua 1:9 - 'Be strong and courageous.'", category: "strength"},
  {text: "Psalm 34:8 - 'Taste and see that the Lord is good.'", category: "joy"},
  {text: "Proverbs 3:6 - 'In all your ways acknowledge Him.'", category: "guidance"}
];

const versesAfternoon = [
  {text: "Isaiah 40:31 - 'Those who hope in the Lord will renew their strength.'", category: "hope"},
  {text: "Psalm 27:14 - 'Wait for the Lord; be strong.'", category: "strength"},
  {text: "Philippians 4:6 - 'Do not be anxious about anything.'", category: "anxiety"},
  {text: "Psalm 46:10 - 'Be still and know that I am God.'", category: "peace"},
  {text: "Psalm 119:105 - 'Your word is a lamp to my feet.'", category: "guidance"},
  {text: "Psalm 34:18 - 'The Lord is near to the brokenhearted.'", category: "comfort"},
  {text: "Psalm 55:22 - 'Cast your burden on the Lord.'", category: "anxiety"},
  {text: "Matthew 11:28 - 'Come to me, all you who are weary.'", category: "peace"},
  {text: "Psalm 9:10 - 'Those who know your name trust in you.'", category: "faith"},
  {text: "Psalm 31:24 - 'Be strong and take heart, all you who hope in the Lord.'", category: "hope"}
];

const versesEvening = [
  {text: "Psalm 141:2 - 'May my prayer be set before you like incense.'", category: "faith"},
  {text: "Psalm 119:148 - 'My eyes stay open through the watches of the night.'", category: "faith"},
  {text: "Psalm 4:8 - 'In peace I will lie down and sleep.'", category: "peace"},
  {text: "Psalm 63:6 - 'On my bed I remember you.'", category: "faith"},
  {text: "Psalm 16:7 - 'I will praise the Lord, who counsels me.'", category: "joy"},
  {text: "Psalm 121:3 - 'He will not let your foot slip.'", category: "peace"},
  {text: "Psalm 91:1-2 - 'Whoever dwells in the shelter of the Most High.'", category: "peace"},
  {text: "Psalm 27:1 - 'The Lord is my light and my salvation.'", category: "strength"},
  {text: "Psalm 145:18 - 'The Lord is near to all who call on Him.'", category: "faith"},
  {text: "Psalm 34:4 - 'I sought the Lord, and He answered me.'", category: "faith"}
];

const versesNight = [
  {text: "Psalm 4:8 - 'In peace I will lie down and sleep.'", category: "peace"},
  {text: "Psalm 127:2 - 'It is vain for you to rise up early.'", category: "peace"},
  {text: "Proverbs 3:24 - 'When you lie down, you will not be afraid.'", category: "peace"},
  {text: "Psalm 91:1 - 'He who dwells in the shelter of the Most High.'", category: "peace"},
  {text: "Psalm 63:6 - 'On my bed I remember you.'", category: "faith"},
  {text: "Psalm 16:8 - 'I keep my eyes always on the Lord.'", category: "faith"},
  {text: "Psalm 121:7 - 'The Lord will keep you from all harm.'", category: "peace"},
  {text: "Psalm 91:5 - 'You will not fear the terror of night.'", category: "peace"},
  {text: "Psalm 119:148 - 'My eyes are awake before the watches of the night.'", category: "faith"},
  {text: "Psalm 31:20 - 'You keep them in perfect peace whose minds are stayed on you.'", category: "peace"}
];

// Additional categorized verses
const additionalVerses = [
  {text: "Jeremiah 29:11 - 'For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.'", category: "hope"},
  {text: "Romans 15:13 - 'May the God of hope fill you with all joy and peace in believing, so that by the power of the Holy Spirit you may abound in hope.'", category: "hope"},
  {text: "Psalm 34:17 - 'When the righteous cry for help, the Lord hears and delivers them out of all their troubles.'", category: "hope"},
  {text: "John 14:27 - 'Peace I leave with you; my peace I give to you. Not as the world gives do I give to you. Let not your hearts be troubled, neither let them be afraid.'", category: "peace"},
  {text: "Philippians 4:7 - 'And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus.'", category: "peace"},
  {text: "Isaiah 26:3 - 'You keep him in perfect peace whose mind is stayed on you, because he trusts in you.'", category: "peace"},
  {text: "Deuteronomy 31:6 - 'Be strong and courageous. Do not fear or be in dread of them, for it is the Lord your God who goes with you. He will not leave you or forsake you.'", category: "strength"},
  {text: "Isaiah 41:10 - 'Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand.'", category: "strength"},
  {text: "Psalm 28:7 - 'The Lord is my strength and my shield; in him my heart trusts, and I am helped; my heart exults, and with my song I give thanks to him.'", category: "strength"},
  {text: "1 Peter 5:7 - 'Casting all your anxieties on him, because he cares for you.'", category: "anxiety"},
  {text: "Matthew 6:34 - 'Therefore do not be anxious about tomorrow, for tomorrow will be anxious for itself. Sufficient for the day is its own trouble.'", category: "anxiety"},
  {text: "Psalm 94:19 - 'When the cares of my heart are many, your consolations cheer my soul.'", category: "anxiety"},
  {text: "Psalm 16:11 - 'You make known to me the path of life; in your presence there is fullness of joy; at your right hand are pleasures forevermore.'", category: "joy"},
  {text: "Nehemiah 8:10 - 'The joy of the Lord is your strength.'", category: "joy"},
  {text: "Romans 12:12 - 'Rejoice in hope, be patient in tribulation, be constant in prayer.'", category: "joy"},
  {text: "1 John 4:19 - 'We love because he first loved us.'", category: "love"},
  {text: "John 3:16 - 'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.'", category: "love"},
  {text: "1 Corinthians 13:4 - 'Love is patient and kind; love does not envy or boast; it is not arrogant.'", category: "love"},
  {text: "Proverbs 3:5-6 - 'Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.'", category: "faith"},
  {text: "Hebrews 11:1 - 'Now faith is the assurance of things hoped for, the conviction of things not seen.'", category: "faith"},
  {text: "James 1:5 - 'If any of you lacks wisdom, let him ask God, who gives generously to all without reproach, and it will be given him.'", category: "guidance"}
];

// -------------------- Daily Quotes --------------------
const dailyQuotes = [
  "Trust in the Lord with all your heart. – Proverbs 3:5",
  "Do not be anxious about anything. – Philippians 4:6",
  "I can do all things through Christ. – Philippians 4:13",
  "The Lord is my shepherd; I shall not want. – Psalm 23:1",
  "Be strong and courageous. – Joshua 1:9",
  "Commit your work to the Lord, and your plans will succeed. – Proverbs 16:3",
  "The Lord is my light and my salvation—whom shall I fear? – Psalm 27:1",
  "For I know the plans I have for you. – Jeremiah 29:11",
  "Cast your anxiety on Him because He cares for you. – 1 Peter 5:7",
  "The steadfast love of the Lord never ceases. – Lamentations 3:22",
  "Delight yourself in the Lord, and He will give you the desires of your heart. – Psalm 37:4",
  "Be still, and know that I am God. – Psalm 46:10",
  "The Lord is near to all who call on Him. – Psalm 145:18",
  "God is our refuge and strength, an ever-present help in trouble. – Psalm 46:1",
  "Let all that you do be done in love. – 1 Corinthians 16:14",
  "The joy of the Lord is your strength. – Nehemiah 8:10",
  "Rejoice always, pray without ceasing. – 1 Thessalonians 5:16-17",
  "He gives power to the faint, and to him who has no might He increases strength. – Isaiah 40:29",
  "Cast your burden on the Lord, and He will sustain you. – Psalm 55:22",
  "Let your light shine before others. – Matthew 5:16",
  "I will instruct you and teach you in the way you should go. – Psalm 32:8",
  "The Lord is good to all. – Psalm 145:9",
  "Your word is a lamp to my feet and a light to my path. – Psalm 119:105",
  "Fear not, for I am with you. – Isaiah 41:10",
  "In everything give thanks. – 1 Thessalonians 5:18",
  "Do not be overcome by evil, but overcome evil with good. – Romans 12:21",
  "Love your neighbor as yourself. – Matthew 22:39",
  "The Lord is righteous in all His ways. – Psalm 145:17",
  "Wait for the Lord; be strong, and let your heart take courage. – Psalm 27:14",
  "Peace I leave with you; my peace I give to you. – John 14:27",
  "God is faithful; He will not let you be tested beyond your strength. – 1 Corinthians 10:13"
];

// -------------------- App State --------------------
let currentVerse = "";
let currentQuote = "";
let currentVerseObj = null;
let favorites = [];
let readingHistory = [];
let currentCategory = "all";

// Journal Data
let prayerEntries = [];
let gratitudeEntries = [];
let prayerRequests = [];

// -------------------- Initialize Data --------------------
function initializeData() {
  try {
    // Load user data
    const savedFavorites = localStorage.getItem("bibleAppFavorites");
    if (savedFavorites) favorites = JSON.parse(savedFavorites);

    const savedHistory = localStorage.getItem("bibleAppHistory");
    if (savedHistory) readingHistory = JSON.parse(savedHistory);

    // Load journal data
    const savedPrayers = localStorage.getItem("bibleAppPrayers");
    if (savedPrayers) prayerEntries = JSON.parse(savedPrayers);

    const savedGratitude = localStorage.getItem("bibleAppGratitude");
    if (savedGratitude) gratitudeEntries = JSON.parse(savedGratitude);

    const savedRequests = localStorage.getItem("bibleAppRequests");
    if (savedRequests) prayerRequests = JSON.parse(savedRequests);

    updateFavoritesDisplay();
    updateJournalDisplays();
  } catch (e) {
    console.error("Error initializing data:", e);
  }
}

// -------------------- Helper Functions --------------------
function getRandomVerse(array) {
  try {
    let filteredArray = array;
    
    // Filter by category if not "all"
    if (currentCategory !== "all") {
      filteredArray = array.filter(verse => verse.category === currentCategory);
    }
    
    // If filtered array is empty, fall back to all verses
    if (filteredArray.length === 0) {
      filteredArray = array;
    }
    
    const index = Math.floor(Math.random() * filteredArray.length);
    return filteredArray[index];
  } catch (e) {
    console.error("Error selecting random verse:", e);
    return {text: "Error loading verse.", category: "faith"};
  }
}

function getDailyQuote() {
  try {
    const today = new Date();
    const index = (today.getDate() - 1) % dailyQuotes.length;
    return dailyQuotes[index];
  } catch (e) {
    console.error("Error selecting daily quote:", e);
    return "Error loading quote.";
  }
}

function getAllVerses() {
  return [...versesMorning, ...versesDay, ...versesAfternoon, ...versesEvening, ...versesNight, ...additionalVerses];
}

// -------------------- Favorites Management --------------------
function toggleFavorite() {
  try {
    if (!currentVerseObj) return;

    const favoriteIndex = favorites.findIndex(fav => fav.text === currentVerseObj.text);
    
    if (favoriteIndex > -1) {
      // Remove from favorites
      favorites.splice(favoriteIndex, 1);
    } else {
      // Add to favorites
      favorites.push({
        text: currentVerseObj.text,
        category: currentVerseObj.category,
        timestamp: new Date().toISOString()
      });
    }

    // Save to localStorage
    localStorage.setItem("bibleAppFavorites", JSON.stringify(favorites));
    
    updateFavoritesDisplay();
    updateFavoriteButton();
    showSuccessMessage(favoriteIndex > -1 ? "Removed from favorites" : "Added to favorites! ❤️");
  } catch (e) {
    console.error("Error toggling favorite:", e);
  }
}

function updateFavoriteButton() {
  try {
    const favoriteBtn = document.getElementById("favoriteButton");
    if (!favoriteBtn || !currentVerseObj) return;

    const isFavorite = favorites.some(fav => fav.text === currentVerseObj.text);
    favoriteBtn.classList.toggle("active", isFavorite);
  } catch (e) {
    console.error("Error updating favorite button:", e);
  }
}

function updateFavoritesDisplay() {
  try {
    const favoritesSection = document.querySelector(".favorites-section");
    const favoritesList = document.getElementById("favoritesList");

    if (!favoritesSection || !favoritesList) return;

    if (favorites.length > 0) {
      favoritesList.innerHTML = favorites.map((favorite, index) => `
        <div class="favorite-item">
          <div class="favorite-text">${favorite.text}</div>
          <div class="entry-actions">
            <button class="entry-action" onclick="shareFavorite(${index})" title="Share">📤</button>
            <button class="entry-action" onclick="removeFavorite(${index})" title="Remove">🗑️</button>
          </div>
        </div>
      `).join('');
    } else {
      favoritesList.innerHTML = '<div class="empty-state">No favorite verses yet. Click the heart button to save verses!</div>';
    }
  } catch (e) {
    console.error("Error updating favorites display:", e);
  }
}

function removeFavorite(index) {
  try {
    favorites.splice(index, 1);
    localStorage.setItem("bibleAppFavorites", JSON.stringify(favorites));
    updateFavoritesDisplay();
    updateFavoriteButton();
    showSuccessMessage("Removed from favorites");
  } catch (e) {
    console.error("Error removing favorite:", e);
  }
}

function clearAllFavorites() {
  try {
    if (confirm("Are you sure you want to clear all favorites?")) {
      favorites = [];
      localStorage.setItem("bibleAppFavorites", JSON.stringify(favorites));
      updateFavoritesDisplay();
      updateFavoriteButton();
      showSuccessMessage("All favorites cleared");
    }
  } catch (e) {
    console.error("Error clearing favorites:", e);
  }
}

function shareFavorite(index) {
  try {
    const favorite = favorites[index];
    currentVerse = favorite.text;
    openShareModal();
  } catch (e) {
    console.error("Error sharing favorite:", e);
  }
}

// -------------------- Update Greeting --------------------
function updateGreeting() {
  try {
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

    if (iconElement) iconElement.innerText = icon;
    if (textElement) textElement.innerText = displayGreeting;

    currentVerseObj = getRandomVerse(verseArray);
    currentQuote = getDailyQuote();

    updateVerseDisplay();
    updateFavoriteButton();
    addToReadingHistory(currentVerseObj);
    
  } catch (e) {
    console.error("Error updating greeting:", e);
  }
}

function updateVerseDisplay() {
  try {
    const verseElement = document.getElementById("verse");
    if (verseElement && currentVerseObj) {
      currentVerse = currentVerseObj.text;
      verseElement.innerHTML = `
        <div class="verse-with-actions">
          <div class="verse-main-text">${currentVerse}</div>
          <div class="verse-stats">
            <span class="verse-stat">${currentVerseObj.category.charAt(0).toUpperCase() + currentVerseObj.category.slice(1)}</span>
            <span class="verse-stat">Favorites: ${favorites.length}</span>
          </div>
        </div>
        <div class="daily-quote-section">
          <strong>Daily Quote:</strong> ${currentQuote}
        </div>
      `;
    }
  } catch (e) {
    console.error("Error updating verse display:", e);
  }
}

function addToReadingHistory(verse) {
  try {
    const historyItem = {
      text: verse.text,
      category: verse.category,
      timestamp: new Date().toISOString()
    };
    
    readingHistory.unshift(historyItem);
    
    // Keep only last 50 items
    if (readingHistory.length > 50) {
      readingHistory = readingHistory.slice(0, 50);
    }
    
    localStorage.setItem("bibleAppHistory", JSON.stringify(readingHistory));
  } catch (e) {
    console.error("Error adding to reading history:", e);
  }
}

function nextVerse() {
  try {
    const hour = new Date().getHours();
    let verseArray;

    if (hour >= 5 && hour < 12) verseArray = versesMorning;
    else if (hour >= 12 && hour < 15) verseArray = versesDay;
    else if (hour >= 15 && hour < 18) verseArray = versesAfternoon;
    else if (hour >= 18 && hour < 22) verseArray = versesEvening;
    else verseArray = versesNight;

    currentVerseObj = getRandomVerse(verseArray);
    updateVerseDisplay();
    updateFavoriteButton();
    addToReadingHistory(currentVerseObj);
    showSuccessMessage("New verse loaded! ✨");
  } catch (e) {
    console.error("Error getting next verse:", e);
  }
}

function filterByCategory() {
  try {
    const categorySelect = document.getElementById("verseCategory");
    if (categorySelect) {
      currentCategory = categorySelect.value;
      updateGreeting();
      showSuccessMessage(`Showing ${currentCategory === 'all' ? 'all categories' : currentCategory} verses`);
    }
  } catch (e) {
    console.error("Error filtering by category:", e);
  }
}

// -------------------- Journal Functions --------------------
function savePrayerEntry() {
  try {
    const prayerText = document.getElementById("prayerEntry").value.trim();
    if (!prayerText) {
      showSuccessMessage("Please write a prayer first");
      return;
    }

    const entry = {
      text: prayerText,
      date: new Date().toISOString(),
      verse: currentVerse
    };

    prayerEntries.unshift(entry);
    localStorage.setItem("bibleAppPrayers", JSON.stringify(prayerEntries));
    
    document.getElementById("prayerEntry").value = "";
    updatePrayerDisplay();
    
    showSuccessMessage("Prayer saved successfully! 🙏");
  } catch (e) {
    console.error("Error saving prayer:", e);
  }
}

function saveGratitudeEntry() {
  try {
    const gratitudeText = document.getElementById("gratitudeEntry").value.trim();
    if (!gratitudeText) {
      showSuccessMessage("Please write what you're thankful for");
      return;
    }

    const entry = {
      text: gratitudeText,
      date: new Date().toISOString()
    };

    gratitudeEntries.unshift(entry);
    localStorage.setItem("bibleAppGratitude", JSON.stringify(gratitudeEntries));
    
    document.getElementById("gratitudeEntry").value = "";
    updateGratitudeDisplay();
    
    showSuccessMessage("Gratitude saved successfully! 😊");
  } catch (e) {
    console.error("Error saving gratitude:", e);
  }
}

function addPrayerRequest() {
  try {
    const requestText = document.getElementById("prayerRequest").value.trim();
    if (!requestText) {
      showSuccessMessage("Please enter a prayer request");
      return;
    }

    const request = {
      text: requestText,
      date: new Date().toISOString(),
      status: "praying"
    };

    prayerRequests.unshift(request);
    localStorage.setItem("bibleAppRequests", JSON.stringify(prayerRequests));
    
    document.getElementById("prayerRequest").value = "";
    updatePrayerRequestsDisplay();
    
    showSuccessMessage("Prayer request added! 📝");
  } catch (e) {
    console.error("Error adding prayer request:", e);
  }
}

function updateJournalDisplays() {
  updatePrayerDisplay();
  updateGratitudeDisplay();
  updatePrayerRequestsDisplay();
}

function updatePrayerDisplay() {
  const container = document.getElementById("prayerHistory");
  if (!container) return;

  if (prayerEntries.length === 0) {
    container.innerHTML = '<div class="empty-state">No prayers yet. Write your first prayer above!</div>';
    return;
  }

  container.innerHTML = prayerEntries.map((entry, index) => `
    <div class="journal-entry prayer">
      <div class="entry-header">
        <span class="entry-date">${formatDate(entry.date)}</span>
        <div class="entry-actions">
          <button class="entry-action" onclick="deletePrayerEntry(${index})" title="Delete">🗑️</button>
        </div>
      </div>
      <div class="entry-content">${entry.text}</div>
      ${entry.verse ? `<div class="entry-verse"><em>Inspired by: ${entry.verse}</em></div>` : ''}
    </div>
  `).join('');
}

function updateGratitudeDisplay() {
  const container = document.getElementById("gratitudeHistory");
  if (!container) return;

  if (gratitudeEntries.length === 0) {
    container.innerHTML = '<div class="empty-state">No gratitude entries yet. What are you thankful for today?</div>';
    return;
  }

  container.innerHTML = gratitudeEntries.map((entry, index) => `
    <div class="journal-entry gratitude">
      <div class="entry-header">
        <span class="entry-date">${formatDate(entry.date)}</span>
        <div class="entry-actions">
          <button class="entry-action" onclick="deleteGratitudeEntry(${index})" title="Delete">🗑️</button>
        </div>
      </div>
      <div class="entry-content">${entry.text}</div>
    </div>
  `).join('');
}

function updatePrayerRequestsDisplay() {
  const container = document.getElementById("requestsList");
  if (!container) return;

  if (prayerRequests.length === 0) {
    container.innerHTML = '<div class="empty-state">No prayer requests yet. Add your first request above!</div>';
    return;
  }

  container.innerHTML = prayerRequests.map((request, index) => `
    <div class="prayer-request">
      <div class="request-header">
        <span class="entry-date">${formatDate(request.date)}</span>
        <span class="request-status status-${request.status}">
          ${request.status === 'praying' ? '🙏 Praying' : '✅ Answered'}
        </span>
      </div>
      <div class="request-content">${request.text}</div>
      <div class="request-actions">
        <button class="request-btn answered" onclick="markRequestAnswered(${index})">
          ${request.status === 'praying' ? 'Mark Answered' : 'Answered 🙏'}
        </button>
        <button class="request-btn delete" onclick="deletePrayerRequest(${index})">Delete</button>
      </div>
    </div>
  `).join('');
}

function deletePrayerEntry(index) {
  if (confirm("Delete this prayer entry?")) {
    prayerEntries.splice(index, 1);
    localStorage.setItem("bibleAppPrayers", JSON.stringify(prayerEntries));
    updatePrayerDisplay();
    showSuccessMessage("Prayer deleted");
  }
}

function deleteGratitudeEntry(index) {
  if (confirm("Delete this gratitude entry?")) {
    gratitudeEntries.splice(index, 1);
    localStorage.setItem("bibleAppGratitude", JSON.stringify(gratitudeEntries));
    updateGratitudeDisplay();
    showSuccessMessage("Gratitude entry deleted");
  }
}

function deletePrayerRequest(index) {
  if (confirm("Delete this prayer request?")) {
    prayerRequests.splice(index, 1);
    localStorage.setItem("bibleAppRequests", JSON.stringify(prayerRequests));
    updatePrayerRequestsDisplay();
    showSuccessMessage("Prayer request deleted");
  }
}

function markRequestAnswered(index) {
  prayerRequests[index].status = "answered";
  localStorage.setItem("bibleAppRequests", JSON.stringify(prayerRequests));
  updatePrayerRequestsDisplay();
  showSuccessMessage("Prayer request marked as answered! 🙏");
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}

function showSuccessMessage(message) {
  const successDiv = document.createElement('div');
  successDiv.className = 'success-message';
  successDiv.textContent = message;
  successDiv.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(135deg, #4CAF50, #45a049);
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    z-index: 10000;
    box-shadow: 0 8px 32px rgba(0,0,0,0.3);
    animation: slideInRight 0.3s ease;
    font-weight: 600;
  `;
  
  document.body.appendChild(successDiv);
  
  setTimeout(() => {
    successDiv.style.animation = 'slideInRight 0.3s ease reverse';
    setTimeout(() => {
      successDiv.remove();
    }, 300);
  }, 3000);
}

// -------------------- Tab Management --------------------
function setupJournalTabs() {
  const tabs = document.querySelectorAll('.journal-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs and contents
      document.querySelectorAll('.journal-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.journal-tab-content').forEach(c => c.classList.remove('active'));
      
      // Add active class to clicked tab and corresponding content
      tab.classList.add('active');
      const tabId = tab.getAttribute('data-tab');
      document.getElementById(`${tabId}-tab`).classList.add('active');
    });
  });
}

// -------------------- Search Functionality --------------------
function searchVerses(query) {
  try {
    const allVerses = getAllVerses();
    const searchResults = allVerses.filter(verse => 
      verse.text.toLowerCase().includes(query.toLowerCase())
    );
    
    return searchResults;
  } catch (e) {
    console.error("Error searching verses:", e);
    return [];
  }
}

function displaySearchResults(results) {
  try {
    const searchResults = document.getElementById("searchResults");
    if (!searchResults) return;

    if (results.length === 0) {
      searchResults.innerHTML = '<div class="empty-state">No verses found. Try different keywords.</div>';
      return;
    }

    searchResults.innerHTML = results.map(verse => `
      <div class="search-result-item" onclick="selectSearchResult('${verse.text.replace(/'/g, "\\'")}')">
        <div class="verse-text">${verse.text}</div>
        <div class="verse-reference">${verse.category.charAt(0).toUpperCase() + verse.category.slice(1)}</div>
      </div>
    `).join('');
  } catch (e) {
    console.error("Error displaying search results:", e);
  }
}

function selectSearchResult(verseText) {
  try {
    const allVerses = getAllVerses();
    currentVerseObj = allVerses.find(verse => verse.text === verseText);
    if (currentVerseObj) {
      currentVerse = currentVerseObj.text;
      updateVerseDisplay();
      closeSearchModal();
      showSuccessMessage("Verse loaded from search! 🔍");
    }
  } catch (e) {
    console.error("Error selecting search result:", e);
  }
}

function openSearchModal() {
  try {
    const modal = document.getElementById("searchModal");
    if (modal) {
      modal.style.display = "block";
      const searchInput = document.getElementById("searchInput");
      if (searchInput) {
        searchInput.value = "";
        searchInput.focus();
      }
      document.getElementById("searchResults").innerHTML = "";
    }
  } catch (e) {
    console.error("Error opening search modal:", e);
  }
}

function closeSearchModal() {
  try {
    const modal = document.getElementById("searchModal");
    if (modal) {
      modal.style.display = "none";
    }
  } catch (e) {
    console.error("Error closing search modal:", e);
  }
}

// -------------------- Sharing Functions --------------------
function openShareModal() {
  try {
    const modal = document.getElementById("shareModal");
    if (modal) {
      modal.style.display = "block";
      // Reset to main options view
      document.getElementById("imageOptions").classList.add("hidden");
      document.getElementById("imagePreview").classList.add("hidden");
    }
  } catch (e) {
    console.error("Error opening share modal:", e);
  }
}

function closeShareModal() {
  try {
    const modal = document.getElementById("shareModal");
    if (modal) {
      modal.style.display = "none";
    }
  } catch (e) {
    console.error("Error closing share modal:", e);
  }
}

function copyVerseToClipboard() {
  try {
    const verseText = currentVerse;
    const textToCopy = `${verseText}\n\nShared via Greeter Bible App • https://mashifmj-prog.github.io/greeter-bible-dev3-01/`;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
      showSuccessMessage("Verse copied to clipboard! 📋");
      closeShareModal();
    }).catch(err => {
      console.error("Failed to copy text: ", err);
      alert("Failed to copy verse to clipboard. Please try again.");
    });
  } catch (e) {
    console.error("Error copying verse to clipboard:", e);
  }
}

// -------------------- WhatsApp Sharing --------------------
function shareToWhatsAppEnhanced() {
  try {
    if (!currentVerse) {
      showSuccessMessage("No verse to share");
      return;
    }

    const verseText = currentVerse;
    const appUrl = "https://mashifmj-prog.github.io/greeter-bible-dev3-01/";
    const shareText = `✨ Bible Inspiration ✨\n\n${verseText}\n\n- Shared via Greeter Bible App\n${appUrl}`;
    
    const encodedText = encodeURIComponent(shareText);
    
    // Multiple WhatsApp URL formats for better compatibility
    const whatsappUrls = [
      `https://wa.me/?text=${encodedText}`,
      `https://api.whatsapp.com/send?text=${encodedText}`,
      `whatsapp://send?text=${encodedText}`
    ];
    
    // Try to open WhatsApp
    let success = false;
    
    // Try deep link first (for mobile devices)
    try {
      window.location.href = whatsappUrls[2];
      success = true;
    } catch (e) {
      // Fallback to web version
      try {
        window.open(whatsappUrls[0], '_blank', 'noopener,noreferrer');
        success = true;
      } catch (e2) {
        // Final fallback
        window.open(whatsappUrls[1], '_blank', 'noopener,noreferrer');
        success = true;
      }
    }
    
    if (success) {
      showSuccessMessage("Sharing to WhatsApp... 💚");
      closeShareModal();
    } else {
      throw new Error("All WhatsApp methods failed");
    }
    
  } catch (e) {
    console.error("Error sharing to WhatsApp:", e);
    // Ultimate fallback - copy to clipboard
    showSuccessMessage("Opening WhatsApp failed. Verse copied to clipboard! 📋");
    copyVerseToClipboard();
  }
}

// Share app link for publicity
function shareAppLink() {
  try {
    const appUrl = "https://mashifmj-prog.github.io/greeter-bible-dev3-01/";
    const shareText = `Check out this beautiful Bible app with daily verses, prayer journal, and more! ${appUrl}`;
    
    // Try native sharing first
    if (navigator.share) {
      navigator.share({
        title: 'Greeter Bible App',
        text: 'Beautiful Bible app with daily verses and prayer journal',
        url: appUrl
      }).then(() => {
        showSuccessMessage("App shared successfully! 🚀");
        closeShareModal();
      }).catch(err => {
        // Fallback to clipboard
        fallbackShareAppLink(shareText);
      });
    } else {
      // Fallback to clipboard
      fallbackShareAppLink(shareText);
    }
  } catch (e) {
    console.error("Error sharing app link:", e);
    fallbackShareAppLink(shareText);
  }
}

function fallbackShareAppLink(shareText) {
  navigator.clipboard.writeText(shareText).then(() => {
    showSuccessMessage("App link copied to clipboard! 📋\nPaste it anywhere to share!");
    closeShareModal();
  }).catch(err => {
    // Ultimate fallback
    const textArea = document.createElement('textarea');
    textArea.value = shareText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    showSuccessMessage("App link copied to clipboard! 📋\nPaste it anywhere to share!");
    closeShareModal();
  });
}

function showImageOptions() {
  try {
    const imageOptions = document.getElementById("imageOptions");
    const shareOptions = document.querySelector(".share-options");
    
    if (imageOptions && shareOptions) {
      shareOptions.classList.add("hidden");
      imageOptions.classList.remove("hidden");
      
      // Select first theme by default
      const firstTheme = document.querySelector(".theme-option");
      if (firstTheme) {
        document.querySelectorAll(".theme-option").forEach(opt => opt.classList.remove("active"));
        firstTheme.classList.add("active");
      }
    }
  } catch (e) {
    console.error("Error showing image options:", e);
  }
}

function generateVerseImage(theme) {
  try {
    const canvas = document.getElementById("verseCanvas");
    const ctx = canvas.getContext("2d");
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Set background based on theme
    let gradient;
    switch(theme) {
      case "minimal":
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = "#e0e0e0";
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);
        break;
      case "dark":
        gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, "#2c3e50");
        gradient.addColorStop(1, "#34495e");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        break;
      case "sunrise":
        gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, "#ff9a9e");
        gradient.addColorStop(1, "#fecfef");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        break;
      case "ocean":
        gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, "#4facfe");
        gradient.addColorStop(1, "#00f2fe");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        break;
      case "sunset":
        gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, "#fa709a");
        gradient.addColorStop(1, "#fee140");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        break;
      case "night":
        gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, "#2c3e50");
        gradient.addColorStop(1, "#4ca1af");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        break;
    }
    
    // Set text color based on theme
    const textColor = theme === "minimal" || theme === "sunrise" ? "#333333" : "#ffffff";
    ctx.fillStyle = textColor;
    ctx.textAlign = "center";
    
    // Add verse text with better word wrapping
    const maxWidth = canvas.width - 100; // More padding
    const lineHeight = 30; // Slightly more spacing
    const verseLines = wrapText(ctx, currentVerse, maxWidth);
    
    // Calculate starting position to center text vertically
    const totalTextHeight = verseLines.length * lineHeight;
    let y = (canvas.height - totalTextHeight) / 2 + lineHeight / 2;
    
    // Set font
    ctx.font = "bold 22px 'Inter', sans-serif";
    
    verseLines.forEach(line => {
      ctx.fillText(line.trim(), canvas.width / 2, y);
      y += lineHeight;
    });
    
    // Add watermark
    ctx.font = "14px 'Inter', sans-serif";
    ctx.fillStyle = textColor + "80"; // 50% opacity
    ctx.fillText("Shared via Greeter Bible App", canvas.width / 2, canvas.height - 40);
    
    // Add attribution link if enabled
    const includeAttribution = document.getElementById("includeAttribution").checked;
    if (includeAttribution) {
      ctx.font = "12px 'Inter', sans-serif";
      ctx.fillText("mashifmj-prog.github.io/greeter-bible-dev3-01", canvas.width / 2, canvas.height - 20);
    }
    
    return canvas.toDataURL("image/png");
  } catch (e) {
    console.error("Error generating verse image:", e);
    return null;
  }
}

function wrapText(context, text, maxWidth) {
  const words = text.split(' ');
  const lines = [];
  let currentLine = '';
  
  // Set font for accurate measurement
  context.font = "bold 22px 'Inter', sans-serif";
  
  for (let i = 0; i < words.length; i++) {
    const testLine = currentLine + words[i] + ' ';
    const metrics = context.measureText(testLine);
    
    if (metrics.width > maxWidth && currentLine !== '') {
      lines.push(currentLine);
      currentLine = words[i] + ' ';
    } else {
      currentLine = testLine;
    }
  }
  lines.push(currentLine.trim());
  return lines;
}

function previewImage() {
  try {
    const selectedTheme = document.querySelector(".theme-option.active")?.dataset.theme;
    if (!selectedTheme) return;
    
    generateVerseImage(selectedTheme);
    document.getElementById("imagePreview").classList.remove("hidden");
    
    // Scroll to preview
    document.getElementById("imagePreview").scrollIntoView({ 
      behavior: 'smooth', 
      block: 'nearest' 
    });
  } catch (e) {
    console.error("Error previewing image:", e);
  }
}

function downloadImage() {
  try {
    const selectedTheme = document.querySelector(".theme-option.active")?.dataset.theme;
    if (!selectedTheme) return;
    
    const dataUrl = generateVerseImage(selectedTheme);
    if (!dataUrl) return;
    
    const link = document.createElement("a");
    link.download = `bible-verse-${new Date().getTime()}.png`;
    link.href = dataUrl;
    link.click();
    
    closeShareModal();
    showSuccessMessage("Image downloaded! 🖼️");
  } catch (e) {
    console.error("Error downloading image:", e);
  }
}

function shareImage() {
  try {
    const selectedTheme = document.querySelector(".theme-option.active")?.dataset.theme;
    if (!selectedTheme) return;
    
    const dataUrl = generateVerseImage(selectedTheme);
    if (!dataUrl) return;
    
    // Convert data URL to blob
    fetch(dataUrl)
      .then(res => res.blob())
      .then(blob => {
        const file = new File([blob], "bible-verse.png", { type: "image/png" });
        
        if (navigator.share && navigator.canShare({ files: [file] })) {
          navigator.share({
            files: [file],
            title: "Bible Verse",
            text: currentVerse
          }).then(() => {
            closeShareModal();
            showSuccessMessage("Shared successfully! 📤");
          }).catch(err => {
            console.error("Error sharing:", err);
            downloadImage(); // Fallback to download
          });
        } else {
          downloadImage(); // Fallback to download
        }
      });
  } catch (e) {
    console.error("Error sharing image:", e);
    downloadImage(); // Fallback to download
  }
}

// -------------------- Clock --------------------
function updateClock() {
  try {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    const clockElement = document.getElementById("clock");
    if (clockElement) {
      clockElement.innerText = `${h}:${m}:${s}`;
    }
  } catch (e) {
    console.error("Error updating clock:", e);
  }
}

// -------------------- Swipe Gestures --------------------
function initializeSwipeGestures() {
  const verseSection = document.querySelector('.verse-section');
  let touchStartX = 0;
  let touchEndX = 0;

  if (!verseSection) return;

  verseSection.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
  });

  verseSection.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swipe left - next verse
        nextVerse();
        showSwipeFeedback('← Swiped for new verse');
      } else {
        // Swipe right - previous (optional, or share)
        openShareModal();
        showSwipeFeedback('→ Swiped to share');
      }
    }
  }
}

function showSwipeFeedback(message) {
  const feedback = document.createElement('div');
  feedback.textContent = message;
  feedback.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0,0,0,0.8);
    color: white;
    padding: 10px 20px;
    border-radius: 20px;
    z-index: 10000;
    font-size: 14px;
    animation: fadeInOut 2s ease-in-out;
  `;
  
  document.body.appendChild(feedback);
  
  setTimeout(() => {
    feedback.remove();
  }, 2000);
}

// -------------------- Event Listeners --------------------
function initializeEventListeners() {
  try {
    // Name input listener
    const nameInput = document.getElementById("nameInput");
    if (nameInput) {
      nameInput.addEventListener("input", e => {
        userName = e.target.value.trim();
        localStorage.setItem("userName", userName);
        updateGreeting();
      });
    }

    // Reset name button
    const resetButton = document.getElementById("resetButton");
    if (resetButton) {
      resetButton.addEventListener("click", () => {
        localStorage.removeItem("userName");
        userName = "";
        const nameInput = document.getElementById("nameInput");
        if (nameInput) nameInput.value = "";
        updateGreeting();
        showSuccessMessage("Name reset");
      });
    }

    // Control buttons
    document.getElementById('shareButton')?.addEventListener('click', openShareModal);
    document.getElementById('favoriteButton')?.addEventListener('click', toggleFavorite);
    document.getElementById('nextVerseButton')?.addEventListener('click', nextVerse);
    document.getElementById('searchButton')?.addEventListener('click', openSearchModal);
    
    // Category filter
    document.getElementById('verseCategory')?.addEventListener('change', filterByCategory);
    
    // Journal functionality
    document.getElementById('savePrayer')?.addEventListener('click', savePrayerEntry);
    document.getElementById('saveGratitude')?.addEventListener('click', saveGratitudeEntry);
    document.getElementById('addRequest')?.addEventListener('click', addPrayerRequest);
    
    // Clear favorites
    document.getElementById('clearFavorites')?.addEventListener('click', clearAllFavorites);
    
    // Tab management
    setupJournalTabs();
    
    // Search functionality
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        const results = searchVerses(e.target.value);
        displaySearchResults(results);
      });
    }

    // Modal close buttons
    const closeButtons = document.querySelectorAll(".close-btn, #closeModalBtn");
    closeButtons.forEach(btn => {
      btn.addEventListener("click", closeShareModal);
    });

    // Share option buttons - UPDATED WITH WHATSAPP
    document.getElementById('shareImageBtn')?.addEventListener('click', showImageOptions);
    document.getElementById('copyTextBtn')?.addEventListener('click', copyVerseToClipboard);
    
    // NEW: WhatsApp Share button
    document.getElementById('shareWhatsAppBtn')?.addEventListener('click', shareToWhatsAppEnhanced);
    
    document.getElementById('shareTextBtn')?.addEventListener('click', shareAppLink);
    document.getElementById('closeModalBtn')?.addEventListener('click', closeShareModal);

    // Theme selection
    const themeOptions = document.querySelectorAll(".theme-option");
    themeOptions.forEach(option => {
      option.addEventListener("click", () => {
        themeOptions.forEach(opt => opt.classList.remove("active"));
        option.classList.add("active");
      });
    });

    // Image action buttons
    document.getElementById('previewImageBtn')?.addEventListener('click', previewImage);
    document.getElementById('downloadImageBtn')?.addEventListener('click', downloadImage);
    document.getElementById('shareImageFinalBtn')?.addEventListener('click', shareImage);

    // Close modal when clicking outside
    const modals = document.querySelectorAll(".modal");
    modals.forEach(modal => {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          modal.style.display = "none";
        }
      });
    });

    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      // Space bar for next verse
      if (e.code === 'Space' && !e.target.matches('textarea, input')) {
        e.preventDefault();
        nextVerse();
      }
      // Escape key to close modals
      if (e.code === 'Escape') {
        closeShareModal();
        closeSearchModal();
      }
    });

  } catch (e) {
    console.error("Error initializing event listeners:", e);
  }
}

// -------------------- Initialize --------------------
document.addEventListener('DOMContentLoaded', function() {
  try {
    initializeData();
    updateGreeting();
    updateClock();
    setInterval(updateClock, 1000);
    setInterval(updateGreeting, 60000);
    initializeEventListeners();
    initializeSwipeGestures();
    
    // Add swipe CSS
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      @keyframes fadeInOut {
        0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
        20% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
      }
      .verse-section {
        cursor: grab;
        user-select: none;
      }
      .verse-section:active {
        cursor: grabbing;
      }
    `;
    document.head.appendChild(styleSheet);
    
    // Add fade-in animation to container
    const container = document.querySelector('.container');
    if (container) {
      container.style.opacity = '0';
      container.style.transform = 'translateY(20px)';
      container.style.transition = 'all 0.8s ease';
      
      setTimeout(() => {
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
      }, 100);
    }
  } catch (e) {
    console.error("Error during initialization:", e);
  }
});
