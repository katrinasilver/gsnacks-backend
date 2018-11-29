const db = require('../../db')
const bcrypt = require('bcrypt')
const users = require('./users')

const login = (username, password) => {
  let user
  return users.getUser(username)
    .then(data => {
      if (!data) throw { status: 400, message: 'Terribad Request!'}
      user = data
      return bcrypt.compare(password, data.password)
    })
    .then(status => {
      if (!status) throw { status: 401, message: 'Unauthorized! Exterminate!' }
      delete user.password
      return user
    })
}

module.exports = { login }
