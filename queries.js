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

  pool.query('INSERT INTO data_test (date, name, amount, distance) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${results.rows[0].id}`)
  })
}