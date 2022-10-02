const Pool = require('pg').Pool
const pool = new Pool({
  user: 'oksanafedotova',
  host: 'localhost',
  database: 'cities',
  password: 'password',
  port: 5432,
});
const getCities = (request, response) => {
  pool.query('SELECT * FROM data_test ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getCityById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM data_test WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const createCity = (request, response) => {
  const { date, name, amount, distance } = request.body
  pool.query('INSERT INTO data_test (date, name, amount, distance) VALUES ($1, $2, $3, $4) RETURNING *', [date, name, amount, distance], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`City added with ID: ${results.rows[0].id}`)
  })
}
const updateCity = (request, response) => {
  const id = parseInt(request.params.id)
  const { date, name, amount, distance } = request.body
  pool.query(
    'UPDATE data_test SET date = $1, name = $2, amount = $3, distance = $4 WHERE id = $5',
    [date, name, amount, distance, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`City modified with ID: ${id}`)
    }
  )
}
const deleteCity = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM data_test WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`City deleted with ID: ${id}`)
  })
}
module.exports = {
  getCities,
  getCityById,
  createCity,
  updateCity,
  deleteCity
}