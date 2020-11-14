//require modules
const express = require('express')
// TODO finish authorization
const authorization = require('../utils/authorization')

//create the router object
const router = express.Router()

//require the coffees controller
const coffeeCtrl = require('../controllers/coffees.js')


// Below is the route that renders the page that has the form for new coffee
router.get('/new', coffeeCtrl.new)

// Below is the route that allows user to create a new coffee shop
router.post('/', coffeeCtrl.create)

// Below is the route that shows the list that the user makes (/coffees)
router.get('/', coffeeCtrl.index)

// TODO add.authorization to the route

//export the router
module.exports = router