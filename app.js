const request = require('request')
const apiResponse = require('./utils/openWeatherMap')
const yargs = require('yargs')
const req = require('./utils/requestAsker')


yargs.command({
  command: 'temp',
  describe: 'Gets city temperature',
  builder: {
    city: {
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    req.getWeather(argv.city, 'temp')
  }
})

yargs.command({
  command: 'humidity',
  describe: 'Gets city humidity',
  builder: {
    city: {
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    req.getWeather(argv.city, 'humidity')
  }
})

yargs.command({
  command: 'windSpeed',
  describe: 'Gets city wind speed',
  builder: {
    city: {
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    req.getWeather(argv.city, 'windSpeed')
  }
})

yargs.command({
  command: 'weather',
  describe: 'Gets city weather',
  builder: {
    city: {
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    req.getWeather(argv.city, 'weather')
  }
})


yargs.parse()