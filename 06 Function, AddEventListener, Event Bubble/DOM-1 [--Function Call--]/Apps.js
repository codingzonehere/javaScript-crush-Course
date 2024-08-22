// Function review...................
function explain_callback(name, age, task){
    console.log("Hello ", name);
    console.log("Age ", age);
    task();
}
function washHand(){
    console.log("You need to wash hand......");
}
function washBody(){
    console.log("You need to wash body......");
}
explain_callback("Tanvir", 23, washHand);
explain_callback("Tarek", 25, washBody);