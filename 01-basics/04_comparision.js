// console.log(2 > 1)
// console.log(2 >= 1)
//console.log(2 != 1)
//console.log(2 == 1)

console.log("2" == 1)

console.log("2" > "abc")

console.log("2" === 2)

console.log("2" == 2)

// more example and summed up lesson 

console.log(2 > 1)      // true
console.log(2 >= 1)     // true
console.log(2 == 1);    // false
console.log(2 != 1);    // true

console.log("2" > 1);   // true
console.log("02" < 1)   // false

// to compare two values the datatypes should be same 


console.log(null > 0);      // false
console.log(null == 0)      // false
console.log(null >= 0);     // true
console.log(null < 0);      // false
console.log(null <= 0)      // true

// the reason is that an equality check (==) and the comparision check (> < >= <=) works differently.
// comparision converts null to a number, trerating it as 0.
// thats why on (3 & 5) null >= 0 & null <= 0 is true and on (1 & 4) null > 0 & null < 0 is false

// same things  happens under undefined 


// strict check ===

console.log("2" == 2);  // true

console.log("2" === 2);  // false

// === checks values as well as datatypes 

