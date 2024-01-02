//Consider the following two loops:
let bar = {a: 1, b: 2};
let foo = Object.create(bar);
foo.a = 3;
foo.c = 4;

for (let property in foo) {
  console.log(`${property}: ${foo[property]}`);
}
console.log('--------');

Object.keys(foo).forEach(property => {
  console.log(`${property}: ${foo[property]}`);
});

//If foo is an arbitrary object,
//will these loops always log the same results to the console?
//Explain why they do or do not.
//If they don't always log the same information,
//show an example of when the results differ.

/*
The two loops produce the same results when the prototype
chain doesnt contain enumerable properties
*/