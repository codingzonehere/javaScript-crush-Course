var nums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 10, 20, 30];
var uniqueName = [];

for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    var idx = uniqueName.indexOf(element);
    if(idx == -1){
        uniqueName.push(element)
    }
}
console.log(uniqueName);