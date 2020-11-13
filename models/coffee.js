//require modules
const mongoose = require('mongoose')

//set up shortcut variables
const Schema = mongoose.Schema

// TODO set up the sub schema 


// Initialize the coffee Schema
const coffeeSchema = new Schema({
    name: {
        type: String
    }, }, 
        { timestamps: true
    })


//export the schemas
module.exports = mongoose.model('Coffee', coffeeSchema)