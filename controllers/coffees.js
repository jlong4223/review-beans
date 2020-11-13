//require the module
const Coffee = require('../models/coffee')

//set up exports
module.exports = {
    index,
}

function index(req, res){
    console.log(req.user)
    res.render('coffees/index')
}