const auth = require('../models/auth')
const jwt = require('jsonwebtoken')

const login = (req, res, next) => {
  if (!req.body.email || !req.body.password)
    return next({ status: 400, message: 'Terribad Request!' })

  auth.login(req.body.email, req.body.password)
    .then(user => {
      const token = jwt.sign({ id: user.id }, process.env.SECRET)
      return res.status(200).send({ token })
    }).catch(next)
}

const status = (req, res, next) => res.status(200).send({ id: req.claim.id })

const authenticated = (req, res, next) => {
  if (!req.headers.authorization)
    return next({ status: 401, message: 'Authentication Failed!' })

  const [bearer, token] = req.headers.authorization.split(' ')
  jwt.verify(token, process.env.SECRET, (err, motherload) => {

    if (err) return next({ status: 401, message: 'Unauthorized! Exterminate!' })
    req.claim = motherload
    next()
  })
}

const matchid = (req, res, next) => {
  if (parseInt(req.params.userid) !== req.claim.id)
    return next({ status: 401, message: 'Unauthorized! Exterminate!' })
  next()
}

module.exports = { login, status, authenticated, status, matchid }
