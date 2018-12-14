const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))

app.use('/', require('./routes/auth'))
app.use('/users', require('./routes/users'))

app.use('/snacks', require('./routes/snacks')) // read one and all
app.use('/snacks/:id', require('./routes/reviews'))

app.use((req, res, next) => next({ status: 404, message: `Not found` }))
app.use((err, req, res, next) => {
  const error = {}
  if (process.env.NODE_ENV !== 'production' && err.stack) error.stack = err.stack
  error.status = err.status || 500
  error.message = err.message || `Internal Server Error`
  console.error(error.message)
  res.status(error.status).json(error)
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}!`))

module.exports = app
