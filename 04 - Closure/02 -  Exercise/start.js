// 1. Refactor the code snippet to create stateful functions using the closure concept

function addNumber() {
  function addFive(a) {
    return a + 5;
  }

  function addTen(a) {
    return a + 10;
  }
  return { addFive, addTen }
}

x = addNumber()

console.log('Add Five', x.addFive(10));
console.log('Add Ten', x.addTen(10));

function createNum(x) {
  return (y) => {
    return x + y
  }
}

const addFive = createNum(5)
const addTen = createNum(10)

console.log('Add Five', addFive(10))
console.log('Add Ten', addTen(10))