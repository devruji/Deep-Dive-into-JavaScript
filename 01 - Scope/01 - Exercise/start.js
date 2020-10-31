// 1. How many execution contexts do we have? -> 2
// 2. Guess the result of the code snippet
// 3. Correct the code snippet to print out "Ironman" and "Thor" respectively

// [Global - Scope]
var heroName = "Thor";

function marvel() {
  if (heroName.length < 5) {
    heroNameInner = "Ironman";
    console.log("In function hero name", heroNameInner);
  }

}

// [Marvel Execution Context]
marvel();

// [Global - Scope]
console.log("Outside function hero name", heroName);

//////////////// Method 2 ////////////////////

// [Global - Scope]
var heroName = "Thor";

function marvel() {
  if (heroName.length < 5) {
    let heroName = "Ironman";
    console.log("In function hero name", heroName);
  }

}

// [Marvel Execution Context]
marvel();

// [Global - Scope]
console.log("Outside function hero name", heroName);
