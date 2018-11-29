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

// const review = (req, res, next) => {
//   model.getReviews(req.params.rid)
//     .then(data => {
//       if (!data) throw { status: 400, message: 'Terribad Request!' }
//       else return res.status(200).json(data)
//     }).catch(next)
// }

// const create = (req, res, next) => {
//   if (!req.body.name || !req.body.img || !req.body.price || !req.body.description || !req.body.isPerishable)
//     return next({ status: 400, message: `new entries must have all fields` })

//   model.create(req.body.name, req.body.img, req.body.price, req.body.description)
//     .then(data => res.status(201).json(data)).catch(next)
// }

// const edit = (req, res, next) => {
//   if (!req.body) return next({ status: 400, message: `edit failed. request is empty` })

//   model.edit(req.params.rid, req.body.name, req.body.img, req.body.price, req.body.description, req.body.isPerishable)
//     .then(data => res.status(200).json(data)).catch(next)
// }

// const remove = (req, res, next) => {
//   model.remove(req.params.rid)
//     .then(data => res.status(200).json(data)).catch(next)
// }

module.exports = { readOne, readAll }
