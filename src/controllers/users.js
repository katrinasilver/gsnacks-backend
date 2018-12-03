const user = require('../models/users')

const create = (req, res, next) => {
  if (!req.body.email && !req.body.password)
    return next({ status: 400, message: 'Bad username' })

  user.create(req.body.email, req.body.password)
    .then(data => res.status(201).send({ data }))
    .catch(next)
}

module.exports = { create }
