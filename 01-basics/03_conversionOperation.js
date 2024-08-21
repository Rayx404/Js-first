let score = "33abc"

console.log(typeof score);
console.log(score)

console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

// ** agar null value dal de to 0 aaiga
//** agar undefined dal de to NaN aai ga
// ** 33abc ka bhi NaN hai
// ** agar boolean vale hoti to true ka 1 and false ka 0 aata
// ** agar string hoti to vo number mai convert nahi ho sakti to NaN aaiga



let draws = 33
console.log(typeof draws)    // number
console.log(typeof(draws))   // number


let age = "55"
console.log(typeof age);    // string
console.log(typeof(age));   // string



let point = "abc"
let valueInNumbers = Number(point)     // ******* by using this we can change string to number  ********
console.log(typeof valueInNumbers);    // number


// more example

let name = "rayx"
let naam = Number(name)
console.log(typeof naam)    // Number

console.log(naam)    // NaN (Not A Number)  datatypes changes but value remain same 

/*

** when we convert string to number,  its datatypes changes to number but it value will be printed as Not a Number **** 

*/

/*
        conversion:- to number

        output value:-

        "33" => 33
        "33abc" => NaN
        true => 1
        false => 0
        null => 0
        undefined => NaN


        conversion:- to Boolean

        output value :-

        1 => true
        0 => false 
        " " => false
        "rayx" => true

*/


let value = 55
let stringValue = String(value)     // to change to string
console.log(stringValue)            // 55
console.log(typeof stringValue)     // string


let kill = 0
let booleanKill = Boolean (kill)        // to change to boolean
console.log(booleanKill)                // false
console.log(typeof booleanKill);        // boolean


let gf = "xyz"
let booleanGf = Boolean(gf)
console.log(booleanGf);         // true 
console.log(typeof booleanGf);  // boolean


// ********************************************OPERATION**********************************************************

console.log(2+2)
console.log(2-2);
console.log(2*2);
console.log(2**3);  // 2 ka power 3 = 8
console.log(2/4);
console.log(2%3);


let marks = 14
let negmarks = -marks
console.log(negmarks);
console.log(typeof negmarks);

let str1 = "hello "
let str2 = "rayx"
let str3 = str1 + str2
console.log(str3)


console.log(2 + 3)              // 5 
console.log("2" + 3)            // 23
console.log(2 + "3")            // 23
console.log(1 + "2" + 3)        // 123
console.log(1 + 2 + "3")        // 33
console.log("1" + 2 + 3)        // 123

// prefix and postfix

let gameCounter =100
++gameCounter;
console.log(gameCounter);

gameCounter++;
console.log(gameCounter);

