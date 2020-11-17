const User = require("../models/user")
const bcrypt = require('bcrypt')

module.exports = {
    new: newUser,
    signup, 
    newLogin, 
    login, 
    authenticate
}

function newUser(req, res){
    res.render('auth/new')
}

function signup(req, res){
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    User.create(req.body, function(error, newUser){
        console.log(newUser)
        res.redirect('/')
    });
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

function authenticate(req, res) {
    User.findOne({
        username: req.body.username
    }, function (error, foundUser) {
        if (foundUser === null) {
            req.session.error = 'Account not found. ';
            res.redirect('/login');   
        }
        else {
            const passwordMatch = bcrypt.compareSync(req.body.password, foundUser.password);
            if (passwordMatch) {
                delete req.session.error;
                req.session.userId = foundUser._id;
                res.redirect('/');
            }
            else {
                req.session.error = 'Incorrect username or password. ';
                res.redirect('/login');
            }
        }
    })
}