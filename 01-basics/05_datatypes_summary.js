// primitive datatypes 

// types :- String, number, Boolean, Null, Undefined, Symbol, BigInt


// number
const score = 100
const scoreValue = 100.676
console.log(typeof scoreValue)

// boolean, null and undefined
const isLoggedIn = false

const outsideTemp = null
console.log(typeof outsideTemp);    // object


let userEmail;
console.log(typeof userEmail);

//Symbol
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);
console.log(id);


// BigInt
const bigNumber = 174734847838438438478545445545454n
console.log(typeof bigNumber)


// Reference Type (Non Primitive datatypes)

// types :- Array, Objects, Functions


// Array
const heros = ["Batman", "Superman", "Ironman"]
console.log(heros)

// object
let myObj = {
    name : "Rayx",
    age : 23,
}
console.log(myObj)

// Functions 
const myFunction = function(){
    console.log("Hello World");
    
}
console.log(typeof myFunction)      // typeof ==> function but it is call "object-function" 



// js is dynamically typed language

// In statically typed language, datatypes are defined during compile time and cannot change during runtime.

// In dynamically typed language, allows variables to change their datatypes during runtime. 


/*  Typeof Operator Result

        undefined ==> undefined
        Null      ==> Object
        Boolean   ==> Boolean
        Number    ==> Number
        String    ==> String
        Array     ==> Object
        Object    ==> Object
        Function  ==> Object-Function

*/


// Memory in JavaScript :-

// Stack Memory:- Used in Primitive datatypes. In stack memory we get the copy of the variable.

// Heap Memory :- Used in Non Primitive datatypes. In heap Memory we get the reference of the value.
