var car = ["HERO", "TOYOTA",  "BMW",  "AUDI"];

//First element.........pop.
car.shift();
console.log(car);
car.unshift("TANVIR");
console.log(car);

//Slice an array..................! Array not change...........!
var part = car.slice(2, 4); //splice
console.log(part);
console.log(car);