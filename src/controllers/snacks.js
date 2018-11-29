const model = require('../models/snacks')

const read = (req, res, next) => {
  model.get(req.params.id)
    .then(data => {
      if (data) return res.status(200).json(data)
      else throw next()
  }).catch(next)
}

const readAll = (req, res, next) => {
  const limit = req.query.limit
  model.getAll(limit)
    .then(data => {
      if (data) return res.status(200).json(data)
      else throw next()
    }).catch(next)
}

const create = (req, res, next) => {
  if (!req.body.title || !req.body.url || !req.body.rating || !req.body.review)
    return next({ status: 400, message: `new entries must have all fields` })

  model.create(req.body.title, req.body.url, req.body.rating, req.body.review)
    .then(data => res.status(201).json(data)).catch(next)
}

const edit = (req, res, next) => {
  if (!req.body) return next({ status: 400, message: `edit failed. request is empty` })

  model.edit(req.params.id, req.body.title, req.body.url, req.body.rating, req.body.review)
    .then(data => res.status(200).json(data)).catch(next)
}

const remove = (req, res, next) => {
  model.remove(req.params.id)
    .then(data => res.status(200).json(data)).catch(next)
}

module.exports = { read, readAll, create, edit, remove }
