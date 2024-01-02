/* eslint-disable max-len */
/*
What does the following code log to the console?
Try to answer without running the code.
Can you explain why the code produces the output it does?
*/

let RECTANGLE = {

  area: function() {
    return this.width * this.height;
  },
  perimeter: function() {
    return 2 * (this.width + this.height);
  },
};

/*
Above a variable named RECTANGLE is created with the `let` declaration and
assigned an object with object literal syntax.
Inside, the object has two method properties `area` and `perimeter`. Both of
these methods utilize the `this` keyword to get the context objects width and
height propeties to return a value.
*/

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area.call(this);
  this.perimeter = RECTANGLE.perimeter.call(this);
}
/*
Above is a constructor function declaration called Rectangle that takes 2 parameters.
The constructor assigns two of properties based on the input arguments, width and height, and the other
properties are assigned to the value returned by a method invocation, however since `RECTANGLE` doesnt get defined with a width and heigh property, both return undefined.
*/

let rect1 = new Rectangle(2, 3);

console.log(rect1.area); //NaN
console.log(rect1.perimeter); //NaN
