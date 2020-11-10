//set up the module.export so we can export the functions from this file to create the home page

module.exports = {
    index
}

//define the index function
function index(req, res){
    res.render('index')
}