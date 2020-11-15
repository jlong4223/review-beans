//require modules
const mongoose = require('mongoose')
// TODO figure out how to connect the username to the review
const username = require('./user')

//set up shortcut variables
const Schema = mongoose.Schema

// TODO set up the sub schema 
const reviewSchema = new Schema({
    // username: [userSchema], 
    review: {
        type: String
    }, 
    rating: {
        type: Number,
        min: 1, 
        max: 5, 
        default: 5
    }, 
    again: {
        type: String
    }
})

// Initialize the coffee Schema
const coffeeSchema = new Schema({
    shop: {
        type: String
    },
    location: {
        type: String
    },  
    coffeetype: {
        type: String
    }, 
    details: [reviewSchema],
    }, 
        { timestamps: true
    })


//export the schemas
module.exports = mongoose.model('Coffee', coffeeSchema)