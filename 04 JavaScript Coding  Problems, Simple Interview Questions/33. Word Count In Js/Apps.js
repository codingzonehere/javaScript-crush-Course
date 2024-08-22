var spech = "Bangladesh is a small counter with large problem.";
//console.log(spech.length);
var counter = 0;
for (var i = 0; i < spech.length; i++) {
    var char = spech[i];
    //console.log(char);
    if(char == " "  &&  spech[i-1] != " "){
        counter++;
    }
}
counter++;
console.log(counter);