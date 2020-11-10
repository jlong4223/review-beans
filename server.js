//require modules
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
//require the routes


//create the express app
const app = express()

//configure the server settings 
app.set('view engine', 'ejs')

// TODO require db config module



//mount middleware
app.use(morgan('dev'))
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))


// TODO mount routes


//tell the app to listen 
const port = 3001
app.listen(port,function(){
    console.log(`Express is now listening on port: ${port}`)
})