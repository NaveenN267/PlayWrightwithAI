// backtick works for template literals and allows ${expression} interpolation; single and double quotes create plain strings
let name = "Naveen";
let backtick = `Hello ${name}`;
let single = 'Hello ${name}';
let double = "Hello ${name}";

console.log(backtick); // Hello Naveen
console.log(single);   // Hello ${name}
console.log(double);   // Hello ${name}
