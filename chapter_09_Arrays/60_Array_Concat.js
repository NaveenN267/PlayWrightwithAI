let score = [11, 12, 14, 25, 16]
let result = [9, 15, 14, 25, 18]

//let fina = score + result;

let fina = score.concat(result);// concat is used to combine the two arrays
console.log(fina);

//spread concatination(...a)
let spread = [...score, ...result]; // this is another way to concat the two arrays
console.log(spread);

let joi = score.join(" | ") // join is used to inset any thing in between array values
console.log(joi);

// to check is this array or not
let arr = Array.isArray(result);
console.log(arr);

// to check all the elements above array will retun true or else false
//let result = [17, 15, 14, 25, 18]
let ever = result.every(s => s >= 10);//true
console.log(ever);

let eve = result.every(s => s >= 20);//false
console.log(eve);

//At least one element 
let atleast = score.some(s => s < 10);// false
console.log(atleast);

let atleas = result.some(s => s < 10);// true
console.log(atleas);