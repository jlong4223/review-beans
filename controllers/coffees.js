//require the module
const Coffee = require('../models/coffee')

//set up exports
module.exports = {
    index,
    new: newCoffee, 
    create
}

function index(req, res){
    // console.log(req.user)
    Coffee.find({}, function(err, coffees){
        res.render('coffees/index', {
            coffees
        })
    })
}

function newCoffee(req, res){
    res.render('coffees/new')
}

function create(req, res){
    const coffee = new Coffee(req.body)
    coffee.save(function(err){
        console.log(coffee)
        res.redirect('/coffees')
    })
}