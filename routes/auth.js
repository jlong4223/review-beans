const express = require('express')
const router = express.Router()
const authCtrl = require('../controllers/auth')

router.get('/new', authCtrl.new)
router.post('/signup', authCtrl.signup)

module.exports = router