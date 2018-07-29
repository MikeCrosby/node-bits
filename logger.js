const EventEmitter = require('events')

const url = 'http://mylogger.io/log'

class Logger extends EventEmitter {
    log (message) {
        this.emit('messageLogged', { data: message })
    }
}

module.exports = Logger