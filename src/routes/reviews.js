const express = require('express')
const router = express.Router({ mergeParams: true})
const ctrl = require('../controllers/reviews')
const auth = require('../controllers/auth')

router.get('/reviews', auth.authenticated, ctrl.readAll)
router.post('/user/:userid/review', auth.authenticated, auth.matchid, ctrl.create)
router.patch('/user/:userid/review/:rid', auth.authenticated, auth.matchid, ctrl.edit)
router.delete('/user/:userid/review/:rid', auth.authenticated, auth.matchid, ctrl.remove)

module.exports = router
