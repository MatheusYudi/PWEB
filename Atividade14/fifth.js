const events = require('events');

const EventEmitter = events.EventEmitter;

const emitter = new EventEmitter();

emitter.on('data', function(close) {
	console.log(close);
})

setInterval(function() {
	emitter.emit('data', Date.now());
}, 500);
