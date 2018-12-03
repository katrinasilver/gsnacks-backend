const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/snacks.js')
const auth = require('../controllers/auth')

router.get('/', auth.authenticated, ctrl.readAll)
router.get('/:id', auth.authenticated, ctrl.readOne)

module.exports = router
