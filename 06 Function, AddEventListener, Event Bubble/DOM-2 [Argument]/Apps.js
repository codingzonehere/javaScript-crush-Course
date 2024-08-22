// Function review...................
function FindOutSum(num1, num2){
    // Array like object..............
    //console.log(arguments[3]);
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        sum += element;
        console.log(element);
    }
    //console.log(sum);
    return sum;
}
let calfun =  FindOutSum(1, 2, 3, 4, 5, 6);
console.log(calfun);