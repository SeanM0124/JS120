function createProduct(id, name, stock, price) {
  return {
    id,
    name,
    stock,
    price,

    setPrice(newPrice) {
      if (newPrice >= 0) this.price = newPrice;
      else alert('Invalid price!');
    },

    describeProduct() {
      console.log(`=> Name: ${this.name}`);
      console.log(`=> ID: ${this.id}`);
      console.log(`=> Price: ${this.price}`);
      console.log(`=> Stock: ${this.stock}`);
    },
  };
}

let scissors = createProduct(0, 'Scissors', 15, 45);
let drill = createProduct(1, 'Cordless Drill', 8, 10);
let bucket = createProduct(2, '2 Gallon Bucket', 8, 20);
let hammer = createProduct(3, '1lb Hammer', 12, 15);
let paint = createProduct(4, 'Acrylic Paint', 5, 16);