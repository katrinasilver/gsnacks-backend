const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/snacks.js')

router.post('/', ctrl.create)
router.get('/', ctrl.readAll)
router.get('/:id', ctrl.read)
router.patch('/:id', ctrl.edit)
router.delete('/:id', ctrl.remove)

module.exports = router
