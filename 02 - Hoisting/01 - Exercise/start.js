// 1. What will be hoisted?
// 2. Guess the result of the code snippet
// 3. Correct the code snippet to print out "Ironman" and "Thor" respectively

//1 - Assign new value to function scope
//Scope chain
let hero = 'Ironman';

const updateHero = function () {

  console.log(`Hero before updating: ${hero}`);

  hero = 'Thor';
  console.log(`Hero after updating: ${hero}`);
};

updateHero();

// //2 - Pass argument to function
// hero = 'Ironman';

// const updateHero = function (hero) {

//   console.log(`Hero before updating: ${hero}`);

//   var hero = 'Thor';
//   console.log(`Hero after updating: ${hero}`);
// };

// updateHero(hero);

// //3 - This
// hero = 'Ironman';

// const updateHero = function () {

//   console.log(`Hero before updating: ${this.hero}`);

//   var hero = 'Thor';
//   console.log(`Hero after updating: ${hero}`);
// };

// updateHero(hero);