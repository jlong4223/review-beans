//require the module
const Coffee = require('../models/coffee')

//set up exports
module.exports = {
    index,
}

function index(req, res){
    res.render('coffees/index')
}