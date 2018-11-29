const db = require('../../db')

const getOne = (id) => db('snacks').where({ id: id }).first()

const getAll = (limit) =>
  !limit || limit === '0' ? db('snacks') : db('snacks').limit(limit)

// const create = (name, img, price, description) => {
//   return (
//     db('snacks')
//       .insert({ name, img, price, description })
//       .returning('*')
//       .then(([ data ]) => data)
//   )
// }

// const edit = (id, name, img, price, description ) => {
//   return (
//     db('snacks')
//       .update({ name, img, price, description })
//       .where({ id: id })
//       .returning('*')
//       .then(([ data ]) => data)
//   )
// }

// const remove = (id) => {
//   return (
//     db('snacks')
//       .del()
//       .where({ id: id })
//       .returning('*')
//       .then(([ data ]) => {
//         delete data.id
//         return data
//       })
//   )
// }

module.exports = { getOne, getAll }
