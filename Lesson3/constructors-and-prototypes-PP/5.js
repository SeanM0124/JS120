//What will the following code output and why?
function Ninja() {
  this.swung = true;
}

let ninja = new Ninja();

Ninja.prototype = { //reassigning the prototype of Ninja to an new object, not mutating original
  swingSword: function() {
    return this.swung;
  },
};

console.log(ninja.swingSword()); //The prototype for the `ninja` object doesnt change, cannot find `swingSword`method in the chain
//Uncaught TypeError: ninja.swingSword is not a function