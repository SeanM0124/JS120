/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */

const readline = require('readline-sync');
const MESSAGES = require('./rps.json');

function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {
    choices: [],
    move: null,
    choose(context) {
      if (this.movesHistory.length === 0) {
        let keys = Object.keys(context.MOVES);
        this.move = (keys[Math.floor(keys.length * Math.random())]);
      } else {
        let lastHumanMove =
          context.human.movesHistory[context.human.movesHistory.length - 1][0];
        let beatHumanMove = Object.keys(context.MOVES).filter(move => {
          return context.MOVES[move].beats.includes(lastHumanMove);
        });
        this.choices = this.choices.concat(beatHumanMove);
        this.move = (this.choices[Math.floor(this.choices.length * Math.random())]);
      }
    },
  };
  return Object.assign(playerObject, computerObject);
}

function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {
    move: null,

    choose(context) {
      let choice = readline.question(context.prompt('choice')).toLowerCase();
      while (!['r', 'rock', 'p', 'paper', 'l', 'lizard', 'sp', 'spock', 'sc', 'scissors'].includes(choice)) {
        choice = readline.question(context.prompt('invalidChoice')).toLowerCase();
      }
      return choice;
    },

    convertChoice(context) {
      let userChoice = this.choose(context);
      switch (userChoice) {
        case 'r': this.move = 'rock';
          break;
        case 'sc': this.move = 'scissors';
          break;
        case 'p': this.move = 'paper';
          break;
        case 'l': this.move = 'lizard';
          break;
        case 'sp': this.move = 'spock';
          break;
        default:
          this.move = userChoice;
      }
    },

  };
  return Object.assign(playerObject, humanObject);
}

function createPlayer() {
  return {
    movesHistory: [],
    move: null,

    updateMoves(playermove, result) {
      this.movesHistory.push([playermove, result]);
    },
  };
}

function createScore() {
  return {
    human: 0,
    computer: 0,

    humanWon() {
      this.human += 1;
    },

    computerWon() {
      this.computer += 1;
    },
  };
}

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),
  score: null,
  promptKey: '=>',
  winCondition: 5,
  MOVES: {
    rock: { abbreviation: 'r', beats: ['scissors', 'lizard']},
    lizard: { abbreviation: 'l', beats: ['spock,', 'paper']},
    spock: { abbreviation: 'sp', beats: ['scissors', 'rock']},
    paper:  { abbreviation: 'p', beats: ['spock', 'rock']},
    scissors: { abbreviation: 'sc', beats: ['paper', 'lizard']}
  },

  prompt(message) {
    if (Object.keys(MESSAGES).includes(message)) {
      console.log(`\n${this.promptKey} ${MESSAGES[message]}`);
    } else {
      console.log(`${this.promptKey} ${message}`);
    }
  },

  displayWelcomeMessage() {
    this.clearScreen();
    this.prompt('welcome');
    this.printLines();
    this.prompt('gamerules');
    this.prompt(`The first to ${this.winCondition} wins. Good Luck!`);
    this.printLines();
  },

  printLines() {
    console.log('+-------------------------------------------------------------------------------------------+');
  },

  clearScreen() {
    console.clear();
  },

  displayGoodbyeMessage() {
    this.clearScreen();
    this.prompt('Thanks');
  },

  playAgain() {
    let answer = readline.question(this.prompt('play again'));
    while (!['yes', 'y', 'no', 'n'].includes(answer)) {
      answer = readline.question(this.prompt('invalidAns'));
    }
    this.clearScreen();
    return (['yes', 'y'].includes(answer));
  },

  displayMoves(humanMove, computerMove) {
    this.prompt(`You chose: ${humanMove}`);
    this.prompt(`The computer chose: ${computerMove}`);
  },

  determineWinner(humanMove, computerMove) {
    if (this.MOVES[humanMove].beats.includes(computerMove)) {
      this.prompt('you win');
      this.score.humanWon();
      this.human.updateMoves(humanMove, 'win');
      this.computer.updateMoves(computerMove, 'loss');
    } else if (humanMove === computerMove) {
      this.human.updateMoves(humanMove, 'tie');
      this.computer.updateMoves(computerMove, 'tie');
      this.prompt('tie');
    } else {
      this.prompt('you lose');
      this.human.updateMoves(humanMove, 'loss');
      this.computer.updateMoves(computerMove, 'win');
      this.score.computerWon();
    }
  },

  displayRoundWinner() {
    this.clearScreen();
    let humanMove = this.human.move;
    let computerMove = this.computer.move;
    this.displayMoves(humanMove, computerMove);
    this.printLines();
    this.determineWinner(humanMove, computerMove);
    this.prompt(`Human: ${this.score.human}, Computer: ${this.score.computer}`);
  },

  seriesResult() {
    this.clearScreen();
    if (this.score.computer === this.winCondition) {
      this.prompt(`You lost the series ${this.score.human} to ${this.score.computer}.. `);
    } else {
      this.prompt(`You won the series ${this.score.human} to ${this.score.computer}! Congrats!`);
    }
  },

  seriesOver() {
    return (this.score.human === this.winCondition ||
      this.score.computer === this.winCondition);
  },

  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.score = createScore();
      while (!this.seriesOver()) {
        this.human.convertChoice(this);
        this.computer.choose(this);
        this.displayRoundWinner();
      }
      this.seriesResult();
      if (!this.playAgain()) break;
    }
    this.displayGoodbyeMessage();
  },
};

RPSGame.play();