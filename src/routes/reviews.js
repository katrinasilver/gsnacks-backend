const express = require('express')
const router = express.Router({ mergeParams: true})
const ctrl = require('../controllers/reviews')
const auth = require('../controllers/auth')

router.get('/reviews', ctrl.readAll)

// user routes
router.post('/reviews', auth.authenticated, auth.matchid, ctrl.create)
router.patch('/reviews/:rid', auth.authenticated, auth.matchid, ctrl.edit)
router.delete('/reviews/:rid', auth.authenticated, auth.matchid, ctrl.remove)

module.exports = router
