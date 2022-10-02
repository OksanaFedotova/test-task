const express = require('express');
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 8080;
const app = express();
app.get('/', (request, response) => {
  response.send('Node.js')
})
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`)
})

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)