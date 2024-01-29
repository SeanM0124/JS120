/* eslint-disable max-len */


/*  Object Factories
function createHuman(age, gender, name) {
  return {
    age,
    gender,
    name,
    move() {
      console.log('Moving!');
    },
    eat(food = 'pizza') {
      console.log(`Eating ${food}!`);
    },
    description() {
      console.log(`${name} is a ${age} year old ${gender}`);
    }
  };
}

let sean = createHuman(24, 'male', 'Sean');

sean.eat();
sean.eat('Eggs');
sean.description();
*/


// Classes

//Polymorphism through inheritance


// class Human {
//   constructor(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }
//   move() {
//     console.log('Walking');
//   }
//   eat() {
//     console.log('Eating');
//   }

// }

// let sean = new Human('Sean', 24, 'male');

// class Child extends Human {
//   constructor(name, age, gender, cry) {
//     super(name, age, gender);
//     this.cry = cry;
//   }
//   move() {
//     console.log('Crawling');
//   }
//   crying() {
//     console.log(this.cry);
//   }
// }

// function beginMoving(being) {
//   return being.move();
// }

// let baby = new Child('Baby', 1, 'male', 'waaaaa');

// beginMoving(baby);
// beginMoving(sean);
// baby.crying();


//Polymorphism with Duck Typing

/*
class SoccerPlayer {
  kick() {
    console.log('Goal!');
  }
}

class FootballPlayer {
  kick() {
    console.log('The kick is good!');
  }
}

class UFCFighter {
  kick() {
    console.log('TKO!');
  }
}

class RugbyPlayer {
  kick() {
    console.log('The try is good!');
  }
}

class HockeyPlayer {
  kick() {
    console.log('Kicked away by Tanev');
  }
}

// [new HockeyPlayer, new SoccerPlayer, new FootballPlayer, new UFCFighter, new RugbyPlayer].forEach(obj => obj.kick());

// console.log(baby instanceof Child);
// console.log(baby instanceof Human);

// console.log(sean instanceof Human);
// console.log(sean instanceof Child);

// console.log(baby);
// console.log(sean);
// console.log(sean.constructor.prototype);
*/

//OLOO

// let humanPrototype = {
//   move() {
//     console.log('Moving!');
//   },
//   init(age, name, gender) {
//     this.age = age;
//     this.name = name;
//     this.gender = gender;
//     return this;
//   },
// };

// let sean = Object.create(humanPrototype).init(24, 'Sean', 'male');

// sean.move();
// console.log(sean.__proto__.__proto__);

//Constructor/Prototype
/*
function Human(age, name, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}


let humanMethods = {
  moving() {
    console.log('Walking!');
  },
  eat() {
    console.log('Eating!');
  }
};

Object.assign(Human.prototype, humanMethods);

function Child(age, name, gender) {
  Human.call(this, age, name, gender);
}

Child.prototype = Object.create(Human.prototype);
Child.prototype.constructor = Child;
let baby = new Child(1, 'baby', 'male');
baby.moving();
Child.prototype.moving = function () {
  console.log('Crawling!');
};
baby.moving();

let sean = new Human(24, 'sean', 'male');
// sean.moving();
*/

// const Swimmable = {
//   swim() {
//     console.log('Swimming');
//   }
// };

// function createSwimmingBird() {
//   return Object.assign({}, Swimmable);
// }

// function createPenguin() {
//   return createSwimmingBird();
// }

// let penguin = new createPenguin();
// penguin.swim();

// console.log(penguin.hasOwnProperty('swim'));


// const obj = {
//   prop: 'yes',
// };

// const obj2 = {
//   prop: 'no,'
// };

// console.log(Object.getPrototypeOf(obj));
// Object.setPrototypeOf(obj, obj2);
// console.log(Object.getPrototypeOf(obj));

// console.log(obj.__proto === Object.prototype);
// console.log(typeof obj === 'object'); //true
// console.log(typeof obj === 'function'); //false

// function func() {
//   console.log(obj);
// }
// console.log(obj.hasOwnProperty('prop')); //true
// console.log(obj.hasOwnProperty('family')); //false
// console.log(typeof func === 'object'); //false
// console.log(typeof func === 'function'); //true

// console.log(typeof Object); //function
// console.log(typeof Function); //function
// console.log(typeof String); //function


// let obj1 = {a: 5,
//   b: 6
// };
// let obj2 = {
//   b: 1,
//   c: 10,
//   math() {console.log(this.a + this.b)}
// };

// // console.log(obj1.constructor === obj2.constructor);
// // console.log(obj1.constructor === Object);

// function func() {
//   console.log('test');
// }

// // console.log(func.prototype);

// class Human {
//   eat() {
//     console.log('Eating');
//   }
//   static move() {
//     console.log('Moving');
//   }
// }
// let sean = new Human();

// function Child(){
// }
// let baby = new Child();
// console.log(Object.prototype.constructor);
// console.log(sean.constructor);
// console.log(sean.hasOwnProperty('__proto__'));
// console.log(sean.__proto__);
// console.log(Human.__proto__ === Human.prototype);
// console.log(Human.prototype.hasOwnProperty('__proto__'));
// console.log(Object.prototype.constructor === Function.prototype.constructor);

// console.log(Function.prototype === Object.getPrototypeOf(Human));
// console.log(sean.__proto__.__proto__.__proto__);
// console.log(Object.constructor);
// console.log(Function.constructor);

// Human.prototype.walk = function() { //instance method
//   console.log('Moving!');
// };

// Human.eat = function() { //static method
//   console.log('Eating!');
// };

// sean.walk();
// Human.eat();


// console.log(Object.getPrototypeOf(sean) === Human.prototype);
// console.log(Human.constructor);
// // console.log(baby.constructor.name);
// console.log(sean.constructor);
// console.log(Human.prototype);
// console.log(func.constructor);
// console.log(func.prototype);
// console.log(func);

// console.log(obj1.hasOwnProperty('a')); //true
// console.log(obj1.hasOwnProperty('c')); //false

// Object.setPrototypeOf(obj1, obj2);
// console.log(obj1.hasOwnProperty('c')); //false
// console.log(obj1.c); //has access due to delegation
// console.log(obj2.isPrototypeOf(obj1));

// console.log(obj1.toString());

// function test() {
//   console.log('test');
// }

// console.log(test.toString());
// Object.assign(obj1, obj2);
// console.log(obj1.hasOwnProperty('math'));
// console.log(obj1.math === obj2.math);

// //Constructor/Prototype

// function CreateCarnivore(age, name) {
//   this.age = age;
//   this.name = name;
// }

// function CreateCat(age, name, breed) {
//   CreateCarnivore.call(this, age, name);
//   this.breed = breed;
// }

// CreateCat.prototype = Object.create(CreateCarnivore.prototype);
// CreateCat.prototype.constrcutor = CreateCat;

// let carnivoreMethods = {
//   eatMeat() {
//     console.log('Eating Meat');
//   },
//   ignorePlants() {
//     console.log('No thanks');
//   }
// };

// let catMethods = {
//   huntPrey() {
//     console.log('Preparing to pounce...');
//   },
//   cleanSelf() {
//     console.log('Lick, lick, lick');
//   }
// };

// Object.assign(CreateCarnivore.prototype, carnivoreMethods);
// Object.assign(CreateCat.prototype, catMethods);

// let lion = new CreateCarnivore('5', 'Simba');
// let butter = new CreateCat(1.5, 'Butter', 'Maine-Coon');
// butter.eatMeat();


// You have recently watched Lion King as well as Jungle Book and have decided to take the best
// of both these worlds and develop some OOP magic. In this Lion King x Jungle Book world of ours, Lions have two characteristics:
// 1) they are friendly;
// 2) they are in the Lion King
// Lions also have certain behavior, namely they roar and say 'Hakuna Matata'

// Tigers, likewise, have two characteristics:
// 1) they enjoy swimming;
// 2) they are in the Jungle Book
// Tigers also have certain behavior, namely they chase and say 'I am chasing the man-cub'

// Your task, should you choose to accept it, is to create a Liger (https://en.wikipedia.org/wiki/Liger).
// A Liger is an animal whose father is a Lion and whose mother is a Tiger.
// The liger you create should inherit ALL properties and functionality from its parents, as follows:

// Please construct this relationship using the following patterns:
// 1) Constructor Prototypes
// 2) OLOO
// 3) Factory functions

// How you set up the relationship between the child liger, and parent Lion and Tiger is up to you.

//Cosntructor and Prototypes

// function createTiger() {
//   this.enjoysSwimming = true;
//   this.inJungleBook = true;
// }
// createTiger.prototype.chase = function() {
//   return 'I am chasing the man-cub';
// };

// function createLiger() {
//   createTiger.call(this);
//   this.inLionKing = true;
//   this.isFriendly = true;
// }

// createLiger.prototype = Object.create(createTiger.prototype);
// createLiger.constructor = createLiger;
// createLiger.prototype.roar = function() {
//   return 'Hakuna Matata';
// };


// let liger = new createLiger();

//OLOO

// let tigerPrototype = {
//   chase() {
//     return 'I am chasign the man cub';
//   },
//   init() {
//     this.inJungleBook = true;
//     this.enjoysSwimming = true;
//     return this;
//   }
// };

// let lionMixin = {
//   isFriendly: true,
//   inLionKing: true,
//   roar() {
//     return 'Hakuna Matata';
//   }
// };

// let tiger = Object.create(tigerPrototype).init();
// let liger = Object.assign(Object.create(tiger), lionMixin);

// console.log(liger.roar());// 'Hakuna Matata'
// console.log(liger.chase());// 'I am chasing the man-cub'
// console.log(liger.inLionKing); // true
// console.log(liger.isFriendly); // true
// console.log(liger.enjoysSwimming); // true
// console.log(liger.inJungleBook); // true


/*Let say we want to have a dog object. We want dog to be able to have access to method makeSound() (makeSound(){console.log('sound')}), but we don't want to declare it on dog. How many ways do you know that can make it possible? */

//1.
// let DogPrototype = {
//   makeSound() {
//     console.log('sound');
//   }
// };

// let dog = Object.create(DogPrototype);

//2.
// class Animal {
//   makeSound() {
//     console.log('sound');
//   }
// }

// class Dog extends Animal {

// }

// let dog = new Dog();

//3.
// function CreateDog(){};
// CreateDog.prototype.makeSound = function() {
//   console.log('sound');
// };

// let dog = new CreateDog();

//4.
// let dogPrototype = {
//   makeSound() {
//     console.log('sound');
//   },
//   init() {
//     return this;
//   }
// };

// let dog = Object.create(dogPrototype).init();

//5.
// function createDog() {
//   return {
//     makeSound() {
//       console.log('sound');
//     }
//   };
// }

// let dogDad = createDog();
// let dog = Object.create(dogDad);

// dog.makeSound(); // sound
// console.log(dog.hasOwnProperty('makeSound')); //false

// let shirt = {
//   a: 'Hello ',
//   b: 'World',
//   foo(context = shirt) {
//     console.log(context.a + context.b);
//   }
// };

// shirt.foo(); //'Hello World'
// let someVar = shirt.foo;
// someVar(); // ?

// function printHello(func) {
//   func();
// }

// let shirt = {
//   a : 'Hello ',
//   b : 'World',
//   foo : function () {
//     printHello(function() {
//       console.log(this.a + this.b);
//     });
//   }
// };

// shirt.foo();

// console.log(global);


///////////////////////////
// Horse
// - Unicorn (gallop, pierce)
// - Pegasus (gallop, fly)

// Humans
// - Thief (speak, steal)
//   - Pirate (speak, steal, sail)

// Centaur (gallop, speak)

// class Horse {
//   gallop() {
//     console.log('Galloping!');
//   }
// }

// class Unicorn extends Horse {
//   pierce() {
//     console.log('Piercing!');
//   }
// }

// class Pegasus extends Horse {
//   fly () {
//     console.log('Flying!');
//   }
// }

// class Human {
//   constructor() {
//   }
//   speak() {
//     console.log('Speaking');
//   }
// }

// class Thief extends Human {
//   steal() {
//     console.log('Stealing!');
//   }
// }

// class Pirate extends Thief {
//   sail() {
//     console.log('Sailing!');
//   }
// }

// class Centaur extends Human {

// }

// let horseMethods = {
//   gallop() {
//     console.log('Galloping!');
//   }
// };

// Object.assign(Centaur.prototype, horseMethods);

// let chiron = new Centaur();
// let horse = new Horse();

// console.log(typeof Horse.prototype.gallop);
// console.log(Horse.prototype.propertyIsEnumerable('gallop'));


// console.log(Horse.prototype.hasOwnProperty('gallop'));
// console.log(Horse.prototype);


/**======================== Factory Function ================================
 * ==========================================================================
 * (Write answers to all questions and demonstrate using instance properties)
 *
 * Show the prototype chain for instances created with this pattern.
 *
 *
 * Does this pattern conserve memory?
 *
 *
 * What relationships (to other objects) can we determine from the instance?
 *
 */

/////Using all Object Creation Patters ----------------------------------------------------

// function createPlayer(name, position) {
//   return {
//     name,
//     position,
//     info() {
//       return `${this.name} is a ${this.position} in the NBA`;
//     }
//   };
// }

// let player1 = createPlayer('Dennis', 'Forward');

// console.log(player1.name === 'Dennis'); // true
// console.log(player1.position === 'Forward'); //true
// console.log(player1.info() === 'Dennis is a Forward in the NBA'); //true

// // Show the prototype chain for instances created with this pattern.
// console.log(Object.getPrototypeOf(player1) === Object.prototype); //true
// console.log(Object.getPrototypeOf(Object.prototype) === null);

//Does this pattern conserve memory?
//No, each object that is created this way has its own copy of the methods and state

//What relationships (to other objects) can we determine from the instance?
//None. The prototype of all objects created this way will be the common prototype Object.prototype. We dont know which function created the object
//because all objects created via object literal are set to reference the Object cosntructor

// /**=============== Objects-Linking to Other Objects (OLOO) ==================
//  * ==========================================================================
//  * (Write answers to all questions and demonstrate using instance properties)
//  *
//  * Show the prototype chain for instances created with this pattern.
//  *
//  *
//  * Does this pattern conserve memory?
//  *
//  * What relationships (to other objects) can we determine from the instance?
//  *
//  */

// let playerPrototype = {
//   init(name, position) {
//     this.name = name;
//     this.position = position;
//     return this;
//   },
//   info() {
//     return `${this.name} is a ${this.position} in the NBA`;
//   }
// };

// let player2 = Object.create(playerPrototype).init('Dennis', 'Forward');

// // console.log(player2.name === 'Dennis');
// // console.log(player2.position === 'Forward');
// // console.log(player2.info() === 'Dennis is a Forward in the NBA');

// //Show the prototype chain for instances created with this pattern.
// console.log(Object.getPrototypeOf(player2) === playerPrototype);
// console.log(Object.getPrototypeOf(playerPrototype) === Object.prototype);
// console.log(Object.getPrototypeOf(Object.prototype) === null);

//Does this pattern conserve memory?
//Yes, there is delegation between the created objects and its prototype (playerPrototype) the methods are inherited, not copied

//What relationships (to other objects) can we determine from the instance?
//The prototype object (playerPrototype) can be determined and with that we know which object defines the common methods, since we define objects
//using Object.create, all instances created will reference the 'Object' Cosntructor.

// console.log(player2.__proto__ === playerPrototype); //true
// console.log(player2.constructor.name); //Object

// /**============= Constructor & Prototype (Pseudo-Classical) =================
//  * ==========================================================================
//  * (Write answers to all questions and demonstrate using instance properties)
//  *
//  * Show the prototype chain for instances created with this pattern.
//  *
//  *
//  * Does this pattern conserve memory?
//  *
//  * What relationships (to other objects) can we determine from the instance?
//  *
//  */

// function CreatePlayer(name, position) {
//   this.name = name;
//   this.position = position;
// }

// CreatePlayer.prototype.info = function() {
//   return `${this.name} is a ${this.position} in the NBA`;
// };

// let player3 = new CreatePlayer('Dennis', 'Forward');

// console.log(player3.name === 'Dennis');
// console.log(player3.position === 'Forward');
// console.log(player3.info() === 'Dennis is a Forward in the NBA');

//Show the prototype chain for instances created with this pattern.
// console.log(Object.getPrototypeOf(player3) === CreatePlayer.prototype);
// console.log(Object.getPrototypeOf(CreatePlayer.prototype) === Object.prototype);
// console.log(Object.getPrototypeOf(Object.prototype) === null);

//Does this pattern conserve memory?
//Yes. Each object created this way will inherit the instance methods, and delegate up the chain when it needs them to be invoked.

//What relationships (to other objects) can we determine from the instance?
//We can use the constructor to determine the type of the objects:
// console.log(player3.constructor.name);
// console.log(CreatePlayer.prototype.hasOwnProperty('constructor'));


// /**==================== ES6 Class (Pseudo-Classical) ========================
//  * ==========================================================================
//  * (Write answers to all questions and demonstrate using instance properties)
//  *
//  * Show the prototype chain for instances created with this pattern.
//  *
//  *
//  * Does this pattern conserve memory?
//  *
//  * What relationships (to other objects) can we determine from the instance?
//  *
//  */

// class Player {
//   constructor(name, position) {
//     this.name = name;
//     this.position = position;
//   }
//   info() {
//     return `${this.name} is a ${this.position} in the NBA`;
//   }
// }

// let player5 = new Player('Dennis', 'Forward');

// console.log(player5.name === 'Dennis');
// console.log(player5.position === 'Forward');
// console.log(player5.info() === 'Dennis is a Forward in the NBA');

//Show the prototype chain for instances created with this pattern.
// console.log(Object.getPrototypeOf(player5) === Player.prototype);
// console.log(Object.getPrototypeOf(Player.prototype) === Object.prototype);
// console.log(Object.getPrototypeOf(Object.prototype) === null);


//Does this pattern conserve memory?
//Yes, each object created via this pattern will inherit from a prototype, allowing delegation to a common method, preventing/reducing code duplication

//What relationships (to other objects) can we determine from the instance?
//We can determine the instanceof

// console.log(player5 instanceof Player); //true
// console.log(player5.constructor === Player); //true

///////////////////////////
// Horse
// - Unicorn (gallop, pierce)
// - Pegasus (gallop, fly)

// Humans
// - Thief (speak, steal)
//   - Pirate (speak, steal, sail)

// Centaur (gallop, speak)

// //--------ObjectFactories----
// function createHorse() {
//   return {
//     gallop() {
//       console.log('Galloping!');
//     }
//   };
// }

// function createUnicorn() {
//   let unicorn = {
//     pierce() {
//       console.log('Piercing');
//     }
//   };
//   return Object.assign(unicorn, createHorse());
// }

// function createPegasus() {
//   let pegasus =  {
//     fly() {
//       console.log('Flying!');
//     }
//   };
//   return Object.assign(pegasus, createHorse());
// }

// function createHuman() {
//   return {
//     speak() {
//       console.log('Blah blah blah');
//     }
//   };
// }

// function createThief() {
//   let thief = {
//     steal() {
//       console.log('steal steal steal');
//     }
//   };
//   return Object.assign(thief, createHuman());
// }

// function createPirate() {
//   let pirate = {
//     sail() {
//       console.log('Sailing');
//     }
//   };
//   return Object.assign(pirate, createThief());
// }

// function createCentaur() {
//   return Object.assign(createHuman(), createHorse());
// }

// ///////////////////////////
// // Horse
// // - Unicorn (gallop, pierce)
// // - Pegasus (gallop, fly)

// // Humans
// // - Thief (speak, steal)
// //   - Pirate (speak, steal, sail)

// // Centaur (gallop, speak)

// //--------------OLOO---------------

let horsePrototype = {
  init() {
    return this;
  },
  gallop() {
    console.log('Galloping!');
  }
};

let horse = Object.create(horsePrototype).init();

let unicornPrototype = Object.create(horsePrototype);
unicornPrototype.pierce = function() {
  console.log('Piercing!');
};

// let unicorn = Object.create(unicornPrototype).init();
// // unicorn.gallop();
// // unicorn.pierce();
// // console.log(Object.getPrototypeOf(unicorn) === unicornPrototype);

// let pegasusPrototype = Object.create(horsePrototype);
// pegasusPrototype.fly = function() {
//   console.log('Flying!');
// };

// let pegasus = Object.create(pegasusPrototype);
// // pegasus.fly();
// // pegasus.gallop();

// let humanPrototype = {
//   speak() {
//     console.log('Speaking');
//   }
// };

// let thiefPrototype = Object.create(humanPrototype);
// thiefPrototype.steal = function() {
//   console.log('Stealing');
// };

// let piratePrototype = Object.create(thiefPrototype);
// piratePrototype.sail = function() {
//   console.log('Sailing!');
// };

// let centaurPrototype = Object.create(humanPrototype);
// Object.assign(centaurPrototype, horsePrototype);

// let chiron = Object.create(centaurPrototype);
// chiron.gallop();
// chiron.speak();

//-----------------Constructor and Prototype-----------------

function Horse() {
}
Horse.prototype.gallop = function() {
  console.log('Galloping!');
};

let horse = new Horse();

function Unicorn() {
}

Unicorn.prototype = Object.create(Horse.prototype);
Unicorn.prototype.constrcutor = Unicorn;
Unicorn.prototype.pierce = function() {
  console.log('Piercing!');
};

let unicorn = new Unicorn();

function Pegasus() {
}

Pegasus.prototype = Object.create(Horse.prototype);
Pegasus.prototype.constructor = Pegasus;
Pegasus.prototype.fly = function() {
  console.log('Flying!');
};

function Human() {
}
Human.prototype.speak = function() {
  console.log('Blahahaha');
};

function Thief() {
}
Thief.prototype = Object.create(Human.prototype);
Thief.prototype.constructor = Thief;
Thief.prototype.steal = function() {
  console.log('Stealing');
};

function Pirate() {
}

Pirate.prototype = Object.create(Thief.prototype);
Pirate.prototype.constructor = Pirate;
Pirate.prototype.sail = function() {
  console.log('Sailing');
};

function Centaur() {
}

Centaur.prototype = Object.create(Human.prototype);
Object.assign(Centaur.prototype, Horse.prototype);
Centaur.prototype.constructor = Centaur;

let chiron = new Centaur();

chiron.gallop();
chiron.speak();
/*

1. **What is** **Object Oriented Programming in context of JavaScript?**
Object Oriented programming is a coding strategy to focus program design around objects working
with and interacting with other objects. In the context of Javascript, this is also includes the prototypal chain,
and how objects can delegate to their prototype to find additional functionality.

2. **Is JavaScript object oriented? Why or why not?**
Yes. Most things in JS are objects. Functions (method!), arrays, object literals. JS uses objects and the prototype chain.

3. What are the advantages of OOP?
OOP reduces dependencies. This can make for more maintainable code.

4. What are the disadvantages of OOP? 
Programs could be larger, potentially less efficient.

5. What is encapsulation in context of OOP? Present an example that illustrates this concept.
Encapsulation is a concept of OOP that focuses on placing the state (data) and behaviors(methods/operations) that are 
relevant to eachother in the same object.

let obj = {a: 1, b: 2, math() { this.a + this.b}}

6. In JavaScript, how does encapsulation differ from encapsulation in most other OO languages?
JS encapsulation is slightly different in other languages, where it might have the ability to restrict
access to certain state and behaviors. JS doesnt have restrictions on its interface.

7. What is inheritance in context of JS?
Inheritance in JS allows for an object to inherit state or behaviors from a prototype object that 
it has in its prototypal chain

8. What makes JavaScript different from other OOP languages?
A few things, but primarily, JS doesnt have true classes, rather it emulates it. JS uses inheritance.

9. What is **prototypal inheritance**? Present an example that illustrates this concept.
Prototypal Inheritance is the concept of all objects (except bare objects) having a prototype object, from which they can
draw additional functionality.

let prototype1 = {
  a: 1,
  b: 2,
  math() {
    console.log(this.a + this.b);
  }
};

let prototype2 = Object.create(prototype1);
prototype2.a = 3;
prototype2.b = 3;
prototype2.math(); //6 -> #2 is inheriting a method from its prototype, which
//can be used on its own state, despite the method being delegated.

10. What is the role of `[[Prototype]]` property?
This is a hidden internal property in all objects that keeps track of its prototype object.

12. What is a difference between `Object.create()` and `Object.assign()` methods? Use examples to present differences.
Object.create() returns an object whose prototype is set to the object passed as an argument to Object.create
Whereas, Object.assign(target, source) copies the enumerable properties of a source object unto a target object. it returns undefined.

13. What is `setPrototypeOf()` method and what does it do? Give an example.
The setPrototypeOf method manipulates the [[Prototype]] property to point instead to the passed object, rather than the objects initial prototype


14. Compare prototypal inheritance with pseudo-classical inheritance. What are the similarities and differences? Are those concept related or not?
Both use prototypal delegation. They both check the prototype chain for the requested properties. The main idea however of prototypal inheritance lies in the the [[Prototype]] property of objects.
It focuses on the internal property for the prototype chain, where as pseudo-classical is a pattern that uses both prototpyal inheritance and delagation
to create object patterns.

15. What is the difference between single and multiple inheritance?
ITs the difference of how many objects another object inherits from. JS does not have multiple inheritance; an object can only directly inherit from one other object.

16. How is JavaScript dealing with the lack of multiple inheritance? Give an example.
JS uses mixins

17. What is polymorphism and what are its benefits?
The benefit of polymorphism is it allows for flexible, and reusable code.

18. There are two types of polymorphism in JS. What are they? Choose one of them and explain how it works on an example.
Duck typing and inheritance. Inheritance can happen with method overriding between sub and superclass. Duck typeing occurs between unrelated objects
that may perform a similar functionality.


20. What is a mixin? What would we use it for?
A mixin is an object that we can use in conjunction with Object.assign to pass addtional functionality to
another object(s). It is used to solve the lack of multiple inheritance.

21. When should we use mixins and when inheritance?
We should strive to find a balance with both, but inheritance typically is best when there is an 'is a' relationship i.e. a cat is a animal

22. What is the difference between Member access notation and Computed member access notation?
member access is less flexible. computed member access can evaluate expressions on the spot.

23. In JS there are some confusions about prototypes and many terms that sound or look similar. Explain shortly what the following concepts relate to:
    - prototype -- the Prototype of an object i.e. the object above the current object in the prototype chain -- inheritance
    - .prototype property -- A property that JS creates on functions that references a prototype object. In object creation patterns, this is set as the prototype of the created objects.
    - `[[Prototype]]` property -- the hidden internal object property that keeps track of an objects prototype.
    - `__proto__` -- the tangible version of [[Prototype]]
    - Object prototype -- this refers to essentially the same things as __proto__ and [[Prototype]], the object that another object inherits from
    - Function prototype -- This is the same as .prototype, the object that is referenced by this property is set to be the prototypes created by the object creation pattern

24. How does delegation work in JS?
JS first looks for the requested property in the calling object. If not found there, the search continues up the objects prototype chain.
When its found, it allows for the calling object to delegate to the object that holds the property, to access that functionality

25. What is a prototype chain?
A series of Objects and their [[Prototype]]'s that create a chain of referenced objects.

26. What is a bare object? How to create one?
An object whose prototype is set to `null`. It can be created with Object.create(null). This object is cut off from the Object.prototype, and has severely hindered functionality

27. What is the global object? How can we print its value?
The global object is an object that the JS engine creates, it holds global variables and functions, giving functionality to the program.

28. What is Execution Context? 
Execution context generally refers to the value of `this` when the code executes.

29. What is implicit execution context?
This is when there is no explicit context given. There is 3 ways for implicit cojnext to be passed: 1. method invocation, 2. function invocation, 3. the `new` keyword.

30. What is explicit execution context and how can we set it?
Explicit execution context is when the code directly sets the value of `this` using either `call`, `apply` or `bind`.

31. What is `this` keyword?
`this` is the execution context. `this` is used to reference the execution context.

34. What does `new` keyword do?
1. Creates a new empty object {}
2. sets the prototype of that object to the object referenced by the functions prototype property {} -> __protot__ -> .prototype -> {}
3. sets the execution context to the new object.
4. executes the function body
5. returns the new object, unless the function explicity returns a differnt object.


35. Do we always have to use `new` keyword with constructors? Why or why not?
No, but generally yes. Scope safe constructors do not need the `new` keyword. These are functions that have functionality to return an object
explicitly.

41. What is `super()` keyword? What is it used for?
this is used to reference a super-classes constructor method. Its used in subclasses to set properties.

42. What are build-in constructors?
Array, String, Number etc.. These are functions that create and provide functionality.

43. Are strings primitives or objects in JavaScript?
Both -- generally as a dev, you will only work directly with the string primitive, but JS wraps the primitives in a string object when performing methods on them

44. What are scope safe constructors? Create one.
A constructor that can create objects without the use of new
function SampleFn(argument) {
  if (!(this instanceof SampleFn)) {
    return new SampleFn(argument);
  }
  this.argument = argument;
  method() {
  }
}


*/