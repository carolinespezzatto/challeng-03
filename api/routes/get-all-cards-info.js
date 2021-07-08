const express = require ('express')
const app = express()
const axios = require('axios').default

const allCardsInfo = () => {
  return {
  method: 'GET',
  url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/info',
  headers: {
    'x-rapidapi-key': '9b74857d25mshcce84df70dc7451p160356jsna85bd6059e05',
    'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
  }}
}

app.get('/allCardsInfo', function(req, res) {
    axios.request(allCardsInfo()).then(function (response) {
        res.json(response.data)
    }).catch(function (error) {
        res.send('error')
        console.error(error)
    })
})

module.exports = app