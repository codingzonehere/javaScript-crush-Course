var num = 4.4231;
var result = Math.floor(num);
console.log(result);

var result = Math.ceil(num);
console.log(result);

var result = Math.round(num);
console.log(result);

var randomNum = Math.random() * 10; // 0-1 range...
var result = Math.round(randomNum);
console.log(result);

for (let i = 1; i <= 10; i++){
    var randomNum = Math.random() * 10; // 0-1 range...
    var result = Math.round(randomNum);
    console.log(result);
}