const User = require("../models/user")
const bcrypt = require('bcrypt')

module.exports = {
    new: newUser,
    signup, 
    newLogin, 
    login
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

function newLogin(req, res){
    res.render('auth/login')
}

function login(req, res){
    User.findOne({
        username: req.body.username
    }, function (error, foundUser){
        // res.send(foundUser)
        if (foundUser === null){
            res.redirect('/auth/login')
        } else {
            const doesPasswordMatch = bcrypt.compareSync(req.body.password, foundUser.password); 
            if (doesPasswordMatch){
                req.session.userID = foundUser._id;
                console.log(req.session)
                res.redirect('/coffees')
            } else {
                res.redirect('/auth/login')
            }
        }
    })
}