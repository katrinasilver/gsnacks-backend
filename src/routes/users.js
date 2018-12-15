const express = require('express')
const router = express.Router({ mergeParams : true})
const ctrl = require('../controllers/users')

router.post('/signup', ctrl.create)
// router.get('/', ctrl.get)
router.get('/:uid', ctrl.getOne)
router.use('/:uid/snacks', require('./snacks'))

module.exports = router
