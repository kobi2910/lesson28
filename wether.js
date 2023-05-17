const cityName = ["London", "Jerusalem", "New York"];
const apiKey = "8e6e3c00698e07493402345ddf4c6167";

function fetchWeatherAndUpdateElement(city, elementId) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((weatherData) => {
      const temperature = (weatherData.main.temp - 273.15).toFixed(0);
      document.getElementById(elementId).innerText = temperature;
    });
}

function refreshWeather() {
  fetchWeatherAndUpdateElement(cityName[0], "London");
  fetchWeatherAndUpdateElement(cityName[1], "JRU");
  fetchWeatherAndUpdateElement(cityName[2], "NYU");
}

function refreshWeatherByCity() {
  const city = document.getElementById("citySelector").value;
  fetchWeatherAndUpdateElement(city, "CityTemp");
  document.getElementById("City").innerText = city;
}

refreshWeather()
const refreshInterval = setInterval(refreshWeather, 60 * 1000);
