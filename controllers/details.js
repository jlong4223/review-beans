const coffee = require('../models/coffee')
const Details = require('../models/coffee')

module.exports = {
    create
}

function create(req, res){
    Details.findById(req.params.id, function(err, coffee){
        coffee.details.push(req.body)
        console.log(coffee.details)
        coffee.save(function(err){
            res.redirect(`/coffees/${coffee._id}`)
        })
    })
}