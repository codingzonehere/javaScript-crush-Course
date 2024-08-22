var student = {id: 2204078, phone: 1317, name: "Tanvir"};
var student2 = {id: 2204079, phone: 1318, name: "Mim"};
// key and value pair.................

console.log(student);
console.log(student2);
//var phoneNum = student.id;
//var phoneNum = student["id"];

var phoneProName = "phone";
var phoneNum1 = student.phone;
var phoneNum2 = student["phone"];

var phoneNum3 = student[phoneProName];

student2.phone = 34424;
student2["phone"] = 5454;
student2[phoneProName] = 453;
console.log(phoneNum1);
console.log(student2);