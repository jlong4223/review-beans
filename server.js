//require modules
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
//require the routes
const indexRouter = require('./routes/index')

//create the express app
const app = express()

//configure the server settings 
app.set('view engine', 'ejs')

//require db config module
require('./config/database')


//mount middleware
app.use(morgan('dev'))
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))


// TODO mount routes
app.use('/', indexRouter)

//tell the app to listen 
const port = 3001
app.listen(port,function(){
    console.log(`Express is now listening on port: ${port}`)
})