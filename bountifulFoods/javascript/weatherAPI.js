// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const currentWindSpeed = document.querySelector('#speed');
const currentWindChill = document.querySelector('#chill');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=34.953&lon=-120.436&appid=8dd2390085f7c85879f8a6beada0da1f&units=imperial';

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch();

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    currentWindSpeed.innerHTML = `${weatherData.wind.speed.toFixed(0)}`;
    currentWindChill.innerHTML = `${weatherData.main.feels_like.toFixed(0)}`;
    
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}