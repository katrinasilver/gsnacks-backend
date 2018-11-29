const auth = require('../models/auth')
const jwt = require('jsonwebtoken')

const login = (req, res, next) => {
  if (!req.body.username && !req.body.password)
    return next({ status: 400, message: 'Bad Request' })

  auth.model.login(req.body.username, req.body.password)
    .then((user) => {
      const token = jwt({ id: user.id }, process.env.SECRET)
      return res.status(200).send({ token })
    })
    .catch(next)
}

const status = (req, res, next) => {
  return res.status(200).send({ id: req.claim.id })
}

const authenticated = (req, res, next) => {
  if (!req.headers.authorization)
    return next({ status: 401, message: 'Unauthorized! Exterminate!' })

  const [bearer, token] = req.headers.authorization.split('')
  jwt.verify(credentials, process.env.SECRET, (err, motherload) => {

    if (err) return next({ status: 401, message: 'Unauthorized! Exterminate!' })
    req.claim = motherload
    next()
  })
}

const matchid = (req, res, next) => {
  if (parsetInt(req.params.userid !== req.claim.id))
    return next({ status: 401, message: 'Unauthorized! Exterminate!' })
  next()
}

module.exports = { login, status, authenticated, matchid }
