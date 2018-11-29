const express = require('express')
const router = express.Router({ mergeParams: true})
const ctrl = require('../controllers/reviews.js')
const auth = require('../controllers/auth')

router.post('/reviews/:userid', auth.authenticated, auth.matchid, ctrl.create)
router.get('/reviews', auth.authenticated, ctrl.readAll)
router.get('/reviews/:rid', auth.authenticated, ctrl.readOne)
router.patch('/reviews/:userid/:rid', auth.authenticated, auth.matchid, ctrl.edit)
router.delete('/reviews/:userid/:rid', auth.authenticated, auth.matchid, ctrl.remove)

module.exports = router
