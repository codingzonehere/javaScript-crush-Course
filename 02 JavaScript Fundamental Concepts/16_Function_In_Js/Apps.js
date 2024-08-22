function mylove(){
    console.log("I love you...");
    console.log("You are my love..........");
    console.log("Luck number: ", 50);
}
 mylove();

 function choiceNum(num){
    console.log(num * 5);
}
choiceNum(50);

function choiceNums(num){
    return num * 5;
}
var first = choiceNums(50);
var second = choiceNums(50);
var total = first + second;
console.log(first, second + " : ", total);