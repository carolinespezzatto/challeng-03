const express = require ('express')
const app = express()
const axios = require('axios').default

const raceFilter =(races) => {
  return {
  method: 'GET',
  url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/races/' + races,
  headers: {
    'x-rapidapi-key': '9b74857d25mshcce84df70dc7451p160356jsna85bd6059e05',
    'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
  }}
}

app.get('/raceFilter/:races', function(req, res) {
    const races = req.params.races
    axios.request(raceFilter(races)).then(function (response) {
      const pageSize = req.query.pageSize
      res.json(response.data.slice(0, pageSize))
    }).catch(function (error) {
      res.send('error')
      console.error(error)
    })
})

module.exports = app