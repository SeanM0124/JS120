/*
Our new organization also makes it easier to write functions
dealing with the products, because we can now take advantage of
conventions in the objects' data. Create a function that takes one
of our product objects as an argument, and sets the object's price
to a non-negative number of our choosing, passed in as a second argument.
If the new price is negative, alert the user that the new price is invalid.
*/

function setPrice(object, price) {
  if (price <= 0) return 'That is an invalid price!';

  object.price = price;
}