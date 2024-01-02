/* eslint-disable max-len */
/*
What will the following code log to the console and why?
*/

function Ninja() {
  this.swung = true;
}

let ninja = new Ninja();

Ninja.prototype.swingSword = function() {
  return this.swung;
};

console.log(Ninja.prototype);
console.log(ninja);
console.log(ninja.swingSword());

//It will log true. `swingSword` is a method defined in the prototype chain above `ninja`,
//while it is not an 'own' property of `ninja`, it can delegate and access it. When the method is called using the ninja object
//It will log the value of the swung property

