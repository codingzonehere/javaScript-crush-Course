/*
F0 =0, F1 = 1;
Fn = Fn-1 + Fn-2

n>1
*/

/*
fibo[2] = fibo[2-1] + fibo[2-2];
fibo[3] = fibo[3-1] + fibo[3-2];
fibo[4] = fibo[4-1] + fibo[4-2];
fibo[5] = fibo[5-1] + fibo[5-2];
fibo[n] = fibo[n-1] + fibo[n-2];
*/
console.log("Function & Recursuion......");
function fibon(n){
    if(n==0){
        return [0];
    }
    if(n==1){
        return [0, 1];
    }
    else{
        var fibo = fibon(n-1);
        var nextValue  = fibo[n-1] + fibo[n-2];
        fibo.push(nextValue);
        return fibo;
    }
}
// Only one path....
var result = fibon(15);
console.log(result);