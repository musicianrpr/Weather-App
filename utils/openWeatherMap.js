const request = require('request')

const apiResponse = (url, callback) => {
  request({ url:url }, (error, response) => {
    const parsedBodyResponse = JSON.parse(response.body)
    callback(error, parsedBodyResponse)
  })
  request(url)
}

module.exports = {
  apiResponse: apiResponse
}
