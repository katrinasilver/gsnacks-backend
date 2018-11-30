const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/users')
const review = require('../controllers/reviews')
const auth = require('../controllers/auth')

router.post('/', ctrl.create)
// need to create a get all reviews by user
router.delete('/:userid/reviews/:rid', auth.authenticated, auth.matchid, review.remove)

module.exports = router
