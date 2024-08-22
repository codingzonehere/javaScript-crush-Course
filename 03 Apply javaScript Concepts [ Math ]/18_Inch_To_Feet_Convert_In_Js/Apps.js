/*
var inch = 545;
var ft = inch/12;
*/
function inchToFeet(inch){
    var ft = inch/12;
    return ft;
}
/*
var ft = inchToFeet(156);
console.log(ft);
var ft = inchToFeet(256);
console.log(ft);
*/

var inches = [156, 256, 356, 456, 556];
//var ft = inchToFeet(inches[3]);
for (var i =0; i < inches.length; i++) {
    const element = inchToFeet(inches[i]);
    console.log(element);
}
//console.log(ft);