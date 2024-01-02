let scissors = {
  name: 'Scissors',
  stock: 8,
  price: 10,
  id: 0,

  describeProduct() {
    console.log(`=> Name: ${this.name}`);
    console.log(`=> ID: ${this.id}`);
    console.log(`=> Price: ${this.price}`);
    console.log(`=> Stock: ${this.stock}`);
  },

  setProductPrice(newPrice) {
    if (newPrice <= 0) alert('Invalid Price!');
    this.price = newPrice;
  },
};

let drill = {
  name: 'Cordless Drill',
  stock: 15,
  price: 45,
  id: 1,

  describeProduct() {
    console.log(`=> Name: ${this.name}`);
    console.log(`=> ID: ${this.id}`);
    console.log(`=> Price: ${this.price}`);
    console.log(`=> Stock: ${this.stock}`);
  },

  setProductPrice(newPrice) {
    if (newPrice <= 0) alert('Invalid Price!');
    this.price = newPrice;
  },
};