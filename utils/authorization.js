// require the user model
const User = require('../models/user')


module.exports = {
    addUserToRequest,
    isAuthenticated
}

//a function to add the user to a property called user on the request object
function addUserToRequest(req, res, next){
    //check if user is added to request
    if(req.user) return next(); // req.user already added!
    if(req.session && req.session.userID) {
       User.findById(req.session.userID, function(err, foundUser){
           req.user = foundUser;
        //    console.log(req.user)
           next(); 
       })
    } else{
        next();
    }
}

// a function to check if a user is authenticated

function isAuthenticated(req, res, next){
    if(req.user !== undefined) return next();
    res.redirect('/login')
}
