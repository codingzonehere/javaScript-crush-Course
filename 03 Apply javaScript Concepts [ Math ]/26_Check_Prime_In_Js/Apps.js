function isPrime(n){
    for (var i = 2; i <= n-1; i++){
        //console.log(i, n % i);
        if(n % i == 0){
            return "Not a prime...!";
        }
    }
    return "Prime number...........";
}
var n = isPrime(19);
console.log(n);