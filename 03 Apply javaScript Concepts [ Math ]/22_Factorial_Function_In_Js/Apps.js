/*
0! = 1
2! = 1x2
3! = 1x2x3;
4! = 1x2x3x4;
5! = 1x2x3x4x5;
6! = (6-1)!*6;
*/
// Iterative methods............
var fact=1;
for(var i=5; i>=1; i--){
    fact *= i;
    console.log(i, fact); 
}
function factorial(n){
    if(n==0){
        return 1;
    }else{
        return n * factorial(n-1);
    }
}
var result = factorial(5);
console.log(result);
