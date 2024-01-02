/* eslint-disable max-len */
/*
In the last question, we used a mix-in named Speed that contained a goFast method.
We included the mix-in in the Car class and then called the goFast method from an instance of the Car class.
You may have noticed that the string printed when we call goFast includes the name of the type of vehicle we are using.
How is that done?

Its interpolating the this.constructor.name, and the name property of the constructor is the name used to define the class.

"Since the `consturctor` property references a funcion object, `constructor.name` references the `name` property on that object."

1. Within `goFast`, `this` refers to the object that invoked the method. In my case its `kia` and `ford` instances.
2. The `constructor` property of an object references the class that the object belogns to (`Car` or `Truck`)
3. `constructor` has a `name` property that contains the name of the class as a string
*/