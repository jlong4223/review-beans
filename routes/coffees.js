//require modules
const express = require('express')

//create the router object
const router = express.Router()

//require the coffees controller TODO make one
const coffeeCtrl = require('../controllers/coffees.js')


    // TODO define the route for GET requests
// router.get('/new', coffeeCtrl.new)

    // TODO define the route for creaing a coffee post

// TODO define the route to display list of coffees
router.get('/', coffeeCtrl.index)


//export the router
module.exports = router