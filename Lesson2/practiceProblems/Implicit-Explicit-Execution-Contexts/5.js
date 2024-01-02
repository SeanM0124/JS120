/*
Take a look at the following code snippet.
Use `call` to invoke the `add` method but with `foo` as execution context. 
What will this return?

*/
let foo = {
  a: 1,
  b: 2,
};

let bar = {
   a: 'abc',
   b: 'def',
   add: function() {
     return this.a + this.b;
   },
};
//This returns 3, since we are adding 1 + 2 through the foo function

//Since call is invoked on bar.add, with foo passed as the explicit contect,
//the add method uses foo.a and foo.b to determine the results
console.log(bar.add.call(foo));