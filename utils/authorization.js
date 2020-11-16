// require the user model
const User = require('../models/user')


module.exports = {
    addUserToRequest,
    isAuthenticated
}

//a function to add the user to a property called user on the request object
function addUserToRequest(req, res, next){
    //TODO check if user is added to request
    // if(req.user) return next(); // req.user already added!
    
    if(req.session && req.session.userId) {
       User.findById(req.session.userId, function(err, foundUser){
           req.user = foundUser;
           console.log(req.user)
           next(); 
       })
    } else{
        next();
    }
}

// a function to check if a user is authenticated

function isAuthenticated(req, res, next){
    if(req.user) return next()
}

//find out where req.user is being defined in exprestagram and change it here