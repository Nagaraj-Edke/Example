var event = require('events')
var emitter = new event.EventEmitter();

var listner1 =(data) =>{
    console.log("Hello I am first listner",data);
}

var listner2 =() =>{
    console.log("Iam from second listner");
}

function list(){
    console.log("Good");
}


emitter.addListener('listen',listner1)

emitter.on('listen',listner2);
emitter.once('listen',list);

var list = emitter.listeners('listen')
var num = emitter.listenerCount('listen');
console.log(num);

emitter.emit('listen');
console.log();
emitter.emit('listen');console.log();
emitter.removeListener('listen',listner2);
console.log(num);
console.log(list);

emitter.emit('listen');
