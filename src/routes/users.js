const express = require('express')
const router = express.Router({ mergeParams: true })
const ctrl = require('../controllers/users')
const review = require('../controllers/reviews')
const auth = require('../controllers/auth')

router.post('/', ctrl.create)
router.patch('/:userid/reviews/:rid', auth.authenticated, auth.matchid, review.remove)
router.delete('/:userid/reviews/:rid', auth.authenticated, auth.matchid, review.remove)

module.exports = router
