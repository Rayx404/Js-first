const score = 400
console.log(score);


const balance = new Number(100)     //  output:-  [Number: 100] because iska datatype Number hmlog pre save kiye hai 
console.log(balance)                //             hmlog ko number hi chaiye

console.log(balance.toString());    // 100 number datatype ko string mai convert kr diya

console.log(balance.toString().length)      // 3   string mai change kr ke string ka properties laga sakte hai

const money = new Number("OneHundred")
console.log(money)                  // NaN

const money1 = new Number("twohundred")
console.log(money1.toString());     //NaN


const points = new Number(100)     // .toFixed() return string
console.log(points.toFixed(2))    // 100.00 added two zeros after 100; .toFixed() is used while making ecommerce website


const newNum = 23.8966                  // .toPrecision() returns string
console.log(newNum.toPrecision(2));     // 24  this method round off the number 
console.log(newNum.toPrecision(4));     // 23.90
console.log(newNum.toPrecision(1));     // 2e+1 it gives in exponiential form

const values = 1000000000000000
console.log(values.toLocaleString());            // print output in US standards => 1,000,000,000,000,000
console.log(values.toLocaleString('en-IN'));     // print output in Indian standards => 1,00,00,00,00,00,00,000


// MAX VALUE AND MIN VALUE

Number.MAX_VALUE    // The largest number that can be represented in JavaScript. Equal to approximately 1.79E+308.

Number.MIN_VALUE   //The closest number to zero that can be represented in JavaScript. Equal to approximately 5.00E-324.

Number.MAX_SAFE_INTEGER   // The value of the largest integer n such that n and n + 1 are both exactly representable as a Number value. The value of Number.MAX_SAFE_INTEGER is 9007199254740991 2^53 − 1.

Number.EPSILON  //The value of Number.EPSILON is the difference between 1 and the smallest value greater than 1 that is representable as a Number value, which is approximately: 2.2204460492503130808472633361816 x 10‍−‍16.

Number.POSITIVE_INFINITY   // A value greater than the largest number that can be represented in JavaScript. JavaScript displays POSITIVE_INFINITY values as infinity.

Number.NEGATIVE_INFINITY //A value that is less than the largest negative number that can be represented in JavaScript. JavaScript displays NEGATIVE_INFINITY values as -infinity.




//+++++++++++++++++++++++++++++++++++++       MATHS       ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math)       // it is a object with some properties like :- .PI , .SQRT , .abs , .SINE etc

console.log(Math.abs(-10));    // .abs() changes the negative value to positive eg=> 10

console.log(Math.round(4.55));  // 5

console.log(Math.round(4.44));  // 4

console.log(Math.ceil(4.1));    // 5 because in .ceil()  property it round off to the higher value

console.log(Math.floor(4.99))   // 4 becaues in .floor() property it round off to the lower value


console.log(Math.sqrt(99));       // 9.9498743710662

console.log(Math.min(4,3,8,9,10));      // .min() help to find the lowest number in an array => 3
console.log(Math.max(4,3,8,9,10));      // .max() help to find the highest number in an array => 10


console.log(Math.random());     // gives and number between 1 and 0. It is used to make dice game.
console.log(Math.random()*10);

console.log(Math.floor(Math.random()*10) + 1)

// dice game

const min = 1
const max = 6 
console.log(Math.floor(Math.random()*(max-min + 1)) + min);      // this formula is very important 

// random

const high = 20
const low = 10
console.log(Math.floor(Math.random()*(high-low + 1)) + low);    // this formula is very important





