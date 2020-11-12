const express = require('express')
const router = express.Router()
const authCtrl = require('../controllers/auth')

router.get('/new', authCtrl.new)

module.exports = router