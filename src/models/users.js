const db = require('../../db')
const bcrypt = require('bcrypt')

const getUser = (email) => db('accounts').where({ email }).first()

const create = (email, password) => {
  return getUser(email)
    .then(data => {
      if (data) throw { status: 400, message: 'Email already exists' }
      return bcrypt.hash(password, 10)
    })
    .then(hashword => db('accounts').insert({ email, password: hashword }).returning('*'))
    .then(([data]) => {
      delete data.password
      return data
  })
}

module.exports = { create, getUser }
