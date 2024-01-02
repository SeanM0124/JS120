//Alter the code in problem 2 so that it
//produces the desired output: I'm scampering!.
//Simply add teh missing new keyword
function Lizard() {
  this.scamper = function() {
    console.log("I'm scampering!");
  };
}

let lizzy = new Lizard();
lizzy.scamper(); // ?