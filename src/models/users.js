const db = require('../../db')
const bcrypt = require('bcrypt')

// For Authentication
const getUser = (email) => db('accounts').where({ email }).first()

const create = (email, password, firstName, lastName) => {
  return getUser(email)
    .then(data => {
      if (data) throw { status: 400, message: 'Email already exists' }
      return bcrypt.hash(password, 10)
    })
    .then(hashword => db('accounts').insert({ email, password: hashword, firstName, lastName }).returning('*'))
    .then(([data]) => {
      delete data.password
      return data
  })
}

// For Account Greeting
const getOne = (uid) => db('accounts').where({ id: uid }).returning('*')

module.exports = { create, getUser, getOne }
