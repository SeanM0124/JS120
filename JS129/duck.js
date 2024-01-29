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