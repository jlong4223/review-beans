//set up the module.export so we can export the functions from this file to create the home page

module.exports = {
    index
}

//define the index function
function index(req, res){
    console.log("req.user inside index controller:" , req.user)
    res.render('index')
}