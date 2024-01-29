/* eslint-disable no-extend-native */
// //name, serial number, full or part time

// //all executives and managers are full time employees. Executives are a type of managers. They
// /*
// Fulltime: takeVacation()
// //   Manager: 14 Days vacation, regular private office, delegate()
// //     Executives: hire(), fire(), 20 Days Vacation, corner office
// //   Regular Employee: 10 days vacation, desk in the cubicle farm

// // Part-Time: 0 days vacation, work in open workspace, no reserved desk

// // */

// // class Employee {
// //   constructor(name, number) {
// //     this.name = name;
// //     this.serialNumber = number;
// //   }
// // }

// // class PartTimeEmployee extends Employee {
// //   constructor(name, number) {
// //     super(name, number);
// //     this.desk = 'Open workspace';
// //   }
// // }

// // let john = new PartTimeEmployee('john', 12);
// // console.log(john instanceof PartTimeEmployee);
// // console.log(john instanceof Employee);
// // // console.log(john.desk, john.serialNumber, john.name);

// // class FulltimeEmployee extends Employee {
// //   constructor(name, number) {
// //     super(name, number);
// //   }
// //   takeVacation() {
// //     console.log('Im taking some time off');
// //   }
// // }

// // class Manager extends FulltimeEmployee {
// //   constructor() {
// //     super();
// //     this.desk = 'Private Office';
// //     this.vacationDays = 14;
// //   }
// //   delegate() {
// //     console.log('Jane i need a mock up by 3 please');
// //   }
// // }

// // let debrah = new Manager('Debrah', 5);
// // // debrah.delegate();
// // // console.log(debrah.desk);

// // class Executive extends Manager {
// //   constructor(name, number) {
// //     super(name, number);
// //     this.desk = 'Corner Office';
// //     this.vacationDays = 20;
// //   }
// //   hire() {
// //     console.log('Youre hired!');
// //   }
// //   fire() {
// //     console.log('Get out, youre fired!');
// //   }
// // }

// // let joe = new Executive('Joe', 1);
// // console.log(joe instanceof Manager);
// // console.log(joe instanceof Executive);
// // // joe.fire();
// // // joe.hire();
// // // joe.takeVacation();
// // // joe.delegate();

// // class RegularEmployee extends FulltimeEmployee {
// //   constructor(name, number) {
// //     super(name, number);
// //     this.desk = 'Cubicle Farm';
// //     this.vacationDays = 10;
// //   }
// // }

// // let dood = new RegularEmployee('dood', 44);
// // console.log(dood instanceof Manager);
// // // console.log(dood.desk, dood.vacationDays);

// // let obj1 = {
// //   a: 1,
// //   b: 3,
// //   math() {
// //     return this.a + this.b;
// //   }
// // };

// // let obj2 = Object.create(obj1);
// // let obj3 = Object.create(obj2);


// // console.log(obj3.math()); //4


// // function Test() {
// // }

// // Test.prototype.example = function() {
// //   console.log('here it is');
// // };

// // let test = new Test();
// // test.example(); // -> here it is

// let testPrototype = {
//   example() {
//     console.log('here it is');
//   }
// };

// let test1 = Object.create(testPrototype);
// test1.example();



// class Animal {}

// class Mammal extends Animal {}
// class Bird extends Animal {}

// let flyingMixin = {
//   fly() {
//     console.log('Flying');
//   }
// };

// let swimmingMixin = {
//   swim() {
//     console.log('Swimming!');
//   }
// };


// class Bat extends Mammal {}
// Object.assign(Bat.prototype, flyingMixin);

// class Whale extends Mammal {
// }
// Object.assign(Whale.prototype, swimmingMixin);

// class Penguin extends Bird {
// }
// Object.assign(Penguin.prototype, swimmingMixin);

// class Duck extends Bird {}
// Object.assign(Duck.prototype, swimmingMixin, flyingMixin);

// let bat = new Bat();
// // bat.fly(); // ->> 'Flying!'

// let whale = new Whale();
// // whale.swim(); //-> Swimming!

// let penguin = new Penguin();
// // penguin.swim(); //-> Swimming!

// let duck = new Duck();
// // duck.fly(); //Flying!
// // duck.swim(); //Swimming!
// console.log(duck.fly === bat.fly);
// console.log(whale.swim === penguin.swim);

// class Example {
// }

// let test = new Example();

// console.log(test.constructor.name); //Example
// console.log(test instanceof Example); //true
// console.log(test instanceof Object); //true

// function createExample() {
//   return {
//   };
// }

// let test2 = createExample();
// console.log(test2.constructor.name); //Object

// Object.prototype.ancestors = function ancestors() {
//   let ancestor = Object.getPrototypeOf(this);

//   if (Object.prototype.hasOwnProperty.call(ancestor, 'name')) {
//     return [ancestor.name].concat(ancestor.ancestors());
//   }

//   return ['Object.prototype'];
// };

// function isInstanceOf(obj, constructorFunction) {
//   while (obj) {
//     obj = Object.getPrototypeOf(obj);
//     if (obj === constructorFunction.prototype) return true;
//   }

//   return false;
// }

// Object.prototype.ancestors = function ancestors() {
//   let ancestor = Object.getPrototypeOf(this);

//   if (Object.prototype.hasOwnProperty.call(ancestor, 'name')) {
//     return [ancestor.name].concat(ancestor.ancestors());
//   }
//   return ['Object.prototype'];
// };

// // name property added to make objects easier to identify
// let foo = {name: 'foo'};
// let bar = Object.create(foo);
// bar.name = 'bar';
// let baz = Object.create(bar);
// baz.name = 'baz';
// let qux = Object.create(baz);
// qux.name = 'qux';

// console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
// baz.ancestors();  // returns ['bar', 'foo', 'Object.prototype']
// bar.ancestors();  // returns ['foo', 'Object.prototype']
// foo.ancestors();  // returns ['Object.prototype']

function test() {
  console.log(this);
}

test();