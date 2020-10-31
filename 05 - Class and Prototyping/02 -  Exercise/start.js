// 1. Extend the Array.prototype to have the sayHello method that loop through the array elements and print out:
// Hello Antman
// Hello Ironman
// Hello Thor
// Hello Spiderman

Array.prototype.sayHello = () => {
    this.forEach(heroName => console.log(heroName));
}
console.log(this)

const heroNames = ['Antman', 'Ironman', 'Thor', 'Spiderman'];
heroNames.sayHello();
