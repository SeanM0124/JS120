//1. What will the following code output?

function func() {
  return this;
}

let context = func(); //func is being called as a function

console.log(context); //This will log the global object and its properties