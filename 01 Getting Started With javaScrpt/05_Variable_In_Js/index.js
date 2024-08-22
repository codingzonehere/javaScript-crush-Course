var num1 = 15;
var num2 = 15.5;

console.log(num1 + num2);

// Typecasting.......... 
var num3 = 15;
var num4 = "15.5";

console.log(num3 + num4); // only stay one and another variable..
// Typecasting.........
console.log(parseFloat(num4) + num3);
console.log(parseInt(num4) + num3);

// shortcut...
num3 = +num4; //convert int
console.log(num3);

num3 = ' '+num4; //Convert string...
console.log(typeof num3);


var total = num1 + num2;
console.log(total.toFixed(5));