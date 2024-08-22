var marks = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var sum = 0;
for (var i = 0; i < marks.length; i++) {
    const element = marks[i];
    sum += element;
}
console.log("Summation of array value is: ", sum);

// With function..................
function getArraySum(num){
    var sum = 0;
    for (var i = 0; i < marks.length; i++) {
        const element = marks[i];
        sum += element;
    }
    return sum;
}
var marks = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var result = getArraySum(marks);
console.log("Summation of the array all value: ",result);

var result = getArraySum([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
console.log("Summation of the array all value: ",result);