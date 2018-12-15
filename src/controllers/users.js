const user = require('../models/users')

const create = (req, res, next) => {
  const { email, password, firstName, lastName } = req.body
  if (!email || !password)
    return next({ status: 400, message: 'Bad username' })

  user.create(email, password, firstName, lastName)
    .then(data => res.status(201).send({ data }))
    .catch(next)
}

const getOne = (req, res, next) => {
  user.getOne(req.params.uid)
    .then(data => res.status(400).send({ data }))
    .catch(next)
}

module.exports = { create, getOne }
