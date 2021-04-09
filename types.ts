// I can compile via terminalwith command tsc types.ts but every change should be recompiled (manual work)
// instead better to run the compiler in watch mode with tsc types.ts -w
//each time I save file it will recompile to types.js . To stop the process press: ^C

var myString: string;
myString = "Hello" + " " + "World";

var myString2: string;
myString2 = "Hello".slice(0, 3);

var myNum: number;
myNum = 3;

var myBoolean: boolean;
myBoolean = false;

var myVar: any; //can add any type
myVar = true;

var strArray: string[];
strArray = ["red", "blue"];
//alternative way:
var strArray2: Array<string>;
strArray2 = ["a", "b", "c"];

var numArray: number[];
numArray = [1, 2, 3];
//alternative way:
var numArray2: Array<number>;
numArray2 = [4, 5, 6];

var boolArray: boolean[];
boolArray = [true, false];
//alternative way:
var boolArray2: Array<boolean>;
boolArray2 = [false, true];

var strNumTuple: [string, number];
strNumTuple = ["aa", 1]; //it has to strictly match the pattern "1 string and 1 number"

var myVoid: void;
myVoid = null;
var myVoid2: void = undefined;
var myNull: null = null;
var myUndefined: undefined = undefined;

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
