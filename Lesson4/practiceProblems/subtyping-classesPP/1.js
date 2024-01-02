//Suppose we have the following classes:

class Game {
  play() {
    return 'Start the game!';
  }
}

class Bingo extends Game {
  rulesOfPlay() {
    // rules of play
  }
}

/*
What would happen if we added a `play` method to the `Bingo` class,
keeping in mind that there is already a method of this name in the `Game` class
from which the `Bingo` class inherits?
Explain your answer. What do we call it when we define a method like this?


The new `play` method in `Bingo` would over ride the other. This is because the
new method would be found lower and earlier on the chain. When a class redefines
a method that a s superclass defines, its called 'method orverriding'
*/