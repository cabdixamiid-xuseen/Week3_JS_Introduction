// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1, mmelloy0@psu.edu, Mitzi, F
// 2, kdiben1@tinypic.com, Kennan, M
// 3, kmummery2@wikimedia.org, Keven, M
// 4, gmartinson3@illinois.edu, Gannie, M
// 5, adaine5@samsung.com, Antonietta, F

// Example format of an intern object: 1, examples@you.edu, Example, F
const example = {
  id: 0,
  name: "Example",
  email: "examples@you.edu",
  gender: "F",
}

// Write your intern objects here:
const p1 = {
  id: 2300,
  name: "mitzi",
  email: "mmelloy0@psu.edu",
  gender: "F",
}
var p2 = {
  id: 2301,
  name: "kennan",
  email: "kdiben1@tinypic.com",
  gender: "m",
}
const p3 = {
  id: 2302,
  name: "kevin",
  email: "kmummery2@wikimedia.org",
  gender: "m",
}
const p4 = {
  id: 2303,
  name: "Gannie",
  email: "gmartinson3@illinois",
  gender: "m",
}
var p5 = {
  id: 2304,
  name: "Antonietta",
  email: "adaine5@samsung.com",
  gender: "F",
}



// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
console.log(p1.name)

// Kennan's ID
console.log(p2.id)

// Keven's email
console.log(p3.email)

// Gannie's name
console.log(p4.name)

// Antonietta's Gender
console.log(p5.gender)

// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
// console.log(kennan.speak());
var p2 = {
  id: 2301,
  name: "kennan",
  email: "kdiben1@tinypic.com",
  gender: "m",
  profile: function () {
    return `hello, my name is ${this.name}`
    
    
  }
 
}
console.log(p2.profile())

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
//console.log(antonietta.multiplyNums(3,4));
var p5 = {
  id: 2304,
  name: "Antonietta",
  email: "adaine5@samsung.com",
  gender: "F",
  xisaabin:function product(nom1,nom2){
    return nom1*nom2
  }
  

    

  
  
}
console.log(p5.xisaabin(3,4))


// === Great work! === Head over to the the arrays.js. You may come back and attempt the Stretch Challenge once you have completed the challenges in arrays.js and function-conversion.js.
