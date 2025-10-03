// ---------------- Weather Integration ----------------
async function getWeather() {
  if (!navigator.geolocation) return;

  navigator.geolocation.getCurrentPosition(async (position) => {
    const { latitude, longitude } = position.coords;
    const apiKey = "6eb470c882b961c9d1fd4de794611c18"; // Replace with your key
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=minutely,hourly,alerts&appid=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      const temp = data.current.temp.toFixed(1);
      const description = data.current.weather[0].description;
      const tomorrowTemp = data.daily[1].temp.day.toFixed(1);
      const tomorrowDesc = data.daily[1].weather[0].description;

      document.getElementById("weather").innerText =
        `Current: ${temp}°C, ${description}\nTomorrow: ${tomorrowTemp}°C, ${tomorrowDesc}`;
    } catch (err) {
      console.error("Weather fetch error:", err);
    }
  });
}

// Call weather function
getWeather();
