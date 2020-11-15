//require modules
const express = require('express')
//create the router object
const router = express.Router()
//require the coffees controller
const coffeeCtrl = require('../controllers/coffees.js')


// TODO finish authorization
const authorization = require('../utils/authorization')


// 1. Below is the route that renders the page that has the form for new coffee
// 2. Below is the route that allows user to create a new coffee shop
// 4. Below is the route that allows user to delete
// 3.
// 5. Below is the route that shows the list that the user makes (/coffees)
router.get('/new', coffeeCtrl.new)
router.post('/', coffeeCtrl.create)
router.get('/:id', coffeeCtrl.show)
router.delete('/:id', coffeeCtrl.delete)

router.get('/', coffeeCtrl.index)



// TODO add.authorization to the route

//export the router
module.exports = router