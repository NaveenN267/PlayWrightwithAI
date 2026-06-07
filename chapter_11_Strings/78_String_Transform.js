let str = " Hello, world ";

console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.trim());
console.log(str.trimEnd());
console.log(str.trimStart());

let msg = "Pass, Fail, Retry, Fail";
console.log(msg.replace("Pass", "Fail"));
console.log(msg.replaceAll("Fail", "disti"))
console.log(msg.replace(/Fail/, "Pass"));

// Concatination
console.log("Hello" + " " + "World");
console.log("Hello".concat("World"));
console.log(`${Hello} ${World}`);