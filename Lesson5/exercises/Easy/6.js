//Refactor these classes so they all use a common superclass,
//and inherit behavior as needed.

class Vehicle {
  constructor(make, model, wheels) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }
  info() {
    return `${this.make} ${this.model}`;
  }
  getWheels() {
    return this.wheels;
  }
}

class Car extends Vehicle {
}

class Motorcycle extends Vehicle {
}

class Truck extends Vehicle {
  constructor(make, model, wheels, payload) {
    super(make, model, wheels);
    this.payload = payload;
  }
}

