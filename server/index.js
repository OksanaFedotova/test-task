const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 8080

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/cities', db.getCities)
app.get('/cities/:id', db.getCityById)
app.post('/cities', db.createCity)
app.put('/cities/:id', db.updateCity)
app.delete('/cities/:id', db.deleteCity)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})