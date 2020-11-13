//require the module
const Coffee = require('../models/coffee')

//set up exports
module.exports = {
    index,
    new: newCoffee
}

function index(req, res){
    console.log(req.user)
    res.render('coffees/index')
}

function newCoffee(req, res){
    res.render('coffees/new')
}