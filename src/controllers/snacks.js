const model = require('../models/snacks')

const readOne = (req, res, next) => {
  model.getOne(req.params.id)
    .then(data => {
      if (data) return res.status(200).send(data)
      else throw next()
  }).catch(next)
}

const readAll = (req, res, next) => {
  const limit = req.query.limit
  model.getAll(limit)
    .then(data => {
      if (data) return res.status(200).send(data)
      else throw next()
    }).catch(next)
}

module.exports = { readOne, readAll }
