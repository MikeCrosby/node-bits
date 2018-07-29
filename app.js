const path = require('path')
const os = require('os')
const fs = require('fs')
const http = require('http')

const eventEmitter = require('events')
const emitter = new eventEmitter()

const Logger = require('./logger')
const logger = new Logger()

// fs.readdir('./', (err, files) => {
//     console.log(files)
// })

// logger.on('messageLogged', (e) => {
//     console.log('Listener called', e)
// })

// logger.log('message')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World')
        res.end()
    }

    if(req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]))
        res.end()
    }
})

server.on('connection', (socket) => {
    console.log('New Connection...')
})

server.listen(3000)

console.log('Listening on port 3000...')