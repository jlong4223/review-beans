//require modules
const express = require('express')

const authorization = require('../utils/authorization')

//create the router object
const router = express.Router()

//require the coffees controller TODO make one
const coffeeCtrl = require('../controllers/coffees.js')


    // TODO define the route for GET requests
router.get('/new', coffeeCtrl.new)

    // TODO define the route for creaing a coffee post

// TODO define the route to display list of coffees
router.get('/', coffeeCtrl.index)

// TODO add.authorization to the route

//export the router
module.exports = router