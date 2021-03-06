const model = require('../models/reviews')

const readOne = (req, res, next) => {
  model.getOne(req.params.id, req.params.rid)
    .then(data => {
      if (data) return res.status(200).send(data)
      else throw next()
    }).catch(next)
}

const readAll = (req, res, next) => {
    model.getAll(req.params.id)
    .then(data => {
      if (data) return res.status(200).send(data)
      else throw next()
    }).catch(next)
}

const create = (req, res, next) => {
  const {title, rating, comment} = req.body
  const {uid, id} = req.params
  if (!title && !rating && !comment)
    return next({ status: 400, message: `new entries must have all fields` })

  model.create(title, rating, comment, uid, id)
    .then(data => res.status(201).send(data)).catch(next)
}

const edit = (req, res, next) => {
  const {title, rating, comment} = req.body
  const {uid, id, rid} = req.params
  if (!req.body.title || !req.body.rating || !req.body.comment)
    return next({ status: 400, message: `edit failed. request is empty` })

  model.edit(title, rating, comment, uid, id, rid)
    .then(data => res.status(200).send(data)).catch(next)
}

const readOneReview = (req, res, next) => {
  const { uid, id, rid } = req.params
  model.readOneReview(uid, id, rid)
    .then(data => {
      if (data) return res.status(200).send(data)
      else throw next()
    }).catch(next)
}

const remove = (req, res, next) => {
  const {uid, id, rid} = req.params
  model.remove(uid, id, rid)
    .then(data => res.status(200).send(data)).catch(next)
}

module.exports = { readOne, readAll, create, edit, readOneReview, remove }
