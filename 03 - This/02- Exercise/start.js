// 1. What would be the value of "this" defined in the attack functions (both ironMan and antMan)?
// 2. Correct the antMan object to print out its context

const ironMan = {
  name: 'Ironman',
  attack() {
    console.log(this);
  }
};

const antMan = {
  name: 'Antman',
  attack() {
    return function () {
      console.log(this);
    };
  }
};

ironMan.attack();
antMan.attack().bind(antMan)();

const antMan2 = {
  name: 'Antman',
  attack() {
    return function () {
      console.log(this);
    }.bind(this);
  }
};

antMan2.attack()();

const antMan3 = {
  name: 'Antman',
  attack() {
    return function () {
      console.log(this);
    };
  }
};

var antMan4 = antMan3.attack();
antMan4.call(antMan3)