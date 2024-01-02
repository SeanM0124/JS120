//What happens if you run the following code? Why?
function Lizard() { //A constructor
  this.scamper = function() { //assign the method scamper
    console.log("I'm scampering!");
  };
}

let lizzy = Lizard(); //setting equal lizzy to a function call which returns undefined
lizzy.scamper(); // undefined?

/*
When you run the code, you get a TypeError!
Its trying to access an undefined value
*/