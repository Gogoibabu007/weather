// WMO Weather Codes mapping to visual states
const weatherCodeMap = {
  0: { 
    day: { desc: "Clear Sky", icon: "sun", bg: "weather-clear-day" }, 
    night: { desc: "Clear Sky", icon: "moon", bg: "weather-clear-night" }
  },
  1: { 
    day: { desc: "Mainly Clear", icon: "cloud-sun", bg: "weather-cloudy" }, 
    night: { desc: "Mainly Clear", icon: "cloud-moon", bg: "weather-clear-night" }
  },
  2: { 
    day: { desc: "Partly Cloudy", icon: "cloud-sun", bg: "weather-cloudy" }, 
    night: { desc: "Partly Cloudy", icon: "cloud-moon", bg: "weather-clear-night" }
  },
  3: { 
    day: { desc: "Overcast", icon: "cloud", bg: "weather-cloudy" }, 
    night: { desc: "Overcast", icon: "cloud", bg: "weather-cloudy" }
  },
  45: { 
    day: { desc: "Foggy", icon: "cloud-fog", bg: "weather-cloudy" }, 
    night: { desc: "Foggy", icon: "cloud-fog", bg: "weather-cloudy" }
  },
  48: { 
    day: { desc: "Rime Fog", icon: "cloud-fog", bg: "weather-cloudy" }, 
    night: { desc: "Rime Fog", icon: "cloud-fog", bg: "weather-cloudy" }
  },
  51: { 
    day: { desc: "Light Drizzle", icon: "cloud-drizzle", bg: "weather-rainy" }, 
    night: { desc: "Light Drizzle", icon: "cloud-drizzle", bg: "weather-rainy" }
  },
  53: { 
    day: { desc: "Moderate Drizzle", icon: "cloud-drizzle", bg: "weather-rainy" }, 
    night: { desc: "Moderate Drizzle", icon: "cloud-drizzle", bg: "weather-rainy" }
  },
  55: { 
    day: { desc: "Dense Drizzle", icon: "cloud-drizzle", bg: "weather-rainy" }, 
    night: { desc: "Dense Drizzle", icon: "cloud-drizzle", bg: "weather-rainy" }
  },
  56: { 
    day: { desc: "Light Freezing Drizzle", icon: "cloud-snow", bg: "weather-snowy" }, 
    night: { desc: "Light Freezing Drizzle", icon: "cloud-snow", bg: "weather-snowy" }
  },
  57: { 
    day: { desc: "Dense Freezing Drizzle", icon: "cloud-snow", bg: "weather-snowy" }, 
    night: { desc: "Dense Freezing Drizzle", icon: "cloud-snow", bg: "weather-snowy" }
  },
  61: { 
    day: { desc: "Slight Rain", icon: "cloud-rain", bg: "weather-rainy" }, 
    night: { desc: "Slight Rain", icon: "cloud-rain", bg: "weather-rainy" }
  },
  63: { 
    day: { desc: "Moderate Rain", icon: "cloud-rain", bg: "weather-rainy" }, 
    night: { desc: "Moderate Rain", icon: "cloud-rain", bg: "weather-rainy" }
  },
  65: { 
    day: { desc: "Heavy Rain", icon: "cloud-rain", bg: "weather-rainy" }, 
    night: { desc: "Heavy Rain", icon: "cloud-rain", bg: "weather-rainy" }
  },
  66: { 
    day: { desc: "Light Freezing Rain", icon: "cloud-snow", bg: "weather-snowy" }, 
    night: { desc: "Light Freezing Rain", icon: "cloud-snow", bg: "weather-snowy" }
  },
  67: { 
    day: { desc: "Heavy Freezing Rain", icon: "cloud-snow", bg: "weather-snowy" }, 
    night: { desc: "Heavy Freezing Rain", icon: "cloud-snow", bg: "weather-snowy" }
  },
  71: { 
    day: { desc: "Slight Snowfall", icon: "snowflake", bg: "weather-snowy" }, 
    night: { desc: "Slight Snowfall", icon: "snowflake", bg: "weather-snowy" }
  },
  73: { 
    day: { desc: "Moderate Snowfall", icon: "snowflake", bg: "weather-snowy" }, 
    night: { desc: "Moderate Snowfall", icon: "snowflake", bg: "weather-snowy" }
  },
  75: { 
    day: { desc: "Heavy Snowfall", icon: "snowflake", bg: "weather-snowy" }, 
    night: { desc: "Heavy Snowfall", icon: "snowflake", bg: "weather-snowy" }
  },
  77: { 
    day: { desc: "Snow Grains", icon: "snowflake", bg: "weather-snowy" }, 
    night: { desc: "Snow Grains", icon: "snowflake", bg: "weather-snowy" }
  },
  80: { 
    day: { desc: "Slight Rain Showers", icon: "cloud-rain", bg: "weather-rainy" }, 
    night: { desc: "Slight Rain Showers", icon: "cloud-rain", bg: "weather-rainy" }
  },
  81: { 
    day: { desc: "Moderate Rain Showers", icon: "cloud-rain", bg: "weather-rainy" }, 
    night: { desc: "Moderate Rain Showers", icon: "cloud-rain", bg: "weather-rainy" }
  },
  82: { 
    day: { desc: "Violent Rain Showers", icon: "cloud-rain", bg: "weather-rainy" }, 
    night: { desc: "Violent Rain Showers", icon: "cloud-rain", bg: "weather-rainy" }
  },
  85: { 
    day: { desc: "Slight Snow Showers", icon: "cloud-snow", bg: "weather-snowy" }, 
    night: { desc: "Slight Snow Showers", icon: "cloud-snow", bg: "weather-snowy" }
  },
  86: { 
    day: { desc: "Heavy Snow Showers", icon: "cloud-snow", bg: "weather-snowy" }, 
    night: { desc: "Heavy Snow Showers", icon: "cloud-snow", bg: "weather-snowy" }
  },
  95: { 
    day: { desc: "Thunderstorm", icon: "cloud-lightning", bg: "weather-stormy" }, 
    night: { desc: "Thunderstorm", icon: "cloud-lightning", bg: "weather-stormy" }
  },
  96: { 
    day: { desc: "Thunderstorm with Hail", icon: "cloud-lightning", bg: "weather-stormy" }, 
    night: { desc: "Thunderstorm with Hail", icon: "cloud-lightning", bg: "weather-stormy" }
  },
  99: { 
    day: { desc: "Heavy Hail Thunderstorm", icon: "cloud-lightning", bg: "weather-stormy" }, 
    night: { desc: "Heavy Hail Thunderstorm", icon: "cloud-lightning", bg: "weather-stormy" }
  }
};

// App State
let activeLocation = {
  name: "London",
  country: "United Kingdom",
  lat: 51.5074,
  lon: -0.1278
};

let weatherData = null; // Stored weather metrics response cache
let activeUnit = "C"; // "C" or "F"
let favorites = [];

// Canvas Particle Engine Variables
let canvas = document.getElementById("weather-particle-canvas");
let ctx = canvas.getContext("2d");
let particles = [];
let animationId = null;
let activeWeatherType = "clear"; // "clear", "rain", "snow", "storm"

// DOM Elements
const searchInput = document.getElementById("city-search");
const autocompleteList = document.getElementById("autocomplete-list");
const locationBtn = document.getElementById("location-btn");
const unitToggleBtn = document.getElementById("unit-toggle-btn");
const unitC = document.getElementById("unit-c");
const unitF = document.getElementById("unit-f");

const cityNameEl = document.getElementById("city-name");
const weatherDateEl = document.getElementById("weather-date");
const updateTimeEl = document.getElementById("update-time");
const currentTempEl = document.getElementById("current-temp");
const currentUnitEl = document.getElementById("current-unit");
const heroWeatherIcon = document.getElementById("hero-weather-icon");
const weatherDescText = document.getElementById("weather-desc-text");
const tempRangeEl = document.getElementById("temp-range");
const favoriteBtn = document.getElementById("favorite-btn");

// Metrics
const valFeelsLike = document.getElementById("val-feels-like");
const valHumidity = document.getElementById("val-humidity");
const valWind = document.getElementById("val-wind");
const valUv = document.getElementById("val-uv");

// Lists
const hourlyForecastList = document.getElementById("hourly-forecast-list");
const dailyForecastList = document.getElementById("daily-forecast-list");
const favoritesList = document.getElementById("favorites-list");

// Initialization
document.addEventListener("DOMContentLoaded", () => {
  setupCanvas();
  loadDataFromStorage();
  fetchWeatherData();
  setupEventListeners();
});

// Load Watchlist and units from LocalStorage
function loadDataFromStorage() {
  const savedFavorites = localStorage.getItem("weather_favorites");
  if (savedFavorites) {
    favorites = JSON.parse(savedFavorites);
  } else {
    // Default favorites
    favorites = [
      { name: "New York", country: "United States", lat: 40.7128, lon: -74.006 },
      { name: "Tokyo", country: "Japan", lat: 35.6895, lon: 139.6917 },
      { name: "Paris", country: "France", lat: 48.8566, lon: 2.3522 }
    ];
    saveFavorites();
  }

  const savedUnit = localStorage.getItem("weather_unit");
  if (savedUnit) {
    activeUnit = savedUnit;
    if (activeUnit === "F") {
      unitToggleBtn.classList.add("fahrenheit");
      unitC.classList.remove("active");
      unitF.classList.add("active");
    }
  }
}

function saveFavorites() {
  localStorage.setItem("weather_favorites", JSON.stringify(favorites));
}

// Fetch weather from Open-Meteo Forecast API
async function fetchWeatherData() {
  cityNameEl.textContent = "Loading...";
  updateTimeEl.textContent = "Updating...";
  
  const { lat, lon } = activeLocation;
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,uv_index_max&timezone=auto`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Weather forecast fetch failed");
    
    const data = await response.json();
    weatherData = data;
    
    // Save to Cache
    localStorage.setItem("weather_last_data", JSON.stringify(data));
    localStorage.setItem("weather_last_location", JSON.stringify(activeLocation));
    
    renderDashboard();
  } catch (error) {
    console.error("Error loading weather data:", error);
    loadCachedWeather();
  }
}

function loadCachedWeather() {
  const cachedData = localStorage.getItem("weather_last_data");
  const cachedLoc = localStorage.getItem("weather_last_location");
  
  if (cachedData && cachedLoc) {
    weatherData = JSON.parse(cachedData);
    activeLocation = JSON.parse(cachedLoc);
    renderDashboard();
  } else {
    cityNameEl.textContent = "Connection Error";
    updateTimeEl.textContent = "Failed";
  }
}

// Get Weather description details
function getWeatherDetails(code, isDay) {
  const codeConfig = weatherCodeMap[code];
  if (!codeConfig) return { desc: "Unknown", icon: "help-circle", bg: "weather-cloudy" };
  return isDay === 1 ? codeConfig.day : codeConfig.night;
}

// Temperature unit converter
function formatTemp(tempC) {
  if (activeUnit === "F") {
    return Math.round((tempC * 9/5) + 32);
  }
  return Math.round(tempC);
}

// Wind speed unit converter
function formatWind(windKmh) {
  if (activeUnit === "F") {
    return `${Math.round(windKmh * 0.621371)} mph`;
  }
  return `${Math.round(windKmh)} km/h`;
}

// Star button state trigger
function checkFavoriteStatus() {
  const isStarred = favorites.some(fav => fav.lat.toFixed(3) === activeLocation.lat.toFixed(3) && fav.lon.toFixed(3) === activeLocation.lon.toFixed(3));
  if (isStarred) {
    favoriteBtn.classList.add("starred");
  } else {
    favoriteBtn.classList.remove("starred");
  }
}

// Render Dashboard components
function renderDashboard() {
  if (!weatherData) return;
  
  const current = weatherData.current;
  const daily = weatherData.daily;
  const isDay = current.is_day;
  
  // Weather details
  const details = getWeatherDetails(current.weather_code, isDay);
  
  // Set Background Dynamic theme
  document.body.className = details.bg;
  
  // Set active location text
  cityNameEl.textContent = `${activeLocation.name}, ${activeLocation.country}`;
  checkFavoriteStatus();
  
  // Set formatted date
  const now = new Date();
  weatherDateEl.textContent = now.toLocaleDateString([], { weekday: 'long', month: 'short', day: 'numeric' });
  
  // Update timestamp
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  updateTimeEl.textContent = `Updated: ${timeStr}`;
  
  // Temp display
  currentTempEl.textContent = formatTemp(current.temperature_2m);
  currentUnitEl.textContent = `°${activeUnit}`;
  
  // Weather text description
  weatherDescText.textContent = details.desc;
  
  // Today's High / Low range
  const dailyMax = daily.temperature_2m_max[0];
  const dailyMin = daily.temperature_2m_min[0];
  tempRangeEl.textContent = `H: ${formatTemp(dailyMax)}° L: ${formatTemp(dailyMin)}°`;
  
  // Hero Weather Icon representation
  heroWeatherIcon.innerHTML = `<i data-lucide="${details.icon}"></i>`;
  
  // Metrics details
  valFeelsLike.textContent = `${formatTemp(current.apparent_temperature)}°`;
  valHumidity.textContent = `${Math.round(current.relative_humidity_2m)}%`;
  valWind.textContent = formatWind(current.wind_speed_10m);
  valUv.textContent = Math.round(daily.uv_index_max[0]);
  
  // Render sub sections
  renderHourlyForecast();
  renderDailyForecast();
  renderFavoritesList();
  
  // Trigger particle engine
  updateParticleEngine(details.bg);
  
  lucide.createIcons();
}

// Render Hourly sliding forecast card list
function renderHourlyForecast() {
  hourlyForecastList.innerHTML = "";
  
  const hourly = weatherData.hourly;
  const currentHour = new Date().getHours();
  
  // Display subsequent 24 hourly metrics starting from current hour
  for (let i = currentHour; i < currentHour + 24; i++) {
    if (i >= hourly.time.length) break;
    
    const time = new Date(hourly.time[i]);
    const formattedHour = time.toLocaleTimeString([], { hour: 'numeric' });
    
    // Determine is_day hourly heuristic (e.g. day between 6 AM and 6 PM)
    const hr = time.getHours();
    const isHrDay = (hr >= 6 && hr < 18) ? 1 : 0;
    
    const details = getWeatherDetails(hourly.weather_code[i], isHrDay);
    const temp = formatTemp(hourly.temperature_2m[i]);
    
    const hourlyItem = document.createElement("div");
    hourlyItem.className = "hourly-item";
    hourlyItem.innerHTML = `
      <span class="hourly-time">${formattedHour}</span>
      <div class="hourly-icon" title="${details.desc}">
        <i data-lucide="${details.icon}"></i>
      </div>
      <span class="hourly-temp">${temp}°</span>
    `;
    hourlyForecastList.appendChild(hourlyItem);
  }
}

// Render Daily 7-Day weather forecasts list
function renderDailyForecast() {
  dailyForecastList.innerHTML = "";
  
  const daily = weatherData.daily;
  
  for (let i = 0; i < 7; i++) {
    if (i >= daily.time.length) break;
    
    const date = new Date(daily.time[i]);
    // If today, label 'Today'
    let dayLabel = date.toLocaleDateString([], { weekday: 'short' });
    if (i === 0) dayLabel = "Today";
    
    // Day weather icon
    const details = getWeatherDetails(daily.weather_code[i], 1);
    
    const maxTemp = formatTemp(daily.temperature_2m_max[i]);
    const minTemp = formatTemp(daily.temperature_2m_min[i]);
    
    const row = document.createElement("li");
    row.className = "daily-row";
    row.innerHTML = `
      <span class="daily-day">${dayLabel}</span>
      <div class="daily-icon" title="${details.desc}">
        <i data-lucide="${details.icon}"></i>
      </div>
      <span class="daily-desc">${details.desc}</span>
      <div class="daily-temps">
        <span class="daily-max">${maxTemp}°</span>
        <span class="daily-min">${minTemp}°</span>
      </div>
    `;
    dailyForecastList.appendChild(row);
  }
}

// Geocoding Suggestions
let searchDebounceTimeout;
function setupSearchAutocomplete() {
  searchInput.addEventListener("input", (e) => {
    clearTimeout(searchDebounceTimeout);
    const query = e.target.value.trim();
    
    if (query.length < 3) {
      autocompleteList.classList.add("hidden");
      return;
    }
    
    searchDebounceTimeout = setTimeout(() => {
      fetchCitySuggestions(query);
    }, 350); // debounce API requests by 350ms
  });

  // Clicking outside input closes autocomplete
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-box-wrapper")) {
      autocompleteList.classList.add("hidden");
    }
  });
}

// Call Open-Meteo Geocoding Search endpoint
async function fetchCitySuggestions(query) {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=5&language=en&format=json`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Geocoding fetch failed");
    
    const data = await response.json();
    const results = data.results || [];
    
    renderAutocompleteSuggestions(results);
  } catch (error) {
    console.error("Suggestions error:", error);
  }
}

function renderAutocompleteSuggestions(cities) {
  autocompleteList.innerHTML = "";
  
  if (cities.length === 0) {
    autocompleteList.classList.add("hidden");
    return;
  }
  
  cities.forEach(city => {
    const li = document.createElement("li");
    li.className = "autocomplete-item";
    
    const adminState = city.admin1 ? `${city.admin1}, ` : "";
    const country = city.country || "";
    
    li.innerHTML = `
      <span class="ac-city">${city.name}</span>
      <span class="ac-country">${adminState}${country}</span>
    `;
    
    li.addEventListener("click", () => {
      // Set active selection
      activeLocation = {
        name: city.name,
        country: country,
        lat: city.latitude,
        lon: city.longitude
      };
      
      searchInput.value = "";
      autocompleteList.classList.add("hidden");
      
      // Update Weather Data
      fetchWeatherData();
    });
    
    autocompleteList.appendChild(li);
  });
  
  autocompleteList.classList.remove("hidden");
}

// Geolocation GPS fetcher
function setupGeolocation() {
  locationBtn.addEventListener("click", () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }
    
    locationBtn.classList.add("loading");
    
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        
        activeLocation = {
          name: "My Location",
          country: `${lat.toFixed(2)}°, ${lon.toFixed(2)}°`,
          lat: lat,
          lon: lon
        };
        
        // Reverse Geocode coordinates to get friendly name
        try {
          const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&accept-language=en`);
          if (response.ok) {
            const data = await response.json();
            const address = data.address;
            const city = address.city || address.town || address.village || address.suburb || "My Location";
            const country = address.country || "";
            
            activeLocation.name = city;
            activeLocation.country = country;
          }
        } catch (e) {
          console.warn("Nominatim geocoding failed, using coordinates");
        }
        
        locationBtn.classList.remove("loading");
        fetchWeatherData();
      },
      (error) => {
        locationBtn.classList.remove("loading");
        alert(`Geolocation failed: ${error.message}`);
      }
    );
  });
}

// Celsius vs Fahrenheit unit toggles
function setupUnitToggle() {
  unitToggleBtn.addEventListener("click", () => {
    activeUnit = activeUnit === "C" ? "F" : "C";
    
    // Visual toggle pill update
    if (activeUnit === "F") {
      unitToggleBtn.classList.add("fahrenheit");
      unitC.classList.remove("active");
      unitF.classList.add("active");
    } else {
      unitToggleBtn.classList.remove("fahrenheit");
      unitC.classList.add("active");
      unitF.classList.remove("active");
    }
    
    localStorage.setItem("weather_unit", activeUnit);
    renderDashboard();
  });
}

// Watchlist Business Logic
function setupFavorites() {
  favoriteBtn.addEventListener("click", () => {
    const index = favorites.findIndex(fav => fav.lat.toFixed(3) === activeLocation.lat.toFixed(3) && fav.lon.toFixed(3) === activeLocation.lon.toFixed(3));
    
    if (index !== -1) {
      // Remove
      favorites.splice(index, 1);
      favoriteBtn.classList.remove("starred");
    } else {
      // Add
      favorites.push({
        name: activeLocation.name,
        country: activeLocation.country,
        lat: activeLocation.lat,
        lon: activeLocation.lon
      });
      favoriteBtn.classList.add("starred");
    }
    
    saveFavorites();
    renderFavoritesList();
  });
}

// Render dynamic Favorite Cities list
async function renderFavoritesList() {
  favoritesList.innerHTML = "";
  
  if (favorites.length === 0) {
    favoritesList.innerHTML = `
      <div class="favorites-placeholder">
        <i data-lucide="info" class="placeholder-icon"></i>
        <p>Star cities to save them to your watchlist for quick access.</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }
  
  // Fetch current temperatures asynchronously for all fav cities
  favorites.forEach(async (city, index) => {
    const card = document.createElement("div");
    card.className = "fav-card";
    
    card.innerHTML = `
      <div class="fav-info">
        <span class="fav-city">${city.name}</span>
        <span class="fav-desc">${city.country}</span>
      </div>
      <div class="fav-data">
        <span class="fav-temp" id="fav-temp-${index}">--°</span>
        <button class="btn-fav-delete" data-index="${index}" title="Remove city">
          <i data-lucide="trash-2"></i>
        </button>
      </div>
    `;
    
    // Click on fav card triggers forecast load
    card.addEventListener("click", (e) => {
      if (e.target.closest(".btn-fav-delete")) return;
      activeLocation = city;
      fetchWeatherData();
    });
    
    // Delete event listener
    const deleteBtn = card.querySelector(".btn-fav-delete");
    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      favorites.splice(index, 1);
      saveFavorites();
      renderFavoritesList();
      checkFavoriteStatus();
    });
    
    favoritesList.appendChild(card);
    
    // Fetch quick temperature preview for watchlist item
    try {
      const resp = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current=temperature_2m`);
      if (resp.ok) {
        const d = await resp.json();
        const tempVal = d.current.temperature_2m;
        const tempEl = document.getElementById(`fav-temp-${index}`);
        if (tempEl) {
          tempEl.textContent = `${formatTemp(tempVal)}°`;
        }
      }
    } catch (e) {
      console.warn("Watchlist temperature fetch failed", e);
    }
  });
  
  lucide.createIcons();
}

// Canvas Snowflake and Rain Particle Systems
function setupCanvas() {
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);
}

function updateParticleEngine(bgClass) {
  // Reset particles
  particles = [];
  if (animationId) {
    cancelAnimationFrame(animationId);
    animationId = null;
  }
  
  if (bgClass === "weather-rainy" || bgClass === "weather-stormy") {
    activeWeatherType = bgClass === "weather-stormy" ? "storm" : "rain";
    initRainParticles();
    animateParticles();
  } else if (bgClass === "weather-snowy") {
    activeWeatherType = "snow";
    initSnowParticles();
    animateParticles();
  } else {
    activeWeatherType = "clear";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

// Particle templates
function initRainParticles() {
  const count = activeWeatherType === "storm" ? 220 : 120;
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      speedY: 10 + Math.random() * 12,
      speedX: -2 - Math.random() * 2, // wind tilt
      length: 12 + Math.random() * 14,
      opacity: 0.15 + Math.random() * 0.25
    });
  }
}

function initSnowParticles() {
  const count = 75;
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: 1 + Math.random() * 4,
      speedY: 0.8 + Math.random() * 1.5,
      speedX: -0.5 + Math.random() * 1.2,
      density: Math.random() * 30
    });
  }
}

// Animation loops
function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  if (activeWeatherType === "rain" || activeWeatherType === "storm") {
    // Draw Rain drops
    particles.forEach(p => {
      ctx.beginPath();
      ctx.strokeStyle = `rgba(174, 207, 238, ${p.opacity})`;
      ctx.lineWidth = 1.5;
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(p.x + p.speedX, p.y + p.length);
      ctx.stroke();
      
      // Update position
      p.x += p.speedX;
      p.y += p.speedY;
      
      // Wrap boundaries
      if (p.y > canvas.height) {
        p.y = -p.length;
        p.x = Math.random() * canvas.width;
      }
      if (p.x < 0) p.x = canvas.width;
    });
    
    // Storm lightning strikes simulation
    if (activeWeatherType === "storm" && Math.random() > 0.985) {
      ctx.fillStyle = `rgba(255, 255, 255, ${0.15 + Math.random() * 0.15})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  } 
  else if (activeWeatherType === "snow") {
    // Draw Snowflakes
    ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
    ctx.beginPath();
    particles.forEach(p => {
      ctx.moveTo(p.x, p.y);
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
      
      // Update position (wobbly falling)
      p.y += p.speedY;
      p.x += Math.sin(p.y / p.density) * p.speedX;
      
      // Wrap boundaries
      if (p.y > canvas.height) {
        p.y = -10;
        p.x = Math.random() * canvas.width;
      }
    });
    ctx.fill();
  }
  
  animationId = requestAnimationFrame(animateParticles);
}

// Register events
function setupEventListeners() {
  setupSearchAutocomplete();
  setupGeolocation();
  setupUnitToggle();
  setupFavorites();
}
