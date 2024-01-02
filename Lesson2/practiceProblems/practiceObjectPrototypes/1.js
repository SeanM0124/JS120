//What will the following code log to the console?
//Explain why it logs that value.

let qux = { foo: 1 };
let baz = Object.create(qux);
//qux is the prototype of baz
console.log(baz.foo + qux.foo);
//2?

/*
quz is the prototype of baz. line 7 essentially qux.foo + qux.foo (1 + 1)
*/