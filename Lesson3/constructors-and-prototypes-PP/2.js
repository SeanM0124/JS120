/*
To fix the issue, we must give the assignment within the constructor a specific
context to pass on to the objects that it creates
*/

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area.call(this); //Using call, we can pass explicit context
  this.perimeter = RECTANGLE.perimeter.call(this);
}