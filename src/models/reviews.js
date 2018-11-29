const db = require('../../db')

const getAll = (id) => db('reviews').where({snack_id : id})

const getOne = (id) => db('reviews').where({ snack_id: id }).first()

const create = (title, rating, comment, account_id, snack_id) => {
  return (
    db('reviews')
      .insert({ title, rating, comment, account_id, snack_id })
      .returning('*')
      .then(([data]) => data)
  )
}

const edit = (title, rating, comment, account_id, snack_id) => {
  return (
    db('reviews')
      .update({ title, rating, comment, account_id, snack_id })
      .where({ id: id })
      .returning('*')
      .then(([data]) => data)
  )
}

const remove = (id) => {
  return (
    db('reviews')
      .del()
      .where({ id: id })
      .returning('*')
      .then(([data]) => {
        delete data.id
        return data
      })
  )
}

module.exports = { getOne, getAll, create, edit, remove }
