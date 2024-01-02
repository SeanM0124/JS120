//Consider the follow class declaration:

class Television {
  static manufacturer() {
    // omitted code
  }

  model() {
    // method logic
  }
}

/*
What does the `static` modifier do? How would we call the method `manufacturer`?

The static keyword makes the method a static method. Static methods are defined
directly on the class, not on the objects that the class creates.

We would call the manufacturer method by using the class to call it like so:
*/

Television.manufacturer();

//the model method must be called on an instance object:
let tv = new Television();
tv.model();