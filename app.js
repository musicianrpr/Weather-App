const request = require('request')
const apiResponse = require('./utils/openWeatherMap')

const address = 'California'

const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + encodeURIComponent(address) + '&appid=ddd4a84337f2edeb21fcd0c147348ae1'

apiResponse.apiResponse(url, (error, response) => {
  if (error) {
    console.log('Unable to reach the weather services!')
    return
  }
  if (response.cod === '404') {
    console.log('Type a valid city!')
  } else {
    const kelvinToCelsius = (temp) => temp - 270
    console.log(`It's ${kelvinToCelsius(response.main.temp).toFixed(1)}°C`)
  }
})
