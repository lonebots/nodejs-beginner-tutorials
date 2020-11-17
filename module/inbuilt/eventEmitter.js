//events is an inbuilt node module
var events = require('events');

//creating custom events
//EventEmitter() is inbult and the custom myEmitter  is linked to it
var myEmitter = new events.EventEmitter();

//similar to jquerry
//when the event occurs the custom call back function is triggered
myEmitter.on('someEvent', (msg) => {
    console.log(msg);
})

//calling myEmitter
myEmitter.emit('someEvent', 'the event was emitted');