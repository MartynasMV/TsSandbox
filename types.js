// I can compile via terminalwith command tsc types.ts but every change should be recompiled (manual work)
// instead better to run the compiler in watch mode with tsc types.ts -w
//each time I save file it will recompile to types.js . To stop the process: ^C
var myString;
myString = "Hello" + " " + "World";
var myString2;
myString2 = "Hello".slice(0, 3);
var myNum;
myNum = 3;
var myBoolean;
myBoolean = false;
var myVar; //can add any type
myVar = true;
var strArray;
strArray = ["red", "blue"];
//alternative way:
var strArray2;
strArray2 = ["a", "b", "c"];
var numArray;
numArray = [1, 2, 3];
//alternative way:
var numArray2;
numArray2 = [4, 5, 6];
var boolArray;
boolArray = [true, false];
//alternative way:
var boolArray2;
boolArray2 = [false, true];
var strNumTuple;
strNumTuple = ["aa", 1]; //it has to strictly match the pattern "1 string and 1 number"
var myVoid;
myVoid = null;
var myVoid2 = undefined;
var myNull = null;
var myUndefined = undefined;
console.log(myNum);
console.log(myString);
console.log(myBoolean);
console.log(myString2);
console.log(myVar);
console.log(strArray);
console.log(numArray);
console.log(boolArray);
console.log(strArray2);
console.log(numArray2);
console.log(boolArray2);
console.log(strNumTuple);
console.log(myVoid);
console.log(myVoid2);
console.log(myNull);
console.log(myUndefined);
