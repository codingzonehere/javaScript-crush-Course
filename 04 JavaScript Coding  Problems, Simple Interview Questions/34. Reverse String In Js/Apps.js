function reverseString(str){
    var revStr = "";
    for (let i = 0; i < str.length; i++) {
        var char = str[i];
        revStr = char + revStr;
    }
    return revStr;
}
var spech = "Bangladesh is a small counter with large problem.";
var forRev = reverseString(spech); 
console.log(forRev);