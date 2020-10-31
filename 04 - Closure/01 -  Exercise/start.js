// 1. What would be the result of the code snippet?
// 2. Correct the code snippet to print out "Counter 1" and "Counter 2" respectively
// Bonus: Use the Closure concept to prevent the "counter" variable from polluting the global scope

var counter = 0;

function times() {
  counter += 1;
  console.log('Counter', counter);
}

times();
times();

/// Closure ///

function times() {
  let counter = 0
  return function () {
    counter += 1;
    console.log('Counter', counter);
  }
}

x = times();
x()
x()

