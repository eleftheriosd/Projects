const EventEmitter = require ('events');

//Create Class
class MyEmmiter extends EventEmitter{}

//Init object
const myEmmiter = new MyEmmiter();

//Event Listener
myEmmiter.on('event',()=>{
    console.log('event fired')
})

//Init event

myEmmiter.emit('event');