const startupDebugger = require('debug')('app:startup')
const dbDebugger = require('debug')('app:db')
const config = require('config')
const morgan = require ('morgan')
const helmet = require('helmet')
const logger = require('./middleware/logger')
const courses = require('./routes/courses')
const home = require('./routes/home')
const express = require('express')
const app = express()

app.set('view engine', 'pug')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(helmet())
app.use('/api/courses', courses)
app.use('/', home)

// configuration
console.log(`Application Name: ${ config.get('name')}`)
console.log(`Mail Server Name: ${ config.get('mail.host')}`)
console.log(`Mail Password: ${ config.get('mail.password')}`)

if (app.get('env') === 'development') {
    app.use(morgan('tiny'))
    startupDebugger('morgan enabled...')
}

app.use(logger)

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}`))