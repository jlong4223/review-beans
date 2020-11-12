const User = require("../models/user")
const bcrypt = require('bcrypt')

module.exports = {
    new: newUser,
    signup
}

function newUser(req, res){
    res.render('auth/new')
}

function signup(req, res){
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    User.create(req.body, function(error, newUser){
        console.log(newUser)
        res.redirect('/')
        // res.send(req.body)
    })
}