const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

//Register a listener
logger.on('messageLogged', (arg) => { // e
  console.log('Listener called', arg)
});

logger.log('message');
