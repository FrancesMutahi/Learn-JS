// (var), let - you can reassign values, const = cannot reassign. Always use const unless you know you are going to reuse the values

//let age = 30;
//age = 31 //this is reassigning

//console.log(age);


//datatypes: strings, numbers, boolen, null, undefined, symbols

//const name = 'Frances' //you can use single or double quotes. semi-colon is optional
//const age = 24;
//const rating = 4.5 //this datatype is just a number
//const isCool = true
//const x = null
//const y = undefined //undefined can be explicitly defined
//let z //undefined

//console.log(typeof z)

//Concantenation
//console.log('my name is '+ name + ' and I am' +age)

//Template string, use backticks(funny first key under escape)
//const hello = `my name is ${name} and I am ${age}`

//console.log(hello)

//string properties and methods

const s = 'Hello world!'

console.log(s.length) //a property does not have parenthesis
console.log(s.toUpperCase()) //a method has parenthesis.A method is a function associated with an object
console.log(s.substring(0, 5).toLowerCase()) //takes two indexes, start and finish
console.log(s.split(''))

