
let franchise = {
  name: 'How to Train Your Dragon',
  allMovies() {
    let self = this;
    return [1, 2, 3].map(function(number) {
      return self.name + ' ' + number;
    });
  },
};
console.log(franchise.allMovies());
/*
This method is not working due to `this` being out of scope. There is a couple
of ways to fix this issue; cache `this` to a self variable, pass `this`
as `thisArg`, change the function to an arrow function etc.
*/