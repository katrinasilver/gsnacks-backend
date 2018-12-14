const express = require('express')
const router = express.Router({ mergeParams: true})
const ctrl = require('../controllers/snacks')
const auth = require('../controllers/auth')

router.get('/', ctrl.readAll)
router.get('/:id', ctrl.readOne)
router.use('/:id', require('./reviews'))

module.exports = router
