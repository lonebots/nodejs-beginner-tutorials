//code is having some problem and I will rectify this error
//go and watch video 8 on net ninja 


//util module

var events = require('events');
var util = require('util');


//creating a var person for inheriting custom events
var Person = (name) => {
    this.name = name;
};

util.inherits(Person, events.EventEmitter);//////PROBLEM??????

//creating person variables
var Bheem = new Person('Bheem');
var Kaliya = new Person('Kaliya');
var Raju = new Person('Raju');

//variable list people
var people = [Bheem, Kaliya, Raju];

//for assigning each of them with a custom image
people.forEach((person) => {
    person.on('speak', (msg) => {
        console.log(`${person.name} said : ${msg}`);
    })
})


//calling events 
Bheem.emit('speak', 'hey guys');
Kaliya.emit('speak', 'who is boring fat dick head!');
