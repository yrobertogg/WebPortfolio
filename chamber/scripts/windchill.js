// Get the inputs values
// const tempSpot = document.querySelector('#tempertureInput');

// const windSpeedSpot = document.querySelector('#windSpeedInput')

// const resultSpot = document.querySelector('#windChillResult')


// Get the button spot
// const resultBtn = document.querySelector('#resultBtn');
// const clearBtn = document.querySelector('#clearButton');

// Create the fuction for the button
// resultBtn.addEventListener('click', function(){
   
//     const temp = tempSpot.value;
    
//     const t = parseFloat(temp);
  

//     const speed = windSpeedSpot.value;
    
//     const s = parseFloat(speed);

//     if (t <= 50 && s > 3){
//         const resultOp = 
//         35.74 + 
//         0.6215 * t - 
//         35.75 * s ** 0.16 + 
//         0.4275 * t * s ** 0.16;
//         const result2Positions = resultOp.toFixed(2);
//         resultSpot.innerHTML = `${result2Positions}°F`;
//     } else{
//         resultSpot.innerHTML = 'N/A'
//     }
// });
// clearBtn.addEventListener('click', function(){

//     tempSpot.value = '';
//     windSpeedSpot.value = '';
//     resultSpot.innerHTML = '';
// });
const currentTemp = document.querySelector('.tempertureLabel');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const wSpeedValue = document.querySelector('.windSpeedValue');
const wChillValue = document.querySelector('#windChillResult');
const latitude = 40.7752251;
const longitude = -112.0303688



// vatiable to store the Api's URL
const myKeyApi = '621eeac52c4b6abc9e66f3260dcd872a';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${myKeyApi}`;

// asynchronous function to use fetch()
async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        displayResults(data);
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
    const windSpeed = weatherData.wind.speed;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    wSpeedValue.textContent = `${windSpeed} mph`;

    const temp = weatherData.main.temp;
    
    const t = parseFloat(temp);

  

    const speed = weatherData.wind.speed;
    
    const s = parseFloat(speed);

    if (t <= 50 && s > 3){
        const resultOp = 
        35.74 + 
        0.6215 * t - 
        35.75 * s ** 0.16 + 
        0.4275 * t * s ** 0.16;
        const result0Positions = resultOp.toFixed(0);
        wChillValue.textContent = `${result0Positions}°F`;
    } else{
        wChillValue.textContent = 'N/A'
    } 
  };
