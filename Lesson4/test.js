let a = {foo: 'bar'};
let b = Object.create(a);
console.log(a.__proto__.__proto__);
console.log(b.__proto__.__proto__);
console.log(Object.getPrototypeOf(b));
console.log(Object.getPrototypeOf(a));