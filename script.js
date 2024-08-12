const apiKey = "8ac20cbaf885cb7980d4d4f9c31ab55d"; // Correct API key
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

const locationInput = document.getElementById("locationInput");
const searchButton = document.getElementById("searchButton");
const locationElement = document.getElementById("location");
const temperatureElement = document.getElementById("temperature");
const descriptionElement = document.getElementById("description");

searchButton.addEventListener("click", () => {
  const location = locationInput.value; // Corrected to use .value
  if (location) {
    fetchWeatherData(location);
  } else {
    console.log("Please enter a location");
  }
});

function fetchWeatherData(location) {
  const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      locationElement.textContent = data.name;
      temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;

      descriptionElement.textContent = data.weather[0].description;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      locationElement.textContent = "Error fetching Weather data";
      temperatureElement.textContent = "";
      descriptionElement.textContent = "";
    });
}
