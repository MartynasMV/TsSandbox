function getSum(num1: number, num2: number): number {
  return num1 + num2;
}
/* console.log(getSum("hell", 3));//it will give an error as hell is a string and getSum excpects a number */

var mySum = function (num1: number, num2: any): number {
  if (typeof num1 == "string") {
    num1 = parseInt(num1);
  }
  if (typeof num2 == "string") {
    num2 = parseInt(num2);
  }
  return num1 + num2;
};
//console.log(mySum("1", "5"));

function getName(firstName: string, lastName?: string): string {
  //lastName?: string makes second input optional
  if (lastName == undefined) {
    return firstName;
  }
  return firstName + " " + lastName;
}
//console.log(getName("Martynas", "Voldemaras"));

function myVoid(): void {
  return;
}
