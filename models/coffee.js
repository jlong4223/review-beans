//require modules
const mongoose = require('mongoose')
// TODO figure out how to connect the username to the review
const name = require('./user')

//set up shortcut variables
const Schema = mongoose.Schema

// TODO figure out how to connect username to review
const reviewSchema = new Schema({
    // name: [userSchema], 
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
    },
}, {
    timestamps: true
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
}, {
    timestamps: true
})


module.exports = mongoose.model('Coffee', coffeeSchema)
