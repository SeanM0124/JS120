let obj = {
  func: function() { //this would refer to 'func'
    return this;
  },
};

let context = obj.func(); //its being called as a method?
//Methods context is the obj its being called in----

// As a method invocation, it receives an implicit execution context
//that refers to the object used to invoke it.

console.log(context);// it will log func