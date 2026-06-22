const apiKey = "197adf2a746910ec04ae9e58a3a587b6";

async function getWeather() {
  const city = document.getElementById("city").value.trim();
  const result = document.getElementById("result");

  if (!city) {
    result.innerHTML = "⚠️ Please enter a city name";
    return;
  }

  result.innerHTML = "Loading... ⏳";

  const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod == 404) {
      result.innerHTML = `❌ City not found: "${city}"`;
      return;
    }

    if (data.cod == 401) {
      result.innerHTML = "❌ Invalid API key";
      return;
    }

    result.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>🌡️ Temperature: <strong>${data.main.temp}°C</strong></p>
      <p>☁️ Weather: <strong>${data.weather[0].main}</strong></p>
      <p>💧 Humidity: <strong>${data.main.humidity}%</strong></p>
      <p>🌬️ Wind: <strong>${data.wind.speed} m/s</strong></p>
      <p>🔽 Pressure: <strong>${data.main.pressure} hPa</strong></p>
      <p>👁️ Visibility: <strong>${(data.visibility / 1000).toFixed(1)} km</strong></p>
      <p>🌅 Feels Like: <strong>${data.main.feels_like}°C</strong></p>
    `;

    setWeatherBackground(data.weather[0].main, data.main.temp);

  } catch (error) {
    result.innerHTML = "⚠️ Network error";
  }
}

function setWeatherBackground(weather, temp) {
  const body = document.body;
  body.className = "default";

  weather = weather.toLowerCase();
  let bg = "default";

  if (weather.includes("clear")) {
    bg = temp > 25 ? "clear-hot" : temp > 15 ? "clear-mild" : "clear-cold";
  } else if (weather.includes("cloud")) {
    bg = temp > 20 ? "clouds-warm" : "clouds-cool";
  } else if (weather.includes("rain")) {
    bg = "rain";
  } else if (weather.includes("thunder")) {
    bg = "thunderstorm";
  } else if (weather.includes("snow")) {
    bg = "snow";
  } else if (temp < 5) {
    bg = "night-cold";
  } else {
    bg = "night";
  }

  body.classList.add(bg);
}

document.getElementById("city").addEventListener("keypress", function (e) {
  if (e.key === "Enter") getWeather();
});