
const name = "Rayyan"
const repoCount = 50

console.log(`Hello My name is ${name} and my repo count is ${repoCount}`)

const gamename = new String('Rayyan')

console.log(gamename[0])
console.log(gamename.__proto__)

console.log(gamename.length)
console.log(gamename.toUpperCase())
console.log(gamename.charAt(4))
console.log(gamename.indexOf('y'))

const newString = gamename.substring(0,4)
console.log(newString)

const anotherString = gamename.slice(-5, 4)
console.log(anotherString);




// my note   :

const gameName1 = "rayx "

const kills =  50

console.log(gameName1 + kills + " Value")        // not a proper syntax

console.log(`Hello my name is ${gameName1} and my repo count is ${kills}`)  // proper way known as string interpolation


const fatherName = "Anwar Alam"

console.log(`My father's name is ${fatherName.toUpperCase()}`);

// .toUpperCase is a method used to upper case the value stored 


const className = new String('Rayyan')

console.log(className[1]);

console.log(className.__proto__);

console.log(className.length)

console.log(className.charAt(4));

console.log(className.indexOf('y'));

// to delete character

const deleteName = className.substring(0, 4)        //Rayy
console.log(deleteName)

const del2Name = className.slice(0, 4)              //Rayy (we can use negative value)
console.log(del2Name);

// example of negative in slice

const del3Name = className.slice(-6, 3)              // Ray
console.log(del3Name)


const del4Name = className.slice(1, 3)              //ay
console.log(del4Name)

// in .slice we can use negative values but in substring negative values are ignored eg :-

const del5Name = className.substring(1, 4)      //ayy
console.log(del5Name)

const del6Name = className.substring(-1, 4)     //Rayy because -1 is treated as 0 therefore it starts from R
console.log(del6Name);



/* 
Differences between substring() and slice()
If either or both of the arguments are negative or NaN , the substring() method treats them as if they were 0 . slice() also treats NaN arguments as 0 , but when it is given negative values it counts backwards from the end of the string to find the indexes.
*/

const xyz = "           rayx            "
console.log(xyz);                           //              rayx                
console.log(xyz.trim());                    //rayx     

// .trim() is used to remove spaces from the string


const link = "https://rayyan.com/rayyan%20anwar"
console.log(link.replace('%20' , '-'));         //https://rayyan.com/rayyan-anwar      


console.log(link.includes('rayyan'))        //true

console.log(link.includes('Rayyan'))        //false

// .include() gives value in boolean (true or false)


// convert string into array:- 

const newArray = new String('rayyan-anwar-aka-rayx')        //[ 'rayyan', 'anwar', 'aka', 'rayx' ]
console.log(newArray.split('-'))

const newArray1 = new String("The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.")
console.log(newArray1.split(' '));


