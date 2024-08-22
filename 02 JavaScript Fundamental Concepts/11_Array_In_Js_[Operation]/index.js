var personAge = [10, 20, 30, 40, 50];
var valueAge = personAge[2];
console.log(valueAge);

//update value..........
personAge[2] = 500;
var valueAge = personAge[2];
console.log(valueAge);

// Index of..............
console.log(personAge.indexOf(54)); //return -1
var position =  personAge.indexOf(10);
console.log(position); //return -1

//Lenght, push, pop........
console.log(personAge.length);
personAge.push(15);
personAge.push(20);
console.log(personAge);
personAge.pop();
console.log(personAge);

console.log(personAge.length);