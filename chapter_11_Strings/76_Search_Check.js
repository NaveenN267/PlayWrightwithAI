let url = "https://naveen.annojiguda.namala.login.com";

console.log(url.includes("naveen"));
console.log(url.includes("Geeths"));

//Starts with /Ends with
console.log(url.startsWith("https"));
console.log(url.endsWith("naveen"));
console.log(url.includes("com"));

//index of
console.log(url.indexOf("l"));
console.log(url.lastIndexOf("m"));

console.log(url.indexOf("x"));

console.log(url.search(/login/)); // /regex/ -> means regular expression, this is nothing but a patrens
