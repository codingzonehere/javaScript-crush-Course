var personAge = [10, 20, 30, 40, 50];
var valueAge = personAge[2];
console.log(valueAge);

//update value..........
personAge[2] = "Tanvir";
var valueAge = personAge[2];
console.log(valueAge);

// Index of..............
console.log(personAge.indexOf(54)); //return -1
var position =  personAge.indexOf(10);
console.log(position); //return -1