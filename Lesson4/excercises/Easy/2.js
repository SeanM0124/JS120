class Rectangle {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }
  getWidth() {
    return this.width;
  }
  getLength() {
    return this.length;
  }
  getArea() {
    return this.length * this.width;
  }
}
//Write a class called `Square` that inherits from Rectangle

class Square extends 