
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

//import libraries
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const indexRouter = require('./routes/index')
//sets view engine
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.set('layout', 'layouts/layout')

app.use(expressLayouts)
//where stylesheets are located
app.use(express.static('public'))

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true })
    const db = mongoose.connection
    db.on('error', error => console.error(error))
    db.once('open', () => console.log('Connected to Mongoose'))

app.use('/', indexRouter)

app.listen(process.env.PORT || 3001)
