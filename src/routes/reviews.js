const express = require('express')
const router = express.Router({ mergeParams: true})
const ctrl = require('../controllers/reviews.js')

router.post('/reviews', ctrl.create)
router.get('/reviews', ctrl.readAll)
router.patch('/reviews/:rid', ctrl.edit)
router.delete('/reviews/:rid', ctrl.remove)

module.exports = router
