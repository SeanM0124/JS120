//Polymorphism through inheritance


class Human {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  move() {
    console.log('Walking');
  }
  eat() {
    console.log('Eating');
  }

}

let sean = new Human('Sean', 24, 'male');

class Child extends Human {
  constructor(name, age, gender, cry) {
    super(name, age, gender);
    this.cry = cry;
  }
  move() {
    console.log('Crawling');
  }
  crying() {
    console.log(this.cry);
  }
}

function beginMoving(being) {
  return being.move(); // POLYMOPRHISM
}

let baby = new Child('Baby', 1, 'male', 'waaaaa');

beginMoving(baby);
beginMoving(sean);
baby.crying();

sean.move();
baby.move(); //Not polymorphism!

//Polymorphism with Duck Typing ------------------------------------------


class SoccerPlayer {
  kick() {
    console.log('Goal!');
  }
}

class FootballPlayer {
  kick() {
    console.log('The kick is good!');
  }
}

class UFCFighter {
  kick() {
    console.log('TKO!');
  }
}

class RugbyPlayer {
  kick() {
    console.log('The try is good!');
  }
}

class HockeyPlayer {
  kick() {
    console.log('Kicked away by Tanev');
  }
}

function kick(being) {
  return being.kick(); // POLYMOPRHISM
}

[new HockeyPlayer(), new SoccerPlayer(), new FootballPlayer(),
  new UFCFighter(), new RugbyPlayer()].forEach(obj => kick(obj));
