const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/auth')

// login routes
router.get('/login', ctrl.authenticated, ctrl.status)
router.post('/login', ctrl.login)

module.exports = router
