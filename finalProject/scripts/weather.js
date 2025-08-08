// Variable needed
const currentTemp = document.querySelector('.tempertureValue');
const weatherIcon = document.querySelector('.weatherImg');
const captionDesc = document.querySelector('figcaption');
const humidityValue = document.querySelector('.humidityValue');
const latitude = 33.1235514;
const longitude = -117.3209921

// variable to store the Api's URL
const myKeyApi = '621eeac52c4b6abc9e66f3260dcd872a';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${myKeyApi}`;


// asynchronous function to use fetch()
async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        displayResults(data);
        console.log(data)
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  // calling the fuction apiFetch().
  apiFetch();

  function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}°F </strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    const humidity = weatherData.main.humidity;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    humidityValue.textContent = `Humidity: ${humidity}%`;
};