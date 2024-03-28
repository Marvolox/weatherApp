const apiKey = 'c2cfd98bd9856403c4c0ca86c67acaec';
const weatherInfo = document.getElementById('weather-info');
const cityInput = document.getElementById('city-input');
const getWeatherBtn = document.getElementById('get-weather-btn'); // Get the button

async function getWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        const data = await response.json();
        const { main, weather } = data;
        const temperature = main.temp;
        const description = weather[0].description;
        const icon = weather[0].icon;

        console.log(city)

        weatherInfo.innerHTML = `
            <h2>${city}</h2>
            <p>Temperature: ${temperature}°C</p>
            <p>${description}</p>
            <img src="http://openweathermap.org/img/w/${icon}.png" alt="Weather icon" id="weather-icon">
        `;
    } catch (error) {
        weatherInfo.innerHTML = '<p>City not found. Please try again.</p>';
    }
}

getWeatherBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        getWeather(city);
    }
});


// cityInput.addEventListener('keyup', (event) => {
//     if (event.key === 'Enter') {
//         const city = cityInput.value.trim();
//         if (city) {
//             getWeather(city);
//         }
//     }
// });
