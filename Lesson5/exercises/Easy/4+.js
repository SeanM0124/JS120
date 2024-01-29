/* eslint-disable max-len */
/*

Furhter Exploration:
An alternative approach to this problem would be to modify the Pet class to accept a colors parameter.
If we did this, we wouldn't need to supply an constructor method for Cat.

Why would we be able to omit the constructor method?
I believe we can omit the constructor from the Cat class due to delegation and inheritance of prototypes. All of the
methods and properties currently can be found up the prototype chain for objects created by Cat

Would it be a good idea to modify Pet in this way? Why or why not?



How might you deal with some of the problems, if any, that might arise from modifying Pet?

*/

class Pet {
  constructor(name, age, colors) {
    this.name = name;
    this.age = age;
    this.colors = colors;
  }

  info() {
    return `My cat ${this.name} is ${this.age} years old and has ${this.colors} fur`;
  }
}

class Cat extends Pet {

}

let pudding = new Cat('Pudding', 7, 'black and white');
let butterscotch = new Cat('Butterscotch', 10, 'tan and white');

console.log(pudding.info());
console.log(butterscotch.info());