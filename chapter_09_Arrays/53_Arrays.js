// What is an array -> An ordered collection of values stored under 
//                     a single variable name

//Lets create a array
let arry = []; // it's empty array
let fruits = ["apple", "banana", "mango"]; //index starts with '0' And length is 3
console.log(fruits[2]);
let num = [2, 3, 5, 4, 6] // index 0-4 and length 5
console.log(num[4]);
console.log(num[6]);// undefined


// we can also crete an array as below types
let arr = new Array(2);
arr[0] = 1;
arr[1] = 5;
arr[2] = 7;
arr[3] = 7;
console.log(arr);

let score = new Array(1, 2, 3,)
console.log(score);

let newType = Array.of(1, 2, 3, 4, 5, 6)
console.log(newType);

let chare = Array.from("Naveen")
console.log(chare);


let mixed = [1, "Naveen", true, null] // JS can hold any type of data
console.log(mixed[0]);