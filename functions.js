function getSum(num1, num2) {
    return num1 + num2;
}
/* console.log(getSum("hell", 3));//it will give an error as hell is a string and getSum excpects a number */
var mySum = function (num1, num2) {
    if (typeof num1 == "string") {
        num1 = parseInt(num1);
    }
    if (typeof num2 == "string") {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
//console.log(mySum("1", "5"));
function getName(firstName, lastName) {
    //lastName?: string makes second input optional
    if (lastName == undefined) {
        return firstName;
    }
    return firstName + " " + lastName;
}
//console.log(getName("Martynas", "Voldemaras"));
function myVoid() {
    return;
}
