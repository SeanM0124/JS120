//What will the following code log to the console?
//Why?

let qux = { foo: 1 }; //qux has its own property foo which has the value 1
let baz = Object.create(qux); //baz is created and inherits the proprties of its prototype qux
qux.foo = 2; //foo's value in qux is reassigned to 2

console.log(baz.foo + qux.foo);
/*
Baz does not have its own foo proprty, and foo in qux has been reassigned to 2.
Since foo is the prototype of baz, this will log 4
foo (2) + foo(2)
*/