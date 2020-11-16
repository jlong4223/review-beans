//require the module
const coffee = require('../models/coffee')
const Coffee = require('../models/coffee')

//set up exports
module.exports = {
    index,
    new: newCoffee, 
    create, 
    delete: deleteCoffee, 
    show, 
    update, 
    edit
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


function deleteCoffee(req, res){
    Coffee.findById(req.params.id, function(err, coffee){
        // const coffeeMainDoc = coffee.id(req.params.id)
        coffee.remove()
        coffee.save(function(err){
            res.redirect('/coffees')
        })
    })
}

function show(req, res){
    Coffee.findById(req.params.id, function(err, coffee){
        res.render('coffees/show', {
            coffee
        })
    })
}

// TODO figure out the edit thing too
function update(req, res) {
    Coffee.findById(req.params.id, function(err, coffee){
        res.redirect('/coffees')
    })
  }

function edit(req, res) {
    Coffee.findById(req.params.id, function(err, coffee){
    res.render('coffees/edit', {
        coffee
    })
  })
}