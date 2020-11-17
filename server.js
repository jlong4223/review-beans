//require modules
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const session = require('express-session')
require('dotenv').config()
const authorization = require('./utils/authorization')

//require the routes
const indexRouter = require('./routes/index')
const authRouter = require('./routes/auth')
const coffeeRouter = require('./routes/coffees')
const detailsRouter = require('./routes/details')



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
app.use(session({
    secret: 'supersecret',
    resave: false, 
    saveUninitialized: false
}))

//mount authorization
app.use(authorization.addUserToRequest)


// mount routes
app.use('/', indexRouter)
app.use('/auth', authRouter)
app.use('/coffees', coffeeRouter)
app.use('/', detailsRouter)




//tell the app to listen 
const port = process.env.PORT || 3001
app.listen(port,function(){
    console.log(`Express is now listening on port: ${port}`)
})