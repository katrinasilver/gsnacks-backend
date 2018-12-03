const db = require('../../db')

const getOne = (id) => db('snacks').where({ id: id }).first()

const getAll = (limit) =>
  !limit || limit === '0' ? db('snacks') : db('snacks').limit(limit)

module.exports = { getOne, getAll }
