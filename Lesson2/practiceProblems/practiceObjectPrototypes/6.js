//How do you create an object that doesn't have a prototype?
//How can you determine whether an object has a prototype?

let object = Object.create(null);
console.log(object);
console.log(Object.getPrototypeOf(object));