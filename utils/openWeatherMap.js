const http = require('http')

const getAPIResponse = (url, callback) => {
  let jsonString = '' 
  const httpRequest = http.request(url, (response) => {
    response.on('data', (chunk) => {
      jsonString = jsonString + chunk.toString()
    })

    response.on('end', () => {
      const parsedBodyResponse = JSON.parse(jsonString)
      callback(parsedBodyResponse)
    })
  })

  httpRequest.on('error', (error) => {
    console.log('An error occurred:', error)

  })

  httpRequest.end()

}

module.exports = {
  getAPIResponse: getAPIResponse
}