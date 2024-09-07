import "./styles.css";

function createApp() {
  const app = document.getElementById("app");

  if (app) {
    app.innerHTML = `
      <div class="min-h-screen bg-gray-100 flex items-center justify-center">
        <div class="bg-white p-8 rounded-lg shadow-md">
          <h1 class="text-2xl font-bold mb-4">Weather App</h1>
          <button id="loadWeatherApp" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Load Weather App
          </button>
          <div id="weatherInfo" class="mt-4"></div>
          <div id="debugInfo" class="mt-4 text-sm text-gray-600"></div>
        </div>
      </div>
    `;
  }
}

function setupEventListeners() {
  const loadWeatherAppButton = document.getElementById("loadWeatherApp");
  if (loadWeatherAppButton) {
    loadWeatherAppButton.addEventListener(
      "click",
      getLocationAndLoadWeatherApp
    );
  }
}

function getLocationAndLoadWeatherApp() {
  console.log("Button clicked, getting location...");
  updateDebugInfo("Requesting location...");

  if ("geolocation" in navigator) {
    updateDebugInfo("Geolocation is available");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("Location obtained:", position.coords);
        updateDebugInfo(
          `Location obtained: ${position.coords.latitude}, ${position.coords.longitude}`
        );
        const { latitude, longitude } = position.coords;
        loadWeatherApp(latitude, longitude);
      },
      (error) => {
        console.error("Error getting location:", error);
        let errorMessage;
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = "User denied the request for Geolocation.";
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = "Location information is unavailable.";
            break;
          case error.TIMEOUT:
            errorMessage = "The request to get user location timed out.";
            break;
          default:
            errorMessage = "An unknown error occurred.";
            break;
        }
        updateDebugInfo(`Error getting location: ${errorMessage}`);
        alert(
          `Unable to get your location: ${errorMessage} Please check your browser settings and try again.`
        );
      },
      {
        timeout: 10000,
        maximumAge: 0,
        enableHighAccuracy: true,
      }
    );
  } else {
    console.error("Geolocation is not supported by your browser");
    updateDebugInfo("Geolocation is not supported by your browser");
    alert("Geolocation is not supported by your browser");
  }
}

function loadWeatherApp(latitude: number, longitude: number) {
  console.log("Loading weather app with coordinates:", latitude, longitude);
  updateDebugInfo(
    `Loading weather app for coordinates: ${latitude}, ${longitude}`
  );

  const weatherAppContainer = document.createElement("div");
  weatherAppContainer.id = "weatherAppContainer";
  weatherAppContainer.style.position = "fixed";
  weatherAppContainer.style.top = "0";
  weatherAppContainer.style.left = "0";
  weatherAppContainer.style.width = "100%";
  weatherAppContainer.style.height = "100%";
  weatherAppContainer.style.zIndex = "1000";
  document.body.appendChild(weatherAppContainer);

  const iframe = document.createElement("iframe");
  iframe.src = `http://localhost:3000?lat=${latitude}&lon=${longitude}`;
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";
  weatherAppContainer.appendChild(iframe);

  const closeButton = document.createElement("button");
  closeButton.textContent = "Close";
  closeButton.style.position = "absolute";
  closeButton.style.top = "10px";
  closeButton.style.right = "10px";
  closeButton.style.zIndex = "1001";
  closeButton.classList.add(
    "bg-red-500",
    "text-white",
    "px-4",
    "py-2",
    "rounded",
    "hover:bg-red-600"
  );
  closeButton.addEventListener("click", () => {
    document.body.removeChild(weatherAppContainer);
  });
  weatherAppContainer.appendChild(closeButton);
}

function handleWeatherUpdate(event: MessageEvent) {
  console.log("Received message:", event.data);
  if (event.data.type === "WEATHER_UPDATE") {
    const weatherInfo = document.getElementById("weatherInfo");
    if (weatherInfo) {
      weatherInfo.innerHTML = `
        <p>Last updated: ${new Date().toLocaleString()}</p>
        <p>Temperature: ${event.data.temperature}°C</p>
        <p>Condition: ${event.data.condition}</p>
      `;
    }
  }
}

function updateDebugInfo(message: string) {
  const debugInfo = document.getElementById("debugInfo");
  if (debugInfo) {
    debugInfo.innerHTML += `<p>${new Date().toLocaleString()}: ${message}</p>`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  createApp();
  setupEventListeners();
});

window.addEventListener("message", handleWeatherUpdate);
