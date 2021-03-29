const request = require('request')

const getAPIResponse = (url, callback) => {
  request({ url:url }, (error, response) => {
    const parsedBodyResponse = JSON.parse(response.body)
    callback(error, parsedBodyResponse)
  })
}

module.exports = {
  getAPIResponse: getAPIResponse
}