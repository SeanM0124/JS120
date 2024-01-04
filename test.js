const MOVES = {
  rock: { abbreviation: 'r', beats: ['scissors', 'lizard']},
  lizard: { abbreviation: 'l', beats: ['spock', 'paper']},
  spock: { abbreviation: 'sp', beats: ['scissors', 'rock']},
  paper:  { abbreviation: 'p', beats: ['spock', 'rock']},
  scissors: { abbreviation: 'sc', beats: ['paper', 'lizard']}
};

convertChoice(context) {
  let moves = Object.keys(context.MOVES);
  moves.forEach(move => {
    if (MOVES[move].abbreviation === choice) {
      this.move = MOVES[move];
    }
  });
}