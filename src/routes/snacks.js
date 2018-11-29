const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/snacks.js')
const auth = require('../controllers/auth')

// router.post('/', ctrl.create)
router.get('/', auth.authenticated, ctrl.readAll)
router.get('/:id', auth.authenticated, ctrl.readOne)
// router.get('/:id/reviews', ctrl.reviews)
// router.patch('/:id', ctrl.edit)
// router.delete('/:id', ctrl.remove)

module.exports = router
