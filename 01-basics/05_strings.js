
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
