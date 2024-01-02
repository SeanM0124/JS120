/*
What will the following code log to the console?
Explain why.
*/

let qux = { foo: 1 }; //foo is qux's own property
let baz = Object.create(qux); //Qux is the prototype of baz
baz.foo = 2; //this makes baz have foo as an 'own' property - it does not change qux

console.log(baz.foo + qux.foo);
//This is 2 + 1; 3 will be logged