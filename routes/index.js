//require the modules
const express = require('express')

//create the router object
const router = express.Router()

//require the controller module to map requests
const indexCtrl = require ('../controllers/index')

//define our routes '/' to produce home page
router.get('/', indexCtrl.index)

//export the router
module.exports = router