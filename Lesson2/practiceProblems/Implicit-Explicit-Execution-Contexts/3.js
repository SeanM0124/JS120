//What will the following code output?

message = 'Hello from the global scope!'; // this would set a property in the global object

function deliverMessage() {
  console.log(this.message); //in the context, its the global object
}

deliverMessage(); //invoked as a function, refers to the global object
//This will log 'Hello from the global scope!'

let foo = {
  message: 'Hello from the function scope!',
};

foo.deliverMessage = deliverMessage; //adds deliverMessage as a method to 'foo'

foo.deliverMessage(); //invoked as a method of foo, it will log 'Hello from the function scope!'