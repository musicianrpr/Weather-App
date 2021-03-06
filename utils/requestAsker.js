const apiResponse = require('./openWeatherMap')

const sender = apiResponse.getAPIResponse

const getURL = (address) => 'http://api.openweathermap.org/data/2.5/weather?q=' + encodeURIComponent(address) + `&appid=${process.env.WEATHER_API_KEY}`

const getWeather = (address, info) => {
  sender(getURL(address), (response) => {
    if (info === 'temp') {

      const temperatureInCelsius = response.main.temp - 270
      console.log(`It's ${temperatureInCelsius.toFixed(1)}°C`)

    } else if (info === 'humidity') {

      console.log(`It's ${response.main.humidity}% humidity in the air`)

    } else if (info === 'windSpeed') {

      console.log(`It's ${response.wind.speed} m/s`)

    } else if (info === 'weather') {

      console.log(`It's ${response.weather[0].main}`)

    }
  })
}

module.exports = {
  getWeather: getWeather
}