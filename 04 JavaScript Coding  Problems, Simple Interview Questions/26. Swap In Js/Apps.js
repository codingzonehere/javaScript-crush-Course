var a = 10;
var b = 15;
//console.log("Before swap: a = ",a, "; b = ", b);
var tmp = a;
a = b;
b = tmp;
//console.log("After swap: a = ",a, "; b = ", b);

//Without tem....
var x = 10;
var y = 15;
x = x + y;
y = x - y;
x = x - y;
console.log("After swap: x = ",x, "; y = ", y);

// With Js..................
var p = 10;
var q = 15;
[p, q] = [q, p];
console.log("After swap: p = ",p, "; q = ", q);