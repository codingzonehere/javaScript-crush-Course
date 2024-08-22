const year = 1700;
const reminder = year % 4;
if(reminder == 0){
    console.log("Your year is leap year.....!");
}
else{
    console.log("Your year is not leap year.....!");
}

//Use function...................!
function IsLeapYear(year){
    const reminder = year % 4;
    if(reminder == 0){
        return true;
    }
    else{
        return false;
    }
}
const is2000LeapYear = IsLeapYear(year);
console.log(is2000LeapYear);

// Try to do finish....