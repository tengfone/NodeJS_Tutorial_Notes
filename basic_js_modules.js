// normal function statement
function sayHi(){
    console.log('Inside sayHi function');
}

sayHi();



// function expression
var sayBye = function(){
    console.log('bye');
};

sayBye();



// passing function
function callFunction(fun){
    fun();
}

callFunction(sayBye);

// MODULE GLOBAL OBJECT
var exported_stuff = require('./tutorial_module');
console.log(exported_stuff.counter(['apple','pear','orange']));
console.log(exported_stuff.adder(exported_stuff.pi,100));

// OR CAN USE
// module.exports.pi = 3.142 etc etc

// OR

// module.exports = {
// counter: counter,
// pi: pi,
// adder: adder
// }

// Core Modules built in node js event emitter
const events = require('events');

class Person extends events.EventEmitter{
    constructor(name){
        super();
        this.name = name;
    }
}

let Tom = new Person('Tom');
let Dick = new Person('Dick');
let Harry = new Person('Harry');
let people = [Tom,Dick,Harry];

people.forEach(function(person){
    person.on('speak',function(message){
        console.log(person.name + ' said: ' + message);
    });
});

Tom.emit('speak','hey guys');
Dick.emit('yell','whats up');